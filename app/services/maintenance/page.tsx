import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle2, XCircle, MessageCircle, Phone } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { OpenQuoteModalButton } from "@/components/ui/OpenQuoteModalButton";
import { generateServiceSchema, generateBreadcrumbSchema, BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Aquarium Maintenance & Fish Tank Cleaning Bengaluru",
  description:
    "Professional scheduled aquarium maintenance & deep cleaning in Bengaluru. Partial water changes, filter overhauls, algae detailing, and water parameter logs starting from ₹799/visit.",
  keywords: [
    "aquarium maintenance Bangalore",
    "fish tank cleaning Bengaluru",
    "aquarium cleaning service Bangalore",
    "fish tank deep cleaning Bangalore",
    "aquarium maintenance service Bengaluru",
    "fish tank water change Bangalore",
    "canister filter cleaning Bengaluru",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/maintenance`,
  },
  openGraph: {
    title: "Aquarium Maintenance & Fish Tank Cleaning Bengaluru | Creators Aquarium",
    description:
      "Scheduled aquarium maintenance, algae detailing, and filter care across Bengaluru. Transparent upfront quotes from ₹799/visit.",
    url: `${BASE_URL}/services/maintenance`,
    images: [`${BASE_URL}/images/routine-aquarium-care.jpg`],
  },
};

export default function MaintenanceServicePage() {
  const service = SERVICES.find((s) => s.slug === "maintenance")!;

  const serviceJsonLd = generateServiceSchema({
    name: "Aquarium Maintenance & Deep Cleaning",
    description: service.fullDescription,
    url: "/services/maintenance",
    image: `${BASE_URL}${service.image}`,
    startingPrice: "799",
    category: "Aquarium Maintenance",
  });

  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Aquarium Maintenance", url: "/services/maintenance" },
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
              CORE SERVICE
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight font-bold">
              Aquarium Maintenance & Deep Cleaning
            </h1>
            <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed max-w-2xl">
              Scheduled routine maintenance and intensive restoration services for residential and commercial aquariums across Bengaluru.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden border border-[#242824] bg-[#0A0C0A] shadow-2xl">
            <Image
              src={service.image}
              alt="Aquarium maintenance in progress by professional technician in Bengaluru"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-md bg-[#050505]/85 backdrop-blur-md border border-[#242824] text-xs text-[#8BCF32] font-mono font-bold shadow-xs">
              Starting from ₹799 / visit
            </div>
          </div>

          {/* Pricing Options Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8BCF32]">
                Standard Visit
              </span>
              <h2 className="text-2xl font-serif text-[#F4F4EF] font-bold">Routine Maintenance</h2>
              <div className="text-3xl font-bold text-[#8BCF32]">from ₹799 <span className="text-xs text-[#70756D] font-normal">/ visit</span></div>
              <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                Designed for healthy, running tanks. Partial water change, front/side glass scrub, mechanical filter rinse, and parameter checks.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8BCF32]">
                Comprehensive Restoration
              </span>
              <h2 className="text-2xl font-serif text-[#F4F4EF] font-bold">Deep Clean & Overhaul</h2>
              <div className="text-3xl font-bold text-[#8BCF32]">from ₹1,499 <span className="text-xs text-[#70756D] font-normal">/ visit</span></div>
              <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                For neglected tanks with algae buildup, heavy substrate mulm, or clogged canister filters. Intensive detailing without crashing biological balance.
              </p>
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] shadow-xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#F4F4EF] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8BCF32]" />
                Included in Standard Scope
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

          {/* Conversion Action Bar */}
          <div className="p-10 rounded-xl bg-[#0A0C0A] border border-[#242824] text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF] font-bold">
              Schedule Maintenance for Your Bengaluru Aquarium
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] max-w-md mx-auto">
              Book a one-off visit or explore recurring monthly care plans. Zero online payment required.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <OpenQuoteModalButton
                service={service.title}
                className="px-7 py-3.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-[0_2px_12px_rgba(139,207,50,0.2)]"
              >
                Request a Service Quote
              </OpenQuoteModalButton>

              <a
                href={getWhatsAppUrl(`Hi Creators Aquarium, I would like to book a maintenance quote for my tank in Bengaluru.`)}
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
