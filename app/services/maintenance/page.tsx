"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, XCircle, MessageCircle, Phone } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { useQuoteModal } from "@/components/context/QuoteModalContext";

export default function MaintenanceServicePage() {
  const { openQuoteModal } = useQuoteModal();
  const service = SERVICES.find((s) => s.slug === "maintenance")!;

  return (
    <div className="bg-[#FFFFFF] text-[#0A0F1D] py-16 sm:py-24 w-full">
      <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14 space-y-16">
        {/* Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
            CORE REVENUE SERVICE
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#0A0F1D] tracking-tight font-bold">
            Aquarium Maintenance & Deep Cleaning
          </h1>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl">
            Scheduled routine maintenance and intensive restoration services for residential and commercial aquariums across Bengaluru.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#F1F5F9] shadow-md">
          <Image
            src={service.image}
            alt="Aquarium maintenance in progress by professional technician"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 px-4 py-2 rounded-md bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E2E8F0] text-xs text-[#0070E0] font-mono font-bold shadow-xs">
            Starting from ₹799 / visit
          </div>
        </div>

        {/* Pricing Options Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#0070E0]">
              Standard Visit
            </span>
            <h3 className="text-2xl font-serif text-[#0A0F1D] font-bold">Routine Maintenance</h3>
            <div className="text-3xl font-bold text-[#0070E0]">from ₹799 <span className="text-xs text-[#64748B] font-normal">/ visit</span></div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Designed for healthy, running tanks. Partial water change, front/side glass scrub, mechanical filter rinse, and parameter checks.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#0070E0]">
              Comprehensive Restoration
            </span>
            <h3 className="text-2xl font-serif text-[#0A0F1D] font-bold">Deep Clean & Overhaul</h3>
            <div className="text-3xl font-bold text-[#0070E0]">from ₹1,499 <span className="text-xs text-[#64748B] font-normal">/ visit</span></div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              For neglected tanks with algae buildup, heavy substrate mulm, or clogged canister filters. Intensive detailing without crashing biological balance.
            </p>
          </div>
        </div>

        {/* Inclusions & Exclusions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#0A0F1D] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0070E0]" />
              Included in Standard Scope
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#475569]">
              {service.inclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#0070E0] mt-0.5 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#64748B] flex items-center gap-2">
              <XCircle className="w-4 h-4 text-[#64748B]" />
              Not Included Automatically
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#64748B]">
              {service.exclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#94A3B8] mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Conversion Action Bar */}
        <div className="p-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#0A0F1D] font-bold">
            Schedule Maintenance for Your Bengaluru Aquarium
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] max-w-md mx-auto">
            Book a one-off visit or explore recurring monthly AMCs. Zero online payment required.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal(service.title)}
              className="px-7 py-3.5 rounded-md bg-[#0070E0] hover:bg-[#0088FF] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
            >
              Request a Service Quote
            </button>

            <a
              href={getWhatsAppUrl(`Hi Creators Aquarium, I would like to book a maintenance quote for my tank in Bengaluru.`)}
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

          <div className="text-[11px] text-[#64748B] pt-2">
            Starting from. Final pricing depends on tank size, condition and service scope.
          </div>
        </div>
      </div>
    </div>
  );
}
