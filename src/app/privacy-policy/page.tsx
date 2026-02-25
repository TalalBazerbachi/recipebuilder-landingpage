import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — RecipeBuilder by ByteBeam",
  description:
    "Privacy Policy for RecipeBuilder, a recipe management and food labeling platform by ByteBeam.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar light />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-text mb-10">
            Updated: January 2026
          </p>

          <div className="prose prose-slate max-w-none space-y-8 text-text leading-relaxed">
            <p>
              ByteBeam (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              operates the RecipeBuilder platform. This Privacy Policy explains
              how we collect, use, share, and protect your information when you
              use our website and services.
            </p>
            <p>
              <strong>Company:</strong> ByteBeam
              <br />
              <strong>Contact Email:</strong> info@bytebeam.co
              <br />
              <strong>Regions Served:</strong> UAE, Saudi Arabia, and the
              broader GCC region
            </p>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                1. Information We Collect
              </h2>

              <h3 className="text-base font-semibold text-foreground mt-6 mb-2">
                a) Information You Provide
              </h3>
              <p>
                When you create an account, book a demo, or communicate with us,
                we may collect your name, email address, phone number, company
                name, postal address, and payment details.
              </p>

              <h3 className="text-base font-semibold text-foreground mt-6 mb-2">
                b) User Content
              </h3>
              <p>
                We collect content you create or upload through RecipeBuilder,
                including recipes, ingredient lists, food labels, packaging
                artwork, nutrition data, images, and other materials you generate
                using our platform.
              </p>

              <h3 className="text-base font-semibold text-foreground mt-6 mb-2">
                c) Automatically Collected Information
              </h3>
              <p>
                We may automatically collect certain information about your
                device and how you interact with our services, including your IP
                address, browser type, operating system, referring website, pages
                viewed, and time spent on our website.
              </p>

              <h3 className="text-base font-semibold text-foreground mt-6 mb-2">
                d) Cookies and Similar Technologies
              </h3>
              <p>
                We use cookies and similar technologies to track your activity
                and improve your experience on our site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  Provide, maintain, and improve our services, including recipe
                  management, nutrition analysis, food label generation, barcode
                  and QR code creation, and inventory tracking
                </li>
                <li>
                  Respond to your inquiries, process transactions, and provide
                  customer support
                </li>
                <li>
                  Personalize your experience and deliver relevant content
                </li>
                <li>
                  Send promotional materials, product updates, and newsletters
                  (you may opt out at any time)
                </li>
                <li>
                  Comply with legal requirements and enforce our terms of service
                </li>
                <li>
                  Analyze usage patterns to improve platform performance and
                  features
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                3. Sharing Your Information
              </h2>
              <p>
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Service Providers:</strong> We may share data with
                  third-party vendors who assist with payment processing,
                  hosting, analytics, and other services necessary to operate
                  RecipeBuilder.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of assets, your information may be
                  transferred as part of the transaction.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> We may disclose your
                  information to comply with applicable laws, regulations, legal
                  processes, or enforceable governmental requests.
                </li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                4. Data Retention and Security
              </h2>
              <p>
                We retain your data for as long as necessary to provide our
                services and fulfill the purposes described in this policy. We
                employ industry-standard security measures, including AES-256
                encryption for stored data and TLS/SSL encryption for data in
                transit, to protect your information from unauthorized access,
                alteration, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                5. Your Rights and Choices
              </h2>
              <p>
                You have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Right to Access:</strong> Request access to the
                  personal data we hold about you.
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Request correction of
                  inaccurate or incomplete personal data.
                </li>
                <li>
                  <strong>Right to Deletion:</strong> Request the deletion of
                  your personal data under certain conditions.
                </li>
                <li>
                  <strong>Right to Restrict Processing:</strong> Request
                  restrictions on how we process your data.
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Receive your
                  personal data in a structured, machine-readable format.
                </li>
                <li>
                  <strong>Right to Object:</strong> Object to data processing,
                  including for marketing purposes.
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at
                info@bytebeam.co.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                6. Use of Cookies
              </h2>
              <p>
                Cookies help us remember your preferences, analyze site traffic,
                authenticate users, and enhance security. You can manage cookie
                preferences through your browser settings. Disabling cookies may
                limit certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                7. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party sites that are not
                operated by us. We are not responsible for the privacy practices
                or content of those sites. We encourage you to review the
                privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                8. Changes to This Privacy Policy
              </h2>
              <p>
                We reserve the right to update this Privacy Policy at any time.
                Changes will be posted on this page with an updated revision
                date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not intended for children under 13. We do not
                knowingly collect personal data from children. If we become
                aware that we have inadvertently collected data from a child
                under 13, we will take steps to delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or wish to
                exercise your data protection rights, please contact us:
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
