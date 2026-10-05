"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/lib/data/faqs";

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const categories = ["All", "Service", "Pricing", "Process", "Safety"];

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2.5 border-b border-[#242824] pb-6">
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

      {/* FAQ Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={idx}
              className="rounded-xl bg-[#0A0C0A] border border-[#242824] overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#101310] transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-bold text-[#F4F4EF]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#8BCF32] flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A3A69F] leading-relaxed border-t border-[#242824]">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
