// AI crawlers and assistants, identified by a token in their User-Agent.
//
// kind:
//   assistant — fetched live because a person asked the AI something
//   search    — indexing for an AI search product
//   training  — crawling to train models
//
// Keep AI_BOT_UA_PATTERN in src/proxy.ts in sync with the tokens listed here:
// the proxy only runs for requests whose User-Agent matches that pattern.

export type AiBotKind = "assistant" | "search" | "training";
export type AiBot = { name: string; operator: string; kind: AiBotKind };

const BOTS: Array<[token: string, operator: string, kind: AiBotKind]> = [
  ["ChatGPT-User", "openai", "assistant"],
  ["OAI-SearchBot", "openai", "search"],
  ["GPTBot", "openai", "training"],
  ["Claude-User", "anthropic", "assistant"],
  ["Claude-SearchBot", "anthropic", "search"],
  ["ClaudeBot", "anthropic", "training"],
  ["anthropic-ai", "anthropic", "training"],
  ["Perplexity-User", "perplexity", "assistant"],
  ["PerplexityBot", "perplexity", "search"],
  ["MistralAI-User", "mistral", "assistant"],
  ["DuckAssistBot", "duckduckgo", "assistant"],
  ["Meta-ExternalFetcher", "meta", "assistant"],
  ["meta-externalagent", "meta", "training"],
  ["Google-NotebookLM", "google", "assistant"],
  ["Gemini-Deep-Research", "google", "assistant"],
  ["Google-CloudVertexBot", "google", "training"],
  ["GoogleOther", "google", "training"],
  ["Applebot", "apple", "search"],
  ["Amazonbot", "amazon", "search"],
  ["YouBot", "you.com", "search"],
  ["ExaBot", "exa", "search"],
  ["ExaSearchBot", "exa", "search"],
  ["PhindBot", "phind", "search"],
  ["Kagibot", "kagi", "search"],
  ["Bravebot", "brave", "search"],
  ["cohere-training-data-crawler", "cohere", "training"],
  ["cohere-ai", "cohere", "assistant"],
  ["Bytespider", "bytedance", "training"],
  ["CCBot", "commoncrawl", "training"],
  ["Diffbot", "diffbot", "training"],
  ["AI2Bot", "ai2", "training"],
  ["Timpibot", "timpi", "training"],
];

export function classifyAiBot(userAgent: string): AiBot | null {
  for (const [token, operator, kind] of BOTS) {
    if (userAgent.includes(token)) return { name: token, operator, kind };
  }
  return null;
}
