import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider } from "@/components/layout/CookieConsent";
import { AOSInit } from "@/components/layout/AOSInit";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://twinkmyst.netlify.app"),
  title: {
    template: "%s | TwinkMyst",
    default: "TwinkMyst — Turning Ideas Into Digital Reality",
  },
  description:
    "We design and build premium websites, applications, digital products and creative experiences for ambitious ideas.",
  keywords: [
    "web development",
    "mobile app development",
    "UI UX design",
    "e-commerce development",
    "digital studio",
    "TwinkMyst",
    "brand identity",
    "AI creative services",
  ],
  openGraph: {
    title: "TwinkMyst — Turning Ideas Into Digital Reality",
    description:
      "Premium websites, applications, digital products and creative experiences for ambitious ideas.",
    url: "https://twinkmyst.netlify.app",
    siteName: "TwinkMyst",
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <AOSInit />
        <CookieConsentProvider>
          <Navbar />
          <main id="main-content" className="pt-20">{children}</main>
          <Footer />
          <WhatsAppButton />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
