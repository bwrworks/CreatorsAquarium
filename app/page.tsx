import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  Sparkles,
  Wrench,
  Truck,
  Compass,
  FileCheck2,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { TANK_SIZES, TURNKEY_STEPS } from "@/lib/data/setup";
import { MAINTENANCE_PLANS } from "@/lib/data/plans";
import { GALLERY_ITEMS } from "@/lib/data/gallery";
import { TankSizeSelector } from "@/components/ui/TankSizeSelector";
import { ServiceReportCard } from "@/components/ui/ServiceReportCard";
import { OpenQuoteModalButton } from "@/components/ui/OpenQuoteModalButton";
import { BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Custom Aquarium Design, Turnkey Setup & Maintenance Bengaluru",
  description:
    "Creators Aquarium designs, sources, builds, and installs custom aquariums from 1 ft to 6 ft, then provides disciplined ongoing care across Bengaluru.",
  keywords: [
    "custom aquarium Bangalore",
    "aquarium setup Bengaluru",
    "aquarium maintenance Bangalore",
    "fish tank cleaning Bengaluru",
    "turnkey aquarium installation Bangalore",
    "planted aquarium Bangalore",
    "marine aquarium Bangalore",
  ],
  alternates: {
    canonical: BASE_URL,
  },
};

export default function HomePage() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Creators Aquarium",
    url: BASE_URL,
    description:
      "Custom aquarium design, turnkey setup from 1 ft to 6 ft, and professional ongoing maintenance across Bengaluru.",
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: `${BASE_URL}/brand/icon.png`,
    },
  };

  const whatWeDo = [
    {
      step: "01",
      title: "New Aquarium Setup",
      subtitle: "Turnkey Design & Build",
      desc: "We design, source, build, and install the complete aquarium from 1 ft to 6 ft with custom cabinetry, filtration, and lighting.",
      icon: Sparkles,
      href: "/setup",
      cta: "Explore Setups",
    },
    {
      step: "02",
      title: "Aquarium Maintenance",
      subtitle: "Disciplined Ongoing Care",
      desc: "We clean it, test water parameters, check equipment, and deliver documented digital reports after every visit across Bengaluru.",
      icon: Wrench,
      href: "/maintenance",
      cta: "View Maintenance",
    },
    {
      step: "03",
      title: "Relocation & Upgrades",
      subtitle: "Safe Moving & Rebuilds",
      desc: "Controlled tank shifting with aerated livestock transport, bio-media preservation in water, and rapid re-commissioning.",
      icon: Truck,
      href: "/services/relocation",
      cta: "Relocation Info",
    },
  ];

  const whyPillars = [
    {
      title: "Custom Design",
      desc: "Aquariums engineered for your specific room dimensions, interior finishes, and livestock preferences.",
      icon: Compass,
    },
    {
      title: "Complete Setup",
      desc: "You aren't just buying glass. We configure the tank, stand, plumbing, lighting, and living aquascape.",
      icon: Layers,
    },
    {
      title: "Professional Installation",
      desc: "Precision structural leveling, pipework leak inspections, and standardized electrical safety.",
      icon: ShieldCheck,
    },
    {
      title: "Documented Care",
      desc: "Transparent upfront pricing and documented digital water parameter logs delivered after every visit.",
      icon: FileCheck2,
    },
  ];

  const inspirationPreview = GALLERY_ITEMS.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <div className="bg-[#050505] text-[#F4F4EF] w-full">
        {/* 1. HERO SECTION */}
        <section className="relative w-full border-b border-[#242824] py-16 lg:py-24 bg-gradient-to-b from-[#0A0C0A] to-[#050505] overflow-hidden">
          <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101310] border border-[#242824] text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                  <span className="w-2 h-2 rounded-full bg-[#8BCF32] animate-pulse" />
                  CUSTOM AQUARIUM DESIGN & BUILD
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-5xl xl:text-6xl font-serif text-[#F4F4EF] tracking-tight leading-[1.12] font-bold">
                    Custom Aquariums. Designed. Built. Installed.
                  </h1>
                  <p className="text-base sm:text-lg text-[#A3A69F] leading-relaxed max-w-2xl font-normal">
                    Turnkey freshwater, planted, and marine fish-only systems from 1 ft to 6 ft, backed by disciplined ongoing maintenance across Bengaluru.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-[#70756D] font-mono">
                  <span className="text-[#8BCF32] font-semibold">Freshwater · Planted · Marine Fish-Only</span>
                  <span>•</span>
                  <span>1 ft to 6 ft & Custom Architectural</span>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <OpenQuoteModalButton
                    service="NEW SETUP"
                    className="px-7 py-3.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] active:bg-[#638F24] text-[#050505] text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shadow-[0_2px_16px_rgba(139,207,50,0.25)] cursor-pointer"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </OpenQuoteModalButton>

                  <a
                    href={getWhatsAppUrl("Hi Creators Aquarium, I would like to discuss a custom aquarium setup in Bengaluru.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-md bg-[#101310] hover:bg-[#151915] border border-[#242824] hover:border-[#8BCF32]/60 text-[#F4F4EF] text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-[#8BCF32]" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visual Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#242824] bg-[#0A0C0A] shadow-2xl">
                  <Image
                    src="/images/hero.jpg"
                    alt="Creators Aquarium Custom Planted Nature Display"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#050505]/90 backdrop-blur-md border border-[#242824] flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-[#8BCF32] font-bold uppercase tracking-wider block">
                        Turnkey Custom Studio
                      </span>
                      <span className="font-serif font-bold text-[#F4F4EF]">
                        Complete Sourcing, Build & Installation
                      </span>
                    </div>
                    <Link
                      href="/setup"
                      className="px-3 py-1.5 rounded-md bg-[#151915] border border-[#242824] hover:border-[#8BCF32] text-[11px] font-bold text-[#8BCF32] transition-colors"
                    >
                      View Setups
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT WE DO (THE THREE CORE PILLARS) */}
        <section className="py-20 border-b border-[#242824]">
          <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14 space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                CORE CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] font-bold">
                What We Do
              </h2>
              <p className="text-xs sm:text-sm text-[#A3A69F]">
                Three specialized services covering the complete lifecycle of your aquarium.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whatWeDo.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#0A0C0A] border border-[#242824] hover:border-[#8BCF32]/50 p-8 flex flex-col justify-between shadow-xl transition-all duration-300 space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-extrabold text-[#8BCF32]">
                        {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-[#151915] border border-[#242824] flex items-center justify-center text-[#8BCF32]">
                        <item.icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#70756D]">
                        {item.subtitle}
                      </span>
                      <h3 className="text-xl font-serif text-[#F4F4EF] font-bold mt-0.5">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#242824]">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8BCF32] hover:text-[#B4E35A] uppercase tracking-wider transition-colors"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. BUILD YOUR AQUARIUM (INTERACTIVE SELECTOR TEASER) */}
        <section className="py-20 border-b border-[#242824] bg-gradient-to-b from-[#050505] to-[#0A0C0A]">
          <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                CUSTOM CONFIGURATION
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] font-bold">
                Build Your Aquarium
              </h2>
              <p className="text-xs sm:text-sm text-[#A3A69F]">
                Select your preferred size from 1 ft to 6 ft. Choose between freshwater, planted, and marine fish-only configurations.
              </p>
            </div>

            <TankSizeSelector />
          </div>
        </section>

        {/* 4. FROM IDEA TO AQUARIUM (TURNKEY PROCESS) */}
        <section className="py-20 border-b border-[#242824]">
          <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                THE TURNKEY JOURNEY
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] font-bold">
                From Idea to Aquarium
              </h2>
              <p className="text-xs sm:text-sm text-[#A3A69F]">
                Consultation → Design & Quote → Sourcing & Fabrication → Delivery & Placement → Installation & Aquascaping → Commissioning → Handover → Ongoing Care.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TURNKEY_STEPS.map((s, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#0A0C0A] border border-[#242824] p-6 shadow-xl space-y-2.5 hover:border-[#8BCF32]/50 transition-colors"
                >
                  <span className="font-mono text-xl font-extrabold text-[#8BCF32] block">
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
        </section>

        {/* 5. WHY CREATORS AQUARIUM */}
        <section className="py-20 border-b border-[#242824] bg-[#0A0C0A]">
          <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                OUR SERVICE STANDARDS
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] font-bold">
                Why Creators Aquarium
              </h2>
              <p className="text-xs sm:text-sm text-[#A3A69F]">
                Disciplined technical standards, complete setups, and documented care.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyPillars.map((p, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-xl bg-[#101310] border border-[#242824] shadow-xl space-y-3"
                >
                  <p.icon className="w-6 h-6 text-[#8BCF32]" />
                  <h3 className="text-base font-serif text-[#F4F4EF] font-bold">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#A3A69F] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. AQUARIUM INSPIRATION (ETHICAL CONCEPTS) */}
        <section className="py-20 border-b border-[#242824]">
          <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                  DESIGN ARCHIVE
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] font-bold">
                  Aquarium Inspirations & Concepts
                </h2>
                <p className="text-xs sm:text-sm text-[#A3A69F]">
                  Reference designs, botanical layout concepts, and technical configurations crafted for homes and offices.
                </p>
              </div>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#8BCF32] hover:text-[#B4E35A] uppercase tracking-wider transition-colors"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {inspirationPreview.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-xl bg-[#0A0C0A] border border-[#242824] hover:border-[#8BCF32]/50 overflow-hidden shadow-2xl transition-all"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101310]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#050505]/85 backdrop-blur-sm border border-[#242824] text-[10px] uppercase font-bold text-[#8BCF32]">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-[11px] text-[#70756D] font-mono">
                      {item.tankSpec}
                    </span>
                    <h3 className="text-base font-serif text-[#F4F4EF] font-bold group-hover:text-[#8BCF32] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A3A69F] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PROFESSIONAL MAINTENANCE & AMC PLANS */}
        <section className="py-20 border-b border-[#242824] bg-[#0A0C0A]">
          <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Maintenance Info & Pricing */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                    ONGOING HEALTH
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] font-bold">
                    Professional Maintenance & AMC Plans
                  </h2>
                  <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                    We clean it, test water chemistry, inspect filtration, and keep your aquarium thriving without personal hassle.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-[#101310] border border-[#242824] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#70756D]">
                      Single Visits
                    </span>
                    <span className="text-2xl font-bold text-[#8BCF32] block">
                      From ₹799<span className="text-xs text-[#70756D] font-normal">/visit</span>
                    </span>
                    <span className="text-[11px] text-[#A3A69F]">
                      Routine cleaning & testing
                    </span>
                  </div>

                  <div className="p-5 rounded-xl bg-[#101310] border border-[#8BCF32]/50 space-y-1 relative">
                    <span className="text-[10px] uppercase font-bold text-[#8BCF32]">
                      Maintenance Plans
                    </span>
                    <span className="text-2xl font-bold text-[#8BCF32] block">
                      From ₹1,499<span className="text-xs text-[#70756D] font-normal">/mo</span>
                    </span>
                    <span className="text-[11px] text-[#A3A69F]">
                      Essential & Standard AMCs
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/maintenance"
                    className="px-6 py-3 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    View Maintenance Services
                  </Link>

                  <Link
                    href="/maintenance-plans"
                    className="px-6 py-3 rounded-md bg-[#101310] hover:bg-[#151915] border border-[#242824] text-xs font-bold uppercase tracking-wider text-[#F4F4EF] transition-colors"
                  >
                    Compare Monthly Plans
                  </Link>
                </div>
              </div>

              {/* Right Column: Compact Service Report Showcase */}
              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-[#050505] border border-[#242824] shadow-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-[#242824] pb-3">
                    <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-[#8BCF32]">
                      SIGNATURE ACCOUNTABILITY
                    </span>
                    <span className="text-xs font-mono text-[#70756D]">
                      Delivered on WhatsApp
                    </span>
                  </div>
                  <h3 className="text-lg font-serif text-[#F4F4EF] font-bold">
                    Every Service. Documented.
                  </h3>
                  <p className="text-xs text-[#A3A69F] leading-relaxed">
                    Tested water parameters (pH, TDS, Temperature, Nitrate) and hardware inspection checklists sent directly to your phone after each maintenance visit.
                  </p>
                  <ServiceReportCard />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FINAL CALL TO ACTION */}
        <section className="py-20 bg-gradient-to-b from-[#0A0C0A] to-[#050505] border-t border-[#242824]">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
              START YOUR PROJECT
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] leading-tight font-bold">
              Ready to Build Your Aquarium?
            </h2>

            <p className="text-xs sm:text-sm text-[#A3A69F] max-w-md mx-auto">
              Share your room dimensions, vision, or space photos on WhatsApp for an itemized custom proposal across Bengaluru.
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
                href={getWhatsAppUrl("Hi Creators Aquarium, I'd like to start planning a custom aquarium in Bengaluru.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-md bg-[#101310] hover:bg-[#151915] border border-[#242824] hover:border-[#8BCF32]/60 text-xs font-bold uppercase tracking-wider text-[#F4F4EF] flex items-center gap-2 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#8BCF32]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <p className="text-[11px] text-[#70756D] pt-2">
              Serving Indiranagar, Koramangala, Whitefield, HSR Layout, JP Nagar, and all areas across Bengaluru.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
