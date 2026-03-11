import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustPillars from "@/components/TrustPillars";
import {
  ArrowRight,
  FileText,
  Languages,
  Barcode,
  QrCode,
  Download,
  ShieldCheck,
  AlertTriangle,
  Palette,
  Tag,
  CheckCircle,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Food Labeling Software — Auto-Generate Bilingual Food Labels | RecipeBuilder",
  description:
    "RecipeBuilder's food labeling module auto-generates bilingual nutrition labels with facts panels, barcodes, QR codes, and allergen declarations from your recipes. Labels follow FDA, EU, GCC, and SFDA labeling standards. Over 5,000 labels approved by Dubai Municipality. Supports 40+ languages including Arabic. Built by ByteBeam (Dubai).",
  keywords: [
    "food labeling software",
    "food label generator",
    "nutrition label maker",
    "Arabic food labels",
    "GCC food labeling",
    "bilingual food labels",
    "packaging artwork generator",
    "food label Dubai",
    "SFDA food labeling",
    "food packaging software",
    "nutrition facts panel generator",
    "food label barcode",
  ],
};

const features = [
  {
    icon: Palette,
    title: "Professional Packaging Artwork",
    description:
      "Auto-generate print-ready packaging artwork directly from your recipes. Every label is formatted with proper typography, structured ingredient lists, and clear nutrition panels that meet professional packaging standards.",
  },
  {
    icon: Languages,
    title: "Bilingual English & Arabic Labels",
    description:
      "Generate ingredient lists and label content in both English and Arabic with a single click. RecipeBuilder handles the translation and layout so your labels serve both Arabic-speaking and English-speaking markets.",
  },
  {
    icon: FileText,
    title: "Nutrition Facts Panels",
    description:
      "Automatically produce FDA-style nutrition facts tables alongside traffic light labels. Per-serving and per-100g breakdowns are calculated from your recipe data, covering calories, protein, carbohydrates, fat, sugars, and salt.",
  },
  {
    icon: Barcode,
    title: "Barcodes for Product Identification",
    description:
      "Every product label includes an auto-generated barcode for retail tracking, warehouse scanning, and point-of-sale integration. Barcodes are print-ready and embedded directly into your label artwork.",
  },
  {
    icon: QrCode,
    title: "QR Codes Linking to Live Nutrition Info",
    description:
      "Each label includes a scannable QR code that links to a live nutrition information page. Your customers can scan the packaging to view detailed nutrition facts, allergen info, and ingredients on their phone.",
  },
  {
    icon: Download,
    title: "Download as PNG or PDF",
    description:
      "Export your finished labels in high-resolution PNG for digital use or print-ready PDF for professional packaging. Labels are formatted to standard packaging dimensions and ready for your printer.",
  },
];

const compliancePoints = [
  "Ingredient lists ordered by weight as required by GCC regulations",
  "Bilingual content in English and Arabic on every label",
  "Allergen declarations highlighted following SFDA requirements",
  "Nutrition facts formatted to accepted panel layouts",
  "Storage instructions and shelf-life information included",
  "Net weight and serving size clearly displayed",
  "Manufacturer and origin country details on every label",
  "Traffic light nutrition indicators for consumer clarity",
];

export default function FoodLabelingPage() {
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
                <Tag className="w-4 h-4" />
                FOOD LABELING SOFTWARE
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Auto-Generate{" "}
                <span className="text-primary">Professional Food Labels</span>{" "}
                From Your Recipes
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-text max-w-2xl mx-auto leading-relaxed">
                Create bilingual packaging artwork with nutrition facts panels,
                barcodes, QR codes, allergen disclaimers, and storage
                instructions — all generated automatically from your recipes
                and following GCC & SFDA labeling laws.
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
                <ShieldCheck className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">
                  5,000+
                </span>
                <span className="text-sm text-text text-center">
                  Labels Approved by Dubai Municipality
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl border border-border shadow-sm">
                <Globe className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">
                  GCC & SFDA
                </span>
                <span className="text-sm text-text text-center">
                  Follows Labeling Laws
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl border border-border shadow-sm">
                <Languages className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">
                  Bilingual
                </span>
                <span className="text-sm text-text text-center">
                  English & Arabic Labels
                </span>
              </div>
            </div>

            {/* Hero Screenshot */}
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-border shadow-xl overflow-hidden bg-white">
                <Image
                  src="/screenshots/packaging-artwork.png"
                  alt="RecipeBuilder auto-generated bilingual food label showing English and Arabic ingredient lists, nutrition facts panel, barcode, and QR code"
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
                Label Features
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Everything Your Food Label Needs — Generated Automatically
              </h2>
              <p className="mt-4 text-lg text-text">
                RecipeBuilder transforms your recipe data into fully formatted
                food labels. No design software required, no manual data entry,
                and no guesswork on regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
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

        {/* How Label Generation Works */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                How It Works
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                From Recipe to Printed Label in Minutes
              </h2>
              <p className="mt-4 text-lg text-text">
                RecipeBuilder automates the entire label creation workflow.
                Enter your recipe once, and your label is generated with all
                the required information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Build Your Recipe",
                  description:
                    "Add ingredients from the 20,000+ FDA-sourced database, set quantities, and define serving sizes.",
                },
                {
                  step: "02",
                  title: "Nutrition Calculated",
                  description:
                    "RecipeBuilder automatically calculates the full nutrition breakdown based on your ingredients and quantities.",
                },
                {
                  step: "03",
                  title: "Label Generated",
                  description:
                    "A complete label is generated with nutrition facts, bilingual ingredients, barcodes, QR codes, and allergen info.",
                },
                {
                  step: "04",
                  title: "Download & Print",
                  description:
                    "Export your label as a high-resolution PNG or print-ready PDF. Ready for packaging immediately.",
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

        {/* Compliance Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Regulatory Alignment
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                  Labels Following GCC & SFDA Labeling Laws
                </h2>
                <p className="mt-4 text-lg text-text leading-relaxed">
                  Food labeling in the GCC region requires specific formatting,
                  bilingual content, allergen declarations, and nutrition
                  information. RecipeBuilder generates labels that follow these
                  requirements so you can submit to municipal authorities with
                  confidence.
                </p>
                <p className="mt-4 text-text leading-relaxed">
                  Over 5,000 food labels created with RecipeBuilder have been
                  approved by Dubai Municipality. The platform stays updated
                  with current GCC and SFDA labeling requirements to ensure
                  your labels include all necessary information.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-border p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  What Every Label Includes
                </h3>
                <ul className="space-y-4">
                  {compliancePoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-text leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Allergen & Safety Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-white rounded-2xl border border-border p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Allergen Identification
                      </h3>
                      <p className="text-text text-sm leading-relaxed">
                        RecipeBuilder scans your recipe ingredients and
                        automatically identifies major allergens including
                        gluten, dairy, nuts, soy, eggs, fish, shellfish, and
                        sesame. These are highlighted on the label following
                        GCC requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Storage Instructions
                      </h3>
                      <p className="text-text text-sm leading-relaxed">
                        Include storage temperature, shelf-life, and handling
                        instructions on every label. Define custom storage
                        conditions per recipe and they appear automatically on
                        the generated label.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Complete Ingredient Declarations
                      </h3>
                      <p className="text-text text-sm leading-relaxed">
                        Ingredients are listed in descending order by weight as
                        required by food labeling regulations. Sub-recipe
                        ingredients are expanded and listed correctly within the
                        declaration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Safety & Transparency
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                  Allergen Warnings, Storage Info & Full Ingredient Declarations
                </h2>
                <p className="mt-4 text-lg text-text leading-relaxed">
                  Consumers and regulators expect clear allergen information,
                  proper storage guidance, and complete ingredient transparency
                  on every food label. RecipeBuilder handles all of this
                  automatically based on your recipe data.
                </p>
                <p className="mt-4 text-text leading-relaxed">
                  No more manually checking ingredient lists for allergens or
                  formatting storage instructions. Enter your recipe once and
                  the system generates all required safety and transparency
                  information for your label.
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
                Who Uses RecipeBuilder for Food Labeling?
              </h2>
              <p className="mt-4 text-lg text-text">
                Any food business that needs professional packaging labels with
                accurate nutrition information and bilingual content.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Food Manufacturers",
                  description:
                    "Create labels for packaged food products sold in GCC retail markets. Barcodes included for retail tracking.",
                },
                {
                  title: "Restaurants & Cafes",
                  description:
                    "Label grab-and-go items, meal prep products, and packaged retail items with proper nutrition information.",
                },
                {
                  title: "Bakeries & Catering",
                  description:
                    "Generate labels for baked goods, desserts, and catering products with allergen declarations and ingredient lists.",
                },
                {
                  title: "Cloud Kitchens",
                  description:
                    "Produce labels for delivery-ready meals and meal kits with QR codes linking to live nutrition info.",
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
                  <Tag className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
                  Ready to Auto-Generate Professional Food Labels?
                </h2>

                <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                  See how RecipeBuilder creates bilingual food labels with
                  nutrition facts, barcodes, and QR codes — all following
                  GCC & SFDA labeling laws.
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
                    href="mailto:info@bytebeam.co?subject=Food Labeling Inquiry"
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

      {/* SoftwareApplication structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "RecipeBuilder Food Labeling",
            url: "https://recipebuilder.bytebeam.co/food-labeling",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description: "Auto-generate professional bilingual food labels with nutrition facts panels, barcodes, QR codes, and allergen disclaimers. Labels follow GCC & SFDA labeling laws.",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: "49",
              highPrice: "99",
              offerCount: "3",
              category: "SaaS",
              availability: "https://schema.org/InStock",
            },
            provider: {
              "@type": "Organization",
              name: "ByteBeam",
              url: "https://www.bytebeam.co",
            },
            featureList: [
              "Bilingual food labels (English & Arabic)",
              "Nutrition facts panel generation",
              "Barcode generation",
              "QR code for nutrition info",
              "Allergen declarations",
              "GCC & SFDA compliant labels",
              "Packaging artwork auto-generation",
              "40+ language support",
            ],
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://recipebuilder.bytebeam.co" },
              { "@type": "ListItem", position: 2, name: "Food Labeling", item: "https://recipebuilder.bytebeam.co/food-labeling" },
            ],
          }),
        }}
      />
    </>
  );
}
