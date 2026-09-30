"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, XCircle, MessageCircle, Phone, ArrowRight, Wrench, ShieldCheck, Compass } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { useQuoteModal } from "@/components/context/QuoteModalContext";

export default function SetupServicePage() {
  const { openQuoteModal } = useQuoteModal();
  const service = SERVICES.find((s) => s.slug === "setup")!;

  return (
    <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101310] border border-[#242824] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
            TURNKEY INSTALLATION
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight">
            Aquarium Setup & Commissioning
          </h1>
          <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed max-w-2xl">
            Custom aquarium installation, precision plumbing, structural stand leveling, soil stratification, and initial biological commissioning across Bengaluru residences and offices.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-[#242824] bg-[#101310]">
          <Image
            src={service.image}
            alt="Custom aquarium installation with plumbing manifold"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded bg-[#050505]/85 backdrop-blur-md border border-[#242824] text-xs text-[#8BCF32] font-mono">
            Setup labour from ₹2,999
          </div>
        </div>

        {/* Pricing Tiers for Setup Labour */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-3">
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#A3A69F]">
              Freshwater Community
            </span>
            <h3 className="text-lg font-serif text-[#F4F4EF]">Freshwater Setup</h3>
            <div className="text-xl font-semibold text-[#8BCF32]">from ₹2,999 <span className="text-xs text-[#70756D] font-normal">labour</span></div>
            <p className="text-xs text-[#A3A69F] leading-relaxed">
              Cabinet leveling, filtration assembly, river gravel hardscaping, water conditioning, and biological seeding.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-3">
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#8BCF32]">
              Nature Aquascape
            </span>
            <h3 className="text-lg font-serif text-[#F4F4EF]">Planted Tank Setup</h3>
            <div className="text-xl font-semibold text-[#8BCF32]">from ₹6,999 <span className="text-xs text-[#70756D] font-normal">labour</span></div>
            <p className="text-xs text-[#A3A69F] leading-relaxed">
              Aquasoil grading, stone/wood hardscaping, in vitro plant tissue planting, CO2 regulator tuning, and lighting calibration.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-3">
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#B4E35A]">
              Saltwater Fish-Only
            </span>
            <h3 className="text-lg font-serif text-[#F4F4EF]">Marine Setup</h3>
            <div className="text-xl font-semibold text-[#B4E35A]">from ₹12,999 <span className="text-xs text-[#70756D] font-normal">labour</span></div>
            <p className="text-xs text-[#A3A69F] leading-relaxed">
              Sump plumbing, skimmer commissioning, optical salinity calibration, macro rock structure bonding, and cycle establishment.
            </p>
          </div>
        </div>

        {/* Inclusions & Exclusions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#F4F4EF] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#8BCF32]" />
              Installation Scope Included
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
              Not Included in Labour Fee
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
            Plan Your Aquarium Installation
          </h2>
          <p className="text-xs sm:text-sm text-[#A3A69F] max-w-md mx-auto">
            Discuss dimensions, aesthetic styles, and equipment options. We formulate a turnkey roadmap for your space.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal("AQUARIUM SETUP & INSTALLATION")}
              className="px-6 py-3 rounded bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Request Setup Consultation
            </button>

            <a
              href={getWhatsAppUrl("Hi Creators Aquarium, I'm planning a new aquarium setup in Bengaluru and would like consultation.")}
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
