import { Link } from "react-router-dom";
import { FileCheck } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#030712] pt-36 pb-24 px-6 sm:px-12 text-white relative">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li>/</li>
            <li className="text-sky-400" aria-current="page">Terms &amp; Conditions</li>
          </ol>
        </nav>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
            <FileCheck size={24} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Terms &amp; Conditions</h1>
            <p className="text-xs text-slate-400 mt-1">Last Updated: November 2, 2026 • Axiino Technologies</p>
          </div>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#0a1122]/60 border border-white/10 space-y-6 text-slate-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing the website https://www.axiino.com or contracting engineering services with Axiino Technologies (&quot;Axiino&quot;), you acknowledge and agree to be bound by these Terms &amp; Conditions. If you disagree with any portion of these terms, please refrain from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">2. Scope of Services</h2>
            <p>
              Axiino Technologies provides professional custom software development, web applications, mobile applications, AI workflows, and cloud engineering services. Individual project deliverables, technical specifications, timelines, payment schedules, and warranties are governed by mutually executed Statements of Work (SOW) or service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">3. Intellectual Property Rights</h2>
            <p>
              Upon receipt of full payment for contracted milestones, clients are assigned complete ownership or exclusive licensing rights to custom project code, custom designs, and bespoke software artifacts created specifically for them, as specified in the SOW. Foundational libraries, pre-existing internal frameworks, and open-source dependencies remain subject to their respective licenses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">4. Client Responsibilities</h2>
            <p>
              Clients agree to provide timely feedback, assets, API credentials, and approvals required for sprint delivery. Delays resulting from missing client approvals or third-party API restrictions may adjust sprint delivery schedules accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">5. Limitation of Liability</h2>
            <p>
              Axiino Technologies engineers software according to modern industry standards and automated testing procedures. To the maximum extent permitted by applicable law, Axiino Technologies and its parent corporate group shall not be held liable for indirect, punitive, or consequential damages resulting from third-party server outages, third-party API deprecations, or unauthorized external security breaches outside our reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">6. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms and any project dispute shall be governed by and construed in accordance with the laws of the Republic of India. The courts of Chennai, Tamil Nadu, India, shall possess exclusive jurisdiction over any legal proceedings arising hereunder.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">7. Inquiries</h2>
            <p>
              For legal inquiries regarding these Terms, contact our legal counsel at <a href="mailto:axiino237@gmail.com" className="text-sky-400 hover:underline">axiino237@gmail.com</a> or phone +91 93613 95699.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}

