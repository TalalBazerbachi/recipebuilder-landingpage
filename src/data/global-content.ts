import type { LandingPageContent } from "./landing-content";

export const globalContent: LandingPageContent = {
  hero: {
    badge: "TRUSTED BY CARREFOUR & MORE",
    headlineBefore: "From Recipe to ",
    headlineHighlight: "Retail-Ready Label",
    headlineAfter: " — In Minutes, Not Weeks",
    subheadline:
      "Stop paying $500+ per product for lab testing. RecipeBuilder auto-generates compliant nutrition labels, barcodes, QR codes, and packaging artwork from your recipes — for FDA, EU, GCC, and 10+ regulatory frameworks.",
    secondaryCta: { label: "Get a Sample Label", href: "mailto:info@bytebeam.co?subject=Sample Label Request" },
    socialProofLine: "Trusted by Carrefour, Ben's Farmhouse & food businesses worldwide",
    stats: [
      { iconName: "FileCheck", value: "20,000+", label: "FDA-Sourced Ingredients" },
      { iconName: "Globe", value: "Minutes", label: "vs. Weeks with Lab Testing" },
      { iconName: "ShieldCheck", value: "FDA, EU & GCC", label: "Compliant Label Formats" },
      { iconName: "Languages", value: "40+", label: "Supported Languages" },
    ],
    variant: "global",
  },

  trustPillars: {
    subtitle: "Trusted by food businesses worldwide to generate compliant nutrition labels.",
    pillars: [
      {
        iconName: "Globe",
        title: "Global Compliance",
        description: "Support for FDA, EU, GCC, and other regional labeling requirements. One platform, multiple regulatory frameworks.",
        iconBg: "bg-teal-600/10",
        iconColor: "text-teal-600",
      },
      {
        iconName: "BadgeCheck",
        title: "Accurate & FDA-Sourced",
        description: "20,000+ ingredients from the USDA FoodData Central database. Every calculation backed by verified data.",
        iconBg: "bg-emerald-500/10",
        iconColor: "text-emerald-500",
      },
      {
        iconName: "Languages",
        title: "Multi-Language Support",
        description: "Generate food labels in 40+ languages. Translate ingredient lists, allergen declarations, and packaging artwork automatically.",
        iconBg: "bg-emerald-600/10",
        iconColor: "text-emerald-600",
      },
      {
        iconName: "Zap",
        title: "Fast & Automated",
        description: "Generate nutrition labels, barcodes, QR codes, and packaging artwork in minutes — not weeks.",
        iconBg: "bg-amber-500/10",
        iconColor: "text-amber-500",
      },
      {
        iconName: "ShieldCheck",
        title: "Secure Cloud Platform",
        description: "Recipes, formulations, and business data encrypted and stored with enterprise-grade security.",
        iconBg: "bg-rose-500/10",
        iconColor: "text-rose-500",
      },
      {
        iconName: "Headset",
        title: "Dedicated Support",
        description: "Hands-on onboarding and responsive support from a team that understands food labeling regulations.",
        iconBg: "bg-cyan-500/10",
        iconColor: "text-cyan-500",
      },
    ],
  },

  features: {
    subtitle: "From recipe creation to compliant food labeling, RecipeBuilder handles every step.",
    features: [
      {
        iconName: "FileText",
        title: "Auto-Generate Food Labels",
        description: "Create professional packaging artwork with nutrition facts, ingredients, storage instructions, and allergen disclaimers — all generated automatically from your recipes.",
        gradient: "from-emerald-500 to-teal-600",
        span: "md:col-span-2",
      },
      {
        iconName: "Barcode",
        title: "Barcode Generation",
        description: "Every recipe gets a unique barcode for product identification, retail tracking, and point-of-sale integration. Print-ready barcodes included on your packaging.",
        gradient: "from-emerald-500 to-teal-600",
        span: "",
      },
      {
        iconName: "QrCode",
        title: "QR Code Nutrition Facts",
        description: "Generate scannable QR codes that link to a live nutrition facts page. Customers scan to view detailed nutritional information instantly.",
        gradient: "from-teal-500 to-cyan-600",
        span: "",
      },
      {
        iconName: "Database",
        title: "20,000+ FDA-Sourced Ingredients",
        description: "Search the USDA FoodData Central database with complete nutritional profiles. No manual data entry — just search and add.",
        gradient: "from-amber-500 to-orange-600",
        span: "md:col-span-2",
      },
      {
        iconName: "Languages",
        title: "Multi-Language Compliant Labels",
        description: "Auto-translate and localize food labels to 40+ languages. Generate multi-language packaging artwork that meets regional labeling requirements.",
        gradient: "from-rose-500 to-pink-600",
        span: "",
      },
      {
        iconName: "Package",
        title: "Stock & Inventory Tracking",
        description: "Track portion counts in real-time with quick stock updates. Know exactly how much of each recipe is available and manage your production schedule.",
        gradient: "from-cyan-500 to-teal-600",
        span: "",
      },
    ],
  },

  howItWorks: {
    steps: [
      {
        number: "01",
        iconName: "ClipboardList",
        title: "Create Your Recipe",
        description: "Add ingredients from the USDA database, set quantities and units, define preparation methods, calculate costs, and upload cover photos.",
      },
      {
        number: "02",
        iconName: "Wand2",
        title: "Auto-Generate Labels",
        description: "Nutrition facts, packaging artwork, barcodes, and QR codes are generated automatically. Labels support multi-language translation.",
      },
      {
        number: "03",
        iconName: "Download",
        title: "Export & Manage",
        description: "Download labels as PNG or PDF. Track inventory with real-time stock counts, monitor ingredient costs and profit margins.",
      },
    ],
  },

  productDemo: {
    subtitle: "Scroll through each step — from creating a recipe to generating a print-ready compliant food label.",
    steps: [
      {
        id: 0,
        iconName: "ClipboardList",
        title: "Create Your Recipe",
        description: "Start by entering your recipe details — name, category, yield, and serving size. Organize recipes into categories and sub-categories for easy management.",
        bullets: ["Recipe name, category, and photo upload", "Set yield and serving size", "Define preparation instructions"],
      },
      {
        id: 1,
        iconName: "Search",
        title: "Add Ingredients from USDA",
        description: "Search over 20,000 FDA-sourced ingredients from the USDA FoodData Central database. Select an ingredient, set the quantity, and it's added to your recipe instantly.",
        bullets: ["Search 20,000+ verified ingredients", "Complete nutritional profiles per ingredient", "Set custom quantities and units"],
      },
      {
        id: 2,
        iconName: "BarChart3",
        title: "Nutrition Data Updates Live",
        description: "As you add ingredients, per-serving nutrition data updates in real time. See calories, macros, micros, and traffic light indicators — all calculated automatically.",
        bullets: ["Real-time per-serving calculations", "Traffic light labels (green/amber/red)", "Full macro & micronutrient breakdown"],
      },
      {
        id: 3,
        iconName: "FileText",
        title: "Nutrition Label Generated",
        description: "An FDA-style Nutrition Facts panel is auto-generated with accurate per-serving values, % Daily Values, and proper formatting — ready for your food packaging.",
        bullets: ["FDA-standard nutrition facts format", "Per-serving and per-container values", "% Daily Value calculations"],
      },
      {
        id: 4,
        iconName: "Package",
        title: "Packaging Artwork Ready",
        description: "A complete packaging label is generated with nutrition facts, barcode, QR code, allergen declarations, and storage instructions — with multi-language support.",
        bullets: ["Multi-language label support", "Auto-generated barcode & QR code", "Allergen declarations & storage info"],
      },
    ],
    variant: "global",
  },

  comparison: {
    rows: [
      { feature: "Cost", lab: "$500–$2,000 per product", spreadsheet: "Free but hours of labor", recipebuilder: "From $1 per recipe" },
      { feature: "Time to Label", lab: "2–4 weeks", spreadsheet: "Hours per product", recipebuilder: "Under 5 minutes" },
      { feature: "Accuracy", lab: "High (lab-tested)", spreadsheet: "Error-prone", recipebuilder: "High (20,000+ FDA ingredients)" },
      { feature: "Regulatory Compliance", lab: "Manual review needed", spreadsheet: "Not built-in", recipebuilder: "FDA, EU, GCC & more" },
      { feature: "Barcodes & QR Codes", lab: false, spreadsheet: false, recipebuilder: true },
      { feature: "Multi-Language Labels", lab: "Manual translation", spreadsheet: "Manual translation", recipebuilder: "Auto translation (40+ languages)" },
      { feature: "Cost Analysis", lab: false, spreadsheet: "Manual formulas", recipebuilder: "Built-in with profit margin" },
      { feature: "Packaging Artwork", lab: "Separate design needed", spreadsheet: false, recipebuilder: "Auto-generated, print-ready" },
    ],
  },

  pricing: {
    anchorLabel: "Traditional Lab Testing",
    anchorPrice: "$500 – $2,000",
    anchorPains: [
      "Per product, every time",
      "2–4 weeks turnaround",
      "No label generation included",
      "Separate design costs",
    ],
    mainPrice: "$1,500",
    mainPriceSub: "for your first 1,500 recipes",
    mainAfterThat: "Then just $1.50 per additional recipe",
    effectiveCost: "That's as low as $1 per recipe",
    features: [
      { text: "Unlimited label generation" },
      { text: "All regulatory formats (FDA, EU, GCC & more)" },
      { text: "Barcodes & QR codes included" },
      { text: "Multi-language support (40+ languages)" },
      { text: "Packaging artwork generation" },
      { text: "Cost tracking & inventory management" },
    ],
    riskReversal: "Includes dedicated onboarding & hands-on support",
  },

  testimonials: {
    headingBefore: "Trusted by Food Businesses ",
    headingHighlight: "Around the World",
    testimonials: [
      {
        quote: "Working with ByteBeam has been an exceptional experience. Their agile and well-organised team helped us transform a time-consuming, manual process into a smart, efficient workflow — saving both time and costs while ensuring quality and compliance.",
        name: "CFO",
        title: "Chief Financial Officer",
        company: "Takhlees Compliance Services",
        initials: "TC",
        gradient: "from-emerald-500 to-teal-600",
      },
      {
        quote: "The USDA database integration is incredibly accurate. We've processed hundreds of products and every label passed FDA review on the first submission.",
        name: "David R.",
        title: "Quality Assurance Manager",
        company: "Pacific Foods Inc.",
        initials: "DR",
        gradient: "from-emerald-500 to-emerald-600",
      },
      {
        quote: "As a meal prep company, we need nutrition accuracy. RecipeBuilder's automated labeling and cost tracking has saved us countless hours every week.",
        name: "Maria L.",
        title: "Founder & CEO",
        company: "FreshPlate Meals",
        initials: "ML",
        gradient: "from-teal-500 to-emerald-600",
      },
    ],
  },

  faq: {
    faqs: [
      {
        question: "How is RecipeBuilder different from lab testing?",
        answer: "Lab testing costs $500–$2,000 per product and takes 2–4 weeks. RecipeBuilder generates compliant nutrition labels in minutes using the USDA FoodData Central database with 20,000+ verified ingredients. You get FDA-style labels, packaging artwork, barcodes, and QR codes — all from one platform, for a fraction of the cost.",
      },
      {
        question: "How long does it take to generate my first label?",
        answer: "Minutes. Create your recipe, add ingredients from the USDA database, and RecipeBuilder auto-generates your nutrition label, packaging artwork, barcode, and QR code instantly. Most users have their first label ready within 10 minutes of signing up.",
      },
      {
        question: "Is the nutrition data accurate enough for regulatory compliance?",
        answer: "Yes. RecipeBuilder uses the full USDA FoodData Central database — the same data source used by food labs. Every calculation is based on verified nutritional profiles. Labels are auto-formatted to meet FDA, EU, GCC/SFDA, and other regional standards with proper % Daily Values, allergen declarations, and required disclaimers.",
      },
      {
        question: "What regulatory frameworks does RecipeBuilder support?",
        answer: "RecipeBuilder supports FDA (US), EU, GCC/SFDA, and other regional labeling standards. Labels are auto-formatted according to the selected regulatory framework, with proper nutrition fact formatting, allergen declarations, and required disclaimers.",
      },
      {
        question: "Can I generate barcodes and QR codes for my products?",
        answer: "Every recipe in RecipeBuilder gets a unique barcode for product identification and point-of-sale integration. You also get a QR code that links to a live nutrition facts page — customers can scan it to view detailed nutritional information.",
      },
      {
        question: "What languages are supported for food labels?",
        answer: "RecipeBuilder supports 40+ languages for food label translation. Ingredient lists, allergen declarations, and packaging artwork can be auto-translated and formatted for your target market. Download labels as PNG or PDF for print-ready packaging.",
      },
      {
        question: "How much does RecipeBuilder cost?",
        answer: "RecipeBuilder starts at $1,500 for your first 1,500 recipes — that's as low as $1 per recipe. After that, additional recipes are $1.50 each. Compare that to $500–$2,000 per product for traditional lab testing. Book a demo to see the platform in action and get a personalized walkthrough.",
      },
      {
        question: "Can I track recipe costs and inventory?",
        answer: "Yes. RecipeBuilder includes built-in cost tracking with profit margin calculations and real-time stock tracking. You can monitor ingredient costs, track portion counts, and manage production schedules — all from the same platform where you create your labels.",
      },
    ],
  },

  footer: {
    description: "The complete recipe management and food labeling platform for food businesses worldwide. A product by ByteBeam.",
  },
};
