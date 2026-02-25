"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView, useScroll, useMotionValueEvent } from "framer-motion";
import {
  ClipboardList,
  Search,
  BarChart3,
  FileText,
  Package,
  Plus,
  Check,
  ChevronRight,
} from "lucide-react";
import type { ProductDemoContent } from "@/data/landing-content";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BROWSER FRAME
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border shadow-2xl overflow-hidden bg-white">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-8">
          <div className="bg-white rounded-md border border-border px-3 py-1 text-[11px] text-gray-400 text-center max-w-[240px] mx-auto">
            app.recipebuilder.bytebeam.co
          </div>
        </div>
      </div>
      <div className="p-10 sm:p-12 min-h-[576px] sm:min-h-[648px] flex items-center">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MOCKUP COMPONENTS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function MockupCreateRecipe() {
  return (
    <div className="max-w-lg mx-auto">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
          <Plus className="w-3.5 h-3.5 text-primary" />
        </div>
        <h3 className="font-semibold text-gray-900">New Recipe</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <label className="block text-[10px] font-medium text-gray-400 mb-1 uppercase tracking-wider">Recipe Name</label>
          <div className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 font-medium">Chocolate Chip Cookies</div>
        </div>
        <div>
          <label className="block text-[10px] font-medium text-gray-400 mb-1 uppercase tracking-wider">Category</label>
          <div className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-600 flex items-center justify-between">
            <span>Bakery</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 rotate-90" />
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-medium text-gray-400 mb-1 uppercase tracking-wider">Yield</label>
          <div className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-600">24 cookies</div>
        </div>
        <div>
          <label className="block text-[10px] font-medium text-gray-400 mb-1 uppercase tracking-wider">Serving Size</label>
          <div className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-600">1 cookie (35g)</div>
        </div>
        <div>
          <label className="block text-[10px] font-medium text-gray-400 mb-1 uppercase tracking-wider">Prep Time</label>
          <div className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-600">45 min</div>
        </div>
      </div>
      <div className="mt-5 flex justify-end">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-white text-sm font-semibold shadow-md shadow-primary/20">
          <Plus className="w-3.5 h-3.5" /> Create Recipe
        </div>
      </div>
    </div>
  );
}

function MockupAddIngredients() {
  const ingredients = [
    { name: "All-Purpose Flour", qty: "280g", cal: "364 kcal/100g" },
    { name: "Butter, unsalted", qty: "200g", cal: "717 kcal/100g" },
    { name: "Granulated Sugar", qty: "150g", cal: "387 kcal/100g" },
    { name: "Chocolate Chips", qty: "180g", cal: "480 kcal/100g" },
  ];
  const results = [
    { name: "Eggs, whole, raw", cal: "143 kcal/100g", src: "USDA #01123" },
    { name: "Eggs, scrambled", cal: "149 kcal/100g", src: "USDA #01132" },
    { name: "Eggs, hard-boiled", cal: "155 kcal/100g", src: "USDA #01129" },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-5 max-w-2xl mx-auto">
      <div className="flex-1">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-primary/30 bg-primary/5 mb-2.5">
          <Search className="w-3.5 h-3.5 text-primary" />
          <span className="text-sm text-gray-900">eggs</span>
          <span className="ml-auto text-[9px] text-primary font-semibold bg-primary/10 px-1.5 py-0.5 rounded">USDA</span>
        </div>
        <div className="space-y-1">
          {results.map((r, i) => (
            <div key={i} className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg border text-xs ${i === 0 ? "border-primary/30 bg-primary/5" : "border-gray-100 bg-gray-50"}`}>
              <div>
                <div className={`font-medium ${i === 0 ? "text-primary" : "text-gray-700"}`}>{r.name}</div>
                <div className="text-[9px] text-gray-400">{r.src}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-gray-500">{r.cal}</div>
                {i === 0 && <div className="text-[9px] font-semibold text-primary flex items-center gap-0.5 justify-end"><Plus className="w-2.5 h-2.5" />Add</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Recipe Ingredients</div>
        <div className="space-y-1">
          {ingredients.map((ing, i) => (
            <div key={i} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-gray-100 bg-white">
              <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-2.5 h-2.5 text-emerald-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-gray-800 truncate">{ing.name}</div>
                <div className="text-[9px] text-gray-400">{ing.cal}</div>
              </div>
              <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">{ing.qty}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border-2 border-dashed border-primary/30 bg-primary/5">
            <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Plus className="w-2.5 h-2.5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-medium text-primary">Eggs, whole, raw</div>
              <div className="text-[9px] text-primary/60">Adding...</div>
            </div>
            <span className="text-[10px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded">100g</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupNutritionAnalysis() {
  const macros = [
    { label: "Calories", value: "165", unit: "kcal", pct: 60, color: "bg-blue-500" },
    { label: "Total Fat", value: "8", unit: "g", pct: 35, color: "bg-amber-500" },
    { label: "Sat. Fat", value: "5", unit: "g", pct: 55, color: "bg-orange-500" },
    { label: "Carbs", value: "22", unit: "g", pct: 48, color: "bg-emerald-500" },
    { label: "Sugars", value: "14", unit: "g", pct: 42, color: "bg-rose-500" },
    { label: "Protein", value: "2", unit: "g", pct: 12, color: "bg-indigo-500" },
    { label: "Sodium", value: "95", unit: "mg", pct: 18, color: "bg-cyan-500" },
    { label: "Fiber", value: "1", unit: "g", pct: 8, color: "bg-lime-600" },
  ];

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900">Chocolate Chip Cookies</h3>
          <p className="text-[10px] text-gray-500">Per Serving — 1 cookie (35g)</p>
        </div>
        <div className="flex items-center gap-2">
          {[{ c: "bg-green-500", bg: "bg-green-50 border-green-200", t: "text-green-700", l: "Fat" }, { c: "bg-amber-500", bg: "bg-amber-50 border-amber-200", t: "text-amber-700", l: "Sugars" }, { c: "bg-green-500", bg: "bg-green-50 border-green-200", t: "text-green-700", l: "Salt" }].map((x) => (
            <div key={x.l} className={`flex items-center gap-1 px-2 py-0.5 rounded-full ${x.bg} border`}>
              <div className={`w-2 h-2 rounded-full ${x.c}`} />
              <span className={`text-[9px] font-medium ${x.t}`}>{x.l}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2.5">
        {macros.map((m) => (
          <div key={m.label} className="p-2.5 rounded-xl border border-gray-100 bg-gray-50/50">
            <div className="text-[9px] font-medium text-gray-400 mb-0.5">{m.label}</div>
            <div className="text-lg font-bold text-gray-900">
              {m.value}<span className="text-[10px] font-normal text-gray-400 ml-0.5">{m.unit}</span>
            </div>
            <div className="mt-1.5 h-1 rounded-full bg-gray-200 overflow-hidden">
              <div className={`h-full rounded-full ${m.color}`} style={{ width: `${m.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupNutritionLabel() {
  const rows = [
    { label: "Calories", value: "165", dv: "", bold: true, thick: true },
    { label: "Total Fat", value: "8g", dv: "12%", bold: true },
    { label: "  Saturated Fat", value: "5g", dv: "25%" },
    { label: "  Trans Fat", value: "0g", dv: "" },
    { label: "Cholesterol", value: "20mg", dv: "7%", bold: true },
    { label: "Sodium", value: "95mg", dv: "4%", bold: true },
    { label: "Total Carbohydrate", value: "22g", dv: "8%", bold: true },
    { label: "  Dietary Fiber", value: "1g", dv: "4%" },
    { label: "  Total Sugars", value: "14g", dv: "" },
    { label: "    Incl. Added Sugars", value: "12g", dv: "24%", italic: true },
    { label: "Protein", value: "2g", dv: "4%", bold: true, thick: true },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-[240px] border-2 border-gray-900 p-2.5 bg-white rounded">
        <div className="text-xl font-black text-gray-900 leading-none">Nutrition Facts</div>
        <div className="border-b-8 border-gray-900 mt-1 mb-0.5" />
        <div className="flex justify-between text-[10px]">
          <span className="font-bold">Serving Size</span><span>1 cookie (35g)</span>
        </div>
        <div className="flex justify-between text-[10px]">
          <span className="font-bold">Servings Per Container</span><span>24</span>
        </div>
        <div className="border-b-4 border-gray-900 mt-0.5 mb-0.5" />
        <div className="text-[8px] font-bold text-right mb-0.5">% Daily Value*</div>
        {rows.map((r, i) => (
          <div key={i}>
            {r.thick && <div className="border-b border-gray-900 my-[1px]" />}
            <div className={`flex justify-between text-[10px] ${!r.thick ? "border-b border-gray-300" : ""} py-[0.5px]`}>
              <span className={`${r.bold ? "font-bold" : ""} ${r.italic ? "italic" : ""}`}>
                {r.label} <span className="font-normal">{r.value}</span>
              </span>
              {r.dv && <span className="font-bold">{r.dv}</span>}
            </div>
          </div>
        ))}
        <div className="border-b-4 border-gray-900 mt-0.5 mb-0.5" />
        <div className="text-[7px] text-gray-500 leading-tight">
          * The % Daily Value tells you how much a nutrient in a serving contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
        </div>
      </div>
    </div>
  );
}

function MockupPackagingArtwork({ variant = "gcc" }: { variant?: "global" | "gcc" }) {
  const barcodeW = [2,1,3,1,2,1,1,3,1,2,3,1,1,2,1,3,1,2,1,1,2,3,1,2,1,3,1,1,2,1];
  const qrDots = [1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1];

  return (
    <div className="flex flex-col sm:flex-row items-start justify-center gap-5">
      <div className="w-full sm:w-[300px] border border-gray-200 rounded-xl bg-white p-4 shadow-sm">
        <div className="text-center pb-2.5 mb-2.5 border-b border-gray-200">
          <h3 className="text-sm font-bold text-gray-900">Chocolate Chip Cookies</h3>
          {variant === "gcc" && <p className="text-xs text-gray-500" dir="rtl">كوكيز رقائق الشوكولاتة</p>}
        </div>
        <div className="flex gap-2.5 mb-2.5">
          <div className="flex-1 border-2 border-gray-900 rounded p-1.5 text-[8px]">
            <div className="font-black text-gray-900 text-[10px] border-b-2 border-gray-900 pb-0.5 mb-0.5">Nutrition Facts</div>
            <div className="text-[7px] text-gray-500 mb-0.5">Serving: 1 cookie (35g)</div>
            {[["Calories","165"],["Total Fat","8g"],["Carbs","22g"],["Protein","2g"],["Sodium","95mg"]].map(([l,v]) => (
              <div key={l} className="flex justify-between"><span className="font-semibold text-gray-800">{l}</span><span>{v}</span></div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 border border-gray-200 rounded p-0.5 grid grid-cols-13 gap-[0.5px]">
              {qrDots.map((d, i) => (
                <div key={i} className={`aspect-square ${d ? "bg-gray-900" : "bg-white"}`} />
              ))}
            </div>
            <span className="text-[6px] text-gray-400">SCAN FOR INFO</span>
          </div>
        </div>
        <div className="text-[7px] text-gray-600 mb-1 leading-relaxed">
          <span className="font-bold text-gray-800">Ingredients: </span>
          Wheat Flour, Butter (Milk), Sugar, Chocolate Chips, Eggs, Brown Sugar, Vanilla, Baking Soda, Salt.
        </div>
        {variant === "gcc" && (
          <div className="text-[7px] text-gray-500 mb-1 leading-relaxed" dir="rtl">
            <span className="font-bold text-gray-700">المكونات: </span>
            دقيق القمح، زبدة (حليب)، سكر، رقائق شوكولاتة، بيض، سكر بني، فانيليا، بيكنج صودا، ملح.
          </div>
        )}
        <div className="text-[6px] text-red-600 font-semibold mb-2">
          {variant === "gcc"
            ? "Contains: Wheat, Milk, Eggs, Soy | يحتوي على: قمح، حليب، بيض، صويا"
            : "Contains: Wheat, Milk, Eggs, Soy"}
        </div>
        <div className="flex flex-col items-center gap-0.5 mb-1.5">
          <div className="flex items-end gap-[1px]">
            {barcodeW.map((w, i) => (
              <div key={i} className="bg-gray-900" style={{ width: `${w}px`, height: `${14 + (i % 3)}px` }} />
            ))}
          </div>
          <span className="text-[6px] text-gray-500 font-mono tracking-widest">5 901234 123457</span>
        </div>
        <div className="flex justify-between text-[6px] text-gray-400 pt-1.5 border-t border-gray-100">
          <span>Net Wt. 840g</span><span>Store below 25°C</span><span>{variant === "gcc" ? "Produced in UAE" : "Produced in USA"}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:pt-4">
        <div className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold text-center shadow-md shadow-primary/20">Download PNG</div>
        <div className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 text-xs font-semibold text-center">Download PDF</div>
        <div className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 text-xs font-semibold text-center">Print Label</div>
        <div className="mt-1 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] text-emerald-600 font-medium">{variant === "gcc" ? "GCC & SFDA Compliant" : "FDA Compliant"}</span>
        </div>
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MAIN COMPONENT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export default function ProductDemo({ content }: { content: ProductDemoContent }) {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = content.steps;
  const PackagingMockup = () => <MockupPackagingArtwork variant={content.variant} />;
  const mockups = [MockupCreateRecipe, MockupAddIngredients, MockupNutritionAnalysis, MockupNutritionLabel, PackagingMockup];
  const ActiveMockup = mockups[active];

  // Track scroll progress within the scroll area to determine active step
  const { scrollYProgress } = useScroll({
    target: scrollAreaRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // Map scroll progress to step index
    const stepIndex = Math.min(
      steps.length - 1,
      Math.floor(progress * steps.length)
    );
    setActive(stepIndex);
  });

  return (
    <section id="product-demo" className="bg-surface" ref={sectionRef}>
      {/* Scroll-driven demo area */}
      <div ref={scrollAreaRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop layout: sticky header+mockup + scrolling text */}
        <div className="hidden lg:flex gap-12">
          {/* Left: Sticky header + mockup */}
          <div className="w-[62%] relative">
            <div className="sticky top-6 pb-8">
              {/* Section header — fixed with the mockup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-6 pt-20"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-primary bg-primary-light rounded-full uppercase tracking-wider">
                  Product Demo
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                  See the Full{" "}
                  <span className="gradient-text">Workflow in Action</span>
                </h2>
                <p className="mt-3 text-base text-text">
                  {content.subtitle}
                </p>
              </motion.div>

              {/* Browser frame with step dots */}
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center pt-6">
                  {steps.map((_, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <button
                        onClick={() => setActive(i)}
                        className={`w-3 h-3 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                          i === active
                            ? "bg-primary border-primary scale-125 shadow-md shadow-primary/30"
                            : i < active
                            ? "bg-primary/40 border-primary/40"
                            : "bg-gray-200 border-gray-300"
                        }`}
                      />
                      {i < steps.length - 1 && (
                        <div
                          className={`w-0.5 h-7 transition-colors duration-300 ${
                            i < active ? "bg-primary/40" : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Browser frame with active mockup */}
                <div className="flex-1">
                  <BrowserFrame>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`mockup-${active}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ActiveMockup />
                      </motion.div>
                    </AnimatePresence>
                  </BrowserFrame>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Scrolling step panels */}
          <div className="w-[38%] pt-[55vh] pb-[45vh]">
            {steps.map((step, i) => (
              <div
                key={step.id}
                className="min-h-[45vh] flex items-center"
              >
                <div
                  className={`transition-all duration-500 ${
                    active === i
                      ? "opacity-100 translate-x-0"
                      : "opacity-20 translate-x-3"
                  }`}
                >
                  {/* Step badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`w-9 h-9 rounded-full text-sm font-bold flex items-center justify-center transition-colors duration-300 ${
                        active === i
                          ? "bg-primary text-white shadow-lg shadow-primary/25"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[10px] font-semibold text-primary uppercase tracking-widest">
                      Step {i + 1} of {steps.length}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-text">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile layout: stacked cards */}
        <div className="lg:hidden pt-24 pb-16">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-primary bg-primary-light rounded-full uppercase tracking-wider">
              Product Demo
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
              See the Full{" "}
              <span className="gradient-text">Workflow in Action</span>
            </h2>
            <p className="mt-4 text-lg text-text">
              {content.subtitle}
            </p>
          </div>
          <div className="space-y-16">
          {steps.map((step, i) => {
            const Mockup = mockups[i];
            return (
              <div key={step.id}>
                {/* Step badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-full text-sm font-bold flex items-center justify-center bg-primary text-white shadow-md shadow-primary/25">
                    {i + 1}
                  </span>
                  <span className="text-[10px] font-semibold text-primary uppercase tracking-widest">
                    Step {i + 1} of {steps.length}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-text leading-relaxed mb-4 text-sm">
                  {step.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-text">
                      <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>

                <BrowserFrame>
                  <Mockup />
                </BrowserFrame>
              </div>
            );
          })}
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-24" />
    </section>
  );
}
