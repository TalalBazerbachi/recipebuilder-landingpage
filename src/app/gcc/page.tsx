import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import TrustPillars from "@/components/TrustPillars";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ProductDemo from "@/components/ProductDemo";
import Industries from "@/components/Industries";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { gccContent } from "@/data/gcc-content";

export const metadata: Metadata = {
  title:
    "RecipeBuilder — Recipe Management & Food Labeling for GCC Food Businesses",
  description:
    "Build recipes, auto-generate nutrition labels with barcodes & QR codes, track costs and inventory. Generate bilingual food labels following GCC & SFDA labeling laws. 20,000+ FDA-sourced ingredients. 5,000+ labels approved by Dubai Municipality.",
  keywords: [
    "recipe management software",
    "food labeling software GCC",
    "nutrition label generator",
    "GCC food compliance",
    "SFDA food labeling",
    "food label maker",
    "Arabic food labels",
    "bilingual food labels",
    "halal food labeling",
    "Saudi FDA compliance",
    "UAE food regulations",
    "Dubai Municipality food labels",
    "GCC food labeling laws",
    "recipe cost analysis",
    "food barcode generator",
    "nutrition facts generator",
    "USDA database",
    "food business software UAE",
    "food manufacturer software Saudi",
    "bakery labeling software GCC",
  ],
  openGraph: {
    title:
      "RecipeBuilder — Recipe Management & Food Labeling for GCC Food Businesses",
    description:
      "Build recipes, auto-generate nutrition labels with barcodes & QR codes, track costs and inventory. Bilingual English & Arabic labels following GCC & SFDA labeling laws.",
    url: "https://recipebuilder.bytebeam.co/gcc",
    siteName: "RecipeBuilder",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://recipebuilder.bytebeam.co/gcc",
  },
};

export default function GCCPage() {
  return (
    <>
      <Navbar variant="gcc" light />
      <main>
        <Hero content={gccContent.hero} />
        <LogoBar />
        <TrustPillars content={gccContent.trustPillars} />
        <HowItWorks content={gccContent.howItWorks} />
        <Features content={gccContent.features} />
        <ProductDemo content={gccContent.productDemo} />
        <Industries />
        <Comparison content={gccContent.comparison} />
        <Pricing content={gccContent.pricing} />
        <Testimonials content={gccContent.testimonials} />
        <FAQ content={gccContent.faq} />
        <CTA />
      </main>
      <Footer content={gccContent.footer} />
    </>
  );
}
