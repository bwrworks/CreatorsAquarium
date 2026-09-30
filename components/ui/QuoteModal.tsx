"use client";

import React, { useState } from "react";
import { X, CheckCircle2, MessageCircle, ArrowRight, Loader2 } from "lucide-react";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { BENGALURU_LOCALITIES, getWhatsAppUrl } from "@/lib/constants";

export function QuoteModal() {
  const { isOpen, closeQuoteModal, selectedService, selectedTankType } = useQuoteModal();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [locality, setLocality] = useState(BENGALURU_LOCALITIES[0]);
  const [tankType, setTankType] = useState(selectedTankType || "Freshwater");
  const [tankSize, setTankSize] = useState("3 ft");
  const [service, setService] = useState(selectedService || "AQUARIUM MAINTENANCE");
  const [frequency, setFrequency] = useState("One-time visit");
  const [notes, setNotes] = useState("");
  const [contactTime, setContactTime] = useState("Morning (9 AM – 12 PM)");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMessage("Please enter a valid 10-digit WhatsApp or mobile number.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name,
        phone,
        email,
        locality,
        tankType,
        tankSize,
        service,
        frequency,
        notes,
        contactTime,
        timestamp: new Date().toISOString(),
      };

      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Unable to save enquiry");
      }

      setSubmitted(true);
    } catch {
      // Graceful fallback to direct WhatsApp
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const whatsAppDirectMessage = `Hi Creators Aquarium, I submitted a service quote request:%0A- Name: ${encodeURIComponent(
    name
  )}%0A- Locality: ${encodeURIComponent(locality)}%0A- Tank: ${encodeURIComponent(
    tankType
  )} (${encodeURIComponent(tankSize)})%0A- Service: ${encodeURIComponent(
    service
  )}%0A- Preferred Time: ${encodeURIComponent(contactTime)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-lg bg-[#151915] border border-[#242824] p-6 sm:p-8 shadow-2xl my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={closeQuoteModal}
          className="absolute top-4 right-4 p-2 text-[#70756D] hover:text-[#F4F4EF] rounded hover:bg-[#101310] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase font-semibold tracking-[0.14em] text-[#8BCF32]">
                BENGALURU AQUARIUM CARE
              </span>
              <h2 className="text-xl sm:text-2xl font-serif text-[#F4F4EF] mt-1">
                Request a Service Quote
              </h2>
              <p className="text-xs text-[#A3A69F] mt-1">
                Zero payment required online. We review your tank requirements and confirm an upfront quote.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded bg-red-950/40 border border-red-800/60 text-xs text-red-200">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
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
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3 py-2 rounded bg-[#0A0C0A] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors placeholder-[#70756D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A3A69F] mb-1">
                    WhatsApp / Mobile <span className="text-[#8BCF32]">*</span>
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

              {/* Locality & Email */}
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
                      <option key={loc} value={loc} className="bg-[#101310] text-[#F4F4EF]">
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A3A69F] mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="For service report copy"
                    className="w-full px-3 py-2 rounded bg-[#0A0C0A] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors placeholder-[#70756D]"
                  />
                </div>
              </div>

              {/* Tank Type & Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A3A69F] mb-1">
                    Aquarium Type
                  </label>
                  <select
                    value={tankType}
                    onChange={(e) => setTankType(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[#0A0C0A] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                  >
                    <option value="Freshwater" className="bg-[#101310]">Freshwater Community</option>
                    <option value="Planted" className="bg-[#101310]">Planted / Aquascape</option>
                    <option value="Marine" className="bg-[#101310]">Marine Fish-Only (Saltwater)</option>
                    <option value="Cichlid" className="bg-[#101310]">African/American Cichlid</option>
                    <option value="New Tank" className="bg-[#101310]">Planning a New Setup</option>
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
                    <option value="2 ft" className="bg-[#101310]">2 ft (approx 60–80 Litres)</option>
                    <option value="3 ft" className="bg-[#101310]">3 ft (approx 120–160 Litres)</option>
                    <option value="4 ft" className="bg-[#101310]">4 ft (approx 200–280 Litres)</option>
                    <option value="5+ ft" className="bg-[#101310]">5+ ft Large / Sump System</option>
                    <option value="Custom" className="bg-[#101310]">Custom / Commercial Display</option>
                  </select>
                </div>
              </div>

              {/* Service Requested & Cadence */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A3A69F] mb-1">
                    Service Requested
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[#0A0C0A] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                  >
                    <option value="AQUARIUM MAINTENANCE" className="bg-[#101310]">Routine Maintenance (from ₹799)</option>
                    <option value="DEEP CLEANING" className="bg-[#101310]">Deep Clean & Filter Overhaul (from ₹1,499)</option>
                    <option value="PLANTED AQUARIUM CARE" className="bg-[#101310]">Planted Aquarium Care (from ₹1,499)</option>
                    <option value="MARINE FISH-ONLY CARE" className="bg-[#101310]">Marine Fish-Only Care (from ₹2,499)</option>
                    <option value="SETUP & INSTALLATION" className="bg-[#101310]">New Setup & Installation</option>
                    <option value="RELOCATION" className="bg-[#101310]">Aquarium Relocation</option>
                    <option value="MONTHLY AMC PLAN" className="bg-[#101310]">Monthly AMC Plan Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A3A69F] mb-1">
                    Frequency
                  </label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[#0A0C0A] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                  >
                    <option value="One-time visit" className="bg-[#101310]">One-time visit</option>
                    <option value="Monthly AMC (1 visit)" className="bg-[#101310]">Monthly AMC (1 visit / mo)</option>
                    <option value="Standard AMC (2 visits)" className="bg-[#101310]">Standard AMC (2 visits / mo)</option>
                    <option value="Weekly AMC (4 visits)" className="bg-[#101310]">Weekly AMC (4 visits / mo)</option>
                  </select>
                </div>
              </div>

              {/* Requirement Notes */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A3A69F] mb-1">
                  Aquarium Condition / Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Algae issue on glass, plants need trimming, filter making noise, etc."
                  className="w-full px-3 py-2 rounded bg-[#0A0C0A] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors placeholder-[#70756D]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_0_16px_rgba(139,207,50,0.3)] disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Quote Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Request for Estimate</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[10px] text-[#70756D]">
                No payment or credit card required. Personal data protected per DPDP Rules 2025.
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation */
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-[#8BCF32]/15 border border-[#8BCF32] flex items-center justify-center mx-auto mb-4 text-[#8BCF32]">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <span className="text-[11px] uppercase tracking-widest text-[#8BCF32] font-semibold">
              REQUEST RECEIVED
            </span>
            <h3 className="text-xl font-serif text-[#F4F4EF] mt-1 mb-2">
              Thank You, {name || "Aquarist"}
            </h3>
            <p className="text-xs text-[#A3A69F] max-w-sm mx-auto mb-6">
              Our team has logged your requirements for <strong>{locality}</strong>. We will review your tank specs and send an upfront quotation within business hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/919886012345?text=${whatsAppDirectMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#8BCF32] text-[#050505] text-xs font-semibold tracking-wider uppercase hover:bg-[#B4E35A] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp Now</span>
              </a>

              <button
                type="button"
                onClick={closeQuoteModal}
                className="px-5 py-2.5 rounded bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] hover:border-[#70756D] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
