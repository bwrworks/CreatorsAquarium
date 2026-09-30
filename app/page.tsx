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
  Sparkles,
  Waves,
  Filter,
  Activity,
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
      desc: "Carefully balanced aquatic ecosystems calibrated for long-term biological stability.",
    },
    {
      title: "Filtration",
      items: "Canister · Internal · Sump · HOB",
      icon: Filter,
      desc: "Mechanical, biological, and chemical media overhaul without killing beneficial nitrifiers.",
    },
    {
      title: "Water Quality",
      items: "Water Changes · Parameter Testing · Conditioning",
      icon: Droplets,
      desc: "Temperature-matched partial water changes, heavy metal binding, and mineral calibration.",
    },
    {
      title: "Aquascaping",
      items: "Plant Trimming · Hardscape · Substrate Siphon",
      icon: Layers,
      desc: "Contour pruning with surgical tools, algae spot treatment, and detritus vacuuming.",
    },
    {
      title: "Equipment",
      items: "Lighting · CO₂ Systems · Pumps · Heaters · Skimmers",
      icon: Wrench,
      desc: "Safety inspections, timer synchronization, impeller cleaning, and diffuser maintenance.",
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
      desc: "Immaculate display aquariums maintained on a quiet, disciplined schedule for boardrooms and lobbies.",
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
    <div className="bg-[#050505] text-[#F4F4EF]">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center border-b border-[#242824] overflow-hidden py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101310] border border-[#242824] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8BCF32]" />
                CREATORS AQUARIUM · BENGALURU
              </div>

              <div className="space-y-2">
                <p className="text-xl sm:text-2xl font-serif text-[#A3A69F] italic">
                  Where Oceans Meet Nature
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F4F4EF] tracking-tight leading-[1.15]">
                  Professional Aquarium Setup & Maintenance
                </h1>
              </div>

              <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed max-w-xl">
                Thoughtfully designed aquariums and professional ongoing care for homes, offices and commercial spaces across Bengaluru.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="px-6 py-3.5 rounded bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-[0_0_20px_rgba(139,207,50,0.3)] cursor-pointer"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppUrl("Hi Creators Aquarium, I'd like to request a quote for aquarium care in Bengaluru.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded bg-[#101310] hover:bg-[#151915] border border-[#242824] hover:border-[#8BCF32]/50 text-[#F4F4EF] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#8BCF32]" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Fast Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#242824]/60 text-xs">
                <div>
                  <span className="block text-[#8BCF32] font-semibold text-sm">₹799</span>
                  <span className="text-[#70756D]">Starting visit rate</span>
                </div>
                <div>
                  <span className="block text-[#F4F4EF] font-semibold text-sm">Zero Coral</span>
                  <span className="text-[#70756D]">Strict Wildlife Act compliance</span>
                </div>
                <div>
                  <span className="block text-[#F4F4EF] font-semibold text-sm">SOP Reports</span>
                  <span className="text-[#70756D]">Delivered after every service</span>
                </div>
              </div>
            </div>

            {/* Right Cinematic Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-[#242824] bg-[#101310] shadow-[0_0_40px_rgba(139,207,50,0.06)] group">
                <Image
                  src="/images/hero.jpg"
                  alt="Creators Aquarium 4-foot planted nature aquarium in Bengaluru penthouse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#F4F4EF]/90 bg-[#050505]/80 backdrop-blur-md px-4 py-2 rounded border border-[#242824]">
                  <span>4 ft Planted Nature Aquarium · Bengaluru</span>
                  <span className="text-[#8BCF32] font-mono text-[11px]">Creators Standard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION (Image-First Architecture) */}
      <section className="py-20 border-b border-[#242824] bg-[#0A0C0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
                CORE CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#F4F4EF] mt-1">
                Aquatic Care Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#A3A69F] max-w-md mt-3 md:mt-0">
              Disciplined maintenance, custom installations, and technical support. Clear starting rates with no online payment required.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                className="group rounded-lg bg-[#101310] border border-[#242824] hover:border-[#8BCF32]/50 overflow-hidden flex flex-col transition-all duration-300"
              >
                {/* Large Image First */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#050505]">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#050505]/80 backdrop-blur-sm border border-[#242824] text-[10px] uppercase tracking-wider text-[#B4E35A] font-semibold">
                    {svc.category}
                  </div>
                </div>

                {/* Typography & Pricing */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold tracking-[0.12em] text-[#F4F4EF] uppercase group-hover:text-[#B4E35A] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-[#A3A69F] mt-2 line-clamp-2 leading-relaxed">
                      {svc.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#242824] flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-[#70756D] uppercase tracking-wider">
                        Starting from
                      </span>
                      <span className="text-xs font-semibold text-[#8BCF32]">
                        {svc.startingPrice}
                      </span>
                    </div>

                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1 text-xs text-[#F4F4EF] group-hover:text-[#8BCF32] transition-colors font-medium"
                    >
                      <span>Explore service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#70756D]">
            All prices are starting rates. Final quotation is issued after evaluating your tank volume and requirements.
          </div>
        </div>
      </section>

      {/* 3. WHAT WE MAINTAIN */}
      <section className="py-20 border-b border-[#242824] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
              TECHNICAL SCOPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF] mt-1">
              What We Maintain
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] mt-2">
              We handle every biological, chemical, and mechanical component of modern aquarium engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maintainCategories.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-3"
              >
                <div className="w-10 h-10 rounded bg-[#151915] border border-[#242824] flex items-center justify-center text-[#8BCF32]">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#F4F4EF]">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-[#8BCF32]">
                  {item.items}
                </p>
                <p className="text-xs text-[#A3A69F] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Quote Callout Card */}
            <div className="p-6 rounded-lg bg-[#151915] border border-[#8BCF32]/30 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8BCF32] font-semibold">
                  Custom Systems
                </span>
                <h3 className="text-base font-serif text-[#F4F4EF] mt-1">
                  Have a unique or oversized display?
                </h3>
                <p className="text-xs text-[#A3A69F] mt-2 leading-relaxed">
                  We service multi-canister setups, custom sumps, and automated CO2 dosing systems across Bengaluru.
                </p>
              </div>
              <button
                type="button"
                onClick={() => openQuoteModal("Custom Display Inquiry")}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8BCF32] hover:text-[#B4E35A]"
              >
                <span>Request Custom Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO WE SERVE */}
      <section className="py-20 border-b border-[#242824] bg-[#0A0C0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
              DESIGNED FOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF] mt-1">
              Who We Serve
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] mt-2">
              From personal living room centerpieces to commercial showroom displays.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeServe.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-[#101310] border border-[#242824] hover:border-[#8BCF32]/40 transition-colors space-y-3"
              >
                <div className="w-9 h-9 rounded bg-[#151915] border border-[#242824] flex items-center justify-center text-[#8BCF32]">
                  <item.icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold tracking-wide text-[#F4F4EF]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A3A69F] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BEFORE / AFTER: THE DIFFERENCE IS IN THE DETAILS */}
      <section className="py-20 border-b border-[#242824] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
              TRANSFORMATION PROOF
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#F4F4EF] mt-1">
              The Difference Is in the Details
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] mt-2">
              Every aquarium tells a story. We maintain it properly without destructive resets.
            </p>
          </div>

          <BeforeAfterSlider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12 pt-8 border-t border-[#242824]">
            <div className="p-4 rounded bg-[#101310] border border-[#242824] text-xs space-y-2">
              <span className="font-semibold text-[#A3A69F] uppercase tracking-wider block">
                Neglected Conditions Addressed
              </span>
              <p className="text-[#70756D]">
                Stubborn green spot algae on glass · Brown diatom blooms · Silt accumulation in substrate · Clogged filter impellers · Nutrient imbalances.
              </p>
            </div>
            <div className="p-4 rounded bg-[#101310] border border-[#8BCF32]/30 text-xs space-y-2">
              <span className="font-semibold text-[#8BCF32] uppercase tracking-wider block">
                Creators Restoration Standard
              </span>
              <p className="text-[#A3A69F]">
                Crystal optical glass detailing · Healthy stem pruning · Deep gravel siphon · Restored filtration flow · Balanced water chemistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SAMPLE SERVICE REPORT (Tangible Differentiator) */}
      <section className="py-20 border-b border-[#242824] bg-[#0A0C0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
              DOCUMENTED ACCOUNTABILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF] mt-1">
              The Creators Service Report
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] mt-2">
              We test, verify, and log your aquarium&apos;s parameters. You receive a digital report right on your WhatsApp after every visit.
            </p>
          </div>

          <ServiceReportCard />

          <div className="mt-8 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-[#8BCF32] hover:text-[#B4E35A]"
            >
              <span>See how our 5-step maintenance SOP works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. MAINTENANCE PLANS (Clean Luxury Cards) */}
      <section className="py-20 border-b border-[#242824] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
                RECURRING CARE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#F4F4EF] mt-1">
                Monthly Maintenance Plans
              </h2>
            </div>
            <div className="mt-4 md:mt-0 text-xs text-[#A3A69F] max-w-sm">
              Predictable scheduled visits. Cancel or pause anytime with zero lock-in contracts.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MAINTENANCE_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-lg bg-[#101310] border p-6 flex flex-col justify-between ${
                  plan.isPopular
                    ? "border-[#8BCF32] shadow-[0_0_25px_rgba(139,207,50,0.12)]"
                    : "border-[#242824]"
                }`}
              >
                <div className="space-y-4">
                  {plan.isPopular && (
                    <span className="inline-block px-2.5 py-0.5 rounded bg-[#8BCF32] text-[#050505] text-[10px] font-semibold uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="text-base font-serif text-[#F4F4EF]">
                      {plan.name}
                    </h3>
                    <p className="text-[11px] text-[#70756D] mt-0.5">
                      {plan.cadence}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#242824]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-semibold text-[#8BCF32]">
                        {plan.priceMonthly}
                      </span>
                      <span className="text-xs text-[#70756D]">/ month</span>
                    </div>
                    <span className="block text-[10px] text-[#70756D] mt-1">
                      {plan.targetTank}
                    </span>
                  </div>

                  <ul className="space-y-2 pt-3 border-t border-[#242824] text-xs text-[#A3A69F]">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8BCF32] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => openQuoteModal(`AMC Plan: ${plan.name}`)}
                    className={`w-full py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      plan.isPopular
                        ? "bg-[#8BCF32] text-[#050505] hover:bg-[#B4E35A]"
                        : "bg-[#151915] text-[#F4F4EF] hover:bg-[#242824] border border-[#242824]"
                    }`}
                  >
                    Request Plan
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#70756D]">
            Starting from. Final pricing depends on tank size, condition and service scope.
          </div>

          {/* Pricing Philosophy Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#242824]">
            {PRICING_PHILOSOPHY.map((phil, idx) => (
              <div key={idx} className="p-4 rounded bg-[#0A0C0A] border border-[#242824]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F4F4EF] mb-1">
                  {phil.title}
                </h4>
                <p className="text-[11px] text-[#70756D] leading-relaxed">
                  {phil.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BUILDING TRUST THROUGH PROCESS */}
      <section className="py-20 border-b border-[#242824] bg-[#0A0C0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
              DISCIPLINED STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF] mt-1">
              Building Trust Through Process
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] mt-2">
              We do not rely on generic promises. Our service is built on four verifiable pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-3">
              <Droplets className="w-6 h-6 text-[#8BCF32]" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F4F4EF]">
                Water Testing
              </h3>
              <p className="text-xs text-[#A3A69F] leading-relaxed">
                Digital meters for pH, TDS, and temperature verification before and after partial water exchanges.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-3">
              <FileCheck className="w-6 h-6 text-[#8BCF32]" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F4F4EF]">
                Documented Service
              </h3>
              <p className="text-xs text-[#A3A69F] leading-relaxed">
                Full digital service summary logs completed tasks, parameters, and technician observations for your tank record.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-3">
              <Shield className="w-6 h-6 text-[#8BCF32]" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F4F4EF]">
                Transparent Pricing
              </h3>
              <p className="text-xs text-[#A3A69F] leading-relaxed">
                Upfront quotes confirmed before touching your tank. No online payment trap or unexpected add-on charges.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#101310] border border-[#242824] space-y-3">
              <Wrench className="w-6 h-6 text-[#8BCF32]" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F4F4EF]">
                Professional Gear
              </h3>
              <p className="text-xs text-[#A3A69F] leading-relaxed">
                Surgical curved aquascaping tools, non-scratch razor scrapers, and aerated livestock transit containers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ PREVIEW */}
      <section className="py-20 border-b border-[#242824] bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
              QUESTIONS ANSWERED
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF] mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] mt-2">
              Straightforward answers about water safety, pricing, and scheduling.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.slice(0, 4).map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-[#101310] border border-[#242824] space-y-2"
              >
                <h3 className="text-sm font-semibold text-[#F4F4EF] flex items-center justify-between">
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-[#A3A69F] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-[#8BCF32] hover:text-[#B4E35A]"
            >
              <span>View all questions and answers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL CONVERSION BANNER */}
      <section className="py-20 bg-gradient-to-b from-[#0A0C0A] to-[#050505]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
            BENGALURU AQUARIUM CARE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F4EF] max-w-xl mx-auto leading-tight">
            Ready to give your aquarium the care it deserves?
          </h2>
          <p className="text-xs sm:text-sm text-[#A3A69F] max-w-md mx-auto">
            Send us a photo or approximate tank dimensions. We will assess the setup and provide a clear quotation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="px-6 py-3.5 rounded bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(139,207,50,0.3)]"
            >
              <span>Request a Service Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppUrl("Hi Creators Aquarium, I would like to schedule an aquarium maintenance visit in Bengaluru.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded bg-[#101310] hover:bg-[#151915] border border-[#242824] hover:border-[#8BCF32]/50 text-[#F4F4EF] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#8BCF32]" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>

          <p className="text-[11px] text-[#70756D] pt-4">
            Serving Indiranagar, Koramangala, Whitefield, HSR Layout, JP Nagar, and all Bengaluru zones.
          </p>
        </div>
      </section>
    </div>
  );
}
