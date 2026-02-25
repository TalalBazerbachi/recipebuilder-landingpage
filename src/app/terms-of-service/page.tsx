import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — RecipeBuilder by ByteBeam",
  description:
    "Terms of Service for RecipeBuilder, a recipe management and food labeling platform by ByteBeam.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar light />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Terms of Service
          </h1>
          <p className="text-text mb-10">
            Updated: January 2026
          </p>

          <div className="prose prose-slate max-w-none space-y-8 text-text leading-relaxed">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of the RecipeBuilder platform operated by ByteBeam
              (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing
              or using RecipeBuilder, you agree to be bound by these Terms. If
              you do not agree, do not use our services.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                1. Definitions
              </h2>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>&quot;Platform&quot;</strong> refers to the
                  RecipeBuilder web application and all related services,
                  features, and tools.
                </li>
                <li>
                  <strong>&quot;User&quot;</strong> refers to any individual or
                  entity that accesses or uses the Platform.
                </li>
                <li>
                  <strong>&quot;User Content&quot;</strong> refers to recipes,
                  ingredients, food labels, packaging artwork, nutrition data,
                  images, and any other content created or uploaded by the User.
                </li>
                <li>
                  <strong>&quot;Services&quot;</strong> refers to recipe
                  management, nutrition analysis, food label generation, barcode
                  and QR code creation, cost analysis, inventory tracking, and
                  any other functionality provided through the Platform.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                2. Account Registration
              </h2>
              <p>
                To use certain features of RecipeBuilder, you must create an
                account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  Provide accurate, complete, and current information during
                  registration
                </li>
                <li>
                  Maintain the security of your account credentials and not
                  share them with others
                </li>
                <li>
                  Notify us immediately of any unauthorized access to your
                  account
                </li>
                <li>
                  Accept responsibility for all activities that occur under your
                  account
                </li>
              </ul>
              <p className="mt-3">
                We reserve the right to suspend or terminate accounts that
                violate these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                3. Use of Services
              </h2>
              <p>You agree to use RecipeBuilder only for lawful purposes. You shall not:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  Use the Platform in any way that violates applicable local,
                  national, or international laws or regulations
                </li>
                <li>
                  Upload content that is illegal, harmful, threatening, abusive,
                  or otherwise objectionable
                </li>
                <li>
                  Attempt to gain unauthorized access to any part of the
                  Platform or its systems
                </li>
                <li>
                  Reverse-engineer, decompile, or disassemble any part of the
                  Platform
                </li>
                <li>
                  Use the Platform to generate misleading or fraudulent food
                  labels or nutrition information
                </li>
                <li>
                  Resell, redistribute, or sublicense access to the Platform
                  without our written consent
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                4. User Content and Ownership
              </h2>
              <p>
                You retain ownership of all User Content you create or upload to
                RecipeBuilder. By using our Services, you grant us a limited,
                non-exclusive license to process, store, and display your User
                Content solely for the purpose of providing the Services to you.
              </p>
              <p className="mt-3">
                You are solely responsible for the accuracy and legality of your
                User Content, including recipe data, ingredient information, and
                food labels generated through the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                5. Food Labeling Disclaimer
              </h2>
              <p>
                RecipeBuilder is designed to help you generate food labels that
                follow GCC, SFDA, and other regional labeling requirements.
                However:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>
                    RecipeBuilder is a tool to assist with label generation, not
                    a regulatory authority.
                  </strong>{" "}
                  We do not guarantee that labels generated through the Platform
                  meet all applicable regulatory requirements in every
                  jurisdiction.
                </li>
                <li>
                  <strong>You are responsible</strong> for verifying that all
                  food labels, nutrition facts, ingredient lists, allergen
                  declarations, and packaging artwork comply with the specific
                  regulations applicable to your products and markets.
                </li>
                <li>
                  Nutrition data is sourced from the USDA FoodData Central
                  database and user-provided inputs. We do not guarantee the
                  accuracy of nutritional calculations for all use cases.
                </li>
                <li>
                  We recommend consulting with a qualified food regulatory
                  professional to verify compliance before using labels in
                  production.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                6. Subscription and Payment
              </h2>
              <p>
                Certain features of RecipeBuilder require a paid subscription.
                By subscribing, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  Pay all applicable fees as described at the time of purchase
                </li>
                <li>
                  Authorize us to charge your designated payment method on a
                  recurring basis (monthly or annually, depending on your plan)
                </li>
                <li>
                  Provide accurate and complete billing information
                </li>
              </ul>
              <p className="mt-3">
                Subscription fees are non-refundable unless otherwise stated. We
                reserve the right to change pricing with reasonable advance
                notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                7. Intellectual Property
              </h2>
              <p>
                The RecipeBuilder platform, including its design, code, features,
                logos, trademarks, and all related intellectual property, is
                owned by ByteBeam. You may not copy, modify, distribute, or
                create derivative works based on our Platform without our
                written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                8. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, ByteBeam shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of profits,
                data, or business opportunities arising from your use of
                RecipeBuilder.
              </p>
              <p className="mt-3">
                Our total liability for any claims arising from your use of the
                Platform shall not exceed the amount you paid to us in the
                twelve (12) months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                9. Disclaimers
              </h2>
              <p>
                RecipeBuilder is provided on an &quot;as is&quot; and &quot;as
                available&quot; basis without warranties of any kind, express or
                implied, including but not limited to implied warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement.
              </p>
              <p className="mt-3">
                We do not warrant that the Platform will be uninterrupted,
                error-free, secure, or free of viruses or other harmful
                components.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                10. Termination
              </h2>
              <p>
                We may terminate or suspend your access to RecipeBuilder at any
                time, with or without cause, and with or without notice. Upon
                termination, your right to use the Platform ceases immediately.
                You may request export of your User Content within 30 days of
                termination by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                11. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the United Arab Emirates. Any disputes arising
                from these Terms or your use of the Platform shall be resolved
                in the courts of the UAE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                12. Changes to These Terms
              </h2>
              <p>
                We reserve the right to update these Terms at any time. Changes
                will be posted on this page with an updated revision date.
                Continued use of the Platform after changes are posted
                constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                13. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <p className="mt-3">
                <strong>Email:</strong> info@bytebeam.co
                <br />
                <strong>Company:</strong> ByteBeam
                <br />
                <strong>Regions:</strong> UAE &amp; Saudi Arabia
              </p>
            </section>

            <p className="text-sm text-text-light mt-10 border-t border-border pt-6">
              Last Updated: January 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
