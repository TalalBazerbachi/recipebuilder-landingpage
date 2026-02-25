"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  ShieldCheck,
  Zap,
  Headset,
  MapPin,
  BadgeCheck,
  Languages,
} from "lucide-react";
import type { TrustPillarsContent } from "@/data/landing-content";
import { globalContent } from "@/data/global-content";

const iconMap: Record<string, any> = { MapPin, BadgeCheck, Globe, Zap, ShieldCheck, Headset, Languages };

export default function TrustPillars({ content = globalContent.trustPillars }: { content?: TrustPillarsContent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-primary bg-primary-light rounded-full uppercase tracking-wider">
            Why RecipeBuilder
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Built for Food Businesses{" "}
            <span className="gradient-text">That Need It Right</span>
          </h2>
          <p className="mt-4 text-lg text-text">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.iconName];
            return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl border border-border bg-white hover:shadow-lg hover:border-primary/20 transition-all hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 ${pillar.iconBg} rounded-xl flex items-center justify-center mb-4`}
              >
                <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-text leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
