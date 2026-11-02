import { Link } from "react-router-dom";
import { ArrowLeft, Home, Layers, Briefcase, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030712] pt-40 pb-24 px-6 text-white flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="animated-grid absolute inset-0 opacity-30 mix-blend-screen pointer-events-none" />
      <div className="orb absolute orb-blue w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto">
        <span className="text-sm font-bold text-sky-400 uppercase tracking-widest block mb-2">Error 404</span>
        <h1 className="text-6xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-fuchsia-500 mb-6">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-10">
          The page or resource you are looking for does not exist or has been moved to a new canonical address. Explore our main directories below:
        </p>

        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-10 text-left">
          <Link
            to="/"
            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/40 hover:bg-white/10 transition-all flex items-center gap-3 text-sm font-semibold"
          >
            <Home size={18} className="text-sky-400" />
            <span>Homepage</span>
          </Link>
          <Link
            to="/services"
            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/40 hover:bg-white/10 transition-all flex items-center gap-3 text-sm font-semibold"
          >
            <Layers size={18} className="text-fuchsia-400" />
            <span>Services</span>
          </Link>
          <Link
            to="/works"
            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/40 hover:bg-white/10 transition-all flex items-center gap-3 text-sm font-semibold"
          >
            <Briefcase size={18} className="text-indigo-400" />
            <span>Our Works</span>
          </Link>
          <Link
            to="/contact"
            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/40 hover:bg-white/10 transition-all flex items-center gap-3 text-sm font-semibold"
          >
            <Mail size={18} className="text-emerald-400" />
            <span>Contact Us</span>
          </Link>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Return to Axiino Technologies</span>
        </Link>
      </div>
    </div>
  );
}

