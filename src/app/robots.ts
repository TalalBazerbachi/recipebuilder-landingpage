import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      crawlDelay: 1,
    },
    sitemap: "https://recipebuilder.bytebeam.co/sitemap.xml",
    host: "https://recipebuilder.bytebeam.co",
  };
}
