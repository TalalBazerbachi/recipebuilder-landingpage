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
