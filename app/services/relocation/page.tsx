"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, XCircle, MessageCircle, Phone, ArrowRight, Truck, ShieldCheck, HeartHandshake } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { useQuoteModal } from "@/components/context/QuoteModalContext";

export default function RelocationServicePage() {
  const { openQuoteModal } = useQuoteModal();
  const service = SERVICES.find((s) => s.slug === "relocation")!;

  return (
    <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101310] border border-[#242824] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
            HIGH-TRUST LOGISTICS
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight">
            Aquarium Relocation & Safe Shifting
          </h1>
          <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed max-w-2xl">
            Controlled aquarium moving across Bengaluru. Aerated livestock transfer, biological filter preservation, safe glass packaging, and rapid re-commissioning at your new address.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-[#242824] bg-[#101310]">
          <Image
            src={service.image}
            alt="Aquarium relocation equipment and aerated livestock units"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded bg-[#050505]/85 backdrop-blur-md border border-[#242824] text-xs text-[#8BCF32] font-mono">
            Relocation from ₹1,999
          </div>
        </div>

        {/* 3 Relocation Safety Protocols */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-3">
            <HeartHandshake className="w-5 h-5 text-[#8BCF32]" />
            <h3 className="text-base font-serif text-[#F4F4EF]">Zero-Stress Fish Transit</h3>
            <p className="text-xs text-[#A3A69F] leading-relaxed">
              Livestock transferred into insulated, battery-aerated temperature-buffered transport units to prevent hypoxia and thermal shock.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-3">
            <ShieldCheck className="w-5 h-5 text-[#8BCF32]" />
            <h3 className="text-base font-serif text-[#F4F4EF]">Bio-Media Preservation</h3>
            <p className="text-xs text-[#A3A69F] leading-relaxed">
              Canister sponges and sintered glass bio-rings are sealed submerged in mature tank water so beneficial bacteria colonies stay alive.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-3">
            <Truck className="w-5 h-5 text-[#8BCF32]" />
            <h3 className="text-base font-serif text-[#F4F4EF]">Padded Glass Transit</h3>
            <p className="text-xs text-[#A3A69F] leading-relaxed">
              Tanks drained with high-volume siphon, substrate stabilized, and glass wrapped in heavy furniture-grade transit blankets.
            </p>
          </div>
        </div>

        {/* Inclusions & Exclusions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#F4F4EF] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#8BCF32]" />
              Included in Relocation Scope
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
              Not Included Automatically
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
            Planning to Move Your Aquarium in Bengaluru?
          </h2>
          <p className="text-xs sm:text-sm text-[#A3A69F] max-w-md mx-auto">
            Share current and destination localities, tank dimensions, and preferred shifting date for an itemized logistics quote.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal("AQUARIUM RELOCATION")}
              className="px-6 py-3 rounded bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Request Relocation Quote
            </button>

            <a
              href={getWhatsAppUrl("Hi Creators Aquarium, I need an aquarium relocation quote in Bengaluru.")}
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
