import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Puzzle, Clapperboard, GraduationCap, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Store",
  description:
    "Templates, starter kits, presets and resources from TwinkMyst — created once, valuable forever. Client services + digital products.",
};

const categories: { title: string; Icon: LucideIcon; items: string[] }[] = [
  {
    title: "For Businesses",
    Icon: Briefcase,
    items: [
      "Invoice templates",
      "Business proposal templates",
      "Company profile templates",
      "Social-media templates",
      "Marketing templates",
      "Financial spreadsheets",
    ],
  },
  {
    title: "For Developers",
    Icon: Puzzle,
    items: [
      "Next.js starter kits",
      "React components",
      "Tailwind components",
      "Flutter templates",
      "Admin dashboards",
      "Auth & SaaS starter kits",
    ],
  },
  {
    title: "For Creators",
    Icon: Clapperboard,
    items: [
      "LUTs & video presets",
      "Thumbnail templates",
      "Motion graphics",
      "Sound effects",
      "Social-media packs",
    ],
  },
  {
    title: "For Students & Professionals",
    Icon: GraduationCap,
    items: [
      "CV templates",
      "Portfolio templates",
      "Study resources",
      "Career guides",
      "Productivity templates",
    ],
  },
];

export default function StorePage() {
  return (
    <>
      <section className="bg-abyss text-white py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow !text-gold" data-aos="fade-up">
            Digital Store
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold" data-aos="fade-up" data-aos-delay="100">
            Create once. Sell repeatedly.
          </h1>
          <p className="mt-4 text-white/70 text-lg" data-aos="fade-up" data-aos-delay="200">
            Our product library sits alongside client services — templates, starter kits and creative
            assets you can buy and use immediately.
          </p>
        </div>
      </section>

      <section className="section-pad bg-abyss">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="card card-hover p-6"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <cat.Icon size={30} className="text-gold-bright" aria-hidden="true" />
              <h2 className="mt-4 font-semibold text-ink">{cat.title}</h2>
              <ul className="mt-3 space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-ink-soft flex items-start gap-2">
                    <span aria-hidden="true" className="text-gold">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Instant delivery",
              text: "Download immediately after purchase. No waiting on a project kickoff.",
            },
            {
              title: "Built on our stack",
              text: "Developer products follow the same standards we use in client work.",
            },
            {
              title: "Growing library",
              text: "New products ship regularly — from business templates to code starters.",
            },
          ].map((f, i) => (
            <div key={f.title} className="card p-6" data-aos="fade-up" data-aos-delay={i * 60}>
              <h3 className="font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="container-page mt-12 text-center" data-aos="fade-up">
          <p className="text-ink-soft max-w-xl mx-auto">
            The full storefront is opening soon. Want early access, or need a custom product built?
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-blue">
              Get Notified / Request a Product
            </Link>
            <Link href="/services/digital-products" className="btn-outline-dark">
              About This Division
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
