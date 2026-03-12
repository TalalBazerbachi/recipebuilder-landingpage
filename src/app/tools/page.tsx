import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  FlaskConical,
  List,
  Calculator,
  ShieldAlert,
  Flame,
  Ruler,
  Barcode,
  QrCode,
  Globe,
  ClipboardCheck,
  Sparkles,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Free Food Business Tools — Nutrition Label Generator, Cost Calculator & More | RecipeBuilder",
  description:
    "Free interactive tools for food businesses: FDA nutrition label generator, ingredient list maker, recipe cost calculator, and more. Built by RecipeBuilder — the food compliance platform.",
  keywords: [
    "free nutrition label generator",
    "FDA nutrition facts panel",
    "ingredient list maker",
    "recipe cost calculator",
    "food cost per serving",
    "allergen checker",
    "calorie calculator",
    "food business tools",
    "free food label tools",
  ],
  alternates: {
    canonical: "https://recipebuilder.bytebeam.co/tools",
  },
  openGraph: {
    title: "Free Food Business Tools | RecipeBuilder",
    description:
      "Free nutrition label generator, ingredient list maker, recipe cost calculator and more — built for food businesses.",
    url: "https://recipebuilder.bytebeam.co/tools",
    siteName: "RecipeBuilder",
    type: "website",
  },
};

const liveTools = [
  {
    icon: FlaskConical,
    label: "Live",
    title: "Nutrition Label Generator",
    description:
      "Build a pixel-perfect FDA-format Nutrition Facts panel in real time. Enter nutrients manually and see the panel render instantly — ready to screenshot or print.",
    href: "/tools/nutrition-label-generator",
    cta: "Open tool",
  },
  {
    icon: List,
    label: "Live",
    title: "Ingredient List Maker",
    description:
      "Sort ingredients by weight, expand sub-ingredients, and auto-bold allergens. Outputs a properly formatted ingredient statement you can copy straight to your label.",
    href: "/tools/ingredient-list-maker",
    cta: "Open tool",
  },
  {
    icon: Calculator,
    label: "Live",
    title: "Recipe Cost Calculator",
    description:
      "Enter ingredient quantities and unit costs to get total recipe cost, cost per serving, suggested retail price, and food cost percentage with a live traffic-light margin indicator.",
    href: "/tools/recipe-cost-calculator",
    cta: "Open tool",
  },
];

const comingSoonTools = [
  {
    icon: ShieldAlert,
    title: "Allergen Checker",
    description:
      "Paste your ingredient list and instantly identify the 14 major allergens with a clear per-allergen breakdown.",
  },
  {
    icon: Flame,
    title: "Calorie Calculator",
    description:
      "Calculate total calories from macronutrients using the Atwater factors for any recipe or food item.",
  },
  {
    icon: Ruler,
    title: "Serving Size Calculator (FDA RACC)",
    description:
      "Look up the FDA Reference Amount Customarily Consumed for your food category and determine a compliant serving size.",
  },
  {
    icon: Barcode,
    title: "Barcode Generator",
    description:
      "Generate EAN-13 or UPC-A barcodes for your food products — downloadable as SVG or PNG.",
  },
  {
    icon: QrCode,
    title: "QR Code Generator",
    description:
      "Create QR codes that link to nutrition information pages for your packaged food products.",
  },
  {
    icon: Globe,
    title: "EU / GCC Label Converter",
    description:
      "Convert between EU (per 100g) and GCC/FDA (per serving) nutrition label formats automatically.",
  },
  {
    icon: ClipboardCheck,
    title: "Label Compliance Checker",
    description:
      "Paste your label text to check it against FDA, EU, and GCC mandatory field requirements.",
  },
];

export default function ToolsPage() {
  return (
    <>
      <Navbar light />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/50 to-white pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary-light rounded-full">
              <Sparkles className="w-4 h-4" />
              FREE TOOLS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight max-w-3xl mx-auto">
              Free Tools for{" "}
              <span className="text-primary">Food Businesses</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text max-w-2xl mx-auto leading-relaxed">
              Interactive calculators and generators for nutrition labels,
              ingredient lists, and recipe costing — completely free, no
              sign-up required.
            </p>
            <p className="mt-3 text-sm text-text/70">
              Want these generated automatically from your actual recipes?{" "}
              <a
                href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Try RecipeBuilder
              </a>
              .
            </p>
          </div>
        </section>

        {/* Live Tools */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Available now
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {liveTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all p-8"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                      <tool.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-primary bg-primary-light rounded-full">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      {tool.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-text leading-relaxed text-sm flex-1">
                    {tool.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    {tool.cta}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Tools */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Coming soon
            </h2>
            <p className="text-text mb-10">
              More tools are in development. These will be free too.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {comingSoonTools.map((tool) => (
                <div
                  key={tool.title}
                  className="relative flex flex-col bg-white rounded-2xl border border-border p-6 opacity-70"
                >
                  <div className="absolute top-4 right-4">
                    <Lock className="w-4 h-4 text-text/40" />
                  </div>
                  <div className="w-10 h-10 bg-surface rounded-xl flex items-center justify-center mb-4 border border-border">
                    <tool.icon className="w-5 h-5 text-text/50" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-text text-sm leading-relaxed">
                    {tool.description}
                  </p>
                  <span className="mt-4 text-xs font-medium text-text/50 uppercase tracking-wider">
                    Coming soon
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-8 py-16 sm:px-16 sm:py-20 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
                  Want These Automated for Every Recipe in Your Library?
                </h2>
                <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                  RecipeBuilder auto-generates FDA, GCC/SFDA, and EU-compliant
                  nutrition labels, ingredient lists, cost reports, and
                  packaging artwork — all from your recipes, with no manual
                  entry.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-primary bg-white rounded-lg hover:bg-white/90 transition-colors"
                  >
                    Book a free demo
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:info@bytebeam.co?subject=RecipeBuilder Inquiry"
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://recipebuilder.bytebeam.co",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Tools",
                item: "https://recipebuilder.bytebeam.co/tools",
              },
            ],
          }),
        }}
      />
    </>
  );
}
