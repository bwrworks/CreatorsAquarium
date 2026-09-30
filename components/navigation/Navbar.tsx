"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { useQuoteModal } from "@/components/context/QuoteModalContext";

export function Navbar() {
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Maintenance Plans", href: "/maintenance-plans" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs py-3.5"
            : "bg-[#FFFFFF]/90 backdrop-blur-xs border-b border-[#F1F5F9] py-4"
        }`}
      >
        <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0">
                <Image
                  src="/brand/icon.png"
                  alt="Creators Aquarium"
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] sm:text-[14px] font-bold tracking-[0.14em] text-[#0A0F1D] uppercase group-hover:text-[#0070E0] transition-colors">
                  CREATORS AQUARIUM
                </span>
                <span className="text-[10px] tracking-[0.12em] text-[#64748B] uppercase hidden sm:block">
                  Bengaluru · Setup & Maintenance
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-[13px] tracking-[0.05em] uppercase font-medium transition-colors ${
                      isActive
                        ? "text-[#0070E0] font-semibold border-b-2 border-[#0070E0] pb-0.5"
                        : "text-[#475569] hover:text-[#0070E0]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Quick Actions */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#0A0F1D] hover:text-[#0070E0] transition-colors py-1.5 px-3 rounded-md border border-[#E2E8F0] hover:border-[#0070E0]/40 bg-[#F8FAFC]"
                title="Call Creators Aquarium"
              >
                <Phone className="w-3.5 h-3.5 text-[#0070E0]" />
                <span className="tracking-wide">{BRAND.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FFFFFF] bg-[#0070E0] hover:bg-[#0088FF] active:bg-[#0055B3] rounded-md transition-all duration-200 shadow-sm hover:shadow-[0_4px_16px_rgba(0,112,224,0.25)] cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2.5">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="px-3.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#FFFFFF] bg-[#0070E0] rounded-md shadow-xs"
              >
                Quote
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#0A0F1D] hover:text-[#0070E0] rounded-md border border-[#E2E8F0] bg-[#FFFFFF]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#0070E0]" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-30 bg-[#FFFFFF] border-b border-[#E2E8F0] px-6 py-8 flex flex-col justify-between overflow-y-auto md:hidden shadow-lg">
          <div className="flex flex-col space-y-4">
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#64748B] border-b border-[#E2E8F0] pb-2 font-medium">
              Navigation
            </span>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium tracking-wide py-1.5 ${
                    isActive ? "text-[#0070E0] font-semibold" : "text-[#0A0F1D]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-[#E2E8F0] flex flex-col gap-3">
            <a
              href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
              className="w-full py-3 text-center text-sm font-semibold tracking-wider uppercase text-[#0A0F1D] bg-[#F8FAFC] border border-[#E2E8F0] rounded-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#0070E0]" />
              <span>Call: {BRAND.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full py-3 text-center text-sm font-semibold tracking-wider uppercase text-[#FFFFFF] bg-[#0070E0] rounded-md shadow-sm"
            >
              Request a Service Quote
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-sm font-semibold tracking-wider uppercase text-[#0A0F1D] bg-[#F1F5F9] border border-[#CBD5E1] rounded-md flex items-center justify-center gap-2"
            >
              <span>WhatsApp Us Directly</span>
              <ArrowUpRight className="w-4 h-4 text-[#0070E0]" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
