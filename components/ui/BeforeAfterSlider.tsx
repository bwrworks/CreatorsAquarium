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
    <div className="w-full max-w-4xl mx-auto">
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        className="relative aspect-video w-full overflow-hidden rounded-lg border border-[#242824] select-none bg-[#101310] cursor-ew-resize shadow-2xl"
      >
        {/* AFTER Image (Full background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            sizes="(max-width: 1200px) 100vw, 1024px"
            className="object-cover"
            priority
          />
          <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded bg-[#050505]/80 backdrop-blur-sm border border-[#242824] text-[10px] font-semibold tracking-widest uppercase text-[#8BCF32]">
            After Creators Care
          </div>
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative w-full h-full min-w-full">
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              sizes="(max-width: 1200px) 100vw, 1024px"
              className="object-cover pointer-events-none"
              style={{
                width: containerRef.current
                  ? `${containerRef.current.clientWidth}px`
                  : "100%",
                maxWidth: "none",
              }}
              priority
            />
          </div>
          <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#050505]/80 backdrop-blur-sm border border-[#242824] text-[10px] font-semibold tracking-widest uppercase text-[#A3A69F]">
            Before Maintenance
          </div>
        </div>

        {/* Split Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[#8BCF32] z-20 cursor-ew-resize flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div
            onMouseDown={onMouseDown}
            onTouchStart={onMouseDown}
            className="w-8 h-8 rounded-full bg-[#101310] border-2 border-[#8BCF32] flex items-center justify-center text-[#F4F4EF] shadow-lg pointer-events-auto"
          >
            <div className="flex gap-[3px]">
              <span className="w-[1.5px] h-3 bg-[#8BCF32]" />
              <span className="w-[1.5px] h-3 bg-[#8BCF32]" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 text-xs text-[#70756D] px-1">
        <span>← Drag left to reveal after</span>
        <span className="font-mono text-[11px] text-[#A3A69F]">Same tank · 1 visit transformation</span>
        <span>Drag right to reveal before →</span>
      </div>
    </div>
  );
}
