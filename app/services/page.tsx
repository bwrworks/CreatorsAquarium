"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { getWhatsAppUrl } from "@/lib/constants";

export default function ServicesPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101310] border border-[#242824] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
            SPECIALIZED CARE
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight">
            Aquarium Care Services
          </h1>
          <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed">
            Everything needed to keep freshwater, planted, and marine fish-only systems biologically stable, visually crystal-clear, and safe for your livestock across Bengaluru.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {SERVICES.map((svc, idx) => (
            <div
              key={svc.id}
              className="p-6 sm:p-8 rounded-lg bg-[#101310] border border-[#242824] hover:border-[#8BCF32]/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Large Image */}
                <div className="lg:col-span-5 relative aspect-[16/10] rounded-lg overflow-hidden border border-[#242824] bg-[#050505]">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#050505]/85 backdrop-blur-sm border border-[#242824] text-[10px] uppercase font-semibold text-[#8BCF32]">
                    {svc.category}
                  </div>
                </div>

                {/* Details & Scope */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#70756D]">
                      {svc.tagline}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-serif text-[#F4F4EF] mt-0.5">
                      {svc.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                    {svc.fullDescription}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] uppercase font-semibold tracking-wider text-[#A3A69F] block mb-2">
                      Key Inclusions:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#70756D]">
                      {svc.inclusions.slice(0, 4).map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8BCF32] flex-shrink-0 mt-0.5" />
                          <span className="text-[#A3A69F]">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Action Strip */}
                  <div className="pt-4 border-t border-[#242824] flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="block text-[10px] text-[#70756D] uppercase tracking-wider">
                        Starting from
                      </span>
                      <span className="text-base font-semibold text-[#8BCF32]">
                        {svc.startingPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="px-4 py-2 rounded bg-[#151915] hover:bg-[#242824] border border-[#242824] text-xs font-semibold uppercase tracking-wider text-[#F4F4EF] transition-colors"
                      >
                        View Full Details
                      </Link>

                      <button
                        type="button"
                        onClick={() => openQuoteModal(svc.title)}
                        className="px-4 py-2 rounded bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Quote Disclaimer */}
        <div className="mt-16 p-6 rounded-lg bg-[#0A0C0A] border border-[#242824] text-center text-xs text-[#70756D]">
          Starting from prices represent standard baseline scopes. Final quote is determined by tank volume, accessibility, and current biological condition. No payment is required online.
        </div>
      </div>
    </div>
  );
}
