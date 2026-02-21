import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "../assets/logo.png"

const socialLinks = [
  { icon: <Facebook size={18} />, href: "#" },
  { icon: <Twitter size={18} />, href: "#" },
  { icon: <Linkedin size={18} />, href: "#" },
  { icon: <Instagram size={18} />, href: "#" },
];

function Footer() {
  return (
    <footer className="relative bg-gray-950 overflow-hidden border-t border-white/5">
      {/* Subtle orb */}
      <div className="orb orb-blue w-[400px] h-[200px] bottom-0 left-1/2 -translate-x-1/2 opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-30" />
              <img src={logo} height="36" width="36" alt="Axiino" className="relative rounded-full" />
            </div>
            <div>
              <h4 className="text-base font-bold bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                Axiino Technologies
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">
                Building future-ready solutions — one line of code at a time.
              </p>
            </div>
          </motion.div>

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
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-950/30 transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/5 pt-8">
          <p className="text-center text-xs text-gray-600">
            © 2025 Axiino Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
