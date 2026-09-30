# Creators Aquarium - Antigravity Build Brief

## Build target
Build a premium multi-page aquarium setup and maintenance website for Bengaluru using Next.js App Router + TypeScript and deploy on Vercel. Use the supplied Creators Aquarium logo. Phase 1 has no online payments, cart, checkout or product marketplace.

## Brand
- Name: Creators Aquarium
- Tagline: Where Oceans Meet Nature
- Visual direction: near-black / blue-black, cyan-electric blue, natural green, off-white text, restrained motion, premium editorial photography.
- Typography direction: elegant high-contrast serif for hero headings + clean sans-serif body.
- Tone: factual, premium, calm, technically competent.

## Critical marine-content rule
Do not market or sell live coral in Phase 1. Do not use coral colonies, coral frag racks, coral-sale copy or reef-coral hero images. Marine pages are fish-only/saltwater service pages using legal, appropriately sourced livestock. Keep the supplied logo unchanged for the first build even though its marine icon contains a stylized branching form.

## Routes
/, /services, /services/maintenance, /services/setup, /services/planted-aquarium, /services/marine-aquarium, /services/relocation, /maintenance-plans, /gallery, /reviews, /about, /service-areas, /faq, /contact, /privacy, /terms

## Homepage order
1. Header/navigation
2. Cinematic hero
3. Service categories
4. Why Creators
5. How the service works
6. Maintenance plans
7. Before/after gallery
8. Authentic customer reviews
9. Bengaluru service coverage
10. FAQ preview
11. Contact / WhatsApp CTA
12. Footer

## Conversion rules
Every service page must have Request a Service Quote, WhatsApp and Call CTAs.
No online payment UI. No fake scarcity. No invented reviews.

## Recommended launch pricing
- Freshwater routine maintenance: from ₹799/visit
- Freshwater deep clean: from ₹1,499/visit
- Planted maintenance: from ₹1,499/visit
- Marine fish-only maintenance: from ₹2,499/visit
- Emergency visit: from ₹1,999
- Freshwater AMC Essential: ₹1,499/month, 1 visit
- Freshwater AMC Standard: ₹2,499/month, 2 visits
- Freshwater AMC Weekly: ₹4,499/month, 4 visits
- Planted Care AMC: ₹2,999/month, 2 visits
- Marine Care AMC: ₹3,999/month, 2 visits
- Freshwater setup labour: from ₹2,999
- Planted setup: from ₹6,999
- Marine fish-only setup: from ₹12,999

These are Creators launch prices, not claims of market averages. Always show “starting from” for variable-scope work.

## Lead form
Fields: name, phone/WhatsApp, email optional, Bengaluru area, tank type, tank size, service type, frequency optional, issue/requirement, photo optional, preferred contact time. Validate on server. Store submissions in Convex if enabled. Send an internal email notification.

## Convex
If used in Phase 1, create tables for inquiries, gallery, reviews, services, serviceAreas and siteSettings. No customer accounts required. Add protected admin later.

## Gallery
Categories: Freshwater, Planted, Marine, Before & After, Setup Process, Commercial. Use real job photos as the primary source. AI-generated or stock images can only be used for generic hero/illustration imagery and must never be presented as a real customer job.

## Image prompt direction
1. Hero: photorealistic luxury apartment living room in Bengaluru, premium 4-foot planted aquarium, natural stone and driftwood, healthy freshwater fish, dark architectural interior, cinematic soft lighting, realistic glass reflections, no coral, no tropical reef imagery.
2. Freshwater: photorealistic planted freshwater aquarium, natural hardscape, healthy schooling fish, premium home interior, editorial aquarium photography.
3. Marine: photorealistic fish-only saltwater aquarium, marine fish, natural rock and sand, clean sump equipment visible subtly, premium office reception, no coral.
4. Technician: Indian aquarium technician in clean professional workwear maintaining a planted aquarium with long tools, realistic hands and equipment, premium residential interior.
5. Before/after: use actual photographs from Creators jobs whenever available.

## SEO
Unique metadata per page. LocalBusiness/Service JSON-LD. XML sitemap. robots. canonical URLs. Internal links. Only create service-area pages for real coverage areas.

## Quality gates
- Mobile first.
- No broken links.
- No missing images.
- No fake testimonials.
- No coral marketing.
- No payment flow.
- Production build passes.
- Forms validate correctly.
- Lighthouse/Core Web Vitals should be strong on mobile.
- Keyboard navigation and visible focus states.
- All images have useful alt text.

## Content requirements
Use the SRS as the source of truth. Keep service claims, prices and legal language aligned with the SRS.
