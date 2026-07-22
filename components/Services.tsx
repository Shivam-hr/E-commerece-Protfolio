import {
  LayoutTemplate,
  Code2,
  ShoppingCart,
  MessageCircle,
  PenTool,
  Rocket,
  Zap,
  Smartphone,
  Headset,
  Settings2,
} from "lucide-react";

const services = [
  {
    icon: LayoutTemplate,
    title: "Web Design",
    desc: "Modern, responsive websites built to convert.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "High-performance builds with clean, modern code.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Secure, scalable stores designed to boost sales.",
  },
  {
    icon: MessageCircle,
    title: "Automation",
    desc: "Smart workflows that save time and reduce manual work.",
  },
  {
    icon: PenTool,
    title: "Branding & Design",
    desc: "Unique identities that make your business stand out.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    desc: "For launches, campaigns and single-product businesses.",
  },
];

const badges = [
  { icon: Zap, label: "Fast & Secure" },
  { icon: Smartphone, label: "Mobile First" },
  { icon: Headset, label: "Reliable Support" },
  { icon: Settings2, label: "Automation Ready" },
];

export default function Services() {
  return (
    <section id="services" className="px-8 py-14 text-center">
      <div className="inline-block bg-card border border-border rounded-xl px-3 py-1 text-[10px] text-muted mb-4">
        WHAT WE DO
      </div>
      <h2 className="font-display font-bold text-2xl md:text-3xl text-ink mb-2.5">
        Services That Create Impact
        <br />
        <span className="font-serif italic font-normal text-accent">
          and Drive Growth
        </span>
      </h2>
      <p className="text-muted text-sm max-w-md mx-auto mb-8">
        We help businesses build a strong digital presence, automate
        operations, and deliver experiences that convert.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-w-4xl mx-auto">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-card border border-border rounded-card p-5 text-left"
          >
            <Icon size={20} className="text-accent" />
            <h3 className="text-sm font-semibold text-ink mt-3 mb-1.5">
              {title}
            </h3>
            <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-7 flex-wrap bg-card border border-border rounded-2xl p-4.5 max-w-2xl mx-auto mt-6">
        {badges.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="text-[11px] text-muted flex items-center gap-1.5"
          >
            <Icon size={14} className="text-accent" /> {label}
          </span>
        ))}
      </div>
    </section>
  );
}
