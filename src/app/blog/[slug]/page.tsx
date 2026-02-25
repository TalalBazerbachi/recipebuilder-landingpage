import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, Clock, ArrowLeft, ArrowRight, ChefHat } from "lucide-react";

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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const related = sorted
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const categoryColors: Record<string, string> = {
    Compliance: "bg-red-50 text-red-700",
    Regulation: "bg-amber-50 text-amber-700",
    Industry: "bg-blue-50 text-blue-700",
    Labeling: "bg-green-50 text-green-700",
    Technology: "bg-purple-50 text-purple-700",
  };

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
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
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-text leading-relaxed">
              {post.description}
            </p>
          </header>

          {/* Content */}
          <div
            className="prose prose-slate max-w-none
              [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2
              [&_p]:text-text [&_p]:leading-relaxed [&_p]:mb-4
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:text-text
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:mb-4 [&_ol]:text-text
              [&_li]:leading-relaxed
              [&_strong]:text-foreground
              [&_table]:w-full [&_table]:border-collapse [&_table]:mb-4
              [&_th]:text-left [&_th]:p-3 [&_th]:border [&_th]:border-border [&_th]:bg-surface [&_th]:font-medium [&_th]:text-foreground [&_th]:text-sm
              [&_td]:p-3 [&_td]:border [&_td]:border-border [&_td]:text-sm [&_td]:text-text"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.title,
                description: post.description,
                datePublished: post.date,
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
        </article>

        {/* CTA Banner */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 sm:p-10 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-4">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Simplify Your Food Labeling Workflow
            </h3>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              RecipeBuilder helps food businesses generate labels following GCC &
              SFDA laws, track costs, and manage inventory — all from one
              platform.
            </p>
            <a
              href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Related posts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group"
              >
                <article className="h-full bg-white border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all flex flex-col">
                  <span
                    className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${
                      categoryColors[rp.category] || "bg-gray-50 text-gray-700"
                    }`}
                  >
                    {rp.category}
                  </span>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {rp.title}
                  </h3>
                  <p className="text-sm text-text flex-1">
                    {rp.description}
                  </p>
                  <span className="text-xs text-text-light mt-3">
                    {new Date(rp.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
