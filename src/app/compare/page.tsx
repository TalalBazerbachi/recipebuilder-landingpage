import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { comparePages } from "@/data/compare-content";
import { ArrowRight, CheckCircle, ChevronRight, Layers } from "lucide-react";

const BOOKING_URL =
  "https://cal.com/talal-bazerbachi-jb8a7d/recipebuilder-discovery-call";

export const metadata: Metadata = {
  title:
    "Best Nutrition Label Software (2026): RecipeBuilder vs ReciPal, Food Label Maker, NutriCal & LabelCalc",
  description:
    "Compare the best nutrition label software in 2026: RecipeBuilder, ReciPal, Food Label Maker, NutriCal and LabelCalc — label formats, features, and who each tool fits.",
  keywords: [
    "best nutrition label software",
    "nutrition label software comparison",
    "food labeling software comparison",
    "ReciPal alternative",
    "Food Label Maker alternative",
    "NutriCal alternative",
    "LabelCalc alternative",
    "RecipeBuilder alternatives",
  ],
  alternates: {
    canonical: "https://www.recipebuilder.co/compare",
  },
  openGraph: {
    title: "Best Nutrition Label Software (2026) — Honest Comparison",
    description:
      "RecipeBuilder, ReciPal, Food Label Maker, NutriCal and LabelCalc compared: label formats, features, pricing model, and who each tool fits.",
    url: "https://www.recipebuilder.co/compare",
    siteName: "RecipeBuilder",
    type: "website",
  },
};

type ListicleEntry = {
  name: string;
  slug?: string;
  bestFor: string;
  labelFormats: string;
  pricingModel: string;
  summary: string;
  strengths: string[];
};

// Kept deliberately factual and modest: competitor details reflect what each
// vendor publishes about its own product. Update alongside compare-content.ts.
const entries: ListicleEntry[] = [
  {
    name: "RecipeBuilder",
    bestFor:
      "Food businesses that need labels, bilingual packaging artwork, and recipe costing in one platform",
    labelFormats: "FDA, EU, and GCC/SFDA",
    pricingModel: "Yearly plans from $828/year",
    summary:
      "RecipeBuilder turns a recipe into a nutrition label, ingredient and allergen statement, and print-ready packaging artwork with a barcode and QR code. It is built around the recipe, so costing, portion stock, and sub-recipes live in the same place as your labels.",
    strengths: [
      "Complete packaging artwork, not only a nutrition panel",
      "Bilingual English and Arabic label content",
      "Recipe costing and portion stock tracking included",
    ],
  },
  {
    name: "ReciPal",
    slug: "recipal-alternative",
    bestFor: "US and Canadian small food brands creating their first labels",
    labelFormats: "FDA (US) and CFIA (Canada)",
    pricingModel: "Per-recipe purchases or monthly plans",
    summary:
      "ReciPal is a long-established label tool for small North American food makers, with nutrition analysis, recipe costing, and inventory options.",
    strengths: [
      "Simple workflow for a first nutrition facts panel",
      "Pay-per-recipe option for very small catalogues",
    ],
  },
  {
    name: "Food Label Maker",
    slug: "food-label-maker-alternative",
    bestFor: "Brands that want fast, self-serve label creation across markets",
    labelFormats: "FDA and SFDA-ready English/Arabic labels, among others",
    pricingModel: "Monthly subscription tiers",
    summary:
      "Food Label Maker is a self-serve labeling platform that covers several regulatory formats, including Saudi SFDA labels in English and Arabic.",
    strengths: [
      "Self-serve sign-up and quick label generation",
      "Multiple regional label formats",
    ],
  },
  {
    name: "NutriCal",
    slug: "nutrical-alternative",
    bestFor: "GCC food businesses focused on nutrition analysis",
    labelFormats: "FDA and GCC labels in English and Arabic",
    pricingModel: "Quote-based",
    summary:
      "NutriCal is a Dubai-based nutrition analysis platform with a large USDA-based ingredient database, bilingual labels, and recipe costing.",
    strengths: [
      "Regional focus on the UAE and wider GCC",
      "Large USDA-based ingredient database",
    ],
  },
  {
    name: "LabelCalc",
    slug: "labelcalc-alternative",
    bestFor: "US food manufacturers that only need FDA label calculations",
    labelFormats: "FDA (US)",
    pricingModel: "One-time and subscription licence options",
    summary:
      "LabelCalc (now part of Datacor) is a long-running US tool for calculating FDA-style nutrition facts panels.",
    strengths: [
      "Focused FDA nutrition facts calculation",
      "Established with US manufacturers",
    ],
  },
];

const compareSlugs = new Set(comparePages.map((p) => p.slug));

export default function ComparePage() {
  return (
    <>
      <Navbar light />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/60 to-white pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary-light rounded-full">
              <Layers className="w-4 h-4" />
              SOFTWARE COMPARISON · 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Best Nutrition Label Software in 2026
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text leading-relaxed">
              The tools food businesses shortlist most — what each one does
              well, who it fits, and where RecipeBuilder is the right choice
              (and where it isn&apos;t).
            </p>
            <div className="mt-10">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
              >
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="mt-8 text-sm text-text/60">
              Disclosure: RecipeBuilder is our product. We&apos;ve tried to keep
              this comparison accurate and fair — if you spot an error, email{" "}
              <a
                href="mailto:info@bytebeam.co"
                className="underline underline-offset-2 hover:text-text transition-colors"
              >
                info@bytebeam.co
              </a>
              .
            </p>
          </div>
        </section>

        {/* At a glance */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              At a glance
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-foreground">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Tool</th>
                    <th className="px-5 py-4 font-semibold">Best for</th>
                    <th className="px-5 py-4 font-semibold">Label formats</th>
                    <th className="px-5 py-4 font-semibold">Pricing model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {entries.map((entry) => (
                    <tr key={entry.name} className="align-top">
                      <td className="px-5 py-4 font-semibold text-foreground whitespace-nowrap">
                        {entry.name}
                      </td>
                      <td className="px-5 py-4 text-text">{entry.bestFor}</td>
                      <td className="px-5 py-4 text-text">
                        {entry.labelFormats}
                      </td>
                      <td className="px-5 py-4 text-text">
                        {entry.pricingModel}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Ranked list */}
        <section className="py-16 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {entries.map((entry, i) => (
              <article
                key={entry.name}
                className="bg-white rounded-2xl border border-border p-8"
              >
                <h2 className="text-2xl font-bold text-foreground">
                  {i + 1}. {entry.name}
                </h2>
                <p className="mt-2 text-sm font-medium text-primary">
                  Best for: {entry.bestFor}
                </p>
                <p className="mt-4 text-text leading-relaxed">
                  {entry.summary}
                </p>
                <ul className="mt-5 space-y-2">
                  {entry.strengths.map((strength) => (
                    <li
                      key={strength}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {strength}
                    </li>
                  ))}
                </ul>
                {entry.slug && compareSlugs.has(entry.slug) && (
                  <Link
                    href={`/compare/${entry.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    RecipeBuilder vs {entry.name}: full comparison
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* How to choose */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              How to choose nutrition label software
            </h2>
            <ul className="mt-6 space-y-4 text-text leading-relaxed">
              <li>
                <strong className="text-foreground">Where you sell.</strong>{" "}
                Check that the tool produces label formats for every market you
                sell into — US, EU, or GCC — rather than only the first one.
              </li>
              <li>
                <strong className="text-foreground">
                  Panel or full packaging.
                </strong>{" "}
                Some tools stop at a nutrition facts panel; others produce the
                complete label artwork with ingredients, allergens, barcode, and
                QR code.
              </li>
              <li>
                <strong className="text-foreground">Language.</strong> If you
                need Arabic and English on the same pack, confirm the tool
                generates both rather than relying on a separate translation
                step.
              </li>
              <li>
                <strong className="text-foreground">Beyond labels.</strong>{" "}
                Recipe costing, sub-recipes, and stock tracking matter if the
                same team manages production and pricing.
              </li>
              <li>
                <strong className="text-foreground">Pricing model.</strong>{" "}
                Per-recipe, monthly, yearly, and quote-based models suit
                different catalogue sizes — estimate your recipe count before
                comparing.
              </li>
            </ul>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-8 py-16 sm:px-16 sm:py-24 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
                  See if RecipeBuilder fits your business
                </h2>
                <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                  Book a 30-minute call and we&apos;ll walk through your recipes,
                  label formats, and the plan that fits your catalogue.
                </p>
                <div className="mt-10">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-primary bg-white rounded-lg hover:bg-white/90 transition-colors"
                  >
                    Book a Call
                    <ArrowRight className="w-4 h-4" />
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
            "@type": "ItemList",
            name: "Best Nutrition Label Software in 2026",
            itemListElement: entries.map((entry, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: entry.name,
              ...(entry.slug
                ? { url: `https://www.recipebuilder.co/compare/${entry.slug}` }
                : { url: "https://www.recipebuilder.co" }),
            })),
          }),
        }}
      />
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
                item: "https://www.recipebuilder.co",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Comparisons",
                item: "https://www.recipebuilder.co/compare",
              },
            ],
          }),
        }}
      />
    </>
  );
}
