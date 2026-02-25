import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustPillars from "@/components/TrustPillars";
import {
  ArrowRight,
  Activity,
  PieChart,
  FileText,
  CircleDot,
  Scale,
  Flame,
  AlertTriangle,
  Dumbbell,
  CheckCircle,
  Database,
  Calculator,
  Wheat,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Nutrition Analysis Software — Automatic Nutrition Facts from Recipes | RecipeBuilder",
  description:
    "Automatically calculate nutrition facts from your recipes using USDA data. Generate FDA-style nutrition panels, traffic light labels, macro breakdowns, and allergen reports. Per-serving and per-100g calculations included.",
  keywords: [
    "nutrition analysis software",
    "nutrition facts generator",
    "calorie calculator recipes",
    "macro nutrient analysis",
    "food nutrition software",
    "recipe nutrition calculator",
    "dietary analysis tool",
    "nutrition label generator",
    "traffic light nutrition labels",
    "vitamin mineral tracking",
    "allergen identification software",
  ],
};

const analysisFeatures = [
  {
    icon: Calculator,
    title: "Automatic Nutrition Calculation",
    description:
      "RecipeBuilder calculates the complete nutrition profile of every recipe automatically. Add your ingredients and quantities, and the system produces a full breakdown based on USDA FoodData Central data — no manual calculations required.",
  },
  {
    icon: FileText,
    title: "FDA-Style Nutrition Facts Panel",
    description:
      "Generate a standard nutrition facts panel formatted in the FDA style used across the food industry. Includes serving size, calories, total fat, saturated fat, trans fat, cholesterol, sodium, carbohydrates, fiber, sugars, and protein.",
  },
  {
    icon: Activity,
    title: "Traffic Light Labels",
    description:
      "Produce traffic light nutrition labels showing color-coded indicators for energy, fat, saturates, sugars, and salt. Green, amber, and red indicators give consumers a quick visual guide to the nutritional balance of your product.",
  },
  {
    icon: PieChart,
    title: "Macro Nutrient Breakdown Chart",
    description:
      "View a donut chart showing the macro nutrient distribution of your recipe — protein, carbohydrates, and fat as a percentage of total energy. Instantly understand the nutritional balance of any recipe at a glance.",
  },
  {
    icon: Scale,
    title: "Per-Serving & Per-100g Calculations",
    description:
      "Nutrition data is calculated both per serving and per 100g. Per-serving data is ideal for consumer-facing labels, while per-100g data is required by many GCC and international labeling standards.",
  },
  {
    icon: Dumbbell,
    title: "Vitamin & Mineral Tracking",
    description:
      "Track vitamins and minerals across your recipes including Vitamin A, Vitamin C, calcium, iron, potassium, and more. Full micronutrient data is pulled from the USDA database for every ingredient in your recipe.",
  },
];

const nutrientList = [
  { category: "Energy", items: ["Calories (kcal)", "Kilojoules (kJ)"] },
  {
    category: "Macronutrients",
    items: [
      "Total Fat",
      "Saturated Fat",
      "Trans Fat",
      "Total Carbohydrates",
      "Dietary Fiber",
      "Total Sugars",
      "Protein",
    ],
  },
  {
    category: "Minerals & Electrolytes",
    items: ["Sodium", "Cholesterol", "Calcium", "Iron", "Potassium"],
  },
  {
    category: "Vitamins",
    items: ["Vitamin A", "Vitamin C", "Vitamin D", "B Vitamins"],
  },
];

export default function NutritionAnalysisPage() {
  return (
    <>
      <Navbar light />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/60 to-white pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary-light rounded-full">
                <Activity className="w-4 h-4" />
                NUTRITION ANALYSIS SOFTWARE
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Automatic{" "}
                <span className="text-primary">Nutrition Facts</span> From
                Your Recipes
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-text max-w-2xl mx-auto leading-relaxed">
                Calculate complete nutrition breakdowns from your recipes using
                USDA data. Generate FDA-style nutrition panels, traffic light
                labels, macro charts, and allergen reports — all calculated
                automatically from your ingredients.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-foreground bg-white border border-border rounded-lg hover:bg-surface transition-colors"
                >
                  Explore All Features
                </a>
              </div>
            </div>

            {/* Stats bar */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl border border-border shadow-sm">
                <Database className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">
                  20,000+
                </span>
                <span className="text-sm text-text text-center">
                  FDA-Sourced Ingredients
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl border border-border shadow-sm">
                <Flame className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">
                  Full Profile
                </span>
                <span className="text-sm text-text text-center">
                  Macros, Vitamins & Minerals
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl border border-border shadow-sm">
                <CircleDot className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">
                  Per-Serving
                </span>
                <span className="text-sm text-text text-center">
                  And Per-100g Calculations
                </span>
              </div>
            </div>

            {/* Hero Screenshot */}
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-border shadow-xl overflow-hidden bg-white">
                <Image
                  src="/screenshots/nutrition-label.png"
                  alt="RecipeBuilder nutrition facts panel with traffic light labels showing energy, fat, sugars, and salt per serving"
                  width={1400}
                  height={900}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Analysis Features
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Complete Nutrition Analysis for Every Recipe
              </h2>
              <p className="mt-4 text-lg text-text">
                RecipeBuilder provides a full suite of nutrition analysis tools
                that calculate, format, and visualize nutrition data from your
                recipes automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analysisFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Analysis Works */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                How It Works
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                From Ingredients to Nutrition Facts in Seconds
              </h2>
              <p className="mt-4 text-lg text-text">
                RecipeBuilder calculates nutrition data as you build your
                recipe. Add ingredients, set quantities, and the analysis
                updates in real time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Add Ingredients",
                  description:
                    "Search the 20,000+ FDA-sourced database and add ingredients to your recipe with precise quantities and units.",
                },
                {
                  step: "02",
                  title: "Set Serving Size",
                  description:
                    "Define your serving size and number of servings. This determines the per-serving nutrition calculations on your label.",
                },
                {
                  step: "03",
                  title: "Review Analysis",
                  description:
                    "View the complete nutrition breakdown with FDA-style panel, traffic light indicators, macro chart, and allergen report.",
                },
                {
                  step: "04",
                  title: "Generate Label",
                  description:
                    "Use the nutrition data to auto-generate a complete food label with all panels, barcodes, and bilingual content.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary text-white rounded-2xl text-xl font-bold mb-5">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nutrients Tracked Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Comprehensive Data
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                  Full Nutrient Profile for Every Recipe
                </h2>
                <p className="mt-4 text-lg text-text leading-relaxed">
                  RecipeBuilder tracks a complete range of nutrients for every
                  recipe. From macronutrients like protein, carbohydrates, and
                  fat to micronutrients like Vitamin A, calcium, and iron —
                  every recipe gets a full nutritional profile.
                </p>
                <p className="mt-4 text-text leading-relaxed">
                  All nutrient values are calculated from the USDA FoodData
                  Central database, the same source used by the FDA and food
                  scientists worldwide. This ensures your nutrition data is
                  accurate and based on established reference values.
                </p>
                <p className="mt-4 text-text leading-relaxed">
                  The analysis covers all nutrients required for standard
                  nutrition facts panels, traffic light labels, and GCC
                  labeling requirements. Whether you need data for a consumer
                  label or a regulatory submission, RecipeBuilder provides it.
                </p>
              </div>

              <div className="space-y-6">
                {nutrientList.map((group) => (
                  <div
                    key={group.category}
                    className="bg-white rounded-2xl border border-border p-6"
                  >
                    <h3 className="font-semibold text-foreground mb-4">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-light text-primary text-sm font-medium rounded-full"
                        >
                          <CheckCircle className="w-3.5 h-3.5" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Allergen Identification Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-white rounded-2xl border border-border p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Allergens Automatically Identified
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Gluten (wheat, barley, rye)",
                    "Dairy (milk, lactose)",
                    "Tree Nuts",
                    "Peanuts",
                    "Eggs",
                    "Soy",
                    "Fish",
                    "Shellfish",
                    "Sesame",
                    "Mustard",
                    "Celery",
                    "Lupin",
                  ].map((allergen) => (
                    <div
                      key={allergen}
                      className="flex items-start gap-2 p-3 bg-surface rounded-lg"
                    >
                      <AlertTriangle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-text">{allergen}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Allergen Safety
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                  Automatic Allergen Identification from Your Ingredients
                </h2>
                <p className="mt-4 text-lg text-text leading-relaxed">
                  RecipeBuilder automatically scans your recipe ingredients and
                  identifies all major allergens. This information appears in
                  the nutrition analysis and is included on generated food
                  labels as allergen declarations.
                </p>
                <p className="mt-4 text-text leading-relaxed">
                  Allergen identification covers the 14 major allergens
                  recognized by GCC food labeling regulations. When any
                  ingredient in your recipe contains or is derived from a major
                  allergen, it is flagged automatically and included in the
                  allergen statement on your label.
                </p>
                <p className="mt-4 text-text leading-relaxed">
                  This is especially important for food businesses operating
                  in the UAE and Saudi Arabia where allergen declarations are
                  a required element of food labeling. RecipeBuilder removes the
                  manual effort of checking every ingredient for allergen
                  content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Traffic Light Labels Deep Dive */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Visual Nutrition Indicators
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Traffic Light Labels for Consumer Clarity
              </h2>
              <p className="mt-4 text-lg text-text">
                Traffic light labels use green, amber, and red color coding
                to help consumers understand the nutritional balance of food
                products at a glance. RecipeBuilder generates these
                automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  label: "Energy",
                  description:
                    "Total calories per serving, color-coded based on energy density. Helps consumers manage daily calorie intake.",
                },
                {
                  label: "Fat",
                  description:
                    "Total fat content per serving or per 100g. Color indicates whether the fat level is low, medium, or high.",
                },
                {
                  label: "Saturates",
                  description:
                    "Saturated fat content specifically. High saturated fat products receive a red indicator for consumer awareness.",
                },
                {
                  label: "Sugars",
                  description:
                    "Total sugar content per serving. The indicator shows whether sugar levels fall in the low, medium, or high range.",
                },
                {
                  label: "Salt",
                  description:
                    "Sodium content converted to salt equivalent. Color coding alerts consumers to high-salt products.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-light rounded-full mb-4">
                    <Wheat className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.label}
                  </h3>
                  <p className="text-text text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TrustPillars />

        {/* CTA Banner */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-8 py-16 sm:px-16 sm:py-24 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
                  <Activity className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
                  Ready to Get Automatic Nutrition Analysis for Your Recipes?
                </h2>

                <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                  See how RecipeBuilder calculates complete nutrition facts,
                  generates traffic light labels, and identifies allergens —
                  all from your recipe ingredients.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-primary bg-white rounded-lg hover:bg-white/90 transition-colors"
                  >
                    Book a Demo
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:info@bytebeam.co?subject=Nutrition Analysis Inquiry"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
