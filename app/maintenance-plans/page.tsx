import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { MAINTENANCE_PLANS, PRICING_PHILOSOPHY } from "@/lib/data/plans";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { OpenQuoteModalButton } from "@/components/ui/OpenQuoteModalButton";
import { generateBreadcrumbSchema, BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Monthly Aquarium Maintenance Plans Bengaluru | AMC Care",
  description:
    "Predictable, flexible monthly aquarium AMC maintenance plans across Bengaluru. Routine visits, water parameter testing, filter overhauls, and algae management from ₹1,499/mo.",
  keywords: [
    "aquarium AMC Bangalore",
    "monthly aquarium maintenance Bangalore",
    "fish tank AMC Bengaluru",
    "aquarium maintenance contract Bangalore",
    "fish tank service plans Bengaluru",
    "annual aquarium maintenance Bengaluru",
  ],
  alternates: {
    canonical: `${BASE_URL}/maintenance-plans`,
  },
  openGraph: {
    title: "Monthly Aquarium Maintenance Plans Bengaluru | Creators Aquarium",
    description:
      "Predictable, scheduled aquatic care for Bengaluru homes and offices. Bi-weekly and weekly care from ₹1,499/mo.",
    url: `${BASE_URL}/maintenance-plans`,
    images: [`${BASE_URL}/images/routine-aquarium-care.jpg`],
  },
};

export default function MaintenancePlansPage() {
  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Maintenance Plans", url: "/maintenance-plans" },
  ]);

  const plansJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Creators Aquarium Monthly Maintenance Plans",
    description: "Scheduled recurring aquarium maintenance and AMC plans in Bengaluru.",
    itemListElement: MAINTENANCE_PLANS.map((plan, index) => ({
      "@type": "Offer",
      position: index + 1,
      name: plan.name,
      description: `${plan.cadence} for ${plan.targetTank}. Includes ${plan.features.join(", ")}.`,
      price: plan.priceMonthly.replace(/[^\d]/g, ""),
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: plan.priceMonthly.replace(/[^\d]/g, ""),
        priceCurrency: "INR",
        unitText: "MONTH",
      },
      availability: "https://schema.org/InStock",
      url: `${BASE_URL}/maintenance-plans`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plansJsonLd) }}
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
            RECURRING CARE
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight font-bold">
            Monthly Aquarium Maintenance Plans
          </h1>
          <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed">
            Predictable, scheduled aquatic care tailored for Bengaluru homes, offices, and commercial establishments. Flexible monthly plans with itemized upfront quotes and zero forced online checkout.
          </p>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MAINTENANCE_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl bg-[#0A0C0A] border p-7 flex flex-col justify-between shadow-2xl transition-all ${
                plan.isRecommended || plan.isPopular
                  ? "border-[#8BCF32] ring-1 ring-[#8BCF32]/40"
                  : "border-[#242824] hover:border-[#353D35]"
              }`}
            >
              <div className="space-y-4">
                {(plan.isRecommended || plan.isPopular) && (
                  <span className="inline-block px-3 py-1 rounded-md bg-[#8BCF32] text-[#050505] text-[10px] font-bold uppercase tracking-wider">
                    Recommended
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-serif text-[#F4F4EF] font-bold">
                    {plan.name}
                  </h3>
                  <p className="text-[11px] text-[#70756D] mt-0.5 font-medium">
                    {plan.cadence}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#242824]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#8BCF32]">
                      {plan.priceMonthly}
                    </span>
                    <span className="text-xs text-[#70756D]">/ month</span>
                  </div>
                  <span className="block text-[10px] text-[#A3A69F] mt-1">
                    {plan.targetTank}
                  </span>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-[#242824] text-xs text-[#A3A69F]">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8BCF32] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 space-y-3">
                <OpenQuoteModalButton
                  defaultService={`AMC Plan: ${plan.name}`}
                  className={`w-full py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    plan.isRecommended || plan.isPopular
                      ? "bg-[#8BCF32] text-[#050505] hover:bg-[#B4E35A]"
                      : "bg-[#101310] text-[#F4F4EF] hover:bg-[#151915] border border-[#242824] hover:border-[#8BCF32]/50"
                  }`}
                >
                  Discuss This Plan
                </OpenQuoteModalButton>
                <span className="block text-center text-[10px] text-[#70756D]">
                  Starting from · Upfront quote before start
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Starting Price Note */}
        <div className="p-4 rounded-xl bg-[#0A0C0A] border border-[#242824] text-center text-xs text-[#70756D]">
          Starting from. Final pricing depends on tank size, condition and service scope. Custom quotes issued for systems above 4 ft or complex sump designs. Call: <strong className="text-[#F4F4EF]">{BRAND.phoneDisplay}</strong>
        </div>

        {/* Custom Commercial Displays Banner */}
        <div className="p-8 sm:p-10 rounded-xl bg-[#101310] border border-[#242824] text-[#F4F4EF] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#8BCF32]">
              COMMERCIAL & CUSTOM DISPLAYS
            </span>
            <h3 className="text-2xl font-serif text-[#F4F4EF] font-bold">
              Need something more complex? Request a custom SLA.
            </h3>
            <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
              We manage oversized aquariums in corporate headquarters, hotel receptions, and retail flagship stores with dedicated emergency response and flexible visiting cadences.
            </p>
          </div>
          <OpenQuoteModalButton
            defaultService="Commercial Custom AMC Plan"
            className="px-7 py-3.5 rounded-md bg-[#8BCF32] text-[#050505] hover:bg-[#B4E35A] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex-shrink-0 shadow-[0_2px_12px_rgba(139,207,50,0.2)]"
          >
            Request Custom Quote
          </OpenQuoteModalButton>
        </div>

        {/* Pricing Philosophy Section */}
        <div className="space-y-8 pt-8 border-t border-[#242824]">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
              TRANSPARENCY FIRST
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] mt-1 font-bold">
              Our Transparent Service Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRICING_PHILOSOPHY.map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#8BCF32]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#F4F4EF]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A3A69F] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="p-10 rounded-xl bg-[#0A0C0A] border border-[#242824] text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF] font-bold">
            Discuss the Right Plan for Your Aquarium
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <OpenQuoteModalButton
              defaultService="Monthly AMC Consultation"
              className="px-7 py-3.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-[0_2px_12px_rgba(139,207,50,0.2)]"
            >
              Discuss Plan Options
            </OpenQuoteModalButton>

            <a
              href={getWhatsAppUrl("Hi Creators Aquarium, I'd like to discuss a monthly care plan for my tank.")}
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
        </div>
      </div>
    </div>
    </>
  );
}
