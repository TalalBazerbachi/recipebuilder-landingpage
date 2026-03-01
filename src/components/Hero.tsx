"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Database,
  ShieldCheck,
  Languages,
  FileCheck,
  Globe,
  Play,
  type LucideIcon,
} from "lucide-react";
import type { HeroContent } from "@/data/landing-content";

const iconMap: Record<string, LucideIcon> = {
  FileCheck,
  Database,
  ShieldCheck,
  Languages,
  Globe,
};

/* ─── Allergens card ─── */
function AllergensCard() {
  const allergens = [
    { name: "Crustacean", color: "bg-blue-500", icon: "🦀" },
    { name: "Sesame", color: "bg-purple-500", icon: "🌱" },
    { name: "Nuts", color: "bg-amber-600", icon: "🥜" },
    { name: "Gluten", color: "bg-yellow-600", icon: "🌾" },
    { name: "Egg", color: "bg-yellow-500", icon: "🥚" },
    { name: "Fish", color: "bg-sky-500", icon: "🐟" },
    { name: "Shellfish", color: "bg-teal-500", icon: "🦐" },
    { name: "Soya", color: "bg-green-600", icon: "🫘" },
    { name: "Lupins", color: "bg-orange-500", icon: "🌿" },
  ];
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-3 w-[170px]">
      <div className="text-[9px] font-bold text-gray-800 mb-2">Allergens</div>
      <div className="grid grid-cols-3 gap-2">
        {allergens.map((a) => (
          <div key={a.name} className="flex flex-col items-center gap-0.5">
            <div className={`w-7 h-7 rounded-full ${a.color} flex items-center justify-center text-white text-[11px]`}>
              {a.icon}
            </div>
            <span className="text-[5px] text-gray-500 font-medium text-center leading-tight">{a.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── FDA Nutrition Facts panel ─── */
function HeroNutritionFacts() {
  const rows = [
    { label: "Total Fat", value: "8g", dv: "10%", bold: true },
    { label: "  Saturated Fat", value: "5g", dv: "25%" },
    { label: "  Trans Fat", value: "0g", dv: "" },
    { label: "Cholesterol", value: "20mg", dv: "7%", bold: true },
    { label: "Sodium", value: "95mg", dv: "4%", bold: true },
    { label: "Total Carbohydrate", value: "22g", dv: "8%", bold: true },
    { label: "  Dietary Fiber", value: "1g", dv: "4%" },
    { label: "  Total Sugars", value: "14g", dv: "" },
    { label: "    Incl. Added Sugars", value: "12g", dv: "24%", italic: true },
    { label: "Protein", value: "2g", dv: "4%", bold: true },
  ];

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-3 w-[220px]">
      <div className="border-2 border-black p-2">
        <div className="font-black text-[18px] text-black leading-none tracking-tight">Nutrition Facts</div>
        <div className="border-b-[6px] border-black mt-0.5 mb-0.5" />
        <div className="text-[7px] text-gray-600 border-b border-gray-300 pb-0.5">8 servings per container</div>
        <div className="flex justify-between items-baseline border-b-[3px] border-black pb-0.5 mt-0.5">
          <span className="font-bold text-[9px] text-black">Serving size</span>
          <span className="font-bold text-[9px] text-black">1 cookie (35g)</span>
        </div>
        <div className="border-b border-gray-300 pb-0.5 mt-0.5">
          <div className="text-[7px] text-black font-bold">Amount per serving</div>
          <div className="flex justify-between items-baseline">
            <span className="font-black text-[14px] text-black">Calories</span>
            <span className="font-black text-[22px] text-black leading-none">165</span>
          </div>
        </div>
        <div className="text-right text-[6px] font-bold text-black border-b border-gray-300 py-[2px]">% Daily Value*</div>
        {rows.map((r, i) => (
          <div key={i} className={`flex justify-between text-[7px] border-b border-gray-200 py-[1px] ${r.label.startsWith("  ") ? "" : ""}`}>
            <span className={`${r.bold ? "font-bold text-black" : "text-gray-700"} ${r.italic ? "italic" : ""}`}>
              {r.label} <span className="font-normal">{r.value}</span>
            </span>
            {r.dv && <span className="font-bold text-black">{r.dv}</span>}
          </div>
        ))}
        <div className="border-b-[3px] border-black mt-0.5 mb-0.5" />
        <div className="space-y-[1px] text-[7px]">
          <div className="flex justify-between"><span>Vitamin D 0mcg</span><span>0%</span></div>
          <div className="flex justify-between border-b border-gray-200 pb-[1px]"><span>Calcium 20mg</span><span>2%</span></div>
          <div className="flex justify-between"><span>Iron 1.2mg</span><span>6%</span></div>
          <div className="flex justify-between border-b border-gray-200 pb-[1px]"><span>Potassium 60mg</span><span>2%</span></div>
        </div>
        <div className="text-[5px] text-gray-500 mt-1 leading-tight">
          * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
        </div>
      </div>
    </div>
  );
}

/* ─── Packaging Artwork label ─── */
function HeroPackagingArtwork() {
  const barcodeW = [2,1,3,1,2,1,1,3,1,2,3,1,1,2,1,3,1,2,1,1,2,3,1,2,1,3,1,1,2,1];
  const qrDots = [1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1];

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-3 w-[240px]">
      {/* Product name */}
      <div className="text-center pb-2 mb-2 border-b border-gray-200">
        <h3 className="text-[11px] font-bold text-gray-900">Chocolate Chip Cookies</h3>
        <p className="text-[8px] text-gray-400 mt-0.5">Artisan Baked — Premium Quality</p>
      </div>
      {/* Mini nutrition + QR */}
      <div className="flex gap-2 mb-2">
        <div className="flex-1 border border-gray-900 rounded p-1.5 text-[7px]">
          <div className="font-black text-gray-900 text-[8px] border-b-2 border-gray-900 pb-0.5 mb-0.5">Nutrition Facts</div>
          <div className="text-[6px] text-gray-500 mb-0.5">Serving: 1 cookie (35g)</div>
          {[["Calories","165"],["Total Fat","8g"],["Carbs","22g"],["Protein","2g"],["Sodium","95mg"]].map(([l,v]) => (
            <div key={l} className="flex justify-between"><span className="font-semibold text-gray-800">{l}</span><span>{v}</span></div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-11 h-11 border border-gray-200 rounded p-0.5 grid grid-cols-13 gap-[0.5px]">
            {qrDots.map((d, i) => (
              <div key={i} className={`aspect-square ${d ? "bg-gray-900" : "bg-white"}`} />
            ))}
          </div>
          <span className="text-[5px] text-gray-400 font-medium">SCAN FOR INFO</span>
        </div>
      </div>
      {/* Ingredients */}
      <div className="text-[6px] text-gray-600 mb-1.5 leading-relaxed">
        <span className="font-bold text-gray-800">Ingredients: </span>
        Wheat Flour, Butter (Milk), Sugar, Chocolate Chips (Cocoa, Sugar, Soy Lecithin), Eggs, Brown Sugar, Vanilla Extract, Baking Soda, Salt.
      </div>
      {/* Allergens */}
      <div className="text-[6px] text-red-600 font-semibold mb-2">
        Contains: Wheat, Milk, Eggs, Soy
      </div>
      {/* Barcode */}
      <div className="flex flex-col items-center gap-0.5 mb-1.5">
        <div className="flex items-end gap-[0.5px]">
          {barcodeW.map((w, i) => (
            <div key={i} className="bg-gray-900" style={{ width: `${w * 0.8}px`, height: `${12 + (i % 3)}px` }} />
          ))}
        </div>
        <span className="text-[5px] text-gray-500 font-mono tracking-widest">5 901234 123457</span>
      </div>
      {/* Footer info */}
      <div className="flex justify-between text-[5px] text-gray-400 pt-1.5 border-t border-gray-100">
        <span>Net Wt. 280g (8 cookies)</span>
        <span>Store in a cool, dry place</span>
      </div>
    </div>
  );
}

/* ─── UK-style Traffic Light label ─── */
function HeroTrafficLight() {
  const items = [
    { label: "Energy", value: "697kJ", sub: "165kcal", color: "bg-amber-500", pct: "8%" },
    { label: "Fat", value: "8.0g", sub: "", color: "bg-amber-500", pct: "LOW", isLow: true },
    { label: "Saturates", value: "5.0g", sub: "", color: "bg-red-500", pct: "HIGH", isHigh: true },
    { label: "Sugars", value: "14g", sub: "", color: "bg-red-500", pct: "HIGH", isHigh: true },
    { label: "Salt", value: "0.24g", sub: "", color: "bg-green-600", pct: "LOW", isLow: true },
  ];

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-3 w-[260px]">
      {/* Header */}
      <div className="text-center mb-2">
        <div className="text-[8px] font-bold text-gray-500 uppercase tracking-wider">Each serving contains</div>
      </div>
      {/* Traffic light circles */}
      <div className="flex items-start justify-center gap-2">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center w-[44px]">
            <div className={`w-[44px] h-[44px] rounded-full ${item.color} flex flex-col items-center justify-center text-white`}>
              <div className="text-[9px] font-black leading-none">{item.value}</div>
              {item.sub && <div className="text-[6px] font-medium opacity-90">{item.sub}</div>}
            </div>
            <div className="mt-1 text-[7px] font-bold text-gray-800 text-center leading-tight">{item.label}</div>
            <div className={`text-[6px] font-bold mt-0.5 ${item.isHigh ? "text-red-600" : item.isLow ? "text-green-700" : "text-amber-600"}`}>
              {item.pct}
            </div>
          </div>
        ))}
      </div>
      {/* Reference */}
      <div className="mt-2 pt-1.5 border-t border-gray-100">
        <div className="text-[6px] text-gray-400 text-center">
          of your reference intake (RI)
        </div>
        <div className="flex justify-center gap-3 mt-1">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-600" />
            <span className="text-[6px] text-gray-500">Low</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-[6px] text-gray-500">Medium</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-[6px] text-gray-500">High</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Rotating flag badge ─── */
const flags = [
  // US
  (
    <svg viewBox="0 0 60 60" className="w-full h-full">
      <rect width="60" height="60" fill="#B22234" />
      {[1,3,5,7,9,11].map(i => (
        <rect key={i} y={i * (60/13)} width="60" height={60/13} fill="white" />
      ))}
      <rect width="24" height={60 * 7/13} fill="#3C3B6E" />
      {[
        [4,3],[8,3],[12,3],[16,3],[20,3],
        [6,6],[10,6],[14,6],[18,6],
        [4,9],[8,9],[12,9],[16,9],[20,9],
        [6,12],[10,12],[14,12],[18,12],
        [4,15],[8,15],[12,15],[16,15],[20,15],
        [6,18],[10,18],[14,18],[18,18],
        [4,21],[8,21],[12,21],[16,21],[20,21],
        [6,24],[10,24],[14,24],[18,24],
        [4,27],[8,27],[12,27],[16,27],[20,27],
      ].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="1" fill="white" />
      ))}
    </svg>
  ),
  // UK
  (
    <svg viewBox="0 0 60 60" className="w-full h-full">
      <rect width="60" height="60" fill="#012169" />
      <polygon points="0,0 24,22 18,22 0,8" fill="white" />
      <polygon points="60,0 36,22 42,22 60,8" fill="white" />
      <polygon points="0,60 24,38 18,38 0,52" fill="white" />
      <polygon points="60,60 36,38 42,38 60,52" fill="white" />
      <polygon points="0,0 20,22 14,22 0,12" fill="#C8102E" />
      <polygon points="60,60 40,38 46,38 60,48" fill="#C8102E" />
      <polygon points="60,0 60,8 42,22 46,22" fill="#C8102E" />
      <polygon points="0,60 0,52 18,38 14,38" fill="#C8102E" />
      <rect x="24" width="12" height="60" fill="white" />
      <rect y="22" width="60" height="16" fill="white" />
      <rect x="26" width="8" height="60" fill="#C8102E" />
      <rect y="24.5" width="60" height="11" fill="#C8102E" />
    </svg>
  ),
  // France
  (
    <svg viewBox="0 0 60 60" className="w-full h-full">
      <rect width="20" height="60" fill="#002395" />
      <rect x="20" width="20" height="60" fill="white" />
      <rect x="40" width="20" height="60" fill="#ED2939" />
    </svg>
  ),
  // Saudi Arabia
  (
    <svg viewBox="0 0 60 60" className="w-full h-full">
      <rect width="60" height="60" fill="#006C35" />
      <text x="30" y="28" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="serif">لا إله إلا الله</text>
      <text x="30" y="38" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="serif">محمد رسول الله</text>
      <line x1="14" y1="45" x2="46" y2="45" stroke="white" strokeWidth="1.5" />
      <polygon points="46,43 50,45 46,47" fill="white" />
    </svg>
  ),
  // UAE
  (
    <svg viewBox="0 0 60 60" className="w-full h-full">
      <rect width="60" height="20" fill="#00732F" />
      <rect y="20" width="60" height="20" fill="white" />
      <rect y="40" width="60" height="20" fill="black" />
      <rect width="15" height="60" fill="#FF0000" />
    </svg>
  ),
  // Globe
  (
    <svg viewBox="0 0 60 60" className="w-full h-full">
      <circle cx="30" cy="30" r="28" fill="#2782FF" />
      <ellipse cx="30" cy="30" rx="14" ry="27" fill="none" stroke="white" strokeWidth="1.2" opacity="0.5" />
      <ellipse cx="30" cy="30" rx="24" ry="27" fill="none" stroke="white" strokeWidth="1.2" opacity="0.5" />
      <line x1="30" y1="3" x2="30" y2="57" stroke="white" strokeWidth="1.2" opacity="0.5" />
      <line x1="3" y1="30" x2="57" y2="30" stroke="white" strokeWidth="1.2" opacity="0.5" />
      <path d="M18 18 Q22 15 28 16 Q30 18 27 22 Q24 24 20 22 Z" fill="white" opacity="0.6" />
      <path d="M32 14 Q38 12 42 16 Q44 20 40 24 Q36 26 34 22 Q32 18 32 14Z" fill="white" opacity="0.6" />
      <path d="M22 28 Q26 26 30 28 Q32 32 28 36 Q24 38 20 34 Q18 30 22 28Z" fill="white" opacity="0.6" />
      <path d="M34 30 Q38 28 42 32 Q44 36 40 38 Q36 40 34 36 Z" fill="white" opacity="0.6" />
      <path d="M36 40 Q40 38 44 42 Q46 46 42 48 Q38 48 36 44Z" fill="white" opacity="0.6" />
    </svg>
  ),
];

function RotatingFlagBadge() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % flags.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-16 h-16 rounded-full overflow-hidden shadow-xl border-2 border-gray-200 relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          {flags[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ─── GCC Hero: Packaging label mockup ─── */
function GCCHeroVisual() {
  const barcodeWidths = [2,1,3,1,2,1,1,3,1,2,3,1,1,2,1,3,1,2,1,1,2,3,1,2,1,3,1,1,2,1];
  const qrDots = [
    1,1,1,1,1,0,1,0,1,1,1,1,1,
    1,0,0,0,1,0,0,0,1,0,0,0,1,
    1,0,1,0,1,0,1,0,1,0,1,0,1,
    1,0,0,0,1,0,1,0,1,0,0,0,1,
    1,1,1,1,1,0,1,0,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,0,1,1,1,0,1,1,0,1,0,1,0,
    0,0,0,0,0,0,1,0,0,0,0,0,0,
    1,1,1,1,1,0,0,1,1,0,1,0,1,
    1,0,0,0,1,0,1,0,0,1,0,1,0,
    1,0,1,0,1,0,1,1,0,0,1,1,1,
    1,0,0,0,1,0,0,0,1,1,0,1,0,
    1,1,1,1,1,0,1,0,1,0,1,0,1,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative hidden lg:block"
    >
      <div className="relative w-[360px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-200 p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
        <div className="text-center mb-4 pb-3 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">Chocolate Chip Cookies</h3>
          <p className="text-sm text-gray-500 mt-0.5" dir="rtl">كوكيز رقائق الشوكولاتة</p>
        </div>
        <div className="flex gap-3 mb-4">
          <div className="flex-1 border-2 border-gray-900 rounded-lg p-2.5 text-[10px]">
            <div className="font-black text-gray-900 text-sm border-b-4 border-gray-900 pb-1 mb-1">Nutrition Facts</div>
            <div className="text-[9px] text-gray-600 border-b border-gray-300 pb-0.5 mb-1">Serving Size 1 cookie (35g)</div>
            <div className="space-y-0.5">
              <div className="flex justify-between font-bold text-gray-900"><span>Calories</span><span>165</span></div>
              <div className="border-t border-gray-200" />
              <div className="flex justify-between"><span className="font-semibold text-gray-900">Total Fat</span><span>8g</span></div>
              <div className="flex justify-between pl-2 text-gray-600"><span>Saturated Fat</span><span>5g</span></div>
              <div className="flex justify-between"><span className="font-semibold text-gray-900">Total Carbs</span><span>22g</span></div>
              <div className="flex justify-between pl-2 text-gray-600"><span>Sugars</span><span>14g</span></div>
              <div className="flex justify-between"><span className="font-semibold text-gray-900">Protein</span><span>2g</span></div>
              <div className="flex justify-between"><span className="font-semibold text-gray-900">Sodium</span><span>95mg</span></div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-[60px] h-[60px] bg-white border border-gray-300 rounded p-1 grid grid-cols-13 gap-[1px]">
              {qrDots.map((d, i) => (
                <div key={i} className={`aspect-square rounded-[0.5px] ${d ? "bg-gray-900" : "bg-white"}`} />
              ))}
            </div>
            <span className="text-[7px] text-gray-400 font-medium">SCAN FOR INFO</span>
          </div>
        </div>
        <div className="text-[9px] text-gray-600 mb-3 leading-relaxed">
          <span className="font-bold text-gray-800">Ingredients: </span>
          Wheat Flour, Butter, Sugar, Chocolate Chips, Eggs, Brown Sugar, Vanilla Extract, Baking Soda, Salt.
        </div>
        <div className="text-[9px] text-gray-500 mb-4 leading-relaxed" dir="rtl">
          <span className="font-bold text-gray-700">المكونات: </span>
          دقيق القمح، زبدة، سكر، رقائق شوكولاتة، بيض، سكر بني، خلاصة الفانيليا، بيكنج صودا، ملح.
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-end gap-[1px]">
            {barcodeWidths.map((w, i) => (
              <div key={i} className="bg-gray-900 rounded-[0.3px]" style={{ width: `${w}px`, height: `${20 + (i % 3) * 2}px` }} />
            ))}
          </div>
          <span className="text-[8px] text-gray-500 font-mono tracking-wider">5 901234 123457</span>
        </div>
        <div className="mt-3 pt-2 border-t border-gray-200 flex justify-between text-[8px] text-gray-400">
          <span>Net Wt. 840g</span>
          <span>Store below 25°C</span>
          <span>Produced in UAE</span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute -bottom-4 -left-12 bg-white rounded-xl shadow-xl border border-gray-100 px-4 py-2.5 transform -rotate-3"
      >
        <div className="text-[10px] font-semibold text-gray-700 mb-1.5">Traffic Light</div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1"><div className="w-3.5 h-3.5 rounded-full bg-green-500" /><span className="text-[9px] text-gray-500">Fat</span></div>
          <div className="flex items-center gap-1"><div className="w-3.5 h-3.5 rounded-full bg-amber-500" /><span className="text-[9px] text-gray-500">Sugar</span></div>
          <div className="flex items-center gap-1"><div className="w-3.5 h-3.5 rounded-full bg-green-500" /><span className="text-[9px] text-gray-500">Salt</span></div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="absolute -top-4 -right-8 bg-white rounded-lg shadow-xl border border-gray-100 px-3 py-2 transform rotate-3"
      >
        <div className="text-[9px] font-semibold text-primary">Auto-generated</div>
        <div className="text-[8px] text-gray-400">Barcode + QR Code</div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Global Hero: Labels collage ─── */
function GlobalHeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative hidden lg:block w-[530px] h-[540px]"
    >
      {/* Allergens card — top left */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute top-0 left-0 z-10"
      >
        <AllergensCard />
      </motion.div>

      {/* FDA Nutrition Facts — center, front layer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute top-[10px] left-[120px] z-30"
      >
        <HeroNutritionFacts />
      </motion.div>

      {/* Packaging Artwork — right, tilted to show more */}
      <motion.div
        initial={{ opacity: 0, x: 20, rotate: 5 }}
        animate={{ opacity: 1, x: 0, rotate: 5 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute top-[30px] right-[-30px] z-20"
      >
        <HeroPackagingArtwork />
      </motion.div>

      {/* Traffic Light label — bottom center */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: -1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-[10px] left-[60px] z-25"
      >
        <HeroTrafficLight />
      </motion.div>

      {/* Rotating flag badge — above the labels */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="absolute top-[40px] left-[-40px] z-40"
      >
        <RotatingFlagBadge />
      </motion.div>
    </motion.div>
  );
}

/* ─── Variant switcher ─── */
function HeroVisual({ variant }: { variant: "global" | "gcc" }) {
  return variant === "gcc" ? <GCCHeroVisual /> : <GlobalHeroVisual />;
}

export default function Hero({ content }: { content: HeroContent }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32 w-full">
        {/* Split layout: text left, visual right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              {content.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              {content.headlineBefore}
              <span className="gradient-text">{content.headlineHighlight}</span>
              {content.headlineAfter}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-text max-w-xl leading-relaxed"
            >
              {content.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl hover:shadow-2xl hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#product-demo"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-foreground border border-border rounded-xl hover:bg-surface hover:border-primary/30 transition-all"
              >
                <Play className="w-4 h-4" />
                See How It Works
              </a>
            </motion.div>
          </div>

          {/* Right: Floating visual */}
          <HeroVisual variant={content.variant} />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto lg:mx-0"
        >
          {content.stats.map((stat, i) => {
            const Icon = iconMap[stat.iconName];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="relative group p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                {Icon && <Icon className="w-5 h-5 text-primary mb-3" />}
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-text mt-1">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
