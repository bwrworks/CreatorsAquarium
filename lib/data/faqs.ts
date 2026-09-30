export interface FAQItem {
  question: string;
  answer: string;
  category: "Service" | "Pricing" | "Process" | "Safety";
}

export const FAQS: FAQItem[] = [
  {
    category: "Service",
    question: "Do you bring your own tools and equipment for maintenance?",
    answer:
      "Yes. Our technicians arrive with a dedicated professional aquarium kit including specialized curved trimming tools, non-abrasive glass cleaners, gravel siphons, digital water testing meters, and buckets. You only need to provide access to tap water and an electrical outlet.",
  },
  {
    category: "Safety",
    question: "Is water changing safe for my fish and aquatic plants?",
    answer:
      "Absolutely. We never perform 100% destructive water dumps. We carry out controlled partial water changes (typically 25%–35%), carefully match water temperatures, and neutralize chlorine and heavy metals with quality conditioners to prevent osmotic shock and preserve vital nitrifying bacteria.",
  },
  {
    category: "Pricing",
    question: "Why do your prices state 'Starting from'?",
    answer:
      "Every aquarium is unique. An established 2-foot freshwater tank requires less time and supplies than an overgrown 5-foot planted aquascape or a high-volume marine sump system. Our public prices represent our baseline starting fee for healthy tanks; your final quotation is confirmed after reviewing tank photos or performing an initial inspection.",
  },
  {
    category: "Process",
    question: "What is the Service Report and when do I receive it?",
    answer:
      "After every standard and specialist maintenance visit, our technician generates a digital Service Report documenting key water parameters (pH, TDS, temperature, nitrate levels), equipment inspection status, and actions completed. This creates a transparent historical health record for your aquarium.",
  },
  {
    category: "Service",
    question: "What types of marine (saltwater) aquariums do you set up and maintain?",
    answer:
      "In strict adherence to Indian environmental law and the Wildlife (Protection) Act, Creators Aquarium specializes exclusively in freshwater planted aquascapes and marine fish-only systems using legally compliant, sustainably sourced marine livestock and specialized filtration.",
  },
  {
    category: "Process",
    question: "How do I book a service visit or get a quotation?",
    answer:
      "Simply click 'Request a Quote' on our website or reach out directly via WhatsApp with a photo or details of your aquarium (approximate size, tank type, and Bengaluru location). Our team will review your requirements, provide an upfront estimate, and schedule a convenient visit.",
  },
  {
    category: "Pricing",
    question: "Do I have to pay online or enter credit card details?",
    answer:
      "No. Phase 1 of Creators Aquarium operates on an honest, quote-first model with zero online payments, shopping carts, or hidden checkout fees. Payment is settled through verified business UPI or bank transfer only after service scope confirmation.",
  },
  {
    category: "Safety",
    question: "How do you ensure safe fish transport during aquarium relocations?",
    answer:
      "We use insulated, aerated livestock transit containers to prevent temperature drops and oxygen depletion. We also preserve a portion of mature aquarium water and ensure biological filter media remains moist and viable throughout the move to avoid post-relocation cycle crashes.",
  },
];
