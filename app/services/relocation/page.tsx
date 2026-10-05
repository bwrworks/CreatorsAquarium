import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle2, XCircle, MessageCircle, Phone, Truck, ShieldCheck, HeartHandshake } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { OpenQuoteModalButton } from "@/components/ui/OpenQuoteModalButton";
import { generateServiceSchema, generateBreadcrumbSchema, BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Aquarium Relocation & Safe Tank Shifting Bengaluru",
  description:
    "Expert aquarium relocation service across Bengaluru. Aerated livestock transit units, biological filter preservation, cushioned glass protection, and fast re-commissioning from ₹1,999.",
  keywords: [
    "aquarium relocation Bangalore",
    "fish tank shifting Bengaluru",
    "move aquarium Bangalore",
    "aquarium moving service Bengaluru",
    "relocate fish tank Bangalore",
    "aquarium transport service Bengaluru",
    "fish relocation Bangalore",
  ],
  alternates: {
    canonical: `${BASE_URL}/services/relocation`,
  },
  openGraph: {
    title: "Aquarium Relocation & Safe Tank Shifting Bengaluru | Creators Aquarium",
    description:
      "Controlled aquarium moving across Bengaluru with aerated livestock transport and bio-media preservation. Quotes from ₹1,999.",
    url: `${BASE_URL}/services/relocation`,
    images: [`${BASE_URL}/images/aquarium-relocation.jpg`],
  },
};

export default function RelocationServicePage() {
  const service = SERVICES.find((s) => s.slug === "relocation")!;

  const serviceJsonLd = generateServiceSchema({
    name: "Aquarium Relocation & Safe Shifting",
    description: service.fullDescription,
    url: "/services/relocation",
    image: `${BASE_URL}${service.image}`,
    startingPrice: "1999",
    category: "Aquarium Moving & Logistics",
  });

  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Aquarium Relocation", url: "/services/relocation" },
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
            LOGISTICS SERVICE
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight font-bold">
            Aquarium Relocation & Safe Shifting
          </h1>
          <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed max-w-2xl">
            Controlled aquarium moving across Bengaluru. Aerated livestock transfer, biological filter preservation, safe glass packaging, and rapid re-commissioning at your new address.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden border border-[#242824] bg-[#0A0C0A] shadow-2xl">
          <Image
            src={service.image}
            alt="Aquarium relocation equipment and aerated livestock units"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 px-4 py-2 rounded-md bg-[#050505]/85 backdrop-blur-md border border-[#242824] text-xs text-[#8BCF32] font-mono font-bold shadow-xs">
            Relocation from ₹1,999
          </div>
        </div>

        {/* 3 Relocation Safety Protocols */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-3">
            <HeartHandshake className="w-6 h-6 text-[#8BCF32]" />
            <h3 className="text-lg font-serif text-[#F4F4EF] font-bold">Safe Livestock Transit</h3>
            <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
              Livestock transferred into insulated, battery-aerated temperature-buffered transport units to prevent hypoxia and thermal shock.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-3">
            <ShieldCheck className="w-6 h-6 text-[#8BCF32]" />
            <h3 className="text-lg font-serif text-[#F4F4EF] font-bold">Bio-Media Preservation</h3>
            <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
              Canister sponges and sintered glass bio-rings are sealed submerged in mature tank water so beneficial bacteria colonies stay alive.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-3">
            <Truck className="w-6 h-6 text-[#8BCF32]" />
            <h3 className="text-lg font-serif text-[#F4F4EF] font-bold">Padded Glass Transit</h3>
            <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
              Tanks drained with high-volume siphon, substrate stabilized, and glass wrapped in heavy transit blankets.
            </p>
          </div>
        </div>

        {/* Inclusions & Exclusions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-[#0A0C0A] border border-[#242824] shadow-xl space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#F4F4EF] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#8BCF32]" />
              Included in Relocation Scope
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
            Planning to Move Your Aquarium in Bengaluru?
          </h2>
          <p className="text-xs sm:text-sm text-[#A3A69F] max-w-md mx-auto">
            Share current and destination localities, tank dimensions, and preferred shifting date for an itemized logistics quote.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <OpenQuoteModalButton
              defaultService="AQUARIUM RELOCATION"
              className="px-7 py-3.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-[0_2px_12px_rgba(139,207,50,0.2)]"
            >
              Request Relocation Quote
            </OpenQuoteModalButton>

            <a
              href={getWhatsAppUrl("Hi Creators Aquarium, I need an aquarium relocation quote in Bengaluru.")}
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
