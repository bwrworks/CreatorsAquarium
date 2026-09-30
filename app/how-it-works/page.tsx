"use client";

import React from "react";
import Link from "next/link";
import {
  MessageSquare,
  Search,
  Wrench,
  FileCheck2,
  CalendarCheck,
  CheckCircle,
} from "lucide-react";
import { ServiceReportCard } from "@/components/ui/ServiceReportCard";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { getWhatsAppUrl, BRAND } from "@/lib/constants";

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
    <div className="bg-[#FFFFFF] text-[#0A0F1D] py-16 sm:py-24 w-full">
      <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Page Header */}
        <div className="max-w-4xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
            STANDARDIZED PROCEDURE
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#0A0F1D] tracking-tight font-bold">
            How Creators Aquarium Works
          </h1>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Beautiful aquariums are maintained through disciplined process, not guesswork. Here is the 5-step Standard Operating Procedure our technicians follow across Bengaluru.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="space-y-6 mb-24">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0070E0] transition-colors shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Step Number & Title */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl font-extrabold text-[#0070E0]">
                      {s.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#0070E0]">
                      <s.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h2 className="text-xl font-serif text-[#0A0F1D] font-bold">
                    {s.title}
                  </h2>
                </div>

                {/* Description & Key Details */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {s.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#E2E8F0]">
                    {s.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#64748B]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0070E0] flex-shrink-0 mt-0.5" />
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
        <div className="border-t border-[#E2E8F0] pt-20 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
              TANGIBLE ACCOUNTABILITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#0A0F1D] mt-1 font-bold">
              Sample Service Report
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Every standard and recurring service visit culminates in an itemized parameter log. Below is an example of what you receive on your phone.
            </p>
          </div>

          <ServiceReportCard />
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#0A0F1D] font-bold">
            Experience professional aquarium care in Bengaluru
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] max-w-lg mx-auto">
            Book a one-time maintenance overhaul or discuss a tailored monthly plan. Upfront quotation with zero online payment required. Call: <strong className="text-[#0A0F1D]">{BRAND.phoneDisplay}</strong>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="px-7 py-3.5 rounded-md bg-[#0070E0] hover:bg-[#0088FF] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
            >
              Request a Service Quote
            </button>
            <a
              href={getWhatsAppUrl("Hi Creators Aquarium, I read your 5-step SOP and would like to get a quote for my tank.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs font-bold uppercase tracking-wider text-[#0A0F1D] hover:border-[#0070E0] transition-colors shadow-xs"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
