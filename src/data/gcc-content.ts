import type { LandingPageContent } from "./landing-content";

export const gccContent: LandingPageContent = {
  hero: {
    badge: "LABELS FOLLOWING GCC & SFDA LAWS",
    headlineBefore: "Recipe Management & ",
    headlineHighlight: "Food Labeling",
    headlineAfter: " for GCC Food Businesses",
    subheadline:
      "Build recipes, auto-generate nutrition labels with barcodes & QR codes, track costs and inventory — with labels that follow GCC & SFDA food labeling laws.",
    stats: [
      { iconName: "FileCheck", value: "5,000+", label: "Labels Approved by Dubai Municipality" },
      { iconName: "Database", value: "20,000+", label: "FDA-Sourced Ingredients" },
      { iconName: "ShieldCheck", value: "GCC & SFDA", label: "Follows Labeling Laws" },
      { iconName: "Languages", value: "Bilingual", label: "English & Arabic Labels" },
    ],
    variant: "gcc",
  },

  trustPillars: {
    subtitle: "The team behind 5,000+ food labels approved by Dubai Municipality.",
    pillars: [
      {
        iconName: "MapPin",
        title: "Built for the GCC",
        description: "Designed from day one for food businesses in the UAE, Saudi Arabia, and the wider Gulf region.",
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
        iconName: "Globe",
        title: "Bilingual by Default",
        description: "Every label, ingredient list, and packaging artwork generated in both English and Arabic automatically.",
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
        title: "Hands-On Support",
        description: "Dedicated onboarding and support from a team that understands GCC food regulations.",
        iconBg: "bg-cyan-500/10",
        iconColor: "text-cyan-500",
      },
    ],
  },

  features: {
    subtitle: "From recipe creation to food labeling that follows GCC & SFDA laws, RecipeBuilder handles every step.",
    features: [
      {
        iconName: "FileText",
        title: "Auto-Generate Food Labels",
        description: "Create professional packaging artwork with nutrition facts, ingredients in English & Arabic, storage instructions, and allergen disclaimers — all generated automatically from your recipes.",
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
        title: "Bilingual Labels Following GCC Laws",
        description: "Auto-translate and localize food labels to Arabic following GCC and SFDA labeling requirements. One click generates bilingual packaging artwork.",
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
        description: "Nutrition facts, packaging artwork, barcodes, and QR codes are generated automatically. Labels include bilingual English & Arabic text.",
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
    subtitle: "Scroll through each step — from creating a recipe to generating a print-ready bilingual food label.",
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
        description: "A complete bilingual packaging label is generated with English & Arabic text, nutrition facts, barcode, QR code, allergen declarations, and storage instructions.",
        bullets: ["Bilingual English & Arabic labels", "Auto-generated barcode & QR code", "Allergen declarations & storage info"],
      },
    ],
    variant: "gcc",
  },

  comparison: {
    rows: [
      { feature: "Speed", lab: "Weeks per product", spreadsheet: "Hours of manual work", recipebuilder: "Minutes — fully automated" },
      { feature: "Accuracy", lab: "High (lab-tested)", spreadsheet: "Error-prone", recipebuilder: "High (20,000+ FDA ingredients)" },
      { feature: "GCC & SFDA Labeling", lab: "Manual review needed", spreadsheet: "Not built-in", recipebuilder: "Follows GCC & SFDA laws" },
      { feature: "Barcodes & QR Codes", lab: false, spreadsheet: false, recipebuilder: true },
      { feature: "Bilingual Labels", lab: "Manual translation", spreadsheet: "Manual translation", recipebuilder: "Auto English & Arabic" },
      { feature: "Cost Analysis", lab: false, spreadsheet: "Manual formulas", recipebuilder: "Built-in with profit margin" },
      { feature: "Stock Tracking", lab: false, spreadsheet: "Manual updates", recipebuilder: "Real-time portions" },
      { feature: "Packaging Artwork", lab: "Separate design needed", spreadsheet: false, recipebuilder: "Auto-generated, print-ready" },
    ],
  },

  testimonials: {
    headingBefore: "Trusted by Food Businesses ",
    headingHighlight: "Across the GCC",
    testimonials: [
      {
        quote: "RecipeBuilder transformed how we handle food labeling. What used to take weeks now takes minutes. The bilingual labels are perfect for our GCC market.",
        name: "Sarah A.",
        title: "Operations Manager",
        company: "Gulf Fresh Foods",
        initials: "SA",
        gradient: "from-blue-500 to-blue-600",
      },
      {
        quote: "The USDA database integration is incredibly accurate. We've processed hundreds of products and every label passed Dubai Municipality review on the first submission.",
        name: "Mohammed H.",
        title: "Quality Assurance Director",
        company: "Artisan Bakery Co.",
        initials: "MH",
        gradient: "from-emerald-500 to-emerald-600",
      },
      {
        quote: "As a meal prep company, we need nutrition accuracy. RecipeBuilder's automated labeling and cost tracking has saved us countless hours every week.",
        name: "Fatima Z.",
        title: "Founder & CEO",
        company: "NutriPlate Meals",
        initials: "FZ",
        gradient: "from-sky-500 to-blue-600",
      },
    ],
  },

  faq: {
    faqs: [
      {
        question: "What is RecipeBuilder?",
        answer: "RecipeBuilder is a cloud-based recipe management and food labeling platform designed for food businesses in the GCC region. It lets you create recipes, auto-generate nutrition labels, barcodes, QR codes, and packaging artwork — with labels that follow GCC and SFDA labeling laws.",
      },
      {
        question: "How does the nutrition analysis work?",
        answer: "RecipeBuilder uses the full USDA FoodData Central database to calculate nutrition facts. When you add ingredients to a recipe, the system automatically computes calories, macronutrients (protein, carbs, fat), micronutrients (vitamins, minerals), and generates FDA-style nutrition facts labels and traffic light labels.",
      },
      {
        question: "Does RecipeBuilder follow GCC food labeling laws?",
        answer: "Yes. RecipeBuilder helps you generate food labels that follow GCC and SFDA labeling requirements, including bilingual English and Arabic ingredient lists, proper nutrition fact formatting, allergen declarations, and storage instructions. Labels are auto-formatted according to regional labeling standards.",
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
        question: "Can I track recipe inventory and stock?",
        answer: "Yes. RecipeBuilder includes real-time stock tracking with quick update controls. You can increment or decrement portion counts with one click, set stock levels, and see the last update timestamp. This helps you manage production schedules and avoid stockouts.",
      },
      {
        question: "Do you support Arabic food labels?",
        answer: "RecipeBuilder auto-translates ingredient lists to Arabic and generates bilingual packaging artwork with both English and Arabic text. You can refresh the Arabic translation anytime and download labels as PNG or PDF for print-ready packaging.",
      },
      {
        question: "How much does RecipeBuilder cost?",
        answer: "RecipeBuilder offers flexible plans for businesses of all sizes. Contact our sales team for a personalized quote based on your recipe volume, team size, and feature requirements. Book a demo to see the platform in action and discuss pricing.",
      },
    ],
  },

  footer: {
    description: "The complete recipe management and food labeling platform for GCC food businesses. A product by ByteBeam.",
  },
};
