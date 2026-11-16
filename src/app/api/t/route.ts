import { after, NextResponse, type NextRequest } from "next/server";
import { CONSENT_REQUIRED_REGIONS } from "@/lib/consent-regions";
import { sendToCollector } from "@/lib/rb-collect";

// First-party analytics collector.
//
// The browser posts page views and events here. This route owns identity:
// it issues the visitor cookie (rb_vid, 400 days) and the session cookie
// (rb_sid, 30 minutes sliding) from the server, adds country and device, and
// forwards the event to the collector after the response is sent.
//
// Visitors in consent-required countries get no cookies and no IDs; their
// page views are stored anonymously.

export const dynamic = "force-dynamic";

const NO_ID_COUNTRIES = new Set(CONSENT_REQUIRED_REGIONS);
const VID_COOKIE = "rb_vid";
const SID_COOKIE = "rb_sid";
const VID_MAX_AGE = 60 * 60 * 24 * 400;
const SID_MAX_AGE = 60 * 30;
const MAX_BODY_CHARS = 16_000;
const MAX_EVENTS = 10;
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const EVENT_NAME_RE = /^[a-z][a-z0-9_]{1,39}$/;
// ai_fetch is written only by the server-side proxy, never by a browser.
const RESERVED_EVENTS = new Set(["ai_fetch"]);
const QUERY_KEYS = [
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "gclid", "gbraid", "wbraid", "msclkid", "fbclid",
];
const BOT_RE =
  /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|gtmetrix|pingdom|uptime|curl\/|wget|python-|node-fetch|axios|go-http|okhttp|scrapy|phantomjs|puppeteer|playwright|facebookexternalhit|whatsapp\/|embedly|preview/i;

type CleanEvent = {
  name: string;
  ts?: string;
  path: string;
  search?: string;
  query: Record<string, string>;
  referrer?: string;
  referrer_host?: string;
  props: Record<string, string | number | boolean>;
};

function pickQuery(search: string): Record<string, string> {
  const out: Record<string, string> = {};
  try {
    const params = new URLSearchParams(search);
    for (const key of QUERY_KEYS) {
      const value = params.get(key);
      if (value) out[key] = value.slice(0, 300);
    }
  } catch {
    // Malformed query string: treat as no campaign data.
  }
  return out;
}

// Keeps the referrer's origin and path; drops its query string and hash.
function cleanReferrer(referrer: string): { url: string; host: string } | null {
  try {
    const u = new URL(referrer);
    if (!u.hostname) return null;
    return {
      url: `${u.protocol}//${u.host}${u.pathname}`.slice(0, 500),
      host: u.hostname.toLowerCase(),
    };
  } catch {
    return null;
  }
}

function cleanProps(input: unknown): Record<string, string | number | boolean> {
  const out: Record<string, string | number | boolean> = {};
  if (!input || typeof input !== "object") return out;
  for (const [key, value] of Object.entries(input as Record<string, unknown>).slice(0, 20)) {
    if (!/^[a-z][a-z0-9_]{0,39}$/.test(key)) continue;
    if (typeof value === "string") out[key] = value.slice(0, 300);
    else if (typeof value === "number" && Number.isFinite(value)) out[key] = value;
    else if (typeof value === "boolean") out[key] = value;
  }
  return out;
}

function cleanEvents(input: unknown): Array<CleanEvent & { load: boolean }> {
  if (!Array.isArray(input)) return [];
  const out: Array<CleanEvent & { load: boolean }> = [];
  for (const raw of input.slice(0, MAX_EVENTS)) {
    if (!raw || typeof raw !== "object") continue;
    const e = raw as Record<string, unknown>;
    if (typeof e.name !== "string" || !EVENT_NAME_RE.test(e.name) || RESERVED_EVENTS.has(e.name)) {
      continue;
    }
    const query = pickQuery(typeof e.search === "string" ? e.search : "");
    const search = new URLSearchParams(query).toString();
    const referrer = typeof e.referrer === "string" ? cleanReferrer(e.referrer) : null;
    out.push({
      name: e.name,
      ts: typeof e.ts === "number" && Number.isFinite(e.ts) ? String(Math.round(e.ts)) : undefined,
      path: typeof e.path === "string" ? e.path.slice(0, 500) : "",
      search: search ? `?${search}` : undefined,
      query,
      referrer: referrer?.url,
      referrer_host: referrer?.host,
      props: cleanProps(e.props),
      load: e.load === true,
    });
  }
  return out;
}

function parseUserAgent(ua: string) {
  const device = /iPad|Tablet|PlayBook|Silk|Android(?!.*Mobile)/i.test(ua)
    ? "tablet"
    : /Mobi|iPhone|iPod|Android/i.test(ua)
      ? "mobile"
      : "desktop";
  const os = /Windows NT/.test(ua)
    ? "Windows"
    : /iPhone|iPad|iPod/.test(ua)
      ? "iOS"
      : /Android/.test(ua)
        ? "Android"
        : /Mac OS X/.test(ua)
          ? "macOS"
          : /CrOS/.test(ua)
            ? "ChromeOS"
            : /Linux/.test(ua)
              ? "Linux"
              : "Other";
  const browser = /Edg\//.test(ua)
    ? "Edge"
    : /OPR\/|Opera/.test(ua)
      ? "Opera"
      : /SamsungBrowser/.test(ua)
        ? "Samsung Internet"
        : /Firefox\/|FxiOS/.test(ua)
          ? "Firefox"
          : /Chrome\/|CriOS/.test(ua)
            ? "Chrome"
            : /Safari\//.test(ua)
              ? "Safari"
              : "Other";
  return { device, os, browser };
}

function header(req: NextRequest, name: string): string {
  const value = req.headers.get(name) ?? "";
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export async function POST(req: NextRequest) {
  const ua = req.headers.get("user-agent") ?? "";
  if (!ua || BOT_RE.test(ua)) return new NextResponse(null, { status: 204 });

  const host = (req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? "")
    .toLowerCase()
    .split(":")[0];

  // Only the site's own pages may post here.
  const origin = req.headers.get("origin");
  if (!origin || cleanReferrer(origin)?.host !== host) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY_CHARS) {
      return NextResponse.json({ error: "too large" }, { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const events = cleanEvents(body?.events);
  if (events.length === 0) return new NextResponse(null, { status: 204 });

  const country = header(req, "x-vercel-ip-country").toUpperCase();
  const idsAllowed = !NO_ID_COUNTRIES.has(country);

  const cookieVid = req.cookies.get(VID_COOKIE)?.value ?? "";
  const cookieSid = req.cookies.get(SID_COOKIE)?.value ?? "";
  let vid: string | null = null;
  let sid: string | null = null;
  if (idsAllowed) {
    vid = UUID_RE.test(cookieVid) ? cookieVid.toLowerCase() : crypto.randomUUID();
    // A new session starts when the last one has expired, or when the visitor
    // arrives from outside with campaign parameters (an ad click, a tagged link).
    const first = events[0];
    const ownReferrer = first.referrer_host === host;
    const campaignArrival =
      first.load && first.name === "page_view" && Object.keys(first.query).length > 0 && !ownReferrer;
    if (UUID_RE.test(cookieSid) && !campaignArrival) {
      sid = cookieSid.toLowerCase();
    } else if (first.name !== "page_leave") {
      // Leaving a page after the session expired doesn't start a new visit.
      sid = crypto.randomUUID();
    }
  }

  const clientCtx = (body.ctx && typeof body.ctx === "object" ? body.ctx : {}) as Record<string, unknown>;
  const payload = {
    host,
    vid,
    sid,
    internal: body.internal === true,
    ctx: {
      ua: ua.slice(0, 400),
      country,
      region: header(req, "x-vercel-ip-country-region"),
      city: header(req, "x-vercel-ip-city"),
      ...parseUserAgent(ua),
      lang: typeof clientCtx.lang === "string" ? clientCtx.lang.slice(0, 20) : undefined,
      tz: typeof clientCtx.tz === "string" ? clientCtx.tz.slice(0, 60) : undefined,
      screen_w:
        typeof clientCtx.screen_w === "number" && Number.isFinite(clientCtx.screen_w)
          ? String(Math.round(clientCtx.screen_w))
          : undefined,
    },
    events: events.map((event) => {
      const { load, ...rest } = event;
      void load;
      return rest;
    }),
  };

  after(() => sendToCollector(payload));

  const res = NextResponse.json({ vid, sid }, { headers: { "Cache-Control": "no-store" } });
  if (idsAllowed && vid) {
    const secure = (req.headers.get("x-forwarded-proto") ?? req.nextUrl.protocol).startsWith("https");
    const domain = host.endsWith("recipebuilder.co") ? ".recipebuilder.co" : undefined;
    const base = { path: "/", sameSite: "lax" as const, secure, domain, httpOnly: false };
    res.cookies.set(VID_COOKIE, vid, { ...base, maxAge: VID_MAX_AGE });
    if (sid) res.cookies.set(SID_COOKIE, sid, { ...base, maxAge: SID_MAX_AGE });
  }
  return res;
}
