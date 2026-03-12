"use client";

import { useState, useMemo } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  FlaskConical,
  ChevronRight,
  ShieldCheck,
  Download,
  Users,
  Utensils,
  ShoppingBag,
  CheckCircle,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface NutritionData {
  productName: string;
  servingSize: string;
  servingsPerContainer: string;
  calories: string;
  totalFat: string;
  saturatedFat: string;
  transFat: string;
  cholesterol: string;
  sodium: string;
  totalCarb: string;
  dietaryFiber: string;
  totalSugars: string;
  addedSugars: string;
  protein: string;
  vitaminD: string;
  calcium: string;
  iron: string;
  potassium: string;
}

// ---------------------------------------------------------------------------
// Daily values (FDA 2020 standard)
// ---------------------------------------------------------------------------
const DV = {
  totalFat: 78,
  saturatedFat: 20,
  cholesterol: 300,
  sodium: 2300,
  totalCarb: 275,
  dietaryFiber: 28,
  addedSugars: 50,
  vitaminD: 20,
  calcium: 1300,
  iron: 18,
  potassium: 4700,
};

function pct(value: string, dv: number): string {
  const n = parseFloat(value);
  if (!n || isNaN(n)) return "0";
  return Math.round((n / dv) * 100).toString();
}

// ---------------------------------------------------------------------------
// FDA Nutrition Facts Panel component
// ---------------------------------------------------------------------------
function NutritionPanel({ data }: { data: NutritionData }) {
  const calories = parseFloat(data.calories) || 0;

  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        border: "3px solid #000",
        padding: "4px 6px",
        maxWidth: "280px",
        width: "100%",
        backgroundColor: "#fff",
        color: "#000",
        fontSize: "13px",
        lineHeight: "1.3",
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: "38px",
          fontWeight: "900",
          lineHeight: "1",
          letterSpacing: "-1px",
          borderBottom: "10px solid #000",
          paddingBottom: "4px",
          marginBottom: "3px",
        }}
      >
        Nutrition Facts
      </div>

      {/* Servings info */}
      {data.servingsPerContainer && (
        <div style={{ fontSize: "13px", lineHeight: "1.4" }}>
          {data.servingsPerContainer} servings per container
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          borderBottom: "5px solid #000",
          paddingBottom: "3px",
          marginBottom: "3px",
        }}
      >
        <span style={{ fontWeight: "700", fontSize: "13px" }}>Serving size</span>
        <span style={{ fontWeight: "700", fontSize: "13px" }}>
          {data.servingSize || "—"}
        </span>
      </div>

      {/* Calories */}
      <div
        style={{
          borderBottom: "5px solid #000",
          paddingBottom: "2px",
          marginBottom: "3px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <div>
            <div style={{ fontSize: "13px", fontWeight: "700" }}>
              Amount per serving
            </div>
            <div style={{ fontSize: "36px", fontWeight: "900", lineHeight: "1" }}>
              Calories
            </div>
          </div>
          <div
            style={{
              fontSize: "50px",
              fontWeight: "900",
              lineHeight: "1",
              alignSelf: "flex-end",
            }}
          >
            {calories || "0"}
          </div>
        </div>
      </div>

      {/* % DV header */}
      <div
        style={{
          textAlign: "right",
          fontSize: "11px",
          fontWeight: "700",
          borderBottom: "1px solid #000",
          paddingBottom: "2px",
          marginBottom: "2px",
        }}
      >
        % Daily Value*
      </div>

      {/* Nutrient rows */}
      <NutrientRow
        bold
        label="Total Fat"
        amount={`${data.totalFat || "0"}g`}
        dvPct={pct(data.totalFat, DV.totalFat)}
      />
      <NutrientRow
        indent
        label="Saturated Fat"
        amount={`${data.saturatedFat || "0"}g`}
        dvPct={pct(data.saturatedFat, DV.saturatedFat)}
      />
      <NutrientRow
        indent
        label={
          <>
            <span style={{ fontStyle: "italic" }}>Trans</span> Fat
          </>
        }
        amount={`${data.transFat || "0"}g`}
        showDV={false}
      />
      <NutrientRow
        bold
        label="Cholesterol"
        amount={`${data.cholesterol || "0"}mg`}
        dvPct={pct(data.cholesterol, DV.cholesterol)}
      />
      <NutrientRow
        bold
        label="Sodium"
        amount={`${data.sodium || "0"}mg`}
        dvPct={pct(data.sodium, DV.sodium)}
      />
      <NutrientRow
        bold
        label="Total Carbohydrate"
        amount={`${data.totalCarb || "0"}g`}
        dvPct={pct(data.totalCarb, DV.totalCarb)}
      />
      <NutrientRow
        indent
        label="Dietary Fiber"
        amount={`${data.dietaryFiber || "0"}g`}
        dvPct={pct(data.dietaryFiber, DV.dietaryFiber)}
      />
      <NutrientRow
        indent
        label="Total Sugars"
        amount={`${data.totalSugars || "0"}g`}
        showDV={false}
      />
      <NutrientRow
        indent2
        label={
          <>
            Includes {data.addedSugars || "0"}g Added Sugars
          </>
        }
        amount=""
        dvPct={pct(data.addedSugars, DV.addedSugars)}
      />
      <NutrientRow
        bold
        label="Protein"
        amount={`${data.protein || "0"}g`}
        showDV={false}
        thick
      />

      {/* Vitamins / minerals */}
      <div style={{ borderTop: "8px solid #000", paddingTop: "3px" }}>
        <MineralRow
          label="Vitamin D"
          amount={`${data.vitaminD || "0"}mcg`}
          dvPct={pct(data.vitaminD, DV.vitaminD)}
        />
        <MineralRow
          label="Calcium"
          amount={`${data.calcium || "0"}mg`}
          dvPct={pct(data.calcium, DV.calcium)}
        />
        <MineralRow
          label="Iron"
          amount={`${data.iron || "0"}mg`}
          dvPct={pct(data.iron, DV.iron)}
        />
        <MineralRow
          label="Potassium"
          amount={`${data.potassium || "0"}mg`}
          dvPct={pct(data.potassium, DV.potassium)}
          last
        />
      </div>

      {/* Footer note */}
      <div
        style={{
          borderTop: "1px solid #000",
          marginTop: "3px",
          paddingTop: "3px",
          fontSize: "9px",
          lineHeight: "1.4",
        }}
      >
        * The % Daily Value tells you how much a nutrient in a serving of food
        contributes to a daily diet. 2,000 calories a day is used for general
        nutrition advice.
      </div>
    </div>
  );
}

function NutrientRow({
  bold,
  indent,
  indent2,
  label,
  amount,
  dvPct,
  showDV = true,
  thick = false,
}: {
  bold?: boolean;
  indent?: boolean;
  indent2?: boolean;
  label: React.ReactNode;
  amount: string;
  dvPct?: string;
  showDV?: boolean;
  thick?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        borderBottom: thick ? "5px solid #000" : "1px solid #000",
        paddingBottom: "1px",
        paddingTop: "1px",
        paddingLeft: indent ? "12px" : indent2 ? "24px" : "0",
        fontSize: "13px",
      }}
    >
      <span>
        <span style={{ fontWeight: bold ? "700" : "400" }}>{label}</span>
        {amount && (
          <span style={{ fontWeight: "400" }}> {amount}</span>
        )}
      </span>
      {showDV && dvPct !== undefined && (
        <span style={{ fontWeight: "700" }}>{dvPct}%</span>
      )}
    </div>
  );
}

function MineralRow({
  label,
  amount,
  dvPct,
  last = false,
}: {
  label: string;
  amount: string;
  dvPct: string;
  last?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: last ? "none" : "1px solid #000",
        paddingBottom: "1px",
        paddingTop: "1px",
        fontSize: "12px",
      }}
    >
      <span>
        {label} {amount}
      </span>
      <span style={{ fontWeight: "700" }}>{dvPct}%</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Form field helper
// ---------------------------------------------------------------------------
function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  indent = false,
  indent2 = false,
}: {
  label: string;
  id: keyof NutritionData;
  value: string;
  onChange: (id: keyof NutritionData, val: string) => void;
  placeholder?: string;
  type?: string;
  indent?: boolean;
  indent2?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 ${indent ? "pl-4" : ""} ${indent2 ? "pl-8" : ""}`}
    >
      <label
        htmlFor={id}
        className="w-44 shrink-0 text-sm text-foreground leading-snug"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        min={type === "number" ? "0" : undefined}
        step={type === "number" ? "any" : undefined}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        placeholder={placeholder}
        className="flex-1 min-w-0 px-3 py-2 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-text/40"
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
const DEFAULT: NutritionData = {
  productName: "",
  servingSize: "",
  servingsPerContainer: "",
  calories: "",
  totalFat: "",
  saturatedFat: "",
  transFat: "",
  cholesterol: "",
  sodium: "",
  totalCarb: "",
  dietaryFiber: "",
  totalSugars: "",
  addedSugars: "",
  protein: "",
  vitaminD: "",
  calcium: "",
  iron: "",
  potassium: "",
};

export default function NutritionLabelGeneratorPage() {
  const [data, setData] = useState<NutritionData>(DEFAULT);

  function update(id: keyof NutritionData, val: string) {
    setData((prev) => ({ ...prev, [id]: val }));
  }

  return (
    <>
      <Navbar light />
      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav className="flex items-center gap-1.5 text-sm text-text">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-text/40" />
            <Link
              href="/tools"
              className="hover:text-primary transition-colors"
            >
              Tools
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-text/40" />
            <span className="text-foreground font-medium">
              Nutrition Label Generator
            </span>
          </nav>
        </div>

        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center">
              <FlaskConical className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Free Tool
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            FDA Nutrition Label Generator
          </h1>
          <p className="text-text text-lg max-w-2xl leading-relaxed">
            Generate FDA-format nutrition labels instantly. Want labels that
            auto-calculate from your actual recipes?{" "}
            <a
              href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Try RecipeBuilder
            </a>
            .
          </p>
        </div>

        {/* Tool */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-8">
              <h2 className="text-lg font-bold text-foreground mb-6">
                Enter nutrition data
              </h2>
              <div className="space-y-3">
                <Field
                  label="Product name"
                  id="productName"
                  value={data.productName}
                  onChange={update}
                  placeholder="e.g. Sea Salt Crackers"
                />
                <Field
                  label="Serving size"
                  id="servingSize"
                  value={data.servingSize}
                  onChange={update}
                  placeholder="e.g. 2 crackers (30g)"
                />
                <Field
                  label="Servings per container"
                  id="servingsPerContainer"
                  value={data.servingsPerContainer}
                  onChange={update}
                  placeholder="e.g. About 10"
                />

                <div className="pt-2 pb-1 border-t border-border">
                  <span className="text-xs font-semibold text-text/50 uppercase tracking-wider">
                    Macronutrients
                  </span>
                </div>

                <Field
                  label="Calories"
                  id="calories"
                  value={data.calories}
                  onChange={update}
                  type="number"
                  placeholder="0"
                />
                <Field
                  label="Total Fat (g)"
                  id="totalFat"
                  value={data.totalFat}
                  onChange={update}
                  type="number"
                  placeholder="0"
                />
                <Field
                  label="Saturated Fat (g)"
                  id="saturatedFat"
                  value={data.saturatedFat}
                  onChange={update}
                  type="number"
                  placeholder="0"
                  indent
                />
                <Field
                  label="Trans Fat (g)"
                  id="transFat"
                  value={data.transFat}
                  onChange={update}
                  type="number"
                  placeholder="0"
                  indent
                />
                <Field
                  label="Cholesterol (mg)"
                  id="cholesterol"
                  value={data.cholesterol}
                  onChange={update}
                  type="number"
                  placeholder="0"
                />
                <Field
                  label="Sodium (mg)"
                  id="sodium"
                  value={data.sodium}
                  onChange={update}
                  type="number"
                  placeholder="0"
                />
                <Field
                  label="Total Carbohydrate (g)"
                  id="totalCarb"
                  value={data.totalCarb}
                  onChange={update}
                  type="number"
                  placeholder="0"
                />
                <Field
                  label="Dietary Fiber (g)"
                  id="dietaryFiber"
                  value={data.dietaryFiber}
                  onChange={update}
                  type="number"
                  placeholder="0"
                  indent
                />
                <Field
                  label="Total Sugars (g)"
                  id="totalSugars"
                  value={data.totalSugars}
                  onChange={update}
                  type="number"
                  placeholder="0"
                  indent
                />
                <Field
                  label="Incl. Added Sugars (g)"
                  id="addedSugars"
                  value={data.addedSugars}
                  onChange={update}
                  type="number"
                  placeholder="0"
                  indent2
                />
                <Field
                  label="Protein (g)"
                  id="protein"
                  value={data.protein}
                  onChange={update}
                  type="number"
                  placeholder="0"
                />

                <div className="pt-2 pb-1 border-t border-border">
                  <span className="text-xs font-semibold text-text/50 uppercase tracking-wider">
                    Vitamins &amp; Minerals
                  </span>
                </div>

                <Field
                  label="Vitamin D (mcg)"
                  id="vitaminD"
                  value={data.vitaminD}
                  onChange={update}
                  type="number"
                  placeholder="0"
                />
                <Field
                  label="Calcium (mg)"
                  id="calcium"
                  value={data.calcium}
                  onChange={update}
                  type="number"
                  placeholder="0"
                />
                <Field
                  label="Iron (mg)"
                  id="iron"
                  value={data.iron}
                  onChange={update}
                  type="number"
                  placeholder="0"
                />
                <Field
                  label="Potassium (mg)"
                  id="potassium"
                  value={data.potassium}
                  onChange={update}
                  type="number"
                  placeholder="0"
                />
              </div>
            </div>

            {/* Preview */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-8">
                <h2 className="text-lg font-bold text-foreground mb-1">
                  Live preview
                </h2>
                {data.productName && (
                  <p className="text-sm text-text mb-5">{data.productName}</p>
                )}
                {!data.productName && (
                  <p className="text-sm text-text/50 mb-5">
                    Fill in the form to see your label
                  </p>
                )}
                <div className="flex justify-start">
                  <NutritionPanel data={data} />
                </div>
                <p className="mt-5 text-xs text-text/50 leading-relaxed">
                  This preview is for reference only. For print-ready,
                  regulation-verified labels, use RecipeBuilder.
                </p>
              </div>

              {/* Info box */}
              <div className="bg-surface rounded-2xl border border-border p-5">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  % Daily Values used
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-text">
                  <span>Total Fat: 78g</span>
                  <span>Saturated Fat: 20g</span>
                  <span>Cholesterol: 300mg</span>
                  <span>Sodium: 2,300mg</span>
                  <span>Total Carbs: 275g</span>
                  <span>Dietary Fiber: 28g</span>
                  <span>Added Sugars: 50g</span>
                  <span>Vitamin D: 20mcg</span>
                  <span>Calcium: 1,300mg</span>
                  <span>Iron: 18mg</span>
                  <span>Potassium: 4,700mg</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 sm:p-10 text-white">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold mb-3">
                RecipeBuilder auto-generates this for every recipe in your
                library
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                With GCC/SFDA, EU, and FDA compliance. Bilingual English &amp;
                Arabic. Barcode + QR code included. No manual data entry — the
                label is calculated directly from your recipe ingredients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary bg-white rounded-lg hover:bg-white/90 transition-colors"
                >
                  Book a free demo
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:info@bytebeam.co?subject=RecipeBuilder Inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Upsell box */}
        {/* ------------------------------------------------------------------ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="rounded-xl border border-primary/20 bg-primary-light/40 p-6">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">
              Want to automate this?
            </p>
            <h2 className="text-xl font-bold text-foreground mb-2">
              Want your recipes to auto-generate this label?
            </h2>
            <p className="text-text leading-relaxed mb-4 max-w-2xl">
              RecipeBuilder calculates nutrition from 20,000+ USDA ingredients and generates this exact label format automatically — for GCC, FDA, EU, and 10+ other regulatory frameworks. No manual data entry.
            </p>
            <a
              href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Book a free demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Cross-sell one-liner */}
        {/* ------------------------------------------------------------------ */}
        <div className="py-6">
          <p className="text-sm text-text/70 max-w-2xl mx-auto text-center px-4">
            Building a food business? Compare{" "}
            <a href="/compare/recipal-alternative" className="underline hover:text-primary">
              RecipeBuilder vs ReciPal
            </a>{" "}
            or see{" "}
            <a href="/blog/best-nutrition-label-software-2026" className="underline hover:text-primary">
              all nutrition label software options
            </a>
            .
          </p>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Why Use This Tool */}
        {/* ------------------------------------------------------------------ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
            Why Use This Tool
          </h2>
          <p className="text-text text-center max-w-xl mx-auto mb-10">
            The fastest way to preview an FDA Nutrition Facts panel without design software.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-border p-6">
              <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                <FlaskConical className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">Instant preview</h3>
              <p className="text-sm text-text leading-relaxed">
                See your FDA nutrition facts panel update in real time as you type. No design software needed.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border p-6">
              <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">FDA-accurate format</h3>
              <p className="text-sm text-text leading-relaxed">
                Calculations use the FDA's 2020 Daily Value reference amounts. Formatting matches the official Nutrition Facts panel layout.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border p-6">
              <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                <Download className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">Free, no sign-up</h3>
              <p className="text-sm text-text leading-relaxed">
                Generate as many labels as you need. Take a screenshot or print directly from your browser.
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* How It Works */}
        {/* ------------------------------------------------------------------ */}
        <div className="bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
              How It Works
            </h2>
            <p className="text-text text-center max-w-xl mx-auto mb-10">
              Three steps from data to label.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  step: "1",
                  title: "Enter your nutrition data",
                  desc: "Fill in serving size, calories, and all macronutrients using the form on the left.",
                },
                {
                  step: "2",
                  title: "Preview updates in real time",
                  desc: "The FDA Nutrition Facts panel on the right updates instantly as you type each value.",
                },
                {
                  step: "3",
                  title: "Print or screenshot",
                  desc: "Use your browser's print function or take a screenshot to save your label.",
                },
              ].map((s) => (
                <div key={s.step} className="bg-white rounded-2xl border border-border p-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-text leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            {/* Important Notes */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-3">
                Important Notes
              </p>
              <ul className="space-y-2 text-sm text-amber-900 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                  This tool generates a visual FDA Nutrition Facts panel. It does not calculate nutrition from ingredients — you need to supply the values yourself.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                  For auto-calculated nutrition from your actual recipes, try RecipeBuilder — it calculates from USDA ingredient data.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                  FDA labeling regulations have specific rounding rules, serving size requirements, and declaration thresholds. For regulatory submission, verify your final label against FDA guidelines.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Educational content */}
        {/* ------------------------------------------------------------------ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          {/* Sub-section A */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              FDA Nutrition Label Requirements
            </h2>
            <div className="space-y-4 text-text leading-relaxed">
              <p>
                The FDA requires nutrition labeling on most packaged foods sold in the United States under 21 CFR Part 101. The Nutrition Facts panel must display specific nutrients in a defined order and format. The 2020 updated rules increased the required font size for calories, made vitamin D and potassium mandatory declarations, and updated Daily Values for several nutrients.
              </p>
              <p>
                Serving size is regulated — it must reflect the amount people typically eat (Reference Amounts Customarily Consumed, or RACCs), not a manufacturer-preferred portion. Misrepresenting serving sizes to make a product appear lower in calories is a labeling violation.
              </p>
              <p>
                Mandatory nutrients include: calories, total fat, saturated fat, trans fat, cholesterol, sodium, total carbohydrate, dietary fiber, total sugars, added sugars, protein, vitamin D, calcium, iron, and potassium. Percent Daily Values (%DV) must be declared for all nutrients except trans fat and total sugars. The footnote explaining %DV is required at the bottom of the panel.
              </p>
            </div>
          </div>

          {/* Sub-section B — Comparison table */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Free Tool vs RecipeBuilder
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="text-left px-5 py-3 font-semibold text-foreground">Feature</th>
                    <th className="text-center px-5 py-3 font-semibold text-text">Free Tool</th>
                    <th className="text-center px-5 py-3 font-semibold text-primary">RecipeBuilder</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Calculate nutrition from recipes", "✗ Manual entry", "✓ Auto from 20,000+ ingredients"],
                    ["Regulatory frameworks", "FDA format only", "FDA, EU, GCC/SFDA, 10+ frameworks"],
                    ["Arabic bilingual labels", "✗", "✓ English + Arabic auto-generated"],
                    ["Packaging artwork (barcodes, QR)", "✗", "✓ Print-ready artwork"],
                    ["Recipe costing & margins", "✗", "✓ Built-in"],
                    ["Price", "Free", "From $15/mo"],
                  ].map(([feature, free, rb]) => (
                    <tr key={feature} className="bg-white">
                      <td className="px-5 py-3 text-foreground font-medium">{feature}</td>
                      <td className="px-5 py-3 text-center text-text">{free}</td>
                      <td className="px-5 py-3 text-center text-primary font-medium">{rb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Perfect For */}
        {/* ------------------------------------------------------------------ */}
        <div className="bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
              Perfect For
            </h2>
            <p className="text-text text-center max-w-xl mx-auto mb-10">
              Anyone who needs an FDA Nutrition Facts panel without signing up for software.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <Users className="w-5 h-5 text-primary" />,
                  title: "Food Manufacturers",
                  desc: "Generate nutrition panel mockups for recipe development before committing to full packaging artwork.",
                },
                {
                  icon: <Utensils className="w-5 h-5 text-primary" />,
                  title: "Restaurant Owners",
                  desc: "Preview what your packaged grab-and-go items' labels will look like before investing in design.",
                },
                {
                  icon: <ShoppingBag className="w-5 h-5 text-primary" />,
                  title: "Food Startups",
                  desc: "Understand FDA nutrition label formatting before your product is ready for full RecipeBuilder setup.",
                },
                {
                  icon: <FlaskConical className="w-5 h-5 text-primary" />,
                  title: "Nutrition Students",
                  desc: "Practice creating FDA Nutrition Facts panels for coursework or exam preparation.",
                },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-2xl border border-border p-5">
                  <div className="w-9 h-9 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1.5">{card.title}</h3>
                  <p className="text-sm text-text leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* FAQ */}
        {/* ------------------------------------------------------------------ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-bold text-foreground mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-5">
            {[
              {
                q: "Is this nutrition label generator free?",
                a: "Yes. Completely free to use, no sign-up required. Generate as many labels as you want.",
              },
              {
                q: "Does this tool calculate nutrition from my recipe?",
                a: "No. You must enter the nutrition values manually. If you want automatic nutrition calculation from your actual ingredients, try RecipeBuilder — it calculates from a database of 20,000+ USDA-verified ingredients.",
              },
              {
                q: "Can I download the nutrition label as a PDF?",
                a: "You can print the panel directly from your browser (Ctrl+P / Cmd+P) or take a screenshot. For print-ready PDF labels with full packaging artwork, try RecipeBuilder.",
              },
              {
                q: "Does this generate GCC or SFDA nutrition labels?",
                a: "This tool generates FDA-format labels only. For GCC/SFDA-compliant labels with bilingual Arabic-English output, use RecipeBuilder, which supports 10+ regulatory frameworks including all GCC standards.",
              },
              {
                q: "Is this tool compliant with FDA labeling regulations?",
                a: "This tool generates a Nutrition Facts panel in the correct FDA visual format using 2020 Daily Value reference amounts. However, FDA labeling regulations have specific rounding rules and thresholds. Always verify your final label against official FDA guidance before commercial use.",
              },
              {
                q: "What's the difference between this free tool and RecipeBuilder?",
                a: "This free tool generates a single Nutrition Facts panel from values you enter manually. RecipeBuilder auto-calculates nutrition from your recipe ingredients, generates complete packaging artwork (with barcodes, QR codes, and bilingual Arabic-English ingredient lists), covers 10+ regulatory frameworks, and includes recipe costing and inventory management.",
              },
            ].map((item) => (
              <div key={item.q} className="border border-border rounded-xl p-5 bg-white">
                <h3 className="text-base font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-sm text-text leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Stats strip */}
        {/* ------------------------------------------------------------------ */}
        <div className="bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-center text-white/70 text-sm font-semibold uppercase tracking-wider mb-8">
              Trusted by food businesses worldwide
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { metric: "5,000+", label: "Labels approved by Dubai Municipality" },
                { metric: "20,000+", label: "USDA FoodData Central ingredients" },
                { metric: "10+", label: "Regulatory frameworks supported" },
                { metric: "14-day", label: "Free trial — no credit card" },
              ].map((s) => (
                <div key={s.metric}>
                  <div className="text-3xl font-bold text-white mb-1">{s.metric}</div>
                  <div className="text-sm text-white/70 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Works Everywhere */}
        {/* ------------------------------------------------------------------ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
            Works Everywhere
          </h2>
          <p className="text-text text-center max-w-xl mx-auto mb-10">
            No installation. No account. Works in any browser on any device.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: <Monitor className="w-5 h-5 text-primary" />,
                title: "Desktop",
                browsers: ["Chrome", "Firefox", "Safari", "Edge"],
              },
              {
                icon: <Smartphone className="w-5 h-5 text-primary" />,
                title: "Mobile",
                browsers: ["iOS Safari", "Android Chrome"],
              },
              {
                icon: <Tablet className="w-5 h-5 text-primary" />,
                title: "Tablet",
                browsers: ["iPad", "Android"],
              },
            ].map((device) => (
              <div key={device.title} className="bg-white rounded-2xl border border-border p-5 text-center">
                <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-3">
                  {device.icon}
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{device.title}</h3>
                <div className="space-y-1">
                  {device.browsers.map((b) => (
                    <p key={b} className="text-sm text-text">{b}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* More Free Tools */}
        {/* ------------------------------------------------------------------ */}
        <div className="bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
              More Free Tools
            </h2>
            <p className="text-text text-center max-w-xl mx-auto mb-10">
              Free tools for food businesses, no account required.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Ingredient List Maker",
                  desc: "Sort ingredients by weight and format a compliant ingredient statement.",
                  href: "/tools/ingredient-list-maker",
                },
                {
                  title: "Recipe Cost Calculator",
                  desc: "Calculate food cost per serving, margins, and suggested retail price.",
                  href: "/tools/recipe-cost-calculator",
                },
                {
                  title: "All Free Tools",
                  desc: "View our full suite of free food business tools.",
                  href: "/tools",
                },
              ].map((tool) => (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="group bg-white rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-text leading-relaxed mb-3">{tool.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Try it free <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Final CTA */}
        {/* ------------------------------------------------------------------ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-10 sm:p-14 text-white text-center">
            <h2 className="text-3xl font-bold mb-3">
              Want labels that calculate themselves?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              RecipeBuilder auto-generates FDA, GCC, and EU nutrition labels from your recipes. Add an ingredient, the label updates. No manual entry ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-primary bg-white rounded-lg hover:bg-white/90 transition-colors"
              >
                Book a free demo <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@bytebeam.co?subject=RecipeBuilder Inquiry"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://recipebuilder.bytebeam.co",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Tools",
                item: "https://recipebuilder.bytebeam.co/tools",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Nutrition Label Generator",
                item: "https://recipebuilder.bytebeam.co/tools/nutrition-label-generator",
              },
            ],
          }),
        }}
      />
    </>
  );
}
