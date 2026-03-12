import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All crawlers
      { userAgent: "*", allow: "/" },
      // OpenAI
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      // Anthropic
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      // Google
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      // Apple
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      // Meta / Facebook
      { userAgent: "FacebookBot", allow: "/" },
      // Common Crawl (trains many open-source LLMs)
      { userAgent: "CCBot", allow: "/" },
      // Cohere
      { userAgent: "cohere-ai", allow: "/" },
      // Bytedance
      { userAgent: "Bytespider", allow: "/" },
      // You.com
      { userAgent: "YouBot", allow: "/" },
      // Brave
      { userAgent: "BraveBot", allow: "/" },
    ],
    sitemap: "https://recipebuilder.bytebeam.co/sitemap.xml",
    host: "https://recipebuilder.bytebeam.co",
  };
}
