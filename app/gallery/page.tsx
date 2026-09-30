"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/data/gallery";
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
    <div className="bg-[#FFFFFF] text-[#0A0F1D] py-16 sm:py-24 w-full">
      <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-10 lg:px-14 space-y-12">
        {/* Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
            AUTHENTIC CRAFTSMANSHIP
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#0A0F1D] tracking-tight font-bold">
            Work Gallery
          </h1>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Real jobs, actual aquascapes, and restoration transformations across Bengaluru residences and offices.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2 border-b border-[#E2E8F0] pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#0070E0] text-[#FFFFFF] shadow-xs"
                  : "bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#475569] hover:text-[#0A0F1D] border border-[#CBD5E1]"
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
              className="group rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#0070E0] shadow-sm hover:shadow-md overflow-hidden flex flex-col transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F1F5F9]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#E2E8F0] text-[10px] uppercase font-bold text-[#0070E0] shadow-xs">
                  {item.category}
                </div>
              </div>

              <div className="p-7 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#64748B] font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#0070E0]" />
                    <span>{item.location}</span>
                    <span className="text-[#CBD5E1]">·</span>
                    <span className="font-mono text-[10px] text-[#0A0F1D] font-bold">{item.tankSpec}</span>
                  </div>
                  <h3 className="text-lg font-serif text-[#0A0F1D] font-bold group-hover:text-[#0070E0] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => openQuoteModal(`Inquiry from Gallery: ${item.title}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0070E0] hover:text-[#0055B3] transition-colors uppercase tracking-wider cursor-pointer"
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
        <div className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center text-xs text-[#64748B]">
          Creators Aquarium is dedicated to authentic craftsmanship. We only launch categories with confirmed real photographic documentation. Marine and commercial galleries will expand as client image permissions are registered.
        </div>
      </div>
    </div>
  );
}
