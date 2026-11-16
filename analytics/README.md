# RecipeBuilder analytics

First-party analytics and a lead ledger for recipebuilder.co. It answers three
questions the Google stack could not: where visitors come from (including AI
assistants), which pages and topics lead to booked calls, and which sources
lead to revenue.

It runs beside the Google Ads setup and does not change it.

## How it fits together

```
Browser ──page views, clicks──▶ /api/t (this site) ──▶ rb-collect ──▶ analytics.ingest()
AI bots ──page fetches────────▶ src/proxy.ts ────────▶ rb-collect ──▶ analytics.ingest()
cal.com ──booking webhooks────────────────────────────▶ rb-cal-webhook ─▶ analytics.cal_webhook()
App database (subscriptions, recipes) ── read by the analytics views
```

- **Storage** is the `analytics` schema in the RecipeBuilder Supabase project
  (`skpgwmmltttnqoudnsml`). It is private: not exposed through the API, and no
  app table is modified.
- **`rb-collect`** and **`rb-cal-webhook`** are Supabase edge functions. They
  are thin pipes; all logic is SQL in `supabase/migrations/`.
- **The site** needs no secrets and no environment variables.

## What is frozen (Google Ads lane)

Do not change these without also changing Google Tag Manager and Google Ads:

- GTM container `GTM-P9JRRWQV` and the Consent Mode defaults in
  `src/components/analytics/GoogleTagManager.tsx`.
- The three `dataLayer` events pushed by `trackEvent()` in `src/lib/analytics.ts`
  (`book_demo_click`, `contact_click`, `demo_booked`) and their fields
  (`cta_location`, `cta_text`, `contact_method`, `booking_uid`).
- The cal.com popup in `BookingTracker.tsx` pushing `demo_booked` on
  `bookingSuccessfulV2`.

First-party analytics only adds to these: `trackEvent()` also calls `rbTrack()`,
and the popup also carries booking stamps.

## Identity and privacy

- `/api/t` issues two first-party cookies from the server: `rb_vid` (visitor,
  400 days) and `rb_sid` (visit, 30 minutes sliding). On recipebuilder.co they
  are set for `.recipebuilder.co`, so the app can read them later.
- Visitors in the EEA, UK and Switzerland (`src/lib/consent-regions.ts`) get no
  cookies and no IDs; their page views are stored anonymously. This mirrors the
  Consent Mode rule used for Google tags.
- No IP address is stored. Referrers are stored without their query string.
- To leave your own visits out of reports, open the site once with
  `?rb_internal=1` in each browser you use (`?rb_internal=0` undoes it).

## Booking stamps

Every "Book a call" link carries values that cal.com returns in its webhook:

| Parameter | Meaning | Set by |
| --- | --- | --- |
| `metadata[rb_from]` | page the link is on | server-rendered into the link (`bookingHref`) |
| `metadata[rb_cta]` | which button | click handler (`BookingTracker`) |
| `metadata[rb_lp]` | first page of the visit | click handler |
| `metadata[rb_vid]`, `metadata[rb_sid]` | visitor and visit | click handler |

Because `rb_from` is in the HTML, a booking made from a copied link, or from a
link an AI assistant quoted, still records the page it came from. A booking is
also joined to its visitor through the site's own `demo_booked` event, so the
join works even if cal.com drops the metadata.

cal.com does not include UTM tags in webhooks. To capture `utm_source` on
bookings made directly on cal.com (for example `utm_source=chatgpt.com`), the
event type needs hidden booking questions with the identifiers `utm_source`,
`utm_medium` and `utm_campaign`; `analytics.cal_webhook()` already reads them.

## Topics

`analytics.page_topics` maps page paths to topics (and marks each as content,
product or generic). A lead's topic is the article they booked from, else the
article they landed on, else the product page. Add a row when a new page ships:

```sql
insert into analytics.page_topics (pattern, topic, priority, kind)
values ('/blog/new-post-slug', 'new_topic', 10, 'content');
```

## cal.com webhook

- URL: `https://skpgwmmltttnqoudnsml.supabase.co/functions/v1/rb-cal-webhook`
- Triggers: Booking created, rescheduled, cancelled, no-show updated, meeting ended.
- Scope it to the "RecipeBuilder | Discovery Call" event type. Bookings for
  other event types are ignored either way (`cal_event_slugs` in
  `analytics.config`), and no personal data from them is kept.
- Secret: `select value from analytics.config where key = 'cal_webhook_secret';`
  Paste it into the webhook's Secret field, then require signatures:
  `update analytics.config set value = 'true' where key = 'cal_require_signature';`
  Until then unsigned deliveries are accepted; a wrong signature is always rejected.
- Every delivery is logged in `analytics.cal_webhook_log`.

## Reading the data

| View | What it shows |
| --- | --- |
| `analytics.v_lead_ledger` | one row per lead: source, topic, journey, bookings, pipeline status, plan and revenue |
| `analytics.v_lead_journey` | what a lead did on the site, event by event |
| `analytics.v_sessions` | one row per visit (people, production site, team visits excluded) |
| `analytics.v_traffic_daily` | visits per day and channel |
| `analytics.v_landing_pages_28d` | landing pages by channel, with bookings |
| `analytics.v_ai_pages_28d` | pages fetched by AI assistants, AI search and training crawlers |
| `analytics.v_revenue_by_channel` | leads, customers and revenue per channel |
| `analytics.v_account_funnel` | product accounts: created, first recipe, plan, and the lead's source |

`select analytics.report('2026-11-09', '2026-11-15');` returns everything the
weekly report needs as one JSON document. `weekly-report.md` holds the prompt that
turns it into a plain-language report; it can be run on demand or scheduled.

### Updating a lead by hand

Pipeline status and deal value are maintained by hand; plan and payment status
come from the app's `subscriptions` table automatically (matched by email or
company email domain).

```sql
update analytics.leads
set status = 'proposal', amount = 1500, currency = 'USD', notes = '...'
where email = 'someone@company.com';
-- status: booked | held | no_show | proposal | won | lost | disqualified

-- Correct a source by hand (it will not be overwritten):
update analytics.leads
set channel = 'referral', source = 'partner name', attribution_basis = 'manual'
where email = 'someone@company.com';
```

## Channels

`analytics.classify_channel()` assigns each visit one of: `paid_search`,
`paid_other`, `ai_assistant`, `organic_search`, `social`, `email`, `campaign`
(a tagged link that fits nothing else), `referral`, `direct`. A lead's channel
is their first visit's channel; `last_touch_channel` is the visit they booked in.

## Deploying changes

- Site code deploys with the site (Vercel, from `main`).
- SQL: add a numbered file under `supabase/migrations/` and apply it to the
  project (Supabase SQL editor, CLI, or the Supabase MCP `apply_migration`).
- Edge functions: sources are in `supabase/functions/`; deploy with
  `supabase functions deploy rb-collect --no-verify-jwt` (same for
  `rb-cal-webhook`) or the Supabase MCP `deploy_edge_function`. Both run
  without JWT verification by design: one is a public collector, the other
  verifies cal.com's signature itself.
- AI bots: the list lives in `src/lib/ai-bots.ts` and must match the pattern in
  `src/proxy.ts`.
