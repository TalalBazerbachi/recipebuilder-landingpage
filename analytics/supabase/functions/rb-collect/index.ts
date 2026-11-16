// rb-collect — stores analytics events sent by the RecipeBuilder site.
//
// Called server-to-server by the site's /api/t route (never by browsers), so
// there is no CORS and no key in the site's code. It is a thin pipe: all
// validation and storage logic lives in analytics.ingest() in the database.

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const MAX_BODY_CHARS = 32_000;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === "GET") {
    return json({ ok: true, service: "rb-collect", configured: Boolean(SUPABASE_URL && SERVICE_KEY) });
  }
  if (req.method !== "POST") return json({ ok: false, error: "method not allowed" }, 405);

  const raw = await req.text();
  if (raw.length > MAX_BODY_CHARS) return json({ ok: false, error: "too large" }, 413);

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: "invalid json" }, 400);
  }
  if (!body || typeof body !== "object" || !Array.isArray((body as { events?: unknown }).events)) {
    return json({ ok: false, error: "events must be an array" }, 400);
  }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/rb_analytics_ingest`, {
    method: "POST",
    headers: {
      apikey: SERVICE_KEY,
      Authorization: `Bearer ${SERVICE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ p: body }),
  });
  if (!res.ok) {
    console.error("[rb-collect] ingest failed", res.status, await res.text());
    return json({ ok: false, error: "store failed" }, 502);
  }
  return json(await res.json());
});
