"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import { services } from "@/lib/services";

interface NavLink {
  href: string;
  label: string;
}

export function NavbarClient({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function close() {
    setOpen(false);
  }

  return (
    <div className="flex items-center gap-6">
      <div className="hidden lg:flex items-center gap-8">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ${
                active
                  ? "text-blue font-bold"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="hidden lg:flex items-center gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-container to-lav text-abyss text-[12px] font-bold uppercase tracking-widest border border-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(151,123,255,0.6)]"
        >
          [ Let&apos;s Talk ]
        </Link>
        <span
          aria-hidden="true"
          className="w-8 h-8 rounded-full bg-blue flex items-center justify-center"
        >
          <User size={16} className="text-white" />
        </span>
      </div>

      <button
        type="button"
        className="lg:hidden text-ink p-2"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full bg-surface border-b border-line/30 lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="container-page py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="px-3 py-3 text-sm font-semibold uppercase tracking-widest text-ink-soft hover:text-blue"
              >
                {link.label}
              </Link>
            ))}
            <details className="px-3 py-2">
              <summary className="text-sm font-semibold uppercase tracking-widest text-ink-soft cursor-pointer">
                Capabilities
              </summary>
              <div className="mt-2 pl-3 flex flex-col border-l border-line">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={close}
                    className="py-2 text-sm text-ink-soft hover:text-blue"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/contact" onClick={close} className="btn-blue mt-3 text-center">
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
