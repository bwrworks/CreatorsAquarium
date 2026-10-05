import React from "react";
import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { BRAND, BENGALURU_LOCALITIES, getWhatsAppUrl } from "@/lib/constants";
import { ContactForm } from "@/components/ui/ContactForm";
import { generateBreadcrumbSchema, BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Creators Aquarium Bengaluru | Book Service & WhatsApp",
  description:
    "Request upfront aquarium maintenance quotations, schedule on-site tank diagnostics, or message Creators Aquarium directly on WhatsApp in Bengaluru. Call +91 91082 84157.",
  keywords: [
    "contact aquarium cleaner Bangalore",
    "book fish tank service Bengaluru",
    "aquarium maintenance phone number Bangalore",
    "aquarium cleaning WhatsApp Bengaluru",
    "Creators Aquarium phone",
  ],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Creators Aquarium Bengaluru | Book Service & WhatsApp",
    description:
      "Request an upfront service quotation, schedule an on-site tank assessment, or message our team directly on WhatsApp.",
    url: `${BASE_URL}/contact`,
    images: [`${BASE_URL}/images/hero.jpg`],
  },
};

export default function ContactPage() {
  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Creators Aquarium Bengaluru",
    description: "Contact information, booking form, phone, and WhatsApp communication channels for Creators Aquarium in Bengaluru.",
    url: `${BASE_URL}/contact`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: BRAND.name,
      telephone: BRAND.phone,
      email: BRAND.email,
      url: BASE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: BRAND.phone,
        contactType: "customer service",
        areaServed: "Bengaluru",
        availableLanguage: ["English", "Hindi", "Kannada"],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <div className="bg-[#050505] text-[#F4F4EF] py-16 sm:py-24 w-full">
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14 space-y-16">
          {/* Header */}
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101310] border border-[#242824] text-[11px] font-bold uppercase tracking-[0.14em] text-[#8BCF32]">
              DIRECT CONTACT & BOOKINGS
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#F4F4EF] tracking-tight font-bold">
              Contact Creators Aquarium
            </h1>
            <p className="text-sm sm:text-base text-[#A3A69F] leading-relaxed">
              Request an upfront service quotation, schedule an on-site tank assessment, or message our team directly on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Info & Coverage */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 sm:p-10 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-6 shadow-2xl">
                <h2 className="text-2xl font-serif text-[#F4F4EF] font-bold">
                  Direct Contact Channels
                </h2>

                <div className="space-y-5 text-xs sm:text-sm text-[#A3A69F]">
                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-[#8BCF32] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] text-[#70756D] uppercase tracking-wider font-semibold">
                        Direct Telephone
                      </span>
                      <a
                        href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                        className="text-base font-bold text-[#F4F4EF] hover:text-[#8BCF32] transition-colors"
                      >
                        {BRAND.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MessageCircle className="w-5 h-5 text-[#8BCF32] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] text-[#70756D] uppercase tracking-wider font-semibold">
                        WhatsApp Dispatch
                      </span>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-[#8BCF32] hover:text-[#B4E35A] transition-colors"
                      >
                        +91 {BRAND.whatsappNumber} (Direct Chat)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-[#8BCF32] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] text-[#70756D] uppercase tracking-wider font-semibold">
                        Email Inquiries
                      </span>
                      <a
                        href={`mailto:${BRAND.email}`}
                        className="font-medium text-[#F4F4EF] hover:text-[#8BCF32] transition-colors"
                      >
                        {BRAND.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-[#8BCF32] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] text-[#70756D] uppercase tracking-wider font-semibold">
                        Operating Hours
                      </span>
                      <span className="text-[#F4F4EF] font-medium">{BRAND.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bengaluru Locality Coverage */}
              <div className="p-8 sm:p-10 rounded-xl bg-[#0A0C0A] border border-[#242824] space-y-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8BCF32]" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#F4F4EF]">
                    Bengaluru Service Coverage
                  </h3>
                </div>
                <p className="text-xs text-[#70756D] leading-relaxed">
                  Mobile technician visits across all central and suburban neighborhoods:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {BENGALURU_LOCALITIES.slice(0, 16).map((loc) => (
                    <span
                      key={loc}
                      className="px-3 py-1.5 rounded-md bg-[#101310] border border-[#242824] text-xs text-[#A3A69F] font-medium"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Quote Intake Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-xl bg-[#0A0C0A] border border-[#242824] shadow-2xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
