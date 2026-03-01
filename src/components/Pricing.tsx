"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, ArrowRight, BookOpen, Headset } from "lucide-react";
import type { PricingContent } from "@/data/landing-content";

export default function Pricing({ content }: { content: PricingContent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-24 bg-surface overflow-hidden" ref={ref}>
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-text">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <span className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-text-light"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 rounded-full bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Toggle annual billing"
          >
            <div
              className={`absolute top-0.5 w-6 h-6 rounded-full bg-primary shadow transition-transform ${
                isAnnual ? "translate-x-7" : "translate-x-0.5"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-text-light"}`}>
            Annual
          </span>
          {isAnnual && (
            <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full">
              Save up to 40%
            </span>
          )}
        </motion.div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {content.tiers.map((tier, i) => {
            const isCustom = tier.monthlyPrice === null;
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className={`relative flex flex-col p-8 rounded-2xl border bg-white ${
                  tier.highlighted
                    ? "border-2 border-primary/40 shadow-xl shadow-primary/10 md:scale-105"
                    : "border-border"
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 text-xs font-bold text-white bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/25">
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Name */}
                <h3 className={`text-xl font-bold text-foreground ${tier.badge ? "mt-2" : ""}`}>
                  {tier.name}
                </h3>

                {/* Recipe count & support */}
                <div className="flex items-center gap-2 mt-3 text-sm text-text">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="font-medium">{tier.recipes}</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-text">
                  <Headset className="w-4 h-4 text-primary" />
                  <span className="font-medium">{tier.support}</span>
                </div>

                {/* Price */}
                <div className="mt-6 mb-6">
                  {isCustom ? (
                    <div className="text-3xl sm:text-4xl font-bold text-foreground">
                      Custom
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-bold text-foreground">
                          ${price}
                        </span>
                        <span className="text-sm text-text-light">/mo</span>
                      </div>
                      {isAnnual && tier.annualPrice !== null && (
                        <div className="mt-1 text-sm text-text-light">
                          Billed annually (${tier.annualPrice * 12}/yr)
                        </div>
                      )}
                      {!isAnnual && tier.annualPrice !== null && tier.monthlyPrice !== null && tier.annualPrice < tier.monthlyPrice && (
                        <div className="mt-1 text-sm text-emerald-600">
                          Save ${(tier.monthlyPrice - tier.annualPrice) * 12}/yr with annual
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {content.allFeatures.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3 text-sm text-foreground">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-500" />
                      </div>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={tier.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold rounded-xl transition-all hover:-translate-y-0.5 ${
                    tier.highlighted
                      ? "text-white bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg hover:shadow-primary/25"
                      : "text-primary border-2 border-primary/30 hover:border-primary hover:bg-primary/5"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm text-text-light mt-8"
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
