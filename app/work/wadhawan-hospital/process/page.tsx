import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";

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

export default function WadhawanProcess() {
  return (
    <main className="min-h-screen bg-white">
      <CaseStudyNav active="Process" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#2563EB] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              OUR PROCESS
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">
              From Traditional Hospital to a{" "}
              <span className="text-[#2563EB]">Modern Digital Experience.</span>
            </h1>
            <p className="text-gray-500 leading-relaxed">
              Designed to simplify patient communication, improve trust, automate appointment workflows, and create a professional online presence.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[['24/7','Availability'],['Multi-Speciality','Care'],['4.9','Google Rating']].map(([val, label]) => (
              <div key={label} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-blue-100">
                <p className="text-lg font-bold text-[#2563EB]">{val}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 space-y-20">

        {/* 01 Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-black text-blue-100">01</span>
              <h2 className="text-2xl font-bold text-[#1a1a1a]">The Challenge</h2>
            </div>
            <p className="text-gray-500 mb-6">Traditional operations were limiting growth, patient trust and communication.</p>
            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="text-sm font-bold text-red-500 mb-4">Challenges We Solved</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'No professional online presence',
                  'Difficult appointment communication',
                  'No WhatsApp confirmations',
                  'Weak digital trust & visibility',
                  'Patients relied on phone calls',
                  'No email notifications',
                ].map(challenge => (
                  <div key={challenge} className="flex items-start gap-2">
                    <X size={14} className="text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-blue-50 rounded-3xl p-8 flex items-center justify-center min-h-48">
            <span className="text-8xl">📋</span>
          </div>
        </div>

        {/* 02 Research */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="flex flex-wrap gap-3">
              {['Healthcare Website Audit','Patient Journey Mapping','Competitor Analysis','Information Architecture','Department Structure','Appointment Flow'].map(item => (
                <span key={item} className="bg-white border border-blue-100 text-xs font-medium px-3 py-1.5 rounded-full text-[#2563EB]">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-black text-blue-100">02</span>
              <h2 className="text-2xl font-bold text-[#1a1a1a]">Research & Strategy</h2>
            </div>
            <p className="text-gray-500">We studied the healthcare industry, patient behavior and competitor landscape to build the right foundation.</p>
          </div>
        </div>

        {/* 03 Wireframes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-black text-blue-100">03</span>
              <h2 className="text-2xl font-bold text-[#1a1a1a]">Wireframes</h2>
            </div>
            <p className="text-gray-500 mb-6">Structured layouts to ensure a seamless experience across all devices.</p>
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              {['Homepage','Departments','Doctor Profile','Appointment','Confirmation'].map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-[#2563EB] rounded-full flex items-center justify-center text-xs font-bold shrink-0">{i+1}</div>
                  <span>{item}</span>
                  {i < 4 && <div className="flex-1 border-t border-dashed border-blue-100"/>}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 grid grid-cols-2 gap-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="bg-white rounded-xl h-24 flex flex-col gap-2 p-3">
                <div className="h-2 bg-gray-100 rounded w-3/4"/>
                <div className="h-2 bg-gray-100 rounded w-1/2"/>
                <div className="flex-1 bg-gray-50 rounded"/>
              </div>
            ))}
          </div>
        </div>

        {/* 04 UI Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Colors</p>
            <div className="flex gap-3 mb-4">
              {['#2563EB','#EAF3FF','#FCE7F3','#FFFFFF','#6474BB'].map(color => (
                <div key={color} className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-lg border border-gray-100" style={{ background: color }}/>
                  <span className="text-[9px] text-gray-400 font-mono">{color}</span>
                </div>
              ))}
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Typography</p>
            <div className="flex gap-4 text-sm">
              <span className="font-serif font-bold text-[#1a1a1a]">Playfair Display</span>
              <span className="font-sans text-gray-500">Inter</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-black text-blue-100">04</span>
              <h2 className="text-2xl font-bold text-[#1a1a1a]">UI Design</h2>
            </div>
            <p className="text-gray-500">Clean, trustworthy and patient-centric design with a medical touch.</p>
          </div>
        </div>

        {/* 05 Development */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-black text-blue-100">05</span>
              <h2 className="text-2xl font-bold text-[#1a1a1a]">Development</h2>
            </div>
            <p className="text-gray-500 mb-6">Built with modern, scalable and secure technologies.</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { name: 'Next.js', icon: '▲' },
                { name: 'React', icon: '⚛' },
                { name: 'Tailwind CSS', icon: '🎨' },
                { name: 'Supabase', icon: '⚡' },
                { name: 'WhatsApp API', icon: '💬' },
                { name: 'Email Integration', icon: '✉️' },
              ].map(tech => (
                <div key={tech.name} className="flex items-center gap-2 bg-blue-50 text-[#2563EB] px-3 py-2 rounded-xl text-sm font-medium">
                  <span>{tech.icon}</span> {tech.name}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Responsive All Devices','Fast Performance','SEO Friendly','Secure & Reliable'].map(f => (
                <div key={f} className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Check size={12} className="text-green-500 shrink-0"/> {f}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-900 rounded-3xl p-6 font-mono text-xs text-green-400 leading-relaxed">
            <p className="text-gray-500 mb-3">// appointment handler</p>
            <p><span className="text-blue-400">const</span> bookAppointment = <span className="text-yellow-400">async</span> (data) =&gt; {'{'}</p>
            <p className="pl-4"><span className="text-blue-400">await</span> supabase.from(<span className="text-green-300">&apos;appointments&apos;</span>)</p>
            <p className="pl-8">.insert(data)</p>
            <p className="pl-4"><span className="text-blue-400">await</span> sendWhatsApp(data.phone)</p>
            <p className="pl-4"><span className="text-blue-400">await</span> sendEmail(data.email)</p>
            <p>{'}'}</p>
          </div>
        </div>

        {/* 06 Automation */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-black text-blue-100">06</span>
            <h2 className="text-2xl font-bold text-[#1a1a1a]">Automation</h2>
          </div>
          <p className="text-gray-500 mb-8">We automated communication to save time and improve patient experience.</p>
          <div className="flex flex-wrap items-center gap-3">
            {['Patient','Appointment Form','Supabase Database','WhatsApp Notification','Email Notification','Hospital Staff Dashboard','Patient Confirmation'].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="bg-blue-50 border border-blue-100 rounded-xl px-3 py-2 text-xs font-medium text-[#2563EB] text-center">
                  {step}
                </div>
                {i < 6 && <ArrowRight size={14} className="text-blue-200 shrink-0"/>}
              </div>
            ))}
          </div>
        </div>

        {/* Before vs After */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-black text-blue-100">07</span>
            <h2 className="text-2xl font-bold text-[#1a1a1a]">Before vs After</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <p className="font-bold text-red-500 mb-4">❌ Before</p>
              {['Paper based records','Phone calls for appointments','No online presence','Manual communication','Delayed confirmations'].map(item => (
                <div key={item} className="flex items-center gap-2 py-1.5 text-sm text-gray-600">
                  <X size={14} className="text-red-400 shrink-0"/> {item}
                </div>
              ))}
            </div>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
              <p className="font-bold text-green-600 mb-4">✅ After</p>
              {['Professional website','Online appointment system','WhatsApp & email alerts','Automated communication','Faster & better patient experience'].map(item => (
                <div key={item} className="flex items-center gap-2 py-1.5 text-sm text-gray-600">
                  <Check size={14} className="text-green-500 shrink-0"/> {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl font-black text-blue-100">08</span>
            <h2 className="text-2xl font-bold text-[#1a1a1a]">Our Process Timeline</h2>
          </div>
          <div className="relative">
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-blue-100"/>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 relative">
              {['Discovery','Research','Planning','UI Design','Development','Automation','Testing','Launch'].map((step, i) => (
                <div key={step} className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-xs font-bold z-10">
                    {String(i+1).padStart(2,'0')}
                  </div>
                  <p className="text-xs text-center text-gray-500 font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2563EB] py-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Modernize Your Healthcare Business?</h2>
        <p className="text-blue-200 text-sm mb-6">Let&apos;s build a digital experience that improves patient trust, automates communication and grows your hospital.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/work/wadhawan-hospital/showcase"
            className="bg-white text-[#2563EB] font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2">
            View Showcase <ArrowRight size={14}/>
          </Link>
          <a href="#contact" className="border border-white/30 text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
            💬 Let&apos;s Discuss Your Project
          </a>
        </div>
      </section>
    </main>
  );
}