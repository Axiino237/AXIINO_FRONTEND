import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import creativixImage from "../assets/creativix_portfolio.png";
import umshivImage from "../assets/umshiv_portfolio.png";
import firstStepImage from "../assets/firststep_portfolio.png";

const categories = ["All", "Branding & Web Design"];

const projects = [
    {
        id: 1,
        title: "Creativix Agency",
        category: "Branding & Web Design",
        description: "A premium creative agency website featuring modern aesthetics, dark mode, and seamless animations. Built with a focus on visual impact and strategic user experience.",
        icon: <Globe className="text-sky-400" />,
        image: creativixImage,
        url: "https://creativix-eight.vercel.app/"
    },
    {
        id: 2,
        title: "UMSHIV Group",
        category: "Branding & Web Design",
        description: "A multi-brand corporate portal built for UMSHIV Group of Companies, showcasing their diverse portfolio of services across technology, travel, design, events, and branding.",
        icon: <Globe className="text-sky-400" />,
        image: umshivImage,
        url: "https://www.umshiv.com/"
    },
    {
        id: 3,
        title: "The First Step Solutions",
        category: "Branding & Web Design",
        description: "An interactive digital presence and brand activation website for a premium event management and stall fabrication company, showcasing experiential design and corporate events.",
        icon: <Globe className="text-sky-400" />,
        image: firstStepImage,
        url: "https://thefirstsetpsolution.com"
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
        <div className="min-h-screen bg-[#030712] pt-32 pb-20 px-6 sm:px-12 overflow-hidden relative">
            {/* Background Elements */}
            <div className="animated-grid absolute inset-0 opacity-40 mix-blend-screen" />
            <div className="orb absolute orb-blue w-[600px] h-[600px] top-[-150px] left-[-150px] opacity-40 blur-[100px]" />
            <div className="orb absolute orb-purple w-[700px] h-[700px] bottom-[-200px] right-[-200px] opacity-30 blur-[120px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-sky-400/40 bg-sky-950/50 text-sky-200 text-xs md:text-sm font-semibold tracking-wide mb-6 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-[pulse-glow_2s_infinite]" />
                        Our Portfolio
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white mb-6">
                        Our <span className="gradient-text">Completed Work</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed px-4 md:px-0">
                        A showcase of our commitment to excellence, innovation, and premium digital experiences.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border ${activeCategory === cat
                                ? "bg-gradient-to-r from-sky-500 to-fuchsia-500 border-transparent text-white shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                                : "bg-white/5 border-white/10 text-slate-400 hover:border-sky-400/50 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Project Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-2 md:px-0"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                className="group card-glow rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[#0a1122]/40 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all duration-500 max-w-2xl w-full"
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                {/* Image Container */}
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />

                                    {/* Category Badge on Image */}
                                    <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#030712]/80 backdrop-blur-md border border-white/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-sky-400">
                                        {project.category}
                                    </div>
                                </div>

                                <div className="p-6 md:p-10">
                                    <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-sky-500/10 to-fuchsia-500/10 border border-white/5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 shrink-0">
                                            {project.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-sky-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-sky-400/60 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-0.5 md:mt-1">Live Project</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-light">
                                        {project.description}
                                    </p>

                                    <motion.a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold text-white uppercase tracking-[0.2em] group/btn hover:bg-white/10 hover:border-sky-500/50 transition-all w-full sm:w-auto justify-center sm:justify-start"
                                        whileHover={{ x: 5 }}
                                    >
                                        Visit Website <ArrowRight size={18} className="text-sky-400 group-hover/btn:translate-x-1 transition-transform" />
                                    </motion.a>
                                </div>

                                {/* Bottom Glow Line */}
                                <div className="absolute inset-x-0 h-1 bottom-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Works;
