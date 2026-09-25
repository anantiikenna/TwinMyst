import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "TwinkMyst — Twinkle + Mystery. A digital creation studio turning ideas into digital reality for businesses, entrepreneurs and creators.",
};

const values = [
  {
    title: "Clarity",
    text: "Six divisions, clear packages, plain language. You always know what you're buying.",
  },
  {
    title: "Craft",
    text: "Modern stacks, careful design and production standards drawn from real client projects.",
  },
  {
    title: "Transparency",
    text: "Where AI assists in creative work, we say so. Scope, timeline and cost stay visible.",
  },
  {
    title: "Momentum",
    text: "Start with services, grow into products and platforms — we build for the long game.",
  },
];

const ecosystem = [
  { label: "Services", text: "Client projects — high-ticket income" },
  { label: "Digital Store", text: "Products — repeatable income" },
  { label: "Marketplace", text: "Platform — scalable commission income" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-abyss text-white py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow !text-gold" data-aos="fade-up">
            About TwinkMyst
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold" data-aos="fade-up" data-aos-delay="100">
            Twinkle + Mystery.
          </h1>
          <p className="mt-4 text-white/70 text-lg" data-aos="fade-up" data-aos-delay="200">
            Making ideas shine, while bringing the unexpected to life.
          </p>
        </div>
      </section>

      <section className="section-pad bg-abyss">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-start">
          <div data-aos="fade-up">
            <p className="eyebrow">Our Positioning</p>
            <h2 className="mt-3 text-3xl font-bold text-ink">
              A digital creation studio — not just a web company.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              TwinkMyst helps businesses, entrepreneurs and creators transform ideas into websites,
              applications, digital products and engaging visual experiences. Our services support
              that statement: web development, mobile apps, e-commerce, UI/UX & branding, AI creative
              media and a growing digital product library.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Our tagline: <strong className="text-ink">Turning Ideas Into Digital Reality.</strong>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
            {values.map((v) => (
              <div key={v.title} className="card p-5">
                <h3 className="font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="max-w-2xl mb-10" data-aos="fade-up">
            <p className="eyebrow">The Ecosystem</p>
            <h2 className="mt-3 text-3xl font-bold text-ink">Three ways we create value.</h2>
            <p className="mt-3 text-ink-soft">
              We don&apos;t depend on one income stream. Services fund products; products fund the
              platform.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ecosystem.map((e, i) => (
              <div
                key={e.label}
                className="border-t-2 border-blue pt-5"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <span className="text-xs font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-ink">{e.label}</h3>
                <p className="mt-2 text-sm text-ink-soft">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-gradient-to-br from-blue to-abyss text-white">
        <div className="container-page text-center max-w-2xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Let&apos;s build your next chapter.</h2>
          <p className="mt-4 text-white/75">
            Whether you need a website this month or a long-term product partner, start with a
            conversation.
          </p>
          <Link href="/contact" className="btn-gold mt-8 inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
