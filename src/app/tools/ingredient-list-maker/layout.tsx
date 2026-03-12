import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Free Ingredient List Maker — Create Compliant Food Ingredient Statements | RecipeBuilder",
  description:
    "Build FDA and GCC-compliant food ingredient statements in seconds. Add ingredients with weights, sort them automatically by descending weight, detect allergens, and copy the formatted statement to your label.",
  keywords: [
    "ingredient list maker",
    "food ingredient statement generator",
    "FDA ingredient list",
    "ingredient list by weight",
    "allergen checker free",
    "food label ingredient list",
    "GCC ingredient list",
    "create ingredient statement",
    "compound ingredient food label",
  ],
  alternates: {
    canonical:
      "https://recipebuilder.bytebeam.co/tools/ingredient-list-maker",
  },
  openGraph: {
    title: "Free Ingredient List Maker | RecipeBuilder",
    description:
      "Create compliant ingredient statements sorted by weight with allergen highlighting. Free, no sign-up.",
    url: "https://recipebuilder.bytebeam.co/tools/ingredient-list-maker",
    siteName: "RecipeBuilder",
    type: "website",
  },
};

export default function IngredientListMakerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
