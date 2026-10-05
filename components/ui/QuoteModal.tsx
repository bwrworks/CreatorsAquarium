"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, MessageCircle, ArrowRight, Sparkles, Wrench } from "lucide-react";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { BENGALURU_LOCALITIES, BRAND, getWhatsAppUrl } from "@/lib/constants";

export function QuoteModal() {
  const { isOpen, closeQuoteModal, selectedService, selectedTankType } = useQuoteModal();

  const [mode, setMode] = useState<"setup" | "maintenance">("setup");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [locality, setLocality] = useState(BENGALURU_LOCALITIES[0]);

  // Setup Specific Fields
  const [tankSize, setTankSize] = useState("3 FT");
  const [aquariumType, setAquariumType] = useState("Planted");
  const [existingTankStatus, setExistingTankStatus] = useState("I need everything");
  const [needCabinet, setNeedCabinet] = useState("Yes");
  const [setupStyle, setSetupStyle] = useState("Nature Aquascape");
  const [budgetRange, setBudgetRange] = useState("₹25,000–₹50,000");

  // Maintenance Specific Fields
  const [maintenanceService, setMaintenanceService] = useState("Routine Maintenance (from ₹799)");
  const [tankCondition, setTankCondition] = useState("Moderate algae / needs cleaning");
  const [serviceCadence, setServiceCadence] = useState("One-time visit");

  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Sync mode with trigger service
  useEffect(() => {
    if (selectedService) {
      const isSetup =
        selectedService.toUpperCase().includes("SETUP") ||
        selectedService.toUpperCase().includes("DESIGN") ||
        selectedService.toUpperCase().includes("BUILD");
      setMode(isSetup ? "setup" : "maintenance");
    }
    if (selectedTankType) {
      setTankSize(selectedTankType);
    }
  }, [selectedService, selectedTankType]);

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setErrorMessage("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    if (mode === "setup") {
      return `Hi Creators Aquarium, I'd like a design consultation for a new custom aquarium setup in Bengaluru.
Name: ${name}
Area: ${locality}
Tank Size: ${tankSize}
Aquarium Type: ${aquariumType}
Tank Status: ${existingTankStatus}
Cabinet Required: ${needCabinet}
Preferred Style: ${setupStyle}
Approx Budget: ${budgetRange}
${notes ? `Notes: ${notes}\n` : ""}I will share room/space photos here on WhatsApp.`;
    } else {
      return `Hi Creators Aquarium, I would like to request an aquarium maintenance quote in Bengaluru.
Name: ${name}
Area: ${locality}
Service: ${maintenanceService}
Tank Size: ${tankSize}
Aquarium Type: ${aquariumType}
Condition: ${tankCondition}
Frequency: ${serviceCadence}
${notes ? `Notes: ${notes}\n` : ""}I will share photos of my tank here on WhatsApp.`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMessage("Please provide a valid 10-digit WhatsApp or mobile number.");
      return;
    }

    const message = buildWhatsAppMessage();
    const waUrl = getWhatsAppUrl(message);

    // Open WhatsApp directly
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={closeQuoteModal}
    >
      <div
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#0A0C0A] border border-[#242824] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#F4F4EF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeQuoteModal}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#101310] border border-[#242824] text-[#A3A69F] hover:text-[#F4F4EF] hover:border-[#8BCF32]/50 transition-colors cursor-pointer"
          aria-label="Close quote modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2 pr-8">
              <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-[#8BCF32] block">
                CREATORS AQUARIUM · BENGALURU
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#F4F4EF]">
                {mode === "setup" ? "New Aquarium Design Consultation" : "Schedule Aquarium Maintenance"}
              </h2>
              <p className="text-xs text-[#A3A69F]">
                {mode === "setup"
                  ? "Share your room space vision. We design, source, build, and install the complete aquarium."
                  : "Transparent, disciplined upkeep for freshwater, planted, and marine fish-only systems."}
              </p>
            </div>

            {/* Mode Selector Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-lg bg-[#101310] border border-[#242824]">
              <button
                type="button"
                onClick={() => setMode("setup")}
                className={`py-2 px-3 rounded-md text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  mode === "setup"
                    ? "bg-[#8BCF32] text-[#050505] shadow-xs"
                    : "text-[#A3A69F] hover:text-[#F4F4EF]"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>New Setup</span>
              </button>

              <button
                type="button"
                onClick={() => setMode("maintenance")}
                className={`py-2 px-3 rounded-md text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  mode === "maintenance"
                    ? "bg-[#8BCF32] text-[#050505] shadow-xs"
                    : "text-[#A3A69F] hover:text-[#F4F4EF]"
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>Maintenance</span>
              </button>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-md bg-red-950/40 border border-red-800 text-xs text-red-300">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                    className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                    WhatsApp Number <span className="text-[#8BCF32]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit number"
                    className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                  Bengaluru Locality <span className="text-[#8BCF32]">*</span>
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

              {/* Dynamic Fields for Mode A: NEW SETUP */}
              {mode === "setup" && (
                <div className="space-y-3.5 pt-1 border-t border-[#242824]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                        Tank Size
                      </label>
                      <select
                        value={tankSize}
                        onChange={(e) => setTankSize(e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                      >
                        <option value="1 FT">1 FT (Nano Desktop)</option>
                        <option value="2 FT">2 FT (Compact Home)</option>
                        <option value="3 FT">3 FT (Mid-Size Feature)</option>
                        <option value="4 FT">4 FT (Statement Display)</option>
                        <option value="5 FT">5 FT (Large Format)</option>
                        <option value="6 FT">6 FT (Oversized Luxury)</option>
                        <option value="CUSTOM">Custom Architectural</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                        Aquarium Type
                      </label>
                      <select
                        value={aquariumType}
                        onChange={(e) => setAquariumType(e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                      >
                        <option value="Freshwater">Freshwater Community</option>
                        <option value="Planted">Planted Nature Aquascape</option>
                        <option value="Marine Fish-Only">Marine Fish-Only (Saltwater)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                        Do you have a tank?
                      </label>
                      <select
                        value={existingTankStatus}
                        onChange={(e) => setExistingTankStatus(e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                      >
                        <option value="I need everything">I need everything (Turnkey)</option>
                        <option value="I already have the tank">I have the tank, need equipment/scape</option>
                        <option value="I have tank and equipment">I have tank + equipment, need setup/scape</option>
                        <option value="I need redesign / upgrade">I need a redesign / upgrade</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                        Need Cabinet / Stand?
                      </label>
                      <select
                        value={needCabinet}
                        onChange={(e) => setNeedCabinet(e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                      >
                        <option value="Yes">Yes, custom cabinet required</option>
                        <option value="No">No, placing on existing reinforced furniture</option>
                        <option value="Not sure">Not sure, need assessment</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                        Preferred Style
                      </label>
                      <select
                        value={setupStyle}
                        onChange={(e) => setSetupStyle(e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                      >
                        <option value="Nature Aquascape">Nature Aquascape (Iwagumi/Driftwood)</option>
                        <option value="Minimal Clean">Minimal Clean Display</option>
                        <option value="Dense Dutch Planted">Lush Stem Planted Layout</option>
                        <option value="Cichlid Biotope">Rocky Cichlid Biotope</option>
                        <option value="Marine FOWLR">Marine Fish-Only (Live Rock)</option>
                        <option value="Custom Vision">Custom Architectural Concept</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                        Approximate Budget (Optional)
                      </label>
                      <select
                        value={budgetRange}
                        onChange={(e) => setBudgetRange(e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                      >
                        <option value="Under ₹25,000">Under ₹25,000</option>
                        <option value="₹25,000–₹50,000">₹25,000–₹50,000</option>
                        <option value="₹50,000–₹1,00,000">₹50,000–₹1,00,000</option>
                        <option value="₹1,00,000+">₹1,00,000+</option>
                        <option value="Not sure">Not sure, quote recommended specs</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Dynamic Fields for Mode B: MAINTENANCE */}
              {mode === "maintenance" && (
                <div className="space-y-3.5 pt-1 border-t border-[#242824]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                        Service Requested
                      </label>
                      <select
                        value={maintenanceService}
                        onChange={(e) => setMaintenanceService(e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                      >
                        <option value="Routine Maintenance (from ₹799)">Routine Maintenance (from ₹799)</option>
                        <option value="Deep Clean & Overhaul (from ₹1,499)">Deep Clean & Overhaul (from ₹1,499)</option>
                        <option value="Planted Care & Trimming (from ₹1,499)">Planted Care & Trimming (from ₹1,499)</option>
                        <option value="Marine Fish-Only Care (from ₹2,499)">Marine Fish-Only Care (from ₹2,499)</option>
                        <option value="Aquarium Relocation (from ₹1,999)">Aquarium Relocation (from ₹1,999)</option>
                        <option value="Monthly AMC Plan Consultation">Monthly AMC Plan Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                        Tank Size & Type
                      </label>
                      <select
                        value={tankSize}
                        onChange={(e) => setTankSize(e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                      >
                        <option value="2 ft">2 ft (approx 60–80L)</option>
                        <option value="3 ft">3 ft (approx 120–160L)</option>
                        <option value="4 ft">4 ft (approx 200–280L)</option>
                        <option value="5+ ft">5+ ft Large Display / Sump</option>
                        <option value="Custom Size">Custom / Commercial Display</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                        Current Condition
                      </label>
                      <select
                        value={tankCondition}
                        onChange={(e) => setTankCondition(e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                      >
                        <option value="Normal routine upkeep">Normal routine upkeep needed</option>
                        <option value="Moderate algae on glass/decor">Moderate algae on glass/decor</option>
                        <option value="Heavy algae / cloudy water">Heavy algae / cloudy water overhaul</option>
                        <option value="Filter clogged / equipment noise">Filter clogged / equipment noise</option>
                        <option value="Recently moved / needs restart">Recently moved / needs restart</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                        Preferred Frequency
                      </label>
                      <select
                        value={serviceCadence}
                        onChange={(e) => setServiceCadence(e.target.value)}
                        className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors"
                      >
                        <option value="One-time visit">One-time visit</option>
                        <option value="Standard AMC (2 visits/mo)">Standard AMC (2 visits/month)</option>
                        <option value="Essential AMC (1 visit/mo)">Essential AMC (1 visit/month)</option>
                        <option value="Weekly care (Commercial)">Weekly care (Commercial SLA)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Notes / Photos guidance */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#A3A69F] mb-1">
                  Notes & Room Details (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={
                    mode === "setup"
                      ? "Describe room placement, space dimensions, or specific fish you want to keep..."
                      : "Mention any filter issues, specific algae challenges, or preferred visiting times..."
                  }
                  className="w-full px-3 py-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF] focus:outline-none focus:border-[#8BCF32] transition-colors placeholder-[#70756D]"
                />
              </div>

              {/* WhatsApp Photo Handoff Guidance */}
              <div className="p-3 rounded-lg bg-[#151915] border border-[#242824] text-xs text-[#A3A69F] flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#8BCF32] flex-shrink-0" />
                <span>
                  After clicking below, you can share photos of your room space or tank directly on WhatsApp for an itemized estimate.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] active:bg-[#638F24] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[0_2px_16px_rgba(139,207,50,0.25)]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>
                    {mode === "setup" ? "Request Setup Consultation on WhatsApp" : "Request Maintenance on WhatsApp"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[10px] text-[#70756D]">
                Direct WhatsApp handoff · Itemized quote confirmed before service · Call: <strong className="text-[#F4F4EF]">{BRAND.phoneDisplay}</strong>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-8 space-y-5">
            <div className="w-12 h-12 rounded-full bg-[#151915] border border-[#8BCF32] flex items-center justify-center mx-auto text-[#8BCF32]">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-serif text-[#F4F4EF] font-bold">
                WhatsApp Dispatch Ready
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A69F] max-w-sm mx-auto">
                Thank you, {name}. If WhatsApp did not open automatically, click the button below to send your {locality} inquiry and attach your photos.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl(buildWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Continue to WhatsApp Chat</span>
              </a>
            </div>

            <button
              type="button"
              onClick={closeQuoteModal}
              className="text-xs text-[#70756D] hover:text-[#F4F4EF] transition-colors underline pt-2 block mx-auto"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
