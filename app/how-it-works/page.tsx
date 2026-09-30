"use client";

import React from "react";
import Link from "next/link";
import {
  MessageSquare,
  Search,
  Wrench,
  FileCheck2,
  CalendarCheck,
  ArrowRight,
  ShieldAlert,
  Droplets,
  Gauge,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { ServiceReportCard } from "@/components/ui/ServiceReportCard";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { getWhatsAppUrl } from "@/lib/constants";

export default function HowItWorksPage() {
  const { openQuoteModal } = useQuoteModal();

  const steps = [
    {
      step: "01",
      title: "Tell Us About Your Aquarium",
      desc: "Share your tank size, location in Bengaluru, current condition (photos via WhatsApp are very helpful), and what you need assistance with.",
      icon: MessageSquare,
      details: [
        "Approximate dimensions or volume in litres",
        "Ecosystem type: Freshwater, Planted, or Marine Fish-Only",
        "Known challenges: algae, water clarity, or equipment noise",
      ],
    },
    {
      step: "02",
      title: "Assessment Before Touching the Tank",
      desc: "We diagnose the aquarium's current state before starting any work. Understanding the biological balance prevents osmotic shock and livestock stress.",
      icon: Search,
      details: [
        "Baseline water testing (temperature, pH, TDS)",
        "Filtration flow & biological media evaluation",
        "Clear upfront quotation confirmed before work begins",
      ],
    },
    {
      step: "03",
      title: "Disciplined Technical Service",
      desc: "Our technician arrives with professional-grade aquascaping and water handling equipment to perform controlled maintenance.",
      icon: Wrench,
      details: [
        "Controlled partial water change (never a 100% destructive dump)",
        "Surgical glass cleaning & algae eradication",
        "Substrate siphon, impeller wash & CO2/skimmer tune-up",
      ],
    },
    {
      step: "04",
      title: "Digital Service Report Delivered",
      desc: "You receive documented proof right on your WhatsApp: exact water chemistry metrics, completed maintenance checklist, and notes for ongoing care.",
      icon: FileCheck2,
      details: [
        "Tested parameters vs optimal target ranges",
        "Hardware safety audit checkmarks",
        "Historical maintenance log for your tank records",
      ],
    },
    {
      step: "05",
      title: "Predictable Ongoing Care",
      desc: "Choose between single on-demand visits or flexible monthly AMCs to keep your aquarium thriving without personal hassle.",
      icon: CalendarCheck,
      details: [
        "Flexible bi-weekly or monthly AMC plans",
        "Zero long-term lock-in contracts",
        "Priority scheduling for recurring care clients",
      ],
    },
  ];

  return (
    <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101310] border border-[#242824] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
            STANDARDIZED PROCEDURE
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight">
            How Creators Aquarium Works
          </h1>
          <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed">
            Beautiful aquariums are maintained through disciplined process, not guesswork. Here is the 5-step Standard Operating Procedure our technicians follow across Bengaluru.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="space-y-8 mb-24">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg bg-[#101310] border border-[#242824] hover:border-[#8BCF32]/50 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Step Number & Title */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-bold text-[#8BCF32]">
                      {s.step}
                    </span>
                    <div className="w-8 h-8 rounded bg-[#151915] border border-[#242824] flex items-center justify-center text-[#8BCF32]">
                      <s.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h2 className="text-xl font-serif text-[#F4F4EF]">
                    {s.title}
                  </h2>
                </div>

                {/* Description & Key Details */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm text-[#A3A69F] leading-relaxed">
                    {s.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#242824]">
                    {s.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#70756D]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#8BCF32] flex-shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Sample Service Report Showcase */}
        <div className="border-t border-[#242824] pt-20 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
              TANGIBLE ACCOUNTABILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF] mt-1">
              Sample Service Report
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] mt-2">
              Every standard and recurring service visit culminates in an itemized parameter log. Below is an example of what you receive on your phone.
            </p>
          </div>

          <ServiceReportCard />
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-lg bg-[#0A0C0A] border border-[#242824] p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF]">
            Experience professional aquarium care in Bengaluru
          </h2>
          <p className="text-xs sm:text-sm text-[#A3A69F] max-w-lg mx-auto">
            Book a one-time maintenance overhaul or discuss a tailored monthly plan. Upfront quotation with zero online payment required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="px-6 py-3 rounded bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Request a Service Quote
            </button>
            <a
              href={getWhatsAppUrl("Hi Creators Aquarium, I read your 5-step SOP and would like to get a quote for my tank.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded bg-[#101310] border border-[#242824] text-xs font-semibold uppercase tracking-wider text-[#F4F4EF] hover:border-[#8BCF32]/50 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
