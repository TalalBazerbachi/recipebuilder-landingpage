import type { Metadata } from "next";
import Link from "next/link";
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
    "Bilingual English-Arabic nutrition labels for GCC food businesses. SFDA, GSO, and Dubai Municipality compliant. 5,000+ labels approved. From $29/mo (annual).",
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
    url: "https://www.recipebuilder.co/gcc",
    siteName: "RecipeBuilder",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://www.recipebuilder.co/gcc",
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

        {/* Cross-link to school catering specialisation */}
        <div className="bg-surface border-t border-border py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text">
              <strong className="text-foreground">Operating a school catering business in Dubai?</strong>{" "}
              We have a dedicated compliance guide for Dubai Municipality school food requirements.
            </p>
            <Link
              href="/school-catering-dubai"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-primary-dark bg-primary-light rounded-lg hover:bg-primary/20 transition-colors"
            >
              School Catering Guide →
            </Link>
          </div>
        </div>
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
                item: "https://www.recipebuilder.co",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "GCC",
                item: "https://www.recipebuilder.co/gcc",
              },
            ],
          }),
        }}
      />

      {/* Service schema with areaServed — geo-targeted intent signal */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Food Labeling & Recipe Management Software",
            provider: {
              "@type": "Organization",
              name: "ByteBeam",
              url: "https://www.bytebeam.co",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
            },
            description:
              "Bilingual English-Arabic food labeling and recipe management software for GCC food businesses. Compliant with UAE.S 9:2017, UAE.S 192:2019, SFDA Technical Regulation, GSO standards, and Dubai Municipality Montaji requirements.",
            areaServed: [
              { "@type": "Country", name: "United Arab Emirates" },
              { "@type": "Country", name: "Saudi Arabia" },
              { "@type": "Country", name: "Kuwait" },
              { "@type": "Country", name: "Qatar" },
              { "@type": "Country", name: "Bahrain" },
              { "@type": "Country", name: "Oman" },
            ],
            audience: {
              "@type": "BusinessAudience",
              audienceType:
                "Food manufacturers, school caterers, restaurants, bakeries, and food packaging companies in the GCC",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: "29",
              highPrice: "99",
              offerCount: "3",
              availability: "https://schema.org/InStock",
            },
            hasCredential: [
              "5,000+ labels approved by Dubai Municipality",
              "UAE.S 9:2017 compliant",
              "UAE.S 192:2019 compliant",
              "SFDA Technical Regulation compliant",
              "GSO standards aligned",
            ],
          }),
        }}
      />
    </>
  );
}
