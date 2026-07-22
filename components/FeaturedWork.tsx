import { ShoppingCart, Heart, Coffee } from "lucide-react";

const projects = [
  {
    tag: "E-COMMERCE",
    icon: ShoppingCart,
    title: "US Supplements",
    desc: "A high-performance e-commerce platform for fitness supplements. Built to deliver a seamless shopping experience with speed and trust.",
    bg: "bg-[#EFF3E0]",
    previewColor: "text-[#8A9060]",
    ctaBg: "bg-accent text-ink",
    ctaBorder: "border-[#C7CDA0]",
    reverse: false,
  },
  {
    tag: "HEALTHCARE",
    icon: Heart,
    title: "Wadhawan Hospital",
    desc: "A modern hospital website designed to build trust, provide key information, and make appointment booking simple and accessible.",
    bg: "bg-[#E9EEF3]",
    previewColor: "text-[#7C8A99]",
    ctaBg: "bg-[#3B6EA5] text-white",
    ctaBorder: "border-[#B9C6D3]",
    reverse: true,
  },
  {
    tag: "RESTAURANT / CAFÉ",
    icon: Coffee,
    title: "AD Café",
    desc: "A cozy, elegant café website showcasing menu, ambiance, and offers with a delightful user experience.",
    bg: "bg-[#F5EBDD]",
    previewColor: "text-[#A38058]",
    ctaBg: "bg-[#C97A3D] text-white",
    ctaBorder: "border-[#E0C4A3]",
    reverse: false,
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="px-8 py-14 text-center">
      <div className="inline-flex items-center gap-2 text-[10px] text-accent tracking-widest mb-3.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
        FEATURED WORK
      </div>
      <h2 className="font-display font-bold text-2xl md:text-3xl text-ink mb-2.5">
        Digital Solutions.{" "}
        <span className="font-serif italic font-normal text-accent">
          Real Impact.
        </span>
      </h2>
      <p className="text-muted text-sm max-w-md mx-auto mb-7">
        A selection of real projects — live, in production, built for real
        businesses.
      </p>

      <div className="max-w-4xl mx-auto space-y-4">
        {projects.map(
          ({
            tag,
            icon: Icon,
            title,
            desc,
            bg,
            previewColor,
            ctaBg,
            ctaBorder,
            reverse,
          }) => (
            <div
              key={title}
              className={`${bg} rounded-card p-6 flex flex-wrap gap-6 items-center text-left ${
                reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 min-w-[220px]">
                <div className="flex items-center gap-1.5 text-[10px] text-muted tracking-wide mb-2.5">
                  <Icon size={13} /> {tag}
                </div>
                <h3 className="font-display font-bold text-lg text-ink mb-2">
                  {title}
                </h3>
                <p className="text-[12px] text-muted leading-relaxed max-w-xs mb-3.5">
                  {desc}
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className={`${ctaBg} text-[11px] font-semibold px-3.5 py-2 rounded-xl`}
                  >
                    View Live Site →
                  </a>
                  <a
                    href="#"
                    className={`bg-transparent text-ink text-[11px] font-medium px-3.5 py-2 rounded-xl border ${ctaBorder}`}
                  >
                    Case Study →
                  </a>
                </div>
              </div>
              <div
                className={`flex-1 min-w-[220px] h-36 bg-white rounded-2xl flex items-center justify-center text-[11px] ${previewColor}`}
              >
                Live site preview
              </div>
            </div>
          )
        )}
      </div>

      <p className="text-[11px] text-mutedLight mt-4">
        Kanthiveda (beauty &amp; personal care) — coming soon, added once
        live
      </p>
    </section>
  );
}
