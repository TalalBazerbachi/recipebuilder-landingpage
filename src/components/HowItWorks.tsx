"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Wand2, Download } from "lucide-react";
import type { HowItWorksContent } from "@/data/landing-content";

const iconMap: Record<string, any> = { ClipboardList, Wand2, Download };

export default function HowItWorks({ content }: { content: HowItWorksContent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="relative py-24 bg-dark overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-grid-pattern" />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            From Recipe to Label in{" "}
            <span className="gradient-text">Minutes</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Three simple steps to create compliant food labels from your recipes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {content.steps.map((step, i) => {
            const Icon = iconMap[step.iconName];
            return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="relative text-center group"
            >
              {/* Connector line */}
              {i < content.steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}

              {/* Step icon container */}
              <div className="relative inline-flex items-center justify-center w-28 h-28 mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="relative bg-dark-card rounded-3xl w-full h-full flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <span className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-primary to-accent text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/50 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
