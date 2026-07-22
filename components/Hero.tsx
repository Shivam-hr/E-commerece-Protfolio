import Image from "next/image";
import desktopPhoto from "../Images/Desktop-phone.png";
import {
  MessageCircle,
  PlayCircle,
  ArrowUpRight,
  Heart,
  ShoppingBag,
  GraduationCap,
  Building2,
  UtensilsCrossed,
  MoreHorizontal,
  Monitor,
  Settings,
  ShoppingCart,
  Compass,
} from "lucide-react";

const workWith = [
  { icon: Heart, label: "Healthcare" },
  { icon: ShoppingBag, label: "E-commerce" },
  { icon: GraduationCap, label: "Education" },
  { icon: Building2, label: "Real Estate" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: MoreHorizontal, label: "& More" },
];

const floatingCards = [
  { icon: Monitor, title: "Web Design", copy: "Modern websites that look beautiful and convert." },
  { icon: Settings, title: "Automation", copy: "Smart workflows to save time and reduce manual work." },
  { icon: ShoppingCart, title: "E-commerce", copy: "Online stores that sell more and grow your brand." },
  { icon: Compass, title: "Digital Strategy", copy: "Systems and planning that drive long-term growth." },
];

export default function Hero() {
  return (
    <section className="px-8 lg:px-16 pt-8 lg:pt-10 pb-16 lg:pb-24">
      <div className="grid lg:grid-cols-[0.85fr_1.3fr] gap-10 lg:gap-12 items-center">
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

        {/* Right: image + cards, real flex children, side by side — no overlap possible */}
        <div className="flex items-center gap-6 xl:gap-8">
          <div className="relative rounded-card overflow-hidden flex-[1.6] aspect-[5/4] shadow-floating">
            <Image
              src={desktopPhoto}
              alt="Shivam Digital Studio homepage shown on desktop and mobile"
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(120% 100% at 50% 45%, transparent 45%, rgba(0,0,0,0.14) 100%)" }}
            />
          </div>

          <div className="hidden lg:block relative w-[230px] shrink-0 self-stretch">
            <svg className="absolute -left-5 top-0 h-full w-8 overflow-visible" viewBox="0 0 32 600" preserveAspectRatio="none">
              <path
                d="M 16 40 C 28 110, 4 160, 16 220 S 28 330, 16 390 S 4 500, 16 560"
                fill="none"
                stroke="rgba(18,18,18,0.18)"
                strokeWidth="1.5"
                strokeDasharray="1 7"
                strokeLinecap="round"
              />
            </svg>

            <div className="flex flex-col gap-5">
              {floatingCards.map(({ icon: Icon, title, copy }, i) => (
                <div key={title} className="relative">
                  <span className={`absolute -left-5 top-8 w-[7px] h-[7px] rounded-full ${i % 2 === 0 ? "bg-accent" : "bg-[#D8D2C4]"}`} />
                  <div className="bg-cardWarm rounded-[22px] px-5 py-4 shadow-floating">
                    <div className="w-10 h-10 rounded-[10px] bg-accent/25 flex items-center justify-center mb-3">
                      <Icon size={18} strokeWidth={1.75} className="text-ink" />
                    </div>
                    <div className="font-display font-semibold text-[16px] text-ink mb-1">{title}</div>
                    <div className="text-[13px] text-muted leading-snug pr-3">{copy}</div>
                    <ArrowUpRight size={14} className="text-mutedLight ml-auto mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}