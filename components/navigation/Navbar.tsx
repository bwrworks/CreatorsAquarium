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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Auto-close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Plans", href: "/maintenance-plans" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-[#FFFFFF]/98 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs py-3"
            : "bg-[#FFFFFF]/95 backdrop-blur-xs border-b border-[#F1F5F9] py-3.5"
        }`}
      >
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
          <div className="flex items-center justify-between">
            {/* Authentic Brand Logo Image Lockup */}
            <Link
              href="/"
              className="flex items-center group py-0.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative h-10 sm:h-12 w-[168px] sm:w-[210px] flex-shrink-0">
                <Image
                  src="/brand/logo-horizontal-light.png"
                  alt="Creators Aquarium - Where Oceans Meet Nature"
                  fill
                  sizes="(max-width: 640px) 168px, 210px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
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

            {/* Right Quick Actions (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#0A0F1D] hover:text-[#0070E0] transition-colors py-2 px-3 rounded-md border border-[#E2E8F0] hover:border-[#0070E0]/40 bg-[#F8FAFC]"
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
                <span>Request Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>

            {/* Mobile / Tablet Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="px-3 py-2 text-[11px] font-bold tracking-wider uppercase text-[#FFFFFF] bg-[#0070E0] active:bg-[#005BB5] rounded-md shadow-xs cursor-pointer"
              >
                Quote
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2.5 min-w-[42px] min-h-[42px] flex items-center justify-center text-[#0A0F1D] hover:text-[#0070E0] rounded-md border border-[#E2E8F0] bg-[#FFFFFF] active:bg-[#F8FAFC] cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#0070E0]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#0A0F1D]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[60px] sm:top-[68px] z-40 bg-[#FFFFFF] border-b border-[#E2E8F0] px-6 py-6 flex flex-col justify-between overflow-y-auto lg:hidden shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-2">
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#64748B] pb-2 font-bold border-b border-[#E2E8F0]">
              Navigation
            </span>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold tracking-wide py-2.5 border-b border-[#F1F5F9] transition-colors ${
                    isActive ? "text-[#0070E0]" : "text-[#0A0F1D] hover:text-[#0070E0]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#E2E8F0] flex flex-col gap-3">
            <a
              href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
              className="w-full py-3 text-center text-xs font-bold tracking-wider uppercase text-[#0A0F1D] bg-[#F8FAFC] border border-[#E2E8F0] rounded-md flex items-center justify-center gap-2 active:bg-[#F1F5F9]"
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
              className="w-full py-3.5 text-center text-xs font-bold tracking-wider uppercase text-[#FFFFFF] bg-[#0070E0] active:bg-[#005BB5] rounded-md shadow-sm cursor-pointer"
            >
              Request a Service Quote
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-xs font-bold tracking-wider uppercase text-[#0A0F1D] bg-[#F1F5F9] border border-[#CBD5E1] rounded-md flex items-center justify-center gap-2"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-[#0070E0]" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
