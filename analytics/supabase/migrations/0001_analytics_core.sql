-- RecipeBuilder first-party analytics: visits, sessions, events, AI fetches.
--
-- Everything lives in the private `analytics` schema of the RecipeBuilder
-- Supabase project. No existing app object is touched. The only objects in
-- `public` are thin `rb_analytics_*` wrappers, callable by service_role only,
-- because PostgREST exposes `public` and the edge functions call them there.

create schema if not exists analytics;
revoke all on schema analytics from public, anon, authenticated;
grant usage on schema analytics to service_role;

-- ---------------------------------------------------------------------------
-- Config (webhook secret and switches). Never exposed through the API.
-- ---------------------------------------------------------------------------
create table if not exists analytics.config (
  key text primary key,
  value text not null,
  updated_at timestamptz not null default now()
);
alter table analytics.config enable row level security;

-- ---------------------------------------------------------------------------
-- Page -> topic map. One place to say what each page is about; used for
-- sessions, bookings and leads, and safe to edit at any time.
-- ---------------------------------------------------------------------------
create table if not exists analytics.page_topics (
  pattern text primary key,          -- SQL LIKE pattern matched against the path
  topic text not null,
  priority int not null default 0,   -- higher wins when several patterns match
  is_generic boolean not null default false  -- home/other: weak signal of intent
);
alter table analytics.page_topics enable row level security;

insert into analytics.page_topics (pattern, topic, priority, is_generic) values
  ('/blog/dubai-municipality-montaji-food-registration', 'dm_product_registration', 10, false),
  ('/blog/uae-food-labeling-requirements-2026', 'uae_labeling_rules', 10, false),
  ('/blog/arabic-food-label-requirements', 'arabic_labels', 10, false),
  ('/blog/uae-salt-sugar-fat-limits-2026', 'salt_sugar_fat_limits', 10, false),
  ('/blog/front-of-pack-nutrition-labels-gcc-guide', 'front_of_pack_labels', 10, false),
  ('/blog/dubai-municipality-school-food-requirements-caterers-guide', 'school_catering', 10, false),
  ('/blog/how-to-become-approved-school-food-supplier-dubai', 'school_catering', 10, false),
  ('/blog/nutri-check-dubai-school-canteen-compliance-guide', 'school_catering', 10, false),
  ('/blog/smart-food-choices-system-dubai-school-canteen', 'school_catering', 10, false),
  ('/school-catering-dubai', 'school_catering', 10, false),
  ('/food-labeling', 'food_labeling', 10, false),
  ('/recipe-management', 'recipe_management', 10, false),
  ('/cost-tracking', 'costing', 10, false),
  ('/compare%', 'competitor_comparison', 5, false),
  ('/blog%', 'blog_other', 1, true),
  ('/', 'home', 10, true),
  ('%', 'other', 0, true)
on conflict (pattern) do nothing;

create or replace function analytics.normalize_path(p_path text)
returns text language sql immutable set search_path = '' as $$
  select case
    when p_path is null or btrim(p_path) = '' then null
    else coalesce(
      nullif(regexp_replace(split_part(split_part(lower(btrim(p_path)), '#', 1), '?', 1), '/+$', ''), ''),
      '/')
  end
$$;

create or replace function analytics.topic_for_path(p_path text)
returns text language sql stable set search_path = '' as $$
  select t.topic
  from analytics.page_topics t
  where analytics.normalize_path(p_path) like t.pattern
  order by t.priority desc, length(t.pattern) desc
  limit 1
$$;

create or replace function analytics.topic_is_generic(p_topic text)
returns boolean language sql stable set search_path = '' as $$
  select coalesce(bool_or(t.is_generic), true) from analytics.page_topics t where t.topic = p_topic
$$;

-- ---------------------------------------------------------------------------
-- Channel classification. Kept in SQL so history can be re-classified.
-- ---------------------------------------------------------------------------
create or replace function analytics.classify_channel(
  p_referrer_host text,
  p_utm_source text,
  p_utm_medium text,
  p_has_paid_click boolean
) returns table (channel text, source text)
language plpgsql immutable set search_path = '' as $$
declare
  h text := lower(coalesce(p_referrer_host, ''));
  s text := lower(coalesce(p_utm_source, ''));
  m text := lower(coalesce(p_utm_medium, ''));
  ai_host constant text := '(^|\.)(chatgpt\.com|openai\.com|perplexity\.ai|claude\.ai|anthropic\.com|gemini\.google\.com|bard\.google\.com|copilot\.microsoft\.com|copilot\.com|you\.com|phind\.com|poe\.com|deepseek\.com|grok\.com|x\.ai|meta\.ai|mistral\.ai|notebooklm\.google\.com|duck\.ai)$|^com\.openai\.';
  ai_src constant text := '(chatgpt|openai|perplexity|claude|anthropic|gemini|copilot|deepseek|grok|mistral|phind|meta\.ai|you\.com|poe\.com)';
  search_host constant text := '^(www\.)?google\.[a-z]{2,3}(\.[a-z]{2})?$|googlequicksearchbox|^(www\.|cn\.)?bing\.com$|^(www\.)?duckduckgo\.com$|(^|\.)search\.yahoo\.com$|^(www\.)?yahoo\.com$|^(www\.)?yandex\.[a-z.]+$|^(www\.)?baidu\.com$|^(www\.)?ecosia\.org$|^search\.brave\.com$|^(www\.)?startpage\.com$|^(www\.)?qwant\.com$';
  social_host constant text := '(^|\.)(linkedin\.com|lnkd\.in|facebook\.com|fb\.com|fb\.me|instagram\.com|t\.co|twitter\.com|x\.com|youtube\.com|youtu\.be|tiktok\.com|reddit\.com|whatsapp\.com|wa\.me|t\.me|telegram\.org|threads\.net)$|^com\.linkedin\.|^com\.facebook\.|^com\.instagram\.';
  mail_host constant text := '(^|\.)(mail\.google\.com|outlook\.live\.com|outlook\.office\.com|outlook\.office365\.com|mail\.yahoo\.com|mail\.proton\.me)$|^com\.google\.android\.gm$';
begin
  -- A referrer on our own domain is navigation inside the site, not a source.
  if h ~ '(^|\.)recipebuilder\.co$' then
    h := '';
  end if;

  if coalesce(p_has_paid_click, false) or m ~ '^(cpc|ppc|paid|paidsearch|paid_search|sem)$' then
    return query select 'paid_search'::text, coalesce(nullif(s, ''), 'google');
  elsif m ~ '^(display|cpm|banner|paid_social|paidsocial|paid-social)$' then
    return query select 'paid_other'::text, coalesce(nullif(s, ''), nullif(h, ''), 'unknown');
  elsif s ~ ai_src or h ~ ai_host then
    return query select 'ai_assistant'::text, case when s ~ ai_src then s else h end;
  elsif m ~ '^(email|e-mail|newsletter)$' or h ~ mail_host then
    return query select 'email'::text, coalesce(nullif(s, ''), nullif(h, ''), 'email');
  elsif h ~ search_host then
    return query select 'organic_search'::text,
      case when h ~ 'google' then 'google' when h ~ 'bing' then 'bing'
           when h ~ 'duckduckgo' then 'duckduckgo' when h ~ 'yahoo' then 'yahoo'
           else h end;
  elsif h ~ social_host or m ~ '^(social|social-network|social_media|social-media)$' then
    return query select 'social'::text, coalesce(nullif(s, ''), nullif(h, ''), 'social');
  elsif s <> '' then
    return query select 'campaign'::text, s;
  elsif h <> '' then
    return query select 'referral'::text, h;
  else
    return query select 'direct'::text, '(direct)'::text;
  end if;
end
$$;

-- ---------------------------------------------------------------------------
-- Visitors, sessions, events
-- ---------------------------------------------------------------------------
create table if not exists analytics.visitors (
  visitor_id uuid primary key,
  first_seen_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  first_session_id text,
  first_host text,
  first_landing_path text,
  first_referrer text,
  first_referrer_host text,
  first_channel text,
  first_source text,
  first_medium text,
  first_campaign text,
  first_term text,
  first_content text,
  first_gclid text,
  first_click_ids jsonb,
  first_country text,
  first_city text,
  first_device text,
  is_internal boolean not null default false,
  email text,       -- set once the visitor books a call
  lead_id uuid
);
alter table analytics.visitors enable row level security;

create table if not exists analytics.sessions (
  session_id text primary key,
  visitor_id uuid references analytics.visitors (visitor_id) on delete set null,
  started_at timestamptz not null,
  last_event_at timestamptz not null,
  host text,
  landing_path text,
  landing_query text,
  referrer text,
  referrer_host text,
  channel text,
  source text,
  medium text,
  campaign text,
  term text,
  content text,
  gclid text,
  click_ids jsonb,
  country text,
  region text,
  city text,
  device text,
  browser text,
  os text,
  ua text,
  lang text,
  tz text,
  screen_w int,
  pageviews int not null default 0,
  events int not null default 0,
  engaged_ms bigint not null default 0,
  is_internal boolean not null default false
);
alter table analytics.sessions enable row level security;
create index if not exists sessions_visitor_idx on analytics.sessions (visitor_id, started_at);
create index if not exists sessions_started_idx on analytics.sessions (started_at);

create table if not exists analytics.events (
  id bigint generated always as identity primary key,
  ts timestamptz not null default now(),
  received_at timestamptz not null default now(),
  name text not null,
  visitor_id uuid,
  session_id text,
  host text,
  path text,
  title text,
  referrer text,
  props jsonb not null default '{}'::jsonb,
  country text,
  is_internal boolean not null default false
);
alter table analytics.events enable row level security;
create index if not exists events_visitor_idx on analytics.events (visitor_id, ts);
create index if not exists events_session_idx on analytics.events (session_id, ts);
create index if not exists events_name_ts_idx on analytics.events (name, ts);
create index if not exists events_ts_idx on analytics.events (ts);
create index if not exists events_booking_uid_idx
  on analytics.events ((props ->> 'booking_uid')) where name = 'demo_booked';

-- Every fetch of a page by an AI crawler or assistant (logged by the site proxy).
create table if not exists analytics.ai_fetches (
  id bigint generated always as identity primary key,
  ts timestamptz not null default now(),
  bot text not null,       -- e.g. ChatGPT-User, OAI-SearchBot, PerplexityBot
  operator text,           -- openai, anthropic, perplexity, google, ...
  kind text not null,      -- assistant (live answer) | search (index) | training
  host text,
  path text not null,
  query text,
  ua text,
  country text
);
alter table analytics.ai_fetches enable row level security;
create index if not exists ai_fetches_ts_idx on analytics.ai_fetches (ts);
create index if not exists ai_fetches_path_idx on analytics.ai_fetches (path, ts);

-- ---------------------------------------------------------------------------
-- Ingest: one call per request from the site collector.
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
        coalesce(nullif(v_path, ''), '/'),
        left(v_props ->> 'query', 300),
        left(v_ctx ->> 'ua', 400),
        left(v_ctx ->> 'country', 2)
      );
      v_n := v_n + 1;
      continue;
    end if;

    v_paid := coalesce(v_q ->> 'gclid', v_q ->> 'gbraid', v_q ->> 'wbraid', v_q ->> 'msclkid') is not null;
    select c.channel, c.source into v_channel, v_source
    from analytics.classify_channel(v_ref_host, v_q ->> 'utm_source', v_q ->> 'utm_medium', v_paid) c;

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
        left(v_q ->> 'gclid', 300),
        nullif(jsonb_strip_nulls(jsonb_build_object(
          'gbraid', v_q ->> 'gbraid', 'wbraid', v_q ->> 'wbraid',
          'msclkid', v_q ->> 'msclkid', 'fbclid', v_q ->> 'fbclid')), '{}'::jsonb),
        left(v_ctx ->> 'country', 2), left(v_ctx ->> 'city', 100), left(v_ctx ->> 'device', 20),
        v_internal)
      on conflict (visitor_id) do update set
        last_seen_at = greatest(v.last_seen_at, excluded.last_seen_at),
        is_internal = v.is_internal or excluded.is_internal;
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
        left(v_q ->> 'gclid', 300),
        nullif(jsonb_strip_nulls(jsonb_build_object(
          'gbraid', v_q ->> 'gbraid', 'wbraid', v_q ->> 'wbraid',
          'msclkid', v_q ->> 'msclkid', 'fbclid', v_q ->> 'fbclid')), '{}'::jsonb),
        left(v_ctx ->> 'country', 2), left(v_ctx ->> 'region', 100), left(v_ctx ->> 'city', 100),
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
        is_internal = s.is_internal or excluded.is_internal;
    end if;

    insert into analytics.events (ts, name, visitor_id, session_id, host, path, title, referrer, props, country, is_internal)
    values (
      v_ts, v_name, v_vid, v_sid, v_host, analytics.normalize_path(v_path),
      left(e ->> 'title', 300), v_ref, v_props, left(v_ctx ->> 'country', 2), v_internal);
    v_n := v_n + 1;
  end loop;

  return jsonb_build_object('ok', true, 'stored', v_n);
end
$$;

revoke all on function analytics.ingest(jsonb) from public, anon, authenticated;
grant execute on function analytics.ingest(jsonb) to service_role;

create or replace function public.rb_analytics_ingest(p jsonb)
returns jsonb language sql security invoker set search_path = '' as $$
  select analytics.ingest(p)
$$;
revoke all on function public.rb_analytics_ingest(jsonb) from public, anon, authenticated;
grant execute on function public.rb_analytics_ingest(jsonb) to service_role;
