import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustPillars from "@/components/TrustPillars";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ProductDemo from "@/components/ProductDemo";
import Industries from "@/components/Industries";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { globalContent } from "@/data/global-content";

export default function Home() {
  return (
    <>
      <Navbar variant="global" />
      <main>
        <Hero content={globalContent.hero} />
        <TrustPillars content={globalContent.trustPillars} />
        <Features content={globalContent.features} />
        <HowItWorks content={globalContent.howItWorks} />
        <ProductDemo content={globalContent.productDemo} />
        <Industries />
        <Comparison content={globalContent.comparison} />
        <FAQ content={globalContent.faq} />
        <CTA />
      </main>
      <Footer content={globalContent.footer} />
    </>
  );
}
