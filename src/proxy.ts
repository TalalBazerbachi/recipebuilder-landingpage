import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { classifyAiBot } from "@/lib/ai-bots";
import { sendToCollector } from "@/lib/rb-collect";

// Records which pages AI crawlers and assistants fetch (ChatGPT, Perplexity,
// Claude and others), so we can see what they read and cite.
//
// The matcher below only lets requests through here when the User-Agent names
// one of those bots. People, Googlebot and everything else are served straight
// from the cache and never run this code. The response is not changed.
export function proxy(req: NextRequest, event: NextFetchEvent) {
  const ua = req.headers.get("user-agent") ?? "";
  const bot = classifyAiBot(ua);
  if (bot && req.method === "GET") {
    const host = (req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? "")
      .toLowerCase()
      .split(":")[0];
    event.waitUntil(
      sendToCollector({
        host,
        ctx: { ua: ua.slice(0, 400), country: req.headers.get("x-vercel-ip-country") ?? "" },
        events: [
          {
            name: "ai_fetch",
            ts: Date.now(),
            path: req.nextUrl.pathname,
            props: {
              bot: bot.name,
              operator: bot.operator,
              kind: bot.kind,
              query: req.nextUrl.search.slice(0, 300),
            },
          },
        ],
      })
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      // Pages only: no Next.js internals, API routes or files with an extension.
      source: "/((?!_next/|api/|.*\\..*).*)",
      has: [
        {
          type: "header",
          key: "user-agent",
          // Keep in sync with the tokens in src/lib/ai-bots.ts.
          value:
            ".*(ChatGPT-User|OAI-SearchBot|GPTBot|Claude-User|Claude-SearchBot|ClaudeBot|anthropic-ai|Perplexity-User|PerplexityBot|MistralAI-User|DuckAssistBot|Meta-ExternalFetcher|meta-externalagent|Google-NotebookLM|Gemini-Deep-Research|Google-CloudVertexBot|GoogleOther|Applebot|Amazonbot|YouBot|ExaBot|ExaSearchBot|PhindBot|Kagibot|Bravebot|cohere-training-data-crawler|cohere-ai|Bytespider|CCBot|Diffbot|AI2Bot|Timpibot).*",
        },
      ],
    },
  ],
};
