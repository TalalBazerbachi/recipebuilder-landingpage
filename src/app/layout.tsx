import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "RecipeBuilder — Recipe Management & Food Labeling for Food Businesses",
  description:
    "RecipeBuilder is a recipe management and food labeling platform by ByteBeam (Dubai). It auto-generates nutrition labels, barcodes, and QR codes from recipes using 20,000+ USDA-verified ingredients. Supports FDA, EU, and GCC/SFDA labeling standards in 40+ languages. Used by food manufacturers, restaurants, and catering businesses worldwide. Pricing starts at $49/month.",
  keywords: [
    "recipe management software",
    "food labeling software",
    "nutrition label generator",
    "FDA food labeling",
    "EU food compliance",
    "food label maker",
    "recipe cost analysis",
    "food barcode generator",
    "nutrition facts generator",
    "multi-language food labels",
    "USDA database",
    "food business software",
    "recipe inventory management",
    "food packaging artwork",
    "QR code nutrition label",
    "recipe nutrition calculator",
    "food manufacturer software",
    "restaurant recipe management",
    "bakery labeling software",
    "meal plan nutrition software",
    "food label compliance",
    "nutrition facts panel",
    "allergen labeling",
    "food safety compliance",
  ],
  authors: [{ name: "ByteBeam" }],
  creator: "ByteBeam",
  publisher: "ByteBeam",
  openGraph: {
    title:
      "RecipeBuilder — Recipe Management & Food Labeling for Food Businesses",
    description:
      "RecipeBuilder is a recipe management and food labeling platform by ByteBeam. Auto-generates nutrition labels, barcodes, and QR codes from recipes. 20,000+ USDA ingredients. FDA, EU, GCC/SFDA compliant. 40+ languages.",
    url: "https://recipebuilder.bytebeam.co",
    siteName: "RecipeBuilder",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RecipeBuilder — Recipe Management & Food Labeling Platform",
    description:
      "RecipeBuilder by ByteBeam auto-generates nutrition labels, barcodes, and QR codes from recipes. 20,000+ USDA ingredients. FDA, EU, GCC/SFDA compliant. Starts at $49/mo.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://recipebuilder.bytebeam.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "RecipeBuilder",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "Recipe management and food labeling platform for food businesses. Auto-generate nutrition labels, barcodes, QR codes, and packaging artwork compliant with FDA, EU, GCC, and other regulatory frameworks.",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                lowPrice: "49",
                highPrice: "99",
                offerCount: "3",
                category: "SaaS",
                availability: "https://schema.org/InStock",
              },
              url: "https://recipebuilder.bytebeam.co",
              creator: {
                "@type": "Organization",
                name: "ByteBeam",
                url: "https://www.bytebeam.co",
              },
              featureList: [
                "Auto-generate food labels from recipes",
                "Barcode generation for product identification",
                "QR code for nutrition facts",
                "Full USDA FoodData Central database access",
                "Multi-language labels for FDA, EU, GCC & more",
                "Recipe cost analysis and profit tracking",
                "Real-time stock and inventory tracking",
                "Auto-generated packaging artwork",
                "Traffic light nutrition labels",
                "Allergen declarations",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ByteBeam",
              url: "https://www.bytebeam.co",
              contactPoint: {
                "@type": "ContactPoint",
                email: "talal@bytebeam.co",
                contactType: "sales",
                areaServed: "Worldwide",
                availableLanguage: ["English"],
              },
              brand: {
                "@type": "Brand",
                name: "RecipeBuilder",
                url: "https://recipebuilder.bytebeam.co",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "RecipeBuilder",
              url: "https://recipebuilder.bytebeam.co",
              description:
                "RecipeBuilder is a recipe management and food labeling platform for food businesses. Built by ByteBeam, a Dubai-based technology company. Auto-generates compliant nutrition labels for FDA, EU, GCC/SFDA markets using 20,000+ USDA-verified ingredients.",
              publisher: {
                "@type": "Organization",
                name: "ByteBeam",
                url: "https://www.bytebeam.co",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
