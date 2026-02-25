import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  FileText,
  ChefHat,
  Calculator,
  DollarSign,
  Package,
  UtensilsCrossed,
  Factory,
  CakeSlice,
  Salad,
  Globe,
  Languages,
  ShieldCheck,
  TrendingUp,
  Building2,
  Mail,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About RecipeBuilder — Recipe Management & Food Labeling by ByteBeam",
  description:
    "RecipeBuilder is built by ByteBeam, a Dubai-based technology company. We help food businesses across the GCC manage recipes, generate nutrition labels, and follow local food labeling regulations.",
  keywords: [
    "about RecipeBuilder",
    "ByteBeam",
    "food labeling company Dubai",
    "recipe management UAE",
    "food technology GCC",
    "food labeling platform",
  ],
};

const products = [
  {
    icon: FileText,
    title: "Food Labeling",
    description:
      "Auto-generate professional packaging artwork with nutrition facts, bilingual ingredient lists, allergen declarations, barcodes, and QR codes — all following GCC and SFDA labeling laws.",
  },
  {
    icon: ChefHat,
    title: "Recipe Management",
    description:
      "Build and organize recipes with complete ingredient breakdowns, portion sizing, preparation instructions, and allergen tracking in one centralized platform.",
  },
  {
    icon: Calculator,
    title: "Nutrition Analysis",
    description:
      "Calculate accurate nutrition data from 20,000+ FDA-sourced ingredients. Get per-serving breakdowns for calories, macronutrients, vitamins, and minerals automatically.",
  },
  {
    icon: DollarSign,
    title: "Cost Tracking",
    description:
      "Track ingredient costs, calculate cost per serving, analyze profit margins, and make informed pricing decisions with real-time recipe cost data.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Monitor stock levels in real time, track portion counts, manage production schedules, and keep your kitchen running efficiently with automated inventory updates.",
  },
];

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Cafes",
    description:
      "Manage full menus with accurate nutrition data, generate labels for packaged items, and track recipe costs across every location.",
  },
  {
    icon: Factory,
    title: "Food Manufacturers",
    description:
      "Scale your labeling workflow for production with retail-ready barcodes, batch packaging artwork, and consistent product labeling.",
  },
  {
    icon: CakeSlice,
    title: "Bakeries & Catering",
    description:
      "Create professional labels for artisan products, track ingredient costs per portion, and manage allergen declarations across your catalog.",
  },
  {
    icon: Salad,
    title: "Nutrition Centers",
    description:
      "Build meal plans with precise nutrition data, generate client-facing nutrition labels, and track macros per serving for dietary programs.",
  },
];

const gccReasons = [
  {
    icon: ShieldCheck,
    title: "Strict Regulatory Requirements",
    description:
      "The GCC region enforces detailed food labeling laws through bodies like SFDA, Dubai Municipality, and GSO. Every packaged food product must display accurate nutrition information, ingredient lists, and allergen declarations in the correct format.",
  },
  {
    icon: Languages,
    title: "Bilingual Labeling Needs",
    description:
      "With a diverse, multilingual population, the GCC requires bilingual food labels in both English and Arabic. RecipeBuilder generates both languages automatically, formatted correctly for packaging artwork.",
  },
  {
    icon: TrendingUp,
    title: "Fast-Growing Food Industry",
    description:
      "The GCC food and beverage industry is expanding rapidly, with new restaurants, manufacturers, and food brands launching every week. These businesses need efficient tools to meet labeling requirements from day one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar light />
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/60 to-white pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary-light rounded-full">
              <Building2 className="w-4 h-4" />
              ABOUT US
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight max-w-4xl mx-auto">
              About <span className="text-primary">RecipeBuilder</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text max-w-2xl mx-auto leading-relaxed">
              We help food businesses across the GCC manage recipes, generate
              accurate nutrition labels, and navigate local food labeling
              regulations — all from one platform.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                From Document Processing to Food Technology
              </h2>
              <div className="mt-6 space-y-5 text-text leading-relaxed text-lg">
                <p>
                  RecipeBuilder is built by{" "}
                  <a
                    href="https://www.bytebeam.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    ByteBeam
                  </a>
                  , a technology company based in Dubai, UAE. ByteBeam started as
                  an AI-powered document processing company, building solutions
                  that extract, structure, and analyze data from complex
                  documents.
                </p>
                <p>
                  While working with businesses across the region, we saw a
                  clear gap in the food industry: food businesses in the GCC
                  were struggling to generate accurate, regulation-ready food
                  labels. The process was manual, error-prone, and time-consuming
                  — often requiring nutritionists, designers, and regulatory
                  consultants just to produce a single label.
                </p>
                <p>
                  We built RecipeBuilder to solve that problem. By combining our
                  expertise in AI and document processing with deep knowledge of
                  GCC food labeling requirements, we created a platform that
                  helps food businesses generate professional labels that follow
                  local regulations — in minutes, not weeks.
                </p>
                <p>
                  Today, our team has generated over 5,000 food labels approved
                  by Dubai Municipality, and we serve food businesses across the
                  UAE, Saudi Arabia, and the broader GCC region.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-8 py-16 sm:px-16 sm:py-20 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                  Our Mission
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white max-w-3xl mx-auto">
                  Make Food Labeling Accessible, Accurate, and Fast for Every
                  Food Business in the GCC
                </h2>
                <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                  We believe every food business — whether a single-location
                  bakery or a large-scale manufacturer — should be able to
                  produce professional, regulation-ready food labels without
                  needing a team of consultants. RecipeBuilder makes that
                  possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                What We Do
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                One Platform for Recipe Management & Food Labeling
              </h2>
              <p className="mt-4 text-lg text-text">
                RecipeBuilder brings together everything a food business needs to
                manage recipes, analyze nutrition, generate labels, track costs,
                and run inventory.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.title}
                  className="bg-surface p-8 rounded-2xl border border-border hover:bg-white hover:shadow-lg hover:border-primary/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                    <product.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {product.title}
                  </h3>
                  <p className="text-text leading-relaxed">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Who We Serve
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Built for Every Food Business
              </h2>
              <p className="mt-4 text-lg text-text">
                From restaurants and food manufacturers to bakeries and nutrition
                centers — RecipeBuilder adapts to your workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry) => (
                <div
                  key={industry.title}
                  className="p-8 rounded-2xl border border-border bg-white hover:shadow-lg hover:border-primary/20 transition-all group"
                >
                  <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                    <industry.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-text leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why the GCC */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Why the GCC
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Purpose-Built for the GCC Food Industry
              </h2>
              <p className="mt-4 text-lg text-text">
                The GCC region has unique food labeling requirements that
                generic tools cannot address. RecipeBuilder was built
                specifically for this market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {gccReasons.map((reason) => (
                <div
                  key={reason.title}
                  className="bg-surface p-8 rounded-2xl border border-border"
                >
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-5">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-text leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Team Behind RecipeBuilder */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                The Team
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                The Team Behind RecipeBuilder
              </h2>
              <div className="mt-6 space-y-5 text-text leading-relaxed text-lg text-left">
                <p>
                  RecipeBuilder is built and maintained by{" "}
                  <a
                    href="https://www.bytebeam.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    ByteBeam
                  </a>
                  , a technology company headquartered in Dubai, UAE. Our team
                  combines expertise in artificial intelligence, document
                  processing, and food technology to build solutions specifically
                  for the food industry.
                </p>
                <p>
                  We work closely with food businesses, regulatory consultants,
                  and nutritionists across the GCC to ensure that RecipeBuilder
                  stays aligned with the latest labeling requirements and
                  industry needs. Every feature we build is informed by real
                  feedback from the businesses we serve.
                </p>
                <p>
                  Our goal is straightforward: give food businesses the tools
                  they need to manage recipes, generate labels, and stay on top
                  of their operations — without the complexity and cost of
                  traditional solutions.
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://www.bytebeam.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-primary border border-primary rounded-lg hover:bg-primary-light transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Visit ByteBeam
                </a>
                <a
                  href="https://www.linkedin.com/company/bytebeam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-foreground border border-border rounded-lg hover:bg-surface transition-colors"
                >
                  Follow Us on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Contact
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-text">
                Have questions about RecipeBuilder or want to see how it works
                for your business? We would love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-8 bg-surface rounded-2xl border border-border">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Email
                </h3>
                <a
                  href="mailto:info@bytebeam.co"
                  className="text-primary hover:underline"
                >
                  info@bytebeam.co
                </a>
              </div>

              <div className="text-center p-8 bg-surface rounded-2xl border border-border">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Dubai, UAE
                </h3>
                <p className="text-text text-sm">Headquarters</p>
              </div>

              <div className="text-center p-8 bg-surface rounded-2xl border border-border">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Riyadh, Saudi Arabia
                </h3>
                <p className="text-text text-sm">Regional Office</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-8 py-16 sm:px-16 sm:py-20 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
                  Ready to See RecipeBuilder in Action?
                </h2>
                <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                  Book a personalized demo and see how RecipeBuilder can help
                  your food business manage recipes, generate labels, and
                  streamline operations.
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
    </>
  );
}
