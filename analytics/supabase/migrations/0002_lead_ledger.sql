-- Lead ledger: one row per lead, one row per booking, fed by the cal.com
-- webhook (edge function rb-cal-webhook -> analytics.cal_webhook).

insert into analytics.config (key, value) values
  -- Shared with cal.com's webhook "Secret" field. Generated here so it never
  -- appears in git. Read it with: select value from analytics.config where key = 'cal_webhook_secret';
  ('cal_webhook_secret', encode(extensions.gen_random_bytes(32), 'hex')),
  -- 'false': unsigned deliveries are accepted (a wrong signature is always
  -- rejected). Set to 'true' once the secret is saved in cal.com.
  ('cal_require_signature', 'false'),
  -- Comma-separated cal.com event type slugs that belong to RecipeBuilder.
  ('cal_event_slugs', 'recipebuilder-discovery-call')
on conflict (key) do nothing;

create table if not exists analytics.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  email text not null unique,
  name text,
  company text,
  website text,
  email_domain text,
  is_business_email boolean,
  other_emails text[] not null default '{}',
  timezone text,
  country text,
  visitor_id uuid,
  -- Where the lead came from (first touch), and how we know.
  channel text,
  source text,
  source_detail text,
  attribution_basis text,      -- visitor_first_touch | booking_utm | link_stamp | manual | none
  last_touch_channel text,     -- source of the visit in which they booked
  last_touch_source text,
  landing_path text,           -- first page of their first visit
  booked_from_path text,       -- page where they clicked "Book a call"
  topic text,                  -- derived from those pages (analytics.page_topics)
  need text,                   -- self-reported on the booking form
  how_heard text,              -- self-reported on the booking form
  -- Pipeline, maintained by hand.
  status text not null default 'booked'
    check (status in ('booked', 'held', 'no_show', 'proposal', 'won', 'lost', 'disqualified')),
  amount numeric,
  currency text,
  won_at date,
  notes text,
  is_test boolean not null default false
);
alter table analytics.leads enable row level security;

create table if not exists analytics.bookings (
  booking_uid text primary key,
  lead_id uuid references analytics.leads (id) on delete set null,
  created_at timestamptz not null default now(),
  event_type_slug text,
  title text,
  status text not null default 'confirmed',   -- confirmed | cancelled | rescheduled
  start_time timestamptz,
  end_time timestamptz,
  attendee_name text,
  attendee_email text,
  attendee_timezone text,
  guests text[] not null default '{}',
  notes text,
  via text,                    -- site (booked through the website) | direct_link | unknown
  visitor_id uuid,
  session_id text,
  booked_from_path text,
  cta_location text,
  landing_path text,
  channel text,
  source text,
  utm jsonb not null default '{}'::jsonb,
  gclid text,
  responses jsonb,
  metadata jsonb,
  rescheduled_from_uid text,
  cancelled_at timestamptz,
  cancel_reason text,
  no_show boolean,
  meeting_ended_at timestamptz,
  source_system text not null default 'cal_webhook',  -- cal_webhook | backfill
  raw jsonb
);
alter table analytics.bookings enable row level security;
create index if not exists bookings_lead_idx on analytics.bookings (lead_id, created_at);
create index if not exists bookings_visitor_idx on analytics.bookings (visitor_id);

create table if not exists analytics.cal_webhook_log (
  id bigint generated always as identity primary key,
  received_at timestamptz not null default now(),
  trigger text,
  booking_uid text,
  event_type_slug text,
  signature_ok boolean,        -- null = delivery was unsigned
  handled boolean not null default false,
  note text,
  payload jsonb                -- kept only for RecipeBuilder event types
);
alter table analytics.cal_webhook_log enable row level security;
create index if not exists cal_webhook_log_received_idx on analytics.cal_webhook_log (received_at);

-- ---------------------------------------------------------------------------
-- Helpers
-- ---------------------------------------------------------------------------
create or replace function analytics.try_timestamptz(p text)
returns timestamptz language plpgsql stable set search_path = '' as $$
begin
  return p::timestamptz;
exception when others then
  return null;
end
$$;

create or replace function analytics.is_free_email_domain(p_domain text)
returns boolean language sql immutable set search_path = '' as $$
  select lower(coalesce(p_domain, '')) ~
    '^(gmail|googlemail|yahoo|ymail|hotmail|outlook|live|msn|icloud|me|mac|aol|proton|protonmail|pm|gmx|mail|yandex|zoho|hey|fastmail)\.[a-z.]+$'
$$;

-- A value the booking link carried: URL metadata first, then a (hidden)
-- booking question with that identifier.
create or replace function analytics.cal_param(p_payload jsonb, p_key text)
returns text language sql immutable set search_path = '' as $$
  select nullif(btrim(coalesce(
    case when jsonb_typeof(p_payload -> 'metadata' -> p_key) = 'string'
         then p_payload -> 'metadata' ->> p_key end,
    case when jsonb_typeof(p_payload -> 'responses' -> p_key -> 'value') = 'string'
         then p_payload -> 'responses' -> p_key ->> 'value' end,
    case when jsonb_typeof(p_payload -> 'responses' -> p_key) = 'string'
         then p_payload -> 'responses' ->> p_key end,
    case when jsonb_typeof(p_payload -> 'userFieldsResponses' -> p_key -> 'value') = 'string'
         then p_payload -> 'userFieldsResponses' -> p_key ->> 'value' end,
    ''
  )), '')
$$;

-- ---------------------------------------------------------------------------
-- Attribution: join a booking to the visit behind it and set the lead's source.
-- Safe to re-run; called when the booking arrives and again when the site's
-- own demo_booked event arrives (either can come first).
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
  v_tb text;
  v_tl text;
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

  v_tb := analytics.topic_for_path(v_booked_from);
  v_tl := analytics.topic_for_path(v_landing);
  v_topic := case
    when v_tb is not null and not analytics.topic_is_generic(v_tb) then v_tb
    when v_tl is not null and not analytics.topic_is_generic(v_tl) then v_tl
    else coalesce(v_tb, v_tl)
  end;

  -- The lead's source comes from their first booking and is never overwritten
  -- once set by hand.
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

-- ---------------------------------------------------------------------------
-- Record one booking (from the webhook or from a backfill).
-- ---------------------------------------------------------------------------
create or replace function analytics.record_booking(p jsonb)
returns text
language plpgsql security definer set search_path = '' as $$
declare
  v_uid text := nullif(btrim(coalesce(p ->> 'uid', '')), '');
  v_email text := lower(nullif(btrim(coalesce(p ->> 'attendee_email', '')), ''));
  v_domain text;
  v_lead uuid;
  v_vid uuid;
  v_guests text[];
  v_created timestamptz := coalesce(analytics.try_timestamptz(p ->> 'created_at'), now());
  v_old analytics.bookings%rowtype;
  v_test boolean := false;
begin
  if v_uid is null then
    return null;
  end if;

  v_guests := array(
    select distinct lower(btrim(x))
    from jsonb_array_elements_text(
      case when jsonb_typeof(p -> 'guests') = 'array' then p -> 'guests' else '[]'::jsonb end) as t(x)
    where position('@' in x) > 1
  );

  if coalesce(p ->> 'visitor_id', '') ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' then
    v_vid := (p ->> 'visitor_id')::uuid;
  end if;

  -- A reschedule arrives as a new booking that points at the old one.
  if nullif(p ->> 'rescheduled_from', '') is not null then
    select * into v_old from analytics.bookings where booking_uid = p ->> 'rescheduled_from';
    update analytics.bookings set status = 'rescheduled' where booking_uid = p ->> 'rescheduled_from';
  end if;

  if v_email is not null then
    v_domain := split_part(v_email, '@', 2);
    v_test := v_domain in ('asdf.com', 'example.com', 'test.com', 'mailinator.com')
              or v_email ~ '^(test|asdf|testcall)[^@]*@';
    insert into analytics.leads as l (
      created_at, email, name, company, email_domain, is_business_email, other_emails,
      timezone, need, how_heard, is_test)
    values (
      v_created, v_email, nullif(btrim(coalesce(p ->> 'attendee_name', '')), ''),
      nullif(btrim(coalesce(p ->> 'company', '')), ''),
      v_domain, not analytics.is_free_email_domain(v_domain), v_guests,
      nullif(p ->> 'attendee_timezone', ''), nullif(p ->> 'need', ''), nullif(p ->> 'how_heard', ''),
      v_test)
    on conflict (email) do update set
      name = coalesce(l.name, excluded.name),
      company = coalesce(l.company, excluded.company),
      other_emails = array(select distinct unnest(l.other_emails || excluded.other_emails)),
      timezone = coalesce(l.timezone, excluded.timezone),
      need = coalesce(excluded.need, l.need),
      how_heard = coalesce(l.how_heard, excluded.how_heard),
      created_at = least(l.created_at, excluded.created_at),
      updated_at = now()
    returning l.id into v_lead;
  end if;

  insert into analytics.bookings as b (
    booking_uid, lead_id, created_at, event_type_slug, title, status, start_time, end_time,
    attendee_name, attendee_email, attendee_timezone, guests, notes, via,
    visitor_id, session_id, booked_from_path, cta_location, landing_path,
    utm, gclid, responses, metadata, rescheduled_from_uid, source_system, raw)
  values (
    v_uid, v_lead, v_created, nullif(p ->> 'slug', ''), nullif(p ->> 'title', ''),
    coalesce(nullif(p ->> 'status', ''), 'confirmed'),
    analytics.try_timestamptz(p ->> 'start_time'), analytics.try_timestamptz(p ->> 'end_time'),
    nullif(btrim(coalesce(p ->> 'attendee_name', '')), ''), v_email, nullif(p ->> 'attendee_timezone', ''),
    v_guests, nullif(p ->> 'notes', ''), nullif(p ->> 'via', ''),
    coalesce(v_vid, v_old.visitor_id),
    coalesce(nullif(left(coalesce(p ->> 'session_id', ''), 64), ''), v_old.session_id),
    coalesce(analytics.normalize_path(p ->> 'booked_from'), v_old.booked_from_path),
    coalesce(nullif(left(coalesce(p ->> 'cta', ''), 100), ''), v_old.cta_location),
    coalesce(analytics.normalize_path(p ->> 'landing'), v_old.landing_path),
    coalesce(nullif(case when jsonb_typeof(p -> 'utm') = 'object' then p -> 'utm' end, '{}'::jsonb),
             v_old.utm, '{}'::jsonb),
    coalesce(nullif(p ->> 'gclid', ''), v_old.gclid),
    p -> 'responses', p -> 'metadata', nullif(p ->> 'rescheduled_from', ''),
    coalesce(nullif(p ->> 'source_system', ''), 'cal_webhook'), p -> 'raw')
  on conflict (booking_uid) do update set
    lead_id = coalesce(b.lead_id, excluded.lead_id),
    title = coalesce(excluded.title, b.title),
    status = excluded.status,
    start_time = coalesce(excluded.start_time, b.start_time),
    end_time = coalesce(excluded.end_time, b.end_time),
    notes = coalesce(excluded.notes, b.notes),
    guests = array(select distinct unnest(b.guests || excluded.guests)),
    visitor_id = coalesce(b.visitor_id, excluded.visitor_id),
    session_id = coalesce(b.session_id, excluded.session_id),
    booked_from_path = coalesce(b.booked_from_path, excluded.booked_from_path),
    cta_location = coalesce(b.cta_location, excluded.cta_location),
    landing_path = coalesce(b.landing_path, excluded.landing_path),
    utm = case when b.utm = '{}'::jsonb then excluded.utm else b.utm end,
    gclid = coalesce(b.gclid, excluded.gclid),
    responses = coalesce(excluded.responses, b.responses),
    metadata = coalesce(excluded.metadata, b.metadata),
    raw = coalesce(excluded.raw, b.raw);

  perform analytics.resolve_booking(v_uid);
  return v_uid;
end
$$;

-- ---------------------------------------------------------------------------
-- cal.com webhook entry point. Receives the raw body so the signature is
-- checked over the exact bytes cal.com signed.
-- ---------------------------------------------------------------------------
create or replace function analytics.cal_webhook(p_raw text, p_signature text)
returns jsonb
language plpgsql security definer set search_path = '' as $$
declare
  body jsonb;
  pl jsonb;
  v_secret text;
  v_require boolean;
  v_slugs text[];
  v_sig_ok boolean;   -- null = unsigned
  v_trigger text;
  v_uid text;
  v_slug text;
  v_known boolean;
  v_ours boolean;
begin
  select value into v_secret from analytics.config where key = 'cal_webhook_secret';
  select value = 'true' into v_require from analytics.config where key = 'cal_require_signature';
  select string_to_array(replace(value, ' ', ''), ',') into v_slugs
  from analytics.config where key = 'cal_event_slugs';

  if nullif(btrim(coalesce(p_signature, '')), '') is not null
     and btrim(p_signature) <> 'no-secret-provided'
     and v_secret is not null then
    v_sig_ok := lower(btrim(p_signature)) =
      encode(extensions.hmac(convert_to(p_raw, 'UTF8'), convert_to(v_secret, 'UTF8'), 'sha256'), 'hex');
  end if;

  begin
    body := p_raw::jsonb;
  exception when others then
    insert into analytics.cal_webhook_log (trigger, signature_ok, handled, note)
    values ('invalid', v_sig_ok, false, 'body is not valid JSON');
    return jsonb_build_object('ok', false, 'status', 400, 'error', 'invalid json');
  end;

  v_trigger := body ->> 'triggerEvent';

  if v_sig_ok is false or (coalesce(v_require, false) and v_sig_ok is not true) then
    insert into analytics.cal_webhook_log (trigger, signature_ok, handled, note)
    values (v_trigger, v_sig_ok, false, 'rejected: bad or missing signature');
    return jsonb_build_object('ok', false, 'status', 401, 'error', 'invalid signature');
  end if;

  -- MEETING_STARTED / MEETING_ENDED send a flat body with no "payload" wrapper.
  pl := case when jsonb_typeof(body -> 'payload') = 'object' then body -> 'payload' else body end;
  v_uid := nullif(coalesce(pl ->> 'uid', pl ->> 'bookingUid'), '');
  v_slug := nullif(pl ->> 'type', '');

  if v_uid is null then
    insert into analytics.cal_webhook_log (trigger, signature_ok, handled, note)
    values (v_trigger, v_sig_ok, false, 'no booking uid (ping or unsupported trigger)');
    return jsonb_build_object('ok', true, 'handled', false, 'note', 'no booking uid');
  end if;

  select exists (
    select 1 from analytics.bookings
    where booking_uid = v_uid or booking_uid = nullif(pl ->> 'rescheduleUid', '')
  ) into v_known;
  v_ours := v_known or (v_slug is not null and v_slug = any (v_slugs));

  if not v_ours then
    -- Another product's booking (the cal.com account is shared). Keep no personal data.
    insert into analytics.cal_webhook_log (trigger, booking_uid, event_type_slug, signature_ok, handled, note)
    values (v_trigger, v_uid, v_slug, v_sig_ok, false, 'ignored: not a RecipeBuilder event type');
    return jsonb_build_object('ok', true, 'handled', false, 'note', 'other event type');
  end if;

  if v_trigger in ('BOOKING_CREATED', 'BOOKING_RESCHEDULED', 'BOOKING_REQUESTED', 'BOOKING_PAID') then
    perform analytics.record_booking(jsonb_build_object(
      'uid', v_uid,
      'slug', v_slug,
      'title', pl ->> 'title',
      'status', 'confirmed',
      'start_time', pl ->> 'startTime',
      'end_time', pl ->> 'endTime',
      'created_at', body ->> 'createdAt',
      'attendee_name', pl -> 'attendees' -> 0 ->> 'name',
      'attendee_email', coalesce(pl -> 'attendees' -> 0 ->> 'email', pl -> 'responses' -> 'email' ->> 'value'),
      'attendee_timezone', pl -> 'attendees' -> 0 ->> 'timeZone',
      'guests', case when jsonb_typeof(pl -> 'responses' -> 'guests' -> 'value') = 'array'
                     then pl -> 'responses' -> 'guests' -> 'value' else '[]'::jsonb end,
      'notes', coalesce(nullif(pl ->> 'additionalNotes', ''), pl -> 'responses' -> 'notes' ->> 'value'),
      'visitor_id', analytics.cal_param(pl, 'rb_vid'),
      'session_id', analytics.cal_param(pl, 'rb_sid'),
      'booked_from', analytics.cal_param(pl, 'rb_from'),
      'cta', analytics.cal_param(pl, 'rb_cta'),
      'landing', analytics.cal_param(pl, 'rb_lp'),
      'utm', jsonb_strip_nulls(jsonb_build_object(
        'utm_source', analytics.cal_param(pl, 'utm_source'),
        'utm_medium', analytics.cal_param(pl, 'utm_medium'),
        'utm_campaign', analytics.cal_param(pl, 'utm_campaign'),
        'utm_term', analytics.cal_param(pl, 'utm_term'),
        'utm_content', analytics.cal_param(pl, 'utm_content'))),
      'gclid', analytics.cal_param(pl, 'gclid'),
      'need', analytics.cal_param(pl, 'rb_need'),
      'how_heard', analytics.cal_param(pl, 'rb_how_heard'),
      'company', analytics.cal_param(pl, 'rb_company'),
      'responses', pl -> 'responses',
      'metadata', pl -> 'metadata',
      'rescheduled_from', pl ->> 'rescheduleUid',
      'source_system', 'cal_webhook',
      'raw', body));
  elsif v_trigger in ('BOOKING_CANCELLED', 'BOOKING_REJECTED') then
    update analytics.bookings set
      status = 'cancelled',
      cancelled_at = now(),
      cancel_reason = left(coalesce(pl ->> 'cancellationReason', pl ->> 'rejectionReason'), 500)
    where booking_uid = v_uid;
  elsif v_trigger = 'BOOKING_NO_SHOW_UPDATED' then
    update analytics.bookings b set
      no_show = coalesce((
        select bool_or(coalesce(a ->> 'noShow', 'false') = 'true')
        from jsonb_array_elements(
          case when jsonb_typeof(pl -> 'attendees') = 'array' then pl -> 'attendees' else '[]'::jsonb end) a
        where lower(a ->> 'email') = b.attendee_email), false)
    where b.booking_uid = v_uid;
    update analytics.leads l set status = 'no_show', updated_at = now()
    from analytics.bookings b
    where b.booking_uid = v_uid and b.lead_id = l.id and b.no_show and l.status = 'booked';
  elsif v_trigger = 'MEETING_ENDED' then
    update analytics.bookings set meeting_ended_at = now() where booking_uid = v_uid;
  end if;

  insert into analytics.cal_webhook_log (trigger, booking_uid, event_type_slug, signature_ok, handled, note, payload)
  values (v_trigger, v_uid, v_slug, v_sig_ok, true, null, body);

  return jsonb_build_object('ok', true, 'handled', true, 'booking_uid', v_uid);
end
$$;

-- When the site's own demo_booked event arrives, link it to the booking.
create or replace function analytics.on_demo_booked_event()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  if new.props ->> 'booking_uid' is not null then
    perform analytics.resolve_booking(new.props ->> 'booking_uid');
  end if;
  return null;
end
$$;

drop trigger if exists events_demo_booked_resolve on analytics.events;
create trigger events_demo_booked_resolve
  after insert on analytics.events
  for each row when (new.name = 'demo_booked')
  execute function analytics.on_demo_booked_event();

revoke all on function analytics.resolve_booking(text) from public, anon, authenticated;
revoke all on function analytics.record_booking(jsonb) from public, anon, authenticated;
revoke all on function analytics.cal_webhook(text, text) from public, anon, authenticated;
revoke all on function analytics.on_demo_booked_event() from public, anon, authenticated;
grant execute on function analytics.cal_webhook(text, text) to service_role;

create or replace function public.rb_analytics_cal_webhook(p_raw text, p_signature text)
returns jsonb language sql security invoker set search_path = '' as $$
  select analytics.cal_webhook(p_raw, p_signature)
$$;
revoke all on function public.rb_analytics_cal_webhook(text, text) from public, anon, authenticated;
grant execute on function public.rb_analytics_cal_webhook(text, text) to service_role;
