"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Droplets, Wrench, FileCheck, MessageCircle, Phone } from "lucide-react";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { useQuoteModal } from "@/components/context/QuoteModalContext";

export default function AboutPage() {
  const { openQuoteModal } = useQuoteModal();

  const standards = [
    {
      title: "Biological Balance Over Brute Force",
      desc: "We never perform 100% destructive tank flushes. Partial, conditioned water changes safeguard beneficial nitrifiers and keep livestock calm.",
      icon: Droplets,
    },
    {
      title: "Documented Parameter Logs",
      desc: "Every maintenance visit tests key parameters (pH, TDS, temperature, nitrate). You receive a digital summary so you always know your tank's state.",
      icon: FileCheck,
    },
    {
      title: "Surgical Tool Hygiene",
      desc: "Our technicians use precision curved stainless-steel tools, felt scrubbers, and sterilized siphons to prevent glass scratches and cross-contamination.",
      icon: Wrench,
    },
    {
      title: "Strict Legal & Environmental Compliance",
      desc: "We adhere strictly to India's Wildlife (Protection) Act. We focus on ethical, legal livestock and pristine fish-only saltwater systems.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#0A0F1D] py-16 sm:py-24 w-full">
      <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14 space-y-20">
        {/* Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
            OUR STANDARDS
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#0A0F1D] tracking-tight font-bold">
            About Creators Aquarium
          </h1>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl">
            Born from a desire to bring disciplined technical competence, transparent pricing, and high-end botanical aquascaping to Bengaluru homes and businesses.
          </p>
        </div>

        {/* Brand Mission Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-xs sm:text-sm text-[#475569] leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0A0F1D] font-bold">
              &ldquo;Beautiful tanks are maintained, not wished into existence.&rdquo;
            </h2>
            <p>
              In Bengaluru, aquarium owners frequently encounter informal cleaners who scrub glass with abrasive sponges, dump 90% of the water, and crash the tank&apos;s nitrogen cycle—leaving fish stressed and plants melting.
            </p>
            <p>
              <strong>Creators Aquarium</strong> was established to change this paradigm. We treat aquariums as delicate living ecosystems requiring calibrated water chemistry, balanced lighting photoperiods, and horticultural pruning standards.
            </p>
            <p>
              From custom 5-foot rimless nature aquascapes in private penthouses to scheduled office display maintenance, our technicians follow strict SOPs and deliver documented accountability after every visit.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#F1F5F9] shadow-md">
            <Image
              src="/images/service-maintenance.jpg"
              alt="Creators Aquarium technician meticulously maintaining a nature aquascape"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover"
            />
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="space-y-8 pt-8 border-t border-[#E2E8F0]">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
              OPERATIONAL INTEGRITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#0A0F1D] mt-1 font-bold">
              How We Protect Your Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((s, idx) => (
              <div key={idx} className="p-7 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm space-y-3">
                <s.icon className="w-6 h-6 text-[#0070E0]" />
                <h3 className="text-base font-serif text-[#0A0F1D] font-bold">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#0A0F1D] font-bold">
            Experience the Creators Difference
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] max-w-md mx-auto">
            Get in touch with our team for a personalized assessment of your aquarium.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal("About Page Consultation")}
              className="px-7 py-3.5 rounded-md bg-[#0070E0] hover:bg-[#0088FF] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
            >
              Request a Service Quote
            </button>

            <a
              href={getWhatsAppUrl("Hi Creators Aquarium, I'd like to learn more about your aquarium maintenance services in Bengaluru.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] hover:border-[#0070E0] text-xs font-bold uppercase tracking-wider text-[#0A0F1D] flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#0070E0]" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
              className="px-6 py-3.5 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-[#0A0F1D] hover:text-[#0070E0] flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#0070E0]" />
              <span>Call: {BRAND.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
