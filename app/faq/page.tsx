"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle, Phone, ArrowRight, HelpCircle } from "lucide-react";
import { FAQS, FAQItem } from "@/lib/data/faqs";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { useQuoteModal } from "@/components/context/QuoteModalContext";

export default function FAQPage() {
  const { openQuoteModal } = useQuoteModal();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const categories = ["All", "Service", "Pricing", "Process", "Safety"];

  const filteredFaqs =
    activeCategory === "All"
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101310] border border-[#242824] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8BCF32]">
            CLEAR ANSWERS
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed">
            Straightforward explanations about our water handling, pricing philosophy, booking procedures, and livestock protection.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#242824] pb-6">
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

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="rounded-lg bg-[#101310] border border-[#242824] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#151915] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-[#F4F4EF]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8BCF32] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#A3A69F] leading-relaxed border-t border-[#242824]/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="p-8 rounded-lg bg-[#0A0C0A] border border-[#242824] text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-[#8BCF32] mx-auto" />
          <h3 className="text-lg font-serif text-[#F4F4EF]">
            Have a question about your specific tank?
          </h3>
          <p className="text-xs text-[#A3A69F] max-w-sm mx-auto">
            Drop us a message with your tank size and Bengaluru locality. We will be happy to assist.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={getWhatsAppUrl("Hi Creators Aquarium, I have a specific question about my aquarium setup.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask via WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => openQuoteModal("Question from FAQ")}
              className="px-5 py-2.5 rounded bg-[#101310] border border-[#242824] hover:border-[#8BCF32]/50 text-xs font-semibold uppercase tracking-wider text-[#F4F4EF] transition-colors cursor-pointer"
            >
              Request a Service Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
