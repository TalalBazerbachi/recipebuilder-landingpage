"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  UtensilsCrossed,
  Factory,
  CakeSlice,
  Salad,
  Check,
} from "lucide-react";

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants, Cafes & Hotels",
    description:
      "Manage your full menu with accurate nutrition data. Generate labels for packaged items and track recipe costs.",
    items: [
      "Menu nutrition analysis",
      "Packaged item labeling",
      "Cost per serving tracking",
    ],
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Factory,
    title: "Food Manufacturers",
    description:
      "Scale your labeling workflow for production. Auto-generate compliant packaging artwork and barcodes for retail.",
    items: [
      "Retail-ready barcodes",
      "Batch packaging artwork",
      "Production inventory tracking",
    ],
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: CakeSlice,
    title: "Bakeries & Catering",
    description:
      "Create professional labels for every product. Track ingredient costs and manage portion-based inventory.",
    items: [
      "Per-portion cost analysis",
      "Allergen declarations",
      "Custom packaging labels",
    ],
    gradient: "from-amber-500 to-amber-600",
  },
  {
    icon: Salad,
    title: "Nutrition Centers & Meal Plans",
    description:
      "Build meal plans with precise nutrition data. Generate client-facing nutrition labels and track macros.",
    items: [
      "Macro nutrient breakdown",
      "Traffic light labels",
      "Meal plan recipe management",
    ],
    gradient: "from-rose-500 to-rose-600",
  },
];

export default function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-primary bg-primary-light rounded-full uppercase tracking-wider">
            Industries
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Built for Every{" "}
            <span className="gradient-text">Food Business</span>
          </h2>
          <p className="mt-4 text-lg text-text">
            Whether you run a restaurant, manufacture food products, or manage
            nutrition plans — RecipeBuilder adapts to your workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border bg-white hover:shadow-xl hover:border-transparent transition-all hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient top border on hover */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-5 shadow-lg`}
              >
                <industry.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {industry.title}
              </h3>
              <p className="text-text leading-relaxed mb-5">
                {industry.description}
              </p>
              <ul className="space-y-2.5">
                {industry.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-text"
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-gradient-to-br ${industry.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
