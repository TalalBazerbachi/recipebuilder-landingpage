import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustPillars from "@/components/TrustPillars";
import {
  ArrowRight,
  BookOpen,
  Database,
  FolderTree,
  PieChart,
  Layers,
  Camera,
  ClipboardList,
  FileCheck,
  ChefHat,
  CheckCircle,
  Search,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Recipe Management Software — Organize, Analyze & Publish Recipes | RecipeBuilder",
  description:
    "Create and organize recipes with nutrition analysis, sub-recipe support, and category management. Built on a 20,000+ USDA ingredient database. Designed for restaurants, food manufacturers, and catering businesses.",
  keywords: [
    "recipe management software",
    "recipe organizer",
    "recipe nutrition analysis",
    "restaurant recipe management",
    "food business recipe software",
    "recipe database",
    "recipe categorization",
    "recipe cost analysis",
    "commercial recipe software",
    "recipe builder tool",
    "food production recipe management",
  ],
};

const coreFeatures = [
  {
    icon: FolderTree,
    title: "Categories & Sub-Categories",
    description:
      "Organize your recipes into categories and sub-categories that mirror your menu structure. Group recipes by meal type, cuisine, product line, or any classification that fits your business. Quickly find recipes using the structured hierarchy.",
  },
  {
    icon: Database,
    title: "20,000+ USDA Ingredient Database",
    description:
      "Search and add ingredients from a database of over 20,000 FDA-sourced entries with complete nutritional profiles. No manual data entry needed — every ingredient comes with calories, protein, carbohydrates, fat, vitamins, and minerals already defined.",
  },
  {
    icon: PieChart,
    title: "Nutrition Breakdown Per Recipe",
    description:
      "Get an automatic nutrition breakdown for every recipe including calories, protein, carbohydrates, fat, saturated fat, sugars, fiber, and sodium. Nutrition data is calculated per serving and per 100g, making it ready for food labels.",
  },
  {
    icon: Layers,
    title: "Sub-Recipe Support",
    description:
      "Build complex recipes using other recipes as ingredients. Create sauces, doughs, marinades, and base preparations as sub-recipes, then use them across multiple parent recipes. Nutrition data flows through automatically.",
  },
  {
    icon: Camera,
    title: "Cover Photos",
    description:
      "Add cover photos to every recipe for easy visual identification. Whether you are browsing your recipe library or sharing recipes with your team, photos make it fast to find exactly what you need.",
  },
  {
    icon: ClipboardList,
    title: "Prep Method Documentation",
    description:
      "Document detailed preparation methods with step-by-step instructions. Record cooking temperatures, timing, equipment needed, and technique notes so your team can replicate recipes with consistency every time.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Create Your Recipe",
    description:
      "Name your recipe, assign it to a category, and start adding ingredients from the 20,000+ USDA database. Set quantities, units, and serving sizes.",
  },
  {
    step: "02",
    title: "Add Preparation Details",
    description:
      "Document your prep method with step-by-step instructions, cooking temperatures, and timing. Upload a cover photo for visual identification.",
  },
  {
    step: "03",
    title: "Review Nutrition Data",
    description:
      "RecipeBuilder automatically calculates the full nutrition breakdown based on your ingredients. Review calories, macros, vitamins, and minerals per serving.",
  },
  {
    step: "04",
    title: "Publish or Save as Draft",
    description:
      "Publish your recipe to make it available for label generation and team access, or save it as a draft to continue working on it later.",
  },
];

export default function RecipeManagementPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/60 to-white pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary-light rounded-full">
                <BookOpen className="w-4 h-4" />
                RECIPE MANAGEMENT SOFTWARE
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Organize, Analyze &{" "}
                <span className="text-primary">Publish Your Recipes</span>{" "}
                in One Platform
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-text max-w-2xl mx-auto leading-relaxed">
                Create recipes with automatic nutrition analysis from 20,000+
                FDA-sourced ingredients. Organize with categories, support
                sub-recipes, document prep methods, and publish when ready —
                all from a single platform built for food businesses.
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
                <FileCheck className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">
                  5,000+
                </span>
                <span className="text-sm text-text text-center">
                  Labels Approved by Dubai Municipality
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl border border-border shadow-sm">
                <Layers className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">
                  Unlimited
                </span>
                <span className="text-sm text-text text-center">
                  Recipes & Sub-Recipes
                </span>
              </div>
            </div>

            {/* Hero Screenshot */}
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-border shadow-xl overflow-hidden bg-white">
                <Image
                  src="/screenshots/recipe-form.png"
                  alt="RecipeBuilder recipe creation form showing ingredient management, nutrition breakdown, and recipe details"
                  width={1400}
                  height={900}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Core Features
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Everything You Need to Manage Recipes Professionally
              </h2>
              <p className="mt-4 text-lg text-text">
                RecipeBuilder gives food businesses a complete recipe management
                system with built-in nutrition analysis, category organization,
                and sub-recipe support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature) => (
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

        {/* How It Works */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Workflow
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                From Idea to Published Recipe in Minutes
              </h2>
              <p className="mt-4 text-lg text-text">
                RecipeBuilder simplifies the recipe creation process. Add
                ingredients, document your method, review nutrition data, and
                publish — all in one workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {workflowSteps.map((item) => (
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

        {/* USDA Database Deep Dive */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Ingredient Database
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                  20,000+ FDA-Sourced Ingredients with Full Nutrition Data
                </h2>
                <p className="mt-4 text-lg text-text leading-relaxed">
                  Every ingredient in RecipeBuilder comes from the USDA
                  FoodData Central database with a complete nutritional profile.
                  Search by name, browse categories, and add ingredients to your
                  recipes instantly.
                </p>
                <p className="mt-4 text-text leading-relaxed">
                  Each ingredient includes data for calories, protein,
                  carbohydrates, total fat, saturated fat, trans fat, fiber,
                  sugars, sodium, cholesterol, and a full vitamin and mineral
                  profile. This means your recipe nutrition calculations are
                  accurate and based on trusted government data.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Search over 20,000 ingredients by name instantly",
                    "Complete macro and micro nutrient profiles included",
                    "No manual data entry — select and add",
                    "Data sourced from USDA FoodData Central",
                    "Custom ingredients can be added when needed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-text leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-border p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                      <Search className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Instant Search
                      </h3>
                      <p className="text-text text-sm leading-relaxed">
                        Type any ingredient name and get instant results from
                        the database. Results include nutritional previews so
                        you can select the right ingredient quickly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                      <PieChart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Automatic Calculations
                      </h3>
                      <p className="text-text text-sm leading-relaxed">
                        As you add ingredients and set quantities, nutrition
                        totals update in real time. Change a quantity and see
                        the impact on your recipe nutrition immediately.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                      <Layers className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Sub-Recipe Ingredients
                      </h3>
                      <p className="text-text text-sm leading-relaxed">
                        Use existing recipes as ingredients in new recipes.
                        Nutrition data from sub-recipes is automatically
                        included in the parent recipe calculation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publish & Draft Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-white rounded-2xl border border-border p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                      <FileCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Published Recipes
                      </h3>
                      <p className="text-text text-sm leading-relaxed">
                        Published recipes are available for food label
                        generation, stock tracking, and cost analysis. Your
                        team can access published recipes to maintain production
                        consistency.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                      <Lock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Draft Recipes
                      </h3>
                      <p className="text-text text-sm leading-relaxed">
                        Save recipes as drafts while you finalize ingredients,
                        adjust quantities, or wait for preparation details.
                        Drafts are private and do not appear in label generation
                        or reports.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                      <ChefHat className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Connected to Labels & Stock
                      </h3>
                      <p className="text-text text-sm leading-relaxed">
                        Every published recipe connects directly to food label
                        generation, stock tracking, and cost analysis. One
                        recipe powers your labels, inventory, and financial
                        reporting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Publish When Ready
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                  Draft, Review & Publish Your Recipes
                </h2>
                <p className="mt-4 text-lg text-text leading-relaxed">
                  RecipeBuilder gives you control over your recipe workflow.
                  Save recipes as drafts while you work on them, then publish
                  when they are finalized. Published recipes become available
                  across the entire platform.
                </p>
                <p className="mt-4 text-text leading-relaxed">
                  Once published, a recipe can generate food labels with
                  barcodes and QR codes, appear in stock tracking, and be
                  included in cost analysis reports. The draft-to-publish
                  workflow ensures nothing goes live until it is ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Uses This Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Built For Food Businesses
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Who Uses RecipeBuilder for Recipe Management?
              </h2>
              <p className="mt-4 text-lg text-text">
                RecipeBuilder serves any food business that needs structured
                recipe management with built-in nutrition analysis and label
                generation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Restaurants & Cafes",
                  description:
                    "Organize your full menu as recipes with nutrition data. Document prep methods for kitchen consistency and generate labels for packaged items.",
                },
                {
                  title: "Food Manufacturers",
                  description:
                    "Manage production recipes with precise ingredient quantities, sub-recipe support, and automatic nutrition calculations for product labels.",
                },
                {
                  title: "Bakeries & Pastry Shops",
                  description:
                    "Create recipes for baked goods with accurate ingredient tracking. Sub-recipes work perfectly for doughs, fillings, and icings used across products.",
                },
                {
                  title: "Catering Companies",
                  description:
                    "Build and organize recipes for your catering menu. Track nutrition per serving and generate labels for individually packaged catering items.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-6 rounded-2xl border border-border shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text leading-relaxed text-sm">
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
                  <BookOpen className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
                  Ready to Organize Your Recipes in One Platform?
                </h2>

                <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                  See how RecipeBuilder helps food businesses create, organize,
                  and analyze recipes with automatic nutrition data from 20,000+
                  FDA-sourced ingredients.
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
                    href="mailto:info@bytebeam.co?subject=Recipe Management Inquiry"
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
