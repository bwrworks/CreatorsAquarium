import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0] pt-16 pb-12 text-[#475569]">
      <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E2E8F0]">
          {/* Col 1 & 2: Brand & Address */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E2E8F0] bg-[#FFFFFF] shadow-xs">
                <Image
                  src="/brand/icon.jpg"
                  alt="Creators Aquarium"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-sm font-bold tracking-[0.14em] text-[#0A0F1D] uppercase block">
                  CREATORS AQUARIUM
                </span>
                <span className="text-[11px] tracking-[0.08em] text-[#0070E0] uppercase font-semibold">
                  Where Oceans Meet Nature
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#475569] leading-relaxed max-w-sm">
              Professional aquarium setup, scheduled maintenance, and natural aquascaping for residences, offices, and commercial establishments across Bengaluru.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#64748B]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0070E0]" />
                <span>{BRAND.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#0070E0]" />
                <span>{BRAND.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0070E0]" />
                <a
                  href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                  className="font-semibold text-[#0A0F1D] hover:text-[#0070E0] transition-colors"
                >
                  {BRAND.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0A0F1D]">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/services/maintenance"
                  className="hover:text-[#0070E0] transition-colors"
                >
                  Routine Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/maintenance"
                  className="hover:text-[#0070E0] transition-colors"
                >
                  Deep Cleaning & Overhaul
                </Link>
              </li>
              <li>
                <Link
                  href="/services/planted-aquarium"
                  className="hover:text-[#0070E0] transition-colors"
                >
                  Planted Aquarium Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/marine-aquarium"
                  className="hover:text-[#0070E0] transition-colors"
                >
                  Marine Fish-Only Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/setup"
                  className="hover:text-[#0070E0] transition-colors"
                >
                  Setup & Commissioning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/relocation"
                  className="hover:text-[#0070E0] transition-colors"
                >
                  Aquarium Relocation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0A0F1D]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-[#0070E0] transition-colors"
                >
                  How It Works (SOP)
                </Link>
              </li>
              <li>
                <Link
                  href="/maintenance-plans"
                  className="hover:text-[#0070E0] transition-colors"
                >
                  Monthly AMC Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-[#0070E0] transition-colors"
                >
                  Work Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#0070E0] transition-colors"
                >
                  About & Standards
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-[#0070E0] transition-colors"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#0070E0] transition-colors"
                >
                  Contact & Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Action */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0A0F1D]">
              Direct Contact
            </h4>
            <p className="text-xs text-[#64748B]">
              Direct assistance via WhatsApp or phone. Send photos of your aquarium for an immediate quote.
            </p>
            <div className="space-y-2 pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#FFFFFF] hover:bg-[#F1F5F9] border border-[#CBD5E1] hover:border-[#0070E0] text-xs font-semibold text-[#0A0F1D] shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#0070E0]" />
                <span>WhatsApp: {BRAND.phoneDisplay}</span>
                <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#FFFFFF] hover:bg-[#F1F5F9] border border-[#CBD5E1] hover:border-[#0070E0] text-xs font-semibold text-[#0A0F1D] shadow-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#0070E0]" />
                <span>{BRAND.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimers & Compliance Statement */}
        <div className="pt-8 text-[11px] text-[#64748B] space-y-3">
          <p className="leading-relaxed">
            <strong className="text-[#0A0F1D]">Wildlife Compliance Notice:</strong> In strict accordance with the Wildlife (Protection) Act and Indian ornamental trade directives, Creators Aquarium does not sell, frag, or market live corals. Marine services are strictly fish-only / saltwater systems utilizing legally compliant, properly sourced livestock and natural rock hardscaping.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E2E8F0]">
            <div>
              &copy; {currentYear} Creators Aquarium. All rights reserved. Bengaluru, Karnataka.
            </div>

            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-[#0070E0] transition-colors">
                Privacy Notice (DPDP 2025)
              </Link>
              <Link href="/terms" className="hover:text-[#0070E0] transition-colors">
                Service Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
