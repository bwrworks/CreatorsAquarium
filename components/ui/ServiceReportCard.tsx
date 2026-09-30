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
    <div className="relative rounded-xl border border-[#CBD5E1] bg-[#FFFFFF] p-6 sm:p-8 max-w-3xl mx-auto shadow-md text-[#0A0F1D]">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E8F0] pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-[#0070E0]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
              SAMPLE SERVICE REPORT
            </span>
          </div>
          <h3 className="text-xl font-serif tracking-wide text-[#0A0F1D] font-bold">
            Water Quality & Maintenance Summary
          </h3>
          <p className="text-xs text-[#64748B]">
            Documented proof delivered to your WhatsApp after each standard service
          </p>
        </div>

        <div className="px-3 py-1.5 rounded-md bg-[#F1F5F9] border border-[#CBD5E1] text-[11px] text-[#475569] font-mono font-medium">
          Ref: CA-BLR-SMPL
        </div>
      </div>

      {/* Tank Meta */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] mb-6 text-xs">
        <div>
          <span className="block text-[#64748B] uppercase tracking-wider text-[10px] font-semibold">
            Aquarium System
          </span>
          <span className="font-bold text-[#0A0F1D]">3 ft Planted Nature Aquarium</span>
        </div>
        <div>
          <span className="block text-[#64748B] uppercase tracking-wider text-[10px] font-semibold">
            Bengaluru Area
          </span>
          <span className="font-bold text-[#0A0F1D]">Indiranagar, Bengaluru</span>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <span className="block text-[#64748B] uppercase tracking-wider text-[10px] font-semibold">
            Service Date
          </span>
          <span className="font-bold text-[#0A0F1D]">29 September 2026 (Sample)</span>
        </div>
      </div>

      {/* Two Column Layout: Parameters & Checklist */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left: Water Parameters */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.12em] text-[#0A0F1D] font-bold mb-3 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-[#0070E0]" />
            Water Parameters Tested
          </h4>
          <div className="space-y-2">
            {parameters.map((p, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs"
              >
                <div className="flex items-center gap-2">
                  <p.icon className="w-3.5 h-3.5 text-[#0070E0]" />
                  <span className="text-[#475569] font-medium">{p.label}</span>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-[#0A0F1D]">{p.value}</span>
                  <span className="block text-[9px] text-[#64748B]">Target: {p.target}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Inspection Checklist */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.12em] text-[#0A0F1D] font-bold mb-3 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#0070E0]" />
            Completed Service Checklist
          </h4>
          <div className="space-y-2">
            {checklist.map((c, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A0F1D]"
              >
                <div className="w-4 h-4 rounded-full bg-[#E0F2FE] border border-[#0070E0] flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#0070E0]" />
                </div>
                <span className="truncate font-medium">{c.item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Status */}
      <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
        <span>Service Status: <strong className="text-[#0070E0] font-bold">Completed</strong></span>
        <span className="text-[11px] text-[#64748B] italic">Standard Creators Aquarium Protocol</span>
      </div>
    </div>
  );
}
