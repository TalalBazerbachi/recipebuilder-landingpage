import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Landmark,
  Globe,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Compliance Resources — GCC Food Labeling Regulations & Guides | RecipeBuilder",
  description:
    "Guides and resources to help food businesses navigate GCC food labeling regulations. Learn about SFDA requirements, Dubai Municipality labeling laws, allergen labeling, halal certification, and more.",
  keywords: [
    "GCC food compliance",
    "SFDA labeling requirements",
    "Dubai Municipality food labeling",
    "food labeling regulations UAE",
    "GCC food regulations guide",
    "halal labeling requirements",
    "allergen labeling GCC",
  ],
};

const resources = [
  {
    slug: "/blog/allergen-labeling-gcc-complete-guide",
    category: "Compliance",
    categoryColor: "bg-red-50 text-red-700",
    title: "Allergen Labeling in the GCC: Complete Guide",
    description:
      "A comprehensive guide to allergen declaration requirements across GCC countries. Learn which allergens must be declared, how to format allergen statements, and what regulators expect on your food labels.",
  },
  {
    slug: "/blog/halal-food-labeling-uae-requirements",
    category: "Regulation",
    categoryColor: "bg-amber-50 text-amber-700",
    title: "Halal Food Labeling in the UAE: Requirements",
    description:
      "Understand the halal labeling requirements for food products sold in the UAE. Covers certification bodies, label placement, and what food businesses need to know to meet halal standards.",
  },
  {
    slug: "/blog/food-labeling-dubai-uae-s-192-2019-guide",
    category: "Regulation",
    categoryColor: "bg-amber-50 text-amber-700",
    title: "Food Labeling in Dubai: UAE.S 192:2019 Guide",
    description:
      "A detailed breakdown of the UAE.S 192:2019 standard for pre-packaged food labeling. Covers mandatory label elements, nutrition facts formatting, and bilingual requirements enforced by Dubai Municipality.",
  },
  {
    slug: "/blog/food-safety-sops-institutional-catering",
    category: "Industry",
    categoryColor: "bg-blue-50 text-blue-700",
    title: "Food Safety SOPs for Institutional Catering",
    description:
      "Essential standard operating procedures for institutional catering operations. Covers food handling, storage, temperature control, and documentation requirements for large-scale food service.",
  },
  {
    slug: "/blog/abu-dhabi-school-nutrition-guidelines-food-businesses",
    category: "Compliance",
    categoryColor: "bg-red-50 text-red-700",
    title: "Abu Dhabi School Nutrition Guidelines for Food Businesses",
    description:
      "An overview of ADAFSA nutrition guidelines for food businesses supplying schools in Abu Dhabi. Covers restricted ingredients, nutritional requirements, and how to prepare labels for the school supply chain.",
  },
  {
    slug: "/blog/gcc-sugar-tax-food-beverage-manufacturers-guide",
    category: "Regulation",
    categoryColor: "bg-amber-50 text-amber-700",
    title: "GCC Sugar Tax: A Guide for Food & Beverage Manufacturers",
    description:
      "How the GCC excise tax on sugary drinks and energy beverages affects food manufacturers. Covers tax rates, product classifications, labeling implications, and what manufacturers need to do.",
  },
  {
    slug: "/blog/front-of-pack-nutrition-labels-gcc-guide",
    category: "Labeling",
    categoryColor: "bg-green-50 text-green-700",
    title: "Front-of-Pack Nutrition Labels in the GCC",
    description:
      "A guide to front-of-pack nutrition labeling requirements and best practices in the GCC. Covers traffic light labels, health logos, and how these systems are being adopted across the region.",
  },
];

const regulatoryBodies = [
  {
    icon: Landmark,
    name: "SFDA",
    fullName: "Saudi Food and Drug Authority",
    region: "Saudi Arabia",
    description:
      "The primary regulatory body overseeing food safety and labeling in Saudi Arabia. SFDA sets requirements for nutrition facts panels, ingredient lists, allergen declarations, and Arabic language labeling on all food products sold in the Kingdom.",
  },
  {
    icon: Building2,
    name: "Dubai Municipality / MoIAT",
    fullName:
      "Dubai Municipality & Ministry of Industry and Advanced Technology",
    region: "UAE",
    description:
      "Dubai Municipality enforces food labeling standards within Dubai, while MoIAT oversees the UAE.S 192:2019 national standard for pre-packaged food labeling. Together, they regulate nutrition facts formatting, bilingual labeling, and product registration.",
  },
  {
    icon: Globe,
    name: "GSO",
    fullName: "GCC Standardization Organization",
    region: "Gulf-wide",
    description:
      "GSO develops unified standards adopted across all GCC member states, including standards for food labeling, nutrition information, and pre-packaged food requirements. GSO standards serve as the baseline that individual countries build upon.",
  },
  {
    icon: ShieldCheck,
    name: "ADAFSA",
    fullName: "Abu Dhabi Agriculture and Food Safety Authority",
    region: "Abu Dhabi, UAE",
    description:
      "ADAFSA regulates food safety and labeling within the Emirate of Abu Dhabi. The authority sets specific guidelines for school food suppliers, nutrition standards, and food establishment licensing in the emirate.",
  },
];

export default function ComplianceResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/60 to-white pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary-light rounded-full">
              <BookOpen className="w-4 h-4" />
              COMPLIANCE RESOURCES
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight max-w-4xl mx-auto">
              Compliance <span className="text-primary">Resources</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text max-w-2xl mx-auto leading-relaxed">
              Guides and resources to help food businesses navigate GCC food
              labeling regulations, understand requirements, and stay on top of
              compliance.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-surface border border-border rounded-2xl p-8 sm:p-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Why Compliance Matters
              </h2>
              <div className="space-y-4 text-text leading-relaxed">
                <p>
                  Food labeling in the GCC is not optional — it is a legal
                  requirement enforced by regulatory bodies across every member
                  state. From the Saudi Food and Drug Authority (SFDA) to Dubai
                  Municipality and the GCC Standardization Organization (GSO),
                  each body sets specific requirements for how food products must
                  be labeled before they reach consumers.
                </p>
                <p>
                  Non-compliance can result in product recalls, fines, import
                  rejections, and damage to your brand reputation. For food
                  businesses operating in the UAE, Saudi Arabia, or anywhere in
                  the GCC, understanding these regulations is essential to
                  operating legally and building consumer trust.
                </p>
                <p>
                  We have put together these resources to help food businesses
                  understand the key labeling requirements, stay current with
                  regulatory changes, and implement best practices across their
                  operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Grid */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Guides
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Regulatory Guides & Resources
              </h2>
              <p className="mt-4 text-lg text-text">
                In-depth articles covering the key food labeling regulations,
                standards, and best practices for the GCC market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource) => (
                <Link
                  key={resource.slug}
                  href={resource.slug}
                  className="group"
                >
                  <article className="h-full bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all flex flex-col">
                    <div className="mb-4">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${resource.categoryColor}`}
                      >
                        {resource.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-text leading-relaxed flex-1">
                      {resource.description}
                    </p>
                    <div className="mt-5 pt-4 border-t border-border">
                      <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium">
                        Read Guide
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Key GCC Regulatory Bodies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Regulatory Bodies
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Key GCC Regulatory Bodies
              </h2>
              <p className="mt-4 text-lg text-text">
                Understanding who regulates food labeling in the GCC is the
                first step toward compliance. Here are the key authorities food
                businesses need to know.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regulatoryBodies.map((body) => (
                <div
                  key={body.name}
                  className="bg-surface p-8 rounded-2xl border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <body.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-semibold text-foreground">
                          {body.name}
                        </h3>
                        <span className="text-xs font-medium text-primary bg-primary-light px-2.5 py-1 rounded-full">
                          {body.region}
                        </span>
                      </div>
                      <p className="text-sm text-text-light mt-1">
                        {body.fullName}
                      </p>
                      <p className="text-text leading-relaxed mt-3">
                        {body.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-8 py-16 sm:px-16 sm:py-20 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
                  Need Help With Food Labeling Compliance?
                </h2>
                <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                  RecipeBuilder generates food labels that follow GCC and SFDA
                  labeling laws — with bilingual formatting, nutrition facts,
                  allergen declarations, and barcodes built in. See it in
                  action.
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
                    href="mailto:info@bytebeam.co?subject=Compliance Question"
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
