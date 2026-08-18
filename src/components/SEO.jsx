import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const seoConfig = {
  "/": {
    title: "Axiino | Axio | Axiino Technologies | Web Development near KK Nagar Chennai | IT Services & AI Solutions",
    description: "Axiino Technologies (also known as Axio, Axio Tech) — website development company near KK Nagar, Ashok Nagar, Ramapuram, Chennai. Custom web apps, mobile apps, AI & IT services. Free consultation!",
    keywords: "Axiino, Axio, Axio Technologies, Axio Chennai, Axio IT, Axio Tech, Axio website development, Axio software, Axiino Technologies, Axiino Tech, Axiino Chennai, axiino.com, web development near KK Nagar, IT company near KK Nagar Chennai, website development KK Nagar, software company KK Nagar, web developer near me KK Nagar, IT services KK Nagar Chennai, website development Ashok Nagar, web development Ramapuram, web development Vadapalani, web development Arumbakkam, web development Anna Nagar, IT company near me Chennai, website development company Chennai, mobile app development Chennai, AI development Chennai, full stack development Chennai"
  },
  "/about": {
    title: "About Axiino Technologies | Elite IT Engineers & AI Architects in Chennai",
    description: "Meet the team behind Axiino Technologies — Chennai's rising IT company. Expert software engineers, AI architects, and full-stack developers building future-ready digital solutions.",
    keywords: "about Axiino Technologies, Axiino team Chennai, IT engineers Chennai, AI architects India, software development team, Axiino CEO Aravindhan, full stack engineers Chennai, software company about us, Axiino Labs"
  },
  "/works": {
    title: "Axiino Works | Web App & AI Project Portfolio | Chennai IT Company",
    description: "Explore Axiino Technologies' project portfolio — premium business websites, custom AI tools, mobile apps, and enterprise software built for clients in Chennai and across India.",
    keywords: "Axiino portfolio, web development projects Chennai, IT company case studies, AI project portfolio India, custom web app development, business website Chennai, mobile app portfolio, enterprise software projects"
  },
  "/contact": {
    title: "Contact Axiino Technologies | Hire Web Developers & IT Experts in Chennai",
    description: "Get in touch with Axiino Technologies in Ramapuram, Chennai. Discuss your web development, mobile app, AI, or IT service needs. Call +91 93613 95699 or email axiino237@gmail.com.",
    keywords: "contact Axiino Technologies, hire web developers Chennai, IT company contact Ramapuram, software development inquiry Chennai, Axiino phone number, Axiino address Chennai, hire AI developers India, website development quote Chennai"
  }
};

// Per-page JSON-LD for pages
const pageSchemas = {
  "/": null, // Handled in index.html
  "/about": {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "url": "https://www.axiino.com/about",
    "name": "About Axiino Technologies",
    "description": "Learn about Axiino Technologies — Chennai's premier IT services and software development company.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Axiino Technologies",
      "url": "https://www.axiino.com",
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    }
  },
  "/works": {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "url": "https://www.axiino.com/works",
    "name": "Axiino Technologies Portfolio",
    "description": "Project portfolio of Axiino Technologies — custom web apps, AI tools, and mobile apps for businesses.",
    "provider": {
      "@type": "Organization",
      "name": "Axiino Technologies",
      "url": "https://www.axiino.com"
    }
  },
  "/contact": {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": "https://www.axiino.com/contact",
    "name": "Contact Axiino Technologies",
    "description": "Contact Axiino Technologies for website development, mobile apps, and IT services in Chennai.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Axiino Technologies",
      "telephone": "+919361395699",
      "email": "axiino237@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Flat No. 27, 1st Street, Kothari Nagar, Annai Sathya Nagar Main Road, Ramapuram",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600089",
        "addressCountry": "IN"
      }
    }
  }
};

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    // Determine path, strip trailing slash
    let path = location.pathname;
    if (path.length > 1 && path.endsWith("/")) {
      path = path.slice(0, -1);
    }

    const config = seoConfig[path] || seoConfig["/"];

    // ── Update Document Title ──
    document.title = config.title;

    // Helper to upsert a <meta> tag
    const upsertMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const [key, val] = attr.split("=");
        el.setAttribute(key, val.replace(/"/g, ""));
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    // ── Meta tags ──
    upsertMeta('meta[name="description"]', 'name=description', config.description);
    upsertMeta('meta[name="keywords"]', 'name=keywords', config.keywords);

    // ── Canonical URL ──
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const canonicalUrl = path === "/" ? "https://www.axiino.com/" : `https://www.axiino.com${path}`;
    canonical.setAttribute("href", canonicalUrl);

    // ── Open Graph ──
    upsertMeta('meta[property="og:title"]', 'property=og:title', config.title);
    upsertMeta('meta[property="og:description"]', 'property=og:description', config.description);
    upsertMeta('meta[property="og:url"]', 'property=og:url', canonicalUrl);

    // ── Twitter Card ──
    upsertMeta('meta[name="twitter:title"]', 'name=twitter:title', config.title);
    upsertMeta('meta[name="twitter:description"]', 'name=twitter:description', config.description);

    // ── Per-page JSON-LD Schema ──
    const existingPageSchema = document.getElementById("page-schema-ld");
    if (existingPageSchema) existingPageSchema.remove();

    const schema = pageSchemas[path];
    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "page-schema-ld";
      script.text = JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
    }

  }, [location]);

  return null;
}


