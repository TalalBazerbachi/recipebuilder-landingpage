import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import { comparePages } from "@/data/compare-content";

// Stable per-route lastmod dates. Bump these alongside meaningful content
// changes — never set them to `new Date()`, which makes every URL claim
// to have been updated on the build date and causes Google to ignore
// lastmod entirely as an untrustworthy signal.
const ROUTE_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-09-14",
  "/school-catering-dubai": "2026-09-14",
  "/blog": "2026-09-14",
  "/compare": "2026-09-14",
  "/about": "2026-09-14",
  "/food-labeling": "2026-09-14",
  "/recipe-management": "2026-09-14",
  "/cost-tracking": "2026-09-14",
};

const COMPARE_LAST_MODIFIED = "2026-09-14";

// Privacy policy and terms are noindex, so they are deliberately left out.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.recipebuilder.co";

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productPages = ["food-labeling", "recipe-management", "cost-tracking"];

  const productEntries: MetadataRoute.Sitemap = productPages.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(ROUTE_LAST_MODIFIED[`/${slug}`]),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const compareEntries: MetadataRoute.Sitemap = comparePages.map((page) => ({
    url: `${baseUrl}/compare/${page.slug}`,
    lastModified: new Date(COMPARE_LAST_MODIFIED),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(ROUTE_LAST_MODIFIED["/"]),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/school-catering-dubai`,
      lastModified: new Date(ROUTE_LAST_MODIFIED["/school-catering-dubai"]),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(ROUTE_LAST_MODIFIED["/blog"]),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(ROUTE_LAST_MODIFIED["/compare"]),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(ROUTE_LAST_MODIFIED["/about"]),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...productEntries,
    ...compareEntries,
    ...blogEntries,
  ];
}
