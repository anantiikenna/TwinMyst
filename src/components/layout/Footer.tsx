import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

const columns = [
  {
    title: "Artifacts",
    links: [
      { label: "Selected Work", href: "/portfolio" },
      { label: "Case Studies", href: "/portfolio" },
      { label: "Digital Artifacts", href: "/store" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Services & Capabilities", href: "/services" },
      { label: "The Philosophy", href: "/about" },
      { label: "Studio Press", href: "/about" },
    ],
  },
];

const network = [
  { label: "Instagram", glyph: "◎", href: "#" },
  { label: "LinkedIn", glyph: "in", href: "#" },
  { label: "GitHub", glyph: "⌘", href: "#" },
  { label: "YouTube", glyph: "▶", href: "#" },
];

export function Footer() {
  return (
    <footer className="w-full bg-abyss border-t border-line/30 text-ink-soft">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-mark.svg"
                alt=""
                width={32}
                height={40}
                className="shrink-0"
              />
              <span className="font-display text-2xl font-bold tracking-tight text-ink">
                Twink<span className="text-blue">Myst</span>
              </span>
            </Link>
            <p className="text-sm font-semibold text-ink">Turning Ideas Into Digital Reality.</p>
            <p className="mt-3 text-sm leading-relaxed max-w-md">
              A bespoke digital creation studio engineering ultra-high fidelity software,
              algorithmic environments, and computational luxury artifacts.
            </p>

            <div className="mt-8 p-5 rounded-xl bg-surface border border-line">
              <p className="eyebrow">Inquiries</p>
              <p className="mt-2 text-sm text-ink">Let&apos;s build something meaningful together.</p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold-bright hover:text-gold transition"
              >
                Initiate Brief <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold-bright mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-ink-soft hover:text-ink transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold-bright mb-4">
              Network
            </h3>
            <ul className="space-y-2">
              {network.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition"
                  >
                    <span aria-hidden="true" className="text-blue w-4 text-center">{n.glyph}</span>{" "}
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="mailto:twinkmystt@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm text-blue hover:text-gold-bright transition"
            >
              <Mail size={14} /> twinkmystt@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line/40 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ink-soft/70">
          <p>© {new Date().getFullYear()} TwinkMyst. All rights reserved.</p>
          <p className="uppercase tracking-widest">Computational Artistry • Global Studio</p>
        </div>
      </div>
    </footer>
  );
}
