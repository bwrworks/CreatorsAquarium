import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center bg-[#050505] py-20">
      <div className="absolute w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(139,207,50,0.12)_0%,rgba(0,163,255,0.06)_40%,transparent_70%)] blur-2xl pointer-events-none" />

      <div className="relative flex flex-col items-center space-y-6 z-10">
        <div className="relative w-44 sm:w-56 aspect-[751/665] animate-logo-pulse">
          <Image
            src="/brand/logo-clean.png"
            alt="Creators Aquarium Loading"
            fill
            sizes="224px"
            className="object-contain"
            priority
          />
        </div>

        <div className="w-36 h-[2px] bg-[#151915] rounded-full overflow-hidden border border-[#242824]/50">
          <div className="h-full bg-gradient-to-r from-[#8BCF32] via-[#B4E35A] to-[#00A3FF] rounded-full animate-progress-shimmer" />
        </div>

        <span className="text-[10px] tracking-[0.24em] font-semibold text-[#70756D] uppercase">
          Loading Aquatic Experience...
        </span>
      </div>
    </div>
  );
}
