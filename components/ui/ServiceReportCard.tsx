import React from "react";
import { Check, FileText, Droplets, Gauge, ShieldCheck, Thermometer } from "lucide-react";

export function ServiceReportCard() {
  const parameters = [
    { label: "Water Temperature", value: "25.2°C", target: "24°C–26°C", icon: Thermometer },
    { label: "Acidity (pH)", value: "6.8", target: "6.5–7.2", icon: Droplets },
    { label: "Total Dissolved Solids (TDS)", value: "180 ppm", target: "150–220 ppm", icon: Gauge },
    { label: "Ammonia (NH₃/NH₄+)", value: "0.0 ppm", target: "0.0 ppm", icon: ShieldCheck },
    { label: "Nitrate (NO₃-)", value: "< 10 ppm", target: "< 20 ppm", icon: Droplets },
  ];

  const checklist = [
    { item: "Mechanical Filter Media Rinse", done: true },
    { item: "Biological Sintered Glass Media Rinse", done: true },
    { item: "Substrate Vacuum & Debris Siphoned", done: true },
    { item: "Algae Scrubbed & Glass Detailed", done: true },
    { item: "Aquatic Plant Trimming & Shaping", done: true },
    { item: "CO₂ Diffuser Cleaned & Rate Checked", done: true },
    { item: "Heater & Lighting Timers Calibrated", done: true },
    { item: "Water Dechlorinated & Minerals Balanced", done: true },
  ];

  return (
    <div className="relative rounded-xl border border-[#242824] bg-[#0A0C0A] p-6 sm:p-8 max-w-3xl mx-auto shadow-2xl text-[#F4F4EF]">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#242824] pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-[#8BCF32] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
              SAMPLE SERVICE REPORT
            </span>
          </div>
          <h3 className="text-xl font-serif tracking-wide text-[#F4F4EF] font-bold">
            Water Quality & Maintenance Summary
          </h3>
          <p className="text-xs text-[#A3A69F]">
            Documented proof delivered to your WhatsApp after each standard service
          </p>
        </div>

        <div className="px-3 py-1.5 rounded-md bg-[#101310] border border-[#242824] text-[11px] text-[#8BCF32] font-mono font-medium">
          Ref: CA-BLR-SMPL
        </div>
      </div>

      {/* Tank Meta */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-lg bg-[#101310] border border-[#242824] mb-6 text-xs">
        <div>
          <span className="block text-[#70756D] uppercase tracking-wider text-[10px] font-semibold">
            Aquarium System
          </span>
          <span className="font-bold text-[#F4F4EF]">3 ft Planted Nature Aquarium</span>
        </div>
        <div>
          <span className="block text-[#70756D] uppercase tracking-wider text-[10px] font-semibold">
            Coverage Area
          </span>
          <span className="font-bold text-[#F4F4EF]">Bengaluru</span>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <span className="block text-[#70756D] uppercase tracking-wider text-[10px] font-semibold">
            Service Protocol
          </span>
          <span className="font-bold text-[#F4F4EF]">Creators Standard Protocol</span>
        </div>
      </div>

      {/* Two Column Layout: Parameters & Checklist */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left: Water Parameters */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.12em] text-[#F4F4EF] font-bold mb-3 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-[#8BCF32]" />
            Water Parameters Tested
          </h4>
          <div className="space-y-2">
            {parameters.map((p, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-md bg-[#101310] border border-[#242824] text-xs"
              >
                <div className="flex items-center gap-2">
                  <p.icon className="w-3.5 h-3.5 text-[#8BCF32]" />
                  <span className="text-[#A3A69F] font-medium">{p.label}</span>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-[#8BCF32]">{p.value}</span>
                  <span className="block text-[9px] text-[#70756D]">Target: {p.target}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Inspection Checklist */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.12em] text-[#F4F4EF] font-bold mb-3 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#8BCF32]" />
            Completed Service Checklist
          </h4>
          <div className="space-y-2">
            {checklist.map((c, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#F4F4EF]"
              >
                <div className="w-4 h-4 rounded-full bg-[#151915] border border-[#8BCF32] flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#8BCF32]" />
                </div>
                <span className="truncate font-medium text-[#A3A69F]">{c.item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Status */}
      <div className="pt-4 border-t border-[#242824] flex items-center justify-between text-xs text-[#70756D]">
        <span>Service Status: <strong className="text-[#8BCF32] font-bold">Completed & Logged</strong></span>
        <span className="text-[11px] text-[#70756D] italic">Delivered via WhatsApp Summary</span>
      </div>
    </div>
  );
}
