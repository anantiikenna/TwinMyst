import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with TwinkMyst — web development, mobile apps, e-commerce, branding and creative media. Free consultation.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-abyss text-white py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow !text-gold" data-aos="fade-up">
            Contact
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold" data-aos="fade-up" data-aos-delay="100">
            Let&apos;s turn your idea into reality.
          </h1>
          <p className="mt-4 text-white/70 text-lg" data-aos="fade-up" data-aos-delay="200">
            Tell us what you&apos;re building. We reply within one business day.
          </p>
        </div>
      </section>

      <section className="section-pad bg-abyss">
        <div className="container-page grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 card p-6 md:p-8" data-aos="fade-up">
            <h2 className="text-xl font-semibold text-ink mb-6">Send a message</h2>
            <ContactForm />
          </div>

          <aside className="lg:col-span-2 space-y-6" data-aos="fade-up" data-aos-delay="100">
            <div className="card p-6">
              <h2 className="font-semibold text-ink">Direct contact</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                <li>
                  <a href="mailto:hello@twinkmyst.com" className="text-blue hover:underline">
                    hello@twinkmyst.com
                  </a>
                </li>
                <li>Remote-first · Serving clients worldwide</li>
              </ul>
            </div>

            <div className="card p-6">
              <h2 className="font-semibold text-ink">What happens next</h2>
              <ol className="mt-4 space-y-3 text-sm text-ink-soft list-decimal list-inside">
                <li>We review your message within one business day.</li>
                <li>We schedule a short discovery call.</li>
                <li>You receive a clear scope and package quote.</li>
              </ol>
            </div>

            <div className="card p-6">
              <h2 className="font-semibold text-ink">Good to include</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                <li>• What you want to build</li>
                <li>• Your target audience</li>
                <li>• Timeline and budget range</li>
                <li>• Links to references you like</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
