import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const staticSeoConfig = {
  "/": {
    title: "Axiino Technologies | Custom Software & AI Development",
    description: "Axiino builds custom software, web and mobile applications, AI solutions and business automation for startups and growing businesses worldwide.",
    keywords: "Axiino Technologies, custom software development, web application development, mobile app development, AI solutions, business automation, full stack developers Chennai"
  },
  "/about": {
    title: "About Axiino Technologies | Elite IT Engineers & AI Architects in Chennai",
    description: "Meet the engineering leadership behind Axiino Technologies — Chennai's software engineering and AI architecture firm delivering future-ready platforms.",
    keywords: "about Axiino Technologies, software engineers Chennai, AI architects India, Axiino leadership, software development company Ramapuram"
  },
  "/services": {
    title: "Software Engineering & IT Services | Axiino Technologies Chennai",
    description: "Full-spectrum software engineering services: custom software, web applications, mobile apps, AI automation, SaaS products, and cloud infrastructure.",
    keywords: "custom software development, web app development, mobile app development, AI automation services, SaaS development, cloud infrastructure Chennai"
  },
  "/products": {
    title: "Enterprise Software Products Suite | Axiino Technologies",
    description: "Explore Axiino's proprietary enterprise software suite: Core HRMS, Secure EDMS, LMS, SRM, LIMS, and Clinical ISMS frameworks available for custom deployment.",
    keywords: "enterprise HRMS, EDMS document automation, enterprise LMS, SRM procurement system, LIMS lab management, clinical ISMS software"
  },
  "/works": {
    title: "Axiino Works | Web App & Software Project Portfolio",
    description: "Explore completed client projects engineered by Axiino Technologies — responsive digital portals, brand platforms, and modern web applications.",
    keywords: "Axiino portfolio, web development projects Chennai, software case studies, web app portfolio, corporate portal development"
  },
  "/contact": {
    title: "Contact Axiino Technologies | Hire Software Developers in Chennai",
    description: "Get in touch with Axiino Technologies in Ramapuram, Chennai. Discuss your web, mobile, AI, or software development needs. Free technical consultation.",
    keywords: "contact Axiino Technologies, hire web developers Chennai, software company contact Ramapuram, hire AI developers India, software development quote"
  },
  "/privacy": {
    title: "Privacy Policy | Axiino Technologies",
    description: "Axiino Technologies privacy policy detailing data protection, confidentiality, and security standards for clients and visitors.",
    keywords: "Axiino privacy policy, data protection, confidentiality"
  },
  "/terms": {
    title: "Terms & Conditions | Axiino Technologies",
    description: "Terms of service and project engagement guidelines for Axiino Technologies software development and consulting.",
    keywords: "Axiino terms and conditions, service agreement, intellectual property"
  }
};

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    let path = location.pathname;
    if (path.length > 1 && path.endsWith("/")) {
      path = path.slice(0, -1);
    }

    let config = staticSeoConfig[path];

    // Check dynamic service path: /services/:slug
    if (!config && path.startsWith("/services/")) {
      const slug = path.replace("/services/", "");
      const service = servicesData[slug];
      if (service) {
        config = {
          title: service.metaTitle,
          description: service.metaDescription,
          keywords: `${service.title}, ${service.techStack.join(", ")}, Axiino Technologies`
        };
      }
    }

    // Fallback for 404
    if (!config) {
      config = {
        title: "Page Not Found (404) | Axiino Technologies",
        description: "The requested page could not be found on Axiino Technologies. Explore our software development services and project portfolio.",
        keywords: "404, page not found, Axiino Technologies"
      };
    }

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
    upsertMeta('meta[property="og:image"]', 'property=og:image', 'https://www.axiino.com/logo.png');

    // ── Twitter Card ──
    upsertMeta('meta[name="twitter:title"]', 'name=twitter:title', config.title);
    upsertMeta('meta[name="twitter:description"]', 'name=twitter:description', config.description);
    upsertMeta('meta[name="twitter:image"]', 'name=twitter:image', 'https://www.axiino.com/logo.png');

    // ── Dynamic Schema per route ──
    const existingPageSchema = document.getElementById("page-schema-ld");
    if (existingPageSchema) existingPageSchema.remove();

    let pageSchema = null;

    if (path === "/about") {
      pageSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "url": "https://www.axiino.com/about",
        "name": "About Axiino Technologies",
        "description": "Learn about Axiino Technologies — software engineering and AI solutions company based in Ramapuram, Chennai.",
        "mainEntity": {
          "@type": "Organization",
          "name": "Axiino Technologies",
          "url": "https://www.axiino.com",
          "foundingDate": "2024",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Flat No. 27, 1st Street, Kothari Nagar, Annai Sathya Nagar Main Road, Ramapuram",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600089",
            "addressCountry": "IN"
          }
        }
      };
    } else if (path === "/contact") {
      pageSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "url": "https://www.axiino.com/contact",
        "name": "Contact Axiino Technologies",
        "description": "Contact Axiino Technologies for custom software development, web applications, and AI consulting.",
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
      };
    } else if (path === "/works") {
      pageSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "url": "https://www.axiino.com/works",
        "name": "Axiino Technologies Portfolio",
        "description": "Completed software engineering and web application projects by Axiino Technologies."
      };
    } else if (path.startsWith("/services/")) {
      const slug = path.replace("/services/", "");
      const s = servicesData[slug];
      if (s) {
        pageSchema = {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": s.title,
          "serviceType": s.shortTitle,
          "description": s.metaDescription,
          "provider": {
            "@type": "Organization",
            "name": "Axiino Technologies",
            "url": "https://www.axiino.com",
            "logo": "https://www.axiino.com/logo.png"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Worldwide"
          }
        };
      }
    }

    if (pageSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "page-schema-ld";
      script.text = JSON.stringify(pageSchema, null, 2);
      document.head.appendChild(script);
    }

  }, [location]);

  return null;
}
