import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Terminal,
  Smartphone,
  ShoppingBag,
  PenTool,
  Package,
  BrainCircuit,
  Bolt,
  Sparkles,
  Mail,
  Diamond,
  Quote,
} from "lucide-react";

const kernelMetrics = [
  { label: "Computation", value: "0.12", unit: "ms" },
  { label: "Fidelity", value: "99.98", unit: "%" },
  { label: "Atmosphere", value: "Pure", unit: "Lux" },
];

const stats = [
  { value: "3", unit: "", label: "Live Client Platforms" },
  { value: "2", unit: "", label: "Mobile Apps Delivered" },
  { value: "6", unit: "", label: "Service Divisions" },
  { value: "Free", unit: "", label: "Discovery Call" },
];

const serviceCards = [
  {
    code: "01 // CODE",
    icon: Terminal,
    title: "Web Development",
    text: "Modern websites and web apps engineered for peak performance, extreme scalability, and measured business growth.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    accent: "text-blue",
    href: "/services/web-development",
  },
  {
    code: "02 // APP",
    icon: Smartphone,
    title: "Mobile Applications",
    text: "Cross-platform mobile experiences designed to feel silky fast, tactile, intuitive, and deeply native on every screen.",
    tags: ["Flutter", "Dart", "iOS", "Android"],
    accent: "text-lav",
    href: "/services/mobile-apps",
  },
  {
    code: "03 // COMMERCE",
    icon: ShoppingBag,
    title: "E-Commerce & Platforms",
    text: "Bespoke digital flagships, curated marketplaces and custom transactional engines built around uncompromising business rigor.",
    tags: ["Headless", "Paystack", "Flutterwave"],
    accent: "text-gold-bright",
    href: "/services/ecommerce",
  },
  {
    code: "04 // DESIGN",
    icon: PenTool,
    title: "UI/UX & Product Design",
    text: "Gallery-grade user interfaces that masterfully intertwine usability, clarity, and computational luxury aesthetics.",
    tags: ["Design Systems", "Figma Tokens", "Prototypes"],
    accent: "text-blue",
    href: "/services/ui-ux-branding",
  },
  {
    code: "05 // ASSETS",
    icon: Package,
    title: "Digital Products",
    text: "Production-ready templates, developer toolkits, creative shaders, and downloadable assets for engineering teams.",
    tags: ["Boilerplates", "Component Kits", "Shaders"],
    accent: "text-gold-bright",
    href: "/services/digital-products",
  },
  {
    code: "06 // INTELLIGENCE",
    icon: BrainCircuit,
    title: "Creative & AI",
    text: "Generative visual systems, bespoke agent workflows, interactive spatial experiments, and next-generation sensory brand media.",
    tags: ["LLM Pipelines", "Three.js", "Diffusion Models"],
    accent: "text-lav",
    href: "/services/ai-creative-media",
  },
];

const projects = [
  {
    span: "lg:col-span-7",
    category: "Web & AI",
    title: "AuraOS",
    text: "Next-generation ambient spatial operating system interface engineered for zero-latency neural interactions.",
    tags: ["Next.js 15", "WebGPU", "Vector Engine"],
    image: "/images/auraos.jpg",
    alt: "Editorial preview of the AuraOS spatial user interface with dark glass dashboard and violet widgets",
    accent: "group-hover:border-blue/50 group-hover:text-blue",
    pill: "tag-blue",
    href: "/portfolio",
  },
  {
    span: "lg:col-span-5",
    category: "Fintech & Luxury",
    title: "Krona Vault",
    text: "Luxury timepiece decentralized authentication exchange and physical custody verification platform.",
    tags: ["Multi-Chain", "Solidity", "Micro-Animation"],
    image: "/images/krona.jpg",
    alt: "Luxury timepiece vault interface blending gold watch mechanics with crypto ledger charts",
    accent: "group-hover:border-gold/50 group-hover:text-gold-bright",
    pill: "tag-gold",
    href: "/portfolio",
  },
  {
    span: "lg:col-span-5",
    category: "Mobile Application",
    title: "Veloce Mobility",
    text: "Autonomous EV fleet dispatch and telemetry application built with tactile high-frequency haptic interactions.",
    tags: ["Flutter", "WebSockets", "Mapbox GL"],
    image: "/images/veloce.jpg",
    alt: "Futuristic EV fleet dispatch mobile application dashboard with electric blue map vectors",
    accent: "group-hover:border-blue/50 group-hover:text-blue",
    pill: "tag-blue",
    href: "/portfolio",
  },
  {
    span: "lg:col-span-7",
    category: "Creative Direction",
    title: "Solis Studio",
    text: "Generative 3D visual identity system and spatial gallery for an international architectural collective.",
    tags: ["WebGL", "Spline 3D", "Editorial Typography"],
    image: "/images/solis.jpg",
    alt: "Generative 3D visual identity showcase with iridescent liquid metal shapes in a gallery space",
    accent: "group-hover:border-lav/50 group-hover:text-lav",
    pill: "tag-blue",
    href: "/portfolio",
  },
];

const products = [
  {
    price: "$89",
    category: "UI Kits & Tokens",
    title: "Nebula Design System Pro",
    text: "Over 2,400 crafted components and design token pipelines for high-velocity teams.",
    image: "/images/nebula.jpg",
    alt: "Abstract 3D UI kit preview for Nebula Design System Pro",
  },
  {
    price: "$129",
    category: "Developer Boilerplate",
    title: "Lumina Next.js Engine",
    text: "Enterprise Next.js starter suite with auth, database, Stripe, and analytics built-in.",
    image: "/images/lumina.jpg",
    alt: "Developer boilerplate graphic for Lumina Next.js Engine",
  },
  {
    price: "$69",
    category: "Creative Assets & Shaders",
    title: "Aether Motion Suite",
    text: "Collection of 45 GPU-accelerated GLSL shaders, ambient backdrops, and interactive loops.",
    image: "/images/aether.jpg",
    alt: "Motion shader pack preview with golden shimmering fluid waveforms",
  },
  {
    price: "$149",
    category: "Business Templates",
    title: "Apex Commerce Kit",
    text: "Complete conversion-engineered headless e-commerce stack designed for luxury brands.",
    image: "/images/apex.jpg",
    alt: "Apex Commerce Kit preview showing luxury digital storefront templates",
  },
];

const testimonials = [
  {
    quote:
      "TwinkMyst took our practice online with a site that finally matches the quality of our clinic. Patients can now find us, read about our services and reach out before they ever call — the process was clear and everything landed on schedule.",
    name: "Highlands Family Dental",
    role: "Dental practice · Houston, TX",
    href: "https://highlandsfamilydental.net/",
  },
  {
    quote:
      "From the website to the companion apps, the team delivered with real attention to detail. Communication was fast, deadlines held, and the finished product felt genuinely premium.",
    name: "Premon Care",
    role: "Healthcare platform · Web, Android & iOS",
    href: "https://premoncare.netlify.app/",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discover",
    text: "Understand the core idea, define technical constraints, audit user intent, and align on explicit desired business outcomes.",
  },
  {
    num: "02",
    title: "Design",
    text: "Turn abstract concepts into concrete interactive prototypes, cohesive design tokens, and a distinctive luxury visual language.",
  },
  {
    num: "03",
    title: "Build",
    text: "Develop the artifact using resilient modern technology, stringent unit tests, zero-bloat state management, and silky micro-interactions.",
  },
  {
    num: "04",
    title: "Launch",
    text: "Battle-test under peak load, refine based on live performance metrics, and prepare the digital artifact for widespread user love.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full overflow-hidden pb-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-blue-container/20 via-lav/15 to-transparent blur-[140px] rounded-full"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-48 right-10 w-96 h-96 bg-gold/10 blur-[120px] rounded-full"
        />

        <div className="container-page relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6" data-aos="fade-up">
            <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-line/60 backdrop-blur-md">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-blue animate-pulse shadow-[0_0_8px_#3291ff]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">
                Digital Innovation Lab &amp; Studio
              </span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-gold-bright">
              <Globe size={14} /> Worldwide Client Delivery • Q1 2026 Active
            </span>
          </div>

          <div className="max-w-5xl mb-10" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] leading-[1.1] font-bold tracking-tight text-ink mb-6 font-display">
              Turning Ideas Into <br className="hidden sm:block" />
              <span className="gradient-text">Digital Reality.</span>
            </h1>
            <p className="text-lg leading-7 text-ink-soft max-w-2xl">
              We design and build premium websites, applications, digital products and creative
              experiences for ambitious ideas.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-14" data-aos="fade-up" data-aos-delay="200">
            <Link href="/contact" className="btn-blue">
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link href="/portfolio" className="btn-outline-light">
              Explore Our Work
            </Link>
          </div>

          {/* Kernel visual */}
          <div
            className="relative rounded-2xl overflow-hidden border border-line min-h-[380px] md:min-h-[460px]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              src="/images/hero-galaxy.jpg"
              alt="Cosmic nebula backdrop representing the TwinkMyst digital innovation lab"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/30 to-transparent" />

            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md border border-line/60 text-[11px] font-bold uppercase tracking-widest text-ink">
                TwinkMyst Kernel v4.2
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-soft border border-blue/30 text-[11px] font-bold uppercase tracking-widest text-blue">
                ● Active Stream
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto grid grid-cols-3 gap-3 max-w-md">
              {kernelMetrics.map((m) => (
                <div key={m.label} className="rounded-xl bg-surface/80 backdrop-blur-md border border-line/60 p-3">
                  <div className="text-[10px] uppercase tracking-widest text-ink-soft">{m.label}</div>
                  <div className="mt-1 font-display font-bold text-ink">
                    {m.value}
                    <span className="ml-1 text-xs text-blue">{m.unit}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 hidden sm:flex items-center gap-3 rounded-xl bg-surface/80 backdrop-blur-md border border-line/60 px-4 py-3">
              <Diamond size={16} className="text-gold-bright" />
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-gold-bright">
                  Algorithmic Luxury
                </div>
                <div className="text-[11px] text-ink-soft">Bespoke Digital Artifacts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="w-full py-16 bg-abyss border-y border-line/30">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-up">
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-3 text-3xl md:text-[44px] leading-tight font-bold tracking-tight text-ink">
              Ideas deserve more than ordinary execution.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed max-w-xl">
              TwinkMyst combines design, technology and creativity to turn concepts into meaningful
              digital experiences. We partner with visionaries seeking artifacts that stand out with
              distinction.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
            {stats.map((s) => (
              <div key={s.label} className="card p-6">
                <div className="font-display text-3xl md:text-4xl font-bold text-ink">
                  {s.value}
                  <span className="text-blue">{s.unit}</span>
                </div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-widest text-ink-soft">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="w-full py-20 md:py-28 relative" id="services">
        <div className="container-page">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12" data-aos="fade-up">
            <div>
              <p className="eyebrow">[ What We Do ]</p>
              <h2 className="mt-3 text-3xl md:text-[44px] font-bold tracking-tight text-ink">
                From Idea To Digital Experience.
              </h2>
            </div>
            <p className="text-sm text-ink-soft max-w-md leading-relaxed">
              A bespoke multi-disciplinary practice executing at the convergence of resilient
              software architecture and expressive aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className={`card card-hover p-7 group ${s.accent}`}
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">
                    {s.code}
                  </span>
                  <s.icon size={20} className="opacity-70 group-hover:opacity-100 transition" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink group-hover:text-inherit transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full border border-line text-[10px] font-bold uppercase tracking-widest text-ink-soft">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="w-full py-20 md:py-24 bg-abyss border-t border-line/30" id="work">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10" data-aos="fade-up">
            <div>
              <p className="eyebrow">[ Selected Work ]</p>
              <h2 className="mt-3 text-3xl md:text-[44px] font-bold tracking-tight text-ink">
                Ideas We&apos;ve Brought to Life.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-blue hover:text-gold-bright transition"
            >
              View Full Archive <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className={`${p.span} group rounded-2xl bg-surface border border-line overflow-hidden flex flex-col ${p.accent} transition-all duration-500`}
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="relative w-full h-72 sm:h-80 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-abyss/80 backdrop-blur-md ${p.pill}`}>
                    {p.category}
                  </span>
                </div>
                <div className="p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-ink group-hover:text-inherit transition-colors">
                        {p.title}
                      </h3>
                      <ArrowUpRight size={18} className="text-ink-soft group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                    <p className="text-sm leading-relaxed text-ink-soft max-w-xl">{p.text}</p>
                  </div>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 pt-4 border-t border-line text-[10px] font-bold uppercase tracking-widest text-ink-soft">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Featured case study */}
          <div className="mt-8 grid lg:grid-cols-2 gap-6 rounded-2xl bg-surface border border-line overflow-hidden" data-aos="fade-up">
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="tag-gold">Featured Case Study</span>
                <span className="tag-blue">Enterprise Ecosystem</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-ink">
                Hyperion Capital: Algorithmic Luxury
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                An end-to-end bespoke digital banking platform uniting algorithmic investment
                intelligence with an uncompromising luxury design language. Built from scratch to
                serve high-net-worth sovereign individuals.
              </p>
              <div className="grid grid-cols-2 gap-6 py-4 my-4 border-y border-line">
                <div>
                  <span className="block text-2xl font-bold text-blue">+340%</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-ink-soft">
                    User Engagement
                  </span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-gold-bright">&lt; 100ms</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-ink-soft">
                    Latency Architecture
                  </span>
                </div>
              </div>
              <Link href="/portfolio" className="btn-gold self-start">
                View Project Case Study <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative min-h-[300px] group">
              <Image
                src="/images/hyperion.jpg"
                alt="Hyperion Capital digital flagship dashboard rendered on dual displays"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
              <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-abyss/80 backdrop-blur-md border border-line text-[10px] font-bold uppercase tracking-widest text-ink-soft">
                Institutional Core v2.4 · Global Deployment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT VOICES */}
      <section className="w-full py-20 md:py-24 border-t border-line/30" id="testimonials">
        <div className="container-page">
          <div className="max-w-2xl mb-12" data-aos="fade-up">
            <p className="eyebrow">[ Client Voices ]</p>
            <h2 className="mt-3 text-3xl md:text-[44px] font-bold tracking-tight text-ink">
              Real Businesses. Real Results.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="card p-7 flex flex-col"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <Quote size={26} className="text-gold-bright" aria-hidden="true" />
                <blockquote className="mt-5 text-sm leading-relaxed text-ink-soft flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-line flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold text-ink text-sm">{t.name}</div>
                    <div className="text-xs text-ink-soft">{t.role}</div>
                  </div>
                  <a
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-blue hover:text-gold-bright transition"
                  >
                    Live site <ArrowUpRight size={12} />
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL PRODUCTS */}
      <section className="w-full py-20 md:py-24 bg-abyss border-t border-line/30" id="products">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10" data-aos="fade-up">
            <div>
              <p className="eyebrow">[ TwinkMyst Goods ]</p>
              <h2 className="mt-3 text-3xl md:text-[44px] font-bold tracking-tight text-ink">
                Digital Tools Made to Create.
              </h2>
            </div>
            <Link
              href="/store"
              className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-blue hover:text-gold-bright transition"
            >
              Explore Digital Products <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <article
                key={p.title}
                className="group rounded-2xl bg-surface border border-line overflow-hidden hover:border-blue/50 transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-abyss/85 backdrop-blur border border-gold/40 text-gold-bright text-xs font-bold">
                    {p.price}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink-soft">
                    {p.category}
                  </span>
                  <h3 className="mt-2 font-bold text-ink group-hover:text-blue transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft">{p.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-gold-bright">
                    Acquire License <ArrowRight size={12} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="w-full py-20 md:py-28 relative">
        <div className="container-page">
          <div className="max-w-2xl mb-12" data-aos="fade-up">
            <p className="eyebrow">[ How We Work ]</p>
            <h2 className="mt-3 text-3xl md:text-[44px] font-bold tracking-tight text-ink">
              From First Thought to Final Product.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Our methodology is engineered to demystify complex technical hurdles while maintaining
              gallery-level craft from kickoff to global release.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <div
                key={s.num}
                className="border-t-2 border-blue pt-5"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <span className="text-[11px] font-bold tracking-[0.12em] text-gold-bright">{s.num}</span>
                <h3 className="mt-2 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUATION */}
      <section className="w-full py-24 bg-abyss border-y border-line/30 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet/10 blur-[140px] rounded-full"
        />
        <div className="container-page relative text-center">
          <p className="eyebrow" data-aos="fade-up">
            [ Our Foundational Equation ]
          </p>
          <h2
            className="mt-6 text-[34px] sm:text-[54px] lg:text-[72px] leading-none font-extrabold tracking-tight text-ink uppercase select-none"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Design <span className="text-gold">+</span> Technology{" "}
            <span className="text-gold">+</span> Creativity
          </h2>
          <p className="mt-6 text-ink-soft max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            One creative studio for ideas that need both boundless imagination and surgical
            execution.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            <div className="card p-7 hover:border-blue/50 transition" data-aos="fade-up">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-blue-soft border border-blue/30 flex items-center justify-center">
                  <Bolt size={18} className="text-blue" />
                </span>
                <div>
                  <h3 className="font-bold text-ink">TWINK Spectrum</h3>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-blue">
                    Electric Energy • Radical Innovation
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Represents radical technical innovation, lightning performance, electric
                problem-solving, and state-of-the-art computational craftsmanship.
              </p>
            </div>

            <div className="card p-7 hover:border-gold/50 transition" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <Sparkles size={18} className="text-gold-bright" />
                </span>
                <div>
                  <h3 className="font-bold text-ink">MYST Prestige</h3>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gold-bright">
                    Timeless Luxury • Editorial Wonder
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Evokes deep sophistication, curated mystery, timeless luxury, and the intangible
                prestige that elevates functional tools into cultural artifacts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="w-full py-24 relative" id="about">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden border border-line min-h-[340px]" data-aos="fade-up">
            <Image
              src="/images/studio.jpg"
              alt="Monochrome photograph of the TwinkMyst creative digital studio atelier"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="tag-blue">TwinkMyst Atelier</span>
              <span className="tag-gold">Bespoke Engineering • Global Operations</span>
            </div>
            <p className="eyebrow">About The Studio</p>
            <h2 className="mt-3 text-3xl md:text-[44px] font-bold tracking-tight text-ink">
              More Than a Digital Studio.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              TwinkMyst exists to bridge the gap between imagination and execution. We combine
              design, development and creative technology to transform ideas into digital
              experiences people can use, remember and enjoy.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              We don&apos;t settle for templated outcomes or fleeting trends. Every digital artifact
              we release is built from first principles—engineered with obsessive care for speed,
              beauty, and long-term durability in market.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { value: "100%", label: "Independent" },
                { value: "Bespoke", label: "Never Templates" },
                { value: "Global", label: "Scale Ready" },
              ].map((b) => (
                <div key={b.label} className="rounded-xl bg-surface border border-line p-4 text-center">
                  <div className="font-display font-bold text-blue">{b.value}</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-ink-soft">
                    {b.label}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-outline-dark mt-8">
              The Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-24 bg-gradient-to-b from-surface via-abyss to-abyss border-t border-line/40 relative overflow-hidden">
        <div className="container-page text-center max-w-3xl mx-auto" data-aos="fade-up">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gold-bright">
            Project Inquiries Open for 2026
          </p>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-[64px] leading-tight font-bold tracking-tight text-ink">
            Have an Idea?{" "}
            <span className="gradient-text">Let&apos;s Make It Real.</span>
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed">
            Tell us what you&apos;re imagining. We&apos;ll help turn it into something digital,
            meaningful, and extraordinary.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-blue">
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-outline-light">
              <Mail size={15} /> Contact TwinkMyst
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
