import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

// Stable per-route lastmod dates. Bump these alongside meaningful content
// changes — never set them to `new Date()`, which makes every URL claim
// to have been updated on the build date and causes Google to ignore
// lastmod entirely as an untrustworthy signal.
const ROUTE_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-05-21",
  "/gcc": "2026-05-21",
  "/school-catering-dubai": "2026-03-12",
  "/blog": "2026-03-21",
  "/compare": "2026-05-21",
  "/tools": "2026-05-21",
  "/about": "2026-03-11",
  "/compliance-resources": "2026-05-21",
  "/food-labeling": "2026-05-21",
  "/recipe-management": "2026-05-21",
  "/nutrition-analysis": "2026-05-21",
  "/cost-tracking": "2026-05-21",
  "/inventory-management": "2026-05-21",
  "/privacy-policy": "2026-02-25",
  "/terms-of-service": "2026-02-25",
};

const COMPARE_LAST_MODIFIED = "2026-03-12";
const TOOL_LAST_MODIFIED = "2026-03-12";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.recipebuilder.co";

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productPages = [
    "food-labeling",
    "recipe-management",
    "nutrition-analysis",
    "cost-tracking",
    "inventory-management",
  ];

  const productEntries: MetadataRoute.Sitemap = productPages.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(ROUTE_LAST_MODIFIED[`/${slug}`]),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const compareSlugs = [
    "recipal-alternative",
    "food-label-maker-alternative",
    "nutrical-alternative",
    "labelcalc-alternative",
    "genesis-rd-alternative",
    "nutritics-alternative",
    "nutritionist-pro-alternative",
    "menusano-alternative",
    "nutraid-alternative",
    "foodzilla-alternative",
    "erudus-alternative",
    "lab-testing-alternative",
  ];

  const compareEntries: MetadataRoute.Sitemap = compareSlugs.map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date(COMPARE_LAST_MODIFIED),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const toolSlugs = [
    "nutrition-label-generator",
    "ingredient-list-maker",
    "recipe-cost-calculator",
  ];

  const toolEntries: MetadataRoute.Sitemap = toolSlugs.map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    lastModified: new Date(TOOL_LAST_MODIFIED),
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
      url: `${baseUrl}/gcc`,
      lastModified: new Date(ROUTE_LAST_MODIFIED["/gcc"]),
      changeFrequency: "weekly",
      priority: 0.9,
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
      url: `${baseUrl}/tools`,
      lastModified: new Date(ROUTE_LAST_MODIFIED["/tools"]),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(ROUTE_LAST_MODIFIED["/about"]),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/compliance-resources`,
      lastModified: new Date(ROUTE_LAST_MODIFIED["/compliance-resources"]),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...productEntries,
    ...compareEntries,
    ...toolEntries,
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(ROUTE_LAST_MODIFIED["/privacy-policy"]),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(ROUTE_LAST_MODIFIED["/terms-of-service"]),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    ...blogEntries,
  ];
}
