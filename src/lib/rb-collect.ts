// Server-side sender to the analytics collector (a Supabase edge function
// that stores events in the `analytics` schema). The URL is not a secret.
export const RB_COLLECT_URL =
  process.env.RB_COLLECT_URL ??
  "https://skpgwmmltttnqoudnsml.supabase.co/functions/v1/rb-collect";

// Never throws: analytics must not break a page or a booking.
export async function sendToCollector(payload: unknown): Promise<void> {
  try {
    const res = await fetch(RB_COLLECT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) console.error("[rb-analytics] collector replied", res.status);
  } catch (err) {
    console.error("[rb-analytics] collector unreachable", err);
  }
}
