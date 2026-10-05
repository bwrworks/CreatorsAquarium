import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  Droplets,
  FileCheck2,
  Receipt,
  CalendarCheck,
} from "lucide-react";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { SERVICES } from "@/lib/data/services";
import { MAINTENANCE_PLANS } from "@/lib/data/plans";
import { OpenQuoteModalButton } from "@/components/ui/OpenQuoteModalButton";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { ServiceReportCard } from "@/components/ui/ServiceReportCard";
import { BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Creators Aquarium | Professional Aquarium Setup & Maintenance Bengaluru",
  description:
    "Premium aquarium setup, routine maintenance, and nature aquascaping across Bengaluru. Water parameter testing, filter care, and scheduled AMCs for homes and offices.",
  keywords: [
    "aquarium maintenance Bangalore",
    "fish tank cleaning Bengaluru",
    "aquarium setup Bangalore",
    "aquascaping Bangalore",
    "custom aquarium installation Bengaluru",
    "aquarium AMC Bangalore",
    "fish tank maintenance near me",
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
    description: BRAND.heroDescription,
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: `${BASE_URL}/brand/icon.png`,
    },
  };

  const whyPillars = [
    {
      title: "Water Parameter Testing",
      description:
        "pH, TDS, temperature, ammonia, nitrite and nitrate, where applicable.",
      icon: Droplets,
    },
    {
      title: "Documented Service",
      description:
        "Detailed WhatsApp summary and parameters log delivered after every visit.",
      icon: FileCheck2,
    },
    {
      title: "Transparent Pricing",
      description:
        "Clear, itemized quotes before any visit. Zero unexpected charges.",
      icon: Receipt,
    },
    {
      title: "Scheduled Maintenance",
      description:
        "Disciplined recurring visits that preserve biological balance and prevent crashes.",
      icon: CalendarCheck,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <div className="bg-[#050505] text-[#F4F4EF] w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full border-b border-[#242824] overflow-hidden py-14 lg:py-24 bg-gradient-to-b from-[#0A0C0A] to-[#050505]">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101310] border border-[#242824] text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                <span className="w-2 h-2 rounded-full bg-[#8BCF32] animate-pulse" />
                CREATORS AQUARIUM
              </div>

              <div className="space-y-2">
                <p className="text-xl sm:text-2xl font-serif text-[#8BCF32] italic font-medium">
                  Where Oceans Meet Nature
                </p>
                <h1 className="text-3xl sm:text-5xl xl:text-6xl font-serif text-[#F4F4EF] tracking-tight leading-[1.15] font-bold">
                  Professional Aquarium Setup & Maintenance
                </h1>
              </div>

              <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed max-w-2xl font-normal">
                Thoughtfully designed aquariums and dependable ongoing care for homes, offices and commercial spaces across Bengaluru.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <OpenQuoteModalButton
                  className="px-7 py-3.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] active:bg-[#638F24] text-[#050505] text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shadow-[0_2px_16px_rgba(139,207,50,0.25)] cursor-pointer"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </OpenQuoteModalButton>

                <a
                  href={getWhatsAppUrl("Hi Creators Aquarium, I would like to request a quote for my aquarium in Bengaluru.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-md bg-[#101310] hover:bg-[#151915] border border-[#242824] hover:border-[#8BCF32]/60 text-[#F4F4EF] text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#8BCF32]" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                  className="px-5 py-3.5 rounded-md bg-[#0A0C0A] hover:bg-[#101310] border border-[#242824] text-[#F4F4EF] text-xs font-semibold tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8BCF32]" />
                  <span>{BRAND.phoneDisplay}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#242824] text-xs">
                <div>
                  <span className="block text-[#8BCF32] font-bold text-base">From ₹799</span>
                  <span className="text-[#70756D]">Routine visit rate</span>
                </div>
                <div>
                  <span className="block text-[#F4F4EF] font-bold text-base">Transparent Pricing</span>
                  <span className="text-[#70756D]">Clear quote before service</span>
                </div>
                <div>
                  <span className="block text-[#F4F4EF] font-bold text-base">Documented Care</span>
                  <span className="text-[#70756D]">Service summary after visit</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#242824] bg-[#0A0C0A] shadow-2xl group">
                <Image
                  src="/images/hero.jpg"
                  alt="Creators Aquarium 4-foot planted nature aquarium in Bengaluru penthouse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 850px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#F4F4EF] bg-[#050505]/80 backdrop-blur-md px-4 py-2.5 rounded-lg border border-[#242824]">
                  <span className="font-medium text-[#A3A69F]">4 ft Planted Nature Aquarium · Bengaluru</span>
                  <span className="text-[#8BCF32] font-mono font-bold text-[11px]">Bespoke Setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CREATORS AQUARIUM */}
      <section className="py-16 sm:py-20 border-b border-[#242824] bg-[#0A0C0A]">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
              WHY CREATORS AQUARIUM
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] mt-1 font-bold">
              Professional care, not just cleaning.
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] mt-3 leading-relaxed">
              We approach each aquarium as a living system, combining water quality management, equipment care, aquascaping and consistent maintenance across Bengaluru.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#101310] border border-[#242824] hover:border-[#8BCF32]/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#151915] border border-[#242824] flex items-center justify-center text-[#8BCF32] mb-4">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#F4F4EF] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#A3A69F] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-16 sm:py-24 border-b border-[#242824] bg-[#050505]">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                OUR SERVICES
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] mt-1 font-bold">
                Specialized Aquatic Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#A3A69F] max-w-md mt-3 md:mt-0 leading-relaxed">
              From one-time deep restorations to recurring monthly maintenance and custom installations.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                className="group rounded-xl bg-[#0A0C0A] border border-[#242824] hover:border-[#8BCF32]/60 shadow-lg hover:shadow-[0_4px_24px_rgba(139,207,50,0.1)] overflow-hidden flex flex-col transition-all duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101310]">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#050505]/85 backdrop-blur-sm border border-[#242824] text-[10px] uppercase tracking-wider text-[#8BCF32] font-bold">
                    {svc.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="text-sm font-bold tracking-[0.1em] text-[#F4F4EF] uppercase group-hover:text-[#8BCF32] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A3A69F] mt-2 line-clamp-2 leading-relaxed">
                      {svc.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#242824] flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-[#70756D] uppercase tracking-wider font-semibold">
                        Starting from
                      </span>
                      <span className="text-sm font-bold text-[#8BCF32]">
                        {svc.startingPrice}
                      </span>
                    </div>

                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs text-[#F4F4EF] group-hover:text-[#8BCF32] transition-colors font-bold"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-[#70756D]">
            All prices are starting estimates. Final quote provided based on tank size and condition.
          </div>
        </div>
      </section>

      {/* 4. BEFORE & AFTER TRANSFORMATION */}
      <section className="py-16 sm:py-24 border-b border-[#242824] bg-[#0A0C0A]">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
              PROVEN RESULTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] mt-1 font-bold">
              Before & After Maintenance
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] mt-2">
              Drag the slider to see how a single thorough visit restores water clarity, plant vitality, and glass transparency.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* 5. DIGITAL SERVICE REPORT */}
      <section className="py-16 sm:py-24 border-b border-[#242824] bg-[#050505]">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
              SIGNATURE DIFFERENTIATOR
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] mt-1 font-bold">
              YOUR AQUARIUM. DOCUMENTED.
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] mt-2">
              Every visit concludes with a digital log sent straight to your WhatsApp showing tested water parameters and work performed.
            </p>
          </div>

          <ServiceReportCard />

          <div className="mt-8 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#8BCF32] hover:text-[#B4E35A] transition-colors"
            >
              <span>See our 5-step maintenance process</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. MONTHLY MAINTENANCE PLANS */}
      <section className="py-16 sm:py-24 border-b border-[#242824] bg-[#0A0C0A]">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                RECURRING CARE
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] mt-1 font-bold">
                Monthly Maintenance Plans
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#70756D] mt-2 md:mt-0">
              Scheduled weekly or bi-weekly visits. Flexible monthly plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {MAINTENANCE_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-xl bg-[#101310] border p-7 flex flex-col justify-between shadow-xl transition-all ${
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
                    <h3 className="text-lg font-serif text-[#F4F4EF] font-bold">
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

                <div className="pt-6">
                  <OpenQuoteModalButton
                    defaultService={`AMC Plan: ${plan.name}`}
                    className={`w-full py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      plan.isRecommended || plan.isPopular
                        ? "bg-[#8BCF32] text-[#050505] hover:bg-[#B4E35A]"
                        : "bg-[#151915] text-[#F4F4EF] hover:bg-[#1a201a] border border-[#242824] hover:border-[#8BCF32]/50"
                    }`}
                  >
                    Discuss This Plan
                  </OpenQuoteModalButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION BANNER */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0A0C0A] to-[#050505] border-t border-[#242824]">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
            CONNECT WITH US
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] leading-tight font-bold">
            Ready for a cleaner, healthier aquarium?
          </h2>
          <p className="text-xs sm:text-sm text-[#A3A69F] max-w-lg mx-auto">
            Share a photo of your tank with dimensions on WhatsApp or give us a direct call at <strong className="text-[#F4F4EF]">{BRAND.phoneDisplay}</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <OpenQuoteModalButton
              className="px-7 py-3.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-[0_2px_16px_rgba(139,207,50,0.25)]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </OpenQuoteModalButton>

            <a
              href={getWhatsAppUrl("Hi Creators Aquarium, I would like to schedule an aquarium maintenance visit in Bengaluru.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-md bg-[#101310] hover:bg-[#151915] border border-[#242824] hover:border-[#8BCF32]/60 text-[#F4F4EF] text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#8BCF32]" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>

          <p className="text-[11px] text-[#70756D] pt-4">
            Serving Indiranagar, Koramangala, Whitefield, HSR Layout, JP Nagar, and all areas across Bengaluru.
          </p>
        </div>
      </section>
    </div>
    </>
  );
}
