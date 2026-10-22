"use client";

import { useEffect } from "react";
import { CAL_LINK, trackEvent } from "@/lib/analytics";

const CAL_ORIGIN = "https://app.cal.com";
const CAL_EMBED_SRC = `${CAL_ORIGIN}/embed/embed.js`;
const CAL_NAMESPACE = "recipebuilder-demo";
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];
const UTM_STORAGE_KEY = "rb_utm";

type CalCommand = (...args: unknown[]) => void;
type CalGlobal = CalCommand & {
  ns: Record<string, CalCommand>;
  q?: unknown[];
  loaded?: boolean;
};
type BookingSuccessEvent = CustomEvent<{
  data?: { uid?: string; startTime?: string };
}>;

declare global {
  interface Window {
    Cal?: CalGlobal;
  }
}

// Official cal.com embed loader, which queues commands until embed.js loads.
function installCalSnippet() {
  /* eslint-disable */
  (function (C: any, A: string, L: string) {
    let p = function (a: any, ar: any) {
      a.q.push(ar);
    };
    let d = C.document;
    C.Cal =
      C.Cal ||
      function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
  })(window, CAL_EMBED_SRC, "init");
  /* eslint-enable */
}

function ctaLocation(el: Element): string {
  if (el.closest("header, nav")) return "navbar";
  if (el.closest("footer")) return "footer";
  const section = el.closest("section");
  if (!section) return "page";
  if (section.id) return section.id;
  const sections = Array.from(document.querySelectorAll("main section, body > section"));
  const index = sections.indexOf(section);
  if (index === 0) return "hero";
  return index > 0 ? `section_${index + 1}` : "page";
}

function ctaText(el: Element): string {
  const text = el.textContent?.replace(/\s+/g, " ").trim() || el.getAttribute("aria-label") || "";
  return text.slice(0, 100);
}

function pickUtms(params: URLSearchParams): Record<string, string> {
  return Object.fromEntries(
    UTM_KEYS.filter((key) => params.get(key)).map((key) => [key, params.get(key)!])
  );
}

function rememberUtms() {
  try {
    const utms = pickUtms(new URLSearchParams(window.location.search));
    if (Object.keys(utms).length > 0) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utms));
    }
  } catch {
    // Storage can be unavailable (private mode); attribution is best-effort.
  }
}

function storedUtms(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

// UTMs on the link itself (blog CTAs set utm_content), overridden by the ones
// the visitor landed with, which carry the ad attribution.
function bookingConfig(href: string): Record<string, string> {
  let linkUtms: Record<string, string> = {};
  try {
    linkUtms = pickUtms(new URL(href).searchParams);
  } catch {
    // Malformed href: book without the link's UTMs.
  }
  return { layout: "month_view", ...linkUtms, ...storedUtms() };
}

// How long a click made before embed.js has loaded waits for the popup
// before cal.com is opened directly instead.
const CAL_LOAD_TIMEOUT_MS = 4000;

// Module-level so React Strict Mode's double effect run in development
// can't register the cal.com listener twice or double-count a booking.
let calInitialized = false;
let calReady = false;
let calFailed = false;
let pendingHref: string | null = null;
let pendingTimer: number | undefined;
let lastCta: { location: string; text: string } | null = null;
const trackedBookings = new Set<string>();

function openPopup(href: string) {
  window.Cal?.ns?.[CAL_NAMESPACE]?.("modal", {
    calLink: CAL_LINK,
    config: bookingConfig(href),
  });
}

// Fallback when the popup can't load. A delayed window.open can be stopped
// by popup blockers, so then this tab goes to cal.com instead.
function openCalDirectly(href: string) {
  const win = window.open(href, "_blank");
  if (win) win.opener = null;
  else window.location.assign(href);
}

function takePendingHref(): string | null {
  const href = pendingHref;
  pendingHref = null;
  window.clearTimeout(pendingTimer);
  return href;
}

function onBookingSuccess(e: BookingSuccessEvent) {
  const uid = e.detail?.data?.uid ?? null;
  if (uid) {
    if (trackedBookings.has(uid)) return;
    trackedBookings.add(uid);
  }
  trackEvent({
    event: "demo_booked",
    cta_location: lastCta?.location ?? null,
    cta_text: lastCta?.text ?? null,
    contact_method: null,
    booking_uid: uid,
  });
}

function setupCal() {
  if (calInitialized) return;
  calInitialized = true;
  installCalSnippet();
  const cal = window.Cal!;
  cal("init", CAL_NAMESPACE, { origin: CAL_ORIGIN });
  const api = cal.ns[CAL_NAMESPACE];
  api("ui", { hideEventTypeDetails: false, layout: "month_view" });
  api("on", { action: "bookingSuccessfulV2", callback: onBookingSuccess });

  const script = document.querySelector<HTMLScriptElement>(
    `script[src="${CAL_EMBED_SRC}"]`
  );
  script?.addEventListener("load", () => {
    calReady = true;
    const href = takePendingHref();
    if (href) openPopup(href);
  });
  script?.addEventListener("error", () => {
    calFailed = true;
    const href = takePendingHref();
    if (href) openCalDirectly(href);
  });
}

function onClick(e: MouseEvent) {
  const anchor = (e.target as Element | null)?.closest?.("a[href]");
  if (!(anchor instanceof HTMLAnchorElement)) return;
  const href = anchor.href;
  const location = ctaLocation(anchor);
  const text = ctaText(anchor);

  if (href.includes(CAL_LINK)) {
    lastCta = { location, text };
    trackEvent({
      event: "book_demo_click",
      cta_location: location,
      cta_text: text,
      contact_method: null,
      booking_uid: null,
    });

    const plainClick =
      e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
    if (!plainClick || e.defaultPrevented || calFailed) return;
    e.preventDefault();
    if (calReady) {
      openPopup(href);
      return;
    }
    // Clicked before embed.js loaded (or before it started loading): open
    // the popup once it loads rather than losing the booking to a new tab.
    setupCal();
    window.clearTimeout(pendingTimer);
    pendingHref = href;
    pendingTimer = window.setTimeout(() => {
      const pending = takePendingHref();
      if (pending) openCalDirectly(pending);
    }, CAL_LOAD_TIMEOUT_MS);
    return;
  }

  const contactMethod = href.startsWith("mailto:")
    ? "email"
    : /\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)
      ? "whatsapp"
      : null;
  if (contactMethod) {
    trackEvent({
      event: "contact_click",
      cta_location: location,
      cta_text: text,
      contact_method: contactMethod,
      booking_uid: null,
    });
  }
}

// Opens the booking page in a cal.com popup instead of a new tab, so the
// booking can be measured on recipebuilder.co. A click that lands before the
// embed script has loaded waits for it; if the script is blocked or too slow,
// cal.com opens directly as the link would normally.
export default function BookingTracker() {
  useEffect(() => {
    rememberUtms();

    // Safari has no requestIdleCallback.
    const hasIdle = typeof window.requestIdleCallback === "function";
    const handle = hasIdle
      ? window.requestIdleCallback(setupCal, { timeout: 3000 })
      : window.setTimeout(setupCal, 1500);

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      if (hasIdle) window.cancelIdleCallback(handle);
      else window.clearTimeout(handle);
    };
  }, []);

  return null;
}
