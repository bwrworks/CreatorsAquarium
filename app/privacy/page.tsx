import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { BASE_URL, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Notice (DPDP Rules 2025)",
  description: "Privacy policy for Creators Aquarium in compliance with India's Digital Personal Data Protection Rules 2025.",
  alternates: {
    canonical: `${BASE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Privacy Notice", url: "/privacy" },
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
            LEGAL COMPLIANCE
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#F4F4EF] font-bold">
            Privacy Notice
          </h1>
          <p className="text-xs text-[#70756D]">
            Last Updated: 2026 · Compliant with Digital Personal Data Protection (DPDP) Rules 2025
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-[#A3A69F] leading-relaxed border-t border-[#242824] pt-8">
          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#F4F4EF] font-bold">1. Introduction & Overview</h2>
            <p>
              Creators Aquarium (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), operating in Bengaluru, Karnataka, India, respects your privacy and is committed to processing your personal data lawfully and transparently. This Privacy Notice outlines our practices regarding data collection through our website (<strong className="text-[#F4F4EF]">creatorsaquarium.com</strong>) in alignment with India&apos;s Digital Personal Data Protection (DPDP) Rules 2025.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#F4F4EF] font-bold">2. Data We Collect</h2>
            <p>
              We collect only the minimum personal data strictly necessary to fulfill your aquarium service inquiries:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#70756D]">
              <li><strong>Contact Information:</strong> Your name, WhatsApp/mobile telephone number, and optional email address.</li>
              <li><strong>Service & Geographic Data:</strong> Your Bengaluru locality/neighborhood, aquarium type, approximate dimensions, and service requirements.</li>
              <li><strong>Optional Imagery:</strong> Photographs or videos of your aquarium that you voluntarily upload or share via WhatsApp to assist in quotation.</li>
            </ul>
            <p className="text-[#8BCF32] font-semibold">
              We do not collect financial data, credit card numbers, or online payment details through this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#F4F4EF] font-bold">3. Purpose of Processing</h2>
            <p>We process your personal data solely for the following specified purposes:</p>
            <ul className="list-disc pl-5 space-y-1 text-[#70756D]">
              <li>Evaluating your aquarium requirements and formulating an upfront service quotation.</li>
              <li>Contacting you via phone or WhatsApp to coordinate technician schedules and dispatch.</li>
              <li>Delivering your post-visit digital Service Report and water parameter summary.</li>
              <li>Managing recurring maintenance schedules if contracted.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#F4F4EF] font-bold">4. Data Sharing & Third Parties</h2>
            <p>
              We never sell, rent, or trade your personal information to third-party advertisers. Your information is accessed exclusively by authorized Creators Aquarium technicians and operational dispatchers for service fulfillment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#F4F4EF] font-bold">5. Data Retention & Security</h2>
            <p>
              Inquiry records are retained only for as long as necessary to maintain your service relationship and aquarium historical logs. We apply technical safeguards and access restrictions to protect submitted data against unauthorized access.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-serif text-[#F4F4EF] font-bold">6. Your Rights & Grievance Officer</h2>
            <p>
              Under the DPDP Rules 2025, you have the right to access, rectify, or request the erasure of your personal data stored with us. To exercise any of these rights, contact our Data Grievance Desk at:
            </p>
            <div className="p-5 rounded-lg bg-[#0A0C0A] border border-[#242824] text-xs space-y-1">
              <span className="block font-bold text-[#F4F4EF]">Grievance Officer: Creators Aquarium Operations</span>
              <span className="block text-[#A3A69F]">Email: care@creatorsaquarium.com</span>
              <span className="block text-[#A3A69F]">Location: Bengaluru, Karnataka, India</span>
            </div>
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
