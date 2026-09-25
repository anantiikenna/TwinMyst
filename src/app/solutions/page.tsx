import type { Metadata } from "next";
import Link from "next/link";
import { solutions } from "@/lib/services";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Digital solutions for businesses, startups, creators and developers — from websites and apps to content systems and white-label builds.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-abyss text-white py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow !text-gold" data-aos="fade-up">
            Solutions
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold" data-aos="fade-up" data-aos-delay="100">
            Four audiences. Tailored paths.
          </h1>
          <p className="mt-4 text-white/70 text-lg" data-aos="fade-up" data-aos-delay="200">
            We don&apos;t target everyone the same way. Find the path that matches where you are.
          </p>
        </div>
      </section>

      <section className="section-pad bg-abyss">
        <div className="container-page space-y-8">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              className="card p-8 md:p-10 grid md:grid-cols-2 gap-6 items-start"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <div>
                <span className="text-xs font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-2xl font-bold text-ink">{s.title}</h2>
                <p className="mt-3 text-ink-soft">{s.description}</p>
              </div>
              <div>
                <ul className="space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-ink">
                      <span aria-hidden="true" className="text-blue">✦</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-outline-dark mt-6 inline-block !py-2 !text-xs">
                  Discuss this path
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-gradient-to-br from-blue to-abyss text-white">
        <div className="container-page text-center max-w-2xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Not sure where you fit?</h2>
          <p className="mt-4 text-white/75">
            Tell us your goal — we&apos;ll recommend the right division, package and timeline.
          </p>
          <Link href="/contact" className="btn-gold mt-8 inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
