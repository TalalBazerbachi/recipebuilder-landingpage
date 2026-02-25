"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Crown } from "lucide-react";
import type { ComparisonContent } from "@/data/landing-content";

function CellValue({
  value,
  highlight = false,
}: {
  value: string | boolean;
  highlight?: boolean;
}) {
  if (value === true)
    return (
      <span
        className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${
          highlight ? "bg-emerald-500/20" : "bg-emerald-500/10"
        }`}
      >
        <Check
          className={`w-4 h-4 ${
            highlight ? "text-emerald-400" : "text-emerald-500"
          }`}
        />
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-500/10">
        <X className="w-4 h-4 text-red-400" />
      </span>
    );
  return (
    <span className={highlight ? "text-white font-medium" : ""}>{value}</span>
  );
}

export default function Comparison({ content }: { content: ComparisonContent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 bg-dark overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full uppercase tracking-wider">
            Why RecipeBuilder
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Compare Your{" "}
            <span className="gradient-text">Options</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            See how RecipeBuilder stacks up against traditional lab testing and
            manual spreadsheet approaches.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm"
        >
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-5 px-6 text-sm font-medium text-white/50">
                  Feature
                </th>
                <th className="text-center py-5 px-6">
                  <div className="text-sm font-medium text-white/50">
                    Lab Testing
                  </div>
                </th>
                <th className="text-center py-5 px-6">
                  <div className="text-sm font-medium text-white/50">
                    Spreadsheets
                  </div>
                </th>
                <th className="text-center py-5 px-6">
                  <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full text-sm font-semibold shadow-lg shadow-primary/25">
                    <Crown className="w-4 h-4" />
                    RecipeBuilder
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-4 px-6 font-medium text-sm text-white/80">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-center text-sm text-white/40">
                    <CellValue value={row.lab} />
                  </td>
                  <td className="py-4 px-6 text-center text-sm text-white/40">
                    <CellValue value={row.spreadsheet} />
                  </td>
                  <td className="py-4 px-6 text-center text-sm text-primary">
                    <CellValue value={row.recipebuilder} highlight />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
