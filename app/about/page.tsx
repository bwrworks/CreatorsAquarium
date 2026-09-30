"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Droplets, Wrench, FileCheck, CheckCircle2, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { useQuoteModal } from "@/components/context/QuoteModalContext";

export default function AboutPage() {
  const { openQuoteModal } = useQuoteModal();

  const standards = [
    {
      title: "Biological Balance Over Brute Force",
      desc: "We never perform 100% destructive tank flushes. Partial, conditioned water changes safeguard beneficial bacteria and keep livestock calm.",
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
      desc: "We adhere strictly to India's Wildlife (Protection) Act. We never market or sell live corals; marine systems are exclusively fish-only with legal livestock.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101310] border border-[#242824] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
            OUR STANDARDS
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight">
            About Creators Aquarium
          </h1>
          <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed max-w-2xl">
            Born from a desire to bring disciplined technical competence, transparent pricing, and high-end botanical aquascaping to Bengaluru homes and businesses.
          </p>
        </div>

        {/* Brand Mission Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-serif text-[#F4F4EF]">
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

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#242824] bg-[#101310]">
            <Image
              src="/images/service-maintenance.jpg"
              alt="Creators Aquarium technician meticulously maintaining a nature aquascape"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="space-y-8 pt-8 border-t border-[#242824]">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
              OPERATIONAL INTEGRITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF] mt-1">
              How We Protect Your Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {standards.map((s, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-3">
                <s.icon className="w-6 h-6 text-[#8BCF32]" />
                <h3 className="text-base font-serif text-[#F4F4EF]">
                  {s.title}
                </h3>
                <p className="text-xs text-[#A3A69F] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-lg bg-[#0A0C0A] border border-[#242824] text-center space-y-6">
          <h2 className="text-2xl font-serif text-[#F4F4EF]">
            Experience the Creators Difference
          </h2>
          <p className="text-xs sm:text-sm text-[#A3A69F] max-w-md mx-auto">
            Get in touch with our team for a personalized assessment of your aquarium.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal("About Page Consultation")}
              className="px-6 py-3 rounded bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Request a Service Quote
            </button>

            <a
              href={getWhatsAppUrl("Hi Creators Aquarium, I'd like to learn more about your aquarium maintenance services in Bengaluru.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded bg-[#101310] border border-[#242824] hover:border-[#8BCF32]/50 text-xs font-semibold uppercase tracking-wider text-[#F4F4EF] flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#8BCF32]" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
              className="px-6 py-3 rounded bg-[#101310] border border-[#242824] hover:border-[#70756D] text-xs font-semibold uppercase tracking-wider text-[#A3A69F] hover:text-[#F4F4EF] flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
