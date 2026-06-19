import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const seoConfig = {
  "/": {
    title: "Axiino | IT Services & AI Development | Business Website Solutions",
    description: "Axiino is a premier IT services company specializing in AI development, business website development, custom mobile applications, and enterprise software engineering.",
    keywords: "IT Services, AI Development, Business Website Development, Custom Software Engineering, All IT Services, Mobile App Development, Web Development Company, AI Solutions Agency, React Developer, Node.js development"
  },
  "/about": {
    title: "About Axiino | Top IT Consultants & AI Software Architects",
    description: "Meet the elite IT engineers and AI architects behind Axiino. We deliver state-of-the-art software solutions, business web design, and digital transformation.",
    keywords: "Top IT Consultants, AI Software Architects, Axiino team, software development company, Sujitha CTO, Aravindhan CEO, Vijay Axiino, Saran Axiino"
  },
  "/works": {
    title: "Our Works | Custom Web Development & IT Case Studies",
    description: "Explore our portfolio of successful business website development, custom AI implementations, and corporate web platforms designed by Axiino.",
    keywords: "business website design portfolio, AI project examples, custom web development, IT case studies, Creativix Agency, UMSHIV Group, The First Step Solutions"
  },
  "/contact": {
    title: "Contact Axiino | Hire IT & AI Development Experts",
    description: "Partner with Axiino for all IT services, business website development, and custom artificial intelligence setups. Schedule a call with our IT team.",
    keywords: "Hire IT services, Hire AI developers, Business website development experts, IT consulting Chennai, Get started with software project"
  }
};

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    // Determine path, strip trailing slash if any
    let path = location.pathname;
    if (path.length > 1 && path.endsWith("/")) {
      path = path.slice(0, -1);
    }

    const config = seoConfig[path] || seoConfig["/"];

    // Update Document Title
    document.title = config.title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', config.description);

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', config.keywords);

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const cleanPath = path === "/" ? "" : `#${path}`;
    canonical.setAttribute('href', `https://www.axiino.com/${cleanPath}`);

    // Update Open Graph tags for rich sharing preview
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', config.title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', config.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `https://www.axiino.com/${cleanPath}`);

  }, [location]);

  return null;
}
