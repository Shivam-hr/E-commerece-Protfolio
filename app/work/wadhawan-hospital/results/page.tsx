import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react";

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

const testimonials = [
  {
    quote: "The website is very easy to use. I booked my appointment in just a few minutes. Very convenient!",
    name: "Neha Sharma",
    role: "Patient",
    rating: 5,
  },
  {
    quote: "I receive timely WhatsApp and email reminders. It's a great system and very helpful.",
    name: "Rajesh Verma",
    role: "Patient",
    rating: 5,
  },
  {
    quote: "Very professional website. All information is clear and easy to find. Great experience!",
    name: "Pooja Saini",
    role: "Patient",
    rating: 5,
  },
];

export default function WadhawanResults() {
  return (
    <main className="min-h-screen bg-white">
      <CaseStudyNav active="Results" />

      {/* Hero */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#2563EB] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              PROJECT RESULTS
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">
              Delivering a Better Experience.{" "}
              <span className="text-[#2563EB]">Driving Real Impact.</span>
            </h1>
            <p className="text-gray-500 leading-relaxed mb-8">
              The new digital experience has simplified communication, automated workflows, and created a strong online presence for Wadhawan Hospital.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { icon: "💻", label: "Modern Design" },
                { icon: "⚙️", label: "Smart Automation" },
                { icon: "❤️", label: "Better Experience" },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                  <span>{item.icon}</span> {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Device mockups */}
          <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 min-h-80 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl w-64 p-4 border border-blue-50">
              <div className="bg-[#2563EB] rounded-lg p-2 mb-3">
                <p className="text-white text-[8px] font-bold">WADHAWAN HOSPITAL</p>
              </div>
              <p className="text-xs font-bold text-[#1a1a1a] mb-1">Advanced Orthopedics,<br/>Fertility & Gyne Care</p>
              <p className="text-[9px] text-gray-400 mb-3">Compassion | Care | Cure</p>
              <div className="flex gap-2 mb-3">
                <span className="bg-[#2563EB] text-white text-[8px] px-2 py-1 rounded-full">Book Appointment</span>
                <span className="border border-gray-200 text-[8px] px-2 py-1 rounded-full">Explore Services</span>
              </div>
              <div className="grid grid-cols-4 gap-1">
                {[['24/7','Emergency'],['10+','Doctors'],['Modern','Tech'],['5000+','Patients']].map(([v,l])=>(
                  <div key={l} className="bg-blue-50 rounded p-1 text-center">
                    <p className="text-[7px] font-bold text-[#2563EB]">{v}</p>
                    <p className="text-[6px] text-gray-400">{l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-white rounded-2xl shadow-lg w-24 overflow-hidden border border-blue-100">
              <div className="bg-[#2563EB] h-3"/>
              <div className="p-2">
                <p className="text-[7px] font-bold text-[#1a1a1a] mb-1">Advanced Orthopedics</p>
                <div className="h-5 bg-blue-50 rounded mb-1"/>
                <div className="bg-[#2563EB] h-3 rounded-full"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: "👥", value: "250+", label: "Appointments Booked", sub: "Within the first 30 days" },
              { icon: "💬", value: "90%", label: "WhatsApp Delivery Rate", sub: "For notifications" },
              { icon: "✉️", value: "70%", label: "Reduction in Manual Work", sub: "Through automation" },
              { icon: "📈", value: "60%", label: "Increase in Online Inquiries", sub: "Compared to before" },
              { icon: "⭐", value: "4.9/5", label: "Patient Satisfaction", sub: "Based on feedback" },
            ].map(stat => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 border border-gray-100">
                <span className="text-2xl block mb-2">{stat.icon}</span>
                <p className="text-2xl font-black text-[#2563EB]">{stat.value}</p>
                <p className="text-xs font-bold text-[#1a1a1a] mt-1">{stat.label}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Delivered + Devices */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">What We Delivered</h2>
          <div className="space-y-3">
            {[
              { icon: "🌐", title: "Professional Online Presence", desc: "A modern website that builds trust and credibility for the hospital." },
              { icon: "📅", title: "Easy Appointment System", desc: "Simple appointment request flow for patients anytime." },
              { icon: "💬", title: "WhatsApp Notifications", desc: "Automated WhatsApp alerts for confirmations and updates." },
              { icon: "✉️", title: "Email Notifications", desc: "Instant email alerts to patients and hospital staff." },
              { icon: "📋", title: "Organised Information", desc: "Clear department, doctor and service information." },
              { icon: "📱", title: "Mobile Responsive", desc: "Seamless experience across all devices and screen sizes." },
              { icon: "⚡", title: "Fast & Secure", desc: "Optimised performance with strong security and reliability." },
              { icon: "🔍", title: "SEO Optimised", desc: "Better visibility on Google to attract more patients." },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-blue-50 transition-colors">
                <span className="text-xl shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-[#1a1a1a]">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">A Seamless Experience Across All Devices</h2>
          <div className="bg-blue-50 rounded-3xl p-8 flex flex-col items-center gap-4">
            {/* Laptop mockup */}
            <div className="bg-white rounded-xl shadow-md w-full max-w-xs p-3 border border-blue-100">
              <div className="bg-[#2563EB] rounded-lg h-4 mb-2 flex items-center px-2">
                <p className="text-white text-[7px] font-bold">WADHAWAN HOSPITAL</p>
              </div>
              <div className="bg-blue-50 rounded-lg h-20 flex items-center justify-center">
                <p className="text-[8px] font-bold text-[#2563EB]">Advanced Orthopedics, Fertility & Gyne Care</p>
              </div>
              <div className="grid grid-cols-4 gap-1 mt-2">
                {[1,2,3,4].map(i=><div key={i} className="h-4 bg-gray-100 rounded"/>)}
              </div>
            </div>
            {/* Mobile mockup */}
            <div className="bg-white rounded-xl shadow-md w-32 p-2 border border-blue-100">
              <div className="bg-[#2563EB] rounded-lg h-3 mb-1.5"/>
              <p className="text-[7px] font-bold text-[#1a1a1a] mb-1">Advanced Orthopedics</p>
              <div className="bg-blue-50 rounded h-10 mb-1.5"/>
              <div className="bg-[#2563EB] h-3 rounded-full"/>
            </div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">Performance & Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: "⏱️", value: "1.8s", label: "Average Load Time", sub: "Super fast performance" },
              { icon: "🛡️", value: "99%", label: "Uptime", sub: "Reliable and always on" },
              { icon: "📱", value: "100%", label: "Mobile Friendly", sub: "Perfect on all devices" },
              { icon: "📄", value: "85+", label: "Pages Created", sub: "For all departments" },
              { icon: "🕐", value: "24/7", label: "Availability", sub: "Always accessible" },
            ].map(stat => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 border border-gray-100 text-center">
                <span className="text-2xl block mb-2">{stat.icon}</span>
                <p className="text-2xl font-black text-[#1a1a1a]">{stat.value}</p>
                <p className="text-xs font-bold text-[#1a1a1a] mt-1">{stat.label}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">What Patients Are Saying</h2>
        <div className="w-12 h-1 bg-[#2563EB] rounded-full mb-8"/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-3">
                {Array.from({length: t.rating}).map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400"/>
                ))}
              </div>
              <p className="text-sm text-gray-600 italic mb-4">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#2563EB] font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1a1a1a]">– {t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#2563EB] to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Ready to Create Real Impact<br/>for Your Healthcare Business?
            </h2>
            <p className="text-blue-200 text-sm">
              Let's build a digital experience that improves patient trust, automates communication and grows your hospital.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/#contact"
              className="bg-white text-[#2563EB] font-bold px-6 py-3.5 rounded-full flex items-center gap-2 hover:bg-blue-50 transition-colors">
              Let's Discuss Your Project <ArrowRight size={14}/>
            </Link>
            <a href="https://wadhawanhospital.com" target="_blank" rel="noopener noreferrer"
              className="border border-white/30 text-white font-bold px-6 py-3.5 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors">
              View Live Website <ArrowUpRight size={14}/>
            </a>
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
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#1a1a1a] transition-colors">
            <ArrowLeft size={14}/> Back to Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}