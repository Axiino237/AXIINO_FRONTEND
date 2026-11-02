import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Brain, Layers, Database, Server, Cloud, ArrowRight, ShieldCheck, Zap, Handshake } from "lucide-react";
import { servicesData } from "../data/servicesData";

const iconMap = {
  "custom-software-development": <Code2 size={26} className="text-sky-400" />,
  "web-application-development": <Globe size={26} className="text-blue-400" />,
  "mobile-app-development": <Smartphone size={26} className="text-purple-400" />,
  "ai-business-automation": <Brain size={26} className="text-fuchsia-400" />,
  "saas-product-development": <Layers size={26} className="text-indigo-400" />,
  "crm-erp-development": <Database size={26} className="text-amber-400" />,
  "backend-api-development": <Server size={26} className="text-emerald-400" />,
  "cloud-devops": <Cloud size={26} className="text-cyan-400" />
};

export default function Services() {
  const servicesList = Object.values(servicesData);

  return (
    <div className="min-h-screen bg-[#030712] pt-36 pb-24 px-6 sm:px-12 relative overflow-hidden text-white">
      {/* Background Ambience */}
      <div className="animated-grid absolute inset-0 opacity-40 mix-blend-screen pointer-events-none" />
      <div className="orb absolute orb-blue w-[600px] h-[600px] -top-40 -left-40 opacity-30 blur-[140px] pointer-events-none" />
      <div className="orb absolute orb-purple w-[700px] h-[700px] bottom-0 right-0 opacity-25 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <li>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li className="text-sky-400" aria-current="page">Services</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-sky-400/40 bg-sky-950/50 text-sky-200 text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(56,189,248,0.2)] mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-[pulse-glow_2s_infinite]" />
            Full-Spectrum Engineering
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Software Engineering &amp; <br />
            <span className="gradient-text pb-2 inline-block">Digital Transformation Services</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            From modern web applications and mobile apps to custom enterprise platforms and AI workflow automations, Axiino Technologies delivers production-grade software engineered for high performance, zero technical debt, and continuous business scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="card-glow p-8 rounded-3xl flex flex-col h-full bg-[#0a1122]/50 border border-white/10 hover:border-sky-400/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/15 to-fuchsia-500/15 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.15)] group-hover:scale-105 transition-transform">
                  {iconMap[service.slug] || <Code2 size={26} className="text-sky-400" />}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block">Axiino Service</span>
                  <h2 className="text-xl font-bold text-white leading-tight">{service.shortTitle}</h2>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                {service.subheadline}
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Key Deliverables</p>
                  <ul className="space-y-1.5">
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                        <span className="truncate">{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Tech Core</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-[11px] font-medium text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 group-hover:text-sky-300 transition-colors"
                  >
                    <span>Explore Full Service &amp; Deliverables</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Axiino Section */}
        <section className="bg-[#050b14] border border-white/10 rounded-3xl p-8 sm:p-14 mb-24 relative overflow-hidden">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest block mb-2">Our Engineering Promise</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Why Partner with Axiino Technologies?</h2>
            <p className="text-slate-300 text-base leading-relaxed">
              We operate differently from conventional software development agencies. We eliminate technical debt before it is written, communicate with radical transparency, and build architectures designed to dominate markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Zero-Trust Architecture</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Security, role-based controls, and input sanitization are engineered into your software from day one, not patched on at the end.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Rapid Sprint Velocity</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Agile two-week delivery cycles with live staging demos keep you completely in control of budget, scope, and timeline.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Handshake size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Direct Lead Access</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                You speak directly with lead architects and full-stack engineers who understand code and business ROI, not non-technical middlemen.
              </p>
            </div>
          </div>
        </section>

        {/* Global & Local CTA */}
        <section className="text-center max-w-4xl mx-auto py-12 px-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            Ready to Build Your <span className="gradient-text pb-1 inline-block">Next Milestone?</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you are located in Chennai or across the globe in the US, UK, UAE, or Australia, our engineering squad is ready to bring your software requirements to life.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="glow-btn px-8 py-4 bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(192,132,252,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] transition-all duration-300 border border-white/20"
            >
              Start a Conversation &rarr;
            </Link>
            <Link
              to="/works"
              className="px-8 py-4 bg-white/5 border border-slate-600 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-slate-400 transition-all duration-300 backdrop-blur-md"
            >
              View Our Completed Work
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

