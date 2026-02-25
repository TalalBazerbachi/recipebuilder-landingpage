import type { LandingPageContent } from "./landing-content";

export const globalContent: LandingPageContent = {
  hero: {
    badge: "MULTI-REGULATORY FOOD LABELING PLATFORM",
    headlineBefore: "Recipe Management & ",
    headlineHighlight: "Food Labeling",
    headlineAfter: " for Food Businesses",
    subheadline:
      "Build recipes, auto-generate nutrition labels with barcodes & QR codes, track costs and inventory — with labels that comply with FDA, EU, GCC, and other regulatory frameworks.",
    stats: [
      { iconName: "FileCheck", value: "20,000+", label: "FDA-Sourced Ingredients" },
      { iconName: "Globe", value: "10+", label: "Regulatory Frameworks Supported" },
      { iconName: "ShieldCheck", value: "FDA & EU", label: "Compliant Label Formats" },
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
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-500",
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
        iconBg: "bg-indigo-500/10",
        iconColor: "text-indigo-500",
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
        gradient: "from-blue-500 to-blue-600",
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
        gradient: "from-sky-500 to-indigo-600",
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
        gradient: "from-cyan-500 to-blue-600",
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
      { feature: "Speed", lab: "Weeks per product", spreadsheet: "Hours of manual work", recipebuilder: "Minutes — fully automated" },
      { feature: "Accuracy", lab: "High (lab-tested)", spreadsheet: "Error-prone", recipebuilder: "High (20,000+ FDA ingredients)" },
      { feature: "Regulatory Compliance", lab: "Manual review needed", spreadsheet: "Not built-in", recipebuilder: "FDA, EU, GCC & more" },
      { feature: "Barcodes & QR Codes", lab: false, spreadsheet: false, recipebuilder: true },
      { feature: "Multi-Language Labels", lab: "Manual translation", spreadsheet: "Manual translation", recipebuilder: "Auto translation (40+ languages)" },
      { feature: "Cost Analysis", lab: false, spreadsheet: "Manual formulas", recipebuilder: "Built-in with profit margin" },
      { feature: "Stock Tracking", lab: false, spreadsheet: "Manual updates", recipebuilder: "Real-time portions" },
      { feature: "Packaging Artwork", lab: "Separate design needed", spreadsheet: false, recipebuilder: "Auto-generated, print-ready" },
    ],
  },

  testimonials: {
    headingBefore: "Trusted by Food Businesses ",
    headingHighlight: "Around the World",
    testimonials: [
      {
        quote: "RecipeBuilder transformed how we handle food labeling. What used to take weeks now takes minutes. The FDA-compliant labels are exactly what we needed.",
        name: "Jessica M.",
        title: "Operations Director",
        company: "Sunrise Bakery Co.",
        initials: "JM",
        gradient: "from-blue-500 to-blue-600",
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
        gradient: "from-sky-500 to-blue-600",
      },
    ],
  },

  faq: {
    faqs: [
      {
        question: "What is RecipeBuilder?",
        answer: "RecipeBuilder is a cloud-based recipe management and food labeling platform for food businesses worldwide. It lets you create recipes, auto-generate nutrition labels, barcodes, QR codes, and packaging artwork — with support for FDA, EU, GCC, and other regulatory frameworks.",
      },
      {
        question: "How does the nutrition analysis work?",
        answer: "RecipeBuilder uses the full USDA FoodData Central database to calculate nutrition facts. When you add ingredients to a recipe, the system automatically computes calories, macronutrients (protein, carbs, fat), micronutrients (vitamins, minerals), and generates FDA-style nutrition facts labels and traffic light labels.",
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
        question: "What ingredients database do you use?",
        answer: "RecipeBuilder gives you access to over 20,000 ingredients sourced from the USDA FoodData Central database, each with complete nutritional profiles. You can also create custom ingredients with your own nutrient data if needed.",
      },
      {
        question: "What languages are supported for food labels?",
        answer: "RecipeBuilder supports 40+ languages for food label translation. Ingredient lists, allergen declarations, and packaging artwork can be auto-translated and formatted for your target market. Download labels as PNG or PDF for print-ready packaging.",
      },
      {
        question: "Can I track recipe inventory and stock?",
        answer: "Yes. RecipeBuilder includes real-time stock tracking with quick update controls. You can increment or decrement portion counts with one click, set stock levels, and see the last update timestamp. This helps you manage production schedules and avoid stockouts.",
      },
      {
        question: "How much does RecipeBuilder cost?",
        answer: "RecipeBuilder offers flexible plans for businesses of all sizes. Contact our sales team for a personalized quote based on your recipe volume, team size, and feature requirements. Book a demo to see the platform in action and discuss pricing.",
      },
    ],
  },

  footer: {
    description: "The complete recipe management and food labeling platform for food businesses worldwide. A product by ByteBeam.",
  },
};
