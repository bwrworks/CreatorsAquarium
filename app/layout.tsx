import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { QuoteModalProvider } from "@/components/context/QuoteModalContext";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BRAND } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://creatorsaquarium.com"),
  title: {
    default: "Creators Aquarium | Professional Aquarium Setup & Maintenance Bengaluru",
    template: "%s | Creators Aquarium",
  },
  description:
    "Premium aquarium setup, routine maintenance, and nature aquascaping across Bengaluru. Water testing, filter care, and scheduled AMCs for homes and offices.",
  keywords: [
    "aquarium maintenance Bangalore",
    "fish tank cleaning Bengaluru",
    "planted aquarium Bangalore",
    "aquascaping Bangalore",
    "aquarium setup Bangalore",
    "marine aquarium maintenance Bangalore",
    "aquarium AMC Bangalore",
  ],
  authors: [{ name: "Creators Aquarium" }],
  creator: "Creators Aquarium",
  publisher: "Creators Aquarium",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://creatorsaquarium.com",
    title: "Creators Aquarium | Where Oceans Meet Nature",
    description:
      "Thoughtfully designed aquariums and professional ongoing care for homes, offices and commercial spaces across Bengaluru.",
    siteName: "Creators Aquarium",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 675,
        alt: "Creators Aquarium Bengaluru Luxury Planted Setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creators Aquarium | Professional Aquarium Care Bengaluru",
    description:
      "Disciplined aquarium maintenance, water testing, and turnkey aquascaping for residences and offices in Bengaluru.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND.name,
    description: BRAND.heroDescription,
    url: "https://creatorsaquarium.com",
    telephone: BRAND.phone,
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560038",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9716",
      longitude: "77.5946",
    },
    openingHours: "Mo-Su 09:00-19:30",
    priceRange: "₹799 - ₹15000",
    image: "https://creatorsaquarium.com/images/hero.jpg",
  };

  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-[#F4F4EF] antialiased selection:bg-[#8BCF32] selection:text-[#050505]">
        <QuoteModalProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-[72px]">{children}</main>
            <Footer />
          </div>
          <QuoteModal />
          <WhatsAppButton />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
