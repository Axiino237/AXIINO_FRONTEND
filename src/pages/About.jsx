import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Users, Target, ShieldCheck, Activity, BookOpenCheck, HeartHandshake, Zap, Globe, Code2, Cpu, Server, Database, Cloud, Bot, Layers } from "lucide-react";
import { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
// Removed direct supabase import since we use the local API now

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
      className="absolute text-white/5 hover:text-white/10 transition-colors pointer-events-none"
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

const beliefs = [
  { icon: <Users size={26} />, title: "Collaborative Unity", desc: "We believe cross-functional teamwork leads to the most resilient architectures and best client outcomes." },
  { icon: <Target size={26} />, title: "Targeted Precision", desc: "We reject bloated code. Every line we write serves a specific business objective with zero waste." },
  { icon: <ShieldCheck size={26} />, title: "Absolute Integrity", desc: "No hidden fees, no black-box development. Radical transparency forms the bedrock of our client relationships." },
  { icon: <Activity size={26} />, title: "Continuous Innovation", desc: "Technology moves fast. We adopt modern paradigms like serverless and AI before they mainstream." },
  { icon: <BookOpenCheck size={26} />, title: "Lifelong Learning", desc: "Our engineering culture is rooted in constant upskilling, hackathons, and rigorous code reviews." },
  { icon: <HeartHandshake size={26} />, title: "Client ROI First", desc: "We don't consider a launch successful unless it actively drives revenue, retention, or efficiency for you." },
  { icon: <Zap size={26} />, title: "Agile Velocity", desc: "Speed matters. We leverage CI/CD and automated testing to ship bulletproof features in days, not months." },
  { icon: <Globe size={26} />, title: "Global Scale", desc: "We architect systems expecting them to go viral. We build for horizontal scaling from day one." },
];

const floatingIcons = [
  { icon: <Code2 size={24} />, top: '15%', left: '10%', delay: 0, speed: 20 },
  { icon: <Cpu size={20} />, top: '25%', left: '85%', delay: 2, speed: 25 },
  { icon: <Server size={22} />, top: '65%', left: '5%', delay: 4, speed: 22 },
  { icon: <Database size={18} />, top: '85%', left: '80%', delay: 1, speed: 18 },
  { icon: <Cloud size={24} />, top: '45%', left: '92%', delay: 3, speed: 30 },
  { icon: <Bot size={22} />, top: '10%', left: '70%', delay: 5, speed: 24 },
  { icon: <Globe size={20} />, top: '75%', left: '15%', delay: 2, speed: 28 },
  { icon: <Layers size={18} />, top: '40%', left: '8%', delay: 6, speed: 26 },
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
      {/* Dust Particles */}
      {dustParticles.map((p) => (
        <BackgroundParticle
          key={`dust-${p.id}`}
          {...p}
        />
      ))}

      {/* Floating IT Icons */}
      {floatingIcons.map((item, i) => (
        <FloatingBackgroundIcon
          key={`icon-${i}`}
          {...item}
        />
      ))}
    </div>
  );
});

function AboutUs() {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [heroAnimation, setHeroAnimation] = useState(null);
  const [showLottie, setShowLottie] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
      setIsMobile(window.innerWidth < 768);
    };
    checkSize();
    window.addEventListener("resize", checkSize);

    // Dynamically load Lottie JSON to optimize main bundle size
    import("../assets/about.json").then((data) => {
      setHeroAnimation(data.default);
    });

    // Defer Lottie rendering to prevent transition click delays
    const timer = setTimeout(() => {
      setShowLottie(true);
    }, 400);

    return () => {
      window.removeEventListener("resize", checkSize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="w-full bg-[#050b14] relative selection:bg-sky-500/30">
      {/* ── PERSISTENT BACKGROUND ELEMENTS ── */}
      <PersistentBackground isMobile={isMobile} />

      {/* ── HERO ── */}
      <section className="relative bg-[#050b14] px-6 pt-8 pb-12 overflow-hidden z-10 w-full">
        <div className="animated-grid absolute inset-0 opacity-40 mix-blend-screen" />
        <div className="orb absolute orb-blue w-[600px] h-[600px] -top-[200px] -left-[200px] opacity-30" />
        <div className="orb absolute orb-fuchsia w-[400px] h-[400px] -bottom-[100px] -right-[100px] opacity-20" />

        <div className="max-w-7xl mx-auto w-full z-20 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="text-center lg:text-left px-4">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-950/50 text-fuchsia-200 text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(232,121,249,0.2)] mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#e879f9] animate-[pulse-glow_2s_infinite]" />
              Who We Are
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
              Behind <br />
              <span className="gradient-text pb-2 inline-block">Axiino Labs</span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-light mb-10">
              Axiino is an elite collective of software architects, designers, and strategists. We reject mediocrity, choosing instead to build systems that dominate markets.
            </p>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-fuchsia-500/30 to-sky-500/30 blur-[80px]" />
            </div>
            {isMediumScreen && showLottie && heroAnimation && <Lottie animationData={heroAnimation} loop={true} className="w-full h-[500px] relative z-20 drop-shadow-2xl" rendererSettings={{ renderer: 'canvas' }} />}
          </div>
        </div>
      </section>

      {/* ── OUR STORY / MISSION ── */}
      <section className="relative bg-[#030712] px-6 py-24 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <p className="text-sky-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">The Origin</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              We started with a simple question: <span className="gradient-text pb-2 inline-block">Why compromise?</span>
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
              <p>
                Axiino Labs was born out of frustration with the standard agency model. We saw too many companies settling for slow delivery, bloated codebases, and disconnected communication. We wanted to build an engineering powerhouse that operated with the speed of a startup and the rigor of an enterprise.
              </p>
              <p>
                Our mission is to eliminate technical debt before it's even written. We architect platforms that are secure by default, infinitely scalable, and relentlessly focused on the end-user experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/10">
              <div>
                <h4 className="text-4xl font-black text-white mb-2">10x</h4>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Delivery Speed</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-white mb-2">99.9%</h4>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Uptime SLA</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-white mb-2">Zero</h4>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Compromises</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-white mb-2">24/7</h4>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Arch. Support</p>
              </div>
            </div>
          </div>

          {/* Abstract Image / Graphic side */}
          <div className="lg:w-1/2 relative w-full">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#020617] p-8 shadow-2xl overflow-hidden card-glow group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 blur-[100px] rounded-full group-hover:bg-sky-500/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 blur-[100px] rounded-full group-hover:bg-fuchsia-500/30 transition-colors duration-500" />

              <div className="relative z-10 w-full h-full border border-sky-500/20 rounded-2xl bg-[#030712]/80 backdrop-blur-sm p-6 flex flex-col gap-4 shadow-inner">
                {/* Mock code blocks for aesthetic */}
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400/80 shadow-[0_0_10px_rgba(248,113,113,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                </div>
                <div className="w-3/4 h-6 bg-slate-800/50 rounded-md animate-pulse" />
                <div className="w-full h-6 bg-slate-800/50 rounded-md animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-5/6 h-6 bg-sky-900/30 border border-sky-500/30 rounded-md shadow-[0_0_15px_rgba(56,189,248,0.1)] mt-4" />
                <div className="w-1/2 h-6 bg-fuchsia-900/30 border border-fuchsia-500/30 rounded-md mt-auto shadow-[0_0_15px_rgba(232,121,249,0.1)]" />
                <div className="w-full h-24 bg-gradient-to-t from-[#030712] to-transparent absolute bottom-0 left-0 rounded-b-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR METHODOLOGY ── */}
      <section className="relative bg-[#020617] px-6 py-24 overflow-hidden z-10 border-y border-white/5">
        <div className="animated-grid absolute inset-0 opacity-10" />
        <div className="orb absolute orb-blue w-[500px] h-[500px] -top-64 right-0 opacity-10 blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-20">
          <div className="text-center mb-16">
            <p className="text-fuchsia-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">The Workflow</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Methodology</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed font-light">
              We leverage an iterative, audit-driven development cycle that prioritizes structural integrity and high-fidelity output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Architect",
                desc: "We define the technical blueprint, ensuring zero-bottleneck data flows and secure-by-default logic.",
                color: "from-sky-500 to-sky-400"
              },
              {
                step: "02",
                title: "Sprint",
                desc: "Rapid delivery of high-impact features using CI/CD pipelines and automated integration testing.",
                color: "from-fuchsia-500 to-fuchsia-400"
              },
              {
                step: "03",
                title: "Deploy",
                desc: "Global distribution through edge-cached CDN networks and real-time monitoring of performance SLAs.",
                color: "from-indigo-500 to-indigo-400"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="relative group p-10 rounded-[32px] border border-white/5 bg-[#030712]/50 backdrop-blur-md hover:border-white/10 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-[0.03] blur-2xl group-hover:opacity-[0.1] transition-opacity`} />
                <span className="text-5xl font-black text-white/5 mb-6 block group-hover:text-white/10 transition-colors">{item.step}</span>
                <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL VISION ── */}
      <section className="relative bg-[#030712] px-6 py-24 overflow-hidden z-10">
        <div className="orb absolute orb-indigo w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[150px]" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 items-center relative z-20">
          <div className="lg:w-1/2">
            <p className="text-indigo-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">The Expansion</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              A Borderless <span className="gradient-text pb-2 inline-block">Architecture</span>
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
              <p>
                Axiino Labs isn't just local; we are built for the global economy. Our decentralized workforce and edge-optimized infrastructure allow us to serve elite clients across the United States, Europe, and Asia.
              </p>
              <p>
                We believe the next generation of software won't care about where the server is located—it will care about where the user is. Our vision is to build a web that is as fast in Nairobi as it is in New York.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <div className="px-6 py-3 rounded-full border border-white/5 bg-white/5 text-slate-200 text-sm font-semibold tracking-wide backdrop-blur-md">
                US & EU Markets
              </div>
              <div className="px-6 py-3 rounded-full border border-white/5 bg-white/5 text-slate-200 text-sm font-semibold tracking-wide backdrop-blur-md">
                24/7 Monitoring
              </div>
              <div className="px-6 py-3 rounded-full border border-white/5 bg-white/5 text-slate-200 text-sm font-semibold tracking-wide backdrop-blur-md">
                Global Edge CDN
              </div>
            </div>
          </div>

          {/* Map Abstract side */}
          <div className="lg:w-1/2 relative w-full">
            <div className="relative w-full max-w-md mx-auto aspect-video rounded-[32px] border border-white/5 bg-[#0a1122]/80 p-1 shadow-2xl overflow-hidden glass-card group">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
              <div className="relative w-full h-full rounded-[31px] bg-[#030712] overflow-hidden flex items-center justify-center">
                {/* Abstract "Map" Lines */}
                <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                  <path d="M50 100 Q100 50 200 100 T350 100" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
                  <path d="M100 150 Q200 200 300 150" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
                  <circle cx="50" cy="100" r="3" fill="#38bdf8" className="animate-pulse" />
                  <circle cx="200" cy="100" r="3" fill="#e879f9" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <circle cx="350" cy="100" r="3" fill="#818cf8" className="animate-pulse" style={{ animationDelay: '1s' }} />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEAM ── */}
      <section className="relative bg-[#020617] px-6 py-24 overflow-hidden z-10 border-y border-white/5">
        <div className="animated-grid absolute inset-0 opacity-20" />
        <div className="orb absolute orb-purple w-[500px] h-[500px] top-0 right-0 opacity-20 blur-[100px]" />

        <div className="text-center mb-16 relative z-20">
          <p className="text-sky-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">The Brains</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Meet the Leadership</h2>
          <p className="text-slate-300 text-lg mt-2 max-w-2xl mx-auto leading-relaxed">
            Decades of combined engineering and product design experience steering the ship toward technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-20 w-full">
          {[
            { name: "Aravindhan R", role: "Founder & CEO", initials: "AR", glow: "from-blue-500 to-indigo-500" },
            { name: "Vijay", role: "Co Founder", initials: "VJ", glow: "from-fuchsia-500 to-pink-500" },
            { name: "Sujitha", role: "CTO", initials: "SJ", glow: "from-sky-500 to-teal-500" },
            { name: "Saran", role: "AI & Software Solutions", initials: "SR", glow: "from-purple-500 to-indigo-500" }
          ].map((member, i) => (
            <div
              key={i}
              className="card-glow p-8 rounded-3xl text-center flex flex-col items-center group cursor-default hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative w-24 h-24 mb-6">
                {/* Outer glow ring */}
                <div className={`absolute inset-[-6px] rounded-full bg-gradient-to-br ${member.glow} blur-md opacity-30 group-hover:opacity-75 transition-opacity duration-500`} />
                {/* Avatar container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 bg-[#0a1122] flex items-center justify-center text-2xl font-black text-white shadow-xl">
                  <span className={`bg-gradient-to-r ${member.glow} bg-clip-text text-transparent`}>
                    {member.initials}
                  </span>
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                {member.name}
              </h4>
              <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
                {member.role}
              </p>
              
              <div className="w-12 h-0.5 bg-white/5 group-hover:bg-sky-500/30 mt-6 rounded-full transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* ── CORE BELIEFS ── */}
      <section className="relative bg-[#050b14] px-6 py-24 overflow-hidden z-10">
        <div className="orb absolute orb-fuchsia w-[600px] h-[600px] -bottom-[200px] -left-[200px] opacity-15" />

        <div className="text-center mb-16 relative z-20">
          <p className="text-fuchsia-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Philosophy</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Operating Protocol</h2>
          <p className="text-slate-300 text-lg mt-2 max-w-2xl mx-auto leading-relaxed">
            These eight axioms govern every architectural decision, every sprint, and every deployment we execute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-20">
          {beliefs.map((item, i) => (
            <div
              key={i}
              className="card-glow p-8 rounded-3xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-400/30 flex items-center justify-center text-fuchsia-300 shadow-[0_0_15px_rgba(232,121,249,0.2)] mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 leading-tight">{item.title}</h4>
              <p className="text-slate-300 text-sm leading-loose">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECHNICAL EXPERTISE ── */}
      <section className="relative bg-[#020617] px-6 py-24 overflow-hidden z-10 border-t border-white/5">
        <div className="orb absolute orb-blue w-[400px] h-[400px] top-1/2 left-0 opacity-10 blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sky-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Mastery</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
                Our Technical <br />
                <span className="gradient-text pb-2 inline-block">Specialization</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Microservices & Serverless Architectures",
                  "Real-time Data Streaming (Kafka / WebSockets)",
                  "Edge Computing & Global Content Delivery",
                  "AI & Neural Network Integration",
                  "Hyper-Secure Financial Grade APIs",
                  "High-Performance Mobile Ecosystems"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgb(56,189,248)]" />
                    <span className="text-lg font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Frontend", val: "React / Next.js", color: "from-sky-500/20 to-sky-400/20" },
                { label: "Backend", val: "Node / Go / Python", color: "from-fuchsia-500/20 to-fuchsia-400/20" },
                { label: "Database", val: "Supabase / PG / Mongo", color: "from-indigo-500/20 to-indigo-400/20" },
                { label: "Mobile", val: "React Native / Expo", color: "from-purple-500/20 to-purple-400/20" }
              ].map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border border-white/5 bg-gradient-to-br ${item.color} backdrop-blur-sm`}>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">{item.label}</p>
                  <p className="text-white font-bold">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#020617] py-40 px-6 text-center overflow-hidden z-10 border-t border-white/5">
        <div className="animated-grid absolute inset-0 opacity-40 mix-blend-screen" />
        <div className="orb orb-purple w-[700px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[150px]" />

        <div className="relative z-20 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
            Ready to Partner With <br />
            <span className="gradient-text pb-2 inline-block">The Best?</span>
          </h2>
          <p className="mb-12 text-xl text-slate-300 font-light leading-relaxed">
            Stop dealing with unreliable freelancers and slow agencies. Hire a proven engineering squad to scale your vision today.
          </p>
          <Link
            to="/contact"
            className="glow-btn inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white text-lg font-bold rounded-2xl shadow-[0_0_40px_rgba(192,132,252,0.4)] hover:shadow-[0_0_60px_rgba(232,121,249,0.5)] transition-all duration-300"
          >
            Schedule a Discovery Call &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
