"use client";

import { useState, useMemo } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, FlaskConical, ChevronRight } from "lucide-react";

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
