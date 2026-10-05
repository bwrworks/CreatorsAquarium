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
    description: "Peaceful community fish displays, striking African cichlid biotopes, or clean minimalist gravel layouts designed for dependable low-maintenance care.",
    features: [
      "Hardy community or cichlid species selection",
      "Natural river rock and drift wood hardscaping",
      "Reliable canister or internal biological filtration",
      "Low maintenance schedule with stable parameters",
    ],
  },
  {
    id: "planted",
    title: "Planted",
    subtitle: "Nature Aquariums & Botanical Scapes",
    description: "Living underwater gardens featuring Japanese Nature style layouts, lush Dutch stem arrangements, or low-tech shade plant configurations.",
    features: [
      "Nutrient-dense aquasoil substrates",
      "High-PAR WRGB photosynthetic lighting",
      "Optional pressurized CO2 injection systems",
      "Precision hardscape balancing with stones & roots",
    ],
  },
  {
    id: "marine",
    title: "Marine Fish-Only",
    subtitle: "Saltwater Systems (FOWLR)",
    description: "Vibrant marine saltwater fish displays engineered with natural reef rock structures, sump filtration, and dedicated protein skimming. Strictly fish-only.",
    features: [
      "Natural marine rock structures & hiding caves",
      "Multi-chamber sump filtration & mechanical socks",
      "Protein skimming for organic waste removal",
      "Zero coral requirements; resilient saltwater design",
    ],
  },
];

export const TURNKEY_INCLUSIONS = [
  {
    category: "Tank",
    items: [
      "Custom dimensions tailored to your room",
      "Ultra-clear low-iron glass for distortion-free viewing",
      "Rimless or reinforced framed options based on volume",
      "Polished bevel edges and durable marine silicone",
    ],
  },
  {
    category: "Cabinet & Stand",
    items: [
      "Engineered structural steel or reinforced plywood frame",
      "Water-resistant laminate or natural wood finish",
      "Integrated ventilation and electrical cable cutouts",
      "Adjustable feet for precision leveling on uneven floors",
    ],
  },
  {
    category: "Filtration & Plumbing",
    items: [
      "Sized canister filters or custom multi-chamber sumps",
      "Biological sintered glass media & mechanical filter foams",
      "Quick-release double taps or silent PVC overflow plumbing",
      "Surface skimmer attachment for pristine water surface",
    ],
  },
  {
    category: "Lighting & Substrate",
    items: [
      "Tailored LED lighting for freshwater, planted, or marine spectrum",
      "Inert washed sands, natural gravels, or Japanese aquasoil",
      "Safe substrate layering to support biological filtration",
      "Programmable timer setup for consistent daily photoperiod",
    ],
  },
  {
    category: "Hardscape & Plants",
    items: [
      "Natural Seiryu, Dragon, or Black Lava stone arrangements",
      "Cured Malaysian, Driftwood, or Spiderwood branches",
      "Pre-selected healthy aquatic plants for planted setups",
      "Balanced hardscape placement ensuring clear swimming lanes",
    ],
  },
  {
    category: "Commissioning & Handover",
    items: [
      "Delivery, leveling, positioning, and pipework leak check",
      "Water conditioning and baseline parameter calibration",
      "Equipment testing (pumps, heater, lights, wavemaker)",
      "Comprehensive handover guide with feeding and care protocol",
    ],
  },
];

export const TURNKEY_STEPS = [
  {
    step: "01",
    title: "Consultation",
    desc: "We discuss your room space, preferred dimensions, design style, livestock vision, and budget.",
  },
  {
    step: "02",
    title: "Design & Quote",
    desc: "We configure the aquarium specs, cabinet finish, filtration, and lighting, delivering an itemized custom quote.",
  },
  {
    step: "03",
    title: "Sourcing & Fabrication",
    desc: "We fabricate the low-iron tank, build the cabinet structure, and source tested equipment from verified manufacturers.",
  },
  {
    step: "04",
    title: "Delivery & Placement",
    desc: "Our team handles safe transport to your Bengaluru address, positioning the stand and leveling the base.",
  },
  {
    step: "05",
    title: "Installation & Aquascaping",
    desc: "We install the filtration plumbing, electrical layout, substrates, hardscape stonework, driftwood, and plants.",
  },
  {
    step: "06",
    title: "Commissioning",
    desc: "We perform leak inspections, equipment operational tests, water preparation, and initial parameter baseline checks.",
  },
  {
    step: "07",
    title: "Handover",
    desc: "We walk you through equipment controls, lighting schedules, feeding procedures, and daily observations.",
  },
  {
    step: "08",
    title: "Ongoing Care",
    desc: "Transition smoothly into a flexible bi-weekly or monthly maintenance care plan to keep the system thriving.",
  },
];
