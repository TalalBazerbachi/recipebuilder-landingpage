import { blogPosts } from "@/data/blog-posts";

const SITE_URL = "https://www.recipebuilder.co";
const FEED_TITLE = "RecipeBuilder Blog";
const FEED_DESCRIPTION =
  "Food labeling and compliance guides for food businesses in the UAE — UAE labeling rules, product registration, and Dubai Municipality school catering requirements — from the RecipeBuilder team.";

// When the set of posts last changed (a post added, removed, or materially
// updated). Bump alongside those changes. Kept stable rather than using the
// build time, for the same reason as the sitemap lastmod dates.
const FEED_LAST_CHANGED = "2026-09-14";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const lastChanged = Math.max(
    new Date(FEED_LAST_CHANGED).getTime(),
    ...blogPosts.map((post) =>
      new Date(post.updatedDate ?? post.date).getTime(),
    ),
  );
  const lastBuildDate = new Date(lastChanged).toUTCString();

  const items = sorted
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <description>${escapeXml(post.description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
