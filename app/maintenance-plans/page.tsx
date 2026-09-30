"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { MAINTENANCE_PLANS, PRICING_PHILOSOPHY } from "@/lib/data/plans";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { useQuoteModal } from "@/components/context/QuoteModalContext";

export default function MaintenancePlansPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="bg-[#FFFFFF] text-[#0A0F1D] py-16 sm:py-24 w-full">
      <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14 space-y-16">
        {/* Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
            RECURRING CARE CONTRACTS
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#0A0F1D] tracking-tight font-bold">
            Monthly Aquarium Maintenance Plans
          </h1>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Predictable, scheduled aquatic care tailored for Bengaluru homes, offices, and commercial establishments. No forced lock-ins, no online payments—just disciplined care.
          </p>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MAINTENANCE_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl bg-[#FFFFFF] border p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all ${
                plan.isPopular
                  ? "border-[#0070E0] ring-2 ring-[#0070E0]/20"
                  : "border-[#E2E8F0]"
              }`}
            >
              <div className="space-y-4">
                {plan.isPopular && (
                  <span className="inline-block px-3 py-1 rounded-md bg-[#0070E0] text-[#FFFFFF] text-[10px] font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-serif text-[#0A0F1D] font-bold">
                    {plan.name}
                  </h3>
                  <p className="text-[11px] text-[#64748B] mt-0.5 font-medium">
                    {plan.cadence}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E2E8F0]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#0070E0]">
                      {plan.priceMonthly}
                    </span>
                    <span className="text-xs text-[#64748B]">/ month</span>
                  </div>
                  <span className="block text-[10px] text-[#64748B] mt-1">
                    {plan.targetTank}
                  </span>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-[#E2E8F0] text-xs text-[#475569]">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0070E0] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 space-y-3">
                <button
                  type="button"
                  onClick={() => openQuoteModal(`AMC Plan: ${plan.name}`)}
                  className={`w-full py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    plan.isPopular
                      ? "bg-[#0070E0] text-[#FFFFFF] hover:bg-[#0088FF]"
                      : "bg-[#F1F5F9] text-[#0A0F1D] hover:bg-[#E2E8F0] border border-[#CBD5E1]"
                  }`}
                >
                  Request Plan
                </button>
                <span className="block text-center text-[10px] text-[#64748B]">
                  Starting from · Quote confirmed before start
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Starting Price Note */}
        <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center text-xs text-[#64748B]">
          Starting from. Final pricing depends on tank size, condition and service scope. Custom quotes issued for systems above 4 ft or complex sump designs. Call: <strong className="text-[#0A0F1D]">{BRAND.phoneDisplay}</strong>
        </div>

        {/* Custom Commercial displays */}
        <div className="p-8 sm:p-10 rounded-xl bg-[#0070E0] text-[#FFFFFF] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#BAE6FD]">
              COMMERCIAL & CUSTOM DISPLAYS
            </span>
            <h3 className="text-2xl font-serif text-[#FFFFFF] font-bold">
              Need something more complex? Request a custom SLA.
            </h3>
            <p className="text-xs sm:text-sm text-[#E0F2FE] leading-relaxed">
              We manage oversized aquariums in corporate headquarters, hotel receptions, and retail flagship stores with dedicated emergency response and flexible visiting cadences.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openQuoteModal("Commercial Custom AMC Plan")}
            className="px-7 py-3.5 rounded-md bg-[#FFFFFF] text-[#0070E0] hover:bg-[#F8FAFC] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex-shrink-0 shadow-sm"
          >
            Request Custom Quote
          </button>
        </div>

        {/* Pricing Philosophy Section */}
        <div className="space-y-8 pt-8 border-t border-[#E2E8F0]">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
              TRANSPARENCY FIRST
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#0A0F1D] mt-1 font-bold">
              Our &ldquo;No Hidden Surprises&rdquo; Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRICING_PHILOSOPHY.map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#0070E0]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A0F1D]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="p-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#0A0F1D] font-bold">
            Discuss the Right AMC Tier for Your Aquarium
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal("Monthly AMC Consultation")}
              className="px-7 py-3.5 rounded-md bg-[#0070E0] hover:bg-[#0088FF] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
            >
              Request Plan Consultation
            </button>

            <a
              href={getWhatsAppUrl("Hi Creators Aquarium, I'd like to discuss a monthly AMC plan for my tank.")}
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
