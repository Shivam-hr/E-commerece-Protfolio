import { ChevronDown, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const links = ["Work", "Process", "About", "Contact"];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5 border-b border-border bg-cream/80 backdrop-blur-md">
      <div>
        <div className="font-display font-bold text-lg text-ink tracking-tight">
          SHIVAM<span className="text-accent">.</span>
        </div>
        <div className="text-[10px] tracking-[0.2em] text-muted">
          DIGITAL STUDIO
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 text-[15px] text-ink">
        <span className="flex items-center gap-1 cursor-pointer">
          Services <ChevronDown size={13} />
        </span>
        {links.map((link) => (
          <span key={link} className="cursor-pointer">
            {link}
          </span>
        ))}
        <span className="flex items-center gap-1 cursor-pointer">
          Resources <ChevronDown size={13} />
        </span>
      </div>

      <a href="#contact"
        className="bg-accent hover:bg-accentHover transition-colors text-ink text-[15px] font-medium px-6 py-3 rounded-btn flex items-center gap-1.5"
      >
        Let's Talk <ArrowUpRight size={15} />
      </a>
    </nav>
  );
}