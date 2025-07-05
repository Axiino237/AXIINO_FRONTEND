import { useState } from "react";
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

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-5 inset-x-0 z-50 bg-transparent shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex bg-white/70 rounded-full justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={logo} height={"40"} width={"40"} alt="Axiino" />
        <div className="text-2xl font-bold text-blue-600 dark:text-white">
         AXIINO
        </div>
      </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-200 font-medium">
          {routes.map(({ path, label }) => {
            const isActive = pathname === path;

            return (
              <Link
                key={path}
                to={path}
                className={`relative transition-all duration-200 hover:text-blue-500 dark:hover:text-blue-400 ${
                  isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : ""
                }`}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 dark:bg-blue-400"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 dark:text-gray-200"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-4 space-y-4 bg-white dark:bg-gray-900"
          >
            {routes.map(({ path, label }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-1 border-b border-gray-200 dark:border-gray-700 transition-all duration-200 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
