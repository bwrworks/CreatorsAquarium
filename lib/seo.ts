import { BRAND, BENGALURU_LOCALITIES } from "./constants";

export const BASE_URL = "https://creatorsaquarium.com";

export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  startingPrice?: string;
  category?: string;
}

export function generateServiceSchema({
  name,
  description,
  url,
  image = `${BASE_URL}/images/hero.jpg`,
  startingPrice,
  category = "Aquarium Service",
}: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: category,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: BRAND.name,
      telephone: BRAND.phone,
      url: BASE_URL,
      image: `${BASE_URL}/brand/icon.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Bengaluru",
    },
    url: `${BASE_URL}${url}`,
    image,
    ...(startingPrice
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: startingPrice.replace(/[^\d]/g, ""),
            availability: "https://schema.org/InStock",
            description: `Starting price for ${name} in Bengaluru.`,
          },
        }
      : {}),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: BRAND.name,
    alternateName: ["Creators Aquarium Bengaluru", "Creators Aquarium Care"],
    description: BRAND.heroDescription,
    url: BASE_URL,
    telephone: BRAND.phone,
    email: BRAND.email,
    image: `${BASE_URL}/images/hero.jpg`,
    logo: `${BASE_URL}/brand/icon.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9716",
      longitude: "77.5946",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "19:30",
      },
    ],
    priceRange: "₹799 - Custom Quote",
    areaServed: BENGALURU_LOCALITIES.map((locality) => ({
      "@type": "AdministrativeArea",
      name: `${locality}, Bengaluru`,
    })),
    knowsAbout: [
      "Custom Aquarium Design & Sourcing",
      "Custom Aquarium Cabinet Fabrication",
      "Aquarium Installation & Commissioning",
      "Aquarium Maintenance & Water Testing",
      "Fish Tank Cleaning Bengaluru",
      "Nature Aquariums & Aquascaping",
      "Planted Aquarium Botanical Care",
      "Marine Fish-Only Saltwater Systems",
      "Aquarium Relocation & Safe Moving",
      "Canister & Sump Filtration Engineering",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom Aquariums & Aquarium Maintenance Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Aquarium Design, Setup & Commissioning",
            description: "Turnkey custom aquarium design, sourcing, stand fabrication, precision plumbing, water preparation, and system commissioning from 1 ft to 6 ft across Bengaluru.",
            url: `${BASE_URL}/setup`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Aquarium Routine Maintenance & Deep Cleaning",
            description: "Scheduled partial water changes, filter maintenance, glass detailing, and water testing across Bengaluru.",
            url: `${BASE_URL}/maintenance`,
          },
          price: "799",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Planted Aquarium & Aquascaping Care",
            description: "Specialist botanical trimming, CO2 system tuning, fertilizer management, and algae control in Bengaluru.",
            url: `${BASE_URL}/services/planted-aquarium`,
          },
          price: "1499",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marine Fish-Only Saltwater Care",
            description: "Optical salinity calibration, protein skimmer maintenance, and sump hygiene across Bengaluru.",
            url: `${BASE_URL}/services/marine-aquarium`,
          },
          price: "2499",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Aquarium Relocation & Safe Shifting",
            description: "Safe tank shifting across Bengaluru with aerated livestock transit containers and biological media preservation.",
            url: `${BASE_URL}/services/relocation`,
          },
          price: "1999",
          priceCurrency: "INR",
        },
      ],
    },
  };
}
