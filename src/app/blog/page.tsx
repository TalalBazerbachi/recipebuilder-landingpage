import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — RecipeBuilder | Food Labeling & Recipe Management Insights",
  description:
    "Expert guides on GCC food labeling, SFDA regulations, nutrition analysis, allergen management, and recipe management for food businesses in the UAE and Saudi Arabia.",
  keywords: [
    "food labeling blog",
    "GCC food regulations",
    "SFDA labeling guide",
    "nutrition label guide",
    "food business UAE",
    "recipe management tips",
    "allergen labeling GCC",
    "halal food labeling",
  ],
};

const categoryColors: Record<string, string> = {
  Compliance: "bg-red-50 text-red-700",
  Regulation: "bg-amber-50 text-amber-700",
  Industry: "bg-blue-50 text-blue-700",
  Labeling: "bg-green-50 text-green-700",
  Technology: "bg-purple-50 text-purple-700",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              RecipeBuilder Blog
            </h1>
            <p className="mt-4 text-lg text-text">
              Expert guides on food labeling, GCC regulations, nutrition
              analysis, and recipe management for food businesses.
            </p>
          </div>

          {/* Featured post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="block mb-16 group"
            >
              <article className="bg-surface border border-border rounded-2xl p-8 sm:p-12 hover:shadow-lg hover:border-primary/20 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      categoryColors[featured.category] || "bg-gray-50 text-gray-700"
                    }`}
                  >
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-text-light">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-text-light">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-3 text-text text-lg leading-relaxed max-w-3xl">
                  {featured.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-primary font-medium text-sm">
                  Read article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </article>
            </Link>
          )}

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="h-full bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        categoryColors[post.category] || "bg-gray-50 text-gray-700"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-text-light">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-text leading-relaxed flex-1">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-text-light">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-primary text-sm font-medium flex items-center gap-1">
                      Read
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
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
