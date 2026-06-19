import { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Works = lazy(() => import("./pages/Works"));

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";
import SEO from "./components/SEO";

function App() {
  return (
    <Router>
      <SEO />
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={
        <div className="min-h-screen bg-[#030712] flex items-center justify-center text-white">
          <div className="w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      <Chatbot />
      <Footer />
    </Router>
  );
}

export default App;
