export type ServiceSlug =
  | "web-development"
  | "mobile-apps"
  | "ecommerce"
  | "ui-ux-branding"
  | "ai-creative-media"
  | "digital-products";

export interface Service {
  slug: ServiceSlug;
  title: string;
  short: string;
  description: string;
  icon: string;
  offerings: string[];
  tech?: string[];
  cta: string;
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Website & Web Application Development",
    short: "Business websites, dashboards, portals, SaaS and custom web apps built with Next.js and modern stacks.",
    description:
      "From polished company websites to full web applications — admin dashboards, booking systems, membership platforms and SaaS products engineered for performance, security and scale.",
    icon: "Globe",
    offerings: [
      "Company & corporate websites",
      "Portfolio & landing pages",
      "Restaurant, real-estate, school & ministry sites",
      "Admin dashboards & customer portals",
      "Booking & membership systems",
      "Marketplaces & e-commerce platforms",
      "SaaS applications & internal tools",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Sanity", "PostgreSQL", "REST APIs"],
    cta: "Start a web project",
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    short: "One codebase. Android + iOS. Flutter apps for business, marketplace, booking and more.",
    description:
      "We design and ship cross-platform mobile applications with Flutter — from MVPs to full business apps with payments, notifications and store deployment.",
    icon: "Smartphone",
    offerings: [
      "Android & iOS applications",
      "Cross-platform Flutter apps",
      "Business & customer apps",
      "Marketplace & e-commerce apps",
      "Booking & service-provider apps",
      "Education apps",
      "Customer-management tools",
      "App Store & Play Store deployment",
    ],
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
    cta: "Plan your app",
  },
  {
    slug: "ecommerce",
    title: "E-commerce & Digital Marketplaces",
    short: "Online stores, multi-vendor marketplaces and payment integrations (Paystack, Flutterwave).",
    description:
      "Sell products or digital goods with confidence. We build stores, vendor dashboards, order management and payment flows tailored to Nigerian and international businesses.",
    icon: "ShoppingCart",
    offerings: [
      "Online stores",
      "Digital-product stores",
      "Multi-vendor & creator marketplaces",
      "Subscription & download platforms",
      "Vendor & customer dashboards",
      "Order & product management",
      "Payment integration",
    ],
    tech: ["Paystack", "Flutterwave", "Next.js", "PostgreSQL"],
    cta: "Build your store",
  },
  {
    slug: "ui-ux-branding",
    title: "UI/UX & Brand Design",
    short: "Figma prototypes, design systems, logo and brand identity that make ideas shine.",
    description:
      "Beautiful, usable interfaces and brand identities — from a single landing page to a complete brand system your team can grow with.",
    icon: "Palette",
    offerings: [
      "Website & mobile UI design",
      "Dashboard & landing-page design",
      "Figma prototypes",
      "Design systems",
      "Logo & brand identity",
      "Brand Starter package",
      "Social-media graphics",
      "Presentations & marketing materials",
    ],
    cta: "Design with us",
  },
  {
    slug: "ai-creative-media",
    title: "AI & Creative Media",
    short: "Short-form video, promos, explainers, AI-assisted images and voice-over — transparently produced.",
    description:
      "Video and creative content for brands and creators — YouTube, TikTok, Reels, product promos and AI-assisted production, always with transparent disclosure.",
    icon: "Clapperboard",
    offerings: [
      "YouTube, TikTok & Reels videos",
      "Business adverts & promos",
      "Explainer & product videos",
      "Short-form content packages",
      "AI-generated images & visualizations",
      "Voice-over production",
      "AI-assisted editing",
      "Monthly creator packages",
    ],
    cta: "Create content",
  },
  {
    slug: "digital-products",
    title: "Digital Products",
    short: "Templates, starter kits, presets and resources — created once, valuable forever.",
    description:
      "A growing library of digital products for businesses, developers, creators and professionals. Buy once, use repeatedly — or license for your team.",
    icon: "Package",
    offerings: [
      "Business & proposal templates",
      "Next.js / React / Flutter starter kits",
      "Admin dashboards & SaaS starters",
      "LUTs, presets & thumbnail templates",
      "Motion graphics & sound effects",
      "CV & portfolio templates",
      "Study & productivity resources",
    ],
    cta: "Browse the store",
  },
];

export const solutions = [
  {
    title: "For Businesses",
    description:
      "Restaurants, fashion, real estate, schools, clinics, churches and professional services — a complete digital presence that wins trust.",
    points: ["Starter & business websites", "WhatsApp & payment integration", "Digital Business Launch package"],
  },
  {
    title: "For Startups",
    description:
      "Founders launching SaaS products, marketplaces and online stores need speed without sacrificing quality.",
    points: ["MVP web apps", "Landing pages & brand identity", "Scalable architecture (Next.js + Supabase)"],
  },
  {
    title: "For Creators",
    description:
      "YouTubers, coaches, musicians and influencers — content systems and platforms that grow your audience.",
    points: ["Short-form video packages", "Thumbnails & social graphics", "Membership & community platforms"],
  },
  {
    title: "For Developers",
    description:
      "Agencies and developers who need a white-label build partner or ready-made starter kits.",
    points: ["White-label development", "Starter kits & components", "Reliable B2B delivery"],
  },
];
