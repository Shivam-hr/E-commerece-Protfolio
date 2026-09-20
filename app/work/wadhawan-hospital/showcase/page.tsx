import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

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
          View Final Website <ArrowUpRight size={14} />
        </a>
      </div>
    </nav>
  );
}

const pages = [
  { num: "01", label: "Homepage", color: "bg-blue-50", accent: "#2563EB" },
  { num: "02", label: "About Us", color: "bg-slate-50", accent: "#64748B" },
  { num: "03", label: "Orthopedics", color: "bg-indigo-50", accent: "#4F46E5" },
  { num: "04", label: "Gynecology", color: "bg-pink-50", accent: "#EC4899" },
  { num: "05", label: "Contact Us", color: "bg-gray-50", accent: "#374151" },
];

const components = [
  {
    label: "Department Card",
    preview: (
      <div className="bg-white rounded-xl p-4 border border-blue-100 w-40">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-2 text-lg">🦴</div>
        <p className="text-xs font-bold text-[#1a1a1a]">Orthopedics</p>
        <p className="text-[10px] text-gray-400">Bone & Joint Care</p>
      </div>
    )
  },
  {
    label: "Doctor Card",
    preview: (
      <div className="bg-white rounded-xl p-4 border border-gray-100 w-40">
        <div className="w-10 h-10 bg-blue-100 rounded-full mb-2 flex items-center justify-center text-lg">👨‍⚕️</div>
        <p className="text-xs font-bold text-[#1a1a1a]">Dr. Piyush Wadhawan</p>
        <p className="text-[10px] text-gray-400">Orthopedic Surgeon</p>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-yellow-400 text-[10px]">★★★★★</span>
          <span className="text-[10px] text-gray-400">4.9 (120)</span>
        </div>
      </div>
    )
  },
  {
    label: "Service Card",
    preview: (
      <div className="bg-white rounded-xl p-4 border border-gray-100 w-40">
        <p className="text-[10px] font-bold text-[#2563EB] mb-1">🦵 Knee Replacement</p>
        <p className="text-[10px] text-gray-400">Advanced care for pain-free movement.</p>
        <button className="mt-2 text-[10px] font-bold text-[#2563EB]">Learn More →</button>
      </div>
    )
  },
  {
    label: "Appointment Form",
    preview: (
      <div className="bg-white rounded-xl p-4 border border-gray-100 w-40">
        <p className="text-[10px] text-gray-400 mb-1">Name</p>
        <div className="h-4 bg-gray-100 rounded mb-2"/>
        <p className="text-[10px] text-gray-400 mb-1">Phone Number</p>
        <div className="h-4 bg-gray-100 rounded mb-2"/>
        <button className="w-full bg-[#2563EB] text-white text-[10px] py-1.5 rounded-lg">Book Now</button>
      </div>
    )
  },
  {
    label: "Feature Badge",
    preview: (
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 w-40 text-center">
        <p className="text-2xl font-black text-[#2563EB]">4</p>
        <p className="text-[10px] font-bold text-[#2563EB]">24/7</p>
        <p className="text-[10px] text-gray-400">Emergency Care Available</p>
      </div>
    )
  },
  {
    label: "Testimonial Card",
    preview: (
      <div className="bg-white rounded-xl p-4 border border-gray-100 w-40">
        <div className="flex gap-0.5 mb-1">{"★★★★★".split("").map((s,i)=><span key={i} className="text-yellow-400 text-[10px]">{s}</span>)}</div>
        <p className="text-[10px] text-gray-600 italic mb-2">"Very professional and supportive staff."</p>
        <p className="text-[10px] font-bold text-[#1a1a1a]">– Rakesh Sharma</p>
      </div>
    )
  },
];

const uxSteps = [
  { num: "1", icon: "🏠", label: "Landing Page", desc: "Explore services & hospital information" },
  { num: "2", icon: "🔍", label: "Browse Services", desc: "View departments & doctor details" },
  { num: "3", icon: "👨‍⚕️", label: "Select Doctor", desc: "Choose the right specialist" },
  { num: "4", icon: "📅", label: "Book Appointment", desc: "Fill form & select date and time" },
  { num: "5", icon: "💬", label: "Get Confirmation", desc: "Receive WhatsApp & Email confirmation" },
  { num: "6", icon: "🏥", label: "Visit Hospital", desc: "Better experience, better care" },
];

export default function WadhawanShowcase() {
  return (
    <main className="min-h-screen bg-white">
      <CaseStudyNav active="Showcase" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#2563EB] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              OUR SHOWCASE
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">
              Every Screen. Every Detail.{" "}
              <span className="text-[#2563EB]">Built for Patients & Doctors.</span>
            </h1>
            <p className="text-gray-500 leading-relaxed mb-6">
              A complete digital experience designed to build trust, simplify communication, and make healthcare accessible for everyone.
            </p>
            <div className="space-y-2">
              {["Complete Website Screens","Mobile Responsive Views","Key Modules & Components","User Experience Flow"].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <Check size={14} className="text-[#2563EB] shrink-0"/> {item}
                </div>
              ))}
            </div>
          </div>
          {/* Hero mockup */}
          <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 min-h-72 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-5 border border-blue-50">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-[#2563EB] rounded-full flex items-center justify-center text-white text-[10px]">🏥</div>
                <div>
                  <p className="text-[9px] font-bold text-[#1a1a1a]">WADHAWAN HOSPITAL</p>
                  <div className="flex gap-3 text-[9px] text-gray-400">
                    {["Home","About Us","Orthopedics","Gynecology","Gallery","Contact Us"].map(n=><span key={n}>{n}</span>)}
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-bold text-[#1a1a1a] mb-1">Advanced Orthopedics,<br/>Fertility & Gyne Care</h3>
              <p className="text-[9px] text-gray-400 mb-3">Compassion | Care | Cure</p>
              <div className="flex gap-2 mb-4">
                <span className="bg-[#2563EB] text-white text-[9px] px-2.5 py-1 rounded-full">Book Appointment</span>
                <span className="border border-gray-200 text-[9px] px-2.5 py-1 rounded-full">Explore Services</span>
              </div>
              <div className="grid grid-cols-4 gap-1 text-center">
                {[['24/7','Emergency'],['10+','Expert Doctors'],['Modern','Facilities'],['5000+','Patients']].map(([v,l])=>(
                  <div key={l} className="bg-gray-50 rounded-lg p-1.5">
                    <p className="text-[8px] font-bold text-[#2563EB]">{v}</p>
                    <p className="text-[7px] text-gray-400">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Screens */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="flex items-start gap-8 mb-10">
          <div className="shrink-0">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-[#2563EB] mb-2">💻</div>
            <h2 className="text-xl font-bold text-[#1a1a1a]">Website Screens</h2>
            <p className="text-sm text-gray-400 mt-1 max-w-xs">A complete look at all the major pages of the website.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 flex-1">
            {pages.map(page => (
              <div key={page.num} className={`${page.color} rounded-2xl p-4 border border-white`}>
                <div className="bg-white rounded-lg p-3 mb-3 min-h-28 flex flex-col gap-1.5">
                  <div className="h-1.5 rounded-full w-full" style={{ background: page.accent }}/>
                  <div className="h-1.5 bg-gray-100 rounded-full w-3/4"/>
                  <div className="flex-1 bg-gray-50 rounded-lg"/>
                  <div className="h-1.5 bg-gray-100 rounded-full w-1/2"/>
                </div>
                <p className="text-[10px] font-bold text-gray-400">{page.num}</p>
                <p className="text-xs font-bold text-[#1a1a1a]">{page.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Views */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-start gap-8">
            <div className="shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-[#2563EB] mb-2">📱</div>
              <h2 className="text-xl font-bold text-[#1a1a1a]">Mobile Responsive Views</h2>
              <p className="text-sm text-gray-400 mt-1 max-w-xs">Fully responsive design that works beautifully across all devices.</p>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {[
                { label: "Homepage", color: "#2563EB" },
                { label: "Orthopedics", color: "#4F46E5" },
                { label: "Gynecology", color: "#EC4899" },
                { label: "Doctors", color: "#0891B2" },
                { label: "Appointment", color: "#059669" },
              ].map(page => (
                <div key={page.label} className="shrink-0 w-28">
                  <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm">
                    <div className="h-2 flex items-center justify-center" style={{ background: page.color }}/>
                    <div className="p-2">
                      <div className="h-1.5 bg-gray-100 rounded w-full mb-1.5"/>
                      <div className="h-8 rounded-lg mb-1.5" style={{ background: `${page.color}15` }}/>
                      <div className="h-1.5 bg-gray-100 rounded w-3/4 mb-1"/>
                      <div className="h-1.5 bg-gray-100 rounded w-1/2 mb-2"/>
                      <div className="h-4 rounded-full" style={{ background: page.color }}/>
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-gray-500 text-center mt-2">{page.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="flex items-start gap-8">
          <div className="shrink-0">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-[#2563EB] mb-2">🧩</div>
            <h2 className="text-xl font-bold text-[#1a1a1a]">Key Modules & Components</h2>
            <p className="text-sm text-gray-400 mt-1 max-w-xs">Custom components designed for a seamless user experience.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 flex-1">
            {components.map(c => (
              <div key={c.label} className="flex flex-col gap-2">
                {c.preview}
                <p className="text-[10px] font-bold text-gray-500 text-center">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UX Flow */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-start gap-8">
            <div className="shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-[#2563EB] mb-2">🔄</div>
              <h2 className="text-xl font-bold text-[#1a1a1a]">User Experience Flow</h2>
              <p className="text-sm text-gray-400 mt-1 max-w-xs">From landing to appointment in just a few simple steps.</p>
            </div>
            <div className="flex flex-wrap gap-4 flex-1">
              {uxSteps.map((step, i) => (
                <div key={step.num} className="flex items-center gap-3">
                  <div className="bg-white rounded-2xl p-4 text-center min-w-24 shadow-sm border border-blue-100">
                    <div className="w-8 h-8 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">{step.num}</div>
                    <span className="text-xl block mb-1">{step.icon}</span>
                    <p className="text-[10px] font-bold text-[#1a1a1a]">{step.label}</p>
                    <p className="text-[9px] text-gray-400 mt-0.5">{step.desc}</p>
                  </div>
                  {i < uxSteps.length - 1 && <ArrowRight size={14} className="text-blue-300 shrink-0"/>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center border-t border-gray-100">
        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">See the Final Experience</h2>
        <p className="text-gray-400 text-sm mb-6">Explore the complete website live and experience the digital transformation.</p>
        <div className="flex gap-4 justify-center">
          <a href="https://wadhawanhospital.com" target="_blank" rel="noopener noreferrer"
            className="bg-[#2563EB] text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors">
            View Final Website <ArrowRight size={14}/>
          </a>
          <Link href="/work/wadhawan-hospital/results"
            className="border border-gray-200 text-[#1a1a1a] font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:border-[#2563EB] transition-colors">
            See Results <ArrowRight size={14}/>
          </Link>
        </div>
      </section>
    </main>
  );
}