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
        className="group flex items-center bg-[#FFFFFF] hover:bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0070E0] text-[#0A0F1D] rounded-full p-3 shadow-lg hover:shadow-[0_4px_20px_rgba(0,112,224,0.22)] transition-all duration-300 ease-out"
        aria-label="Chat with Creators Aquarium on WhatsApp"
      >
        {/* WhatsApp Icon with Brand Blue Accent */}
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#E0F2FE] text-[#0070E0] group-hover:scale-105 transition-transform">
          <MessageCircle className="w-5 h-5 fill-[#0070E0]/20 stroke-[#0070E0]" />
          {/* Subtle online pulse */}
          <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-[#0070E0] ring-2 ring-[#FFFFFF]" />
        </div>

        {/* Expandable Label on Desktop */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out whitespace-nowrap ${
            isHovered
              ? "max-w-[220px] opacity-100 ml-2.5 mr-2"
              : "max-w-0 opacity-0 ml-0 mr-0"
          }`}
        >
          <span className="text-xs font-semibold tracking-wide text-[#0A0F1D]">
            Chat with Creators Aquarium
          </span>
        </div>
      </a>
    </div>
  );
}
