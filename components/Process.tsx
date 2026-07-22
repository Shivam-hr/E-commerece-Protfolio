import { MessageCircleMore, PencilLine, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircleMore,
    title: "Understand",
    desc: "We learn your business and your customers.",
  },
  {
    icon: PencilLine,
    title: "Plan & Design",
    desc: "A clear roadmap and visuals before code.",
  },
  {
    icon: Code2,
    title: "Build & Automate",
    desc: "Development plus the automation that runs it.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    desc: "Go live, get trained, stay supported.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-8 py-10">
      <div className="bg-card border border-border rounded-card p-7 flex flex-wrap gap-5 items-start justify-between">
        <div className="flex-none w-56">
          <div className="text-[10px] text-accent tracking-widest mb-2">
            OUR APPROACH
          </div>
          <h3 className="font-display font-bold text-lg text-ink leading-snug">
            A Simple Process.
            <br />
            Powerful Results.
          </h3>
        </div>

        <div className="flex-1 flex flex-wrap gap-5">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex-1 min-w-[130px]">
              <div className="w-8 h-8 rounded-full bg-cream border border-border flex items-center justify-center mb-2.5">
                <Icon size={14} />
              </div>
              <div className="text-xs font-semibold text-ink mb-1">
                {title}
              </div>
              <div className="text-[10px] text-muted leading-relaxed">
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
