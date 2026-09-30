"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle, Phone, HelpCircle } from "lucide-react";
import { FAQS } from "@/lib/data/faqs";
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
    <div className="bg-[#FFFFFF] text-[#0A0F1D] py-16 sm:py-24 w-full">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[11px] font-bold uppercase tracking-[0.14em] text-[#0070E0]">
            CLEAR ANSWERS
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#0A0F1D] tracking-tight font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Straightforward explanations about our water handling, pricing philosophy, booking procedures, and livestock protection.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 border-b border-[#E2E8F0] pb-6">
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

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F1F5F9] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A0F1D]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0070E0] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="p-8 sm:p-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-[#0070E0] mx-auto" />
          <h3 className="text-xl font-serif text-[#0A0F1D] font-bold">
            Have a question about your specific tank?
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] max-w-sm mx-auto">
            Drop us a message with your tank size and Bengaluru locality. Call or message us directly at <strong className="text-[#0A0F1D]">{BRAND.phoneDisplay}</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={getWhatsAppUrl("Hi Creators Aquarium, I have a specific question about my aquarium setup.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-[#0070E0] hover:bg-[#0088FF] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask via WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => openQuoteModal("Question from FAQ")}
              className="px-6 py-3 rounded-md bg-[#FFFFFF] border border-[#CBD5E1] hover:border-[#0070E0] text-xs font-bold uppercase tracking-wider text-[#0A0F1D] transition-colors cursor-pointer shadow-xs"
            >
              Request a Service Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
