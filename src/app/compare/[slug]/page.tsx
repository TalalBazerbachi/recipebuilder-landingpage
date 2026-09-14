import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { comparePages } from "@/data/compare-content";
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  Globe,
  ShieldCheck,
  Languages,
  Barcode,
  QrCode,
  Palette,
  TrendingUp,
  Package,
  Layers,
  FlaskConical,
  Quote,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return comparePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = comparePages.find((p) => p.slug === slug);
  if (!page) return {};

  return {
    title: `${page.competitor} Alternative (2026): RecipeBuilder vs ${page.competitor}`,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: `https://www.recipebuilder.co/compare/${page.slug}`,
    },
    openGraph: {
      title: `${page.competitor} Alternative — RecipeBuilder vs ${page.competitor} (2026)`,
      description: page.metaDescription,
      url: `https://www.recipebuilder.co/compare/${page.slug}`,
      siteName: "RecipeBuilder",
      type: "website",
    },
  };
}

// Universal FAQs hardcoded (same for every comparison page)
const universalFaqs: { question: string; answer: string }[] = [
  {
    question: "Is RecipeBuilder GCC and SFDA compliant?",
    answer:
      "Yes. RecipeBuilder was built specifically for GCC food businesses. Labels cover GSO standards, SFDA Technical Regulation requirements, UAE ESMA, and Dubai Municipality review requirements. Over 5,000 labels created with RecipeBuilder have been approved by Dubai Municipality.",
  },
  {
    question: "What languages does RecipeBuilder support?",
    answer:
      "RecipeBuilder generates labels in 40+ languages including Arabic. Bilingual English-Arabic labels are generated automatically from a single recipe — no separate translation workflow needed.",
  },
  {
    question:
      "Does RecipeBuilder generate packaging artwork or just a nutrition panel?",
    answer:
      "RecipeBuilder generates complete packaging artwork including the nutrition facts panel, bilingual ingredient list, allergen declaration, storage instructions, barcode, and QR code — all formatted for print. Most competitors generate only a nutrition panel image.",
  },
  {
    question: "What ingredient database does RecipeBuilder use?",
    answer:
      "RecipeBuilder is built on USDA FoodData Central with 20,000+ verified ingredients. You can also add custom ingredients with manual nutrition values for proprietary formulations.",
  },
  {
    question: "How long does it take to get started with RecipeBuilder?",
    answer:
      "Most food businesses create their first label within a day of onboarding. Once your account is set up, the ingredient database is searchable, recipe building is straightforward, and label generation is automatic once a recipe is saved.",
  },
  {
    question: "How do I get started with RecipeBuilder?",
    answer:
      "Book a 30-minute call with our team. We walk through your recipes and label requirements, recommend the plan that fits your catalogue, and set up your account.",
  },
  {
    question: "How does RecipeBuilder pricing work?",
    answer:
      "RecipeBuilder is billed yearly: the Starter plan is $828/year for up to 400 recipes, the Growth plan is $1,500/year for up to 1,500 recipes, and Business plans with unlimited recipes are priced on request. Every plan includes unlimited label generation, GCC/SFDA label formats, and packaging artwork, with no per-label or per-product fees.",
  },
];

// Per-competitor FAQ answers
function buildFaqs(
  page: (typeof comparePages)[0]
): { question: string; answer: string }[] {
  const { competitor, competitorPricing, competitorRegions } = page;

  const faqMap: Record<
    string,
    { question: string; answer: string }[]
  > = {
    "recipal-alternative": [
      {
        question: `How does RecipeBuilder compare to ${competitor}?`,
        answer: `${competitor} is a well-established US nutrition-label generator covering FDA and CFIA requirements — it works well for North American food entrepreneurs who only need a nutrition facts panel. RecipeBuilder is a broader platform covering 10+ regulatory frameworks including GCC/SFDA, generates complete print-ready packaging artwork (not just a panel image), includes barcodes and QR codes on every label, and supports bilingual English and Arabic output. For businesses selling in the GCC or needing full packaging artwork, RecipeBuilder covers ground ${competitor} cannot.`,
      },
      {
        question: `Can RecipeBuilder replace ${competitor} for GCC businesses?`,
        answer: `Yes — and it goes further. ${competitor} supports FDA and CFIA only, so GCC businesses using it cannot generate SFDA-compliant labels or bilingual Arabic content through the platform. RecipeBuilder was built with GCC compliance as a core feature, not an afterthought. Over 5,000 labels produced with RecipeBuilder have been approved by Dubai Municipality, and the platform handles the bilingual Arabic/English formatting that GCC regulations require.`,
      },
      {
        question: `How does RecipeBuilder pricing compare to ${competitor}?`,
        answer: `${competitor} offers pay-per-recipe and monthly plans, which suit very small catalogues. RecipeBuilder is billed yearly, from $828/year for up to 400 recipes or $1,500/year for up to 1,500 recipes, and every plan includes packaging artwork, barcodes, QR codes, GCC/SFDA label formats, and recipe costing. For a handful of recipes ${competitor} can cost less; as your catalogue grows, one all-inclusive yearly plan is simpler to budget.`,
      },
    ],
    "food-label-maker-alternative": [
      {
        question: `How does RecipeBuilder compare to ${competitor}?`,
        answer: `${competitor} is a self-serve nutrition label platform that covers several regulatory formats, including SFDA-ready labels in English and Arabic. RecipeBuilder is built around the recipe rather than the label: alongside labels it generates complete print-ready packaging artwork with barcodes and QR codes, and includes recipe costing, sub-recipes, and portion stock tracking in the same platform.`,
      },
      {
        question: `Can RecipeBuilder replace ${competitor} for GCC businesses?`,
        answer: `Yes. Both tools can produce Arabic and English labels for the Gulf. The difference is scope: RecipeBuilder adds full packaging artwork, barcodes, QR codes, recipe costing, and stock tracking, so teams that manage production and pricing alongside labeling can work in one place.`,
      },
      {
        question: `How does RecipeBuilder pricing compare to ${competitor}?`,
        answer: `${competitor} uses monthly subscription tiers that start lower than RecipeBuilder. RecipeBuilder is billed yearly, from $828/year for up to 400 recipes or $1,500/year for up to 1,500 recipes, with packaging artwork, barcodes, QR codes, recipe costing, and stock tracking included in every plan rather than split across tiers.`,
      },
    ],
    "nutrical-alternative": [
      {
        question: `How does RecipeBuilder compare to ${competitor}?`,
        answer: `Both platforms serve food businesses in the GCC and produce bilingual English and Arabic labels. ${competitor} centres on nutrition analysis, while RecipeBuilder is built around the full recipe-to-pack workflow: print-ready packaging artwork with barcodes and QR codes, sub-recipes, recipe costing, and portion stock tracking in one platform.`,
      },
      {
        question: `Can RecipeBuilder replace ${competitor} for GCC businesses?`,
        answer: `Yes. RecipeBuilder covers GCC and SFDA label formats and adds complete packaging artwork, auto-generated barcodes and QR codes, and portion stock tracking. If you already use ${competitor} for GCC labels, RecipeBuilder offers the same label formats with a fuller production workflow.`,
      },
      {
        question: `How does RecipeBuilder pricing compare to ${competitor}?`,
        answer: `${competitor} is quote-based, so you need to contact them for rates. RecipeBuilder publishes yearly pricing: $828/year for up to 400 recipes, $1,500/year for up to 1,500 recipes, and custom pricing for unlimited recipes. Book a call and we will confirm the right plan for your catalogue.`,
      },
    ],
    "labelcalc-alternative": [
      {
        question: `How does RecipeBuilder compare to ${competitor}?`,
        answer: `${competitor} (now part of Datacor) is a legacy US nutrition label platform originally built for desktop-era food manufacturing. RecipeBuilder is a modern cloud-native platform covering 10+ regulatory frameworks, generating print-ready packaging artwork with barcodes and QR codes, and supporting bilingual Arabic/English output. For any business with international operations or modern packaging needs, RecipeBuilder offers a dramatically more capable and accessible solution.`,
      },
      {
        question: `Can RecipeBuilder replace ${competitor} for GCC businesses?`,
        answer: `Absolutely. ${competitor} has no GCC or SFDA support at all, making it unsuitable for Middle Eastern food businesses. RecipeBuilder was built with GCC compliance as a first-class feature — including Arabic language labels and SFDA formatting — and has 5,000+ Dubai Municipality-approved labels to demonstrate real-world compliance.`,
      },
      {
        question: `How does RecipeBuilder pricing compare to ${competitor}?`,
        answer: `${competitor} offers one-time and subscription licence options focused on FDA nutrition facts calculation. RecipeBuilder is billed yearly, from $828/year for up to 400 recipes or $1,500/year for up to 1,500 recipes, and covers FDA, EU, and GCC/SFDA label formats with packaging artwork, barcodes, and QR codes included.`,
      },
    ],
  };

  const competitorFaqs = faqMap[page.slug] ?? [];

  return [...competitorFaqs, ...universalFaqs];
}

/**
 * Returns ONLY the competitor-specific FAQs — used for FAQPage JSON-LD
 * to avoid duplicating the 7 universal FAQs across all 12 comparison
 * pages. The universal FAQs are still rendered visibly to users; they
 * just don't appear in structured data, which prevents Google from
 * treating the FAQ schema as boilerplate-duplicated content.
 */
function buildSchemaFaqs(
  page: (typeof comparePages)[0]
): { question: string; answer: string }[] {
  const allFaqs = buildFaqs(page);
  // First 3 entries are always the competitor-specific FAQs.
  return allFaqs.slice(0, 3);
}

const differentiatorIcons = [
  ShieldCheck,
  Globe,
  Languages,
  Palette,
  Barcode,
  QrCode,
  TrendingUp,
  Package,
  Layers,
  FlaskConical,
];

export default async function CompareSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = comparePages.find((p) => p.slug === slug);
  if (!page) notFound();

  const faqs = buildFaqs(page);
  // Schema FAQs are competitor-specific only to avoid duplicating the
  // 7 universal FAQs across all 12 compare pages (FAQ schema spam).
  const schemaFaqs = buildSchemaFaqs(page);

  // Tier-1 slugs for "Related comparisons" section
  const tier1Slugs = [
    "recipal-alternative",
    "food-label-maker-alternative",
    "nutrical-alternative",
    "labelcalc-alternative",
  ];

  const relatedPages = comparePages.filter(
    (p) => tier1Slugs.includes(p.slug) && p.slug !== page.slug
  );

  const jsonLdSoftware = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RecipeBuilder",
    url: "https://www.recipebuilder.co",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "RecipeBuilder is a food labeling and recipe management platform covering 10+ regulatory frameworks including GCC/SFDA. It auto-generates bilingual packaging artwork, barcodes, QR codes, and allergen declarations.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "828",
      highPrice: "1500",
      offerCount: "3",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "Organization",
      name: "ByteBeam",
      url: "https://www.bytebeam.co",
    },
  };

  const jsonLdBreadcrumb = {
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
      {
        "@type": "ListItem",
        position: 3,
        name: `RecipeBuilder vs. ${page.competitor}`,
        item: `https://www.recipebuilder.co/compare/${page.slug}`,
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: schemaFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Navbar light />
      <main>
        {/* Breadcrumb */}
        <div className="pt-24 pb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-text">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/compare"
                className="hover:text-primary transition-colors"
              >
                Comparisons
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">
                vs. {page.competitor}
              </span>
            </nav>
          </div>
        </div>

        {/* Editorial meta bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-0">
          <p className="text-sm text-text/60">
            Reading time: ~8 min &middot; Published March 2026 &middot; Last
            updated March 2026
          </p>
          <p className="text-sm text-text/60 mt-0.5">
            Disclosure: RecipeBuilder is our product. We&apos;ve tried to make
            this comparison accurate and fair. If you spot an error, email us at{" "}
            <a
              href="mailto:info@bytebeam.co"
              className="underline underline-offset-2 hover:text-text transition-colors"
            >
              info@bytebeam.co
            </a>
            .
          </p>
        </div>

        {/* Hero */}
        <section className="relative pt-10 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/60 to-white pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary-light rounded-full">
                <Layers className="w-4 h-4" />
                COMPARISON
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                {page.heroHeadline}
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-text max-w-3xl mx-auto leading-relaxed">
                {page.heroSubtext}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://cal.com/talal-bazerbachi-jb8a7d/recipebuilder-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                >
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways box */}
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 max-w-3xl mx-auto">
              <h2 className="text-base font-semibold text-amber-900 mb-4 uppercase tracking-wider">
                Key Takeaways
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-amber-900 text-sm leading-relaxed">
                    RecipeBuilder covers 10+ regulatory frameworks.{" "}
                    {page.competitor} covers {page.competitorRegions}.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-amber-900 text-sm leading-relaxed">
                    RecipeBuilder generates complete packaging artwork with
                    barcodes and QR codes. {page.competitor} generates{" "}
                    {page.featureRows.find(
                      (r) => r.feature === "Packaging artwork generation"
                    )?.competitor ?? "label panels only"}
                    .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-amber-900 text-sm leading-relaxed">
                    RecipeBuilder is billed yearly, from $828/year. {page.competitor} pricing:{" "}
                    {page.competitorPricing}.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Social proof bar */}
        <section className="py-6 bg-surface border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-text">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                Trusted by food businesses worldwide
              </span>
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
                Yearly plans from $828/year
              </span>
            </div>
          </div>
        </section>

        {/* Feature comparison table */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Feature Comparison
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                RecipeBuilder vs. {page.competitor}
              </h2>
              <p className="mt-4 text-lg text-text">
                A side-by-side look at how the two platforms compare on the
                features that matter most to food businesses.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left px-6 py-4 font-semibold text-foreground w-1/3 border-b border-border">
                      Feature
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground w-1/3 border-b border-border">
                      <span className="inline-flex items-center gap-1.5 text-primary">
                        RecipeBuilder
                      </span>
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground w-1/3 border-b border-border">
                      {page.competitor}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {page.featureRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? "bg-white" : "bg-surface/50"}
                    >
                      <td className="px-6 py-4 font-medium text-foreground border-b border-border/50">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 border-b border-border/50">
                        <span className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-green-700 font-medium leading-snug">
                            {row.recipebuilder}
                          </span>
                        </span>
                      </td>
                      <td className="px-6 py-4 border-b border-border/50">
                        {row.rbWins ? (
                          <span className="flex items-start gap-2">
                            <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                            <span className="text-text leading-snug">
                              {row.competitor}
                            </span>
                          </span>
                        ) : (
                          <span className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            <span className="text-text leading-snug">
                              {row.competitor}
                            </span>
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-text/60 text-center">
              Feature data based on publicly available information as of early
              2026. Verify current {page.competitor} features on their website.
            </p>
          </div>
        </section>

        {/* Why businesses switch */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Why Businesses Switch
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Why food businesses move from {page.competitor} to RecipeBuilder
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.keyDifferentiators.map((point, i) => {
                const Icon = differentiatorIcons[i % differentiatorIcons.length];
                return (
                  <div
                    key={i}
                    className="bg-white p-7 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
                  >
                    <div className="w-11 h-11 bg-primary-light rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-text leading-relaxed text-sm">{point}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* When to Choose Each — decision matrix */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Decision Guide
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                When to choose each
              </h2>
              <p className="mt-4 text-lg text-text">
                An honest look at which platform is the better fit depending on
                your situation.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* RecipeBuilder column */}
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="bg-primary px-7 py-5">
                  <h3 className="text-lg font-semibold text-white">
                    Choose RecipeBuilder if you&hellip;
                  </h3>
                </div>
                <ul className="p-7 space-y-4">
                  {[
                    "Sell or plan to sell in the GCC, Saudi Arabia, UAE, or any Gulf market",
                    "Need bilingual English and Arabic labels on your packaging",
                    "Want complete packaging artwork generated automatically — not just a nutrition panel",
                    "Need barcodes and QR codes on every label without additional tools",
                    "Want recipe costing and inventory management in the same platform",
                    "Prefer one yearly plan that includes every feature",
                  ].map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-text text-sm leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Competitor column */}
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="bg-surface px-7 py-5 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground">
                    Choose {page.competitor} if you&hellip;
                  </h3>
                </div>
                <ul className="p-7 space-y-4">
                  {page.whenToChooseCompetitor.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-text text-sm leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI / Benefits — "Why the numbers matter" */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                By the Numbers
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Why the numbers matter
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  stat: "5,000+",
                  label: "labels approved by Dubai Municipality",
                  detail:
                    "The gold standard for GCC food compliance — a proven track record in the region.",
                },
                {
                  stat: "20,000+",
                  label: "USDA FoodData Central ingredients",
                  detail:
                    "No manual data entry for ingredient nutrition. Search, select, and build recipes instantly.",
                },
                {
                  stat: "From $828/year",
                  label: "vs $300–$800 per lab test",
                  detail:
                    "One yearly plan with unlimited recipe iterations included — no per-test fees.",
                },
                {
                  stat: "40+",
                  label: "languages including Arabic",
                  detail:
                    "Covers every GCC market from one platform — bilingual labels generated automatically.",
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="bg-white rounded-2xl border border-border p-8 shadow-sm"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {item.stat}
                  </div>
                  <div className="text-base font-semibold text-foreground mb-2">
                    {item.label}
                  </div>
                  <p className="text-sm text-text leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitor context */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  About {page.competitor}
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-foreground">
                  {page.competitor} is {page.tagline}
                </h2>
                <p className="mt-4 text-text leading-relaxed">
                  {page.competitorWeakness}
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="font-medium text-foreground w-32 shrink-0">
                      Pricing:
                    </span>
                    <span className="text-text">{page.competitorPricing}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="font-medium text-foreground w-32 shrink-0">
                      Market coverage:
                    </span>
                    <span className="text-text">{page.competitorRegions}</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface rounded-2xl border border-border p-8">
                <h3 className="text-lg font-semibold text-foreground mb-5">
                  RecipeBuilder at a Glance
                </h3>
                <ul className="space-y-4">
                  {[
                    "10+ regulatory frameworks: FDA, EU, GCC/SFDA, GSO, Codex & more",
                    "Bilingual English & Arabic labels (40+ languages supported)",
                    "Full packaging artwork auto-generated from your recipe",
                    "Barcodes + QR codes on every label — no extra tools",
                    "5,000+ labels approved by Dubai Municipality",
                    "20,000+ USDA FoodData Central ingredients",
                    "Recipe costing, margin tracking & inventory management",
                    "Yearly plans from $828/year, every feature included",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-text text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Customer Stories
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                What RecipeBuilder customers say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Working with ByteBeam has been an exceptional experience. They transformed a time-consuming, manual labeling process into a smart, efficient workflow — saving time and costs while ensuring quality and compliance.",
                  name: "Chief Financial Officer",
                  title: "Operations & Finance",
                  location: "Takhlees Compliance Services",
                },
                {
                  quote:
                    "The USDA database integration is incredibly accurate. We've processed hundreds of products and every label passed FDA review on the first submission.",
                  name: "David R.",
                  title: "Quality Assurance Manager",
                  location: "Pacific Foods Inc.",
                  metric: "100% FDA first-pass approval",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-border p-8 shadow-sm relative"
                >
                  <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                  <p className="text-text leading-relaxed text-base italic mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-text/70 text-sm">
                        {testimonial.title}
                      </p>
                      <p className="text-primary/80 text-xs font-medium mt-0.5">
                        {testimonial.location}
                      </p>
                    </div>
                    {testimonial.metric && (
                      <p className="text-xs font-bold text-primary text-right">
                        {testimonial.metric}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep-dive: Why RecipeBuilder is the best alternative */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                In Depth
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Why RecipeBuilder is the best {page.competitor} alternative
              </h2>
            </div>

            <div className="prose prose-base max-w-none text-text space-y-10">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Regulatory coverage: the most important limitation of{" "}
                  {page.competitor} for international food businesses
                </h3>
                <p className="leading-relaxed">
                  Food regulations are not interchangeable. A label that meets
                  FDA requirements in the US does not meet the GCC&apos;s GSO
                  standards or Saudi Arabia&apos;s SFDA Technical Regulation.
                  The UAE&apos;s ESMA requirements and Dubai Municipality&apos;s
                  review process add further specific formatting demands —
                  including mandatory bilingual English and Arabic text, specific
                  nutrient declaration formats, and allergen presentation rules.
                </p>
                <p className="leading-relaxed mt-4">
                  {page.competitor} covers {page.competitorRegions}. For any
                  food business selling into the Gulf, this means {page.competitor}{" "}
                  cannot legally produce a compliant label — not because of a
                  missing feature, but because the regulatory frameworks it
                  supports simply do not apply in GCC markets. RecipeBuilder was
                  built with GCC compliance as a first-class feature: over 5,000
                  labels produced with RecipeBuilder have been approved by Dubai
                  Municipality.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Complete packaging workflow: a nutrition panel is not a food
                  label
                </h3>
                <p className="leading-relaxed">
                  Most nutrition label tools produce a single output: a
                  nutrition facts panel image. That image is one element of a
                  complete food label. A retail-ready food product also requires
                  a bilingual ingredient declaration, allergen declaration,
                  storage instructions, country of origin, manufacturer details,
                  net weight, a barcode scannable at retail, and — increasingly
                  — a QR code for digital traceability.
                </p>
                <p className="leading-relaxed mt-4">
                  RecipeBuilder generates all of these elements together in a
                  single export, formatted for print and ready to send to your
                  packaging supplier. There is no separate design step, no
                  barcode tool to subscribe to, no translation agency needed for
                  the Arabic. The complete artwork comes out of a single recipe
                  save.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Pricing at scale: how the total cost of food labeling adds up
                </h3>
                <p className="leading-relaxed">
                  RecipeBuilder is billed yearly, from $828/year, with a flat subscription that
                  covers unlimited label generation. There are no per-label fees,
                  no per-product charges, and no separate line items for
                  barcodes, QR codes, or packaging artwork — they are all
                  included. {page.competitor} starts at {page.competitorPricing}.
                  For food businesses with 10, 20, or 50 SKUs, a flat yearly plan
                  is simpler to budget than per-label or per-product fees. Book a
                  call to confirm the right plan before committing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Migration / switching callout */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Switching from {page.competitor}?
              </h3>
              <p className="text-blue-800 leading-relaxed mb-3">
                Most food businesses are up and running on RecipeBuilder within
                a week. There&apos;s no data migration required — you&apos;ll
                rebuild your recipes directly in RecipeBuilder using our
                20,000+ ingredient database.
              </p>
              <p className="text-blue-800 leading-relaxed mb-6">
                Book a 30-minute onboarding call and we&apos;ll walk you
                through the transition.
              </p>
              <a
                href="https://cal.com/talal-bazerbachi-jb8a7d/recipebuilder-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book a 30-minute onboarding call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                FAQ
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Common questions about RecipeBuilder vs. {page.competitor}
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-border p-8 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-text leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related comparisons */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                More Comparisons
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Related comparisons
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPages.map((related) => (
                <Link
                  key={related.slug}
                  href={`/compare/${related.slug}`}
                  className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Comparison
                    </span>
                    <ArrowRight className="w-4 h-4 text-text/40 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    RecipeBuilder vs. {related.competitor}
                  </h3>
                  <p className="text-sm text-text line-clamp-2">
                    {related.metaDescription}
                  </p>
                </Link>
              ))}
              {/* Competitor listicle hub */}
              <Link
                href="/compare"
                className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    All Comparisons
                  </span>
                  <ArrowRight className="w-4 h-4 text-text/40 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Best Nutrition Label Software 2026
                </h3>
                <p className="text-sm text-text">
                  RecipeBuilder, ReciPal, Food Label Maker, NutriCal and
                  LabelCalc compared side by side.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA banner */}
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
                  Ready to switch from {page.competitor}?
                </h2>
                <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                  See how RecipeBuilder handles GCC/SFDA compliance, bilingual
                  Arabic labels, and complete packaging artwork in a free
                  30-minute demo.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://cal.com/talal-bazerbachi-jb8a7d/recipebuilder-discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-primary bg-white rounded-lg hover:bg-white/90 transition-colors"
                  >
                    Book a Call
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <p className="mt-6 text-sm text-white/50">
                  30-minute call · No commitment ·{" "}
                  <Link
                    href="/compare"
                    className="underline underline-offset-2 hover:text-white/80 transition-colors"
                  >
                    See all comparisons
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
    </>
  );
}
