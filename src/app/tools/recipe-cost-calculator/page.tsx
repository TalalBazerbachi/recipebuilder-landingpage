"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Calculator,
  Plus,
  Trash2,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type Unit = "g" | "kg" | "ml" | "L" | "oz" | "lb" | "each";

interface IngredientRow {
  id: string;
  name: string;
  quantity: string;
  unit: Unit;
  unitCost: string; // cost per unit
}

const UNITS: Unit[] = ["g", "kg", "ml", "L", "oz", "lb", "each"];

// ---------------------------------------------------------------------------
// ID helper
// ---------------------------------------------------------------------------
let _id = 0;
function uid() {
  return `rc-${++_id}-${Math.random().toString(36).slice(2, 5)}`;
}

function emptyRow(): IngredientRow {
  return { id: uid(), name: "", quantity: "", unit: "g", unitCost: "" };
}

// ---------------------------------------------------------------------------
// Number formatting helpers
// ---------------------------------------------------------------------------
function fmt2(n: number) {
  return n.toFixed(2);
}
function fmtPct(n: number) {
  return n.toFixed(1) + "%";
}

// ---------------------------------------------------------------------------
// Margin status
// ---------------------------------------------------------------------------
function marginStatus(foodCostPct: number): {
  color: string;
  bg: string;
  border: string;
  icon: React.ReactNode;
  label: string;
} {
  if (foodCostPct > 35) {
    return {
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
      icon: <TrendingUp className="w-4 h-4 text-red-500" />,
      label: "High food cost",
    };
  }
  if (foodCostPct >= 25) {
    return {
      color: "text-yellow-700",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      icon: <Minus className="w-4 h-4 text-yellow-500" />,
      label: "Acceptable",
    };
  }
  return {
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
    icon: <TrendingDown className="w-4 h-4 text-green-500" />,
    label: "Good margin",
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default function RecipeCostCalculatorPage() {
  const [recipeName, setRecipeName] = useState("");
  const [yield_, setYield] = useState<string>("1");
  const [targetFoodCostPct, setTargetFoodCostPct] = useState<string>("30");
  const [rows, setRows] = useState<IngredientRow[]>([emptyRow(), emptyRow()]);

  function addRow() {
    setRows((prev) => [...prev, emptyRow()]);
  }

  function removeRow(id: string) {
    setRows((prev) => prev.filter((r) => r.id !== id));
  }

  function updateRow(id: string, field: keyof IngredientRow, value: string) {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  }

  // ---------------------------------------------------------------------------
  // Calculations (live)
  // ---------------------------------------------------------------------------
  const calc = useMemo(() => {
    const servings = parseFloat(yield_) || 1;
    const targetPct = parseFloat(targetFoodCostPct) || 30;

    // Per-ingredient cost
    const ingCosts = rows.map((row) => {
      const qty = parseFloat(row.quantity) || 0;
      const cost = parseFloat(row.unitCost) || 0;
      return {
        id: row.id,
        name: row.name.trim() || `Ingredient`,
        qty,
        unit: row.unit,
        costPer: cost,
        totalCost: qty * cost,
      };
    });

    const totalCost = ingCosts.reduce((sum, r) => sum + r.totalCost, 0);
    const costPerServing = totalCost / servings;
    const suggestedRetail = costPerServing / (targetPct / 100);
    const grossMarginPerServing = suggestedRetail - costPerServing;
    const actualFoodCostPct = suggestedRetail > 0 ? (costPerServing / suggestedRetail) * 100 : 0;

    // % of total cost per ingredient
    const ingWithPct = ingCosts.map((r) => ({
      ...r,
      pctOfTotal: totalCost > 0 ? (r.totalCost / totalCost) * 100 : 0,
    }));

    return {
      ingWithPct,
      totalCost,
      costPerServing,
      suggestedRetail,
      grossMarginPerServing,
      actualFoodCostPct,
      targetPct,
    };
  }, [rows, yield_, targetFoodCostPct]);

  const status = marginStatus(calc.actualFoodCostPct);
  const hasData = calc.totalCost > 0;

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
              Recipe Cost Calculator
            </span>
          </nav>
        </div>

        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center">
              <Calculator className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Free Tool
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Recipe Cost Calculator
          </h1>
          <p className="text-text text-lg max-w-2xl leading-relaxed">
            Calculate your recipe food costs instantly. For automatic cost
            tracking across your full menu with real-time updates when
            ingredient prices change, try{" "}
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
            {/* Left: Input */}
            <div className="space-y-6">
              {/* Recipe info */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-8">
                <h2 className="text-lg font-bold text-foreground mb-5">
                  Recipe details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Recipe name
                    </label>
                    <input
                      type="text"
                      value={recipeName}
                      onChange={(e) => setRecipeName(e.target.value)}
                      placeholder="e.g. Chocolate Lava Cake"
                      className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-text/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Recipe yield (servings)
                    </label>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={yield_}
                      onChange={(e) => setYield(e.target.value)}
                      placeholder="1"
                      className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-text/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Target food cost %
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="1"
                        max="100"
                        step="0.5"
                        value={targetFoodCostPct}
                        onChange={(e) => setTargetFoodCostPct(e.target.value)}
                        placeholder="30"
                        className="w-full px-3 py-2.5 pr-8 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-text/40"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-text/50">
                        %
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-text/50">
                      Industry standard is 28–35%. Default: 30%.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-8">
                <h2 className="text-lg font-bold text-foreground mb-5">
                  Ingredients
                </h2>

                {/* Header row */}
                <div className="hidden sm:grid grid-cols-[1fr_90px_80px_110px_32px] gap-3 mb-2 px-1">
                  <span className="text-xs font-semibold text-text/50 uppercase tracking-wider">
                    Name
                  </span>
                  <span className="text-xs font-semibold text-text/50 uppercase tracking-wider">
                    Qty
                  </span>
                  <span className="text-xs font-semibold text-text/50 uppercase tracking-wider">
                    Unit
                  </span>
                  <span className="text-xs font-semibold text-text/50 uppercase tracking-wider">
                    Cost / unit ($)
                  </span>
                  <span />
                </div>

                <div className="space-y-2">
                  {rows.map((row, idx) => (
                    <IngredientInputRow
                      key={row.id}
                      row={row}
                      index={idx}
                      onUpdate={updateRow}
                      onRemove={removeRow}
                      canRemove={rows.length > 1}
                      lineCost={calc.ingWithPct.find((r) => r.id === row.id)?.totalCost ?? 0}
                    />
                  ))}
                </div>

                <button
                  onClick={addRow}
                  className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add ingredient
                </button>
              </div>

              {/* Cost breakdown table */}
              {hasData && (
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-8">
                  <h2 className="text-lg font-bold text-foreground mb-5">
                    Cost breakdown
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left pb-2 text-xs font-semibold text-text/50 uppercase tracking-wider">
                            Ingredient
                          </th>
                          <th className="text-right pb-2 text-xs font-semibold text-text/50 uppercase tracking-wider">
                            Qty
                          </th>
                          <th className="text-right pb-2 text-xs font-semibold text-text/50 uppercase tracking-wider">
                            Cost
                          </th>
                          <th className="text-right pb-2 text-xs font-semibold text-text/50 uppercase tracking-wider">
                            % of total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {calc.ingWithPct
                          .filter((r) => r.totalCost > 0 || r.name)
                          .sort((a, b) => b.totalCost - a.totalCost)
                          .map((row) => (
                            <tr
                              key={row.id}
                              className="border-b border-border/50 last:border-none"
                            >
                              <td className="py-2.5 text-foreground font-medium">
                                {row.name || "—"}
                              </td>
                              <td className="py-2.5 text-right text-text">
                                {row.qty} {rows.find((r) => r.id === row.id)?.unit}
                              </td>
                              <td className="py-2.5 text-right text-foreground font-medium">
                                ${fmt2(row.totalCost)}
                              </td>
                              <td className="py-2.5 text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <div className="w-16 h-1.5 bg-border rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-primary rounded-full"
                                      style={{ width: `${Math.min(row.pctOfTotal, 100)}%` }}
                                    />
                                  </div>
                                  <span className="text-text text-xs w-10 text-right">
                                    {fmtPct(row.pctOfTotal)}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                      <tfoot>
                        <tr className="border-t-2 border-foreground/20">
                          <td
                            colSpan={2}
                            className="pt-3 font-bold text-foreground"
                          >
                            Total
                          </td>
                          <td className="pt-3 text-right font-bold text-foreground">
                            ${fmt2(calc.totalCost)}
                          </td>
                          <td className="pt-3 text-right text-xs text-text/50">
                            100%
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Results panel */}
            <div className="lg:sticky lg:top-24 flex flex-col gap-4">
              {/* Results card */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                <h2 className="text-lg font-bold text-foreground mb-5">
                  Results
                  {recipeName && (
                    <span className="ml-2 text-sm font-normal text-text">
                      — {recipeName}
                    </span>
                  )}
                </h2>

                {!hasData && (
                  <p className="text-sm text-text/50 text-center py-8">
                    Enter ingredient costs above to see results.
                  </p>
                )}

                {hasData && (
                  <div className="space-y-4">
                    {/* Margin badge */}
                    <div
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${status.bg} ${status.border}`}
                    >
                      {status.icon}
                      <span className={`text-sm font-semibold ${status.color}`}>
                        {status.label}
                      </span>
                      <span className={`ml-auto text-sm font-bold ${status.color}`}>
                        {fmtPct(calc.actualFoodCostPct)} food cost
                      </span>
                    </div>

                    <div className="space-y-3">
                      <ResultLine
                        label="Total ingredient cost"
                        value={`$${fmt2(calc.totalCost)}`}
                        sub={`for ${yield_ || 1} serving${parseFloat(yield_) !== 1 ? "s" : ""}`}
                      />
                      <ResultLine
                        label="Cost per serving"
                        value={`$${fmt2(calc.costPerServing)}`}
                        highlight
                      />
                      <div className="border-t border-border pt-3 mt-3">
                        <ResultLine
                          label={`Suggested retail (at ${targetFoodCostPct || 30}% food cost)`}
                          value={`$${fmt2(calc.suggestedRetail)}`}
                          highlight
                        />
                        <ResultLine
                          label="Gross margin per serving"
                          value={`$${fmt2(calc.grossMarginPerServing)}`}
                          sub={`${fmtPct(100 - calc.actualFoodCostPct)} gross margin`}
                        />
                      </div>
                    </div>

                    {/* Visual food cost bar */}
                    <div className="mt-2 pt-4 border-t border-border">
                      <div className="flex justify-between text-xs text-text/60 mb-1.5">
                        <span>Food cost %</span>
                        <span className={`font-bold ${status.color}`}>
                          {fmtPct(calc.actualFoodCostPct)}
                        </span>
                      </div>
                      <div className="h-2.5 w-full bg-surface rounded-full overflow-hidden border border-border">
                        <div
                          className={`h-full rounded-full transition-all ${
                            calc.actualFoodCostPct > 35
                              ? "bg-red-500"
                              : calc.actualFoodCostPct >= 25
                              ? "bg-yellow-400"
                              : "bg-green-500"
                          }`}
                          style={{
                            width: `${Math.min(calc.actualFoodCostPct, 100)}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-text/40 mt-1">
                        <span>0%</span>
                        <span className="text-green-600 font-medium">
                          25% ✓
                        </span>
                        <span className="text-yellow-600 font-medium">
                          35% ⚠
                        </span>
                        <span>50%+</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Benchmark card */}
              <div className="bg-surface rounded-2xl border border-border p-5">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                  Industry benchmarks
                </p>
                <div className="space-y-2 text-xs text-text">
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
                      Excellent
                    </span>
                    <span className="font-medium text-foreground">
                      &lt;25% food cost
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                      Acceptable
                    </span>
                    <span className="font-medium text-foreground">
                      25–35% food cost
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                      Review needed
                    </span>
                    <span className="font-medium text-foreground">
                      &gt;35% food cost
                    </span>
                  </div>
                  <p className="pt-2 text-text/50 leading-relaxed">
                    Standard restaurant food cost target is 28–32%. Fine dining
                    can run higher; fast food typically lower.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 sm:p-10 text-white">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold mb-3">
                RecipeBuilder tracks live ingredient costs across your full
                menu
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Auto-updates your cost per serving when ingredient prices
                change, and flags recipes that fall outside your target
                margins. No spreadsheets. No manual updates.
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
                name: "Recipe Cost Calculator",
                item: "https://recipebuilder.bytebeam.co/tools/recipe-cost-calculator",
              },
            ],
          }),
        }}
      />
    </>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function IngredientInputRow({
  row,
  index,
  onUpdate,
  onRemove,
  canRemove,
  lineCost,
}: {
  row: IngredientRow;
  index: number;
  onUpdate: (id: string, field: keyof IngredientRow, value: string) => void;
  onRemove: (id: string) => void;
  canRemove: boolean;
  lineCost: number;
}) {
  return (
    <div className="grid grid-cols-[1fr_90px_80px_110px_32px] gap-2 sm:gap-3 items-center">
      <input
        type="text"
        value={row.name}
        onChange={(e) => onUpdate(row.id, "name", e.target.value)}
        placeholder={`Ingredient ${index + 1}`}
        className="px-3 py-2 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-text/40"
      />
      <input
        type="number"
        min="0"
        step="any"
        value={row.quantity}
        onChange={(e) => onUpdate(row.id, "quantity", e.target.value)}
        placeholder="0"
        className="px-2 py-2 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-center placeholder:text-text/40"
      />
      <select
        value={row.unit}
        onChange={(e) => onUpdate(row.id, "unit", e.target.value)}
        className="px-2 py-2 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
      >
        {UNITS.map((u) => (
          <option key={u} value={u}>
            {u}
          </option>
        ))}
      </select>
      <div className="relative">
        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-text/50">
          $
        </span>
        <input
          type="number"
          min="0"
          step="any"
          value={row.unitCost}
          onChange={(e) => onUpdate(row.id, "unitCost", e.target.value)}
          placeholder="0.00"
          className="w-full pl-5 pr-2 py-2 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-text/40"
        />
      </div>
      <button
        onClick={() => onRemove(row.id)}
        disabled={!canRemove}
        className="w-8 h-8 flex items-center justify-center text-text/30 hover:text-red-500 disabled:opacity-20 disabled:cursor-not-allowed transition-colors rounded-lg hover:bg-red-50"
        aria-label="Remove ingredient"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}

function ResultLine({
  label,
  value,
  sub,
  highlight = false,
}: {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p
          className={`text-sm ${highlight ? "font-semibold text-foreground" : "text-text"}`}
        >
          {label}
        </p>
        {sub && <p className="text-xs text-text/50 mt-0.5">{sub}</p>}
      </div>
      <span
        className={`shrink-0 text-sm font-bold ${highlight ? "text-primary text-base" : "text-foreground"}`}
      >
        {value}
      </span>
    </div>
  );
}
