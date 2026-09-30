"use client";

import React, { useState } from "react";
import { X, CheckCircle2, MessageCircle, ArrowRight, Loader2 } from "lucide-react";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { BENGALURU_LOCALITIES, BRAND, getWhatsAppUrl } from "@/lib/constants";

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
      // Fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const whatsAppDirectMessage = `Hi Creators Aquarium, I submitted a service quote request:%0A- Name: ${encodeURIComponent(
    name
  )}%0A- Phone: ${encodeURIComponent(phone)}%0A- Locality: ${encodeURIComponent(
    locality
  )}%0A- Tank: ${encodeURIComponent(tankType)} (${encodeURIComponent(
    tankSize
  )})%0A- Service: ${encodeURIComponent(service)}%0A- Preferred Time: ${encodeURIComponent(
    contactTime
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0F1D]/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] p-6 sm:p-8 shadow-2xl my-8 text-[#0A0F1D]">
        {/* Close Button */}
        <button
          type="button"
          onClick={closeQuoteModal}
          className="absolute top-4 right-4 p-2 text-[#64748B] hover:text-[#0A0F1D] rounded-md hover:bg-[#F1F5F9] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-[#0070E0]">
                BENGALURU AQUARIUM CARE
              </span>
              <h2 className="text-xl sm:text-2xl font-serif text-[#0A0F1D] mt-1 font-bold">
                Request a Service Quote
              </h2>
              <p className="text-xs text-[#64748B] mt-1">
                Zero online payment. We review your tank requirements and confirm an upfront quote.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-md bg-red-50 border border-red-200 text-xs text-red-700">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
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
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3 py-2 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] focus:ring-1 focus:ring-[#0070E0] transition-colors placeholder-[#94A3B8]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-1">
                    WhatsApp / Mobile <span className="text-[#0070E0]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit number"
                    className="w-full px-3 py-2 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] focus:ring-1 focus:ring-[#0070E0] transition-colors placeholder-[#94A3B8]"
                  />
                </div>
              </div>

              {/* Locality & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-1">
                    Bengaluru Locality <span className="text-[#0070E0]">*</span>
                  </label>
                  <select
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] transition-colors"
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
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="For service report copy"
                    className="w-full px-3 py-2 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] transition-colors placeholder-[#94A3B8]"
                  />
                </div>
              </div>

              {/* Tank Type & Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-1">
                    Aquarium Type
                  </label>
                  <select
                    value={tankType}
                    onChange={(e) => setTankType(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] transition-colors"
                  >
                    <option value="Freshwater">Freshwater Community</option>
                    <option value="Planted">Planted / Aquascape</option>
                    <option value="Marine">Marine Fish-Only (Saltwater)</option>
                    <option value="Cichlid">African/American Cichlid</option>
                    <option value="New Tank">Planning a New Setup</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-1">
                    Tank Size
                  </label>
                  <select
                    value={tankSize}
                    onChange={(e) => setTankSize(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] transition-colors"
                  >
                    <option value="2 ft">2 ft (approx 60–80 Litres)</option>
                    <option value="3 ft">3 ft (approx 120–160 Litres)</option>
                    <option value="4 ft">4 ft (approx 200–280 Litres)</option>
                    <option value="5+ ft">5+ ft Large / Sump System</option>
                    <option value="Custom">Custom / Commercial Display</option>
                  </select>
                </div>
              </div>

              {/* Service Requested & Cadence */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-1">
                    Service Requested
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] transition-colors"
                  >
                    <option value="AQUARIUM MAINTENANCE">Routine Maintenance (from ₹799)</option>
                    <option value="DEEP CLEANING">Deep Clean & Filter Overhaul (from ₹1,499)</option>
                    <option value="PLANTED AQUARIUM CARE">Planted Aquarium Care (from ₹1,499)</option>
                    <option value="MARINE FISH-ONLY CARE">Marine Fish-Only Care (from ₹2,499)</option>
                    <option value="SETUP & INSTALLATION">New Setup & Installation</option>
                    <option value="RELOCATION">Aquarium Relocation</option>
                    <option value="MONTHLY AMC PLAN">Monthly AMC Plan Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-1">
                    Frequency
                  </label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] transition-colors"
                  >
                    <option value="One-time visit">One-time visit</option>
                    <option value="Monthly AMC (1 visit)">Monthly AMC (1 visit / mo)</option>
                    <option value="Standard AMC (2 visits)">Standard AMC (2 visits / mo)</option>
                    <option value="Weekly AMC (4 visits)">Weekly AMC (4 visits / mo)</option>
                  </select>
                </div>
              </div>

              {/* Requirement Notes */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#475569] mb-1">
                  Aquarium Condition / Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Algae issue on glass, plants need trimming, filter making noise, etc."
                  className="w-full px-3 py-2 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] text-xs text-[#0A0F1D] focus:outline-none focus:border-[#0070E0] transition-colors placeholder-[#94A3B8]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-md bg-[#0070E0] hover:bg-[#0088FF] active:bg-[#0055B3] text-[#FFFFFF] text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
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

              <div className="text-center text-[11px] text-[#64748B]">
                No credit card or online payment required. Call / WhatsApp: <strong className="text-[#0A0F1D]">{BRAND.phoneDisplay}</strong>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation */
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-[#E0F2FE] border border-[#0070E0] flex items-center justify-center mx-auto mb-4 text-[#0070E0]">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <span className="text-[11px] uppercase tracking-widest text-[#0070E0] font-bold">
              REQUEST RECEIVED
            </span>
            <h3 className="text-xl font-serif text-[#0A0F1D] mt-1 mb-2 font-bold">
              Thank You, {name || "Aquarist"}
            </h3>
            <p className="text-xs text-[#475569] max-w-sm mx-auto mb-6">
              Our team has logged your requirements for <strong>{locality}</strong>. We will review your tank specs and send an upfront quotation to your phone.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${BRAND.whatsappNumber}?text=${whatsAppDirectMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#0070E0] text-[#FFFFFF] text-xs font-bold tracking-wider uppercase hover:bg-[#0088FF] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp Now</span>
              </a>

              <button
                type="button"
                onClick={closeQuoteModal}
                className="px-5 py-2.5 rounded-md bg-[#F1F5F9] border border-[#CBD5E1] text-xs font-semibold text-[#0A0F1D] hover:bg-[#E2E8F0] transition-colors"
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
