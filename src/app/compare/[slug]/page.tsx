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
    title: `RecipeBuilder vs. ${page.competitor} — Full Feature Comparison`,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: `https://recipebuilder.bytebeam.co/compare/${page.slug}`,
    },
    openGraph: {
      title: `RecipeBuilder vs. ${page.competitor}`,
      description: page.metaDescription,
      url: `https://recipebuilder.bytebeam.co/compare/${page.slug}`,
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
      "Most food businesses create their first label within a day of starting a free trial. The ingredient database is searchable, recipe building is straightforward, and label generation is automatic once a recipe is saved.",
  },
  {
    question: "Does RecipeBuilder have a free trial?",
    answer:
      "Yes. RecipeBuilder offers a 14-day free trial with no credit card required. You can build recipes, generate labels, and test the GCC compliance features before committing.",
  },
  {
    question: "How does RecipeBuilder pricing work?",
    answer:
      "RecipeBuilder starts at $15/mo on the Starter plan, scaling to $79/mo for larger teams. All plans include unlimited label generation, GCC/SFDA compliance features, and packaging artwork. There are no per-label or per-product fees.",
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
        question: `Is RecipeBuilder cheaper than ${competitor}?`,
        answer: `Yes. RecipeBuilder starts at $15/mo versus ${competitor}'s $49/mo entry tier, while offering a substantially broader feature set: GCC/SFDA compliance, packaging artwork, barcodes, QR codes, recipe costing, and inventory management — none of which are included in ${competitor}. Both offer a free trial, so you can evaluate RecipeBuilder without committing.`,
      },
    ],
    "food-label-maker-alternative": [
      {
        question: `How does RecipeBuilder compare to ${competitor}?`,
        answer: `${competitor} is a capable US-focused nutrition label platform with allergen management and a solid ingredient database. The main differences: RecipeBuilder adds GCC/SFDA compliance, bilingual Arabic labels, full packaging artwork generation, barcodes, and QR codes — features ${competitor} does not offer at any price tier. For businesses needing to package and sell products in the Gulf region, RecipeBuilder is the more complete solution.`,
      },
      {
        question: `Can RecipeBuilder replace ${competitor} for GCC businesses?`,
        answer: `For GCC businesses, RecipeBuilder is the better fit. ${competitor} lacks GCC regulatory frameworks and Arabic language output — both of which are legal requirements for food labels sold in the UAE, Saudi Arabia, and across the Gulf. RecipeBuilder's GCC track record includes 5,000+ labels approved by Dubai Municipality, making it a proven compliance tool for the region.`,
      },
      {
        question: `Is RecipeBuilder cheaper than ${competitor}?`,
        answer: `RecipeBuilder starts at $15/mo, while ${competitor} starts at $39/mo and climbs into enterprise pricing on request. Beyond the lower base price, RecipeBuilder bundles recipe costing, inventory management, and full packaging artwork — capabilities that would require additional tools or higher ${competitor} tiers.`,
      },
    ],
    "nutrical-alternative": [
      {
        question: `How does RecipeBuilder compare to ${competitor}?`,
        answer: `Both platforms target the GCC market, but they differ significantly in scope. ${competitor} focuses on nutrition calculations and basic label panels for GCC compliance, while RecipeBuilder covers GCC/SFDA alongside 9 additional regulatory frameworks (FDA, EU, Codex, and more), generates full packaging artwork with barcodes and QR codes, and includes recipe costing and inventory management. For businesses that export or need a complete packaging workflow, RecipeBuilder is the more comprehensive choice.`,
      },
      {
        question: `Can RecipeBuilder replace ${competitor} for GCC businesses?`,
        answer: `RecipeBuilder matches ${competitor} on GCC and SFDA compliance while adding features ${competitor} lacks: complete packaging artwork, auto-generated barcodes and QR codes, a 20,000+ USDA ingredient database, and transparent subscription pricing with a free trial. If you are already using ${competitor} for GCC labels, RecipeBuilder offers the same compliance with a fuller production workflow.`,
      },
      {
        question: `Is RecipeBuilder cheaper than ${competitor}?`,
        answer: `${competitor} uses custom pricing with no publicly listed rates, which means you need to request a quote. RecipeBuilder offers transparent subscription pricing from $15/mo with a 14-day free trial, so you can assess value immediately without a sales conversation.`,
      },
    ],
    "labelcalc-alternative": [
      {
        question: `How does RecipeBuilder compare to ${competitor}?`,
        answer: `${competitor} (now part of Datacor) is a legacy US nutrition label platform originally built for desktop-era food manufacturing. RecipeBuilder is a modern cloud-native platform covering 10+ regulatory frameworks, generating print-ready packaging artwork with barcodes and QR codes, and supporting bilingual Arabic/English output. For any business with international operations or modern packaging needs, RecipeBuilder offers a dramatically more capable and accessible solution.`,
      },
      {
        question: `Can RecipeBuilder replace ${competitor} for GCC businesses?`,
        answer: `Absolutely. ${competitor} has no GCC or SFDA support at all, making it unsuitable for Middle Eastern food businesses. RecipeBuilder was built with GCC compliance as a first-class feature — including Arabic language labels and SFDA formatting — and has 5,000+ Dubai Municipality-approved labels to demonstrate real-world compliance. The switch also comes with a significant cost reduction.`,
      },
      {
        question: `Is RecipeBuilder cheaper than ${competitor}?`,
        answer: `Considerably. ${competitor} now sits within Datacor's enterprise ERP pricing, typically $500–$1,500+/yr with no self-serve trial. RecipeBuilder starts at $15/mo with a 14-day free trial and transparent monthly pricing — no annual contracts or enterprise negotiations required.`,
      },
    ],
    "genesis-rd-alternative": [
      {
        question: `How does RecipeBuilder compare to ${competitor}?`,
        answer: `${competitor} is the gold-standard nutrition analysis platform for large US food manufacturers — it has an enormous ingredient database, advanced formulation tools, and deep regulatory compliance for the US market. However, it costs $18,000+/yr, requires significant onboarding, and has no GCC or SFDA support. RecipeBuilder targets growing food businesses and GCC operators: it is faster to deploy, covers 10+ frameworks including GCC/SFDA, generates packaging artwork with barcodes and QR codes, and starts at $15/mo.`,
      },
      {
        question: `Can RecipeBuilder replace ${competitor} for GCC businesses?`,
        answer: `For GCC businesses, RecipeBuilder is the appropriate tool — ${competitor} was not designed for this market and has no Arabic or SFDA support. RecipeBuilder covers all the GCC compliance requirements ${competitor} lacks, with the added benefit of packaging artwork generation and an accessible price point. Large enterprises with complex US formulation needs may still require ${competitor} for those specific workflows, but GCC-focused businesses are better served by RecipeBuilder.`,
      },
      {
        question: `Is RecipeBuilder cheaper than ${competitor}?`,
        answer: `RecipeBuilder starts at $15/mo vs ${competitor}'s $18,000+/yr enterprise licensing — a difference of over 99% in cost. RecipeBuilder also offers a 14-day free trial with no sales engagement required, whereas ${competitor} requires a formal demo and enterprise contract.`,
      },
    ],
    "nutritics-alternative": [
      {
        question: `How does RecipeBuilder compare to ${competitor}?`,
        answer: `${competitor} is a well-regarded UK and EU nutrition platform with a 1.5M+ ingredient database and strong foodservice workflow tools. Its weaknesses for GCC businesses are significant: no GCC or SFDA compliance, no Arabic language support, and no packaging artwork generation. RecipeBuilder covers EU frameworks in addition to GCC/SFDA, generates bilingual Arabic/English packaging artwork with barcodes and QR codes, and starts at a lower price point.`,
      },
      {
        question: `Can RecipeBuilder replace ${competitor} for GCC businesses?`,
        answer: `Yes — and for GCC-market businesses, RecipeBuilder is the only practical choice between the two. ${competitor} has no Middle East regulatory support and no Arabic language capabilities. RecipeBuilder is the platform that has actually earned 5,000+ label approvals from Dubai Municipality and is actively used by food manufacturers across the UAE and Gulf region.`,
      },
      {
        question: `Is RecipeBuilder cheaper than ${competitor}?`,
        answer: `RecipeBuilder starts at $15/mo vs ${competitor}'s approximately £99/mo (~$125/mo) entry tier. For GCC businesses, RecipeBuilder offers better regulatory fit at a lower price — and the feature overlap that ${competitor} does offer (EU frameworks, recipe management) is matched by RecipeBuilder as well.`,
      },
    ],
    "nutritionist-pro-alternative": [
      {
        question: `How does RecipeBuilder compare to ${competitor}?`,
        answer: `${competitor} covers US, Canada, UK, EU, and China markets and is a capable multi-region nutrition analysis tool. The key gaps: no GCC or SFDA support, no Arabic output, a dated interface, and nutrition label reports rather than print-ready packaging artwork. RecipeBuilder covers all the same Western markets plus the GCC, generates bilingual Arabic/English packaging with barcodes and QR codes, and offers a modern cloud-native experience.`,
      },
      {
        question: `Can RecipeBuilder replace ${competitor} for GCC businesses?`,
        answer: `Yes. ${competitor} has zero GCC presence — no SFDA frameworks, no Arabic label output, and no Dubai Municipality track record. RecipeBuilder fills every gap: full GCC/SFDA compliance, bilingual Arabic/English labels, and 5,000+ labels already approved in Dubai. For any business operating in or selling into the Gulf region, RecipeBuilder is the clear choice.`,
      },
      {
        question: `Is RecipeBuilder cheaper than ${competitor}?`,
        answer: `RecipeBuilder starts at $15/mo vs ${competitor}'s $39/mo entry tier, and includes packaging artwork, barcodes, QR codes, recipe costing, and inventory management that ${competitor} does not bundle in at its base price.`,
      },
    ],
    "menusano-alternative": [
      {
        question: `How does RecipeBuilder compare to ${competitor}?`,
        answer: `${competitor} is a restaurant and foodservice menu labeling tool designed for Canadian and US compliance. It is well-suited for chain restaurant calorie labeling but was not designed for packaged food manufacturing — there is no packaging artwork, no barcodes, no GCC support, and no Arabic. RecipeBuilder covers packaged food production end-to-end: regulatory-compliant labels, print-ready packaging artwork with barcodes and QR codes, recipe costing, and inventory management.`,
      },
      {
        question: `Can RecipeBuilder replace ${competitor} for GCC businesses?`,
        answer: `Completely. ${competitor} has no GCC market presence and no Arabic language support. For any food business operating in the UAE, Saudi Arabia, or elsewhere in the Gulf, ${competitor} is not a viable option. RecipeBuilder was purpose-built for GCC food businesses and has the regulatory compliance and label approvals to prove it.`,
      },
      {
        question: `Is RecipeBuilder cheaper than ${competitor}?`,
        answer: `RecipeBuilder starts at $15/mo vs ${competitor}'s $69/mo entry tier — a meaningful saving, especially when RecipeBuilder includes features like packaging artwork, barcodes, QR codes, and inventory management that ${competitor} does not offer.`,
      },
    ],
    "nutraid-alternative": [
      {
        question: `How does RecipeBuilder compare to ${competitor}?`,
        answer: `${competitor} is an accessible UK and EU food labeling tool aimed at small food businesses. It handles basic EU label panels but has no GCC/SFDA support, no Arabic language output, no packaging artwork, and no barcodes or QR codes. RecipeBuilder covers the EU plus 9 additional regulatory frameworks, generates complete packaging artwork, and includes bilingual Arabic/English label output — making it the better choice for any business with international ambitions.`,
      },
      {
        question: `Can RecipeBuilder replace ${competitor} for GCC businesses?`,
        answer: `Yes. ${competitor} has no presence in GCC markets and cannot generate SFDA-compliant or Arabic-language labels. RecipeBuilder covers all GCC regulatory requirements and has a proven track record with 5,000+ labels approved by Dubai Municipality. UK-based businesses using ${competitor} that want to export to the Gulf would need to switch to RecipeBuilder.`,
      },
      {
        question: `Is RecipeBuilder cheaper than ${competitor}?`,
        answer: `${competitor} starts at approximately £19/mo (~$24/mo). RecipeBuilder starts at $15/mo and includes significantly more: 10+ regulatory frameworks, packaging artwork, barcodes, QR codes, recipe costing, and inventory management — substantially more capability at a comparable or lower price.`,
      },
    ],
    "foodzilla-alternative": [
      {
        question: `How does RecipeBuilder compare to ${competitor}?`,
        answer: `${competitor} and RecipeBuilder serve entirely different markets. ${competitor} is a dietitian and nutrition coaching platform — its recipe features are designed for client meal plans, not commercial food production. RecipeBuilder is a food manufacturing compliance platform: it generates regulatory-compliant food labels, packaging artwork with barcodes and QR codes, and supports GCC/SFDA compliance. If you are a food manufacturer rather than a nutrition practitioner, RecipeBuilder is the appropriate tool.`,
      },
      {
        question: `Can RecipeBuilder replace ${competitor} for GCC businesses?`,
        answer: `If you are a GCC food manufacturer or packaged food business, RecipeBuilder is purpose-built for your needs — ${competitor} is not. ${competitor} has no regulatory compliance module, no SFDA or GCC frameworks, and no packaging artwork. RecipeBuilder covers all of these with a proven GCC track record.`,
      },
      {
        question: `Is RecipeBuilder cheaper than ${competitor}?`,
        answer: `RecipeBuilder starts at $15/mo vs ${competitor}'s $29/mo entry tier. More importantly, RecipeBuilder is the appropriate tool for food manufacturing — ${competitor}'s lower tiers are designed for individual dietitians, not food businesses.`,
      },
    ],
    "erudus-alternative": [
      {
        question: `How does RecipeBuilder compare to ${competitor}?`,
        answer: `${competitor} and RecipeBuilder solve different problems. ${competitor} is a UK foodservice allergen data-sharing network — suppliers upload product data so operators can access allergen information. It is not a food label generator. RecipeBuilder generates regulatory-compliant food labels, packaging artwork with barcodes and QR codes, and handles GCC/SFDA compliance. If you need to create labels rather than share allergen data with UK foodservice operators, RecipeBuilder is the tool you need.`,
      },
      {
        question: `Can RecipeBuilder replace ${competitor} for GCC businesses?`,
        answer: `${competitor} is a UK-specific foodservice allergen network with no GCC presence. For GCC food businesses, it is not a relevant comparison. RecipeBuilder is built for GCC food manufacturers and has the compliance track record — 5,000+ Dubai Municipality-approved labels — to demonstrate it. If your business is in the Gulf, RecipeBuilder is the platform, not ${competitor}.`,
      },
      {
        question: `Is RecipeBuilder cheaper than ${competitor}?`,
        answer: `${competitor} offers free supplier access but charges operators ~£200+/yr for broader functionality. RecipeBuilder starts at $15/mo as a complete food labeling and compliance platform. The comparison is largely moot given that they serve different workflows, but RecipeBuilder offers far more labeling and manufacturing functionality for any food business.`,
      },
    ],
    "lab-testing-alternative": [
      {
        question: `How does RecipeBuilder compare to nutrition lab testing?`,
        answer: `Lab testing and RecipeBuilder serve the same underlying goal — getting accurate nutritional data — but in very different ways. A lab test takes 2–4 weeks, costs $300–$800 per test, and gives you a data report you must then format into a compliant label yourself. RecipeBuilder calculates nutrition instantly from 20,000+ USDA-verified ingredients, generates a GCC/SFDA-compliant label with packaging artwork, barcodes, and QR codes, and lets you iterate on your recipe as many times as you need for a flat monthly fee.`,
      },
      {
        question: `Can RecipeBuilder replace lab testing for GCC businesses?`,
        answer: `For most GCC food businesses, RecipeBuilder's USDA-database-calculated nutrition is sufficient for label compliance — and Dubai Municipality has approved 5,000+ labels created this way. Some product categories (especially novel or complex formulations) may still require lab verification, but RecipeBuilder handles the label generation, compliance formatting, Arabic/English output, and packaging artwork that a lab report never provides. Many businesses use RecipeBuilder as their primary labeling tool and commission lab tests only for specific regulatory submissions.`,
      },
      {
        question: `Is RecipeBuilder cheaper than lab testing?`,
        answer: `Dramatically. A single lab test costs $300–$800, takes 2–4 weeks, and must be repeated every time you change your recipe. RecipeBuilder costs $15–$79/mo and supports unlimited recipe iterations in real time. For a business with 10 products that reformulates twice a year, lab testing alone could cost $6,000–$16,000/yr just for the raw data — before label design, artwork, or compliance formatting.`,
      },
    ],
  };

  const competitorFaqs =
    faqMap[page.slug] ?? [
      {
        question: `How does RecipeBuilder compare to ${competitor}?`,
        answer: `RecipeBuilder covers 10+ regulatory frameworks including GCC/SFDA, generates complete print-ready packaging artwork with barcodes and QR codes, and supports bilingual English and Arabic output — capabilities ${competitor} does not offer. For food businesses operating in the GCC or needing a complete packaging workflow, RecipeBuilder is the more comprehensive choice starting from $15/mo.`,
      },
      {
        question: `Can RecipeBuilder replace ${competitor} for GCC businesses?`,
        answer: `For GCC-market businesses, RecipeBuilder is the purpose-built solution. ${competitor} focuses on ${competitorRegions} without GCC or SFDA support. RecipeBuilder has earned 5,000+ label approvals from Dubai Municipality and handles the bilingual Arabic/English formatting that GCC regulations mandate.`,
      },
      {
        question: `Is RecipeBuilder cheaper than ${competitor}?`,
        answer: `RecipeBuilder starts at $15/mo with a 14-day free trial, versus ${competitor}'s ${competitorPricing}. RecipeBuilder also bundles features — packaging artwork, barcodes, QR codes, recipe costing, and inventory management — that ${competitor} either charges extra for or does not offer at all.`,
      },
    ];

  return [...competitorFaqs, ...universalFaqs];
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
    url: "https://recipebuilder.bytebeam.co",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "RecipeBuilder is a food labeling and recipe management platform covering 10+ regulatory frameworks including GCC/SFDA. It auto-generates bilingual packaging artwork, barcodes, QR codes, and allergen declarations.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "15",
      highPrice: "79",
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
        item: "https://recipebuilder.bytebeam.co",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Comparisons",
        item: "https://recipebuilder.bytebeam.co/compare",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `RecipeBuilder vs. ${page.competitor}`,
        item: `https://recipebuilder.bytebeam.co/compare/${page.slug}`,
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
                  href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                >
                  Book a Free Demo
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
                    RecipeBuilder starts at $15/mo. {page.competitor} starts at{" "}
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
                From $15/mo · 14-day free trial
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
                    "Are looking for a more affordable option with a 14-day free trial",
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
                  stat: "From $15/mo",
                  label: "vs $300–$800 per lab test",
                  detail:
                    "Dramatically lower cost than alternatives, with unlimited recipe iterations included.",
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
                    "From $15/mo with a 14-day free trial",
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
                    "RecipeBuilder simplified our entire labeling workflow. Labels that used to take days now take minutes, and Dubai Municipality approved them first time.",
                  name: "Operations Manager",
                  title: "Food Business",
                  location: "Dubai",
                },
                {
                  quote:
                    "We switched from manual Excel tracking to RecipeBuilder and the difference is night and day. Recipe costing, label generation, all in one place.",
                  name: "Founder",
                  title: "Artisan Food Brand",
                  location: "UAE",
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
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-text/70 text-sm">
                      {testimonial.title}, {testimonial.location}
                    </p>
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
                  RecipeBuilder starts at $15/mo with a flat subscription that
                  covers unlimited label generation. There are no per-label fees,
                  no per-product charges, and no separate line items for
                  barcodes, QR codes, or packaging artwork — they are all
                  included. {page.competitor} starts at {page.competitorPricing}.
                  For food businesses with 10, 20, or 50 SKUs, the difference
                  compounds quickly. A 14-day free trial means you can verify
                  the fit before committing.
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
                href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
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
              {/* Related blog posts */}
              <Link
                href="/blog/best-nutrition-label-software-2026"
                className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Blog
                  </span>
                  <ArrowRight className="w-4 h-4 text-text/40 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Best Nutrition Label Software 2026
                </h3>
                <p className="text-sm text-text">
                  A comprehensive guide to the top food labeling tools for
                  growing food businesses in 2026.
                </p>
              </Link>
              <Link
                href="/blog/best-nutrition-label-software-gcc-middle-east"
                className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Blog
                  </span>
                  <ArrowRight className="w-4 h-4 text-text/40 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Best Nutrition Label Software for GCC & Middle East
                </h3>
                <p className="text-sm text-text">
                  Which food labeling tools actually support GCC, SFDA, and
                  Arabic label requirements in 2026?
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
                <p className="mt-6 text-sm text-white/50">
                  14-day free trial · No credit card required ·{" "}
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
