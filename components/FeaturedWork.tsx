import { ShoppingCart, Heart, Coffee } from "lucide-react";

const projects = [
  { tag: "E-COMMERCE", icon: ShoppingCart, title: "US Supplements", desc: "...", bg: "bg-[#EFF3E0]", previewColor: "text-[#8A9060]", ctaBg: "bg-accent text-ink", ctaBorder: "border-[#C7CDA0]", reverse: false },
  { tag: "HEALTHCARE", icon: Heart, title: "Wadhawan Hospital", desc: "...", bg: "bg-[#E9EEF3]", previewColor: "text-[#7C8A99]", ctaBg: "bg-[#3B6EA5] text-white", ctaBorder: "border-[#B9C6D3]", reverse: true },
  { tag: "RESTAURANT / CAFÉ", icon: Coffee, title: "AD Café", desc: "...", bg: "bg-[#F5EBDD]", previewColor: "text-[#A38058]", ctaBg: "bg-[#C97A3D] text-white", ctaBorder: "border-[#E0C4A3]", reverse: false },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="px-8 lg:px-16 py-16 lg:py-2 text-center">
      <div className="inline-flex items-center gap-2 text-[20px] text-accent tracking-widest mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
        FEATURED WORK
      </div>
      <h2 className="font-display font-semibold text-[50px] sm:text-[50px] text-ink mb-3">
        Digital Solutions.{" "}
        <span className="font-serif italic font-medium text-accent">Real Impact.</span>
      </h2>
      <p className="text-muted text-[15px]  max-w-md mx-auto mb-10">
       A selection of projects where design, technology and strategy come together to create powerful digital experiences.
      </p>

    <div className="relative left-1/2 -translate-x-1/2 w-screen px-[40px]">
    <div className="space-y-6">
          {projects.map(({ tag, icon: Icon, title, desc, bg, previewColor, ctaBg, ctaBorder, reverse }) => (
    <div key={title} className={`${bg} rounded-[28px] p-10 lg:p-14 min-h-[420px] flex flex-wrap gap-10 items-center text-left ${reverse ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-1 min-w-[260px]">
                <div className="flex items-center gap-1.5 text-[11px] text-muted tracking-wide mb-3">
                  <Icon size={14} /> {tag}
                </div>
                <h3 className="font-display font-semibold text-2xl text-ink mb-3">{title}</h3>
                <p className="text-[14px] text-muted leading-relaxed max-w-sm mb-5">{desc}</p>
                <div className="flex gap-3">
                  <a href="#" className={`${ctaBg} text-sm font-semibold px-5 py-2.5 rounded-btn`}>View Live Site →</a>
                  <a href="#" className={`bg-transparent text-ink text-sm font-medium px-5 py-2.5 rounded-btn border ${ctaBorder}`}>Case Study →</a>
                </div>
              </div>
              <div className={`flex-1 min-w-[260px] h-64 sm:h-72 bg-white/70 border border-white rounded-2xl flex items-center justify-center text-sm ${previewColor}`}>
                Live site preview
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}