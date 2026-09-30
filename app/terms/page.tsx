import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Service Terms & Conditions",
  description: "Terms and conditions of service for Creators Aquarium in Bengaluru.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#FFFFFF] text-[#0A0F1D] py-16 sm:py-24 w-full">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-10 space-y-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#0070E0] hover:text-[#0055B3] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
            SERVICE AGREEMENT
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#0A0F1D] font-bold">
            Terms & Conditions of Service
          </h1>
          <p className="text-xs text-[#64748B]">
            Effective Date: 29 September 2026 · Bengaluru, Karnataka
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0] pt-8">
          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#0A0F1D] font-bold">1. Scope of Service</h2>
            <p>
              Creators Aquarium provides specialized on-site aquarium maintenance, water parameter testing, aquascaping care, equipment checks, turnkey setup, and relocation logistics within Bengaluru. All services are performed according to documented Standard Operating Procedures (SOPs).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#0A0F1D] font-bold">2. Quotations & On-Site Adjustments</h2>
            <p>
              Initial estimates provided via WhatsApp or telephone are based on client-submitted photographs, stated dimensions, and described conditions. If an on-site physical inspection reveals significant undisclosed challenges—such as compromised glass seams, hazardous electrical wiring, severe cyanobacteria infestation, or non-functional pumps—our technician will discuss and confirm an adjusted quotation prior to initiating work.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#0A0F1D] font-bold">3. Livestock & Biological Disclaimers</h2>
            <p>
              We exercise the utmost care during water exchanges, siphon procedures, and equipment servicing. However, aquariums represent complex, dynamic biological ecosystems. Creators Aquarium does not provide veterinary medical services. We cannot guarantee the survival of aquatic livestock that are already suffering from pre-existing parasitic infections, dropsy, ammonia toxicity, or advanced physical trauma prior to our visit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#0A0F1D] font-bold">4. Wildlife (Protection) Act Compliance</h2>
            <p>
              Creators Aquarium operates in strict compliance with India&apos;s Wildlife (Protection) Act schedules and Ministry of Fisheries directives. We strictly prohibit the marketing, sale, trade, fragmentation, or sourcing of live corals and regulated endangered aquatic wildlife. Our marine services are restricted to fish-only saltwater systems utilizing legally compliant livestock and artificial or natural macro rock hardscapes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#0A0F1D] font-bold">5. On-Site Prerequisites</h2>
            <p>
              To enable safe service execution, clients agree to provide:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#64748B]">
              <li>Unobstructed physical access to the aquarium, cabinet, and filtration hardware.</li>
              <li>Functional domestic tap water connection and operational drainage.</li>
              <li>A safe, grounded electrical power outlet near the aquarium.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#0A0F1D] font-bold">6. Payment & Billing</h2>
            <p>
              Phase 1 of our website does not process online payments, deposits, or card transactions. Invoices are settled post-service or on agreed AMC billing dates via verified business UPI or bank transfer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#0A0F1D] font-bold">7. Governing Law</h2>
            <p>
              These Terms & Conditions are governed by and construed in accordance with the laws of India. Any legal proceedings arising hereunder shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
