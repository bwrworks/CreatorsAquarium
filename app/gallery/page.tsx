"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/data/gallery";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { MapPin, ArrowRight } from "lucide-react";

export default function GalleryPage() {
  const { openQuoteModal } = useQuoteModal();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Maintenance", "Freshwater", "Planted", "Setup", "Process"];

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101310] border border-[#242824] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
            AUTHENTIC CRAFTSMANSHIP
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight">
            Work Gallery
          </h1>
          <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed">
            Real jobs, actual aquascapes, and restoration transformations across Bengaluru residences and offices.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-[#242824] pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#8BCF32] text-[#050505]"
                  : "bg-[#101310] hover:bg-[#151915] text-[#A3A69F] hover:text-[#F4F4EF] border border-[#242824]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-lg bg-[#101310] border border-[#242824] hover:border-[#8BCF32]/50 overflow-hidden flex flex-col transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#050505]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#050505]/85 backdrop-blur-sm border border-[#242824] text-[10px] uppercase font-semibold text-[#8BCF32]">
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#70756D]">
                    <MapPin className="w-3.5 h-3.5 text-[#8BCF32]" />
                    <span>{item.location}</span>
                    <span className="text-[#242824]">·</span>
                    <span className="font-mono text-[10px] text-[#A3A69F]">{item.tankSpec}</span>
                  </div>
                  <h3 className="text-base font-serif text-[#F4F4EF] group-hover:text-[#B4E35A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A3A69F] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#242824]">
                  <button
                    type="button"
                    onClick={() => openQuoteModal(`Inquiry from Gallery: ${item.title}`)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#8BCF32] hover:text-[#B4E35A] transition-colors uppercase tracking-wider"
                  >
                    <span>Inquire About Similar Setup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photography Integrity Notice */}
        <div className="p-6 rounded-lg bg-[#0A0C0A] border border-[#242824] text-center text-xs text-[#70756D]">
          Creators Aquarium is dedicated to authentic craftsmanship. We only launch categories with confirmed real photographic documentation. Marine and commercial galleries will expand as client image permissions are registered.
        </div>
      </div>
    </div>
  );
}
