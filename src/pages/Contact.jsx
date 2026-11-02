import { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import { Mail, Phone, MapPin, Send, MessageSquare, Shield, Lock, Globe, Database, Cpu } from "lucide-react";

const BackgroundParticle = memo(({ size, top, left, duration, delay }) => {
  return (
    <div
      className="absolute rounded-full bg-white/10 pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        animation: `float-particle ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
});

const FloatingBackgroundIcon = memo(({ icon, top, left, delay, speed }) => {
  return (
    <div
      className="absolute text-white/5 pointer-events-none"
      style={{
        top,
        left,
        animation: `float-icon ${speed}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {icon}
    </div>
  );
});

const contactInfo = [
  { icon: <Mail size={22} />, label: "Email Us", value: "axiino237@gmail.com", subValue: "Replies within 2 hours" },
  { icon: <Phone size={22} />, label: "Call Us", value: "+91 93613 95699", subValue: "Mon-Sat, 9am - 7pm IST" },
  { icon: <MapPin size={22} />, label: "Headquarters", value: "Ramapuram, Chennai", subValue: "Flat No. 27, 1st Street, Kothari Nagar, Annai Sathya Nagar Main Road, Chennai 600089" },
];

const floatingIcons = [
  { icon: <Mail size={22} />, top: '15%', left: '12%', delay: 0, speed: 22 },
  { icon: <Shield size={20} />, top: '25%', left: '88%', delay: 2, speed: 25 },
  { icon: <Lock size={22} />, top: '65%', left: '8%', delay: 4, speed: 20 },
  { icon: <Globe size={18} />, top: '85%', left: '75%', delay: 1, speed: 18 },
  { icon: <Database size={20} />, top: '45%', left: '90%', delay: 3, speed: 28 },
  { icon: <MessageSquare size={22} />, top: '10%', left: '75%', delay: 5, speed: 24 },
  { icon: <Cpu size={18} />, top: '40%', left: '5%', delay: 6, speed: 26 },
];

const dustParticles = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  duration: Math.random() * 20 + 10,
  delay: Math.random() * 5,
}));

const PersistentBackground = memo(({ isMobile }) => {
  if (isMobile) return null;
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {dustParticles.map((p) => (
        <BackgroundParticle
          key={`dust-${p.id}`}
          {...p}
        />
      ))}

      {floatingIcons.map((item, i) => (
        <FloatingBackgroundIcon
          key={`icon-${i}`}
          {...item}
        />
      ))}
    </div>
  );
});

function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    service: "Web Development",
    message: "",
  });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const payloadMessage = `Service Interest: ${formData.service}\n\n${formData.message}`;
      const apiUrl = import.meta.env.DEV ? (import.meta.env.VITE_API_URL || 'http://localhost:3001') : '';
      const res = await fetch(`${apiUrl}/api/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          message: payloadMessage,
        }),
      });
      const result = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phoneNumber: "", service: "Web Development", message: "" });
        
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#38bdf8', '#c084fc', '#e879f9', '#4ade80', '#fbbf24']
          });
        } catch {
          // ignore if canvas not supported
        }
      } else {
        throw new Error(result.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-5 py-4 rounded-xl bg-[#0f172a] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:bg-[#1e293b] transition-all duration-300 text-base shadow-inner";

  return (
    <div className="w-full relative selection:bg-sky-500/30">
      <PersistentBackground isMobile={isMobile} />

      <section className="relative w-full bg-[#050b14] text-white overflow-hidden pb-32 pt-36">
        <div className="animated-grid absolute inset-0 opacity-40 mix-blend-screen pointer-events-none" />
        <div className="orb absolute orb-blue w-[700px] h-[700px] -top-64 -left-64 opacity-20 blur-[150px] pointer-events-none" />
        <div className="orb absolute orb-fuchsia w-[500px] h-[500px] -bottom-32 -right-32 opacity-20 blur-[120px] pointer-events-none" />
        <div className="orb absolute orb-purple w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 blur-[100px] pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-6">

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li className="text-sky-400" aria-current="page">Contact</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-sky-400/40 bg-sky-950/50 text-sky-200 text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(56,189,248,0.2)] mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-[pulse-glow_2s_infinite]" />
              Engineering Consultation
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1] text-white">
              Let&apos;s Start a <br className="hidden md:block" />
              <span className="gradient-text pb-2 inline-block">Conversation</span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed">
              Fill out the form below or drop us an email. Our technical architects are ready to discuss your software architecture, strategy, and milestone roadmap.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">

            {/* Contact Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="card-glow p-6 rounded-2xl flex items-start gap-6 group cursor-default"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{info.label}</p>
                    <p className="text-white font-bold text-lg">{info.value}</p>
                    <p className="text-slate-400 text-sm mt-1">{info.subValue}</p>
                  </div>
                </div>
              ))}

              {/* Decorative SLA card */}
              <div className="p-8 rounded-2xl mt-8 border border-sky-500/30 bg-gradient-to-br from-[#0f172a] to-[#020617] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-[50px] rounded-full pointer-events-none" />
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="text-sky-400" size={24} />
                  <h3 className="text-white font-bold text-lg">Direct Engineering Response</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  When you reach out to Axiino, you won&apos;t get a non-technical sales script. You will speak directly with senior software architects who analyze requirements and provide concrete engineering options.
                </p>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 card-glow p-8 md:p-10 rounded-3xl space-y-6 bg-[#0a1122]/60 border border-white/10"
            >
              <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-4">
                <h2 className="text-2xl font-bold text-white">Project Inquiry</h2>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">* All fields required</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="E.g. Sarah Jenkins"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="founder@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+91 93613 95699"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Primary Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass + " appearance-none"}
                    required
                  >
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Web Application Development">Web Application Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="AI & Business Automation">AI &amp; Business Automation</option>
                    <option value="SaaS Product Engineering">SaaS Product Engineering</option>
                    <option value="Cloud & DevOps Engineering">Cloud &amp; DevOps Engineering</option>
                    <option value="CRM & ERP Development">CRM &amp; ERP Development</option>
                    <option value="Enterprise Product Suite Demo">Enterprise Product Suite Demo</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClass + " resize-none"}
                  placeholder="Describe your system requirements, timeline, tech stack preferences, and goals..."
                  required
                />
              </div>

              <button
                type="submit"
                className="glow-btn w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-sky-500 to-fuchsia-600 text-white text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:shadow-[0_0_50px_rgba(192,132,252,0.5)] transition-all duration-300 disabled:opacity-50 mt-4 cursor-pointer"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Technical Inquiry
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="text-[#34d399] font-bold text-base text-center bg-[#064e3b]/40 border border-[#059669]/50 rounded-xl py-4">
                  Transmission successful. An engineering lead will contact you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-[#f87171] font-bold text-base text-center bg-[#7f1d1d]/40 border border-[#b91c1c]/50 rounded-xl py-4">
                  Transmission failed. Please verify your connection or email directly to axiino237@gmail.com.
                </p>
              )}
            </form>
          </div>

          {/* Map Embed Section for Local SEO */}
          <div className="mt-20 w-full relative rounded-3xl overflow-hidden border border-white/5 card-glow p-1 bg-[#0a1122]/40 backdrop-blur-xl">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                title="Axiino Technologies Headquarters Location Map - Ramapuram, Chennai"
                src="https://maps.google.com/maps?q=13.036214732907844,80.18460287544686&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.9)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-lg bg-[#030712]/90 border border-white/10 text-xs text-sky-400 font-mono shadow-md flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-[pulse-glow_2s_infinite]" />
                <span>13.0362° N, 80.1846° E • Ramapuram, Chennai, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
