import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";

const NAV_TABS = [
  { label: "Overview", href: "/work/wadhawan-hospital" },
  { label: "Process", href: "/work/wadhawan-hospital/process" },
  { label: "Showcase", href: "/work/wadhawan-hospital/showcase" },
  { label: "Results", href: "/work/wadhawan-hospital/results" },
];

function CaseStudyNav({ active }: { active: string }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🏥</span>
          <div>
            <div className="font-bold text-[#1a1a1a] text-sm">WADHAWAN</div>
            <div className="text-[10px] tracking-widest text-gray-400">HOSPITAL</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {NAV_TABS.map(tab => (
            <Link key={tab.label} href={tab.href}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === tab.label ? "bg-[#2563EB] text-white" : "text-gray-600 hover:text-[#1a1a1a]"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
        <a href="https://wadhawanhospital.com" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors">
          View Live Website <ArrowUpRight size={14} />
        </a>
      </div>
    </nav>
  );
}

export default function WadhawanOverview() {
  return (
    <main className="min-h-screen bg-white">
      <CaseStudyNav active="Overview" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2563EB] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            🏥 Healthcare Website
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight mb-4">
            Wadhawan <span className="text-[#2563EB]">Hospital</span>
          </h1>
          <p className="text-lg font-semibold text-gray-700 mb-4">Modern Multi-Specialty Healthcare Platform</p>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Designed and developed a complete digital platform for Wadhawan Hospital to establish a professional online presence, simplify patient enquiries, automate appointment communication, and showcase specialized healthcare services.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="https://wadhawanhospital.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
              View Live Website <ExternalLink size={14} />
            </a>
            <Link href="/work/wadhawan-hospital/process"
              className="flex items-center gap-2 border border-gray-200 text-[#1a1a1a] font-semibold px-6 py-3 rounded-full hover:border-[#2563EB] transition-colors">
              View Case Study <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 flex items-center justify-center min-h-[400px]">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
              <div className="bg-[#2563EB] px-4 py-3">
                <span className="text-white text-xs font-bold">🏥 WADHAWAN HOSPITAL</span>
              </div>
              <div className="p-5">
                <p className="text-xs text-[#2563EB] font-semibold mb-2">WELCOME TO WADHAWAN HOSPITAL</p>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">Advanced Orthopedics,<br/>Fertility & Gyne Care</h3>
                <p className="text-xs text-gray-400 mb-1">Compassion | Care | Cure</p>
                <p className="text-xs text-gray-500 mb-4">Providing advanced healthcare with expertise, empathy and modern technology.</p>
                <div className="flex gap-2 mb-5">
                  <span className="bg-[#2563EB] text-white text-xs px-3 py-1.5 rounded-full">Book Appointment</span>
                  <span className="border border-gray-200 text-xs px-3 py-1.5 rounded-full">Explore Services</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {[['5000+','Happy Patients'],['4.9','Google Rating'],['24/7','Emergency'],['10+','Years Exp.']].map(([val, label]) => (
                    <div key={label}>
                      <p className="text-sm font-bold text-[#2563EB]">{val}</p>
                      <p className="text-[9px] text-gray-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl w-32 overflow-hidden border border-gray-100">
            <div className="bg-[#2563EB] px-2 py-1.5">
              <span className="text-white text-[8px] font-bold">WADHAWAN</span>
            </div>
            <div className="p-2">
              <p className="text-[8px] font-bold text-[#1a1a1a] leading-tight mb-1">Advanced Orthopedics, Fertility & Gyne Care</p>
              <p className="text-[7px] text-gray-400 mb-1.5">Compassion | Care | Cure</p>
              <span className="bg-[#2563EB] text-white text-[7px] px-2 py-0.5 rounded-full">Book Appointment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Tech Stack</p>
          <div className="flex flex-wrap gap-4">
            {[
              { name: 'Next.js', icon: '▲', bg: 'bg-black text-white' },
              { name: 'React', icon: '⚛', bg: 'bg-blue-50 text-blue-600' },
              { name: 'Tailwind CSS', icon: '🎨', bg: 'bg-cyan-50 text-cyan-600' },
              { name: 'Supabase', icon: '⚡', bg: 'bg-green-50 text-green-600' },
              { name: 'Email Integration', icon: '✉️', bg: 'bg-orange-50 text-orange-600' },
              { name: 'WhatsApp API', icon: '💬', bg: 'bg-emerald-50 text-emerald-600' },
            ].map(tech => (
              <div key={tech.name} className={`flex items-center gap-2 ${tech.bg} px-4 py-2 rounded-full text-sm font-semibold`}>
                <span>{tech.icon}</span> {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '📄', value: '7+', label: 'Core Pages', desc: 'Complete website with all essential pages' },
            { icon: '🩺', value: '4', label: 'Specialty Sections', desc: 'Orthopedics, Gynecology, Diabetic Foot & more' },
            { icon: '💻', value: 'Desktop + Mobile', label: '', desc: 'Fully responsive and mobile-optimized' },
            { icon: '📅', value: 'Appointment Automation', label: '', desc: 'WhatsApp & Email alerts for seamless workflow' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-2xl">{stat.icon}</span>
              <div className="text-2xl font-bold text-[#1a1a1a]">{stat.value}</div>
              {stat.label && <div className="text-sm font-semibold text-[#2563EB]">{stat.label}</div>}
              <div className="text-sm text-gray-500">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">About the Project</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>Wadhawan Hospital needed a complete digital transformation — from zero online presence to a fully functional, automated healthcare platform.</p>
            <p>The hospital specializes in Orthopedics, Fertility & Gynecology, and Diabetic Foot care. They needed a website that clearly communicates their specialties, builds patient trust, and reduces manual appointment coordination.</p>
            <p>We built a multi-page Next.js site with automated WhatsApp & email notifications, responsive design across all devices, and an admin-friendly architecture for the hospital staff.</p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[['2 weeks', 'Timeline'],['7+', 'Pages'],['100%', 'Mobile Ready']].map(([val, label]) => (
              <div key={label} className="bg-blue-50 rounded-2xl p-4">
                <p className="text-xl font-bold text-[#2563EB]">{val}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Key Features Delivered</h2>
          <div className="space-y-3">
            {[
              { icon: '🌐', title: 'Professional Online Presence', desc: 'A modern website that builds trust and credibility for the hospital.' },
              { icon: '📅', title: 'Easy Appointment System', desc: 'Simple appointment request flow for patients anytime.' },
              { icon: '💬', title: 'WhatsApp Notifications', desc: 'Automated WhatsApp alerts for confirmations and updates.' },
              { icon: '✉️', title: 'Email Notifications', desc: 'Instant email alerts to patients and hospital staff.' },
              { icon: '📋', title: 'Organised Information', desc: 'Clear department, doctor and service information.' },
              { icon: '📱', title: 'Mobile Responsive', desc: 'Seamless experience across all devices and screen sizes.' },
              { icon: '⚡', title: 'Fast & Secure', desc: 'Optimised performance with strong security and reliability.' },
              { icon: '🔍', title: 'SEO Optimised', desc: 'Better visibility on Google to attract more patients.' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-blue-50 transition-colors">
                <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-[#1a1a1a]">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credit */}
      <section className="border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#B3D111] rounded-full flex items-center justify-center font-bold text-[#1a1a1a] text-sm">S</div>
            <div>
              <p className="text-sm text-gray-400">Designed & Developed by</p>
              <p className="font-bold text-[#1a1a1a]">Shivam Sharma</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 max-w-md">A complete digital solution built to enhance patient experience, streamline hospital operations, and strengthen online presence.</p>
        </div>
      </section>

      {/* Next CTA */}
      <section className="bg-[#2563EB] py-16 text-center">
        <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">Next</p>
        <h2 className="text-3xl font-bold text-white mb-6">See Our Process</h2>
        <Link href="/work/wadhawan-hospital/process"
          className="inline-flex items-center gap-2 bg-white text-[#2563EB] font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors">
          View Process <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}