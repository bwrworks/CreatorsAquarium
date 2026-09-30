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
      setIsScrolled(window.scrollY > 20);
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/95 backdrop-blur-md border-b border-[#242824] py-3.5"
            : "bg-gradient-to-b from-[#050505]/90 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#242824] group-hover:border-[#8BCF32]/50 transition-colors bg-[#101310] flex-shrink-0">
                <Image
                  src="/brand/icon.jpg"
                  alt="Creators Aquarium Mark"
                  fill
                  sizes="40px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] sm:text-[14px] font-semibold tracking-[0.14em] text-[#F4F4EF] uppercase group-hover:text-[#B4E35A] transition-colors">
                  CREATORS AQUARIUM
                </span>
                <span className="text-[10px] tracking-[0.1em] text-[#70756D] uppercase hidden sm:block">
                  Bengaluru
                </span>
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
                    className={`text-[13px] tracking-[0.05em] uppercase transition-colors ${
                      isActive
                        ? "text-[#8BCF32] font-semibold"
                        : "text-[#A3A69F] hover:text-[#F4F4EF]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Quick Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 text-xs text-[#A3A69F] hover:text-[#F4F4EF] transition-colors py-1.5 px-2.5 rounded border border-transparent hover:border-[#242824]"
                title="Call Creators Aquarium"
              >
                <Phone className="w-3.5 h-3.5 text-[#8BCF32]" />
                <span className="tracking-wider">{BRAND.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#050505] bg-[#8BCF32] hover:bg-[#B4E35A] active:bg-[#638F24] rounded transition-all duration-200 shadow-sm hover:shadow-[0_0_16px_rgba(139,207,50,0.25)] cursor-pointer"
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
                className="px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#050505] bg-[#8BCF32] rounded"
              >
                Quote
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#A3A69F] hover:text-[#F4F4EF] rounded border border-[#242824] bg-[#101310]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#8BCF32]" />
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
        <div className="fixed inset-0 top-[65px] z-30 bg-[#050505]/98 backdrop-blur-lg border-b border-[#242824] px-6 py-8 flex flex-col justify-between overflow-y-auto md:hidden">
          <div className="flex flex-col space-y-4">
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#70756D] border-b border-[#242824] pb-2">
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
                    isActive ? "text-[#8BCF32]" : "text-[#F4F4EF]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-[#242824] flex flex-col gap-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full py-3 text-center text-sm font-semibold tracking-wider uppercase text-[#050505] bg-[#8BCF32] rounded"
            >
              Request a Service Quote
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-sm font-semibold tracking-wider uppercase text-[#F4F4EF] bg-[#101310] border border-[#242824] rounded flex items-center justify-center gap-2"
            >
              <span>WhatsApp Us</span>
              <ArrowUpRight className="w-4 h-4 text-[#8BCF32]" />
            </a>
            <div className="text-center text-xs text-[#70756D] pt-2">
              Serving Bengaluru homes, offices & commercial spaces
            </div>
          </div>
        </div>
      )}
    </>
  );
}
