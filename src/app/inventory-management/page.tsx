import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustPillars from "@/components/TrustPillars";
import {
  ArrowRight,
  Package,
  Clock,
  RefreshCw,
  LayoutDashboard,
  Barcode,
  Timer,
  ChefHat,
  ShieldCheck,
  Database,
  CalendarClock,
  SlidersHorizontal,
  Boxes,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Recipe Inventory Management — Track Stock & Portions in Real-Time | RecipeBuilder",
  description:
    "Track portion counts in real-time with quick stock update controls. View stock alongside prep time, serving size, selling price, and barcode — all on one dashboard. Built for GCC food businesses by ByteBeam.",
  keywords: [
    "recipe inventory management",
    "food stock tracking",
    "portion count tracker",
    "restaurant inventory software",
    "recipe stock management",
    "food production tracking",
    "kitchen inventory system",
    "real-time stock tracking",
    "food portion management",
    "production scheduling food",
    "recipe dashboard software",
    "food business inventory",
    "kitchen stock management",
    "GCC restaurant inventory",
    "food production planning",
  ],
  openGraph: {
    title:
      "Recipe Inventory Management — Track Stock & Portions in Real-Time | RecipeBuilder",
    description:
      "Track portion counts in real-time with quick stock update controls. View stock, prep time, selling price, and barcode on one dashboard.",
    url: "https://recipebuilder.bytebeam.co/inventory-management",
    siteName: "RecipeBuilder",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://recipebuilder.bytebeam.co/inventory-management",
  },
};

const stockFeatures = [
  {
    icon: RefreshCw,
    title: "Quick Stock Update Controls",
    description:
      "Adjust stock counts instantly with dedicated controls: -10, -5, -1, +1, +5, +10. No typing required. Kitchen staff can update portion counts in seconds between orders, during shift changes, or after a production run.",
  },
  {
    icon: SlidersHorizontal,
    title: "Set Stock to a Specific Value",
    description:
      "Need to set stock to an exact number after a physical count or a new production batch? Enter the value directly and the stock count updates immediately. Ideal for end-of-day reconciliation or restocking after a large prep session.",
  },
  {
    icon: Clock,
    title: "Last Updated Timestamp",
    description:
      "Every stock update is timestamped so you always know when the count was last changed. This gives managers visibility into how recently inventory was checked and helps identify recipes that may need a fresh count.",
  },
  {
    icon: LayoutDashboard,
    title: "Stock Count on Recipe Dashboard",
    description:
      "The current stock count for each recipe is visible directly on the recipe dashboard. No need to open a separate inventory screen — you see at a glance how many portions are available alongside every other recipe detail.",
  },
];

const dashboardDetails = [
  {
    icon: Timer,
    title: "Prep Time",
    description:
      "Each recipe displays its prep time so your team knows how long production takes. When stock runs low, you can immediately see whether a recipe can be replenished within your service window or if you need to plan ahead.",
  },
  {
    icon: Package,
    title: "Per Serving Information",
    description:
      "Serving size in grams and per serving cost in AED are displayed alongside the stock count. This means you can make restocking decisions with full awareness of portion economics — how much each serving weighs and what it costs.",
  },
  {
    icon: Barcode,
    title: "Barcode at a Glance",
    description:
      "Every recipe carries a unique barcode displayed on the dashboard. Use it for product identification, retail scanning, or point-of-sale integration. The barcode is always visible — no need to generate or look it up separately.",
  },
  {
    icon: CalendarClock,
    title: "Production Scheduling Support",
    description:
      "Plan your production runs based on current stock levels and anticipated demand. When you can see exactly how many portions remain for every recipe, scheduling the next production batch becomes a straightforward decision rather than a guess.",
  },
];

export default function InventoryManagement() {
  return (
    <>
      <Navbar light />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/60 to-white pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary-light rounded-full">
              <Boxes className="w-4 h-4" />
              INVENTORY & STOCK MANAGEMENT
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight max-w-4xl mx-auto">
              Track{" "}
              <span className="text-primary">Recipe Stock</span> and{" "}
              <span className="text-primary">Portions</span> in Real Time
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text max-w-2xl mx-auto leading-relaxed">
              See how many portions are available for every recipe, update stock
              counts in seconds with quick controls, and view prep time, serving
              size, selling price, and barcode — all on one dashboard. Built for
              kitchens that need to move fast.
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
                <Package className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">
                  Real-Time
                </span>
                <span className="text-sm text-text">
                  Portion Count Tracking
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
                <Database className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">
                  20,000+
                </span>
                <span className="text-sm text-text">
                  FDA-Sourced Ingredients
                </span>
              </div>
            </div>

            {/* Hero Screenshot */}
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-border shadow-xl overflow-hidden bg-white">
                <Image
                  src="/screenshots/stock-tracking.png"
                  alt="RecipeBuilder inventory management dashboard showing real-time portion counts, quick stock update controls, and recipe details"
                  width={1400}
                  height={900}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Real-Time Portion Tracking Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Portion Tracking
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Know Exactly How Many Portions Are Available
              </h2>
              <p className="mt-4 text-lg text-text">
                RecipeBuilder tracks the current portion count for every recipe
                in your system. Whether you produce 50 servings of a salad or
                200 units of a packaged snack, the stock number is always
                visible and always current. No separate inventory software, no
                paper logs — just a number you can trust.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                How Real-Time Tracking Works
              </h3>
              <ul className="space-y-4 text-text leading-relaxed">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <p>
                    <strong className="text-foreground">
                      Each recipe has a stock count
                    </strong>{" "}
                    — the number of portions currently available. This count
                    lives directly on the recipe card in your dashboard, so you
                    never have to navigate away to check inventory.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <p>
                    <strong className="text-foreground">
                      Update with quick controls
                    </strong>{" "}
                    — tap -10, -5, -1, +1, +5, or +10 to adjust the count
                    instantly. Sold five portions? Tap -5. Produced ten more?
                    Tap +10. The interface is designed for speed, not data entry.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <p>
                    <strong className="text-foreground">
                      Set stock to an exact value
                    </strong>{" "}
                    — after a physical count or a fresh production batch, type
                    the exact number and confirm. The stock resets to your
                    specified value immediately.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">4</span>
                  </div>
                  <p>
                    <strong className="text-foreground">
                      Timestamp on every update
                    </strong>{" "}
                    — RecipeBuilder records when the stock was last modified. At
                    a glance, managers can see which recipes have fresh counts
                    and which may need verification.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Stock Update Controls Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Quick Controls
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Update Stock in Seconds, Not Minutes
              </h2>
              <p className="mt-4 text-lg text-text">
                Kitchen environments are fast-paced. RecipeBuilder gives your
                team dedicated stock adjustment controls so they can update
                portion counts without interrupting their workflow. Every control
                is one tap — no forms, no confirmation dialogs, no friction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stockFeatures.map((feature) => (
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

        {/* All-in-One Dashboard Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Unified Dashboard
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Everything About a Recipe in One View
              </h2>
              <p className="mt-4 text-lg text-text">
                Stock count is just one piece of the picture. RecipeBuilder
                displays prep time, per serving details, selling price, and
                barcode alongside inventory — so your team has all the
                information they need without switching between screens or
                systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dashboardDetails.map((detail) => (
                <div
                  key={detail.title}
                  className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                    <detail.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {detail.title}
                  </h3>
                  <p className="text-text leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Scheduling Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Production Planning
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                  Plan Production Runs With Confidence
                </h2>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Data-Driven Production Decisions
                  </h3>
                  <p className="text-text leading-relaxed">
                    When you can see exactly how many portions of each recipe
                    remain, deciding what to produce next becomes straightforward.
                    Instead of producing the same quantities every day regardless
                    of demand, your team can look at stock levels and prioritize
                    recipes that are running low. This reduces overproduction,
                    minimizes waste, and ensures popular items stay available.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Shift Handovers Made Simple
                  </h3>
                  <p className="text-text leading-relaxed">
                    At shift changes, incoming staff need to know the current
                    state of inventory. With RecipeBuilder, the dashboard shows
                    every recipe&apos;s stock count and the timestamp of the
                    last update. The incoming team instantly sees what is
                    available, what needs restocking, and how recently counts
                    were verified — no verbal handoff notes needed.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    From Recipe to Shelf, Tracked End to End
                  </h3>
                  <p className="text-text leading-relaxed">
                    RecipeBuilder connects recipe creation with inventory. You
                    build the recipe, generate the food label that follows GCC
                    and SFDA labeling laws, track ingredient costs, and then
                    monitor how many finished portions are in stock. The entire
                    lifecycle — from raw ingredients to sellable product — lives
                    in one platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Part of RecipeBuilder Platform Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                One Platform
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Inventory Management Inside a Complete Recipe Platform
              </h2>
              <p className="mt-4 text-lg text-text">
                Inventory tracking is one part of RecipeBuilder. The same
                platform also handles recipe creation, auto-generated nutrition
                labels with bilingual English and Arabic text that follows GCC
                and SFDA labeling laws, barcode and QR code generation, and
                detailed cost tracking with profit analysis. Everything your
                food business needs, without switching tools.
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
                <Database className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-semibold text-foreground">
                  20,000+ FDA-Sourced Ingredients
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-border shadow-sm">
                <Barcode className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-semibold text-foreground">
                  Labels Following GCC & SFDA Laws
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-border shadow-sm">
                <Package className="w-8 h-8 text-primary mx-auto mb-3" />
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
                  Take Control of Your Recipe Inventory Today
                </h2>

                <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                  Book a demo to see how RecipeBuilder lets you track portion
                  counts, update stock in seconds, and manage production — all
                  from one dashboard.
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
                    href="mailto:info@bytebeam.co?subject=RecipeBuilder Inventory Inquiry"
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
