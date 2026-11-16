-- Reporting layer, plus two fixes to the core:
--   1. Events can reach the database out of order (the site forwards them
--      after responding). A visit's source must come from its EARLIEST event,
--      whichever arrives first.
--   2. Topics get a kind (content / product / generic) so a lead's topic
--      prefers the article that drew them over the page the button sat on.

-- ---------------------------------------------------------------------------
-- Topic kinds
-- ---------------------------------------------------------------------------
alter table analytics.page_topics
  add column if not exists kind text not null default 'content'
  check (kind in ('content', 'product', 'generic'));

update analytics.page_topics set kind = 'generic' where is_generic;
update analytics.page_topics set kind = 'product'
where pattern in ('/food-labeling', '/recipe-management', '/cost-tracking');

create or replace function analytics.topic_kind(p_topic text)
returns text language sql stable set search_path = '' as $$
  select coalesce(
    (select t.kind from analytics.page_topics t where t.topic = p_topic
     order by case t.kind when 'content' then 1 when 'product' then 2 else 3 end limit 1),
    'generic')
$$;

-- Topic for a lead: the article they booked from, else the article they landed
-- on, else the product page, else whatever generic page we know.
create or replace function analytics.lead_topic(p_booked_from text, p_landing text)
returns text language sql stable set search_path = '' as $$
  with t as (
    select analytics.topic_for_path(p_booked_from) as tb, analytics.topic_for_path(p_landing) as tl
  )
  select case
    when tb is not null and analytics.topic_kind(tb) = 'content' then tb
    when tl is not null and analytics.topic_kind(tl) = 'content' then tl
    when tb is not null and analytics.topic_kind(tb) = 'product' then tb
    when tl is not null and analytics.topic_kind(tl) = 'product' then tl
    else coalesce(tb, tl)
  end
  from t
$$;

create or replace function analytics.is_production_host(p_host text)
returns boolean language sql immutable set search_path = '' as $$
  select coalesce(p_host, '') ~ '(^|\.)recipebuilder\.co$' and coalesce(p_host, '') !~ '^app\.'
$$;

-- ---------------------------------------------------------------------------
-- Ingest, order-independent
-- ---------------------------------------------------------------------------
create or replace function analytics.ingest(p jsonb)
returns jsonb
language plpgsql security definer set search_path = '' as $$
declare
  v_host text := left(lower(coalesce(p ->> 'host', '')), 120);
  v_vid uuid;
  v_sid text := nullif(left(coalesce(p ->> 'sid', ''), 64), '');
  v_internal boolean := coalesce(p ->> 'internal', '') = 'true';
  v_ctx jsonb := case when jsonb_typeof(p -> 'ctx') = 'object' then p -> 'ctx' else '{}'::jsonb end;
  e jsonb;
  v_name text;
  v_ts timestamptz;
  v_path text;
  v_ref text;
  v_ref_host text;
  v_q jsonb;
  v_props jsonb;
  v_channel text;
  v_source text;
  v_paid boolean;
  v_engaged bigint;
  v_click_ids jsonb;
  v_n int := 0;
begin
  if coalesce(p ->> 'vid', '') ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' then
    v_vid := (p ->> 'vid')::uuid;
  end if;
  if jsonb_typeof(p -> 'events') is distinct from 'array' then
    return jsonb_build_object('ok', false, 'error', 'events must be an array');
  end if;

  for e in select value from jsonb_array_elements(p -> 'events') limit 20 loop
    v_name := e ->> 'name';
    if v_name is null or v_name !~ '^[a-z][a-z0-9_]{1,39}$' then
      continue;
    end if;

    v_ts := case when coalesce(e ->> 'ts', '') ~ '^[0-9]{12,14}$'
                 then to_timestamp((e ->> 'ts')::bigint / 1000.0) else now() end;
    if v_ts > now() + interval '5 minutes' or v_ts < now() - interval '2 days' then
      v_ts := now();
    end if;

    v_path := left(coalesce(e ->> 'path', ''), 500);
    v_ref := nullif(left(coalesce(e ->> 'referrer', ''), 500), '');
    v_ref_host := nullif(left(lower(coalesce(e ->> 'referrer_host', '')), 200), '');
    v_q := case when jsonb_typeof(e -> 'query') = 'object' then e -> 'query' else '{}'::jsonb end;
    v_props := case when jsonb_typeof(e -> 'props') = 'object' and length((e -> 'props')::text) <= 4000
                    then e -> 'props' else '{}'::jsonb end;

    if v_name = 'ai_fetch' then
      insert into analytics.ai_fetches (ts, bot, operator, kind, host, path, query, ua, country)
      values (
        v_ts,
        left(coalesce(v_props ->> 'bot', 'unknown'), 60),
        left(v_props ->> 'operator', 40),
        left(coalesce(v_props ->> 'kind', 'unknown'), 20),
        v_host,
        coalesce(analytics.normalize_path(v_path), '/'),
        nullif(left(coalesce(v_props ->> 'query', ''), 300), ''),
        left(v_ctx ->> 'ua', 400),
        nullif(left(coalesce(v_ctx ->> 'country', ''), 2), '')
      );
      v_n := v_n + 1;
      continue;
    end if;

    v_paid := coalesce(v_q ->> 'gclid', v_q ->> 'gbraid', v_q ->> 'wbraid', v_q ->> 'msclkid') is not null;
    select c.channel, c.source into v_channel, v_source
    from analytics.classify_channel(v_ref_host, v_q ->> 'utm_source', v_q ->> 'utm_medium', v_paid) c;
    v_click_ids := nullif(jsonb_strip_nulls(jsonb_build_object(
      'gbraid', v_q ->> 'gbraid', 'wbraid', v_q ->> 'wbraid',
      'msclkid', v_q ->> 'msclkid', 'fbclid', v_q ->> 'fbclid')), '{}'::jsonb);

    if v_vid is not null then
      insert into analytics.visitors as v (
        visitor_id, first_seen_at, last_seen_at, first_session_id, first_host, first_landing_path,
        first_referrer, first_referrer_host, first_channel, first_source, first_medium,
        first_campaign, first_term, first_content, first_gclid, first_click_ids,
        first_country, first_city, first_device, is_internal)
      values (
        v_vid, v_ts, v_ts, v_sid, v_host, analytics.normalize_path(v_path),
        v_ref, v_ref_host, v_channel, v_source, left(v_q ->> 'utm_medium', 100),
        left(v_q ->> 'utm_campaign', 200), left(v_q ->> 'utm_term', 200), left(v_q ->> 'utm_content', 200),
        left(v_q ->> 'gclid', 300), v_click_ids,
        nullif(left(coalesce(v_ctx ->> 'country', ''), 2), ''), nullif(left(coalesce(v_ctx ->> 'city', ''), 100), ''),
        left(v_ctx ->> 'device', 20), v_internal)
      on conflict (visitor_id) do update set
        last_seen_at = greatest(v.last_seen_at, excluded.last_seen_at),
        is_internal = v.is_internal or excluded.is_internal,
        first_country = coalesce(v.first_country, excluded.first_country),
        first_city = coalesce(v.first_city, excluded.first_city),
        first_device = coalesce(v.first_device, excluded.first_device),
        -- First touch = the earliest event, even if it arrives second.
        first_seen_at = least(v.first_seen_at, excluded.first_seen_at),
        first_session_id = case when excluded.first_seen_at < v.first_seen_at then excluded.first_session_id else v.first_session_id end,
        first_host = case when excluded.first_seen_at < v.first_seen_at then excluded.first_host else v.first_host end,
        first_landing_path = case when excluded.first_seen_at < v.first_seen_at then excluded.first_landing_path else v.first_landing_path end,
        first_referrer = case when excluded.first_seen_at < v.first_seen_at then excluded.first_referrer else v.first_referrer end,
        first_referrer_host = case when excluded.first_seen_at < v.first_seen_at then excluded.first_referrer_host else v.first_referrer_host end,
        first_channel = case when excluded.first_seen_at < v.first_seen_at then excluded.first_channel else v.first_channel end,
        first_source = case when excluded.first_seen_at < v.first_seen_at then excluded.first_source else v.first_source end,
        first_medium = case when excluded.first_seen_at < v.first_seen_at then excluded.first_medium else v.first_medium end,
        first_campaign = case when excluded.first_seen_at < v.first_seen_at then excluded.first_campaign else v.first_campaign end,
        first_term = case when excluded.first_seen_at < v.first_seen_at then excluded.first_term else v.first_term end,
        first_content = case when excluded.first_seen_at < v.first_seen_at then excluded.first_content else v.first_content end,
        first_gclid = case when excluded.first_seen_at < v.first_seen_at then excluded.first_gclid else v.first_gclid end,
        first_click_ids = case when excluded.first_seen_at < v.first_seen_at then excluded.first_click_ids else v.first_click_ids end;
    end if;

    if v_sid is not null then
      v_engaged := case when v_name = 'page_leave' and coalesce(v_props ->> 'engaged_ms', '') ~ '^[0-9]{1,8}$'
                        then least((v_props ->> 'engaged_ms')::bigint, 1800000) else 0 end;
      insert into analytics.sessions as s (
        session_id, visitor_id, started_at, last_event_at, host, landing_path, landing_query,
        referrer, referrer_host, channel, source, medium, campaign, term, content, gclid, click_ids,
        country, region, city, device, browser, os, ua, lang, tz, screen_w,
        pageviews, events, engaged_ms, is_internal)
      values (
        v_sid, v_vid, v_ts, v_ts, v_host, analytics.normalize_path(v_path),
        nullif(left(coalesce(e ->> 'search', ''), 500), ''),
        v_ref, v_ref_host, v_channel, v_source, left(v_q ->> 'utm_medium', 100),
        left(v_q ->> 'utm_campaign', 200), left(v_q ->> 'utm_term', 200), left(v_q ->> 'utm_content', 200),
        left(v_q ->> 'gclid', 300), v_click_ids,
        nullif(left(coalesce(v_ctx ->> 'country', ''), 2), ''), nullif(left(coalesce(v_ctx ->> 'region', ''), 100), ''),
        nullif(left(coalesce(v_ctx ->> 'city', ''), 100), ''),
        left(v_ctx ->> 'device', 20), left(v_ctx ->> 'browser', 40), left(v_ctx ->> 'os', 40),
        left(v_ctx ->> 'ua', 400), left(v_ctx ->> 'lang', 20), left(v_ctx ->> 'tz', 60),
        case when coalesce(v_ctx ->> 'screen_w', '') ~ '^[0-9]{2,5}$' then (v_ctx ->> 'screen_w')::int end,
        case when v_name = 'page_view' then 1 else 0 end, 1, v_engaged, v_internal)
      on conflict (session_id) do update set
        last_event_at = greatest(s.last_event_at, excluded.last_event_at),
        visitor_id = coalesce(s.visitor_id, excluded.visitor_id),
        pageviews = s.pageviews + excluded.pageviews,
        events = s.events + 1,
        engaged_ms = s.engaged_ms + excluded.engaged_ms,
        is_internal = s.is_internal or excluded.is_internal,
        country = coalesce(s.country, excluded.country),
        region = coalesce(s.region, excluded.region),
        city = coalesce(s.city, excluded.city),
        device = coalesce(s.device, excluded.device),
        browser = coalesce(s.browser, excluded.browser),
        os = coalesce(s.os, excluded.os),
        ua = coalesce(s.ua, excluded.ua),
        lang = coalesce(s.lang, excluded.lang),
        tz = coalesce(s.tz, excluded.tz),
        screen_w = coalesce(s.screen_w, excluded.screen_w),
        -- The session's source = its earliest event, even if it arrives second.
        started_at = least(s.started_at, excluded.started_at),
        landing_path = case when excluded.started_at < s.started_at then excluded.landing_path else s.landing_path end,
        landing_query = case when excluded.started_at < s.started_at then excluded.landing_query else s.landing_query end,
        referrer = case when excluded.started_at < s.started_at then excluded.referrer else s.referrer end,
        referrer_host = case when excluded.started_at < s.started_at then excluded.referrer_host else s.referrer_host end,
        channel = case when excluded.started_at < s.started_at then excluded.channel else s.channel end,
        source = case when excluded.started_at < s.started_at then excluded.source else s.source end,
        medium = case when excluded.started_at < s.started_at then excluded.medium else s.medium end,
        campaign = case when excluded.started_at < s.started_at then excluded.campaign else s.campaign end,
        term = case when excluded.started_at < s.started_at then excluded.term else s.term end,
        content = case when excluded.started_at < s.started_at then excluded.content else s.content end,
        gclid = case when excluded.started_at < s.started_at then excluded.gclid else s.gclid end,
        click_ids = case when excluded.started_at < s.started_at then excluded.click_ids else s.click_ids end;
    end if;

    insert into analytics.events (ts, name, visitor_id, session_id, host, path, title, referrer, props, country, is_internal)
    values (
      v_ts, v_name, v_vid, v_sid, v_host, analytics.normalize_path(v_path),
      left(e ->> 'title', 300), v_ref, v_props, nullif(left(coalesce(v_ctx ->> 'country', ''), 2), ''), v_internal);
    v_n := v_n + 1;
  end loop;

  return jsonb_build_object('ok', true, 'stored', v_n);
end
$$;

-- ---------------------------------------------------------------------------
-- resolve_booking: same as before, with the content-first topic rule
-- ---------------------------------------------------------------------------
create or replace function analytics.resolve_booking(p_uid text)
returns void
language plpgsql security definer set search_path = '' as $$
declare
  b analytics.bookings%rowtype;
  v analytics.visitors%rowtype;
  s analytics.sessions%rowtype;
  l analytics.leads%rowtype;
  v_ev_visitor uuid;
  v_ev_session text;
  v_ev_path text;
  v_ev_found boolean := false;
  v_vid uuid;
  v_sid text;
  v_booked_from text;
  v_landing text;
  v_channel text;
  v_source text;
  v_detail text;
  v_basis text;
  v_topic text;
  v_first_uid text;
begin
  select * into b from analytics.bookings where booking_uid = p_uid;
  if not found then
    return;
  end if;

  select e.visitor_id, e.session_id, e.path into v_ev_visitor, v_ev_session, v_ev_path
  from analytics.events e
  where e.name = 'demo_booked' and e.props ->> 'booking_uid' = p_uid
  order by e.ts
  limit 1;
  v_ev_found := found;

  v_vid := coalesce(b.visitor_id, v_ev_visitor);
  v_sid := coalesce(b.session_id, v_ev_session);
  v_booked_from := coalesce(b.booked_from_path, v_ev_path);

  if v_vid is not null then
    select * into v from analytics.visitors where visitor_id = v_vid;
  end if;
  if v_sid is not null then
    select * into s from analytics.sessions where session_id = v_sid;
  end if;

  v_landing := coalesce(v.first_landing_path, s.landing_path, b.landing_path);

  if v.visitor_id is not null then
    v_channel := v.first_channel;
    v_source := v.first_source;
    v_detail := coalesce(v.first_campaign, v.first_term);
    v_basis := 'visitor_first_touch';
  elsif s.session_id is not null then
    v_channel := s.channel;
    v_source := s.source;
    v_detail := coalesce(s.campaign, s.term);
    v_basis := 'visitor_first_touch';
  elsif b.utm ->> 'utm_source' is not null or b.gclid is not null then
    select c.channel, c.source into v_channel, v_source
    from analytics.classify_channel(null, b.utm ->> 'utm_source', b.utm ->> 'utm_medium', b.gclid is not null) c;
    v_detail := b.utm ->> 'utm_campaign';
    v_basis := 'booking_utm';
  else
    v_channel := 'unknown';
    v_source := null;
    v_basis := case when v_booked_from is not null then 'link_stamp' else 'none' end;
  end if;

  update analytics.bookings set
    visitor_id = v_vid,
    session_id = v_sid,
    booked_from_path = v_booked_from,
    landing_path = coalesce(landing_path, v_landing),
    channel = v_channel,
    source = v_source,
    via = case
      when v_ev_found or b.visitor_id is not null or b.session_id is not null then 'site'
      when b.source_system = 'backfill' then coalesce(b.via, 'unknown')
      else 'direct_link'
    end
  where booking_uid = p_uid;

  if b.lead_id is null then
    return;
  end if;

  select * into l from analytics.leads where id = b.lead_id;
  select booking_uid into v_first_uid
  from analytics.bookings where lead_id = b.lead_id
  order by created_at, booking_uid limit 1;

  v_topic := analytics.lead_topic(v_booked_from, v_landing);

  if l.attribution_basis is distinct from 'manual'
     and (v_first_uid = p_uid or coalesce(l.attribution_basis, 'none') in ('none', 'link_stamp')) then
    update analytics.leads set
      channel = v_channel,
      source = v_source,
      source_detail = v_detail,
      attribution_basis = v_basis,
      last_touch_channel = coalesce(s.channel, last_touch_channel),
      last_touch_source = coalesce(s.source, last_touch_source),
      landing_path = coalesce(v_landing, landing_path),
      booked_from_path = coalesce(v_booked_from, booked_from_path),
      topic = coalesce(v_topic, topic),
      visitor_id = coalesce(v_vid, visitor_id),
      country = coalesce(country, v.first_country, s.country),
      updated_at = now()
    where id = b.lead_id;
  end if;

  if v_vid is not null then
    update analytics.visitors set email = l.email, lead_id = l.id
    where visitor_id = v_vid and lead_id is null;
  end if;
end
$$;
revoke all on function analytics.resolve_booking(text) from public, anon, authenticated;

-- ---------------------------------------------------------------------------
-- Views. All are for people-traffic on the production site; the team's own
-- visits (is_internal) and test leads are left out.
-- ---------------------------------------------------------------------------

-- One row per visit.
create or replace view analytics.v_sessions with (security_invoker = true) as
select
  s.session_id,
  s.visitor_id,
  (s.started_at at time zone 'Asia/Dubai')::date as day,
  s.started_at,
  s.channel,
  s.source,
  s.campaign,
  s.term,
  s.landing_path,
  analytics.topic_for_path(s.landing_path) as landing_topic,
  s.referrer_host,
  s.country,
  s.city,
  s.device,
  s.pageviews,
  round(s.engaged_ms / 1000.0)::int as engaged_seconds,
  (s.started_at = (select min(s2.started_at) from analytics.sessions s2 where s2.visitor_id = s.visitor_id)) as is_first_visit,
  exists (select 1 from analytics.bookings b where b.session_id = s.session_id) as booked
from analytics.sessions s
where analytics.is_production_host(s.host) and not s.is_internal;

-- Visits per day and channel.
create or replace view analytics.v_traffic_daily with (security_invoker = true) as
select
  day,
  channel,
  count(*) as sessions,
  count(distinct visitor_id) as visitors,
  sum(pageviews) as pageviews,
  round(avg(engaged_seconds))::int as avg_engaged_seconds,
  count(*) filter (where booked) as sessions_with_booking
from analytics.v_sessions
group by day, channel;

-- Landing pages over the last 28 days.
create or replace view analytics.v_landing_pages_28d with (security_invoker = true) as
select
  landing_path,
  landing_topic,
  count(*) as sessions,
  count(*) filter (where channel = 'organic_search') as organic,
  count(*) filter (where channel = 'paid_search') as paid,
  count(*) filter (where channel = 'ai_assistant') as ai,
  count(*) filter (where channel = 'direct') as direct,
  count(*) filter (where channel not in ('organic_search', 'paid_search', 'ai_assistant', 'direct')) as other,
  round(avg(engaged_seconds))::int as avg_engaged_seconds,
  count(*) filter (where booked) as bookings
from analytics.v_sessions
where day >= (now() at time zone 'Asia/Dubai')::date - 27
group by landing_path, landing_topic;

-- Every page view by people, including visitors we keep anonymous.
create or replace view analytics.v_page_views with (security_invoker = true) as
select
  (e.ts at time zone 'Asia/Dubai')::date as day,
  e.path,
  analytics.topic_for_path(e.path) as topic,
  e.country,
  e.visitor_id is null as anonymous
from analytics.events e
where e.name = 'page_view' and analytics.is_production_host(e.host) and not e.is_internal;

-- Which pages AI crawlers and assistants fetch.
create or replace view analytics.v_ai_fetches_daily with (security_invoker = true) as
select
  (f.ts at time zone 'Asia/Dubai')::date as day,
  f.operator,
  f.bot,
  f.kind,
  f.path,
  analytics.topic_for_path(f.path) as topic,
  count(*) as fetches
from analytics.ai_fetches f
where analytics.is_production_host(f.host)
group by 1, 2, 3, 4, 5, 6;

create or replace view analytics.v_ai_pages_28d with (security_invoker = true) as
select
  f.path,
  analytics.topic_for_path(f.path) as topic,
  count(*) filter (where f.kind = 'assistant') as assistant_fetches,
  count(*) filter (where f.kind = 'search') as search_fetches,
  count(*) filter (where f.kind = 'training') as training_fetches,
  max(f.ts) filter (where f.kind = 'assistant') as last_assistant_fetch,
  string_agg(distinct f.bot, ', ') filter (where f.kind = 'assistant') as assistants
from analytics.ai_fetches f
where analytics.is_production_host(f.host) and f.ts >= now() - interval '28 days'
group by f.path;

-- The ledger: one row per lead with source, journey, bookings and revenue.
create or replace view analytics.v_lead_ledger with (security_invoker = true) as
select
  l.id as lead_id,
  (l.created_at at time zone 'Asia/Dubai')::date as first_booked_on,
  l.name,
  l.email,
  coalesce(l.company, sub.business_name) as company,
  l.country,
  l.timezone,
  l.channel,
  l.source,
  l.source_detail,
  l.attribution_basis,
  l.last_touch_channel,
  l.landing_path,
  l.booked_from_path,
  l.topic,
  l.need,
  l.how_heard,
  bk.bookings,
  bk.first_call_at,
  bk.last_call_at,
  bk.last_booking_status,
  bk.via,
  bk.notes as booking_notes,
  j.visits,
  j.pages_viewed,
  j.first_seen_on,
  l.status,
  case
    when sub.status = 'active' then 'customer'
    when sub.status = 'trialing' then 'trial'
    when sub.status is not null then 'former_' || sub.status
  end as account_status,
  sub.tier as plan_tier,
  sub.billing_cycle,
  coalesce(l.amount, case when sub.status = 'active' then sub.plan_price end) as revenue,
  coalesce(l.currency, sub.currency) as currency,
  l.notes
from analytics.leads l
left join lateral (
  select
    count(*) as bookings,
    min(b.start_time) as first_call_at,
    max(b.start_time) as last_call_at,
    (array_agg(b.status order by b.created_at desc))[1] as last_booking_status,
    (array_agg(b.via order by b.created_at))[1] as via,
    (array_agg(b.notes order by b.created_at) filter (where b.notes is not null))[1] as notes
  from analytics.bookings b
  where b.lead_id = l.id and b.status <> 'rescheduled'
) bk on true
left join lateral (
  select
    count(distinct s.session_id) as visits,
    coalesce(sum(s.pageviews), 0) as pages_viewed,
    (min(s.started_at) at time zone 'Asia/Dubai')::date as first_seen_on
  from analytics.visitors v
  join analytics.sessions s on s.visitor_id = v.visitor_id
  where v.lead_id = l.id
) j on true
left join lateral (
  select s.status, s.tier, s.billing_cycle, s.plan_price, s.currency, s.business_name
  from public.subscriptions s
  where lower(s.email) = l.email
     or lower(s.email) = any (l.other_emails)
     or (l.is_business_email and split_part(lower(s.email), '@', 2) = l.email_domain)
  order by case s.status when 'active' then 1 when 'trialing' then 2 else 3 end, s.created_at desc
  limit 1
) sub on true
where not l.is_test;

-- What a lead did on the site, event by event.
create or replace view analytics.v_lead_journey with (security_invoker = true) as
select
  l.id as lead_id,
  l.email,
  e.ts,
  e.name as event,
  e.path,
  analytics.topic_for_path(e.path) as topic,
  case when e.name = 'page_leave' then round((e.props ->> 'engaged_ms')::numeric / 1000) end as engaged_seconds,
  e.props ->> 'cta_location' as cta_location,
  s.channel as session_channel,
  s.source as session_source
from analytics.leads l
join analytics.visitors v on v.lead_id = l.id
join analytics.events e on e.visitor_id = v.visitor_id
left join analytics.sessions s on s.session_id = e.session_id
where not l.is_test;

-- Leads, customers and revenue per channel.
create or replace view analytics.v_revenue_by_channel with (security_invoker = true) as
select
  coalesce(channel, 'unknown') as channel,
  count(*) as leads,
  count(*) filter (where account_status = 'customer' or status = 'won') as customers,
  count(*) filter (where account_status = 'trial') as trials,
  coalesce(sum(revenue) filter (where account_status = 'customer' or status = 'won'), 0) as revenue
from analytics.v_lead_ledger
group by 1;

-- Product accounts: signup -> first recipe -> paid, with the lead's source.
create or replace view analytics.v_account_funnel with (security_invoker = true) as
select
  s.id as subscription_id,
  s.business_name,
  lower(s.email) as email,
  s.status,
  s.tier,
  s.billing_cycle,
  s.plan_price,
  s.currency,
  (s.stripe_subscription_id is not null) as paid_through_stripe,
  s.created_at::date as account_created_on,
  s.plan_start,
  s.plan_end,
  r.recipes,
  r.first_recipe_at::date as first_recipe_on,
  r.last_recipe_at::date as last_recipe_on,
  (r.first_recipe_at::date - s.created_at::date) as days_to_first_recipe,
  ld.lead_id,
  ld.channel as lead_channel,
  ld.source as lead_source,
  ld.topic as lead_topic,
  ld.first_booked_on
from public.subscriptions s
left join lateral (
  select count(*) as recipes, min(rc.created_at) as first_recipe_at, max(rc.updated_at) as last_recipe_at
  from public.recipes rc
  where lower(rc.owner_email) = lower(s.email) or (s.org_id is not null and rc.org_id = s.org_id)
) r on true
left join lateral (
  select l.id as lead_id, l.channel, l.source, l.topic, (l.created_at at time zone 'Asia/Dubai')::date as first_booked_on
  from analytics.leads l
  where not l.is_test
    and (l.email = lower(s.email)
      or lower(s.email) = any (l.other_emails)
      or (l.is_business_email and l.email_domain = split_part(lower(s.email), '@', 2)))
  order by l.created_at
  limit 1
) ld on true;

-- ---------------------------------------------------------------------------
-- One call that returns everything the weekly report needs.
-- ---------------------------------------------------------------------------
create or replace function analytics.report(p_from date, p_to date)
returns jsonb
language sql stable set search_path = '' as $$
  select jsonb_build_object(
    'period', jsonb_build_object('from', p_from, 'to', p_to, 'timezone', 'Asia/Dubai'),
    'totals', (
      select jsonb_build_object(
        'sessions', count(*), 'visitors', count(distinct visitor_id),
        'new_visitors', count(distinct visitor_id) filter (where is_first_visit),
        'pageviews', coalesce(sum(pageviews), 0),
        'avg_engaged_seconds', coalesce(round(avg(engaged_seconds)), 0))
      from analytics.v_sessions where day between p_from and p_to),
    'anonymous_pageviews', (
      select count(*) from analytics.v_page_views where anonymous and day between p_from and p_to),
    'by_channel', (
      select coalesce(jsonb_agg(x order by x.sessions desc), '[]'::jsonb) from (
        select channel, count(*) as sessions, count(distinct visitor_id) as visitors,
               round(avg(engaged_seconds))::int as avg_engaged_seconds,
               count(*) filter (where booked) as bookings
        from analytics.v_sessions where day between p_from and p_to group by channel) x),
    'by_source', (
      select coalesce(jsonb_agg(x order by x.sessions desc), '[]'::jsonb) from (
        select channel, source, count(*) as sessions
        from analytics.v_sessions where day between p_from and p_to
        group by channel, source order by count(*) desc limit 15) x),
    'landing_pages', (
      select coalesce(jsonb_agg(x order by x.sessions desc), '[]'::jsonb) from (
        select landing_path, landing_topic, count(*) as sessions,
               round(avg(engaged_seconds))::int as avg_engaged_seconds,
               count(*) filter (where booked) as bookings
        from analytics.v_sessions where day between p_from and p_to
        group by landing_path, landing_topic order by count(*) desc limit 15) x),
    'pages', (
      select coalesce(jsonb_agg(x order by x.views desc), '[]'::jsonb) from (
        select path, topic, count(*) as views
        from analytics.v_page_views where day between p_from and p_to
        group by path, topic order by count(*) desc limit 15) x),
    'countries', (
      select coalesce(jsonb_agg(x order by x.sessions desc), '[]'::jsonb) from (
        select coalesce(country, '??') as country, count(*) as sessions
        from analytics.v_sessions where day between p_from and p_to
        group by 1 order by count(*) desc limit 10) x),
    'ai_pages', (
      select coalesce(jsonb_agg(x order by x.assistant desc nulls last, x.search desc nulls last), '[]'::jsonb) from (
        select path, topic,
               sum(fetches) filter (where kind = 'assistant') as assistant,
               sum(fetches) filter (where kind = 'search') as search,
               sum(fetches) filter (where kind = 'training') as training
        from analytics.v_ai_fetches_daily where day between p_from and p_to
        group by path, topic
        order by sum(fetches) filter (where kind = 'assistant') desc nulls last, sum(fetches) desc limit 15) x),
    'ai_bots', (
      select coalesce(jsonb_agg(x order by x.fetches desc), '[]'::jsonb) from (
        select operator, bot, kind, sum(fetches) as fetches
        from analytics.v_ai_fetches_daily where day between p_from and p_to
        group by operator, bot, kind) x),
    'new_leads', (
      select coalesce(jsonb_agg(to_jsonb(x) order by x.first_booked_on), '[]'::jsonb) from (
        select first_booked_on, name, company, country, channel, source, attribution_basis,
               landing_path, booked_from_path, topic, need, how_heard, via, visits, pages_viewed,
               last_booking_status, status, account_status
        from analytics.v_lead_ledger where first_booked_on between p_from and p_to) x),
    'pipeline', (
      select coalesce(jsonb_object_agg(k, n), '{}'::jsonb) from (
        select coalesce(account_status, status) as k, count(*) as n
        from analytics.v_lead_ledger group by 1) x),
    'revenue_by_channel', (
      select coalesce(jsonb_agg(to_jsonb(x) order by x.revenue desc, x.leads desc), '[]'::jsonb)
      from analytics.v_revenue_by_channel x)
  )
$$;
revoke all on function analytics.report(date, date) from public, anon, authenticated;
