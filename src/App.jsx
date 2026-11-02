import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Load Homepage eagerly for fastest First Contentful Paint
import Home from "./pages/Home";

// Code-split subpages for optimal Core Web Vitals
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Products = lazy(() => import("./pages/Products"));
const Works = lazy(() => import("./pages/Works"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";
import SEO from "./components/SEO";
import SmoothScroll from "./components/SmoothScroll";
import SpotlightCursor from "./components/SpotlightCursor";

function RouteLoadingFallback() {
  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-sky-400 border-t-transparent animate-spin" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <SEO />
      <SmoothScroll />
      <SpotlightCursor />
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Chatbot />
      <Footer />
    </Router>
  );
}

export default App;
