import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle2, XCircle, MessageCircle, Phone, Scissors, Sparkles, Droplets } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { OpenQuoteModalButton } from "@/components/ui/OpenQuoteModalButton";
import { generateServiceSchema, generateBreadcrumbSchema, BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Planted Aquarium Maintenance & Aquascaping Care Bengaluru",
  description:
    "Expert planted aquarium care in Bengaluru. Nature aquarium plant trimming, CO2 calibration, fertilization balance, and algae control from ₹1,499/visit.",
  keywords: [
    "planted aquarium Bangalore",
    "nature aquarium maintenance Bengaluru",
    "aquascaping service Bangalore",
    "aquarium plant trimming Bangalore",
    "high tech planted tank care",
    "ADA nature aquarium maintenance",
    "CO2 aquarium calibration Bangalore",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/planted-aquarium`,
  },
  openGraph: {
    title: "Planted Aquarium Maintenance & Aquascaping Care Bengaluru | Creators Aquarium",
    description:
      "Specialist botanical maintenance for Nature Aquariums across Bengaluru. Plant trimming, CO2 optimization, and algae control from ₹1,499.",
    url: `${BASE_URL}/services/planted-aquarium`,
    images: [`${BASE_URL}/images/service-planted.jpg`],
  },
};

export default function PlantedAquariumPage() {
  const service = SERVICES.find((s) => s.slug === "planted-aquarium")!;

  const serviceJsonLd = generateServiceSchema({
    name: "Planted Aquarium & Aquascaping Care",
    description: service.fullDescription,
    url: "/services/planted-aquarium",
    image: `${BASE_URL}${service.image}`,
    startingPrice: "1499",
    category: "Planted Aquarium Maintenance",
  });

  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Planted Aquarium Care", url: "/services/planted-aquarium" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24 w-full">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14 space-y-16">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101310] border border-[#242824] text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
              SPECIALIST HORTICULTURE
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight font-bold">
              Planted Aquarium & Aquascaping Care
            </h1>
            <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed max-w-2xl">
              Botanical precision for Nature Aquariums. Plant trimming, CO₂ optimization, macro/micro nutrient dosing, and biological algae prevention across Bengaluru.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden border border-[#242824] bg-[#0A0C0A] shadow-2xl">
            <Image
              src={service.image}
              alt="Planted Nature Aquarium with carpet plants and schooling rasboras in Bengaluru"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-md bg-[#050505]/85 backdrop-blur-md border border-[#242824] text-xs text-[#8BCF32] font-mono font-bold shadow-xs">
              Starting from ₹1,499 / visit
            </div>
          </div>

          {/* 3 Botanical Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-3">
              <Scissors className="w-6 h-6 text-[#8BCF32]" />
              <h2 className="text-lg font-serif text-[#F4F4EF] font-bold">Surgical Trimming</h2>
              <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                Curved scissors for foreground carpet contouring (Monte Carlo, Glossostigma) and background stem bushing (Rotala, Ludwigia).
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-3">
              <Droplets className="w-6 h-6 text-[#8BCF32]" />
              <h2 className="text-lg font-serif text-[#F4F4EF] font-bold">CO₂ & Light Balance</h2>
              <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                Drop checker verification, bubble counter tuning, ceramic diffuser scrubbing, and photoperiod timing to prevent algae outbreaks.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-3">
              <Sparkles className="w-6 h-6 text-[#8BCF32]" />
              <h2 className="text-lg font-serif text-[#F4F4EF] font-bold">Targeted Nutrition</h2>
              <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                Nitrogen, Phosphorus, Potassium, and Iron dosing calibration based on actual plant uptake and bioload.
              </p>
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] shadow-xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#F4F4EF] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8BCF32]" />
                Included in Planted Scope
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#A3A69F]">
                {service.inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#8BCF32] mt-0.5 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] shadow-xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#70756D] flex items-center gap-2">
                <XCircle className="w-4 h-4 text-[#70756D]" />
                Not Included Automatically
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#70756D]">
                {service.exclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#353D35] mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTAs */}
          <div className="p-10 rounded-xl bg-[#0A0C0A] border border-[#242824] text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF] font-bold">
              Elevate Your Nature Aquarium
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] max-w-md mx-auto">
              Book a one-time botanical detailing visit or request our monthly Planted Care plan (₹2,999/mo).
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <OpenQuoteModalButton
                service="PLANTED AQUARIUM CARE"
                tankType="Planted"
                className="px-7 py-3.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-[0_2px_12px_rgba(139,207,50,0.2)]"
              >
                Book Planted Care
              </OpenQuoteModalButton>

              <a
                href={getWhatsAppUrl("Hi Creators Aquarium, I'd like to book specialist planted aquarium care in Bengaluru.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-md bg-[#101310] border border-[#242824] hover:border-[#8BCF32]/60 text-xs font-bold uppercase tracking-wider text-[#F4F4EF] flex items-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#8BCF32]" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                className="px-6 py-3.5 rounded-md bg-[#101310] border border-[#242824] text-xs font-bold uppercase tracking-wider text-[#F4F4EF] hover:text-[#8BCF32] flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#8BCF32]" />
                <span>Call: {BRAND.phoneDisplay}</span>
              </a>
            </div>

            <div className="text-[11px] text-[#70756D] pt-2">
              Starting from. Final pricing depends on tank size, condition and service scope.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
