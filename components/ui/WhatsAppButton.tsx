"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

interface WhatsAppButtonProps {
  customMessage?: string;
}

export function WhatsAppButton({ customMessage }: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const url = getWhatsAppUrl(customMessage);

  return (
    <div className="fixed bottom-6 right-6 z-40 print:hidden">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex items-center bg-[#0A0C0A] hover:bg-[#101310] border border-[#242824] hover:border-[#8BCF32]/60 text-[#F4F4EF] rounded-full p-3 shadow-2xl hover:shadow-[0_4px_24px_rgba(139,207,50,0.2)] transition-all duration-300 ease-out"
        aria-label="Chat with Creators Aquarium on WhatsApp"
      >
        {/* WhatsApp Icon with Brand Green Accent */}
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#151915] text-[#8BCF32] group-hover:scale-105 transition-transform">
          <MessageCircle className="w-5 h-5 fill-[#8BCF32]/15 stroke-[#8BCF32]" />
          {/* Subtle online pulse */}
          <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-[#8BCF32] ring-2 ring-[#0A0C0A]" />
        </div>

        {/* Expandable Label on Desktop */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out whitespace-nowrap ${
            isHovered
              ? "max-w-[220px] opacity-100 ml-2.5 mr-2"
              : "max-w-0 opacity-0 ml-0 mr-0"
          }`}
        >
          <span className="text-xs font-semibold tracking-wide text-[#F4F4EF]">
            Chat with Creators Aquarium
          </span>
        </div>
      </a>
    </div>
  );
}
