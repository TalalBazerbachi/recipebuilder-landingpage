export const GTM_ID = "GTM-P9JRRWQV";

// Every "Book a Call" / "Book a Demo" link on the site points here.
export const CAL_LINK = "talal-bazerbachi-jb8a7d/recipebuilder-discovery-call";

// Keys every push sets, so values from an earlier event never leak into a
// later one (GTM's data layer merges pushes into one persistent model).
type TrackedEvent = {
  event: "book_demo_click" | "demo_booked" | "contact_click";
  cta_location: string | null;
  cta_text: string | null;
  contact_method: "email" | "whatsapp" | null;
  booking_uid: string | null;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function trackEvent(payload: TrackedEvent) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}
