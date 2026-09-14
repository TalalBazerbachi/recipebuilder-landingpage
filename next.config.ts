import type { NextConfig } from "next";

const consolidationRedirects: Record<string, string> = {
  // Free tools removed
  "/tools": "/",
  "/tools/nutrition-label-generator": "/food-labeling",
  "/tools/ingredient-list-maker": "/food-labeling",
  "/tools/recipe-cost-calculator": "/cost-tracking",
  // GCC landing page removed
  "/gcc": "/",
  // Overlapping product and hub pages merged
  "/nutrition-analysis": "/food-labeling",
  "/inventory-management": "/recipe-management",
  "/compliance-resources": "/blog",
  // Tier 2 and tier 3 comparisons removed
  "/compare/genesis-rd-alternative": "/compare",
  "/compare/nutritics-alternative": "/compare",
  "/compare/nutritionist-pro-alternative": "/compare",
  "/compare/menusano-alternative": "/compare",
  "/compare/nutraid-alternative": "/compare",
  "/compare/foodzilla-alternative": "/compare",
  "/compare/erudus-alternative": "/compare",
  "/compare/lab-testing-alternative": "/food-labeling",
  // Competitor content lives only under /compare
  "/blog/best-nutrition-label-software-2026": "/compare",
  "/blog/best-nutrition-label-software-gcc-middle-east": "/compare",
  "/blog/recipal-alternatives": "/compare/recipal-alternative",
  "/blog/food-label-maker-alternatives": "/compare/food-label-maker-alternative",
  // US-only content removed
  "/blog/fda-nutrition-facts-label-requirements-guide": "/food-labeling",
  // Overlapping blog posts merged into the post that owns the topic
  "/blog/food-labeling-dubai-uae-s-192-2019-guide":
    "/blog/uae-food-labeling-requirements-2026",
  "/blog/gcc-sugar-tax-food-beverage-manufacturers-guide":
    "/blog/uae-food-labeling-requirements-2026",
  "/blog/abu-dhabi-school-nutrition-guidelines-food-businesses":
    "/blog/dubai-municipality-school-food-requirements-caterers-guide",
  "/blog/dubai-municipality-food-safety-requirements-catering-companies":
    "/blog/dubai-municipality-school-food-requirements-caterers-guide",
  "/blog/food-safety-sops-institutional-catering":
    "/blog/dubai-municipality-school-food-requirements-caterers-guide",
  "/blog/green-canteen-certification-dubai-sustainability":
    "/blog/dubai-municipality-school-food-requirements-caterers-guide",
  "/blog/nutrition-compliance-school-caterers-dubai-calorie-allergen-menu":
    "/blog/smart-food-choices-system-dubai-school-canteen",
  "/blog/nutrition-in-charge-dubai-schools-nic-guide":
    "/blog/nutri-check-dubai-school-canteen-compliance-guide",
  "/blog/dubai-school-canteen-monthly-audit-checklist":
    "/blog/nutri-check-dubai-school-canteen-compliance-guide",
  "/blog/allergen-labeling-gcc-complete-guide":
    "/blog/uae-food-labeling-requirements-2026",
  "/blog/halal-food-labeling-uae-requirements":
    "/blog/uae-food-labeling-requirements-2026",
  "/blog/uae-wellness-strategy-food-businesses":
    "/blog/front-of-pack-nutrition-labels-gcc-guide",
  "/blog/gulf-region-future-of-food-industry": "/blog",
  "/blog/digital-tools-transforming-fnb-operations-gcc": "/recipe-management",
  "/blog/gcc-document-compliance-automation-2026":
    "/blog/dubai-municipality-montaji-food-registration",
  "/blog/fda-serving-size-rules-racc-guide":
    "/food-labeling",
  "/blog/fda-allergen-labeling-requirements-falcpa-faster-act":
    "/food-labeling",
  "/blog/fda-nutrition-claims-labeling-guide":
    "/food-labeling",
  "/blog/restaurant-calorie-labeling-fda-menu-requirements":
    "/food-labeling",
};

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "recipebuilder.co" }],
        destination: "https://www.recipebuilder.co/:path*",
        permanent: true,
      },
      // Consolidation (2026-09): removed pages redirect to the page that
      // now owns their intent, so no overlapping URLs remain indexed.
      ...Object.entries(consolidationRedirects).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
