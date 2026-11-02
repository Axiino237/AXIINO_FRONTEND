import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Code2, Brain, Smartphone, Server, Bot, Layers, LayoutDashboard, Target, ShieldCheck, Handshake, Rocket, Lightbulb, Cloud, PenTool, Database, Search, TrendingUp, Cpu, Globe, Zap, Shield, GitBranch, ArrowRight, MapPin, Mail, Phone, CheckCircle2 } from "lucide-react";

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

/* Expanded Services mapped to dedicated landing routes */
const services = [
  {
    title: "Web App Development",
    slug: "web-application-development",
    description: "Enterprise-grade web applications tailored for extreme performance, security, and global scale.",
    icon: <Code2 size={26} />,
    features: ["Custom Dashboards", "SaaS Platforms", "Portals"],
    tech: "React, Node, NestJS"
  },
  {
    title: "AI & Machine Learning",
    slug: "ai-business-automation",
    description: "Custom AI integrations, LLM wrapping, and smart recommendation engines that drive engagement.",
    icon: <Brain size={26} />,
    features: ["Chatbots", "Predictive Analytics", "NLP"],
    tech: "Python, TensorFlow, OpenAI"
  },
  {
    title: "Mobile Development",
    slug: "mobile-app-development",
    description: "Pixel-perfect, high-performance iOS and Android apps with native-like responsiveness.",
    icon: <Smartphone size={26} />,
    features: ["Cross-platform", "Real-time Sync", "Offline Mode"],
    tech: "React Native, Firebase, SQLite"
  },
  {
    title: "Backend Architecture",
    slug: "backend-api-development",
    description: "Secure, scalable, and robust API layers engineered to handle millions of concurrent requests.",
    icon: <Server size={26} />,
    features: ["Microservices", "REST & GraphQL", "Rate Limiting"],
    tech: "Node.js, NestJS, Go"
  },
  {
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    description: "Automated pipelines, auto-scaling cloud infrastructure, and continuous delivery systems.",
    icon: <Cloud size={26} />,
    features: ["CI/CD Pipelines", "Docker & Kubernetes", "AWS/GCP"],
    tech: "AWS, Docker, GitHub Actions"
  },
  {
    title: "Database Engineering",
    slug: "backend-api-development",
    description: "Complex schema designs, query optimization, and secure data migration across platforms.",
    icon: <Database size={26} />,
    features: ["Data Modeling", "Caching Layers", "Replication"],
    tech: "PostgreSQL, MySQL, Redis"
  },
  {
    title: "UI/UX Design",
    slug: "custom-software-development",
    description: "Human-centric design interfaces that are as beautiful as they are functional and intuitive.",
    icon: <PenTool size={26} />,
    features: ["Wireframing", "Prototyping", "Design Systems"],
    tech: "Figma, Modern Design Tokens"
  },
  {
    title: "Automation Bots",
    slug: "ai-business-automation",
    description: "Intelligent background workers, scrapers, and task schedulers to eliminate manual work.",
    icon: <Bot size={26} />,
    features: ["Web Scraping", "Cron Jobs", "Workflow Automation"],
    tech: "Python, Puppeteer, Celery"
  },
  {
    title: "System Integration",
    slug: "custom-software-development",
    description: "Seamlessly stitching together third-party APIs, CRMs, and legacy enterprise software.",
    icon: <Layers size={26} />,
    features: ["Payment Gateways", "CRM Sync", "Webhook Handlers"],
    tech: "Stripe, Salesforce, REST"
  },
  {
    title: "SaaS Product Engineering",
    slug: "saas-product-development",
    description: "Multi-tenant SaaS architecture, subscription billing, and telemetry engineered for high MRR.",
    icon: <TrendingUp size={26} />,
    features: ["Multi-tenancy", "Stripe Billing", "Tenant Isolation"],
    tech: "React, Node, PostgreSQL, Redis"
  },
  {
    title: "CRM & ERP Integration",
    slug: "crm-erp-development",
    description: "End-to-end consulting, setup, custom CRM workflows, and seamless integrations utilizing the Zoho suite.",
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

const homeFaqs = [
  {
    q: "What does Axiino Technologies do?",
    a: "Axiino Technologies is a full-stack software development and AI engineering company headquartered in Ramapuram, Chennai. We design, build, and deploy custom web applications, cross-platform mobile apps (React Native), proprietary SaaS platforms, and AI business automation systems for growing businesses and enterprises worldwide."
  },
  {
    q: "Where is Axiino located, and how does Axiino handle international projects?",
    a: "Our primary engineering office is located in Ramapuram, Chennai, Tamil Nadu, India. We serve clients across India, North America (USA, Canada), Europe (UK), the Middle East (UAE), and Australia. We work with flexible overlap across multiple time zones, provide transparent bi-weekly sprint demos, and communicate via dedicated Slack/Teams channels."
  },
  {
    q: "How does Axiino ensure software code quality and security?",
    a: "We adhere to zero-trust architecture principles, automated unit and integration testing, containerized deployments, and clean code conventions. Every milestone includes automated linting, security scans, and peer code reviews before moving to production."
  },
  {
    q: "How can I start a project with Axiino Technologies?",
    a: "You can book an architectural discovery call by visiting our contact page, calling us directly at +91 93613 95699, or emailing axiino237@gmail.com. We typically respond within 2 hours with an initial consultation schedule."
  }
];

// ── Orbiting tech icon data ──
const orbitIcons = [
  { icon: <Code2 size={18} />, label: "React", color: "#38bdf8", angle: 0,   radius: 150, speed: 18 },
  { icon: <Server size={18} />, label: "Node",  color: "#a78bfa", angle: 60,  radius: 150, speed: 18 },
  { icon: <Brain size={18} />,  label: "AI",    color: "#f472b6", angle: 120, radius: 150, speed: 18 },
  { icon: <Cloud size={18} />,  label: "Cloud", color: "#34d399", angle: 180, radius: 150, speed: 18 },
  { icon: <Database size={18} />, label: "DB",  color: "#fbbf24", angle: 240, radius: 150, speed: 18 },
  { icon: <Shield size={18} />, label: "Sec",   color: "#60a5fa", angle: 300, radius: 150, speed: 18 },
];

const outerOrbitIcons = [
  { icon: <Smartphone size={14} />, label: "Mobile", color: "#a78bfa", angle: 30,  radius: 215, speed: 30 },
  { icon: <Globe size={14} />,      label: "Web",    color: "#38bdf8", angle: 120, radius: 215, speed: 30 },
  { icon: <Zap size={14} />,        label: "Fast",   color: "#fbbf24", angle: 210, radius: 215, speed: 30 },
  { icon: <GitBranch size={14} />,  label: "Git",    color: "#34d399", angle: 300, radius: 215, speed: 30 },
];

function AIHeroVisual() {
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center select-none">
      {/* ── Ambient glow blobs ── */}
      <div className="absolute w-[320px] h-[320px] rounded-full bg-sky-500/10 blur-[80px] animate-pulse" />
      <div className="absolute w-[200px] h-[200px] rounded-full bg-fuchsia-500/15 blur-[60px]"
        style={{ animation: "pulse 3s ease-in-out infinite 1s" }} />

      {/* ── Outer orbit ring ── */}
      <div className="absolute w-[430px] h-[430px] rounded-full border border-white/5" />

      {/* ── Inner orbit ring ── */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full border border-sky-400/20"
        style={{ animation: "spin 18s linear infinite" }}
      />

      {/* ── Outer orbit ring (counter) ── */}
      <div
        className="absolute w-[430px] h-[430px] rounded-full border border-fuchsia-400/10"
        style={{ animation: "spin 30s linear infinite reverse" }}
      />

      {/* ── Inner orbit icons ── */}
      {orbitIcons.map((item, i) => (
        <div
          key={i}
          className="absolute w-[300px] h-[300px]"
          style={{ animation: `spin ${item.speed}s linear infinite` }}
        >
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${item.angle}deg) translateX(${item.radius}px) rotate(-${item.angle}deg)`,
              marginTop: "-20px",
              marginLeft: "-20px",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-lg"
              style={{
                background: `${item.color}18`,
                border: `1px solid ${item.color}40`,
                boxShadow: `0 0 15px ${item.color}25`,
                color: item.color,
                animation: `spin ${item.speed}s linear infinite reverse`,
              }}
            >
              {item.icon}
            </div>
          </div>
        </div>
      ))}

      {/* ── Outer orbit icons ── */}
      {outerOrbitIcons.map((item, i) => (
        <div
          key={i}
          className="absolute w-[430px] h-[430px]"
          style={{ animation: `spin ${item.speed}s linear infinite reverse` }}
        >
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${item.angle}deg) translateX(${item.radius}px) rotate(-${item.angle}deg)`,
              marginTop: "-16px",
              marginLeft: "-16px",
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: `${item.color}12`,
                border: `1px solid ${item.color}30`,
                color: item.color,
                animation: `spin ${item.speed}s linear infinite`,
              }}
            >
              {item.icon}
            </div>
          </div>
        </div>
      ))}

      {/* ── Central AI Core ── */}
      <div className="relative z-20 flex items-center justify-center">
        <div className="absolute w-36 h-36 rounded-full border border-sky-400/20 animate-ping" style={{ animationDuration: "2.5s" }} />
        <div className="absolute w-28 h-28 rounded-full border border-fuchsia-400/20 animate-ping" style={{ animationDuration: "2s", animationDelay: "0.5s" }} />

        <div
          className="relative w-24 h-24 rounded-full flex items-center justify-center"
          style={{
            background: "radial-gradient(circle at 35% 35%, #38bdf8, #7c3aed, #0f172a)",
            boxShadow: "0 0 40px rgba(56,189,248,0.35), 0 0 80px rgba(124,58,237,0.2), inset 0 0 30px rgba(255,255,255,0.05)",
          }}
        >
          <div className="absolute top-3 left-4 w-8 h-5 rounded-full bg-white/15 blur-sm" />
          <Brain size={36} className="text-white drop-shadow-lg relative z-10" />
        </div>

        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-[10px] font-bold tracking-[0.2em] text-sky-400/80 uppercase">Axiino Core</span>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden bg-[#030712] pt-40 pb-20 px-6 sm:px-12">
        {/* Animated BG Grid */}
        <div className="animated-grid absolute inset-0 opacity-60 mix-blend-screen pointer-events-none" />

        {/* Orbs */}
        <div className="orb absolute orb-blue w-[600px] h-[600px] top-[-150px] left-[-150px] opacity-40 pointer-events-none" />
        <div className="orb absolute orb-purple w-[700px] h-[700px] bottom-[-200px] right-[-200px] opacity-30 pointer-events-none" />
        <div className="orb absolute orb-fuchsia w-[400px] h-[400px] top-[40%] left-[50%] opacity-20 pointer-events-none" />

        {/* Hero Content Flex */}
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left lg:w-7/12"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-sky-400/40 bg-sky-950/50 text-sky-200 text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(56,189,248,0.2)] mb-8"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-[pulse-glow_2s_infinite]" />
              Engineering Digital Futures
            </motion.div>

            {/* Semantic Single H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white"
            >
              Custom Software, <br />
              <span className="gradient-text pb-2 inline-block">AI Solutions &amp; Digital Products</span> <br />
              for Growing Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-xl"
            >
              Axiino Technologies builds custom software, web and mobile applications, AI solutions, and business automation for startups and growing businesses worldwide. Headquartered in Ramapuram, Chennai.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-5"
            >
              <Link
                to="/contact"
                className="glow-btn px-8 py-4 bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(192,132,252,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] transition-all duration-300 border border-white/20"
              >
                Start a Project &rarr;
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/5 border border-slate-600 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-slate-400 transition-all duration-300 backdrop-blur-md"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* ── AI HERO VISUAL ── */}
          {isLargeScreen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:flex lg:w-5/12 items-center justify-center"
            >
              <AIHeroVisual />
            </motion.div>
          )}

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sky-400 opacity-80 z-20 animate-bounce">
          <ChevronDown size={36} />
        </div>
      </section>

      {/* ── SECTION: Comprehensive Engineering Services ── */}
      <section className="relative bg-[#050b14] py-32 px-6 overflow-hidden z-10">
        <div className="animated-grid absolute inset-0 opacity-40 mix-blend-screen pointer-events-none" />
        <div className="orb orb-blue w-[500px] h-[500px] top-0 right-0 opacity-20 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20 relative z-20"
        >
          <p className="text-sky-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Comprehensive Engineering Services</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            We deliver robust technological ecosystems across the entire digital stack. Explore our specialized services:
          </p>
        </motion.div>

        {/* Services Grid with Direct Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="card-glow p-8 rounded-3xl flex flex-col h-full bg-[#0a1122]/50 border border-white/10 hover:border-sky-400/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">{service.title}</h3>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <div className="mt-auto space-y-4 pt-4 border-t border-white/10">
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Key Capabilities</p>
                  <ul className="flex flex-wrap gap-2">
                    {service.features.map((feat, i) => (
                      <li key={i} className="text-xs font-medium text-slate-200 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Stack Highlights</p>
                  <p className="text-xs font-semibold text-fuchsia-300">{service.tech}</p>
                </div>
                <div className="pt-2">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-bold text-sky-400 group-hover:text-sky-300 inline-flex items-center gap-1"
                  >
                    <span>View Service Details</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ENTERPRISE DIGITAL PRODUCTS ── */}
      <section className="relative bg-[#020617] py-32 px-6 overflow-hidden z-10 border-t border-white/5">
        <div className="animated-grid absolute inset-0 opacity-30 mix-blend-screen pointer-events-none" />
        <div className="orb orb-purple w-[600px] h-[600px] top-[10%] left-[-200px] opacity-20 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20 relative z-20"
        >
          <p className="text-fuchsia-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Proprietary Software Frameworks</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Custom Digital Products</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            In addition to custom client engineering, we architect enterprise-grade software frameworks available for custom deployment, dedicated on-premise installation, and tailored workflow integration.
          </p>
        </motion.div>

        {/* Enterprise Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-20 mb-12">
          {[
            {
              id: "hrms",
              title: "Axiino Core HRMS",
              subtitle: "Workforce & Talent Lifecycle Management",
              desc: "A comprehensive solution to manage the full employee lifecycle. Simplifies onboarding, tracks attendance, automates payroll, and runs appraisal cycles efficiently.",
              features: ["Automated Attendance & Leave", "Structured Performance reviews", "Self-service employee portal"]
            },
            {
              id: "edms",
              title: "Axiino Secure EDMS",
              subtitle: "Compliance-First Document Automation",
              desc: "A centralized, secure digital document management system. Features Google Vision OCR, custom metadata tagging, and e-signatures while staying GDPR & HIPAA compliant.",
              features: ["Multilingual OCR & Search", "E-signature approvals", "Detailed Version control & audit logs"]
            },
            {
              id: "lms",
              title: "Axiino LMS",
              subtitle: "Scalable E-Learning Platform",
              desc: "Deliver training, compliance courses, and certifications seamlessly. Supports multimedia content hosting, interactive assessments, and granular reporting dashboards.",
              features: ["Role-based content access", "Tailored quizzes & automated grading", "Detailed Learner analytics"]
            },
            {
              id: "srm",
              title: "Axiino SRM",
              subtitle: "Supplier Relationship & E-Procurement",
              desc: "Optimize vendor onboarding, RFx bidding processes, and contract lifecycle management. Features budget controls, automatic renewals, and cost-efficiency dashboards.",
              features: ["Tendering & Secure bidding", "Smart Contract clause templates", "Vendor performance metrics"]
            },
            {
              id: "lims",
              title: "Axiino LIMS",
              subtitle: "Laboratory Information Management",
              desc: "Centralize and automate lab workflows. Enhances sample tracking accuracy, barcode scanning, instrument data acquisition, and strict regulatory compliance.",
              features: ["Barcode sample tracking", "Automated Instrument integration", "Detailed activity audit trails"]
            },
            {
              id: "isms",
              title: "Axiino Clinical ISMS",
              subtitle: "AI-Powered Developmental Care tracking",
              desc: "Designed to support personalized therapeutic care. Uses AI video landmark detection and MediaPipe to track developmental progress and draft assessment reports.",
              features: ["MediaPipe landmark tracking", "LLaVA & Ollama report drafts", "HIPAA-compliant secure storage"]
            }
          ].map((prod, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="card-glow p-8 rounded-3xl flex flex-col h-full cursor-default transition-all duration-300 bg-[#0a1122]/40 backdrop-blur-xl border border-white/10 group"
            >
              <div className="mb-6">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2">{prod.subtitle}</span>
                <h3 className="text-2xl font-bold text-white leading-tight">{prod.title}</h3>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                {prod.desc}
              </p>

              <div className="mt-auto space-y-3 pt-4 border-t border-white/10">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Features</p>
                <ul className="space-y-2 mb-4">
                  {prod.features.map((feat, i) => (
                    <li key={i} className="text-xs font-medium text-slate-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/products#${prod.id}`}
                  className="text-xs font-bold text-fuchsia-400 hover:text-fuchsia-300 inline-flex items-center gap-1 pt-2"
                >
                  <span>Explore Platform &amp; Specs</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center relative z-20">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-semibold hover:bg-white/10 transition-all duration-200"
          >
            <span>View All Enterprise Products</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="relative bg-gradient-to-b from-[#050b14] to-[#020617] px-6 py-32 overflow-hidden z-10">
        <div className="orb orb-purple w-[600px] h-[600px] bottom-0 left-0 opacity-20 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 relative z-20"
        >
          <p className="text-fuchsia-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Core Principles</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Engineered Differently</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We blend rigorous software architecture with business strategy to deliver transformative, scalable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-20">
          {coreValues.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative p-8 rounded-[32px] border border-white/5 bg-[#0a1122]/40 backdrop-blur-xl hover:border-white/10 transition-all duration-300 overflow-hidden flex flex-col items-center text-center justify-center gap-6"
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-[#030712] border border-white/10 flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-transform duration-500 relative z-10">
                  {item.icon}
                </div>
              </div>

              <h3 className="font-bold text-slate-100 text-lg tracking-tight group-hover:text-white transition-colors">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHAT DRIVES US ── */}
      <section className="relative bg-[#020617] py-32 px-6 overflow-hidden z-10 border-y border-white/5">
        <div className="animated-grid absolute inset-0 opacity-20 pointer-events-none" />
        <div className="orb orb-fuchsia w-[500px] h-[500px] top-1/2 right-0 -translate-y-1/2 opacity-15 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 relative z-20"
        >
          <p className="text-purple-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Our DNA</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Guiding Principles</h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We are not just a vendor. We are a dedicated technology partner committed wholly to your long-term success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-20">
          {drivesUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="card-glow p-8 rounded-3xl transition-all duration-300 bg-[#0a1122]/30 border border-white/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(192,132,252,0.2)] mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-loose">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TECH STACK (INFINITE SCROLL MARQUEE) ── */}
      <section className="relative bg-[#050b14] py-32 overflow-hidden z-10">
        <div className="orb orb-blue w-[600px] h-[300px] bottom-0 left-1/2 -translate-x-1/2 opacity-20 blur-[120px] pointer-events-none" />

        <div className="text-center mb-16 px-6 relative z-20">
          <p className="text-sky-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Foundation</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Enterprise Tech Stack</h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto leading-relaxed">
            We utilize robust, industry-standard frameworks to ensure your product is resilient, secure, and future-proof.
          </p>
        </div>

        {/* Scrollable Marquee Container */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#050b14] via-[#050b14]/80 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#050b14] via-[#050b14]/80 to-transparent z-20" />

          <div className="animate-marquee flex items-center gap-8 px-4">
            {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="card-glow p-6 rounded-2xl w-40 h-40 shrink-0 flex flex-col items-center justify-center gap-4 bg-[#0a1122]/60 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer group border border-white/10 hover:border-sky-400/40"
              >
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={tech.img}
                    alt={`${tech.name} framework utilized by Axiino Technologies`}
                    width="56"
                    height="56"
                    loading="lazy"
                    decoding="async"
                    className="h-14 w-14 object-contain filter drop-shadow-lg relative z-10 transition-transform group-hover:scale-110 duration-300"
                  />
                </div>
                <span className="text-sm text-slate-200 font-bold tracking-wide group-hover:text-sky-300 transition-colors whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIBLE FAQ & LOCAL/GLOBAL ENGINEERING PRESENCE ── */}
      <section className="relative bg-[#020617] py-32 px-6 border-t border-white/5 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-400 text-xs font-bold uppercase tracking-widest block mb-2">Frequently Asked Questions</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Everything You Need to Know About Axiino
            </h2>
            <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
              Clear information on our software engineering capabilities, Chennai headquarters, global delivery model, and technical engagement process.
            </p>
          </div>

          <div className="space-y-4 mb-20">
            {homeFaqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-2xl bg-[#0a1122]/60 border border-white/10"
              >
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-sky-400 font-extrabold text-sm mt-0.5">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Genuine Local & Corporate Business Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#050b14] border border-white/10 card-glow flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="md:w-7/12 space-y-4">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">Corporate Presence</span>
              <h3 className="text-2xl font-bold text-white">Axiino Technologies — Chennai Headquarters</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Operating as part of the UMSHIV Group of Companies, Axiino Technologies combines technical engineering precision with global service delivery. Based in Ramapuram, Chennai, we partner with clients locally and worldwide across the US, UK, UAE, and Australia.
              </p>
              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-sky-400 shrink-0" />
                  <span>Flat No. 27, 1st Street, Kothari Nagar, Annai Sathya Nagar Main Road, Ramapuram, Chennai - 600089</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-fuchsia-400 shrink-0" />
                  <span>+91 93613 95699</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={15} className="text-purple-400 shrink-0" />
                  <span>axiino237@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="md:w-5/12 w-full p-6 rounded-2xl bg-[#0a1122]/80 border border-white/10 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">International Delivery</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Seamless remote collaboration across US Eastern/Pacific, UK GMT, and UAE GST time zones with dedicated sprint leads.
                </p>
              </div>
              <Link
                to="/contact"
                className="w-full text-center py-3 px-5 rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-600 text-white font-bold text-xs shadow-md hover:opacity-90 transition-opacity"
              >
                Schedule Technical Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative bg-[#020617] py-40 px-6 text-center overflow-hidden z-10 border-t border-white/5">
        <div className="animated-grid absolute inset-0 opacity-40 mix-blend-screen pointer-events-none" />
        <div className="orb orb-blue w-[800px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[150px] pointer-events-none" />

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
