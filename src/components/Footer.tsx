import Image from "next/image";
import type { FooterContent } from "@/data/landing-content";

const footerLinks = {
  Product: [
    { label: "Food Labeling", href: "/food-labeling" },
    { label: "Recipe Management", href: "/recipe-management" },
    { label: "Nutrition Analysis", href: "/nutrition-analysis" },
    { label: "Cost Tracking", href: "/cost-tracking" },
    { label: "Inventory Management", href: "/inventory-management" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Compliance Resources", href: "/compliance-resources" },
    { label: "FAQ", href: "#faq" },
    { label: "Case Studies", href: "/blog" },
  ],
  Industries: [
    { label: "Restaurants & Cafes", href: "#industries" },
    { label: "Food Manufacturers", href: "#industries" },
    { label: "Bakeries & Catering", href: "#industries" },
    { label: "Nutrition Centers", href: "#industries" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "ByteBeam", href: "https://www.bytebeam.co" },
    { label: "Contact Us", href: "mailto:talal@bytebeam.co" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

const defaultContent: FooterContent = {
  description: "The complete recipe management and food labeling platform for food businesses worldwide. A product by ByteBeam.",
};

export default function Footer({ content = defaultContent }: { content?: FooterContent }) {
  return (
    <footer className="relative bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <Image src="/logo.png" alt="RecipeBuilder" width={36} height={36} className="w-9 h-9" />
              <span className="text-xl font-bold text-white">
                RecipeBuilder
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {content.description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/40">
              <p>talal@bytebeam.co</p>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://wa.me/971524902379"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/byte-beam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm text-white mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} ByteBeam. All rights reserved.
          </p>
          <p className="text-sm text-white/30">
            RecipeBuilder is a ByteBeam product.
          </p>
        </div>
      </div>
    </footer>
  );
}
