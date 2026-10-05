import React from "react";
import type { Metadata } from "next";
import { GALLERY_ITEMS } from "@/lib/data/gallery";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { generateBreadcrumbSchema, BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Aquarium Inspirations & Gallery Bengaluru | Creators Aquarium",
  description:
    "Explore our aquascaping standards, nature aquarium designs, planted layouts, and technical configurations crafted for homes and offices across Bengaluru.",
  keywords: [
    "aquarium gallery Bangalore",
    "planted aquarium designs Bengaluru",
    "aquascaping inspirations Bangalore",
    "fish tank photos Bengaluru",
    "custom aquarium setups Bangalore",
  ],
  alternates: {
    canonical: `${BASE_URL}/gallery`,
  },
  openGraph: {
    title: "Aquarium Inspirations & Scapes Bengaluru | Creators Aquarium",
    description:
      "Explore our aquascaping standards, water management approach, and technical configurations in Bengaluru.",
    url: `${BASE_URL}/gallery`,
    images: [`${BASE_URL}/images/hero.jpg`],
  },
};

export default function GalleryPage() {
  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Gallery", url: "/gallery" },
  ]);

  const galleryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Creators Aquarium Inspirations Bengaluru",
    description: "Photographic gallery of aquarium setups, planted biotopes, and technical maintenance work in Bengaluru.",
    url: `${BASE_URL}/gallery`,
    image: GALLERY_ITEMS.map((item) => ({
      "@type": "ImageObject",
      name: item.title,
      caption: item.description,
      contentUrl: `${BASE_URL}${item.image}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24 w-full">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14 space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101310] border border-[#242824] text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
              OUR APPROACH & INSPIRATIONS
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight font-bold">
              Aquarium Inspirations
            </h1>
            <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed">
              Explore our aquascaping standards, water management approach, and technical configurations designed for homes and corporate spaces across Bengaluru.
            </p>
          </div>

          {/* Interactive Gallery with Client Filters */}
          <GalleryGrid items={GALLERY_ITEMS} />

          {/* Gallery Integrity Notice */}
          <div className="p-6 rounded-xl bg-[#0A0C0A] border border-[#242824] text-center text-xs text-[#70756D]">
            Creators Aquarium is dedicated to authentic craftsmanship and technical transparency. Case studies featuring detailed photographic client documentation will be added as scheduled residential and commercial projects complete.
          </div>
        </div>
      </div>
    </>
  );
}
