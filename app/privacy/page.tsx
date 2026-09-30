import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Notice (DPDP Rules 2025)",
  description: "Privacy policy for Creators Aquarium in compliance with India's Digital Personal Data Protection Rules 2025.",
};

export default function PrivacyPage() {
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
            LEGAL COMPLIANCE
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#0A0F1D] font-bold">
            Privacy Notice
          </h1>
          <p className="text-xs text-[#64748B]">
            Last Updated: 29 September 2026 · Compliant with Digital Personal Data Protection (DPDP) Rules 2025
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0] pt-8">
          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#0A0F1D] font-bold">1. Introduction & Overview</h2>
            <p>
              Creators Aquarium (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), operating in Bengaluru, Karnataka, India, respects your privacy and is committed to processing your personal data lawfully and transparently. This Privacy Notice outlines our practices regarding data collection through our website (<strong className="text-[#0A0F1D]">creatorsaquarium.com</strong>) in alignment with India&apos;s Digital Personal Data Protection (DPDP) Rules 2025.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#0A0F1D] font-bold">2. Data We Collect</h2>
            <p>
              We collect only the minimum personal data strictly necessary to fulfill your aquarium service inquiries:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#64748B]">
              <li><strong>Contact Information:</strong> Your name, WhatsApp/mobile telephone number, and optional email address.</li>
              <li><strong>Service & Geographic Data:</strong> Your Bengaluru locality/neighborhood, aquarium type, approximate dimensions, and service requirements.</li>
              <li><strong>Optional Imagery:</strong> Photographs or videos of your aquarium that you voluntarily upload or share via WhatsApp to assist in quotation.</li>
            </ul>
            <p className="text-[#0070E0] font-semibold">
              We do not collect financial data, credit card numbers, or online payment details through this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#0A0F1D] font-bold">3. Purpose of Processing</h2>
            <p>We process your personal data solely for the following specified purposes:</p>
            <ul className="list-disc pl-5 space-y-1 text-[#64748B]">
              <li>Evaluating your aquarium requirements and formulating an upfront service quotation.</li>
              <li>Contacting you via phone or WhatsApp to coordinate technician schedules and dispatch.</li>
              <li>Delivering your post-visit digital Service Report and water parameter summary.</li>
              <li>Managing recurring AMC maintenance schedules if contracted.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#0A0F1D] font-bold">4. Data Sharing & Third Parties</h2>
            <p>
              We never sell, rent, or trade your personal information to third-party advertisers. Your information is accessed exclusively by authorized Creators Aquarium technicians and operational dispatchers for service fulfillment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#0A0F1D] font-bold">5. Data Retention & Security</h2>
            <p>
              Inquiry records are retained only for as long as necessary to maintain your service relationship and aquarium historical logs. We apply technical encryption and access restrictions to protect submitted data against unauthorized access.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#0A0F1D] font-bold">6. Your Rights & Grievance Officer</h2>
            <p>
              Under the DPDP Rules 2025, you have the right to access, rectify, or request the erasure of your personal data stored with us. To exercise any of these rights, contact our Data Grievance Desk at:
            </p>
            <div className="p-5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs space-y-1">
              <span className="block font-bold text-[#0A0F1D]">Grievance Officer: Creators Aquarium Operations</span>
              <span className="block text-[#475569]">Email: privacy@creatorsaquarium.com</span>
              <span className="block text-[#475569]">Location: Bengaluru, Karnataka, India</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
