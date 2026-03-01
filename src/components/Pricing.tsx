"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, ArrowRight, ShieldCheck } from "lucide-react";
import type { PricingContent } from "@/data/landing-content";

export default function Pricing({ content }: { content: PricingContent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative py-24 bg-surface overflow-hidden" ref={ref}>
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Transparent Pricing,{" "}
            <span className="gradient-text">No Surprises</span>
          </h2>
          <p className="mt-4 text-lg text-text">
            See how RecipeBuilder compares to the cost of traditional lab testing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Anchor: Lab Testing (faded/pain) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative p-8 rounded-2xl border border-border bg-white"
          >
            <div className="text-sm font-medium text-text-light mb-4">
              {content.anchorLabel}
            </div>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl sm:text-4xl font-bold text-text-light line-through decoration-red-400/60 decoration-2">
                {content.anchorPrice}
              </span>
            </div>
            <div className="text-xs text-text-light mb-6 uppercase tracking-wider">
              Per product
            </div>
            <ul className="space-y-3">
              {content.anchorPains.map((pain) => (
                <li key={pain} className="flex items-center gap-3 text-sm text-text-light">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  {pain}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Main: RecipeBuilder (highlighted) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative p-8 rounded-2xl border-2 border-primary/40 bg-white shadow-xl shadow-primary/10"
          >
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 text-xs font-bold text-white bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/25">
                RecipeBuilder
              </span>
            </div>

            <div className="text-sm font-medium text-primary mb-4 mt-2">
              All-in-one platform
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl sm:text-5xl font-bold text-foreground">
                {content.mainPrice}
              </span>
            </div>
            <div className="text-sm text-text mb-2">
              {content.mainPriceSub}
            </div>
            <div className="text-sm text-text mb-1">
              {content.mainAfterThat}
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-primary-dark bg-primary-light rounded-full mb-6">
              {content.effectiveCost}
            </div>

            <ul className="space-y-3 mb-8">
              {content.features.map((feature) => (
                <li key={feature.text} className="flex items-center gap-3 text-sm text-foreground">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  {feature.text}
                </li>
              ))}
            </ul>

            <a
              href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-text-light">
              <ShieldCheck className="w-3.5 h-3.5" />
              {content.riskReversal}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
