import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Users, FileText, GraduationCap, Truck, Activity, Sparkles, ArrowRight, HelpCircle } from "lucide-react";

const productsList = [
  {
    id: "hrms",
    title: "Axiino Core HRMS",
    badge: "Enterprise Workforce Platform",
    status: "Proprietary Framework • Available for Custom Deployment",
    icon: <Users size={28} className="text-sky-400" />,
    shortDesc: "Complete workforce management, attendance tracking, automated payroll, and structured performance appraisal cycles.",
    targetCustomer: "Growing enterprises (50-2000+ employees), IT service firms, and multi-branch operations.",
    features: [
      "Biometric and geo-fenced attendance tracking",
      "Automated payroll calculation with statutory compliance (PF, ESI, TDS)",
      "Employee self-service portal for leave and claims",
      "360-degree appraisal cycles with objective key results (OKRs)",
      "Role-based access control for HR, managers, and employees"
    ],
    benefits: [
      "Reduces HR administrative overhead by up to 70%",
      "Eliminates manual payroll calculation errors and compliance penalties",
      "Gives leadership instant real-time visibility into headcount and retention"
    ],
    useCases: [
      "Multi-location corporate office workforce consolidation",
      "Automating shift scheduling for field and operational teams",
      "Paperless onboarding for fast-scaling engineering teams"
    ]
  },
  {
    id: "edms",
    title: "Axiino Secure EDMS",
    badge: "Document Automation & Compliance",
    status: "Enterprise Solution • Available for Custom Deployment",
    icon: <FileText size={28} className="text-fuchsia-400" />,
    shortDesc: "Centralized digital document management with Google Vision OCR, custom metadata tagging, and tamper-proof audit trails.",
    targetCustomer: "Legal firms, healthcare providers, financial services, and compliance-driven corporations.",
    features: [
      "Multilingual OCR with automatic full-text indexing",
      "Encrypted e-signature workflows with legal audit timestamps",
      "Granular document retention policies and automated archival",
      "Immutable version control with rollback history",
      "AES-256 data encryption at rest and TLS 1.3 in transit with audit-ready access logs"
    ],
    benefits: [
      "Find any archived document within seconds using smart semantic search",
      "Pass regulatory compliance audits with zero paper fragmentation",
      "Secure sensitive intellectual property behind strict cryptographic access"
    ],
    useCases: [
      "Digital contract lifecycle management and supplier agreement approvals",
      "Medical records archival with strict patient data privacy",
      "Financial invoice indexing and automated receipt reconciliation"
    ]
  },
  {
    id: "lms",
    title: "Axiino LMS",
    badge: "Corporate E-Learning Platform",
    status: "Enterprise Accelerator • Available for Custom Deployment",
    icon: <GraduationCap size={28} className="text-indigo-400" />,
    shortDesc: "Deliver interactive employee training, mandatory compliance courses, and structured certifications with granular analytics.",
    targetCustomer: "Enterprises with mandatory training requirements, universities, certification bodies, and scaling agencies.",
    features: [
      "Multi-format course builder (video, SCORM, interactive quizzes)",
      "Automated certificate generation upon passing thresholds",
      "Learner progress tracking and executive completion dashboards",
      "Role-based content assignment tailored to employee departments",
      "Mobile-responsive learning interface with progress sync"
    ],
    benefits: [
      "Drastically reduces training and onboarding cycle times for new hires",
      "Verifiable compliance certificates for regulated industry audits",
      "Gamified learning modules that improve course completion rates"
    ],
    useCases: [
      "Standardized security and regulatory compliance training for corporate staff",
      "Customer education portals for complex SaaS products",
      "Internal engineering technical upskilling and certification tracking"
    ]
  },
  {
    id: "srm",
    title: "Axiino SRM",
    badge: "Supplier Relationship & Procurement",
    status: "Enterprise Framework • Available for Custom Deployment",
    icon: <Truck size={28} className="text-amber-400" />,
    shortDesc: "Streamline vendor onboarding, RFx competitive bidding, contract lifecycle management, and purchase order tracking.",
    targetCustomer: "Manufacturing units, retail distributors, construction companies, and procurement departments.",
    features: [
      "Self-service vendor registration and KYC verification",
      "Encrypted RFx bidding with blind evaluation stages",
      "Automated contract renewal reminders and clause tracking",
      "Budget approval workflows with multi-tier managerial sign-offs",
      "Vendor performance scorecards (on-time delivery, defect rate)"
    ],
    benefits: [
      "Prevents maverick spending through strict automated budget limits",
      "Lowers raw procurement costs via competitive bidding mechanisms",
      "Provides transparent audit trails for all vendor purchase orders"
    ],
    useCases: [
      "Centralized raw material vendor management for manufacturers",
      "Subcontractor tender management and milestone payment verification",
      "Corporate annual vendor contract renegotiation and compliance checks"
    ]
  },
  {
    id: "lims",
    title: "Axiino LIMS",
    badge: "Laboratory Information Management",
    status: "Specialized Laboratory Solution • Pilot Stage",
    icon: <Activity size={28} className="text-emerald-400" />,
    shortDesc: "Centralize sample tracking, barcode identification, laboratory instrument data capture, and regulatory audit compliance.",
    targetCustomer: "Diagnostic centers, chemical testing laboratories, food safety labs, and research institutions.",
    features: [
      "Unique 2D barcode and RFID sample tracking from receipt to disposal",
      "Direct instrument data ingestion to eliminate manual entry errors",
      "Strict chain-of-custody logging with timestamped operator signatures",
      "Automated test report generation with configurable approval gates",
      "Compliant with ISO 17025 and Good Laboratory Practice (GLP) standards"
    ],
    benefits: [
      "Eliminates sample mix-ups through automated barcode validation",
      "Reduces test result turnaround time by up to 50%",
      "Provides defensible audit trails for laboratory accreditation inspections"
    ],
    useCases: [
      "Clinical and diagnostic pathology sample lifecycle tracking",
      "Industrial batch quality control and certification testing",
      "Academic and commercial scientific research documentation"
    ]
  },
  {
    id: "isms",
    title: "Axiino Clinical ISMS",
    badge: "AI Therapeutic Care Tracking",
    status: "Advanced R&D Platform • Controlled Clinical Pilots",
    icon: <Sparkles size={28} className="text-purple-400" />,
    shortDesc: "AI-assisted developmental care tracking using computer vision motion landmarks and automated clinical diagnostic report drafts.",
    targetCustomer: "Developmental therapy clinics, rehabilitation centers, pediatric specialists, and clinical researchers.",
    features: [
      "MediaPipe landmark tracking for non-invasive motor assessment",
      "Privacy-first video processing with on-device feature extraction",
      "AI-assisted clinical session summary generation with LLM guardrails",
      "Therapist goal progression tracking and milestone charting",
      "Encrypted patient records storage with clinical consent management workflows"
    ],
    benefits: [
      "Saves therapists up to 60 minutes per patient in drafting progress notes",
      "Provides objective, quantifiable physical movement measurements",
      "Empowers parents and care teams with visual progress timelines"
    ],
    useCases: [
      "Pediatric motor milestone evaluation and physical therapy progress notes",
      "Post-operative neurological rehabilitation mobility measurement",
      "Standardized data capture for clinical developmental research studies"
    ]
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-[#030712] pt-36 pb-24 px-6 sm:px-12 relative overflow-hidden text-white">
      {/* Background Ambience */}
      <div className="animated-grid absolute inset-0 opacity-40 mix-blend-screen pointer-events-none" />
      <div className="orb absolute orb-fuchsia w-[600px] h-[600px] -top-40 -right-40 opacity-25 blur-[150px] pointer-events-none" />
      <div className="orb absolute orb-blue w-[700px] h-[700px] bottom-0 left-0 opacity-25 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <li>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li className="text-fuchsia-400" aria-current="page">Products</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-950/50 text-fuchsia-200 text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(232,121,249,0.2)] mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#e879f9] animate-[pulse-glow_2s_infinite]" />
            Enterprise Software Architecture
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Axiino Proprietary <br />
            <span className="gradient-text pb-2 inline-block">Enterprise Product Suite</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            In addition to custom client engineering, Axiino develops robust, proprietary enterprise software frameworks. Each platform is built on modern microservices and is available for dedicated on-premise or private cloud deployment, with custom integrations for your exact business requirements.
          </p>
        </div>

        {/* Product Cards */}
        <div className="space-y-12 mb-24">
          {productsList.map((product, idx) => (
            <motion.div
              id={product.id}
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-8 sm:p-12 rounded-3xl bg-[#0a1122]/60 border border-white/10 hover:border-fuchsia-500/30 transition-all duration-300 card-glow"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                
                {/* Left Column: Info & Status */}
                <div className="lg:w-7/12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {product.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest block">
                        {product.badge}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {product.title}
                      </h2>
                    </div>
                  </div>

                  <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mb-6">
                    {product.status}
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed mb-8">
                    {product.shortDesc}
                  </p>

                  <div className="mb-6">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Target Customers</p>
                    <p className="text-sm text-slate-200">{product.targetCustomer}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Capabilities</p>
                    <ul className="space-y-2">
                      {product.features.map((feat, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-fuchsia-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Benefits, Use Cases & Action */}
                <div className="lg:w-5/12 w-full p-6 sm:p-8 rounded-2xl bg-[#050b14] border border-white/10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-white/10 pb-2">
                      Core Business Benefits
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {product.benefits.map((benefit, i) => (
                        <li key={i} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-white/10 pb-2">
                      Primary Use Cases
                    </h3>
                    <ul className="space-y-2 mb-8">
                      {product.useCases.map((uc, i) => (
                        <li key={i} className="text-xs text-slate-400 leading-relaxed">
                          • {uc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/contact?product=${encodeURIComponent(product.title)}`}
                    className="w-full text-center py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-600 text-white font-bold text-sm shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(192,132,252,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Technical Demo / SOW</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Deployment FAQ */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#0a1122]/40 border border-white/10 mb-20">
          <div className="flex items-center gap-2 mb-3 text-fuchsia-400">
            <HelpCircle size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Enterprise Delivery</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-8">How Axiino Products Are Deployed</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-base font-bold text-white mb-2">Dedicated Single-Tenant</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Deployed exclusively to your AWS or private cloud infrastructure, ensuring 100% data sovereignty and compliance.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-base font-bold text-white mb-2">Custom Integration</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We customize schemas, branding, user permissions, and connect via APIs with your legacy ERPs and third-party tools.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-base font-bold text-white mb-2">Full Source Code License</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Enterprise arrangements can include full source-code licensing, comprehensive documentation, and SLA maintenance retainers.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center max-w-3xl mx-auto py-8">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Need a Tailored Product Demonstration?
          </h2>
          <p className="text-slate-300 text-sm mb-8">
            Speak directly with our product engineers to see how these architectures can be adapted to your company's operational requirements.
          </p>
          <Link
            to="/contact"
            className="glow-btn inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white font-bold rounded-xl shadow-lg border border-white/20 transition-all hover:scale-105"
          >
            <span>Schedule a Product Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </section>

      </div>
    </div>
  );
}

