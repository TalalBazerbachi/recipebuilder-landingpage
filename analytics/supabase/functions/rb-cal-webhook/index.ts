// rb-cal-webhook — receives cal.com booking webhooks for RecipeBuilder.
//
// A thin pipe: it hands the raw body and cal.com's signature header to
// analytics.cal_webhook() in the database, which verifies the signature
// against the secret stored there, ignores other products' event types, and
// writes the booking and the lead.

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const MAX_BODY_CHARS = 300_000;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === "GET") {
    return json({ ok: true, service: "rb-cal-webhook", configured: Boolean(SUPABASE_URL && SERVICE_KEY) });
  }
  if (req.method !== "POST") return json({ ok: false, error: "method not allowed" }, 405);

  const raw = await req.text();
  if (raw.length > MAX_BODY_CHARS) return json({ ok: false, error: "too large" }, 413);

  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/rb_analytics_cal_webhook`, {
    method: "POST",
    headers: {
      apikey: SERVICE_KEY,
      Authorization: `Bearer ${SERVICE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ p_raw: raw, p_signature: req.headers.get("x-cal-signature-256") }),
  });

  if (!res.ok) {
    // 500 so cal.com retries: a dropped booking is a lost lead record.
    console.error("[rb-cal-webhook] store failed", res.status, await res.text());
    return json({ ok: false, error: "store failed" }, 500);
  }

  const out = (await res.json()) as { ok?: boolean; status?: number; handled?: boolean; note?: string; error?: string };
  const status = out?.ok === false && typeof out.status === "number" ? out.status : 200;
  return json({ ok: out?.ok !== false, handled: out?.handled ?? false, note: out?.note ?? out?.error }, status);
});
