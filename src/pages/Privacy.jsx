import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#030712] pt-36 pb-24 px-6 sm:px-12 text-white relative">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li>/</li>
            <li className="text-sky-400" aria-current="page">Privacy Policy</li>
          </ol>
        </nav>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
            <Shield size={24} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Privacy Policy</h1>
            <p className="text-xs text-slate-400 mt-1">Last Updated: November 2, 2026 • Axiino Technologies</p>
          </div>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#0a1122]/60 border border-white/10 space-y-6 text-slate-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">1. Overview &amp; Commitment</h2>
            <p>
              Axiino Technologies (&quot;Axiino&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), an engineering entity operating under the UMSHIV Group of Companies with headquarters in Ramapuram, Chennai, Tamil Nadu, India, respects your personal data and privacy rights. This Privacy Policy details the types of information we collect, how we process it, and how we protect your confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">2. Information We Collect</h2>
            <p className="mb-2">We collect information solely for legitimate business communications, technical consultations, and service provision:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li><strong>Contact Information:</strong> Name, business email, phone number, and project scope submitted through our contact and inquiry forms.</li>
              <li><strong>Technical &amp; Analytics Data:</strong> Anonymous browser telemetry, approximate location, device type, and page access timestamps to monitor site reliability and prevent malicious traffic.</li>
              <li><strong>Unique Visitor Identifier:</strong> A local storage flag used exclusively to compute aggregate unique visitor counts on our website footer without tracking cross-site browsing history.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">3. How We Use Information</h2>
            <p className="mb-2">We use the collected information for:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li>Responding to technical inquiries, project proposals, and scheduling consultation calls.</li>
              <li>Drafting project Statements of Work (SOW) and commercial agreements.</li>
              <li>Ensuring security, preventing fraud, and maintaining server performance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">4. Data Sharing &amp; Third-Party Services</h2>
            <p>
              We do not sell, rent, monetize, or trade your personal information. Information is strictly processed within Axiino Technologies and our authorized corporate affiliate UMSHIV Group. We partner only with trusted infrastructure providers (such as Vercel, Supabase, and AWS) adhering to strict enterprise confidentiality and encryption standards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">5. Data Retention &amp; Security</h2>
            <p>
              We enforce HTTPS encryption for data in transit and secure database controls for stored inquiries. Inactive inquiry records are purged periodically in compliance with applicable Indian data protection laws and international standards (including GDPR guidelines for European users).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">6. Contact Information</h2>
            <p>
              For privacy-related questions, data access requests, or deletion inquiries, contact our Data Governance Officer at:
            </p>
            <address className="not-italic mt-3 p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 space-y-1">
              <p><strong>Axiino Technologies</strong></p>
              <p>Flat No. 27, 1st Street, Kothari Nagar, Annai Sathya Nagar Main Road, Ramapuram, Chennai - 600089, Tamil Nadu, India</p>
              <p>Email: <a href="mailto:axiino237@gmail.com" className="text-sky-400 hover:underline">axiino237@gmail.com</a></p>
              <p>Phone: +91 93613 95699</p>
            </address>
          </section>
        </div>

      </div>
    </div>
  );
}

