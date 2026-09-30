export interface PlanTier {
  id: string;
  name: string;
  priceMonthly: string;
  cadence: string;
  targetTank: string;
  isPopular?: boolean;
  features: string[];
  serviceReportIncluded: boolean;
}

export const MAINTENANCE_PLANS: PlanTier[] = [
  {
    id: "essential",
    name: "Essential",
    priceMonthly: "₹1,499",
    cadence: "1 scheduled visit / month",
    targetTank: "Freshwater community tanks up to 3 ft",
    isPopular: false,
    features: [
      "1 scheduled monthly maintenance visit",
      "Partial water change & conditioning",
      "Glass detailing (interior & exterior)",
      "Substrate light siphon",
      "Mechanical filter media rinse",
      "Basic temperature & pH verification",
      "Equipment visual safety check",
    ],
    serviceReportIncluded: false,
  },
  {
    id: "standard",
    name: "Standard",
    priceMonthly: "₹2,499",
    cadence: "2 scheduled visits / month",
    targetTank: "Established freshwater & large display tanks",
    isPopular: true,
    features: [
      "2 scheduled visits per month (bi-weekly)",
      "Full water change & mineral conditioning",
      "Deep glass detailing & algae management",
      "Comprehensive filter overhaul & impellor check",
      "Full water testing (pH, TDS, Nitrate)",
      "Digital Service Report after each visit",
      "Priority response for troubleshooting",
    ],
    serviceReportIncluded: true,
  },
  {
    id: "planted",
    name: "Planted Care",
    priceMonthly: "₹2,999",
    cadence: "2 scheduled visits / month",
    targetTank: "High-tech & low-tech Nature Aquariums",
    isPopular: false,
    features: [
      "2 dedicated aquascaping visits per month",
      "Surgical plant trimming & contour shaping",
      "CO2 system calibration & diffuser maintenance",
      "Nutrient dosing review & micro-algae scrub",
      "Comprehensive water chemistry audit",
      "Detailed Planted Tank Service Report",
      "Seasonal pruning & growth guidance",
    ],
    serviceReportIncluded: true,
  },
  {
    id: "marine",
    name: "Marine Care",
    priceMonthly: "₹3,999",
    cadence: "2 scheduled visits / month",
    targetTank: "Saltwater fish-only & sump-driven systems",
    isPopular: false,
    features: [
      "2 scheduled marine technician visits / month",
      "Optical refractometer salinity calibration",
      "RO/DI synthetic saltwater preparation",
      "Protein skimmer cup & neck overhaul",
      "Sump detritus clearing & filter media rinse",
      "Marine water parameter testing (Salinity, pH, Ammonia, NO3)",
      "Comprehensive Marine Service Report",
    ],
    serviceReportIncluded: true,
  },
];

export const PRICING_PHILOSOPHY = [
  {
    title: "Clear Scope",
    description: "Every task is defined upfront so you know exactly what our technician does on each visit.",
  },
  {
    title: "Transparent Pricing",
    description: "Honest starting figures with itemized quotes. No arbitrary surcharges or sudden fee changes.",
  },
  {
    title: "No Forced Packages",
    description: "Choose between single on-demand visits or flexible monthly AMCs. Pause or switch anytime.",
  },
  {
    title: "No Online Payment Needed",
    description: "All services are quoted and confirmed after evaluating your tank. Zero cart, zero forced checkout.",
  },
];
