import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustPillars from "@/components/TrustPillars";
import {
  ArrowRight,
  DollarSign,
  TrendingUp,
  Calculator,
  Receipt,
  Percent,
  Package,
  Scale,
  ChefHat,
  ShieldCheck,
  BarChart3,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Recipe Cost Tracking — Ingredient Costs, Profit Margins & VAT | RecipeBuilder",
  description:
    "Track ingredient costs per recipe, calculate per serving cost, food cost, labor cost, packaging cost, and wastage. Configure VAT, aggregator commissions, and see net profit margins — all in AED. Built for GCC food businesses by ByteBeam.",
  keywords: [
    "recipe cost calculator",
    "food cost tracking",
    "ingredient cost analysis",
    "recipe profit margin",
    "food business cost management",
    "per serving cost calculator",
    "restaurant cost tracking",
    "food cost percentage",
    "recipe costing software",
    "food business profit analysis",
    "VAT calculation food business",
    "aggregator commission tracking",
    "recipe cost breakdown",
    "AED food costing",
    "GCC restaurant cost management",
  ],
  openGraph: {
    title:
      "Recipe Cost Tracking — Ingredient Costs, Profit Margins & VAT | RecipeBuilder",
    description:
      "Track ingredient costs per recipe, calculate per serving cost, and see net profit margins with VAT and aggregator commission tracking. All costs in AED.",
    url: "https://recipebuilder.bytebeam.co/cost-tracking",
    siteName: "RecipeBuilder",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://recipebuilder.bytebeam.co/cost-tracking",
  },
};

const costCategories = [
  {
    icon: Package,
    title: "Food Cost",
    description:
      "Track raw ingredient costs for every recipe automatically. Each ingredient carries its unit price, and RecipeBuilder calculates the total food cost based on the exact quantities used in your recipe.",
  },
  {
    icon: Receipt,
    title: "Labor Cost",
    description:
      "Factor in the labor required to prepare each recipe. Assign labor cost per recipe to capture the true cost of production, from prep work to plating and packaging.",
  },
  {
    icon: Layers,
    title: "Packaging Cost",
    description:
      "Include the cost of containers, labels, bags, boxes, and any other packaging materials. Packaging cost is added per recipe so your total cost reflects every expense before the product leaves your kitchen.",
  },
  {
    icon: Scale,
    title: "Wastage Cost",
    description:
      "Account for ingredient waste, trim loss, and shrinkage. Adding a wastage cost ensures your per serving cost reflects real-world production conditions, not just theoretical ingredient amounts.",
  },
];

const profitFeatures = [
  {
    icon: DollarSign,
    title: "Selling Price (VAT Exclusive & Inclusive)",
    description:
      "Set your selling price and see both the VAT-exclusive and VAT-inclusive amounts side by side. RecipeBuilder handles the arithmetic so you can price your products accurately for menus, retail shelves, and delivery platforms.",
  },
  {
    icon: Percent,
    title: "Configurable VAT Percentage",
    description:
      "Configure the VAT rate that applies to your market. Whether you operate in the UAE at 5% VAT or in a jurisdiction with a different rate, RecipeBuilder lets you set the exact percentage and recalculates all pricing instantly.",
  },
  {
    icon: BarChart3,
    title: "Aggregator Commission Tracking",
    description:
      "Selling through food delivery aggregators? Enter the commission percentage charged by each platform and RecipeBuilder deducts it from your revenue to show you what you actually keep after every sale.",
  },
  {
    icon: TrendingUp,
    title: "Net Profit Percentage",
    description:
      "After accounting for food cost, labor, packaging, wastage, VAT, and aggregator commissions, RecipeBuilder calculates your net profit percentage and highlights it in green. One number that tells you if the recipe is financially viable.",
  },
];

export default function CostTracking() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/60 to-white pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary-light rounded-full">
              <Calculator className="w-4 h-4" />
              COST TRACKING & PROFIT ANALYSIS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight max-w-4xl mx-auto">
              Know Your{" "}
              <span className="text-primary">Recipe Costs</span> and{" "}
              <span className="text-primary">Profit Margins</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text max-w-2xl mx-auto leading-relaxed">
              Track ingredient costs, food cost, labor, packaging, and wastage
              for every recipe. Configure VAT, set selling prices, account for
              aggregator commissions, and see your net profit percentage — all
              calculated in AED.
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
                Back to Overview
              </a>
            </div>

            {/* Stats bar */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl border border-border shadow-sm">
                <DollarSign className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">AED</span>
                <span className="text-sm text-text">
                  All Costs Tracked in AED
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl border border-border shadow-sm">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">
                  5,000+
                </span>
                <span className="text-sm text-text">
                  Labels Approved by Dubai Municipality
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl border border-border shadow-sm">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">
                  Net Profit %
                </span>
                <span className="text-sm text-text">
                  Calculated Automatically
                </span>
              </div>
            </div>

            {/* Hero Screenshot */}
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-border shadow-xl overflow-hidden bg-white">
                <Image
                  src="/screenshots/cost-breakdown.png"
                  alt="RecipeBuilder cost tracking dashboard showing ingredient costs, total yield, per-serving cost, VAT, and net profit margin in AED"
                  width={1400}
                  height={900}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Per Recipe Cost Breakdown Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Cost Breakdown
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Full Cost Breakdown for Every Recipe
              </h2>
              <p className="mt-4 text-lg text-text">
                RecipeBuilder breaks down the cost of every recipe into its
                individual components. You see the total yield, total cost, and
                per serving cost at a glance — so you always know exactly what
                each portion costs to produce.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-5">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Total Yield & Total Cost
                </h3>
                <p className="text-text leading-relaxed">
                  Every recipe displays its total yield in grams alongside the
                  total cost in AED. As you add or adjust ingredients, the
                  figures update automatically. No spreadsheets, no manual
                  calculations — just accurate numbers every time you open a
                  recipe.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-5">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Per Serving Cost & Serving Size
                </h3>
                <p className="text-text leading-relaxed">
                  Define your serving size in grams and RecipeBuilder divides
                  the total cost by the number of servings to give you the per
                  serving cost in AED. This is the number that matters most when
                  you set menu prices and evaluate whether a recipe makes
                  financial sense for your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ingredient Cost Tracking Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Ingredient Costs
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Track the Cost of Every Ingredient
              </h2>
              <p className="mt-4 text-lg text-text">
                Every ingredient in your recipe carries a cost. RecipeBuilder
                lets you assign a price per unit to each ingredient and
                automatically sums them up based on the quantities used. When
                supplier prices change, update the ingredient cost once and
                every recipe that uses it recalculates instantly.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                How Ingredient Cost Tracking Works
              </h3>
              <ul className="space-y-4 text-text leading-relaxed">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <p>
                    <strong className="text-foreground">
                      Add ingredients to your recipe
                    </strong>{" "}
                    — search from a database of over 20,000 FDA-sourced
                    ingredients with complete nutritional profiles, or create
                    custom ingredients with your own data.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <p>
                    <strong className="text-foreground">
                      Set the cost per unit in AED
                    </strong>{" "}
                    — assign a price to each ingredient based on what you pay
                    your suppliers. Costs are stored and reused across all
                    recipes that share the same ingredient.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <p>
                    <strong className="text-foreground">
                      Specify the quantity used
                    </strong>{" "}
                    — enter the exact amount of each ingredient for your recipe.
                    RecipeBuilder multiplies the unit cost by the quantity to
                    calculate the ingredient line cost.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">4</span>
                  </div>
                  <p>
                    <strong className="text-foreground">
                      View the total food cost
                    </strong>{" "}
                    — all ingredient line costs are summed into the total food
                    cost for the recipe, displayed prominently in AED alongside
                    the per serving breakdown.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Four Cost Categories Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Complete Cost Picture
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Four Cost Categories That Cover Everything
              </h2>
              <p className="mt-4 text-lg text-text">
                Ingredient cost alone does not tell the full story. RecipeBuilder
                captures four distinct cost categories so your per serving cost
                reflects the true expense of getting a finished product to your
                customer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {costCategories.map((category) => (
                <div
                  key={category.title}
                  className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                    <category.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-text leading-relaxed">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing, VAT & Profit Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Pricing & Profit
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                From Selling Price to Net Profit in One View
              </h2>
              <p className="mt-4 text-lg text-text">
                Set your selling price, configure VAT, account for delivery
                platform commissions, and see your net profit percentage — all
                on one screen, all in AED. RecipeBuilder removes the guesswork
                from food business pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {profitFeatures.map((feature) => (
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

        {/* Why It Matters Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Why It Matters
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                  Cost Visibility That Drives Better Decisions
                </h2>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Stop Guessing, Start Knowing
                  </h3>
                  <p className="text-text leading-relaxed">
                    Many food businesses price their products based on intuition
                    or rough estimates. RecipeBuilder replaces guesswork with
                    precise, itemized cost data. When you can see that a recipe
                    costs 12.40 AED to produce and your selling price is 35 AED,
                    you make decisions from a position of clarity — not hope.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Catch Margin Erosion Early
                  </h3>
                  <p className="text-text leading-relaxed">
                    Supplier prices fluctuate. When the cost of a key ingredient
                    increases, it can silently eat into your profit margin.
                    RecipeBuilder surfaces these changes immediately. Update an
                    ingredient price and you see the impact on every recipe that
                    uses it, so you can adjust selling prices or find
                    alternatives before margins erode.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Price Confidently Across Channels
                  </h3>
                  <p className="text-text leading-relaxed">
                    Selling through your own shop, a delivery aggregator, and a
                    retail partner each involves different cost structures.
                    Aggregators take a commission; retail may require different
                    packaging. RecipeBuilder lets you model each scenario with
                    its commission and cost inputs so you can set channel-specific
                    prices that protect your margins everywhere you sell.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Part of RecipeBuilder Platform Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                One Platform
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Cost Tracking Built Into a Complete Recipe Platform
              </h2>
              <p className="mt-4 text-lg text-text">
                Cost tracking is one part of RecipeBuilder. The same platform
                also handles recipe management, nutrition label generation,
                bilingual food labeling that follows GCC and SFDA labeling laws,
                barcode and QR code generation, and real-time inventory
                management. Everything your food business needs, in one place.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center p-6 bg-white rounded-xl border border-border shadow-sm">
                <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-semibold text-foreground">
                  5,000+ Labels Approved by Dubai Municipality
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-border shadow-sm">
                <Calculator className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-semibold text-foreground">
                  20,000+ FDA-Sourced Ingredients
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-border shadow-sm">
                <Receipt className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-semibold text-foreground">
                  Labels Following GCC & SFDA Laws
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-border shadow-sm">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-semibold text-foreground">
                  Bilingual English & Arabic Labels
                </p>
              </div>
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
                  <ChefHat className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
                  See Exactly What Every Recipe Costs — and What You Keep
                </h2>

                <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                  Book a demo to see how RecipeBuilder tracks ingredient costs,
                  calculates per serving cost, and shows your net profit margin
                  in real time — all in AED.
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
                    href="mailto:info@bytebeam.co?subject=RecipeBuilder Cost Tracking Inquiry"
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
