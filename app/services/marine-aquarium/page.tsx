"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, XCircle, MessageCircle, Phone, ArrowRight, ShieldAlert, Waves, Gauge, Droplets } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { useQuoteModal } from "@/components/context/QuoteModalContext";

export default function MarineAquariumPage() {
  const { openQuoteModal } = useQuoteModal();
  const service = SERVICES.find((s) => s.slug === "marine-aquarium")!;

  return (
    <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101310] border border-[#242824] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
            SALTWATER SPECIALIZATION
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight">
            Marine Fish-Only Aquarium Care
          </h1>
          <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed max-w-2xl">
            Strict water chemistry discipline, optical refractometer salinity calibration, protein skimmer overhaul, and sump hygiene for saltwater fish-only ecosystems across Bengaluru.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-[#242824] bg-[#101310]">
          <Image
            src={service.image}
            alt="Marine fish-only saltwater aquarium in executive setting"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded bg-[#050505]/85 backdrop-blur-md border border-[#242824] text-xs text-[#8BCF32] font-mono">
            Starting from ₹2,499 / visit
          </div>
        </div>

        {/* Critical Wildlife Act Compliance Notice */}
        <div className="p-6 rounded-lg bg-[#0A0C0A] border border-[#8BCF32]/40 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8BCF32]">
            <ShieldAlert className="w-4 h-4 text-[#8BCF32]" />
            <span>Strict Wildlife Act & Coral-Free Compliance</span>
          </div>
          <p className="text-xs text-[#A3A69F] leading-relaxed">
            In compliance with India&apos;s Wildlife (Protection) Act schedules and national fisheries regulations prohibiting coral trade and exploitation, Creators Aquarium does not market, sell, frag, or propagate live corals. Our marine services are dedicated strictly to <strong>fish-only saltwater systems</strong> using legally sourced marine fish and natural/macro hardscaping.
          </p>
        </div>

        {/* Marine Care Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-3">
            <Gauge className="w-5 h-5 text-[#8BCF32]" />
            <h3 className="text-base font-serif text-[#F4F4EF]">Salinity Calibration</h3>
            <p className="text-xs text-[#A3A69F] leading-relaxed">
              Precision salinity checks using optical refractometers. Controlled top-offs to counter evaporation salinity swings.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-3">
            <Waves className="w-5 h-5 text-[#8BCF32]" />
            <h3 className="text-base font-serif text-[#F4F4EF]">Skimmer & Sump Hygiene</h3>
            <p className="text-xs text-[#A3A69F] leading-relaxed">
              Protein skimmer collection cup wash, neck scrubbing, venturi air valve unclogging, and sump detritus siphoning.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-3">
            <Droplets className="w-5 h-5 text-[#8BCF32]" />
            <h3 className="text-base font-serif text-[#F4F4EF]">Synthetic Saltwater Matching</h3>
            <p className="text-xs text-[#A3A69F] leading-relaxed">
              RO/DI purified water mixed with premium marine salt salts, pre-aerated and temperature-matched prior to water changes.
            </p>
          </div>
        </div>

        {/* Inclusions & Exclusions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#F4F4EF] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#8BCF32]" />
              Included in Marine Scope
            </h3>
            <ul className="space-y-2.5 text-xs text-[#A3A69F]">
              {service.inclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#8BCF32] mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#F4F4EF] flex items-center gap-2">
              <XCircle className="w-4 h-4 text-[#70756D]" />
              Strictly Excluded
            </h3>
            <ul className="space-y-2.5 text-xs text-[#70756D]">
              {service.exclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#70756D] mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTAs */}
        <div className="p-8 rounded-lg bg-[#0A0C0A] border border-[#242824] text-center space-y-6">
          <h2 className="text-2xl font-serif text-[#F4F4EF]">
            Maintain Your Marine System with Confidence
          </h2>
          <p className="text-xs sm:text-sm text-[#A3A69F] max-w-md mx-auto">
            Book an individual marine inspection visit (from ₹2,499) or our bi-weekly Marine Care AMC (₹3,999/mo).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal("MARINE FISH-ONLY CARE", "Marine")}
              className="px-6 py-3 rounded bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Book Marine Care
            </button>

            <a
              href={getWhatsAppUrl("Hi Creators Aquarium, I'd like to book marine fish-only maintenance in Bengaluru.")}
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

          <div className="text-[11px] text-[#70756D] pt-2">
            Starting from. Final pricing depends on tank size, condition and service scope.
          </div>
        </div>
      </div>
    </div>
  );
}
