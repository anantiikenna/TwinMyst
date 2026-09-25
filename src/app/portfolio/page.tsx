import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected TwinkMyst work — live client websites and platforms across healthcare, architecture and more.",
};

const clientWork = [
  {
    title: "Highlands Family Dental",
    category: "Healthcare Website",
    href: "https://highlandsfamilydental.net/",
    image: "/images/work/highlands.png",
    alt: "Highlands Family Dental website homepage with appointment booking",
    description:
      "Production dental practice website — services, blog, patient resources and appointment booking, built on the Next.js + Sanity stack.",
    tags: ["Next.js", "Sanity CMS", "SEO", "Houston, TX"],
  },
  {
    title: "Premon Care",
    category: "Healthcare Platform + Mobile",
    href: "https://premoncare.netlify.app/",
    image: "/images/work/premoncare.png",
    alt: "Premon Care healthcare ecosystem homepage",
    description:
      "Next-gen healthcare ecosystem: appointments, doctors, patient community — paired with companion Android and iOS apps built with Flutter.",
    tags: ["Next.js", "Flutter", "Android", "iOS"],
  },
  {
    title: "Realmaxville",
    category: "Architecture & Engineering",
    href: "https://realmaxville.netlify.app/",
    image: "/images/work/realmaxville.png",
    alt: "Realmaxville architecture studio homepage with featured projects",
    description:
      "Bold portfolio site for an architecture and structural engineering firm — project archive, design catalog and quote flows.",
    tags: ["Next.js", "Portfolio", "CMS", "Lagos, NG"],
  },
];

const conceptWork = [
  {
    title: "Digital Business Launches",
    category: "Web + Brand",
    description:
      "Complete launches: identity, website, payments, WhatsApp and promo content for small businesses.",
    tags: ["Next.js", "Branding", "Payments"],
  },
  {
    title: "Service Booking System",
    category: "Web Application",
    description:
      "Customer portals, provider scheduling and admin oversight for service businesses.",
    tags: ["Booking", "Dashboard", "PostgreSQL"],
  },
  {
    title: "Cross-Platform Mobile App",
    category: "Mobile",
    description:
      "Flutter app shipped to Android and iOS from one codebase — profiles, bookings and notifications.",
    tags: ["Flutter", "Android", "iOS"],
  },
  {
    title: "E-commerce & Marketplace Builds",
    category: "Commerce",
    description:
      "Stores and multi-vendor platforms with Paystack and Flutterwave payment flows.",
    tags: ["E-commerce", "Paystack", "Flutterwave"],
  },
  {
    title: "Short-Form Content Systems",
    category: "Creative Media",
    description:
      "Monthly video packages — scripts, edits, captions and thumbnails for creators and brands.",
    tags: ["Video", "Motion", "AI-assisted"],
  },
  {
    title: "TwinkMyst Digital Tools",
    category: "Digital Products",
    description:
      "Templates, starter kits and creative assets — our own product line for teams that ship.",
    tags: ["Templates", "Starter Kits", "Assets"],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-abyss text-white py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow" data-aos="fade-up">
            Portfolio
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold" data-aos="fade-up" data-aos-delay="100">
            Ideas we&apos;ve brought to life.
          </h1>
          <p className="mt-4 text-white/70 text-lg" data-aos="fade-up" data-aos-delay="200">
            Live client work and studio concepts across healthcare, architecture, commerce and
            creative media.
          </p>
        </div>
      </section>

      {/* Client Work */}
      <section className="section-pad bg-abyss">
        <div className="container-page">
          <div className="flex items-end justify-between gap-6 mb-8" data-aos="fade-up">
            <div>
              <p className="eyebrow">[ Live Client Work ]</p>
              <h2 className="mt-3 text-3xl font-bold text-ink">Shipped &amp; in production.</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientWork.map((p, i) => (
              <article
                key={p.title}
                className="group rounded-2xl bg-surface border border-line overflow-hidden hover:border-blue/50 transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 tag-blue">{p.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-ink group-hover:text-blue transition-colors">
                      {p.title}
                    </h3>
                    <ExternalLink
                      size={16}
                      className="text-ink-soft group-hover:text-blue transition"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-ink-soft">{p.description}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 pt-4 border-t border-line text-[10px] font-bold uppercase tracking-widest text-ink-soft">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-gold-bright hover:text-gold transition"
                  >
                    Visit live site <ArrowUpRight size={12} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Concept Work */}
      <section className="section-pad bg-surface border-t border-line/30">
        <div className="container-page">
          <div className="mb-8" data-aos="fade-up">
            <p className="eyebrow">[ Studio Concepts ]</p>
            <h2 className="mt-3 text-3xl font-bold text-ink">More from the lab.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conceptWork.map((p, i) => (
              <article
                key={p.title}
                className="card card-hover p-6 flex flex-col"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <span className="eyebrow">{p.category}</span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-soft flex-grow">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-blue-soft text-blue px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-ink">Want results like these?</h2>
            <Link href="/contact" className="btn-blue mt-6">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
