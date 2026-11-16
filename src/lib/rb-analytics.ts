// First-party analytics client: page views, reading time and events, sent to
// /api/t. Identity is owned by the server (cookies rb_vid and rb_sid, see
// src/app/api/t/route.ts); this file only reads them to stamp bookings.
//
// Everything here is best-effort and silent: analytics must never break a page.

const ENDPOINT = "/api/t";
const INTERNAL_KEY = "rb_internal";
const LANDING_KEY = "rb_lp";

type Props = Record<string, string | number | boolean>;
type OutEvent = {
  name: string;
  ts: number;
  path: string;
  search: string;
  referrer: string;
  load?: boolean;
  props?: Props;
};
type PageState = {
  path: string;
  visibleSince: number | null;
  engagedMs: number;
  reportedMs: number;
  maxScroll: number;
  reportedScroll: number;
};

let ids: { vid: string | null; sid: string | null } = { vid: null, sid: null };
let queue: Promise<void> = Promise.resolve();
let internal: boolean | null = null;
let page: PageState | null = null;
let firstViewSent = false;
let previousUrl = "";
let listening = false;

// Visit any page with ?rb_internal=1 once to mark this browser as the team's
// own; its visits are then left out of reports. ?rb_internal=0 undoes it.
function isInternal(): boolean {
  if (internal !== null) return internal;
  try {
    const flag = new URLSearchParams(window.location.search).get(INTERNAL_KEY);
    if (flag === "1") localStorage.setItem(INTERNAL_KEY, "1");
    if (flag === "0") localStorage.removeItem(INTERNAL_KEY);
    internal = localStorage.getItem(INTERNAL_KEY) === "1";
  } catch {
    internal = false;
  }
  return internal;
}

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function post(event: OutEvent): Promise<void> {
  const body = JSON.stringify({
    internal: isInternal(),
    ctx: {
      lang: navigator.language,
      tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screen_w: window.screen?.width,
    },
    events: [event],
  });
  return fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
    credentials: "same-origin",
  })
    .then((res) => (res.status === 200 ? res.json() : null))
    .then((data: { vid?: string | null; sid?: string | null } | null) => {
      if (data) ids = { vid: data.vid ?? null, sid: data.sid ?? null };
    })
    .catch(() => {});
}

// Events go out one at a time, so the first response (which sets the visitor
// cookie) lands before the next request is made.
function send(event: OutEvent) {
  queue = queue.then(() => post(event));
}

function scrollPercent(): number {
  const doc = document.documentElement;
  const height = Math.max(doc.scrollHeight, document.body?.scrollHeight ?? 0);
  if (height <= 0) return 0;
  return Math.min(100, Math.round(((window.scrollY + window.innerHeight) / height) * 100));
}

function flushPage() {
  if (!page) return;
  const now = Date.now();
  if (page.visibleSince !== null) {
    page.engagedMs += now - page.visibleSince;
    page.visibleSince = document.visibilityState === "visible" ? now : null;
  }
  const engaged = page.engagedMs - page.reportedMs;
  if (engaged < 1000 && page.maxScroll <= page.reportedScroll) return;
  page.reportedMs = page.engagedMs;
  page.reportedScroll = page.maxScroll;
  send({
    name: "page_leave",
    ts: now,
    path: page.path,
    search: "",
    referrer: "",
    props: { engaged_ms: Math.max(0, Math.round(engaged)), scroll_pct: page.maxScroll },
  });
}

function listen() {
  if (listening) return;
  listening = true;
  document.addEventListener("visibilitychange", () => {
    if (!page) return;
    if (document.visibilityState === "hidden") flushPage();
    else page.visibleSince = Date.now();
  });
  window.addEventListener("pagehide", flushPage);
  window.addEventListener(
    "scroll",
    () => {
      if (page) page.maxScroll = Math.max(page.maxScroll, scrollPercent());
    },
    { passive: true }
  );
}

/** Records a page view. Safe to call repeatedly for the same path. */
export function rbPageView(pathname: string) {
  if (typeof window === "undefined") return;
  if (page && page.path === pathname) return;
  if (page) flushPage();
  listen();

  const referrer = firstViewSent ? previousUrl : document.referrer;
  page = {
    path: pathname,
    visibleSince: document.visibilityState === "visible" ? Date.now() : null,
    engagedMs: 0,
    reportedMs: 0,
    maxScroll: scrollPercent(),
    reportedScroll: 0,
  };
  send({
    name: "page_view",
    ts: Date.now(),
    path: pathname,
    search: window.location.search,
    referrer,
    load: !firstViewSent,
  });
  firstViewSent = true;
  previousUrl = window.location.origin + pathname;
  try {
    if (!sessionStorage.getItem(LANDING_KEY)) sessionStorage.setItem(LANDING_KEY, pathname);
  } catch {
    // Storage can be unavailable (private mode).
  }
}

/** Records a named event on the current page. */
export function rbTrack(name: string, props?: Record<string, string | number | boolean | null>) {
  if (typeof window === "undefined") return;
  const clean: Props = {};
  for (const [key, value] of Object.entries(props ?? {})) {
    if (value !== null && value !== undefined) clean[key] = value;
  }
  send({
    name,
    ts: Date.now(),
    path: window.location.pathname,
    search: window.location.search,
    referrer: document.referrer,
    props: clean,
  });
}

/** The visitor and session IDs, if this visitor has them. */
export function rbIds(): { vid: string | null; sid: string | null } {
  if (typeof document === "undefined") return { vid: null, sid: null };
  return { vid: ids.vid ?? readCookie("rb_vid"), sid: ids.sid ?? readCookie("rb_sid") };
}

/** First page of this browser tab's visit. */
export function rbLandingPath(): string | null {
  try {
    return sessionStorage.getItem(LANDING_KEY);
  } catch {
    return null;
  }
}
