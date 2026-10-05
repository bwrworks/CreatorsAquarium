"use client";

import React, { useState } from "react";
import { X, CheckCircle2, MessageCircle, ArrowRight, Loader2, Camera, UploadCloud } from "lucide-react";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { BENGALURU_LOCALITIES, BRAND, getWhatsAppUrl } from "@/lib/constants";

export function QuoteModal() {
  const { isOpen, closeQuoteModal, selectedService, selectedTankType } = useQuoteModal();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [locality, setLocality] = useState(BENGALURU_LOCALITIES[0]);
  const [tankSize, setTankSize] = useState("3 ft (approx 120–160 L)");
  const [tankType, setTankType] = useState(selectedTankType || "Freshwater");
  const [service, setService] = useState(selectedService || "AQUARIUM MAINTENANCE");
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoName(e.target.files[0].name);
    }
  };

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
        locality,
        tankType,
        tankSize,
        service,
        hasPhoto: !!photoName,
        photoName: photoName || "Not attached (can send via WhatsApp)",
        notes,
        timestamp: new Date().toISOString(),
      };

      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Unable to save inquiry");
      }

      setSubmitted(true);
    } catch {
      // Fallback: Proceed to confirmation with direct WhatsApp handover
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
  )})%0A- Service: ${encodeURIComponent(service)}${
    photoName ? `%0A- Tank Photo: Attached on device` : ""
  }${notes ? `%0A- Notes: ${encodeURIComponent(notes)}` : ""}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-xl bg-[#0A0C0A] border border-[#242824] p-6 sm:p-8 shadow-2xl my-8 text-[#F4F4EF]">
        {/* Close Button */}
        <button
          type="button"
          onClick={closeQuoteModal}
          className="absolute top-4 right-4 p-2 text-[#70756D] hover:text-[#F4F4EF] rounded-md hover:bg-[#151915] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-[#8BCF32]">
                BENGALURU AQUARIUM CARE
              </span>
              <h2 className="text-xl sm:text-2xl font-serif text-[#F4F4EF] mt-1 font-bold">
                Request a Service Quote
              </h2>
              <p className="text-xs text-[#A3A69F] mt-1">
                Zero online payment. We review your tank requirements and confirm an upfront quote.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-md bg-red-950/40 border border-red-800 text-xs text-red-300">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 1. Name & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                    Your Name <span className="text-[#8BCF32]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] focus:ring-1 focus:ring-[#8BCF32] transition-colors placeholder-[#70756D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                    WhatsApp / Mobile <span className="text-[#8BCF32]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit number"
                    className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] focus:ring-1 focus:ring-[#8BCF32] transition-colors placeholder-[#70756D]"
                  />
                </div>
              </div>

              {/* 2. Bengaluru Area & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                    Bengaluru Area <span className="text-[#8BCF32]">*</span>
                  </label>
                  <select
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                  >
                    {BENGALURU_LOCALITIES.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
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
              </div>

              {/* 3. Tank Size & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                    Tank Size
                  </label>
                  <select
                    value={tankSize}
                    onChange={(e) => setTankSize(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                  >
                    <option value="2 ft (approx 60–80 L)">2 ft (approx 60–80 Litres)</option>
                    <option value="3 ft (approx 120–160 L)">3 ft (approx 120–160 Litres)</option>
                    <option value="4 ft (approx 200–280 L)">4 ft (approx 200–280 Litres)</option>
                    <option value="5+ ft (Large / Sump System)">5+ ft Large / Sump System</option>
                    <option value="Custom Display">Custom / Commercial Display</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                    Aquarium Type
                  </label>
                  <select
                    value={tankType}
                    onChange={(e) => setTankType(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                  >
                    <option value="Freshwater">Freshwater Community</option>
                    <option value="Planted">Planted / Aquascape</option>
                    <option value="Marine">Marine Fish-Only (Saltwater)</option>
                    <option value="Cichlid">African / American Cichlid</option>
                    <option value="New Setup">Planning a New Aquarium</option>
                  </select>
                </div>
              </div>

              {/* 4. Tank Photo Upload Option */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1 flex items-center justify-between">
                  <span>Tank Photo (Optional)</span>
                  <span className="text-[10px] text-[#70756D]">Accelerates quotation</span>
                </label>
                <div className="relative border border-dashed border-[#242824] hover:border-[#8BCF32]/60 rounded-md p-3 text-center bg-[#101310]/50 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center justify-center gap-2 text-xs text-[#A3A69F]">
                    {photoName ? (
                      <>
                        <Camera className="w-4 h-4 text-[#8BCF32]" />
                        <span className="text-[#8BCF32] font-medium truncate max-w-xs">{photoName}</span>
                      </>
                    ) : (
                      <>
                        <UploadCloud className="w-4 h-4 text-[#8BCF32]" />
                        <span>Click to attach tank photo, or share via WhatsApp after submitting</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* 5. Notes */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                  Notes / Particular Issue (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Algae buildup, plant trimming needed, noisy filter, or relocation date"
                  className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors placeholder-[#70756D]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] active:bg-[#638F24] text-[#050505] text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-[0_2px_12px_rgba(139,207,50,0.2)] disabled:opacity-50"
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

              <div className="text-center text-[11px] text-[#70756D]">
                Zero online payment required. Call / WhatsApp: <strong className="text-[#F4F4EF]">{BRAND.phoneDisplay}</strong>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation */
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-[#151915] border border-[#8BCF32] flex items-center justify-center mx-auto mb-4 text-[#8BCF32]">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <span className="text-[11px] uppercase tracking-widest text-[#8BCF32] font-bold">
              REQUEST REGISTERED
            </span>
            <h3 className="text-xl font-serif text-[#F4F4EF] mt-1 mb-2 font-bold">
              Thank You, {name || "Aquarist"}
            </h3>
            <p className="text-xs text-[#A3A69F] max-w-sm mx-auto mb-6">
              Our team has logged your requirements for <strong>{locality}</strong>. We will review your tank specs and send an upfront quotation to your phone.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${BRAND.whatsappNumber}?text=${whatsAppDirectMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#8BCF32] text-[#050505] text-xs font-bold tracking-wider uppercase hover:bg-[#B4E35A] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send on WhatsApp Now</span>
              </a>

              <button
                type="button"
                onClick={closeQuoteModal}
                className="px-5 py-2.5 rounded-md bg-[#101310] border border-[#242824] text-xs font-semibold text-[#F4F4EF] hover:bg-[#151915] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
