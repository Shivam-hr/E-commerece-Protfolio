import Link from "next/link";
import Navbar from "@/components/Navbar";
import CaseStudyTabNav from "@/components/case-study/CaseStudyTabNav";
import {
  ArrowUpRight,
  Package,
  Tag,
  Smartphone,
  CreditCard,
  MessageCircle,
  Rocket,
  Triangle,
  Atom,
  Wind,
  Zap,
  Github,
  Palette,
  Briefcase,
  User,
  Clock,
  LayoutGrid,
} from "lucide-react";
import Image from "next/image";
import usSupplementsPreview from "@/Images/us-supplements-preview.png";

const highlights = [
  { icon: Package, value: "250+", label: "Products" },
  { icon: Tag, value: "20+", label: "Top Brands" },
  { icon: Smartphone, value: "100%", label: "Responsive" },
  { icon: CreditCard, value: "Secure", label: "Payments" },
  { icon: MessageCircle, value: "WhatsApp & Email", label: "Order Updates" },
  { icon: Rocket, value: "2-3 Weeks", label: "Build Time" },
];

const meta = [
  {
    icon: Briefcase,
    label: "Project",
    value: "US Supplements — premium e-commerce store for fitness supplements",
  },
  {
    icon: User,
    label: "Role",
    value: "UI Design, UX, Frontend Development, Backend Development, Database",
  },
  { icon: Clock, label: "Duration", value: "2 – 3 Weeks" },
  { icon: LayoutGrid, label: "Project Type", value: "Real Client Project — Live & Production" },
];

const goals = [
  "Create a trusted brand experience",
  "Showcase 250+ real products from top brands",
  "Offer a smooth mobile-first shopping experience",
  "Enable secure payments and order tracking",
  "Automate order updates for customers and owner",
];

const techStack = [
  { label: "Next.js", icon: Triangle, iconBg: "bg-black text-white" },
  { label: "React", icon: Atom, iconBg: "bg-[#61DAFB]/25 text-[#149ECA]" },
  { label: "Tailwind CSS", icon: Wind, iconBg: "bg-[#38BDF8]/25 text-[#0EA5E9]" },
  { label: "Supabase", icon: Zap, iconBg: "bg-[#3ECF8E]/25 text-[#249361]" },
  { label: "Razorpay", icon: CreditCard, iconBg: "bg-[#0A2540]/15 text-[#0A2540]" },
  { label: "WhatsApp Integration", icon: MessageCircle, iconBg: "bg-[#25D366]/25 text-[#128C4A]" },
  { label: "Email Integration", icon: MessageCircle, iconBg: "bg-[#EA4335]/20 text-[#C5221F]" },
  { label: "Git / GitHub", icon: Github, iconBg: "bg-black/10 text-ink" },
  { label: "Netlify", icon: Rocket, iconBg: "bg-[#00C7B7]/25 text-[#00857A]" },
  { label: "Figma", icon: Palette, iconBg: "bg-[#F24E1E]/20 text-[#C2410C]" },
];

export default function USSupplementsOverview() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <CaseStudyTabNav
        basePath="/work/us-supplements"
        active="overview"
        nextLabel="Process"
        nextHref="/work/us-supplements/process"
      />

      {/* Hero */}
      <section className="px-8 lg:px-16 pb-10">
        <div className="grid lg:grid-cols-[0.8fr_1.6fr] gap-10 items-center">
          <div>
            <div className="flex gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 bg-accent/25 text-ink text-xs font-medium px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" /> E-Commerce
              </span>
              <span className="inline-flex items-center gap-1.5 bg-cardSoft border border-border text-ink text-xs font-medium px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" /> Full Stack
              </span>
            </div>

            <h1 className="font-display font-semibold text-[42px] sm:text-6xl leading-[1.05] tracking-tight text-ink mb-5">
              US
              <br />
              <span className="font-serif italic font-medium text-accent">Supplements</span>
            </h1>

            <p className="text-muted text-base leading-relaxed max-w-sm mb-8">
              A high-performance e-commerce platform for fitness supplements — built for speed, trust, and mobile shopping.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://ussuppliments.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accentHover transition-colors text-ink text-sm font-semibold px-6 py-3 rounded-btn flex items-center gap-1.5"
              >
                View Live Site <ArrowUpRight size={15} />
              </a>
              <Link
                href="/#work"
                className="bg-transparent text-ink text-sm font-medium px-6 py-3 rounded-btn border border-[#D8D2C4] flex items-center gap-1.5"
              >
                Back to Projects <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          {/* Hero mockup */}
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

      {/* Key Highlights */}

    <section className="px-8 lg:px-16 pb-14">
      <div className="bg-card border border-accent rounded-card p-7">
        <div className="flex flex-wrap items-center justify-between gap-8">
          {/* Stats — left side */}
          <div className="flex flex-nowrap overflow-x-auto">
            {highlights.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={`flex flex-col items-start gap-2 px-7 shrink-0 first:pl-0 ${
                  i !== highlights.length - 1 ? "border-r border-border" : ""
                }`}
              >
                <Icon size={20} className="text-ink" />
                <div className="font-display font-semibold text-lg text-ink leading-tight whitespace-nowrap">
                  {value}
                </div>
                <div className="text-xs text-muted whitespace-nowrap">{label}</div>
              </div>
            ))}
          </div>

          {/* Heading — right side, unchanged from what you have now */}
          <div className="shrink-0">
            <div className="font-heading text-xs tracking-[0.2em] text-mutedLight uppercase mb-1">
              KEY
            </div>
            <h2 className="font-heading font-semibold text-2xl tracking-wide uppercase text-accent mb-1.5">
              HIGHLIGHTS
            </h2>
            <div className="w-10 h-[3px] bg-accent rounded-full" />
          </div>
        </div>
      </div>
    </section>

      {/* Overview / Meta (narrow, left) + Goal (wide, right) */}
      <section className="px-8 lg:px-16 pb-14">
        <div className="grid lg:grid-cols-[0.85fr_1.55fr] gap-5 items-stretch">
          {/* Left column: Overview stacked on Meta */}
          <div className="flex flex-col gap-5">
            <div className="bg-card border border-border rounded-card p-6">
              <h3 className="font-heading font-semibold text-lg tracking-wide uppercase text-ink mb-1.5">
                PROJECT <span className="text-accent">OVERVIEW</span>
              </h3>
              <div className="w-7 h-[3px] bg-accent rounded-full mb-3" />
              <p className="text-muted text-[14px] leading-relaxed">
                US Supplements is a premium e-commerce platform designed for fitness enthusiasts.
                The store offers authentic supplements from top brands with a seamless shopping
                experience, secure payments, and automated order updates.
              </p>
            </div>

            <div className="bg-card border border-border rounded-card p-6 space-y-4">
              {meta.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-3">
                  <Icon size={16} className="text-ink mt-0.5 shrink-0" />
                  <div>
                    <div className="font-heading text-[11px] tracking-[0.15em] text-mutedLight uppercase mb-1">
                      {label}
                    </div>
                    <div className="text-[13.5px] text-ink font-medium leading-snug">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Goal — text/checklist left, image right, inside one card */}
          <div className="bg-card border border-border rounded-card p-7">
            <h3 className="font-heading font-semibold text-xl tracking-wide uppercase text-ink mb-1.5">
              THE <span className="text-accent">GOAL</span>
            </h3>
            <div className="w-8 h-[3px] bg-accent rounded-full mb-4" />

            <div className="grid sm:grid-cols-[1.3fr_1fr] gap-6 items-center">
              <div>
                <p className="text-muted text-[14px] leading-relaxed mb-4">
                  The client needed a store that felt like a real, established brand from day one
                  — not a generic template. That meant a full product catalog with real brands
                  and pricing, a smooth mobile shopping experience, and a checkout flow customers
                  could trust.
                </p>
                <ul className="space-y-2">
                  {goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-2 text-[13px] text-ink">
                      <span className="w-4 h-4 rounded-full bg-accent/30 flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                        ✓
                      </span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product image placeholder — swap for a real product/brand shot */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white/60 border border-border flex items-center justify-center text-xs text-mutedLight">
                Product image placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-8 lg:px-16 pb-16">
        <div className="bg-card border border-border rounded-card p-7">
          <h2 className="font-heading font-semibold text-xl tracking-wide uppercase text-ink mb-1.5">
            TECH <span className="text-accent">STACK</span>
          </h2>
          <div className="w-8 h-[3px] bg-accent rounded-full mb-4" />
          <p className="text-muted text-[13px] mb-6 max-w-md">
            A modern, scalable tech stack used to build a fast, secure and high-performance
            e-commerce platform.
          </p>
          <div className="flex flex-wrap gap-3">
            {techStack.map(({ label, icon: Icon, iconBg }) => (
              <span
                key={label}
                className="flex items-center gap-2 bg-cardWarm border border-border rounded-[24px] pl-1.5 pr-4 py-1.5"
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center ${iconBg}`}>
                  <Icon size={13} />
                </span>
                <span className="text-xs font-medium text-ink">{label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom nav strip */}
      <section className="px-8 lg:px-16 pb-16">
        <Link
          href="/work/us-supplements/process"
          className="flex items-center justify-between bg-card border border-border rounded-card p-6 hover:border-ink transition-colors"
        >
          <div>
            <div className="font-heading text-[11px] tracking-[0.15em] text-mutedLight uppercase mb-1">
              NEXT UP
            </div>
            <div className="font-display font-semibold text-lg text-ink">Process</div>
            <div className="text-muted text-sm mt-1">
              See how we researched, designed and built US Supplements.
            </div>
          </div>
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
          </div>
        </Link>
      </section>
    </main>
  );
}