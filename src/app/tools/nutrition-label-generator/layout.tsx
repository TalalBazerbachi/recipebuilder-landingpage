import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Free FDA Nutrition Label Generator — Create Nutrition Facts Panels Online | RecipeBuilder",
  description:
    "Generate a pixel-perfect FDA Nutrition Facts panel instantly. Enter serving size, calories, and all nutrients — the label renders in real time. Free, no sign-up required.",
  keywords: [
    "FDA nutrition label generator",
    "nutrition facts panel maker",
    "free nutrition label creator",
    "nutrition facts generator online",
    "food label generator",
    "FDA compliant nutrition label",
    "nutrition facts panel template",
    "create nutrition label free",
  ],
  alternates: {
    canonical:
      "https://recipebuilder.bytebeam.co/tools/nutrition-label-generator",
  },
  openGraph: {
    title:
      "Free FDA Nutrition Label Generator | RecipeBuilder",
    description:
      "Create a real-time FDA Nutrition Facts panel. Enter nutrients and watch the label render instantly.",
    url: "https://recipebuilder.bytebeam.co/tools/nutrition-label-generator",
    siteName: "RecipeBuilder",
    type: "website",
  },
};

export default function NutritionLabelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
