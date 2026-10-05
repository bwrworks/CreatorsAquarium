"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { BRAND, BENGALURU_LOCALITIES } from "@/lib/constants";

export function ContactForm() {
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

  const handleSubmit = (e: React.FormEvent) => {
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

    const messageLines = [
      `*New Service / Setup Inquiry - Creators Aquarium*`,
      `*Name:* ${name.trim()}`,
      `*Phone:* ${phone.trim()}`,
      email.trim() ? `*Email:* ${email.trim()}` : null,
      `*Locality:* ${locality}`,
      `*Service:* ${service}`,
      `*Aquarium Type:* ${tankType}`,
      `*Tank Size:* ${tankSize}`,
      notes.trim() ? `*Notes:* ${notes.trim()}` : null,
      ``,
      `_Sent via creatorsaquarium.com contact form_`,
    ].filter(Boolean);

    const whatsappText = messageLines.join("\n");
    const waUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

    // Open WhatsApp directly
    window.open(waUrl, "_blank");
    setSubmitted(true);
    setLoading(false);
  };

  const whatsappQuickMessage = [
    `*Service Inquiry - Creators Aquarium*`,
    `*Name:* ${name.trim() || "Customer"}`,
    `*Phone:* ${phone.trim() || "Not provided"}`,
    `*Locality:* ${locality}`,
    `*Service:* ${service}`,
    `*Tank:* ${tankType} (${tankSize})`,
    notes.trim() ? `*Notes:* ${notes.trim()}` : null,
  ].filter(Boolean).join("\n");

  if (submitted) {
    return (
      <div className="text-center py-10 space-y-4">
        <div className="w-12 h-12 rounded-full bg-[#151915] border border-[#8BCF32] flex items-center justify-center mx-auto text-[#8BCF32]">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-serif text-[#F4F4EF] font-bold">
          Opening WhatsApp Chat...
        </h3>
        <p className="text-xs sm:text-sm text-[#A3A69F] max-w-sm mx-auto">
          Thank you, {name}. Your aquarium details have been prepared. If WhatsApp did not open automatically, tap the button below to send your details directly to our team.
        </p>
        <div className="pt-4">
          <a
            href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
              whatsappQuickMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Follow Up On WhatsApp Now</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-[#8BCF32]">
          UPFRONT ESTIMATE
        </span>
        <h2 className="text-2xl font-serif text-[#F4F4EF] mt-1 font-bold">
          Request a Service Quote
        </h2>
        <p className="text-xs sm:text-sm text-[#A3A69F] mt-1">
          Fill out your aquarium details below. We review specs and provide a firm quote before scheduling.
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-md bg-red-950/40 border border-red-800 text-xs text-red-300">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="e.g. Anand Rao"
              className="w-full px-3.5 py-2.5 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] focus:ring-1 focus:ring-[#8BCF32] transition-colors placeholder-[#70756D]"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
              WhatsApp / Phone <span className="text-[#8BCF32]">*</span>
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit number"
              className="w-full px-3.5 py-2.5 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] focus:ring-1 focus:ring-[#8BCF32] transition-colors placeholder-[#70756D]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
              Bengaluru Locality <span className="text-[#8BCF32]">*</span>
            </label>
            <select
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
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
              Email (Optional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="For report copies"
              className="w-full px-3.5 py-2.5 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors placeholder-[#70756D]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
              Tank Type
            </label>
            <select
              value={tankType}
              onChange={(e) => setTankType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
            >
              <option value="Freshwater">Freshwater Community</option>
              <option value="Planted">Planted / Aquascape</option>
              <option value="Marine">Marine Fish-Only (Saltwater)</option>
              <option value="Cichlid">Cichlid Display</option>
              <option value="New Setup">Planning New Setup</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
              Tank Size
            </label>
            <select
              value={tankSize}
              onChange={(e) => setTankSize(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
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
          <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
            Service Requested
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
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
          <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
            Notes / Tank Status (Optional)
          </label>
          <textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Tell us about the current condition, algae issues, or specific requirements..."
            className="w-full px-3.5 py-2.5 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors placeholder-[#70756D]"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[0_2px_12px_rgba(139,207,50,0.2)] disabled:opacity-50"
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

        <div className="text-center text-[11px] text-[#70756D]">
          Zero online payment required. Call / WhatsApp: <strong className="text-[#F4F4EF]">{BRAND.phoneDisplay}</strong>
        </div>
      </form>
    </div>
  );
}
