"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Compass } from "lucide-react";
import { GalleryItem } from "@/lib/data/gallery";
import { useQuoteModal } from "@/components/context/QuoteModalContext";

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const { openQuoteModal } = useQuoteModal();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Maintenance", "Freshwater", "Planted", "Setup", "Process"];

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2.5 pt-2 border-b border-[#242824] pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeCategory === cat
                ? "bg-[#8BCF32] text-[#050505] shadow-xs"
                : "bg-[#101310] hover:bg-[#151915] text-[#A3A69F] hover:text-[#F4F4EF] border border-[#242824]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Cards Grid (3 Columns on Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group rounded-xl bg-[#0A0C0A] border border-[#242824] hover:border-[#8BCF32]/50 shadow-2xl overflow-hidden flex flex-col transition-all duration-300"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101310]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#050505]/85 backdrop-blur-sm border border-[#242824] text-[10px] uppercase font-bold text-[#8BCF32]">
                {item.category}
              </div>
            </div>

            <div className="p-7 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-[#A3A69F]">
                  <Compass className="w-3.5 h-3.5 text-[#8BCF32]" />
                  <span className="font-semibold text-[#8BCF32]">{item.scope}</span>
                  <span className="text-[#353D35]">·</span>
                  <span className="font-mono text-[10px] text-[#70756D]">{item.tankSpec}</span>
                </div>
                <h3 className="text-lg font-serif text-[#F4F4EF] font-bold group-hover:text-[#8BCF32] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A3A69F] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#242824]">
                <button
                  type="button"
                  onClick={() => openQuoteModal(`Inquiry from Inspirations: ${item.title}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8BCF32] hover:text-[#B4E35A] transition-colors uppercase tracking-wider cursor-pointer"
                >
                  <span>Inquire About Similar Setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
