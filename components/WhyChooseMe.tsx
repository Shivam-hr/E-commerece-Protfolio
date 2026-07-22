const rows = [
  { label: "Scope", others: "Design only", me: "Design + Development" },
  { label: "Delivery", others: "Website only", me: "Website + Automation" },
  { label: "Style", others: "Generic templates", me: "Custom UI" },
  {
    label: "Point of Contact",
    others: "Multiple freelancers",
    me: "One point of contact",
  },
  { label: "After Launch", others: "Limited support", me: "Launch + Support" },
];

export default function WhyChooseMe() {
  return (
    <section className="px-8 py-14 text-center">
      <h2 className="font-display font-bold text-xl md:text-2xl text-ink mb-6">
        Why Work With Me
      </h2>

      <div className="bg-card border border-border rounded-card overflow-hidden max-w-xl mx-auto text-left">
        <div className="grid grid-cols-3 px-5 py-3 bg-cream text-[11px] font-semibold text-muted">
          <span></span>
          <span>Others</span>
          <span className="text-ink">Me</span>
        </div>
        {rows.map(({ label, others, me }) => (
          <div
            key={label}
            className="grid grid-cols-3 px-5 py-3 text-[11px] border-t border-border"
          >
            <span className="text-mutedLight">{label}</span>
            <span className="text-muted">{others}</span>
            <span className="text-ink font-medium">{me}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
