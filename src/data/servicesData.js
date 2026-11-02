export const servicesData = {
  "custom-software-development": {
    slug: "custom-software-development",
    title: "Custom Software Development Services",
    shortTitle: "Custom Software",
    metaTitle: "Custom Software Development Company | Axiino Technologies",
    metaDescription: "Axiino engineers bespoke custom software solutions, enterprise platforms, and digital products tailored to your operational workflows and business goals.",
    headline: "Engineered Exactly for Your Business Logic & Scale",
    subheadline: "Off-the-shelf software forces compromise. Axiino builds bespoke, enterprise-grade software systems designed from day one to match your operational workflows, compliance requirements, and growth trajectory.",
    targetAudience: "Growing enterprises, established businesses seeking modernization, and fast-scaling startups outgrowing off-the-shelf SaaS.",
    problemSolved: "Commercial off-the-shelf tools often impose rigid workflows, high per-seat subscription costs, data fragmentation across disparate tools, and inability to customize critical business logic.",
    deliverables: [
      {
        title: "Architecture & Systems Design",
        description: "Zero-trust, modular architectures engineered with modern patterns (clean architecture, domain-driven design) to eliminate technical debt."
      },
      {
        title: "Bespoke Enterprise Web & Core Systems",
        description: "Full-stack software applications built to centralize multi-department workflows, data collection, and internal operations."
      },
      {
        title: "Legacy Modernization & Cloud Migration",
        description: "Refactoring monolithic codebases and legacy databases into scalable, secure, cloud-native environments."
      },
      {
        title: "Custom API & Integration Layers",
        description: "Robust data bridges connecting internal software with CRMs, payment gateways, ERPs, and third-party partner systems."
      }
    ],
    techStack: ["Node.js", "NestJS", "React.js", "Python", "PostgreSQL", "Docker", "AWS"],
    process: [
      { step: "01", title: "Discovery & Requirements Blueprint", desc: "Deep-dive workshops to uncover operational bottlenecks, define functional specifications, and draft wireframe models." },
      { step: "02", title: "Architecture & Data Modeling", desc: "Drafting schema architectures, security boundaries, and API contracts before any production code is committed." },
      { step: "03", title: "Agile Sprint Delivery", desc: "Two-week milestone sprints featuring live progress demos, automated unit testing, and continuous feedback loops." },
      { step: "04", title: "Deployment & Knowledge Transfer", desc: "Containerized cloud deployment, automated CI/CD pipeline setup, and comprehensive technical documentation." }
    ],
    faqs: [
      {
        question: "How long does a custom software development project take?",
        answer: "A standard MVP or focused enterprise module typically takes 6 to 12 weeks from architecture specification to production release. Large multi-department enterprise systems are phased incrementally across scheduled sprints."
      },
      {
        question: "Who owns the code and intellectual property?",
        answer: "You own 100% of the custom codebase, architecture blueprints, and intellectual property upon project completion and milestone settlement."
      },
      {
        question: "Can Axiino integrate with our existing ERP or database?",
        answer: "Yes. We regularly build custom middleware, REST/GraphQL APIs, and webhook pipelines to integrate bespoke software with SAP, Zoho, Salesforce, PostgreSQL, MySQL, and proprietary internal databases."
      }
    ]
  },

  "web-application-development": {
    slug: "web-application-development",
    title: "Web Application Development Services",
    shortTitle: "Web Applications",
    metaTitle: "Web Application Development Company | Axiino Technologies Chennai",
    metaDescription: "High-performance web applications, responsive SaaS portals, and modern React & Node.js platforms engineered for speed, security, and global scale.",
    headline: "Fast, Resilient & Beautiful Web Applications",
    subheadline: "We build modern, responsive, and ultra-fast web applications that engage users and scale effortlessly. Engineered with React, Vite, Node.js, and modern cloud stacks.",
    targetAudience: "Startups building customer-facing SaaS platforms, digital-first businesses, and companies requiring interactive client portals.",
    problemSolved: "Slow page load speeds, poor mobile responsiveness, clunky user interfaces, and fragile frontends that fail under user traffic spikes.",
    deliverables: [
      {
        title: "Single Page & Progressive Web Apps",
        description: "Fluid, app-like browser experiences with instant page transitions, client-side caching, and offline capabilities."
      },
      {
        title: "SaaS Dashboards & Admin Portals",
        description: "Data-dense analytics dashboards, role-based access management, and interactive reporting tools."
      },
      {
        title: "Customer Portals & Digital Marketplaces",
        description: "Secure customer accounts, onboarding flows, subscription billing, and seamless transactional workflows."
      },
      {
        title: "Performance & Core Web Vitals Optimization",
        description: "Optimized bundle splitting, lazy loading, and rendering architecture to achieve top-tier Lighthouse scores and instant LCP."
      }
    ],
    techStack: ["React.js", "Vite", "Tailwind CSS", "Node.js", "NestJS", "PostgreSQL", "Redis"],
    process: [
      { step: "01", title: "UI/UX & Interactive Prototyping", desc: "Crafting wireframes and clickable design prototypes in Figma with clear visual hierarchies and responsive breakpoints." },
      { step: "02", title: "Frontend & State Architecture", desc: "Setting up clean component trees, robust state management, and type-safe API communication layers." },
      { step: "03", title: "Backend API Engineering", desc: "Implementing resilient REST and GraphQL microservices with JWT authentication, RBAC, and rate limiting." },
      { step: "04", title: "Rigorous QA & Production Launch", desc: "Cross-browser testing, mobile responsiveness verification, security headers configuration, and CDN edge deployment." }
    ],
    faqs: [
      {
        question: "Which frontend frameworks does Axiino use?",
        answer: "We specialize in React.js paired with Vite and modern CSS systems like Tailwind CSS. For high-performance interactive experiences, we leverage lightweight state stores and performant animation libraries like Framer Motion."
      },
      {
        question: "Are your web applications mobile-friendly?",
        answer: "Every web application we engineer is mobile-responsive by default, rigorously tested across iOS and Android devices, tablets, laptops, and ultra-wide desktop monitors."
      },
      {
        question: "How do you ensure web application security?",
        answer: "We implement zero-trust security standards including OWASP Top 10 mitigation, strict Content Security Policies (CSP), parameterized database queries, encrypted sessions, and encrypted payload transmissions."
      }
    ]
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development Services",
    shortTitle: "Mobile Apps",
    metaTitle: "Mobile App Development Company | iOS & Android | Axiino Technologies",
    metaDescription: "Cross-platform iOS and Android mobile app development with React Native. Native performance, seamless offline sync, and intuitive user experiences.",
    headline: "Intuitive iOS & Android Apps with Native Performance",
    subheadline: "Reach mobile users across iOS and Android from a unified, high-performance codebase. Engineered with React Native for maximum velocity, fluid 60 FPS animations, and native device feature integration.",
    targetAudience: "Startups launching mobile-first products, e-commerce brands, field service teams, and businesses looking to mobilize operations.",
    problemSolved: "Building and maintaining two separate codebases for iOS and Android is expensive, slow, and prone to feature desynchronization. Axiino's unified React Native architecture cuts time-to-market in half while preserving 100% native feel.",
    deliverables: [
      {
        title: "Cross-Platform iOS & Android Apps",
        description: "A single, clean codebase delivering native mobile experiences on both the Apple App Store and Google Play Store."
      },
      {
        title: "Real-Time Sync & Offline-First Storage",
        description: "Local data persistence with background synchronizers that ensure full functionality even with intermittent connectivity."
      },
      {
        title: "Hardware & Native Feature Integration",
        description: "Camera scanning, geolocation, push notifications, biometric authentication (FaceID / Fingerprint), and Bluetooth communication."
      },
      {
        title: "App Store Publishing & Compliance",
        description: "Complete end-to-end management of App Store and Google Play Store guidelines, review submissions, and release pipelines."
      }
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Node.js", "Firebase", "SQLite", "PostgreSQL"],
    process: [
      { step: "01", title: "Mobile UX & Gesture Architecture", desc: "Designing intuitive touchscreen navigation, ergonomic thumb zones, and natural transition animations." },
      { step: "02", title: "Core App Development", desc: "Component architecture, native bridge configuration, and local SQLite/AsyncStorage state integration." },
      { step: "03", title: "Device Matrix Testing", desc: "Rigorous testing across real physical devices covering multiple screen sizes, OS versions, and network speeds." },
      { step: "04", title: "App Store & Play Store Release", desc: "Metadata preparation, screenshot generation, compliance checks, and guided release to public store listings." }
    ],
    faqs: [
      {
        question: "Why should we choose React Native over separate native Swift and Kotlin apps?",
        answer: "React Native compiles to true native UI components while sharing up to 90% of business logic across iOS and Android. This dramatically lowers initial development cost, eliminates feature drift, and streamlines future updates."
      },
      {
        question: "Can Axiino help publish our app to the Apple App Store and Google Play?",
        answer: "Yes. We manage the entire store deployment workflow, including certificate generation, developer account configuration, privacy declarations, and store review adherence."
      },
      {
        question: "Do your mobile apps support offline usage?",
        answer: "Yes. We build offline-first data architectures using local SQLite or persistent key-value caches with conflict-resolution algorithms when network connectivity is restored."
      }
    ]
  },

  "ai-business-automation": {
    slug: "ai-business-automation",
    title: "AI & Business Automation Services",
    shortTitle: "AI & Automation",
    metaTitle: "AI Development & Business Automation Company | Axiino Technologies",
    metaDescription: "Custom AI solutions, LLM integrations, conversational intelligence, and automated workflow pipelines that eliminate manual work and amplify business output.",
    headline: "Intelligent AI Agents, LLM Integrations & Automated Workflows",
    subheadline: "Move beyond generic ChatGPT prompts. Axiino builds production-ready AI systems, Retrieval-Augmented Generation (RAG) pipelines, intelligent document parsers, and autonomous business workflows tailored to your proprietary data.",
    targetAudience: "Businesses with repetitive data-entry processes, customer service bottlenecks, large unindexed knowledge bases, or operations requiring intelligent decision-support.",
    problemSolved: "Manual data processing, slow customer response times, error-prone spreadsheet tasks, and inability to extract actionable intelligence from unstructured documents and communications.",
    deliverables: [
      {
        title: "Custom LLM & RAG Pipelines",
        description: "Vector search systems (pgvector, Pinecone) connecting secure LLMs directly with your private internal knowledge bases, contracts, and manuals."
      },
      {
        title: "Intelligent Customer & Support Agents",
        description: "Autonomous conversational assistants that understand context, answer complex queries, check order status, and route escalated tickets."
      },
      {
        title: "Document OCR & AI Extraction",
        description: "Automated extraction and classification of invoices, receipts, patient reports, and legal agreements with computer vision and multimodal models."
      },
      {
        title: "End-to-End Workflow Automations",
        description: "Background cron workers, webhook coordinators, and API orchestrators that automate multi-step cross-platform tasks without human intervention."
      }
    ],
    techStack: ["Python", "OpenAI / Claude APIs", "LangChain", "pgvector", "FastAPI", "Celery", "PostgreSQL"],
    process: [
      { step: "01", title: "Automation Feasibility Audit", desc: "Analyzing your existing workflows to identify the highest ROI automation and AI opportunities." },
      { step: "02", title: "Data Pipeline & Guardrails Setup", desc: "Structuring data ingestion, anonymization layers, and prompt security guardrails to prevent hallucinations." },
      { step: "03", title: "Model Orchestration & Integration", desc: "Deploying model endpoints, vector databases, and connecting AI intelligence to your existing software." },
      { step: "04", title: "Monitoring & Continuous Evaluation", desc: "Tracking latency, token costs, output accuracy, and fine-tuning model prompts based on production metrics." }
    ],
    faqs: [
      {
        question: "Is our proprietary company data safe when using your AI solutions?",
        answer: "Yes. We configure enterprise-grade zero-data-retention APIs and self-hosted open-source models (Llama, Mistral) where required, guaranteeing your proprietary data is never used for third-party public model training."
      },
      {
        question: "What is RAG (Retrieval-Augmented Generation)?",
        answer: "RAG allows an AI model to consult your private internal documents before answering questions, ensuring responses are accurate, cite specific sources, and never hallucinate unsupported claims."
      },
      {
        question: "Can AI automation integrate with our CRM or ERP?",
        answer: "Yes. Our automation pipelines connect directly via webhooks and APIs to CRMs, databases, email systems, and communication platforms like Slack or WhatsApp."
      }
    ]
  },

  "saas-product-development": {
    slug: "saas-product-development",
    title: "SaaS Product Development Services",
    shortTitle: "SaaS Development",
    metaTitle: "SaaS Product Development Company | Axiino Technologies",
    metaDescription: "End-to-end SaaS engineering: multi-tenant architecture, automated subscription billing, user role management, and scalable cloud infrastructure for software founders.",
    headline: "Architected for Multi-Tenancy, High MRR & Rapid Scale",
    subheadline: "Turn your software vision into a profitable, scalable SaaS product. Axiino partners with founders and established firms to architect, build, and launch multi-tenant software platforms engineered for high retention and seamless scaling.",
    targetAudience: "B2B and B2C software founders, startup entrepreneurs, and businesses transforming an internal software tool into a commercial product.",
    problemSolved: "Building a SaaS product is far more than UI design; it requires bulletproof tenant data isolation, recurring subscription billing, role-based security, automated onboarding, and scalable infrastructure.",
    deliverables: [
      {
        title: "Multi-Tenant Cloud Architecture",
        description: "Strict logical or database-level tenant isolation ensuring data privacy, zero cross-tenant leaks, and predictable compute distribution."
      },
      {
        title: "Subscription & Billing Engine",
        description: "Seamless integration with Stripe, Lemon Squeezy, or Razorpay for recurring billing, usage-based tiers, invoices, and automated dunning."
      },
      {
        title: "Authentication, RBAC & SSO",
        description: "Enterprise-grade user management with Google/GitHub social logins, SAML/SSO enterprise authentication, and granular team permissions."
      },
      {
        title: "Telemetry, Metrics & Admin Console",
        description: "Centralized internal dashboards to monitor active users, churn signals, API usage, revenue metrics, and system health."
      }
    ],
    techStack: ["React.js", "Node.js", "NestJS", "PostgreSQL", "Redis", "Stripe API", "AWS"],
    process: [
      { step: "01", title: "Product Blueprint & MVP Scope", desc: "Defining the core value proposition, stripping away non-essential features, and locking in the initial launch scope." },
      { step: "02", title: "Multi-Tenant Architecture Setup", desc: "Designing isolated database schemas, authentication middleware, and secure API boundaries." },
      { step: "03", title: "Feature Sprints & Payment Integration", desc: "Building the core SaaS functionality, billing webhooks, user settings, and onboarding flows." },
      { step: "04", title: "Alpha/Beta Launch & Scaling", desc: "Executing load testing, configuring automated backups, and launching to early adopters." }
    ],
    faqs: [
      {
        question: "How do you handle multi-tenancy and data isolation?",
        answer: "Depending on your industry compliance and scale requirements, we implement either shared database with tenant column isolation + row-level security (RLS), or separate schema/database isolation for enterprise clients."
      },
      {
        question: "Can you help integrate Stripe or Razorpay recurring subscriptions?",
        answer: "Yes. We build end-to-end billing lifecycles: tier upgrades, downgrades, prorations, payment failures, trial periods, and customer self-service billing portals."
      },
      {
        question: "Do you build MVPs for early-stage founders?",
        answer: "Yes. We specialize in building production-ready, clean-code MVPs within 8 to 12 weeks, giving you a robust foundation ready for initial paying customers and investor demos."
      }
    ]
  },

  "crm-erp-development": {
    slug: "crm-erp-development",
    title: "CRM & ERP Development & Integration",
    shortTitle: "CRM & ERP",
    metaTitle: "Custom CRM & ERP Development Company | Axiino Technologies",
    metaDescription: "Custom CRM and ERP solutions tailored to your operational workflows, inventory management, supply chain, and seamless Zoho suite integrations.",
    headline: "Unify Your Sales, Operations & Business Data",
    subheadline: "Disjointed spreadsheets and rigid generic CRMs create operational chaos. Axiino builds bespoke CRM and ERP platforms, or tailors enterprise platforms like Zoho, to streamline your pipelines, orders, and customer data in real time.",
    targetAudience: "Mid-sized businesses, manufacturing firms, distributors, and service companies struggling with disconnected operational software.",
    problemSolved: "Employees wasting hours manually copy-pasting customer records, missed sales follow-ups, inventory discrepancies, and lack of unified executive reporting across departments.",
    deliverables: [
      {
        title: "Bespoke CRM Platforms",
        description: "Custom lead tracking, sales pipelines, contact histories, automated follow-up reminders, and communication logs."
      },
      {
        title: "Operational ERP Systems",
        description: "Unified modules for procurement, order processing, inventory tracking, invoice generation, and expense management."
      },
      {
        title: "Zoho Suite Consulting & Deluge Scripting",
        description: "Customizing Zoho CRM, Zoho Creator, Zoho Books, and Zoho Inventory with custom Deluge workflows and third-party API hooks."
      },
      {
        title: "Executive BI & Reporting Dashboards",
        description: "Real-time visual reports tracking pipeline health, team KPIs, revenue forecasting, and cash flow analysis."
      }
    ],
    techStack: ["Node.js", "React.js", "PostgreSQL", "Zoho CRM / Deluge", "REST APIs", "Python"],
    process: [
      { step: "01", title: "Operational Workflow Mapping", desc: "Documenting how your leads move from initial inquiry to closed deal, fulfillment, and ongoing support." },
      { step: "02", title: "Data Architecture & Migration Plan", desc: "Designing unified schema structures and safely sanitizing legacy spreadsheet data for migration." },
      { step: "03", title: "Custom Module Development", desc: "Engineering tailored pipeline views, automated email/SMS triggers, approval flows, and permission roles." },
      { step: "04", title: "User Training & Rollout", desc: "Conducting team walkthroughs, establishing documentation, and providing phased departmental onboarding." }
    ],
    faqs: [
      {
        question: "Should we build a custom CRM or customize Zoho CRM?",
        answer: "If your workflows align 70%+ with standard sales cycles, customizing Zoho CRM is faster and cost-effective. If your business model involves unique operational rules, specialized calculation algorithms, or proprietary inventory flows, a custom-built solution delivers far greater ROI."
      },
      {
        question: "Can you migrate data from our existing spreadsheets into the new CRM?",
        answer: "Yes. We perform automated data cleaning, deduplication, schema normalization, and bulk migration to ensure 100% data integrity."
      },
      {
        question: "Can our CRM connect with WhatsApp and email?",
        answer: "Yes. We integrate official WhatsApp Business APIs, transactional email gateways (SendGrid/Amazon SES), and SMS gateways to automate customer communication."
      }
    ]
  },

  "backend-api-development": {
    slug: "backend-api-development",
    title: "Backend & API Development Services",
    shortTitle: "Backend & APIs",
    metaTitle: "Backend Architecture & API Development Company | Axiino Technologies",
    metaDescription: "Scalable backend architecture, microservices, and secure RESTful & GraphQL APIs built with Node.js, NestJS, Python, and PostgreSQL.",
    headline: "High-Throughput, Secure & Scalable Server Architecture",
    subheadline: "The backend is the engine of your digital business. Axiino engineers rock-solid API layers, microservices, and distributed database architectures engineered for sub-100ms response times and zero unexpected downtime.",
    targetAudience: "Companies building mobile apps, modern web apps, or IoT products that require a heavy-duty, secure backend server infrastructure.",
    problemSolved: "Database deadlocks, slow query responses under traffic, unversioned brittle APIs, security vulnerabilities, and single-point-of-failure server architectures.",
    deliverables: [
      {
        title: "RESTful & GraphQL API Engineering",
        description: "Cleanly structured, versioned, and documented API endpoints with predictable JSON payloads and strict input validation."
      },
      {
        title: "Database Engineering & Optimization",
        description: "Relational (PostgreSQL, MySQL) schema design, index optimization, read-replicas, and Redis caching layers."
      },
      {
        title: "Authentication & Security Architecture",
        description: "Stateless JWT, OAuth2, RBAC permission matrices, rate limiting, and encrypted payload verification."
      },
      {
        title: "Background Job Queues & Event Handlers",
        description: "Asynchronous task processing with Redis/BullMQ and Celery for non-blocking report generation, emails, and file parsing."
      }
    ],
    techStack: ["Node.js", "NestJS", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    process: [
      { step: "01", title: "API Contract & Schema Specification", desc: "Drafting OpenAPI/Swagger specifications and database schemas before writing backend logic." },
      { step: "02", title: "Core Logic & Middleware Development", desc: "Implementing controllers, service layers, authentication checks, and input sanitization filters." },
      { step: "03", title: "Stress & Concurrency Testing", desc: "Running automated load simulation tests to identify bottlenecks and tune database query performance." },
      { step: "04", title: "Automated CI/CD & Cloud Deployment", desc: "Configuring containerized pipelines with automatic migrations, health checks, and log telemetry." }
    ],
    faqs: [
      {
        question: "Why does Axiino recommend NestJS for Node.js backends?",
        answer: "NestJS provides a robust, opinionated TypeScript architecture inspired by Angular, enforcing modularity, dependency injection, and testability that prevents large Node codebases from becoming unwieldy."
      },
      {
        question: "Do you write automated tests for APIs?",
        answer: "Yes. We implement unit tests for core domain logic and integration tests for critical API routes, ensuring database interactions and authentication work reliably."
      },
      {
        question: "Can your backend scale as our user base grows?",
        answer: "Yes. We design stateless backend services that scale horizontally behind load balancers, with Redis caching and connection poolers to handle rapid traffic surges."
      }
    ]
  },

  "cloud-devops": {
    slug: "cloud-devops",
    title: "Cloud Infrastructure & DevOps Services",
    shortTitle: "Cloud & DevOps",
    metaTitle: "Cloud Architecture & DevOps Consulting | Axiino Technologies",
    metaDescription: "Modern cloud architecture, Docker containerization, automated CI/CD pipelines, and infrastructure as code on AWS and modern cloud platforms.",
    headline: "Automate Deployments, Eliminate Downtime & Reduce Cloud Costs",
    subheadline: "Manual deployments and unstable server configurations slow down engineering velocity. Axiino sets up automated CI/CD pipelines, container orchestration, and secure cloud environments that let your team ship code with total confidence.",
    targetAudience: "Software companies seeking automated deployment pipelines, enterprise migration to the cloud, or businesses looking to optimize high cloud hosting bills.",
    problemSolved: "Stressful manual deployments, broken releases, downtime during updates, security misconfigurations, and unpredictable cloud server costs.",
    deliverables: [
      {
        title: "CI/CD Pipeline Automation",
        description: "Zero-touch deployment workflows with GitHub Actions that run automated tests, build containers, and deploy to staging and production."
      },
      {
        title: "Containerization & Docker Orchestration",
        description: "Reproducible container setups that eliminate 'it works on my machine' issues across development, staging, and production."
      },
      {
        title: "AWS & Cloud Infrastructure Setup",
        description: "Configuring VPCs, load balancers, auto-scaling groups, S3 buckets, RDS databases, and IAM access controls with security by default."
      },
      {
        title: "Cloud Cost Optimization & Monitoring",
        description: "Right-sizing compute instances, automated database backups, log monitoring, and setting up alerting for uptime and error spikes."
      }
    ],
    techStack: ["AWS", "Docker", "GitHub Actions", "Vercel", "Nginx", "Linux", "PostgreSQL"],
    process: [
      { step: "01", title: "Infrastructure Audit & Assessment", desc: "Evaluating current hosting environments, deployment friction points, and security configurations." },
      { step: "02", title: "Containerization & Scripting", desc: "Writing Dockerfiles, environment configurations, and infrastructure blueprints." },
      { step: "03", title: "Automated Pipeline Construction", desc: "Setting up GitHub Actions workflows with linting, automated testing, building, and zero-downtime deployment." },
      { step: "04", title: "Monitoring & Disaster Recovery", desc: "Configuring automated database snapshots, SSL renewal, and uptime alerts with automated incident notifications." }
    ],
    faqs: [
      {
        question: "Which cloud providers do you work with?",
        answer: "We primarily architect on Amazon Web Services (AWS) and modern edge platforms like Vercel for web frontends. We also work with DigitalOcean and Google Cloud Platform (GCP)."
      },
      {
        question: "How do you achieve zero-downtime deployments?",
        answer: "We leverage blue-green or rolling deployment strategies: new application containers are spun up and verified healthy before traffic is seamlessly routed from the previous version."
      },
      {
        question: "Can Axiino help reduce our AWS monthly bill?",
        answer: "Yes. We identify idle resources, unattached EBS volumes, over-provisioned instances, missing reserved instances/savings plans, and implement caching layers that slash unnecessary compute costs."
      }
    ]
  }
};

