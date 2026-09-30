"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { MAINTENANCE_PLANS, PRICING_PHILOSOPHY } from "@/lib/data/plans";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { useQuoteModal } from "@/components/context/QuoteModalContext";

export default function MaintenancePlansPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101310] border border-[#242824] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
            RECURRING CARE CONTRACTS
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight">
            Monthly Aquarium Maintenance Plans
          </h1>
          <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed">
            Predictable, scheduled aquatic care tailored for Bengaluru homes, offices, and commercial establishments. No forced lock-ins, no online payments—just disciplined care.
          </p>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MAINTENANCE_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-lg bg-[#101310] border p-6 flex flex-col justify-between ${
                plan.isPopular
                  ? "border-[#8BCF32] shadow-[0_0_30px_rgba(139,207,50,0.12)]"
                  : "border-[#242824]"
              }`}
            >
              <div className="space-y-4">
                {plan.isPopular && (
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[#8BCF32] text-[#050505] text-[10px] font-semibold uppercase tracking-wider">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-serif text-[#F4F4EF]">
                    {plan.name}
                  </h3>
                  <p className="text-[11px] text-[#70756D] mt-0.5">
                    {plan.cadence}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#242824]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-semibold text-[#8BCF32]">
                      {plan.priceMonthly}
                    </span>
                    <span className="text-xs text-[#70756D]">/ month</span>
                  </div>
                  <span className="block text-[10px] text-[#70756D] mt-1">
                    {plan.targetTank}
                  </span>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-[#242824] text-xs text-[#A3A69F]">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8BCF32] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 space-y-3">
                <button
                  type="button"
                  onClick={() => openQuoteModal(`AMC Plan: ${plan.name}`)}
                  className={`w-full py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                    plan.isPopular
                      ? "bg-[#8BCF32] text-[#050505] hover:bg-[#B4E35A]"
                      : "bg-[#151915] text-[#F4F4EF] hover:bg-[#242824] border border-[#242824]"
                  }`}
                >
                  Request Plan
                </button>
                <span className="block text-center text-[10px] text-[#70756D]">
                  Starting from · Quote confirmed before start
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Starting Price Note */}
        <div className="p-4 rounded-lg bg-[#0A0C0A] border border-[#242824] text-center text-xs text-[#70756D]">
          Starting from. Final pricing depends on tank size, condition and service scope. Custom quotes issued for systems above 4 ft or complex sump designs.
        </div>

        {/* Custom Commercial displays */}
        <div className="p-8 rounded-lg bg-[#101310] border border-[#8BCF32]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#8BCF32]">
              COMMERCIAL & CUSTOM DISPLAYS
            </span>
            <h3 className="text-xl font-serif text-[#F4F4EF]">
              Need something more complex? Request a custom SLA.
            </h3>
            <p className="text-xs text-[#A3A69F] leading-relaxed">
              We manage oversized aquariums in corporate headquarters, hotel receptions, and retail flagship stores with dedicated emergency response and flexible visiting cadences.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openQuoteModal("Commercial Custom AMC Plan")}
            className="px-6 py-3 rounded bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex-shrink-0"
          >
            Request Custom Quote
          </button>
        </div>

        {/* Pricing Philosophy Section */}
        <div className="space-y-8 pt-8 border-t border-[#242824]">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
              TRANSPARENCY FIRST
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF] mt-1">
              Our &ldquo;No Hidden Surprises&rdquo; Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_PHILOSOPHY.map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#8BCF32]" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F4F4EF]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A3A69F] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="p-8 rounded-lg bg-[#0A0C0A] border border-[#242824] text-center space-y-6">
          <h2 className="text-2xl font-serif text-[#F4F4EF]">
            Discuss the Right AMC Tier for Your Aquarium
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal("Monthly AMC Consultation")}
              className="px-6 py-3 rounded bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Request Plan Consultation
            </button>

            <a
              href={getWhatsAppUrl("Hi Creators Aquarium, I'd like to discuss a monthly AMC plan for my tank.")}
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
