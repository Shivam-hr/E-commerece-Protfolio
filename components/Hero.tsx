import Image from "next/image";
import desktopPhoto from "../Images/Desktop-phone.png";
import {
  MessageCircle,
  PlayCircle,
  Heart,
  ShoppingBag,
  GraduationCap,
  Building2,
  UtensilsCrossed,
  MoreHorizontal,
} from "lucide-react";

const workWith = [
  { icon: Heart, label: "Healthcare" },
  { icon: ShoppingBag, label: "E-commerce" },
  { icon: GraduationCap, label: "Education" },
  { icon: Building2, label: "Real Estate" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: MoreHorizontal, label: "& More" },
];

export default function Hero() {
  return (
    <section className="px-8 lg:px-16 pt-8 lg:pt-10 pb-16 lg:pb-24">
      <div className="grid lg:grid-cols-[1fr_1.35fr] gap-10 lg:gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-cardSoft border border-border rounded-full px-4 py-2 text-xs text-muted mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            Design. Develop. Automate.
          </div>

          <h1 className="font-display font-semibold text-[42px] sm:text-6xl lg:text-[64px] leading-[1.08] tracking-tight text-ink">
            Digital Experiences That Grow{" "}
            <span className="font-serif italic font-medium text-accent">Businesses.</span>
          </h1>

          <p className="text-muted text-lg leading-relaxed max-w-md mt-7 mb-9">
            We design, build and automate powerful websites and digital
            systems that attract customers, streamline operations and scale
            your business.
          </p>

          <div className="flex gap-3 mb-10 flex-wrap">
            <a href="#contact" className="bg-ink text-white text-[15px] font-medium px-6 py-3.5 rounded-btn flex items-center gap-2">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <a href="#work" className="bg-transparent text-ink text-[15px] font-medium px-6 py-3.5 rounded-btn border border-[#D8D2C4] flex items-center gap-2">
              <PlayCircle size={18} /> View Our Work
            </a>
          </div>

          <div className="text-[11px] tracking-[0.15em] text-mutedLight mb-3">WE WORK WITH</div>
          <div className="flex gap-6 flex-wrap text-sm text-muted">
            {workWith.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5">
                <Icon size={15} /> {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: single composite image — cards are already part of this picture */}
        <div className="relative rounded-card overflow-hidden aspect-[5/4] w-full h-[440px] sm:h-[500px] lg:h-[560px] xl:h-[620px] bg-cream">
          <Image
            src={desktopPhoto}
            alt="Shivam Digital Studio homepage shown on desktop and mobile, with service highlights for Web Design, Automation, E-commerce and Digital Strategy"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}