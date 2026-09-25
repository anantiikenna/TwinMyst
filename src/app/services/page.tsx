import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { ServiceIcon } from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, e-commerce, UI/UX & branding, AI creative media and digital products — TwinkMyst's six service divisions.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-abyss text-white py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <p className="eyebrow !text-gold" data-aos="fade-up">
            Services
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold" data-aos="fade-up" data-aos-delay="100">
            Everything digital, under one roof.
          </h1>
          <p className="mt-4 text-white/70 text-lg" data-aos="fade-up" data-aos-delay="200">
            Six focused divisions — so you always know what we do and how it fits your project.
          </p>
        </div>
      </section>

      <section className="section-pad bg-abyss">
        <div className="container-page grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="card card-hover p-8 flex flex-col group"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <div className="flex items-start justify-between gap-4">
                <ServiceIcon name={service.icon} size={30} className="text-gold-bright" />
                <span className="text-xs font-semibold text-blue bg-blue-soft px-3 py-1 rounded-full">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-5 text-xl font-semibold text-ink group-hover:text-blue transition">
                {service.title}
              </h2>
              <p className="mt-3 text-sm text-ink-soft flex-grow">{service.description}</p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                {service.offerings.slice(0, 6).map((o) => (
                  <li key={o} className="text-xs text-ink flex items-start gap-2">
                    <span aria-hidden="true" className="text-gold">✦</span> {o}
                  </li>
                ))}
              </ul>
              <span className="mt-6 text-sm font-semibold text-blue group-hover:translate-x-1 transition-transform">
                View details →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page text-center max-w-2xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-ink">
            Not sure which division you need?
          </h2>
          <p className="mt-4 text-ink-soft">
            Most projects touch two or more divisions. Book a free consultation and we&apos;ll map
            the right scope.
          </p>
          <Link href="/contact" className="btn-blue mt-8 inline-block">
            Talk to TwinkMyst
          </Link>
        </div>
      </section>
    </>
  );
}
