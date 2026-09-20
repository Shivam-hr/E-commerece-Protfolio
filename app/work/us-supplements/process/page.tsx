import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import CaseStudyTabNav from "@/components/case-study/CaseStudyTabNav";
import {
  ArrowRight,
  Target,
  X,
  Search,
  LayoutTemplate,
  Paintbrush,
  Code2,
  ShieldCheck,
  Rocket,
  Triangle,
  Zap,
  Bot,
  CreditCard,
  Package,
  Tags,
  Heart,
  ShoppingCart,
  Compass,
  Bell,
  Smartphone,
  Image as ImageIcon,
} from "lucide-react";
import usSupplementsPreview from "@/Images/us-supplements-preview.png";
import WhatsApp from "@/Images/whatsapp-icon.png";

const challenges = [
  "No existing website or digital presence",
  "Poor mobile shopping experience in the market",
  "Complex checkout & limited payment options",
  "Lack of trust signals and brand credibility",
  "Manual order management & communication",
];

const processSteps = [
  {
    n: "1",
    label: "Research",
    icon: Search,
    desc: "Analyzed leading supplement stores, user behavior, and market trends.",
  },
  {
    n: "2",
    label: "Wireframes",
    icon: LayoutTemplate,
    desc: "Mapped all key user flows from browsing to order tracking.",
  },
  {
    n: "3",
    label: "UI Design",
    icon: Paintbrush,
    desc: "Designed a bold, performance-driven interface aligned with the fitness category.",
  },
  {
    n: "4",
    label: "Development",
    icon: Code2,
    desc: "Built the platform using Next.js & Supabase with a custom product scraper.",
  },
  {
    n: "5",
    label: "Testing",
    icon: ShieldCheck,
    desc: "Tested across devices, browsers, and scenarios for a bug-free experience.",
  },
  {
    n: "6",
    label: "Launch",
    icon: Rocket,
    desc: "Deployed on Netlify with live payments and automated order notifications.",
  },
];

// TODO(Shivam): swap each placeholder for the real wireframe export
const wireframes = ["Homepage", "Category Page", "Product Page", "Cart Page", "Checkout Page"];

// TODO(Shivam): swap each placeholder for the real UI screenshot
const uiDesigns = ["Homepage Design", "Product Page Design", "Cart Drawer Design", "Checkout Design"];

const devStack = [
  { label: "Next.js + React", desc: "For a fast, SEO-friendly frontend.", icon: Triangle, iconBg: "bg-black text-white" },
  { label: "Supabase", desc: "Secure database, auth & real-time data.", icon: Zap, iconBg: "bg-[#3ECF8E]/25 text-[#249361]" },
  { label: "Custom Scraper", desc: "Tool to import 250+ real products automatically.", icon: Bot, iconBg: "bg-accent/20 text-ink" },
  { label: "Payment Integration", desc: "Secure and reliable payment integration.", icon: CreditCard, iconBg: "bg-[#0A2540]/15 text-[#0A2540]" },
  { label: "WhatsApp & Email", desc: "Automated order updates to customers & owner.", image: WhatsApp, iconBg: "bg-cardWarm" },
];

const features = [
  { label: "Product Catalog", icon: Package },
  { label: "Category & Brand Browsing", icon: Tags },
  { label: "Advanced Search", icon: Search },
  { label: "Wishlist", icon: Heart },
  { label: "Cart & Checkout", icon: ShoppingCart },
  { label: "Payment Integration", icon: CreditCard },
  { label: "Order Tracking", icon: Compass },
  { label: "WhatsApp & Email Updates", image: WhatsApp },
  { label: "Toast Notifications", icon: Bell },
  { label: "Fully Responsive", icon: Smartphone },
];

const palette = [
  { hex: "#0B0B0B", swatch: "bg-[#0B0B0B]" },
  { hex: "#C7F000", swatch: "bg-[#C7F000]" },
  { hex: "#FFFFFF", swatch: "bg-white border border-border" },
  { hex: "#1E1E1E", swatch: "bg-[#1E1E1E]" },
  { hex: "#666666", swatch: "bg-[#666666]" },
];

export default function USSupplementsProcess() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <CaseStudyTabNav
        basePath="/work/us-supplements"
        active="process"
        nextLabel="Showcase"
        nextHref="/work/us-supplements/showcase"
      />

      {/* Hero */}
      <section className="px-8 lg:px-16 pb-10">
        <div className="grid lg:grid-cols-[0.8fr_1.6fr] gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-ink">
                The Process
              </span>
            </div>

            <h1 className="font-display font-semibold text-[38px] sm:text-5xl leading-[1.1] tracking-tight text-ink mb-5">
              How We Built
              <br />
              <span className="font-serif italic font-medium text-accent">US Supplements</span>
            </h1>

            <p className="text-muted text-base leading-relaxed max-w-sm">
              A clear, step-by-step journey from research and design to development and a live,
              high-performance store.
            </p>
          </div>

          {/* Hero mockup — reused from Overview */}
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1496 / 1051" }}>
            <Image
              src={usSupplementsPreview}
              alt="US Supplements website preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* 01. Challenge */}
      <section className="px-8 lg:px-16 pb-8">
        <div className="bg-card border border-border rounded-card p-7">
          <div className="flex gap-6 items-start">
            <div className="shrink-0 w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
              <Target size={26} className="text-ink" />
            </div>
            <div className="flex-1">
              <h2 className="font-heading font-semibold text-lg tracking-wide uppercase text-ink mb-4">
                01. <span className="text-accent">Challenge</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <p className="text-muted text-[14px] leading-relaxed">
                  The client needed a premium e-commerce store that could compete with leading
                  supplement brands from day one. It had to deliver a complete product catalog, a
                  smooth mobile shopping experience, secure payments, and automated order updates
                  for both customers and the business owner.
                </p>
                <ul className="space-y-2.5 md:border-l md:border-border md:pl-8">
                  {challenges.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-[13.5px] text-ink">
                      <X size={14} className="text-red-400 shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Our Process */}
      <section className="px-8 lg:px-16 pb-8">
        <div className="bg-card border border-border rounded-card p-7">
          <h2 className="font-heading font-semibold text-lg tracking-wide uppercase text-ink mb-7">
            02. <span className="text-accent">Our Process</span>
          </h2>

          <div className="flex flex-wrap items-start justify-between gap-y-8">
            {processSteps.map(({ label, icon: Icon, desc }, i) => (
              <div key={label} className="flex items-start">
                <div className="flex flex-col items-center text-center w-[150px]">
                  <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mb-3">
                    <Icon size={22} className="text-ink" />
                  </div>
                  <div className="font-display font-semibold text-sm text-ink mb-1">
                    {i + 1} &nbsp;{label}
                  </div>
                  <p className="text-muted text-[12px] leading-relaxed">{desc}</p>
                </div>
                {i !== processSteps.length - 1 && (
                  <div className="hidden lg:block w-10 border-t-2 border-dashed border-border mt-7 mx-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Wireframes */}
      <section className="px-8 lg:px-16 pb-8">
        <div className="bg-card border border-border rounded-card p-7">
          <div className="flex flex-wrap items-start gap-8">
            <div className="shrink-0 max-w-[220px]">
              <h2 className="font-heading font-semibold text-lg tracking-wide uppercase text-ink mb-3">
                03. <span className="text-accent">Wireframes</span>
              </h2>
              <p className="text-muted text-[13px] leading-relaxed">
                Low-fidelity wireframes were created to validate the structure, user flows, and
                hierarchy before moving into visual design.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-5 gap-4 min-w-[260px]">
              {wireframes.map((label) => (
                <div key={label} className="flex flex-col gap-2">
                  <div className="aspect-[4/3] rounded-xl border-2 border-dashed border-border bg-cardWarm flex items-center justify-center">
                    <ImageIcon size={20} className="text-mutedLight" />
                  </div>
                  <span className="text-[11px] text-muted text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04. UI Design */}
      <section className="px-8 lg:px-16 pb-8">
        <div className="bg-card border border-border rounded-card p-7">
          <div className="flex flex-wrap items-start gap-8">
            <div className="shrink-0 max-w-[220px]">
              <h2 className="font-heading font-semibold text-lg tracking-wide uppercase text-ink mb-3">
                04. <span className="text-accent">UI Design</span>
              </h2>
              <p className="text-muted text-[13px] leading-relaxed">
                A modern, bold and energetic design system was crafted to reflect the power,
                performance and trust of the supplement industry.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 min-w-[260px]">
              {uiDesigns.map((label) => (
                <div key={label} className="flex flex-col gap-2">
                  <div className="aspect-video rounded-xl border-2 border-dashed border-border bg-ink/5 flex items-center justify-center">
                    <ImageIcon size={20} className="text-mutedLight" />
                  </div>
                  <span className="text-[11px] text-muted text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05. Development */}
      <section className="px-8 lg:px-16 pb-8">
        <div className="bg-card border border-border rounded-card p-7">
          <div className="flex flex-wrap items-start gap-8">
            <div className="shrink-0 max-w-[220px]">
              <h2 className="font-heading font-semibold text-lg tracking-wide uppercase text-ink mb-3">
                05. <span className="text-accent">Development</span>
              </h2>
              <p className="text-muted text-[13px] leading-relaxed">
                Built with a modern tech stack and optimized for performance, scalability and a
                seamless shopping experience.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 min-w-[260px]">
              {devStack.map(({ label, desc, icon: Icon, image, iconBg }) => (
                <div key={label} className="bg-cardWarm border border-border rounded-2xl p-4 flex flex-col gap-2">
                  <span className={`w-9 h-9 rounded-full flex items-center justify-center overflow-hidden ${iconBg}`}>
                    {Icon ? (
                      <Icon size={18} />
                    ) : image ? (
                      <Image src={image} alt={label} width={20} height={20} className="object-contain" />
                    ) : null}
                  </span>
                  <div className="text-[13px] font-semibold text-ink">{label}</div>
                  <p className="text-[11.5px] text-muted leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06. Features */}
      <section className="px-8 lg:px-16 pb-8">
        <div className="bg-card border border-border rounded-card p-7">
          <h2 className="font-heading font-semibold text-lg tracking-wide uppercase text-ink mb-7">
            06. <span className="text-accent">Features</span>
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-7 gap-x-4">
            {features.map(({ label, icon: Icon, image }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <span className="w-11 h-11 rounded-full border border-border flex items-center justify-center overflow-hidden">
                  {Icon ? (
                    <Icon size={18} className="text-ink" />
                  ) : image ? (
                    <Image src={image} alt={label} width={18} height={18} className="object-contain" />
                  ) : null}
                </span>
                <span className="text-[11.5px] text-ink leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. Brand Identity */}
      <section className="px-8 lg:px-16 pb-14">
        <div className="bg-card border border-border rounded-card p-7">
          <h2 className="font-heading font-semibold text-lg tracking-wide uppercase text-ink mb-7">
            07. <span className="text-accent">Brand Identity</span>
          </h2>

          <div className="grid sm:grid-cols-4 gap-8">
            {/* Logo — placeholder */}
            <div>
              <div className="text-[11px] tracking-[0.15em] text-mutedLight uppercase mb-3">Logo</div>
              {/* TODO(Shivam): swap for the real US Supplements logo */}
              <div className="w-full aspect-[4/3] rounded-xl border-2 border-dashed border-border bg-cardWarm flex items-center justify-center">
                <ImageIcon size={20} className="text-mutedLight" />
              </div>
            </div>

            {/* Color Palette */}
            <div>
              <div className="text-[11px] tracking-[0.15em] text-mutedLight uppercase mb-3">Color Palette</div>
              <div className="flex flex-wrap gap-3">
                {palette.map(({ hex, swatch }) => (
                  <div key={hex} className="flex flex-col items-center gap-1.5">
                    <div className={`w-10 h-10 rounded-lg ${swatch}`} />
                    <span className="text-[10px] text-muted">{hex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div>
              <div className="text-[11px] tracking-[0.15em] text-mutedLight uppercase mb-3">Typography</div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center gap-1">
                  <span className="font-display text-3xl text-ink">Aa</span>
                  <span className="text-[10px] text-muted text-center leading-tight">
                    Playfair Display
                    <br />
                    (Headings)
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-body text-3xl text-ink">Aa</span>
                  <span className="text-[10px] text-muted text-center leading-tight">
                    Inter
                    <br />
                    (Body)
                  </span>
                </div>
              </div>
            </div>

            {/* UI Elements */}
            <div>
              <div className="text-[11px] tracking-[0.15em] text-mutedLight uppercase mb-3">UI Elements</div>
              <div className="flex flex-col items-start gap-2">
                <span className="bg-accent text-ink text-xs font-semibold px-4 py-2 rounded-btn flex items-center gap-1">
                  Shop Now <ArrowRight size={13} />
                </span>
                <span className="border border-[#D8D2C4] text-ink text-xs font-medium px-4 py-2 rounded-btn">
                  View Details
                </span>
                <div className="flex items-center gap-2 border border-border rounded-btn px-2 py-1">
                  <span className="text-ink text-xs px-1">−</span>
                  <span className="text-ink text-xs">1</span>
                  <span className="text-ink text-xs px-1">+</span>
                </div>
                <span className="bg-ink text-white text-[11px] font-medium px-3 py-1.5 rounded-full">
                  ✓ Added to cart
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom nav strip — glassy */}
      <section className="px-8 lg:px-16 pb-16">
        <Link
          href="/work/us-supplements/showcase"
          className="flex items-center justify-between gap-5 bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-card p-6 hover:bg-white/55 transition-colors"
        >
          <div className="flex items-center gap-5">
            <div className="shrink-0">
              <div className="font-heading text-[11px] tracking-[0.15em] text-mutedLight uppercase mb-1">
                NEXT UP
              </div>
              <div className="font-display font-semibold text-lg text-ink">Showcase</div>
            </div>
            <span className="w-9 h-9 rounded-full border border-ink/25 flex items-center justify-center shrink-0">
              <ArrowRight size={16} className="text-ink" />
            </span>
            <div className="text-muted text-sm">
              See the desktop, mobile and component screens up close.
            </div>
          </div>
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
          </div>
        </Link>
      </section>
    </main>
  );
}