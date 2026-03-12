import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  Leaf,
  Globe,
  CheckCircle,
  ChefHat,
  ArrowRight,
  ClipboardList,
  BarChart3,
  Tag,
  FileText,
  DollarSign,
  Building2,
  Store,
  Package,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "School Food Catering Software for Dubai | Dubai Municipality Compliance | RecipeBuilder",
  description:
    "RecipeBuilder helps Dubai school food caterers comply with Dubai Municipality requirements — generate nutrition labels, build allergen matrices, and prepare NutriCheck audit documentation from one platform.",
  keywords: [
    "school food catering Dubai",
    "Dubai Municipality school food compliance",
    "NutriCheck compliance software",
    "school canteen software Dubai",
    "MySchoolFood supplier platform",
    "school catering Dubai Municipality",
    "nutrition label school food Dubai",
    "allergen management school catering",
    "school food supplier Dubai software",
    "catering company Dubai Municipality compliance",
    "school canteen nutrition analysis",
    "food labeling school Dubai",
  ],
  openGraph: {
    title:
      "School Food Catering Software for Dubai | Dubai Municipality Compliance | RecipeBuilder",
    description:
      "RecipeBuilder helps Dubai school food caterers comply with Dubai Municipality requirements — generate nutrition labels, build allergen matrices, and prepare NutriCheck audit documentation from one platform.",
    url: "https://recipebuilder.bytebeam.co/school-catering-dubai",
    siteName: "RecipeBuilder",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://recipebuilder.bytebeam.co/school-catering-dubai",
  },
};

const DEMO_URL =
  "https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall";
const CONTACT_URL =
  "mailto:info@bytebeam.co?subject=RecipeBuilder School Catering Dubai";

const faqs = [
  {
    question:
      "Does RecipeBuilder generate labels that meet Dubai Municipality school food requirements?",
    answer:
      "Yes, RecipeBuilder generates bilingual English-Arabic nutrition labels compliant with UAE.S 192:2019 and Dubai Municipality's school food guidelines. Labels include per-serving nutrition data, allergen declarations, and can be formatted for menu boards, packaging, or NutriCheck documentation.",
  },
  {
    question:
      "Can RecipeBuilder classify my menu items under the Smart Food Choices system?",
    answer:
      "RecipeBuilder calculates the nutritional profile of each menu item and compares it against Dubai Municipality's Smart Food Choices thresholds, flagging items as Green (encourage), Yellow (moderate), Red (limit), or Black (banned) — and highlighting which nutrients need to be reduced for reclassification.",
  },
  {
    question:
      "How does RecipeBuilder help with NutriCheck self-audits?",
    answer:
      "RecipeBuilder maintains structured records of your nutrition analysis, allergen matrices, and ingredient documentation that your Nutrition in Charge (NIC) needs for monthly NutriCheck self-audits. Export reports directly from the platform to submit to Dubai Municipality.",
  },
  {
    question:
      "Is RecipeBuilder suitable for caterers serving multiple schools?",
    answer:
      "Yes. RecipeBuilder supports multiple recipe sets and menus, making it suitable for catering companies managing food compliance across several school contracts simultaneously.",
  },
  {
    question:
      "Does RecipeBuilder support the bilingual labeling requirement?",
    answer:
      "Yes. All labels are generated in both English and Arabic, meeting Dubai Municipality's requirement for school canteen menus and packaged food items.",
  },
];

export default function SchoolCateringDubaiPage() {
  return (
    <>
      <Navbar light />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[90vh] flex items-center bg-dark overflow-hidden">
          {/* grid texture */}
          <div className="absolute inset-0 bg-grid-pattern" />
          {/* glow blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-dark/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-primary/15 text-primary border border-primary/25 mb-8">
              <Shield className="w-3.5 h-3.5" />
              Dubai Municipality Compliant
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
              The Compliance Platform for{" "}
              <span className="gradient-text">Dubai School Food Caterers</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
              RecipeBuilder helps school food suppliers meet Dubai
              Municipality&apos;s nutrition, allergen, and labeling
              requirements — from NutriCheck audits to Smart Food Choices
              classifications — all in one platform.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-dark bg-primary rounded-xl hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-xl shadow-primary/20 btn-glow"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_URL}
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/20 rounded-xl hover:bg-white/10 transition-all"
              >
                Contact Sales
              </a>
            </div>

            <p className="mt-6 text-sm text-white/35">
              Trusted by food businesses across UAE &middot; 5,000+ labels
              approved by Dubai Municipality
            </p>
          </div>
        </section>

        {/* ── Trust Pillars ────────────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-primary-light text-accent border border-primary/20 mb-4">
                Why RecipeBuilder
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Built for Dubai Municipality Compliance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="relative p-8 rounded-2xl border border-border bg-surface hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-5">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  NutriCheck-Ready Documentation
                </h3>
                <p className="text-text leading-relaxed">
                  Generate structured nutrition-per-serving reports, complete
                  allergen matrices, and ingredient documentation — exactly what
                  your Nutrition in Charge (NIC) needs for monthly Dubai
                  Municipality NutriCheck self-audits.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="relative p-8 rounded-2xl border border-border bg-surface hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-5">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Smart Food Choices Classification
                </h3>
                <p className="text-text leading-relaxed">
                  Automatically classify every menu item as Green, Yellow, Red,
                  or Black based on Dubai Municipality&apos;s Smart Food Choices
                  nutrient thresholds — and get instant guidance on which
                  changes move an item to a better category.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="relative p-8 rounded-2xl border border-border bg-surface hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-5">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Arabic + English Labels
                </h3>
                <p className="text-text leading-relaxed">
                  Produce fully bilingual nutrition labels in both English and
                  Arabic as required by Dubai Municipality for school menus and
                  canteen packaged items — ready for printing or digital display
                  in seconds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── How It Works ─────────────────────────────────────────────────── */}
        <section id="how-it-works" className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-primary-light text-accent border border-primary/20 mb-4">
                How It Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                From Recipe to School Compliance in 3 Steps
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* connector line — desktop only */}
              <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-border z-0" />

              {[
                {
                  step: "01",
                  icon: <ChefHat className="w-6 h-6 text-accent" />,
                  title: "Build Your Recipe Database",
                  body: "Add ingredients from 20,000+ USDA-verified items. Set portion sizes per meal and age group — Primary, Secondary, and Staff — so every nutritional calculation is accurate for the right population.",
                },
                {
                  step: "02",
                  icon: <BarChart3 className="w-6 h-6 text-accent" />,
                  title: "Analyze & Classify",
                  body: "Auto-calculate nutrition per serving. Classify each item under Dubai's Smart Food Choices system. Flag non-compliant items instantly and see exactly which nutrients to adjust for compliance.",
                },
                {
                  step: "03",
                  icon: <FileText className="w-6 h-6 text-accent" />,
                  title: "Generate Audit-Ready Labels & Reports",
                  body: "Export bilingual nutrition labels, allergen matrices, and monthly NutriCheck documentation in one click — formatted and ready to submit to Dubai Municipality.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="relative bg-white rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow z-10"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-4xl font-bold text-primary/20 leading-none select-none">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text leading-relaxed text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ─────────────────────────────────────────────────────── */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Everything a Dubai School Caterer Needs
              </h2>
              <p className="mt-4 text-text max-w-xl mx-auto">
                One platform to manage nutrition, allergens, labeling, and
                compliance documentation for every school contract.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <BarChart3 className="w-5 h-5 text-accent" />,
                  title: "Nutrition Analysis per Serving",
                  body: "Calculate calories, macros, sodium, and sugar per serving size per age group (Primary, Secondary, Staff) — the granular data Dubai Municipality requires.",
                },
                {
                  icon: <ClipboardList className="w-5 h-5 text-accent" />,
                  title: "14-Allergen Matrix Builder",
                  body: "Build and maintain your full allergen matrix across all menu items, updated in real time as recipes change — no manual spreadsheets.",
                },
                {
                  icon: <CheckCircle className="w-5 h-5 text-accent" />,
                  title: "Smart Food Choices Auto-Classification",
                  body: "Automatically classify menu items into Green / Yellow / Red / Black based on Dubai Municipality thresholds, with item-level improvement guidance.",
                },
                {
                  icon: <Tag className="w-5 h-5 text-accent" />,
                  title: "Bilingual Labels (EN + AR)",
                  body: "Generate English-Arabic nutrition labels meeting Dubai Municipality and UAE.S 192:2019 requirements for menus, packaging, and menu boards.",
                },
                {
                  icon: <FileText className="w-5 h-5 text-accent" />,
                  title: "NutriCheck Audit Support",
                  body: "Export structured nutrition reports and documentation your NIC needs for monthly self-audits — formatted for direct submission to Dubai Municipality.",
                },
                {
                  icon: <DollarSign className="w-5 h-5 text-accent" />,
                  title: "Recipe Cost Tracking",
                  body: "Monitor ingredient costs per portion to manage school meal pricing while staying compliant — balance nutrition requirements and budget in one view.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl border border-border bg-surface hover:shadow-md transition-shadow group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text leading-relaxed">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats Bar ────────────────────────────────────────────────────── */}
        <section className="py-16 bg-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
              {[
                {
                  stat: "5,000+",
                  label: "Labels approved by Dubai Municipality",
                },
                {
                  stat: "20,000+",
                  label: "USDA-verified ingredients in database",
                },
                {
                  stat: "400,000+",
                  label:
                    "Students served by Dubai school caterers facing these compliance requirements",
                },
              ].map((item) => (
                <div key={item.stat} className="flex flex-col items-center">
                  <span className="text-4xl sm:text-5xl font-bold text-primary">
                    {item.stat}
                  </span>
                  <span className="mt-2 text-sm text-white/55 max-w-[200px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Use Cases ────────────────────────────────────────────────────── */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Built for Every Type of School Food Business in Dubai
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building2 className="w-7 h-7 text-accent" />,
                  title: "School Catering Companies",
                  body: "Managing nutrition compliance and NutriCheck audits for multiple school contracts? RecipeBuilder keeps all your menus, allergen records, and compliance documentation organised across every site from a single account.",
                },
                {
                  icon: <Store className="w-7 h-7 text-accent" />,
                  title: "In-School Canteen Operators",
                  body: "Running an on-site canteen and need to maintain Smart Food Choices classification on your daily menu? RecipeBuilder flags non-compliant items in real time so your canteen stays within Dubai Municipality guidelines.",
                },
                {
                  icon: <Package className="w-7 h-7 text-accent" />,
                  title: "Bakeries & Food Suppliers",
                  body: "Supplying packaged or prepared items to school canteens? RecipeBuilder generates the bilingual, per-serving nutrition labels and allergen declarations required before your products can be sold in Dubai school canteens.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="text-text leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Common Questions from Dubai School Food Caterers
              </h2>
            </div>

            <div className="divide-y divide-border">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group py-6 cursor-pointer list-none"
                >
                  <summary className="flex items-start justify-between gap-4 text-foreground font-semibold text-base leading-snug marker:hidden [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    {/* chevron indicator */}
                    <svg
                      className="mt-0.5 w-5 h-5 flex-shrink-0 text-text-light transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="mt-4 text-text leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-dark px-8 py-16 sm:px-16 sm:py-24 text-center">
              <div className="absolute inset-0 bg-grid-pattern" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-dark/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/15 backdrop-blur-sm rounded-2xl border border-primary/25 mb-8">
                  <Leaf className="w-7 h-7 text-primary" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
                  Ready to Simplify Your Dubai School Food Compliance?
                </h2>

                <p className="mt-6 text-lg text-white/65 max-w-xl mx-auto">
                  Join food businesses across the UAE that use RecipeBuilder to
                  generate labels, manage allergens, and stay audit-ready with
                  Dubai Municipality.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-dark bg-primary rounded-xl hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-xl shadow-primary/20"
                  >
                    Book a Demo
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={CONTACT_URL}
                    className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/20 rounded-xl hover:bg-white/10 transition-all"
                  >
                    Contact Sales
                  </a>
                </div>

                <p className="mt-5 text-sm text-white/35">
                  Free demo. No commitment. Dedicated onboarding included.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      {/* BreadcrumbList JSON-LD */}
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
                name: "School Catering Dubai",
                item: "https://recipebuilder.bytebeam.co/school-catering-dubai",
              },
            ],
          }),
        }}
      />

      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "RecipeBuilder by ByteBeam",
            description:
              "School food catering compliance software for Dubai — nutrition labels, allergen matrices, Smart Food Choices classification, and NutriCheck audit documentation.",
            url: "https://recipebuilder.bytebeam.co/school-catering-dubai",
            email: "info@bytebeam.co",
            areaServed: {
              "@type": "City",
              name: "Dubai",
              containedInPlace: {
                "@type": "Country",
                name: "United Arab Emirates",
              },
            },
            knowsAbout: [
              "Dubai Municipality school food compliance",
              "NutriCheck self-audit documentation",
              "Smart Food Choices classification",
              "UAE.S 192:2019 nutrition labeling",
              "School canteen allergen management",
            ],
            sameAs: [
              "https://www.linkedin.com/company/byte-beam",
              "https://www.bytebeam.co",
            ],
          }),
        }}
      />
    </>
  );
}
