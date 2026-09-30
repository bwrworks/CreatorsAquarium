export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: "Freshwater" | "Planted" | "Marine" | "Installation" | "Relocation";
  startingPrice: string;
  priceNote: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  inclusions: string[];
  exclusions: string[];
  seoTitle: string;
  seoDescription: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "maintenance",
    slug: "maintenance",
    title: "AQUARIUM MAINTENANCE",
    tagline: "Scheduled routine care & deep overhaul",
    category: "Freshwater",
    startingPrice: "₹799 / visit",
    priceNote: "Starting from ₹799 for routine visits; ₹1,499 for deep cleaning. Final quote based on tank volume and condition.",
    image: "/images/service-maintenance.jpg",
    shortDescription:
      "Disciplined periodic care, mechanical & biological filtration overhaul, algae scrub, substrate vacuuming, and water chemistry testing.",
    fullDescription:
      "Aquariums thrive on consistency. Our scheduled maintenance service provides thorough care designed to maintain crystal-clear water, biological stability, and healthy livestock without disrupting the ecosystem.",
    inclusions: [
      "Partial water change (25%–40%) with temperature and conditioning match",
      "Internal and external glass cleaning with non-scratch razor/felt tools",
      "Substrate siphon & debris extraction",
      "Mechanical filter media rinse & impellor inspection",
      "Key water parameter testing (pH, TDS, temperature)",
      "System checklist & equipment safety audit",
    ],
    exclusions: [
      "Replacement equipment or filter media unless pre-ordered",
      "Medication or chemical veterinary treatment",
      "Full teardown unless separately quoted",
      "Livestock purchase or replacement",
    ],
    seoTitle: "Aquarium Maintenance Bangalore | Creators Aquarium",
    seoDescription:
      "Professional scheduled aquarium maintenance & deep cleaning in Bengaluru. Water testing, filter care, and glass detailing starting from ₹799/visit.",
  },
  {
    id: "planted-aquarium",
    slug: "planted-aquarium",
    title: "PLANTED AQUARIUM CARE",
    tagline: "High-tech nature aquascapes & botanical health",
    category: "Planted",
    startingPrice: "₹1,499 / visit",
    priceNote: "Starting from. Final pricing depends on tank size, plant density and CO2 system complexity.",
    image: "/images/service-planted.jpg",
    shortDescription:
      "Specialist botanical maintenance for Nature Aquariums: plant trimming, CO2 system calibration, liquid fertilization balance, and precision algae control.",
    fullDescription:
      "Nature aquariums require horticultural expertise. We balance lighting photoperiods, carbon dioxide injection rates, and macro/micro nutrient dosing to ensure lush carpet growth and vibrant stem plants without nuisance algae.",
    inclusions: [
      "Artistic plant trimming & stem shaping with surgical curved scissors",
      "Algae spot-treatment and moss detailing",
      "CO2 diffuser cleaning, bubble rate check, and drop-checker fluid refresh",
      "Precision water parameter audit (pH, TDS, Nitrate)",
      "Surface skimmer & canister outflow optimization",
      "Fertilizer dosing schedule review",
    ],
    exclusions: [
      "New plant flora stock or hardscape wood/stones",
      "CO2 gas cylinder refilling (can be arranged separately)",
      "Complete hardscape re-layout unless contracted as a redesign",
    ],
    seoTitle: "Planted Aquarium Maintenance Bangalore | Creators Aquarium",
    seoDescription:
      "Expert planted aquarium care in Bengaluru. Nature aquarium trimming, CO2 calibration, fertilization balance, and algae control from ₹1,499/visit.",
  },
  {
    id: "marine-aquarium",
    slug: "marine-aquarium",
    title: "MARINE FISH-ONLY CARE",
    tagline: "Saltwater stability & water chemistry discipline",
    category: "Marine",
    startingPrice: "₹2,499 / visit",
    priceNote: "Starting from. Final quote depends on sump configuration, tank volume and equipment complexity.",
    image: "/images/service-marine.jpg",
    shortDescription:
      "Saltwater fish-only ecosystem management: optical refractometer salinity calibration, protein skimmer maintenance, sump hygiene, and bio-filtration care.",
    fullDescription:
      "Saltwater environments demand strict discipline. Our marine service is focused on fish-only saltwater systems, maintaining pristine water clarity, stable salinity, and optimal bio-filtration with ethical, legal standards.",
    inclusions: [
      "Salinity check & adjustment using optical refractometer (targeted 1.024–1.025 SG)",
      "RO/DI synthetic saltwater preparation and water change",
      "Protein skimmer cup cleaning, neck scrub & venturi flush",
      "Sump detritus vacuuming & filter sock exchange",
      "Marine parameter check (Salinity, pH, Ammonia, Nitrate)",
      "Powerhead & wavemaker circulation check",
    ],
    exclusions: [
      "Protected, endangered or non-compliant marine species",
      "Unregulated wild-caught specimens",
      "Replacement pumps or skimmer motors unless quoted",
    ],
    seoTitle: "Marine Aquarium Maintenance Bangalore | Creators Aquarium",
    seoDescription:
      "Disciplined marine fish-only saltwater aquarium maintenance in Bengaluru. Protein skimmer care, salinity calibration, and sump hygiene from ₹2,499/visit.",
  },
  {
    id: "setup",
    slug: "setup",
    title: "AQUARIUM SETUP & INSTALLATION",
    tagline: "Turnkey luxury residential & commercial builds",
    category: "Installation",
    startingPrice: "From ₹2,999 (Labour)",
    priceNote: "Starting from ₹2,999 for freshwater labour; ₹6,999 for planted setups; ₹12,999 for marine systems. Equipment & hardscape quoted separately.",
    image: "/images/service-setup.jpg",
    shortDescription:
      "Complete design consultation, cabinet leveling, precision plumbing, hardscape arrangement, soil stratification, equipment commissioning, and nitrogen cycle initiation.",
    fullDescription:
      "A stunning aquarium begins with flawless engineering. We handle every step—from structural stand leveling and leak testing to aesthetic hardscaping and nitrogen cycling—ensuring your tank is built for longevity and effortless upkeep.",
    inclusions: [
      "Site assessment for weight distribution, electrical points & ambient light",
      "Cabinet leveling and anti-vibration matting installation",
      "Canister or sump plumbing assembly & waterproof testing",
      "Substrate, rock, and driftwood hardscaping layout",
      "Heater, LED lighting timer & filtration commissioning",
      "Initial water conditioning, biological bacteria seed & handover checklist",
    ],
    exclusions: [
      "Glass tank, custom cabinet or hardware unless itemized in custom quotation",
      "Electrical wall-socket installation by licensed electrician",
      "Livestock added on Day 1 (tanks must complete nitrogen cycling before fish introduction)",
    ],
    seoTitle: "Aquarium Setup & Installation Bangalore | Creators Aquarium",
    seoDescription:
      "Custom aquarium setup & installation for luxury homes and offices in Bengaluru. Turnkey planning, hardscaping, and commissioning from ₹2,999.",
  },
  {
    id: "relocation",
    slug: "relocation",
    title: "AQUARIUM RELOCATION",
    tagline: "Stress-free shifting & safe livestock transit",
    category: "Relocation",
    startingPrice: "From ₹1,999",
    priceNote: "Starting from. Final quote based on distance, floor level/stairs, tank dimensions and livestock volume.",
    image: "/images/service-relocation.jpg",
    shortDescription:
      "Safe, structured tank shifting across Bengaluru. Aerated livestock transit, water salvage, delicate plant preservation, and immediate re-commissioning at the destination.",
    fullDescription:
      "Moving an aquarium without catastrophic livestock loss or glass stress requires specialized logistics. We drain water cleanly, protect live filter media, transport fish in oxygenated insulated containers, re-level the stand, and refill with balanced chemistry.",
    inclusions: [
      "Livestock capture & transfer into temperature-buffered aerated transit units",
      "Controlled water salvage to preserve biological bacteria",
      "Filter media kept wet and biologically viable during transit",
      "Safe tank draining, substrate securing & padded wrapping",
      "Re-leveling, plumbing re-connection & water refill at destination",
      "Livestock re-acclimatization and observation",
    ],
    exclusions: [
      "Long-distance interstate transit (intra-Bengaluru only)",
      "Structural building hoist or crane operations for giant tanks (> 6 ft)",
      "Guaranteed zero stress for already diseased livestock",
    ],
    seoTitle: "Aquarium Relocation Service Bangalore | Creators Aquarium",
    seoDescription:
      "Professional aquarium moving & tank shifting in Bengaluru. Safe livestock transport, biological media preservation, and rapid re-commissioning.",
  },
];
