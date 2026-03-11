import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

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
    "RecipeBuilder is a food labeling and recipe management platform built for GCC food businesses by ByteBeam (Dubai). It generates bilingual English-Arabic nutrition labels, barcodes, and QR codes following GCC and SFDA labeling laws. 20,000+ USDA-verified ingredients. Over 5,000 labels approved by Dubai Municipality. Used by food manufacturers, restaurants, and catering businesses across UAE, Saudi Arabia, and the Gulf region.",
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
      "RecipeBuilder by ByteBeam generates bilingual English-Arabic nutrition labels following GCC and SFDA labeling laws. 20,000+ USDA ingredients. 5,000+ labels approved by Dubai Municipality.",
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

      {/* FAQPage structured data for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: gccContent.faq.faqs.map((faq) => ({
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

      {/* BreadcrumbList */}
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
                name: "GCC",
                item: "https://recipebuilder.bytebeam.co/gcc",
              },
            ],
          }),
        }}
      />
    </>
  );
}
