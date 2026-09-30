export interface GalleryItem {
  id: string;
  title: string;
  category: "Maintenance" | "Freshwater" | "Planted" | "Setup" | "Process";
  image: string;
  tankSpec: string;
  location: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Before & After Glass & Hardscape Overhaul",
    category: "Maintenance",
    image: "/images/after-cleaning.jpg",
    tankSpec: "3 ft Planted Nature Aquarium",
    location: "Indiranagar, Bengaluru",
    description: "Complete algae extraction, glass detailing, canister service, and balanced re-conditioning.",
  },
  {
    id: "g2",
    title: "Precision Aquascaping & Moss Sculpting",
    category: "Process",
    image: "/images/routine-aquarium-care.jpg",
    tankSpec: "4 ft High-Tech ADA Style System",
    location: "Koramangala, Bengaluru",
    description: "Specialized curved scissors trimming of lush stem plants and moss-covered driftwood hardscape.",
  },
  {
    id: "g3",
    title: "Minimalist High-Tech Nature Aquascape",
    category: "Planted",
    image: "/images/service-planted.jpg",
    tankSpec: "90cm Rimless Low-Iron Glass",
    location: "Sadashivanagar, Bengaluru",
    description: "Micranthemum Monte Carlo carpet, hardscape driftwood arch, and schooling rasboras.",
  },
  {
    id: "g4",
    title: "Architectural Penthouse Living Display",
    category: "Freshwater",
    image: "/images/hero.jpg",
    tankSpec: "4 ft Custom Steel & Wood Cabinet",
    location: "Whitefield, Bengaluru",
    description: "Serene community planted aquarium integrated cleanly into a contemporary luxury penthouse.",
  },
  {
    id: "g5",
    title: "Turnkey Sump & Cabinet Engineering",
    category: "Setup",
    image: "/images/service-setup.jpg",
    tankSpec: "5 ft Custom Architectural Aquarium",
    location: "HSR Layout, Bengaluru",
    description: "Precision PVC manifold plumbing, silent overflow box, and automated dosing bracket setup.",
  },
  {
    id: "g6",
    title: "Temperature-Controlled Livestock Relocation",
    category: "Process",
    image: "/images/safe-aquarium-relocation.jpg",
    tankSpec: "Transit System Equipment",
    location: "Bengaluru Citywide",
    description: "Aerated transit units and water preservation kits deployed for zero-casualty residential shifting.",
  },
];
