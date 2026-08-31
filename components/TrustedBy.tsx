import { HeartPulse, Leaf, Coffee, Sparkle } from "lucide-react";

// Placeholder marks — swap the icon for a real logo (see next/image pattern
// from before) per client whenever you have the actual files.
const clients = [
  { name: "Wadhawan Hospital", icon: HeartPulse },
  { name: "US Supplements", icon: Leaf },
  { name: "AD Café", icon: Coffee },
  { name: "Kanthiveda", icon: Sparkle },
];

export default function TrustedBy() {
  return (
    <section className="px-15 lg:px-60 py-8 border-t border-b border-border">
      <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
        <span className="text-[11px] tracking-[0.15em] text-mutedLight">
          TRUSTED BY BUSINESSES
          <br />
          ACROSS INDUSTRIES
        </span>

        {clients.map(({ name, icon: Icon }) => (
          <span key={name} className="flex items-center gap-2 text-ink font-semibold text-base">
            <span className="w-7 h-7 rounded-md bg-accent/20 flex items-center justify-center shrink-0">
              <Icon size={14} className="text-ink" />
            </span>
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}