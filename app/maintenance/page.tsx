import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  Truck,
  ShieldCheck,
  HeartHandshake,
  Wrench,
  FileCheck2,
} from "lucide-react";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { SERVICES } from "@/lib/data/services";
import { ServiceReportCard } from "@/components/ui/ServiceReportCard";
import { OpenQuoteModalButton } from "@/components/ui/OpenQuoteModalButton";
import { generateBreadcrumbSchema, BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Professional Aquarium Maintenance & Cleaning Bengaluru | From ₹799",
  description:
    "Disciplined routine maintenance, deep cleaning, planted aquascaping care, and marine fish-only servicing across Bengaluru. Transparent upfront pricing from ₹799/visit.",
  keywords: [
    "aquarium maintenance Bangalore",
    "fish tank cleaning Bengaluru",
    "aquarium deep cleaning Bangalore",
    "planted aquarium maintenance Bengaluru",
    "marine aquarium maintenance Bangalore",
    "aquarium relocation Bengaluru",
  ],
  alternates: {
    canonical: `${BASE_URL}/maintenance`,
  },
  openGraph: {
    title: "Professional Aquarium Maintenance Bengaluru | Creators Aquarium",
    description:
      "We clean it, test it, check the equipment, and keep the system running properly across Bengaluru. Starting from ₹799/visit.",
    url: `${BASE_URL}/maintenance`,
    images: [`${BASE_URL}/images/routine-aquarium-care.jpg`],
  },
};

export default function MaintenanceHubPage() {
  const maintenanceServices = SERVICES.filter((s) => s.slug !== "setup");

  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Maintenance", url: "/maintenance" },
  ]);

  const serviceCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aquarium Maintenance & Upkeep Services",
    serviceType: "Aquarium Cleaning & Maintenance",
    provider: {
      "@type": "LocalBusiness",
      name: BRAND.name,
      telephone: BRAND.phone,
      url: BASE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Bengaluru",
    },
    url: `${BASE_URL}/maintenance`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <div className="bg-[#050505] text-[#F4F4EF] py-14 sm:py-20 w-full">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14 space-y-24">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101310] border border-[#242824] text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
              ON-DEMAND & RECURRING CARE
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight font-bold">
              Professional Aquarium Maintenance
            </h1>
            <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed max-w-2xl">
              We clean it, test it, check the equipment, and keep the system running properly across Bengaluru. Controlled partial water changes, mechanical pad cleaning, and water parameter verification.
            </p>
          </div>

          {/* 4 Core Maintenance Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceServices.map((svc) => (
              <div
                key={svc.id}
                className="rounded-xl bg-[#0A0C0A] border border-[#242824] hover:border-[#8BCF32]/50 p-7 flex flex-col justify-between shadow-2xl transition-all duration-300 space-y-6"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-[#242824] bg-[#101310]">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-[#8BCF32]">
                      {svc.category}
                    </span>
                    <h3 className="text-xl font-serif text-[#F4F4EF] font-bold mt-0.5">
                      {svc.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#A3A69F] leading-relaxed">
                    {svc.shortDescription}
                  </p>

                  <div className="pt-2 border-t border-[#242824]">
                    <span className="text-[10px] text-[#70756D] uppercase font-bold block">
                      Starting From
                    </span>
                    <span className="text-xl font-bold text-[#8BCF32]">
                      {svc.startingPrice}
                    </span>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-[#242824] text-xs text-[#A3A69F]">
                    {svc.inclusions.slice(0, 3).map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8BCF32] flex-shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-2">
                  <OpenQuoteModalButton
                    service={svc.title}
                    className="w-full py-2.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] active:bg-[#638F24] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center block"
                  >
                    Request Quote
                  </OpenQuoteModalButton>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="w-full py-2 rounded-md bg-[#101310] hover:bg-[#151915] border border-[#242824] text-xs font-semibold text-[#A3A69F] hover:text-[#F4F4EF] transition-colors text-center block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Relocation Banner */}
          <div className="rounded-xl bg-[#0A0C0A] border border-[#242824] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8BCF32]">
                LOGISTICS & MOVING
              </span>
              <h3 className="text-xl font-serif text-[#F4F4EF] font-bold">
                Relocating Your Aquarium in Bengaluru?
              </h3>
              <p className="text-xs text-[#A3A69F]">
                Safe intra-city transit with aerated livestock containers and mature bio-media preservation.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <OpenQuoteModalButton
                service="AQUARIUM RELOCATION"
                className="px-5 py-2.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Relocation Quote
              </OpenQuoteModalButton>
              <Link
                href="/services/relocation"
                className="px-5 py-2.5 rounded-md bg-[#101310] hover:bg-[#151915] border border-[#242824] text-xs font-bold uppercase tracking-wider text-[#F4F4EF] transition-colors"
              >
                Details
              </Link>
            </div>
          </div>

          {/* Service Report Differentiator */}
          <div className="border-t border-[#242824] pt-20 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                ACCOUNTABILITY
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] font-bold">
                Every Service. Documented.
              </h2>
              <p className="text-xs sm:text-sm text-[#A3A69F]">
                After every maintenance visit, you receive a digital service report with tested parameters and safety checklist directly on your phone.
              </p>
            </div>

            <ServiceReportCard />
          </div>

          {/* Final CTA */}
          <div className="p-10 rounded-xl bg-[#0A0C0A] border border-[#242824] text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF] font-bold">
              Keep Your Aquarium Healthy & Clear
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] max-w-md mx-auto">
              Schedule a single maintenance visit or explore our monthly AMC care plans. Call or message us at <strong className="text-[#F4F4EF]">{BRAND.phoneDisplay}</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <OpenQuoteModalButton
                service="AQUARIUM MAINTENANCE"
                className="px-7 py-3.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-[0_2px_12px_rgba(139,207,50,0.2)]"
              >
                Request Maintenance Quote
              </OpenQuoteModalButton>

              <Link
                href="/maintenance-plans"
                className="px-7 py-3.5 rounded-md bg-[#101310] hover:bg-[#151915] border border-[#242824] hover:border-[#8BCF32]/60 text-xs font-bold uppercase tracking-wider text-[#F4F4EF] transition-colors"
              >
                View Monthly Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
