import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { ChevronDown, ArrowRight, ArrowDown, Code2, Brain, Smartphone, Server, Bot, Layers, LayoutDashboard, Target, ShieldCheck, Handshake, Rocket, Lightbulb } from "lucide-react";

import animationData from "../assets/tech-hero.json";

import reactnative from "../assets/tech/reactnative.png";
import reactjs from "../assets/tech/reactjs.webp";
import node from "../assets/tech/node.webp";
import nest from "../assets/tech/nest.svg";
import python from "../assets/tech/python.png";
import mysql from "../assets/tech/mysql.svg";
import postgres from "../assets/tech/postgres.png";

// Animations
const containerStagger = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Data
const techStack = [
  { name: "React.js", img: reactjs },
  { name: "React Native", img: reactnative },
  { name: "Node.js", img: node },
  { name: "NestJS", img: nest },
  { name: "Python", img: python },
  { name: "MySQL", img: mysql },
  { name: "PostgreSQL", img: postgres },
];

const services = [
  {
    title: "Web Application Development",
    description: "Enterprise-grade web applications using React, Node, and NestJS tailored for performance and scale.",
    icon: <Code2 size={32} />,
  },
  {
    title: "AI-Powered Solutions",
    description: "Custom AI integrations using Python — including recommendation engines, chatbots, and automation tools.",
    icon: <Brain size={32} />,
  },
  {
    title: "Mobile App Development",
    description: "Pixel-perfect iOS and Android apps with React Native, optimized for speed and seamless UX.",
    icon: <Smartphone size={32} />,
  },
  {
    title: "Backend Architecture",
    description: "Secure, scalable APIs and databases using NestJS, PostgreSQL and MongoDB for modern app backends.",
    icon: <Server size={32} />,
  },
  {
    title: "Automation & Bots",
    description: "Business automation, intelligent bots, and task schedulers with Python and event-driven logic.",
    icon: <Bot size={32} />,
  },
  {
    title: "System Integration",
    description: "Connect CRMs, ERPs, payment gateways, and more — we stitch tech into one seamless workflow.",
    icon: <Layers size={32} />,
  },
];

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900  to-fuchsia-900 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="max-w-7xl w-full grid md:grid-cols-2 items-center gap-16 z-10"
          variants={containerStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-5xl font-bold leading-snug mb-6">
              We Engineer <span className="text-blue-500">Digital Futures</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Axiino delivers scalable, robust, and AI-powered web & mobile apps for startups and enterprises using cutting-edge technologies.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative">
            <Lottie animationData={animationData} className="w-full h-[500px]" loop={false}/>
            <div className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none" />
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-blue-400"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* What We Do Best */}
      <motion.div
        className="text-center max-w-3xl mx-auto py-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4">What We Do Best</h2>
        <p className="text-gray-400 text-lg">
          From concept to deployment — we engineer future-ready apps that scale, perform, and wow users.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 pb-20"
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
              key={index}
              className="inset-0 bg-gradient-to-br from-blue-900  to-fuchsia-900 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:shadow-2xl transition group"
              variants={itemVariant}
            >
              <div className="text-4xl mb-4 text-white group-hover:scale-110 transition">{service.icon}</div>
              <h4 className="text-lg font-semibold text-gray-200 mb-2">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          
        ))}
      </motion.div>

      {/* Core Values */}
      <section className="inset-0 bg-gradient-to-br from-blue-900  to-fuchsia-900  text-white px-6 py-20">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold">Why Choose Axiino?</h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            We blend deep tech expertise with creative strategy to deliver results that matter.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: "⚙️", title: "End-to-End Development" },
            { icon: "🔍", title: "Transparent Process" },
            { icon: "🚀", title: "Modern & Scalable Tech" },
            { icon: "🧠", title: "AI-Powered Solutions" },
            { icon: "🔐", title: "Security First Approach" },
            { icon: "📈", title: "Growth-Centric Strategy" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 text-center hover:shadow-xl transition"
              variants={itemVariant}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="font-semibold text-lg">{item.title}</h4>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* What Drives Us */}
      <section className="bg-white-950 py-20 px-6 text-white">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl text-black font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Drives Us
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We are not just tech experts. We’re strategic partners committed to innovation, quality, and long-term impact.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
  {
    icon: <Lightbulb size={32} />,
    title: "Innovation",
    desc: "We stay ahead of the curve by experimenting with new ideas and technologies every day.",
  },
  {
    icon: <Rocket size={32} />,
    title: "Speed & Scalability",
    desc: "Our processes ensure fast delivery — but built to scale without breaking.",
  },
  {
    icon: <Handshake size={32} />,
    title: "Partnership",
    desc: "We work closely with clients as partners, not vendors — driving real business results.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Security First",
    desc: "From authentication to deployment — every line of code is built with security in mind.",
  },
  {
    icon: <Target size={32} />,
    title: "Focus on UX",
    desc: "User-first design is in our DNA. Every app we build looks and feels intuitive.",
  },
  {
    icon: <LayoutDashboard size={32} />,
    title: "Data-Driven Decisions",
    desc: "We leverage analytics and AI to make smarter, more impactful product decisions.",
  },
].map((item, i) => (
            <motion.div
              key={item.title}
              className="inset-0 bg-gradient-to-br from-blue-900  to-fuchsia-900 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:shadow-2xl transition group"
              variants={itemVariant}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{item.icon}</div>
              <h4 className="text-lg font-semibold text-gray-200 mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="inset-0 bg-gradient-to-br from-blue-900  to-fuchsia-900 py-20 px-6 text-white">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tools We Craft With
          </motion.h2>
          <p className="text-gray-400 mt-2 max-w-md mx-auto">
            We work with trusted, modern technologies to deliver high-performance software solutions.
          </p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              className="bg-white/5 p-4 rounded-xl w-32 h-32 flex flex-col items-center justify-center hover:scale-105 transition"
              variants={itemVariant}
            >
              <img src={tech.img} alt={tech.name} className="h-12 w-12 object-contain mb-2" />
              <span className="text-sm text-white text-center">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="bg-white text-blue-900 py-20 px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Build the Future Together
        </motion.h2>
        <p className="mb-6 text-lg">
          Join hands with Axiino to create something impactful, intelligent, and innovative.
        </p>
        <a
          href="/#/contact"
          className="inline-block bg-blue-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-fuchsia-900 transition"
        >
          Contact Us
        </a>
      </section>
    </>
  );
}

export default Home;
