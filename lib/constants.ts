export const BRAND = {
  name: "Creators Aquarium",
  tagline: "Where Oceans Meet Nature",
  businessSubtitle: "Professional Aquarium Setup & Maintenance",
  heroDescription:
    "Thoughtfully designed aquariums and professional ongoing care for homes, offices and commercial spaces across Bengaluru.",
  phone: "+91 98860 12345", // Verified placeholder format for Bengaluru launch
  phoneDisplay: "+91 98860 12345",
  whatsappNumber: "919886012345",
  email: "care@creatorsaquarium.com",
  city: "Bengaluru, Karnataka, India",
  address: "Bengaluru, Karnataka 560038",
  hours: "Monday – Sunday: 9:00 AM – 7:30 PM",
};

export const BENGALURU_LOCALITIES = [
  "Indiranagar",
  "Koramangala",
  "HSR Layout",
  "Whitefield",
  "JP Nagar",
  "Jayanagar",
  "Electronic City",
  "Bellandur",
  "Sarjapur Road",
  "Hebbal",
  "Malleshwaram",
  "Sadashivanagar",
  "Yelahanka",
  "Bannerghatta Road",
  "Marathahalli",
  "BTM Layout",
  "Kalyan Nagar",
  "Richmond Town",
  "MG Road / Central",
  "Other Bengaluru Area",
];

export function getWhatsAppUrl(message?: string): string {
  const defaultText =
    "Hi Creators Aquarium, I would like to inquire about professional aquarium setup and maintenance in Bengaluru.";
  const text = encodeURIComponent(message || defaultText);
  return `https://wa.me/${BRAND.whatsappNumber}?text=${text}`;
}
