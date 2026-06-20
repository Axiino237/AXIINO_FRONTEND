import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const seoConfig = {
  "/": {
    title: "Axiino Technologies | Premium IT Services & AI Development Chennai",
    description: "Axiino Technologies is a leading software consulting & AI development agency in Chennai. We design custom enterprise solutions, web apps, and Zoho setups.",
    keywords: "Axiino, Axiino Technologies, Axiino Chennai, IT Services, AI Development, Custom Software Engineering, Mobile App Development, Web Development Company, AI Solutions Agency, Zoho Partner"
  },
  "/about": {
    title: "About Axiino Technologies | Elite IT Engineers & AI Architects",
    description: "Learn about Axiino Technologies (Axiino Labs). Meet our leadership team and explore our advanced software development processes and engineering methodologies.",
    keywords: "About Axiino, Axiino Technologies team, AI Software Architects, Axiino CEO Aravindhan, Axiino CTO Sujitha, software engineering team"
  },
  "/works": {
    title: "Axiino Works | Custom Web Apps & AI Project Case Studies",
    description: "Explore the project portfolio of Axiino Technologies. View case studies of our premium business web designs, custom AI tools, and enterprise deployments.",
    keywords: "Axiino works, Axiino portfolio, business website design, AI project case studies, custom web development Chennai"
  },
  "/contact": {
    title: "Contact Axiino Technologies | Hire Custom Software & AI Experts",
    description: "Get in touch with Axiino Technologies located in Ramapuram, Chennai. Discuss your custom software roadmap, CRM requirements, or AI integrations with us.",
    keywords: "Contact Axiino, Axiino Technologies phone, Axiino address Chennai, hire software developers Chennai, AI consultants"
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
