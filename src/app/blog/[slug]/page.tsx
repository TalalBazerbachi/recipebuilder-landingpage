import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

  return {
    title: `${post.title} — RecipeBuilder Blog`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      siteName: "RecipeBuilder",
      url: `https://recipebuilder.bytebeam.co/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://recipebuilder.bytebeam.co/blog/${post.slug}`,
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

  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const related = sorted
    .filter((p) => p.slug !== slug)
    .slice(0, 3);
  const faqs = extractFaqs(post.content);
  const [contentBefore, contentAfter] = splitAtSecondH2(post.content);

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

            <div className="flex items-center gap-3 mb-5">
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
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  dateModified: post.date,
                  author: {
                    "@type": "Organization",
                    name: "ByteBeam",
                    url: "https://www.bytebeam.co",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "RecipeBuilder",
                    url: "https://recipebuilder.bytebeam.co",
                  },
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `https://recipebuilder.bytebeam.co/blog/${post.slug}`,
                  },
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
                      item: "https://recipebuilder.bytebeam.co",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Blog",
                      item: "https://recipebuilder.bytebeam.co/blog",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: post.title,
                      item: `https://recipebuilder.bytebeam.co/blog/${post.slug}`,
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
          </article>
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
