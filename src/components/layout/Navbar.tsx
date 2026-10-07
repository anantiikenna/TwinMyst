import Link from "next/link";
import Image from "next/image";
import { NavbarClient } from "./NavbarClient";

const navLinks = [
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/store", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-line/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <nav
        aria-label="Main"
        className="container-page flex items-center justify-between h-20"
      >
        <Link href="/" className="flex items-center gap-2.5 group shrink-0" aria-label="TwinkMyst home">
          <Image
            src="/images/logo-mark.svg"
            alt=""
            width={26}
            height={32}
            priority
            className="group-hover:scale-110 transition-transform"
          />
          <span className="font-display text-xl tracking-tight font-bold text-ink">
            Twink<span className="text-blue">Myst</span>
          </span>
        </Link>
        <NavbarClient links={navLinks} />
      </nav>
    </header>
  );
}
