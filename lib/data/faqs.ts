export interface FAQItem {
  question: string;
  answer: string;
  category: "Service" | "Pricing" | "Process" | "Safety";
}

export const FAQS: FAQItem[] = [
  {
    category: "Service",
    question: "Do you design and build the entire aquarium?",
    answer:
      "Yes. We handle end-to-end custom design, tank sourcing, custom cabinetry, filtration engineering, aquascaping, and on-site commissioning from 1 ft to 6 ft.",
  },
  {
    category: "Pricing",
    question: "How are custom setups quoted?",
    answer:
      "Every custom aquarium is quoted based on dimensions, glass grade, stand materials, and equipment architecture. We provide an itemized quote before fabrication begins.",
  },
  {
    category: "Safety",
    question: "Can I introduce fish on installation day?",
    answer:
      "We advise against adding livestock on Day 1. The aquarium requires time to establish its biological cycle. We commission all hardware, prepare the water, and provide a clear timeline for adding fish.",
  },
  {
    category: "Service",
    question: "What maintenance services do you offer?",
    answer:
      "We provide single visits (from ₹799/visit for routine care) and scheduled monthly AMC plans (from ₹1,499/mo) for freshwater, planted, and marine fish-only systems across Bengaluru.",
  },
  {
    category: "Process",
    question: "What is the Service Report?",
    answer:
      "After each maintenance visit, our technician delivers a digital report to your WhatsApp documenting tested water metrics (pH, TDS, temperature), completed checklist items, and care notes.",
  },
  {
    category: "Safety",
    question: "Is water changing safe for my fish?",
    answer:
      "Yes. We perform controlled partial water changes (25%–35%) with temperature-matched, conditioned water to safeguard beneficial bacteria and prevent livestock stress.",
  },
  {
    category: "Process",
    question: "How do I get started or book a visit?",
    answer:
      "Click 'Request a Quote' or message us on WhatsApp with your tank size or space photos. We review details and confirm upfront pricing before scheduling.",
  },
];
