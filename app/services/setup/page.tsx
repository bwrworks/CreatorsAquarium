import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle2, XCircle, MessageCircle, Phone } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { OpenQuoteModalButton } from "@/components/ui/OpenQuoteModalButton";
import { generateServiceSchema, generateBreadcrumbSchema, BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Custom Aquarium Setup & Installation Bengaluru",
  description:
    "Turnkey custom aquarium setup, cabinet leveling, precision plumbing manifold, soil grading, and biological cycling in Bengaluru homes and offices from ₹2,999.",
  keywords: [
    "aquarium setup Bangalore",
    "custom fish tank installation Bengaluru",
    "rimless aquarium setup Bangalore",
    "sump installation Bangalore",
    "commercial aquarium setup Bengaluru",
    "freshwater aquarium setup Bangalore",
    "nature aquarium installation",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/setup`,
  },
  openGraph: {
    title: "Custom Aquarium Setup & Installation Bengaluru | Creators Aquarium",
    description:
      "Turnkey aquarium setup for luxury homes and offices in Bengaluru. Precision plumbing, hardscaping, and biological commissioning.",
    url: `${BASE_URL}/services/setup`,
    images: [`${BASE_URL}/images/service-setup.jpg`],
  },
};

export default function SetupServicePage() {
  const service = SERVICES.find((s) => s.slug === "setup")!;

  const serviceJsonLd = generateServiceSchema({
    name: "Aquarium Setup & Commissioning",
    description: service.fullDescription,
    url: "/services/setup",
    image: `${BASE_URL}${service.image}`,
    startingPrice: "2999",
    category: "Aquarium Setup & Installation",
  });

  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Setup & Commissioning", url: "/services/setup" },
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
              TURNKEY INSTALLATION
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight font-bold">
              Aquarium Setup & Commissioning
            </h1>
            <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed max-w-2xl">
              Custom aquarium installation, precision plumbing, structural stand leveling, soil stratification, and initial biological commissioning across Bengaluru residences and offices.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden border border-[#242824] bg-[#0A0C0A] shadow-2xl">
            <Image
              src={service.image}
              alt="Custom aquarium installation with plumbing manifold in Bengaluru"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-md bg-[#050505]/85 backdrop-blur-md border border-[#242824] text-xs text-[#8BCF32] font-mono font-bold shadow-xs">
              Setup labour from ₹2,999
            </div>
          </div>

          {/* Pricing Tiers for Setup Labour */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#70756D]">
                Freshwater Community
              </span>
              <h2 className="text-xl font-serif text-[#F4F4EF] font-bold">Freshwater Setup</h2>
              <div className="text-2xl font-bold text-[#8BCF32]">from ₹2,999 <span className="text-xs text-[#70756D] font-normal">labour</span></div>
              <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                Cabinet leveling, filtration assembly, river gravel hardscaping, water conditioning, and biological seeding.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8BCF32]">
                Nature Aquascape
              </span>
              <h2 className="text-xl font-serif text-[#F4F4EF] font-bold">Planted Tank Setup</h2>
              <div className="text-2xl font-bold text-[#8BCF32]">from ₹6,999 <span className="text-xs text-[#70756D] font-normal">labour</span></div>
              <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                Aquasoil grading, stone/wood hardscaping, in vitro plant tissue planting, CO2 regulator tuning, and lighting calibration.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8BCF32]">
                Saltwater Fish-Only
              </span>
              <h2 className="text-xl font-serif text-[#F4F4EF] font-bold">Marine Setup</h2>
              <div className="text-2xl font-bold text-[#8BCF32]">from ₹12,999 <span className="text-xs text-[#70756D] font-normal">labour</span></div>
              <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                Sump plumbing, skimmer commissioning, optical salinity calibration, macro rock structure bonding, and cycle establishment.
              </p>
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] shadow-xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#F4F4EF] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8BCF32]" />
                Installation Scope Included
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
                Not Included in Labour Fee
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
              Plan Your Aquarium Installation
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] max-w-md mx-auto">
              Discuss dimensions, aesthetic styles, and equipment options. We formulate a turnkey roadmap for your space.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <OpenQuoteModalButton
                service="AQUARIUM SETUP & INSTALLATION"
                className="px-7 py-3.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-[0_2px_12px_rgba(139,207,50,0.2)]"
              >
                Request Setup Consultation
              </OpenQuoteModalButton>

              <a
                href={getWhatsAppUrl("Hi Creators Aquarium, I'm planning a new aquarium setup in Bengaluru and would like consultation.")}
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
