export const BRAND = {
  name: "Creators Aquarium",
  tagline: "Where Oceans Meet Nature",
  businessSubtitle: "Custom Aquarium Design, Setup & Maintenance",
  heroDescription:
    "We design, source, build and install complete custom aquariums from 1 ft to 6 ft, then provide disciplined ongoing care across Bengaluru.",
  phone: "+91 9206336482",
  phoneDisplay: "+91 92063 36482",
  whatsappNumber: "919206336482",
  email: "care@creatorsaquarium.com",
  city: "Bengaluru, Karnataka, India",
  address: "Bengaluru, Karnataka",
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
    "Hi Creators Aquarium, I would like to inquire about custom aquarium design, setup, or maintenance in Bengaluru.";
  const text = encodeURIComponent(message || defaultText);
  return `https://wa.me/${BRAND.whatsappNumber}?text=${text}`;
}
