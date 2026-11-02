import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight, Layers, Cpu, HelpCircle, ShieldCheck } from "lucide-react";
import { servicesData } from "../data/servicesData";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#030712] pt-40 pb-20 px-6 text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="text-slate-400 mb-8">The requested service could not be found.</p>
        <Link to="/services" className="text-sky-400 hover:underline">
          &larr; View All Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] pt-36 pb-24 px-6 sm:px-12 relative overflow-hidden text-white">
      {/* Background Ambience */}
      <div className="animated-grid absolute inset-0 opacity-40 mix-blend-screen pointer-events-none" />
      <div className="orb absolute orb-blue w-[600px] h-[600px] -top-40 -left-40 opacity-30 blur-[140px] pointer-events-none" />
      <div className="orb absolute orb-purple w-[700px] h-[700px] bottom-0 right-0 opacity-25 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <li>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            </li>
            <li>/</li>
            <li className="text-sky-400" aria-current="page">{service.shortTitle}</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-950/40 text-sky-300 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            Specialized Engineering Practice
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            {service.title}
          </h1>

          <p className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-400 font-semibold mb-6 max-w-3xl">
            {service.headline}
          </p>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mb-10">
            {service.subheadline}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="glow-btn px-8 py-4 bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white font-bold rounded-xl shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:shadow-[0_0_35px_rgba(192,132,252,0.5)] transition-all duration-300 border border-white/20"
            >
              Consult with an Architect &rarr;
            </Link>
            <Link
              to="/services"
              className="px-6 py-4 bg-white/5 border border-slate-700 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 inline-flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              <span>All Services</span>
            </Link>
          </div>
        </div>

        {/* Target Audience & Problem Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-3xl bg-[#0a1122]/60 border border-white/10 card-glow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Layers size={20} />
              </div>
              <h2 className="text-lg font-bold text-white">Who This Service Is Built For</h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {service.targetAudience}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0a1122]/60 border border-white/10 card-glow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <h2 className="text-lg font-bold text-white">The Core Challenge We Solve</h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {service.problemSolved}
            </p>
          </div>
        </section>

        {/* Detailed Deliverables */}
        <section className="mb-20">
          <div className="mb-10">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2">Scope of Work</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Key Deliverables &amp; Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#050b14] border border-white/10 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 size={18} className="text-sky-400 shrink-0" />
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed pl-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#0a1122]/40 border border-white/10 mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="text-sky-400" size={24} />
            <h2 className="text-2xl font-bold text-white">Primary Technology Stack</h2>
          </div>
          <p className="text-slate-300 text-sm mb-6 leading-relaxed max-w-2xl">
            We select production-proven frameworks and distributed tooling engineered for long-term maintainability, developer productivity, and extreme execution speed.
          </p>
          <div className="flex flex-wrap gap-3">
            {service.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl text-sm font-semibold bg-white/5 border border-white/15 text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Step-by-Step Engineering Process */}
        <section className="mb-20">
          <div className="mb-10">
            <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest block mb-2">Delivery Methodology</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">How We Build &amp; Ship</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#050b14] border border-white/5 relative overflow-hidden"
              >
                <div className="text-4xl font-black text-sky-400/20 mb-3">{step.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mb-20">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2 text-sky-400">
              <HelpCircle size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Client Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#0a1122]/60 border border-white/10"
              >
                <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 flex items-start gap-3">
                  <span className="text-sky-400 font-extrabold text-sm mt-0.5">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="text-center p-12 rounded-3xl bg-gradient-to-b from-[#0a1122] to-[#020617] border border-white/10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Begin Your Project?
          </h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Reach out to our engineering team in Ramapuram, Chennai. We respond within 2 hours with initial architectural recommendations and a clear path forward.
          </p>
          <Link
            to="/contact"
            className="glow-btn inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white font-bold rounded-xl shadow-lg border border-white/20 transition-all hover:scale-105"
          >
            <span>Request a Free Technical Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </section>

      </div>
    </div>
  );
}

