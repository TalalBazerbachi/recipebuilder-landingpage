import type { LandingPageContent } from "./landing-content";

export const gccContent: LandingPageContent = {
  hero: {
    badge: "TRUSTED BY CARREFOUR & MORE",
    headlineBefore: "From Recipe to ",
    headlineHighlight: "GCC-Compliant Label",
    headlineAfter: " — In Minutes, Not Weeks",
    subheadline:
      "Stop paying $500+ per product for lab testing. RecipeBuilder auto-generates bilingual nutrition labels, barcodes, QR codes, and packaging artwork — following GCC & SFDA labeling laws.",
    secondaryCta: { label: "Get a Sample Label", href: "mailto:info@bytebeam.co?subject=Sample Label Request - GCC" },
    socialProofLine: "Trusted by Carrefour, Ben's Farmhouse & food businesses across the GCC",
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
        iconName: "Globe",
        title: "Bilingual by Default",
        description: "Every label, ingredient list, and packaging artwork generated in both English and Arabic automatically.",
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
        title: "Bilingual Labels Following GCC Laws",
        description: "Auto-translate and localize food labels to Arabic following GCC and SFDA labeling requirements. One click generates bilingual packaging artwork.",
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
      { feature: "Cost", lab: "$500–$2,000 per product", spreadsheet: "Free but hours of labor", recipebuilder: "From $1 per recipe" },
      { feature: "Time to Label", lab: "2–4 weeks", spreadsheet: "Hours per product", recipebuilder: "Under 5 minutes" },
      { feature: "Accuracy", lab: "High (lab-tested)", spreadsheet: "Error-prone", recipebuilder: "High (20,000+ FDA ingredients)" },
      { feature: "GCC & SFDA Labeling", lab: "Manual review needed", spreadsheet: "Not built-in", recipebuilder: "Follows GCC & SFDA laws" },
      { feature: "Barcodes & QR Codes", lab: false, spreadsheet: false, recipebuilder: true },
      { feature: "Bilingual Labels", lab: "Manual translation", spreadsheet: "Manual translation", recipebuilder: "Auto English & Arabic" },
      { feature: "Cost Analysis", lab: false, spreadsheet: "Manual formulas", recipebuilder: "Built-in with profit margin" },
      { feature: "Packaging Artwork", lab: "Separate design needed", spreadsheet: false, recipebuilder: "Auto-generated, print-ready" },
    ],
  },

  pricing: {
    subtitle: "All plans include every feature. Pick the recipe volume that fits your business.",
    allFeatures: [
      { text: "GCC, SFDA & international label formats" },
      { text: "Nutrition analysis & label generation" },
      { text: "Bilingual English & Arabic labels" },
      { text: "Recipe costing & profit margins" },
      { text: "Packaging artwork generation" },
      { text: "Barcodes & QR codes" },
      { text: "Inventory management & cost tracking" },
    ],
    tiers: [
      {
        name: "Starter",
        monthlyPrice: 49,
        annualPrice: 29,
        recipes: "Up to 75 recipes",
        support: "Email support",
        cta: "Start Free Trial",
        ctaHref: "https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall",
      },
      {
        name: "Growth",
        badge: "Most Popular",
        monthlyPrice: 99,
        annualPrice: 69,
        recipes: "Up to 400 recipes",
        support: "Priority email & chat support",
        highlighted: true,
        cta: "Start Free Trial",
        ctaHref: "https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall",
      },
      {
        name: "Business",
        monthlyPrice: null,
        annualPrice: null,
        recipes: "Unlimited recipes",
        support: "Dedicated account manager & phone support",
        cta: "Contact Us",
        ctaHref: "https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall",
      },
    ],
  },

  testimonials: {
    headingBefore: "Trusted by Food Businesses ",
    headingHighlight: "Across the GCC",
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
        gradient: "from-teal-500 to-emerald-600",
      },
    ],
  },

  faq: {
    faqs: [
      {
        question: "Does RecipeBuilder follow UAE.S 9:2017 and UAE.S 192:2019 labeling standards?",
        answer: "Yes. RecipeBuilder's GCC label format follows UAE.S 9:2017 (pre-packaged food labeling) and UAE.S 192:2019 (nutrition label format) requirements administered by Emirates Authority for Standardization and Metrology (ESMA) and enforced by Dubai Municipality. This includes the mandatory bilingual Arabic-English ingredient declaration in descending order by weight, allergen declaration in bold per GSO 9/2013, nutrition facts per 100g AND per serving, production and expiry dates in DD/MM/YYYY format, and country of origin. Labels also follow GSO standards adopted across the wider GCC.",
      },
      {
        question: "Are RecipeBuilder labels accepted by Dubai Municipality Montaji food registration?",
        answer: "Over 5,000 labels created with RecipeBuilder have been approved through Dubai Municipality's review process. The platform produces the documentation Montaji portal review requires: bilingual nutrition tables, ingredient list ordered by weight, allergen declarations, manufacturer and country-of-origin information, and net weight in both metric and Arabic numerals. We do not submit on your behalf — you upload RecipeBuilder's PDF output to your Montaji submission.",
      },
      {
        question: "How does RecipeBuilder handle Saudi SFDA Technical Regulation requirements?",
        answer: "RecipeBuilder's SFDA preset implements the technical regulations for nutrition labeling on pre-packaged food in Saudi Arabia, including the per-100g format required for the Saudi market, the mandatory Arabic ingredient declaration, sugar tax-eligible product flagging, and the front-of-pack traffic light label that became mandatory for select beverage categories. Products requiring SFDA registration still need to go through SFDA's eService portal separately — RecipeBuilder supplies the compliant label artwork your dossier needs.",
      },
      {
        question: "What about Arabic translation accuracy? Do I need a sworn translator?",
        answer: "RecipeBuilder's Arabic translation uses a curated food-industry glossary maintained by ByteBeam — not generic machine translation. Ingredient terms are matched against a verified Arabic ingredient name database, and allergen terms follow Dubai Municipality's standard Arabic spellings. You can still override any auto-translation manually. For products requiring sworn-translator certification (rare for retail labels — mostly for medical or infant products), you export the label as editable PDF for downstream translation review.",
      },
      {
        question: "Is the Smart Food Choices (Green/Yellow/Red/Black) classification supported?",
        answer: "Yes. For school catering products and items sold in Dubai school canteens, RecipeBuilder automatically classifies each recipe against Dubai Municipality's Smart Food Choices nutrient thresholds and assigns the Green, Yellow, Red, or Black category. The platform also flags which specific nutrient (saturated fat, sugar, sodium, total fat) is driving a non-Green classification so you can target reformulation. See our /school-catering-dubai page for the school-specific feature set.",
      },
      {
        question: "Can RecipeBuilder generate labels for the GCC sugar tax (excise tax)?",
        answer: "RecipeBuilder calculates total sugar per 100ml and per serving for beverages, flags products that fall into UAE/Saudi/Bahrain/Oman/Qatar excise tax categories (sweetened beverages, energy drinks, carbonated drinks), and includes excise tax declaration fields on the label when required. For tax reporting itself, RecipeBuilder exports the underlying sugar/serving data — final tax filings happen in your national excise system (e.g. UAE Federal Tax Authority).",
      },
      {
        question: "Which GCC countries' regulations does RecipeBuilder cover?",
        answer: "Full label-generation support is currently provided for the UAE (UAE.S/Dubai Municipality), Saudi Arabia (SFDA), Bahrain, Kuwait, Oman, and Qatar — i.e. all six GCC member states under the GCC Standardization Organization (GSO) umbrella. Cross-border product labels can be generated in a single bilingual format that satisfies the harmonized GSO baseline, with country-specific overlays (excise tax categories, language-of-instruction order, FOPNL adoption status) configurable per SKU.",
      },
      {
        question: "How much does RecipeBuilder cost for GCC food businesses?",
        answer: "RecipeBuilder starts at $29/month billed annually ($49/month billed monthly) on the Starter plan — up to 75 recipes, unlimited bilingual English-Arabic label generation, GCC/SFDA compliance, barcodes, and QR codes included. The Growth plan is $69/month annually ($99 monthly) for up to 400 recipes with priority support. Business plans with unlimited recipes and dedicated account management are custom-quoted. Most GCC caterers pay back the subscription on a single Dubai Municipality-approved label vs. the $500–$2,000 per-product cost of lab testing.",
      },
    ],
  },

  footer: {
    description: "The complete recipe management and food labeling platform for GCC food businesses. A product by ByteBeam.",
  },
};
