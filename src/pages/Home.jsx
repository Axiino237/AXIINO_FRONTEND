import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { ChevronDown, Code2, Brain, Smartphone, Server, Bot, Layers, LayoutDashboard, Target, ShieldCheck, Handshake, Rocket, Lightbulb, Cloud, PenTool, Database, Search, TrendingUp, Cpu } from "lucide-react";

import reactnative from "../assets/tech/reactnative.png";
import reactjs from "../assets/tech/reactjs.webp";
import node from "../assets/tech/node.webp";
import nest from "../assets/tech/nest.svg";
import python from "../assets/tech/python.png";
import mysql from "../assets/tech/mysql.svg";
import postgres from "../assets/tech/postgres.png";

const techStack = [
  { name: "React.js", img: reactjs },
  { name: "React Native", img: reactnative },
  { name: "Node.js", img: node },
  { name: "NestJS", img: nest },
  { name: "Python", img: python },
  { name: "MySQL", img: mysql },
  { name: "PostgreSQL", img: postgres },
];

/* Expanded Services with more details/fields */
const services = [
  {
    title: "Web App Development",
    description: "Enterprise-grade web applications tailored for extreme performance, security, and global scale.",
    icon: <Code2 size={26} />,
    features: ["Custom Dashboards", "SaaS Platforms", "Portals"],
    tech: "React, Node, NestJS"
  },
  {
    title: "AI & Machine Learning",
    description: "Custom AI integrations, LLM wrapping, and smart recommendation engines that drive engagement.",
    icon: <Brain size={26} />,
    features: ["Chatbots", "Predictive Analytics", "NLP"],
    tech: "Python, TensorFlow, OpenAI"
  },
  {
    title: "Mobile Development",
    description: "Pixel-perfect, high-performance iOS and Android apps with native-like responsiveness.",
    icon: <Smartphone size={26} />,
    features: ["Cross-platform", "Real-time Sync", "Offline Mode"],
    tech: "React Native, Firebase, SQLite"
  },
  {
    title: "Backend Architecture",
    description: "Secure, scalable, and robust API layers engineered to handle millions of concurrent requests.",
    icon: <Server size={26} />,
    features: ["Microservices", "REST & GraphQL", "Rate Limiting"],
    tech: "Node.js, NestJS, Go"
  },
  {
    title: "Cloud & DevOps",
    description: "Automated pipelines, auto-scaling cloud infrastructure, and continuous delivery systems.",
    icon: <Cloud size={26} />,
    features: ["CI/CD Pipelines", "Docker & Kubernetes", "AWS/GCP"],
    tech: "AWS, Docker, GitHub Actions"
  },
  {
    title: "Database Engineering",
    description: "Complex schema designs, query optimization, and secure data migration across platforms.",
    icon: <Database size={26} />,
    features: ["Data Modeling", "Caching Layers", "Replication"],
    tech: "PostgreSQL, MySQL, Redis"
  },
  {
    title: "UI/UX Design",
    description: "Human-centric design interfaces that are as beautiful as they are functional and intuitive.",
    icon: <PenTool size={26} />,
    features: ["Wireframing", "Prototyping", "Design Systems"],
    tech: "Figma, Adobe XD"
  },
  {
    title: "Automation Bots",
    description: "Intelligent background workers, scrapers, and task schedulers to eliminate manual work.",
    icon: <Bot size={26} />,
    features: ["Web Scraping", "Cron Jobs", "Workflow Automation"],
    tech: "Python, Puppeteer, Celery"
  },
  {
    title: "System Integration",
    description: "Seamlessly stitching together third-party APIs, CRMs, and legacy enterprise software.",
    icon: <Layers size={26} />,
    features: ["Payment Gateways", "CRM Sync", "Webhook Handlers"],
    tech: "Stripe, Salesforce, REST"
  },
  {
    title: "Digital Marketing & Growth",
    description: "Strategic search engine optimization, pay-per-click ads, and marketing automation to amplify visibility and boost conversions.",
    icon: <TrendingUp size={26} />,
    features: ["SEO & SEM campaigns", "CRO & Funnel audits", "Omnichannel SMM"],
    tech: "Google Analytics, HubSpot, Meta Ads"
  },
  {
    title: "Zoho Suite & ERP Integration",
    description: "End-to-end consulting, setup, custom CRM workflows, and seamless integrations utilizing the Zoho suite of business apps.",
    icon: <Layers size={26} />,
    features: ["Custom Module Dev", "ERP & CRM migration", "Automated Workflows"],
    tech: "Zoho CRM, Creator, Deluge scripting"
  },
];

const coreValues = [
  { icon: <Code2 className="text-sky-400" />, title: "End-to-End Dev" },
  { icon: <Search className="text-fuchsia-400" />, title: "Radical Transparency" },
  { icon: <Rocket className="text-indigo-400" />, title: "Future-Proof Tech" },
  { icon: <Cpu className="text-sky-300" />, title: "AI-First Strategy" },
  { icon: <ShieldCheck className="text-pink-400" />, title: "Zero-Trust Security" },
  { icon: <TrendingUp className="text-violet-400" />, title: "Hyper Scalability" },
];

const drivesUs = [
  { icon: <Lightbulb size={24} />, title: "Relentless Innovation", desc: "We anticipate market shifts by adopting bleeding-edge tech stacks before they become standard." },
  { icon: <Rocket size={24} />, title: "Agile Velocity", desc: "Our engineering velocity guarantees rapid iterations and fast times-to-market without regressions." },
  { icon: <Handshake size={24} />, title: "Strategic Partnership", desc: "We operate as an extension of your own team. Your KPIs and business goals literally become ours." },
  { icon: <ShieldCheck size={24} />, title: "Security by Design", desc: "From strict RBAC to encrypted payloads, security is baked into our architecture from day zero." },
  { icon: <Target size={24} />, title: "Data-Backed UX", desc: "We don't guess what users want. We build fluid, accessible interfaces driven by hard analytics." },
  { icon: <LayoutDashboard size={24} />, title: "Operational Excellence", desc: "We deliver absolutely clean, documented, and maintainable codebases for total peace of mind." },
];

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [animationData, setAnimationData] = useState(null);
  const [showLottie, setShowLottie] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    
    // Dynamically load Lottie JSON to optimize main bundle size
    import("../assets/tech-hero.json").then((data) => {
      setAnimationData(data.default);
    });

    // Defer Lottie initialization to prevent page transition click delays
    const timer = setTimeout(() => {
      setShowLottie(true);
    }, 400);

    return () => {
      window.removeEventListener("resize", checkSize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden bg-[#030712] pt-40 pb-20 px-6 sm:px-12">
        {/* Animated BG Grid */}
        <div className="animated-grid absolute inset-0 opacity-60 mix-blend-screen" />

        {/* Orbs */}
        <div className="orb absolute orb-blue w-[600px] h-[600px] top-[-150px] left-[-150px] opacity-40" />
        <div className="orb absolute orb-purple w-[700px] h-[700px] bottom-[-200px] right-[-200px] opacity-30" />
        <div className="orb absolute orb-fuchsia w-[400px] h-[400px] top-[40%] left-[50%] opacity-20" />

        {/* Hero Content Flex */}
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex flex-col items-start text-left lg:w-1/2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-sky-400/40 bg-sky-950/50 text-sky-200 text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(56,189,248,0.2)] mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-[pulse-glow_2s_infinite]" />
              Premium Digital Agency
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
              We Engineer <br />
              <span className="gradient-text pb-2 inline-block">Digital Futures</span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-xl">
              Axiino architects scalable, highly-performant, and AI-driven platforms that empower modern startups and enterprise leaders.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                to="/contact"
                className="glow-btn px-8 py-4 bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(192,132,252,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] transition-all duration-300 border border-white/20"
              >
                Start a Project &rarr;
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/5 border border-slate-600 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-slate-400 transition-all duration-300 backdrop-blur-md"
              >
                Discover Axiino
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:flex lg:w-1/2 items-center justify-end">
             {/* Glow ring behind Lottie */}
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-sky-500/30 to-fuchsia-500/30 blur-[80px]" />
             </div>
             {isLargeScreen && showLottie && animationData && <Lottie animationData={animationData} className="w-full max-w-[600px] h-[600px] relative z-20 drop-shadow-2xl object-right" loop={true} rendererSettings={{ renderer: 'canvas' }} />}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sky-400 opacity-80 z-20 animate-bounce">
          <ChevronDown size={36} />
        </div>
      </section>

      {/* ── SECTION HEADER: What We Do Best (EXPANDED) ── */}
      <section className="relative bg-[#050b14] py-32 px-6 overflow-hidden z-10">
        <div className="animated-grid absolute inset-0 opacity-40 mix-blend-screen" />
        <div className="orb orb-blue w-[500px] h-[500px] top-0 right-0 opacity-20" />

        <div className="text-center max-w-4xl mx-auto mb-20 relative z-20">
          <p className="text-sky-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Comprehensive Engineering</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            We don't just write code. We deliver complete, robust technological ecosystems across the entire stack.
          </p>
        </div>

        {/* Expanded Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-glow p-8 rounded-3xl flex flex-col h-full cursor-default hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white leading-tight">{service.title}</h4>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Added extra fields for richness */}
              <div className="mt-auto space-y-4 pt-4 border-t border-white/10">
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Key Capabilities</p>
                  <ul className="flex flex-wrap gap-2">
                    {service.features.map((feat, i) => (
                      <li key={i} className="text-xs font-medium text-slate-200 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Stack Highlights</p>
                  <p className="text-xs font-semibold text-fuchsia-300">{service.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FLAGSHIP ENTERPRISE PRODUCT SUITE ── */}
      <section className="relative bg-[#020617] py-32 px-6 overflow-hidden z-10 border-t border-white/5">
        <div className="animated-grid absolute inset-0 opacity-30 mix-blend-screen" />
        <div className="orb orb-purple w-[600px] h-[600px] top-[10%] left-[-200px] opacity-20" />

        <div className="text-center max-w-4xl mx-auto mb-20 relative z-20">
          <p className="text-fuchsia-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Enterprise SaaS Products</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Custom Digital Products</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            In addition to custom consulting, we engineer ready-to-scale enterprise products that automate operations, compliance, and clinical research.
          </p>
        </div>

        {/* Enterprise Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-20">
          {[
            {
              title: "Axiino Core HRMS",
              subtitle: "Workforce & Talent Lifecycle Management",
              desc: "A comprehensive solution to manage the full employee lifecycle. Simplifies onboarding, tracks attendance, automates payroll, and runs appraisal cycles efficiently.",
              features: ["Automated Attendance & Leave", "Structured Performance reviews", "Self-service employee portal"]
            },
            {
              title: "Axiino Secure EDMS",
              subtitle: "Compliance-First Document Automation",
              desc: "A centralized, secure digital document management system. Features Google Vision OCR, custom metadata tagging, and e-signatures while staying GDPR & HIPAA compliant.",
              features: ["Multilingual OCR & Search", "E-signature approvals", "Detailed Version control & audit logs"]
            },
            {
              title: "Axiino LMS",
              subtitle: "Scalable E-Learning Platform",
              desc: "Deliver training, compliance courses, and certifications seamlessly. Supports multimedia content hosting, interactive assessments, and granular reporting dashboards.",
              features: ["Role-based content access", "Tailored quizzes & automated grading", "Detailed Learner analytics"]
            },
            {
              title: "Axiino SRM",
              subtitle: "Supplier Relationship & E-Procurement",
              desc: "Optimize vendor onboarding, RFx bidding processes, and contract lifecycle management. Features budget controls, automatic renewals, and cost-efficiency dashboards.",
              features: ["Tendering & Secure bidding", "Smart Contract clause templates", "Vendor performance metrics"]
            },
            {
              title: "Axiino LIMS",
              subtitle: "Laboratory Information Management",
              desc: "Centralize and automate lab workflows. Enhances sample tracking accuracy, barcode scanning, instrument data acquisition, and strict regulatory compliance.",
              features: ["Barcode sample tracking", "Automated Instrument integration", "Detailed activity audit trails"]
            },
            {
              title: "Axiino Clinical ISMS",
              subtitle: "AI-Powered Developmental Care tracking",
              desc: "Designed to support personalized therapeutic care. Uses AI video landmark detection and MediaPipe to track developmental progress and draft assessment reports.",
              features: ["MediaPipe landmark tracking", "LLaVA & Ollama report drafts", "HIPAA-compliant secure storage"]
            }
          ].map((prod, index) => (
            <div
              key={index}
              className="card-glow p-8 rounded-3xl flex flex-col h-full cursor-default hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 bg-[#0a1122]/30 backdrop-blur-xl"
            >
              <div className="mb-6">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2">{prod.subtitle}</span>
                <h4 className="text-2xl font-bold text-white leading-tight">{prod.title}</h4>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                {prod.desc}
              </p>

              <div className="mt-auto space-y-3 pt-4 border-t border-white/10">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Features</p>
                <ul className="space-y-2">
                  {prod.features.map((feat, i) => (
                    <li key={i} className="text-xs font-medium text-slate-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY AXIINO ── */}
      <section className="relative bg-gradient-to-b from-[#050b14] to-[#020617] px-6 py-32 overflow-hidden z-10">
        <div className="orb orb-purple w-[600px] h-[600px] bottom-0 left-0 opacity-20" />

        <div className="text-center mb-20 relative z-20">
          <p className="text-fuchsia-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Core Values</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Built Differently</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We blend raw technical horsepower with sharp business strategy to deliver transformative results.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-20">
          {coreValues.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-[32px] border border-white/5 bg-[#0a1122]/40 backdrop-blur-xl hover:border-white/10 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col items-center text-center justify-center gap-6"
            >
              {/* Animated Inner Glow */}
              <div className="absolute inset-x-0 h-px top-0 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent scale-0 group-hover:scale-100 transition-transform duration-700" />
              <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent scale-0 group-hover:scale-100 transition-transform duration-700" />

              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="w-16 h-16 rounded-2xl bg-[#030712] border border-white/10 flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-transform duration-500 relative z-10">
                  {item.icon}
                </div>
              </div>

              <h4 className="font-bold text-slate-100 text-lg tracking-tight group-hover:text-white transition-colors">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT DRIVES US ── */}
      <section className="relative bg-[#020617] py-32 px-6 overflow-hidden z-10 border-y border-white/5">
        <div className="animated-grid absolute inset-0 opacity-20" />
        <div className="orb orb-fuchsia w-[500px] h-[500px] top-1/2 right-0 -translate-y-1/2 opacity-15" />

        <div className="text-center mb-20 relative z-20">
          <p className="text-purple-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Our DNA</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Guiding Principles</h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We are not just a vendor. We are a dedicated technology partner committed wholly to your long-term success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-20">
          {drivesUs.map((item, i) => (
            <div
              key={item.title}
              className="card-glow p-8 rounded-3xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(192,132,252,0.2)] mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-slate-300 text-sm leading-loose">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="relative bg-[#050b14] py-32 px-6 overflow-hidden z-10">
        <div className="orb orb-blue w-[600px] h-[300px] bottom-0 left-1/2 -translate-x-1/2 opacity-20 blur-[120px]" />

        <div className="text-center mb-16 relative z-20">
          <p className="text-sky-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Foundation</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Enterprise Tech Stack</h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto leading-relaxed">
            We utilize robust, industry-standard frameworks to ensure your product is resilient and future-proof.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto relative z-20">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="card-glow p-6 rounded-2xl w-36 h-36 flex flex-col items-center justify-center gap-4 bg-[#0a1122]/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <img src={tech.img} alt={tech.name} className="h-14 w-14 object-contain filter drop-shadow-lg" />
              <span className="text-sm text-slate-200 font-bold tracking-wide">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#020617] py-40 px-6 text-center overflow-hidden z-10 border-t border-white/5">
        <div className="animated-grid absolute inset-0 opacity-40 mix-blend-screen" />
        <div className="orb orb-blue w-[800px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[150px]" />

        <div className="relative z-20 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
            Ready to Build <br />
            <span className="gradient-text pb-2 inline-block">The Future?</span>
          </h2>
          <p className="mb-12 text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Axiino is ready to transform your complex business requirements into elegant, high-performance software. Let's start the conversation.
          </p>
           <Link
             to="/contact"
             className="glow-btn inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-sky-500 to-fuchsia-600 text-white text-lg font-bold rounded-2xl border border-white/20 shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:shadow-[0_0_45px_rgba(192,132,252,0.5)] transition-all duration-300"
           >
             Contact Our Team &rarr;
           </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
