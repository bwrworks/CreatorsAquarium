"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { SERVICES } from "@/lib/data/services";
import { MAINTENANCE_PLANS } from "@/lib/data/plans";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { ServiceReportCard } from "@/components/ui/ServiceReportCard";

export default function HomePage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="bg-[#FFFFFF] text-[#0A0F1D] w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full border-b border-[#E2E8F0] overflow-hidden py-12 lg:py-20 bg-gradient-to-b from-[#F8FAFC] to-[#FFFFFF]">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
                <span className="w-2 h-2 rounded-full bg-[#0070E0]" />
                BENGALURU AQUARIUM CARE
              </div>

              <div className="space-y-2">
                <p className="text-xl sm:text-2xl font-serif text-[#0070E0] italic font-medium">
                  Where Oceans Meet Nature
                </p>
                <h1 className="text-3xl sm:text-5xl xl:text-6xl font-serif text-[#0A0F1D] tracking-tight leading-[1.15] font-bold">
                  Professional Aquarium Setup & Maintenance
                </h1>
              </div>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl font-normal">
                Specialized care, natural aquascaping, and routine servicing for homes, offices, and commercial spaces across Bengaluru.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="px-7 py-3.5 rounded-md bg-[#0070E0] hover:bg-[#0088FF] text-[#FFFFFF] text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-[0_4px_20px_rgba(0,112,224,0.3)] cursor-pointer"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppUrl("Hi Creators Aquarium, I would like to request a quote for my aquarium in Bengaluru.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-md bg-[#FFFFFF] hover:bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0070E0] text-[#0A0F1D] text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#0070E0]" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                  className="px-5 py-3.5 rounded-md bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0A0F1D] text-xs font-semibold tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0070E0]" />
                  <span>{BRAND.phoneDisplay}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E2E8F0] text-xs">
                <div>
                  <span className="block text-[#0070E0] font-bold text-base">From ₹799</span>
                  <span className="text-[#64748B]">Routine visit rate</span>
                </div>
                <div>
                  <span className="block text-[#0A0F1D] font-bold text-base">100% Legal</span>
                  <span className="text-[#64748B]">Wildlife Act compliant</span>
                </div>
                <div>
                  <span className="block text-[#0A0F1D] font-bold text-base">Service Report</span>
                  <span className="text-[#64748B]">WhatsApp summary after visit</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#CBD5E1] bg-[#F1F5F9] shadow-xl group">
                <Image
                  src="/images/hero.jpg"
                  alt="Creators Aquarium 4-foot planted nature aquarium in Bengaluru penthouse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 850px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D]/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FFFFFF] bg-[#0A0F1D]/80 backdrop-blur-md px-4 py-2.5 rounded-lg border border-[#CBD5E1]/30">
                  <span className="font-medium">4 ft Planted Nature Aquarium · Bengaluru</span>
                  <span className="text-[#38BDF8] font-mono font-bold text-[11px]">Bespoke Setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-16 sm:py-24 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
                OUR SERVICES
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#0A0F1D] mt-1 font-bold">
                Specialized Aquatic Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] max-w-md mt-3 md:mt-0 leading-relaxed">
              From one-time deep restorations to recurring monthly maintenance and custom installations.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                className="group rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#0070E0] shadow-sm hover:shadow-md overflow-hidden flex flex-col transition-all duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F1F5F9]">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#E2E8F0] text-[10px] uppercase tracking-wider text-[#0070E0] font-bold shadow-xs">
                    {svc.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="text-sm font-bold tracking-[0.1em] text-[#0A0F1D] uppercase group-hover:text-[#0070E0] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] mt-2 line-clamp-2 leading-relaxed">
                      {svc.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-[#64748B] uppercase tracking-wider font-semibold">
                        Starting from
                      </span>
                      <span className="text-sm font-bold text-[#0070E0]">
                        {svc.startingPrice}
                      </span>
                    </div>

                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs text-[#0A0F1D] group-hover:text-[#0070E0] transition-colors font-bold"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#64748B]">
            All prices are starting estimates. Final quote provided based on tank size and condition.
          </div>
        </div>
      </section>

      {/* 3. BEFORE & AFTER TRANSFORMATION */}
      <section className="py-16 sm:py-24 border-b border-[#E2E8F0] bg-[#FFFFFF]">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
              PROVEN RESULTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#0A0F1D] mt-1 font-bold">
              Before & After Maintenance
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Drag the slider to see how a single thorough visit restores water clarity, plant vitality, and glass transparency.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* 4. DIGITAL SERVICE REPORT */}
      <section className="py-16 sm:py-24 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
              ACCOUNTABILITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#0A0F1D] mt-1 font-bold">
              The Creators Service Report
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Every visit ends with a digital log sent straight to your WhatsApp showing tested water parameters and work done.
            </p>
          </div>

          <ServiceReportCard />

          <div className="mt-8 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#0070E0] hover:text-[#0055B3]"
            >
              <span>See our 5-step maintenance process</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. MONTHLY MAINTENANCE PLANS */}
      <section className="py-16 sm:py-24 border-b border-[#E2E8F0] bg-[#FFFFFF]">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
                RECURRING CARE
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#0A0F1D] mt-1 font-bold">
                Monthly Maintenance Plans
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2 md:mt-0">
              Scheduled weekly or bi-weekly visits. No long-term lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {MAINTENANCE_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-xl bg-[#FFFFFF] border p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all ${
                  plan.isPopular
                    ? "border-[#0070E0] ring-2 ring-[#0070E0]/20"
                    : "border-[#E2E8F0]"
                }`}
              >
                <div className="space-y-4">
                  {plan.isPopular && (
                    <span className="inline-block px-3 py-1 rounded-md bg-[#0070E0] text-[#FFFFFF] text-[10px] font-bold uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="text-lg font-serif text-[#0A0F1D] font-bold">
                      {plan.name}
                    </h3>
                    <p className="text-[11px] text-[#64748B] mt-0.5 font-medium">
                      {plan.cadence}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E2E8F0]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-[#0070E0]">
                        {plan.priceMonthly}
                      </span>
                      <span className="text-xs text-[#64748B]">/ month</span>
                    </div>
                    <span className="block text-[10px] text-[#64748B] mt-1">
                      {plan.targetTank}
                    </span>
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-[#E2E8F0] text-xs text-[#475569]">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0070E0] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => openQuoteModal(`AMC Plan: ${plan.name}`)}
                    className={`w-full py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      plan.isPopular
                        ? "bg-[#0070E0] text-[#FFFFFF] hover:bg-[#0088FF]"
                        : "bg-[#F1F5F9] text-[#0A0F1D] hover:bg-[#E2E8F0] border border-[#CBD5E1]"
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F8FAFC] to-[#E0F2FE]/30">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
            CONNECT WITH US
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0A0F1D] leading-tight font-bold">
            Ready for a cleaner, healthier aquarium?
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] max-w-lg mx-auto">
            Share a photo of your tank with dimensions on WhatsApp or give us a direct call at <strong className="text-[#0A0F1D]">{BRAND.phoneDisplay}</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="px-7 py-3.5 rounded-md bg-[#0070E0] hover:bg-[#0088FF] text-[#FFFFFF] text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppUrl("Hi Creators Aquarium, I would like to schedule an aquarium maintenance visit in Bengaluru.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-md bg-[#FFFFFF] hover:bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0070E0] text-[#0A0F1D] text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#0070E0]" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>

          <p className="text-[11px] text-[#64748B] pt-4">
            Serving Indiranagar, Koramangala, Whitefield, HSR Layout, JP Nagar, and all areas across Bengaluru.
          </p>
        </div>
      </section>
    </div>
  );
}
