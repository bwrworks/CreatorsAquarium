import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { QuoteModalProvider } from "@/components/context/QuoteModalContext";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PageLoader } from "@/components/ui/PageLoader";
import { BRAND } from "@/lib/constants";
import { getLocalBusinessSchema } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  alternates: {
    canonical: "https://creatorsaquarium.com",
  },
  title: {
    default: "Creators Aquarium | Custom Aquarium Design, Setup & Maintenance Bengaluru",
    template: "%s | Creators Aquarium",
  },
  description:
    "We design, source, build and install complete custom aquariums from 1 ft to 6 ft, then provide disciplined ongoing maintenance across Bengaluru.",
  keywords: [
    "aquarium maintenance Bangalore",
    "fish tank cleaning Bengaluru",
    "aquarium maintenance Bengaluru",
    "fish tank cleaning Bangalore",
    "planted aquarium Bangalore",
    "aquascaping Bangalore",
    "aquarium setup Bangalore",
    "custom aquarium installation Bengaluru",
    "marine aquarium maintenance Bangalore",
    "aquarium AMC Bangalore",
    "aquarium relocation Bengaluru",
    "fish tank service Indiranagar",
    "aquarium service Koramangala",
    "aquarium cleaning Whitefield",
    "aquarium service HSR Layout",
  ],
  authors: [{ name: "Creators Aquarium" }],
  creator: "Creators Aquarium",
  publisher: "Creators Aquarium",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://creatorsaquarium.com",
    title: "Creators Aquarium | Custom Aquarium Design, Setup & Maintenance",
    description:
      "We design, source, build and install complete custom aquariums from 1 ft to 6 ft, then provide disciplined ongoing care across Bengaluru.",
    siteName: "Creators Aquarium",
    images: [
      {
        url: "https://creatorsaquarium.com/images/hero.jpg",
        width: 1200,
        height: 675,
        alt: "Creators Aquarium Bengaluru Custom Planted & Marine Aquariums",
      },
    ],
  },
  icons: {
    icon: "/brand/icon.png",
    apple: "/brand/icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creators Aquarium | Custom Aquarium Design & Care Bengaluru",
    description:
      "We design, source, build and install complete custom aquariums from 1 ft to 6 ft, then provide disciplined ongoing care across Bengaluru.",
    images: ["https://creatorsaquarium.com/images/hero.jpg"],
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "12.9716;77.5946",
    "ICBM": "12.9716, 77.5946",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getLocalBusinessSchema();

  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-[#F4F4EF] antialiased selection:bg-[#8BCF32] selection:text-[#050505]">
        <PageLoader />
        <QuoteModalProvider>
          <div className="flex flex-col min-h-screen bg-[#050505]">
            <Navbar />
            <main className="flex-grow pt-[72px]">{children}</main>
            <Footer />
          </div>
          <QuoteModal />
          <WhatsAppButton />
          <Analytics />
          <SpeedInsights />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
