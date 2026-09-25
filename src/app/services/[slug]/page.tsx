import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, type ServiceSlug } from "@/lib/services";
import { ServiceIcon } from "@/components/ServiceIcon";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === (slug as ServiceSlug));
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="bg-abyss text-white py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/50" data-aos="fade-up">
            <Link href="/services" className="hover:text-gold">
              Services
            </Link>{" "}
            / <span className="text-white/80">{service.title}</span>
          </nav>
          <div data-aos="fade-up">
            <ServiceIcon name={service.icon} size={40} className="text-gold-bright" />
          </div>
          <h1
            className="mt-4 text-4xl md:text-5xl font-bold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {service.title}
          </h1>
          <p className="mt-4 text-white/70 text-lg" data-aos="fade-up" data-aos-delay="200">
            {service.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="300">
            <Link href="/contact" className="btn-gold">
              {service.cta}
            </Link>
            <Link href="/portfolio" className="btn-outline-light">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-abyss">
        <div className="container-page grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 card p-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-ink">What we deliver</h2>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {service.offerings.map((o) => (
                <li
                  key={o}
                  className="flex items-start gap-3 text-ink bg-abyss rounded-xl px-4 py-3"
                >
                  <span aria-hidden="true" className="text-blue mt-0.5">✦</span>
                  {o}
                </li>
              ))}
            </ul>
            {service.tech && (
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-soft">
                  Technologies
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium bg-blue-soft text-blue px-3 py-1.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="card p-8 h-fit" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-lg font-semibold text-ink">Pricing approach</h2>
            <p className="mt-3 text-sm text-ink-soft">
              We price in packages and project scopes — not vague hourly rates. Your quote depends on
              features, roles, integrations and timeline.
            </p>
            <Link href="/contact" className="btn-blue mt-6 block text-center">
              Request a Quote
            </Link>
            <p className="mt-4 text-xs text-ink-soft">
              Prefer to explore first? Browse the{" "}
              <Link href="/store" className="text-blue underline">
                Digital Store
              </Link>{" "}
              for ready-made products.
            </p>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-ink mb-6" data-aos="fade-up">
            Explore other services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card card-hover p-5 text-sm font-medium text-ink hover:text-blue"
                data-aos="fade-up"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
