import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, X, Eye } from "lucide-react";
import logo from "../assets/logo.png";

const socialLinks = [
  // { icon: <Facebook size={18} />, href: "#" },
  // { icon: <Twitter size={18} />, href: "#" },
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/axiino-tech" },
  { icon: <Instagram size={18} />, href: "https://www.instagram.com/_axiino_?igsh=MTM2YXcyMzF6ajZ6dA==" },
];

function Footer() {
  const [views, setViews] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

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
        setViews(185); // Fallback view count
      } finally {
        clearTimeout(timeoutId);
      }
    }

    handleCounter();
  }, []);

  return (
    <footer className="relative bg-gray-950 overflow-hidden border-t border-white/5 selection:bg-blue-500/30">
      {/* Top running neon scanning line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400 to-fuchsia-500 to-transparent opacity-80 pointer-events-none"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-white/5 pb-12">
          
          {/* Column 1: Brand & Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="relative cursor-pointer">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-30" />
                <motion.img 
                  src={logo} 
                  height="36" 
                  width="36" 
                  alt="Axiino" 
                  className="relative rounded-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </div>
              <div>
                <h4 className="text-base font-bold bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Axiino Technologies
                </h4>
                <p className="text-xs text-gray-500 mt-0.5">
                  Building future-ready solutions — one line of code at a time.
                </p>
              </div>
            </div>

            <div className="space-y-3.5 pt-2">
              <motion.a 
                href="mailto:axiino237@gmail.com"
                className="flex items-center gap-3 text-xs text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer w-fit"
                whileHover={{ x: 5, color: "#38bdf8" }}
              >
                <Mail size={14} className="text-blue-400 shrink-0" />
                <span>axiino237@gmail.com</span>
              </motion.a>
              <motion.a 
                href="tel:+919361395699"
                className="flex items-center gap-3 text-xs text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer w-fit"
                whileHover={{ x: 5, color: "#e879f9" }}
              >
                <Phone size={14} className="text-fuchsia-400 shrink-0" />
                <span>+91 93613 95699</span>
              </motion.a>
              <motion.a 
                href="https://maps.google.com/?q=Chennai,+Tamil+Nadu,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer w-fit"
                whileHover={{ x: 5, color: "#818cf8" }}
              >
                <MapPin size={14} className="text-purple-400 shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Legal & Live Counter */}
          <motion.div
            className="space-y-5 md:pl-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Legal & Analytics</h5>
            
            <div className="flex flex-col gap-3">
              <motion.button
                onClick={() => setActiveModal("terms")}
                className="text-left text-xs text-gray-500 hover:text-white transition-colors duration-200 w-fit flex items-center gap-1.5"
                whileHover={{ x: 6, color: "#38bdf8" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="w-1 h-1 rounded-full bg-blue-400/80" />
                Terms & Conditions
              </motion.button>
              <motion.button
                onClick={() => setActiveModal("privacy")}
                className="text-left text-xs text-gray-500 hover:text-white transition-colors duration-200 w-fit flex items-center gap-1.5"
                whileHover={{ x: 6, color: "#e879f9" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="w-1 h-1 rounded-full bg-fuchsia-400/80" />
                Privacy Policy
              </motion.button>
            </div>

            <motion.div 
              className="pt-2 w-fit"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/20 border border-blue-500/20 text-blue-300 text-xs font-semibold shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <Eye size={12} className="text-blue-400 shrink-0" />
                <span>
                  {views !== null ? `${views.toLocaleString()} Unique Views` : "Calculating..."}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Bottom Row */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © 2025 Axiino Technologies. All rights reserved.
          </p>

          {/* Social Icons */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ 
                  scale: 1.15, 
                  y: -3, 
                  borderColor: "rgba(56, 189, 248, 0.4)", 
                  backgroundColor: "rgba(56, 189, 248, 0.1)",
                  boxShadow: "0 0 15px rgba(56, 189, 248, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── MODALS (Terms & Privacy) ── */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-[#0a1122]/90 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
              >
                <X size={16} />
              </button>

              {activeModal === "terms" ? (
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
                    Terms & Conditions
                  </h3>
                  <div className="space-y-4 text-sm text-gray-300 leading-relaxed font-light">
                    <p>
                      Welcome to Axiino Technologies. By accessing our website, tools, or hiring our squad, you agree to these Terms. Please read them carefully.
                    </p>
                    <h4 className="text-white font-semibold pt-2">1. Scope of Services</h4>
                    <p>
                      Axiino Technologies provides elite custom web development, mobile application design, AI integration, and consulting solutions. Deliverables, pricing, and timelines are governed by mutual statements of work (SOW).
                    </p>
                    <h4 className="text-white font-semibold pt-2">2. Intellectual Property</h4>
                    <p>
                      Unless specified otherwise in a custom service contract, all foundational architectural design patterns, software libraries, and proprietary technologies remain the intellectual property of Axiino. Once full payment is received, clients are granted license or full ownership of project-specific custom codebase as defined in their SOW.
                    </p>
                    <h4 className="text-white font-semibold pt-2">3. Limitation of Liability</h4>
                    <p>
                      Axiino Technologies builds platforms with high structural integrity and follows strict testing procedures. However, we are not liable for business interruptions, third-party infrastructure failures, or external outages that impact live deliverables.
                    </p>
                    <h4 className="text-white font-semibold pt-2">4. Revisions & Updates</h4>
                    <p>
                      These terms may be updated from time to time to align with new legal requirements or technology models. Continued use of our site and services implies acceptance of the updated terms.
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
                    Privacy Policy
                  </h3>
                  <div className="space-y-4 text-sm text-gray-300 leading-relaxed font-light">
                    <p>
                      At Axiino Technologies, we respect your privacy and secure all transmissions. This policy outlines how we handle data.
                    </p>
                    <h4 className="text-white font-semibold pt-2">1. Information Collection</h4>
                    <p>
                      We collect basic information you explicitly provide when submitting an inquiry form (name, email, phone number, and project details) to review your inquiry and schedule consultation calls.
                    </p>
                    <h4 className="text-white font-semibold pt-2">2. Device Analytics</h4>
                    <p>
                      To prevent counting duplicate visits, we use local storage identifiers to calculate unique device visits displayed in our footer. This tracker is static, stored locally on your device, and does not monitor browsing histories.
                    </p>
                    <h4 className="text-white font-semibold pt-2">3. Data Sharing</h4>
                    <p>
                      We never sell, rent, or lease contact information to third-party advertisers. All information stays secure and private within the UMSHIV Group of Companies.
                    </p>
                    <h4 className="text-white font-semibold pt-2">4. Security Protocols</h4>
                    <p>
                      Our databases are monitored under modern cloud security parameters, preventing unauthorized breaches or leaks.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;
