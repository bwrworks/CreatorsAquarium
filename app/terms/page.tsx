import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { BASE_URL, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Service Terms & Conditions",
  description: "Terms and conditions of service for Creators Aquarium in Bengaluru.",
  alternates: {
    canonical: `${BASE_URL}/terms`,
  },
};

export default function TermsPage() {
  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Terms & Conditions", url: "/terms" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24 w-full">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#8BCF32] hover:text-[#B4E35A] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101310] border border-[#242824] text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
            SERVICE AGREEMENT
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#F4F4EF] font-bold">
            Terms & Conditions of Service
          </h1>
          <p className="text-xs text-[#70756D]">
            Effective Date: 2026 · Bengaluru, Karnataka
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-[#A3A69F] leading-relaxed border-t border-[#242824] pt-8">
          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#F4F4EF] font-bold">1. Scope of Service</h2>
            <p>
              Creators Aquarium provides specialized on-site aquarium maintenance, water parameter testing, aquascaping care, equipment checks, turnkey setup, and relocation logistics within Bengaluru. All services are performed according to documented Standard Operating Procedures (SOPs).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#F4F4EF] font-bold">2. Quotations & Scope Confirmation</h2>
            <p>
              Initial estimates provided via WhatsApp or telephone are based on client-submitted photographs, stated dimensions, and described conditions. If an on-site physical inspection reveals significant undisclosed challenges—such as compromised glass seams, hazardous electrical wiring, severe cyanobacteria infestation, or non-functional pumps—our technician will confirm an adjusted quotation prior to initiating work.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#F4F4EF] font-bold">3. Livestock & Biological Health</h2>
            <p>
              We exercise strict biological care during water exchanges, siphon procedures, and equipment servicing. However, aquariums represent complex, dynamic biological ecosystems. Creators Aquarium does not provide veterinary medical services. We cannot guarantee the survival of aquatic livestock that are suffering from pre-existing parasitic infections, dropsy, or advanced physical trauma prior to our visit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#F4F4EF] font-bold">4. Ornamental Standards & Livestock Policy</h2>
            <p>
              Creators Aquarium complies with applicable regulations and ornamental trade guidelines. We do not source, trade, or service protected reef coral or regulated wildlife. Our marine services are restricted to fish-only saltwater systems utilizing legally compliant livestock and natural or macro rock hardscapes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#F4F4EF] font-bold">5. On-Site Prerequisites</h2>
            <p>
              To enable safe service execution, clients agree to provide:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#70756D]">
              <li>Unobstructed physical access to the aquarium, cabinet, and filtration hardware.</li>
              <li>Functional domestic tap water connection and operational drainage.</li>
              <li>A safe, grounded electrical power outlet near the aquarium.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#F4F4EF] font-bold">6. Payment & Billing</h2>
            <p>
              Phase 1 of our website does not process online payments, deposits, or card transactions. Invoices are settled post-service or on agreed care plan billing dates via verified business UPI or bank transfer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#F4F4EF] font-bold">7. Governing Law</h2>
            <p>
              These Terms & Conditions are governed by and construed in accordance with the laws of India. Any legal proceedings arising hereunder shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka.
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
