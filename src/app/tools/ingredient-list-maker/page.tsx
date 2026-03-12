"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  List,
  Plus,
  Trash2,
  Copy,
  Check,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Users,
  Utensils,
  ShoppingBag,
  Store,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface Ingredient {
  id: string;
  name: string;
  weight: string;
  hasSubs: boolean;
  subs: string;
}

// ---------------------------------------------------------------------------
// Allergen detection
// ---------------------------------------------------------------------------
const ALLERGENS: { keywords: string[]; label: string }[] = [
  {
    keywords: ["wheat", "gluten", "flour", "semolina", "spelt", "kamut", "rye", "barley", "oat"],
    label: "Wheat/Gluten",
  },
  {
    keywords: ["milk", "cream", "butter", "cheese", "lactose", "dairy", "whey", "casein", "yogurt", "yoghurt"],
    label: "Milk/Dairy",
  },
  {
    keywords: ["egg", "eggs", "albumin", "ovalbumin", "mayonnaise"],
    label: "Eggs",
  },
  {
    keywords: ["peanut", "peanuts", "groundnut", "groundnuts", "monkey nut"],
    label: "Peanuts",
  },
  {
    keywords: [
      "almond", "almonds", "cashew", "cashews", "walnut", "walnuts",
      "pecan", "pecans", "pistachio", "pistachios", "hazelnut", "hazelnuts",
      "macadamia", "brazil nut", "pine nut", "pine nuts",
    ],
    label: "Tree Nuts",
  },
  {
    keywords: ["soy", "soya", "soybean", "soy sauce", "tofu", "tempeh", "edamame", "miso"],
    label: "Soy",
  },
  {
    keywords: ["sesame", "tahini", "sesame oil", "sesame seed", "sesame seeds"],
    label: "Sesame",
  },
  {
    keywords: ["fish", "salmon", "tuna", "cod", "halibut", "tilapia", "anchovy", "anchovies", "sardine", "sardines", "bass", "flounder", "grouper", "haddock", "mahi", "pollock", "snapper", "swordfish", "trout"],
    label: "Fish",
  },
  {
    keywords: ["shrimp", "prawn", "prawns", "crab", "lobster", "crayfish", "shellfish", "scallop", "scallops", "oyster", "oysters", "clam", "clams", "mussel", "mussels", "squid", "octopus"],
    label: "Shellfish",
  },
];

function detectAllergens(name: string, subs: string): string[] {
  const combined = `${name} ${subs}`.toLowerCase();
  const found: string[] = [];
  for (const allergen of ALLERGENS) {
    if (allergen.keywords.some((kw) => combined.includes(kw))) {
      found.push(allergen.label);
    }
  }
  return found;
}

// ---------------------------------------------------------------------------
// Highlight allergens in a text string (returns JSX)
// ---------------------------------------------------------------------------
function highlightAllergens(text: string): React.ReactNode {
  // tokenize on word boundaries and bold allergen matches
  const lowerText = text.toLowerCase();
  let result: React.ReactNode[] = [];
  let lastIndex = 0;

  // Build a flat list of all keyword match positions
  type Match = { start: number; end: number };
  const matches: Match[] = [];

  for (const allergen of ALLERGENS) {
    for (const kw of allergen.keywords) {
      let idx = lowerText.indexOf(kw, 0);
      while (idx !== -1) {
        matches.push({ start: idx, end: idx + kw.length });
        idx = lowerText.indexOf(kw, idx + kw.length);
      }
    }
  }

  // Sort and merge overlapping matches
  matches.sort((a, b) => a.start - b.start);
  const merged: Match[] = [];
  for (const m of matches) {
    if (merged.length > 0 && m.start <= merged[merged.length - 1].end) {
      merged[merged.length - 1].end = Math.max(merged[merged.length - 1].end, m.end);
    } else {
      merged.push({ ...m });
    }
  }

  for (const m of merged) {
    if (m.start > lastIndex) {
      result.push(text.slice(lastIndex, m.start));
    }
    result.push(
      <strong key={`${m.start}-${m.end}`} className="font-bold text-foreground">
        {text.slice(m.start, m.end)}
      </strong>
    );
    lastIndex = m.end;
  }
  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return <>{result}</>;
}

// ---------------------------------------------------------------------------
// Format ingredient statement
// ---------------------------------------------------------------------------
function formatIngredientStatement(ingredients: Ingredient[]): string {
  const sorted = [...ingredients]
    .filter((i) => i.name.trim())
    .sort((a, b) => {
      const wA = parseFloat(a.weight) || 0;
      const wB = parseFloat(b.weight) || 0;
      return wB - wA;
    });

  if (sorted.length === 0) return "";

  const parts = sorted.map((ing) => {
    const name = ing.name.trim();
    if (ing.hasSubs && ing.subs.trim()) {
      return `${name} (${ing.subs.trim()})`;
    }
    return name;
  });

  return "Ingredients: " + parts.join(", ") + ".";
}

// ---------------------------------------------------------------------------
// Unique ID helper
// ---------------------------------------------------------------------------
let counter = 0;
function uid() {
  return `ing-${++counter}-${Math.random().toString(36).slice(2, 6)}`;
}

function emptyIngredient(): Ingredient {
  return { id: uid(), name: "", weight: "", hasSubs: false, subs: "" };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default function IngredientListMakerPage() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    emptyIngredient(),
    emptyIngredient(),
  ]);
  const [generated, setGenerated] = useState<string>("");
  const [copied, setCopied] = useState(false);

  function addIngredient() {
    setIngredients((prev) => [...prev, emptyIngredient()]);
  }

  function removeIngredient(id: string) {
    setIngredients((prev) => prev.filter((i) => i.id !== id));
  }

  function updateIngredient(id: string, field: keyof Ingredient, value: string | boolean) {
    setIngredients((prev) =>
      prev.map((i) => (i.id === id ? { ...i, [field]: value } : i))
    );
  }

  function generate() {
    setGenerated(formatIngredientStatement(ingredients));
    setCopied(false);
  }

  async function copyToClipboard() {
    if (!generated) return;
    try {
      await navigator.clipboard.writeText(generated);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback for older browsers
      const el = document.createElement("textarea");
      el.value = generated;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  // Detected allergens across all ingredients
  const detectedAllergens = useMemo(() => {
    const all = new Set<string>();
    for (const ing of ingredients) {
      for (const a of detectAllergens(ing.name, ing.subs)) {
        all.add(a);
      }
    }
    return Array.from(all);
  }, [ingredients]);

  // Live preview (updates as you type)
  const liveStatement = useMemo(
    () => formatIngredientStatement(ingredients),
    [ingredients]
  );

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
              Ingredient List Maker
            </span>
          </nav>
        </div>

        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center">
              <List className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Free Tool
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Ingredient List Maker
          </h1>
          <p className="text-text text-lg max-w-2xl leading-relaxed">
            Create FDA/GCC-compliant ingredient lists in seconds. For
            auto-generated ingredient lists directly from recipes, try{" "}
            <a
              href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              RecipeBuilder
            </a>
            .
          </p>
        </div>

        {/* Tool */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Ingredient input */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-8">
              <h2 className="text-lg font-bold text-foreground mb-1">
                Add ingredients
              </h2>
              <p className="text-sm text-text mb-6">
                Enter each ingredient and its weight in grams. The list will be
                sorted by weight (heaviest first) as required by FDA &amp; GCC
                regulations.
              </p>

              {/* Column headers */}
              <div className="hidden sm:grid grid-cols-[1fr_100px_auto] gap-3 mb-2 px-1">
                <span className="text-xs font-semibold text-text/50 uppercase tracking-wider">
                  Ingredient name
                </span>
                <span className="text-xs font-semibold text-text/50 uppercase tracking-wider">
                  Weight (g)
                </span>
                <span className="w-8" />
              </div>

              <div className="space-y-3">
                {ingredients.map((ing, idx) => (
                  <IngredientRow
                    key={ing.id}
                    ing={ing}
                    index={idx}
                    onUpdate={updateIngredient}
                    onRemove={removeIngredient}
                    canRemove={ingredients.length > 1}
                  />
                ))}
              </div>

              <button
                onClick={addIngredient}
                className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add ingredient
              </button>

              {detectedAllergens.length > 0 && (
                <div className="mt-5 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1.5">
                    Allergens detected
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {detectedAllergens.map((a) => (
                      <span
                        key={a}
                        className="px-2.5 py-1 text-xs font-semibold text-amber-800 bg-amber-100 border border-amber-300 rounded-full"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={generate}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary-dark transition-colors shadow-sm shadow-primary/20"
              >
                Generate ingredient statement
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Output */}
            <div className="flex flex-col gap-6">
              {/* Live preview */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-8">
                <h2 className="text-lg font-bold text-foreground mb-4">
                  Live preview
                </h2>
                <div className="min-h-[80px] p-4 bg-surface rounded-xl border border-border text-sm text-text leading-relaxed">
                  {liveStatement ? (
                    highlightAllergens(liveStatement)
                  ) : (
                    <span className="text-text/40">
                      Add ingredients to see a live preview...
                    </span>
                  )}
                </div>
                <p className="mt-2 text-xs text-text/50">
                  Allergen keywords are bolded automatically.
                </p>
              </div>

              {/* Generated output */}
              {generated && (
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-foreground">
                      Generated statement
                    </h2>
                    <button
                      onClick={copyToClipboard}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                        copied
                          ? "text-primary bg-primary-light"
                          : "text-text bg-surface border border-border hover:border-primary/30 hover:text-primary"
                      }`}
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-border text-sm text-text leading-relaxed font-medium select-all">
                    {highlightAllergens(generated)}
                  </div>
                  <p className="mt-3 text-xs text-text/50 leading-relaxed">
                    Ingredients are sorted by weight (descending) as required
                    by FDA 21 CFR 101.4 and GCC labeling regulations. Allergen
                    keywords are bolded for reference — verify all declarations
                    with your regulatory advisor.
                  </p>
                </div>
              )}

              {/* Info card */}
              <div className="bg-surface rounded-2xl border border-border p-5">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  How it works
                </p>
                <ul className="space-y-1.5 text-xs text-text">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">1.</span>
                    Enter each ingredient name and weight (grams).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">2.</span>
                    For compound ingredients (e.g. Butter), tick the checkbox and list sub-ingredients.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">3.</span>
                    Click Generate — ingredients are sorted heaviest first.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">4.</span>
                    Copy the statement directly to your label.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 sm:p-10 text-white">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold mb-3">
                RecipeBuilder auto-generates ingredient lists for every recipe
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Ordered by weight, in English and Arabic, with allergen
                highlights — generated automatically from your recipe data.
                No manual entry. No sorting by hand.
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
              Want ingredient lists auto-generated from recipes?
            </h2>
            <p className="text-text leading-relaxed mb-4 max-w-2xl">
              RecipeBuilder builds ingredient lists directly from your recipe — ordered by weight, bilingual English+Arabic, allergens highlighted, compliant with GCC/FDA/EU. No manual entry.
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
            Need full food labeling? Compare{" "}
            <a href="/compare/food-label-maker-alternative" className="underline hover:text-primary">
              RecipeBuilder vs Food Label Maker
            </a>{" "}
            or read our{" "}
            <a href="/gcc" className="underline hover:text-primary">
              GCC food labeling guide
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
            Format a compliant ingredient statement in seconds — no spreadsheets, no sorting by hand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-border p-6">
              <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                <List className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">Weight-sorted automatically</h3>
              <p className="text-sm text-text leading-relaxed">
                Ingredients sort from highest to lowest weight as required by FDA, EU, and GCC regulations. No manual sorting.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border p-6">
              <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">Allergen detection</h3>
              <p className="text-sm text-text leading-relaxed">
                The tool scans for the Big 9 allergens (wheat, milk, eggs, peanuts, tree nuts, soy, fish, shellfish, sesame) and highlights them in your output.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border p-6">
              <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                <Copy className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">Copy-ready output</h3>
              <p className="text-sm text-text leading-relaxed">
                Copy your formatted ingredient statement to clipboard with one click. Ready to paste into your label artwork or spec sheet.
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
              From ingredient weights to formatted declaration in three steps.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  step: "1",
                  title: "Add your ingredients",
                  desc: "Enter each ingredient name and its quantity in grams. Add sub-ingredients for compound ingredients (e.g., butter = cream, salt).",
                },
                {
                  step: "2",
                  title: "Click Generate",
                  desc: "Ingredients sort by weight. Allergens are detected and highlighted. Sub-ingredients appear in parentheses.",
                },
                {
                  step: "3",
                  title: "Copy and use",
                  desc: "Copy the formatted ingredient statement to your clipboard. Paste into your label or spec sheet.",
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
                  Ingredients must be entered with gram weights for correct sorting. The tool sorts by weight, not volume.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                  Allergen detection scans ingredient names. It cannot detect allergens hidden in compound ingredient names — verify manually.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                  This tool generates the ingredient declaration text only. For full label artwork including barcodes, QR codes, and nutrition facts, use RecipeBuilder.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                  GCC regulations require ingredient lists in both English and Arabic. This tool generates English only. RecipeBuilder handles bilingual output automatically.
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
              FDA and GCC Ingredient Declaration Rules
            </h2>
            <div className="space-y-4 text-text leading-relaxed">
              <p>
                Both FDA (21 CFR 101.4) and GCC food labeling standards require ingredients to be listed in descending order of weight — meaning the ingredient used in the greatest amount by weight appears first. This applies to the weight of the ingredient as it was added to the product, before processing (some water may evaporate, for example, but you use the original wet weight).
              </p>
              <p>
                Compound ingredients — ingredients that are themselves made up of multiple components, such as chocolate chips (which may contain cocoa, sugar, cocoa butter, and emulsifiers) — must be declared either by listing all their sub-ingredients in parentheses immediately after the compound ingredient's name, or by declaring each sub-ingredient individually in the main ingredient list in order of their weight in the finished product.
              </p>
              <p>
                Allergen declaration requirements differ by jurisdiction. In the US, the FASTER Act (2023) requires the Big 9 allergens (peanuts, tree nuts, milk, eggs, wheat, soy, fish, shellfish, sesame) to be declared either in the ingredient list in bold or in a separate "Contains:" statement. GCC standards require declaration of the same major allergens, and require the full ingredient list in both English and Arabic. Always verify your final allergen declarations with a regulatory advisor.
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
                    ["Auto-generate from recipe", "✗ Manual entry", "✓ From recipe ingredients"],
                    ["Bilingual Arabic-English output", "✗ English only", "✓ Auto-generated"],
                    ["Allergen highlighting", "✓ Name-scan only", "✓ Full declaration formatting"],
                    ["Compound ingredient formatting", "✓ Manual sub-ingredients", "✓ Auto from recipe structure"],
                    ["Regulatory frameworks", "Generic structure", "FDA, EU, GCC/SFDA compliant"],
                    ["Full label artwork", "✗", "✓ With barcodes and QR codes"],
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
              Anyone who needs a formatted ingredient declaration without a full labeling platform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <Utensils className="w-5 h-5 text-primary" />,
                  title: "Food Manufacturers",
                  desc: "Generate ingredient declarations for new product development and spec sheets before full label design.",
                },
                {
                  icon: <ShoppingBag className="w-5 h-5 text-primary" />,
                  title: "Bakeries",
                  desc: "Quickly format ingredient statements for baked goods, especially useful for products with many compound ingredients like butter, chocolate, or pastry.",
                },
                {
                  icon: <Store className="w-5 h-5 text-primary" />,
                  title: "Catering Businesses",
                  desc: "Create ingredient declarations for packaged items sold at events or through retail channels.",
                },
                {
                  icon: <Users className="w-5 h-5 text-primary" />,
                  title: "Food Scientists",
                  desc: "Format ingredient lists for R&D documentation and regulatory submission prep.",
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
                q: "Is this ingredient list maker free?",
                a: "Yes, free with no sign-up required.",
              },
              {
                q: "How does ingredient sorting work?",
                a: "Ingredients sort by the gram weight you enter, highest to lowest. This matches the FDA, EU, and GCC requirement that ingredients appear in descending order by weight.",
              },
              {
                q: "Does this tool generate Arabic ingredient lists?",
                a: "No, this tool generates English only. For bilingual English-Arabic ingredient declarations required for GCC food labels, use RecipeBuilder, which handles bilingual formatting automatically.",
              },
              {
                q: "How does allergen detection work?",
                a: "The tool scans ingredient names and sub-ingredient text for the Big 9 allergens (wheat/gluten, milk/dairy, eggs, peanuts, tree nuts, soy, fish, shellfish, sesame). Allergens found are highlighted in the output with a bold indicator. Manual verification is still recommended.",
              },
              {
                q: "What are compound ingredients and how do I declare them?",
                a: "Compound ingredients are ingredients made of multiple sub-ingredients (e.g., butter = cream + salt). They appear in the ingredient list by their name followed by sub-ingredients in parentheses. Use the sub-ingredient toggle on each ingredient row to add these.",
              },
              {
                q: "Is this compliant with GCC food labeling regulations?",
                a: "This tool generates an ingredient statement structure that follows GCC's descending-by-weight requirement. However, GCC labels require bilingual Arabic-English declarations, which this tool does not generate. For fully compliant GCC ingredient lists, use RecipeBuilder.",
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
                  title: "Nutrition Label Generator",
                  desc: "Generate an FDA Nutrition Facts panel from your nutrition data — instantly, free.",
                  href: "/tools/nutrition-label-generator",
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
              Want ingredient lists that build themselves?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              RecipeBuilder generates compliant ingredient declarations automatically from your recipe — bilingual English+Arabic, allergens declared, sub-ingredients formatted correctly. For every recipe in your library.
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
                name: "Ingredient List Maker",
                item: "https://recipebuilder.bytebeam.co/tools/ingredient-list-maker",
              },
            ],
          }),
        }}
      />
    </>
  );
}

// ---------------------------------------------------------------------------
// Ingredient row sub-component
// ---------------------------------------------------------------------------
function IngredientRow({
  ing,
  index,
  onUpdate,
  onRemove,
  canRemove,
}: {
  ing: Ingredient;
  index: number;
  onUpdate: (id: string, field: keyof Ingredient, value: string | boolean) => void;
  onRemove: (id: string) => void;
  canRemove: boolean;
}) {
  const [showSubs, setShowSubs] = useState(ing.hasSubs);

  function toggleSubs() {
    const next = !ing.hasSubs;
    onUpdate(ing.id, "hasSubs", next);
    setShowSubs(next);
    if (!next) onUpdate(ing.id, "subs", "");
  }

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <div className="grid grid-cols-[1fr_100px_auto] gap-3 p-3 items-center">
        <input
          type="text"
          value={ing.name}
          onChange={(e) => onUpdate(ing.id, "name", e.target.value)}
          placeholder={`Ingredient ${index + 1}`}
          className="px-3 py-2 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-text/40"
        />
        <input
          type="number"
          min="0"
          step="any"
          value={ing.weight}
          onChange={(e) => onUpdate(ing.id, "weight", e.target.value)}
          placeholder="0"
          className="px-3 py-2 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-text/40"
        />
        <button
          onClick={() => onRemove(ing.id)}
          disabled={!canRemove}
          className="w-8 h-8 flex items-center justify-center text-text/30 hover:text-red-500 disabled:opacity-20 disabled:cursor-not-allowed transition-colors rounded-lg hover:bg-red-50"
          aria-label="Remove ingredient"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Sub-ingredients toggle */}
      <div className="px-3 pb-3">
        <button
          onClick={toggleSubs}
          className="flex items-center gap-1.5 text-xs text-text/60 hover:text-primary transition-colors"
        >
          {showSubs ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
          {showSubs ? "Hide sub-ingredients" : "Has sub-ingredients (compound)"}
        </button>

        {showSubs && (
          <div className="mt-2">
            <input
              type="text"
              value={ing.subs}
              onChange={(e) => onUpdate(ing.id, "subs", e.target.value)}
              placeholder="e.g. Cream, Salt (these appear in parentheses)"
              className="w-full px-3 py-2 text-xs border border-border rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-text/40"
            />
          </div>
        )}
      </div>
    </div>
  );
}
