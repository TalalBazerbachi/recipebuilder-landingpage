/* ─── Content type interfaces for landing page components ─── */

export interface HeroStat {
  iconName: string;
  value: string;
  label: string;
}

export interface HeroContent {
  badge: string;
  headlineBefore: string;
  headlineHighlight: string;
  headlineAfter: string;
  subheadline: string;
  stats: HeroStat[];
  variant: "global" | "gcc";
}

export interface TrustPillarItem {
  iconName: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

export interface TrustPillarsContent {
  subtitle: string;
  pillars: TrustPillarItem[];
}

export interface FeatureItem {
  iconName: string;
  title: string;
  description: string;
  gradient: string;
  span: string;
}

export interface FeaturesContent {
  subtitle: string;
  features: FeatureItem[];
}

export interface HowItWorksStep {
  number: string;
  iconName: string;
  title: string;
  description: string;
}

export interface HowItWorksContent {
  steps: HowItWorksStep[];
}

export interface ProductDemoStep {
  id: number;
  iconName: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface ProductDemoContent {
  subtitle: string;
  steps: ProductDemoStep[];
  variant: "global" | "gcc";
}

export interface ComparisonRow {
  feature: string;
  lab: string | boolean;
  spreadsheet: string | boolean;
  recipebuilder: string | boolean;
}

export interface ComparisonContent {
  rows: ComparisonRow[];
}

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  gradient: string;
}

export interface TestimonialsContent {
  headingBefore: string;
  headingHighlight: string;
  testimonials: TestimonialItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  faqs: FAQItem[];
}

export interface FooterContent {
  description: string;
}

export interface LandingPageContent {
  hero: HeroContent;
  trustPillars: TrustPillarsContent;
  features: FeaturesContent;
  howItWorks: HowItWorksContent;
  productDemo: ProductDemoContent;
  comparison: ComparisonContent;
  testimonials: TestimonialsContent;
  faq: FAQContent;
  footer: FooterContent;
}
