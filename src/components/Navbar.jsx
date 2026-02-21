import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"

const routes = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact Us" },
];

function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 inset-x-0 z-50 px-4"
    >
      <div
        className={`max-w-6xl mx-auto px-6 py-3 flex justify-between items-center rounded-2xl border transition-all duration-300 ${scrolled
            ? "bg-gray-950/90 border-white/10 shadow-lg shadow-black/40 backdrop-blur-xl"
            : "bg-gray-950/60 border-white/5 backdrop-blur-md"
          }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-40" />
            <img src={logo} height="36" width="36" alt="Axiino" className="relative rounded-full" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent tracking-wide">
            AXIINO
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {routes.map(({ path, label }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-fuchsia-600/30 rounded-xl border border-blue-500/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative">{label}</span>
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="ml-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white text-sm font-semibold rounded-xl hover:opacity-90 transition shadow-lg shadow-blue-900/40"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white transition"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mt-2 max-w-6xl mx-auto rounded-2xl border border-white/10 bg-gray-950/95 backdrop-blur-xl shadow-xl overflow-hidden"
          >
            {routes.map(({ path, label }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-6 py-4 border-b border-white/5 text-sm font-medium transition-all ${isActive
                      ? "text-blue-400 bg-blue-950/40"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-6 py-4 text-sm font-semibold text-blue-400 hover:text-white transition"
            >
              Get Started →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
