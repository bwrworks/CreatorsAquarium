"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { BRAND } from "@/lib/constants";

export default function ServicesPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="bg-[#FFFFFF] text-[#0A0F1D] py-16 sm:py-24 w-full">
      <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="max-w-4xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
            SPECIALIZED CARE
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#0A0F1D] tracking-tight font-bold">
            Aquarium Care Services
          </h1>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Everything needed to keep freshwater, planted, and marine fish-only systems biologically stable, visually crystal-clear, and safe for your livestock across Bengaluru.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-10">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="p-6 sm:p-8 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#0070E0] shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Large Image */}
                <div className="lg:col-span-5 relative aspect-[16/10] rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#F1F5F9]">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#E2E8F0] text-[10px] uppercase font-bold text-[#0070E0] shadow-xs">
                    {svc.category}
                  </div>
                </div>

                {/* Details & Scope */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#64748B] font-semibold">
                      {svc.tagline}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-serif text-[#0A0F1D] mt-0.5 font-bold">
                      {svc.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {svc.fullDescription}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#0A0F1D] block mb-2">
                      Key Inclusions:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#475569]">
                      {svc.inclusions.slice(0, 4).map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0070E0] flex-shrink-0 mt-0.5" />
                          <span className="text-[#475569] font-medium">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Action Strip */}
                  <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="block text-[10px] text-[#64748B] uppercase tracking-wider font-semibold">
                        Starting from
                      </span>
                      <span className="text-lg font-bold text-[#0070E0]">
                        {svc.startingPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="px-5 py-2.5 rounded-md bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#CBD5E1] text-xs font-bold uppercase tracking-wider text-[#0A0F1D] transition-colors"
                      >
                        View Full Details
                      </Link>

                      <button
                        type="button"
                        onClick={() => openQuoteModal(svc.title)}
                        className="px-5 py-2.5 rounded-md bg-[#0070E0] hover:bg-[#0088FF] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
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
        <div className="mt-16 p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center text-xs text-[#64748B]">
          Starting from prices represent standard baseline scopes. Final quote is determined by tank volume, accessibility, and current biological condition. Call: <strong className="text-[#0A0F1D]">{BRAND.phoneDisplay}</strong>
        </div>
      </div>
    </div>
  );
}
