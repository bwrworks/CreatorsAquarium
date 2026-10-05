"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { TANK_SIZES, TankSizeOption } from "@/lib/data/setup";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { getWhatsAppUrl } from "@/lib/constants";

export function TankSizeSelector() {
  const [selectedSizeId, setSelectedSizeId] = useState<string>("3ft");
  const { openQuoteModal } = useQuoteModal();

  const currentSize: TankSizeOption =
    TANK_SIZES.find((s) => s.id === selectedSizeId) || TANK_SIZES[2];

  const whatsappMessage = `Hi Creators Aquarium, I would like to discuss a custom ${currentSize.size} (${currentSize.label}) aquarium setup in Bengaluru.`;

  return (
    <div className="space-y-8">
      {/* Selector Tabs Strip */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl bg-[#0A0C0A] border border-[#242824] max-w-4xl mx-auto shadow-inner">
        {TANK_SIZES.map((s) => {
          const isSelected = s.id === selectedSizeId;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelectedSizeId(s.id)}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-[#8BCF32] text-[#050505] shadow-[0_2px_12px_rgba(139,207,50,0.25)] font-extrabold"
                  : "text-[#A3A69F] hover:text-[#F4F4EF] hover:bg-[#151915]"
              }`}
            >
              {s.size}
            </button>
          );
        })}
      </div>

      {/* Selected Size Card */}
      <div className="rounded-2xl bg-[#0A0C0A] border border-[#242824] p-6 sm:p-10 shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(139,207,50,0.08)_0%,transparent_70%)] blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Details */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-md bg-[#101310] border border-[#242824] text-[11px] font-mono font-bold text-[#8BCF32] uppercase">
                {currentSize.size} DISPLAY
              </span>
              <span className="text-xs text-[#70756D] font-medium">
                {currentSize.label}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF] font-bold">
              {currentSize.label} Configuration
            </h3>

            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-[#70756D]">
                Typical Environment
              </span>
              <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                {currentSize.typicalUse}
              </p>
            </div>

            <div className="space-y-1.5 pt-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-[#70756D]">
                Compatible Setup Types
              </span>
              <div className="flex flex-wrap gap-2">
                {currentSize.suitableTypes.map((type) => (
                  <span
                    key={type}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#151915] border border-[#242824] text-xs text-[#F4F4EF] font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8BCF32]" />
                    <span>{type}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-1 pt-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-[#70756D]">
                Example Engineering Scope
              </span>
              <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                {currentSize.exampleConfig}
              </p>
            </div>
          </div>

          {/* Right Action Column */}
          <div className="lg:col-span-4 rounded-xl bg-[#101310] border border-[#242824] p-6 text-center space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-[#8BCF32] block">
                Turnkey Pricing
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#F4F4EF] block">
                Custom Quote
              </span>
              <p className="text-[11px] text-[#70756D] leading-tight">
                Itemized proposal based on your room dimensions, preferred cabinet finish, and livestock specifications.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={() =>
                  openQuoteModal("NEW SETUP", currentSize.size)
                }
                className="w-full py-3.5 px-4 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] active:bg-[#638F24] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[0_2px_12px_rgba(139,207,50,0.2)]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-md bg-[#0A0C0A] hover:bg-[#151915] border border-[#242824] hover:border-[#8BCF32]/60 text-xs font-bold uppercase tracking-wider text-[#F4F4EF] flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#8BCF32]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
