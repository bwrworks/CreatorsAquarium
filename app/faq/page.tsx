import React from "react";
import type { Metadata } from "next";
import { MessageCircle, HelpCircle } from "lucide-react";
import { FAQS } from "@/lib/data/faqs";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { OpenQuoteModalButton } from "@/components/ui/OpenQuoteModalButton";
import { generateFAQSchema, generateBreadcrumbSchema, BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Aquarium Maintenance & Care FAQs Bengaluru",
  description:
    "Find answers to frequently asked questions about aquarium maintenance in Bengaluru: water change protocols, biological filtration care, pricing transparency, and service cadences.",
  keywords: [
    "aquarium maintenance FAQ Bangalore",
    "fish tank cleaning questions Bengaluru",
    "aquarium service cost Bangalore",
    "how often to clean aquarium Bengaluru",
    "fish tank water change frequency",
  ],
  alternates: {
    canonical: `${BASE_URL}/faq`,
  },
  openGraph: {
    title: "Aquarium Maintenance & Care FAQs Bengaluru | Creators Aquarium",
    description:
      "Clear answers on water handling, livestock safety, filter care, and upfront pricing across Bengaluru.",
    url: `${BASE_URL}/faq`,
    images: [`${BASE_URL}/images/hero.jpg`],
  },
};

export default function FAQPage() {
  const faqJsonLd = generateFAQSchema(FAQS);
  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "FAQ", url: "/faq" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24 w-full">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101310] border border-[#242824] text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
              CLEAR ANSWERS
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight font-bold">
              Frequently Asked Questions
            </h1>
            <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed">
              Straightforward explanations about our water handling, pricing philosophy, booking procedures, and livestock protection.
            </p>
          </div>

          {/* Interactive Accordion with Filter Tabs */}
          <FAQAccordion faqs={FAQS} />

          {/* Still have questions? */}
          <div className="p-8 sm:p-10 rounded-xl bg-[#0A0C0A] border border-[#242824] text-center space-y-4">
            <HelpCircle className="w-8 h-8 text-[#8BCF32] mx-auto" />
            <h3 className="text-xl font-serif text-[#F4F4EF] font-bold">
              Have a question about your specific tank?
            </h3>
            <p className="text-xs sm:text-sm text-[#A3A69F] max-w-sm mx-auto">
              Drop us a message with your tank size and Bengaluru locality. Call or message us directly at <strong className="text-[#F4F4EF]">{BRAND.phoneDisplay}</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={getWhatsAppUrl("Hi Creators Aquarium, I have a specific question about my aquarium setup.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md bg-[#8BCF32] hover:bg-[#B4E35A] text-[#050505] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-[0_2px_12px_rgba(139,207,50,0.2)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask via WhatsApp</span>
              </a>

              <OpenQuoteModalButton
                defaultService="Question from FAQ"
                className="px-6 py-3 rounded-md bg-[#101310] border border-[#242824] hover:border-[#8BCF32]/60 text-xs font-bold uppercase tracking-wider text-[#F4F4EF] transition-colors cursor-pointer shadow-xs"
              >
                Request a Service Quote
              </OpenQuoteModalButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
