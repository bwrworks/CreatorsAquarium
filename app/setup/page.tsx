import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  Layers,
  Wrench,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { AQUARIUM_TYPES, TURNKEY_INCLUSIONS, TURNKEY_STEPS } from "@/lib/data/setup";
import { TankSizeSelector } from "@/components/ui/TankSizeSelector";
import { OpenQuoteModalButton } from "@/components/ui/OpenQuoteModalButton";
import { generateBreadcrumbSchema, BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Custom Aquarium Design & Turnkey Setup Bengaluru | 1ft to 6ft",
  description:
    "End-to-end custom aquarium design, sourcing, fabrication, and installation across Bengaluru. Freshwater community, planted nature aquascapes, and marine fish-only systems from 1 ft to 6 ft.",
  keywords: [
    "custom aquarium setup Bangalore",
    "aquarium design Bengaluru",
    "turnkey aquarium installation Bangalore",
    "planted aquarium setup Bengaluru",
    "marine aquarium setup Bangalore",
    "fish tank maker Bangalore",
    "custom fish tank cabinet Bengaluru",
  ],
  alternates: {
    canonical: `${BASE_URL}/setup`,
  },
  openGraph: {
    title: "Custom Aquarium Design & Turnkey Setup Bengaluru | Creators Aquarium",
    description:
      "From your first idea to a fully designed, installed, and commissioned aquarium. Custom setups from 1 ft to 6 ft across Bengaluru.",
    url: `${BASE_URL}/setup`,
    images: [`${BASE_URL}/images/hero.jpg`],
  },
};

export default function NewSetupPage() {
  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "New Setup", url: "/setup" },
  ]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Aquarium Design, Fabrication & Turnkey Setup",
    serviceType: "Aquarium Installation & Setup",
    description:
      "Full-service custom aquarium design, low-iron glass fabrication, cabinet manufacturing, plumbing, aquascaping, and on-site commissioning across Bengaluru.",
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
    url: `${BASE_URL}/setup`,
  };

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

      <div className="bg-[#050505] text-[#F4F4EF] py-14 sm:py-20 w-full">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14 space-y-24">
          {/* 1. HERO SECTION */}
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101310] border border-[#242824] text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
              TURNKEY AQUARIUM STUDIO
            </div>

            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-serif text-[#F4F4EF] tracking-tight leading-[1.12] font-bold">
              Custom Aquariums, Designed for Your Space.
            </h1>

            <p className="text-base sm:text-lg text-[#A3A69F] leading-relaxed max-w-3xl">
              From your first idea to a fully designed, installed, and commissioned aquarium. We design, source, build, and configure custom freshwater, planted, and marine fish-only systems from 1 ft to 6 ft across Bengaluru.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-[#70756D] font-mono">
              <span className="text-[#8BCF32] font-bold">Freshwater · Planted · Marine Fish-Only</span>
              <span>•</span>
              <span>1 FT · 2 FT · 3 FT · 4 FT · 5 FT · 6 FT · Custom</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <OpenQuoteModalButton
                service="NEW SETUP"
                className="px-7 py-3.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] active:bg-[#638F24] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-[0_2px_16px_rgba(139,207,50,0.25)]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </OpenQuoteModalButton>

              <a
                href={getWhatsAppUrl("Hi Creators Aquarium, I would like to request a design consultation for a new custom aquarium setup in Bengaluru.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-md bg-[#101310] hover:bg-[#151915] border border-[#242824] hover:border-[#8BCF32]/60 text-xs font-bold uppercase tracking-wider text-[#F4F4EF] flex items-center gap-2 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#8BCF32]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* 2. THE THREE AQUARIUM TYPES */}
          <div className="space-y-10">
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                SYSTEM VARIETIES
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] font-bold">
                Three Distinct Living Ecosystems
              </h2>
              <p className="text-xs sm:text-sm text-[#A3A69F]">
                Tailored around your aesthetic vision, maintenance preference, and space requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {AQUARIUM_TYPES.map((type) => (
                <div
                  key={type.id}
                  className="rounded-xl bg-[#0A0C0A] border border-[#242824] hover:border-[#8BCF32]/50 p-7 flex flex-col justify-between shadow-xl transition-all space-y-5"
                >
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-[#8BCF32]">
                        {type.subtitle}
                      </span>
                      <h3 className="text-2xl font-serif text-[#F4F4EF] font-bold mt-0.5">
                        {type.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#A3A69F] leading-relaxed">
                      {type.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {type.types.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-[#101310] border border-[#242824] text-[11px] text-[#A3A69F]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#242824]">
                    <OpenQuoteModalButton
                      service={`NEW SETUP (${type.title.toUpperCase()})`}
                      className="w-full py-2.5 rounded-md bg-[#101310] hover:bg-[#151915] border border-[#242824] hover:border-[#8BCF32]/50 text-xs font-bold uppercase tracking-wider text-[#F4F4EF] transition-colors cursor-pointer text-center block"
                    >
                      Inquire About {type.title}
                    </OpenQuoteModalButton>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. TANK SIZE SELECTOR (1FT TO 6FT + CUSTOM) */}
          <div className="space-y-10 border-t border-[#242824] pt-20">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                DIMENSIONAL PLANNING
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] font-bold">
                Choose Your Aquarium Size
              </h2>
              <p className="text-xs sm:text-sm text-[#A3A69F]">
                Select a standard tank size or request custom architectural dimensions for room dividers and bespoke alcoves.
              </p>
            </div>

            <TankSizeSelector />
          </div>

          {/* 4. COMPLETE TURNKEY PACKAGE */}
          <div className="space-y-10 border-t border-[#242824] pt-20">
            <div className="max-w-3xl space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                COMPLETE SPECIFICATION
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] font-bold">
                Complete Turnkey Setup
              </h2>
              <p className="text-xs sm:text-sm text-[#A3A69F]">
                Everything required for a balanced, functional living ecosystem tailored to your space.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TURNKEY_INCLUSIONS.map((section, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#0A0C0A] border border-[#242824] p-6 shadow-xl space-y-2.5"
                >
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#8BCF32]" />
                    <h3 className="text-sm font-serif text-[#F4F4EF] font-bold">
                      {section.category}
                    </h3>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#A3A69F]">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#8BCF32] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Realistic Commissioning Scope Box */}
            <div className="rounded-xl bg-[#101310] border border-[#242824] p-8 sm:p-10 shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-[#8BCF32]" />
                <h3 className="text-lg font-serif text-[#F4F4EF] font-bold">
                  System Commissioning Standards
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                We believe in rigorous operational safety. Before handover, our technicians execute a standardized commissioning checklist:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                {[
                  "Leak inspection & seal verification",
                  "Equipment testing (pumps, heaters, skimmers)",
                  "Plumbing checks & valve calibration",
                  "Water preparation & conditioning",
                  "Lighting configuration & timer setup",
                  "Initial parameter checks (pH, TDS, temperature)",
                  "Customer handover & operation walkthrough",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#A3A69F]">
                    <CheckCircle2 className="w-4 h-4 text-[#8BCF32] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. 8-STEP TURNKEY PROCESS ("FROM IDEA TO AQUARIUM") */}
          <div className="space-y-10 border-t border-[#242824] pt-20">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                TURNKEY TIMELINE
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] font-bold">
                From Idea to Aquarium
              </h2>
              <p className="text-xs sm:text-sm text-[#A3A69F]">
                Consultation → Design & Quote → Sourcing & Fabrication → Delivery & Placement → Installation & Aquascaping → Commissioning → Handover → Ongoing Care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TURNKEY_STEPS.map((s, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#0A0C0A] border border-[#242824] p-6 shadow-xl space-y-3 hover:border-[#8BCF32]/50 transition-colors"
                >
                  <span className="font-mono text-2xl font-extrabold text-[#8BCF32] block">
                    {s.step}
                  </span>
                  <h3 className="text-base font-serif text-[#F4F4EF] font-bold">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#A3A69F] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. FINAL DESIGN CONSULTATION CTA */}
          <div className="p-10 sm:p-14 rounded-2xl bg-gradient-to-b from-[#0A0C0A] to-[#050505] border border-[#242824] text-center space-y-6 shadow-2xl">
            <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] font-bold">
              Ready to Design Your Custom Aquarium?
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] max-w-lg mx-auto">
              Share your room dimensions, preferred aquarium style, and space photos on WhatsApp or request a formal design consultation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <OpenQuoteModalButton
                service="NEW SETUP"
                className="px-8 py-3.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] active:bg-[#638F24] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-[0_2px_16px_rgba(139,207,50,0.25)] flex items-center gap-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </OpenQuoteModalButton>

              <a
                href={getWhatsAppUrl("Hi Creators Aquarium, I would like to schedule a custom aquarium setup consultation in Bengaluru.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-md bg-[#101310] hover:bg-[#151915] border border-[#242824] hover:border-[#8BCF32]/60 text-xs font-bold uppercase tracking-wider text-[#F4F4EF] flex items-center gap-2 transition-colors shadow-xs"
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
              Serving Indiranagar, Koramangala, Whitefield, HSR Layout, JP Nagar, and all areas across Bengaluru.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
