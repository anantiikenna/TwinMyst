import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of use for the TwinkMyst website and services.",
};

export default function TermsPage() {
  return (
    <section className="section-pad bg-abyss">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-ink">Terms of Service</h1>
        <p className="mt-2 text-sm text-ink-soft">Last updated: {new Date().getFullYear()}</p>

        <div className="card p-6 md:p-8 mt-8 space-y-6 text-ink leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-ink">1. Acceptance</h2>
            <p className="mt-2 text-sm text-ink-soft">
              By using twinkmyst.netlify.app or engaging TwinkMyst for services, you agree to these terms. If
              you do not agree, do not use the site or services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">2. Services</h2>
            <p className="mt-2 text-sm text-ink-soft">
              We provide web development, mobile app development, e-commerce, UI/UX & branding, AI
              creative media and digital products. Scope, deliverables, timeline and fees for client
              work are confirmed in a separate written proposal or contract.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">3. Digital Products</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Digital products are licensed, not sold outright, unless stated otherwise. Redistribution
              or resale of our products without permission is prohibited. Refund eligibility for
              digital downloads is stated at purchase.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">4. Client Responsibilities</h2>
            <p className="mt-2 text-sm text-ink-soft">
              You agree to provide accurate information, timely feedback and content needed for
              delivery. Delays in client input may shift project timelines.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">5. Intellectual Property</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Upon full payment, you receive rights to final deliverables as defined in your
              agreement. TwinkMyst retains rights to pre-existing tools, libraries and reusable
              components unless otherwise agreed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">6. AI Disclosure</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Where AI tools assist in creative production, we aim to be transparent about their use.
              Final quality review and client approval remain part of our process.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">7. Limitation of Liability</h2>
            <p className="mt-2 text-sm text-ink-soft">
              The website is provided &quot;as is&quot;. To the maximum extent permitted by law,
              TwinkMyst is not liable for indirect or consequential damages arising from use of the
              site or services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">8. Contact</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Questions about these terms:{" "}
              <a href="mailto:twinkmystt@gmail.com" className="text-blue underline">
                twinkmystt@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
