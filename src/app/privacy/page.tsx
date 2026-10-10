import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TwinkMyst collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="section-pad bg-abyss">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-ink">Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink-soft">Last updated: {new Date().getFullYear()}</p>

        <div className="card p-6 md:p-8 mt-8 prose-sm space-y-6 text-ink leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-ink">1. Introduction</h2>
            <p className="mt-2 text-sm text-ink-soft">
              TwinkMyst (&quot;we&quot;, &quot;us&quot;) operates twinkmyst.netlify.app. This policy explains
              what information we collect, why we collect it, and your choices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">2. Information We Collect</h2>
            <ul className="mt-2 text-sm text-ink-soft list-disc list-inside space-y-1">
              <li>Contact details you submit (name, email, phone, message)</li>
              <li>Basic technical data (browser type, pages visited) if analytics are enabled with consent</li>
              <li>Cookie preference stored in your browser</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">3. How We Use Your Information</h2>
            <ul className="mt-2 text-sm text-ink-soft list-disc list-inside space-y-1">
              <li>To respond to enquiries and deliver requested services</li>
              <li>To operate and secure the website</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">4. Data Security</h2>
            <p className="mt-2 text-sm text-ink-soft">
              We use industry-standard measures including HTTPS, security headers, rate limiting and
              input validation. No method of transmission is 100% secure, but we work to protect your
              data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">5. Cookies</h2>
            <p className="mt-2 text-sm text-ink-soft">
              We use essential cookies/local storage for site function and to remember your consent
              choice. You can accept or decline non-essential cookies via our banner and change your
              choice at any time by clearing site data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">6. Third-Party Services</h2>
            <p className="mt-2 text-sm text-ink-soft">
              We may use infrastructure providers (hosting, email delivery) that process data on our
              behalf under their own security standards. We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">7. Your Rights</h2>
            <p className="mt-2 text-sm text-ink-soft">
              You may request access, correction or deletion of your personal data by contacting us.
              Where applicable law (e.g. NDPR/Nigeria, GDPR) grants additional rights, we honour
              those requests.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink">8. Contact Us</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Questions? Email{" "}
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
