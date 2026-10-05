"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export function PageLoader() {
  const [mounted, setMounted] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show smooth luxury reveal on initial page load
    const timer = setTimeout(() => {
      setVisible(false);
      const unmountTimer = setTimeout(() => {
        setMounted(false);
      }, 600); // Allow fade-out transition to complete
      return () => clearTimeout(unmountTimer);
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-600 ease-out select-none ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      {/* Ambient background glow behind logo */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(139,207,50,0.14)_0%,rgba(0,163,255,0.08)_40%,transparent_70%)] blur-2xl pointer-events-none" />

      <div className="relative flex flex-col items-center space-y-7 z-10">
        {/* Full Brand Logo with Pulse Animation */}
        <div className="relative w-52 sm:w-64 aspect-[751/665] animate-logo-pulse">
          <Image
            src="/brand/logo-clean.png"
            alt="Creators Aquarium Loading"
            fill
            sizes="256px"
            className="object-contain"
            priority
          />
        </div>

        {/* Minimalist Progress Indicator */}
        <div className="w-36 sm:w-44 h-[2px] bg-[#151915] rounded-full overflow-hidden border border-[#242824]/50">
          <div className="h-full bg-gradient-to-r from-[#8BCF32] via-[#B4E35A] to-[#00A3FF] rounded-full animate-progress-shimmer" />
        </div>

        <span className="text-[10px] tracking-[0.24em] font-semibold text-[#70756D] uppercase">
          Where Oceans Meet Nature
        </span>
      </div>
    </div>
  );
}
