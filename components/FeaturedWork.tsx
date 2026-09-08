import Image from "next/image";
import usSupplementsPreview from "../Images/us-supplements-preview.png";
import wadhawanPreview from "../Images/wadhawan-hospital-preview.png";
import adCafePreview from "../Images/ad-cafe-preview.png";
import { ShoppingCart, Heart, Coffee, Triangle, Atom, Wind, Zap } from "lucide-react";

const filters = ["All Projects", "E-commerce", "Healthcare", "Restaurant / Business"];

const techStack = [
  { label: "Next.js", icon: Triangle, iconBg: "bg-black text-white" },
  { label: "React", icon: Atom, iconBg: "bg-[#61DAFB]/25 text-[#149ECA]" },
  { label: "Tailwind CSS", icon: Wind, iconBg: "bg-[#38BDF8]/25 text-[#0EA5E9]" },
  { label: "Supabase", icon: Zap, iconBg: "bg-[#3ECF8E]/25 text-[#249361]" },
];

const projects = [
  {
    tag: "E-COMMERCE", icon: ShoppingCart, title: "US Supplements",
    desc: "A high-performance e-commerce platform for fitness supplements. Built to deliver a seamless shopping experience with speed and trust.",
    bg: "bg-[#EFF3E0]", previewColor: "text-[#8A9060]",
    previewImage: usSupplementsPreview,
    previewAspect: "1496 / 1051",
    ctaBg: "bg-accent text-ink", ctaBorder: "border-[#C7CDA0]", reverse: false,
    liveHref: "https://ussuppliments.netlify.app/",  
    caseStudyHref: "/work/us-supplements",   
  },
  {
    tag: "HEALTHCARE", icon: Heart, title: "Wadhawan Hospital",
    desc: "A modern hospital website designed to build trust, provide key information, and make appointment booking simple and accessible.",
    bg: "bg-[#E9EEF3]", previewColor: "text-[#7C8A99]",
    previewImage: wadhawanPreview,
    previewAspect: "1496 / 1051",
    ctaBg: "bg-[#3B6EA5] text-white", ctaBorder: "border-[#B9C6D3]", reverse: true,
    liveHref: "https://wadhawan-hospital.netlify.app/",
    caseStudyHref: "/work/wadhawan-hospital",
  },
  {
    tag: "RESTAURANT / CAFÉ", icon: Coffee, title: "AD Café",
    desc: "A cozy, elegant café website showcasing menu, ambiance, and offers with a delightful user experience.",
    bg: "bg-[#F5EBDD]", previewColor: "text-[#A38058]",
    previewImage: adCafePreview,   // ADD THIS LINE
    ctaBg: "bg-[#C97A3D] text-white", ctaBorder: "border-[#E0C4A3]", reverse: false,
    liveHref: "https://ad-cafe.netlify.app/",
    caseStudyHref: "/work/ad-cafe",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="px-8 lg:px-16 py-16 lg:py-24 text-center">
      <div className="inline-flex items-center gap-2 text-[11px] text-accent tracking-widest mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
        FEATURED WORK
      </div>

      <h2 className="font-display font-semibold text-[38px] sm:text-[46px] text-ink mb-3">
        Digital Solutions.{" "}
        <span className="font-serif italic font-medium text-accent">Real Impact.</span>
      </h2>

      <p className="text-muted text-[15px] max-w-md mx-auto mb-8">
        A selection of projects where design, technology and strategy come together to create powerful digital experiences.
      </p>

      <div className="flex flex-wrap justify-center gap-2.5 mb-12">
        {filters.map((label, i) => (
          <button key={label} type="button" className={i === 0 ? "bg-ink text-white text-sm font-medium px-5 py-2.5 rounded-btn" : "bg-card border border-border text-ink text-sm font-medium px-5 py-2.5 rounded-btn"}>
            {label}
          </button>
        ))}
      </div>

      <div className="relative left-1/2 -translate-x-1/2 w-screen px-[40px]">
        <div className="space-y-6">
          {projects.map(({
            tag, icon: Icon, title, desc, bg, previewColor,
            previewImage, previewAspect, ctaBg, ctaBorder, reverse,
            liveHref, caseStudyHref   // ← add these two
          }) => (
            <div key={title} className={`${bg} rounded-[28px] p-10 lg:p-14 min-h-[420px] flex flex-wrap gap-10 items-center text-left ${reverse ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-1 min-w-[260px]">
                <div className="flex items-center gap-1.5 text-[13px] text-muted tracking-wide mb-3">
                  <Icon size={15} /> {tag}
                </div>
                <h3 className="font-display font-semibold text-[30px] text-ink mb-3">{title}</h3>
                <p className="text-base text-muted leading-relaxed max-w-sm mb-5">{desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {techStack.map(({ label, icon: TechIcon, iconBg }) => (
                    <span key={label} className="flex items-center gap-1.5 bg-transparent border border-border rounded-[24px] pl-1 pr-3 py-1">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center ${iconBg}`}>
                        <TechIcon size={11} />
                      </span>
                      <span className="text-sm font-medium text-ink">{label}</span>
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                  href={liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ctaBg} text-base font-semibold px-5 py-2.5 rounded-btn`}
                >
                  View Live Site →
                </a>
                
                <a
                  href={caseStudyHref}
                  className={`bg-transparent text-ink text-base font-medium px-5 py-2.5 rounded-btn border ${ctaBorder}`}
                >
                  Case Study →
                </a>
              </div>
              </div>

              {previewImage ? (
                <div className="relative flex-1 min-w-[260px] w-full rounded-2xl overflow-hidden" style={{ aspectRatio: previewAspect ?? "3 / 2" }}>
                  <Image src={previewImage} alt={`${title} website preview`} fill className="object-contain" />
                </div>
              ) : (
                <div className={`flex-1 min-w-[260px] h-64 sm:h-72 bg-white/70 border border-white rounded-2xl flex items-center justify-center text-sm ${previewColor}`}>
                  Live site preview
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-[13px] text-mutedLight mt-6">
        Kanthiveda (beauty &amp; personal care) — coming soon, added once live
      </p>
    </section>
  );
}