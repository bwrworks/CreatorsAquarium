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
        className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#CBD5E1] select-none bg-[#0A0F1D] cursor-ew-resize shadow-lg"
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
          <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-md bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E2E8F0] text-[11px] font-bold tracking-wider uppercase text-[#0070E0] shadow-sm">
            After Creators Care
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
          <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-md bg-[#0A0F1D]/85 backdrop-blur-md border border-[#CBD5E1] text-[11px] font-bold tracking-wider uppercase text-[#FFFFFF] shadow-sm">
            Before Maintenance
          </div>
        </div>

        {/* Split Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-[#0070E0] z-20 cursor-ew-resize flex items-center justify-center pointer-events-none shadow-md"
          style={{ left: `${sliderPos}%` }}
        >
          <div
            onMouseDown={onMouseDown}
            onTouchStart={onMouseDown}
            className="w-9 h-9 rounded-full bg-[#FFFFFF] border-2 border-[#0070E0] flex items-center justify-center text-[#0070E0] shadow-xl pointer-events-auto"
          >
            <div className="flex gap-[3px]">
              <span className="w-[2px] h-3.5 bg-[#0070E0] rounded-full" />
              <span className="w-[2px] h-3.5 bg-[#0070E0] rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 text-xs text-[#64748B] px-1 font-medium">
        <span>← Drag left to reveal after</span>
        <span className="font-mono text-[11px] text-[#0A0F1D] font-bold">Same tank · 1 visit transformation</span>
        <span>Drag right to reveal before →</span>
      </div>
    </div>
  );
}
