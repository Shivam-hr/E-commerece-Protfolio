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
} from "lucide-react";

const highlights = [
  { icon: Package, value: "250+", label: "Products" },
  { icon: Tag, value: "20+", label: "Top Brands" },
  { icon: Smartphone, value: "100%", label: "Responsive" },
  { icon: CreditCard, value: "Secure", label: "Payments" },
  { icon: MessageCircle, value: "WhatsApp & Email", label: "Order Updates" },
  { icon: Rocket, value: "2-3 Weeks", label: "Build Time" },
];

const meta = [
  { label: "Project", value: "US Supplements — premium e-commerce store for fitness supplements" },
  { label: "Role", value: "UI Design, UX, Frontend Development, Backend Development, Database" },
  { label: "Duration", value: "2 – 3 Weeks" },
  { label: "Project Type", value: "Real Client Project — Live & Production" },
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

          {/* Hero mockup — swap this placeholder for the real desktop+mobile screenshot composite */}
          <div className="relative w-full aspect-[16/10] bg-white/60 border border-border rounded-[24px] flex items-center justify-center text-sm text-mutedLight">
            US Supplements desktop + mobile screenshot
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="px-8 lg:px-16 pb-14">
        <div className="bg-card border border-border rounded-card p-7">
          <div className="text-xs tracking-[0.15em] text-mutedLight mb-1">KEY</div>
          <h2 className="font-display font-semibold text-xl text-ink mb-6">Highlights</h2>
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {highlights.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-start gap-2 min-w-[110px]">
                <Icon size={20} className="text-ink" />
                <div className="font-display font-semibold text-lg text-ink leading-tight">{value}</div>
                <div className="text-xs text-muted">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview / Meta / Goal */}
      <section className="px-8 lg:px-16 pb-14">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="bg-card border border-border rounded-card p-7">
            <h3 className="font-display font-semibold text-lg text-ink mb-3">
              Project <span className="text-accent italic font-serif">Overview</span>
            </h3>
            <p className="text-muted text-[14px] leading-relaxed">
              US Supplements is a premium e-commerce platform designed for fitness enthusiasts.
              The store offers authentic supplements from top brands with a seamless shopping
              experience, secure payments, and automated order updates.
            </p>
          </div>

          <div className="bg-card border border-border rounded-card p-7 space-y-5">
            {meta.map(({ label, value }) => (
              <div key={label}>
                <div className="text-[11px] tracking-[0.1em] text-mutedLight mb-1">
                  {label.toUpperCase()}
                </div>
                <div className="text-[14px] text-ink font-medium leading-snug">{value}</div>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-card p-7">
            <h3 className="font-display font-semibold text-lg text-ink mb-3">
              The <span className="text-accent italic font-serif">Goal</span>
            </h3>
            <p className="text-muted text-[14px] leading-relaxed mb-4">
              The client needed a store that felt like a real, established brand from day one —
              not a generic template. That meant a full product catalog with real brands and
              pricing, a smooth mobile shopping experience, and a checkout flow customers could
              trust.
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
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-8 lg:px-16 pb-16">
        <div className="bg-card border border-border rounded-card p-7">
          <div className="text-xs tracking-[0.15em] text-accent mb-1">TECH STACK</div>
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
            <div className="text-[11px] tracking-[0.15em] text-mutedLight mb-1">NEXT UP</div>
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
