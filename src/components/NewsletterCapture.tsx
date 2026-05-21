"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check } from "lucide-react";

/**
 * Inline newsletter capture for the blog and footer. MVP uses a mailto
 * submission to info@bytebeam.co so the form works without a backend; once
 * an ESP (ConvertKit / Mailerlite / Brevo) is in place, swap the form
 * action for the API endpoint.
 *
 * Modeled on Affinda's footer subscribe block — keeps low-intent
 * visitors in our orbit until they're ready to trial.
 */
export default function NewsletterCapture({
  variant = "inline",
}: {
  variant?: "inline" | "compact";
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    // MVP: open the user's email client with a pre-filled subscribe message.
    const subject = "Subscribe me to the RecipeBuilder newsletter";
    const body = `Please add ${email} to the RecipeBuilder food labeling & compliance newsletter.`;
    window.location.href = `mailto:info@bytebeam.co?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (variant === "compact") {
    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-stretch gap-2 max-w-md"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="flex-1 px-4 py-2.5 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
        >
          {submitted ? (
            <>
              <Check className="w-4 h-4" />
              Sent
            </>
          ) : (
            <>
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>
    );
  }

  return (
    <div className="bg-surface border border-border rounded-2xl p-8 sm:p-10">
      <div className="flex items-start gap-4">
        <div className="hidden sm:flex w-12 h-12 bg-primary-light rounded-xl items-center justify-center flex-shrink-0">
          <Mail className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Get the latest food compliance updates
          </h3>
          <p className="text-text leading-relaxed mb-5">
            Practical guides on FDA, EU, and GCC food labeling, Dubai
            Municipality requirements, allergen management, and recipe
            costing — delivered when there&apos;s something worth reading.
            No spam, unsubscribe anytime.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4" />
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
