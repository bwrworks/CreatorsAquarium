import React from "react";
import type { Metadata } from "next";
import {
  MessageSquare,
  Search,
  Wrench,
  FileCheck2,
  CalendarCheck,
  CheckCircle,
  MessageCircle,
  Phone,
} from "lucide-react";
import { ServiceReportCard } from "@/components/ui/ServiceReportCard";
import { OpenQuoteModalButton } from "@/components/ui/OpenQuoteModalButton";
import { getWhatsAppUrl, BRAND } from "@/lib/constants";
import { generateBreadcrumbSchema, BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "How It Works | Aquarium Maintenance SOP Bengaluru",
  description:
    "Learn about Creators Aquarium's 5-step aquarium service SOP in Bengaluru: initial water parameter testing, controlled partial water changes, filter maintenance, and digital service reports.",
  keywords: [
    "how aquarium cleaning works",
    "aquarium maintenance procedure Bangalore",
    "fish tank cleaning SOP Bengaluru",
    "aquarium water testing procedure",
    "professional aquarium service steps",
  ],
  alternates: {
    canonical: `${BASE_URL}/how-it-works`,
  },
  openGraph: {
    title: "How Creators Aquarium Works | Standard Operating Procedure Bengaluru",
    description:
      "A disciplined 5-step process: diagnostics, controlled water handling, filter maintenance, and digital parameter reporting.",
    url: `${BASE_URL}/how-it-works`,
    images: [`${BASE_URL}/images/hero.jpg`],
  },
};

export default function HowItWorksPage() {
  const steps = [
    {
      step: "01",
      title: "Tell Us About Your Aquarium",
      desc: "Share your tank size, location in Bengaluru, current condition (photos via WhatsApp are very helpful), and what service you need assistance with.",
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
      desc: "We diagnose the aquarium's current state before starting any work. Understanding biological balance prevents osmotic shock and livestock stress.",
      icon: Search,
      details: [
        "Baseline water testing: pH, TDS, temperature, and nitrogen chemistry where applicable",
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
        "Surgical glass cleaning & algae management",
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
      desc: "Choose between single on-demand visits or flexible monthly care plans to keep your aquarium thriving without personal hassle.",
      icon: CalendarCheck,
      details: [
        "Flexible bi-weekly or monthly care plans",
        "Transparent scheduling with clear cancellation terms",
        "Priority scheduling for recurring care clients",
      ],
    },
  ];

  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "How It Works", url: "/how-it-works" },
  ]);

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Professional Aquarium Maintenance Works at Creators Aquarium",
    description: "Standard operating procedure for scheduled aquarium maintenance and water testing in Bengaluru.",
    step: steps.map((s, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: s.title,
      itemListElement: {
        "@type": "HowToDirection",
        text: s.desc,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24 w-full">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
          {/* Page Header */}
          <div className="max-w-4xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101310] border border-[#242824] text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
              STANDARDIZED PROCEDURE
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight font-bold">
              How Creators Aquarium Works
            </h1>
            <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed">
              Beautiful aquariums are maintained through disciplined process, not guesswork. Here is the 5-step Standard Operating Procedure our technicians follow across Bengaluru.
            </p>
          </div>

          {/* 5-Step Process Timeline */}
          <div className="space-y-6 mb-24">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] hover:border-[#8BCF32]/50 transition-colors shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Step Number & Title */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-3xl font-extrabold text-[#8BCF32]">
                        {s.step}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-[#151915] border border-[#242824] flex items-center justify-center text-[#8BCF32]">
                        <s.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h2 className="text-xl font-serif text-[#F4F4EF] font-bold">
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
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                SIGNATURE DIFFERENTIATOR
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] mt-1 font-bold">
                YOUR AQUARIUM. DOCUMENTED.
              </h2>
              <p className="text-xs sm:text-sm text-[#A3A69F] mt-2">
                Every standard and recurring service visit culminates in an itemized parameter log. Below is an example of what you receive on your phone.
              </p>
            </div>

            <ServiceReportCard />
          </div>

          {/* Bottom CTA Banner */}
          <div className="rounded-xl bg-[#0A0C0A] border border-[#242824] p-8 sm:p-12 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF] font-bold">
              Experience professional aquarium care in Bengaluru
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] max-w-lg mx-auto">
              Book a one-time maintenance overhaul or discuss a tailored monthly plan. Upfront quotation with zero online payment required. Call: <strong className="text-[#F4F4EF]">{BRAND.phoneDisplay}</strong>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <OpenQuoteModalButton
                defaultService="How It Works Service Request"
                className="px-7 py-3.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-[0_2px_12px_rgba(139,207,50,0.2)]"
              >
                Request a Service Quote
              </OpenQuoteModalButton>

              <a
                href={getWhatsAppUrl("Hi Creators Aquarium, I read your SOP and would like to schedule a visit in Bengaluru.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-md bg-[#101310] border border-[#242824] hover:border-[#8BCF32]/60 text-xs font-bold uppercase tracking-wider text-[#F4F4EF] flex items-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#8BCF32]" />
                <span>WhatsApp Us Directly</span>
              </a>

              <a
                href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                className="px-6 py-3.5 rounded-md bg-[#101310] border border-[#242824] text-xs font-bold uppercase tracking-wider text-[#F4F4EF] hover:text-[#8BCF32] flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#8BCF32]" />
                <span>Call: {BRAND.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
