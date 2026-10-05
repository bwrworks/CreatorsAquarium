import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { BRAND } from "@/lib/constants";
import { OpenQuoteModalButton } from "@/components/ui/OpenQuoteModalButton";
import { generateBreadcrumbSchema, BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Aquarium Services Bengaluru | Maintenance, Setup & Aquascaping",
  description:
    "Explore professional aquarium services in Bengaluru: routine maintenance, custom freshwater & planted aquascaping, marine fish-only systems, setup, and relocation from ₹799.",
  keywords: [
    "aquarium services Bangalore",
    "fish tank cleaning Bengaluru",
    "aquarium maintenance service Bangalore",
    "aquarium setup Bengaluru",
    "planted aquarium aquascaping Bangalore",
    "marine aquarium service Bengaluru",
    "aquarium relocation Bangalore",
  ],
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    title: "Aquarium Services Bengaluru | Maintenance, Setup & Aquascaping",
    description:
      "Disciplined aquarium maintenance, custom setups, planted aquascapes, and safe tank relocation across Bengaluru.",
    url: `${BASE_URL}/services`,
    images: [`${BASE_URL}/images/hero.jpg`],
  },
};

export default function ServicesPage() {
  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Creators Aquarium Services Bengaluru",
    description: "Professional aquarium care, maintenance, setup, and aquascaping services in Bengaluru.",
    itemListElement: SERVICES.map((svc, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: svc.title,
        description: svc.fullDescription,
        url: `${BASE_URL}/services/${svc.slug}`,
        image: `${BASE_URL}${svc.image}`,
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: svc.startingPrice.replace(/[^\d]/g, ""),
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24 w-full">
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
        {/* Header */}
        <div className="max-w-4xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101310] border border-[#242824] text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
            SPECIALIZED CARE
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight font-bold">
            Aquarium Care Services
          </h1>
          <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed">
            Everything needed to keep freshwater, planted, and marine fish-only systems biologically stable, visually crystal-clear, and safe for your livestock across Bengaluru.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-10">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="p-6 sm:p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] hover:border-[#8BCF32]/50 shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Large Image */}
                <div className="lg:col-span-5 relative aspect-[16/10] rounded-xl overflow-hidden border border-[#242824] bg-[#101310]">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#050505]/85 backdrop-blur-sm border border-[#242824] text-[10px] uppercase font-bold text-[#8BCF32]">
                    {svc.category}
                  </div>
                </div>

                {/* Details & Scope */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#70756D] font-semibold">
                      {svc.tagline}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-serif text-[#F4F4EF] mt-0.5 font-bold">
                      {svc.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                    {svc.fullDescription}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#F4F4EF] block mb-2">
                      Key Inclusions:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A3A69F]">
                      {svc.inclusions.slice(0, 4).map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8BCF32] flex-shrink-0 mt-0.5" />
                          <span className="text-[#A3A69F] font-medium">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Action Strip */}
                  <div className="pt-4 border-t border-[#242824] flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="block text-[10px] text-[#70756D] uppercase tracking-wider font-semibold">
                        Starting from
                      </span>
                      <span className="text-lg font-bold text-[#8BCF32]">
                        {svc.startingPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="px-5 py-2.5 rounded-md bg-[#101310] hover:bg-[#151915] border border-[#242824] text-xs font-bold uppercase tracking-wider text-[#F4F4EF] transition-colors"
                      >
                        View Full Details
                      </Link>

                      <OpenQuoteModalButton
                        defaultService={svc.title}
                        className="px-5 py-2.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-[0_2px_12px_rgba(139,207,50,0.2)]"
                      >
                        Get Quote
                      </OpenQuoteModalButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Quote Disclaimer */}
        <div className="mt-16 p-6 rounded-xl bg-[#0A0C0A] border border-[#242824] text-center text-xs text-[#70756D]">
          Starting from prices represent standard baseline scopes. Final quote is determined by tank volume, accessibility, and current biological condition. Call: <strong className="text-[#F4F4EF]">{BRAND.phoneDisplay}</strong>
        </div>
      </div>
    </div>
    </>
  );
}
