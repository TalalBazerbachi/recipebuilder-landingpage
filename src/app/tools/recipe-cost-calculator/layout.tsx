import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Free Recipe Cost Calculator — Food Cost Per Serving Calculator | RecipeBuilder",
  description:
    "Calculate your recipe food cost per serving in seconds. Enter ingredient quantities and unit costs to get total cost, cost per serving, suggested retail price, food cost percentage, and gross margin — live.",
  keywords: [
    "recipe cost calculator",
    "food cost per serving calculator",
    "food cost percentage calculator",
    "restaurant recipe costing",
    "menu costing tool",
    "food cost formula",
    "cost per serving food",
    "suggested retail price food",
    "gross margin food business",
    "free recipe costing tool",
  ],
  alternates: {
    canonical:
      "https://recipebuilder.bytebeam.co/tools/recipe-cost-calculator",
  },
  openGraph: {
    title: "Free Recipe Cost Calculator | RecipeBuilder",
    description:
      "Calculate food cost per serving, suggested retail price, and gross margin in real time. Free, no sign-up.",
    url: "https://recipebuilder.bytebeam.co/tools/recipe-cost-calculator",
    siteName: "RecipeBuilder",
    type: "website",
  },
};

export default function RecipeCostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
