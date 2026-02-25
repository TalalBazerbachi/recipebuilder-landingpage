import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, Clock, ArrowRight, BookOpen, ChefHat } from "lucide-react";

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
      <Navbar light />
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/60 to-white pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary-light rounded-full">
              <BookOpen className="w-4 h-4" />
              BLOG
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight max-w-4xl mx-auto">
              RecipeBuilder <span className="text-primary">Blog</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text max-w-2xl mx-auto leading-relaxed">
              Expert guides on food labeling, GCC regulations, nutrition
              analysis, and recipe management for food businesses.
            </p>
          </div>
        </section>

        {/* Featured post */}
        {featured && (
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                href={`/blog/${featured.slug}`}
                className="block group"
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
                  <span className="inline-flex items-center gap-1.5 mt-5 text-primary font-medium text-sm">
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </article>
              </Link>
            </div>
          </section>
        )}

        {/* Post grid */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                All Articles
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Latest Insights & Guides
              </h2>
              <p className="mt-4 text-lg text-text">
                In-depth articles covering food labeling regulations, recipe
                management best practices, and industry trends across the GCC.
              </p>
            </div>

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
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
                      <span className="text-xs text-text-light">
                        {new Date(post.date).toLocaleDateString("en-US", {
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
