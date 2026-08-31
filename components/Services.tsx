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
  Award,
  Rocket,
} from "lucide-react";

const services = [
  { icon: LayoutTemplate, title: "Web Design", desc: "Modern, responsive websites that are visually stunning, user-friendly and built to convert." },
  { icon: Code2, title: "Web Development", desc: "High-performance websites and web applications built with clean code and the latest technologies." },
  { icon: Settings2, title: "Automation", desc: "Smart workflows and automations that save time, reduce manual work and increase efficiency." },
  { icon: ShoppingCart, title: "E-commerce", desc: "Powerful online stores that are secure, scalable and designed to boost sales." },
  { icon: BarChart3, title: "Digital Strategy", desc: "Data-driven strategies that align with your goals and help you grow sustainably." },
  { icon: PenTool, title: "Branding & Design", desc: "Unique brand identities and designs that make your business stand out from the competition." },
];

// NOTE: placeholders — swap for your real numbers before shipping.
// Better to launch with an honest "4+" than a figure a client can disprove in one call.
const stats = [
  { icon: Users, value: "4+", label: "Projects Delivered" },
  { icon: Smile, value: "4+", label: "Happy Clients" },
  { icon: Award, value: "100%", label: "Client Satisfaction" },
  { icon: Rocket, value: "2024", label: "Building Since" },
];

export default function Services() {
  return (
    <section id="services" className="px-8 lg:px-16 py-16 lg:py-24">
      <div className="grid lg:grid-cols-[0.85fr_1.3fr] gap-10 lg:gap-14 items-start">
        <div>
          <div className="inline-block bg-cardSoft border border-border rounded-full px-4 py-1.5 text-[11px] tracking-wide text-muted mb-6">
            WHAT WE DO
          </div>

          <h2 className="font-display font-semibold text-[36px] sm:text-[44px] leading-[1.1] tracking-tight text-ink mb-5">
            Services That
            <br />
            Create Impact and{" "}
            <span className="font-serif italic font-medium text-accent">Drive Growth</span>
          </h2>

          <p className="text-muted text-base leading-relaxed mb-8 max-w-sm">
            We help businesses build a strong digital presence, automate
            operations and deliver experiences that convert visitors into
            loyal customers.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-card border border-border rounded-card p-4">
                <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center mb-2.5">
                  <Icon size={16} className="text-ink" />
                </div>
                <div className="font-display font-semibold text-xl text-ink">{value}</div>
                <div className="text-xs text-muted">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-border pt-6">
            <div>
              <div className="font-display font-semibold text-ink text-sm">Have a project in mind?</div>
              <div className="text-muted text-xs mt-0.5">Let&apos;s build something amazing together.</div>
            </div>
            <a href="#contact" className="shrink-0 bg-transparent text-ink text-sm font-medium px-5 py-2.5 rounded-btn border border-[#D8D2C4] flex items-center gap-1.5">
              Let&apos;s Discuss <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="bg-card border border-border rounded-card p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center">
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
    </section>
  );
}``