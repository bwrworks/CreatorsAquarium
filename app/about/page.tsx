import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { ShieldCheck, Droplets, Wrench, FileCheck, MessageCircle, Phone } from "lucide-react";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { OpenQuoteModalButton } from "@/components/ui/OpenQuoteModalButton";
import { generateBreadcrumbSchema, BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Creators Aquarium Bengaluru | Professional Aquatic Care",
  description:
    "Learn about Creators Aquarium: Bengaluru's premier aquarium maintenance and aquascaping team dedicated to biological balance, transparent pricing, and digital service reports.",
  keywords: [
    "about Creators Aquarium Bangalore",
    "aquarium maintenance team Bengaluru",
    "aquascaping specialists Bangalore",
    "professional aquarium technicians Bengaluru",
  ],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Creators Aquarium Bengaluru | Professional Aquatic Care",
    description:
      "Bringing disciplined technical competence, transparent pricing, and high-end botanical aquascaping to Bengaluru homes and businesses.",
    url: `${BASE_URL}/about`,
    images: [`${BASE_URL}/images/routine-aquarium-care.jpg`],
  },
};

export default function AboutPage() {
  const standards = [
    {
      title: "Biological Balance Over Brute Force",
      desc: "We never perform 100% destructive tank flushes. Partial, conditioned water changes safeguard beneficial nitrifiers and keep livestock calm.",
      icon: Droplets,
    },
    {
      title: "Documented Parameter Logs",
      desc: "Every maintenance visit tests key parameters (pH, TDS, temperature, nitrate). You receive a digital summary so you always know your tank's state.",
      icon: FileCheck,
    },
    {
      title: "Surgical Tool Hygiene",
      desc: "Our technicians use precision curved stainless-steel tools, felt scrubbers, and clean siphons to prevent glass scratches and cross-contamination.",
      icon: Wrench,
    },
    {
      title: "Ethical Livestock & Water Standards",
      desc: "We prioritize biological livestock welfare, healthy freshwater communities, and pristine fish-only marine systems with natural rock hardscaping.",
      icon: ShieldCheck,
    },
  ];

  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  const aboutPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Creators Aquarium Bengaluru",
    description: "Background, standards, and mission of Creators Aquarium.",
    url: `${BASE_URL}/about`,
    mainEntity: {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24 w-full">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14 space-y-20">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101310] border border-[#242824] text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
              OUR STANDARDS
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight font-bold">
              About Creators Aquarium
            </h1>
            <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed max-w-2xl">
              Born from a desire to bring disciplined technical competence, transparent pricing, and high-end botanical aquascaping to Bengaluru homes and businesses.
            </p>
          </div>

          {/* Brand Mission Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF] font-bold">
                &ldquo;Beautiful aquariums are designed thoughtfully and maintained with discipline.&rdquo;
              </h2>
              <p>
                In Bengaluru, aquarium owners frequently encounter informal cleaners who scrub glass with abrasive pads and crash biological stability.
              </p>
              <p>
                <strong className="text-[#F4F4EF]">Creators Aquarium</strong> brings disciplined craftsmanship to aquatic living spaces. We design, source, build, and install custom aquariums from 1 ft to 6 ft, then provide dependable ongoing care with documented reports after every visit.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#242824] bg-[#0A0C0A] shadow-2xl">
              <Image
                src="/images/routine-aquarium-care.jpg"
                alt="Creators Aquarium technician meticulously maintaining a nature aquascape"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>
          </div>

          {/* 4 Pillars of Excellence */}
          <div className="space-y-8 pt-8 border-t border-[#242824]">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
                OPERATIONAL INTEGRITY
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F4EF] mt-1 font-bold">
                How We Protect Your Ecosystem
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {standards.map((s, idx) => (
                <div key={idx} className="p-7 rounded-xl bg-[#0A0C0A] border border-[#242824] shadow-xl space-y-3">
                  <s.icon className="w-6 h-6 text-[#8BCF32]" />
                  <h3 className="text-base font-serif text-[#F4F4EF] font-bold">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-10 rounded-xl bg-[#0A0C0A] border border-[#242824] text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F4EF] font-bold">
              Experience the Creators Difference
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A69F] max-w-md mx-auto">
              Get in touch with our team for an upfront assessment of your aquarium.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <OpenQuoteModalButton
                defaultService="About Page Consultation"
                className="px-7 py-3.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-[0_2px_12px_rgba(139,207,50,0.2)]"
              >
                Request a Service Quote
              </OpenQuoteModalButton>

              <a
                href={getWhatsAppUrl("Hi Creators Aquarium, I'd like to learn more about your aquarium maintenance services in Bengaluru.")}
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
