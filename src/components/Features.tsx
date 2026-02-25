"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Barcode,
  QrCode,
  Database,
  Languages,
  Package,
} from "lucide-react";
import type { FeaturesContent } from "@/data/landing-content";

const iconMap: Record<string, any> = { FileText, Barcode, QrCode, Database, Languages, Package };

export default function Features({ content }: { content: FeaturesContent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-primary bg-primary-light rounded-full uppercase tracking-wider">
            Features
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Everything You Need to{" "}
            <span className="gradient-text">Manage Recipes & Labels</span>
          </h2>
          <p className="mt-4 text-lg text-text">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {content.features.map((feature, i) => {
            const Icon = iconMap[feature.iconName];
            return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative bg-white p-8 rounded-2xl border border-border hover:shadow-xl hover:border-transparent transition-all hover:-translate-y-1 overflow-hidden ${feature.span}`}
            >
              {/* Gradient top accent on hover */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-text leading-relaxed">{feature.description}</p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
