"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FileText,
  FlaskConical,
  DollarSign,
  Tag,
  QrCode,
  Package,
} from "lucide-react";

const tabs = [
  {
    id: "label",
    label: "Food Label",
    icon: Tag,
    title: "Professional Packaging Artwork",
    description:
      "Auto-generated bilingual food labels with nutrition facts, ingredient lists in English & Arabic, QR codes, barcodes, storage instructions, and allergen disclaimers.",
    screenshot: "/screenshots/packaging-artwork.png",
    alt: "RecipeBuilder packaging artwork showing bilingual English and Arabic food label with nutrition facts, barcode, and QR code",
  },
  {
    id: "nutrition",
    label: "Nutrition Facts",
    icon: FileText,
    title: "Detailed Nutrition Analysis",
    description:
      "FDA-style nutrition facts panels with full macro and micronutrient breakdown. Traffic light labels show at-a-glance nutritional information per serving.",
    screenshot: "/screenshots/nutrition-label.png",
    alt: "Nutrition facts panel with traffic light labels showing energy, fat, sugars, and salt indicators",
  },
  {
    id: "ingredients",
    label: "USDA Database",
    icon: FlaskConical,
    title: "USDA FoodData Central Search",
    description:
      "Search thousands of ingredients from the official USDA database. Get complete nutritional profiles automatically — no manual data entry required.",
    screenshot: "/screenshots/usda-search.png",
    alt: "USDA FoodData Central ingredient search interface showing search results for food ingredients",
  },
  {
    id: "cost",
    label: "Cost Analysis",
    icon: DollarSign,
    title: "Recipe Cost & Profit Tracking",
    description:
      "Track ingredient costs, total yield, per-serving costs, VAT, labor, packaging, wastage, and aggregator commissions. See your net profit margin at a glance.",
    screenshot: "/screenshots/cost-breakdown.png",
    alt: "Recipe cost breakdown showing ingredient costs, total yield, per-serving cost, and net profit margin in AED",
  },
  {
    id: "qr",
    label: "QR Code",
    icon: QrCode,
    title: "Nutrition Label QR Codes",
    description:
      "Generate scannable QR codes for each recipe that link to a live nutrition information page. Download, print, or preview — customers scan to learn more.",
    screenshot: "/screenshots/qr-code.png",
    alt: "QR code generated for a recipe linking to live nutrition information page",
  },
  {
    id: "stock",
    label: "Stock Tracking",
    icon: Package,
    title: "Real-Time Inventory Management",
    description:
      "Quick stock updates with one-click portion adjustments. Track prep time, serving size, selling price, stock count, and barcode — all from one dashboard.",
    screenshot: "/screenshots/stock-tracking.png",
    alt: "Recipe stock tracking dashboard with portion count, quick stock update controls, and recipe details",
  },
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("label");
  const activeItem = tabs.find((t) => t.id === activeTab) || tabs[0];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-primary bg-primary-light rounded-full uppercase tracking-wider">
            Product
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            See RecipeBuilder{" "}
            <span className="gradient-text">in Action</span>
          </h2>
          <p className="mt-4 text-lg text-text">
            Explore the features that make RecipeBuilder the most complete
            recipe management and food labeling platform for GCC food businesses.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/25"
                  : "bg-white text-text border border-border hover:border-primary/30 hover:text-primary"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-foreground">
                {activeItem.title}
              </h3>
              <p className="mt-2 text-text max-w-2xl mx-auto">
                {activeItem.description}
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-2xl border border-border shadow-2xl overflow-hidden bg-white">
                {/* Browser chrome mockup */}
                <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-lg border border-border px-3 py-1.5 text-xs text-text-light text-center max-w-xs mx-auto">
                      app.recipebuilder.bytebeam.co
                    </div>
                  </div>
                </div>
                <Image
                  src={activeItem.screenshot}
                  alt={activeItem.alt}
                  width={1400}
                  height={900}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
