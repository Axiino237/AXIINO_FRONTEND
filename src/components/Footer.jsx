import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "../assets/logo.png"

function Footer() {
  return (
    <footer className="inset-0 bg-gradient-to-br from-blue-900  to-fuchsia-900 text-slate-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-white gap-2 flex items-center">
      <img src={logo} height={"40"} width={"40"} alt="Axiino" />
            Axiino Technologies</h4>
          <p className="text-sm mt-2 text-slate-400">
            Building future-ready solutions — one line of code at a time.
          </p>
        </div>

        {/* Right: Social Icons or Links */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" className="text-slate-400 hover:text-teal-500 transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-teal-500 transition">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-teal-500 transition">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-teal-500 transition">
            <Instagram size={20} />
          </a>
        </div>
      </div>

      <hr className="border-white-800 my-6" />

      {/* Bottom Text */}
      <p className="text-center text-sm text-slate-300">
        © 2025 Axiino Technologies. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
