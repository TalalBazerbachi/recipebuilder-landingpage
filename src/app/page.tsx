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
    </>
  );
}
