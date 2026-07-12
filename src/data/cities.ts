/**
 * Cities — service-area city pages.
 *
 * Each entry powers a dedicated SEO landing page at
 * `/service-areas/<slug>/`. Adding a new city = adding one object here.
 *
 * Conventions:
 *   - All copy is written for the property manager / facilities director
 *     who actually lives in this city and is searching for a fire
 *     protection vendor. Not generic "we serve X" filler.
 *   - `heroImage` reuses existing site imagery; replace with
 *     city-specific photography when available (TODO comment inline).
 *   - `meta.keywords` is for the <meta name="keywords"> tag only —
 *     modern SEO ranking doesn't use it, but Bing and some tools still
 *     read it, and it forces the author to enumerate intent.
 *   - `neighborhoods` lists distinct named areas with building-stock
 *     type so the page reads as local to the city, not generic.
 *   - Common inspection deficiencies are region-specific patterns
 *     observed across the Front Range — not specific deficiency
 *     counts from any one property. Phrased as guidance.
 */

// ──────────────────────────────────────────────────────────────────────
// 1. CITY DATA SHAPES
// ──────────────────────────────────────────────────────────────────────

export interface Neighborhood {
  name: string;
  type: 'Residential' | 'Master-Planned' | 'Mixed-Use' | 'Commercial Corridor' | 'Industrial' | 'Retail';
  note: string;
}

export interface AhjInfo {
  /** Authority Having Jurisdiction — the fire-rescue agency that issues permits and conducts inspections. */
  name: string;
  /** Which NFPA standards edition the AHJ currently enforces. Verified against the AHJ's published code-adoption list. */
  adoptedNFPA: string[];
  /** Phone for non-emergency permitting / inspection scheduling. */
  nonEmergencyPhone: string;
  /** Public-facing website. */
  website: string;
  /** Note about how the AHJ operates for fire-protection inspections specifically. */
  note: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CityPageMeta {
  title: string;
  description: string;
  /** Comma-separated keywords for the meta keywords tag. */
  keywords: string;
  /** og:url canonical for this page. */
  canonical: string;
}

export interface CtaPair {
  title: string;
  descriptor: string;
  href: string;
  label: string;
}

export interface City {
  /** URL slug — appears at /service-areas/<slug>/. Always `lowercase-city-st`. */
  slug: string;
  /** Display name of the city, e.g. "Centennial". */
  city: string;
  /** Two-letter state code, e.g. "CO". */
  state: string;
  /** County, e.g. "Arapahoe County". */
  county: string;
  /** Short headline phrase used in the ptbanner. e.g. "Fire Protection Services in Centennial, CO". */
  bannerTitle: string;
  /** Smaller banner subtitle, e.g. "CENTENNIAL FIRE PROTECTION". */
  bannerSubtitle: string;
  /** Background image for the ptbanner. Reuse existing site imagery. */
  bannerImage: string;
  /** Hero intro — 2-3 sentences speaking directly to a local property owner. */
  heroIntro: string;
  /** AHJ detail block. */
  ahj: AhjInfo;
  /** Neighborhood / district list. */
  neighborhoods: Neighborhood[];
  /** Building stock paragraph — describes the typical property mix. */
  buildingStock: string;
  /** Ordered list of services offered in this city. */
  servicesOffered: { title: string; body: string }[];
  /** Industries most commonly served in this city. */
  industriesServed: string[];
  /** Common inspection deficiencies observed in this region's properties (phrased as guidance). */
  commonDeficiencies: { title: string; body: string }[];
  /** FAQ items for FAQPage schema. */
  faq: FaqItem[];
  /** Closing DualCTA pair. */
  ctaPair: [CtaPair, CtaPair];
  /** Page metadata (title / description / keywords / canonical). */
  meta: CityPageMeta;
}

// ──────────────────────────────────────────────────────────────────────
// 2. CITY REGISTRY
// ──────────────────────────────────────────────────────────────────────

export const cities: City[] = [
  // ──────────────────────────────────────────────────────────────────
  // CENTENNIAL, COLORADO — pilot city page
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'centennial-co',
    city: 'Centennial',
    state: 'CO',
    county: 'Arapahoe County',
    bannerTitle: 'Fire Protection Services in Centennial, CO',
    bannerSubtitle: 'CENTENNIAL FIRE PROTECTION',
    // TODO: replace with a Centennial-specific hero photo when one is
    // commissioned (e.g. jobsite shot at a Centennial HOA common area,
    // or a Streets at SouthGlenn / Centennial Civic Center skyline).
    // For now reuse the inspection hero so the page reads correctly.
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Centennial is one of the largest cities on the south Denver metro by population, and it is also home to Red Rocks Fire Protection — our office at 7076 S. Alton Way sits inside the city we serve every day. From the master-planned neighborhoods off Arapahoe Road to the office parks along the I-25 / E-470 corridor, every property in Centennial falls under the South Metro Fire Rescue Authority for fire-code enforcement, and every inspection we run in Centennial is written to a report South Metro will accept on the first pass.',

    ahj: {
      name: 'South Metro Fire Rescue Authority',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(720) 989-2000',
      website: 'https://www.southmetro.org',
      note:
        'South Metro Fire Rescue conducts the on-site fire inspections for commercial, multi-family, and most institutional properties in Centennial. Permits for new sprinkler systems, fire alarm installations, and underground fire lines are issued through South Metro’s Community Risk Reduction division. Our inspection reports are formatted to match South Metro’s preferred deficiency-list layout so corrections are approved without rework.',
    },

    neighborhoods: [
      { name: 'Willow Creek', type: 'Master-Planned', note: 'Large-lot single-family and HOA common areas; frequent backflow and irrigation-line testing needs.' },
      { name: 'Heritage Place', type: 'Residential', note: 'Mixed single-family and townhome; older homes with legacy smoke-detection layouts that benefit from retrofits.' },
      { name: 'Foxridge', type: 'Residential', note: 'Established neighborhood with mature trees; chimney and attic-sprinkler considerations on older roofs.' },
      { name: 'The Hills at Piney Creek', type: 'Residential', note: 'Larger custom homes; residential sprinkler and monitored alarm retrofits common.' },
      { name: 'Smoky Hill', type: 'Residential', note: 'Wide mix of property ages; pre-2000 subdivisions often need NFPA 13D residential sprinkler retrofits at remodel.' },
      { name: 'Streets at SouthGlenn', type: 'Mixed-Use', note: 'High-density retail, restaurant, and residential above retail — kitchen-hood suppression and BDA/DAS radio coverage are recurring inspection scopes.' },
      { name: 'Centennial Center', type: 'Commercial Corridor', note: 'Office park along Arapahoe Road; wet and dry sprinkler systems, fire alarm panels, and emergency voice systems.' },
      { name: 'Inverness', type: 'Commercial Corridor', note: 'Office and flex-space near the I-25 / Dry Creek interchange; clean-agent suppression for data rooms and server closets.' },
      { name: 'DTC / Meridian', type: 'Mixed-Use', note: 'Adjacent to the Denver Tech Center corridor; high-rise residential and Class-A office with full life-safety stacks.' },
      { name: 'Park Meadows', type: 'Retail', note: 'Adjacent retail destination; large-format sprinkler systems, mall-wide voice evacuation, and high-piled storage considerations.' },
      { name: 'Jordan Road / Parker corridor', type: 'Industrial', note: 'Light industrial and warehouse; ESFR sprinkler systems, fire pump testing, and rack-storage commodity classification.' },
      { name: 'East Arapahoe / Havana', type: 'Retail', note: 'Grocery-anchored retail strips; Ansul kitchen-hood suppression and sprinkler-obstruction clearances are common deficiency sources.' },
    ],

    buildingStock:
      'Centennial’s housing stock is dominated by single-family residential built primarily between the late 1970s and the early 2000s, anchored by master-planned communities like Willow Creek and Heritage Place. Commercial property is concentrated along three corridors: the Arapahoe Road office-and-retail spine (Centennial Center), the I-25 / Dry Creek / Inverness flex-industrial and Class-A office cluster, and the retail concentrations at Streets at SouthGlenn and Park Meadows. Multi-family housing is mostly garden-style apartments and townhome communities, with an increasing share of mid-rise residential above retail in the SouthGlenn submarket. Light industrial and last-mile warehouse space has grown along the eastern edge of the city, near Jordan Road and the Parker corridor.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code-driven cadence, documented in a single South Metro–formatted report.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25. Includes main-drain tests, valve supervision, and a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification, fire-watch protocols, and direct dispatch into South Metro’s CAD when an alarm confirms.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection control testing for irrigation, fire-line, and domestic backflow preventers; certification filed with the water utility.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — common scope at Streets at SouthGlenn and Park Meadows food tenants.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms, data closets, and clean-tech spaces — common in Inverness and DTC-adjacent buildings.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review with South Metro’s Community Risk Reduction team, plan reviewer coordination, and deficiency-correction project management for HOA and property-management portfolios.',
      },
    ],

    industriesServed: [
      'HOA & community associations',
      'Multi-family property management',
      'Office and Class-A commercial',
      'Retail centers and shopping malls',
      'Hospitality',
      'Light industrial and warehouse',
      'Assisted living and healthcare',
      'Restaurants and food service',
      'Education and childcare',
      'Automotive dealerships',
      'Data centers and server rooms',
      'Religious and community facilities',
    ],

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads',
        body: 'The most cited deficiency on South Metro inspection reports: storage racks, signage, holiday decorations, or new tenant build-outs installed too close to sprinkler deflectors. We measure clearance to the inch and document the correction scope so your AHJ approval is fast.',
      },
      {
        title: 'Missing or expired hydraulic nameplates',
        body: 'Older wet-sprinkler systems in Arapahoe Road office parks frequently have missing, faded, or original-calculation hydraulic nameplates. South Metro requires a verified placard for every system — we re-calculate and re-placard in-house.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries on fire alarm panels have a 4–5 year service life. Failed load tests are a top deficiency across commercial corridors — we track every panel’s battery age and replace proactively.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Irrigation and fire-line backflow preventers require annual testing by a certified cross-connection tester. We file the certification directly with Centennial’s water utility and the South Metro AHJ.',
      },
      {
        title: 'Kitchen hood suppression out of date',
        body: 'Pre-UL-300 wet-chemical systems are grandfathered in some jurisdictions but South Metro increasingly flags them for replacement at tenant turnover. We inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'A surprisingly common South Metro finding — missing or broken FDC caps let debris into the check valve and can fail an inspection outright. We carry replacements on the truck and install them on the spot.',
      },
      {
        title: 'Emergency voice / mass notification systems not commissioned after build-out',
        body: 'Streets at SouthGlenn and DTC-adjacent mid-rises frequently undergo tenant build-outs that disable the EVAC system without re-commissioning. We provide turnkey re-commissioning with South Metro sign-off.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Centennial, Colorado?',
        answer: 'South Metro Fire Rescue Authority is the AHJ for the City of Centennial. South Metro’s Community Risk Reduction division issues permits, conducts on-site fire inspections, and reviews all sprinkler, alarm, and underground fire-line submittals for properties inside the city.',
      },
      {
        question: 'Does Red Rocks Fire Protection actually have an office in Centennial?',
        answer: 'Yes. Our office is at 7076 S. Alton Way, Suite G2, Centennial, CO 80112. Most of our technicians live and work in the south Denver metro, which is why we can offer a 90-minute emergency response window inside the Denver Metro area — including Centennial, Englewood, Littleton, Aurora, and Greenwood Village.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Centennial?',
        answer: 'Per NFPA 25 and the IFC as adopted by South Metro Fire Rescue, wet-pipe sprinkler systems require quarterly and annual inspections, with an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. We track every cadence for every system we service and email you 30 days before a test is due.',
      },
      {
        question: 'How long does a fire alarm inspection take?',
        answer: 'Most commercial fire alarm inspections in Centennial take 2 to 4 hours depending on the device count and the number of initiating devices that need to be functionally tested. We coordinate with on-site staff or your property manager so disruption to tenants is minimal, and we can run inspections after-hours for occupied office and retail buildings.',
      },
      {
        question: 'Do you handle fire watch when a system is down?',
        answer: 'Yes. When a fire protection system is out of service for repair or maintenance, NFPA and South Metro require a documented fire watch — a dedicated person walking the affected area at defined intervals and logging the rounds. We provide fire-watch personnel on a 24/7 basis when our own service work requires a system to be taken offline.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Centennial restaurants?',
        answer: 'Yes. NFPA 96 (and the IFC as adopted in Colorado) requires automatic fire-extinguishing systems for commercial cooking operations, including the hood, duct, and plenum. UL-300 wet-chemical systems are the current standard; older systems are grandfathered but typically need replacement at tenant turnover or major renovation.',
      },
      {
        question: 'Do you service residential sprinkler systems in Centennial?',
        answer: 'Yes. We inspect, test, and maintain NFPA 13D residential sprinkler systems — most commonly in newer custom homes in Willow Creek, The Hills at Piney Creek, and Inverness, and in mid-rise residential above retail in the SouthGlenn submarket. We also handle monitored residential alarm systems and monitored carbon-dioxide and smoke detection.',
      },
      {
        question: 'How quickly can you respond to an emergency in Centennial?',
        answer: 'Our office is inside Centennial, so our emergency response window for fire-protection emergencies inside the city is typically under 90 minutes — usually faster. We staff a 24/7 emergency line and dispatch the same technicians who know your property, not a call center.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Centennial Inspection.',
        descriptor: 'Tell us about your property and we’ll route the right NICET-certified technician — usually within a few business days, faster if it’s urgent.',
        href: '/contact',
        label: 'Get in touch',
      },
      {
        title: 'See All Our Services.',
        descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, alarms, monitoring, suppression, backflow, and consulting all live under the same roof.',
        href: '/services',
        label: 'Browse services',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Centennial, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and consulting in Centennial, Colorado. Locally based, serving South Metro Fire Rescue jurisdictions. NICET-certified technicians, 90-minute emergency response.',
      keywords:
        'fire protection Centennial CO, fire inspections Centennial, sprinkler inspection Centennial, fire alarm testing Centennial, backflow testing Centennial, kitchen hood suppression Centennial, fire protection company Centennial Colorado, South Metro Fire Rescue inspections',
      canonical: '/service-areas/centennial-co/',
    },
  },
];

/**
 * Lookup helper — used by `getStaticPaths` and by the
 * `/service-areas` index page to list published cities.
 */
export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}