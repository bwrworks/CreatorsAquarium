"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { BRAND, BENGALURU_LOCALITIES, getWhatsAppUrl } from "@/lib/constants";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [locality, setLocality] = useState(BENGALURU_LOCALITIES[0]);
  const [tankType, setTankType] = useState("Freshwater");
  const [tankSize, setTankSize] = useState("3 ft");
  const [service, setService] = useState("AQUARIUM MAINTENANCE");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setError("Please provide a valid 10-digit WhatsApp/mobile number.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          locality,
          tankType,
          tankSize,
          service,
          notes,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const whatsappQuickMessage = `Hi Creators Aquarium, I'd like a quote for ${encodeURIComponent(
    service
  )} in ${encodeURIComponent(locality)}. My tank is ${encodeURIComponent(
    tankType
  )} (${encodeURIComponent(tankSize)}).`;

  return (
    <div className="bg-[#FFFFFF] text-[#0A0F1D] py-16 sm:py-24 w-full">
      <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14 space-y-16">
        {/* Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
            DIRECT CONTACT & BOOKINGS
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#0A0F1D] tracking-tight font-bold">
            Contact Creators Aquarium
          </h1>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Request an upfront service quotation, schedule an on-site tank assessment, or message our team directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Coverage */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 sm:p-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-6 shadow-xs">
              <h2 className="text-2xl font-serif text-[#0A0F1D] font-bold">
                Direct Contact Channels
              </h2>

              <div className="space-y-5 text-xs sm:text-sm text-[#475569]">
                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#0070E0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] text-[#64748B] uppercase tracking-wider font-semibold">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                      className="text-base font-bold text-[#0A0F1D] hover:text-[#0070E0] transition-colors"
                    >
                      {BRAND.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MessageCircle className="w-5 h-5 text-[#0070E0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] text-[#64748B] uppercase tracking-wider font-semibold">
                      WhatsApp Dispatch
                    </span>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-[#0070E0] hover:text-[#0055B3] transition-colors"
                    >
                      +91 {BRAND.whatsappNumber} (Direct Chat)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#0070E0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] text-[#64748B] uppercase tracking-wider font-semibold">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="font-medium text-[#0A0F1D] hover:text-[#0070E0] transition-colors"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#0070E0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] text-[#64748B] uppercase tracking-wider font-semibold">
                      Operating Hours
                    </span>
                    <span className="text-[#0A0F1D] font-medium">{BRAND.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bengaluru Locality Coverage */}
            <div className="p-8 sm:p-10 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] space-y-4 shadow-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0070E0]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A0F1D]">
                  Bengaluru Service Coverage
                </h3>
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Mobile technician visits across all central and suburban neighborhoods:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {BENGALURU_LOCALITIES.slice(0, 16).map((loc) => (
                  <span
                    key={loc}
                    className="px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#475569] font-medium"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quote Intake Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-md">
              {!submitted ? (
                <div>
                  <div className="mb-6">
                    <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-[#0070E0]">
                      UPFRONT ESTIMATE
                    </span>
                    <h2 className="text-2xl font-serif text-[#0A0F1D] mt-1 font-bold">
                      Request a Service Quote
                    </h2>
                    <p className="text-xs sm:text-sm text-[#475569] mt-1">
                      Fill out your aquarium details below. We review specs and provide a firm quote before scheduling.
                    </p>
                  </div>

                  {error && (
                    <div className="mb-4 p-3 rounded-md bg-red-50 border border-red-200 text-xs text-red-700">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-1">
                          Your Name <span className="text-[#0070E0]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Anand Rao"
                          className="w-full px-3.5 py-2.5 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] focus:ring-1 focus:ring-[#0070E0] transition-colors placeholder-[#94A3B8]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-1">
                          WhatsApp / Phone <span className="text-[#0070E0]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="10-digit number"
                          className="w-full px-3.5 py-2.5 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] focus:ring-1 focus:ring-[#0070E0] transition-colors placeholder-[#94A3B8]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-1">
                          Bengaluru Locality <span className="text-[#0070E0]">*</span>
                        </label>
                        <select
                          value={locality}
                          onChange={(e) => setLocality(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] transition-colors"
                        >
                          {BENGALURU_LOCALITIES.map((loc) => (
                            <option key={loc} value={loc}>
                              {loc}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-1">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="For report copies"
                          className="w-full px-3.5 py-2.5 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] transition-colors placeholder-[#94A3B8]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-1">
                          Tank Type
                        </label>
                        <select
                          value={tankType}
                          onChange={(e) => setTankType(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] transition-colors"
                        >
                          <option value="Freshwater">Freshwater Community</option>
                          <option value="Planted">Planted / Aquascape</option>
                          <option value="Marine">Marine Fish-Only (Saltwater)</option>
                          <option value="Cichlid">Cichlid Display</option>
                          <option value="New Setup">Planning New Setup</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-1">
                          Tank Size
                        </label>
                        <select
                          value={tankSize}
                          onChange={(e) => setTankSize(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] transition-colors"
                        >
                          <option value="2 ft">2 ft (approx 60–80L)</option>
                          <option value="3 ft">3 ft (approx 120–160L)</option>
                          <option value="4 ft">4 ft (approx 200–280L)</option>
                          <option value="5+ ft">5+ ft Large / Sump</option>
                          <option value="Custom">Custom / Commercial</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-1">
                        Service Requested
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] transition-colors"
                      >
                        <option value="AQUARIUM MAINTENANCE">Routine Maintenance (from ₹799)</option>
                        <option value="DEEP CLEANING">Deep Clean & Filter Overhaul (from ₹1,499)</option>
                        <option value="PLANTED AQUARIUM CARE">Planted Care & Trimming (from ₹1,499)</option>
                        <option value="MARINE FISH-ONLY CARE">Marine Fish-Only Care (from ₹2,499)</option>
                        <option value="SETUP & INSTALLATION">New Setup & Commissioning</option>
                        <option value="RELOCATION">Aquarium Relocation</option>
                        <option value="MONTHLY AMC PLAN">Monthly AMC Plan Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-1">
                        Notes / Tank Status (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Tell us about the current condition, algae issues, or specific requirements..."
                        className="w-full px-3.5 py-2.5 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] transition-colors placeholder-[#94A3B8]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 px-5 rounded-md bg-[#0070E0] hover:bg-[#0088FF] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Processing Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit for Firm Quotation</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-center text-[11px] text-[#64748B]">
                      Zero online payment required. Call / WhatsApp: <strong className="text-[#0A0F1D]">{BRAND.phoneDisplay}</strong>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#E0F2FE] border border-[#0070E0] flex items-center justify-center mx-auto text-[#0070E0]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#0A0F1D] font-bold">
                    Inquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] max-w-sm mx-auto">
                    Thank you, {name}. Our team will review your {locality} aquarium details and contact you via WhatsApp/Phone with an upfront estimate.
                  </p>
                  <div className="pt-4">
                    <a
                      href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
                        whatsappQuickMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#0070E0] hover:bg-[#0088FF] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Follow Up On WhatsApp Now</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
