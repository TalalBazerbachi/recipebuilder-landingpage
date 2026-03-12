import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { comparePages } from "@/data/compare-content";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  ShieldCheck,
  Layers,
  Languages,
  Barcode,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "RecipeBuilder Alternatives & Comparisons — vs ReciPal, Food Label Maker, Nutrical & More",
  description:
    "See how RecipeBuilder compares against every major food labeling and nutrition software competitor. GCC/SFDA compliance, bilingual Arabic labels, packaging artwork, barcodes, and QR codes — all from $15/mo.",
  keywords: [
    "RecipeBuilder alternative",
    "RecipeBuilder comparison",
    "food labeling software comparison",
    "ReciPal alternative",
    "Food Label Maker alternative",
    "Nutrical alternative",
    "LabelCalc alternative",
    "Genesis R&D alternative",
    "Nutritics alternative",
    "GCC food labeling software",
    "food label software comparison",
    "nutrition label maker comparison",
  ],
  alternates: {
    canonical: "https://recipebuilder.bytebeam.co/compare",
  },
  openGraph: {
    title:
      "RecipeBuilder vs. The Competition — Food Labeling & Compliance Software Comparisons",
    description:
      "How does RecipeBuilder stack up against ReciPal, Food Label Maker, Genesis R&D, Nutritics, and more? See the full feature-by-feature breakdown.",
    url: "https://recipebuilder.bytebeam.co/compare",
    siteName: "RecipeBuilder",
    type: "website",
  },
};

const tierLabels: Record<1 | 2 | 3, { label: string; color: string; bg: string }> = {
  1: { label: "Direct Competitor", color: "text-rose-700", bg: "bg-rose-50" },
  2: { label: "Adjacent Tool", color: "text-amber-700", bg: "bg-amber-50" },
  3: { label: "Niche / Specialist", color: "text-sky-700", bg: "bg-sky-50" },
};

const rbStrengths = [
  {
    icon: Globe,
    title: "10+ Regulatory Frameworks",
    description:
      "FDA, EU, GCC/SFDA, GSO, Codex, and more — one platform covers every market you sell into.",
  },
  {
    icon: ShieldCheck,
    title: "GCC & SFDA Compliance",
    description:
      "5,000+ labels approved by Dubai Municipality. The only platform with a proven GCC compliance track record.",
  },
  {
    icon: Languages,
    title: "Bilingual Arabic & English",
    description:
      "Generate ingredient lists, allergen declarations, and full label content in Arabic and English simultaneously.",
  },
  {
    icon: Layers,
    title: "Packaging Artwork — Not Just Panels",
    description:
      "Competitors output a nutrition panel image. RecipeBuilder generates complete, print-ready packaging artwork.",
  },
  {
    icon: Barcode,
    title: "Barcodes & QR Codes Included",
    description:
      "Every label includes an auto-generated barcode and a QR code linking to live nutrition information.",
  },
  {
    icon: CheckCircle,
    title: "From $15/mo with Free Trial",
    description:
      "Transparent, accessible pricing with a 14-day free trial — no enterprise contract or demo-only gatekeeping.",
  },
];

const tier1 = comparePages.filter((p) => p.tier === 1);
const tier2 = comparePages.filter((p) => p.tier === 2);
const tier3 = comparePages.filter((p) => p.tier === 3);

function CompareCard({ page }: { page: (typeof comparePages)[0] }) {
  const tier = tierLabels[page.tier];
  return (
    <Link
      href={`/compare/${page.slug}`}
      className="group block bg-white rounded-2xl border border-border p-6 hover:shadow-md hover:border-primary/30 transition-all"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          RecipeBuilder vs. {page.competitor}
        </h3>
        <span
          className={`shrink-0 inline-block px-2.5 py-1 text-xs font-semibold rounded-full ${tier.bg} ${tier.color}`}
        >
          {tier.label}
        </span>
      </div>
      <p className="text-sm text-text leading-relaxed mb-5">
        {page.competitorWeakness.split(".")[0]}.
      </p>
      <div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
        See full comparison
        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </Link>
  );
}

export default function ComparePage() {
  return (
    <>
      <Navbar light />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/60 to-white pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary-light rounded-full">
                <Layers className="w-4 h-4" />
                SOFTWARE COMPARISONS
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                RecipeBuilder vs.{" "}
                <span className="text-primary">The Competition</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-text max-w-3xl mx-auto leading-relaxed">
                Most food labeling tools were built for one market — usually the
                US. RecipeBuilder covers{" "}
                <strong className="text-foreground">
                  10+ regulatory frameworks
                </strong>{" "}
                including GCC and SFDA, generates{" "}
                <strong className="text-foreground">
                  complete packaging artwork
                </strong>{" "}
                with barcodes and QR codes, and supports{" "}
                <strong className="text-foreground">
                  bilingual Arabic and English
                </strong>{" "}
                — features no Western competitor offers.
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
                  href="mailto:info@bytebeam.co?subject=RecipeBuilder Inquiry"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-foreground bg-white border border-border rounded-lg hover:bg-surface transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>

            {/* Social proof bar */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-text">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                5,000+ labels approved by Dubai Municipality
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                20,000+ USDA FoodData Central ingredients
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                10+ regulatory frameworks
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                From $15/mo · 14-day free trial
              </span>
            </div>
          </div>
        </section>

        {/* Why RB wins section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                The RecipeBuilder Advantage
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                What No Competitor Can Match
              </h2>
              <p className="mt-4 text-lg text-text">
                Every competitor below wins on at least one niche. RecipeBuilder
                is the only platform that combines all of these capabilities in
                one product.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rbStrengths.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
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

        {/* Tier 1 */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 text-rose-700 text-sm font-semibold rounded-full mb-4">
                Tier 1 — Direct Competitors
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Head-to-Head: Most-Compared Tools
              </h2>
              <p className="mt-3 text-text max-w-2xl">
                These are the tools food businesses search for most when
                evaluating nutrition labeling software. RecipeBuilder is
                commonly shortlisted alongside all of them.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tier1.map((page) => (
                <CompareCard key={page.slug} page={page} />
              ))}
            </div>
          </div>
        </section>

        {/* Tier 2 */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 text-sm font-semibold rounded-full mb-4">
                Tier 2 — Adjacent Tools
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Enterprise & Specialist Platforms
              </h2>
              <p className="mt-3 text-text max-w-2xl">
                These tools serve overlapping workflows — nutrition analysis,
                foodservice compliance, or menu management — but each has
                significant gaps for GCC-market or packaging-focused food
                businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tier2.map((page) => (
                <CompareCard key={page.slug} page={page} />
              ))}
            </div>
          </div>
        </section>

        {/* Tier 3 */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 text-sm font-semibold rounded-full mb-4">
                Tier 3 — Niche & Specialist Options
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Niche Alternatives & Indirect Comparisons
              </h2>
              <p className="mt-3 text-text max-w-2xl">
                These options each solve a narrow part of the food compliance
                puzzle — allergen data networks, dietitian platforms, or
                lab-testing services — but none is a complete solution for food
                manufacturers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tier3.map((page) => (
                <CompareCard key={page.slug} page={page} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-8 py-16 sm:px-16 sm:py-24 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
                  Ready to See RecipeBuilder in Action?
                </h2>
                <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                  Book a free 30-minute demo and see how RecipeBuilder handles
                  GCC/SFDA compliance, bilingual Arabic labels, and packaging
                  artwork — all in one platform.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-primary bg-white rounded-lg hover:bg-white/90 transition-colors"
                  >
                    Book a Free Demo
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
                name: "Comparisons",
                item: "https://recipebuilder.bytebeam.co/compare",
              },
            ],
          }),
        }}
      />
    </>
  );
}
