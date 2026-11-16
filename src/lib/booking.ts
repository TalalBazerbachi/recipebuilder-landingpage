import { CAL_LINK } from "@/lib/analytics";

export const BOOKING_BASE_URL = `https://cal.com/${CAL_LINK}`;

// Names of the values a booking link carries. cal.com stores `metadata[...]`
// query parameters on the booking and returns them in its webhook, where
// analytics.cal_webhook() reads them.
export const BOOKING_PARAM = {
  from: "metadata[rb_from]", // page the link is on
  cta: "metadata[rb_cta]", // which button on that page
  visitor: "metadata[rb_vid]",
  session: "metadata[rb_sid]",
  landing: "metadata[rb_lp]", // first page of the visit
} as const;

/**
 * The booking link for a page. The page path is part of the link itself, so a
 * booking made from a copied link, or from a link an AI assistant quoted, still
 * says which page the link came from.
 */
export function bookingHref(pagePath: string, cta?: string): string {
  const params = new URLSearchParams();
  params.set(BOOKING_PARAM.from, pagePath || "/");
  if (cta) params.set(BOOKING_PARAM.cta, cta);
  return `${BOOKING_BASE_URL}?${params.toString()}`;
}

const BOOKING_HREF_IN_HTML = new RegExp(
  `href="https://cal\\.com/${CAL_LINK.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\?[^"]*)?"`,
  "g"
);

/**
 * Rewrites booking links inside an HTML string (blog post bodies) to the
 * page-stamped form. A link's old `utm_content` (top-cta, product-cta, ...)
 * is kept as the button name.
 */
export function stampBookingLinksInHtml(html: string, pagePath: string): string {
  return html.replace(BOOKING_HREF_IN_HTML, (_match, query?: string) => {
    let cta: string | undefined;
    if (query) {
      const params = new URLSearchParams(query.slice(1).replace(/&amp;/g, "&"));
      cta = params.get("utm_content") ?? undefined;
    }
    return `href="${bookingHref(pagePath, cta ?? "article").replace(/&/g, "&amp;")}"`;
  });
}
