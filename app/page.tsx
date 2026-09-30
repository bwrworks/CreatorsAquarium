"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Phone,
  Droplets,
  Shield,
  FileCheck,
  CheckCircle2,
  Waves,
  Filter,
  Layers,
  Wrench,
  Home,
  Building2,
  UtensilsCrossed,
  Store,
} from "lucide-react";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { SERVICES } from "@/lib/data/services";
import { MAINTENANCE_PLANS, PRICING_PHILOSOPHY } from "@/lib/data/plans";
import { FAQS } from "@/lib/data/faqs";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { ServiceReportCard } from "@/components/ui/ServiceReportCard";

export default function HomePage() {
  const { openQuoteModal } = useQuoteModal();

  const maintainCategories = [
    {
      title: "Aquariums",
      items: "Freshwater · Planted · Marine Fish-Only",
      icon: Waves,
      desc: "Carefully balanced aquatic ecosystems calibrated for long-term biological stability and crystal clarity.",
    },
    {
      title: "Filtration",
      items: "Canister · Internal · Sump · HOB",
      icon: Filter,
      desc: "Mechanical, biological, and chemical media overhaul without killing beneficial nitrifying bacteria.",
    },
    {
      title: "Water Quality",
      items: "Water Changes · Parameter Testing · Conditioning",
      icon: Droplets,
      desc: "Temperature-matched partial water changes, heavy metal neutralization, and mineral calibration.",
    },
    {
      title: "Aquascaping",
      items: "Plant Trimming · Hardscape · Substrate Siphon",
      icon: Layers,
      desc: "Contour pruning with surgical tools, algae spot eradication, and detritus vacuuming.",
    },
    {
      title: "Equipment",
      items: "Lighting · CO₂ Systems · Pumps · Heaters · Skimmers",
      icon: Wrench,
      desc: "Electrical safety inspections, timer synchronization, impeller cleaning, and diffuser maintenance.",
    },
  ];

  const whoWeServe = [
    {
      title: "Homes & Residences",
      desc: "Aquariums that remain pristine and healthy without becoming another demanding weekend chore.",
      icon: Home,
    },
    {
      title: "Executive Offices",
      desc: "Immaculate display aquariums maintained on a quiet, disciplined schedule for boardrooms and reception lobbies.",
      icon: Building2,
    },
    {
      title: "Restaurants & Hospitality",
      desc: "Consistent visual presentation and dependable maintenance ensuring guest-facing perfection.",
      icon: UtensilsCrossed,
    },
    {
      title: "Commercial Spaces",
      desc: "Custom architectural aquarium environments backed by comprehensive ongoing SLA support.",
      icon: Store,
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#0A0F1D] w-full">
      {/* 1. CINEMATIC HERO SECTION (Full Desktop View) */}
      <section className="relative w-full border-b border-[#E2E8F0] overflow-hidden py-12 lg:py-20 bg-gradient-to-b from-[#F8FAFC] to-[#FFFFFF]">
        <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
                <span className="w-2 h-2 rounded-full bg-[#0070E0]" />
                CREATORS AQUARIUM · BENGALURU
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
                Thoughtfully designed aquariums and professional ongoing care for homes, offices and commercial spaces across Bengaluru.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="px-7 py-3.5 rounded-md bg-[#0070E0] hover:bg-[#0088FF] text-[#FFFFFF] text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-[0_4px_20px_rgba(0,112,224,0.3)] cursor-pointer"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppUrl("Hi Creators Aquarium, I'd like to request a quote for aquarium care in Bengaluru.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-md bg-[#FFFFFF] hover:bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0070E0] text-[#0A0F1D] text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-2 shadow-xs"
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

              {/* Fast Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E2E8F0] text-xs">
                <div>
                  <span className="block text-[#0070E0] font-bold text-base">From ₹799</span>
                  <span className="text-[#64748B]">Routine visit rate</span>
                </div>
                <div>
                  <span className="block text-[#0A0F1D] font-bold text-base">Zero Coral</span>
                  <span className="text-[#64748B]">Wildlife Act compliant</span>
                </div>
                <div>
                  <span className="block text-[#0A0F1D] font-bold text-base">SOP Reports</span>
                  <span className="text-[#64748B]">Provided after each visit</span>
                </div>
              </div>
            </div>

            {/* Right Cinematic Image */}
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
                  <span className="text-[#38BDF8] font-mono font-bold text-[11px]">Creators Standard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION (Image-First Architecture, Full Desktop Width) */}
      <section className="py-20 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
                CORE CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0A0F1D] mt-1 font-bold">
                Aquatic Care Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] max-w-lg mt-3 md:mt-0 leading-relaxed font-normal">
              Disciplined maintenance, custom installations, and technical support. Transparent starting rates with zero online payment required.
            </p>
          </div>

          {/* Service Cards Grid (Expansive 3-column / 5-card layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                className="group rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#0070E0] shadow-sm hover:shadow-md overflow-hidden flex flex-col transition-all duration-300"
              >
                {/* Large Image First */}
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

                {/* Typography & Pricing */}
                <div className="p-7 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="text-sm font-bold tracking-[0.12em] text-[#0A0F1D] uppercase group-hover:text-[#0070E0] transition-colors">
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
                      <span>Explore service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#64748B]">
            All prices are starting rates. Final quotation is issued after evaluating your tank volume and requirements. Call: <strong className="text-[#0A0F1D]">{BRAND.phoneDisplay}</strong>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE MAINTAIN (Expansive full view) */}
      <section className="py-20 border-b border-[#E2E8F0] bg-[#FFFFFF]">
        <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
              TECHNICAL SCOPE
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#0A0F1D] mt-1 font-bold">
              What We Maintain
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              We handle every biological, chemical, and mechanical component of modern aquarium engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maintainCategories.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0070E0]/50 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#0070E0]">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-[#0A0F1D]">
                  {item.title}
                </h3>
                <p className="text-xs font-mono font-semibold text-[#0070E0]">
                  {item.items}
                </p>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Quote Callout Card */}
            <div className="p-7 rounded-xl bg-[#0070E0] text-[#FFFFFF] flex flex-col justify-between space-y-4 shadow-md">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#BAE6FD] font-bold">
                  Custom Systems
                </span>
                <h3 className="text-lg font-serif text-[#FFFFFF] mt-1 font-bold">
                  Have a unique or oversized display?
                </h3>
                <p className="text-xs text-[#E0F2FE] mt-2 leading-relaxed">
                  We service multi-canister setups, custom sumps, and automated CO2 dosing systems across Bengaluru.
                </p>
              </div>
              <button
                type="button"
                onClick={() => openQuoteModal("Custom Display Inquiry")}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] bg-[#0055B3] hover:bg-[#004494] px-4 py-2.5 rounded-md transition-colors w-fit cursor-pointer"
              >
                <span>Request Custom Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO WE SERVE */}
      <section className="py-20 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
              DESIGNED FOR
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#0A0F1D] mt-1 font-bold">
              Who We Serve
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              From personal living room centerpieces to commercial showroom displays.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whoWeServe.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#0070E0] shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#0070E0]">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0A0F1D]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BEFORE / AFTER: THE DIFFERENCE IS IN THE DETAILS */}
      <section className="py-20 border-b border-[#E2E8F0] bg-[#FFFFFF]">
        <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
              TRANSFORMATION PROOF
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#0A0F1D] mt-1 font-bold">
              The Difference Is in the Details
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Every aquarium tells a story. We maintain it properly without destructive resets.
            </p>
          </div>

          <BeforeAfterSlider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12 pt-8 border-t border-[#E2E8F0]">
            <div className="p-5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs space-y-2">
              <span className="font-bold text-[#64748B] uppercase tracking-wider block">
                Neglected Conditions Addressed
              </span>
              <p className="text-[#475569]">
                Stubborn green spot algae on glass · Brown diatom blooms · Silt accumulation in substrate · Clogged filter impellers · Nutrient imbalances.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-[#E0F2FE]/50 border border-[#BAE6FD] text-xs space-y-2">
              <span className="font-bold text-[#0070E0] uppercase tracking-wider block">
                Creators Restoration Standard
              </span>
              <p className="text-[#0A0F1D]">
                Crystal optical glass detailing · Healthy stem pruning · Deep gravel siphon · Restored filtration flow · Balanced water chemistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SAMPLE SERVICE REPORT (Tangible Differentiator) */}
      <section className="py-20 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
              DOCUMENTED ACCOUNTABILITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#0A0F1D] mt-1 font-bold">
              The Creators Service Report
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              We test, verify, and log your aquarium&apos;s parameters. You receive a digital report right on your WhatsApp after every visit.
            </p>
          </div>

          <ServiceReportCard />

          <div className="mt-8 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#0070E0] hover:text-[#0055B3]"
            >
              <span>See how our 5-step maintenance SOP works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. MAINTENANCE PLANS (Clean Luxury Cards) */}
      <section className="py-20 border-b border-[#E2E8F0] bg-[#FFFFFF]">
        <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
                RECURRING CARE
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#0A0F1D] mt-1 font-bold">
                Monthly Maintenance Plans
              </h2>
            </div>
            <div className="mt-4 md:mt-0 text-xs text-[#64748B] max-w-sm">
              Predictable scheduled visits. Cancel or pause anytime with zero lock-in contracts.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    Request Plan
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#64748B]">
            Starting from. Final pricing depends on tank size, condition and service scope.
          </div>

          {/* Pricing Philosophy Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[#E2E8F0]">
            {PRICING_PHILOSOPHY.map((phil, idx) => (
              <div key={idx} className="p-5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A0F1D] mb-1">
                  {phil.title}
                </h4>
                <p className="text-[11px] text-[#64748B] leading-relaxed">
                  {phil.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BUILDING TRUST THROUGH PROCESS */}
      <section className="py-20 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
              DISCIPLINED STANDARDS
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#0A0F1D] mt-1 font-bold">
              Building Trust Through Process
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              We do not rely on generic promises. Our service is built on four verifiable pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-7 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm space-y-3">
              <Droplets className="w-6 h-6 text-[#0070E0]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A0F1D]">
                Water Testing
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Digital meters for pH, TDS, and temperature verification before and after partial water exchanges.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm space-y-3">
              <FileCheck className="w-6 h-6 text-[#0070E0]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A0F1D]">
                Documented Service
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Full digital service summary logs completed tasks, parameters, and technician observations for your tank record.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm space-y-3">
              <Shield className="w-6 h-6 text-[#0070E0]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A0F1D]">
                Transparent Pricing
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Upfront quotes confirmed before touching your tank. No online payment trap or unexpected add-on charges.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm space-y-3">
              <Wrench className="w-6 h-6 text-[#0070E0]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A0F1D]">
                Professional Gear
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Surgical curved aquascaping tools, non-scratch razor scrapers, and aerated livestock transit containers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ PREVIEW */}
      <section className="py-20 border-b border-[#E2E8F0] bg-[#FFFFFF]">
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
              QUESTIONS ANSWERED
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0A0F1D] mt-1 font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Straightforward answers about water safety, pricing, and scheduling.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.slice(0, 4).map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2"
              >
                <h3 className="text-sm font-bold text-[#0A0F1D] flex items-center justify-between">
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#0070E0] hover:text-[#0055B3]"
            >
              <span>View all questions and answers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL CONVERSION BANNER */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-[#E0F2FE]/40">
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
            BENGALURU AQUARIUM CARE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0A0F1D] max-w-2xl mx-auto leading-tight font-bold">
            Ready to give your aquarium the care it deserves?
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] max-w-lg mx-auto">
            Send us a photo or approximate tank dimensions. Call or message us directly at <strong className="text-[#0A0F1D]">{BRAND.phoneDisplay}</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="px-7 py-3.5 rounded-md bg-[#0070E0] hover:bg-[#0088FF] text-[#FFFFFF] text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Request a Service Quote</span>
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
            Serving Indiranagar, Koramangala, Whitefield, HSR Layout, JP Nagar, and all Bengaluru localities.
          </p>
        </div>
      </section>
    </div>
  );
}
