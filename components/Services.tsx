import {
  LayoutTemplate,
  Code2,
  Settings2,
  ShoppingCart,
  BarChart3,
  PenTool,
  ArrowUpRight,
  Users,
  Smile,
  CalendarRange,
  Award,
} from "lucide-react";

const services = [
  { icon: LayoutTemplate, title: "Web Design", desc: "Modern, responsive websites that are visually stunning, user-friendly and built to convert." },
  { icon: Code2, title: "Web Development", desc: "High-performance websites and web applications built with clean code and the latest technologies." },
  { icon: Settings2, title: "Automation", desc: "Smart workflows and automations that save time, reduce manual work and increase efficiency." },
  { icon: ShoppingCart, title: "E-commerce", desc: "Powerful online stores that are secure, scalable and designed to boost sales." },
  { icon: BarChart3, title: "Digital Strategy", desc: "Data-driven strategies that align with your goals and help you grow sustainably." },
  { icon: PenTool, title: "Branding & Design", desc: "Unique brand identities and designs that make your business stand out from the competition." },
];

const stats = [
  { icon: Users, value: "50+", label: "Projects Delivered" },
  { icon: Smile, value: "48+", label: "Happy Clients" },
  { icon: CalendarRange, value: "2+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Client Satisfaction" },
];

export default function Services() {
  return (
    <section id="services" className="px-8 lg:px-16 py-16 lg:py-24 text-center">
      <div className="inline-block bg-cardSoft border border-border rounded-full px-4 py-1.5 text-[11px] tracking-wide text-muted mb-6">
        WHAT WE DO
      </div>

      <h2 className="font-display font-semibold text-[36px] sm:text-[46px] leading-[1.1] tracking-tight text-ink mb-5">
        Services That Create Impact
        <br />
        <span className="font-serif italic font-medium text-accent">
          and Drive Growth
        </span>
      </h2>

      <p className="text-muted text-base leading-relaxed mb-10 max-w-md mx-auto">
        We help businesses build a strong digital presence, automate
        operations and deliver experiences that convert visitors into
        loyal customers.
      </p>

      {/* Stats — full-bleed, 20px from the browser edge on each side */}
      <div className="relative left-1/2 -translate-x-1/2 w-screen px-[60px]">
        <div className="flex flex-wrap justify-center divide-x divide-border/70 bg-white/40 backdrop-blur-md border border-border rounded-2xl mb-14">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex-1 min-w-[140px] flex flex-col items-center gap-2 px-6 py-6">
              <div className="w-10 h-10 rounded-full bg-accent/25 flex items-center justify-center">
                <Icon size={17} className="text-ink" />
              </div>
              <div className="font-display font-semibold text-2xl text-ink">{value}</div>
              <div className="text-xs text-muted">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Service cards — full-bleed, 10px from the browser edge on each side */}
      <div className="relative left-1/2 -translate-x-1/2 w-screen px-[30px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="bg-cardWarm rounded-card p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-accent/25 flex items-center justify-center">
                  <Icon size={20} className="text-ink" />
                </div>
                <span className="text-xs text-accent font-medium">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-2">{title}</h3>
              <p className="text-muted text-[13px] leading-relaxed mb-4 flex-1">{desc}</p>
              <a href="#contact" className="text-ink text-sm font-medium flex items-center gap-1.5">
                Explore <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 max-w-5xl mx-auto mt-10 border-t border-border pt-8">
        <div className="text-left">
          <div className="font-display font-semibold text-ink text-base">Have a project in mind?</div>
          <div className="text-muted text-sm mt-0.5">Let&apos;s build something amazing together.</div>
        </div>
        <a href="#contact" className="shrink-0 bg-transparent text-ink text-sm font-medium px-5 py-2.5 rounded-btn border border-[#D8D2C4] flex items-center gap-1.5">
          Let&apos;s Discuss <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}