import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#050505] border-t border-[#242824] pt-16 pb-12 text-[#A3A69F]">
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#242824]">
          {/* Col 1 & 2: Large Brand Logo & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block group py-1">
              <div className="relative w-64 sm:w-72 md:w-80 aspect-[751/665] drop-shadow-[0_6px_32px_rgba(0,0,0,0.9)]">
                <Image
                  src="/brand/logo-clean.png"
                  alt="Creators Aquarium - Where Oceans Meet Nature"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            <p className="text-xs text-[#A3A69F] leading-relaxed max-w-sm">
              Custom aquarium design, build, turnkey installation, and disciplined ongoing maintenance across Bengaluru. From 1 ft nano concepts to 6 ft display ecosystems.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#70756D]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8BCF32]" />
                <span>{BRAND.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#8BCF32]" />
                <span>{BRAND.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8BCF32]" />
                <a
                  href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                  className="font-semibold text-[#F4F4EF] hover:text-[#8BCF32] transition-colors"
                >
                  {BRAND.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Setup & Maintenance Services */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#F4F4EF]">
              Aquarium Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/setup"
                  className="text-[#F4F4EF] hover:text-[#8BCF32] font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8BCF32]" />
                  <span>Custom Aquarium Setup</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/maintenance"
                  className="hover:text-[#8BCF32] transition-colors"
                >
                  Aquarium Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/planted-aquarium"
                  className="hover:text-[#8BCF32] transition-colors"
                >
                  Planted Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/marine-aquarium"
                  className="hover:text-[#8BCF32] transition-colors"
                >
                  Marine Fish-Only
                </Link>
              </li>
              <li>
                <Link
                  href="/services/relocation"
                  className="hover:text-[#8BCF32] transition-colors"
                >
                  Aquarium Relocation
                </Link>
              </li>
              <li>
                <Link
                  href="/maintenance-plans"
                  className="hover:text-[#8BCF32] transition-colors"
                >
                  Monthly Care Plans (AMC)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & SEO Resources */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#F4F4EF]">
              Company & Guides
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#8BCF32] transition-colors"
                >
                  About Us & Standards
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-[#8BCF32] transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-[#8BCF32] transition-colors"
                >
                  Frequently Asked Questions (FAQ)
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-[#8BCF32] transition-colors"
                >
                  Aquarium Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#8BCF32] transition-colors"
                >
                  Contact & Bengaluru Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Action */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#F4F4EF]">
              Direct Contact
            </h4>
            <p className="text-xs text-[#70756D]">
              Direct assistance via WhatsApp or phone. Send photos of your aquarium for an upfront quote.
            </p>
            <div className="space-y-2 pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#101310] hover:bg-[#151915] border border-[#242824] hover:border-[#8BCF32]/50 text-xs font-semibold text-[#F4F4EF] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#8BCF32]" />
                <span>WhatsApp: {BRAND.phoneDisplay}</span>
                <ArrowUpRight className="w-3 h-3 text-[#70756D]" />
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#101310] hover:bg-[#151915] border border-[#242824] hover:border-[#8BCF32]/50 text-xs font-semibold text-[#F4F4EF] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#8BCF32]" />
                <span>{BRAND.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimers & Compliance Statement */}
        <div className="pt-8 text-[11px] text-[#70756D] space-y-3">
          <p className="leading-relaxed">
            <strong className="text-[#A3A69F]">Ornamental Standards:</strong> Creators Aquarium provides professional setup and maintenance for freshwater aquascapes and marine fish-only saltwater systems. We prioritize biological water quality, ethical livestock care, and dependable service across Bengaluru.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#242824]">
            <div>
              &copy; {currentYear} Creators Aquarium. All rights reserved. Bengaluru, Karnataka.
            </div>

            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-[#8BCF32] transition-colors">
                Privacy Notice
              </Link>
              <Link href="/terms" className="hover:text-[#8BCF32] transition-colors">
                Service Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
