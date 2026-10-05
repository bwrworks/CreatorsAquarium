export interface TankSizeOption {
  id: string;
  size: string;
  label: string;
  typicalUse: string;
  suitableTypes: string[];
  exampleConfig: string;
  priceNote: string;
}

export const TANK_SIZES: TankSizeOption[] = [
  {
    id: "1ft",
    size: "1 FT",
    label: "Nano Desktop",
    typicalUse: "Study desks, compact consoles, bedrooms, private offices",
    suitableTypes: ["Freshwater", "Planted"],
    exampleConfig: "Rimless low-iron glass, hang-on-back filtration, full-spectrum LED clip light, natural sand or aquasoil substrate.",
    priceNote: "Custom Quote",
  },
  {
    id: "2ft",
    size: "2 FT",
    label: "Compact Home Display",
    typicalUse: "Apartment living rooms, dining sideboards, clinic reception desks",
    suitableTypes: ["Freshwater", "Planted", "Marine Fish-Only"],
    exampleConfig: "Low-iron rimless tank, compact canister filter or internal filtration, custom steel-core cabinet, programmed lighting.",
    priceNote: "Custom Quote",
  },
  {
    id: "3ft",
    size: "3 FT",
    label: "Mid-Size Living Room Feature",
    typicalUse: "Family living rooms, executive cabins, boutique waiting lounges",
    suitableTypes: ["Freshwater", "Planted", "Marine Fish-Only"],
    exampleConfig: "3-foot rimless tank with matching waterproof cabinet, high-capacity canister filter, twin WRGB lights, premium stone & driftwood layout.",
    priceNote: "Custom Quote",
  },
  {
    id: "4ft",
    size: "4 FT",
    label: "Large Residential & Office Display",
    typicalUse: "Main living room statement, villa foyers, corporate reception areas",
    suitableTypes: ["Freshwater", "Planted", "Marine Fish-Only"],
    exampleConfig: "4-foot engineered display, reinforced stand, multi-stage filtration (large canister or sump), CO2 injection (planted) or skimmer (marine).",
    priceNote: "Custom Quote",
  },
  {
    id: "5ft",
    size: "5 FT",
    label: "Large Format Centerpiece",
    typicalUse: "Villa drawing rooms, hotel lounges, corporate boardrooms",
    suitableTypes: ["Freshwater", "Planted", "Marine Fish-Only"],
    exampleConfig: "Thick low-iron glass construction, heavy-duty moisture-sealed cabinet, sump filtration system, high-output lighting, statement aquascaping.",
    priceNote: "Custom Quote",
  },
  {
    id: "6ft",
    size: "6 FT",
    label: "Oversized Luxury Installation",
    typicalUse: "Architectural focal points, luxury residences, commercial flagships",
    suitableTypes: ["Freshwater", "Planted", "Marine Fish-Only"],
    exampleConfig: "Custom engineered glass or acrylic, dedicated multi-chamber acrylic sump, dual return pumps, automated dosing provisions, architectural cabinetry.",
    priceNote: "Custom Quote",
  },
  {
    id: "custom",
    size: "CUSTOM",
    label: "Architectural & In-Wall",
    typicalUse: "Room dividers, partition walls, recessed alcoves, bespoke commercial dimensions",
    suitableTypes: ["Freshwater", "Planted", "Marine Fish-Only"],
    exampleConfig: "Site-specific engineering, custom dimensions, hidden back-room filtration, custom plumbing pathways, integrated automated top-off.",
    priceNote: "Custom Quote",
  },
];

export const AQUARIUM_TYPES = [
  {
    id: "freshwater",
    title: "Freshwater",
    subtitle: "Community & Cichlid Displays",
    description: "Peaceful community displays, cichlid biotopes, or clean minimalist gravel layouts designed for dependable care.",
    types: ["Community aquariums", "Cichlid systems", "Low-maintenance displays"],
  },
  {
    id: "planted",
    title: "Planted",
    subtitle: "Nature Aquariums",
    description: "Underwater living gardens with Nature style scapes, lush stem plants, and balanced aquasoil substrates.",
    types: ["Nature aquariums", "Low-tech planted", "High-tech CO₂ systems"],
  },
  {
    id: "marine",
    title: "Marine Fish-Only",
    subtitle: "Saltwater Systems",
    description: "Vibrant marine saltwater fish displays engineered with natural rock structures, sump filtration, and skimmers. Strictly fish-only.",
    types: ["Saltwater fish systems", "Sump filtration", "Protein skimming"],
  },
];

export const TURNKEY_INCLUSIONS = [
  {
    category: "Tank",
    items: [
      "Custom aquarium dimensions",
      "Low-iron glass where required",
      "Rimless or framed construction",
    ],
  },
  {
    category: "Cabinet / Stand",
    items: [
      "Custom cabinet",
      "Steel structure",
      "Moisture-resistant materials",
      "Finish selected for the space",
    ],
  },
  {
    category: "Filtration",
    items: [
      "Canister filtration",
      "Internal filtration",
      "Sump systems",
    ],
  },
  {
    category: "Lighting",
    items: [
      "Freshwater lighting",
      "Planted lighting",
      "Marine fish-only lighting",
    ],
  },
  {
    category: "Substrate",
    items: [
      "Natural sand",
      "Aquasoil",
      "Suitable substrates",
    ],
  },
  {
    category: "Hardscape",
    items: [
      "Natural driftwood",
      "Stones & rocks",
      "Marine rock structures",
    ],
  },
  {
    category: "Equipment",
    items: [
      "Heater & pump",
      "Wavemaker & skimmer",
      "CO₂ system (where required)",
    ],
  },
  {
    category: "Installation & Handover",
    items: [
      "Delivery, placement & leveling",
      "Plumbing & electrical setup",
      "Aquascaping & commissioning",
      "Customer handover & care guide",
    ],
  },
];

export const TURNKEY_STEPS = [
  {
    step: "01",
    title: "Consultation",
    desc: "Understand space, requirements, and livestock vision.",
  },
  {
    step: "02",
    title: "Design & Quote",
    desc: "Design the aquarium and provide the proposed equipment and specification.",
  },
  {
    step: "03",
    title: "Sourcing & Fabrication",
    desc: "Source the tank, cabinet, and equipment.",
  },
  {
    step: "04",
    title: "Delivery & Placement",
    desc: "Transport, position, and level the system.",
  },
  {
    step: "05",
    title: "Installation & Aquascaping",
    desc: "Filtration, plumbing, electrical setup, and aquascape.",
  },
  {
    step: "06",
    title: "Commissioning",
    desc: "Test the system and prepare it for operation.",
  },
  {
    step: "07",
    title: "Handover",
    desc: "Explain operation, lighting, feeding, and basic care.",
  },
  {
    step: "08",
    title: "Ongoing Care",
    desc: "Optional maintenance and AMC plans.",
  },
];
