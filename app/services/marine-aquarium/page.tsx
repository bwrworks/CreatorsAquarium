import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle2, XCircle, MessageCircle, Phone, Waves, Gauge, Droplets, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { OpenQuoteModalButton } from "@/components/ui/OpenQuoteModalButton";
import { generateServiceSchema, generateBreadcrumbSchema, BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Marine Fish-Only Saltwater Aquarium Care Bengaluru",
  description:
    "Disciplined marine fish-only saltwater aquarium maintenance in Bengaluru. Protein skimmer care, optical refractometer salinity calibration, and sump hygiene from ₹2,499/visit.",
  keywords: [
    "marine aquarium maintenance Bangalore",
    "saltwater fish tank service Bengaluru",
    "protein skimmer cleaning Bangalore",
    "marine aquarium setup Bangalore",
    "saltwater aquarium maintenance Bengaluru",
    "fish only marine tank care Bangalore",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/marine-aquarium`,
  },
  openGraph: {
    title: "Marine Fish-Only Saltwater Aquarium Care Bengaluru | Creators Aquarium",
    description:
      "Disciplined marine fish-only saltwater aquarium care in Bengaluru. Salinity calibration, protein skimmer maintenance, and sump hygiene from ₹2,499.",
    url: `${BASE_URL}/services/marine-aquarium`,
    images: [`${BASE_URL}/images/service-marine.jpg`],
  },
};

export default function MarineAquariumPage() {
  const service = SERVICES.find((s) => s.slug === "marine-aquarium")!;

  const serviceJsonLd = generateServiceSchema({
    name: "Marine Fish-Only Aquarium Care",
    description: service.fullDescription,
    url: "/services/marine-aquarium",
    image: `${BASE_URL}${service.image}`,
    startingPrice: "2499",
    category: "Marine Aquarium Maintenance",
  });

  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Marine Fish-Only Care", url: "/services/marine-aquarium" },
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
              SALTWATER SPECIALIZATION
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight font-bold">
              Marine Fish-Only Aquarium Care
            </h1>
            <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed max-w-2xl">
              Strict water chemistry discipline, optical refractometer salinity calibration, protein skimmer overhaul, and sump hygiene for saltwater fish-only ecosystems across Bengaluru.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden border border-[#242824] bg-[#0A0C0A] shadow-2xl">
            <Image
              src={service.image}
              alt="Marine fish-only saltwater aquarium in executive Bengaluru setting"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-md bg-[#050505]/85 backdrop-blur-md border border-[#242824] text-xs text-[#8BCF32] font-mono font-bold shadow-xs">
              Starting from ₹2,499 / visit
            </div>
          </div>

          {/* Ethical Fish-Only Standards Notice */}
          <div className="p-8 rounded-xl bg-[#101310] border border-[#242824] space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8BCF32]">
              <ShieldCheck className="w-5 h-5 text-[#8BCF32]" />
              <span>Fish-Only Saltwater Standards</span>
            </div>
            <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
              Creators Aquarium adheres strictly to ethical standards for ornamental fishkeeping. Our marine services are dedicated strictly to <strong>fish-only saltwater systems</strong> using legally compliant ornamental fish, high-grade synthetic saltwater, and natural or macro rock hardscaping. We do not service live coral reef systems.
            </p>
          </div>

          {/* Marine Care Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-3">
              <Gauge className="w-6 h-6 text-[#8BCF32]" />
              <h2 className="text-lg font-serif text-[#F4F4EF] font-bold">Salinity Calibration</h2>
              <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                Precision salinity checks using optical refractometers. Controlled top-offs to counter evaporation salinity swings.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-3">
              <Waves className="w-6 h-6 text-[#8BCF32]" />
              <h2 className="text-lg font-serif text-[#F4F4EF] font-bold">Skimmer & Sump Hygiene</h2>
              <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                Protein skimmer collection cup wash, neck scrubbing, venturi air valve unclogging, and sump detritus siphoning.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-3">
              <Droplets className="w-6 h-6 text-[#8BCF32]" />
              <h2 className="text-lg font-serif text-[#F4F4EF] font-bold">Synthetic Saltwater Matching</h2>
              <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                RO/DI purified water mixed with premium marine salts, pre-aerated and temperature-matched prior to water changes.
              </p>
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] shadow-xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#F4F4EF] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8BCF32]" />
                Included in Marine Scope
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
                Strictly Excluded
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
              Maintain Your Marine System with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] max-w-md mx-auto">
              Book an individual marine inspection visit (from ₹2,499) or our bi-weekly Marine Care plan (₹3,999/mo).
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <OpenQuoteModalButton
                service="MARINE FISH-ONLY CARE"
                tankType="Marine"
                className="px-7 py-3.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-[0_2px_12px_rgba(139,207,50,0.2)]"
              >
                Book Marine Care
              </OpenQuoteModalButton>

              <a
                href={getWhatsAppUrl("Hi Creators Aquarium, I'd like to book marine fish-only maintenance in Bengaluru.")}
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
