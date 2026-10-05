export interface GalleryItem {
  id: string;
  title: string;
  category: "Maintenance" | "Freshwater" | "Planted" | "Setup" | "Process";
  image: string;
  tankSpec: string;
  scope: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Glass & Hardscape Restoration",
    category: "Maintenance",
    image: "/images/after-cleaning.jpg",
    tankSpec: "3 ft Nature Aquarium",
    scope: "Deep Cleaning & Detailing",
    description: "Algae extraction, glass detailing, canister filter servicing, and biological water re-conditioning.",
  },
  {
    id: "g2",
    title: "Precision Aquascaping & Moss Sculpting",
    category: "Process",
    image: "/images/routine-aquarium-care.jpg",
    tankSpec: "4 ft High-Tech System",
    scope: "Aquatic Plant Care",
    description: "Specialized curved scissors trimming of lush stem plants and moss-covered driftwood hardscape.",
  },
  {
    id: "g3",
    title: "Minimalist High-Tech Nature Aquascape",
    category: "Planted",
    image: "/images/service-planted.jpg",
    tankSpec: "90cm Rimless Glass",
    scope: "Nature Aquascape Concept",
    description: "Foreground carpet density, hardscape driftwood arch, and balanced schooling livestock.",
  },
  {
    id: "g4",
    title: "Architectural Interior Living Display",
    category: "Freshwater",
    image: "/images/hero.jpg",
    tankSpec: "4 ft Custom Cabinetry",
    scope: "Residential Integration",
    description: "Serene community planted aquarium integrated cleanly into a contemporary luxury interior.",
  },
  {
    id: "g5",
    title: "Sump & Cabinet Engineering",
    category: "Setup",
    image: "/images/service-setup.jpg",
    tankSpec: "5 ft Display System",
    scope: "Filtration & Plumbing",
    description: "Precision manifold plumbing, overflow management, and accessible filtration maintenance layout.",
  },
  {
    id: "g6",
    title: "Livestock Relocation Protocol",
    category: "Process",
    image: "/images/safe-aquarium-relocation.jpg",
    tankSpec: "Transit System Units",
    scope: "Careful Intra-City Transit",
    description: "Aerated transit units and water preservation containers deployed for safe residential shifting.",
  },
];
