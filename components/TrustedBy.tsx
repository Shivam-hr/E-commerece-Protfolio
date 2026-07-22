const clients = ["Wadhawan Hospital", "US Supplements", "AD Café", "Kanthiveda"];

export default function TrustedBy() {
  return (
    <div className="px-8 py-5 border-t border-b border-border flex items-center justify-center gap-9 flex-wrap">
      <span className="text-mutedLight text-[11px] tracking-wide">
        TRUSTED BY BUSINESSES ACROSS INDUSTRIES
      </span>
      {clients.map((name) => (
        <span key={name} className="text-sm font-semibold text-ink">
          {name}
        </span>
      ))}
    </div>
  );
}
