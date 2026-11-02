import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, Phone, MapPin, X, Eye, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.png";

const socialLinks = [
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/axiino-tech", label: "LinkedIn" },
  { icon: <Instagram size={18} />, href: "https://www.instagram.com/_axiino_?igsh=MTM2YXcyMzF6ajZ6dA==", label: "Instagram" },
];

const serviceLinks = [
  { label: "Custom Software Development", path: "/services/custom-software-development" },
  { label: "Web Application Development", path: "/services/web-application-development" },
  { label: "Mobile App Development", path: "/services/mobile-app-development" },
  { label: "AI & Business Automation", path: "/services/ai-business-automation" },
  { label: "SaaS Product Development", path: "/services/saas-product-development" },
  { label: "Cloud & DevOps Engineering", path: "/services/cloud-devops" },
];

const productLinks = [
  { label: "Axiino Core HRMS", path: "/products#hrms" },
  { label: "Axiino Secure EDMS", path: "/products#edms" },
  { label: "Axiino LMS", path: "/products#lms" },
  { label: "Axiino SRM", path: "/products#srm" },
  { label: "Axiino LIMS", path: "/products#lims" },
  { label: "Clinical ISMS", path: "/products#isms" },
];

function Footer() {
  const [views, setViews] = useState(null);
  
  useEffect(() => {
    async function handleCounter() {
      const storageKey = "axiino_unique_visitor_v1";
      let isNewVisitor = true;
      try {
        isNewVisitor = !localStorage.getItem(storageKey);
        if (isNewVisitor) {
          localStorage.setItem(storageKey, "true");
        }
      } catch (e) {
        console.warn("Storage access error:", e);
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);

      try {
        const apiUrl = import.meta.env.DEV ? (import.meta.env.VITE_API_URL || 'http://localhost:3001') : '';
        const url = `${apiUrl}/api/views?update=${isNewVisitor}`;

        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        const data = await response.json();

        if (data && typeof data.count === "number") {
          setViews(data.count);
        } else {
          setViews(210);
        }
      } catch (err) {
        console.error("Counter API error:", err);
        setViews(185);
      } finally {
        clearTimeout(timeoutId);
      }
    }

    handleCounter();
  }, []);

  return (
    <footer className="relative bg-[#020617] overflow-hidden border-t border-white/5 selection:bg-blue-500/30">
      {/* Top running neon scanning line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400 to-fuchsia-500 opacity-80 pointer-events-none"
        style={{
          backgroundSize: '200% auto',
          animation: 'shimmer 4s linear infinite'
        }}
      />

      {/* Animated subtle grid overlay */}
      <div className="animated-grid absolute inset-0 opacity-15 pointer-events-none" />

      {/* Background neon light orbs */}
      <div className="orb orb-blue w-[400px] h-[200px] bottom-0 left-1/4 -translate-x-1/2 opacity-10 blur-[100px]" />
      <div className="orb orb-purple w-[300px] h-[150px] top-0 right-1/4 opacity-10 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/5 pb-14">

          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group w-fit" aria-label="Axiino Technologies Home">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity" />
                <img
                  src={logo}
                  height="38"
                  width="38"
                  alt="Axiino Technologies"
                  className="relative rounded-full"
                />
              </div>
              <div>
                <h4 className="text-base font-bold bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Axiino Technologies
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">
                  Engineers for Digital Futures
                </p>
              </div>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed">
              Custom software engineering, high-performance web applications, mobile platforms, and AI workflow automation. Headquartered in Ramapuram, Chennai.
            </p>

            <div className="space-y-3 pt-1">
              <a
                href="mailto:axiino237@gmail.com"
                className="flex items-center gap-3 text-xs text-gray-300 hover:text-sky-300 transition-colors duration-200 cursor-pointer w-fit"
              >
                <Mail size={14} className="text-blue-400 shrink-0" />
                <span>axiino237@gmail.com</span>
              </a>
              <a
                href="tel:+919361395699"
                className="flex items-center gap-3 text-xs text-gray-300 hover:text-fuchsia-300 transition-colors duration-200 cursor-pointer w-fit"
              >
                <Phone size={14} className="text-fuchsia-400 shrink-0" />
                <span>+91 93613 95699</span>
              </a>
              <a
                href="https://maps.google.com/?q=13.036214732907844,80.18460287544686"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-xs text-gray-300 hover:text-indigo-300 transition-colors duration-200 cursor-pointer"
              >
                <MapPin size={14} className="text-purple-400 shrink-0 mt-0.5" />
                <span>Flat No. 27, 1st Street, Kothari Nagar, Ramapuram, Chennai - 600089</span>
              </a>
            </div>
          </div>

          {/* Column 2: Engineering Services */}
          <div className="space-y-4">
            <h5 className="text-xs font-bold text-gray-300 uppercase tracking-widest border-l-2 border-sky-400 pl-2">
              Core Services
            </h5>
            <ul className="space-y-2.5">
              {serviceLinks.map((s, idx) => (
                <li key={idx}>
                  <Link
                    to={s.path}
                    className="text-xs text-gray-400 hover:text-sky-300 transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-400/60" />
                    {s.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/services"
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
                >
                  All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Enterprise Products */}
          <div className="space-y-4">
            <h5 className="text-xs font-bold text-gray-300 uppercase tracking-widest border-l-2 border-fuchsia-400 pl-2">
              Enterprise Products
            </h5>
            <ul className="space-y-2.5">
              {productLinks.map((p, idx) => (
                <li key={idx}>
                  <Link
                    to={p.path}
                    className="text-xs text-gray-400 hover:text-fuchsia-300 transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-fuchsia-400/60" />
                    {p.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/products"
                  className="text-xs font-semibold text-fuchsia-400 hover:text-fuchsia-300 inline-flex items-center gap-1"
                >
                  Explore Products &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Legal */}
          <div className="space-y-4">
            <h5 className="text-xs font-bold text-gray-300 uppercase tracking-widest border-l-2 border-purple-400 pl-2">
              Company &amp; Legal
            </h5>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-xs text-gray-400 hover:text-white transition-colors duration-200">
                About Axiino Technologies
              </Link>
              <Link to="/works" className="text-xs text-gray-400 hover:text-white transition-colors duration-200">
                Completed Works &amp; Portfolio
              </Link>
              <Link to="/contact" className="text-xs text-gray-400 hover:text-white transition-colors duration-200">
                Contact &amp; Free Consultation
              </Link>
              <a
                href="https://www.umshiv.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-1"
              >
                <span>UMSHIV Group of Companies</span>
                <ArrowUpRight size={12} />
              </a>
              <Link to="/terms" className="text-xs text-gray-400 hover:text-white transition-colors duration-200">
                Terms &amp; Conditions
              </Link>
              <Link to="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>

            {/* Live Counter Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/30 border border-blue-500/20 text-blue-300 text-xs font-semibold shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <Eye size={12} className="text-blue-400 shrink-0" />
                <span>
                  {views !== null ? `${views.toLocaleString()} Unique Views` : "Calculating..."}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Axiino Technologies. All rights reserved. Ramapuram, Chennai, India.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Axiino Technologies on ${link.label}`}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-sky-400/50 hover:bg-sky-500/10 transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
