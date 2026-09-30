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
    <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101310] border border-[#242824] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
            DIRECT CONTACT & BOOKINGS
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight">
            Contact Creators Aquarium
          </h1>
          <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed">
            Request an upfront service quotation, schedule an on-site tank assessment, or message our team directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Coverage */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-lg bg-[#101310] border border-[#242824] space-y-6">
              <h2 className="text-xl font-serif text-[#F4F4EF]">
                Direct Contact Channels
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#A3A69F]">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#8BCF32] flex-shrink-0 mt-1" />
                  <div>
                    <span className="block text-[10px] text-[#70756D] uppercase tracking-wider">
                      Telephone
                    </span>
                    <a
                      href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                      className="font-medium text-[#F4F4EF] hover:text-[#8BCF32] transition-colors"
                    >
                      {BRAND.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-[#8BCF32] flex-shrink-0 mt-1" />
                  <div>
                    <span className="block text-[10px] text-[#70756D] uppercase tracking-wider">
                      WhatsApp Dispatch
                    </span>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#8BCF32] hover:text-[#B4E35A] transition-colors"
                    >
                      Direct Chat (Send Tank Photos)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#8BCF32] flex-shrink-0 mt-1" />
                  <div>
                    <span className="block text-[10px] text-[#70756D] uppercase tracking-wider">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="font-medium text-[#F4F4EF] hover:text-[#8BCF32] transition-colors"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#8BCF32] flex-shrink-0 mt-1" />
                  <div>
                    <span className="block text-[10px] text-[#70756D] uppercase tracking-wider">
                      Operating Hours
                    </span>
                    <span className="text-[#F4F4EF]">{BRAND.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bengaluru Locality Coverage */}
            <div className="p-8 rounded-lg bg-[#0A0C0A] border border-[#242824] space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8BCF32]" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F4F4EF]">
                  Bengaluru Service Coverage
                </h3>
              </div>
              <p className="text-xs text-[#70756D] leading-relaxed">
                We provide mobile technician dispatch across key Bengaluru zones:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {BENGALURU_LOCALITIES.slice(0, 14).map((loc) => (
                  <span
                    key={loc}
                    className="px-2.5 py-1 rounded bg-[#101310] border border-[#242824] text-[11px] text-[#A3A69F]"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quote Intake Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-lg bg-[#101310] border border-[#242824] shadow-xl">
              {!submitted ? (
                <div>
                  <div className="mb-6">
                    <span className="text-[10px] uppercase font-semibold tracking-[0.14em] text-[#8BCF32]">
                      UPFRONT ESTIMATE
                    </span>
                    <h2 className="text-xl sm:text-2xl font-serif text-[#F4F4EF] mt-1">
                      Request a Service Quote
                    </h2>
                    <p className="text-xs text-[#A3A69F] mt-1">
                      Fill out your aquarium details below. We review specs and provide a firm quote before scheduling.
                    </p>
                  </div>

                  {error && (
                    <div className="mb-4 p-3 rounded bg-red-950/40 border border-red-800/60 text-xs text-red-200">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#A3A69F] mb-1">
                          Your Name <span className="text-[#8BCF32]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Anand Rao"
                          className="w-full px-3 py-2 rounded bg-[#0A0C0A] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors placeholder-[#70756D]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#A3A69F] mb-1">
                          WhatsApp / Phone <span className="text-[#8BCF32]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="10-digit number"
                          className="w-full px-3 py-2 rounded bg-[#0A0C0A] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors placeholder-[#70756D]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#A3A69F] mb-1">
                          Bengaluru Locality <span className="text-[#8BCF32]">*</span>
                        </label>
                        <select
                          value={locality}
                          onChange={(e) => setLocality(e.target.value)}
                          className="w-full px-3 py-2 rounded bg-[#0A0C0A] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                        >
                          {BENGALURU_LOCALITIES.map((loc) => (
                            <option key={loc} value={loc} className="bg-[#101310]">
                              {loc}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#A3A69F] mb-1">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="For report copies"
                          className="w-full px-3 py-2 rounded bg-[#0A0C0A] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors placeholder-[#70756D]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#A3A69F] mb-1">
                          Tank Type
                        </label>
                        <select
                          value={tankType}
                          onChange={(e) => setTankType(e.target.value)}
                          className="w-full px-3 py-2 rounded bg-[#0A0C0A] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                        >
                          <option value="Freshwater">Freshwater Community</option>
                          <option value="Planted">Planted / Aquascape</option>
                          <option value="Marine">Marine Fish-Only (Saltwater)</option>
                          <option value="Cichlid">Cichlid Display</option>
                          <option value="New Setup">Planning New Setup</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#A3A69F] mb-1">
                          Tank Size
                        </label>
                        <select
                          value={tankSize}
                          onChange={(e) => setTankSize(e.target.value)}
                          className="w-full px-3 py-2 rounded bg-[#0A0C0A] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
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
                      <label className="block text-[11px] uppercase tracking-wider text-[#A3A69F] mb-1">
                        Service Requested
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3 py-2 rounded bg-[#0A0C0A] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
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
                      <label className="block text-[11px] uppercase tracking-wider text-[#A3A69F] mb-1">
                        Notes / Tank Status (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Tell us about the current condition, algae issues, or specific requirements..."
                        className="w-full px-3 py-2 rounded bg-[#0A0C0A] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors placeholder-[#70756D]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 px-4 rounded bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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

                    <div className="text-center text-[10px] text-[#70756D]">
                      Zero online payment required. All inquiries handled respectfully.
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#8BCF32]/15 border border-[#8BCF32] flex items-center justify-center mx-auto text-[#8BCF32]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#F4F4EF]">
                    Inquiry Received
                  </h3>
                  <p className="text-xs text-[#A3A69F] max-w-sm mx-auto">
                    Thank you, {name}. Our team will review your {locality} aquarium details and contact you via WhatsApp/Phone with an upfront estimate.
                  </p>
                  <div className="pt-4">
                    <a
                      href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
                        whatsappQuickMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-semibold uppercase tracking-wider transition-colors"
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
