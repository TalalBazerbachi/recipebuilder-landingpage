import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterCapture from "@/components/NewsletterCapture";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, Clock, ArrowLeft, ArrowRight, ChefHat } from "lucide-react";

function splitAtSecondH2(html: string): [string, string] {
  let count = 0;
  let splitIndex = -1;
  const pattern = /<\/h2>/gi;
  let match;
  while ((match = pattern.exec(html)) !== null) {
    count++;
    if (count === 2) {
      splitIndex = match.index + match[0].length;
      break;
    }
  }
  if (splitIndex === -1) return [html, ""];
  return [html.slice(0, splitIndex), html.slice(splitIndex)];
}

/**
 * Slugify an H2 heading into a URL-safe anchor id.
 * Mirrors what we inject into the rendered HTML in `addH2Anchors`.
 */
function h2Slug(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/**
 * Extract all H2 headings from the post HTML so we can render an
 * Affinda-style Table of Contents at the top with anchor links.
 * Filters out the FAQ section since that has its own visual treatment.
 */
function extractH2Headings(html: string): { id: string; text: string }[] {
  const h2Regex = /<h2>([\s\S]*?)<\/h2>/g;
  const headings: { id: string; text: string }[] = [];
  let match;
  while ((match = h2Regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]*>/g, "").trim();
    if (!text) continue;
    // Skip auto-injected sections so the TOC stays focused on the article.
    if (/frequently asked questions/i.test(text)) continue;
    if (/related resources/i.test(text)) continue;
    if (/conclusion/i.test(text) && headings.length === 0) continue;
    headings.push({ id: h2Slug(text), text });
  }
  return headings;
}

/**
 * Inject `id="..."` anchors into every H2 so the TOC links resolve to
 * scroll positions in the rendered article.
 */
function addH2Anchors(html: string): string {
  return html.replace(/<h2>([\s\S]*?)<\/h2>/g, (full, inner) => {
    const text = inner.replace(/<[^>]*>/g, "").trim();
    if (!text) return full;
    return `<h2 id="${h2Slug(text)}">${inner}</h2>`;
  });
}

function extractFaqs(html: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const faqSectionMatch = html.match(
    /<h2>Frequently Asked Questions<\/h2>([\s\S]*?)(?=<h2>|$)/
  );
  if (!faqSectionMatch) return faqs;
  const section = faqSectionMatch[1];
  const qRegex = /<h3>(.*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g;
  let match;
  while ((match = qRegex.exec(section)) !== null) {
    faqs.push({
      question: match[1].replace(/<[^>]*>/g, "").trim(),
      answer: match[2].replace(/<[^>]*>/g, "").trim(),
    });
  }
  return faqs;
}

/**
 * Detect numbered-step posts (H3s with leading numbers like "1. ", "Step 1",
 * "01.") so we can emit HowTo schema for them. Returns the parsed steps or null.
 */
function extractHowToSteps(
  html: string
): { name: string; text: string }[] | null {
  const stepRegex = /<h3>\s*(?:Step\s+)?(\d{1,2})[.):]?\s+([^<]+?)<\/h3>\s*([\s\S]*?)(?=<h[23]>|$)/g;
  const steps: { name: string; text: string }[] = [];
  let match;
  while ((match = stepRegex.exec(html)) !== null) {
    const text = match[3]
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (text.length > 40 && text.length < 800) {
      steps.push({
        name: match[2].trim(),
        text,
      });
    }
  }
  return steps.length >= 3 ? steps : null;
}

/**
 * Detect listicle posts (e.g. "5 Best ... Alternatives") by H2/H3 numbering
 * patterns. Returns an ItemList of the top-ranked entries.
 */
function extractListiclePicks(
  html: string,
  baseUrl: string
): { name: string; url?: string }[] | null {
  // Match H2s that begin with a number (e.g. "1. RecipeBuilder", "2. ReciPal")
  const pickRegex = /<h2>\s*(\d{1,2})[.):]?\s+([^<]+?)<\/h2>/g;
  const picks: { name: string; url?: string }[] = [];
  let match;
  while ((match = pickRegex.exec(html)) !== null) {
    picks.push({
      name: match[2].trim(),
      url: baseUrl,
    });
  }
  return picks.length >= 3 ? picks : null;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  // Title: keep blog post's own title intact (no brand suffix bloat).
  // Brand appears in site name, OG site_name, and SERP domain rendering.
  const title =
    post.title.length <= 60
      ? `${post.title} | RecipeBuilder`
      : post.title;

  return {
    title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedDate ?? post.date,
      authors: post.author ? [post.author.name] : ["RecipeBuilder Editorial Team"],
      tags: post.keywords,
      siteName: "RecipeBuilder",
      url: `https://www.recipebuilder.co/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://www.recipebuilder.co/blog/${post.slug}`,
    },
  };
}

const categoryColors: Record<string, string> = {
  Compliance: "bg-red-50 text-red-700",
  Regulation: "bg-amber-50 text-amber-700",
  Industry: "bg-blue-50 text-blue-700",
  Labeling: "bg-green-50 text-green-700",
  Technology: "bg-purple-50 text-purple-700",
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Score-based related posts: prefer same-category + keyword overlap,
  // tie-broken by recency. Replaces date-only sort which gave every
  // post the same 3 "newest posts" as related.
  const related = [...blogPosts]
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const categoryScore = p.category === post.category ? 5 : 0;
      const keywordOverlap = p.keywords.filter((k) =>
        post.keywords.includes(k)
      ).length;
      // Cluster-aware slug similarity: shared 2-token prefix bonus.
      const slugTokens = post.slug.split("-").slice(0, 2).join("-");
      const slugBonus = slugTokens && p.slug.startsWith(slugTokens) ? 3 : 0;
      const recencyTiebreaker = new Date(p.date).getTime() / 1e12;
      return {
        post: p,
        score:
          categoryScore +
          keywordOverlap * 2 +
          slugBonus +
          recencyTiebreaker,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => x.post);

  const faqs = extractFaqs(post.content);
  const anchoredContent = addH2Anchors(post.content);
  const [contentBefore, contentAfter] = splitAtSecondH2(anchoredContent);
  const tocHeadings = extractH2Headings(post.content);
  const showToc = tocHeadings.length >= 3; // Only show TOC for substantive posts
  const modifiedDate = post.updatedDate ?? post.date;
  const wasUpdated = post.updatedDate && post.updatedDate !== post.date;
  const author = post.author ?? {
    name: "RecipeBuilder Editorial Team",
    role: "Food Compliance & Recipe Management",
    url: "https://www.recipebuilder.co/about",
  };

  // Heuristic schema detection
  const howToSteps = extractHowToSteps(post.content);
  const postUrl = `https://www.recipebuilder.co/blog/${post.slug}`;
  const listiclePicks = /best|alternatives|alternative/i.test(post.title)
    ? extractListiclePicks(post.content, postUrl)
    : null;

  // AI summarize URL templates (parsli-style)
  const aiSummarizers = [
    {
      name: "ChatGPT",
      href: `https://chat.openai.com/?q=${encodeURIComponent(`Summarize this RecipeBuilder article: ${postUrl}`)}`,
    },
    {
      name: "Claude",
      href: `https://claude.ai/new?q=${encodeURIComponent(`Summarize this RecipeBuilder article: ${postUrl}`)}`,
    },
    {
      name: "Perplexity",
      href: `https://www.perplexity.ai/?q=${encodeURIComponent(`Summarize this article and identify the key compliance requirements: ${postUrl}`)}`,
    },
    {
      name: "Google AI",
      href: `https://www.google.com/search?q=${encodeURIComponent(postUrl)}&udm=50`,
    },
  ];

  const proseClasses =
    "prose prose-slate max-w-none" +
    " [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4" +
    " [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2" +
    " [&_p]:text-text [&_p]:leading-relaxed [&_p]:mb-4" +
    " [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:text-text" +
    " [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:mb-4 [&_ol]:text-text" +
    " [&_li]:leading-relaxed" +
    " [&_strong]:text-foreground" +
    " [&_table]:w-full [&_table]:border-collapse [&_table]:mb-4" +
    " [&_th]:text-left [&_th]:p-3 [&_th]:border [&_th]:border-border [&_th]:bg-surface [&_th]:font-medium [&_th]:text-foreground [&_th]:text-sm" +
    " [&_td]:p-3 [&_td]:border [&_td]:border-border [&_td]:text-sm [&_td]:text-text";

  return (
    <>
      <Navbar light />
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/60 to-white pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  categoryColors[post.category] || "bg-gray-50 text-gray-700"
                }`}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-text-light">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              {wasUpdated && (
                <span className="flex items-center gap-1 text-sm text-primary-dark font-medium">
                  Updated{" "}
                  {new Date(modifiedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}
              <span className="flex items-center gap-1 text-sm text-text-light">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              {post.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text leading-relaxed max-w-3xl">
              {post.description}
            </p>

            {/* Author byline — E-E-A-T signal */}
            <div className="mt-6 flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-semibold text-xs">
                {author.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <span className="font-medium text-foreground">
                  By {author.name}
                </span>
                <span className="text-text-light"> · {author.role}</span>
              </div>
            </div>

            {/* Summarize with AI — opens this article in the user's chatbot of choice */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-text-light font-medium">Summarize with:</span>
              {aiSummarizers.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-border rounded-full text-text font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  {tool.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Table of Contents — Affinda pattern, helps AI/LLM citation + reader navigation */}
            {showToc && (
              <nav
                aria-label="Table of contents"
                className="mb-10 rounded-xl border border-border bg-surface/40 p-6"
              >
                <h2 className="text-xs font-bold uppercase tracking-wider text-text-light mb-4">
                  On this page
                </h2>
                <ol className="space-y-2 list-decimal list-inside marker:text-text-light marker:text-sm">
                  {tocHeadings.map((h) => (
                    <li key={h.id} className="text-sm">
                      <a
                        href={`#${h.id}`}
                        className="text-text hover:text-primary hover:underline transition-colors"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div className={proseClasses} dangerouslySetInnerHTML={{ __html: contentBefore }} />

            {contentAfter && (
              <>
                {/* Mid-article CTA — placed after 2nd major section (~40-50% mark) */}
                <div className="my-8 rounded-xl border border-primary/20 bg-primary-light/40 p-6">
                  <p className="text-sm text-foreground mb-3">
                    <strong>RecipeBuilder automates this.</strong> Generate
                    compliance-ready nutrition labels, manage your allergen
                    database, and track recipe costs — all from one platform
                    built for food businesses in the UAE and beyond.
                  </p>
                  <a
                    href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark hover:underline"
                  >
                    Book a free demo
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className={proseClasses} dangerouslySetInnerHTML={{ __html: contentAfter }} />
              </>
            )}

            {/* BlogPosting JSON-LD */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  headline: post.title,
                  description: post.description,
                  datePublished: post.date,
                  dateModified: modifiedDate,
                  author: {
                    "@type": "Person",
                    name: author.name,
                    jobTitle: author.role,
                    url: author.url ?? "https://www.recipebuilder.co/about",
                    worksFor: {
                      "@type": "Organization",
                      name: "ByteBeam",
                      url: "https://www.bytebeam.co",
                    },
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "RecipeBuilder",
                    url: "https://www.recipebuilder.co",
                    logo: {
                      "@type": "ImageObject",
                      url: "https://www.recipebuilder.co/logo.png",
                    },
                  },
                  image: `https://www.recipebuilder.co/blog/${post.slug}/opengraph-image`,
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `https://www.recipebuilder.co/blog/${post.slug}`,
                  },
                  articleSection: post.category,
                  keywords: post.keywords.join(", "),
                }),
              }}
            />

            {/* BreadcrumbList JSON-LD */}
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
                      item: "https://www.recipebuilder.co",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Blog",
                      item: "https://www.recipebuilder.co/blog",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: post.title,
                      item: `https://www.recipebuilder.co/blog/${post.slug}`,
                    },
                  ],
                }),
              }}
            />

            {/* FAQPage JSON-LD (if post has FAQ section) */}
            {faqs.length > 0 && (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faqs.map((faq) => ({
                      "@type": "Question",
                      name: faq.question,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                      },
                    })),
                  }),
                }}
              />
            )}

            {/* HowTo JSON-LD — emitted for posts with numbered step H3s */}
            {howToSteps && howToSteps.length >= 3 && (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    name: post.title,
                    description: post.description,
                    totalTime: `PT${
                      parseInt(post.readTime.match(/\d+/)?.[0] ?? "10", 10)
                    }M`,
                    step: howToSteps.map((s, i) => ({
                      "@type": "HowToStep",
                      position: i + 1,
                      name: s.name,
                      text: s.text,
                    })),
                  }),
                }}
              />
            )}

            {/* ItemList JSON-LD — emitted for "best-of" / "alternatives" listicles */}
            {listiclePicks && (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    name: post.title,
                    description: post.description,
                    numberOfItems: listiclePicks.length,
                    itemListElement: listiclePicks.map((p, i) => ({
                      "@type": "ListItem",
                      position: i + 1,
                      name: p.name,
                    })),
                  }),
                }}
              />
            )}

            {/* Speakable JSON-LD — flags the TL;DR + opening as voice-search / AI-summary friendly */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  speakable: {
                    "@type": "SpeakableSpecification",
                    cssSelector: [".key-takeaways", ".blog-cta-box", "h1"],
                    xpath: [
                      "/html/head/title",
                      "/html/head/meta[@name='description']/@content",
                    ],
                  },
                  url: postUrl,
                }),
              }}
            />
          </article>
        </section>

        {/* Author bio block — E-E-A-T signal at article close */}
        <section className="py-12 bg-white border-t border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {author.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  About the author
                </p>
                <h3 className="text-lg font-semibold text-foreground">
                  {author.name}
                </h3>
                <p className="text-sm text-text-light mb-2">{author.role}</p>
                <p className="text-text leading-relaxed text-sm">
                  RecipeBuilder is built by the team at ByteBeam (Dubai). We
                  work daily with food manufacturers, school caterers, and
                  cloud kitchens across the GCC, US, EU, and UK to keep
                  labels compliant and recipes profitable. If you spot
                  something we got wrong here — or want to compare notes on
                  a specific regulation —{" "}
                  <a
                    href="mailto:info@bytebeam.co"
                    className="text-primary hover:underline font-medium"
                  >
                    email us
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter capture — keeps low-intent readers in our orbit */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <NewsletterCapture variant="inline" />
          </div>
        </section>

        {/* Related posts */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Keep Reading
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Related Articles
              </h2>
              <p className="mt-4 text-lg text-text">
                More guides and insights on food labeling, compliance, and
                recipe management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group"
                >
                  <article className="h-full bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          categoryColors[rp.category] || "bg-gray-50 text-gray-700"
                        }`}
                      >
                        {rp.category}
                      </span>
                      <span className="text-xs text-text-light">
                        {rp.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-text leading-relaxed flex-1">
                      {rp.description}
                    </p>
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
                      <span className="text-xs text-text-light">
                        {new Date(rp.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium">
                        Read
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-8 py-16 sm:px-16 sm:py-20 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
                  Simplify Your Food Labeling Workflow
                </h2>
                <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                  RecipeBuilder helps food businesses generate labels following
                  GCC & SFDA laws, track costs, and manage inventory — all from
                  one platform.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-primary bg-white rounded-lg hover:bg-white/90 transition-colors"
                  >
                    Book a Demo
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:info@bytebeam.co?subject=RecipeBuilder Inquiry"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
