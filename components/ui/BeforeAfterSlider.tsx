"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export function BeforeAfterSlider({
  beforeImage = "/images/before-cleaning.jpg",
  afterImage = "/images/after-cleaning.jpg",
  beforeAlt = "Aquarium with algae and cloudy water before maintenance",
  afterAlt = "Aquarium crystal clean and thriving after Creators maintenance",
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const onMouseDown = () => {
    isDragging.current = true;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="w-full max-w-[1750px] mx-auto">
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#242824] select-none bg-[#050505] cursor-ew-resize shadow-2xl"
      >
        {/* AFTER Image (Full background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            sizes="(max-width: 1750px) 100vw, 1750px"
            className="object-cover"
            priority
          />
          <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-md bg-[#050505]/85 backdrop-blur-md border border-[#8BCF32]/50 text-[11px] font-bold tracking-wider uppercase text-[#8BCF32] shadow-sm">
            Example Transformation · After Creators Care
          </div>
        </div>

        {/* BEFORE Image (Clipped overlay using clipPath) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            sizes="(max-width: 1750px) 100vw, 1750px"
            className="object-cover pointer-events-none"
            priority
          />
          <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-md bg-[#050505]/85 backdrop-blur-md border border-[#242824] text-[11px] font-bold tracking-wider uppercase text-[#A3A69F] shadow-sm">
            Before Maintenance
          </div>
        </div>

        {/* Split Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-[#8BCF32] z-20 cursor-ew-resize flex items-center justify-center pointer-events-none shadow-[0_0_12px_rgba(139,207,50,0.5)]"
          style={{ left: `${sliderPos}%` }}
        >
          <div
            onMouseDown={onMouseDown}
            onTouchStart={onMouseDown}
            className="w-9 h-9 rounded-full bg-[#050505] border-2 border-[#8BCF32] flex items-center justify-center text-[#8BCF32] shadow-[0_0_16px_rgba(139,207,50,0.4)] pointer-events-auto"
          >
            <div className="flex items-center gap-0.5">
              <span className="w-1 h-3 bg-[#8BCF32] rounded-full" />
              <span className="w-1 h-3 bg-[#8BCF32] rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center text-xs text-[#70756D]">
        Drag slider left or right to inspect water clarity, hardscape detailing, and plant recovery
      </div>
    </div>
  );
}
