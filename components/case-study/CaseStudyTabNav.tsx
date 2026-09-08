import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Tab = {
  label: string;
  href: string;
};

type CaseStudyTabNavProps = {
  basePath: string; // e.g. "/work/us-supplements"
  active: "overview" | "process" | "showcase" | "results";
  nextLabel: string; // e.g. "Process", "Showcase", "Results", or "View All Projects"
  nextHref: string;
};

const tabs: Tab[] = [
  { label: "01 Overview", href: "" },
  { label: "02 Process", href: "/process" },
  { label: "03 Showcase", href: "/showcase" },
  { label: "04 Results", href: "/results" },
];

const activeIndex = { overview: 0, process: 1, showcase: 2, results: 3 };

export default function CaseStudyTabNav({
  basePath,
  active,
  nextLabel,
  nextHref,
}: CaseStudyTabNavProps) {
  return (
    <div className="px-8 lg:px-16 pt-6 pb-4">
      <Link
        href="/#work"
        className="inline-flex items-center gap-1.5 text-sm text-muted mb-5 hover:text-ink transition-colors"
      >
        <ArrowLeft size={14} /> Back to Projects
      </Link>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2.5">
          {tabs.map((tab, i) => {
            const isActive = activeIndex[active] === i;
            return (
              <Link
                key={tab.label}
                href={`${basePath}${tab.href}`}
                className={
                  isActive
                    ? "bg-accent text-ink text-sm font-medium px-5 py-2.5 rounded-btn"
                    : "bg-card border border-border text-ink text-sm font-medium px-5 py-2.5 rounded-btn"
                }
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        <Link
          href={nextHref}
          className="inline-flex items-center gap-1.5 bg-ink text-white text-sm font-medium px-5 py-2.5 rounded-btn"
        >
          Next: {nextLabel} <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
