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
import { globalContent } from "@/data/global-content";

export const metadata: Metadata = {
  title: "RecipeBuilder — Recipe Management & Food Labeling for Food Businesses",
  description:
    "RecipeBuilder is a recipe management and food labeling platform by ByteBeam (Dubai). It auto-generates nutrition labels, barcodes, and QR codes from recipes using 20,000+ USDA-verified ingredients. Supports FDA, EU, and GCC/SFDA labeling standards in 40+ languages. Used by food manufacturers, restaurants, and catering businesses worldwide. Pricing starts at $49/month.",
  alternates: {
    canonical: "https://recipebuilder.bytebeam.co",
  },
};

export default function Home() {
  return (
    <>
      <Navbar variant="global" light />
      <main>
        <Hero content={globalContent.hero} />
        <TrustPillars content={globalContent.trustPillars} />
        <HowItWorks content={globalContent.howItWorks} />
        <Features content={globalContent.features} />
        <ProductDemo content={globalContent.productDemo} />
        <Industries />
        <Comparison content={globalContent.comparison} />
        <Pricing content={globalContent.pricing} />
        <Testimonials content={globalContent.testimonials} />
        <FAQ content={globalContent.faq} />
        <CTA />
      </main>
      <Footer content={globalContent.footer} />

      {/* FAQPage structured data for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: globalContent.faq.faqs.map((faq) => ({
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

      {/* BreadcrumbList for homepage */}
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
            ],
          }),
        }}
      />
    </>
  );
}
