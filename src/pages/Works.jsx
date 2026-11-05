import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ArrowRight,
  ExternalLink,
  Code2,
  Layers,
  Building2,
  HeartHandshake,
  FileText,
  LayoutDashboard
} from "lucide-react";
import srdollarsImage from "../assets/srdollars_portfolio.svg";
import s2sImage from "../assets/s2s_portfolio.svg";
import madirImage from "../assets/madir_portfolio.svg";
import crmImage from "../assets/crm_portfolio.svg";
import umshivImage from "../assets/umshiv_portfolio.png";
import creativixImage from "../assets/creativix_portfolio.png";
import firstStepImage from "../assets/firststep_portfolio.png";

const categories = [
  "All",
  "PropTech & Real Estate",
  "AI & SaaS Platforms",
  "FinTech & Operations",
  "Corporate & Branding Portals",
  "Experiential Web"
];

const projects = [
  {
    id: 1,
    title: "SR Dollars and Builders",
    category: "PropTech & Real Estate",
    badge: "Real Estate & Construction Portal",
    problem: "SR Dollars and Builders required an interactive digital platform to showcase 120+ approved residential layouts and turnkey construction services, allowing administrators to upload and share live property status updates effortlessly.",
    solution: "Axiino engineered a high-performance PropTech portal featuring dynamic plot discovery, instant property update sharing, clear-title verification flows, and responsive inquiry capture.",
    techStack: ["React.js", "Tailwind CSS", "Vite", "Property Feed Engine", "Responsive UI"],
    description: "A comprehensive real estate and turnkey construction platform built for SR Dollars and Builders. Enables buyers and administrators to seamlessly discover approved residential layouts, review DTCP/RERA approvals, and track real-time property developments.",
    icon: <Building2 className="text-amber-400" size={24} />,
    image: srdollarsImage,
    url: "https://srdollarsandbuilders.com/"
  },
  {
    id: 2,
    title: "S2S Matrimony",
    category: "AI & SaaS Platforms",
    badge: "AI Horoscope & Matchmaking Platform",
    problem: "Traditional matchmaking involved tedious manual horoscope transcription and error-prone compatibility evaluations across complex astrological charts and South Indian community traditions.",
    solution: "Axiino developed an intelligent matchmaking application powered by an AI horoscope extraction engine that reads chart documents automatically, parses astrological data, and computes real-time 10-Porutham compatibility scores.",
    techStack: ["React.js", "Node.js", "AI Extraction Engine", "Astrological Matching Engine", "Tailwind CSS"],
    description: "A community matrimony platform engineered with an AI-powered horoscope extraction and matching engine. Automatically extracts chart data from documents and delivers algorithmic compatibility matchmaking.",
    icon: <HeartHandshake className="text-rose-400" size={24} />,
    image: s2sImage,
    url: "http://s2smatrimony.com/"
  },
  {
    id: 3,
    title: "Madir Intelligence",
    category: "FinTech & Operations",
    badge: "Financial Document Intelligence",
    problem: "Financial analysts and decision-makers faced scattered documents, complex unstructured disclosure statements, and fragmented research across disconnected silos without unified synthesis.",
    solution: "Axiino engineered a centralized document intelligence platform where users upload multifaceted financial documents, synthesize data into clear timelines, and make confident, high-stakes decisions.",
    techStack: ["React.js", "Tailwind CSS", "Financial Analytics", "Document Processing", "Vite"],
    description: "A financial intelligence and document aggregation platform that enables users to upload, centralize, and evaluate documents in one secure workspace to drive data-backed financial decisions.",
    icon: <FileText className="text-cyan-400" size={24} />,
    image: madirImage,
    url: "https://madirintel.com/"
  },
  {
    id: 4,
    title: "Axiino CRM",
    category: "AI & SaaS Platforms",
    badge: "All-in-One Operations Suite",
    problem: "Organizations struggled with multiple disconnected software subscriptions for staff attendance, team communication, role security, and central business records, leading to siloed operational data.",
    solution: "Axiino engineered CRM Pro, an all-in-one operations system unifying automated attendance tracking, real-time team chat, role-based access control (RBAC), and unified business data management.",
    techStack: ["React.js", "Vite", "Real-Time Chat", "Role-Based Access Control", "Tailwind CSS"],
    description: "An all-in-one operations platform that brings daily attendance, live team chat, RBAC user security, and business data tracking together into a unified organizational control plane.",
    icon: <LayoutDashboard className="text-violet-400" size={24} />,
    image: crmImage,
    url: "https://crm.axiino.com/"
  },
  {
    id: 5,
    title: "UMSHIV Group",
    category: "Corporate & Branding Portals",
    badge: "Multi-Brand Corporate Ecosystem",
    problem: "UMSHIV Group required a consolidated corporate portal to represent multiple business divisions across technology, travel, design, events, and branding with unified brand equity.",
    solution: "Axiino engineered a multi-brand portal with structured navigation hierarchies, modern responsive design tokens, and modular section architectures enabling rapid corporate updates.",
    techStack: ["React.js", "Tailwind CSS", "Lucide Icons", "Vite"],
    description: "A multi-brand corporate portal built for UMSHIV Group of Companies, showcasing their diverse portfolio of services across technology, travel, design, events, and branding.",
    icon: <Layers className="text-emerald-400" size={24} />,
    image: umshivImage,
    url: "https://www.umshiv.com/"
  },
  {
    id: 6,
    title: "Creativix Agency",
    category: "Corporate & Branding Portals",
    badge: "Digital Agency Web App",
    problem: "Creativix needed a dark-mode first, high-impact digital presence that showcased creative agency capabilities with fluid 60 FPS animations without sacrificing mobile loading speed.",
    solution: "Axiino architected a modern React application utilizing Tailwind CSS, Framer Motion, and asset optimization, resulting in instant rendering, seamless navigation, and engaging interactive micro-interactions.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Vite", "Vercel"],
    description: "A premium creative agency platform featuring modern aesthetics, dark mode, and seamless animations. Built with a focus on visual impact and strategic user experience.",
    icon: <Globe className="text-sky-400" size={24} />,
    image: creativixImage,
    url: "https://creativix-eight.vercel.app/"
  },
  {
    id: 7,
    title: "The First Step Solutions",
    category: "Experiential Web",
    badge: "Event & Experiential Activation",
    problem: "The client needed an interactive digital portfolio to showcase complex physical stall fabrication, experiential designs, and corporate event management to enterprise prospective clients.",
    solution: "We designed a visual-first digital showcase with responsive image galleries, high-contrast typography, and intuitive project classification, enhancing brand perception and enquiry conversion.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Responsive Layouts"],
    description: "An interactive digital presence and brand activation website for a premium event management and stall fabrication company, showcasing experiential design and corporate events.",
    icon: <Code2 className="text-fuchsia-400" size={24} />,
    image: firstStepImage,
    url: "https://www.thefirststepsolutions.com/"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#030712] pt-36 pb-24 px-6 sm:px-12 overflow-hidden relative text-white">
      {/* Background Elements */}
      <div className="animated-grid absolute inset-0 opacity-40 mix-blend-screen pointer-events-none" />
      <div className="orb absolute orb-blue w-[600px] h-[600px] -top-[150px] -left-[150px] opacity-40 blur-[100px] pointer-events-none" />
      <div className="orb absolute orb-purple w-[700px] h-[700px] bottom-[-200px] right-[-200px] opacity-30 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-sky-400" aria-current="page">Works</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-sky-400/40 bg-sky-950/50 text-sky-200 text-xs md:text-sm font-semibold tracking-wide mb-6 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-[pulse-glow_2s_infinite]" />
            Real Project Evidence
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white mb-6">
            Completed <span className="gradient-text">Client Works</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Real software systems, corporate portals, and brand applications delivered by Axiino Technologies. Verified live deployments.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-sky-500 to-fuchsia-500 border-transparent text-white shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                  : "bg-white/5 border-white/10 text-slate-400 hover:border-sky-400/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                className="group card-glow rounded-[2rem] overflow-hidden bg-[#0a1122]/50 backdrop-blur-xl border border-white/10 hover:border-sky-400/30 transition-all duration-500 flex flex-col h-full"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-[#020617]">
                  <img
                    src={project.image}
                    alt={`${project.title} - Web Development & Digital Design Project by Axiino Technologies`}
                    width="800"
                    height="450"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />

                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#030712]/80 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-sky-400">
                    {project.badge}
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {project.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Verified Live Production
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Problem & Solution Case Snapshot */}
                  <div className="space-y-3 mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300">
                    <div>
                      <span className="font-bold text-sky-400 uppercase tracking-wider block text-[10px] mb-0.5">Challenge</span>
                      <p className="leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="pt-2 border-t border-white/5">
                      <span className="font-bold text-fuchsia-400 uppercase tracking-wider block text-[10px] mb-0.5">Engineered Solution</span>
                      <p className="leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-semibold text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white uppercase tracking-wider hover:bg-sky-500/10 hover:border-sky-500/40 hover:text-sky-300 transition-all w-full justify-center"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink size={14} className="text-sky-400" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enterprise Notice */}
        <section className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#0a1122]/40 border border-white/10 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">Enterprise Deployments Under NDA</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            In addition to public client websites, Axiino engineers private internal platforms (EDMS, LIMS, SRM, and HRMS) governed by strict non-disclosure agreements. Anonymized architectural walk-throughs are available during technical consultations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300"
          >
            <span>Request an Architectural Consultation</span>
            <ArrowRight size={15} />
          </Link>
        </section>

      </div>
    </div>
  );
};

export default Works;
