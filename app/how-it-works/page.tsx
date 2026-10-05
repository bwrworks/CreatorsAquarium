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
      title: "Share Tank Details",
      desc: "Tell us your aquarium size, ecosystem type, and Bengaluru location. Photos on WhatsApp help us assess current condition immediately.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "Diagnostics & Upfront Quote",
      desc: "We review water volume, filtration type, and livestock requirements to confirm a firm quote before any work begins.",
      icon: Search,
    },
    {
      step: "03",
      title: "Disciplined Technical Service",
      desc: "Controlled partial water change, glass detailing, substrate siphoning, impeller wash, and mechanical filter rinse.",
      icon: Wrench,
    },
    {
      step: "04",
      title: "Digital Service Report",
      desc: "Receive verified water parameter logs (pH, TDS, temperature), hardware safety checkmarks, and notes directly on WhatsApp.",
      icon: FileCheck2,
    },
    {
      step: "05",
      title: "Ongoing Care Options",
      desc: "Continue on-demand or transition to a predictable monthly AMC plan with priority scheduling and zero lock-ins.",
      icon: CalendarCheck,
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
      <div className="bg-[#050505] text-[#F4F4EF] py-14 sm:py-20 w-full">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
          {/* Page Header */}
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101310] border border-[#242824] text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
              STANDARDIZED SOP
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight font-bold">
              How Creators Aquarium Works
            </h1>
            <p className="text-sm sm:text-base text-[#A3A69F]">
              A disciplined 5-step Standard Operating Procedure followed across every maintenance visit in Bengaluru.
            </p>
          </div>

          {/* 5-Step Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="p-7 rounded-xl bg-[#0A0C0A] border border-[#242824] hover:border-[#8BCF32]/50 transition-colors shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-extrabold text-[#8BCF32]">
                    {s.step}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#151915] border border-[#242824] flex items-center justify-center text-[#8BCF32]">
                    <s.icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-lg font-serif text-[#F4F4EF] font-bold">
                    {s.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                    {s.desc}
                  </p>
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
