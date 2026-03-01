"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ variant = "global", light = false }: { variant?: "global" | "gcc"; light?: boolean }) {
  const basePath = variant === "gcc" ? "/gcc" : "";
  const navLinks = [
    { label: "Features", href: `${basePath}/#features` },
    { label: "How It Works", href: `${basePath}/#how-it-works` },
    { label: "Industries", href: `${basePath}/#industries` },
    { label: "Pricing", href: `${basePath}/#pricing` },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    ...(variant === "global" ? [{ label: "GCC", href: "/gcc" }] : []),
  ];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const useDarkText = light || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-border shadow-sm"
          : light
            ? "bg-white/60 backdrop-blur-xl"
            : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link href={variant === "gcc" ? "/gcc" : "/"} className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="RecipeBuilder" width={36} height={36} className="w-9 h-9" />
          <span
            className={`text-xl font-bold transition-colors duration-300 ${
              useDarkText ? "text-foreground" : "text-white"
            }`}
          >
            RecipeBuilder
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                useDarkText
                  ? "text-text hover:text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
          >
            Book a Demo
          </a>
        </div>

        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            useDarkText ? "text-foreground" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 px-4 text-sm font-medium text-text hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://calendly.com/talal-bytebeam/foodlabelbuilder-discoverycall"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl"
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
