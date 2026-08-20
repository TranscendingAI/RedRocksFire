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
  /** Local overview shown above the neighborhood cards. */
  neighborhoodIntro: string;
  /** Building stock paragraph — describes the typical property mix. */
  buildingStock: string;
  /** Ordered list of services offered in this city. */
  servicesOffered: { title: string; body: string }[];
  /** Local overview shown above the service cards. */
  servicesIntro: string;
  /** Industries most commonly served in this city. */
  industriesServed: string[];
  /** Heading and context for the local deficiencies accordion. */
  deficienciesTitle: string;
  deficienciesIntro: string;
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
    bannerTitle: 'Fire Protection Centennial, CO',
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

    neighborhoodIntro:
      'We work across the full mix of property types in Centennial — from established single-family neighborhoods off Arapahoe Road to Class-A office and flex-industrial space along the I-25 / E-470 corridor. Below are the named areas and corridors our technicians cover most often.',

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

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to South Metro Fire Rescue Authority’s preferred layout — so corrections are approved without rework.',

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

    deficienciesTitle: 'What South Metro Fire Rescue Authority flags most often on Centennial inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Centennial properties. None of this is a citation from a specific property — it’s the pattern of findings our technicians document and correct most frequently in this jurisdiction.',

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

  // ──────────────────────────────────────────────────────────────────
  // DENVER, COLORADO
  // Sources checked July 2026:
  // - Denver Fire Safety Inspections (annual cadence and common violations)
  // - Denver Fire Permits & Licensing (DFD authority, permits, licensing)
  // - 2022 Denver Building and Fire Code (local amendments and standards)
  // - Denver System Down Reporting and Firewatch requirements
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'denver-co',
    city: 'Denver',
    state: 'CO',
    county: 'City and County of Denver',
    bannerTitle: 'Fire Protection Denver, CO',
    bannerSubtitle: 'DENVER FIRE PROTECTION',
    // TODO: replace with a Denver-specific skyline or Red Rocks jobsite photo.
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Denver properties range from century-old masonry buildings and converted warehouses to high-rise offices, dense apartment communities, commercial kitchens, healthcare facilities, and distribution space. That variety creates very different life-safety needs from one block to the next. Red Rocks Fire Protection helps Denver owners and property managers keep sprinkler, alarm, extinguisher, suppression, monitoring, and backflow programs coordinated under one vendor — with documentation prepared for the Denver Fire Department’s requirements.',

    ahj: {
      name: 'Denver Fire Department Fire Prevention Division',
      adoptedNFPA: [
        '2022 Denver Fire Code — based on the 2021 International Fire Code with Denver amendments',
        'NFPA 13 (Installation of Sprinkler Systems) — 2022 edition',
        'NFPA 13D and NFPA 13R (Residential Sprinkler Systems) — 2022 editions',
        'NFPA 14 (Standpipe and Hose Systems) — 2019 edition',
        'NFPA 20 (Installation of Stationary Pumps for Fire Protection) — 2022 edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — 2022 edition',
        'NFPA National Fire Codes Set — 2022 edition unless specifically noted otherwise',
      ],
      nonEmergencyPhone: '(720) 913-3474',
      website: 'https://www.denvergov.org/fire',
      note:
        'The Denver Fire Department Fire Prevention Division conducts Denver’s annual commercial occupancy inspections and administers fire-system permitting, plan review, acceptance testing, and technician licensing. Denver requires Fire Department licenses for people who design, install, modify, inspect, or test regulated life-safety systems. Construction permits are required for new or modified sprinkler, standpipe, fire alarm, fire pump, and other regulated systems; the Denver Fire Code also requires permits for many maintenance activities, subject to listed exceptions.',
    },

    neighborhoods: [
      { name: 'Downtown / Central Business District', type: 'Commercial Corridor', note: 'High-rise offices, hotels, assembly occupancies, and mixed-use towers with standpipes, fire pumps, voice evacuation, and smoke-control interfaces.' },
      { name: 'LoDo', type: 'Mixed-Use', note: 'Historic masonry buildings adapted for restaurants, offices, retail, and residential use; tenant changes often affect alarms, sprinklers, egress, and kitchen suppression.' },
      { name: 'RiNo Art District', type: 'Mixed-Use', note: 'Converted warehouses, new mid-rise apartments, breweries, galleries, and event spaces with changing hazards and occupancy loads.' },
      { name: 'Five Points', type: 'Mixed-Use', note: 'Historic commercial buildings alongside new multi-family projects; system records, extinguisher access, and build-out coordination matter at turnover.' },
      { name: 'Cherry Creek', type: 'Retail', note: 'Retail, restaurants, hotels, offices, and multi-family towers with dense tenant turnover and interconnected fire-alarm and sprinkler scopes.' },
      { name: 'Capitol Hill', type: 'Residential', note: 'Older apartment and condominium buildings where common-area extinguishers, alarm devices, egress paths, and inspection logs require close attention.' },
      { name: 'Highland / LoHi', type: 'Mixed-Use', note: 'Restaurants and neighborhood retail mixed with newer apartment and condominium projects; hood suppression and shared life-safety systems are common.' },
      { name: 'South Broadway / Baker', type: 'Retail', note: 'Older storefronts, entertainment venues, restaurants, and adaptive-reuse buildings with frequent tenant-improvement and change-of-use work.' },
      { name: 'Central Park', type: 'Master-Planned', note: 'Newer multi-family, schools, retail centers, medical offices, and large commercial properties with modern integrated systems.' },
      { name: 'Montbello', type: 'Residential', note: 'Apartment communities, schools, neighborhood retail, and light-commercial properties across northeast Denver.' },
      { name: 'Globeville / Elyria-Swansea', type: 'Industrial', note: 'Warehouses, fabrication, logistics, and mixed industrial uses where storage configuration, commodity hazards, and fire access shape sprinkler requirements.' },
      { name: 'Denver International Airport corridor', type: 'Commercial Corridor', note: 'Hotels, logistics, warehouse, fleet, and airport-support facilities with larger system footprints and specialized operational hazards.' },
    ],

    neighborhoodIntro:
      'Our Denver service area spans the high-rise and historic core, neighborhood commercial districts, multi-family corridors, industrial properties along I-70, and the airport market. Each district has a different mix of building age, occupancy, and system complexity, so we scope the work around the property rather than applying a one-size-fits-all checklist.',

    buildingStock:
      'Denver’s building stock layers multiple eras of development: historic brick and masonry storefronts in LoDo, Five Points, Baker, and Capitol Hill; downtown high-rises with standpipes, fire pumps, voice evacuation, and smoke-control systems; converted RiNo warehouses now used as restaurants, offices, breweries, and event venues; postwar apartment communities; and rapidly growing mid-rise and high-rise residential construction. Industrial and logistics facilities cluster along I-70 and toward Denver International Airport. That mix makes tenant-improvement coordination especially important — a new wall, ceiling, storage arrangement, commercial cooking line, or change of occupancy can affect sprinkler coverage, alarm notification, egress, permits, and acceptance testing.',

    servicesOffered: [
      {
        title: 'Fire-Protection System Inspections',
        body: 'Code-driven inspection, testing, and maintenance for sprinklers, alarms, extinguishers, pumps, standpipes, backflow assemblies, and suppression systems — with clear reports for your property records and Denver Fire review.',
      },
      {
        title: 'Fire Sprinkler, Standpipe & Pump Testing',
        body: 'Wet, dry, preaction, and standpipe systems tested on the required NFPA cadence, including valves, drains, fire department connections, pumps, and prioritized deficiency documentation.',
      },
      {
        title: 'Fire Alarm Testing & Service',
        body: 'Functional testing of initiating devices, notification appliances, supervising signals, control equipment, secondary power, and system interfaces, coordinated to limit disruption in occupied buildings.',
      },
      {
        title: '24/7 Alarm Monitoring',
        body: 'Central-station monitoring and signal response for Denver properties, with account information, contacts, and dispatch procedures kept current as tenants and building staff change.',
      },
      {
        title: 'System-Down & Fire-Watch Support',
        body: 'Fast response when a sprinkler or alarm system is impaired, including repair coordination, outage documentation, and guidance through Denver’s system-down reporting and fire-watch process.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Testing, repair, and documentation for fire-line and domestic backflow assemblies, coordinated with the applicable water provider and the fire-protection system’s service schedule.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Inspection, tagging, maintenance, hydrostatic testing, recharging, placement review, and logbook support for portable extinguishers throughout commercial and multi-family properties.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'Inspection and service for commercial cooking suppression systems in Denver restaurants, hotels, commissaries, food halls, schools, and institutional kitchens.',
      },
      {
        title: 'Special Hazard & Clean-Agent Systems',
        body: 'Inspection and maintenance for clean-agent, carbon-dioxide, dry-chemical, and other special systems protecting data rooms, industrial processes, archives, and critical equipment.',
      },
      {
        title: 'Permitting & Life-Safety Coordination',
        body: 'Scope development, construction-permit coordination, acceptance-test preparation, and correction management for Denver tenant improvements, system modifications, and property transitions.',
      },
    ],

    servicesIntro:
      'Denver Fire requires current local licenses for technicians who inspect and test regulated life-safety systems. We coordinate the systems under one service program and keep NFPA or Denver Fire forms, license information, and correction records organized for the property.',

    industriesServed: [
      'Commercial property management',
      'Multi-family apartments and condominiums',
      'High-rise office and mixed-use',
      'Restaurants, bars, and commercial kitchens',
      'Hotels and hospitality',
      'Retail centers and neighborhood storefronts',
      'Warehouse, logistics, and light industrial',
      'Healthcare and assisted living',
      'Education and childcare',
      'Entertainment and assembly venues',
      'Data centers and server rooms',
      'HOA and community associations',
    ],

    deficienciesTitle: 'Common Denver Fire inspection issues to address before the inspector arrives.',
    deficienciesIntro:
      'Denver Fire publishes several preventable violations for property teams to watch. The Denver-specific items below combine that guidance with documentation and system-impairment requirements in the Denver Fire Code.',

    commonDeficiencies: [
      {
        title: 'Extinguisher service is out of date or records are missing',
        body: 'Denver lists out-of-date extinguishers and unavailable logbooks among its common violations. We verify placement and condition, complete required service, and leave organized records on site for the next Fire Prevention inspection.',
      },
      {
        title: 'Egress paths are narrowed or obstructed',
        body: 'Denver requires egress pathways to remain at least 36 inches wide. Furniture, merchandise, deliveries, or stored material can turn an ordinary corridor into an inspection finding and a real evacuation hazard.',
      },
      {
        title: 'Exit doors do not provide single-motion egress',
        body: 'Added deadbolts, surface bolts, chains, or other tenant-installed hardware can prevent a door from opening with one releasing motion. We identify the issue early and coordinate the right correction before inspection.',
      },
      {
        title: 'Storage has moved outside approved areas',
        body: 'Denver identifies storage outside designated areas as a common violation. Changes in stock, rack height, or room use can also alter sprinkler clearances and the hazard the original system was designed to protect.',
      },
      {
        title: 'Knox Box keys and emergency contacts are outdated',
        body: 'Denver requires current building-access keys for fire-department use. Locks, tenants, alarm panels, and property managers change; the emergency-access set and contact list need to change with them.',
      },
      {
        title: 'Inspection and testing records are not kept on site',
        body: 'Denver Fire Code Section 901.6.3 requires records of system installation, inspection, testing, and maintenance to remain on the premises using NFPA or Denver Fire forms, with the service provider’s Denver license number legible.',
      },
      {
        title: 'A system impairment was not reported',
        body: 'Denver requires notification whenever a fire alarm or sprinkler system is compromised. If the system remains down beyond 10 hours, a fire-watch permit is required; interruption of a fire water line triggers the fire-watch permit process immediately.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction for fire inspections in Denver, Colorado?',
        answer: 'The Denver Fire Department Fire Prevention Division is the fire-code AHJ inside the City and County of Denver. It conducts commercial occupancy inspections and administers life-safety system permitting, plan review, acceptance testing, and licensing.',
      },
      {
        question: 'Which fire code does Denver use?',
        answer: 'Denver publishes the 2022 Denver Building and Fire Code. The Denver Fire Code is based on the 2021 International Fire Code with local Denver amendments. Its referenced standards include the 2022 editions of NFPA 13, NFPA 13D, NFPA 13R, NFPA 20, and NFPA 72, plus the 2019 edition of NFPA 14.',
      },
      {
        question: 'How often does the Denver Fire Department inspect commercial properties?',
        answer: 'Denver states that Fire Safety Inspections occur once per year for commercial occupancies, including businesses, schools, apartment buildings, and institutions. Marijuana facilities receive inspections twice per year. These city inspections are separate from the recurring system inspection, testing, and maintenance performed by a fire-protection contractor.',
      },
      {
        question: 'Does Denver require licensed fire-protection technicians?',
        answer: 'Yes. The Denver Fire Code requires Denver Fire Department licenses for people performing regulated design, installation, modification, inspection, testing, maintenance, and repair on life-safety systems and equipment. The required license category depends on the system and scope.',
      },
      {
        question: 'Do sprinkler and fire-alarm repairs require permits in Denver?',
        answer: 'Denver requires construction permits before installing or modifying sprinkler, standpipe, fire-pump, alarm, and related systems. The code also treats many repairs and maintenance activities as permit work, while listing limited exceptions for minor work and approved emergency procedures. We confirm the scope before work begins and coordinate the appropriate permit path.',
      },
      {
        question: 'What should I do if a fire alarm or sprinkler system goes down in Denver?',
        answer: 'Notify the Denver Fire Department through its System Down Reporting website whenever a fire alarm or sprinkler system is compromised, and notify the monitoring company. If the outage exceeds 10 hours, Denver requires a fire-watch permit. Any interruption of a fire water line requires the fire-watch permit process immediately.',
      },
      {
        question: 'What records should a Denver property keep for its fire-protection systems?',
        answer: 'Denver Fire Code Section 901.6.3 requires records of system installations, inspections, tests, and maintenance to be maintained on the premises. Records must use NFPA forms or Denver Fire Department forms and show the service person’s name and Denver Fire Department license number legibly.',
      },
      {
        question: 'How quickly can Red Rocks Fire Protection respond in Denver?',
        answer: 'Denver is part of our core metro service area. We provide 24/7 emergency response and typically target arrival within 90 minutes for Denver Metro fire-protection emergencies, depending on technician location, traffic, site access, and the system involved.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Denver Inspection.',
        descriptor: 'Tell us about the building and systems you manage. We’ll coordinate the right technician and a scope built around Denver’s code, licensing, and documentation requirements.',
        href: '/contact',
        label: 'Get in touch',
      },
      {
        title: 'See All Our Services.',
        descriptor: 'Bring sprinklers, alarms, monitoring, extinguishers, suppression, backflow, and life-safety coordination under one accountable vendor.',
        href: '/services',
        label: 'Browse services',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Denver, CO | Red Rocks Fire Protection',
      description:
        'Fire sprinkler, alarm, extinguisher, monitoring, suppression, backflow, and inspection services for Denver properties. Denver Fire Code–ready documentation and 24/7 emergency response.',
      keywords:
        'fire protection Denver CO, fire sprinkler inspection Denver, fire alarm testing Denver, fire extinguisher service Denver, kitchen hood suppression Denver, backflow testing Denver, Denver Fire Department inspections, Denver Fire Code',
      canonical: '/service-areas/denver-co/',
    },
  },


  // ──────────────────────────────────────────────────────────────────
  // ARVADA, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'arvada-co',
    city: 'Arvada',
    state: 'CO',
    county: 'Jefferson County',
    bannerTitle: 'Fire Protection Arvada, CO',
    bannerSubtitle: 'ARVADA FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Arvada runs from the brick storefronts of Olde Town out to the new rooftops of Candelas and Leyden Rock, and Red Rocks Fire Protection covers all of it from our shop up the road in Centennial. Whether you manage a restaurant off the G-Line plaza, a warehouse in the light-industrial belt below I-76, or an HOA clubhouse along Ralston Creek, your property answers to the Arvada Fire Protection District for code enforcement — and every report we hand you is written the way that district wants to read it.',

    ahj: {
      name: 'Arvada Fire Protection District',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 424-3012',
      website: 'https://www.arvadafireco.gov/',
      note:
        'Arvada Fire Protection District is the Authority Having Jurisdiction for Arvada and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 424-3012, and permitting and code information is at https://www.arvadafireco.gov/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Arvada Fire Protection District’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Olde Town Arvada', type: 'Mixed-Use', note: 'Historic downtown of century-old brick buildings converted to restaurants and bars around the G-Line station; kitchen-hood suppression and shared-wall alarm coverage are the recurring scopes.' },
      { name: 'Ralston Creek', type: 'Residential', note: 'Trail-corridor neighborhoods of 1990s single-family and townhomes; residential monitoring and HOA clubhouse backflow testing near the greenway.' },
      { name: 'Candelas', type: 'Master-Planned', note: 'New-growth community off Highway 72 on the northwest edge; NFPA 13D residential sprinklers, monitored alarms, and clubhouse/amenity-center systems still under builder warranty.' },
      { name: 'Leyden Rock', type: 'Master-Planned', note: 'Adjacent northwest master-plan below North Table Mountain; new residential sprinkler and alarm cadences plus amenity-building suppression.' },
      { name: 'Wadsworth Corridor', type: 'Commercial Corridor', note: 'Arvada’s main retail-and-office spine along Wadsworth Boulevard; strip-center sprinkler systems, alarm panels, and grocery-anchored kitchen suppression.' },
      { name: 'Arvada Ridge', type: 'Retail', note: 'Big-box and G-Line-adjacent retail near Kipling; large-format sprinkler systems, mall-style voice notification, and high-piled storage clearances.' },
      { name: 'Water Tower / Arvada Center', type: 'Mixed-Use', note: 'Around the Arvada Center for the Arts and the landmark water tower; assembly-occupancy alarm and EVAC systems plus theater stage-and-loft protection.' },
      { name: 'Lake Arbor', type: 'Residential', note: 'Established lakeside subdivisions and garden apartments east of Wadsworth; legacy smoke-detection retrofits and multi-family backflow testing.' },
      { name: 'Far Horizons / Allendale', type: 'Residential', note: 'Older ranch and split-level housing stock from the 1960s–70s; pre-code smoke-detection layouts and monitored-alarm retrofits at remodel.' },
      { name: 'I-76 Industrial (Ridge Road)', type: 'Industrial', note: 'Light-industrial and warehouse space off the I-76 frontage; ESFR sprinklers, fire-pump testing, and rack-storage commodity classification.' },
      { name: 'West Woods', type: 'Residential', note: 'Golf-course custom homes on the far northwest slope; NFPA 13D residential sprinkler service and monitored alarm systems on larger lots.' },
      { name: 'Ralston Valley / North Arvada', type: 'Commercial Corridor', note: 'Newer commercial and medical-office pads along 72nd and Indiana; clean-agent suppression for imaging and server rooms plus standard wet-system testing.' },
    ],

    neighborhoodIntro:
      'Arvada straddles Jefferson and Adams counties, so we work everything from 1960s ranch neighborhoods in the older core to brand-new rooftops in Candelas and Leyden Rock, plus the retail and industrial strung along Wadsworth and I-76. These are the named areas and corridors our technicians cover most often.',

    buildingStock:
      'Arvada’s building stock splits cleanly by era and geography. The older core around Olde Town, Allendale, and Far Horizons is 1950s–70s ranch and split-level single-family, much of it with legacy smoke-detection layouts that get upgraded at remodel. The northwest edge — Candelas, Leyden Rock, and West Woods — is new master-planned residential with NFPA 13D sprinklers and monitored alarms still under builder warranty. Commercial property concentrates on the Wadsworth Boulevard corridor and the Arvada Ridge retail node near the G-Line, with restaurant and assembly occupancies clustered in Olde Town and around the Arvada Center. Light industrial and warehouse space sits along the I-76 frontage and Ridge Road, where ESFR sprinklers and fire pumps dominate. Multi-family is mostly garden-style apartments and townhomes near Lake Arbor and along Ralston Creek.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code-driven cadence, documented in one report formatted for the Arvada Fire Protection District’s prevention bureau.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, and standpipe systems exercised per NFPA 25 — from Olde Town restaurant retrofits to ESFR warehouse systems off I-76. Includes main-drain tests, valve supervision, and a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including the assembly-occupancy panels at the Arvada Center and Wadsworth-corridor tenants.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and fire-watch protocols, dispatching directly to the Arvada Fire Protection District when an alarm confirms.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for irrigation, fire-line, and domestic backflow preventers — common at Ralston Creek HOA common areas and Lake Arbor multi-family — with certification filed to the water utility.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards across Arvada retail and industrial sites.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — a constant scope for the dense restaurant row in Olde Town and the grocery-anchored kitchens along Wadsworth.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms, imaging suites, and equipment closets — increasingly common in the medical-office pads along 72nd and Indiana in north Arvada.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review coordination with the Arvada Fire Protection District’s prevention bureau, plan-reviewer coordination, and deficiency-correction project management for HOA and property-management portfolios.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted the way the Arvada Fire Protection District documents findings — so corrections clear the re-check without rework.',

    industriesServed: [
      'HOA & community associations',
      'Multi-family property management',
      'Restaurants and food service',
      'Retail centers and grocery-anchored strips',
      'Light industrial and warehouse',
      'Office and medical-office',
      'Arts, assembly, and event venues',
      'Assisted living and healthcare',
      'Education and childcare',
      'Automotive and service trades',
      'Hospitality',
      'Religious and community facilities',
    ],

    deficienciesTitle: 'What the Arvada Fire Protection District flags most often on inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we correct across Arvada properties. None of this is a citation against a specific building — it’s the pattern of findings our technicians document most often in this district.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads',
        body: 'The top finding across Arvada retail and warehouse space: storage racks, new tenant build-outs off Wadsworth, or seasonal signage installed too close to sprinkler deflectors. We measure clearance to the inch and document the correction scope so district approval is fast.',
      },
      {
        title: 'Aging systems in the older core',
        body: 'Olde Town’s converted brick buildings and the 1960s–70s stock in Allendale and Far Horizons often run original piping, missing hydraulic nameplates, or grandfathered devices. We re-calculate and re-placard in-house and flag what needs upgrade at the next remodel.',
      },
      {
        title: 'Kitchen hood suppression out of date',
        body: 'Olde Town’s tight restaurant row turns tenants over often, and pre-UL-300 wet-chemical systems get left in place. We inventory each hood by hazard class and flag UL-300 conversions ahead of lease renewal so the district doesn’t flag them first.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries have a 4–5 year service life, and failed load tests are a top deficiency along the Wadsworth corridor and at the Arvada Center. We track every panel’s battery age and replace before it fails.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Irrigation and fire-line backflow preventers at Ralston Creek HOAs and Lake Arbor apartments require annual testing by a certified cross-connection tester. We test, tag, and file the certification directly with the water utility.',
      },
      {
        title: 'Residential sprinkler cadence lapses in new-growth areas',
        body: 'Candelas, Leyden Rock, and West Woods homes carry NFPA 13D systems and monitored alarms that fall out of cadence once the builder warranty ends. We pick up the testing schedule so nothing lapses at handoff.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'Missing or broken FDC caps let debris into the check valve and can fail an inspection outright — a common finding on the older industrial buildings off I-76. We carry replacements on the truck and install them on the spot.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Arvada, Colorado?',
        answer: 'The Arvada Fire Protection District is the AHJ for most of Arvada across both Jefferson and Adams counties. Its fire-prevention bureau issues permits, reviews sprinkler and alarm submittals, and conducts the on-site inspections. Confirm permitting and inspection appointments with the district directly — the number on this page reaches Red Rocks Fire Protection to schedule your testing.',
      },
      {
        question: 'Do you serve the whole city, including Candelas and Leyden Rock on the northwest side?',
        answer: 'Yes. We cover Arvada end to end — Olde Town and the older core, the Wadsworth and Arvada Ridge retail corridors, the I-76 industrial belt, and the new master-planned communities on the northwest edge like Candelas, Leyden Rock, and West Woods. Arvada sits well inside the Denver metro, so we hold a 90-minute emergency response window for the city.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Arvada?',
        answer: 'Per NFPA 25 and the IFC as adopted by the Arvada Fire Protection District, wet-pipe sprinkler systems require quarterly and annual inspections with an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. We track every cadence for every system we service and email you 30 days before a test comes due.',
      },
      {
        question: 'Can you handle the restaurants in Olde Town after hours?',
        answer: 'Yes. Olde Town’s restaurant row is dense and mostly occupied through the evening, so we schedule hood-suppression tags, sprinkler testing, and alarm checks around service hours — early morning or after close — to keep dining rooms open. We coordinate with the operator or property manager so tenants aren’t disrupted.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Arvada restaurants?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require an automatic fire-extinguishing system over commercial cooking operations, covering the hood, duct, and plenum. UL-300 wet-chemical systems are the current standard; older systems are grandfathered but usually need replacement at tenant turnover or major renovation — a frequent situation in Olde Town.',
      },
      {
        question: 'Do you service the new residential sprinkler systems in Candelas and Leyden Rock?',
        answer: 'Yes. We inspect, test, and maintain NFPA 13D residential sprinkler systems and monitored alarms in Arvada’s new-growth communities — Candelas, Leyden Rock, and West Woods — along with the amenity-center and clubhouse systems those HOAs operate. We commonly pick these up when the builder warranty ends and the testing schedule needs a permanent owner.',
      },
      {
        question: 'How quickly can you respond to a fire-protection emergency in Arvada?',
        answer: 'Arvada is inside the Denver metro, so our emergency response window for the city is typically under 90 minutes. We staff a 24/7 emergency line and dispatch the same technicians who already know your property, not a call center.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule an Arvada Inspection.',
        descriptor: 'Tell us about your property — Olde Town storefront, Wadsworth strip center, or a Candelas clubhouse — and we’ll route the right NICET-certified technician, usually within a few business days.',
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
      title: 'Fire Protection Services in Arvada, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and consulting in Arvada, Colorado. Serving Arvada Fire Protection District properties across Jefferson and Adams counties. NICET-certified technicians, 90-minute metro emergency response.',
      keywords:
        'fire protection Arvada CO, fire inspections Arvada, sprinkler inspection Arvada, fire alarm testing Arvada, backflow testing Arvada, kitchen hood suppression Olde Town Arvada, fire protection company Arvada Colorado, Arvada Fire Protection District inspections',
      canonical: '/service-areas/arvada-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // AURORA, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'aurora-co',
    city: 'Aurora',
    state: 'CO',
    county: 'Arapahoe County',
    bannerTitle: 'Fire Protection Aurora, CO',
    bannerSubtitle: 'AURORA FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Aurora is the third-largest city in Colorado and it sprawls across three counties — Arapahoe, Adams, and Douglas — from the Anschutz Medical Campus on the west side out to the E-470 warehouse belt near DIA. Whatever you own here, from a hospital tower at Fitzsimons to a strip center on Havana Street, Aurora Fire Rescue enforces the fire code, and every inspection we run in the city is written to a report Aurora Fire Rescue will accept on the first pass. Our office sits 25 minutes south in Centennial, well inside the 90-minute emergency window we hold across the Denver metro.',

    ahj: {
      name: 'Aurora Fire Rescue / City of Aurora Life Safety',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 326-8999',
      website: 'https://www.auroragov.org/residents/public_safety/fire_rescue/life_safety_and_fire_prevention',
      note:
        'Aurora Fire Rescue / City of Aurora Life Safety is the Authority Having Jurisdiction for Aurora and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 326-8999, and permitting and code information is at https://www.auroragov.org/residents/public_safety/fire_rescue/life_safety_and_fire_prevention. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Aurora Fire Rescue / City of Aurora Life Safety’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Fitzsimons / Anschutz Medical Campus', type: 'Mixed-Use', note: 'UCHealth University of Colorado Hospital, Children’s Hospital Colorado, and the Rocky Mountain Regional VA — high-rise hospital life-safety, smoke control, and full NFPA 72 voice-evac stacks.' },
      { name: 'Stanley Marketplace', type: 'Mixed-Use', note: 'Former Stanley Aviation plant converted to food halls, breweries, and retail; adaptive-reuse spaces with mixed-age sprinkler mains and heavy kitchen-hood suppression scope.' },
      { name: 'Town Center at Aurora', type: 'Retail', note: 'Enclosed regional mall off I-225 and Alameda; mall-wide voice evacuation, large-format sprinkler systems, and food-court hood suppression.' },
      { name: 'Havana Street corridor', type: 'Commercial Corridor', note: 'Aurora’s longtime retail spine — auto dealerships, grocery-anchored strips, and restaurants; recurring Ansul hood tags and sprinkler-obstruction clearances.' },
      { name: 'Southlands', type: 'Retail', note: 'Open-air lifestyle center near E-470 and Smoky Hill Road in the Douglas/Arapahoe corner; restaurant hood systems, anchor-tenant sprinklers, and DAS radio coverage.' },
      { name: 'Aurora Highlands / Green Valley Ranch East', type: 'Master-Planned', note: 'Fast-growing residential and mixed-use build-out near the airport; new NFPA 13D residential systems, monitored alarms, and fresh commercial pads.' },
      { name: 'Buckley (Base-adjacent commercial)', type: 'Commercial Corridor', note: 'Contractor, office, and flex space serving Buckley Space Force Base along Airport Blvd; secure-facility alarm interfaces and clean-agent server-room suppression.' },
      { name: 'Gateway Park / E-470 East', type: 'Industrial', note: 'DIA-adjacent distribution and last-mile warehouse near Tower Road and E-470; ESFR sprinkler systems, fire-pump testing, and high-piled storage commodity classification.' },
      { name: 'Original Aurora / Colfax Avenue', type: 'Mixed-Use', note: 'Older commercial and multi-family along East Colfax; legacy wet systems, faded hydraulic nameplates, and aging alarm panels common at inspection.' },
      { name: 'Del Mar / Hoffman Heights', type: 'Residential', note: 'Established post-war single-family and small multi-family; legacy smoke-detection layouts and monitored-alarm retrofits.' },
      { name: 'Saddle Rock / Tollgate', type: 'Master-Planned', note: 'Custom-home communities in the southeast near E-470; residential sprinkler and monitored alarm service, HOA common-area backflow testing.' },
      { name: 'Aurora City Center', type: 'Mixed-Use', note: 'Municipal, transit, and office core at the I-225 light-rail line; Class-A office life-safety, standpipe testing, and emergency voice systems.' },
    ],

    neighborhoodIntro:
      'Aurora covers roughly 160 square miles across three counties, so the property mix swings hard from hospital towers at Anschutz to airport-belt warehouses off E-470. Below are the districts and corridors where our technicians spend the most time.',

    buildingStock:
      'Aurora’s stock is genuinely mixed because the city grew in waves. The west side around Fitzsimons and Anschutz is dense institutional and medical — hospital towers, research labs, and clinics carrying the most demanding life-safety loads in the metro, including smoke control and full mass-notification systems. Mid-century single-family and small multi-family fill the older core around Colfax and Del Mar, where legacy sprinkler and alarm gear shows up at inspection. The middle of the city is retail and commercial corridor: Havana Street, Town Center at Aurora, and the I-225 spine. To the southeast, master-planned communities like Saddle Rock and the retail at Southlands push toward E-470. The eastern edge near DIA and Gateway Park is warehouse and distribution — ESFR-protected big boxes and fire-pump systems on high-piled storage. Buckley Space Force Base anchors a band of contractor and office space with its own security and interface requirements.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each on its own code cadence, documented in one Aurora Fire Rescue–formatted report, from Havana Street strip centers to hospital campuses at Anschutz.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25 — including the multi-riser standpipe stacks in Fitzsimons and City Center towers, main-drain tests, valve supervision, and a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including the voice-evac and mass-notification systems that hospital and mall occupancies require.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and fire-watch protocols, with confirmed alarms dispatched into Aurora Fire Rescue across all three counties the city spans.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for irrigation, fire-line, and domestic backflow preventers, with certification filed with Aurora Water — a recurring need across Saddle Rock and Aurora Highlands HOA common areas.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards, from Southlands restaurants to Gateway Park warehouse floors.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — heavy scope at Stanley Marketplace food halls, the Town Center food court, and Havana Street restaurants.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for hospital IT rooms, imaging suites, and the server closets in Buckley-adjacent contractor offices where a water discharge would be its own disaster.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review with Aurora Fire Rescue’s prevention team, plan-reviewer coordination, and deficiency-correction project management for healthcare, property-management, and HOA portfolios across the city’s spread.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to Aurora Fire Rescue’s preferred layout — so corrections clear without a return trip, whether the property is a clinic at Anschutz or a warehouse off Tower Road.',

    industriesServed: [
      'Hospitals and medical campuses',
      'Assisted living and healthcare',
      'HOA & community associations',
      'Multi-family property management',
      'Retail centers and shopping malls',
      'Restaurants and food service',
      'Light industrial and warehouse',
      'Distribution and logistics',
      'Office and Class-A commercial',
      'Automotive dealerships',
      'Data centers and server rooms',
      'Education and childcare',
    ],

    deficienciesTitle: 'What Aurora Fire Rescue flags most often on Aurora inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Aurora properties. None of it is a citation from a specific address — it’s the pattern of findings our technicians document and correct most frequently in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads',
        body: 'The top finding on Aurora Fire Rescue reports: warehouse racks near Tower Road, retail signage on Havana Street, and hospital equipment stacked under deflectors at Anschutz. We measure clearance to the inch and document the correction scope so approval is fast.',
      },
      {
        title: 'Hospital smoke-control and voice-evac out of test',
        body: 'The medical towers at Fitzsimons carry smoke-control dampers and mass-notification systems that must be functionally tested and cross-verified. Missed or undocumented tests are a serious deficiency in healthcare occupancies — we run and log the full sequence.',
      },
      {
        title: 'Missing or expired hydraulic nameplates',
        body: 'Older wet systems in Original Aurora and along Colfax frequently have faded or missing hydraulic placards. Aurora Fire Rescue requires a verified nameplate for every system — we re-calculate and re-placard in-house.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries carry a 4–5 year service life, and failed load tests are a top deficiency across the Havana and I-225 corridors. We track every panel’s battery age and replace before the test fails.',
      },
      {
        title: 'Kitchen hood suppression out of date',
        body: 'Pre-UL-300 wet-chemical systems still turn up at Stanley Marketplace tenants and older Havana Street kitchens. We inventory hoods by hazard class and flag UL-300 conversions ahead of lease renewal or tenant turnover.',
      },
      {
        title: 'ESFR sprinkler / commodity classification mismatches',
        body: 'Gateway Park and E-470 distribution tenants change stored commodities and rack heights without re-evaluating the sprinkler design. We verify commodity class against the installed ESFR system and flag where the protection no longer matches the storage.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'A common Aurora Fire Rescue finding — missing or broken FDC caps let debris into the check valve and can fail an inspection outright. We carry replacements on the truck and install them on the spot.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Aurora, Colorado?',
        answer: 'Aurora Fire Rescue is the AHJ for the City of Aurora across all three counties the city spans — Arapahoe, Adams, and Douglas. Its Fire Prevention / Community Risk Reduction division issues permits, conducts on-site inspections, and reviews sprinkler, alarm, and underground fire-line submittals citywide.',
      },
      {
        question: 'Do you cover all of Aurora, given how large the city is?',
        answer: 'Yes. Aurora runs about 160 square miles from Anschutz on the west to the E-470 airport belt on the east, and we service the whole footprint — the Havana corridor, Southlands, Town Center, Gateway Park warehouses, and everything in between. Our office is 25 minutes south in Centennial, so Aurora falls well inside the 90-minute emergency response window we hold across the Denver metro.',
      },
      {
        question: 'Can you handle the life-safety systems at hospital and medical buildings near Anschutz?',
        answer: 'Yes. Healthcare occupancies at the Anschutz Medical Campus and Fitzsimons carry the metro’s most demanding requirements — smoke control, full NFPA 72 voice evacuation and mass notification, multi-riser standpipes, and clean-agent suppression for imaging and IT rooms. We test and document each system on its own cadence and coordinate testing around patient-care operations.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Aurora?',
        answer: 'Per NFPA 25 and the IFC as adopted by Aurora Fire Rescue, wet-pipe systems require quarterly and annual inspections with an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. We track every cadence for every system we service and email you 30 days before a test is due.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Aurora restaurants?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require automatic extinguishing systems for commercial cooking — the hood, duct, and plenum. UL-300 wet-chemical is the current standard. Older systems at places like Stanley Marketplace and along Havana Street are grandfathered but typically need replacement at tenant turnover or major renovation.',
      },
      {
        question: 'Do you service ESFR sprinkler systems in the warehouses near DIA and E-470?',
        answer: 'Yes. The distribution and last-mile buildings around Gateway Park and Tower Road run ESFR sprinkler systems on high-piled storage, often paired with a fire pump. We perform NFPA 25 testing, annual fire-pump flow tests, and verify that the installed protection still matches the stored commodity class and rack height when tenants change their storage.',
      },
      {
        question: 'How quickly can you respond to an emergency in Aurora?',
        answer: 'Our office is in Centennial, roughly 25 minutes from central Aurora, so our emergency response window for the city is typically under 90 minutes and often faster. We staff a 24/7 emergency line and dispatch the same technicians who know your property, not a call center.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule an Aurora Inspection.',
        descriptor: 'Tell us about your property — hospital campus, warehouse, restaurant, or HOA — and we’ll route the right NICET-certified technician, usually within a few business days, faster if it’s urgent.',
        href: '/contact',
        label: 'Get in touch',
      },
      {
        title: 'See All Our Services.',
        descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, alarms, monitoring, suppression, backflow, and consulting all under the same roof.',
        href: '/services',
        label: 'Browse services',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Aurora, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and consulting in Aurora, Colorado. Serving Aurora Fire Rescue jurisdictions across Arapahoe, Adams, and Douglas counties, from Anschutz to the E-470 warehouse belt. NICET-certified technicians, 90-minute metro emergency response.',
      keywords:
        'fire protection Aurora CO, fire inspections Aurora, sprinkler inspection Aurora, fire alarm testing Aurora, backflow testing Aurora, kitchen hood suppression Aurora, ESFR warehouse sprinkler Aurora, hospital life safety Anschutz, fire protection company Aurora Colorado, Aurora Fire Rescue inspections',
      canonical: '/service-areas/aurora-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // BLACK HAWK, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'black-hawk-co',
    city: 'Black Hawk',
    state: 'CO',
    county: 'Gilpin County',
    bannerTitle: 'Fire Protection Black Hawk, CO',
    bannerSubtitle: 'BLACK HAWK FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Black Hawk packs more high-rise life-safety load into a square mile than almost anywhere in Colorado — casino hotel towers stacked into a mining canyon at roughly 8,000 feet, sitting a short climb above the historic 1800s masonry district on Gregory Street. The Ameristar, Monarch, and Saratoga towers each run full life-safety stacks: standpipes, fire pumps, voice-evacuation, and kitchen-hood suppression feeding round-the-clock gaming floors and restaurants. Red Rocks Fire Protection runs Black Hawk on a scheduled canyon route up Highway 119 from our Centennial shop, so a property with a thousand-occupant gaming floor gets NFPA 25 and NFPA 72 testing on a planned visit written to a report the Black Hawk Fire Department will accept the first time.',

    ahj: {
      name: 'Black Hawk Fire Department',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 14 (Standard for the Installation of Standpipe and Hose Systems) — current adopted edition',
        'NFPA 20 (Standard for the Installation of Stationary Pumps for Fire Protection) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 582-0426',
      website: 'https://www.cityofblackhawk.org/government/departments/fire',
      note:
        'Black Hawk Fire Department is the Authority Having Jurisdiction for Black Hawk and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 582-0426, and permitting and code information is at https://www.cityofblackhawk.org/government/departments/fire. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Black Hawk Fire Department’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Ameristar Casino Resort tower', type: 'Mixed-Use', note: 'High-rise hotel-and-gaming tower; full standpipe risers, fire pump, voice-evac, and kitchen-hood suppression across multiple restaurants and a large gaming floor.' },
      { name: 'Monarch Casino Resort Spa tower', type: 'Mixed-Use', note: 'Tall hotel-and-spa high-rise; multi-zone fire alarm, elevator recall, generator-backed life-safety power, and parking-structure standpipes.' },
      { name: 'Saratoga Casino & hotel block', type: 'Mixed-Use', note: 'Gaming floor with hotel rooms above; sprinkler-alarm interface, kitchen-hood systems, and high assembly occupant loads.' },
      { name: 'Gregory Street historic district', type: 'Commercial Corridor', note: 'Original 1800s mining-era masonry storefronts and smaller casinos; retrofit sprinklers, standpipe hose valves, and heat-detection in unheated back rooms.' },
      { name: 'Main Street gaming core', type: 'Commercial Corridor', note: 'Dense row of mid-size casinos and bars along the creek; shared FDCs, sprinkler-obstruction issues, and assembly-egress alarm coverage.' },
      { name: 'Selak Road / upper canyon', type: 'Commercial Corridor', note: 'Newer casino and parking-garage development up the grade; dry-pipe systems in unheated decks and freeze-prone risers.' },
      { name: 'Chase Street corridor', type: 'Mixed-Use', note: 'Casino support buildings and offices set into the hillside; standpipe and alarm coverage across stepped floor plates.' },
      { name: 'Gregory Gulch / Black Hawk–Central City road', type: 'Commercial Corridor', note: 'Route linking the two mining towns; roadside gaming and service properties with monitored alarms and backflow on fire lines.' },
      { name: 'North Clear Creek frontage', type: 'Commercial Corridor', note: 'Creekside parcels through the canyon bottom; underground fire-line supply, hydrant-fed FDCs, and flood-and-freeze exposure on exterior valves.' },
      { name: 'Highway 119 canyon approach', type: 'Commercial Corridor', note: 'The single canyon entrance from Golden; large casino surface lots, sign-mounted alarm strobes, and access-road standpipe planning.' },
      { name: 'Miner’s Mesa parking structures', type: 'Industrial', note: 'Multi-level casino parking decks; dry standpipes, deck drainage, and cold-weather riser protection at altitude.' },
      { name: 'Gilpin County / Dory Hill approach', type: 'Residential', note: 'Sparse mountain residential above town; long-driveway access, monitored alarms, and NFPA 13D considerations on newer builds.' },
    ],

    neighborhoodIntro:
      'Black Hawk is tiny in footprint but enormous in occupant load — most of what we inspect is stacked into the casino hotel towers and the historic gaming row along Gregory and Main Streets. Below are the buildings and corridors our technicians cover most often on the canyon route.',

    buildingStock:
      'Black Hawk’s building stock splits sharply into two eras. The modern half is casino hotel high-rises — the Ameristar, Monarch, and Saratoga towers — each carrying a complete life-safety stack: standpipe risers on every floor, an NFPA 20 fire pump, multi-zone voice-evacuation, elevator recall, generator-backed emergency power, and UL-300 kitchen-hood suppression over the gaming-floor restaurants. The historic half is 1800s mining-district masonry along Gregory Street and Main Street, much of it converted to smaller casinos, bars, and assembly space, where retrofit sprinklers and standpipe hose valves have been threaded through unheated stone shells. Everything sits at roughly 8,000 feet in a narrow canyon on North Clear Creek, so dry-pipe systems, freeze-prone risers, and heat-traced FDCs are the norm rather than the exception, and multi-level parking structures on the mesa carry their own dry standpipes and cold-weather protection.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, standpipes, fire pumps, alarms, extinguishers, and hood suppression — each system on its own code cadence, batched into a scheduled canyon visit and documented in one Black Hawk Fire Department–formatted report.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, and preaction sprinkler systems plus the Class I standpipe risers that run every floor of the casino towers, exercised per NFPA 25 and NFPA 14 — main-drain tests, valve supervision, and hose-valve checks with a prioritized deficiency list.',
      },
      {
        title: 'Fire Pump Testing',
        body: 'Annual NFPA 20 / NFPA 25 flow tests on the diesel and electric fire pumps that feed high-rise standpipes and sprinkler zones in the Ameristar, Monarch, and Saratoga towers, with churn, rated, and peak-flow readings recorded.',
      },
      {
        title: 'Fire Alarm & Voice-Evacuation Testing',
        body: 'Initiating devices, notification appliances, voice-evac amplifiers, elevator recall, and generator transfer tested to NFPA 72 — the full mass-notification chain a gaming floor needs to clear a thousand occupants in a single canyon exit.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and direct dispatch to the Black Hawk Fire Department, sized for properties that never close and cannot rely on staff to notice a trouble signal overnight.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing on fire-line, domestic, and irrigation backflow preventers, with the certification filed to the water authority — and freeze-protection checks on the exterior assemblies that a canyon winter at 8,000 feet punishes.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging across Class A through Class K, including the Class K units required at every casino-restaurant cook line.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A across the multiple restaurants inside each casino tower — high-volume cook lines that run nearly around the clock.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'High-occupancy pre-plan work with the Black Hawk Fire Department, standpipe and fire-pump acceptance coordination, and deficiency-correction project management for casino, hotel, and historic-district owners scheduling around gaming operations.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET-certified technicians and batched into a single planned visit up Highway 119, with reports formatted to the Black Hawk Fire Department’s expected layout — so a casino floor’s corrections clear without a return trip through the canyon.',

    industriesServed: [
      'Casino and gaming operations',
      'Hotel and resort towers',
      'Restaurants and gaming-floor food service',
      'Assembly and entertainment venues',
      'Bars and nightlife',
      'Multi-level parking structures',
      'Historic mining-district commercial',
      'Spa and wellness facilities',
      'Hospitality property management',
      'Municipal and public facilities',
      'Mountain residential',
    ],

    deficienciesTitle: 'What the Black Hawk Fire Department flags most often on casino and canyon-district inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we document across Black Hawk’s gaming towers and historic-district properties. None of this is a citation from a specific casino — it’s the pattern of findings a high-occupancy, high-altitude, freeze-exposed jurisdiction produces year after year.',

    commonDeficiencies: [
      {
        title: 'Frozen or air-bound dry-pipe systems',
        body: 'At 8,000 feet in the canyon, dry-pipe systems in parking decks, attics, and unheated back-of-house spaces lose air pressure or ice at the low points. We check compressor cycling, low-point drains, and quick-opening devices, and flag heat-trace failures on exposed risers before a hard freeze trips a false discharge.',
      },
      {
        title: 'Fire pump churn and flow-test shortfalls',
        body: 'The high-rise towers depend on their fire pumps to push standpipe pressure to the top floors. Missed annual NFPA 20 flow tests, weak diesel start batteries, and pumps drifting below rated flow are among the most consequential findings — we run the full churn-rated-peak curve and document every reading.',
      },
      {
        title: 'Kitchen-hood suppression on high-volume casino cook lines',
        body: 'Multiple restaurants per tower running near around the clock means grease loads build fast and UL-300 systems fall behind on semiannual service. We inventory every hood by hazard class and flag fusible-link, nozzle-alignment, and gas-shutoff issues before a citation.',
      },
      {
        title: 'Voice-evacuation and mass-notification gaps',
        body: 'A gaming floor with a thousand occupants and one canyon exit needs intelligible voice-evac in every zone. Amplifier faults, dead speaker circuits, and un-commissioned zones after a floor remodel are recurring findings — we verify audibility and message routing zone by zone.',
      },
      {
        title: 'Obstructed sprinkler heads on gaming and retail floors',
        body: 'Slot-machine reconfigurations, signage, and seasonal décor on casino floors routinely crowd sprinkler deflectors below the required clearance. We measure to the inch and document the correction so the fire department approval is fast.',
      },
      {
        title: 'Standpipe hose-valve and FDC deficiencies',
        body: 'Missing FDC caps, seized standpipe hose valves, and damaged pressure-reducing valves on the tower risers let debris in and fail an inspection outright. We carry replacements and repair the risers that firefighters would actually pull hose from.',
      },
      {
        title: 'Historic-district retrofit and freeze exposure',
        body: 'Sprinklers and standpipes threaded through unheated 1800s masonry on Gregory Street sit in cold, uninsulated cavities. We flag freeze-vulnerable runs, corroded heads on old piping, and heat-detection gaps in the stone back rooms these buildings are known for.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Black Hawk, Colorado?',
        answer: 'The Black Hawk Fire Department is the AHJ for the City of Black Hawk in Gilpin County. It conducts on-site fire inspections and reviews sprinkler, standpipe, fire-pump, and alarm submittals, with particular scrutiny on the high-occupancy casino hotel towers. Confirm the department’s current permitting and scheduling line directly with the City of Black Hawk.',
      },
      {
        question: 'Does Red Rocks Fire Protection travel up to Black Hawk from the metro?',
        answer: 'Yes. Black Hawk sits about an hour up Highway 119 through the canyon from Golden, and we run it on a scheduled route from our Centennial shop rather than as an on-demand metro call. We batch a property’s sprinkler, standpipe, fire-pump, alarm, and hood inspections into a single planned visit so a casino only coordinates around its gaming floor once.',
      },
      {
        question: 'How do you handle testing on a casino floor that never closes?',
        answer: 'Gaming floors run 24/7, so we schedule NFPA 25 and NFPA 72 work around the lowest-occupancy windows and coordinate with security and facilities so notification testing, main-drain tests, and fire-pump flows don’t disrupt play or force an unnecessary evacuation. Where a system must go offline, we set up a documented fire watch first.',
      },
      {
        question: 'How often do standpipes and fire pumps in the casino towers need testing?',
        answer: 'Under NFPA 25 as adopted locally, standpipe systems get annual and five-year tests, and fire pumps require a weekly or monthly no-flow (churn) test plus an annual flow test running the churn, rated, and peak-flow points. In a high-rise where the pump is the only thing pushing water to the top floors, we treat the annual pump test as the anchor of the whole inspection.',
      },
      {
        question: 'Why does altitude and freezing matter for fire protection in Black Hawk?',
        answer: 'At roughly 8,000 feet in a narrow canyon, Black Hawk runs cold for much of the year, so dry-pipe systems, freeze-protected risers, and heat-traced fire department connections are standard. We check compressor cycling, low-point drains, and heat trace on every dry system and exterior backflow assembly, because a frozen low point or a failed trace line is what causes an off-season pipe break.',
      },
      {
        question: 'Do the historic mining-district buildings need the same inspections as the casino towers?',
        answer: 'The 1800s masonry buildings along Gregory and Main Streets carry lighter systems than the towers, but converted gaming, bar, and assembly use still requires sprinklers, standpipe hose valves, alarms, and hood suppression on any cook line. Retrofits threaded through unheated stone need extra attention to freeze exposure and corrosion on older piping.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Black Hawk casino restaurants?',
        answer: 'Yes. NFPA 96 and the IFC require automatic hood, duct, and plenum suppression over commercial cook lines, and each casino tower runs several high-volume restaurants. UL-300 wet-chemical systems are the current standard; we inspect and tag them semiannually because near-continuous cooking drives grease loads and service intervals faster than a typical restaurant.',
      },
      {
        question: 'How quickly can you respond to a fire-protection issue in Black Hawk?',
        answer: 'Because Black Hawk is up the canyon rather than inside the Denver metro, we don’t advertise a 90-minute window here. We run planned service routes and coordinate urgent repairs — a failed fire pump, an impaired standpipe, a system taken offline — with the property so a fire watch covers the gap while a technician is dispatched from the metro.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Black Hawk Inspection.',
        descriptor: 'Tell us about your casino, hotel tower, or historic-district property and we’ll batch every system into one scheduled canyon visit — sprinklers, standpipes, fire pumps, alarms, and hoods on a single report.',
        href: '/contact',
        label: 'Get in touch',
      },
      {
        title: 'See All Our Services.',
        descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, standpipes, fire pumps, alarms, monitoring, suppression, backflow, and consulting all under one roof.',
        href: '/services',
        label: 'Browse services',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Black Hawk, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and standpipe testing, fire-pump and voice-evac testing, monitoring, backflow, and hood suppression for Black Hawk, Colorado casino hotel towers and the historic mining district. NICET-certified technicians on a scheduled canyon route.',
      keywords:
        'fire protection Black Hawk CO, casino fire inspection Black Hawk, standpipe testing Black Hawk, fire pump testing Black Hawk, sprinkler inspection Black Hawk, kitchen hood suppression Black Hawk, voice evacuation testing casino, Black Hawk Fire Department inspections, Gilpin County fire protection',
      canonical: '/service-areas/black-hawk-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // BOULDER, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'boulder-co',
    city: 'Boulder',
    state: 'CO',
    county: 'Boulder County',
    bannerTitle: 'Fire Protection Boulder, CO',
    bannerSubtitle: 'BOULDER FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Boulder sits against the Flatirons where the foothills wildland meets a dense downtown, and that mix shapes every inspection we run here. A Pearl Street restaurant tenant, a CU Boulder research lab, and a Chautauqua-adjacent home each carry a different code scope, and Boulder Fire-Rescue enforces some of the strictest local amendments on the Front Range. We drive up US-36 from our Centennial office to write reports Boulder Fire-Rescue accepts on the first pass, so your corrections close without a second visit.',

    ahj: {
      name: 'Boulder Fire-Rescue',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'NFPA 2001 (Standard on Clean Agent Fire Extinguishing Systems) — current adopted edition',
        'International Fire Code (IFC), as amended by the City of Boulder — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 441-3350',
      website: 'https://bouldercolorado.gov/government/departments/fire-rescue',
      note:
        'Boulder Fire-Rescue is the Authority Having Jurisdiction for Boulder and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 441-3350, and permitting and code information is at https://bouldercolorado.gov/government/departments/fire-rescue. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Boulder Fire-Rescue’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Pearl Street Mall', type: 'Mixed-Use', note: 'Dense historic downtown with restaurants stacked below offices and residential; kitchen-hood suppression, sprinkler-obstruction clearances, and legacy standpipes in century-old masonry buildings.' },
      { name: 'University Hill', type: 'Mixed-Use', note: 'Student housing, bars, and small retail wedged against CU Boulder; high-occupancy assembly loads and older frame buildings needing alarm and sprinkler retrofits.' },
      { name: 'CU Boulder Main Campus', type: 'Mixed-Use', note: 'Labs, dormitories, and large assembly halls; clean-agent suppression for research spaces, special-hazard scopes, and full life-safety stacks in high-occupancy buildings.' },
      { name: 'Chautauqua / Flagstaff', type: 'Residential', note: 'Foothills homes at the wildland-urban interface below Flagstaff Mountain; ember-exposure hardening, monitored detection, and NFPA 13D residential sprinkler considerations.' },
      { name: 'Table Mesa', type: 'Residential', note: 'Established south-Boulder neighborhood against the foothills; older homes with legacy smoke-detection layouts and WUI ember exposure near open space.' },
      { name: 'Twenty Ninth Street', type: 'Retail', note: 'Open-air retail district off Canyon and 28th; large-format sprinkler systems, mall-wide notification, and food-tenant hood suppression.' },
      { name: 'Gunbarrel', type: 'Commercial Corridor', note: 'Northeast tech and biotech corridor; clean-agent suppression for server and lab spaces, plus flex-office alarm and sprinkler scopes.' },
      { name: 'Boulder Junction / Depot Square', type: 'Mixed-Use', note: 'Transit-oriented mid-rise residential above retail near the RTD depot; full life-safety stacks, standpipes, and emergency voice systems.' },
      { name: 'East Boulder / Flatiron Business Park', type: 'Industrial', note: 'Light industrial and lab/flex space along Arapahoe Avenue and 55th; ESFR sprinklers, special-hazard suppression, and fire-pump testing.' },
      { name: 'Colorado & Foothills Parkway corridor', type: 'Commercial Corridor', note: 'Research, aerospace, and biotech buildings near CU’s east campus; special-hazard and clean-agent systems protecting labs and instrument rooms.' },
      { name: 'North Boulder (NoBo)', type: 'Mixed-Use', note: 'Broadway arts and residential mix with newer mixed-use infill; sprinkler and alarm commissioning on recent build-outs.' },
      { name: 'Whittier / Mapleton Hill', type: 'Residential', note: 'Historic near-downtown homes and small multi-family; older systems and retrofits governed by Boulder’s historic-district constraints.' },
    ],

    neighborhoodIntro:
      'We cover the full range of Boulder property types, from century-old masonry on Pearl Street to CU research labs and foothills homes at the wildland edge. Below are the districts and corridors our technicians work most often.',

    buildingStock:
      'Boulder’s building stock splits sharply by district. Downtown around Pearl Street runs on late-1800s to mid-1900s masonry with restaurants and retail below offices and residential, where standpipes, kitchen-hood systems, and sprinkler clearances dominate the inspection scope. CU Boulder and its east-campus research district add labs, dormitories, and assembly buildings that carry clean-agent suppression and special-hazard systems. The foothills neighborhoods below Chautauqua and Flagstaff put single-family homes directly at the wildland-urban interface, where ember exposure and monitored detection matter as much as sprinklers. Newer mixed-use and transit-oriented mid-rises around Boulder Junction and Twenty Ninth Street carry full life-safety stacks, while the Gunbarrel and East Boulder corridors hold biotech, aerospace, and light-industrial tenants with ESFR sprinklers and lab suppression.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression on their own code-driven cadences, documented in a single report formatted for Boulder Fire-Rescue’s prevention staff and its local IFC amendments.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, and standpipe systems tested per NFPA 25 — including the manual and hose-connection standpipes common in Pearl Street’s multi-story masonry buildings. Includes main-drain tests, valve supervision, and a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including the high-device-count systems in CU-adjacent housing and 29th Street retail.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification and fire-watch protocols, sized for foothills homes at the wildland edge as well as downtown assembly and lab occupancies.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection control testing for irrigation, fire-line, and domestic backflow preventers, with certification filed to the City of Boulder water utility.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K — including the Class D and specialty extinguishers found in CU and Gunbarrel labs.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — a recurring scope across the tight Pearl Street and University Hill restaurant density.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for research labs, server rooms, and instrument spaces across CU Boulder, the Foothills Parkway research buildings, and Gunbarrel biotech and aerospace tenants.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Plan-review coordination with Boulder Fire-Rescue Prevention, help working through Boulder’s local IFC amendments and historic-district constraints, and deficiency-correction project management for property-management and campus portfolios.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted for Boulder Fire-Rescue’s prevention staff and the city’s local code amendments — so corrections are approved without a second trip up US-36.',

    industriesServed: [
      'Higher education and campus facilities',
      'Research labs and biotech',
      'Aerospace and instrumentation',
      'Restaurants and food service',
      'Retail centers and mixed-use',
      'Student and multi-family housing',
      'Historic downtown commercial',
      'Office and flex-space',
      'Light industrial and warehouse',
      'Data centers and server rooms',
      'Hospitality',
      'Assisted living and healthcare',
    ],

    deficienciesTitle: 'What Boulder Fire-Rescue flags most often on Boulder inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we document across Boulder properties. None of it is a citation from a specific building — it’s the pattern our technicians correct most often under Boulder’s locally amended code.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads in downtown build-outs',
        body: 'Pearl Street and University Hill restaurant and retail tenants routinely add ductwork, signage, and mezzanine storage that crowd sprinkler deflectors. We measure clearance to the inch and document the correction scope so Boulder Fire-Rescue approval is fast.',
      },
      {
        title: 'Standpipe and FDC deficiencies in older masonry',
        body: 'Multi-story Pearl Street and Mapleton Hill buildings often run legacy standpipes with missing hose-valve caps, seized valves, or damaged fire department connections. We test to NFPA 25 and carry replacement caps and gauges on the truck.',
      },
      {
        title: 'Clean-agent and special-hazard systems out of certification',
        body: 'CU labs, Foothills Parkway research space, and Gunbarrel biotech rooms let FM-200, Novec 1230, and CO₂ systems lapse past their inspection interval. We verify agent quantity, hydrostatic dates, and room-integrity (fan) test status against NFPA 2001.',
      },
      {
        title: 'Kitchen hood suppression out of date',
        body: 'The tight restaurant density on Pearl Street and University Hill leaves older wet-chemical systems in service past tenant turnover. We inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries carry a 4–5 year service life, and failed load tests are a top finding across CU-adjacent housing and 29th Street retail. We track every panel’s battery age and replace proactively.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Irrigation and fire-line backflow preventers require annual testing by a certified cross-connection tester. We file the certification directly with the City of Boulder water utility and the AHJ.',
      },
      {
        title: 'WUI detection and hardening gaps in foothills homes',
        body: 'Homes below Chautauqua, Flagstaff, and Table Mesa sit at the wildland-urban interface, where monitored detection, sound residential sprinkler coverage, and ember-resistant scoping matter. We inspect NFPA 13D systems and flag exposure gaps for owners in the foothills fire zone.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Boulder, Colorado?',
        answer: 'Boulder Fire-Rescue is the AHJ for the City of Boulder. Its Prevention division issues permits, conducts on-site fire inspections, and reviews sprinkler, alarm, and suppression submittals for properties inside the city, enforcing the IFC as amended by Boulder’s own local code.',
      },
      {
        question: 'Does Boulder enforce different fire codes than the rest of the Front Range?',
        answer: 'Boulder layers its own local amendments on top of the state-adopted International Fire Code, and the city tends to enforce them strictly. A scope that clears in a neighboring jurisdiction can need extra documentation or a stricter interpretation here, which is why we build Boulder inspection reports to the city’s specific requirements rather than a generic Front Range template.',
      },
      {
        question: 'Do you inspect fire protection systems on the CU Boulder campus and in research labs?',
        answer: 'Yes. We inspect and test sprinklers, alarms, and standpipes in dormitories and assembly buildings, and we service the clean-agent and special-hazard suppression that protects research labs, server rooms, and instrument spaces. FM-200, Novec 1230, and CO₂ systems are tested against NFPA 2001, including agent-quantity checks and room-integrity status.',
      },
      {
        question: 'My property is in the foothills near Chautauqua — does the wildland-urban interface change what I need?',
        answer: 'It changes the priorities. Homes below Chautauqua, Flagstaff, and Table Mesa sit at the wildland-urban interface, where ember exposure and reliable monitored detection matter alongside any residential sprinkler system. We inspect NFPA 13D systems, verify monitored smoke and heat detection, and flag exposure gaps so you know where your coverage stands before fire season.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Boulder?',
        answer: 'Per NFPA 25 and the IFC as adopted and amended by Boulder, wet-pipe sprinkler systems require quarterly and annual inspections with an internal inspection every 5 years. Dry-pipe systems add quarterly trip checks and a 3-year full-flow trip test. We track every cadence for every system we service and email you 30 days before a test is due.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Boulder restaurants?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require automatic fire-extinguishing systems for commercial cooking operations, covering the hood, duct, and plenum. UL-300 wet-chemical systems are the current standard; older systems are typically flagged for replacement at tenant turnover, which comes up often given the restaurant density on Pearl Street and University Hill.',
      },
      {
        question: 'Can you respond quickly to a Boulder property, or is it out of your area?',
        answer: 'Boulder is within our Denver-metro service radius. We run it from our Centennial office up US-36, and it falls inside the roughly 90-minute emergency response window we advertise across the metro. We staff a 24/7 emergency line and dispatch technicians who already know your property, not a call center.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Boulder Inspection.',
        descriptor: 'Tell us about your property — Pearl Street tenant, CU-adjacent building, or foothills home — and we’ll route the right NICET-certified technician, faster if it’s urgent.',
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
      title: 'Fire Protection Services in Boulder, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and clean-agent service in Boulder, Colorado. NICET-certified technicians who know Boulder Fire-Rescue’s local code amendments, from Pearl Street to CU Boulder to the foothills.',
      keywords:
        'fire protection Boulder CO, fire inspections Boulder, sprinkler inspection Boulder, fire alarm testing Boulder, backflow testing Boulder, kitchen hood suppression Boulder, clean agent suppression Boulder, Boulder Fire-Rescue inspections, fire protection company Boulder Colorado',
      canonical: '/service-areas/boulder-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // BRIGHTON, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'brighton-co',
    city: 'Brighton',
    state: 'CO',
    county: 'Adams County',
    bannerTitle: 'Fire Protection Brighton, CO',
    bannerSubtitle: 'BRIGHTON FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Brighton is the Adams County seat, and the ground here has changed fast: the same corridors that once served sugar-beet and vegetable farms now carry million-square-foot distribution buildings off I-76 and E-470. Whether you run a cold-storage warehouse near Bromley Lane, a retail box at Prairie Center, or an older Main Street building downtown, your property answers to the Brighton Fire Rescue District for fire-code enforcement. Red Rocks Fire Protection works Brighton on a regular route and writes every inspection report to a format the district will accept the first time through.',

    ahj: {
      name: 'Brighton Fire Rescue District',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 659-4101',
      website: 'https://brightonfire.org/',
      note:
        'Brighton Fire Rescue District is the Authority Having Jurisdiction for Brighton and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 659-4101, and permitting and code information is at https://brightonfire.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Brighton Fire Rescue District’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Historic Downtown / Main Street', type: 'Mixed-Use', note: 'Older masonry storefronts and second-floor residential; legacy standpipes, dry systems, and grandfathered kitchen-hood setups that need close NFPA 96 attention.' },
      { name: 'Prairie Center', type: 'Retail', note: 'Big-box and grocery-anchored retail off Bromley Lane and Highway 7; large-format wet sprinkler systems, mall-style voice evacuation, and hood suppression at food tenants.' },
      { name: 'Bromley Lane Corridor', type: 'Commercial Corridor', note: 'The east-west commercial spine through town; strip retail, medical office, and quick-service restaurants with recurring extinguisher and backflow scopes.' },
      { name: 'I-76 Logistics Corridor', type: 'Industrial', note: 'Newer high-bay warehouse and distribution buildings; ESFR sprinkler systems, fire-pump testing, and rack-storage commodity classification are the core work.' },
      { name: 'E-470 / Sable Boulevard Interchange', type: 'Industrial', note: 'Fast-growing distribution and last-mile build-out; new NFPA 13 systems, underground fire lines, and FDC commissioning on ground-up construction.' },
      { name: 'Adams County Regional Park & Fairgrounds', type: 'Commercial Corridor', note: 'Event pavilions, arena, and exhibition halls; assembly-occupancy alarm coverage, portable extinguisher counts, and temporary cooking-operation checks during fair season.' },
      { name: 'Prairie Center Residential', type: 'Master-Planned', note: 'Newer master-planned single-family and townhome sections; NFPA 13D residential sprinkler and monitored alarm retrofits at remodel.' },
      { name: 'Brighton Crossing', type: 'Master-Planned', note: 'Large master-planned community on the east side; HOA common areas, clubhouse alarm systems, and irrigation backflow testing.' },
      { name: 'Southern Hills', type: 'Residential', note: 'Established single-family neighborhood with mature lots; older smoke-detection layouts that benefit from retrofit and monitoring upgrades.' },
      { name: 'Platte River Bottoms / Agricultural Edge', type: 'Industrial', note: 'Grain, produce-packing, and ag-supply operations along the South Platte; dust-hazard awareness, extinguisher coverage, and cold-storage sprinkler considerations.' },
      { name: 'North 4th Avenue / Business US-85', type: 'Commercial Corridor', note: 'The old highway business strip; automotive, light service, and older commercial buildings with legacy sprinkler and alarm equipment.' },
      { name: 'Sugar Beet / Downtown Industrial', type: 'Industrial', note: 'Repurposed agricultural-processing and warehouse stock near the rail line; dry-pipe systems, unheated-space freeze protection, and standpipe testing.' },
    ],

    neighborhoodIntro:
      'Brighton runs the full range, from Main Street masonry downtown to million-square-foot distribution buildings off I-76 and E-470. Our technicians cover the retail at Prairie Center, the Bromley Lane commercial strip, the fairgrounds, and the newer warehouse corridors on a scheduled route. Below are the areas we work most often.',

    buildingStock:
      'Brighton’s property mix reflects a farm town that turned into a logistics hub. Downtown holds older masonry commercial and second-floor residential built well before current sprinkler standards, much of it repurposed agricultural-processing and warehouse space near the rail line. The biggest recent change is the wave of high-bay distribution and cold-storage buildings along the I-76 corridor and near the E-470 / Sable interchange, most requiring ESFR sprinkler systems, fire pumps, and rack-storage commodity classification. Retail is concentrated at Prairie Center and along Bromley Lane, while residential growth runs through master-planned communities like Brighton Crossing and the Prairie Center neighborhoods, mixing single-family with townhomes and NFPA 13D residential systems in newer construction. Ag-supply, grain, and produce-packing operations along the South Platte round out the stock, adding cold-storage and dust-hazard considerations that most metro suburbs don’t carry.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code cadence, documented in one report formatted for Brighton Fire Rescue District review.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems tested per NFPA 25 — including the ESFR systems and fire pumps in the I-76 distribution buildings, plus dry-pipe trip tests on unheated warehouse and downtown ag-conversion space.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians, from Main Street storefronts to Prairie Center retail and warehouse offices.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and fire-watch protocols, with alarm signals routed for dispatch to Brighton Fire Rescue District when an event confirms.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for irrigation, fire-line, and domestic backflow preventers across Brighton Crossing HOAs, Bromley Lane retail, and warehouse fire services; certification filed with the water provider.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K — including Class D and ag-hazard coverage at produce-packing and equipment-supply sites.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — common at Prairie Center food tenants, Bromley Lane restaurants, and fairgrounds concession operations.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for warehouse server rooms, distribution-facility control rooms, and cold-storage machinery spaces along the I-76 corridor.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review coordination with Brighton Fire Rescue District, plan-reviewer follow-up on ground-up warehouse construction near E-470, and deficiency-correction project management for property-management and logistics portfolios.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to Brighton Fire Rescue District’s preferred layout so corrections are approved without a return visit.',

    industriesServed: [
      'Warehouse and distribution',
      'Cold storage and food processing',
      'Retail centers and big-box',
      'Restaurants and food service',
      'Agricultural supply and grain handling',
      'Multi-family property management',
      'HOA & community associations',
      'Office and medical office',
      'Automotive and light service',
      'Assembly and event venues',
      'Assisted living and healthcare',
      'Education and childcare',
    ],

    deficienciesTitle: 'What Brighton Fire Rescue District flags most often on inspections here.',
    deficienciesIntro:
      'These are the recurring deficiency categories we correct across Brighton properties. None of it is a citation from any one address — it’s the pattern our technicians document most in this jurisdiction, weighted toward the warehouse and ag stock that sets Brighton apart from most metro suburbs.',

    commonDeficiencies: [
      {
        title: 'Rack storage encroaching on ESFR sprinkler clearance',
        body: 'The most common finding in the I-76 and E-470 distribution buildings: pallet racks re-stacked above the design height or storage set within the required clear space below ESFR heads. We measure clearance and commodity height against the system’s design and document the correction the district needs.',
      },
      {
        title: 'Dry-pipe and unheated-space freeze protection failures',
        body: 'Warehouse dock areas, downtown ag-conversion buildings, and cold-storage spaces run dry-pipe systems that fail trip tests or lose freeze protection over Brighton winters. We run the trip tests, check low-point drains, and flag heat-trace or antifreeze-loop repairs before the first hard freeze.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries carry a 4–5 year service life and fail load tests across the Bromley Lane and Prairie Center commercial stock. We track each panel’s battery age and replace before the district flags it.',
      },
      {
        title: 'Backflow preventers without annual certification',
        body: 'Irrigation and fire-line backflow preventers at Brighton Crossing HOAs and warehouse fire services often lack current test tags. We test, tag, and file the certification with the water provider and the district.',
      },
      {
        title: 'Fire pump testing gaps on new distribution buildings',
        body: 'Ground-up warehouse construction near E-470 adds fire pumps that miss their weekly churn and annual flow testing once the general contractor leaves. We set up the NFPA 25 pump-test schedule and document flow results the district will accept.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'A frequent finding on both downtown buildings and new warehouse FDCs — missing or broken caps let debris foul the check valve and can fail an inspection outright. We carry replacements on the truck and install on the spot.',
      },
      {
        title: 'Grandfathered downtown kitchen-hood suppression',
        body: 'Older Main Street restaurants run pre-UL-300 wet-chemical hood systems that the district increasingly flags at tenant turnover. We inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal or remodel.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Brighton, Colorado?',
        answer: 'Brighton Fire Rescue District is the AHJ for the City of Brighton and much of the surrounding Adams County service area. The district issues fire-protection permits, conducts on-site inspections, and reviews sprinkler, alarm, and underground fire-line submittals — including the ground-up warehouse work along the I-76 and E-470 corridors.',
      },
      {
        question: 'Do you charge extra to reach Brighton from your Centennial office?',
        answer: 'No. Brighton sits inside the Denver metro area we cover, roughly an hour north of our office at 7076 S. Alton Way in Centennial. We run Brighton on a scheduled route, so recurring inspections are priced the same as our south-metro work, and we can hold a 90-minute emergency response window inside the metro for accounts we service.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Brighton?',
        answer: 'Per NFPA 25 and the IFC as adopted by Brighton Fire Rescue District, wet-pipe sprinkler systems require quarterly and annual inspections with an internal inspection every 5 years. Dry-pipe systems — common in Brighton’s warehouse dock areas and downtown ag-conversion buildings — add quarterly trip tests and a 3-year full-flow trip test. We track every cadence and email you 30 days before a test is due.',
      },
      {
        question: 'Do you handle ESFR sprinkler and fire-pump testing for warehouses off I-76?',
        answer: 'Yes. The distribution buildings along I-76 and near the E-470 interchange typically run ESFR (Early Suppression Fast Response) sprinkler systems fed by a fire pump. We test the pump to NFPA 25, verify commodity height and rack clearance against the system’s hydraulic design, and document flow results in the format Brighton Fire Rescue District reviews.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Brighton restaurants?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require automatic fire-extinguishing systems for commercial cooking — the hood, duct, and plenum. UL-300 wet-chemical is the current standard. Older Main Street restaurants often run grandfathered pre-UL-300 systems that the district flags for replacement at tenant turnover or major renovation.',
      },
      {
        question: 'Do you service residential sprinkler systems in Brighton?',
        answer: 'Yes. We inspect, test, and maintain NFPA 13D residential sprinkler systems in the newer master-planned communities — Brighton Crossing and the Prairie Center residential sections most often — along with monitored residential alarm and smoke-detection systems. We also handle HOA clubhouse and common-area life-safety equipment.',
      },
      {
        question: 'How quickly can you respond to a fire-protection emergency in Brighton?',
        answer: 'Brighton is inside the Denver metro area we serve, so for accounts we already maintain our emergency response window is typically under 90 minutes. We staff a 24/7 emergency line and dispatch the same technicians who know your property and its system layout — not a call center that has never seen the building.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Brighton Inspection.',
        descriptor: 'Tell us about your property — downtown storefront, Prairie Center retail, or an I-76 distribution building — and we’ll route the right NICET-certified technician, usually within a few business days.',
        href: '/contact',
        label: 'Get in touch',
      },
      {
        title: 'See All Our Services.',
        descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, alarms, monitoring, suppression, backflow, and consulting all under the same roof.',
        href: '/services',
        label: 'Browse services',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Brighton, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, ESFR and fire-pump testing, 24/7 monitoring, backflow, and suppression in Brighton, Colorado. Serving Brighton Fire Rescue District and the I-76 / E-470 warehouse corridors. NICET-certified technicians, 90-minute metro emergency response.',
      keywords:
        'fire protection Brighton CO, fire inspections Brighton, sprinkler inspection Brighton, ESFR warehouse sprinkler Brighton, fire alarm testing Brighton, backflow testing Brighton, kitchen hood suppression Brighton, fire protection company Brighton Colorado, Brighton Fire Rescue District inspections',
      canonical: '/service-areas/brighton-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // BROOMFIELD, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'broomfield-co',
    city: 'Broomfield',
    state: 'CO',
    county: 'City and County of Broomfield',
    bannerTitle: 'Fire Protection Broomfield, CO',
    bannerSubtitle: 'BROOMFIELD FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Broomfield is the metro’s only consolidated city-and-county, which means one AHJ — North Metro Fire Rescue District — covers everything from the Class-A office towers at Interlocken to the rowhomes in Anthem. Red Rocks Fire Protection runs the full life-safety scope along the US-36 tech corridor: sprinklers, alarms, extinguishers, backflow, suppression, and monitoring. Every report we write for a Broomfield property is formatted to what North Metro’s inspectors expect, so corrections clear on the first review.',

    ahj: {
      name: 'North Metro Fire Rescue District',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 452-9910',
      website: 'https://www.northmetrofire.org/',
      note:
        'North Metro Fire Rescue District is the Authority Having Jurisdiction for Broomfield and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 452-9910, and permitting and code information is at https://www.northmetrofire.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what North Metro Fire Rescue District’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Interlocken', type: 'Commercial Corridor', note: 'Class-A office and tech campuses off US-36; clean-agent suppression for server rooms, fire pumps, and full life-safety stacks on multi-story buildings.' },
      { name: 'Arista', type: 'Mixed-Use', note: 'Transit-oriented district around 1stBank Center; assembly-occupancy load, kitchen-hood suppression, and mass-notification scopes tied to event and restaurant tenants.' },
      { name: 'FlatIron Crossing', type: 'Retail', note: 'Regional mall and surrounding big-box retail; large-format sprinkler systems, mall-wide voice evacuation, and high-piled storage clearance checks.' },
      { name: 'Anthem', type: 'Master-Planned', note: 'Anthem Highlands and Anthem Ranch; NFPA 13D residential sprinkler retrofits, monitored alarms, and HOA common-area backflow testing.' },
      { name: 'The Broadlands', type: 'Master-Planned', note: 'Golf-course community with dense single-family and townhome stock; irrigation-line backflow and residential monitoring are recurring scopes.' },
      { name: 'Broomfield Original Town', type: 'Residential', note: 'Older core neighborhoods near Midway Boulevard; legacy smoke-detection layouts and aging wet-sprinkler systems in mixed small commercial.' },
      { name: 'US-36 / Northwest Parkway corridor', type: 'Commercial Corridor', note: 'The Denver-Boulder tech spine; flex office, data tenants, and clean-agent suppression for equipment rooms.' },
      { name: 'Vista Highlands / Brunner Farm', type: 'Residential', note: 'Newer single-family subdivisions; residential sprinkler and monitored alarm work at remodel and resale.' },
      { name: 'Broomfield Industrial Park', type: 'Industrial', note: 'Light industrial and warehouse near Nickel Street; ESFR sprinkler systems, fire-pump testing, and rack-storage commodity classification.' },
      { name: 'Prospect Ridge / Silverleaf', type: 'Residential', note: 'Established master-planned pockets; townhome-cluster alarm systems and common-area extinguisher programs.' },
      { name: 'McKay Landing', type: 'Master-Planned', note: 'Lake-adjacent residential with HOA amenities; pool-house and clubhouse suppression, extinguisher, and backflow scopes.' },
      { name: 'Wadsworth / 120th commercial strip', type: 'Retail', note: 'Grocery-anchored retail and quick-service food; Ansul kitchen-hood suppression and sprinkler-obstruction findings at tenant turnover.' },
    ],

    neighborhoodIntro:
      'Broomfield stretches across four historic counties but answers to one government and one fire district, so a property owner deals with a single set of rules from Interlocken to Anthem. Below are the districts and corridors our technicians cover most often, from the US-36 tech offices to the master-planned residential on the north side.',

    buildingStock:
      'Broomfield’s commercial base leans heavily on the US-36 tech corridor: Class-A office at Interlocken, data and flex tenants along the Northwest Parkway, and the mixed-use assembly and restaurant space at Arista around 1stBank Center. Retail concentrates at FlatIron Crossing and the Wadsworth / 120th strips. Residential is dominated by master-planned communities — Anthem, The Broadlands, McKay Landing — built largely from the late 1990s onward, with an older core around Broomfield Original Town and Midway Boulevard. Light industrial and warehouse space sits in the Broomfield Industrial Park near Nickel Street. Because the city and county are consolidated under North Metro Fire Rescue, every one of these property types runs through the same inspection and permitting process.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code-driven cadence, documented in a single report formatted for North Metro Fire Rescue District.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25 — from the multi-story stacks at Interlocken to the ESFR systems in the Broomfield Industrial Park. Includes main-drain tests, valve supervision, and a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians, including the larger addressable panels common in US-36 corridor office buildings.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification, fire-watch protocols, and direct dispatch into North Metro Fire Rescue’s dispatch when an alarm confirms.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection control testing for irrigation, fire-line, and domestic backflow preventers across Anthem, The Broadlands, and McKay Landing HOA common areas; certification filed with Broomfield’s water utility.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — a recurring scope at Arista and FlatIron Crossing food tenants and the Wadsworth / 120th strips.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms, data closets, and equipment rooms — common in Interlocken and along the Northwest Parkway tech tenants.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review with North Metro Fire Rescue, plan-reviewer coordination, and deficiency-correction project management for HOA and property-management portfolios across the consolidated city-and-county.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to North Metro Fire Rescue District’s preferred layout — so corrections are approved without rework.',

    industriesServed: [
      'Class-A office and tech campuses',
      'Data centers and server rooms',
      'HOA & community associations',
      'Multi-family property management',
      'Retail centers and shopping malls',
      'Restaurants and food service',
      'Assembly and event venues',
      'Light industrial and warehouse',
      'Hospitality',
      'Assisted living and healthcare',
      'Education and childcare',
      'Religious and community facilities',
    ],

    deficienciesTitle: 'What North Metro Fire Rescue District flags most often on Broomfield inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Broomfield properties. None of this is a citation from a specific property — it’s the pattern of findings our technicians document and correct most frequently in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads',
        body: 'The most cited deficiency on North Metro inspection reports: storage racks in the Broomfield Industrial Park, retail signage at FlatIron Crossing, and new tenant build-outs at Interlocken installed too close to sprinkler deflectors. We measure clearance to the inch and document the correction scope so AHJ approval is fast.',
      },
      {
        title: 'Clean-agent suppression not re-certified after room changes',
        body: 'Interlocken and Northwest Parkway tech tenants reconfigure server and data rooms often, which changes the sealed volume the FM-200 or Novec 1230 system was designed for. We re-verify concentration and enclosure integrity, then re-tag to North Metro’s satisfaction.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries on fire alarm panels have a 4–5 year service life. Failed load tests are a top deficiency across the US-36 corridor office buildings — we track every panel’s battery age and replace proactively.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Irrigation and fire-line backflow preventers across Anthem, The Broadlands, and McKay Landing HOA common areas require annual testing by a certified cross-connection tester. We file the certification directly with Broomfield’s water utility and North Metro.',
      },
      {
        title: 'Kitchen hood suppression out of date',
        body: 'Pre-UL-300 wet-chemical systems still turn up at older food tenants along Wadsworth and Midway. North Metro increasingly flags them for replacement at tenant turnover — we inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'A common North Metro finding — missing or broken FDC caps let debris into the check valve and can fail an inspection outright. We carry replacements on the truck and install them on the spot.',
      },
      {
        title: 'Mass-notification / voice systems not re-commissioned after build-out',
        body: 'Arista and Interlocken assembly and office spaces undergo tenant build-outs that disable EVAC and mass-notification systems without re-commissioning. We provide turnkey re-commissioning with North Metro sign-off.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Broomfield, Colorado?',
        answer: 'North Metro Fire Rescue District is the AHJ for all of Broomfield. Because Broomfield is a consolidated city-and-county, one district handles permits, on-site fire inspections, and sprinkler, alarm, and underground fire-line submittals across the entire jurisdiction — from Interlocken to Anthem — instead of splitting authority between separate city and county offices.',
      },
      {
        question: 'Does the consolidated city-and-county make fire permitting simpler in Broomfield?',
        answer: 'It usually does. In most metro cities a fire-protection project touches a municipal building department and a separate fire district. In Broomfield, the city and county are one government under North Metro Fire Rescue District, so you deal with a single set of adopted codes and one inspection process whether your property is a FlatIron Crossing retail tenant or a home in The Broadlands.',
      },
      {
        question: 'Do you service the Class-A office and data tenants along the US-36 tech corridor?',
        answer: 'Yes. Interlocken and the Northwest Parkway corridor make up much of our Broomfield work — multi-story sprinkler and standpipe systems, addressable fire alarm panels, and clean-agent suppression like FM-200, Novec 1230, and CO₂ for server rooms and data closets. We coordinate testing around tenant operations and can run after-hours inspections for occupied office buildings.',
      },
      {
        question: 'How quickly can you respond to a fire-protection emergency in Broomfield?',
        answer: 'Broomfield sits inside the Denver metro along US-36, so our emergency response window for fire-protection emergencies is typically around 90 minutes. We staff a 24/7 emergency line and dispatch the same technicians who know your property, not a call center.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Broomfield?',
        answer: 'Per NFPA 25 and the IFC as adopted by North Metro Fire Rescue District, wet-pipe sprinkler systems require quarterly and annual inspections, with an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. We track every cadence for every system we service and email you 30 days before a test is due.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Broomfield restaurants?',
        answer: 'Yes. NFPA 96 (and the IFC as adopted in Colorado) requires automatic fire-extinguishing systems for commercial cooking operations, including the hood, duct, and plenum. UL-300 wet-chemical systems are the current standard, common at Arista and FlatIron Crossing food tenants; older systems are grandfathered but typically need replacement at tenant turnover or major renovation.',
      },
      {
        question: 'Do you handle event and assembly venues like 1stBank Center at Arista?',
        answer: 'We inspect and maintain the life-safety systems that assembly occupancies rely on: sprinkler and standpipe systems, fire alarm and voice-evacuation, mass notification, and extinguisher programs. Assembly loads carry stricter notification and egress requirements, and we coordinate testing around event schedules so systems are verified without disrupting bookings.',
      },
      {
        question: 'Do you service residential sprinkler systems in Broomfield’s master-planned communities?',
        answer: 'Yes. We inspect, test, and maintain NFPA 13D residential sprinkler systems — most commonly in Anthem, The Broadlands, and McKay Landing — along with monitored residential alarm and smoke-detection systems. We also handle HOA common-area backflow, extinguisher, and clubhouse suppression scopes for community associations across the north side of the city.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Broomfield Inspection.',
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
      title: 'Fire Protection Services in Broomfield, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and consulting in Broomfield, Colorado. Serving the North Metro Fire Rescue District along the US-36 tech corridor, from Interlocken to Anthem. NICET-certified technicians, 90-minute emergency response.',
      keywords:
        'fire protection Broomfield CO, fire inspections Broomfield, sprinkler inspection Broomfield, fire alarm testing Broomfield, backflow testing Broomfield, kitchen hood suppression Broomfield, clean agent suppression Interlocken, fire protection company Broomfield Colorado, North Metro Fire Rescue inspections',
      canonical: '/service-areas/broomfield-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // CASTLE PINES, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'castle-pines-co',
    city: 'Castle Pines',
    state: 'CO',
    county: 'Douglas County',
    bannerTitle: 'Fire Protection Castle Pines, CO',
    bannerSubtitle: 'CASTLE PINES FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Castle Pines incorporated in 2008 and is still one of the newest cities in Douglas County, built almost entirely as master-planned golf and residential communities straddling I-25 between Castle Pines Parkway and Happy Canyon Road. Most of the built environment here is 13D-sprinklered custom homes, HOA common areas, and a handful of retail nodes at the Castle Pines Parkway interchange — all of it under South Metro Fire Rescue Authority for fire-code enforcement. Red Rocks Fire Protection works out of Centennial, a short run up I-25, and every report we write for a Castle Pines property is formatted to pass South Metro on the first review.',

    ahj: {
      name: 'South Metro Fire Rescue',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 13D (Standard for the Installation of Sprinkler Systems in One- and Two-Family Dwellings) — current adopted edition',
        'NFPA 13R (Standard for the Installation of Sprinkler Systems in Low-Rise Residential Occupancies) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(720) 989-2000',
      website: 'https://www.southmetro.org/',
      note:
        'South Metro Fire Rescue is the Authority Having Jurisdiction for Castle Pines and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (720) 989-2000, and permitting and code information is at https://www.southmetro.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what South Metro Fire Rescue’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'The Village at Castle Pines', type: 'Master-Planned', note: 'Gated golf community around the Castle Pines Golf Club, host of the BMW Championship; large custom homes on NFPA 13D residential sprinklers plus clubhouse and common-area systems.' },
      { name: 'Castle Pines Village North', type: 'Master-Planned', note: 'Estate lots with private wells and long driveways; residential sprinkler and monitored alarm retrofits are the recurring scope.' },
      { name: 'The Canyons', type: 'Master-Planned', note: 'Newest large development off Castle Pines Parkway; production and semi-custom homes delivered with 13D systems that need first-year acceptance testing and annual follow-up.' },
      { name: 'Castle Pines Town Center', type: 'Retail', note: 'King Soopers-anchored center at the Castle Pines Parkway / I-25 interchange; kitchen-hood suppression, wet sprinkler, and backflow testing for the grocery and restaurant tenants.' },
      { name: 'Castle Pines Parkway corridor', type: 'Commercial Corridor', note: 'Small medical-office, bank, and service buildings lining the parkway; wet sprinkler systems, fire alarm panels, and annual backflow certification.' },
      { name: 'The Hamlet', type: 'Residential', note: 'Established patio-home and townhome pocket; shared-attic party walls make firestop and 13R common-supply questions frequent.' },
      { name: 'Buffalo Ridge', type: 'Residential', note: 'Single-family neighborhood with HOA-maintained irrigation; fire-line and irrigation backflow preventers on an annual test cadence.' },
      { name: 'Beverly Hills Estates', type: 'Residential', note: 'Larger-lot homes near Happy Canyon; older well-served properties where residential sprinkler and detection retrofits come up at remodel.' },
      { name: 'Glen Oaks', type: 'Residential', note: 'Townhome and duplex community; 13R common water supply, standpipe-adjacent risers, and shared fire alarm monitoring.' },
      { name: 'Castle Pines North commercial nodes', type: 'Commercial Corridor', note: 'Scattered dental, veterinary, and daycare tenants off Monarch Boulevard; extinguisher service, small wet systems, and NFPA 72 alarm testing.' },
      { name: 'Daniels Park edge / west Castle Pines', type: 'Residential', note: 'Homes against open space and grassland; defensible-space awareness and monitored detection matter where wildland meets structures.' },
      { name: 'Lagae Road / I-25 frontage', type: 'Mixed-Use', note: 'Emerging frontage parcels between Castle Pines and Castle Rock; new construction acceptance testing for sprinkler and alarm as buildings come online.' },
    ],

    neighborhoodIntro:
      'Castle Pines is overwhelmingly residential and master-planned, so most of our work here is 13D and 13R sprinkler systems, HOA common-area backflow, and the small retail and medical tenants clustered at the Castle Pines Parkway interchange. Below are the named communities and corridors our technicians cover most often.',

    buildingStock:
      'Castle Pines is one of the youngest cities in the metro — incorporated in 2008 — and its building stock reflects that: almost all of it is single-family and attached residential built from the late 1990s onward, much of it delivered with NFPA 13D residential sprinklers as standard. The signature communities are The Village at Castle Pines and Castle Pines Village North, gated golf enclaves of large custom homes around the Castle Pines Golf Club, with newer production and semi-custom inventory still coming online in The Canyons off Castle Pines Parkway. Commercial property is limited and concentrated at the Castle Pines Parkway / I-25 interchange — a King Soopers-anchored town center, medical-office and bank buildings along the parkway, and scattered dental, veterinary, and daycare tenants near Monarch Boulevard. There is effectively no industrial base here, so HOA common-area systems, residential sprinklers, and small-tenant kitchen-hood and backflow work make up the bulk of the fire-protection inventory.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and hood suppression across HOA common areas and Castle Pines Parkway tenants — each system on its own code cadence, in one South Metro–formatted report.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet and dry systems in clubhouse, retail, and townhome risers exercised per NFPA 25, including main-drain tests and valve supervision, with 13D and 13R residential systems handled at acceptance and annually.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, panels, and secondary power tested to NFPA 72 by NICET-certified technicians — common in Castle Pines Parkway medical and retail suites and HOA clubhouses.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification and fire-watch protocols, dispatching into South Metro’s CAD when an alarm confirms — including monitored detection on estate homes backing to Daniels Park open space.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for HOA irrigation, fire-line, and domestic backflow preventers across Buffalo Ridge, The Canyons, and Village common areas; certification filed with the water district.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K — from clubhouse kitchens to the retail and daycare tenants off Monarch Boulevard.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected and tagged per NFPA 96 and 17A — the recurring scope at the Castle Pines Town Center grocery and restaurant tenants and golf-club kitchens.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for the small server and telecom rooms in Castle Pines Parkway medical-office and bank buildings, tested and tagged on schedule.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review coordination with South Metro’s Community Risk Reduction team and deficiency-correction project management built for HOA boards and property managers running Castle Pines common-area portfolios.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to South Metro Fire Rescue Authority’s preferred layout — so an HOA board or Castle Pines Parkway tenant clears corrections without a return trip.',

    industriesServed: [
      'HOA & community associations',
      'Golf and country clubs',
      'Master-planned residential developments',
      'Custom-home builders',
      'Grocery and neighborhood retail',
      'Medical and dental offices',
      'Banks and professional services',
      'Restaurants and food service',
      'Childcare and daycare',
      'Veterinary and pet-care facilities',
      'Property management',
      'Assisted living and senior housing',
    ],

    deficienciesTitle: 'What South Metro Fire Rescue Authority flags most often on Castle Pines inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Castle Pines properties, weighted toward residential and HOA systems. None of this is a citation from a specific property — it’s the pattern of findings our technicians document and correct most often in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Residential 13D systems never inspected after builder acceptance',
        body: 'Homes in The Canyons and Village North are delivered with 13D sprinklers, then the owner assumes the system is maintenance-free. South Metro expects ongoing inspection; we test the antifreeze loops, flow switches, and control valves that get forgotten after the builder walks away.',
      },
      {
        title: 'HOA backflow preventers without annual test certification',
        body: 'Irrigation and fire-line backflow assemblies serving Buffalo Ridge, Village, and Canyons common areas commonly lapse on their annual test. We test to the water district’s requirement and file the certification directly so the HOA stays compliant.',
      },
      {
        title: 'Antifreeze and freeze-protection issues on residential risers',
        body: 'Castle Pines sits above 6,000 feet and gets hard freezes; unheated garage and attic risers on 13D and 13R systems show freeze damage and out-of-spec antifreeze concentration. We test glycol strength and flag heat-trace failures before a burst.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries on clubhouse and Castle Pines Parkway tenant panels have a 4–5 year life. Failed load tests are a top finding; we track every panel’s battery age and replace before South Metro’s inspection catches it.',
      },
      {
        title: 'Kitchen hood suppression out of date at retail and club tenants',
        body: 'Pre-UL-300 wet-chemical systems still turn up at Castle Pines Town Center restaurant tenants and golf-club kitchens. South Metro increasingly flags them at turnover; we inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal.',
      },
      {
        title: 'Obstructed or painted-over sprinkler heads',
        body: 'Townhome and clubhouse remodels in The Hamlet and Glen Oaks routinely bury heads behind soffits or paint the deflectors. We measure clearance and document the correction scope so the AHJ sign-off is quick.',
      },
      {
        title: 'Monitored detection dropped after remodel',
        body: 'Estate homes near Daniels Park open space disable monitored smoke and heat detection during renovation and never re-commission it. We restore and re-verify the monitoring signal path, which matters where structures meet grassland.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Castle Pines, Colorado?',
        answer: 'South Metro Fire Rescue Authority is the AHJ for the City of Castle Pines. South Metro’s Community Risk Reduction division issues permits, conducts on-site fire inspections, and reviews sprinkler, alarm, and underground fire-line submittals for properties inside the city, from HOA common areas to the Castle Pines Parkway retail and medical buildings.',
      },
      {
        question: 'Do you service residential 13D sprinkler systems in Castle Pines?',
        answer: 'Yes — that’s the majority of our Castle Pines work. Most homes in The Village at Castle Pines, Castle Pines Village North, and The Canyons were built with NFPA 13D residential sprinklers. We test the control valves, flow switches, antifreeze loops, and pump where present, and we handle first-year acceptance follow-up on newly delivered homes.',
      },
      {
        question: 'Our HOA manages the common-area backflow and sprinkler systems — can you handle the whole portfolio?',
        answer: 'Yes. We work directly with Castle Pines HOA boards and property managers on common-area backflow, clubhouse sprinkler and alarm systems, and irrigation fire-line testing across communities like Buffalo Ridge, The Canyons, and the Village. We track every test date, file backflow certifications with the water district, and send one consolidated report per season.',
      },
      {
        question: 'Since Castle Pines incorporated in 2008 and most buildings are new, do they still need annual inspections?',
        answer: 'Yes. A new 13D or 13R system still requires ongoing inspection, testing, and maintenance under NFPA 25 and South Metro’s adopted code — a builder’s acceptance test only covers day one. Freeze cycles at Castle Pines’ elevation, battery aging on alarm panels, and valve position over time all mean even young systems fail inspection without annual service.',
      },
      {
        question: 'Do freezing temperatures affect fire sprinkler systems in Castle Pines?',
        answer: 'They do. Castle Pines sits above 6,000 feet and sees hard winter freezes, so residential risers in unheated garages and attics, and antifreeze-loop systems, are a real freeze-damage risk. We test antifreeze concentration, check heat-trace and freeze protection, and recommend dry or antifreeze conversions where a wet system is exposed.',
      },
      {
        question: 'Are kitchen hood suppression systems required at Castle Pines restaurants and the golf club?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require automatic extinguishing systems for commercial cooking operations, covering the hood, duct, and plenum. That applies to the restaurant tenants at Castle Pines Town Center and the Castle Pines Golf Club kitchens. UL-300 wet-chemical is the current standard; older systems are usually replaced at tenant turnover or renovation.',
      },
      {
        question: 'How quickly can Red Rocks Fire Protection respond to an emergency in Castle Pines?',
        answer: 'Our office is in Centennial, a straight run down I-25 to the Castle Pines Parkway interchange, so we hold to a roughly 90-minute emergency response window inside the Denver metro — and Castle Pines is well within it. We staff a 24/7 line and dispatch the technicians who already know your property, not a call center.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Castle Pines Inspection.',
        descriptor: 'Tell us about your home, HOA portfolio, or Castle Pines Parkway tenant space and we’ll route the right NICET-certified technician — usually within a few business days, faster if it’s urgent.',
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
      title: 'Fire Protection Services in Castle Pines, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, residential 13D sprinkler and alarm testing, 24/7 monitoring, HOA backflow, and hood suppression in Castle Pines, Colorado. Locally based in Centennial, serving South Metro Fire Rescue jurisdictions. NICET-certified technicians, 90-minute metro response.',
      keywords:
        'fire protection Castle Pines CO, fire inspections Castle Pines, residential sprinkler inspection Castle Pines, 13D sprinkler testing Castle Pines, HOA backflow testing Castle Pines, fire alarm testing Castle Pines, kitchen hood suppression Castle Pines, South Metro Fire Rescue inspections',
      canonical: '/service-areas/castle-pines-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // CASTLE ROCK, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'castle-rock-co',
    city: 'Castle Rock',
    state: 'CO',
    county: 'Douglas County',
    bannerTitle: 'Fire Protection Castle Rock, CO',
    bannerSubtitle: 'CASTLE ROCK FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Castle Rock sits at the top of Douglas County where I-25 crosses Plum Creek, and its building stock has grown faster than almost anywhere on the Front Range — big-box retail at the Outlets, master-planned rooftops in The Meadows and Founders Village, and a hospital campus that all carry active life-safety systems. Red Rocks Fire Protection covers the whole town from our Centennial shop, a straight run up I-25, and every inspection we write for a Castle Rock property is formatted for Castle Rock Fire and Rescue so your corrections clear on the first review.',

    ahj: {
      name: 'Castle Rock Fire and Rescue',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 660-1066',
      website: 'https://www.crgov.com/3453/Castle-Rock-Fire-and-Rescue',
      note:
        'Castle Rock Fire and Rescue is the Authority Having Jurisdiction for Castle Rock and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 660-1066, and permitting and code information is at https://www.crgov.com/3453/Castle-Rock-Fire-and-Rescue. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Castle Rock Fire and Rescue’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'The Meadows', type: 'Master-Planned', note: 'The town’s largest master-planned community west of I-25; HOA clubhouses, pools, and retail centers drive steady backflow and monitored-alarm work.' },
      { name: 'Founders Village', type: 'Master-Planned', note: 'Established east-side master plan off Founders Parkway; aging garden apartments and clubhouse common areas needing NFPA 25 sprinkler cadences.' },
      { name: 'Outlets at Castle Rock', type: 'Retail', note: 'Large-format factory-outlet retail off I-25; big-box tenants with ESFR or high-piled storage sprinkler layouts and food-court hood suppression.' },
      { name: 'Promenade at Castle Rock', type: 'Retail', note: 'Newer power center near Milestone; grocery, restaurant, and junior-anchor tenants with wet-sprinkler and Ansul hood systems.' },
      { name: 'Historic Downtown Castle Rock', type: 'Mixed-Use', note: 'Wilcox Street and Perry Street core; older masonry storefronts and restaurants where legacy sprinkler retrofits and UL-300 hood upgrades are common.' },
      { name: 'Plum Creek', type: 'Residential', note: 'Golf-course community along the creek south of downtown; older single-family with monitored residential alarm and backflow needs.' },
      { name: 'Castlewood Ranch', type: 'Residential', note: 'East-side single-family off Ridge Road; newer NFPA 13D residential sprinkler systems and monitored smoke detection.' },
      { name: 'Crystal Valley', type: 'Master-Planned', note: 'Fast-growing master plan south of town off Crystal Valley Parkway; new construction with full life-safety commissioning.' },
      { name: 'Castle Rock Adventist Hospital campus', type: 'Commercial Corridor', note: 'Health-campus off Meadows Parkway; institutional life-safety stacks, medical-gas-adjacent suppression, and strict NFPA 99/72 inspection cadences.' },
      { name: 'Ridgegate / Meadows Parkway corridor', type: 'Commercial Corridor', note: 'Office, medical-office, and flex space along Meadows Parkway; wet and dry sprinkler systems and addressable alarm panels.' },
      { name: 'Castle Rock Business Park', type: 'Industrial', note: 'Light-industrial and warehouse off Park Street near I-25; ESFR sprinklers, fire-pump testing, and rack-storage commodity classification.' },
      { name: 'Founders Parkway retail corridor', type: 'Commercial Corridor', note: 'Grocery-anchored strips and automotive tenants; kitchen-hood suppression and sprinkler-obstruction clearances are frequent findings.' },
    ],

    neighborhoodIntro:
      'We cover every corner of Castle Rock, from the retail centers straddling I-25 to the master-planned rooftops in The Meadows and the medical campuses off Meadows Parkway. Below are the named areas and corridors our technicians visit most often.',

    buildingStock:
      'Castle Rock is one of the fastest-growing towns in Colorado, and most of its residential stock is master-planned single-family and townhome construction built from the 1990s onward — The Meadows and Crystal Valley on the west and south, Founders Village and Castlewood Ranch on the east. Commercial property clusters along I-25: the Outlets at Castle Rock and the Promenade dominate the retail picture, while Meadows Parkway carries medical-office, the Castle Rock Adventist Hospital campus, and flex space. Historic downtown along Wilcox and Perry Streets holds older masonry storefronts and restaurants that trigger sprinkler and UL-300 hood retrofits at tenant turnover. Light-industrial and warehouse space runs along Park Street and the rail line near Plum Creek, where ESFR sprinklers and fire pumps show up most.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code-driven cadence, documented in one report formatted for Castle Rock Fire and Rescue review.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25 — including the ESFR and high-piled layouts common at the Outlets and the Park Street warehouses. Main-drain tests, valve supervision, and a prioritized deficiency list included.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians, including the addressable panels in Meadows Parkway medical-office buildings.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and fire-watch protocols, with alarms routed to reach Castle Rock Fire and Rescue dispatch when a signal confirms.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for irrigation, fire-line, and domestic backflow preventers across The Meadows and Founders Village HOA common areas; certification filed with Castle Rock Water.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards — from downtown kitchens to hospital-campus mechanical rooms.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — a recurring scope at Outlets food-court and Promenade restaurant tenants and downtown Wilcox Street kitchens.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms, imaging suites, and data closets — common on the Castle Rock Adventist campus and in Meadows Parkway office buildings.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review with Castle Rock Fire and Rescue, plan-reviewer coordination, and deficiency-correction project management for HOA boards and the property managers running Castle Rock’s master-planned portfolios.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted for Castle Rock Fire and Rescue’s review process so corrections clear without a second round.',

    industriesServed: [
      'HOA & community associations',
      'Multi-family property management',
      'Retail centers and factory outlets',
      'Restaurants and food service',
      'Assisted living and healthcare',
      'Medical office and hospital campuses',
      'Light industrial and warehouse',
      'Office and flex commercial',
      'Automotive dealerships and service',
      'Hospitality',
      'Education and childcare',
      'Data centers and server rooms',
    ],

    deficienciesTitle: 'What Castle Rock Fire and Rescue flags most often on local inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Castle Rock properties. None of it is a citation from a specific building — it’s the pattern of findings our technicians document and correct most often in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads in high-piled storage',
        body: 'The Outlets big-box tenants and the Park Street warehouses run tall rack storage, and pallets, signage, or seasonal inventory routinely creep inside the clearance to ESFR deflectors. We measure clearance to the inch and write the correction scope so Castle Rock Fire and Rescue signs off fast.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Irrigation and fire-line backflow preventers across The Meadows and Founders Village HOA common areas frequently lapse on their annual test. We test by a certified cross-connection tester and file the certification with Castle Rock Water and the AHJ.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries carry a 4–5 year service life, and failed load tests are a top finding on Meadows Parkway office and medical-office panels. We track every panel’s battery age and replace before the next inspection.',
      },
      {
        title: 'Kitchen hood suppression out of date downtown',
        body: 'Pre-UL-300 wet-chemical systems still turn up in older Wilcox and Perry Street restaurants. Castle Rock Fire and Rescue flags them at tenant turnover — we inventory hood systems by hazard class and schedule UL-300 conversions ahead of lease renewal.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'Missing or broken FDC caps let debris into the check valve and can fail an inspection outright — common on the older retail strips along Founders Parkway. We carry replacements on the truck and install them on the spot.',
      },
      {
        title: 'Fire pump churn and flow-test records missing',
        body: 'The taller warehouse and hospital-campus systems rely on fire pumps that require weekly churn tests and an annual flow test. Missing or incomplete pump logs are a frequent AHJ finding — we run the flow test and rebuild the log.',
      },
      {
        title: 'Sprinkler coverage gaps after tenant build-out',
        body: 'Fast tenant turnover at the Outlets and the Promenade means new demising walls and dropped ceilings often leave sprinkler coverage gaps. We re-survey the layout against NFPA 13 spacing and document the heads that need to be added or relocated.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Castle Rock, Colorado?',
        answer: 'Castle Rock Fire and Rescue Department is the AHJ for the Town of Castle Rock. The department handles plan review and on-site inspections for sprinkler, alarm, hood, and underground fire-line work inside town limits. Confirm the department’s current permitting and inspection-scheduling line directly with Castle Rock Fire and Rescue; the number on this page reaches Red Rocks Fire Protection to schedule your testing and corrections.',
      },
      {
        question: 'Does Red Rocks Fire Protection serve Castle Rock even though your office is in Centennial?',
        answer: 'Yes. Castle Rock is a straight run down I-25 from our shop at 7076 S. Alton Way in Centennial, well inside the Denver metro area we cover with a roughly 90-minute emergency response window. Our technicians run Castle Rock routes regularly, from the Outlets and the Promenade to the master-planned communities in The Meadows and Founders Village.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Castle Rock?',
        answer: 'Per NFPA 25 and the IFC as adopted by Castle Rock Fire and Rescue, wet-pipe sprinkler systems require quarterly and annual inspections, with an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. The ESFR systems common at the Outlets and the Park Street warehouses follow the same cadence with added attention to storage-clearance surveys. We track every due date and email you 30 days ahead.',
      },
      {
        question: 'Do you inspect the big-box and outlet retail sprinkler systems at the Outlets at Castle Rock?',
        answer: 'Yes. Large-format retail and factory-outlet tenants typically run ESFR or high-piled-storage sprinkler layouts, which need clearance surveys against the actual stored commodity in addition to the standard NFPA 25 tests. We handle those plus the food-court kitchen-hood suppression under NFPA 96 and coordinate all of it on one report.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Castle Rock restaurants?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require automatic fire-extinguishing systems for commercial cooking operations, covering the hood, duct, and plenum. UL-300 wet-chemical is the current standard. Older systems in downtown Wilcox and Perry Street kitchens are grandfathered but usually need replacement at tenant turnover or major renovation.',
      },
      {
        question: 'Do you service the Castle Rock Adventist Hospital campus and medical offices?',
        answer: 'We inspect, test, and maintain fire-protection systems for healthcare and medical-office properties, including the addressable alarm panels, clean-agent suppression for imaging and server spaces, and the strict NFPA 72 cadences those occupancies require. We coordinate testing windows around clinical operations so patient-care areas stay covered.',
      },
      {
        question: 'Do you service residential sprinkler systems in Castle Rock’s master-planned communities?',
        answer: 'Yes. We inspect, test, and maintain NFPA 13D residential sprinkler systems, most common in newer construction in Crystal Valley, Castlewood Ranch, and parts of The Meadows, plus the multi-family systems in Founders Village apartment and townhome communities. We also service monitored residential alarm and smoke detection.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Castle Rock Inspection.',
        descriptor: 'Tell us about your property and we’ll route the right NICET-certified technician up I-25 — usually within a few business days, faster if it’s urgent.',
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
      title: 'Fire Protection Services in Castle Rock, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and consulting in Castle Rock, Colorado. Serving Castle Rock Fire and Rescue jurisdiction from Centennial. NICET-certified technicians, roughly 90-minute metro emergency response.',
      keywords:
        'fire protection Castle Rock CO, fire inspections Castle Rock, sprinkler inspection Castle Rock, fire alarm testing Castle Rock, backflow testing Castle Rock, kitchen hood suppression Castle Rock, fire protection company Castle Rock Colorado, Castle Rock Fire and Rescue inspections',
      canonical: '/service-areas/castle-rock-co/',
    },
  },

// ──────────────────────────────────────────────────────────────────
// CENTRAL CITY, COLORADO
// ──────────────────────────────────────────────────────────────────
{
  slug: 'central-city-co',
  city: 'Central City',
  state: 'CO',
  county: 'Gilpin County',
  bannerTitle: 'Fire Protection Central City, CO',
  bannerSubtitle: 'CENTRAL CITY FIRE PROTECTION',
  bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

  heroIntro:
    'Central City sits at roughly 8,500 feet in Gilpin County, and almost everything worth protecting here is made of 150-year-old brick and timber. The gaming floors on Main and Lawrence, the Central City Opera House, and the stone storefronts that made this the richest square mile on Earth all carry fire-protection systems that have to work in a National Historic Landmark district without tearing out the fabric that makes it one. We run scheduled inspection routes up the Central City Parkway from the metro, so your NFPA 25, NFPA 72, and dry-system testing gets done on a planned visit — not squeezed between calls.',

  ahj: {
    name: 'Central City Fire Department',
    adoptedNFPA: [
      'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
      'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
      'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
      'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
      'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
      'International Fire Code (IFC) — current adopted edition',
    ],
    nonEmergencyPhone: '(303) 582-3473',
    website: 'https://www.centralcity.colorado.gov/',
    note:
      'Central City Fire Department is the Authority Having Jurisdiction for Central City and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 582-3473, and permitting and code information is at https://www.centralcity.colorado.gov/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Central City Fire Department’s prevention staff expect, so corrections get signed off without rework.',
  },

  neighborhoods: [
    { name: 'Main Street gaming district', type: 'Mixed-Use', note: 'Historic masonry casinos and storefronts; sprinkler and alarm retrofits routed around plaster ceilings and exposed brick to satisfy both code and preservation review.' },
    { name: 'Lawrence Street', type: 'Commercial Corridor', note: 'Gaming and retail frontage below Main; standpipe and FDC access constrained by narrow 1800s lot widths and grade.' },
    { name: 'Eureka Street', type: 'Mixed-Use', note: 'Runs up to the Opera House and Teller House; assembly occupancies with concealed-space sprinkler coverage in historic timber framing.' },
    { name: 'Central City Opera House block', type: 'Mixed-Use', note: 'Historic assembly built 1878; voice evacuation, aisle egress, and heat detection installed without altering the protected interior.' },
    { name: 'Spring Street', type: 'Residential', note: 'Victorian-era hillside homes and small lodging; monitored smoke detection and freeze-protected supply lines at altitude.' },
    { name: 'Pine Street', type: 'Residential', note: 'Steep residential grade above downtown; access and hydrant spacing shaped by the original mining-camp street plat.' },
    { name: 'Nevada Street', type: 'Residential', note: 'Older frame and masonry dwellings; legacy detection layouts that benefit from monitored-alarm retrofits.' },
    { name: 'Central City Parkway corridor', type: 'Commercial Corridor', note: 'The tolled connector down to I-70 near Idaho Springs; parking structures and support buildings with dry standpipes and cold-weather system considerations.' },
    { name: 'Casino parking structures', type: 'Commercial Corridor', note: 'Multi-level decks serving the gaming floors; dry-pipe or preaction sprinklers, dry standpipes, and CO detection for enclosed levels.' },
    { name: 'Gregory Gulch / historic mine district', type: 'Industrial', note: 'The gulch where the 1859 gold strike started; scattered heritage structures and support facilities with extinguisher and suppression scopes.' },
    { name: 'Gilpin County Courthouse & civic block', type: 'Mixed-Use', note: 'Institutional and county facilities; alarm, extinguisher, and assembly-egress inspection scopes.' },
    { name: 'Black Hawk city line (Clear Creek Canyon side)', type: 'Commercial Corridor', note: 'Where Central City meets its larger casino neighbor; shared-corridor properties inspected on the same scheduled route up the canyon.' },
  ],

  neighborhoodIntro:
    'Central City is compact and vertical — a mining camp platted on hillsides, not a grid. The properties we cover range from 1800s masonry casinos and the Opera House on Eureka Street down to the parking decks along the Central City Parkway. Below are the streets and blocks our technicians work most often on a scheduled route.',

  buildingStock:
    'Central City’s building stock is unusual for the metro’s service area: a dense core of 1860s–1890s brick and stone commercial buildings, most of them contributing structures in a National Historic Landmark district, now occupied by gaming floors, lodging, and small retail. The Central City Opera House (1878) and the Teller House are historic assembly and hospitality occupancies where every device has to be placed without cutting into protected interiors. Around the core sit Victorian-era frame houses on steep lots, county civic buildings, and newer casino parking structures tied to the Central City Parkway. At roughly 8,500 feet, freeze risk drives the design: dry-pipe and preaction sprinklers, dry standpipes, and heat-traced or drained supply lines are common where wet systems would fail in an unheated historic space. The scarce square footage means retrofits get threaded through existing chases and plaster rather than opened up, so coordination with preservation review is part of nearly every project.',

  servicesOffered: [
    {
      title: 'Annual NFPA Fire Inspections',
      body: 'Sprinklers, alarms, extinguishers, backflow, and suppression across the gaming floors, the Opera House, and Main Street lodging — each system on its own code cadence, documented in one report the Central City Fire Department can approve without a return trip up the Parkway.',
    },
    {
      title: 'Fire Sprinkler & Standpipe Testing',
      body: 'Wet, dry, and preaction systems plus the dry standpipes in casino parking decks, exercised per NFPA 25. Dry systems at 8,500 feet get trip tests, low-point drains checked, and air-pressure and freeze-protection verified before winter.',
    },
    {
      title: 'Fire Alarm Testing',
      body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including heat detection routed through the timber-framed concealed spaces of historic Eureka Street assembly buildings.',
    },
    {
      title: '24/7 Monitoring',
      body: 'UL-listed central-station monitoring with signal verification and fire-watch protocols. Because dispatch runs through the Central City Fire Department and mutual-aid partners on the mountain, we set up clear alarm-verification steps so a confirmed signal moves fast and a nuisance trip does not pull crews up the canyon.',
    },
    {
      title: 'Backflow Prevention',
      body: 'Annual cross-connection control testing for fire-line and domestic backflow preventers, with certification filed to the city’s water authority — and freeze-protection checks on assemblies serving unheated historic structures.',
    },
    {
      title: 'Fire Extinguisher Service',
      body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards across gaming floors, kitchens, and the mine-district support buildings in Gregory Gulch.',
    },
    {
      title: 'Kitchen Hood Suppression',
      body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — the casino restaurants and Teller House kitchens are recurring scopes where duct routing through historic walls complicates access.',
    },
    {
      title: 'Special Hazard & Clean-Agent Suppression',
      body: 'FM-200, Novec 1230, and CO₂ systems for casino cage rooms, surveillance and server closets, and other spaces where water would do more damage than fire — designed so the historic envelope stays intact.',
    },
    {
      title: 'Life-Safety Consulting & Historic-Retrofit Coordination',
      body: 'Pre-plan review with the Central City Fire Department and the Landmark district’s preservation reviewers, so a sprinkler or alarm retrofit clears fire code without destroying 150-year-old masonry, plaster, or the Opera House interior.',
    },
  ],

  servicesIntro:
    'Every service below is run by NICET- or CSA-certified technicians on a scheduled route up the Central City Parkway, with reports written to the Central City Fire Department’s standards so corrections clear on the first review — no second trip up the mountain.',

  industriesServed: [
    'Casinos and gaming floors',
    'Historic hotels and lodging',
    'Restaurants and food service',
    'Assembly and performing arts (Opera House)',
    'Parking structures',
    'Retail and small commercial',
    'County and municipal facilities',
    'Museums and heritage sites',
    'Multi-family and residential',
    'Mine-district support facilities',
  ],

  deficienciesTitle: 'What the Central City Fire Department flags most often on historic-district inspections.',
  deficienciesIntro:
    'These are the recurring deficiency categories we see on Central City properties — most of them shaped by 1800s construction, freeze exposure at 8,500 feet, and preservation limits on how systems can be run. None of this is a citation from a specific property; it is the pattern our technicians document and correct most on scheduled visits here.',

  commonDeficiencies: [
    {
      title: 'Dry-system freeze damage and low-point water',
      body: 'At 8,500 feet, trapped condensate freezes and blocks or bursts dry-pipe sprinklers and dry standpipes. We check every low-point drain, verify air pressure and the trip-test result, and confirm heat trace on exposed runs before the cold sets in.',
    },
    {
      title: 'Sprinkler retrofits that damage historic fabric',
      body: 'Piping run through masonry and plaster without a preservation-aware layout gets flagged by both the fire department and the Landmark district. We route coverage through existing chases and concealed spaces and document the plan so both reviewers sign off once.',
    },
    {
      title: 'Assembly egress and notification gaps at the Opera House and gaming floors',
      body: 'Historic assembly spaces built long before modern voice evacuation frequently show under-covered notification or blocked egress. We map audibility and aisle egress against current NFPA 72 without altering the protected interior.',
    },
    {
      title: 'Fire alarm panel battery failures at altitude',
      body: 'Sealed lead-acid backup batteries age faster in the temperature swings of an unheated historic building. Failed load tests are a top finding here — we track each panel’s battery age and replace on the scheduled visit rather than waiting for the next trip up the Parkway.',
    },
    {
      title: 'Kitchen hood suppression access and UL-300 status',
      body: 'Casino and Teller House kitchens often have hood duct runs threaded through historic walls, making appliance-line coverage hard to verify. We inventory each system by hazard class and flag pre-UL-300 units for conversion before a renovation forces it.',
    },
    {
      title: 'Fire department connection (FDC) caps and access on narrow 1800s lots',
      body: 'Missing or damaged FDC caps let debris into the check valve, and the tight Main and Lawrence Street frontages make FDC access easy to obstruct. We carry replacement caps on the truck and confirm the connection stays clear for the department.',
    },
    {
      title: 'Extinguisher and detection coverage in mine-district and outbuildings',
      body: 'Scattered heritage and support structures in Gregory Gulch and along the gulch road are easy to miss between annual cycles. We inventory extinguishers and detection across the outbuildings so nothing falls off the inspection schedule.',
    },
  ],

  faq: [
    {
      question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Central City, Colorado?',
      answer: 'The Central City Fire Department is the AHJ for the City of Central City in Gilpin County. It issues permits, conducts on-site fire inspections, and reviews sprinkler, alarm, and suppression work — and it coordinates with the National Historic Landmark district’s preservation reviewers on alterations to historic buildings.',
    },
    {
      question: 'Central City is up in the mountains — do you actually serve it?',
      answer: 'Yes. We serve Central City on a scheduled route up the Central City Parkway from the metro, planning inspections and testing as booked visits rather than same-hour emergency runs. Because so much of the work is dry-system testing and historic-retrofit coordination that has to be planned around preservation review anyway, a scheduled visit is the right way to handle a mountain town at 8,500 feet.',
    },
    {
      question: 'How do you inspect and retrofit fire systems in 150-year-old buildings without damaging them?',
      answer: 'We route piping and devices through existing chases, concealed timber-framed spaces, and attic runs instead of opening up masonry or plaster, and we bring the layout to both the Central City Fire Department and the Landmark district reviewers before work starts. On protected interiors like the Opera House, coverage is designed so the historic surfaces are never cut into.',
    },
    {
      question: 'Why do so many Central City buildings use dry sprinkler systems?',
      answer: 'At roughly 8,500 feet, unheated historic spaces, parking decks, and attics drop well below freezing, which would freeze and rupture a wet-pipe system. Dry-pipe and preaction sprinklers plus dry standpipes keep the pipe empty until a fire opens a head. That means trip tests, low-point drains, and air-pressure and freeze-protection checks are a core part of every visit.',
    },
    {
      question: 'How often do fire sprinklers and standpipes need to be inspected in Central City?',
      answer: 'Per NFPA 25 and the IFC as adopted by the Central City Fire Department, wet systems require quarterly and annual inspections with a 5-year internal inspection, and dry systems add quarterly trip tests plus a 3-year full-flow trip test. Dry standpipes in the casino parking decks follow their own NFPA 25 schedule. We track every cadence and schedule the trip up the Parkway before each is due.',
    },
    {
      question: 'Are kitchen hood suppression systems required in Central City casino and restaurant kitchens?',
      answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require automatic extinguishing systems on commercial cooking hoods, ducts, and plenums. The casino restaurants and the Teller House kitchens are typical scopes; UL-300 wet-chemical is the current standard, and older systems threaded through historic walls usually need replacement at renovation.',
    },
    {
      question: 'Do you handle the Central City Opera House and other assembly occupancies?',
      answer: 'Yes. Historic assembly spaces like the 1878 Opera House need notification coverage, aisle egress, and detection that meet current NFPA 72 without altering the protected interior. We map audibility and egress against code and install devices in a way the fire department and preservation reviewers both approve.',
    },
    {
      question: 'How do you handle emergencies in Central City if you are based in the metro?',
      answer: 'We do not advertise a fixed metro-style response window for Central City, because it sits up Clear Creek Canyon off I-70. For emergencies, the Central City Fire Department and its mutual-aid partners respond on the mountain; our role is 24/7 monitoring with fast signal verification, fire-watch coverage when a system we service is offline, and a planned service visit as soon as the route can be scheduled.',
    },
  ],

  ctaPair: [
    {
      title: 'Schedule a Central City Inspection.',
      descriptor: 'Tell us about your property — casino floor, historic lodging, the Opera House block, or a parking deck — and we’ll route a NICET-certified technician on the next scheduled trip up the Parkway.',
      href: '/contact',
      label: 'Get in touch',
    },
    {
      title: 'See All Our Services.',
      descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, alarms, monitoring, suppression, backflow, and historic-retrofit coordination all under the same roof.',
      href: '/services',
      label: 'Browse services',
    },
  ],

  meta: {
    title: 'Fire Protection Services in Central City, CO | Red Rocks Fire Protection',
    description:
      'NFPA fire inspections, dry-system sprinkler and standpipe testing, alarm and monitoring, backflow, and kitchen-hood suppression for Central City’s historic casinos, the Opera House, and Landmark district. Scheduled routes up the Central City Parkway; NICET-certified technicians.',
    keywords:
      'fire protection Central City CO, fire inspections Central City, dry sprinkler testing Central City, fire alarm testing Central City, casino fire protection Central City, historic building fire retrofit Central City, kitchen hood suppression Central City, Central City Fire Department inspections, Gilpin County fire protection',
    canonical: '/service-areas/central-city-co/',
  },
},

  // ──────────────────────────────────────────────────────────────────
  // CHERRY HILLS VILLAGE, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'cherry-hills-village-co',
    city: 'Cherry Hills Village',
    state: 'CO',
    county: 'Arapahoe County',
    bannerTitle: 'Fire Protection Cherry Hills Village, CO',
    bannerSubtitle: 'CHERRY HILLS VILLAGE FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Cherry Hills Village runs on large-lot estates rather than strip centers, and a fire protection contractor here has to work the way the homes are built — custom, private, and set back behind gates off Quincy Avenue and Belleview. Red Rocks Fire Protection works out of Centennial, a short drive south, and we handle the systems these properties actually carry: NFPA 13D residential sprinklers in new custom builds, monitored alarm and smoke detection on additions, and backflow on private wells and estate irrigation. Every property in the Village falls under South Metro Fire Rescue Authority, and we write each report to pass South Metro on the first review.',

    ahj: {
      name: 'South Metro Fire Rescue',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 13D (Standard for the Installation of Sprinkler Systems in One- and Two-Family Dwellings) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(720) 989-2000',
      website: 'https://www.southmetro.org/',
      note:
        'South Metro Fire Rescue is the Authority Having Jurisdiction for Cherry Hills Village and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (720) 989-2000, and permitting and code information is at https://www.southmetro.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what South Metro Fire Rescue’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Old Cherry Hills', type: 'Residential', note: 'The original estate core near Quincy and University; multi-acre lots and older custom homes where alarm and 13D retrofits happen at remodel.' },
      { name: 'Cherry Hills Farm', type: 'Residential', note: 'Gated estate enclave; apparatus access and knox-box entry at the gate are recurring pre-plan items for South Metro.' },
      { name: 'Cherry Hills Park', type: 'Residential', note: 'Newer large custom builds; NFPA 13D residential sprinkler and monitored fire alarm are standard on new construction.' },
      { name: 'Buell Mansion', type: 'Residential', note: 'Guard-gated luxury development off Hampden; long private driveways and turnaround geometry matter for fire apparatus access.' },
      { name: 'The Preserve at Greenwood Village', type: 'Master-Planned', note: 'Large-lot planned enclave along the eastern edge; monitored alarm systems and estate irrigation backflow testing.' },
      { name: 'Southglenn / Charlou', type: 'Residential', note: 'Established lots near the southern boundary; older homes with legacy smoke-detection layouts that benefit from monitored retrofits.' },
      { name: 'Devonshire Heights', type: 'Residential', note: 'Wooded large lots; attic and concealed-space sprinkler coverage and detector siting are common design questions on additions.' },
      { name: 'High Line Canal corridor', type: 'Residential', note: 'Estates backing the canal trail; private well and irrigation backflow assemblies here need annual cross-connection testing.' },
      { name: 'Quincy Farm', type: 'Residential', note: 'Historic conserved acreage off Quincy; low-density with limited hydrant coverage, so on-site water and 13D storage tanks come into play.' },
      { name: 'Cherry Hills Country Club area', type: 'Residential', note: 'Homes surrounding the club along Country Club Drive; clubhouse-adjacent estates with monitored alarm and sprinkler service.' },
      { name: 'Kent Denver / Cherry Hills Village Elementary vicinity', type: 'Mixed-Use', note: 'The Village’s few institutional buildings — private school and civic facilities carry full commercial alarm and sprinkler inspection scopes.' },
      { name: 'Belleview corridor', type: 'Residential', note: 'Estate frontage along Belleview Avenue; gated drives and setback distances drive apparatus-access planning with South Metro.' },
    ],

    neighborhoodIntro:
      'Cherry Hills Village is almost entirely single-family residential on lots measured in acres, not square feet, so our work here looks different from a commercial corridor city. Below are the estate enclaves and corridors where we most often run NFPA 13D residential sprinkler service, monitored alarm testing, and private-well backflow certification.',

    buildingStock:
      'Cherry Hills Village is one of the lowest-density municipalities in the Denver metro — large custom single-family homes on multi-acre lots, many with private wells, estate irrigation systems, and long gated driveways. There is almost no commercial or industrial building stock; the handful of non-residential properties are institutional, led by Kent Denver School, Cherry Hills Country Club, the Village municipal buildings, and Cherry Hills Village Elementary. New construction and major remodels carry NFPA 13D residential sprinkler systems, monitored fire alarm and smoke detection, and cross-connection backflow assemblies tied to private wells and irrigation. Because hydrant spacing is sparse across the large lots, on-site water supply and driveway apparatus-access geometry are recurring design considerations for the fire department.',

    servicesOffered: [
      {
        title: 'NFPA 13D Residential Sprinkler Service',
        body: 'Design review, inspection, testing, and maintenance of one- and two-family dwelling sprinkler systems — the core scope on Cherry Hills Village custom builds and estate additions, including on-site tank and pump arrangements where hydrant coverage is thin.',
      },
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, and backflow on each system’s code-driven cadence, documented in a single South Metro–formatted report — for both large estates and the Village’s institutional buildings like Kent Denver.',
      },
      {
        title: 'Fire Sprinkler Testing',
        body: 'Wet and dry residential and commercial systems exercised per NFPA 25, including main-drain tests, valve supervision, and a prioritized deficiency list written the way South Metro likes to see it.',
      },
      {
        title: 'Fire Alarm & Monitored Detection Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 — including the monitored smoke and heat detection common on large Cherry Hills Village homes with detached structures.',
      },
      {
        title: '24/7 Central Station Monitoring',
        body: 'UL-listed monitoring with signal verification and direct dispatch into South Metro’s CAD when an alarm confirms — the retrofit we install most often on estates that had local-only detection.',
      },
      {
        title: 'Backflow Prevention & Cross-Connection Testing',
        body: 'Annual testing of private-well, irrigation, and fire-line backflow assemblies — the estate irrigation systems along the High Line Canal and the well-supplied properties in Old Cherry Hills both require certified annual testing.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for residential garages, workshops, and the Village’s institutional Class A through Class K hazards.',
      },
      {
        title: 'Estate Access & Pre-Plan Coordination',
        body: 'We work with owners and South Metro on gate knox-box access, driveway turnaround geometry, and address/hydrant marking so fire apparatus can actually reach homes set far back behind gates off Quincy and Belleview.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Plan-review coordination with South Metro’s Community Risk Reduction team on new custom builds and additions, plus deficiency-correction management for the Village’s school and club properties.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to South Metro Fire Rescue Authority’s preferred layout. In Cherry Hills Village that mostly means residential 13D and monitored-alarm work on large custom homes, not commercial occupancy scopes.',

    industriesServed: [
      'Large-lot residential estates',
      'Custom-home construction and additions',
      'Private schools and education',
      'Country clubs and recreation facilities',
      'Municipal and civic buildings',
      'Domestic staff and estate management firms',
      'Property and estate management',
      'Religious and community facilities',
      'Guard-gated communities and HOAs',
    ],

    deficienciesTitle: 'What South Metro Fire Rescue Authority flags most often on Cherry Hills Village properties.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Cherry Hills Village estates and institutional buildings. None of this is a citation from a specific property — it is the pattern of findings our technicians document and correct most frequently in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Blocked or unreachable fire apparatus access',
        body: 'Gated drives that don’t open for the fire department, driveways too narrow or lacking a turnaround, and unmarked addresses are the recurring Village issue. We coordinate knox-box gate access and confirm driveway geometry with South Metro before it becomes a violation.',
      },
      {
        title: 'Private-well and irrigation backflow without annual certification',
        body: 'Many Cherry Hills Village estates draw from private wells and run large irrigation systems along the High Line Canal that require certified annual cross-connection testing. Lapsed or never-tested assemblies are a top finding — we test and file the certification.',
      },
      {
        title: 'NFPA 13D residential sprinkler heads obstructed or shut off',
        body: 'Remodels, cabinetry, and finish work on large custom homes routinely obstruct residential sprinkler deflectors or leave control valves closed. We verify head clearance and confirm valves are open and supervised.',
      },
      {
        title: 'Local-only alarms with no central station monitoring',
        body: 'Older estates often have local-sounding detection that never dispatches. Given the setback and low hydrant density here, confirmed central station monitoring shortens the time to a South Metro response — we upgrade local-only systems to monitored.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries have a 4–5 year service life, and detached-structure panels on large properties get overlooked. Failed load tests are a common finding; we track each panel’s battery age and replace proactively.',
      },
      {
        title: 'On-site water supply and tank/pump deficiencies on 13D systems',
        body: 'Where hydrant coverage is sparse, residential sprinkler systems rely on stored water and a pump. We flag undersized tanks, failed pump tests, and missing supervision so the 13D system actually delivers its design flow.',
      },
      {
        title: 'Expired or missing extinguishers in outbuildings',
        body: 'Detached garages, guest houses, and workshops on estate lots frequently have expired or absent extinguishers. We inventory every structure on the property and bring the whole site up to NFPA 10.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Cherry Hills Village, Colorado?',
        answer: 'South Metro Fire Rescue Authority is the AHJ for Cherry Hills Village. South Metro’s Community Risk Reduction division issues permits, conducts on-site fire inspections, and reviews sprinkler, alarm, and underground fire-line submittals for properties inside the Village. Confirm South Metro’s own permitting line directly with the authority; the number on this page reaches Red Rocks Fire Protection.',
      },
      {
        question: 'Do you install and service NFPA 13D residential sprinklers on Cherry Hills Village homes?',
        answer: 'Yes — it is the majority of our work in the Village. We handle NFPA 13D design review, inspection, testing, and maintenance on new custom builds and additions in Cherry Hills Park, Buell Mansion, and the Old Cherry Hills estates, including on-site tank and pump setups where hydrant coverage is limited across the large lots.',
      },
      {
        question: 'My estate is behind a gate — how does the fire department get in?',
        answer: 'That is a real planning item in Cherry Hills Village, where many homes sit far back behind gated drives off Quincy and Belleview. We coordinate a knox-box or approved gate override with South Metro, confirm the driveway has a usable apparatus turnaround, and check address and hydrant marking so crews reach the house without delay.',
      },
      {
        question: 'Does my private well and irrigation system need backflow testing?',
        answer: 'Yes. Private-well and estate irrigation systems — including the properties backing the High Line Canal — carry backflow prevention assemblies that require certified annual cross-connection testing to keep the potable supply protected. We test the assembly and file the certification for you.',
      },
      {
        question: 'Do you service the institutional buildings in Cherry Hills Village, like Kent Denver?',
        answer: 'Yes. The Village has few commercial properties, but its institutional buildings — private schools such as Kent Denver, Cherry Hills Country Club, and the municipal buildings — carry full commercial sprinkler, alarm, and extinguisher inspection scopes under NFPA 25, 72, and 10, all documented in South Metro–formatted reports.',
      },
      {
        question: 'Why should I add central station monitoring to my home alarm?',
        answer: 'Because Cherry Hills Village homes sit on large setbacks with sparse hydrant coverage, a confirmed alarm that dispatches South Metro immediately buys critical time over a local-only siren nobody hears. We upgrade local-only detection to UL-listed central station monitoring that verifies the signal and dispatches directly into South Metro’s CAD.',
      },
      {
        question: 'How often do residential sprinkler systems need inspection?',
        answer: 'Under NFPA 13D as adopted by South Metro Fire Rescue, residential systems need periodic testing of the control valve, flow, and any pump and tank arrangement, with owner checks between professional visits. We schedule the professional inspection on a set cadence and email a reminder 30 days before it is due so nothing lapses.',
      },
      {
        question: 'How quickly can you respond to an emergency in Cherry Hills Village?',
        answer: 'Our office is in Centennial, a short drive south, so our emergency response window for fire-protection emergencies in Cherry Hills Village is typically under 90 minutes and usually faster. We staff a 24/7 emergency line and send the same technicians who already know your property and its gate access, not a call center.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Cherry Hills Village Inspection.',
        descriptor: 'Tell us about your estate — 13D sprinklers, monitored alarm, or well backflow — and we’ll route the right NICET-certified technician, usually within a few business days and faster if it’s urgent.',
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
      title: 'Fire Protection Services in Cherry Hills Village, CO | Red Rocks Fire Protection',
      description:
        'NFPA 13D residential sprinkler service, monitored fire alarm testing, private-well backflow, and estate fire protection in Cherry Hills Village, Colorado. Serving South Metro Fire Rescue jurisdictions with NICET-certified technicians and a 90-minute metro emergency response.',
      keywords:
        'fire protection Cherry Hills Village CO, residential sprinkler inspection Cherry Hills Village, NFPA 13D Cherry Hills Village, fire alarm monitoring Cherry Hills Village, backflow testing Cherry Hills Village, estate fire protection Colorado, South Metro Fire Rescue inspections, Kent Denver fire inspection',
      canonical: '/service-areas/cherry-hills-village-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // COMMERCE CITY, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'commerce-city-co',
    city: 'Commerce City',
    state: 'CO',
    county: 'Adams County',
    bannerTitle: 'Fire Protection Commerce City, CO',
    bannerSubtitle: 'COMMERCE CITY FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Commerce City runs on freight and fuel: the Suncor refinery on the west side, the warehouse rows along the Sand Creek corridor, and the distribution buildings going up daily off E-470 and I-70 near DIA. Those are high-hazard occupancies with ESFR sprinkler design, fire pumps, and hazmat storage that South Adams County Fire Department inspects hard. Red Rocks Fire Protection works this jurisdiction from our Centennial shop, and we write every inspection to a report South Adams County will accept on the first pass.',

    ahj: {
      name: 'South Adams County Fire Department',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 288-0835',
      website: 'https://www.sacfd.org/',
      note:
        'Fire-code authority in Commerce City is address-dependent: most of the city is served by South Adams County Fire Department at (303) 288-0835 (sacfd.org), while portions on the northeast side fall under Brighton Fire Rescue District at (303) 659-4101 (brightonfire.org). We confirm which AHJ covers a given property before scheduling, and build every deficiency list to match that authority’s format so corrections clear without rework.',
    },

    neighborhoods: [
      { name: 'Reunion', type: 'Master-Planned', note: 'North-side master-planned community off E-470 and Tower Road; NFPA 13D residential sprinkler and monitored alarm work in newer builds, plus HOA clubhouse and pool-house systems.' },
      { name: 'The Villages at Buffalo Run', type: 'Residential', note: 'Golf-course residential near Buffalo Run; residential sprinkler retrofits and monitored smoke/CO detection at remodel.' },
      { name: 'Sand Creek industrial corridor', type: 'Industrial', note: 'Dense warehouse and manufacturing along Sand Creek and Brighton Blvd; ESFR sprinkler, fire pump testing, and rack-storage commodity classification are the recurring scopes.' },
      { name: 'Suncor refinery district', type: 'Industrial', note: 'Refinery and bulk-fuel operations off Brighton Blvd; foam suppression, deluge systems, and special-hazard detection under heavy hazmat scrutiny.' },
      { name: 'DIA logistics belt (E-470 / Peña)', type: 'Industrial', note: 'New distribution and cold-storage buildings near the airport off E-470; large ESFR arrays, fire pumps, and high-pile storage permits.' },
      { name: 'Prairie Gateway', type: 'Mixed-Use', note: 'Redevelopment around Dick’s Sporting Goods Park and the RTD 72nd Ave station; office, hotel, and stadium-adjacent assembly life-safety.' },
      { name: 'Dick’s Sporting Goods Park', type: 'Commercial Corridor', note: 'Stadium and event complex; assembly-occupancy fire alarm, standpipe testing, and mass-notification coverage.' },
      { name: 'Derby / Historic Commerce City', type: 'Commercial Corridor', note: 'Older commercial strip along E. 72nd Ave and Highway 2; legacy wet-sprinkler systems and pre-UL-300 kitchen hoods that flag at turnover.' },
      { name: 'Belle Creek', type: 'Master-Planned', note: 'Planned community north of 96th Ave; townhome and multi-family systems plus community-building alarm and suppression.' },
      { name: 'Northern Range Village', type: 'Residential', note: 'Growing single-family area east of Reunion; monitored residential alarms and backflow testing on new irrigation lines.' },
      { name: 'Vasquez Blvd / I-270 corridor', type: 'Commercial Corridor', note: 'Auto, salvage, and light-industrial frontage along Vasquez and I-270; extinguisher service, paint-booth suppression, and dry-system trip testing.' },
      { name: 'Rocky Mountain Arsenal edge (72nd/Quebec)', type: 'Industrial', note: 'Light-industrial and flex space bordering the wildlife refuge; warehouse sprinkler ITM and fire alarm panel service.' },
    ],

    neighborhoodIntro:
      'Commerce City splits sharply between the industrial west — refinery, rail, and warehouse along Sand Creek and Brighton Blvd — and the master-planned north around Reunion and Belle Creek. Between them sit the DIA-adjacent distribution belt off E-470 and the stadium redevelopment at Prairie Gateway. These are the areas and corridors our technicians cover most often.',

    buildingStock:
      'Commerce City’s building stock is weighted toward heavy industrial and logistics: the Suncor refinery and bulk-fuel operations on the west side, the warehouse and manufacturing density of the Sand Creek corridor, and the newer high-cube distribution and cold-storage buildings rising near DIA off E-470 and I-70. These are the occupancies that drive ESFR sprinkler design, in-rack systems, fire pumps, and high-pile storage permits. North of 96th Avenue the picture flips to master-planned residential — Reunion, Belle Creek, and Northern Range Village — built largely in the last two decades with NFPA 13D residential sprinklers and monitored detection. Older commercial and mixed-use stock clusters along the Derby district and E. 72nd Avenue, where legacy wet systems and pre-UL-300 kitchen hoods surface at tenant turnover.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression across the whole Sand Creek warehouse footprint — each system on its own code cadence, documented in one South Adams County–formatted report.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25 — including the ESFR arrays and fire pumps that protect the E-470 distribution buildings. Main-drain tests, valve supervision, and a prioritized deficiency list included.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — from warehouse aspirating detection to stadium assembly systems at Prairie Gateway.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification, fire-watch protocols, and direct dispatch into South Adams County when an alarm confirms — sized for around-the-clock logistics and refinery-adjacent operations.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection control testing for fire-line, irrigation, and domestic backflow preventers across the industrial corridor and the Reunion HOA lines; certification filed with the water utility.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K — plus the Class B and dry-chemical units common in the Vasquez Blvd auto and fuel-handling trades.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — common scope at Derby-district restaurants and the concession kitchens around Dick’s Sporting Goods Park.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, CO₂, and foam/deluge systems for server rooms, refinery process areas, and flammable-liquid storage — the special-hazard work Commerce City’s industrial west side demands.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'High-pile storage permit support, commodity classification, ESFR design review, and deficiency-correction project management coordinated with South Adams County’s fire prevention office for warehouse and property-management portfolios.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to South Adams County Fire Department’s preferred layout — built for the high-pile and ESFR-protected buildings that dominate this jurisdiction.',

    industriesServed: [
      'Warehouse and distribution',
      'Cold storage and food logistics',
      'Refinery and bulk-fuel operations',
      'Manufacturing and fabrication',
      'Rail and freight terminals',
      'Automotive, salvage, and fleet',
      'HOA & master-planned communities',
      'Multi-family property management',
      'Assembly and event venues',
      'Restaurants and food service',
      'Light industrial and flex space',
      'Data centers and server rooms',
    ],

    deficienciesTitle: 'What South Adams County Fire Department flags most often on Commerce City inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Commerce City properties, weighted toward the warehouse and industrial stock. None of this is a citation from a specific property — it’s the pattern of findings our technicians document and correct most frequently in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Storage stacked above the ESFR design height',
        body: 'The signature deficiency in Sand Creek and E-470 warehouses: pallets racked or piled higher than the ESFR system was designed to protect, or aisle clearances lost to overflow. We verify storage height and commodity class against the system’s hydraulic design and document what has to move.',
      },
      {
        title: 'Fire pump churn and flow-test failures',
        body: 'The large distribution and refinery-adjacent buildings depend on fire pumps that require annual flow testing and weekly/monthly churn runs. Missed runs, failed no-flow readings, and controller alarms are top findings — we run the full NFPA 25 pump test and log it.',
      },
      {
        title: 'Obstructed or painted-over sprinkler heads',
        body: 'Warehouse racking, new tenant build-outs, and repainting in older Derby-district commercial space leave heads blocked or coated. We measure clearance to the inch and flag any head that has been painted, corroded, or loaded.',
      },
      {
        title: 'Missing or expired hydraulic nameplates',
        body: 'ESFR and in-rack systems in the industrial corridor frequently have missing or unreadable hydraulic placards after remodels. South Adams County requires a verified nameplate for every system — we recalculate and re-placard in-house.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries carry a 4–5 year service life and fail load tests across the warehouse and stadium-adjacent panels. We track every panel’s battery age and replace before the annual test flags it.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Fire-line and irrigation backflow preventers on both the industrial west side and the Reunion HOA network need annual testing by a certified cross-connection tester. We test, tag, and file the certification with the water utility and the AHJ.',
      },
      {
        title: 'Special-hazard and foam systems past inspection interval',
        body: 'CO₂, clean-agent, and foam/deluge systems protecting process areas and flammable-liquid storage get overlooked between annual visits. We inventory every special-hazard system by agent and hazard class and put it on a tracked schedule.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Commerce City, Colorado?',
        answer: 'South Adams County Fire Department is the AHJ for Commerce City. Its fire prevention office issues permits, conducts on-site inspections, and reviews sprinkler, alarm, high-pile storage, and underground fire-line submittals for properties inside the city. Confirm the current permitting and scheduling line directly with South Adams County.',
      },
      {
        question: 'Does Red Rocks Fire Protection cover Commerce City if your office is in Centennial?',
        answer: 'Yes. Our shop is at 7076 S. Alton Way in Centennial, and Commerce City is inside our Denver metro service area. Most of our technicians live and work across the metro, so we hold a roughly 90-minute emergency response window into Commerce City — including the Sand Creek corridor, the E-470 distribution belt, and Reunion.',
      },
      {
        question: 'Do you handle ESFR sprinkler testing for Commerce City warehouses?',
        answer: 'Yes — it’s most of what we do in the Sand Creek and DIA-adjacent distribution buildings. We run the full NFPA 25 scope for ESFR systems: fire pump flow tests, main-drain tests, valve supervision, and verification that stored commodity class and height still match the system’s hydraulic design. We flag any storage that has crept above the protected height.',
      },
      {
        question: 'Can you support high-pile storage permits with South Adams County?',
        answer: 'Yes. High-pile combustible storage over the code threshold triggers additional sprinkler design, aisle, and smoke-removal requirements. We help with commodity classification, ESFR design review, and the deficiency corrections South Adams County requires before a high-pile permit is signed off.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Commerce City?',
        answer: 'Per NFPA 25 and the IFC as adopted by South Adams County, wet-pipe systems require quarterly and annual inspections with an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test, and fire pumps require annual flow testing. We track every cadence and email you 30 days before a test comes due.',
      },
      {
        question: 'Do you service the special-hazard and foam systems on the industrial west side?',
        answer: 'Yes. Refinery-adjacent and flammable-liquid occupancies use foam, deluge, CO₂, and clean-agent suppression that fall outside standard sprinkler ITM. We inspect and test FM-200, Novec 1230, CO₂, and foam/deluge systems and keep each one on a tracked interval so nothing lapses between annual visits.',
      },
      {
        question: 'Do you inspect residential sprinklers in Reunion and Belle Creek?',
        answer: 'Yes. The north-side master-planned communities — Reunion, Belle Creek, and Northern Range Village — carry NFPA 13D residential sprinkler systems and monitored smoke/CO detection in newer builds. We inspect, test, and maintain those systems, plus the alarm and suppression systems in the HOA clubhouses and pool houses.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Commerce City Inspection.',
        descriptor: 'Tell us about your warehouse, refinery-adjacent site, or Reunion property and we’ll route the right NICET-certified technician — usually within a few business days, faster if it’s urgent.',
        href: '/contact',
        label: 'Get in touch',
      },
      {
        title: 'See All Our Services.',
        descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, alarms, monitoring, special-hazard suppression, backflow, and consulting all under one roof.',
        href: '/services',
        label: 'Browse services',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Commerce City, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, ESFR sprinkler and fire pump testing, alarm testing, 24/7 monitoring, backflow, and special-hazard suppression in Commerce City, Colorado. Built for warehouse, refinery-adjacent, and high-pile storage occupancies under South Adams County Fire Department. NICET-certified technicians, 90-minute metro response.',
      keywords:
        'fire protection Commerce City CO, ESFR sprinkler inspection Commerce City, warehouse fire inspection Commerce City, high-pile storage permit Commerce City, fire pump testing Commerce City, fire alarm testing Commerce City, backflow testing Commerce City, special hazard suppression Commerce City, South Adams County Fire Department inspections',
      canonical: '/service-areas/commerce-city-co/',
    },
  },

// ──────────────────────────────────────────────────────────────────
// CONIFER, COLORADO
// ──────────────────────────────────────────────────────────────────
{
  slug: 'conifer-co',
  city: 'Conifer',
  state: 'CO',
  county: 'Jefferson County',
  bannerTitle: 'Fire Protection Conifer, CO',
  bannerSubtitle: 'CONIFER FIRE PROTECTION',
  bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

  heroIntro:
    'Conifer sits at about 8,300 feet along the US-285 corridor, an unincorporated Jefferson County mountain community where most properties draw their fire-flow from a well and a cistern rather than a hydrant grid. Elk Creek Fire Protection District is the authority that inspects and permits fire-protection systems here, from the commercial pads at Conifer Marketplace down to the large-acreage homes on wooded lots toward Aspen Park and Pine Junction. We build our route up 285 on a scheduled cadence so mountain properties get the same NFPA-driven inspection and reporting that a metro building would, without waiting on a call center that has never driven the grade.',

  ahj: {
    name: 'Elk Creek Fire Protection District',
    adoptedNFPA: [
      'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
      'NFPA 13D (Standard for the Installation of Sprinkler Systems in One- and Two-Family Dwellings) — current adopted edition',
      'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
      'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
      'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
      'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
      'International Fire Code (IFC) with Wildland-Urban Interface provisions — current adopted edition',
    ],
    nonEmergencyPhone: '(303) 816-9385',
    website: 'https://elkcreekfire.org/',
    note:
      'Elk Creek Fire Protection District is the Authority Having Jurisdiction for Conifer and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 816-9385, and permitting and code information is at https://elkcreekfire.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Elk Creek Fire Protection District’s prevention staff expect, so corrections get signed off without rework.',
  },

  neighborhoods: [
    { name: 'Conifer Marketplace', type: 'Retail', note: 'The main grocery-anchored commercial pad on US-285; kitchen-hood suppression, tenant sprinkler coverage, and backflow on the shared fire line are recurring scopes.' },
    { name: 'Aspen Park', type: 'Commercial Corridor', note: 'Small-format retail, office, and restaurant strip along 285; Ansul hood systems and wet-sprinkler tenant spaces on well-and-cistern supply.' },
    { name: 'Pine Junction', type: 'Mixed-Use', note: 'US-285 / CO-126 junction with fuel, convenience, and light commercial; extinguisher and dry-system work on unheated storage buildings.' },
    { name: 'Kings Valley', type: 'Residential', note: 'Large-acreage wooded lots with heavy wildland interface; NFPA 13D residential sprinkler and monitored alarm work sized to cistern fire-flow.' },
    { name: 'Meadows of Conifer (Conifer Meadows)', type: 'Residential', note: 'Established mountain subdivision; propane-fed homes where suppression and detection are coordinated around gas-appliance hazards.' },
    { name: 'Homewood Park', type: 'Residential', note: 'Steep forested parcels off 285; seasonal and part-time homes where dry systems and freeze protection matter in unheated wings.' },
    { name: 'Meridian Hills', type: 'Residential', note: 'Custom homes on well/cistern supply; residential sprinkler retrofits at remodel and monitored smoke/heat detection.' },
    { name: 'Yellow Hill / Shadow Mountain', type: 'Residential', note: 'High-elevation lots with long driveways; alarm monitoring and 13D systems where fire-district access time drives the design.' },
    { name: 'Elk Creek Highlands', type: 'Residential', note: 'Named for the district; wooded acreage with propane storage and defensible-space concerns feeding into detection scope.' },
    { name: 'Barkley Ranch', type: 'Master-Planned', note: 'Ranch-style acreage community; outbuildings and barns often need dry-pipe or antifreeze-loop systems that freeze without attention.' },
    { name: 'US-285 Corridor (Conifer core)', type: 'Commercial Corridor', note: 'The commercial spine through town — offices, medical, and service businesses that carry full sprinkler, alarm, and extinguisher inspection cadences.' },
    { name: 'Reynolds Park / South Turkey Creek', type: 'Residential', note: 'Rural interface parcels near open space; extinguisher service and monitored detection for homes far from a hydrant.' },
  ],

  neighborhoodIntro:
    'Conifer runs along US-285 as a string of small commercial pads and wide residential acreage rather than a dense downtown. Below are the named areas and corridors we cover on our scheduled mountain route, from the commercial cluster at Conifer Marketplace and Aspen Park to the large-lot subdivisions spread through the wildland interface.',

  buildingStock:
    'Conifer’s building stock is mostly large-acreage single-family homes on forested lots, many built as full-time residences and a meaningful share held as seasonal or part-time mountain property. Heating and cooking run on propane rather than natural gas, and domestic and fire-protection water usually comes from a private well feeding a storage cistern or tank, so fire-flow is a fixed, calculable number rather than a municipal main. Commercial building is concentrated in a few US-285 nodes — Conifer Marketplace, Aspen Park, and Pine Junction — with grocery, restaurant, medical, office, and service tenants. Detached garages, barns, shops, and storage buildings are common and frequently unheated, which is why dry-pipe and antifreeze-loop sprinkler systems show up far more here than in the metro. Elevation and long stretches of unoccupied seasonal use make freeze risk and defensible-space wildland exposure the two facts that shape almost every system on the mountain.',

  servicesOffered: [
    {
      title: 'Annual NFPA Fire Inspections',
      body: 'Sprinklers, alarms, extinguishers, backflow, and suppression on their own code-driven cadence, documented in a single Elk Creek–formatted report — with cistern or tank fire-flow recorded for every water-based system.',
    },
    {
      title: 'Fire Sprinkler & Standpipe Testing',
      body: 'Wet, dry, preaction, and antifreeze-loop systems exercised per NFPA 25, with main-drain tests and freeze-protection checks on the unheated garages, shops, and barns that are standard on Conifer acreage.',
    },
    {
      title: 'Fire Alarm Testing',
      body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — coordinated on our scheduled 285 route so a mountain property is not left waiting on a one-off trip.',
    },
    {
      title: '24/7 Monitoring',
      body: 'UL-listed central-station monitoring with signal verification and direct dispatch into Elk Creek Fire Protection District — the coverage that matters most on long-driveway lots where response time up the grade is measured in minutes, not blocks.',
    },
    {
      title: 'Backflow Prevention',
      body: 'Annual cross-connection testing on fire-line and domestic backflow preventers, including the assemblies that protect a shared commercial fire line at Conifer Marketplace and the well-fed systems on residential cisterns.',
    },
    {
      title: 'Fire Extinguisher Service',
      body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K — a practical fit for propane-served homes, shops, and the restaurants along Aspen Park.',
    },
    {
      title: 'Kitchen Hood Suppression',
      body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — the recurring scope for the restaurant and grocery-deli tenants in the Conifer Marketplace and Aspen Park commercial pads.',
    },
    {
      title: 'Dry Systems & Freeze Protection',
      body: 'Dry-pipe conversions, antifreeze-loop maintenance, and low-point drainage for unheated barns, detached garages, and seasonal wings — the elevation-and-freeze problem that catches part-time Conifer owners at the first hard cold snap.',
    },
    {
      title: 'Life-Safety Consulting & Code Navigation',
      body: 'Pre-plan review with Elk Creek Fire Protection District, water-supply and fire-flow calculations for well/cistern sites, and deficiency-correction management for wildland-interface properties and small-commercial owners on 285.',
    },
  ],

  servicesIntro:
    'Every service below is run by NICET- or CSA-certified technicians on a scheduled mountain route up US-285, with reports formatted to Elk Creek Fire Protection District’s layout — and with the cistern fire-flow, propane, and freeze-protection realities of a Conifer property built into the scope rather than treated as an exception.',

  industriesServed: [
    'Large-acreage mountain residential',
    'Seasonal and part-time homes',
    'HOA & mountain community associations',
    'Grocery and neighborhood retail',
    'Restaurants and food service',
    'Small office and medical',
    'Service and trades businesses',
    'Storage, barns, and outbuildings',
    'Assisted living and care facilities',
    'Religious and community facilities',
    'Schools and childcare',
    'Automotive and fuel service',
  ],

  deficienciesTitle: 'What Elk Creek Fire Protection District flags most often on Conifer inspections.',
  deficienciesIntro:
    'These are the recurring deficiency categories we see across Conifer and Aspen Park properties. None of this is a citation from a specific property — it is the pattern of findings our technicians document and correct most often on this mountain jurisdiction, where stored water, propane, and freeze exposure change what fails first.',

  commonDeficiencies: [
    {
      title: 'Frozen or under-drained dry systems',
      body: 'Unheated barns, detached garages, and seasonal wings at 8,000-plus feet freeze fast when a low point holds water. Failed trip tests and ice-blocked lines are the top water-based finding here — we drain low points, verify air pressure, and confirm antifreeze-loop concentration before the first hard freeze.',
    },
    {
      title: 'Cistern fire-flow not documented or under-sized',
      body: 'Homes and small commercial on well-and-cistern supply need a verified available fire-flow, not an assumption. We measure and record tank draw and refill so the NFPA 13/13D system on file actually matches the water the property can deliver.',
    },
    {
      title: 'Propane-appliance and extinguisher gaps',
      body: 'Propane-fed heat, cooking, and shop equipment change the hazard mix, and portable extinguishers are frequently missing, wrong-class, or long past their annual tag on Conifer acreage. We inventory by hazard class and tag or recharge on-site.',
    },
    {
      title: 'Fire alarm panel battery failures',
      body: 'Sealed lead-acid backup batteries carry a 4–5 year life, and cold mountain equipment rooms shorten it. Failed load tests are a common finding — we track every panel’s battery age and replace before the annual test rather than after a failure.',
    },
    {
      title: 'Kitchen hood suppression out of date',
      body: 'The restaurant and grocery-deli tenants at Conifer Marketplace and Aspen Park sometimes still run pre-UL-300 wet-chemical systems. Elk Creek flags them for replacement at tenant turnover — we inventory hood systems by hazard class and flag UL-300 conversions ahead of a lease renewal.',
    },
    {
      title: 'Fire department connection and access obstructions',
      body: 'Long driveways, snow storage, and missing or damaged FDC caps slow the district’s crews and can fail an inspection outright. We install replacement caps on the spot and note access and turnaround issues that affect how fast Elk Creek can reach the building.',
    },
    {
      title: 'Backflow preventers without annual certification',
      body: 'Fire-line and domestic backflow assemblies on shared 285 commercial pads and well-fed residential systems require annual testing by a certified cross-connection tester. We file the certification and keep the district’s copy current.',
    },
  ],

  faq: [
    {
      question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Conifer, Colorado?',
      answer: 'Elk Creek Fire Protection District is the AHJ for the Conifer and Aspen Park area of unincorporated Jefferson County. Elk Creek conducts on-site fire inspections and issues permits for commercial, assembly, and applicable residential fire-protection work along the US-285 corridor. Because Conifer is unincorporated, there is no separate city fire department — the protection district is the authority you file with.',
    },
    {
      question: 'Conifer is a mountain community — do you actually drive up there for inspections?',
      answer: 'Yes. We run a scheduled route up US-285 rather than treating Conifer as a one-off trip, so a mountain property gets the same NFPA inspection cadence and reporting a metro building would. When you book, we slot you onto the next planned visit to the corridor, which keeps travel from inflating the cost of a single test on a remote lot.',
    },
    {
      question: 'How does fire-flow work if my property is on a well and cistern instead of a hydrant?',
      answer: 'Most Conifer properties store their fire-protection water in a cistern or tank fed by a private well, so available fire-flow is a fixed, calculable number rather than whatever a municipal main can push. We measure tank draw and refill and document that fire-flow as part of every water-based system report, and we size or verify NFPA 13 and 13D systems against the water the property can actually deliver.',
    },
    {
      question: 'Why do so many buildings up here need dry systems?',
      answer: 'At roughly 8,300 feet, unheated garages, barns, shops, and seasonal wings freeze quickly, and a wet-pipe sprinkler line in an unheated space will burst. Dry-pipe systems and antifreeze loops keep those areas protected without standing water to freeze. We convert, maintain, and freeze-check them — including draining low points before winter, which is where most cold-weather failures start.',
    },
    {
      question: 'My cabin is only used part of the year — what should I worry about?',
      answer: 'Seasonal and part-time homes carry two risks the metro rarely sees: freeze damage in unoccupied heated-then-unheated periods, and a fire that goes undetected while nobody is on-site. Monitored alarm and smoke/heat detection with central-station dispatch to Elk Creek covers the second, and dry-system or antifreeze-loop protection plus verified freeze protection covers the first. We can schedule inspections around the seasons you occupy the property.',
    },
    {
      question: 'Are kitchen hood suppression systems required in Conifer restaurants?',
      answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require automatic fire-extinguishing systems for commercial cooking operations, covering the hood, duct, and plenum. UL-300 wet-chemical is the current standard; older systems are grandfathered but typically need replacement at tenant turnover or major renovation. This is the most common suppression scope at the restaurant and grocery-deli tenants in Conifer Marketplace and Aspen Park.',
    },
    {
      question: 'Do you service residential sprinkler systems on large mountain lots?',
      answer: 'Yes. We inspect, test, and maintain NFPA 13D residential sprinkler systems on Conifer acreage — most commonly in newer custom homes and at remodel in areas like Kings Valley, Meridian Hills, and Barkley Ranch. Because these systems run off a cistern rather than a hydrant, we verify the design against measured tank fire-flow, and we handle monitored residential alarm and detection on the same visit.',
    },
    {
      question: 'How is fire protection different in the wildland-urban interface here?',
      answer: 'Conifer sits in a heavy wildland-urban interface, and the fire history of the Front Range foothills is a live concern for owners and the district. Interior fire protection — sprinklers, detection, and suppression — is one layer; it pairs with defensible space and access that the district reviews. We build detection and monitoring scope around long driveways and forested exposure, and we note access and turnaround conditions that affect how fast Elk Creek can reach the building.',
    },
  ],

  ctaPair: [
    {
      title: 'Get on the Conifer Route.',
      descriptor: 'Tell us about your mountain property or 285 commercial space and we’ll slot you onto the next scheduled visit up the corridor — with the right NICET-certified technician for a well/cistern or dry-system site.',
      href: '/contact',
      label: 'Get in touch',
    },
    {
      title: 'See All Our Services.',
      descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, alarms, monitoring, suppression, backflow, and dry-system freeze protection all live under the same roof.',
      href: '/services',
      label: 'Browse services',
    },
  ],

  meta: {
    title: 'Fire Protection Services in Conifer, CO | Red Rocks Fire Protection',
    description:
      'NFPA fire inspections, sprinkler and alarm testing, dry-system freeze protection, 24/7 monitoring, backflow, and suppression in Conifer, Colorado. Scheduled mountain route up US-285, serving Elk Creek Fire Protection District. NICET-certified technicians.',
    keywords:
      'fire protection Conifer CO, fire inspections Conifer, sprinkler inspection Conifer, fire alarm testing Conifer, dry system freeze protection Conifer, cistern fire flow Conifer, kitchen hood suppression Aspen Park, Elk Creek Fire Protection District inspections, wildland interface fire protection Conifer Colorado',
    canonical: '/service-areas/conifer-co/',
  },
},

// ──────────────────────────────────────────────────────────────────
// DENVER TECH CENTER, COLORADO
// ──────────────────────────────────────────────────────────────────
{
  slug: 'denver-tech-center-co',
  city: 'Denver Tech Center',
  state: 'CO',
  county: 'Arapahoe & Denver Counties (Greenwood Village)',
  bannerTitle: 'Fire Protection Denver Tech Center, CO',
  bannerSubtitle: 'DTC FIRE PROTECTION',
  bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

  heroIntro:
    'The Denver Tech Center is a stack of Class-A high-rise office towers along the I-25 spine between Belleview and County Line, and every one of them carries a full life-safety package: standpipes riser to roof, electric or diesel fire pumps in the basement, voice evacuation tied to a firefighter’s command panel, and clean-agent bottles guarding the data floors. Red Rocks Fire Protection runs its office ten minutes south in Centennial, so we inspect and test those systems on the cadence NFPA 25 and NFPA 72 demand and hand you a report the fire marshal signs off without a second visit. Most of the DTC sits inside Greenwood Village and answers to South Metro Fire Rescue Authority, but the district straddles the Denver line near Belleview Station, so we confirm jurisdiction building by building before we file.',

  ahj: {
    name: 'South Metro Fire Rescue',
    adoptedNFPA: [
      'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
      'NFPA 14 (Standard for the Installation of Standpipe and Hose Systems) — current adopted edition',
      'NFPA 20 (Standard for the Installation of Stationary Fire Pumps) — current adopted edition',
      'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
      'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
      'NFPA 2001 (Standard on Clean Agent Fire Extinguishing Systems) — current adopted edition',
      'International Fire Code (IFC) — current adopted edition',
    ],
    nonEmergencyPhone: '(720) 989-2000',
    website: 'https://www.southmetro.org/',
    note:
      'The Denver Tech Center is not an incorporated municipality; most of it sits in Greenwood Village and Centennial and is served by South Metro Fire Rescue at (720) 989-2000 (southmetro.org). Because the DTC straddles jurisdictional lines, we verify the AHJ by address before scheduling and format every report to the authority that inspects the building.',
  },

  neighborhoods: [
    { name: 'Greenwood Plaza', type: 'Commercial Corridor', note: 'The original DTC tower cluster off Greenwood Plaza Boulevard; multi-tenant Class-A office with combined standpipe/sprinkler risers and annual fire-pump flow tests.' },
    { name: 'Belleview Station', type: 'Mixed-Use', note: 'Transit-oriented high-rise development at the Belleview light-rail stop; residential towers over ground-floor retail with the DTC straddling the Denver / Greenwood Village line right here.' },
    { name: 'Landmark', type: 'Mixed-Use', note: 'Twin residential towers plus office and retail near Belleview and I-25; high-rise voice evacuation and firefighter command panels on every annual.' },
    { name: 'Fiddler’s Green', type: 'Commercial Corridor', note: 'Office towers around the Fiddler’s Green amphitheater and DTC Boulevard; large-diameter fire pumps and pressure-reducing valves on the upper standpipe zones.' },
    { name: 'Orchard Road Corridor', type: 'Commercial Corridor', note: 'Office towers served by the Orchard light-rail station; clean-agent suppression in trading floors and telecom rooms is routine scope.' },
    { name: 'County Line Station Area', type: 'Commercial Corridor', note: 'Southern edge of the DTC at the County Line light-rail stop; flex office and data-heavy tenants near the Arapahoe / Douglas line.' },
    { name: 'DTC Boulevard Spine', type: 'Commercial Corridor', note: 'The internal loop road threading the tower core; concentrated high-rise office with FDCs facing the boulevard for engine-company access.' },
    { name: 'Ulster / Yosemite Office Park', type: 'Commercial Corridor', note: 'Mid-rise and low-rise office along Ulster Street and Yosemite; wet-pipe systems, alarm panels, and backflow assemblies on the fire line.' },
    { name: 'Belleview Corporate Plaza', type: 'Commercial Corridor', note: 'Office complex along East Belleview Avenue; standpipe hose-valve testing and stairwell pressurization checks on the taller stock.' },
    { name: 'Meridian Edge', type: 'Mixed-Use', note: 'The southern DTC-adjacent office and flex fringe reaching toward Meridian; data centers and server halls driving clean-agent and VESDA scope.' },
    { name: 'Denver Place at Belleview', type: 'Mixed-Use', note: 'Newer residential and hospitality mid-rise around the Belleview transit node; combined systems with retail-tenant kitchen-hood suppression at grade.' },
    { name: 'Panorama Corporate Center', type: 'Commercial Corridor', note: 'Office campus off DTC Boulevard; multiple buildings sharing a looped fire main, each with its own FDC and riser room.' },
  ],

  neighborhoodIntro:
    'The Denver Tech Center reads as a set of office sub-districts strung along the I-25 light-rail line rather than a residential city. From the original Greenwood Plaza towers to the newer Belleview Station high-rises, the buildings share the same life-safety DNA — standpipes, fire pumps, voice evac, and clean-agent — and the same split jurisdiction along the Denver / Greenwood Village line. Below are the sub-districts our high-rise crews cover most often.',

  buildingStock:
    'The DTC is Colorado’s densest concentration of Class-A high-rise office outside downtown Denver, built in waves from the 1970s Greenwood Plaza towers through the 2000s Fiddler’s Green expansion and the recent Belleview Station and Landmark residential high-rises. The defining property type is the mid- to high-rise tower with a combined standpipe and sprinkler system, an electric or diesel fire pump feeding the upper zones through pressure-reducing valves, a firefighter’s voice-evacuation command panel in the lobby, and clean-agent or CO₂ suppression protecting data floors, trading rooms, and telecom closets. Ground floors carry retail and restaurant tenants that add kitchen-hood suppression and BDA/DAS radio-coverage scope. Newer transit-oriented parcels at Belleview Station and along the Orchard, Belleview, and County Line light-rail stations mix residential towers over structured parking, which adds garage dry-standpipe and stairwell-pressurization testing to the annual.',

  servicesOffered: [
    {
      title: 'Annual NFPA Fire Inspections',
      body: 'Standpipes, sprinklers, fire pumps, voice-evac, extinguishers, backflow, and clean-agent — every system on its own code cadence, rolled into one report the DTC building engineer and the fire marshal both accept.',
    },
    {
      title: 'Standpipe & Fire Pump Testing',
      body: 'NFPA 14 standpipe hose-valve and NFPA 20 fire-pump testing for DTC high-rises: annual pump flow tests at churn, 100%, and 150% of rated capacity, PRV checks on the upper zones, and five-year hydrostatic standpipe testing.',
    },
    {
      title: 'Fire Sprinkler System Testing',
      body: 'Wet, dry, and preaction systems in Greenwood Plaza and Fiddler’s Green towers exercised per NFPA 25 — main-drain tests on every riser, valve supervision, and a prioritized deficiency list keyed to each floor.',
    },
    {
      title: 'Fire Alarm & Voice / Mass-Notification Testing',
      body: 'Firefighter command panels, speaker-strobe circuits, and phased voice-evacuation logic tested to NFPA 72 by NICET-certified technicians — the recurring scope on every DTC high-rise annual.',
    },
    {
      title: 'Clean-Agent Suppression for Data & Server Rooms',
      body: 'FM-200, Novec 1230, and CO₂ systems protecting DTC data floors, trading rooms, and telecom closets — weight and pressure checks, room integrity (fan) testing, and detection-to-discharge sequence verification per NFPA 2001.',
    },
    {
      title: '24/7 Monitoring',
      body: 'UL-listed central-station monitoring with signal verification and direct dispatch into South Metro’s CAD when an alarm confirms — with the jurisdiction flag noted so the right authority is notified for towers near the Denver line.',
    },
    {
      title: 'Backflow Prevention',
      body: 'Annual cross-connection testing on the fire-line and domestic backflow assemblies feeding DTC towers, with certification filed to the serving water utility for each address.',
    },
    {
      title: 'Fire Extinguisher & Kitchen Hood Service',
      body: 'Class A through K extinguisher service across office floors and parking levels, plus UL-300 and Ansul R-102 kitchen-hood suppression for the ground-floor restaurant tenants at Belleview Station and Greenwood Plaza.',
    },
    {
      title: 'Life-Safety Consulting & Jurisdiction Navigation',
      body: 'Pre-plan review, plan-reviewer coordination, and deficiency-correction management for DTC property managers — including confirming whether a tower answers to South Metro Fire Rescue or Denver Fire before permits are filed.',
    },
  ],

  servicesIntro:
    'Every service below is run by NICET- or CSA-certified technicians who work high-rise stock all week — pump rooms, riser closets, and command panels — with reports formatted so the DTC building engineer and the fire marshal both sign off on the first pass.',

  industriesServed: [
    'Class-A high-rise office',
    'Data centers and server rooms',
    'Financial and trading floors',
    'Multi-family high-rise residential',
    'Property management and REIT portfolios',
    'Ground-floor retail and restaurants',
    'Hospitality and conference space',
    'Telecom and colocation facilities',
    'Corporate campuses',
    'Structured and below-grade parking',
    'Coworking and flex office',
    'Healthcare and outpatient office',
  ],

  deficienciesTitle: 'What the fire marshal flags most often on Denver Tech Center high-rise inspections.',
  deficienciesIntro:
    'These are the recurring deficiency categories we document across DTC towers. None of this is a citation from a specific building — it’s the pattern of findings our high-rise crews correct most often in the Greenwood Village / DTC jurisdiction.',

  commonDeficiencies: [
    {
      title: 'Fire pump not flow-tested at full capacity',
      body: 'DTC high-rises lean on their fire pumps to push water up the standpipe zones, but annual tests are often skipped at the 150%-of-rated-flow point because it means opening the test header. We run the full churn / 100% / 150% curve and chart it against the pump nameplate so the report holds up.',
    },
    {
      title: 'Standpipe pressure-reducing valves out of adjustment',
      body: 'PRVs on the upper zones of tall DTC towers drift out of setting over time, leaving hose outlets either under-pressured for the fire department or over-pressured against NFPA 14 limits. We flow-test each PRV and re-set it to the design residual.',
    },
    {
      title: 'Voice-evacuation zones not commissioned after tenant build-out',
      body: 'Class-A floor renovations in Greenwood Plaza and Fiddler’s Green routinely add or move speaker circuits without re-commissioning the phased voice-evac logic. We verify every zone and message against the firefighter command panel and re-commission with South Metro sign-off.',
    },
    {
      title: 'Clean-agent bottles low on weight or overdue for room integrity testing',
      body: 'Data-floor FM-200 and Novec 1230 bottles lose charge and DTC server rooms get repartitioned, so the room no longer holds agent long enough to work. We weigh and pressure-check every bottle and run the fan integrity test after any room change.',
    },
    {
      title: 'Firefighter command panel trouble signals ignored',
      body: 'Lobby command panels in DTC towers frequently sit in a trouble or supervisory state — a failed speaker circuit, a disabled zone, a dead backup battery — that nobody cleared. We resolve every active signal and document the panel returned to normal.',
    },
    {
      title: 'Fire department connection (FDC) caps missing or FDC blocked',
      body: 'FDCs along DTC Boulevard get landscaped over, parked in front of, or lose their caps, letting debris foul the check valve. We restore clearance, replace caps on the spot, and confirm the FDC feeds the correct standpipe zone.',
    },
    {
      title: 'Garage dry-standpipe and stairwell pressurization untested',
      body: 'Belleview Station and Landmark residential towers add below-grade parking and pressurized exit stairs that get left off the annual scope. We hydrostatically test the dry standpipes and verify stair-pressurization fan operation against the alarm interface.',
    },
  ],

  faq: [
    {
      question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in the Denver Tech Center?',
      answer: 'It depends on the address. Most of the DTC sits inside Greenwood Village, which is served by South Metro Fire Rescue Authority — that covers the tower core around Belleview, Orchard, and DTC Boulevard. But the district straddles the Denver city line near Belleview Station, and parcels on the Denver side answer to the Denver Fire Department. We confirm which authority holds your building before we file any high-rise test report.',
    },
    {
      question: 'Do you inspect fire pumps and standpipes in DTC high-rises?',
      answer: 'Yes — it’s our core high-rise scope. We run NFPA 20 fire-pump flow tests at churn, 100%, and 150% of rated capacity, NFPA 14 standpipe hose-valve and pressure-reducing-valve testing, and the five-year hydrostatic standpipe test. Every DTC tower with more than a few floors depends on the pump to push water up the standpipe zones, so this is the test the fire marshal reads first.',
    },
    {
      question: 'Can you service clean-agent suppression in DTC data centers and server rooms?',
      answer: 'Yes. We service FM-200, Novec 1230, and CO₂ systems protecting DTC data floors, trading rooms, and telecom closets — bottle weight and pressure checks, detection-to-discharge sequence verification, and room integrity (fan) testing to confirm the space still holds agent long enough after any repartition. This is routine work in the Orchard-corridor and Meridian-edge buildings.',
    },
    {
      question: 'How often does voice / mass-notification need to be tested in a DTC office tower?',
      answer: 'Per NFPA 72 as adopted by South Metro Fire Rescue, the fire alarm and voice-evacuation system requires an annual functional test — every speaker circuit, strobe, and phased-evac message verified against the firefighter command panel. Tenant build-outs in Greenwood Plaza and Fiddler’s Green frequently disable zones, so we re-commission and get South Metro sign-off as part of the annual.',
    },
    {
      question: 'How quickly can Red Rocks Fire Protection respond to a DTC emergency?',
      answer: 'Our office is in Centennial, about ten minutes south of the DTC on I-25, so our emergency response window for the Denver Tech Center is typically under 90 minutes — usually faster. We staff a 24/7 line and dispatch technicians who already know your pump room and riser layout, not a call center.',
    },
    {
      question: 'Are the ground-floor restaurants at Belleview Station on your inspection scope?',
      answer: 'Yes. The transit-oriented development at Belleview Station and the retail base of the Greenwood Plaza towers carry restaurant tenants that need NFPA 96 kitchen-hood suppression — UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged. We fold that into the same visit as the building’s standpipe and alarm testing so the property manager gets one report.',
    },
    {
      question: 'Why does the jurisdiction matter so much for DTC buildings specifically?',
      answer: 'Because the Denver Tech Center is one of the few Colorado business districts that straddles a city line — Greenwood Village to the south and east, Denver to the north near Belleview Station. South Metro Fire Rescue and Denver Fire have different permit portals and plan reviewers, so filing a high-rise standpipe or clean-agent report with the wrong authority means a rejected submittal and a second inspection. We confirm the jurisdiction for each address up front to avoid that.',
    },
  ],

  ctaPair: [
    {
      title: 'Schedule a DTC High-Rise Inspection.',
      descriptor: 'Tell us your tower and which systems are due — pump, standpipe, voice-evac, clean-agent — and we’ll route a NICET-certified high-rise technician, usually within a few business days.',
      href: '/contact',
      label: 'Get in touch',
    },
    {
      title: 'See All Our Services.',
      descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — standpipes, pumps, alarms, voice-evac, clean-agent, monitoring, and backflow all under one roof.',
      href: '/services',
      label: 'Browse services',
    },
  ],

  meta: {
    title: 'Fire Protection Services in Denver Tech Center, CO | Red Rocks Fire Protection',
    description:
      'High-rise fire protection for the Denver Tech Center: standpipe and fire-pump testing, NFPA 72 voice / mass-notification, clean-agent suppression for data centers, sprinklers, backflow, and 24/7 monitoring. Serving South Metro Fire Rescue and the Greenwood Village portion of the DTC. NICET-certified technicians, 90-minute metro response.',
    keywords:
      'fire protection Denver Tech Center, DTC fire inspection, standpipe testing DTC, fire pump testing Denver Tech Center, clean agent suppression data center DTC, voice evacuation testing high-rise Denver, Greenwood Village fire protection, South Metro Fire Rescue high-rise inspection, Belleview Station fire protection',
    canonical: '/service-areas/denver-tech-center-co/',
  },
},

  // ──────────────────────────────────────────────────────────────────
  // EDGEWATER, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'edgewater-co',
    city: 'Edgewater',
    state: 'CO',
    county: 'Jefferson County',
    bannerTitle: 'Fire Protection Edgewater, CO',
    bannerSubtitle: 'EDGEWATER FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Edgewater packs a full city into roughly one square mile on the west shore of Sloan’s Lake, and its commercial footprint punches well above its size — a food hall, a growing 20th and 25th Avenue mixed-use corridor, and small-lot housing pressed tight against Denver’s border. West Metro Fire Rescue is the Authority Having Jurisdiction here, and every kitchen hood, sprinkler riser, and alarm panel we inspect in Edgewater is documented to a report West Metro will accept without a second trip. Red Rocks Fire Protection runs out of Centennial, and Edgewater sits inside the Denver metro window we cover every day.',

    ahj: {
      name: 'West Metro Fire Rescue',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 989-4307',
      website: 'https://www.westmetrofire.org/',
      note:
        'West Metro Fire Rescue is the Authority Having Jurisdiction for Edgewater and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 989-4307, and permitting and code information is at https://www.westmetrofire.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what West Metro Fire Rescue’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Edgewater Public Market', type: 'Mixed-Use', note: 'Food hall on 20th Ave with a dozen-plus vendor kitchens under one roof — a concentration of UL-300 hood suppression and Class K extinguishers on a single inspection cadence.' },
      { name: '20th Avenue Corridor', type: 'Commercial Corridor', note: 'The city’s main commercial spine; restaurants, taprooms, and ground-floor retail where kitchen-hood and sprinkler-obstruction findings recur.' },
      { name: '25th Avenue Corridor', type: 'Mixed-Use', note: 'New mixed-use redevelopment with residential over retail; full life-safety stacks — sprinklers, alarm, and monitored notification in the same building.' },
      { name: 'Sloan’s Lake (east edge)', type: 'Mixed-Use', note: 'Lakefront-adjacent mid-rise and townhome development on the city’s eastern boundary; residential sprinkler and monitored-alarm scopes in newer construction.' },
      { name: 'Gray Street / Depew Street blocks', type: 'Residential', note: 'Dense small-lot single-family and duplex on narrow streets; monitored smoke and carbon-monoxide detection at remodel.' },
      { name: 'Benton Street area', type: 'Residential', note: 'Older bungalows and infill scrapes-and-rebuilds; legacy smoke-detection layouts that benefit from monitored upgrades.' },
      { name: 'Depew Street commercial', type: 'Retail', note: 'Small storefront retail and service businesses; portable-extinguisher servicing and small wet-sprinkler coverage.' },
      { name: 'Edgewater Civic Center / City Hall', type: 'Commercial Corridor', note: 'Municipal and community buildings near 20th Ave; alarm-panel testing, notification-appliance coverage, and extinguisher maintenance.' },
      { name: 'West 26th Avenue', type: 'Residential', note: 'Residential blocks along the northern edge; single-family and small multi-family with monitored alarm retrofits.' },
      { name: 'Sheridan Boulevard frontage', type: 'Commercial Corridor', note: 'Auto-oriented commercial along the city’s eastern arterial; sprinklered retail and service tenants sharing the Denver border.' },
      { name: 'Harlan Street edge', type: 'Mixed-Use', note: 'Western boundary blocks transitioning to mixed-use; small-footprint tenants with kitchen and sprinkler scopes.' },
      { name: 'Chase Street / infill townhomes', type: 'Residential', note: 'Newer attached townhome clusters replacing single lots; NFPA 13R and 13D residential sprinkler and monitored alarm at completion.' },
    ],

    neighborhoodIntro:
      'Edgewater fits its entire commercial and residential mix into about one square mile, so the work runs shoulder to shoulder — a food-hall kitchen line, a 25th Avenue mixed-use riser, and a small-lot remodel can all sit within a few blocks. Below are the corridors and neighborhoods our technicians cover most in the city.',

    buildingStock:
      'Edgewater’s residential stock is dense and small-lot: older bungalows and duplexes on the Gray, Depew, and Benton Street grid, increasingly interspersed with scrape-and-rebuild single-family and attached townhome infill. Commercial property is compact but active, concentrated along the 20th and 25th Avenue corridors and the Sheridan Boulevard frontage, with the Edgewater Public Market food hall standing out as a single building carrying more kitchen-hood suppression and Class K exposure than the rest of the city combined. The 25th Avenue redevelopment and the Sloan’s Lake east edge are adding residential-over-retail mid-rise with full life-safety stacks — sprinklers, alarm, and monitored notification — while the older housing grid drives monitored-detection retrofits at remodel. Because the city is one square mile, a single property manager’s portfolio here often spans a food-hall tenant, a corridor storefront, and a residential building within walking distance.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression across Edgewater’s tight commercial grid — each system on its own code-driven cadence, documented in a single West Metro–formatted report.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, and preaction systems in 25th Avenue mixed-use buildings and Sheridan frontage retail exercised per NFPA 25. Includes main-drain tests, valve supervision, and a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — the same stack that recurs in Edgewater’s residential-over-retail redevelopment.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification and fire-watch protocols, with alarms dispatched into West Metro Fire Rescue when a signal confirms.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection control testing for fire-line and domestic backflow preventers in Edgewater’s commercial and multi-family buildings; certification filed with the water utility.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K — the Class K load is heavy at the Edgewater Public Market kitchen lines.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — the single largest concentration in Edgewater is the Public Market food hall, where a dozen-plus vendor hoods sit under one roof.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms and equipment closets in the newer 25th Avenue and Sloan’s Lake edge buildings that carry back-of-house tech space.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan coordination with West Metro Fire Rescue, plan-reviewer coordination for the 20th and 25th Avenue redevelopment, and deficiency-correction project management for food-hall and small-portfolio owners.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to what West Metro Fire Rescue inspectors expect — so a food-hall or corridor-storefront correction clears without a repeat visit.',

    industriesServed: [
      'Restaurants and food service',
      'Food halls and shared commercial kitchens',
      'Taprooms and breweries',
      'Mixed-use residential over retail',
      'Multi-family property management',
      'Small-storefront retail',
      'Office and service commercial',
      'HOA & townhome associations',
      'Municipal and community facilities',
      'Automotive and service businesses',
      'Fitness and personal-service tenants',
      'Data closets and server rooms',
    ],

    deficienciesTitle: 'What West Metro Fire Rescue flags most often on Edgewater inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Edgewater properties. None of this is a citation from a specific address — it’s the pattern of findings our technicians document and correct most in this jurisdiction, where a dense food-hall and corridor tenant mix drives the numbers.',

    commonDeficiencies: [
      {
        title: 'Kitchen hood suppression crowded or out of date',
        body: 'Shared-kitchen food halls like the Edgewater Public Market pack vendor lines close together, and nozzle aim, appliance changes under the hood, and lapsed UL-300 tags are the most common findings. We inventory every hood by vendor and hazard class and flag conversions before West Metro does.',
      },
      {
        title: 'Class K extinguisher spacing and travel distance',
        body: 'A dense vendor kitchen row can leave Class K extinguishers too far from a cooking appliance to meet NFPA 10 travel distance. We map placement per vendor stall so no cook line is short.',
      },
      {
        title: 'Obstructed sprinkler heads in tight tenant build-outs',
        body: 'Small corridor storefronts on 20th and 25th Avenue reconfigure fast, and new partitions, shelving, or ductwork end up too close to sprinkler deflectors. We measure clearance to the inch and document the correction scope.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries on alarm panels run a 4–5 year service life and fail load tests as they age. Across Edgewater’s mixed-use buildings we track every panel’s battery age and replace before the inspection catches it.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Fire-line and domestic backflow preventers require annual testing by a certified cross-connection tester. We file the certification with the water utility and keep the record West Metro asks for on file.',
      },
      {
        title: 'Notification coverage lost after residential-over-retail build-out',
        body: 'The 25th Avenue redevelopment stacks apartments over ground-floor retail, and tenant work frequently disables or covers notification appliances without re-commissioning. We verify audibility and visibility per NFPA 72 and re-commission with West Metro sign-off.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'On the compact Sheridan and 20th Avenue commercial frontage, missing or broken FDC caps let debris into the check valve and can fail an inspection outright. We carry replacements on the truck and install them on the spot.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Edgewater, Colorado?',
        answer: 'West Metro Fire Rescue is the AHJ for the City of Edgewater. West Metro handles on-site fire inspections and reviews sprinkler, alarm, and suppression submittals for properties across the city’s roughly one-square-mile footprint. The phone number on our site reaches Red Rocks Fire Protection directly, so confirm West Metro’s own permitting and inspection-scheduling line with the district before you file.',
      },
      {
        question: 'Do you inspect kitchen hood suppression at the Edgewater Public Market?',
        answer: 'Yes. A food hall like the Edgewater Public Market concentrates a dozen or more vendor cooking lines under one roof, which means a stack of UL-300 wet-chemical hood systems and Class K extinguishers on a shared inspection cadence. We inventory each hood by vendor and hazard class, test and tag per NFPA 96 and 17A, and keep the whole building on one schedule so nothing lapses between vendor turnovers.',
      },
      {
        question: 'How quickly can Red Rocks Fire Protection respond to an emergency in Edgewater?',
        answer: 'Edgewater sits inside the Denver metro, so our emergency response window for fire-protection emergencies here is typically around 90 minutes — often faster. We staff a 24/7 line and dispatch the same technicians who know your property, whether it’s a food-hall tenant on 20th Avenue or a mixed-use building near Sloan’s Lake.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Edgewater?',
        answer: 'Under NFPA 25 and the IFC as adopted by West Metro Fire Rescue, wet-pipe systems require quarterly and annual inspections, with an internal inspection every 5 years. Dry-pipe and preaction systems add trip-test requirements. We track every cadence for every system we service in Edgewater and email you 30 days before a test comes due.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Edgewater restaurants and taprooms?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require an automatic fire-extinguishing system for commercial cooking operations — the hood, duct, and plenum. UL-300 wet-chemical is the current standard. Older systems may be grandfathered but typically need replacement at tenant turnover or renovation, which happens often along the 20th and 25th Avenue corridors.',
      },
      {
        question: 'Do you service residential sprinkler systems in Edgewater’s new townhomes and mixed-use buildings?',
        answer: 'Yes. We inspect, test, and maintain NFPA 13R systems in the residential-over-retail redevelopment along 25th Avenue and 13D residential sprinklers in newer attached townhomes on the small-lot infill blocks. We also handle monitored alarm systems and monitored smoke and carbon-monoxide detection in the older bungalow-and-duplex housing that dominates the Gray, Depew, and Benton Street grid.',
      },
      {
        question: 'Can one vendor cover a whole Edgewater portfolio — a food-hall tenant, a storefront, and a residential building?',
        answer: 'Yes, and in a one-square-mile city that is usually the point. A single owner or property manager in Edgewater often holds a food-hall kitchen stall, a corridor storefront, and a small residential building within a few blocks of each other. We run sprinklers, alarms, monitoring, suppression, backflow, and extinguishers under one contract, so the whole footprint stays on a single set of due dates and one West Metro-ready report set.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule an Edgewater Inspection.',
        descriptor: 'Tell us about your property — food-hall stall, corridor storefront, or mixed-use building — and we’ll route the right NICET-certified technician, usually within a few business days and faster if it’s urgent.',
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
      title: 'Fire Protection Services in Edgewater, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, kitchen hood suppression, 24/7 monitoring, backflow, and consulting in Edgewater, Colorado. Serving West Metro Fire Rescue jurisdiction, including the Edgewater Public Market and 20th/25th Avenue corridors. NICET-certified technicians, roughly 90-minute metro emergency response.',
      keywords:
        'fire protection Edgewater CO, fire inspections Edgewater, kitchen hood suppression Edgewater, Edgewater Public Market fire suppression, sprinkler inspection Edgewater, fire alarm testing Edgewater, backflow testing Edgewater, West Metro Fire Rescue inspections, fire protection company Edgewater Colorado',
      canonical: '/service-areas/edgewater-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // ELIZABETH, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'elizabeth-co',
    city: 'Elizabeth',
    state: 'CO',
    county: 'Elbert County',
    bannerTitle: 'Fire Protection Elizabeth, CO',
    bannerSubtitle: 'ELIZABETH FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Elizabeth sits out past the eastern edge of the metro in Elbert County, where the subdivisions give way to grassland, ranch acreage, and a Main Street commercial core along CO-86. Getting a certified fire-protection technician this far out usually means a call center booking a stranger who has never seen your building. We run Elizabeth on a scheduled route instead — the same NICET-certified techs who service the metro plan their Elbert County stops together, so a barn dry-pipe system near Running Creek and a Main Street storefront get inspected on the same trip, documented for the Elizabeth Fire Protection District on the first pass.',

    ahj: {
      name: 'Elizabeth Fire Protection District',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 646-3800',
      website: 'https://www.elizabethfire.com/',
      note:
        'Elizabeth Fire Protection District is the Authority Having Jurisdiction for Elizabeth and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 646-3800, and permitting and code information is at https://www.elizabethfire.com/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Elizabeth Fire Protection District’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Historic Main Street (CO-86)', type: 'Commercial Corridor', note: 'Older masonry and wood-frame storefronts along the CO-86 core; legacy wiring, limited sprinkler coverage, and extinguisher-only protection are common in the oldest buildings.' },
      { name: 'Downtown Elizabeth commercial core', type: 'Mixed-Use', note: 'Small retail, cafés, and offices with residential above; kitchen-hood suppression and shared-wall alarm coordination are recurring scopes.' },
      { name: 'Elbert County Fairgrounds', type: 'Commercial Corridor', note: 'Event barns, exhibition halls, and livestock structures; large unheated spans that call for dry-pipe sprinklers and clear extinguisher placement during events.' },
      { name: 'Running Creek corridor', type: 'Residential', note: 'Homes and small acreage along the creek drainage; well-fed domestic water and rural alarm monitoring over cellular rather than landline.' },
      { name: 'Gold Creek Valley', type: 'Master-Planned', note: 'Newer large-lot subdivision on the edge of town; NFPA 13D residential sprinklers and monitored alarms on well systems.' },
      { name: 'Sun Country / Ponderosa Park', type: 'Residential', note: 'Wooded large-lot rural residential in the grassland-timber interface; defensible-space awareness and propane-tank clearances matter here.' },
      { name: 'Spring Valley Ranch area', type: 'Residential', note: 'Emerging large residential development on former ranchland; new construction sprinkler and alarm commissioning as homes come online.' },
      { name: 'Independence at Elizabeth', type: 'Master-Planned', note: 'Planned community with denser lots; residential sprinkler retrofits and community-clubhouse life-safety systems.' },
      { name: 'CO-86 East / County Road 13 agricultural belt', type: 'Industrial', note: 'Working farms and ranches with equipment barns, hay storage, and propane; dry-pipe systems for unheated structures and combustible-storage clearances.' },
      { name: 'Casey Jones Park / civic core', type: 'Mixed-Use', note: 'Town park, library, and municipal buildings; assembly-occupancy alarm and extinguisher coverage plus event-day loading.' },
      { name: 'Elizabeth School District campuses', type: 'Commercial Corridor', note: 'K-12 buildings requiring full alarm, sprinkler, and emergency-notification testing on the school calendar.' },
      { name: 'CO-86 / County Road 17 ranch acreage', type: 'Industrial', note: 'Outlying ranch parcels with well and propane; ag-structure protection, propane-appliance hazards, and long-driveway access for service.' },
    ],

    neighborhoodIntro:
      'Elizabeth is a small town wrapped in Elbert County ranch and grassland, so the property mix jumps from Main Street storefronts to fairground event barns to working farms on well and propane. Below are the areas and corridors our technicians plan into each scheduled Elbert County route.',

    buildingStock:
      'Elizabeth’s built environment splits three ways. The historic core along CO-86 (Main Street) is older masonry and wood-frame commercial — storefronts, cafés, and offices, many with limited or extinguisher-only fire protection and legacy wiring that shapes any alarm retrofit. Residential ranges from in-town lots to large-acreage rural homes in subdivisions like Gold Creek Valley, Sun Country, and the newer Spring Valley Ranch and Independence developments, most on private wells and propane rather than municipal water and natural gas. The third piece is agricultural: equipment barns, hay and feed storage, livestock structures, and the Elbert County Fairgrounds event halls. Those unheated ag and event structures are why dry-pipe sprinkler systems, not wet-pipe, are the norm out here — a wet system would freeze in an unheated barn through an Elbert County winter.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression across a single scheduled Elbert County visit, documented in one report formatted for the Elizabeth Fire Protection District.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet and dry-pipe systems exercised per NFPA 25, including the dry-pipe trip tests that unheated fairground barns and ag structures around Elizabeth depend on, plus main-drain tests and a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, and panels tested to NFPA 72 — with rural properties usually verified on cellular or radio communicators rather than the copper landlines many Elbert County sites no longer have.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring over cellular and IP paths for properties outside reliable landline range, with signal verification and direct dispatch coordination for the Elizabeth Fire Protection District.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Cross-connection control testing for fire-line and irrigation backflow preventers, including well-fed and cistern-supplied rural systems, with certification filed to the serving water authority.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, and twelve-year hydrostatic testing for Main Street storefronts, plus the Class B and Class K coverage that propane, fuel storage, and commercial kitchens around Elizabeth require.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A for Main Street cafés, restaurants, and fairground concession operations.',
      },
      {
        title: 'Special Hazard & Ag/Propane Fire Protection',
        body: 'Guidance and protection for propane-appliance hazards, fuel and hay storage, and combustible dust in barns and shops — the special-hazard exposures that define rural Elbert County properties rather than metro server rooms.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review, new-construction commissioning for the Spring Valley Ranch and Independence build-outs, and deficiency-correction coordination with the Elizabeth Fire Protection District so remote properties are not left waiting on a second inspection trip.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians on a planned Elbert County route, with reports formatted to the Elizabeth Fire Protection District’s layout — so a property this far out clears without a costly return visit.',

    industriesServed: [
      'Agriculture and ranching',
      'Main Street retail and small commercial',
      'Restaurants and cafés',
      'Fairgrounds and event venues',
      'Rural residential and large-acreage homes',
      'Master-planned communities and HOAs',
      'Schools and education',
      'Municipal and civic facilities',
      'Propane and fuel storage operations',
      'Equipment and vehicle storage / shops',
      'Assembly and community facilities',
      'Faith-based and community organizations',
    ],

    deficienciesTitle: 'What we flag most often on Elizabeth and Elbert County inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories our technicians document across Elizabeth’s Main Street, its subdivisions, and the surrounding ranch acreage. None of this is a citation against any specific property — it’s the pattern of findings we correct most often on rural Elbert County routes.',

    commonDeficiencies: [
      {
        title: 'Dry-pipe systems tripping late or holding air poorly',
        body: 'Unheated barns and fairground structures rely on dry-pipe valves, and those valves fail differently than wet systems: slow trip times, low air pressure, and clogged priming lines. We run the trip test, log the delivery time, and correct the air-maintenance side so the system actually delivers water when it should.',
      },
      {
        title: 'Extinguisher-only protection on older Main Street buildings',
        body: 'Many historic CO-86 storefronts were never sprinklered and rely entirely on portable extinguishers. We verify the extinguishers are the right class and travel distance for the occupancy, tag them, and flag where a change of use or renovation triggers a sprinkler or alarm requirement.',
      },
      {
        title: 'Propane and fuel-storage clearances',
        body: 'Rural properties store propane, gasoline, and diesel near shops, barns, and homes. We check tank clearances, extinguisher placement for Class B fuel fires, and separation from ignition sources — the exposure that matters most on Elbert County acreage.',
      },
      {
        title: 'Alarm communicators still wired for a landline that no longer exists',
        body: 'A lot of rural Elizabeth properties dropped copper phone service. Fire alarm panels still dialing a dead landline will not report to the central station. We convert monitoring to cellular or IP communicators and verify the signal path end to end.',
      },
      {
        title: 'Wildland-grassland interface exposure and defensible space',
        body: 'The grassland and timber around Elizabeth put many structures in a wildfire-interface zone. We flag combustible storage against buildings, blocked access for apparatus on long rural driveways, and hydrant or draft-source distance so a structure fire in dry-grass season is defensible.',
      },
      {
        title: 'Well and cistern water supply not verified for fire flow',
        body: 'Properties on private wells or cisterns often assume domestic supply covers fire protection. We verify available flow and pressure for any water-based system and document the gap where a tank, cistern, or booster is needed to make a sprinkler system reliable.',
      },
      {
        title: 'Kitchen hood systems overdue at Main Street and fairground kitchens',
        body: 'Cafés along CO-86 and seasonal fairground concession kitchens can go long stretches between service. We inventory each hood system by hazard class, test and tag it to NFPA 96, and flag pre-UL-300 systems for replacement.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Elizabeth, Colorado?',
        answer: 'The Elizabeth Fire Protection District is the AHJ for Elizabeth and the surrounding area in Elbert County. The District handles fire-code enforcement, and permitting or plan review for sprinkler and alarm work should be confirmed directly with the District’s office. Red Rocks Fire Protection performs the inspection and testing work and formats every report to the District’s requirements.',
      },
      {
        question: 'Elizabeth is well outside the metro — will Red Rocks Fire Protection actually come out there?',
        answer: 'Yes. Elizabeth is farther out than our metro service area, so instead of a hard 90-minute response promise we run Elbert County on a scheduled route. We batch nearby stops — a Main Street storefront, a Gold Creek Valley home, a barn out on County Road 13 — into planned visits, which keeps the trip efficient and your cost down. Tell us your timing and we’ll fit you into the next Elizabeth-area route.',
      },
      {
        question: 'Why do barns and fairground buildings around Elizabeth use dry-pipe sprinklers instead of wet-pipe?',
        answer: 'Wet-pipe sprinkler systems keep water in the pipes at all times, which freezes and bursts in an unheated structure through an Elbert County winter. Dry-pipe systems hold pressurized air in the pipes and only fill with water when a head opens, so they suit unheated ag barns, equipment sheds, and the fairground event halls. They need a specific trip test under NFPA 25 that wet systems don’t, and that test is a core part of what we do on rural inspections.',
      },
      {
        question: 'How does fire alarm monitoring work on a rural property without a landline?',
        answer: 'Older panels dialed out over a copper phone line, and most rural Elizabeth properties have dropped that service. We convert monitoring to cellular or IP communicators that report to a UL-listed central station over the wireless network, then verify the full signal path so the station and the Elizabeth Fire Protection District actually receive an alarm.',
      },
      {
        question: 'Do you handle propane and agricultural fire hazards, not just building sprinklers?',
        answer: 'Yes. Ranch and farm properties around Elizabeth store propane, diesel, gasoline, hay, and feed, and each carries its own fire exposure. We check propane-tank clearances, place the right Class B extinguishers for fuel fires, evaluate combustible-storage separation in barns and shops, and cover the ag-specific hazards that a metro-only contractor typically overlooks.',
      },
      {
        question: 'My property is in the grassland-timber interface. What should I be thinking about for wildfire?',
        answer: 'A lot of Elizabeth is grassland and ponderosa timber, which puts structures in a wildland-interface zone. Beyond your building’s own fire protection, we flag combustible storage stacked against structures, apparatus access down long rural driveways, and the distance to a hydrant or draft water source. Those defensible-space factors decide whether the District can protect a building during dry-grass season.',
      },
      {
        question: 'Do you inspect residential sprinkler systems in Elizabeth’s newer subdivisions?',
        answer: 'Yes. Newer large-lot developments like Gold Creek Valley, Independence at Elizabeth, and the Spring Valley Ranch build-out increasingly include NFPA 13D residential sprinkler systems, often fed by private wells. We inspect and test those systems, verify the water supply actually supports the required flow, and handle monitored residential alarms on cellular communicators.',
      },
      {
        question: 'How quickly can you respond to a fire-protection emergency out in Elizabeth?',
        answer: 'Because Elizabeth is well beyond the Denver metro, we don’t claim the 90-minute window we offer inside the metro. We run a 24/7 emergency line and dispatch the same technicians who know your property, but honest drive time from the metro to Elbert County means we plan around it — for a system taken out of service during our own work, we arrange a documented fire watch so the property stays covered while help is en route.',
      },
    ],

    ctaPair: [
      {
        title: 'Get on the Next Elizabeth Route.',
        descriptor: 'Tell us about your property — Main Street storefront, subdivision home, or ranch barn — and we’ll fit you into the next scheduled Elbert County visit with the right NICET-certified technician.',
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
      title: 'Fire Protection Services in Elizabeth, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and dry-pipe testing, cellular alarm monitoring, backflow, extinguisher, and kitchen-hood service for Elizabeth and Elbert County, Colorado. Scheduled rural routes serving the Elizabeth Fire Protection District with NICET-certified technicians.',
      keywords:
        'fire protection Elizabeth CO, fire inspections Elizabeth Colorado, dry-pipe sprinkler testing Elbert County, rural fire alarm monitoring Elizabeth, backflow testing Elizabeth CO, kitchen hood suppression Elizabeth, agricultural fire protection Elbert County, Elizabeth Fire Protection District inspections',
      canonical: '/service-areas/elizabeth-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // ENGLEWOOD, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'englewood-co',
    city: 'Englewood',
    state: 'CO',
    county: 'Arapahoe County',
    bannerTitle: 'Fire Protection Englewood, CO',
    bannerSubtitle: 'ENGLEWOOD FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Englewood packs a lot of high-consequence property into a small footprint: the Swedish Medical Center and Craig Hospital campus at Girard and Hampden, the CityCenter Englewood redevelopment on the old Cinderella City site next to the light-rail station, and decades of industrial buildings along the Santa Fe corridor. Fire service here is delivered by South Metro Fire Rescue, which took over Englewood fire services in 2015, and every inspection report we write is built to pass their review on the first submittal. Our office at 7076 S. Alton Way in Centennial is about fifteen minutes down Broadway, so a technician who knows your building is close.',

    ahj: {
      name: 'South Metro Fire Rescue',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(720) 989-2000',
      website: 'https://www.southmetro.org/',
      note:
        'South Metro Fire Rescue is the Authority Having Jurisdiction for Englewood and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (720) 989-2000, and permitting and code information is at https://www.southmetro.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what South Metro Fire Rescue’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Swedish Medical Center / Craig Hospital campus', type: 'Commercial Corridor', note: 'Major healthcare cluster at Girard and Hampden; full life-safety stacks, medical-gas rooms, generator and fire-pump testing, and smoke-control systems on the acute-care towers.' },
      { name: 'CityCenter Englewood', type: 'Mixed-Use', note: 'The redeveloped Cinderella City site at the light-rail station — civic buildings, retail, and residential above ground-floor commercial with kitchen-hood suppression and radio-coverage scopes.' },
      { name: 'South Broadway corridor', type: 'Commercial Corridor', note: 'The city’s retail and small-business spine; storefront occupancies, restaurants, and older mixed-use buildings with legacy sprinkler and alarm layouts.' },
      { name: 'Santa Fe Drive industrial corridor', type: 'Industrial', note: 'Older warehouse and manufacturing along the rail and river; dry-pipe systems, fire pumps, and rack-storage commodity classification are recurring scopes.' },
      { name: 'Englewood downtown / Old Hampden', type: 'Mixed-Use', note: 'Original commercial core near Hampden and Broadway; small retail, offices, and upper-floor residential in buildings that predate current code.' },
      { name: 'Broadway Station / River Run', type: 'Mixed-Use', note: 'Transit-oriented development on the South Platte side of the light rail; mid-rise residential and flex space with monitored alarm and standpipe systems.' },
      { name: 'Englewood Village / North Englewood', type: 'Residential', note: 'Compact pre-1960 single-family bungalows and small apartment courts; monitored smoke detection and extinguisher service dominate.' },
      { name: 'Cushing Park', type: 'Residential', note: 'Established residential neighborhood west of Broadway; older homes, small multi-family, and church occupancies.' },
      { name: 'Southwest Englewood / Belleview corridor', type: 'Retail', note: 'Grocery-anchored strips and auto-service along Belleview; Ansul kitchen-hood systems and sprinkler-obstruction clearances are common findings.' },
      { name: 'Bishop / Rotolo neighborhoods', type: 'Residential', note: 'Interior single-family grid east of Broadway; residential monitoring and extinguisher work.' },
      { name: 'Federal Boulevard edge', type: 'Commercial Corridor', note: 'Auto dealers, quick-service restaurants, and light commercial on the western boundary; hood suppression and paint-booth hazard scopes.' },
      { name: 'Hampden Avenue (US-285) corridor', type: 'Commercial Corridor', note: 'High-traffic east-west spine feeding the hospital district; medical office buildings, hotels, and multi-story commercial with full alarm systems.' },
    ],

    neighborhoodIntro:
      'Englewood runs from the Swedish/Craig hospital district on Hampden down through the South Broadway retail spine to the industrial blocks along Santa Fe Drive. That range — acute-care towers, transit-oriented redevelopment, and pre-war warehouses — is why our technicians carry parts for both a modern smoke-control system and a 1950s dry-pipe valve. Below are the areas we cover most.',

    buildingStock:
      'Englewood’s building stock is older and denser than its south-metro neighbors, with a large share of the single-family and small multi-family housing built before 1960 in the neighborhoods flanking Broadway. The dominant commercial anchor is the Swedish Medical Center and Craig Hospital campus, a high-rise acute-care and rehabilitation complex that carries some of the most demanding life-safety requirements in the county — smoke-control, medical-gas shutoffs, emergency power, and fire-pump reliability all under continuous occupancy. The CityCenter Englewood redevelopment brought mixed-use retail and residential to the former Cinderella City mall site beside the light-rail station, while the Santa Fe Drive corridor still holds decades-old warehouse and manufacturing space along the rail line and the South Platte. South Broadway carries the city’s storefront retail and restaurants, many in buildings that predate current sprinkler and alarm requirements and rely on retrofit scopes at tenant turnover.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system tested on its own code cadence and documented in one report formatted for South Metro Fire Rescue review.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25 — critical for the dry-pipe systems in Santa Fe corridor warehouses and the standpipes serving the hospital towers on Hampden.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians, including the addressable systems common in CityCenter and Hampden medical offices.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification and fire-watch protocols, with direct dispatch to South Metro Fire Rescue when an alarm confirms.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection control testing for irrigation, fire-line, and domestic backflow preventers; certification filed with the Englewood Utilities Department.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards, including Class D units in Santa Fe metal shops.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — a recurring scope for the restaurants along South Broadway and the Belleview retail strips.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for hospital IT rooms, imaging suites, and server closets in the Swedish/Craig campus and Hampden medical office buildings.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Plan-review coordination with South Metro Fire Rescue, phasing plans for occupied healthcare renovations, and deficiency-correction project management for property-management and hospital-facilities teams.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to South Metro Fire Rescue’s preferred layout — so corrections clear on the first review instead of a second visit.',

    industriesServed: [
      'Hospitals and healthcare campuses',
      'Medical office buildings',
      'Multi-family property management',
      'Retail centers and storefront commercial',
      'Restaurants and food service',
      'Light industrial and warehouse',
      'Assisted living and rehabilitation facilities',
      'Hospitality',
      'Automotive sales and service',
      'Municipal and civic buildings',
      'Data and server rooms',
      'Religious and community facilities',
    ],

    deficienciesTitle: 'What South Metro Fire Rescue flags most often on Englewood inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Englewood properties, from the hospital district to the Santa Fe warehouses. None of this is a citation from a specific building — it’s the pattern of findings our technicians document and correct most often in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads in older industrial space',
        body: 'Santa Fe Drive warehouses accumulate racking, mezzanines, and tenant build-outs that crowd sprinkler deflectors over the years. We measure clearance to the inch and document the correction scope so South Metro Fire Rescue signs off fast.',
      },
      {
        title: 'Dry-pipe valve and trip-test failures',
        body: 'The unheated warehouses and loading docks along the rail corridor run dry-pipe systems that miss their quarterly trip checks and 3-year full-flow trip tests. We track every dry system’s trip cadence and exercise the valve before it fails an inspection.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries have a 4–5 year service life, and failed load tests are a top finding across Broadway and Hampden commercial buildings. We log each panel’s battery age and replace proactively.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Fire-line and irrigation backflow preventers require annual testing by a certified cross-connection tester. We file the certification directly with the Englewood Utilities Department and note it on the AHJ report.',
      },
      {
        title: 'Kitchen hood suppression out of date on Broadway restaurants',
        body: 'Pre-UL-300 wet-chemical systems still turn up in older South Broadway kitchens. We inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal or a health-and-fire re-inspection.',
      },
      {
        title: 'Healthcare life-safety documentation gaps',
        body: 'Occupied renovations on the Swedish/Craig campus can leave smoke-control tests, fire-pump churn records, or generator load logs incomplete. We rebuild the ITM documentation trail so it withstands both AHJ and accreditation review.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'Missing or broken FDC caps let debris into the check valve and can fail an inspection outright — a common finding on the older standpipe systems downtown. We carry replacements and install them on the spot.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Englewood, Colorado?',
        answer: 'Englewood transitioned fire services to South Metro Fire Rescue in 2015, so South Metro Fire Rescue is the authority that conducts on-site fire inspections and enforces the fire code for properties in the city. Permitting and plan-review contacts should be confirmed directly with South Metro Fire Rescue; call Red Rocks Fire Protection to schedule the inspection and testing work itself.',
      },
      {
        question: 'How far is Red Rocks Fire Protection from Englewood?',
        answer: 'Our office is at 7076 S. Alton Way, Suite G2, Centennial, CO 80112 — roughly fifteen minutes from downtown Englewood down South Broadway or across on Hampden. Because Englewood is well inside the Denver metro, we hold a 90-minute emergency response window for fire-protection emergencies in the city, and we send technicians who already know your building rather than a rotating crew.',
      },
      {
        question: 'Do you handle fire protection for the Swedish and Craig hospital campus?',
        answer: 'Yes. Healthcare facilities carry the most demanding life-safety scopes in Englewood — smoke-control testing, fire-pump reliability, medical-gas shutoffs, emergency-power coordination, and clean-agent suppression for imaging and IT rooms — all under continuous occupancy. We phase this work around patient care and keep the ITM records complete for both South Metro Fire Rescue and accreditation review.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Englewood?',
        answer: 'Per NFPA 25 and the IFC as adopted, wet-pipe sprinkler systems require quarterly and annual inspections with an internal inspection every 5 years. Dry-pipe systems — common in the Santa Fe corridor warehouses — add quarterly trip tests and a 3-year full-flow trip test. We track every cadence and email you 30 days before a test is due.',
      },
      {
        question: 'Why do older Englewood buildings need sprinkler and alarm retrofits?',
        answer: 'Much of the housing and storefront commercial flanking South Broadway and downtown Hampden predates current sprinkler and alarm requirements. When those buildings change use or a tenant renovates, the fire code triggers upgrades — added coverage, addressable alarm devices, or a monitored connection. We scope the retrofit against the current adopted code so the project clears South Metro Fire Rescue review the first time.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Englewood restaurants?',
        answer: 'Yes. NFPA 96 and the IFC require an automatic fire-extinguishing system for commercial cooking operations, covering the hood, duct, and plenum. UL-300 wet-chemical systems are the current standard. Older systems in South Broadway and Belleview kitchens are grandfathered but usually need replacement at tenant turnover or a major renovation.',
      },
      {
        question: 'Can you test the dry-pipe systems in the Santa Fe Drive warehouses?',
        answer: 'Yes. Unheated warehouse and loading-dock space along Santa Fe Drive runs on dry-pipe sprinkler systems that need quarterly trip checks and a 3-year full-flow trip test per NFPA 25. We exercise the dry valve, verify the air-pressure and quick-opening devices, and correct the low-point drains that cause most trip-test failures.',
      },
      {
        question: 'How quickly can you respond to an emergency in Englewood?',
        answer: 'Englewood is inside the Denver metro and a short drive from our Centennial office, so our emergency response window for fire-protection emergencies in the city is typically under 90 minutes and usually faster. We staff a 24/7 line and dispatch the same technicians who know your property, not a call center.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule an Englewood Inspection.',
        descriptor: 'Tell us about your property — a Broadway storefront, a Santa Fe warehouse, or a wing on the hospital campus — and we’ll route the right NICET-certified technician, usually within a few business days and faster if it’s urgent.',
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
      title: 'Fire Protection Services in Englewood, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and consulting in Englewood, Colorado. Serving the Swedish/Craig hospital campus, CityCenter Englewood, South Broadway, and the Santa Fe industrial corridor under South Metro Fire Rescue. NICET-certified technicians, 90-minute metro response.',
      keywords:
        'fire protection Englewood CO, fire inspections Englewood, sprinkler inspection Englewood, fire alarm testing Englewood, backflow testing Englewood, kitchen hood suppression Englewood, hospital fire protection Englewood, South Metro Fire Rescue inspections, fire protection company Englewood Colorado',
      canonical: '/service-areas/englewood-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // ERIE, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'erie-co',
    city: 'Erie',
    state: 'CO',
    county: 'Boulder & Weld Counties',
    bannerTitle: 'Fire Protection Erie, CO',
    bannerSubtitle: 'ERIE FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Erie has been one of Colorado’s fastest-growing towns for a decade, and its building stock reflects it: Colliers Hill and Vista Ridge went from open Weld County prairie to thousands of rooftops in a few build seasons, and the commercial pads at Nine Mile Corner and along Erie Parkway are still filling in. Every one of those properties — from an Old Town storefront off Briggs Street to a new warehouse near Erie Municipal Airport — falls under Mountain View Fire Rescue for code enforcement. Red Rocks Fire Protection inspects, tests, and maintains the sprinklers, alarms, extinguishers, and suppression on those buildings, and we write every report the way Mountain View’s inspectors expect to read it.',

    ahj: {
      name: 'Mountain View Fire Rescue',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 772-0710',
      website: 'https://www.mvfpd.org/',
      note:
        'Mountain View Fire Rescue is the Authority Having Jurisdiction for Erie and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 772-0710, and permitting and code information is at https://www.mvfpd.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Mountain View Fire Rescue’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Old Town Erie', type: 'Mixed-Use', note: 'Historic core around Briggs Street; older masonry storefronts and converted buildings with legacy alarm wiring and undersized water service for retrofit sprinklers.' },
      { name: 'Colliers Hill', type: 'Master-Planned', note: 'Large Weld County master-planned community; heavy volume of NFPA 13D residential sprinkler and monitored-alarm work as phases finish and homes turn over.' },
      { name: 'Vista Ridge', type: 'Master-Planned', note: 'Golf-course community with a clubhouse, pool building, and HOA common areas — backflow, irrigation-line, and clubhouse kitchen-hood testing recur here.' },
      { name: 'Erie Commons', type: 'Mixed-Use', note: 'Denser residential-over-retail and townhome product near Erie Parkway; multi-family fire alarm and standpipe scopes as buildings stack.' },
      { name: 'Nine Mile Corner', type: 'Retail', note: 'Grocery-anchored retail node at Arapahoe Road and US-287; new-construction sprinkler acceptance tests and restaurant kitchen-hood suppression.' },
      { name: 'Erie Parkway Corridor', type: 'Commercial Corridor', note: 'Main east-west commercial spine linking Old Town to I-25; mixed office, medical, and retail with wet-system and fire-alarm-panel scopes.' },
      { name: 'Erie Municipal Airport (EIK)', type: 'Industrial', note: 'General-aviation field with hangars and fuel storage; foam and dry-chemical suppression, hangar deluge systems, and specialized fire-line testing.' },
      { name: 'County Line Road / I-25 Edge', type: 'Industrial', note: 'Warehouse and flex space along the eastern town edge; ESFR sprinkler systems, fire-pump testing, and rack-storage commodity classification.' },
      { name: 'Erie Highlands', type: 'Master-Planned', note: 'Newer Weld County subdivision with a recreation center; residential monitored alarms plus common-building sprinkler and backflow work.' },
      { name: 'Kenosha Farm / Compass', type: 'Residential', note: 'Fast-selling single-family neighborhoods off County Road 5; NFPA 13D residential sprinkler inspections and monitored smoke/CO detection at turnover.' },
      { name: 'Coal Creek / Canyon Business Park', type: 'Commercial Corridor', note: 'Small-office and light-service tenants near Coal Creek; extinguisher service, small wet systems, and alarm-panel battery replacements.' },
      { name: 'Rex Ranch / Wells Ranch', type: 'Master-Planned', note: 'Active newer phases on the Weld County side near active oil-and-gas well pads; residential sprinkler retrofits and setback-aware monitored detection.' },
    ],

    neighborhoodIntro:
      'Erie straddles the Boulder–Weld county line, and its property mix runs from 1900s Old Town masonry to master-planned subdivisions that were bare ground five years ago. Below are the named communities and corridors our technicians cover most often across both sides of town.',

    buildingStock:
      'Erie’s building stock is unusually young for a Front Range town because most of it was built during the town’s recent growth surge: master-planned communities like Colliers Hill, Vista Ridge, Erie Highlands, and Compass account for the bulk of the single-family housing, nearly all of it post-2005 and much of it post-2015, with a rising share of NFPA 13D residential sprinklers. Commercial property clusters at Nine Mile Corner retail, along the Erie Parkway corridor, and in the flex-warehouse zone near County Line Road and the I-25 edge on the Weld County side. Old Town Erie around Briggs Street holds the town’s oldest inventory — small masonry storefronts and converted buildings where undersized water service and legacy wiring shape any retrofit. A distinct wrinkle for Erie is oil-and-gas: several Weld County neighborhoods sit near active well pads, which affects setback-aware detection planning and emergency access. Erie Municipal Airport adds hangars and aviation-fuel storage that carry their own foam and dry-chemical suppression requirements.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code-driven cadence, documented in a single Mountain View Fire Rescue–formatted report that clears on re-inspection.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, and standpipe systems exercised per NFPA 25, including main-drain tests and valve supervision — common on Erie Commons multi-family and the new retail at Nine Mile Corner.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians across the Erie Parkway office and medical corridor.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification and direct dispatch to Mountain View Fire Rescue when an alarm confirms — including monitored residential systems in Colliers Hill and Erie Highlands.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection control testing for irrigation, fire-line, and domestic backflow preventers at HOA common areas like the Vista Ridge clubhouse and pool buildings; certification filed with the water district.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards, including the aircraft-hangar and shop hazards at Erie Municipal Airport.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — recurring scope at Nine Mile Corner restaurants and Vista Ridge clubhouse kitchens.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, CO₂, foam, and dry-chemical systems for server rooms, well-pad-adjacent facilities, and airport hangars — the specialized hazards that come with Erie’s airport and Weld County energy footprint.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review with Mountain View Fire Rescue, plan-reviewer coordination, and deficiency-correction project management for the HOA and property-management portfolios growing across Erie’s master-planned communities.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to Mountain View Fire Rescue’s preferred layout — so corrections are approved without a second trip.',

    industriesServed: [
      'HOA & community associations',
      'Multi-family property management',
      'Retail centers and grocery-anchored strips',
      'Restaurants and food service',
      'Medical and dental offices',
      'Light industrial and warehouse',
      'Aviation and hangar facilities',
      'Oil-and-gas support and energy services',
      'Assisted living and healthcare',
      'Education and childcare',
      'Automotive and service trades',
      'Religious and community facilities',
    ],

    deficienciesTitle: 'What Mountain View Fire Rescue flags most often on Erie inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Erie properties. None of this is a citation from a specific building — it’s the pattern of findings our technicians document and correct most frequently in this jurisdiction, weighted toward the new construction filling in Erie’s subdivisions and retail nodes.',

    commonDeficiencies: [
      {
        title: 'New-construction acceptance-test punch items',
        body: 'Because so much of Erie is brand-new, the recurring problem is systems that pass a builder’s rush but fail Mountain View’s acceptance test: incomplete inspector’s-test connections, unsupervised valves, and missing tamper switches. We run a pre-acceptance walk at Nine Mile Corner and Erie Commons build-outs so the district’s test passes the first time.',
      },
      {
        title: 'Obstructed sprinkler heads after tenant build-out',
        body: 'Retail and flex tenants at Nine Mile Corner and the County Line warehouse zone add racks, signage, and ceilings too close to sprinkler deflectors. We measure clearance to the inch and document the correction scope so the AHJ approval is fast.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Vista Ridge and Erie Highlands HOA irrigation and fire-line backflow preventers require annual testing by a certified cross-connection tester. We file the certification directly with the serving water district and Mountain View so the common areas stay compliant.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries carry a 4–5 year service life, and the first wave of Erie’s mid-2010s commercial panels along Erie Parkway is now aging out. Failed load tests are a top finding — we track every panel’s battery age and replace before the annual.',
      },
      {
        title: 'Kitchen hood suppression out of date or unbalanced',
        body: 'Restaurant turnover at Nine Mile Corner and clubhouse kitchens in the master-planned communities leaves hood systems with wrong nozzle placement after equipment swaps. We inventory hood systems by hazard class and re-balance nozzles to the current cook line.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'A common finding on newer Erie buildings — missing or broken FDC caps let debris into the check valve and can fail an inspection outright. We carry replacements on the truck and install them on the spot.',
      },
      {
        title: 'Residential sprinkler and monitoring gaps at home turnover',
        body: 'NFPA 13D systems in Colliers Hill, Compass, and Rex Ranch homes are frequently found with closed valves, drained systems, or lapsed monitoring accounts after a sale. We verify the 13D system is charged and the monitoring is live before it becomes the new owner’s problem.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Erie, Colorado?',
        answer: 'Mountain View Fire Rescue is the fire district that serves as the AHJ for Erie, covering both the Boulder County and Weld County portions of town. Mountain View conducts on-site fire inspections and reviews sprinkler, alarm, and underground fire-line submittals for commercial and multi-family properties in Erie. Confirm the district’s current permitting and inspection-scheduling contact directly with Mountain View before you file.',
      },
      {
        question: 'Does Red Rocks Fire Protection serve Erie, and how far away are you?',
        answer: 'Yes. Our office is at 7076 S. Alton Way in Centennial, and Erie sits on the northern edge of our Denver metro service area. We run scheduled inspection routes and emergency service up to Erie; for a town on the metro’s north edge we still hold to our roughly 90-minute Denver-metro response framing, though drive time from the south metro means booking ahead is the reliable path for routine work.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Erie?',
        answer: 'Per NFPA 25 and the IFC as adopted by Mountain View Fire Rescue, wet-pipe sprinkler systems require quarterly and annual inspections, with an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. We track every cadence for every system we service and email you 30 days before a test is due — which matters in Erie, where a lot of systems are new enough to still be on their first full inspection cycle.',
      },
      {
        question: 'We just bought a new-construction home in Colliers Hill with a residential sprinkler system. Do we need it inspected?',
        answer: 'Yes. NFPA 13D residential sprinkler systems — standard in newer Erie master-planned communities like Colliers Hill, Vista Ridge, Erie Highlands, and Compass — need periodic inspection to confirm the system is charged, valves are open, and, if it is monitored, the account is active. Systems are commonly found drained or with lapsed monitoring after a sale. We inspect, test, and re-activate monitoring so your home’s life-safety system actually works.',
      },
      {
        question: 'My building is near an oil-and-gas well pad on the Weld County side. Does that change anything for fire protection?',
        answer: 'It can. Well-pad proximity in Weld County affects emergency access, setback-aware detection planning, and sometimes the special-hazard suppression a facility carries. We factor the surrounding energy infrastructure into how we lay out monitored detection and coordinate with Mountain View Fire Rescue on access. If your site has its own process or fuel hazards, we handle the foam, dry-chemical, and clean-agent suppression that goes with them.',
      },
      {
        question: 'Do you service the hangars and fuel storage at Erie Municipal Airport?',
        answer: 'Yes. General-aviation hangars and aviation-fuel storage carry specialized fire-protection needs — foam and dry-chemical suppression, hangar deluge or foam-water systems, and fire-line testing that differs from a standard commercial building. We inspect, test, and maintain those systems and tag them per the applicable NFPA standards for Mountain View Fire Rescue.',
      },
      {
        question: 'Are kitchen hood suppression systems required for restaurants at Nine Mile Corner?',
        answer: 'Yes. NFPA 96 (and the IFC as adopted in Colorado) requires automatic fire-extinguishing systems for commercial cooking operations, including the hood, duct, and plenum. UL-300 wet-chemical systems are the current standard. New restaurant tenants at Nine Mile Corner and clubhouse kitchens in the master-planned communities often need the nozzles re-balanced after an equipment change — we test, tag, and correct in one visit.',
      },
      {
        question: 'Can you pre-check a new commercial build-out before Mountain View’s acceptance test?',
        answer: 'Yes, and in Erie it saves the most time. So much of the town is new construction that the most common failure is a system that passes a builder’s rush but fails the district’s acceptance test on inspector’s-test connections, valve supervision, or tamper switches. We run a pre-acceptance walk on Nine Mile Corner and Erie Commons build-outs so Mountain View’s test passes on the first appointment instead of triggering a re-inspection.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule an Erie Inspection.',
        descriptor: 'Tell us about your property — Old Town storefront, master-planned HOA, airport hangar, or a new pad at Nine Mile Corner — and we’ll route the right NICET-certified technician on our next Erie route.',
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
      title: 'Fire Protection Services in Erie, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and consulting in Erie, Colorado, across Boulder and Weld counties. Serving Mountain View Fire Rescue jurisdictions with NICET-certified technicians.',
      keywords:
        'fire protection Erie CO, fire inspections Erie, sprinkler inspection Erie Colorado, fire alarm testing Erie, backflow testing Erie, kitchen hood suppression Erie, residential sprinkler Colliers Hill, Mountain View Fire Rescue inspections, fire protection Weld County',
      canonical: '/service-areas/erie-co/',
    },
  },

    // ──────────────────────────────────────────────────────────────────
    // EVERGREEN, COLORADO
    // ──────────────────────────────────────────────────────────────────
    {
      slug: 'evergreen-co',
      city: 'Evergreen',
      state: 'CO',
      county: 'Jefferson County',
      bannerTitle: 'Fire Protection Evergreen, CO',
      bannerSubtitle: 'EVERGREEN FIRE PROTECTION',
      bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

      heroIntro:
        'Evergreen sits above 7,000 feet in the ponderosa and lodgepole of Jefferson County, an unincorporated mountain community where the wildland-urban interface starts at your back deck. Between the shops around Evergreen Lake, the custom homes in Hiwan, and the second homes and short-term rentals scattered up the canyons off Highway 74, every commercial and multi-family property answers to Evergreen Fire/Rescue for fire-code enforcement. Because we run scheduled mountain routes rather than metro drive-ups, we plan Evergreen visits ahead and write every report to what Evergreen Fire/Rescue expects on the first pass.',

      ahj: {
        name: 'Evergreen Fire/Rescue',
        adoptedNFPA: [
          'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
          'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
          'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
          'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
          'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
          'International Fire Code (IFC) with wildland-urban interface provisions — current adopted edition',
        ],
        nonEmergencyPhone: '(303) 674-3145',
        website: 'https://www.evergreenfirerescue.com/',
        note:
          'Evergreen Fire/Rescue is the Authority Having Jurisdiction for Evergreen and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 674-3145, and permitting and code information is at https://www.evergreenfirerescue.com/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Evergreen Fire/Rescue’s prevention staff expect, so corrections get signed off without rework.',
      },

      neighborhoods: [
        { name: 'Downtown Evergreen', type: 'Mixed-Use', note: 'Shops, restaurants, and offices along Main Street near the lake dam; kitchen-hood suppression and older wet systems in stone-and-timber storefronts.' },
        { name: 'Evergreen Lake / Lake House', type: 'Mixed-Use', note: 'Event venue, boathouse, and lakeside food service; seasonal occupancy loads and hood suppression at peak-season tenants.' },
        { name: 'Hiwan', type: 'Residential', note: 'Large custom homes and the Hiwan Golf Club clubhouse; monitored alarm and residential sprinkler retrofits, plus clubhouse commercial systems.' },
        { name: 'Bergen Park', type: 'Commercial Corridor', note: 'Retail and office cluster at the Highway 74 / Evergreen Parkway junction; strip-center sprinkler and alarm testing, backflow on fire lines.' },
        { name: 'Kittredge', type: 'Residential', note: 'Canyon-bottom community along Bear Creek off Highway 74; older cabins and small commercial with propane heat and freeze-prone piping.' },
        { name: 'Marshdale', type: 'Residential', note: 'Rural residential south of downtown along Highway 73; well-and-cistern water supply that limits fire flow for any sprinklered structure.' },
        { name: 'Brook Forest', type: 'Residential', note: 'Heavily forested lots up Brook Forest Road; steep-slope access and defensible-space scrutiny on any addition or remodel.' },
        { name: 'Upper Bear Creek', type: 'Residential', note: 'Historic estates and lodges west of town; dry-pipe or antifreeze systems common in unheated wings and seasonal structures.' },
        { name: 'Evergreen Meadows', type: 'Residential', note: 'Subdivision off Buffalo Park Road; mix of primary and second homes, many with monitored detection over unoccupied stretches.' },
        { name: 'Hiwan Hills', type: 'Residential', note: 'Established homes near the country club; retrofit smoke-detection and monitored-alarm upgrades on 1970s-80s stock.' },
        { name: 'North Turkey Creek / Aspen Park corridor', type: 'Commercial Corridor', note: 'US-285 frontage businesses feeding the Evergreen market; flex and retail with propane systems and dry-pipe risers.' },
        { name: 'El Rancho', type: 'Retail', note: 'I-70 / Evergreen Parkway gateway with lodging and restaurants; high transient occupancy, hood suppression, and standpipe checks.' },
      ],

      neighborhoodIntro:
        'Evergreen is spread across canyons, ridges, and meadows rather than a street grid, so our technicians plan routes around the Highway 74 corridor, the US-285 frontage near Aspen Park, and the lanes climbing off Upper Bear Creek and Brook Forest. Below are the areas and corridors we cover most often.',

      buildingStock:
        'Evergreen’s building stock runs from 1960s-80s mountain cabins and A-frames to large custom timber homes in Hiwan and Upper Bear Creek, with a compact commercial core downtown by the lake and a second retail node at Bergen Park. Much of the area has no natural gas service, so propane fuels heating and cooking, and many structures — barns, seasonal wings, unheated storage, and vacation properties — sit cold for stretches of the year, which pushes designers toward dry-pipe and antifreeze sprinkler systems over standard wet pipe. Water supply is a defining constraint: outside the downtown district many parcels run on private wells and cisterns, so fire flow is limited and system design leans on tank storage and pumps. Short-term rentals and second homes are a large share of the residential base, and their intermittent occupancy makes monitored detection and freeze supervision central to any life-safety plan at this elevation.',

      servicesOffered: [
        {
          title: 'Annual NFPA Fire Inspections',
          body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code cadence, documented in one report formatted for Evergreen Fire/Rescue and folded into a scheduled mountain route so you are not paying for repeat trips.',
        },
        {
          title: 'Fire Sprinkler & Standpipe Testing',
          body: 'Wet, dry-pipe, antifreeze, and standpipe systems tested per NFPA 25 — with dry-pipe trip tests and low-point drain checks that matter most on unheated and seasonal Evergreen structures. Includes main-drain tests, valve supervision, and a prioritized deficiency list.',
        },
        {
          title: 'Fire Alarm Testing',
          body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including low-temperature supervisory signals that protect second homes and rentals sitting empty at 7,000-plus feet.',
        },
        {
          title: '24/7 Monitoring',
          body: 'UL-listed central-station monitoring with signal verification, water-flow and freeze-supervisory alerts, and direct dispatch to Evergreen Fire/Rescue when an alarm confirms — built for properties that go unoccupied for weeks.',
        },
        {
          title: 'Backflow Prevention',
          body: 'Annual cross-connection testing on fire-line, irrigation, and domestic backflow preventers, including assemblies fed from cistern-and-pump supplies where fire flow is limited. Certification filed with the water provider.',
        },
        {
          title: 'Fire Extinguisher Service',
          body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K — including cabin, lodge, and short-term-rental units where a single extinguisher is often the only suppression on site.',
        },
        {
          title: 'Kitchen Hood Suppression',
          body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — the recurring scope at downtown Evergreen restaurants, the Lake House, and Hiwan Golf Club food service, most running on propane.',
        },
        {
          title: 'Special Hazard & Clean-Agent Suppression',
          body: 'FM-200, Novec 1230, and CO₂ systems for small server rooms, telecom huts, and equipment closets at Bergen Park and downtown offices where a water discharge in a cold building is its own hazard.',
        },
        {
          title: 'Life-Safety Consulting & Code Navigation',
          body: 'Pre-plan review with Evergreen Fire/Rescue, defensible-space and WUI coordination, and deficiency-correction project management for HOA, lodge, and property-management portfolios across the mountain area.',
        },
      ],

      servicesIntro:
        'Every service below is run by NICET- or CSA-certified technicians on planned mountain routes, with reports formatted to Evergreen Fire/Rescue’s preferred layout so corrections clear without a second trip up Highway 74.',

      industriesServed: [
        'HOA & mountain community associations',
        'Short-term rental & vacation-home management',
        'Restaurants and food service',
        'Lodging, lodges, and event venues',
        'Retail centers and general commercial',
        'Golf and country clubs',
        'Assisted living and healthcare',
        'Offices and professional services',
        'Places of worship and community halls',
        'Schools, preschools, and childcare',
        'Light commercial and storage',
        'Telecom and small equipment facilities',
      ],

      deficienciesTitle: 'What Evergreen Fire/Rescue flags most often on mountain-property inspections.',
      deficienciesIntro:
        'These are the recurring deficiency categories we correct across Evergreen properties. None of this is a citation from any specific address — it is the pattern of findings our technicians document most in this district, shaped by elevation, propane fuel, and limited water supply.',

      commonDeficiencies: [
        {
          title: 'Dry-pipe and antifreeze systems out of test cadence',
          body: 'Unheated wings, barns, and seasonal structures rely on dry-pipe and antifreeze systems, and the trip tests and antifreeze-concentration checks are easy to miss on a property that sits empty. We test to NFPA 25 and log concentrations so the district signs off without a callback.',
        },
        {
          title: 'Freeze damage and unsupervised low-temperature conditions',
          body: 'At 7,000-plus feet, a heating failure in an empty second home can freeze and split sprinkler piping before anyone notices. We flag missing low-temperature supervisory signals and heat-trace failures, and recommend freeze monitoring on any structure left cold.',
        },
        {
          title: 'Inadequate fire flow from wells and cisterns',
          body: 'Properties off the downtown water system run on cisterns and pumps, and system design or later additions frequently outrun the available flow. We verify tank volume and pump performance against the demand and document the gap before the district does.',
        },
        {
          title: 'Propane system clearances and appliance hazards',
          body: 'With little natural gas service in the area, propane tanks and appliances are everywhere, and improper clearances, missing shutoffs, or blocked venting are common findings. We note them alongside the fire-protection scope so nothing gets left for a return visit.',
        },
        {
          title: 'Defensible space and WUI ignition-zone gaps',
          body: 'Heavy ponderosa and lodgepole against decks, roofs, and vents is the defining Evergreen hazard. During inspections we document combustible accumulation in the home-ignition zone and unscreened vents so owners can align with Evergreen Fire/Rescue’s defensible-space guidance.',
        },
        {
          title: 'Fire alarm panel battery failures in cold buildings',
          body: 'Sealed lead-acid backup batteries lose capacity faster in cold, intermittently heated buildings, and failed load tests are a top finding across Bergen Park and downtown. We track each panel’s battery age and replace proactively so a single trip up the mountain does the job.',
        },
        {
          title: 'Kitchen hood suppression out of date',
          body: 'Downtown Evergreen and lakeside restaurants often carry older wet-chemical hood systems flagged for UL-300 upgrade at turnover. We inventory hood systems by hazard class and flag conversions ahead of lease renewal so a seasonal kitchen is not shut down mid-season.',
        },
      ],

      faq: [
        {
          question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Evergreen, Colorado?',
          answer: 'Evergreen Fire/Rescue is the fire protection district and AHJ for the Evergreen area of unincorporated Jefferson County. The district conducts on-site inspections and reviews sprinkler, alarm, and defensible-space submittals. Confirm permitting and inspection-scheduling lines with Evergreen Fire/Rescue directly — the number on this page reaches Red Rocks Fire Protection.',
        },
        {
          question: 'Do you actually make it up to Evergreen, or is it too far from the metro?',
          answer: 'We serve Evergreen on scheduled mountain routes rather than same-hour drive-ups. Because Evergreen sits up Highway 74 above the metro floor, we plan visits ahead and batch nearby work — Bergen Park, downtown, Hiwan, Kittredge, Aspen Park — into one trip so you are not paying for repeat mileage or waiting on a second visit to close deficiencies.',
        },
        {
          question: 'Why do so many Evergreen properties use dry-pipe sprinkler systems?',
          answer: 'At Evergreen’s elevation, any unheated or seasonally occupied space — barns, storage, lodge wings, and vacation homes — risks frozen and burst wet-pipe sprinklers. Dry-pipe and antifreeze systems keep water out of the exposed piping until a head opens. They carry extra NFPA 25 requirements, including trip tests and low-point drains, which we handle on every dry system we service.',
        },
        {
          question: 'How does limited well or cistern water affect fire sprinklers in Evergreen?',
          answer: 'Outside the downtown water district, many Evergreen parcels rely on private wells and cisterns, so available fire flow is capped. Sprinkler design for those properties leans on dedicated tank storage and fire pumps sized to the demand. We verify tank volume and pump output against the system’s requirement so the design holds up under an Evergreen Fire/Rescue review.',
        },
        {
          question: 'We rent our Evergreen home short-term and it sits empty between guests — what should we have in place?',
          answer: 'For second homes and short-term rentals, the priority is detection and monitoring that works while no one is there. We recommend monitored smoke and heat detection, low-temperature supervisory alerts to catch a heating failure before pipes freeze, and current, tagged extinguishers in the unit. Many Evergreen rentals also fall under commercial-occupancy expectations depending on use.',
        },
        {
          question: 'Most of Evergreen runs on propane, not natural gas — does that change fire protection?',
          answer: 'It does. Propane appliances, tank clearances, shutoffs, and venting come up during inspections, and improper installations are a common finding in the area. When our technicians are on site for sprinkler, alarm, or hood work, we document propane-related hazards alongside the fire-protection scope so everything is handled in one visit.',
        },
        {
          question: 'Do you help with defensible space and the wildland-urban interface in Evergreen?',
          answer: 'We are a fire-protection contractor, not a mitigation crew, but the WUI hazard is unavoidable in Evergreen’s ponderosa and lodgepole. During inspections we document combustible accumulation in the home-ignition zone and unscreened vents, and we point owners to Evergreen Fire/Rescue’s defensible-space program so structural fire protection and wildfire hardening line up.',
        },
        {
          question: 'How often do kitchen hood systems need service at Evergreen restaurants?',
          answer: 'NFPA 96 requires semiannual inspection of the wet-chemical hood suppression system, plus daily and monthly checks by staff. Downtown Evergreen and lakeside kitchens often carry older systems due for UL-300 upgrade at turnover. We schedule hood service into our Evergreen route so a seasonal kitchen is not taken offline during peak lake-and-shop traffic.',
        },
      ],

      ctaPair: [
        {
          title: 'Schedule an Evergreen Inspection.',
          descriptor: 'Tell us about your mountain property and we’ll fold it into the next scheduled Evergreen route — batched with nearby work so you’re not paying for the drive up Highway 74 twice.',
          href: '/contact',
          label: 'Get in touch',
        },
        {
          title: 'See All Our Services.',
          descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, alarms, monitoring, suppression, backflow, and consulting all under one roof.',
          href: '/services',
          label: 'Browse services',
        },
      ],

      meta: {
        title: 'Fire Protection Services in Evergreen, CO | Red Rocks Fire Protection',
        description:
          'NFPA fire inspections, dry-pipe sprinkler and alarm testing, 24/7 monitoring, backflow, and hood suppression for Evergreen, Colorado. Mountain-route service across Hiwan, Bergen Park, and downtown, formatted for Evergreen Fire/Rescue. NICET-certified technicians.',
        keywords:
          'fire protection Evergreen CO, fire inspections Evergreen, dry pipe sprinkler Evergreen, fire alarm testing Evergreen, backflow testing Evergreen, kitchen hood suppression Evergreen, Evergreen Fire Rescue inspections, mountain fire protection Jefferson County',
        canonical: '/service-areas/evergreen-co/',
      },
    },

  // ──────────────────────────────────────────────────────────────────
  // FEDERAL HEIGHTS, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'federal-heights-co',
    city: 'Federal Heights',
    state: 'CO',
    county: 'Adams County',
    bannerTitle: 'Fire Protection Federal Heights, CO',
    bannerSubtitle: 'FEDERAL HEIGHTS FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Federal Heights packs a lot of building into less than two square miles, and most of it is multi-family — apartment blocks and condo courts stacked along Federal Boulevard and the 84th Avenue corridor. Red Rocks Fire Protection runs from Centennial, well inside the 90-minute metro window Federal Heights Fire Department expects, and we write every sprinkler, alarm, and standpipe report to the deficiency-list format Federal Heights Fire Department accepts on the first pass. If you manage a garden-style complex off Federal or a retail pad near Water World, we already know the code path your inspector will walk.',

    ahj: {
      name: 'Federal Heights Fire Department',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 427-7209',
      website: 'https://www.fedheights.org/fire',
      note:
        'Federal Heights Fire Department is the Authority Having Jurisdiction for Federal Heights and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 427-7209, and permitting and code information is at https://www.fedheights.org/fire. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Federal Heights Fire Department’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Federal Boulevard corridor', type: 'Commercial Corridor', note: 'The city’s retail and service spine; strip centers, quick-service kitchens, and older wet-sprinkler systems that predate current UL-300 hood requirements.' },
      { name: '84th Avenue corridor', type: 'Mixed-Use', note: 'East-west arterial mixing retail pads with multi-family; standpipe and fire-line testing on the taller apartment structures set back from the road.' },
      { name: 'Hyland Hills', type: 'Residential', note: 'Established single-family and townhome pockets near the Hyland Hills park district; residential monitored-alarm and NFPA 13D retrofit work at remodel.' },
      { name: 'Water World district', type: 'Retail', note: 'Regional water park and the retail and parking around it; seasonal occupancy load, extinguisher coverage, and concession kitchen-hood suppression.' },
      { name: 'Ranchito', type: 'Residential', note: 'Older mobile-home and manufactured-housing community; extinguisher placement, clubhouse alarm coverage, and utility-room clearance checks.' },
      { name: 'Fox Run apartments', type: 'Residential', note: 'Garden-style multi-family off Federal; attic-space sprinkler coverage and unit-level smoke and CO detection are recurring scopes.' },
      { name: 'Country Club Towers area', type: 'Residential', note: 'Higher-density mid-rise residential; full life-safety stack with standpipes, monitored alarm panels, and stairwell pressurization checks.' },
      { name: '92nd Avenue edge', type: 'Commercial Corridor', note: 'Northern retail and service frontage bordering Thornton; grocery-anchored strips with Ansul hood systems and sprinkler-obstruction clearances.' },
      { name: 'Pecos Street frontage', type: 'Retail', note: 'West-side retail and light-service tenants near the Pecos alignment; tenant build-outs that disturb existing sprinkler and alarm coverage.' },
      { name: 'Zuni Street residential', type: 'Residential', note: 'Compact single-family blocks; legacy smoke-detection layouts that benefit from interconnected retrofits at sale or remodel.' },
      { name: 'Federal Heights civic core', type: 'Mixed-Use', note: 'City facilities, community rooms, and adjacent multi-family; assembly-occupancy alarm coverage and emergency lighting.' },
      { name: 'Huron Street multi-family', type: 'Residential', note: 'Dense condo and apartment courts on the eastern edge; backflow and fire-line testing shared across HOA-managed buildings.' },
    ],

    neighborhoodIntro:
      'Federal Heights is small and dense — most of the city is multi-family housing threaded between Federal Boulevard and the 84th Avenue corridor, with a retail belt around Water World. Below are the areas and corridors our technicians cover most often inside the city.',

    buildingStock:
      'Federal Heights carries one of the highest concentrations of multi-family housing in Adams County on a footprint of under two square miles. Garden-style apartments, condo courts, and mid-rise residential dominate, much of it built from the 1970s through the 1990s, which means aging wet-sprinkler systems, sealed-lead-acid alarm panels near end of life, and units where smoke and carbon-monoxide detection needs interconnection retrofits. Commercial property clusters along Federal Boulevard and 84th Avenue: strip retail, quick-service and full-service kitchens, and service tenants, plus the seasonal draw of Water World and its concessions. Because so many buildings are owner-managed condos or investor-held apartment portfolios, a single inspection cycle often covers a dozen structures under one management contact.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each on its own code cadence, documented in a single Federal Heights Fire Department–formatted report you can hand to a property manager or condo board.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, and standpipe systems exercised per NFPA 25 across the multi-story apartment and condo stock along Federal and 84th, with main-drain tests, valve supervision, and a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including the shared corridor and unit-level coverage typical of garden-style buildings.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification and fire-watch protocols, dispatching directly to Federal Heights Fire Department when an alarm confirms.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for fire-line, irrigation, and domestic backflow preventers across HOA-managed apartment courts, with certification filed to the water utility.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K — including seasonal coverage counts around Water World concessions.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A for the restaurant and quick-service tenants along the Federal Boulevard corridor.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for property-management server closets and utility rooms in the larger residential and mixed-use buildings.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Deficiency-correction project management and Federal Heights Fire Department coordination for condo boards and apartment portfolios — one point of contact across a dozen buildings on a single Federal Heights cycle.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to Federal Heights Fire Department’s preferred layout — so corrections clear the first time instead of triggering a re-inspection.',

    industriesServed: [
      'Multi-family property management',
      'HOA & condo associations',
      'Manufactured-housing communities',
      'Retail centers and strip malls',
      'Restaurants and food service',
      'Recreation and entertainment venues',
      'Assisted living and healthcare',
      'Light commercial and service',
      'Education and childcare',
      'Religious and community facilities',
      'Hospitality',
      'Automotive and service tenants',
    ],

    deficienciesTitle: 'What Federal Heights Fire Department flags most often on Federal Heights inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we correct across Federal Heights properties, weighted toward the multi-family stock that makes up most of the city. None of this is a citation from a specific property — it’s the pattern of findings our technicians document most often in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads in unit interiors and storage areas',
        body: 'In dense apartment and condo stock, tenants stack belongings against ceilings, and management build-outs crowd deflectors in shared storage and utility rooms. We measure clearance to the inch and document the correction so Federal Heights Fire Department signs off fast.',
      },
      {
        title: 'Fire alarm panel battery failures across multi-building portfolios',
        body: 'Sealed lead-acid backup batteries last 4–5 years, and a single Federal Heights portfolio can run a dozen panels of different ages. Failed load tests are a top finding — we track battery age by panel and replace ahead of failure.',
      },
      {
        title: 'Missing or expired hydraulic nameplates on older wet systems',
        body: 'Apartment buildings from the 1970s and 1980s along Federal and 84th frequently have faded or missing hydraulic placards. Federal Heights Fire Department requires a verified nameplate per system — we recalculate and re-placard in-house.',
      },
      {
        title: 'Unit smoke and carbon-monoxide detection not interconnected or expired',
        body: 'Colorado requires CO detection near sleeping areas, and older units often have standalone or expired detectors. Across garden-style buildings we inventory device age and flag interconnection retrofits at turnover.',
      },
      {
        title: 'Kitchen hood suppression out of date at Federal Boulevard food tenants',
        body: 'Pre-UL-300 wet-chemical systems still serve some quick-service and full-service kitchens along Federal. We inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal or inspection.',
      },
      {
        title: 'Backflow preventers without current test certification',
        body: 'Fire-line and irrigation backflow preventers on HOA-managed apartment courts often lapse between owners. We test, certify, and file directly with the water utility and the Federal Heights Fire Department AHJ.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'Missing or broken FDC caps let debris into the check valve and can fail an inspection outright — common on street-facing apartment buildings along Federal and 84th. We carry replacements and install them on the spot.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Federal Heights, Colorado?',
        answer: 'Federal Heights Fire Department is the AHJ for Federal Heights. It conducts on-site fire inspections and reviews sprinkler, alarm, and fire-line submittals for the city’s apartment, condo, and retail properties. Confirm the department’s own permitting and inspection-scheduling line with Federal Heights Fire Department directly.',
      },
      {
        question: 'Do you serve Federal Heights even though your office is in Centennial?',
        answer: 'Yes. Our office is at 7076 S. Alton Way in Centennial, and Federal Heights sits well within the Denver metro, so it falls inside our roughly 90-minute emergency response window. We service the whole Adams County side of the metro on regular inspection routes, and Federal Heights’ small footprint means we can cover several multi-family buildings in one visit.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Federal Heights apartments?',
        answer: 'Per NFPA 25 and the IFC as adopted by Federal Heights Fire Department, wet-pipe systems require quarterly and annual inspections with an internal inspection every 5 years; dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. We track every cadence per building and email you 30 days before a test is due — useful when one portfolio spans a dozen Federal Heights structures.',
      },
      {
        question: 'Can you handle a whole apartment or condo portfolio on one contract?',
        answer: 'Yes, and it’s most of what we do in Federal Heights. Because the city is dense and multi-family, a single management contact often owns many buildings within a few blocks. We consolidate the inspection cadences for sprinklers, alarms, extinguishers, and backflow across the portfolio into one schedule and one point of contact.',
      },
      {
        question: 'Are carbon-monoxide detectors required in Federal Heights rental units?',
        answer: 'Colorado law requires carbon-monoxide alarms within 15 feet of sleeping areas in dwellings with fuel-fired appliances or attached garages, which covers most Federal Heights apartments and condos. We inventory CO and smoke detection by unit, flag expired or non-interconnected devices, and document replacements so your alarm coverage holds up on inspection.',
      },
      {
        question: 'Do you service the retail and restaurant tenants along Federal Boulevard?',
        answer: 'Yes. The Federal Boulevard corridor is the city’s retail spine, and we handle sprinkler and alarm testing, extinguisher service, and NFPA 96 kitchen-hood suppression for the strip-center and quick-service tenants there. Pre-UL-300 hood systems are the most common conversion we flag ahead of inspection.',
      },
      {
        question: 'What about seasonal properties like the Water World area?',
        answer: 'Recreation venues carry high seasonal occupancy loads, which changes extinguisher coverage counts and assembly-occupancy alarm requirements. We schedule inspections around the operating season and document extinguisher placement, concession kitchen-hood suppression, and emergency lighting to match the peak load the code assumes.',
      },
      {
        question: 'How quickly can you respond to a fire-protection emergency in Federal Heights?',
        answer: 'Federal Heights is inside the Denver metro, so our emergency response window for fire-protection emergencies is typically under 90 minutes. We staff a 24/7 emergency line and dispatch the technicians who already know your building, not a call center.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Federal Heights Inspection.',
        descriptor: 'Tell us about your apartment, condo, or retail property and we’ll route the right NICET-certified technician — usually within a few business days, faster if it’s urgent.',
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
      title: 'Fire Protection Services in Federal Heights, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and kitchen-hood service for Federal Heights, CO multi-family and retail property. NICET-certified technicians, Federal Heights Fire Department jurisdiction, 90-minute metro response.',
      keywords:
        'fire protection Federal Heights CO, fire inspections Federal Heights, sprinkler inspection Federal Heights, fire alarm testing Federal Heights, apartment fire inspection Federal Heights, backflow testing Federal Heights, kitchen hood suppression Federal Heights, Federal Heights Fire Department inspections',
      canonical: '/service-areas/federal-heights-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // FORT COLLINS, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'fort-collins-co',
    city: 'Fort Collins',
    state: 'CO',
    county: 'Larimer County',
    bannerTitle: 'Fire Protection Fort Collins, CO',
    bannerSubtitle: 'FORT COLLINS FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Fort Collins sits about 65 miles north of our Centennial shop up I-25, and we run it as a scheduled route — building inspections along College Avenue, the CSU campus, and the Old Town brewery cluster into planned technician visits rather than one-off scrambles. Every commercial, campus, and multi-family property in the city falls under the Poudre Fire Authority for code enforcement, and we write each report to the deficiency-list format PFA’s Community Safety and Service Bureau expects on the first submittal.',

    ahj: {
      name: 'Poudre Fire Authority',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(970) 416-2891',
      website: 'https://www.poudre-fire.org/',
      note:
        'Poudre Fire Authority is the Authority Having Jurisdiction for Fort Collins and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (970) 416-2891, and permitting and code information is at https://www.poudre-fire.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Poudre Fire Authority’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'CSU Main Campus', type: 'Mixed-Use', note: 'Research labs, residence halls, and large assembly venues; clean-agent suppression, high-hazard lab hoods, and dorm-scale alarm and standpipe scope.' },
      { name: 'Old Town / Downtown', type: 'Mixed-Use', note: 'Historic masonry retail and restaurants on Mountain and College; kitchen-hood suppression, standpipes in older buildings, and tight sprinkler-obstruction clearances.' },
      { name: 'River District', type: 'Mixed-Use', note: 'Brewery and taproom cluster along the Poudre near Linden — New Belgium, Odell, and Horse & Dragon; process piping, glycol tanks, boil-kettle hoods, and ammonia-refrigeration alarm interlocks.' },
      { name: 'Harmony Road Tech Corridor', type: 'Commercial Corridor', note: 'Former HP / Broadcom / Intel and Woodward campuses; clean-agent suppression for labs and server rooms, ESFR in fab and warehouse bays, and fire pump testing.' },
      { name: 'Midtown / College Avenue', type: 'Retail', note: 'Grocery-anchored and big-box retail spine from Foothills Mall south; large-format wet systems, mall voice evacuation, and Ansul hood suppression at food tenants.' },
      { name: 'Front Range Village', type: 'Retail', note: 'Lifestyle center off Harmony and Ziegler; sprinkler-obstruction clearances at tenant build-outs and kitchen-hood tags for the restaurant pad sites.' },
      { name: 'Foothills West Edge', type: 'Residential', note: 'Wildland-urban interface neighborhoods against the foothills west of Overland Trail; NFPA 13D residential sprinklers, monitored detection, and defensible-space-adjacent alarm work.' },
      { name: 'Campus West', type: 'Mixed-Use', note: 'Dense student housing and retail west of CSU along Elizabeth Street; multi-family alarm systems and hood suppression at the restaurant strip.' },
      { name: 'Prospect / I-25 Corridor', type: 'Industrial', note: 'Flex-industrial and last-mile warehouse near the interchange; ESFR sprinkler design, rack-storage commodity classification, and fire pump acceptance testing.' },
      { name: 'Mulberry Corridor', type: 'Commercial Corridor', note: 'Auto, light-industrial, and older commercial along E. Mulberry; dry-pipe systems in unheated space and legacy alarm-panel retrofits.' },
      { name: 'Timnath / Harmony East', type: 'Retail', note: 'Newer big-box and distribution growth toward Timnath; high-piled storage permits, ESFR, and in-rack sprinkler scope.' },
      { name: 'Fort Collins Foothills & Horsetooth', type: 'Residential', note: 'Custom homes and HOA common areas near Horsetooth Reservoir; residential sprinkler retrofits, backflow on irrigation and fire lines, and monitored alarm systems.' },
    ],

    neighborhoodIntro:
      'Because Fort Collins is a planned-route city for us, we group work by corridor — the CSU campus, the Old Town and River District brewery cluster, the Harmony Road tech spine, and the Midtown retail run — so a single scheduled visit can cover several properties. Below are the areas our technicians cover most often.',

    buildingStock:
      'Fort Collins building stock splits along a few clear lines. Colorado State University anchors the center with research labs, high-occupancy assembly venues, and residence halls that carry full life-safety stacks and specialized hood and clean-agent scope. Old Town is historic masonry retail, restaurants, and bars where standpipes, tight sprinkler clearances, and kitchen-hood suppression dominate. The River District along the Poudre holds the brewery cluster — New Belgium, Odell, and Horse & Dragon — where process piping, glycol and CO₂ tanks, ammonia refrigeration, and boil-kettle hood systems drive the inspection scope. The Harmony Road corridor carries the former HP, Broadcom, Intel, and Woodward tech campuses, with clean-agent suppression for labs and server rooms alongside ESFR in the larger bays. Retail concentrates along College Avenue through Midtown and at Front Range Village, while flex-industrial and last-mile warehouse has grown near the Prospect and Harmony I-25 interchanges. On the west edge, foothills neighborhoods sit in the wildland-urban interface, where residential sprinklers and monitored detection matter more than in the flatland subdivisions.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code-driven cadence, documented in a single Poudre Fire Authority–formatted report during your scheduled route visit.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, and standpipe systems exercised per NFPA 25 — from Old Town masonry standpipes to ESFR in the Prospect and Harmony warehouse bays. Includes main-drain tests, valve supervision, and a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including large-device-count CSU residence halls and Midtown retail.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification and direct dispatch into Poudre Fire Authority when an alarm confirms — with fire-watch coverage arranged around our scheduled Fort Collins visits.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection control testing for irrigation, fire-line, and domestic backflow preventers on the Harmony and Horsetooth-area properties; certification filed with Fort Collins Utilities.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards — including the Class K units behind Old Town and Front Range Village kitchens.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — heavy scope at the Old Town restaurant row, brewery taprooms, and the Midtown food tenants.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for CSU research labs, Harmony Road server rooms, and the tech-campus data closets left behind by HP, Broadcom, and Intel.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review with Poudre Fire Authority’s Community Safety and Service Bureau, plan-reviewer coordination, and deficiency-correction project management for CSU-adjacent, brewery, and property-management portfolios.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to Poudre Fire Authority’s preferred layout — so corrections are approved without a return trip up I-25.',

    industriesServed: [
      'Higher education and research labs',
      'Breweries and food-and-beverage production',
      'Restaurants and taprooms',
      'Retail centers and big-box',
      'Office and tech campuses',
      'Light industrial and distribution',
      'Multi-family and student housing',
      'HOA & community associations',
      'Assisted living and healthcare',
      'Data centers and server rooms',
      'Automotive and repair',
      'Religious and community facilities',
    ],

    deficienciesTitle: 'What Poudre Fire Authority flags most often on Fort Collins inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Fort Collins properties. None of this is a citation against a specific building — it’s the pattern of findings our technicians document and correct most frequently in PFA’s jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads at brewery and retail build-outs',
        body: 'New taproom tanks, fermenters, and tenant partitions installed too close to sprinkler deflectors are a top finding along the River District and Front Range Village. We measure clearance to the inch and document the correction scope so PFA approval is fast.',
      },
      {
        title: 'Kitchen hood suppression out of date',
        body: 'Old Town’s historic restaurant buildings and the College Avenue food tenants carry a lot of pre-UL-300 wet-chemical systems. PFA increasingly flags them at tenant turnover — we inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries have a 4–5 year service life. Failed load tests are a top deficiency across CSU-adjacent housing and the Harmony tech campuses — we track every panel’s battery age and replace proactively during scheduled visits.',
      },
      {
        title: 'Dry-pipe systems in unheated Mulberry-corridor space',
        body: 'Older warehouse and auto buildings along E. Mulberry run dry systems that miss quarterly trip tests and the 3-year full-flow trip. We catch the cadence and exercise the trip valve so the system is proven before winter.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Irrigation and fire-line backflow preventers on the Harmony corridor and foothills HOA properties often lapse on annual testing. We file the certification directly with Fort Collins Utilities and reference it in the PFA report.',
      },
      {
        title: 'Special-hazard suppression not re-commissioned after lab or server changes',
        body: 'CSU labs and the former HP/Intel server rooms get reconfigured without re-commissioning the clean-agent system, leaving room-integrity and agent-concentration gaps. We re-run the enclosure integrity test and re-commission with PFA sign-off.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'A common PFA finding on Old Town and Midtown buildings — missing or broken FDC caps let debris into the check valve and can fail an inspection outright. We carry replacements and install them on the spot.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Fort Collins, Colorado?',
        answer: 'Poudre Fire Authority is the AHJ for Fort Collins. PFA’s Community Safety and Service Bureau issues permits, conducts on-site fire inspections, and reviews sprinkler, alarm, and underground fire-line submittals for properties inside the city and the surrounding Larimer County fire district.',
      },
      {
        question: 'Do you actually serve Fort Collins if your office is in Centennial?',
        answer: 'Yes. Fort Collins is about 65 miles north of our Centennial shop, so we run it as a scheduled route rather than an on-demand metro call. We batch inspections along the CSU campus, Old Town, the Harmony corridor, and Midtown into planned technician visits, which keeps travel efficient and lets us cover several properties in one trip. Tell us your due dates and we build them into the next Fort Collins run.',
      },
      {
        question: 'How do you handle fire protection for the Fort Collins breweries?',
        answer: 'Brewery work in the River District — around New Belgium, Odell, and Horse & Dragon — goes well past a standard sprinkler tag. We handle process-area sprinkler clearances around tanks and fermenters, boil-kettle and packaging-line hood suppression, and the alarm interlocks tied to ammonia refrigeration and CO₂. We coordinate the scope so production downtime is minimal.',
      },
      {
        question: 'Can you inspect fire systems on the CSU campus and student housing?',
        answer: 'Yes. We test large-device-count alarm systems in residence halls, standpipes and sprinklers in assembly venues, and clean-agent and lab-hood suppression in research buildings. Campus and Campus West student housing carry heavy alarm and hood scope, and we schedule around class and residence calendars to limit disruption.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Fort Collins?',
        answer: 'Per NFPA 25 and the IFC as adopted by Poudre Fire Authority, wet-pipe systems require quarterly and annual inspections with an internal inspection every 5 years. Dry-pipe systems — common in the unheated Mulberry-corridor warehouses — add quarterly trip tests and a 3-year full-flow trip test. We track every cadence and email you 30 days before a test is due.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Fort Collins restaurants?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require automatic fire-extinguishing systems for commercial cooking — the hood, duct, and plenum. UL-300 wet-chemical systems are the current standard. Old Town’s historic restaurant spaces and the College Avenue food tenants often run older systems that are grandfathered but typically need replacement at turnover or major renovation.',
      },
      {
        question: 'Do you do fire protection for the Harmony Road tech buildings?',
        answer: 'Yes. The former HP, Broadcom, Intel, and Woodward campuses along Harmony carry clean-agent suppression for labs and server rooms, ESFR sprinklers in the larger bays, and fire pumps that need annual flow testing. We handle FM-200, Novec 1230, and CO₂ systems and re-commission them after tenant or equipment changes with PFA sign-off.',
      },
      {
        question: 'What about homes and HOAs on the west edge against the foothills?',
        answer: 'The neighborhoods west toward Overland Trail and Horsetooth sit in the wildland-urban interface, where NFPA 13D residential sprinklers and monitored detection carry more weight. We inspect and maintain residential sprinkler systems, test irrigation and fire-line backflow, and provide monitored alarm and smoke detection for custom homes and HOA common areas.',
      },
    ],

    ctaPair: [
      {
        title: 'Get on the next Fort Collins route.',
        descriptor: 'Send us your property and due dates, and we’ll fold your inspection into the next scheduled Fort Collins visit — grouped with nearby work so it’s cost-efficient.',
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
      title: 'Fire Protection Services in Fort Collins, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and consulting in Fort Collins, Colorado. Scheduled-route service for CSU, Old Town breweries, and the Harmony tech corridor under Poudre Fire Authority. NICET-certified technicians.',
      keywords:
        'fire protection Fort Collins CO, fire inspections Fort Collins, sprinkler inspection Fort Collins, fire alarm testing Fort Collins, brewery fire suppression Fort Collins, kitchen hood suppression Fort Collins, CSU fire protection, Poudre Fire Authority inspections, backflow testing Fort Collins',
      canonical: '/service-areas/fort-collins-co/',
    },
  },

// ──────────────────────────────────────────────────────────────────
// FRANKTOWN, COLORADO
// ──────────────────────────────────────────────────────────────────
{
  slug: 'franktown-co',
  city: 'Franktown',
  state: 'CO',
  county: 'Douglas County',
  bannerTitle: 'Fire Protection Franktown, CO',
  bannerSubtitle: 'FRANKTOWN FIRE PROTECTION',
  bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

  heroIntro:
    'Franktown is the crossroads where CO-83 (Parker Road) meets CO-86, a rural pocket of Douglas County built on large-acreage homesites, working agricultural ground, and a short row of roadside commercial buildings. Red Rocks Fire Protection reaches Franktown on a scheduled service route out of our Centennial shop, so the propane-heated shops off Russellville Road, the well-fed sprinkler systems on the acreages near Castlewood Canyon, and the handful of commercial buildings at the highway junction all get inspected on a planned visit rather than a stopgap emergency run. Every report we leave is written so the Franktown fire authority accepts it without a callback.',

  ahj: {
    name: 'Franktown Fire Protection District',
    adoptedNFPA: [
      'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
      'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
      'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
      'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
      'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
      'International Fire Code (IFC) — current adopted edition',
    ],
    nonEmergencyPhone: '(303) 688-3811',
    website: 'https://www.franktownfire.org/',
    note:
      'Franktown Fire Protection District is the Authority Having Jurisdiction for Franktown and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 688-3811, and permitting and code information is at https://www.franktownfire.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Franktown Fire Protection District’s prevention staff expect, so corrections get signed off without rework.',
  },

  neighborhoods: [
    { name: 'CO-83 / CO-86 Junction', type: 'Commercial Corridor', note: 'The commercial heart of Franktown — a short cluster of roadside buildings, a market, and service businesses where extinguisher, alarm, and small-system inspections concentrate.' },
    { name: 'Russellville Road corridor', type: 'Residential', note: 'Large-acreage rural homesites with detached shops and barns; propane appliances and unheated outbuildings drive dry-system and clearance checks.' },
    { name: 'Castlewood Canyon edge', type: 'Residential', note: 'Homes bordering Castlewood Canyon State Park in heavy Gambel-oak and pine; wildland-urban interface exposure makes ember-resistant detail and defensible-space awareness a real inspection factor.' },
    { name: 'Bannockburn', type: 'Residential', note: 'Established large-lot subdivision off CO-83; wells and private fire-line backflow are the recurring test items rather than municipal water.' },
    { name: 'Sage Port', type: 'Residential', note: 'Rural residential acreages with equestrian outbuildings; barn hay storage and generator/propane hazards shape the walk-through.' },
    { name: 'Franktown Farms', type: 'Residential', note: 'Agricultural and large-parcel residential mix; grain, hay, and equipment storage add commodity-classification and clearance considerations.' },
    { name: 'Flintwood Road', type: 'Residential', note: 'Scattered acreage homes and small farms along the county road; long private drives and well systems affect fire-flow and access planning.' },
    { name: 'Deerfield', type: 'Residential', note: 'Custom homes on wooded lots south of the junction; NFPA 13D residential sprinklers fed by private wells and tanks need routine flow verification.' },
    { name: 'Ponderosa Park', type: 'Residential', note: 'Wooded rural neighborhood with dense conifer cover; wildland-interface exposure and monitored smoke detection are common upgrade scopes.' },
    { name: 'Sun Country', type: 'Residential', note: 'Rural residential enclave off CO-86; large detached garages and workshops with propane heat call for freeze protection and dry-system review.' },
    { name: 'Agricultural CO-86 East', type: 'Industrial', note: 'Working farms and ag operations east toward Elizabeth; fuel storage, drying equipment, and metal ag buildings define the hazard profile here.' },
    { name: 'Highway 83 South (toward Elbert County line)', type: 'Retail', note: 'A thin strip of roadside commercial and service properties; small extinguisher, hood, and alarm scopes rather than large sprinklered buildings.' },
  ],

  neighborhoodIntro:
    'Franktown is rural crossroads country, not a grid of subdivisions — the properties we inspect are spread across large-acreage homesites, working farms, and a small commercial cluster at the CO-83 / CO-86 junction. Below are the roads, subdivisions, and pockets our technicians cover on a scheduled Franktown route.',

  buildingStock:
    'Franktown’s built environment is mostly large-acreage single-family homes, working agricultural buildings, and a small commercial footprint at the highway junction. Many homes sit on private wells and septic, which means fire-line and irrigation backflow testing tie back to a well and pressure tank rather than a municipal main. Detached shops, barns, and equipment sheds are frequently unheated and propane-served, so dry-pipe and freeze-protected systems and clearances around propane appliances are recurring inspection items. Newer custom homes near Castlewood Canyon and in wooded pockets like Ponderosa Park often carry NFPA 13D residential sprinklers and monitored detection, and the whole area sits in a wildland-urban interface where oak brush and conifer stands push defensible space and ember exposure into the conversation. Commercial stock is limited to the roadside buildings at the CO-83 / CO-86 junction and a scattering of ag-related operations along CO-86.',

  servicesOffered: [
    {
      title: 'Annual NFPA Fire Inspections',
      body: 'Sprinklers, alarms, extinguishers, backflow, and suppression on their code-driven cadences, batched into one scheduled Franktown visit so a property miles from the next one still gets a complete report in a single trip.',
    },
    {
      title: 'Fire Sprinkler & Standpipe Testing',
      body: 'Wet, dry, and NFPA 13D residential systems exercised per NFPA 25. On well-fed properties we verify fire-flow off the tank and pump, run main-drain tests, and check freeze protection on lines feeding unheated shops and barns.',
    },
    {
      title: 'Fire Alarm Testing',
      body: 'Initiating devices, notification appliances, panels, and secondary power tested to NFPA 72. On large rural parcels we confirm the monitored signal actually reaches the central station over the property’s communication path before we sign off.',
    },
    {
      title: '24/7 Monitoring',
      body: 'UL-listed central station monitoring with signal verification and fire-watch protocols — the way a homestead or shop several minutes from the nearest station gets an alarm confirmed and passed to responders without waiting on someone noticing smoke.',
    },
    {
      title: 'Backflow Prevention',
      body: 'Annual cross-connection testing for private fire-line, irrigation, and domestic backflow preventers on well systems, with certification filed to the water authority or district that governs your parcel.',
    },
    {
      title: 'Fire Extinguisher Service',
      body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging — including the Class B and Class K extinguishers common around propane, fuel storage, and ag operations near the CO-86 corridor.',
    },
    {
      title: 'Kitchen Hood Suppression',
      body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A for the market and roadside food service at the Franktown junction.',
    },
    {
      title: 'Dry-System & Freeze-Protection Service',
      body: 'Dry-pipe and antifreeze-protected sprinkler service for the unheated shops, barns, and detached garages that define Franktown property — trip tests, air-pressure checks, and low-point drainage before winter sets in.',
    },
    {
      title: 'Life-Safety Consulting & Code Navigation',
      body: 'Wildland-interface guidance, plan-review coordination with the Franktown fire authority, and deficiency-correction management for acreage owners and the small commercial operators at the highway junction.',
    },
  ],

  servicesIntro:
    'Every service below is run by NICET- or CSA-certified technicians on a planned Franktown route, with reports formatted to the deficiency-list layout Douglas County and the local fire authority expect — so corrections clear without a second trip out to your acreage.',

  industriesServed: [
    'Large-acreage rural residential',
    'Agriculture and working farms',
    'Equestrian and barn operations',
    'Roadside retail and service businesses',
    'Propane and fuel-served properties',
    'Small commercial at the highway junction',
    'Well-water residential systems',
    'Detached shops and outbuildings',
    'Wildland-interface homes',
    'Food service and small restaurants',
    'Community and religious facilities',
    'Equipment and cold storage',
  ],

  deficienciesTitle: 'What the Franktown fire authority flags most often on rural Douglas County inspections.',
  deficienciesIntro:
    'These are the recurring deficiency categories we correct across Franktown properties. None of it is a citation from a specific address — it’s the pattern our technicians document most on acreage homesites, ag buildings, and the small commercial row at the junction.',

  commonDeficiencies: [
    {
      title: 'Freeze damage and failed dry systems in unheated outbuildings',
      body: 'Barns, shops, and detached garages on Russellville Road and Sun Country parcels run unheated through Front Range winters. Dry-pipe systems lose air, low points hold water, and antifreeze loops drift out of spec. We trip-test, drain low points, and verify freeze protection before the first hard freeze.',
    },
    {
      title: 'Private-well fire-flow and backflow that never gets verified',
      body: 'Homes off municipal water depend on a well, pump, and pressure tank to feed a residential sprinkler or fire line, and that flow is rarely re-checked after install. We verify available flow at the system and test the fire-line and irrigation backflow preventers, then file certification with the governing water authority.',
    },
    {
      title: 'Propane appliance and fuel-storage clearances',
      body: 'Propane heat, generators, and on-site fuel are the norm out here, and appliances get boxed in by stored equipment, hay, or shelving over the years. We document required clearances around fired appliances and fuel storage and flag the correction scope for the fire authority.',
    },
    {
      title: 'Extinguishers missing, wrong class, or out of service around ag and fuel hazards',
      body: 'Farms and shops frequently carry the wrong extinguisher for the hazard — a dusty ABC by a fuel tank, or none at all in an equipment barn. We right-size to Class B and Class K where fuel and cooking hazards demand it, then tag, mount, and log every unit.',
    },
    {
      title: 'Fire alarm panel battery failures on remote parcels',
      body: 'Sealed lead-acid backup batteries carry a 4–5 year service life, and a failed load test on a property minutes from the nearest apparatus is a real exposure. We track panel battery age across the route and replace proactively rather than waiting for a trouble signal.',
    },
    {
      title: 'Defensible space and interface exposure ignored around the system',
      body: 'Homes bordering Castlewood Canyon and the wooded pockets of Ponderosa Park sit in oak brush and conifer. Vegetation crowds propane tanks, FDCs, and system access, and ember exposure goes unaddressed. We note interface hazards affecting the fire-protection equipment and point owners to defensible-space corrections.',
    },
    {
      title: 'Kitchen hood suppression lapsed at the junction food service',
      body: 'The small food service at the CO-83 / CO-86 junction runs the same UL-300 wet-chemical scope as any restaurant, but semi-annual service slips on low-volume operations. We inventory the hood system, test and tag to NFPA 96, and put it on a tracked cadence.',
    },
  ],

  faq: [
    {
      question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Franktown, Colorado?',
      answer: 'Fire-code enforcement for the Franktown area of Douglas County runs through the local Franktown fire protection arrangement. Small rural districts sometimes share plan review, staff, or apparatus with neighboring departments, so before you submit for a permit, confirm the current inspection and permitting contact directly with the fire authority that covers your specific parcel. We write our reports to the deficiency-list format Douglas County reviewers expect.',
    },
    {
      question: 'Franktown is pretty rural — will Red Rocks Fire Protection actually come out?',
      answer: 'Yes. Franktown sits on our scheduled service route out of the Centennial shop at 7076 S. Alton Way. Because the drive out CO-83 is longer than an in-town call, we work Franktown as a planned visit rather than a same-hour emergency run — we batch your sprinkler, alarm, extinguisher, and backflow inspections into one trip so an acreage property miles from the next job gets a complete report without repeat drives.',
    },
    {
      question: 'How often do fire sprinklers need to be inspected on a Franktown property?',
      answer: 'Per NFPA 25 and the adopted IFC, wet-pipe systems require quarterly and annual inspections with an internal inspection every 5 years, and dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. Dry systems matter here because so many Franktown shops and barns are unheated. We track every cadence for every system we service and reach out ahead of each due date so we can schedule the drive out.',
    },
    {
      question: 'My home is on a well, not city water — how does that affect fire-line and backflow testing?',
      answer: 'On well systems the fire line, irrigation line, and residential sprinklers draw off a pump and pressure tank rather than a municipal main, so we verify available fire-flow at the system before we test the backflow preventers. The annual backflow certification still applies; we file it with the water authority or district that governs your parcel rather than a city utility.',
    },
    {
      question: 'Do you handle freeze protection for unheated shops and barns?',
      answer: 'Yes. Unheated detached shops, barns, and equipment buildings are the norm across Franktown, and they run dry-pipe or antifreeze-protected sprinkler systems. Before winter we trip-test dry systems, check air pressure, drain low points that hold water, and verify antifreeze concentration so a hard freeze doesn’t crack a line or disable the system.',
    },
    {
      question: 'What fire hazards do you look at on agricultural and large-acreage properties here?',
      answer: 'On Franktown farms and acreages we focus on propane appliance and fuel-storage clearances, generator installations, hay and grain storage, and the right extinguisher class for each hazard — Class B around fuel, Class K where there’s commercial cooking. We also flag wildland-interface exposure where oak brush and conifer crowd propane tanks, fire department connections, and system access.',
    },
    {
      question: 'How does the wildland-urban interface near Castlewood Canyon affect my inspection?',
      answer: 'Homes bordering Castlewood Canyon State Park and the wooded pockets like Ponderosa Park sit in heavy Gambel oak and pine, which is a genuine ember and radiant-heat exposure. Our inspection covers the fire-protection equipment itself, but we note where vegetation crowds the system, propane tanks, or access, and we point owners toward defensible-space corrections that protect the equipment and the structure.',
    },
    {
      question: 'How quickly can you respond if a system in Franktown goes down?',
      answer: 'Franktown is farther out than our in-town service area, so we don’t promise a fixed response window the way we do inside the Denver metro. What we do run is 24/7 UL-listed monitoring that confirms an alarm and passes it to responders immediately, plus documented fire-watch coverage when a system has to be taken offline for repair — so the gap between a problem and a response doesn’t depend on someone noticing smoke on a remote parcel.',
    },
  ],

  ctaPair: [
    {
      title: 'Get on the Franktown Service Route.',
      descriptor: 'Tell us about your acreage, shop, or commercial building and we’ll batch your inspections into one planned visit out CO-83 — no wasted trips.',
      href: '/contact',
      label: 'Get in touch',
    },
    {
      title: 'See All Our Services.',
      descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, alarms, monitoring, suppression, backflow, and dry-system service all under one roof.',
      href: '/services',
      label: 'Browse services',
    },
  ],

  meta: {
    title: 'Fire Protection Services in Franktown, CO | Red Rocks Fire Protection',
    description:
      'NFPA fire inspections, sprinkler and alarm testing, dry-system and freeze protection, backflow, and 24/7 monitoring for Franktown, Colorado — rural Douglas County acreages, ag buildings, and the CO-83 / CO-86 junction. NICET-certified technicians on a scheduled service route.',
    keywords:
      'fire protection Franktown CO, fire inspections Franktown, sprinkler inspection Franktown, dry system testing Franktown, backflow testing Franktown, rural fire protection Douglas County, propane hazard inspection Franktown, wildland interface fire protection Castlewood Canyon',
    canonical: '/service-areas/franktown-co/',
  },
},

  // ──────────────────────────────────────────────────────────────────
  // GOLDEN, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'golden-co',
    city: 'Golden',
    state: 'CO',
    county: 'Jefferson County',
    bannerTitle: 'Fire Protection Golden, CO',
    bannerSubtitle: 'GOLDEN FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Golden sits at the mouth of Clear Creek Canyon where the plains hand off to the foothills, and that geography drives everything about fire protection here. A Molson Coors brewhouse with ammonia refrigeration and grain-dust hazards, School of Mines labs and dorms, and a downtown of unsprinklered 19th-century masonry along Washington Avenue all sit within a few blocks of wildland that runs up North and South Table Mountain and into the canyon. Every commercial and multi-family property in Golden answers to the Golden Fire Department for code enforcement, and Red Rocks Fire Protection writes every inspection report to pass on the first Golden Fire review.',

    ahj: {
      name: 'Golden Fire Department',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 384-8090',
      website: 'https://www.cityofgolden.net/government/departments-divisions/fire-department/',
      note:
        'Fire-code authority in Golden is address-dependent: properties inside the city are served by Golden Fire Department at (303) 384-8090, while areas outside the city limits fall under West Metro Fire Rescue at (303) 989-4307 (westmetrofire.org). We confirm which AHJ covers a property before scheduling and format inspection reports to that authority’s preferred layout.',
    },

    neighborhoods: [
      { name: 'Downtown / Washington Avenue', type: 'Mixed-Use', note: 'The historic core under the "Howdy Folks" arch; older unsprinklered masonry with retail below and residential or office above, plus heavy restaurant and tavern occupancy needing kitchen-hood suppression.' },
      { name: 'Colorado School of Mines campus', type: 'Mixed-Use', note: 'Chemistry, mining, and materials labs, high-occupancy assembly at Lockridge Arena and the student center, and dorm/residence-hall sprinkler and alarm scopes on an academic calendar.' },
      { name: 'Coors / Molson Coors brewery district', type: 'Industrial', note: 'Massive process facility along Clear Creek: anhydrous ammonia refrigeration, grain and malt dust, boiler and packaging lines — special-hazard suppression, foam, and fire-pump testing.' },
      { name: 'Clear Creek corridor', type: 'Mixed-Use', note: 'Kayak park, breweries, and mixed commercial hugging the creek through downtown; flood-plain siting and outdoor-assembly events complicate egress and system access.' },
      { name: 'South Golden Road corridor', type: 'Commercial Corridor', note: 'The retail and service spine toward US-6; grocery-anchored strips, auto service, and chain restaurants with recurring hood, sprinkler-obstruction, and backflow scopes.' },
      { name: 'Golden Gate Canyon / canyon-mouth WUI', type: 'Residential', note: 'Foothill homes where the street grid meets wildland; long driveways, limited water supply, and defensible-space concerns push residential sprinkler and monitored-alarm retrofits.' },
      { name: 'North Table Mountain / Fossil Trace', type: 'Residential', note: 'Newer single-family and golf-course homes against open space on the mesa; NFPA 13D residential sprinkler and ember-exposure detection considerations.' },
      { name: 'South Table Mountain / federal research campus', type: 'Commercial Corridor', note: 'Government and research-lab buildings on the mesa edge near NREL; clean-agent suppression for labs and server rooms and specialized alarm coverage.' },
      { name: 'Pleasant View', type: 'Residential', note: 'Established unincorporated-edge neighborhood east of the mesa; mixed home ages with legacy smoke-detection layouts and irrigation backflow testing needs.' },
      { name: 'Applewood (west edge)', type: 'Residential', note: 'Mature large-lot homes toward the Jefferson County line; older systems and remodel-triggered residential sprinkler and alarm upgrades.' },
      { name: 'Golden Hill / Mines-adjacent rentals', type: 'Residential', note: 'Dense student rental housing near campus; high-turnover occupancy where smoke-alarm and CO detection compliance and extinguisher service are recurring findings.' },
      { name: 'US-6 / Heritage Road light industrial', type: 'Industrial', note: 'Flex-warehouse and light manufacturing along the highway; ESFR sprinkler systems, rack-storage commodity classification, and fire-pump testing.' },
    ],

    neighborhoodIntro:
      'Golden packs a heavy-industry brewery, a technical university, a 19th-century downtown, and canyon-mouth wildland into a compact footprint, so the property mix shifts block by block. Below are the named areas and corridors our technicians cover most often across the city.',

    buildingStock:
      'Golden’s building stock splits into four distinct groups. Downtown along Washington Avenue is dominated by late-1800s and early-1900s masonry — brick storefronts with residential or office space above, much of it predating modern sprinkler requirements and now carrying heavy restaurant and tavern occupancy. The Molson Coors campus along Clear Creek is a large-scale process plant with ammonia refrigeration, grain and malt handling, boilers, and high-volume packaging, each carrying its own special-hazard profile. The Colorado School of Mines campus adds chemistry and materials labs, assembly occupancies, and residence halls on an academic cycle. Around those cores sit foothill and mesa residential — from student rentals in Golden Hill to newer homes at Fossil Trace and North Table Mountain that back directly onto wildland open space — plus light-industrial flex space along US-6 and the retail spine of South Golden Road.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression on each system’s own code-driven cadence, from a Washington Avenue restaurant to a Mines residence hall — documented in one Golden Fire–formatted report.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25. Dry-pipe systems matter here: unheated warehouse and canyon-edge structures rely on them, so we run trip tests, main-drain tests, and valve supervision with a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including the mixed lab, assembly, and dorm coverage across the School of Mines campus.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and fire-watch protocols, dispatching directly to Golden Fire when an alarm confirms — valuable for canyon-mouth WUI properties where minutes count.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for irrigation, fire-line, and domestic backflow preventers on campus, brewery, and foothill-residential systems; certification filed with the water utility.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards — including the K-class units behind every Washington Avenue kitchen line.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — a constant scope across the downtown restaurant and brewery-taproom concentration along Clear Creek.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for research labs, server rooms, and process spaces — relevant to Mines labs, South Table Mountain research buildings, and specialized areas of the Molson Coors plant.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review with Golden Fire, plan-reviewer coordination, and deficiency-correction management for downtown mixed-use retrofits, campus buildings, and WUI residential portfolios.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to the Golden Fire Department’s preferred deficiency-list layout — so corrections are approved without a return visit.',

    industriesServed: [
      'Breweries and food/beverage process facilities',
      'Higher education and campus housing',
      'Restaurants, taverns, and taprooms',
      'Government and research laboratories',
      'Historic downtown mixed-use',
      'Multi-family and student housing',
      'Light industrial and warehouse',
      'Retail centers and grocery-anchored strips',
      'HOA & community associations',
      'Hospitality and lodging',
      'Automotive and equipment service',
      'Assisted living and healthcare',
    ],

    deficienciesTitle: 'What the Golden Fire Department flags most often on Golden inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Golden properties. None of this is a citation from a specific property — it’s the pattern of findings our technicians document and correct most often in this jurisdiction, from Washington Avenue kitchens to canyon-edge homes.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads in historic downtown build-outs',
        body: 'Washington Avenue tenant remodels routinely drop new ceilings, ductwork, or shelving too close to sprinkler deflectors in older brick buildings. We measure clearance to the inch and document the correction scope so Golden Fire approval is fast.',
      },
      {
        title: 'Kitchen hood suppression out of date',
        body: 'The downtown restaurant, tavern, and taproom density means a lot of hood systems. Pre-UL-300 wet-chemical units and lapsed six-month NFPA 96 service tags are among the most common findings — we inventory hoods by hazard class and flag UL-300 conversions ahead of lease renewal.',
      },
      {
        title: 'Dry-pipe system trip-test and low-point drainage gaps',
        body: 'Unheated warehouse space along US-6 and canyon-edge structures depend on dry-pipe systems, and skipped low-point drainage or overdue trip tests are frequent write-ups. We run the full-flow trip test on schedule and log every low-point drain.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries have a 4–5 year service life, and failed load tests are a top deficiency across the Mines campus and downtown mixed-use panels. We track every panel’s battery age and replace proactively.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Irrigation, fire-line, and domestic backflow preventers on campus, brewery, and foothill-residential systems need annual testing by a certified cross-connection tester. We file the certification with the water utility and Golden Fire.',
      },
      {
        title: 'Smoke and CO detection gaps in high-turnover student rentals',
        body: 'Golden Hill and Mines-adjacent rental housing turns over constantly, and disabled or missing smoke and carbon-monoxide detectors are a recurring finding. We test, document, and bring detection back to code before occupancy.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'Missing or broken FDC caps let debris into the check valve and can fail an inspection outright — common on older downtown and campus systems. We carry replacements on the truck and install them on the spot.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Golden, Colorado?',
        answer: 'The Golden Fire Department is the AHJ for the City of Golden. Golden Fire handles fire-code enforcement, on-site inspections, and plan review for sprinkler, alarm, and underground fire-line work across the city — from Washington Avenue and the Molson Coors campus to the School of Mines and the Table Mountain neighborhoods. Confirm permitting and plan-review specifics directly with the Golden Fire Department.',
      },
      {
        question: 'Do you serve Golden even though your office is in Centennial?',
        answer: 'Yes. Golden is inside our Denver metro service area, so we offer a 90-minute emergency response window there. Golden is roughly a straight run up C-470 and US-6 from our Centennial office, and our technicians already work the west metro regularly for brewery, campus, and foothill-residential accounts.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Golden?',
        answer: 'Per NFPA 25 and the IFC as adopted by the Golden Fire Department, wet-pipe systems require quarterly and annual inspections plus an internal inspection every 5 years. Dry-pipe systems — common in unheated warehouse and canyon-edge buildings here — add quarterly trip tests and a 3-year full-flow trip test. We track every cadence for every system we service and email you 30 days before a test is due.',
      },
      {
        question: 'Can you handle special-hazard suppression at industrial and research sites in Golden?',
        answer: 'Yes. Golden’s heavy-process brewery operations and its research and campus labs both carry special-hazard exposures — from ammonia refrigeration and grain-dust environments to clean-agent-protected lab and server spaces. We inspect, test, and maintain FM-200, Novec 1230, and CO₂ systems, and coordinate with Golden Fire on the specialized scopes those occupancies require.',
      },
      {
        question: 'Do you inspect kitchen hood suppression for downtown Golden restaurants and taprooms?',
        answer: 'Yes, and it’s one of our busiest scopes in the city given the restaurant and brewery-taproom density along Washington Avenue and Clear Creek. NFPA 96 requires automatic fire-extinguishing systems for commercial cooking operations, with a semiannual inspection of the hood, duct, and plenum. UL-300 wet-chemical systems are the current standard; older units usually need replacement at tenant turnover or major renovation.',
      },
      {
        question: 'How do you handle fire protection for homes in the wildland-urban interface around Golden?',
        answer: 'Homes on the Table Mountain flanks and near the mouth of Golden Gate and Clear Creek canyons sit where the street grid meets wildland, often with limited water supply and long access. We inspect and maintain NFPA 13D residential sprinkler systems and monitored alarm and detection, and our 24/7 central station dispatches Golden Fire the moment an alarm confirms — which matters most where response distances are longer.',
      },
      {
        question: 'Do you work with the Colorado School of Mines campus buildings?',
        answer: 'We service the full mix an academic campus generates — sprinkler and alarm systems in residence halls, high-occupancy assembly spaces, and lab buildings with chemistry, mining, and materials hazards that may need clean-agent suppression. We schedule around the academic calendar and format reports to the Golden Fire deficiency layout so corrections clear before the next semester.',
      },
      {
        question: 'How quickly can you respond to a fire-protection emergency in Golden?',
        answer: 'Golden is inside our Denver metro service area, so our emergency response window for fire-protection emergencies in the city is typically within 90 minutes, and often faster off-peak up C-470 and US-6. We staff a 24/7 emergency line and dispatch the same technicians who know your property, not a call center.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Golden Inspection.',
        descriptor: 'Tell us about your property — downtown storefront, brewery, campus building, or foothill home — and we’ll route the right NICET-certified technician, usually within a few business days and faster if it’s urgent.',
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
      title: 'Fire Protection Services in Golden, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and consulting in Golden, Colorado. Serving the Golden Fire Department jurisdiction from downtown Washington Avenue to the School of Mines and Table Mountain. NICET-certified technicians, 90-minute Denver-metro emergency response.',
      keywords:
        'fire protection Golden CO, fire inspections Golden, sprinkler inspection Golden, fire alarm testing Golden, backflow testing Golden, kitchen hood suppression Golden, special hazard suppression Golden, fire protection company Golden Colorado, Golden Fire Department inspections',
      canonical: '/service-areas/golden-co/',
    },
  },

// ──────────────────────────────────────────────────────────────────
// GREELEY, COLORADO
// ──────────────────────────────────────────────────────────────────
{
  slug: 'greeley-co',
  city: 'Greeley',
  state: 'CO',
  county: 'Weld County',
  bannerTitle: 'Fire Protection Greeley, CO',
  bannerSubtitle: 'GREELEY FIRE PROTECTION',
  bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

  heroIntro:
    'Greeley runs on beef, oil, gas, and grain, and every one of those industries stacks fire-protection scope that a strip-mall inspector never touches — anhydrous ammonia refrigeration at the JBS USA plant, high-pile grain and feed storage, wellsite equipment, and a downtown of century-old brick storefronts along 8th and 9th. Red Rocks Fire Protection works Greeley on scheduled routes out of our Centennial office, so we batch the drive north up US-85 and I-25, keep your NFPA 25 and NFPA 72 cadences on the calendar, and hand the Greeley Fire Department a report it will accept the first time.',

  ahj: {
    name: 'Greeley Fire Department',
    adoptedNFPA: [
      'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
      'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
      'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
      'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
      'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
      'International Fire Code (IFC) — current adopted edition',
    ],
    nonEmergencyPhone: '(970) 350-9500',
    website: 'https://greeleyfire.com/',
    note:
      'Greeley Fire Department is the Authority Having Jurisdiction for Greeley and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (970) 350-9500, and permitting and code information is at https://greeleyfire.com/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Greeley Fire Department’s prevention staff expect, so corrections get signed off without rework.',
  },

  neighborhoods: [
    { name: 'Downtown Greeley (8th & 9th)', type: 'Mixed-Use', note: 'Century-old unreinforced-masonry storefronts, upper-floor residential, and restaurants; standpipe testing, kitchen-hood suppression, and legacy alarm retrofits are the recurring scopes.' },
    { name: 'UNC Campus / University District', type: 'Mixed-Use', note: 'University of Northern Colorado dorms, academic halls, and off-campus student housing; dormitory sprinkler coverage, mass-notification, and monitored alarms on tight academic-calendar test windows.' },
    { name: 'Greeley Mall corridor (23rd Ave)', type: 'Retail', note: 'Large-format retail and food tenants; mall-wide voice evacuation, Ansul kitchen-hood systems, and sprinkler-obstruction clearances at tenant turnover.' },
    { name: 'JBS / East Greeley industrial', type: 'Industrial', note: 'JBS USA beef-processing complex and surrounding food plants; anhydrous ammonia refrigeration hazard, freezer-space dry-pipe systems, and fire-pump testing on heavy process loads.' },
    { name: 'Greeley–Weld County Airport (GXY)', type: 'Industrial', note: 'Hangars, FBO fuel handling, and flex-industrial; foam and AFFF hangar suppression, high-hazard occupancy sprinklers, and clean-agent for avionics rooms.' },
    { name: '10th Street corridor (US-34 Business)', type: 'Commercial Corridor', note: 'Auto dealerships, hotels, and strip retail spine across the city; wet sprinkler systems, alarm panels, and extinguisher routes at high property density.' },
    { name: '8th Avenue corridor', type: 'Commercial Corridor', note: 'Older office, medical, and mixed commercial from downtown south; aging wet-pipe systems with missing hydraulic nameplates and dated backflow assemblies.' },
    { name: 'West Greeley / Centerplace & Highland Hills', type: 'Retail', note: 'Grocery-anchored power centers and newer restaurants near 47th Ave; UL-300 hood suppression and high-piled retail storage considerations.' },
    { name: 'Island Grove Regional Park', type: 'Mixed-Use', note: 'Event centers, exhibition buildings, and the Greeley Stampede grounds; assembly-occupancy alarm and egress systems, plus seasonal fire-watch during large events.' },
    { name: 'Promontory & Poudre River Trail industrial', type: 'Industrial', note: 'Manufacturing, feed, and ag-processing along the river and rail; ESFR sprinklers, dust-collection hazards, and rack-storage commodity classification.' },
    { name: 'Boomerang / West 20th Street residential', type: 'Residential', note: 'Newer single-family and townhome subdivisions west of town; NFPA 13D residential sprinkler and monitored-alarm retrofits, plus HOA backflow testing.' },
    { name: 'Weld County oil-and-gas service yards', type: 'Industrial', note: 'Energy-service shops, tank batteries, and equipment yards across the county; extinguisher fleets, foam suppression, and combustible-liquid storage compliance.' },
  ],

  neighborhoodIntro:
    'Greeley is a working city — beef and food processing on the east side, energy-service yards across Weld County, a university district around UNC, and a downtown of aging masonry along 8th and 9th. Below are the areas and corridors our technicians cover on scheduled Greeley routes.',

  buildingStock:
    'Greeley’s commercial fabric splits into a few distinct pieces. Downtown around 8th and 9th is older unreinforced-masonry storefronts with upper-floor residential and restaurants, many on original wet-pipe systems and legacy alarm panels. The University of Northern Colorado anchors a dense district of dormitories, academic buildings, and off-campus student housing with heavy sprinkler and mass-notification coverage. East Greeley is dominated by food processing — the JBS USA beef plant and surrounding operations — where anhydrous ammonia refrigeration, large freezer dry-pipe systems, and process fire pumps drive the scope. Retail concentrates along 10th Street, 23rd Avenue near the Greeley Mall, and the newer power centers off 47th Avenue in west Greeley. Ring the whole thing with Weld County energy: oil-and-gas service yards, tank batteries, and equipment shops carrying extinguisher fleets and combustible-liquid storage. Residential growth is mostly newer single-family and townhome subdivisions on the west and north edges.',

  servicesOffered: [
    {
      title: 'Annual NFPA Fire Inspections',
      body: 'Sprinklers, alarms, extinguishers, backflow, and suppression across Greeley’s food plants, downtown storefronts, and campus buildings — each system on its own code cadence, documented in one report the Greeley Fire Department will accept on the first pass.',
    },
    {
      title: 'Fire Sprinkler & Standpipe Testing',
      body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25 — including the freezer-space dry-pipe systems common in east-Greeley food processing and the standpipes in downtown’s older multi-story masonry buildings. Main-drain tests, valve supervision, and a prioritized deficiency list included.',
    },
    {
      title: 'Fire Alarm Testing',
      body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — scheduled around UNC’s academic calendar for campus and off-campus student housing.',
    },
    {
      title: '24/7 Monitoring',
      body: 'UL-listed central-station monitoring with signal verification and fire-watch protocols, with confirmed alarms dispatched into the Greeley Fire Department’s response — steady coverage for properties an hour north of our base.',
    },
    {
      title: 'Backflow Prevention',
      body: 'Annual cross-connection testing for irrigation, fire-line, and domestic backflow preventers on Greeley’s aging 8th Avenue commercial stock and newer west-side subdivisions; certification filed with the city water utility.',
    },
    {
      title: 'Fire Extinguisher Service',
      body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K — including the extinguisher fleets on Weld County oil-and-gas service yards and equipment shops.',
    },
    {
      title: 'Kitchen Hood Suppression',
      body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — a recurring scope at downtown restaurants, Greeley Mall food tenants, and the 10th Street hotel and dealership corridor.',
    },
    {
      title: 'Special Hazard & Clean-Agent Suppression',
      body: 'FM-200, Novec 1230, and CO₂ systems for server rooms and avionics spaces, plus coordination on ammonia-refrigeration and foam/AFFF hazards at food plants and Greeley–Weld County Airport hangars.',
    },
    {
      title: 'Life-Safety Consulting & Code Navigation',
      body: 'Pre-plan review with Greeley Fire’s fire-prevention staff, plan-reviewer coordination, and deficiency-correction project management for food-processing, campus, and multi-property portfolios that need one point of contact.',
    },
  ],

  servicesIntro:
    'Every service below is run by NICET- or CSA-certified technicians on scheduled Greeley routes, with reports formatted the way the Greeley Fire Department’s fire-prevention reviewers expect — so corrections clear without a second trip north.',

  industriesServed: [
    'Food and meat processing',
    'Oil, gas, and energy services',
    'Agriculture and feed / grain storage',
    'Higher education (UNC)',
    'Retail centers and shopping malls',
    'Restaurants and food service',
    'Hospitality',
    'Light industrial and warehouse',
    'Aviation and hangar facilities',
    'Multi-family and student housing',
    'Assisted living and healthcare',
    'Automotive dealerships',
  ],

  deficienciesTitle: 'What the Greeley Fire Department flags most often on local inspections.',
  deficienciesIntro:
    'These are the recurring deficiency categories we see across Greeley properties, from downtown masonry to east-side food plants. None of this is a citation from a specific property — it’s the pattern of findings our technicians document and correct most frequently in this jurisdiction.',

  commonDeficiencies: [
    {
      title: 'Ammonia refrigeration machinery-room compliance gaps',
      body: 'East-Greeley food plants run anhydrous ammonia refrigeration, and the machinery rooms carry their own detection, ventilation-interlock, and emergency-control requirements. We document detection and alarm interfaces against NFPA and IIAR expectations and flag gaps before a process-safety review turns into a fire-code finding.',
    },
    {
      title: 'Freezer and cooler dry-pipe systems out of test',
      body: 'Large freezer spaces run dry-pipe or preaction sprinklers to avoid frozen wet piping, and their trip tests get skipped when production won’t stop. We schedule dry-pipe trip testing around plant downtime and log the air-pressure and low-point drains the Greeley inspector will ask for.',
    },
    {
      title: 'Obstructed sprinkler heads in high-pile and rack storage',
      body: 'Feed, grain, and food-warehouse operations stack product to the deflectors and add racking without re-evaluating coverage. We measure clearance to the inch and document commodity classification so ESFR and in-rack coverage still holds.',
    },
    {
      title: 'Missing or faded hydraulic nameplates on older 8th Avenue systems',
      body: 'Older wet-sprinkler systems in downtown and along the 8th Avenue commercial corridor frequently have missing or illegible hydraulic placards. We re-calculate and re-placard in-house so the required nameplate is on the riser for the next inspection.',
    },
    {
      title: 'Fire alarm panel battery failures',
      body: 'Sealed lead-acid backup batteries have a 4–5 year service life, and failed load tests are a top finding across campus buildings and commercial corridors. We track every panel’s battery age and replace proactively rather than waiting for a trouble signal.',
    },
    {
      title: 'Kitchen hood suppression out of date on downtown restaurants',
      body: 'Pre-UL-300 wet-chemical systems still turn up in older downtown and 10th Street kitchens. We inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal so a tenant turnover doesn’t stall on a suppression retrofit.',
    },
    {
      title: 'Combustible-liquid and extinguisher gaps at energy service yards',
      body: 'Weld County oil-and-gas shops and equipment yards accumulate flammable-liquid storage and let extinguisher inspection tags lapse across a large fleet. We route the full extinguisher inventory on a set cadence and check storage against IFC limits.',
    },
  ],

  faq: [
    {
      question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Greeley, Colorado?',
      answer: 'The Greeley Fire Department is the AHJ for the City of Greeley. Its fire-prevention / Community Risk Reduction staff issue permits, conduct on-site fire inspections, and review sprinkler, alarm, and suppression submittals for properties inside the city. We format our reports to match how Greeley Fire’s reviewers expect deficiencies laid out.',
    },
    {
      question: 'Greeley is about an hour from your Centennial office — how does that work for scheduling?',
      answer: 'We serve Greeley on scheduled routes rather than on-demand runs. Our office is at 7076 S. Alton Way in Centennial, so we batch the drive north up I-25 and US-85 and put your NFPA 25 and NFPA 72 tests on a planned calendar. You get a firm scheduled visit and 30-day advance notice before each test is due, not a promise we can be there in an hour.',
    },
    {
      question: 'Do you handle the ammonia refrigeration hazards at food plants like JBS?',
      answer: 'We handle the fire-protection side — detection and alarm interfaces to ammonia machinery rooms, freezer and cooler dry-pipe and preaction sprinkler systems, and fire-pump testing on heavy process loads. Full ammonia process-safety management under IIAR is a specialized discipline; we coordinate with your refrigeration and PSM contractors so the fire-code and process-safety documentation line up.',
    },
    {
      question: 'How often do fire sprinklers need to be inspected in Greeley?',
      answer: 'Per NFPA 25 and the IFC as adopted by the Greeley Fire Department, wet-pipe systems require quarterly and annual inspections with an internal inspection every 5 years. Dry-pipe systems — common in Greeley’s freezer and unheated warehouse spaces — add quarterly trip tests and a 3-year full-flow trip test. We track every cadence and email you 30 days before a test is due.',
    },
    {
      question: 'Can you work around UNC’s academic calendar for campus and student housing?',
      answer: 'Yes. Fire alarm and sprinkler testing at University of Northern Colorado dorms, academic buildings, and off-campus student housing gets scheduled into breaks and low-occupancy windows so notification-device testing doesn’t disrupt classes or residents. We coordinate access with facilities or property management ahead of each scheduled route.',
    },
    {
      question: 'Are kitchen hood suppression systems required in Greeley restaurants?',
      answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require automatic fire-extinguishing systems for commercial cooking operations — hood, duct, and plenum. UL-300 wet-chemical systems are the current standard. Older systems in downtown Greeley and along 10th Street are grandfathered but usually need replacement at tenant turnover or major renovation.',
    },
    {
      question: 'Do you service the oil-and-gas and agricultural operations across Weld County?',
      answer: 'Yes. Weld County is Colorado’s energy heartland, and we service extinguisher fleets, foam and combustible-liquid storage compliance at service yards and tank batteries, and the ESFR sprinkler, dust-collection, and rack-storage scope at feed, grain, and ag-processing facilities. These get routed on the same scheduled Greeley trips as our in-city work.',
    },
    {
      question: 'What’s your emergency response for Greeley if a system goes down?',
      answer: 'Greeley sits about 60 miles north of our Centennial base, so we don’t advertise the 90-minute metro response window here. When a system is out of service we set up a documented fire watch — a dedicated person walking the affected area at defined intervals and logging rounds — and we schedule the repair and retest on a planned visit. Our 24/7 monitoring keeps confirmed alarms dispatching to Greeley Fire in the meantime.',
    },
  ],

  ctaPair: [
    {
      title: 'Schedule a Greeley Inspection.',
      descriptor: 'Tell us about your property and we’ll add it to the next scheduled Greeley route — food plant, downtown storefront, campus building, or energy-service yard.',
      href: '/contact',
      label: 'Get in touch',
    },
    {
      title: 'See All Our Services.',
      descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, alarms, monitoring, suppression, backflow, and consulting all under one roof.',
      href: '/services',
      label: 'Browse services',
    },
  ],

  meta: {
    title: 'Fire Protection Services in Greeley, CO | Red Rocks Fire Protection',
    description:
      'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, and suppression for Greeley and Weld County — food processing, oil and gas, UNC campus, and downtown. NICET-certified technicians on scheduled routes, reports the Greeley Fire Department accepts.',
    keywords:
      'fire protection Greeley CO, fire inspections Greeley, sprinkler inspection Greeley, fire alarm testing Greeley, backflow testing Greeley, kitchen hood suppression Greeley, ammonia refrigeration fire protection, Weld County oil and gas fire protection, Greeley Fire Department inspections',
    canonical: '/service-areas/greeley-co/',
  },
},

  // ──────────────────────────────────────────────────────────────────
  // GREENWOOD VILLAGE, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'greenwood-village-co',
    city: 'Greenwood Village',
    state: 'CO',
    county: 'Arapahoe County',
    bannerTitle: 'Fire Protection Greenwood Village, CO',
    bannerSubtitle: 'GREENWOOD VILLAGE FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Greenwood Village runs on two very different building types: the Class-A high-rise towers of the Denver Tech Center along I-25 at Belleview and Orchard, and the large-lot estates east of University toward the Highline Canal. Both fall under the South Metro Fire Rescue Authority, and both need inspection reports written the way South Metro wants to read them. From standpipe risers and fire pumps in a 12-story DTC office to a monitored NFPA 13D system on an acreage home, Red Rocks Fire Protection works out of Centennial a few minutes down the interstate and clears the deficiency list on the first pass.',

    ahj: {
      name: 'South Metro Fire Rescue',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 14 (Standard for the Installation of Standpipe and Hose Systems) — current adopted edition',
        'NFPA 20 (Standard for the Installation of Stationary Pumps for Fire Protection) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 2001 (Standard on Clean Agent Fire Extinguishing Systems) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(720) 989-2000',
      website: 'https://www.southmetro.org/',
      note:
        'South Metro Fire Rescue is the Authority Having Jurisdiction for Greenwood Village and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (720) 989-2000, and permitting and code information is at https://www.southmetro.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what South Metro Fire Rescue’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Denver Tech Center (DTC)', type: 'Commercial Corridor', note: 'Class-A high-rise office at I-25 and Belleview; standpipe risers, fire pumps, and full life-safety stacks with emergency voice on every floor.' },
      { name: 'Fiddler’s Green', type: 'Mixed-Use', note: 'Amphitheatre district with adjacent office and hotel; large-assembly egress, alarm, and outdoor-venue coordination during concert season.' },
      { name: 'Landmark', type: 'Mixed-Use', note: 'Twin residential towers over retail and restaurants at Belleview and I-25; high-rise sprinkler, standpipe, and kitchen-hood suppression stacked in one address.' },
      { name: 'Belleview Station-adjacent', type: 'Mixed-Use', note: 'Transit-oriented mid- and high-rise near the RTD light-rail station; residential-above-retail with combined life-safety and BDA radio-coverage scopes.' },
      { name: 'Orchard / I-25 office cluster', type: 'Commercial Corridor', note: 'Mid-rise office and flex space off the Orchard interchange; wet and dry sprinkler systems plus clean-agent for server rooms.' },
      { name: 'Greenwood Plaza', type: 'Commercial Corridor', note: 'Established office-park core of the DTC; older wet systems with faded hydraulic nameplates and aging fire alarm panels.' },
      { name: 'The Preserve', type: 'Residential', note: 'Gated large-lot custom homes with an HOA; residential 13D sprinkler and monitored alarm retrofits at remodel.' },
      { name: 'Sundance Hills', type: 'Residential', note: 'Established east-side single-family off Belleview and Quebec; backflow and monitored smoke-detection work on mature homes.' },
      { name: 'Village Homes / Cherry Hills Vista', type: 'Residential', note: 'Large-lot residential toward University and the Highline Canal; irrigation and fire-line backflow testing on acreage properties.' },
      { name: 'Greenwood Village East', type: 'Residential', note: 'Low-density estate lots east of Holly; long private drives that factor into fire-access and hydrant-flow considerations.' },
      { name: 'Marjorie Perry Nature Preserve edge', type: 'Residential', note: 'Homes bordering open space along the Highline Canal; wildland-interface clearance and exterior detection considerations.' },
      { name: 'Peakview / Caley business park', type: 'Commercial Corridor', note: 'Southern office and flex cluster near Arapahoe Road; ESFR and clean-agent scopes for tech and back-office tenants.' },
    ],

    neighborhoodIntro:
      'Greenwood Village splits cleanly into two service profiles: the vertical Class-A office and mixed-use of the Denver Tech Center along I-25, and the low-density estate residential east of University. Below are the districts and corridors our technicians cover most often.',

    buildingStock:
      'Greenwood Village holds one of the densest concentrations of high-rise Class-A office in metro Denver inside the Denver Tech Center, clustered around the I-25 interchanges at Belleview, Orchard, and Arapahoe Road. Those towers carry the most demanding life-safety stacks we service anywhere: NFPA 14 standpipe risers, NFPA 20 fire pumps, floor-by-floor emergency voice, and clean-agent suppression protecting data floors and network closets. The mixed-use core at Landmark and near Belleview Station adds high-rise residential stacked over ground-floor retail and restaurants, combining sprinkler, standpipe, and kitchen-hood suppression in single addresses. Fiddler’s Green Amphitheatre brings large-assembly egress and event-season coordination. East of University the city shifts to large-lot luxury residential — estate homes on acreage lots, many with monitored NFPA 13D residential sprinkler systems, irrigation and fire-line backflow assemblies, and long private drives that shape fire-access planning.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, standpipes, alarms, extinguishers, backflow, and clean-agent suppression — each system on its own code cadence, delivered as a single South Metro–formatted report for the whole DTC tower or estate property.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, and preaction sprinkler plus NFPA 14 standpipe risers exercised per NFPA 25 — riser flow tests, main-drain tests, and hose-valve checks on every floor of the DTC high-rises.',
      },
      {
        title: 'Fire Pump Testing',
        body: 'Annual and weekly-churn fire-pump testing to NFPA 25 and NFPA 20 for the DTC and Landmark towers — flow tests at 100 and 150 percent of rated capacity, with a documented pump curve South Metro will accept.',
      },
      {
        title: 'Fire Alarm & Emergency Voice Testing',
        body: 'Initiating devices, notification appliances, control panels, and floor-by-floor emergency voice / mass-notification tested to NFPA 72 by NICET-certified technicians on occupied high-rise floors.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification and direct dispatch into South Metro’s CAD when an alarm confirms — from a single DTC tower to a monitored estate home east of University.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for fire-line, irrigation, and domestic backflow preventers on DTC office campuses and large-lot residential; certification filed with the water utility.',
      },
      {
        title: 'Fire Extinguisher & Kitchen Hood Service',
        body: 'NFPA 10 extinguisher service and UL-300 / Ansul R-102 kitchen-hood suppression tested and tagged per NFPA 96 — common at Landmark and Fiddler’s Green restaurant tenants.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems tested to NFPA 2001 for the data floors, server rooms, and network closets that fill DTC Class-A office and the Orchard-corridor tech tenants.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review with South Metro’s Community Risk Reduction team, tenant build-out coordination in occupied towers, and deficiency-correction project management for DTC property-management portfolios.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians who work high-rise standpipes and fire pumps as routinely as residential 13D systems, with reports formatted to South Metro Fire Rescue Authority’s preferred layout so corrections clear without rework.',

    industriesServed: [
      'Class-A high-rise office',
      'Corporate headquarters and tech tenants',
      'Data centers and server rooms',
      'High-rise residential above retail',
      'Hospitality and event venues',
      'Restaurants and food service',
      'Property management portfolios',
      'HOA & community associations',
      'Large-lot luxury residential',
      'Assisted living and healthcare',
      'Financial and professional services',
      'Retail and mixed-use',
    ],

    deficienciesTitle: 'What South Metro Fire Rescue Authority flags most often on Greenwood Village inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we document across Greenwood Village properties, weighted toward the high-rise DTC office stock. None of this is a citation from a specific building — it’s the pattern of findings our technicians correct most in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Fire pump flow tests overdue or off-curve',
        body: 'DTC and Landmark towers run stationary fire pumps that need annual NFPA 20 flow testing at 100 and 150 percent of rated capacity. We see pumps that have drifted below their curve or missed a year entirely — we flow-test against the manufacturer curve and document churn pressure so South Metro signs off.',
      },
      {
        title: 'Standpipe hose valves and pressure-reducing valves untested',
        body: 'High-rise NFPA 14 standpipes require periodic flow and pressure-reducing-valve testing that building crews often skip on upper floors. We test every riser and PRV floor by floor and log the readings South Metro expects on a high-rise report.',
      },
      {
        title: 'Clean-agent rooms with expired weigh-ins or blocked nozzles',
        body: 'DTC data floors and server closets protected by FM-200 or Novec 1230 fail inspection when cylinders miss their weight check or a rack rebuild blocks a discharge nozzle. We weigh cylinders, verify agent concentration, and confirm nozzle coverage against the room build-out.',
      },
      {
        title: 'Emergency voice not re-commissioned after tenant build-out',
        body: 'Class-A floors turn over constantly in the DTC, and demolition frequently disables speakers or leaves the voice-evac system out of sequence. We re-commission the emergency voice / mass-notification system and document the sign-off with South Metro.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries carry a 4–5 year service life. Failed load tests are a top finding across the older Greenwood Plaza office panels — we track every panel’s battery age and replace before the annual test.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Fire-line and irrigation backflow assemblies on both DTC campuses and large-lot estate lots east of University require annual testing by a certified cross-connection tester. We test and file the certification directly with the water utility and the South Metro AHJ.',
      },
      {
        title: 'Fire department connection caps missing or damaged',
        body: 'A common high-rise finding — missing or broken FDC caps at the base of a DTC tower let debris into the check valve and can fail an inspection outright. We carry replacements on the truck and install them on the spot.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Greenwood Village, Colorado?',
        answer: 'South Metro Fire Rescue Authority is the AHJ for Greenwood Village. South Metro’s Community Risk Reduction division issues permits, conducts on-site inspections, and reviews sprinkler, standpipe, fire-pump, alarm, and clean-agent submittals for the DTC high-rises, the Landmark and Fiddler’s Green mixed-use, and the east-side residential inside the city.',
      },
      {
        question: 'Do you inspect high-rise standpipe and fire-pump systems in the Denver Tech Center?',
        answer: 'Yes. High-rise life-safety is our core work in Greenwood Village. We test NFPA 14 standpipe risers and hose valves floor by floor, run annual NFPA 20 fire-pump flow tests at 100 and 150 percent of rated capacity, and document the pump curve and PRV readings in the format South Metro expects on a high-rise report.',
      },
      {
        question: 'Can you service the clean-agent suppression protecting DTC data floors and server rooms?',
        answer: 'Yes. We inspect, test, and maintain FM-200, Novec 1230, and CO₂ clean-agent systems to NFPA 2001 — weighing cylinders, verifying agent concentration, and confirming nozzle coverage against the current room build-out. That work is routine across the Orchard-corridor tech tenants and DTC Class-A office where server rooms and network closets are the norm.',
      },
      {
        question: 'How quickly can you respond to an emergency in Greenwood Village?',
        answer: 'Our office is a few minutes south in Centennial, so our emergency response window for fire-protection emergencies in Greenwood Village is typically under 90 minutes — usually faster along the I-25 corridor. We staff a 24/7 line and dispatch the same technicians who know your building, not a call center.',
      },
      {
        question: 'How often do high-rise sprinkler and standpipe systems need testing?',
        answer: 'Per NFPA 25 and the IFC as adopted by South Metro, wet-pipe sprinkler systems require quarterly and annual inspections with a 5-year internal inspection, and standpipes add flow and pressure-reducing-valve testing on a defined cycle. Fire pumps get weekly or monthly churn checks plus an annual flow test. We track every cadence for every riser and pump we service and email you 30 days before a test is due.',
      },
      {
        question: 'Do you handle life-safety work during tenant build-outs in occupied DTC towers?',
        answer: 'Yes. Class-A floors in the DTC turn over often, and demolition regularly disables sprinkler zones, alarm devices, or the emergency voice system. We coordinate with the property manager, provide fire watch when a system is offline, and re-commission the affected sprinkler, alarm, and voice-evac systems with South Metro sign-off before the floor is reoccupied.',
      },
      {
        question: 'Do you service residential sprinkler systems on the east side of Greenwood Village?',
        answer: 'Yes. The large-lot estates east of University toward the Highline Canal frequently carry monitored NFPA 13D residential sprinkler systems, along with irrigation and fire-line backflow assemblies. We inspect and test those systems, handle the annual backflow certification, and monitor residential alarm and smoke-detection systems on acreage properties.',
      },
      {
        question: 'Do you coordinate fire protection for events at Fiddler’s Green Amphitheatre?',
        answer: 'We service the alarm, suppression, and extinguisher systems for the office, hotel, and restaurant properties around the Fiddler’s Green and Landmark district, and we work around large-assembly and event-season schedules so testing doesn’t collide with concert dates. Assembly-occupancy egress and notification are always part of the inspection scope in that district.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Greenwood Village Inspection.',
        descriptor: 'Tell us about your property — a DTC tower, a Landmark mixed-use address, or an estate home east of University — and we’ll route the right NICET-certified technician, usually within a few business days and faster if it’s urgent.',
        href: '/contact',
        label: 'Get in touch',
      },
      {
        title: 'See All Our Services.',
        descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, standpipes, fire pumps, alarms, monitoring, clean-agent suppression, backflow, and consulting all live under the same roof.',
        href: '/services',
        label: 'Browse services',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Greenwood Village, CO | Red Rocks Fire Protection',
      description:
        'High-rise standpipe, fire-pump, and clean-agent fire protection in Greenwood Village and the Denver Tech Center, plus sprinkler and alarm testing, 24/7 monitoring, and backflow. Serving South Metro Fire Rescue jurisdictions with NICET-certified technicians and 90-minute metro emergency response.',
      keywords:
        'fire protection Greenwood Village CO, DTC fire protection, high-rise standpipe testing Denver Tech Center, fire pump testing Greenwood Village, clean agent suppression DTC, fire alarm testing Greenwood Village, backflow testing Greenwood Village, South Metro Fire Rescue inspections',
      canonical: '/service-areas/greenwood-village-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // HIGHLANDS RANCH, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'highlands-ranch-co',
    city: 'Highlands Ranch',
    state: 'CO',
    county: 'Douglas County',
    bannerTitle: 'Fire Protection Highlands Ranch, CO',
    bannerSubtitle: 'HIGHLANDS RANCH FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Highlands Ranch is a single master-planned community of roughly 100,000 people governed by the Highlands Ranch Community Association, and almost every commercial and common-area building in it falls under South Metro Fire Rescue Authority for fire-code enforcement. From the retail and office space around Town Center and Highlands Ranch Parkway to the four HRCA recreation centers and the miles of HOA-maintained backflow and irrigation lines, Red Rocks Fire Protection runs inspections here written to a report South Metro accepts on the first pass. Our office at 7076 S. Alton Way in Centennial sits a short C-470 drive north, so a Highlands Ranch call is a same-metro call.',

    ahj: {
      name: 'South Metro Fire Rescue',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(720) 989-2000',
      website: 'https://www.southmetro.org/',
      note:
        'South Metro Fire Rescue is the Authority Having Jurisdiction for Highlands Ranch and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (720) 989-2000, and permitting and code information is at https://www.southmetro.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what South Metro Fire Rescue’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Town Center', type: 'Mixed-Use', note: 'Retail, restaurant, and office core off Highlands Ranch Parkway; kitchen-hood suppression and tenant-turnover sprinkler-obstruction findings are the recurring scopes.' },
      { name: 'Central Park / Civic Green', type: 'Mixed-Use', note: 'Community gathering hub with the library and civic buildings; assembly-occupancy alarm and voice-evacuation coverage plus irrigation backflow across the park common areas.' },
      { name: 'Highlands Ranch Mansion grounds', type: 'Mixed-Use', note: 'HRCA-owned historic event venue; assembly-occupancy life safety, extinguisher coverage, and kitchen suppression for catered events.' },
      { name: 'Highlands Ranch Parkway corridor', type: 'Commercial Corridor', note: 'Primary east-west retail-and-office spine; wet sprinkler systems, fire alarm panels, and FDC maintenance across strip centers and medical office.' },
      { name: 'University Boulevard corridor', type: 'Commercial Corridor', note: 'Grocery-anchored retail and bank/medical pads; Ansul kitchen-hood systems and backflow certification for anchor-tenant fire lines.' },
      { name: 'Northridge', type: 'Master-Planned', note: 'One of the original HRCA sub-communities off University; large HOA common-area backflow and irrigation-line testing loads.' },
      { name: 'Westridge', type: 'Master-Planned', note: 'HRCA sub-community anchored by the Westridge Recreation Center; pool-house, natatorium, and rec-center sprinkler and alarm scopes.' },
      { name: 'Eastridge', type: 'Master-Planned', note: 'HRCA sub-community with the Eastridge Recreation Center; assembly and aquatics life-safety systems plus surrounding residential common areas.' },
      { name: 'Southridge', type: 'Master-Planned', note: 'Newer HRCA sub-community near the southern edge; Southridge Recreation Center and 2000s-era residential with NFPA 13D retrofit needs at remodel.' },
      { name: 'The Hearth / Wildcat Reserve', type: 'Residential', note: 'Established single-family off Wildcat Reserve Parkway; monitored residential alarm and 13D sprinkler service on larger custom homes.' },
      { name: 'Highlands Ranch Business Park', type: 'Commercial Corridor', note: 'Flex-office and light-commercial near C-470; wet and dry sprinkler systems, alarm panels, and clean-agent suppression for server and IT rooms.' },
      { name: 'C-470 north edge / Lucent Boulevard', type: 'Retail', note: 'Retail and big-box pads along the northern boundary; large-format sprinkler coverage, high-piled storage, and mall-style voice evacuation.' },
    ],

    neighborhoodIntro:
      'Highlands Ranch is one community rather than a patchwork of towns, but it breaks cleanly into its four HRCA sub-community quadrants and its commercial corridors. Below are the areas — from the Town Center retail core to the recreation centers and the C-470 north edge — our technicians cover most often.',

    buildingStock:
      'Highlands Ranch is a master-planned community built almost entirely between the late 1980s and the mid-2000s, so most residential stock is single-family and townhome inside the four HRCA sub-communities of Northridge, Westridge, Eastridge, and Southridge. The Community Association owns and maintains a large stock of shared assets — four recreation centers with pools, the Highlands Ranch Mansion, Central Park, and miles of irrigated common areas — which drives an outsized volume of backflow, irrigation-line, and assembly-occupancy inspection work. Commercial property clusters at Town Center and along the Highlands Ranch Parkway and University Boulevard corridors: grocery-anchored retail, medical and dental office, restaurants, and bank pads. Flex-office and light-commercial sits in the Highlands Ranch Business Park and along the C-470 north edge near Lucent Boulevard, where big-box retail adds high-piled-storage and large-format sprinkler scopes.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code-driven cadence, documented in a single South Metro–formatted report covering everything from a Town Center retail bay to an HRCA recreation center.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, and standpipe systems exercised per NFPA 25 across Highlands Ranch Parkway strip centers and the big-box pads along C-470. Includes main-drain tests, valve supervision, and a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including the assembly-occupancy voice-evacuation systems in the HRCA recreation centers and the Mansion.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification, fire-watch protocols, and direct dispatch into South Metro’s CAD when an alarm confirms — for medical office along University Boulevard, retail, and community facilities.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection control testing for the fire-line, domestic, and the heavy irrigation backflow load across HRCA common areas, parks, and rec-center grounds; certification filed with Centennial Water and Sanitation District.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards, from Town Center kitchens to the Business Park flex bays.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — the common scope at Town Center and University Boulevard restaurants and at the Mansion’s catering kitchen.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms, data closets, and IT spaces — common in the Highlands Ranch Business Park and the flex-office near C-470.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review with South Metro’s Community Risk Reduction team, plan-reviewer coordination, and deficiency-correction project management scaled for HRCA and the property-management companies that run Highlands Ranch retail and office portfolios.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to South Metro Fire Rescue Authority’s preferred layout — so corrections are approved without rework.',

    industriesServed: [
      'HOA & community associations',
      'Recreation centers and aquatics facilities',
      'Multi-family property management',
      'Medical and dental office',
      'Retail centers and grocery anchors',
      'Restaurants and food service',
      'Light industrial and flex-office',
      'Assisted living and healthcare',
      'Education and childcare',
      'Event and hospitality venues',
      'Bank and financial branches',
      'Data centers and server rooms',
    ],

    deficienciesTitle: 'What South Metro Fire Rescue Authority flags most often on Highlands Ranch inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Highlands Ranch properties. None of this is a citation from a specific property — it’s the pattern of findings our technicians document and correct most frequently in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Backflow preventers without annual test certification',
        body: 'With four HRCA recreation centers, Central Park, the Mansion grounds, and miles of common-area irrigation, Highlands Ranch carries an unusually high backflow load. Irrigation and fire-line preventers require annual testing by a certified cross-connection tester — we file certification directly with the Centennial Water and Sanitation District and the South Metro AHJ.',
      },
      {
        title: 'Obstructed sprinkler heads',
        body: 'The most cited deficiency on South Metro reports: retail tenant build-outs along Highlands Ranch Parkway and stored inventory at the C-470 big-box pads installed too close to sprinkler deflectors. We measure clearance to the inch and document the correction scope so approval is fast.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries have a 4–5 year service life, and Highlands Ranch has a lot of late-1990s and 2000s panels reaching end of life at once. Failed load tests are a top finding — we track every panel’s battery age and replace proactively.',
      },
      {
        title: 'Kitchen hood suppression out of date',
        body: 'Pre-UL-300 wet-chemical systems still turn up at long-tenured Town Center and University Boulevard restaurants. South Metro increasingly flags them at tenant turnover — we inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal.',
      },
      {
        title: 'Assembly-occupancy notification gaps',
        body: 'The HRCA recreation centers and the Mansion are assembly occupancies where pool-deck noise and event crowds raise the bar for audible and visible notification. We verify voice-evacuation coverage and strobe placement against the actual occupant load rather than the original design count.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'A common South Metro finding across the retail corridors — missing or broken FDC caps let debris into the check valve and can fail an inspection outright. We carry replacements on the truck and install them on the spot.',
      },
      {
        title: 'Missing or expired hydraulic nameplates',
        body: 'Older wet-sprinkler systems in Business Park flex space and along Highlands Ranch Parkway frequently have missing, faded, or original-calculation hydraulic nameplates. South Metro requires a verified placard for every system — we re-calculate and re-placard in-house.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Highlands Ranch, Colorado?',
        answer: 'South Metro Fire Rescue Authority is the AHJ for Highlands Ranch. South Metro’s Community Risk Reduction division issues permits, conducts on-site fire inspections, and reviews sprinkler, alarm, and underground fire-line submittals for commercial, multi-family, retail, and community-association properties across the community, including the HRCA recreation centers and the Highlands Ranch Mansion.',
      },
      {
        question: 'Does Red Rocks Fire Protection serve Highlands Ranch?',
        answer: 'Yes. Highlands Ranch sits just south of C-470 from our office at 7076 S. Alton Way in Centennial, so it is a same-metro service area for us. Because most of our technicians live and work in the south Denver metro, we can offer a roughly 90-minute emergency response window into Highlands Ranch alongside Centennial, Littleton, and Lone Tree.',
      },
      {
        question: 'How does fire protection work for HOA common areas in Highlands Ranch?',
        answer: 'The Highlands Ranch Community Association owns and maintains a large set of shared facilities — four recreation centers, Central Park, the Mansion, and miles of irrigated common ground. Those assets carry fire-line and irrigation backflow preventers, assembly-occupancy alarm systems, and sprinkler coverage that all fall under South Metro inspection. We handle HOA portfolios as a single scheduled program so the whole common-area inventory stays current on one report track.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Highlands Ranch?',
        answer: 'Per NFPA 25 and the IFC as adopted by South Metro Fire Rescue, wet-pipe sprinkler systems require quarterly and annual inspections, with an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. We track every cadence for every system we service and email you 30 days before a test is due.',
      },
      {
        question: 'Do you handle backflow and irrigation-line testing across Highlands Ranch common areas?',
        answer: 'Yes, and it is one of the larger recurring scopes here. Irrigation, fire-line, and domestic backflow preventers require annual testing by a certified cross-connection tester. Given the volume of HRCA parks, rec-center grounds, and common-area irrigation, we schedule Highlands Ranch backflow work as a batched route and file the certifications directly with the Centennial Water and Sanitation District and the South Metro AHJ.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Highlands Ranch restaurants?',
        answer: 'Yes. NFPA 96 (and the IFC as adopted in Colorado) requires automatic fire-extinguishing systems for commercial cooking operations, including the hood, duct, and plenum, at Town Center and University Boulevard restaurants and at the Highlands Ranch Mansion’s catering kitchen. UL-300 wet-chemical systems are the current standard; older systems are grandfathered but typically need replacement at tenant turnover or major renovation.',
      },
      {
        question: 'Do you service residential sprinkler systems in Highlands Ranch?',
        answer: 'Yes. We inspect, test, and maintain NFPA 13D residential sprinkler systems, most commonly in larger custom homes off Wildcat Reserve Parkway and in newer Southridge-area construction, along with monitored residential alarm and smoke and carbon-monoxide detection. Much of the community was built between the late 1980s and mid-2000s, so we often add or update 13D coverage at remodel.',
      },
      {
        question: 'How quickly can you respond to an emergency in Highlands Ranch?',
        answer: 'Our office is a short C-470 drive north in Centennial, so our emergency response window into Highlands Ranch is typically around 90 minutes and usually faster. We staff a 24/7 emergency line and dispatch the same technicians who know your property, not a call center.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Highlands Ranch Inspection.',
        descriptor: 'Tell us about your property or HRCA common-area inventory and we’ll route the right NICET-certified technician — usually within a few business days, faster if it’s urgent.',
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
      title: 'Fire Protection Services in Highlands Ranch, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and consulting in Highlands Ranch, Colorado. Serving South Metro Fire Rescue jurisdictions and HRCA common areas. NICET-certified technicians, roughly 90-minute metro emergency response.',
      keywords:
        'fire protection Highlands Ranch CO, fire inspections Highlands Ranch, sprinkler inspection Highlands Ranch, fire alarm testing Highlands Ranch, backflow testing Highlands Ranch, kitchen hood suppression Highlands Ranch, HOA common area fire protection, South Metro Fire Rescue inspections',
      canonical: '/service-areas/highlands-ranch-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // LAFAYETTE, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'lafayette-co',
    city: 'Lafayette',
    state: 'CO',
    county: 'Boulder County',
    bannerTitle: 'Fire Protection Lafayette, CO',
    bannerSubtitle: 'LAFAYETTE FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Lafayette grew out of a coal-mining town on Public Road and now runs a full mix of properties, from the brick storefronts of Old Town to the newer subdivisions filling in east of US-287. Fire-code enforcement here runs through Lafayette Fire, and after the Marshall Fire tore through the grasslands south of the city in December 2021, Boulder County owners look harder at wildland exposure and working suppression systems than they did a few years ago. We test, inspect, and repair the sprinklers, alarms, extinguishers, backflow, and hood systems in Lafayette to a report your fire authority accepts on the first pass.',

    ahj: {
      name: 'Lafayette Fire Department',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 661-1202',
      website: 'https://www.lafayetteco.gov/250/Fire',
      note:
        'Lafayette Fire Department is the Authority Having Jurisdiction for Lafayette and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 661-1202, and permitting and code information is at https://www.lafayetteco.gov/250/Fire. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Lafayette Fire Department’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Old Town Lafayette', type: 'Mixed-Use', note: 'Historic coal-town core along Public Road; brick commercial buildings from the early 1900s with legacy sprinkler and alarm layouts that need careful documentation.' },
      { name: 'Public Road Corridor', type: 'Commercial Corridor', note: 'The city’s main commercial spine — restaurants, breweries, and small retail where kitchen-hood suppression and extinguisher tagging are recurring scopes.' },
      { name: 'Indian Peaks', type: 'Master-Planned', note: 'Golf-course community west of US-287 with larger custom homes; residential NFPA 13D sprinkler and monitored-alarm retrofits are common at remodel.' },
      { name: 'Waneka Lake', type: 'Residential', note: 'Established neighborhood around the lake and park; mix of home ages with older smoke-detection layouts worth a retrofit review.' },
      { name: 'Silver Creek', type: 'Residential', note: 'Fast-growing subdivisions on the east side; newer construction with residential sprinkler and monitored systems already in place that need annual NFPA 25 testing.' },
      { name: 'Beacon Hill / Coal Creek', type: 'Master-Planned', note: 'Newer master-planned housing near the Coal Creek Trail; HOA common areas drive backflow and irrigation-line testing.' },
      { name: 'Baseline Road Corridor', type: 'Commercial Corridor', note: 'East-west retail and office strip; grocery-anchored centers with wet sprinkler systems and Ansul hood suppression at food tenants.' },
      { name: 'South Boulder Road Corridor', type: 'Commercial Corridor', note: 'Retail and medical office running toward Louisville; fire alarm panels and sprinkler systems on mixed occupancy types.' },
      { name: 'Exempla / Good Samaritan Medical Center', type: 'Commercial Corridor', note: 'Hospital campus off Exempla Circle and US-287; full institutional life-safety stacks — standpipes, voice evacuation, and special-hazard suppression.' },
      { name: 'US-287 / Arapahoe Corridor', type: 'Retail', note: 'High-traffic retail node at the city’s south edge; large-format sprinkler systems and high-volume kitchen-hood service.' },
      { name: 'Lafayette Tech Center / North of Baseline', type: 'Industrial', note: 'Light industrial and flex space; ESFR sprinkler considerations, fire-pump testing, and rack-storage commodity classification.' },
      { name: 'Willow Farm', type: 'Residential', note: 'Older platted subdivision east of town; pre-2000 homes that often need updated detection and backflow certification at sale.' },
    ],

    neighborhoodIntro:
      'We cover the full spread of Lafayette property, from the brick commercial buildings of Old Town along Public Road to the newer subdivisions filling in east of US-287 and the medical and light-industrial space along Baseline. Below are the areas and corridors our technicians work most often.',

    buildingStock:
      'Lafayette’s oldest building stock sits in Old Town along Public Road — early-1900s brick commercial and residential from its coal-mining years, much of it since converted to restaurants, breweries, and small retail. Residential growth has come in waves since the 1990s, first in master-planned communities like Indian Peaks west of US-287 and more recently in fast-filling subdivisions such as Silver Creek and Beacon Hill on the east and south sides. Commercial property concentrates along three corridors: the Public Road spine through Old Town, the Baseline Road and South Boulder Road retail-and-office strips, and the US-287 / Arapahoe retail node at the south edge. The Exempla Good Samaritan Medical Center campus anchors the largest institutional life-safety load in the city, and light-industrial and flex space north of Baseline rounds out the mix. Because Lafayette sits on the Boulder County grassland edge that burned in the 2021 Marshall Fire, wildland-urban interface exposure is a live concern on many of these properties.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code-driven cadence, documented in a single report formatted for Lafayette Fire.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25 — including the standpipe risers at the Good Samaritan campus and older wet systems in Old Town brick buildings. Includes main-drain tests, valve supervision, and a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians, from single-panel retail on Public Road to voice-evacuation systems on the medical campus.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification and fire-watch protocols, with confirmed alarms dispatched directly into Lafayette Fire’s response.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection control testing for irrigation, fire-line, and domestic backflow preventers across Indian Peaks and Beacon Hill HOA common areas; certification filed with the City of Lafayette water utility.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards — including the Class K units behind Public Road restaurant and brewery lines.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — heavy demand along the Public Road and Baseline restaurant corridors.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms, imaging suites, and clean-tech spaces — common on the medical campus and in the light-industrial buildings north of Baseline.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review with Lafayette Fire, plan-reviewer coordination, and deficiency-correction project management for HOA and property-management portfolios across the city.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to Lafayette Fire Department’s preferred layout — so corrections are approved without a second trip.',

    industriesServed: [
      'HOA & community associations',
      'Multi-family property management',
      'Restaurants, breweries, and food service',
      'Retail centers and grocery-anchored strips',
      'Healthcare and medical office',
      'Assisted living and senior housing',
      'Light industrial and flex space',
      'Office and professional services',
      'Historic and mixed-use commercial',
      'Education and childcare',
      'Automotive and service trades',
      'Religious and community facilities',
    ],

    deficienciesTitle: 'What Lafayette Fire flags most often on local inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Lafayette properties. None of it is a citation from a specific building — it is the pattern of findings our technicians document and correct most frequently in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads',
        body: 'The most cited finding: storage, signage, or tenant build-outs installed too close to sprinkler deflectors, especially in the tighter floor plans of Old Town brick buildings on Public Road. We measure clearance to the inch and document the correction scope so approval is fast.',
      },
      {
        title: 'Aging systems in historic Old Town buildings',
        body: 'Early-1900s commercial stock along Public Road often carries original piping, undersized risers, or missing hydraulic nameplates. We re-calculate, re-placard, and flag components that no longer meet current NFPA 25 acceptance criteria.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries have a 4–5 year service life, and failed load tests are a top finding across the Baseline and South Boulder Road corridors. We track every panel’s battery age and replace proactively.',
      },
      {
        title: 'Backflow preventers without annual certification',
        body: 'Irrigation and fire-line backflow preventers across Indian Peaks and Beacon Hill HOA common areas need annual testing by a certified cross-connection tester. We file the certification directly with the City of Lafayette water utility.',
      },
      {
        title: 'Kitchen hood suppression out of date',
        body: 'Pre-UL-300 wet-chemical systems still turn up behind older Public Road and Baseline kitchen lines. We inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal or renovation.',
      },
      {
        title: 'Wildland-interface detection and clearance gaps',
        body: 'After the 2021 Marshall Fire, Boulder County owners on the grassland edge are re-examining ember-resistant venting, monitored detection, and defensible-space clearance around structures. We document interface exposure alongside the standard inspection so it does not get overlooked.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'Missing or broken FDC caps let debris into the check valve and can fail an inspection outright. We carry replacements on the truck and install them on the spot.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Lafayette, Colorado?',
        answer: 'The Lafayette Fire Department is the AHJ for the City of Lafayette. It issues permits, conducts on-site fire inspections, and reviews sprinkler, alarm, and underground fire-line submittals for properties inside the city, coordinating with neighboring Louisville and Boulder County agencies on shared automatic-aid calls. Confirm the current permitting and inspection-scheduling line directly with Lafayette Fire.',
      },
      {
        question: 'Does Red Rocks Fire Protection serve Lafayette from a local office?',
        answer: 'Our office is at 7076 S. Alton Way, Centennial, CO 80112. Lafayette sits at the northern edge of the Denver metro along US-287, roughly an hour out, which keeps it inside the Denver Metro service area we cover — so we can hold to about a 90-minute emergency response window for Lafayette properties.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Lafayette?',
        answer: 'Per NFPA 25 and the IFC as adopted by Lafayette Fire, wet-pipe sprinkler systems require quarterly and annual inspections, with an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. We track every cadence for every system we service and email you 30 days before a test is due.',
      },
      {
        question: 'How did the Marshall Fire change fire-protection expectations in Lafayette?',
        answer: 'The December 2021 Marshall Fire burned across the Boulder County grasslands just south of Lafayette and destroyed more than a thousand structures in neighboring Louisville and Superior. Since then, owners on the wildland-urban interface look harder at working detection, monitored alarms, and defensible-space clearance. We document interface exposure alongside the standard sprinkler and alarm inspection so it is on the record, not an afterthought.',
      },
      {
        question: 'Do you inspect fire systems at the Good Samaritan Medical Center area?',
        answer: 'We service commercial and institutional properties throughout Lafayette, including the medical-office and healthcare-adjacent buildings around the Exempla Good Samaritan campus off US-287. Healthcare occupancies carry full life-safety stacks — standpipes, voice evacuation, and special-hazard suppression for imaging and server spaces — and we test each on its NFPA cadence with a single consolidated report.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Lafayette restaurants?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require automatic fire-extinguishing systems for commercial cooking operations, covering the hood, duct, and plenum. This is heavy demand along the Public Road and Baseline restaurant and brewery corridors. UL-300 wet-chemical systems are the current standard; older systems are grandfathered but typically need replacement at tenant turnover or major renovation.',
      },
      {
        question: 'Do you service residential sprinkler systems in Lafayette?',
        answer: 'Yes. We inspect, test, and maintain NFPA 13D residential sprinkler systems — most commonly in newer custom homes in Indian Peaks and in the fast-growing east-side subdivisions like Silver Creek and Beacon Hill where systems were installed at construction. We also handle monitored residential alarm and smoke-detection systems.',
      },
      {
        question: 'How quickly can you respond to an emergency in Lafayette?',
        answer: 'Lafayette is inside our Denver Metro service area along the US-287 corridor, so our emergency response window for fire-protection emergencies in the city is typically around 90 minutes. We staff a 24/7 emergency line and dispatch the same technicians who know your property, not a call center.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Lafayette Inspection.',
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
      title: 'Fire Protection Services in Lafayette, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and consulting in Lafayette, Colorado. Serving Old Town, Public Road, Indian Peaks, and the US-287 corridor under Lafayette Fire Department. NICET-certified technicians, 90-minute metro emergency response.',
      keywords:
        'fire protection Lafayette CO, fire inspections Lafayette, sprinkler inspection Lafayette Colorado, fire alarm testing Lafayette, backflow testing Lafayette, kitchen hood suppression Lafayette, fire protection company Boulder County, Lafayette Fire Department inspections, Old Town Lafayette fire code',
      canonical: '/service-areas/lafayette-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // LAKEWOOD, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'lakewood-co',
    city: 'Lakewood',
    state: 'CO',
    county: 'Jefferson County',
    bannerTitle: 'Fire Protection Lakewood, CO',
    bannerSubtitle: 'LAKEWOOD FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Lakewood is the largest city in Jefferson County and one of the biggest in the state, stretching from the Denver Federal Center out to Green Mountain along the W 6th Avenue and Colfax corridors. West Metro Fire Rescue enforces fire code across every one of those properties, from the Belmar mixed-use blocks downtown to the office towers on Union Boulevard. Red Rocks Fire Protection runs each Lakewood inspection to a report West Metro will accept on the first pass, and our crews reach the city well inside our 90-minute Denver-metro response window.',

    ahj: {
      name: 'West Metro Fire Rescue',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 989-4307',
      website: 'https://www.westmetrofire.org/',
      note:
        'West Metro Fire Rescue is the Authority Having Jurisdiction for Lakewood and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 989-4307, and permitting and code information is at https://www.westmetrofire.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what West Metro Fire Rescue’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Belmar', type: 'Mixed-Use', note: 'Downtown Lakewood redevelopment on the old Villa Italia footprint; retail, restaurants, and residential over ground-floor tenants drive kitchen-hood suppression and BDA radio-coverage scopes.' },
      { name: 'Denver Federal Center', type: 'Commercial Corridor', note: 'Massive federal campus off 6th and Kipling; multi-building sprinkler and alarm portfolios with strict tenant-turnover inspection cadences.' },
      { name: 'West Colfax corridor', type: 'Commercial Corridor', note: 'Aging strip retail, motels, and quick-service restaurants along Colfax; Ansul kitchen-hood systems and pre-UL-300 conversions are recurring findings.' },
      { name: 'Union Boulevard', type: 'Commercial Corridor', note: 'Office cluster near the light-rail station; Class-A towers with full life-safety stacks, standpipes, and clean-agent server-room suppression.' },
      { name: 'Green Mountain', type: 'Residential', note: 'Hillside single-family off Alameda Parkway; wildland-urban-interface exposure raises the value of monitored alarms and residential sprinkler retrofits.' },
      { name: 'Belmar Park / Alameda', type: 'Residential', note: 'Older established homes near the park; legacy smoke-detection layouts and dated backflow assemblies on irrigation lines.' },
      { name: 'Eiber', type: 'Residential', note: 'Post-war bungalows west of the Federal Center; among Lakewood’s oldest housing, with remodels that trigger NFPA 13D sprinkler review.' },
      { name: 'Two Creeks / Morse Park', type: 'Residential', note: 'Dense mid-century blocks near St. Anthony; mix of single-family and small multi-family with aging alarm panels.' },
      { name: 'W 6th Avenue frontage', type: 'Industrial', note: 'Flex, warehouse, and light-industrial along the 6th Ave freeway; ESFR sprinkler systems, fire-pump testing, and rack-storage commodity classification.' },
      { name: 'St. Anthony / Lakewood Commons', type: 'Mixed-Use', note: 'Medical office and retail anchored by St. Anthony Hospital at 6th and Simms; healthcare life-safety and mid-rise medical-office systems.' },
      { name: 'Lakewood City Commons / Wadsworth', type: 'Retail', note: 'Grocery-anchored and big-box retail along Wadsworth; large-format sprinkler layouts and sprinkler-obstruction clearances at tenant build-out.' },
      { name: 'Mississippi & Sheridan (east edge)', type: 'Residential', note: 'Older garden-style apartments and townhome courts near the Denver line; multi-family with dated fire alarm and standpipe equipment.' },
    ],

    neighborhoodIntro:
      'Lakewood runs the full property spectrum, from post-war bungalows in Eiber to Class-A office on Union Boulevard and the federal campus off Kipling. These are the named areas and corridors our technicians cover most often across the city.',

    buildingStock:
      'Lakewood is one of Colorado’s oldest and most built-out suburbs, so its stock skews older than the newer south-metro cities: post-war single-family in Eiber and Two Creeks, mid-century apartment courts along the Sheridan and Mississippi edges, and dense multi-family scattered through the West Colfax corridor. Commercial property concentrates in a few places — the Denver Federal Center off 6th and Kipling, the Union Boulevard office cluster by the light-rail station, and the Belmar mixed-use core that replaced the old Villa Italia mall. Retail runs the length of Wadsworth and Colfax, healthcare centers on St. Anthony Hospital at 6th and Simms, and flex-industrial lines the W 6th Avenue freeway frontage. The age of the housing and the older retail strips means legacy alarm panels, pre-UL-300 kitchen hoods, and undocumented sprinkler systems turn up more often here than in newer jurisdictions.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code cadence, documented in a single West Metro–formatted report your inspector will accept on the first read.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25 — main-drain tests, valve supervision, and standpipe checks for the Union Boulevard office towers and Belmar mid-rises, with a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including the older panels common in Lakewood’s mid-century apartment stock.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification and fire-watch protocols, with confirmed alarms dispatched straight into West Metro Fire Rescue.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for irrigation, fire-line, and domestic backflow preventers along the aging service lines in Eiber and Belmar Park, with certification filed to the water utility.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards across Lakewood’s retail and restaurant tenants.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — a recurring scope for the Colfax quick-service strips and Belmar restaurant blocks, where pre-UL-300 conversions come due at turnover.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms and data closets in the Union Boulevard offices and Denver Federal Center tenant spaces.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review with West Metro, plan-reviewer coordination, and deficiency-correction project management for HOA, medical-office, and property-management portfolios across Lakewood.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to West Metro Fire Rescue’s preferred layout so corrections clear on the first review.',

    industriesServed: [
      'HOA & community associations',
      'Multi-family property management',
      'Office and Class-A commercial',
      'Retail centers and grocery-anchored strips',
      'Government and federal-campus tenants',
      'Healthcare and medical office',
      'Light industrial and warehouse',
      'Restaurants and food service',
      'Hospitality and motels',
      'Assisted living and senior housing',
      'Education and childcare',
      'Data centers and server rooms',
    ],

    deficienciesTitle: 'What West Metro Fire Rescue flags most often on Lakewood inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we document across Lakewood properties. None of it is a citation from a specific building — it’s the pattern our technicians correct most often in this jurisdiction, weighted toward the city’s older housing and retail stock.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads',
        body: 'The most cited finding: storage, signage, or tenant build-outs installed too close to sprinkler deflectors, common when Belmar and Wadsworth retail spaces change hands. We measure clearance to the inch and document the correction so West Metro approval is quick.',
      },
      {
        title: 'Pre-UL-300 kitchen hood systems',
        body: 'The older Colfax and Alameda restaurant strips still run wet-chemical systems that predate UL-300. West Metro increasingly flags them at tenant turnover — we inventory each hood by hazard class and stage UL-300 conversions ahead of lease renewal.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries carry a 4–5 year service life, and Lakewood’s mid-century apartment courts are full of panels well past it. Failed load tests are a top finding here; we track every panel’s battery age and replace before the test fails.',
      },
      {
        title: 'Missing or faded hydraulic nameplates',
        body: 'Older wet-sprinkler systems around the Federal Center and Union Boulevard often have missing or illegible hydraulic placards. West Metro requires a verified nameplate on every system — we re-calculate and re-placard in-house.',
      },
      {
        title: 'Backflow preventers without annual certification',
        body: 'Irrigation and fire-line backflow assemblies on Lakewood’s aging service lines routinely lapse on annual testing. We test with a certified cross-connection tester and file the certification directly with the water utility and West Metro.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'A common West Metro finding along the older Colfax and Wadsworth frontages — missing FDC caps let debris into the check valve and can fail an inspection outright. We carry replacements on the truck and install them on the spot.',
      },
      {
        title: 'Standpipe and mid-rise systems not fully tested',
        body: 'Belmar and Union Boulevard buildings with standpipes sometimes skip the full flow and pressure verification at annual. West Metro expects documented standpipe testing on multi-story properties, and we run the full NFPA 25 scope with pressure readings by floor.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Lakewood, Colorado?',
        answer: 'West Metro Fire Rescue is the AHJ for the City of Lakewood. West Metro issues fire permits, conducts on-site inspections, and reviews sprinkler, alarm, and underground fire-line submittals for properties across the city, from the Denver Federal Center to Green Mountain.',
      },
      {
        question: 'How quickly can Red Rocks Fire Protection reach Lakewood?',
        answer: 'Lakewood sits inside the Denver metro, so our emergency response window for the city is typically under 90 minutes and often faster from our Centennial base. We staff a 24/7 emergency line and dispatch technicians who already know your property rather than routing you through a call center.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Lakewood?',
        answer: 'Per NFPA 25 and the IFC as adopted by West Metro Fire Rescue, wet-pipe systems require quarterly and annual inspections with an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. We track every cadence for every system we service and email you 30 days before a test comes due.',
      },
      {
        question: 'Do you inspect the standpipes in Belmar and Union Boulevard mid-rises?',
        answer: 'Yes. Multi-story buildings in the Belmar core and along Union Boulevard carry standpipe systems that need documented flow and pressure verification under NFPA 25. We run the full standpipe scope, including main-drain tests and pressure readings by floor, and format the results for West Metro’s review.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Lakewood restaurants?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require an automatic extinguishing system for the hood, duct, and plenum on commercial cooking operations. UL-300 wet-chemical is the current standard. Many of the older restaurants along Colfax and Alameda still run pre-UL-300 systems that West Metro flags for replacement at turnover or major renovation.',
      },
      {
        question: 'Do you service the older apartment and multi-family buildings in Lakewood?',
        answer: 'Yes, and it is a large part of what we do here. Lakewood’s mid-century apartment courts along Sheridan, Mississippi, and West Colfax often run aging fire alarm panels and dated standpipes. We inspect and test those systems to NFPA 72 and NFPA 25, track battery and equipment age, and stage upgrades before they fail an inspection.',
      },
      {
        question: 'Can you coordinate inspections for medical and healthcare buildings near St. Anthony Hospital?',
        answer: 'Yes. The medical-office buildings around St. Anthony Hospital at 6th and Simms carry higher life-safety expectations, including reliable alarm, sprinkler, and emergency-power coordination. We schedule around clinical operations, run functional tests with minimal disruption, and format reports to West Metro’s layout so corrections clear without rework.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Lakewood Inspection.',
        descriptor: 'Tell us about your property along Colfax, Union, Belmar, or Green Mountain and we’ll route the right NICET-certified technician — usually within a few business days, faster if it’s urgent.',
        href: '/contact',
        label: 'Get in touch',
      },
      {
        title: 'See All Our Services.',
        descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, alarms, monitoring, suppression, backflow, and consulting all under one roof.',
        href: '/services',
        label: 'Browse services',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Lakewood, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and standpipe testing, 24/7 monitoring, backflow, and kitchen-hood suppression in Lakewood, Colorado. Serving West Metro Fire Rescue jurisdictions from Belmar to Green Mountain. NICET-certified technicians, 90-minute Denver-metro response.',
      keywords:
        'fire protection Lakewood CO, fire inspections Lakewood, sprinkler inspection Lakewood, fire alarm testing Lakewood, backflow testing Lakewood, kitchen hood suppression Lakewood, standpipe testing Belmar, fire protection company Lakewood Colorado, West Metro Fire Rescue inspections',
      canonical: '/service-areas/lakewood-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // LARKSPUR, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'larkspur-co',
    city: 'Larkspur',
    state: 'CO',
    county: 'Douglas County',
    bannerTitle: 'Fire Protection Larkspur, CO',
    bannerSubtitle: 'LARKSPUR FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Larkspur sits on I-25 between Castle Rock and Monument, where ponderosa foothills, ranch land, and a few concentrated seasonal draws make up most of the built environment. The Colorado Renaissance Festival puts thousands of people under tents and inside temporary food stalls every summer weekend, Perry Park lays custom homes across steep forested lots, and the properties in between run to propane-heated ranch buildings and dry-system shops that freeze in winter. Every fire-protection inspection here answers to the Larkspur Fire Protection District, and we schedule Larkspur work on planned service routes so a small rural town gets the same NFPA-documented reports a metro campus would.',

    ahj: {
      name: 'Larkspur Fire Protection District',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'NFPA 1 / International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 681-3284',
      website: 'https://www.larkspurfire.org/',
      note:
        'Larkspur Fire Protection District is the Authority Having Jurisdiction for Larkspur and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 681-3284, and permitting and code information is at https://www.larkspurfire.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Larkspur Fire Protection District’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Colorado Renaissance Festival grounds', type: 'Commercial Corridor', note: 'Large seasonal open-air assembly with tented stages, a covered feast hall, and dozens of temporary cooking vendors — hood suppression, extinguisher counts, and assembly-occupancy egress drive the inspection scope.' },
      { name: 'Perry Park', type: 'Residential', note: 'Custom foothills homes on large forested lots around the golf course; deep wildland-urban interface exposure and residential propane and well systems throughout.' },
      { name: 'Perry Park Country Club', type: 'Commercial Corridor', note: 'Clubhouse, kitchen, and cart-barn cluster; commercial kitchen-hood suppression, sprinkler coverage, and extinguisher service on a single golf property.' },
      { name: 'Downtown Larkspur / Spruce Mountain Road', type: 'Mixed-Use', note: 'The small town core off the old highway alignment; storefronts, the post office, and community buildings with legacy alarm and extinguisher needs.' },
      { name: 'Spruce Mountain / Spruce Mountain Open Space', type: 'Residential', note: 'Homes tucked into heavy ponderosa near the open-space trailheads; some of the highest WUI ignition exposure in the district.' },
      { name: 'Sage Port', type: 'Residential', note: 'Established residential pocket near Perry Park with a mix of home ages; monitored-alarm and residential-sprinkler retrofits at remodel.' },
      { name: 'Bear Dance', type: 'Residential', note: 'Golf-adjacent large-lot homes east of I-25; custom construction with NFPA 13D residential sprinklers and propane appliances.' },
      { name: 'I-25 corridor (Larkspur interchange, Exit 173)', type: 'Commercial Corridor', note: 'Highway-frontage service and fuel uses; extinguisher service, dry-system freeze protection, and monitoring for unstaffed buildings.' },
      { name: 'Greenland / Greenland Open Space', type: 'Residential', note: 'Working ranch and large-acreage properties along the county line; agricultural outbuildings, propane, and long driveways that shape access planning.' },
      { name: 'Larkspur ranch and agricultural land', type: 'Industrial', note: 'Barns, equipment sheds, and ag storage across the district; extinguisher coverage, propane and fuel-storage hazards, and hydrant-scarce rural water supply.' },
      { name: 'Palmer Lake divide edge (south district)', type: 'Residential', note: 'Forested homes near the Douglas–El Paso county line approaching Monument; dry, wind-exposed sites with heavy fuel loading.' },
      { name: 'West Plum Creek Road valley', type: 'Residential', note: 'Rural residences and small acreages along the creek corridor; well-and-tank water supply and propane heat are the norm.' },
    ],

    neighborhoodIntro:
      'Larkspur is a small district with a wide footprint, so the work splits between a few concentrated draws and a lot of dispersed rural property. Below are the areas and corridors our technicians route through most often when we run Larkspur.',

    buildingStock:
      'Larkspur’s built environment is mostly low-density and rural. Custom single-family homes dominate Perry Park, Bear Dance, and Sage Port, built into forested foothill lots where propane heat and private wells are standard and municipal hydrants are scarce. The town core along Spruce Mountain Road holds a small cluster of storefronts and community buildings, several old enough to carry legacy fire-alarm and extinguisher setups. Commercial fire-protection scope concentrates at a handful of sites: the Colorado Renaissance Festival grounds with their seasonal tented assembly and temporary food vendors, the Perry Park Country Club with its clubhouse kitchen, and highway-frontage service uses at the I-25 Larkspur interchange. Beyond those, the district runs to ranch land and agricultural parcels — barns, equipment sheds, and fuel and propane storage — where dry sprinkler and standpipe systems need real freeze protection through Larkspur’s cold winters.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression on their code-driven cadences, documented in one report the Larkspur Fire Protection District will accept — scheduled on a planned route so a rural address still gets full annual coverage.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, and preaction systems exercised per NFPA 25, with the dry-system freeze protection Larkspur’s winters demand — main-drain and trip tests, valve supervision, and a prioritized deficiency list for clubhouse, shop, and ranch buildings.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including unstaffed I-25 corridor buildings where reliable monitoring matters most.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and fire-watch protocols, so an alarm at a Perry Park home or an empty highway-frontage building is confirmed and dispatched into the Larkspur Fire Protection District without delay.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing on fire-line, irrigation, and domestic backflow preventers at the country club and any served-water sites, with certification filed to the applicable water authority.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging from Class A through Class K — the core life-safety need across ranch outbuildings, shops, and Renaissance Festival vendor stalls.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — the Perry Park Country Club kitchen and the temporary cooking vendors at the Colorado Renaissance Festival are the recurring scope here.',
      },
      {
        title: 'Special Hazard & Suppression',
        body: 'CO₂ and clean-agent systems plus propane and fuel-storage hazard reviews for ranch, shop, and equipment buildings where LP-gas and dry storage set the risk profile.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Temporary-assembly and tent-permit coordination for seasonal events, WUI defensible-space guidance for foothills homeowners, and deficiency-correction management for Larkspur property owners working with the district.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians and documented to match what the Larkspur Fire Protection District expects — so corrections clear the first time, even when the site is an hour off the metro.',

    industriesServed: [
      'Ranch and agricultural properties',
      'Golf and country clubs',
      'Seasonal and temporary event venues',
      'Restaurants and food service',
      'Foothills custom residential',
      'HOA & community associations',
      'Highway-frontage service and fuel',
      'Warehouse and equipment storage',
      'Religious and community facilities',
      'Well and rural water-supply sites',
      'Propane and fuel-storage occupancies',
      'Vacant and unstaffed buildings',
    ],

    deficienciesTitle: 'What the Larkspur Fire Protection District flags most often on district inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we correct across Larkspur properties. None of it is a citation against a specific address — it’s the pattern our technicians document most in a rural, wildland-interface district with big seasonal assembly swings.',

    commonDeficiencies: [
      {
        title: 'Dry-system freeze damage and false trips',
        body: 'Dry-pipe systems in unheated ranch shops and equipment buildings around Larkspur are prone to residual water freezing at low points, which cracks fittings and causes nuisance trips. We locate and drain low points, verify air-maintenance settings, and correct pitch so the system survives a Douglas County winter.',
      },
      {
        title: 'Temporary vendor extinguishers under-rated or expired',
        body: 'Seasonal food vendors — most visibly at the Colorado Renaissance Festival — routinely arrive with missing, under-rated, or out-of-date extinguishers for their cooking hazard. We inventory each stall by hazard class and make sure Class K and Class ABC coverage is in place and tagged before the assembly opens.',
      },
      {
        title: 'Kitchen hood suppression out of date',
        body: 'The Perry Park Country Club kitchen and event-cooking setups can run pre-UL-300 wet-chemical systems past their service window. We inspect the hood, duct, and plenum, test the suppression, and flag UL-300 conversions before an inspection or a busy season forces the issue.',
      },
      {
        title: 'Propane and LP-gas clearance and shutoff gaps',
        body: 'Foothills homes and ranch buildings that run on propane frequently have tanks, regulators, or appliance connections too close to combustibles or missing clear emergency shutoffs. We document clearances and shutoff access as part of the life-safety walk so the hazard is corrected, not just noted.',
      },
      {
        title: 'Defensible space and WUI exposure at the structure',
        body: 'Perry Park, Spruce Mountain, and Bear Dance homes sit in heavy ponderosa where continuous fuel runs right up to the walls, decks, and vents. We flag the fire-protection side — ember-vulnerable vents, unprotected propane, and access — so owners can pair defensible-space work with a working alarm and suppression setup.',
      },
      {
        title: 'Rural monitoring and communication-path failures',
        body: 'Unstaffed I-25 corridor buildings and remote ranch properties often lose the alarm communication path — an aging phone line or a failed cellular radio — without anyone noticing. We test the path end to end and move sites onto a supervised cellular or IP connection the district can rely on.',
      },
      {
        title: 'Fire department connection and hydrant access on long rural drives',
        body: 'Where hydrants are scarce and driveways are long and steep, FDCs, standpipe connections, and apparatus access get overgrown or blocked. We verify caps, clearances, and signage so the Larkspur Fire Protection District can actually reach the connection under load.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Larkspur, Colorado?',
        answer: 'The Larkspur Fire Protection District is the AHJ for fire-code enforcement in and around Larkspur in Douglas County. The district reviews sprinkler, alarm, hood-suppression, and temporary-assembly permits and conducts on-site inspections for properties within its boundaries. Confirm the district’s own permitting and scheduling line directly with Larkspur Fire before you submit.',
      },
      {
        question: 'How does Red Rocks Fire Protection service a rural town like Larkspur?',
        answer: 'We run Larkspur on scheduled service routes rather than one-off truck rolls. Because the town sits on I-25 between Castle Rock and Monument, we batch Larkspur inspections and testing into planned visits — Perry Park homes, the country club, ranch outbuildings, and highway-frontage sites on the same route — so a rural address still gets full NFPA-documented annual coverage without paying for a dedicated metro trip.',
      },
      {
        question: 'Do you handle fire protection for the Colorado Renaissance Festival kind of seasonal event?',
        answer: 'Yes. Large open-air seasonal events bring temporary assembly occupancy under tents plus dozens of temporary cooking vendors, and that pulls in NFPA 96 hood suppression, NFPA 10 extinguisher coverage by hazard class, and assembly-occupancy egress and fire-watch considerations. We inventory vendor extinguishers, test any hood systems, and coordinate the temporary-assembly and tent permits with the fire district ahead of opening weekend.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Larkspur?',
        answer: 'Per NFPA 25 and the fire code as adopted by the Larkspur Fire Protection District, wet-pipe systems require quarterly and annual inspections with an internal inspection every 5 years, and dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. Dry systems matter especially here because so many ranch and shop buildings are unheated — we track every cadence and remind you before a test comes due.',
      },
      {
        question: 'My Perry Park home is deep in the ponderosa. What fire protection actually helps?',
        answer: 'Wildland-urban interface homes in Perry Park, Spruce Mountain, and Bear Dance benefit most from a working monitored alarm, ember-resistant venting, clear and protected propane connections, and defensible space around the structure. We handle the fire-protection side — monitoring, residential sprinkler inspection where a 13D system exists, extinguishers, and a life-safety walk — and flag the exposures a WUI mitigation crew should close.',
      },
      {
        question: 'Do you service dry sprinkler systems in unheated ranch and shop buildings?',
        answer: 'Yes, and it’s a core part of Larkspur work. Dry-pipe systems in unheated agricultural and shop buildings are vulnerable to residual water freezing at low points, which cracks fittings and causes false trips. We drain and correct low points, verify air-maintenance and trip settings, and run the required trip tests so the system holds through winter.',
      },
      {
        question: 'Are kitchen hood suppression systems required at places like the Perry Park Country Club?',
        answer: 'Yes. NFPA 96 and the fire code as adopted in Colorado require automatic fire-extinguishing systems for commercial cooking operations, covering the hood, duct, and plenum. UL-300 wet-chemical systems are the current standard; older systems are grandfathered but usually need replacement at renovation or turnover. That applies to the country club kitchen and to any staffed cooking at seasonal events.',
      },
      {
        question: 'How quickly can you respond to a fire-protection issue in Larkspur?',
        answer: 'Larkspur is well outside the immediate Denver metro, so we don’t promise a 90-minute window here the way we do closer to our Centennial office. Instead we plan Larkspur around scheduled service routes and staff a 24/7 emergency line for genuine system-down situations. For urgent work we’ll route a technician on the next available run and, when a system is offline, arrange fire watch and monitoring so the property stays covered in the meantime.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Larkspur Inspection.',
        descriptor: 'Tell us about your Larkspur property — Perry Park home, country club, ranch outbuilding, or seasonal venue — and we’ll fit it onto the next planned service route through the district.',
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
      title: 'Fire Protection Services in Larkspur, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, dry-system freeze protection, hood suppression, extinguisher service, and 24/7 monitoring in Larkspur, Colorado. Serving the Larkspur Fire Protection District — Perry Park, ranch properties, and seasonal event venues — on scheduled service routes with NICET-certified technicians.',
      keywords:
        'fire protection Larkspur CO, fire inspections Larkspur, sprinkler inspection Larkspur, dry system testing Larkspur, kitchen hood suppression Larkspur, fire extinguisher service Larkspur, Perry Park fire protection, Colorado Renaissance Festival fire safety, Larkspur Fire Protection District inspections',
      canonical: '/service-areas/larkspur-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // LITTLETON, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'littleton-co',
    city: 'Littleton',
    state: 'CO',
    county: 'Arapahoe County',
    bannerTitle: 'Fire Protection Services in Littleton, CO',
    bannerSubtitle: 'LITTLETON FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Littleton straddles three counties — Arapahoe, Jefferson, and Douglas — and its building stock runs from 1890s brick storefronts on historic Main Street to new mid-rise apartments along the light-rail stations at Littleton–Downtown and Littleton–Mineral. Red Rocks Fire Protection works out of our Centennial office at 7076 S. Alton Way, a short run up Broadway or Santa Fe, so a technician who already knows South Metro Fire Rescue’s inspection routine can be on your property the same day you call.',

    ahj: {
      name: 'South Metro Fire Rescue',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(720) 989-2000',
      website: 'https://www.southmetro.org/',
      note:
        'South Metro Fire Rescue is the Authority Having Jurisdiction for Littleton and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (720) 989-2000, and permitting and code information is at https://www.southmetro.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what South Metro Fire Rescue’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Historic Downtown / Main Street', type: 'Mixed-Use', note: 'Late-1800s masonry storefronts with restaurants, tap rooms, and second-floor offices; unsprinklered legacy buildings, shared party walls, and kitchen-hood suppression are recurring scopes.' },
      { name: 'Broadway Corridor', type: 'Commercial Corridor', note: 'Auto sales, medical offices, and older strip retail down S. Broadway; mixed wet-sprinkler and standalone alarm systems, plenty of tenant-turnover build-outs.' },
      { name: 'Aspen Grove', type: 'Retail', note: 'Open-air lifestyle center off Santa Fe Drive; large-format sprinkler coverage, restaurant hood systems, and FDC access are common inspection items.' },
      { name: 'Littleton Village', type: 'Master-Planned', note: 'Newer mixed residential-and-retail development near Broadway and Mineral; NFPA 13R apartment systems and monitored alarms.' },
      { name: 'Ketring Park / Gallup Gardens', type: 'Residential', note: 'Established single-family close to downtown; older homes with legacy smoke-detection layouts and NFPA 13D retrofits at remodel.' },
      { name: 'Highland / Littleton Boulevard', type: 'Residential', note: 'Mid-century ranch homes and small multi-family; aging wiring and dated alarm panels are frequent finds.' },
      { name: 'Southbridge', type: 'Residential', note: 'Douglas County–side subdivisions off S. Broadway near C-470; residential sprinkler and monitored systems in newer custom stock.' },
      { name: 'Columbine / Southwest Plaza area', type: 'Retail', note: 'Grocery-anchored retail and big-box near Bowles and Wadsworth in the Jefferson County portion; high-piled storage and sprinkler-obstruction clearances.' },
      { name: 'Meadowbrook / Roxborough Road corridor', type: 'Residential', note: 'Foothills-edge homes toward the Jefferson County line; longer-run fire lines and backflow testing on larger lots.' },
      { name: 'Santa Fe Drive Industrial', type: 'Industrial', note: 'Light manufacturing and warehouse along the Santa Fe / rail corridor; ESFR sprinklers, fire-pump testing, and rack-storage commodity classification.' },
      { name: 'Downtown Littleton Station area', type: 'Mixed-Use', note: 'Transit-oriented mid-rise apartments and offices at the light-rail stop; full life-safety stacks with EVAC and standpipe systems.' },
      { name: 'Littleton Adventist Hospital campus', type: 'Commercial Corridor', note: 'Hospital and surrounding medical office buildings off Mineral Avenue; institutional inspection cadence, clean-agent suppression for imaging and server rooms.' },
    ],

    neighborhoodIntro:
      'Littleton’s property mix changes block to block — a 130-year-old brick building on Main Street sits a few minutes from new transit-oriented apartments at the Littleton–Downtown light-rail station and from foothills-edge homes on the Jefferson County side. Below are the areas and corridors our technicians cover most often.',

    buildingStock:
      'Littleton carries some of the oldest commercial stock in the south metro: the historic Main Street district is full of unsprinklered or partially sprinklered masonry buildings from the 1880s through the early 1900s, now occupied by restaurants, tap rooms, and upper-floor offices. Single-family housing skews older too — mid-century ranches around Littleton Boulevard and Ketring Park, plus pre-2000 subdivisions on the Douglas and Jefferson County edges. Commercial property concentrates along the S. Broadway and Santa Fe Drive corridors, with retail centered at Aspen Grove and the Southwest Plaza trade area near Bowles. Newer multi-family and mixed-use has clustered at the light-rail stations and in Littleton Village, while light industrial and warehouse space lines the Santa Fe / rail corridor. Littleton Adventist Hospital and its medical office buildings off Mineral Avenue add an institutional layer with its own inspection cadence.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code-driven cadence, documented in a single report formatted for South Metro Fire Rescue’s review.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25 — including the older wet systems in Main Street buildings and standpipes in the transit-oriented mid-rises near the Littleton–Downtown station. Includes main-drain tests, valve supervision, and a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — common on the aging panels along the S. Broadway corridor.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification and fire-watch protocols, with confirmed alarms dispatched directly to South Metro Fire Rescue.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection control testing for irrigation, fire-line, and domestic backflow preventers; certification filed with the correct water provider, since Littleton spans several service districts across Arapahoe, Jefferson, and Douglas counties.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards — including the Class K units behind every Main Street and Aspen Grove kitchen line.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — a heavy scope in the Main Street restaurant district and Aspen Grove food tenants where hood systems run hard.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms, imaging suites, and data closets — common around the Littleton Adventist Hospital campus and Santa Fe corridor tech tenants.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Plan review coordination with South Metro Fire Rescue, help sorting out which county water district and code path applies for cross-jurisdiction sites, and deficiency-correction project management for HOA and property-management portfolios.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to South Metro Fire Rescue’s deficiency-list layout — so corrections clear on the first review, whether the site sits on the Arapahoe, Jefferson, or Douglas County side of the city.',

    industriesServed: [
      'Restaurants and food service',
      'Retail centers and lifestyle shopping',
      'Downtown mixed-use and hospitality',
      'HOA & community associations',
      'Multi-family property management',
      'Medical office and healthcare',
      'Office and commercial',
      'Light industrial and warehouse',
      'Assisted living and senior housing',
      'Automotive dealerships',
      'Data centers and server rooms',
      'Education and childcare',
    ],

    deficienciesTitle: 'What South Metro Fire Rescue flags most often on inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Littleton properties, weighted toward the older downtown and Broadway stock. None of this is a citation from a specific property — it’s the pattern of findings our technicians document and correct most frequently in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Legacy and partial sprinkler coverage in Main Street buildings',
        body: 'Historic downtown masonry buildings were often sprinklered piecemeal as tenants changed. Concealed spaces, added mezzanines, and back-of-house additions routinely lack coverage. We map what is actually protected against the current occupancy and scope the fill-in work for South Metro Fire Rescue sign-off.',
      },
      {
        title: 'Obstructed sprinkler heads',
        body: 'Storage, new signage, and tenant build-outs at Aspen Grove and along S. Broadway routinely crowd sprinkler deflectors. We measure clearance to the inch and document the correction scope so AHJ approval is fast.',
      },
      {
        title: 'Kitchen hood suppression out of date or over-cycled',
        body: 'The Main Street restaurant density means hood systems run hard and often show pre-UL-300 equipment or missed six-month service. We inventory each hood by hazard class and flag UL-300 conversions ahead of tenant turnover.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries have a 4–5 year service life, and the older panels along the Broadway corridor are frequent failers on load test. We track every panel’s battery age and replace proactively.',
      },
      {
        title: 'Backflow preventers filed with the wrong water district',
        body: 'Because Littleton crosses Arapahoe, Jefferson, and Douglas counties, fire-line and irrigation backflow certifications sometimes get filed with the wrong provider. We confirm the correct service district for the address and file the annual test where it actually lands.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'Missing or broken FDC caps let debris into the check valve and can fail an inspection outright — common on street-facing downtown and Aspen Grove connections. We carry replacements on the truck and install them on the spot.',
      },
      {
        title: 'Standpipe and EVAC systems not re-commissioned after build-out',
        body: 'The transit-oriented mid-rises near the Littleton–Downtown and Littleton–Mineral stations undergo tenant build-outs that disable standpipe valves or the voice-evacuation system without re-commissioning. We provide turnkey re-commissioning with South Metro Fire Rescue sign-off.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Littleton, Colorado?',
        answer: 'South Metro Fire Rescue is the fire-code authority for properties inside the City of Littleton. It handles on-site inspections and plan review for sprinkler, alarm, and suppression work across the parts of the city that fall in Arapahoe, Jefferson, and Douglas counties. Confirm the current permitting line directly with South Metro Fire Rescue before you submit.',
      },
      {
        question: 'Does Red Rocks Fire Protection serve Littleton, and how fast can you get there?',
        answer: 'Yes. Our office is at 7076 S. Alton Way in Centennial, a short run over to Littleton on Broadway or Santa Fe. Littleton is inside the Denver metro area we cover, so our emergency response window is typically under 90 minutes for fire-protection emergencies — and usually faster, since the same technicians who know your building are the ones we dispatch.',
      },
      {
        question: 'My building is on historic Main Street and isn’t fully sprinklered — what are my options?',
        answer: 'Many downtown Littleton buildings from the 1880s–1910s were sprinklered in pieces as tenants changed, so concealed spaces and additions are often uncovered. We inspect what is actually protected against your current occupancy, identify the gaps South Metro Fire Rescue will care about, and scope fill-in coverage or an alternative that fits a historic masonry structure without tearing it apart.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Littleton?',
        answer: 'Per NFPA 25 and the IFC as adopted by South Metro Fire Rescue, wet-pipe systems require quarterly and annual inspections plus an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. We track every cadence for every system we service and email you 30 days before a test comes due.',
      },
      {
        question: 'Are kitchen hood suppression systems required for Littleton restaurants?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require an automatic fire-extinguishing system for commercial cooking operations — hood, duct, and plenum. UL-300 wet-chemical is the current standard. With the restaurant density on Main Street and at Aspen Grove, these systems run hard, and older pre-UL-300 units typically need replacement at tenant turnover or major renovation.',
      },
      {
        question: 'Littleton spans three counties — does that change who I file backflow tests with?',
        answer: 'It can. Because Littleton crosses Arapahoe, Jefferson, and Douglas counties, addresses fall under different water service districts, and fire-line and irrigation backflow certifications have to be filed with the correct provider. We confirm which district serves your address and file the annual cross-connection test where it actually needs to go.',
      },
      {
        question: 'Do you service the transit-oriented apartments near the light-rail stations?',
        answer: 'Yes. The mid-rise residential near the Littleton–Downtown and Littleton–Mineral stations typically runs NFPA 13R sprinkler systems, standpipes, monitored fire alarms, and voice-evacuation. We inspect and test the full life-safety stack, and we re-commission standpipe and EVAC systems that get disabled during unit or amenity build-outs.',
      },
      {
        question: 'How long does a commercial fire alarm inspection take in Littleton?',
        answer: 'Most take 2 to 4 hours depending on device count and how many initiating devices need functional testing. We coordinate with on-site staff or your property manager to keep tenant disruption low, and we run after-hours inspections for occupied downtown retail, restaurants, and office buildings.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Littleton Inspection.',
        descriptor: 'Tell us about your property — a Main Street storefront, an Aspen Grove tenant space, or a light-rail mid-rise — and we’ll route the right NICET-certified technician, usually within a few business days and faster if it’s urgent.',
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
      title: 'Fire Protection Services in Littleton, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and kitchen-hood service in Littleton, Colorado. Serving historic Main Street, Broadway, Aspen Grove, and the light-rail corridor across Arapahoe, Jefferson, and Douglas counties. NICET-certified technicians, 90-minute metro response.',
      keywords:
        'fire protection Littleton CO, fire inspections Littleton, sprinkler inspection Littleton, fire alarm testing Littleton, backflow testing Littleton, kitchen hood suppression Littleton, Main Street Littleton fire code, South Metro Fire Rescue inspections',
      canonical: '/service-areas/littleton-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // LONE TREE, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'lone-tree-co',
    city: 'Lone Tree',
    state: 'CO',
    county: 'Douglas County',
    bannerTitle: 'Fire Protection Lone Tree, CO',
    bannerSubtitle: 'LONE TREE FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Lone Tree packs a lot of high-consequence property into a small footprint: the Park Meadows mall, the Sky Ridge Medical Center campus, the Charles Schwab regional office, and the RidgeGate build-out east of I-25. Red Rocks Fire Protection works out of Centennial, ten minutes up the C-470 / I-25 interchange, and every property in Lone Tree falls under the South Metro Fire Rescue Authority for code enforcement. We write every inspection report to the format South Metro accepts on the first pass, so corrections clear without a second round trip.',

    ahj: {
      name: 'South Metro Fire Rescue',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(720) 989-2000',
      website: 'https://www.southmetro.org/',
      note:
        'South Metro Fire Rescue is the Authority Having Jurisdiction for Lone Tree and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (720) 989-2000, and permitting and code information is at https://www.southmetro.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what South Metro Fire Rescue’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Park Meadows', type: 'Retail', note: 'Regional super-regional mall; large-format ESFR sprinkler protection, mall-wide voice evacuation, and high-piled anchor-store storage drive most inspection scope.' },
      { name: 'RidgeGate (West Village)', type: 'Master-Planned', note: 'Mixed office, medical, and multi-family around the Lone Tree light-rail station; full life-safety stacks with monitored alarm and standpipe systems.' },
      { name: 'RidgeGate (East Village)', type: 'Master-Planned', note: 'Newer build-out east of I-25 tied to the RTD Southeast Rail extension; ground-up sprinkler and alarm commissioning as blocks deliver.' },
      { name: 'Sky Ridge Medical Center campus', type: 'Mixed-Use', note: 'Acute-care hospital and medical office buildings; NFPA 99 healthcare occupancy, smoke-compartment barriers, and generator-backed fire alarm are recurring scopes.' },
      { name: 'Lone Tree Arts Center district', type: 'Mixed-Use', note: 'Assembly occupancy with a performance hall; stage sprinkler protection, emergency voice/alarm, and egress-lighting testing.' },
      { name: 'Charles Schwab campus', type: 'Commercial Corridor', note: 'Large regional office campus off Lincoln Avenue; Class-A office life-safety with clean-agent suppression for data and server rooms.' },
      { name: 'Lincoln Avenue corridor', type: 'Commercial Corridor', note: 'Office, flex, and hospitality along the Lincoln / I-25 interchange; wet sprinkler, fire alarm panels, and kitchen-hood suppression at hotel and restaurant tenants.' },
      { name: 'Yosemite Street / C-470 corridor', type: 'Commercial Corridor', note: 'Auto dealerships and big-box retail near the C-470 / Yosemite interchange; ESFR retail sprinkler and Class-B extinguisher coverage.' },
      { name: 'Heritage Hills', type: 'Residential', note: 'Gated custom-home community west of I-25; NFPA 13D residential sprinkler and monitored alarm retrofits at remodel.' },
      { name: 'Carriage Club', type: 'Residential', note: 'Established single-family neighborhood; older monitored alarm and backflow testing needs on maturing systems.' },
      { name: 'The Fairways / Lone Tree Golf area', type: 'Residential', note: 'Single-family around the municipal golf course; irrigation and fire-line backflow certification is a steady need here.' },
      { name: 'Acres Green', type: 'Residential', note: 'One of the older neighborhoods, west of the interstate; legacy smoke-detection layouts that benefit from retrofit and monitored upgrades.' },
    ],

    neighborhoodIntro:
      'Lone Tree runs on a handful of large, high-occupancy properties — the mall, the hospital, the RidgeGate offices — surrounded by custom-home neighborhoods west of I-25. Below are the areas and corridors our technicians cover most often, and the systems each one tends to need.',

    buildingStock:
      'Lone Tree’s property mix is unusually top-heavy for its size. A short list of large assets carries most of the fire-protection load: Park Meadows and its anchor stores, the Sky Ridge Medical Center hospital and its surrounding medical office buildings, the Charles Schwab office campus, and the office-and-multi-family blocks of RidgeGate around the Lone Tree light-rail station. The RidgeGate East Village, tied to the RTD Southeast Rail extension across I-25, is still delivering ground-up buildings that need commissioning from bare slab. Residential stock is largely upper-bracket single-family — Heritage Hills, Carriage Club, and the neighborhoods around the Lone Tree Golf Club — with a growing share of mid-rise multi-family in RidgeGate. Hospitality and dealership property clusters at the Lincoln Avenue and C-470 / Yosemite interchanges.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression across a property — each system on its own code cadence, documented in one South Metro–formatted report. Common at Park Meadows tenant spaces and RidgeGate office buildings.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, and standpipe systems tested per NFPA 25, including ESFR systems in the mall anchors and standpipe risers in RidgeGate mid-rise offices. Main-drain tests, valve supervision, and a prioritized deficiency list on every visit.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including the healthcare-occupancy alarm and smoke-compartment logic at Sky Ridge medical buildings.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and direct dispatch into South Metro’s CAD when an alarm confirms — the same authority that responds to the mall and the hospital.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for irrigation, fire-line, and domestic backflow preventers across the golf-course neighborhoods and the RidgeGate campus, with certification filed to the water utility.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K — including Class B coverage at the Yosemite-corridor dealerships.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — recurring scope at the Park Meadows food court and the Lincoln Avenue hotel and restaurant tenants.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms and data closets — common in the Charles Schwab campus and RidgeGate Class-A office buildings.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review with South Metro’s Community Risk Reduction team and deficiency-correction project management — useful on RidgeGate ground-up commissioning and on tenant build-outs inside Park Meadows.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to South Metro Fire Rescue Authority’s preferred layout so corrections at the mall, the hospital campus, or a RidgeGate office clear without a re-inspection.',

    industriesServed: [
      'Retail centers and shopping malls',
      'Hospitals and medical office buildings',
      'Office and Class-A commercial',
      'Multi-family property management',
      'HOA & community associations',
      'Hospitality',
      'Restaurants and food service',
      'Data centers and server rooms',
      'Assembly and performing-arts venues',
      'Automotive dealerships',
      'Assisted living and healthcare',
      'Education and childcare',
    ],

    deficienciesTitle: 'What South Metro Fire Rescue Authority flags most often on Lone Tree inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we document across Lone Tree properties. Nothing here is a citation from a specific building — it’s the pattern of findings our technicians correct most often in this jurisdiction, weighted toward the large retail, medical, and office assets that dominate the city.',

    commonDeficiencies: [
      {
        title: 'Obstructed ESFR sprinkler heads in retail storage',
        body: 'Anchor-store and stockroom shelving at Park Meadows creeps into the clearance zone under ESFR heads faster than any other deficiency we log. We measure deflector clearance to the inch, check commodity height against the sprinkler design, and document the correction scope so South Metro signs off fast.',
      },
      {
        title: 'Mall voice-evacuation zones not re-commissioned after tenant turnover',
        body: 'Park Meadows tenant build-outs regularly disable or re-route notification appliances without re-commissioning the emergency voice/alarm system. We verify intelligibility and zone-by-zone coverage and provide turnkey re-commissioning with South Metro sign-off.',
      },
      {
        title: 'Healthcare smoke-compartment barrier penetrations',
        body: 'Sky Ridge medical office remodels frequently leave unsealed cable and pipe penetrations through smoke-compartment barriers. We inventory penetrations by rated assembly and coordinate firestopping so the healthcare-occupancy inspection passes.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries carry a 4–5 year service life and are a top failed-load-test finding across the RidgeGate and Lincoln Avenue office buildings. We track every panel’s battery age and replace before the annual test.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Irrigation and fire-line backflow preventers across the golf-course neighborhoods and the RidgeGate campus routinely lapse on annual certification. We test and file the certification directly with the water utility and note it on the South Metro report.',
      },
      {
        title: 'Kitchen hood suppression out of date',
        body: 'Pre-UL-300 wet-chemical systems still turn up at older Lincoln Avenue restaurants and Park Meadows food-court tenants. We inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal or renovation.',
      },
      {
        title: 'Clean-agent room integrity and low-agent conditions',
        body: 'Data and server rooms in the Charles Schwab campus and RidgeGate offices lose room integrity after ceiling and cable work, and agent cylinders drift low over time. We run room-integrity fan tests and verify cylinder pressure so the special-hazard system will actually hold concentration.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Lone Tree, Colorado?',
        answer: 'South Metro Fire Rescue Authority is the AHJ for the City of Lone Tree. South Metro’s Community Risk Reduction division issues permits, conducts on-site fire inspections, and reviews sprinkler, alarm, and underground fire-line submittals for Lone Tree properties — from Park Meadows and the Sky Ridge hospital campus to the RidgeGate build-out.',
      },
      {
        question: 'Do you serve Lone Tree if your office is in Centennial?',
        answer: 'Yes. Our office at 7076 S. Alton Way in Centennial sits about ten minutes from Lone Tree up the C-470 / I-25 interchange. Lone Tree is well inside our Denver metro service area, so we hold a 90-minute emergency response window for the city and dispatch the same technicians who know your property.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Lone Tree?',
        answer: 'Per NFPA 25 and the IFC as adopted by South Metro Fire Rescue, wet-pipe systems require quarterly and annual inspections with an internal inspection every 5 years. ESFR systems in the Park Meadows anchors and standpipes in RidgeGate mid-rise offices follow the same water-based cadence. We track every due date and email you 30 days ahead of each test.',
      },
      {
        question: 'Can you inspect the large-format sprinkler systems at a mall like Park Meadows?',
        answer: 'Yes. Retail of that scale runs on ESFR (Early Suppression Fast Response) sprinkler protection, which is sensitive to storage height and deflector clearance. We test the system to NFPA 25, check commodity classification and rack storage against the design, and confirm mall-wide voice evacuation intelligibility — the deficiencies South Metro flags most often in that building type.',
      },
      {
        question: 'Do you handle healthcare occupancies like the Sky Ridge Medical Center campus?',
        answer: 'Yes. Hospital and medical office buildings are NFPA 99 healthcare occupancies with generator-backed fire alarm, smoke-compartment barriers, and coordinated fire/smoke damper testing. We schedule around clinical operations, phase testing so care areas stay in service, and document barrier and damper conditions to the format South Metro expects.',
      },
      {
        question: 'Can you commission fire protection in new RidgeGate buildings?',
        answer: 'Yes. The RidgeGate East Village, tied to the RTD Southeast Rail extension across I-25, is still delivering ground-up buildings. We handle sprinkler and alarm commissioning from bare slab, coordinate with the plan reviewer and South Metro’s Community Risk Reduction team, and carry the deficiency-correction list through to sign-off.',
      },
      {
        question: 'How quickly can you respond to an emergency in Lone Tree?',
        answer: 'Our Centennial office is roughly ten minutes from Lone Tree via C-470 and I-25, so our emergency response window for the city is typically under 90 minutes — usually faster. We staff a 24/7 emergency line and send the technicians who already know your property, not a call center.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Lone Tree Inspection.',
        descriptor: 'Tell us about your property — mall tenant, RidgeGate office, medical building, or single-family — and we’ll route the right NICET-certified technician, faster if it’s urgent.',
        href: '/contact',
        label: 'Get in touch',
      },
      {
        title: 'See All Our Services.',
        descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, alarms, monitoring, suppression, backflow, and consulting all under one roof.',
        href: '/services',
        label: 'Browse services',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Lone Tree, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, and suppression in Lone Tree, Colorado — Park Meadows, Sky Ridge, RidgeGate, and Charles Schwab campus. South Metro Fire Rescue jurisdiction, NICET-certified technicians, 90-minute metro response.',
      keywords:
        'fire protection Lone Tree CO, fire inspections Lone Tree, sprinkler inspection Lone Tree, fire alarm testing Lone Tree, backflow testing Lone Tree, kitchen hood suppression Lone Tree, Park Meadows fire protection, Sky Ridge fire protection, RidgeGate fire protection, South Metro Fire Rescue inspections',
      canonical: '/service-areas/lone-tree-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // LONGMONT, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'longmont-co',
    city: 'Longmont',
    state: 'CO',
    county: 'Boulder County',
    bannerTitle: 'Fire Protection Longmont, CO',
    bannerSubtitle: 'LONGMONT FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Longmont runs on a wider mix of buildings than most north-metro cities: a walkable brick downtown along Main Street, food and beverage plants like Butterball and Left Hand Brewing, tech and precision manufacturing off the US-287 and CO-119 corridors, and newer master-planned housing out toward Ute Creek and Prospect New Town. Every commercial, industrial, and multi-family property in the city answers to Longmont Fire Services for fire-code enforcement, and every inspection we run is written to a report LFD will accept on the first pass.',

    ahj: {
      name: 'Longmont Fire Services',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 651-8437',
      website: 'https://www.longmontcolorado.gov/departments/departments-n-z/public-safety-department/fire-services',
      note:
        'Longmont Fire Services is the Authority Having Jurisdiction for Longmont and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 651-8437, and permitting and code information is at https://www.longmontcolorado.gov/departments/departments-n-z/public-safety-department/fire-services. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Longmont Fire Services’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Downtown / Main Street', type: 'Mixed-Use', note: 'Historic brick storefronts and second-floor residential; unsprinklered legacy buildings, shared standpipes, and kitchen-hood suppression at the restaurant row.' },
      { name: 'Prospect New Town', type: 'Master-Planned', note: 'Dense New Urbanist mix of live-work units, row homes, and small commercial; NFPA 13R and 13D systems plus monitored alarms on tight zero-lot-line construction.' },
      { name: 'Southwest Longmont / Village at the Peaks', type: 'Retail', note: 'Grocery- and cinema-anchored retail off Hover Street and CO-119; large-format sprinkler systems and Ansul hood suppression at food tenants.' },
      { name: 'Hover Street corridor', type: 'Commercial Corridor', note: 'Hotels, medical office, and big-box retail along the main north-south commercial spine; wet-pipe systems, fire pumps, and voice-evacuation panels.' },
      { name: 'Ken Pratt Boulevard (CO-119)', type: 'Commercial Corridor', note: 'Auto dealerships, flex office, and strip retail on the diagonal to Boulder; recurring FDC, backflow, and sprinkler-obstruction scopes.' },
      { name: 'Southeast industrial / Sugar Mill district', type: 'Industrial', note: 'Warehouse, distribution, and the former sugar-mill area near CO-119; ESFR sprinkler systems, rack-storage commodity classification, and fire-pump testing.' },
      { name: 'Butterball / food-processing north end', type: 'Industrial', note: 'Meat and food-processing plants; ammonia-refrigeration life safety, dry-pipe systems in freezers, and high-hazard suppression.' },
      { name: 'Left Hand / east-side brewing and light manufacturing', type: 'Industrial', note: 'Breweries and precision manufacturers off the St. Vrain; CO₂ hazard monitoring, dry systems in cold storage, and process-area extinguisher coverage.' },
      { name: 'Vance Brand Airport area', type: 'Industrial', note: 'Hangars, FBO, and aviation light-industrial on the west side; foam and high-expansion suppression, dry-pipe unheated spaces, and specialized extinguisher hazards.' },
      { name: 'Old Town / Historic Eastside', type: 'Residential', note: 'Early-1900s bungalows and Craftsman homes east of Main; legacy smoke-detection layouts and residential retrofits at remodel.' },
      { name: 'Ute Creek / Fox Meadows northeast', type: 'Master-Planned', note: 'Newer single-family subdivisions near Ute Creek Golf Course; NFPA 13D residential sprinkler and monitored-alarm work in newer stock.' },
      { name: 'St. Vrain Valley / eastern agricultural edge', type: 'Commercial Corridor', note: 'Ag-adjacent commercial, storage, and equipment buildings toward Weld County; barn-type structures, water-supply constraints, and standalone alarm monitoring.' },
    ],

    neighborhoodIntro:
      'Longmont spreads as three cities in one — a historic downtown, a heavy industrial and food-processing base, and newer master-planned housing on the northeast edge. Below are the named districts and corridors our technicians cover most often across the St. Vrain Valley.',

    buildingStock:
      'Longmont carries a heavier industrial and food-processing load than most cities its size on the Front Range. The north end holds food plants like Butterball; the southeast and old sugar-mill district are warehouse and distribution; and the east side runs to breweries and precision manufacturing near the St. Vrain River. Downtown Main Street is brick early-20th-century commercial, much of it unsprinklered legacy construction with restaurant tenants that carry kitchen-hood suppression. Retail concentrates along Hover Street and the Ken Pratt Boulevard (CO-119) corridor, anchored by Village at the Peaks. Housing runs from Old Town bungalows east of Main, to the New Urbanist density of Prospect New Town, to newer single-family subdivisions out toward Ute Creek. Vance Brand Airport adds hangar and aviation light-industrial space on the west side.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code-driven cadence, documented in a single Longmont Fire Services–formatted report.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25 — including the dry-pipe and freezer systems common in Longmont’s food-processing and cold-storage plants, with main-drain tests and a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians, coordinated around production shifts at industrial sites.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and fire-watch protocols, dispatching directly to Longmont Fire Services when an alarm confirms.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection control testing for irrigation, fire-line, and domestic backflow preventers; certification filed with the City of Longmont water utility.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards, including the process-area coverage brewing and manufacturing floors require.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — a recurring scope at Main Street restaurants and Village at the Peaks food tenants.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms and tech-manufacturing clean spaces, plus process-hazard suppression for the breweries and precision shops on the east side.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review with Longmont Fire Services’s prevention staff, plan-reviewer coordination, and deficiency-correction project management for industrial, property-management, and HOA portfolios.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to Longmont Fire Services’s preferred layout — so corrections clear without a re-inspection.',

    industriesServed: [
      'Food processing and cold storage',
      'Breweries and beverage manufacturing',
      'Precision and tech manufacturing',
      'Warehouse and distribution',
      'Downtown retail and restaurants',
      'Multi-family property management',
      'HOA & community associations',
      'Auto dealerships',
      'Hospitality and hotels',
      'Aviation and hangar facilities',
      'Assisted living and healthcare',
      'Education and childcare',
    ],

    deficienciesTitle: 'What Longmont Fire Services flags most often on inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Longmont properties. None of this is a citation from a specific property — it’s the pattern of findings our technicians document and correct most frequently in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads in warehouse and distribution space',
        body: 'The top finding on Longmont industrial inspections: pallet racking, seasonal storage, and re-slotted product installed too close to ESFR deflectors in the southeast distribution district. We measure clearance to the inch and document the correction scope so LFD approval is fast.',
      },
      {
        title: 'Legacy unsprinklered or partially sprinklered downtown buildings',
        body: 'Main Street’s early-1900s brick commercial often has partial coverage, shared standpipes, or systems that predate current spacing rules. When a tenant build-out triggers a code review, LFD flags the gaps — we scope the retrofit and the fire-department connection work together.',
      },
      {
        title: 'Dry-pipe and freezer-system trip failures',
        body: 'Cold-storage and food-processing plants run dry-pipe systems that fail trip tests when the accelerator or low-point drains are neglected. We put every dry valve on a documented trip cadence and correct low-point drainage before winter.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries carry a 4–5 year service life and fail load tests across the Hover Street and CO-119 commercial corridors. We track every panel’s battery age and replace proactively rather than at the inspection.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Irrigation and fire-line backflow preventers require annual testing by a certified cross-connection tester. We file the certification directly with the City of Longmont water utility and note it on the LFD report.',
      },
      {
        title: 'Kitchen hood suppression out of date',
        body: 'Pre-UL-300 wet-chemical systems still turn up in older Main Street restaurant spaces. LFD increasingly flags them for replacement at tenant turnover — we inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'A common LFD finding along Ken Pratt Boulevard and downtown: missing or broken FDC caps let debris into the check valve and can fail an inspection outright. We carry replacements on the truck and install them on the spot.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Longmont, Colorado?',
        answer: 'Longmont Fire Services is the AHJ for the City of Longmont. Its Fire Prevention / Community Risk Reduction division issues permits, conducts on-site fire inspections, and reviews sprinkler, alarm, and underground fire-line submittals for property inside the city. Confirm the department’s current permitting and inspection-scheduling line directly with LFD before you file.',
      },
      {
        question: 'Does Red Rocks Fire Protection serve Longmont if your office is in Centennial?',
        answer: 'Yes. Our office is at 7076 S. Alton Way, Centennial, CO 80112, and we run scheduled inspection and testing routes north through Boulder County, including Longmont. Longmont sits toward the north edge of our Denver-metro service area, so most work is booked on a planned route — we’ll give you a firm appointment window rather than an open-ended wait.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Longmont?',
        answer: 'Per NFPA 25 and the IFC as adopted by Longmont Fire Services, wet-pipe sprinkler systems require quarterly and annual inspections, with an internal inspection every 5 years. Dry-pipe systems — common in Longmont’s cold-storage and food-processing plants — add quarterly trip tests and a 3-year full-flow trip test. We track every cadence for every system and email you 30 days before a test is due.',
      },
      {
        question: 'Do you handle fire protection for food-processing and cold-storage plants in Longmont?',
        answer: 'Yes. Longmont’s north-end food plants and southeast distribution buildings run dry-pipe and freezer sprinkler systems, high-hazard suppression, and process-area extinguisher coverage that a standard commercial route doesn’t cover. We test around production shifts and document ammonia-refrigeration and freezer-system life safety to the layout LFD expects.',
      },
      {
        question: 'Do you inspect kitchen hood suppression at Main Street restaurants?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require an automatic fire-extinguishing system for the hood, duct, and plenum of any commercial cooking operation. Downtown Longmont has older restaurant spaces where pre-UL-300 wet-chemical systems still exist; we inspect, test, and tag them per NFPA 96 and 17A and flag UL-300 conversions ahead of turnover.',
      },
      {
        question: 'Do you service breweries and manufacturing floors in Longmont?',
        answer: 'Yes. The east-side breweries and precision manufacturers near the St. Vrain carry hazards a general commercial inspection misses — CO₂ monitoring in fermentation and dispense areas, dry systems in cold storage, clean-agent suppression for server and control rooms, and process-area extinguishers. We inspect and tag all of it under one report.',
      },
      {
        question: 'Can you inspect hangars and aviation buildings at Vance Brand Airport?',
        answer: 'Yes. Hangar and FBO structures on Longmont’s west side use foam and high-expansion suppression, dry-pipe systems in unheated space, and specialized extinguisher hazards. We test these to NFPA 25 and the applicable aviation standards and format the report for Longmont Fire Services review.',
      },
      {
        question: 'How fast can you respond to a fire-protection emergency in Longmont?',
        answer: 'Longmont is toward the north edge of our service area, so we don’t promise a fixed drive-time window there the way we do closer to our Centennial office. We staff a 24/7 emergency line, and for Longmont clients on a service agreement we prioritize dispatching the same technicians who already know your property. For a system taken offline during our own work, we provide documented fire watch until it’s restored.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Longmont Inspection.',
        descriptor: 'Tell us about your property — plant, downtown restaurant, retail, or multi-family — and we’ll route the right NICET-certified technician on our next Boulder County pass.',
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
      title: 'Fire Protection Services in Longmont, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, and suppression in Longmont, Colorado. Serving Longmont Fire Services jurisdiction — downtown Main Street, US-287 and CO-119 corridors, food-processing, distribution, and brewing. NICET-certified technicians.',
      keywords:
        'fire protection Longmont CO, fire inspections Longmont, sprinkler inspection Longmont, fire alarm testing Longmont, backflow testing Longmont, kitchen hood suppression Longmont, warehouse ESFR inspection Longmont, food processing fire protection Longmont, Longmont Fire Services inspections',
      canonical: '/service-areas/longmont-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // LOUISVILLE, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'louisville-co',
    city: 'Louisville',
    state: 'CO',
    county: 'Boulder County',
    bannerTitle: 'Fire Protection Louisville, CO',
    bannerSubtitle: 'LOUISVILLE FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Louisville sits at the north edge of the Denver metro where old coal-mining downtown meets the tech and flex space of the Colorado Tech Center. If you own or manage property here — a restaurant on Main Street, a light-industrial building off CTC Boulevard, or a retail box on McCaslin — your fire systems answer to the Louisville Fire Protection District. Red Rocks Fire Protection runs every inspection to a report the District will accept on the first pass, and we know this town carries wildland-interface exposure that most metro suburbs do not.',

    ahj: {
      name: 'Louisville Fire Protection District',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 666-6595',
      website: 'https://www.louisvillefire.com/',
      note:
        'Louisville Fire Protection District is the Authority Having Jurisdiction for Louisville and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 666-6595, and permitting and code information is at https://www.louisvillefire.com/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Louisville Fire Protection District’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Historic Downtown / Main Street', type: 'Mixed-Use', note: 'Old coal-mining commercial core with restaurants and bars in early-1900s brick storefronts; kitchen-hood suppression, aging sprinkler feeds, and party-wall firestopping are recurring scopes.' },
      { name: 'Colorado Tech Center (CTC)', type: 'Industrial', note: 'Light-industrial, tech, and flex buildings off CTC Boulevard and Dry Creek Drive; ESFR sprinklers, clean-agent suppression for labs and server rooms, and fire-pump testing.' },
      { name: 'McCaslin Boulevard corridor', type: 'Retail', note: 'Grocery-anchored and big-box retail along McCaslin near US-36; Ansul kitchen-hood systems, sprinkler-obstruction clearances, and mall-style voice evacuation.' },
      { name: 'Centennial Valley Business Park', type: 'Commercial Corridor', note: 'Established office and light-manufacturing park near US-36; wet and dry sprinkler systems, fire alarm panels, and backflow on fire and irrigation lines.' },
      { name: 'Coal Creek Ranch', type: 'Master-Planned', note: 'Golf-course community of single-family and townhomes; HOA common-area backflow, monitored residential alarms, and NFPA 13D retrofits at remodel.' },
      { name: 'North End', type: 'Residential', note: 'Newer subdivisions north of South Boulder Road built to residential sprinkler standards; monitored alarm and 13D system testing.' },
      { name: 'Old Town neighborhoods', type: 'Residential', note: 'Pre-1950 miner cottages and infill around downtown; legacy smoke-detection layouts and knob-and-tube-era wiring that benefit from monitored retrofits.' },
      { name: 'Steel Ranch', type: 'Master-Planned', note: 'Master-planned single-family and paired homes on the north side; HOA backflow testing and residential sprinkler service in newer stock.' },
      { name: 'Sagamore', type: 'Residential', note: 'Established single-family off South Boulder Road backing to open space; wildland-interface fuel exposure worth factoring into ember-resistant upgrades.' },
      { name: 'Downtown-adjacent Highway 42 / Old Town fringe', type: 'Commercial Corridor', note: 'Mixed small-commercial and auto-service along the old highway; extinguisher service, spray-booth suppression, and small-tenant sprinkler work.' },
      { name: 'Cornerstone / Delo District', type: 'Mixed-Use', note: 'Redeveloped land near the RTD/US-36 station area with residential above ground-floor retail; full life-safety stacks and standpipe testing in mid-rise construction.' },
      { name: 'Southeast interface (Marshall Fire burn edge)', type: 'Residential', note: 'The Dec 2021 Marshall Fire pushed into Louisville’s south and southeast neighborhoods; rebuilds here are prime candidates for ember-resistant detailing and monitored early-warning systems.' },
    ],

    neighborhoodIntro:
      'We cover the full spread of property in Louisville — Main Street restaurants in century-old brick, the flex and tech buildings of the Colorado Tech Center, retail along McCaslin, and single-family neighborhoods that sit right against open-space fuel. Below are the areas and corridors our technicians work most often.',

    buildingStock:
      'Louisville’s building stock splits into three eras. The historic downtown around Main Street is early-1900s brick commercial and pre-1950 miner cottages, where restaurants share party walls and sprinkler and hood-suppression retrofits get complicated fast. The Colorado Tech Center and Centennial Valley Business Park hold the city’s light-industrial, flex, and office space — tilt-up and metal buildings with ESFR sprinklers, fire pumps, and clean-agent suppression for labs and data rooms. Residential is a mix of pre-war Old Town infill and master-planned communities like Coal Creek Ranch and Steel Ranch built with residential sprinklers. What sets Louisville apart from a typical metro suburb is the wildland-urban interface: the December 2021 Marshall Fire burned into the city’s south and southeast neighborhoods, and rebuilds and existing interface homes carry a real ember-ignition exposure that shapes both construction detailing and early-warning system design.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each on its own code-driven cadence, documented in one report formatted for the Louisville Fire Protection District.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25 — main-drain tests, valve supervision, and fire-pump flow tests for the ESFR systems common across the Colorado Tech Center.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians, from Main Street storefronts to Centennial Valley office buildings.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification and direct dispatch — a meaningful margin in Louisville’s interface neighborhoods where an early confirmed alarm matters most.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for fire-line, irrigation, and domestic backflow preventers across HOA common areas in Coal Creek Ranch and Steel Ranch, with certification filed to the water utility.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards — including the Class K units behind every Main Street kitchen line.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — a frequent scope for the restaurants packed along historic Main Street and the McCaslin retail corridor.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms, labs, and clean-tech spaces — common in Colorado Tech Center flex buildings and Centennial Valley office suites.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Plan-review coordination with the Louisville Fire Protection District, deficiency-correction project management, and wildland-interface guidance on ember-resistant detailing for rebuild and remodel projects.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to the Louisville Fire Protection District’s preferred layout so corrections clear without a return trip. Red Rocks is based in Centennial, and Louisville sits inside our Denver-metro service radius.',

    industriesServed: [
      'Restaurants and food service',
      'Light industrial and flex space',
      'Tech, labs, and data centers',
      'Retail centers and grocery-anchored strips',
      'Office and Class-A commercial',
      'HOA & community associations',
      'Multi-family property management',
      'Craft brewing and distilling',
      'Auto service and dealerships',
      'Assisted living and healthcare',
      'Education and childcare',
      'Religious and community facilities',
    ],

    deficienciesTitle: 'What the Louisville Fire Protection District flags most often on inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Louisville properties. None of this is a citation from a specific building — it’s the pattern of findings our technicians document and correct most frequently in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Kitchen hood suppression out of date on Main Street',
        body: 'Downtown restaurants operating in early-1900s brick often run older wet-chemical hood systems that predate UL-300. We inventory each hood by hazard class and flag UL-300 conversions before a lease renewal or renovation forces the issue mid-service.',
      },
      {
        title: 'Obstructed sprinkler heads',
        body: 'The most common finding District-wide: storage racks in Colorado Tech Center warehouses, new tenant build-outs, and signage installed too close to deflectors. We measure clearance to the inch and document the correction scope so approval is fast.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries have a 4–5 year service life, and failed load tests are a top deficiency across Centennial Valley office buildings. We track every panel’s battery age and replace proactively.',
      },
      {
        title: 'Fire-pump testing gaps in flex and industrial buildings',
        body: 'ESFR-protected CTC buildings depend on a fire pump, and annual flow tests are frequently skipped or undocumented. We run the churn and full-flow tests to NFPA 25 and log the readings the District expects.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Fire-line and irrigation backflow preventers across HOA common areas in Coal Creek Ranch and Steel Ranch require annual certified testing. We test and file certification directly with the water utility.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'A common finding on older Louisville commercial buildings — missing or broken FDC caps let debris into the check valve and can fail an inspection outright. We carry replacements on the truck and install them on the spot.',
      },
      {
        title: 'Interface homes without monitored early-warning coverage',
        body: 'In neighborhoods on the Marshall Fire burn edge, rebuilt and existing interface homes often lack monitored smoke and heat detection tied to a central station. In an ember-driven event those minutes matter; we design and monitor systems sized to the exposure.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Louisville, Colorado?',
        answer: 'The Louisville Fire Protection District is the AHJ for fire-code enforcement in Louisville. The District handles on-site inspections and reviews sprinkler, alarm, and suppression submittals. Confirm the District’s current permitting and inspection-scheduling line directly with the authority — the number on this page reaches Red Rocks Fire Protection.',
      },
      {
        question: 'Does the Marshall Fire affect fire-protection requirements in Louisville?',
        answer: 'The December 2021 Marshall Fire burned into Louisville’s south and southeast neighborhoods, and it changed how owners here think about ignition risk. For rebuilds and existing interface homes we focus on ember-resistant detailing — vent screening, non-combustible zones near the structure — paired with monitored early-warning detection. It’s a real local exposure, not a marketing line, and we design systems with the interface in mind.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Louisville?',
        answer: 'Per NFPA 25 and the IFC as adopted by the Louisville Fire Protection District, wet-pipe sprinkler systems require quarterly and annual inspections with an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test, and fire pumps in CTC buildings need annual flow testing. We track every cadence and email you 30 days before a test is due.',
      },
      {
        question: 'Do you service restaurants on Main Street?',
        answer: 'Yes. Downtown Louisville’s restaurants sit in early-1900s brick with shared party walls, which makes hood suppression, extinguisher placement, and sprinkler service tighter than a suburban strip. We inspect, test, and tag UL-300 wet-chemical and Ansul R-102 hood systems per NFPA 96, service Class K extinguishers, and flag pre-UL-300 conversions before they become a permit problem.',
      },
      {
        question: 'What fire-protection work do you handle in the Colorado Tech Center?',
        answer: 'The Colorado Tech Center is largely light-industrial and flex space, so the scope runs to ESFR sprinkler systems, fire-pump testing, rack-storage commodity clearances, and clean-agent suppression — FM-200, Novec 1230, and CO₂ — for labs, server rooms, and data closets. We handle full annual NFPA 25 testing and the special-hazard systems in the same visit.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Louisville restaurants?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require an automatic fire-extinguishing system for commercial cooking operations, covering the hood, duct, and plenum. UL-300 wet-chemical systems are the current standard; older systems are grandfathered but typically need replacement at tenant turnover or major renovation, which is common as Main Street tenants change hands.',
      },
      {
        question: 'Do you service residential sprinkler systems in Louisville?',
        answer: 'Yes. We inspect, test, and maintain NFPA 13D residential sprinkler systems — most common in the newer master-planned stock in Coal Creek Ranch, Steel Ranch, and North End subdivisions — and we handle monitored residential alarms. For rebuilds on the Marshall Fire burn edge we also advise on monitored early-warning detection matched to interface exposure.',
      },
      {
        question: 'How quickly can Red Rocks respond to a fire-protection emergency in Louisville?',
        answer: 'Louisville is inside our Denver-metro service radius, so our emergency response window for fire-protection emergencies here is typically about 90 minutes. We staff a 24/7 emergency line and dispatch the same technicians who know your property, not a call center.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Louisville Inspection.',
        descriptor: 'Tell us about your property — Main Street restaurant, CTC flex building, or interface home — and we’ll route the right NICET-certified technician, faster if it’s urgent.',
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
      title: 'Fire Protection Services in Louisville, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and kitchen-hood service in Louisville, Colorado. Serving the Louisville Fire Protection District, from Main Street to the Colorado Tech Center, with wildland-interface awareness. NICET-certified technicians.',
      keywords:
        'fire protection Louisville CO, fire inspections Louisville, sprinkler inspection Louisville, fire alarm testing Louisville, backflow testing Louisville, kitchen hood suppression Louisville, Colorado Tech Center fire protection, Louisville Fire Protection District, Marshall Fire rebuild fire protection',
      canonical: '/service-areas/louisville-co/',
    },
  },

// ──────────────────────────────────────────────────────────────────
// MORRISON, COLORADO
// ──────────────────────────────────────────────────────────────────
{
  slug: 'morrison-co',
  city: 'Morrison',
  state: 'CO',
  county: 'Jefferson County',
  bannerTitle: 'Fire Protection Morrison, CO',
  bannerSubtitle: 'MORRISON FIRE PROTECTION',
  bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

  heroIntro:
    'Morrison is a few blocks of stone storefronts along Bear Creek at the mouth of the foothills, but the fire-protection load here is anything but small-town: Red Rocks Park & Amphitheatre pushes tens of thousands of people into a seasonal assembly occupancy, the Bear Creek Avenue restaurants run wet-chemical hoods year round, and the WUI grade climbs fast into Willow Springs and the US-285 canyon. We build Morrison work into scheduled foothills routes so a technician who already knows the amphitheatre concessions and the downtown kitchens is out here on a planned visit, not a cold dispatch up C-470.',

  ahj: {
    name: 'West Metro Fire Rescue',
    adoptedNFPA: [
      'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
      'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
      'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
      'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
      'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
      'International Fire Code (IFC) — current adopted edition',
    ],
    nonEmergencyPhone: '(303) 989-4307',
    website: 'https://www.westmetrofire.org/',
    note:
      'West Metro Fire Rescue is the Authority Having Jurisdiction for Morrison and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 989-4307, and permitting and code information is at https://www.westmetrofire.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what West Metro Fire Rescue’s prevention staff expect, so corrections get signed off without rework.',
  },

  neighborhoods: [
    { name: 'Downtown Morrison (Bear Creek Avenue)', type: 'Mixed-Use', note: 'Old stone commercial buildings and restaurants along CO-74; wet-chemical kitchen hoods and dry-pipe sprinklers in unheated historic structures are the recurring scope.' },
    { name: 'Red Rocks Park & Amphitheatre', type: 'Commercial Corridor', note: 'Seasonal assembly occupancy for tens of thousands; concessions hood suppression, extinguisher coverage for temporary vendors, and visitor-center alarm systems.' },
    { name: 'Willow Springs', type: 'Residential', note: 'Gated foothills homes on large lots; NFPA 13D residential sprinkler and monitored alarm retrofits, plus wildland-interface clearances.' },
    { name: 'Dinosaur Ridge / Alameda Parkway', type: 'Commercial Corridor', note: 'Visitor center, museum, and tour operations off the hogback; alarm, extinguisher, and small assembly-occupancy inspections.' },
    { name: 'US-285 Canyon Corridor', type: 'Commercial Corridor', note: 'Roadside commercial and lodging climbing toward Conifer; propane, dry-system, and WUI considerations at each foothills tenant.' },
    { name: 'Bear Creek Canyon (CO-74 west)', type: 'Residential', note: 'Canyon homes along the creek toward Idledale; long driveways, limited water supply, and monitored detection are common needs.' },
    { name: 'Bandimere-area / C-470 approach', type: 'Commercial Corridor', note: 'Highway-frontage commercial and event-adjacent parcels near the raceway grade; extinguisher fleets and suppression on shop and concession spaces.' },
    { name: 'Mount Vernon Canyon / I-70 mouth', type: 'Commercial Corridor', note: 'Interstate-frontage lodging and fuel near the canyon mouth; standpipe, sprinkler, and alarm work on multi-story roadside properties.' },
    { name: 'Rooney Road / hogback', type: 'Industrial', note: 'Quarry-adjacent and light industrial parcels along the hogback; extinguisher service, shop suppression, and fire-line backflow testing.' },
    { name: 'Kerr Gulch / Soda Lakes', type: 'Residential', note: 'Scattered foothills residential above Bear Creek Lake Park; residential sprinkler retrofits and monitored smoke/heat detection.' },
    { name: 'Historic Morrison residential core', type: 'Residential', note: 'Small older homes off Mount Vernon and Spring streets; legacy smoke-detection layouts that benefit from interconnected retrofits.' },
    { name: 'Genesee / Chief Hosa (I-70 west)', type: 'Residential', note: 'Foothills subdivisions above the interstate; NFPA 13D systems, monitored alarms, and defensible-space-driven inspections.' },
  ],

  neighborhoodIntro:
    'Morrison packs a lot of fire-protection variety into a small footprint: a national-name amphitheatre, a walkable stone downtown, and canyon residential that climbs into true wildland interface. Below are the areas and corridors our technicians fold into scheduled foothills routes.',

  buildingStock:
    'Morrison’s built stock starts with a compact historic core — mortared-stone commercial buildings and small frame houses dating to the late 1800s along Bear Creek Avenue and Mount Vernon Street. The town’s largest occupancy by far is Red Rocks Park & Amphitheatre, a seasonal open-air assembly space with concessions, visitor facilities, and temporary vendor setups that swing the fire load hard between show and off-season. Beyond the downtown grid the property mix turns to foothills residential: gated large-lot homes in Willow Springs, canyon houses strung along CO-74 and US-285, and interstate-frontage lodging and fuel at the mouths of Bear Creek and Mount Vernon canyons. Commercial is thin and highway-driven — restaurants, tour operations at Dinosaur Ridge, and roadside tenants along the C-470 and I-70 approaches. Water supply, driveway access, and wildland-interface clearance shape almost every canyon inspection here in a way they never do down on the plains.',

  servicesOffered: [
    {
      title: 'Annual NFPA Fire Inspections',
      body: 'Sprinklers, alarms, extinguishers, backflow, and suppression on their own code cadences, documented in one report formatted to whichever district — Inter-Canyon or West Metro — holds your Morrison parcel.',
    },
    {
      title: 'Fire Sprinkler & Standpipe Testing',
      body: 'Wet, dry, and preaction systems exercised per NFPA 25, with attention to the dry-pipe and antifreeze setups common in Morrison’s unheated stone downtown and canyon buildings. Includes main-drain tests and a prioritized deficiency list.',
    },
    {
      title: 'Fire Alarm Testing',
      body: 'Initiating devices, notification appliances, panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including the visitor-center and event systems around Red Rocks and Dinosaur Ridge.',
    },
    {
      title: '24/7 Monitoring',
      body: 'UL-listed central-station monitoring with signal verification and fire-watch protocols — valuable for canyon homes on long driveways where response distance up US-285 or CO-74 matters.',
    },
    {
      title: 'Backflow Prevention',
      body: 'Annual cross-connection control testing for fire-line, irrigation, and domestic backflow preventers along Rooney Road and the downtown corridor, with certification filed to the serving water authority.',
    },
    {
      title: 'Fire Extinguisher Service',
      body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K — including the vendor and concession fleets that scale up for Red Rocks event season.',
    },
    {
      title: 'Kitchen Hood Suppression',
      body: 'UL-300 wet-chemical and Ansul R-102 systems inspected and tagged per NFPA 96 and 17A — the core recurring scope for Bear Creek Avenue restaurants and amphitheatre concessions.',
    },
    {
      title: 'Special Hazard & Clean-Agent Suppression',
      body: 'FM-200, Novec 1230, and CO₂ systems for equipment and control rooms at visitor and event facilities, plus shop and storage hazards along the foothills corridors.',
    },
    {
      title: 'Life-Safety Consulting & Code Navigation',
      body: 'Help sorting which district holds your parcel, coordinating plan review with the correct AHJ, and managing deficiency corrections for event-venue, restaurant, and canyon-residential owners.',
    },
  ],

  servicesIntro:
    'Every service below is run by NICET- or CSA-certified technicians and folded into scheduled foothills routes, with the report formatted to the layout the district holding your parcel expects — so corrections clear the first review.',

  industriesServed: [
    'Assembly & event venues',
    'Restaurants and food service',
    'Concessions and temporary vendors',
    'Lodging and roadside hospitality',
    'Canyon and foothills residential',
    'Tour and museum operations',
    'Light industrial and quarry-adjacent shops',
    'Small commercial and retail',
    'HOA & gated communities',
    'Religious and community facilities',
  ],

  deficienciesTitle: 'What foothills fire inspections around Morrison flag most often.',
  deficienciesIntro:
    'These are the recurring deficiency categories our technicians document across Morrison’s downtown, event, and canyon properties. None of this is a citation from a specific property — it’s the pattern of findings we correct most frequently in this terrain.',

  commonDeficiencies: [
    {
      title: 'Dry-pipe and antifreeze systems mismanaged in unheated buildings',
      body: 'Morrison’s stone downtown and canyon structures run dry-pipe or antifreeze loops that get skipped when a space is seasonally closed. We verify air pressure, trip settings, and antifreeze concentration so a system that sat idle over winter actually flows when it’s called.',
    },
    {
      title: 'Kitchen hood suppression out of date on Bear Creek Avenue',
      body: 'Restaurant hoods in the historic core are often older wet-chemical systems installed before UL-300. We inventory each hood by hazard class and flag conversions ahead of a health or fire re-inspection rather than at shutdown.',
    },
    {
      title: 'Temporary-vendor extinguisher coverage during Red Rocks events',
      body: 'Concession and temporary vendor setups scale up fast for the amphitheatre season and frequently run short on rated, tagged extinguishers at the right hazard class. We size and stage the fleet before the season, not during a show.',
    },
    {
      title: 'Fire alarm panel battery failures',
      body: 'Sealed lead-acid backup batteries have a 4–5 year service life and fail load tests at visitor centers and small commercial across the foothills. We track each panel’s battery age and replace proactively so a remote site isn’t running on primary power alone.',
    },
    {
      title: 'Backflow preventers without annual test certification',
      body: 'Fire-line and irrigation backflow preventers along Rooney Road and the downtown corridor lapse on annual certification. We test and file the certificate with the serving water authority so it doesn’t surface as an open item at inspection.',
    },
    {
      title: 'Wildland-interface clearance and access on canyon residential',
      body: 'Homes up CO-74, US-285, and toward Genesee sit in true WUI with long driveways and limited water. We document detection, monitored-alarm coverage, and access gaps so a foothills home isn’t depending on a single smoke alarm and a distant hydrant.',
    },
    {
      title: 'Fire department connection (FDC) caps missing or damaged',
      body: 'Missing or broken FDC caps let debris into the check valve and can fail an inspection outright — and they’re easy to overlook on lightly staffed foothills properties. We carry replacements on the truck and install them on the spot.',
    },
  ],

  faq: [
    {
      question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Morrison, Colorado?',
      answer: 'It depends on where your parcel sits. Inter-Canyon Fire Protection District covers the foothills and canyon terrain around Morrison, while West Metro Fire Rescue serves the metro edge at the mouth of the canyon and much of the Red Rocks approach. Because the boundary runs right through the Morrison area, confirm which district holds your specific address — and its own permitting line — before you file. We will tell you which authority your parcel falls under and format the report to match it.',
    },
    {
      question: 'How fast can Red Rocks Fire Protection get to Morrison?',
      answer: 'Morrison sits at the foothills west of C-470, so we don’t promise a fixed metro response window here. Instead we build Morrison into scheduled foothills routes and planned visits, so a technician who already knows your property is out on a set date rather than dispatched cold up the canyon. For urgent work we coordinate the soonest available foothills route.',
    },
    {
      question: 'Do you inspect fire protection at Red Rocks Park & Amphitheatre concessions and vendors?',
      answer: 'We service the kind of life-safety scope a seasonal open-air assembly occupancy carries: kitchen-hood suppression on permanent concessions, rated and tagged extinguishers for temporary vendors, and alarm and detection systems in visitor facilities. Because the crowd load swings so hard between show and off-season, we prefer to size and stage that coverage before the season opens.',
    },
    {
      question: 'How often do fire sprinklers need to be inspected in Morrison?',
      answer: 'Per NFPA 25 and the IFC as adopted by the district holding your parcel, wet-pipe systems require quarterly and annual inspections with an internal inspection every 5 years. Dry-pipe systems — common in Morrison’s unheated stone downtown and canyon buildings — add quarterly trip checks and a 3-year full-flow trip test. We track each cadence and email you 30 days before a test is due.',
    },
    {
      question: 'Are kitchen hood suppression systems required in Morrison restaurants?',
      answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require an automatic extinguishing system for commercial cooking — the hood, duct, and plenum. UL-300 wet-chemical is the current standard. Many of the older systems in the Bear Creek Avenue restaurants are grandfathered but typically need replacement at tenant turnover or major renovation, and we flag those before a re-inspection.',
    },
    {
      question: 'Do you service residential sprinkler and alarm systems in the Morrison foothills?',
      answer: 'Yes. We inspect, test, and maintain NFPA 13D residential sprinkler systems and monitored alarms — most often in Willow Springs, the canyon homes along CO-74 and US-285, and the subdivisions above I-70 toward Genesee. In this terrain we pay particular attention to water supply, driveway access, and wildland-interface clearance, since those shape how a canyon home actually performs in a fire.',
    },
    {
      question: 'What special considerations apply to Morrison’s historic stone buildings?',
      answer: 'The old downtown structures are frequently unheated in parts, which points to dry-pipe or antifreeze sprinkler systems that need their air pressure, trip settings, and antifreeze concentration verified — especially after a seasonal closure. Retrofitting detection and suppression into mortared-stone buildings also takes routing that respects the structure, so we plan the work rather than force a standard layout onto it.',
    },
  ],

  ctaPair: [
    {
      title: 'Schedule a Morrison Inspection.',
      descriptor: 'Tell us your address and we’ll confirm which district holds it, then fold your property into the next scheduled foothills route.',
      href: '/contact',
      label: 'Get in touch',
    },
    {
      title: 'See All Our Services.',
      descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, alarms, monitoring, suppression, backflow, and consulting all under one roof.',
      href: '/services',
      label: 'Browse services',
    },
  ],

  meta: {
    title: 'Fire Protection Services in Morrison, CO | Red Rocks Fire Protection',
    description:
      'NFPA fire inspections, sprinkler and alarm testing, kitchen-hood suppression, extinguisher service, backflow, and monitoring in Morrison, Colorado — from historic Bear Creek Avenue to Red Rocks and the foothills WUI. NICET-certified technicians on scheduled foothills routes.',
    keywords:
      'fire protection Morrison CO, fire inspections Morrison, sprinkler inspection Morrison, kitchen hood suppression Morrison, fire extinguisher service Morrison, Red Rocks Amphitheatre fire protection, Inter-Canyon Fire Protection District, foothills fire inspection Jefferson County',
    canonical: '/service-areas/morrison-co/',
  },
},

  // ──────────────────────────────────────────────────────────────────
  // NORTHGLENN, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'northglenn-co',
    city: 'Northglenn',
    state: 'CO',
    county: 'Adams County',
    bannerTitle: 'Fire Protection Northglenn, CO',
    bannerSubtitle: 'NORTHGLENN FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Northglenn built out as a planned community in the 1960s, and a lot of that first-generation building stock is still standing along 104th Avenue and the Grant/Washington corridors. Whether you manage an apartment community off Grant Street, a strip center at the Marketplace at Northglenn, or an older commercial box near the I-25 / 104th interchange, your property answers to North Metro Fire Rescue District for code enforcement. Red Rocks Fire Protection runs every Northglenn inspection to a report North Metro will accept the first time through.',

    ahj: {
      name: 'North Metro Fire Rescue District',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 452-9910',
      website: 'https://www.northmetrofire.org/',
      note:
        'North Metro Fire Rescue District is the Authority Having Jurisdiction for Northglenn and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 452-9910, and permitting and code information is at https://www.northmetrofire.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what North Metro Fire Rescue District’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Marketplace at Northglenn', type: 'Retail', note: 'Grocery-anchored retail center off 104th; kitchen-hood suppression, sprinkler-obstruction clearances, and FDC checks are recurring scopes.' },
      { name: '104th Avenue Corridor', type: 'Commercial Corridor', note: 'The city’s main east-west commercial spine; mixed-age retail and office with wet sprinkler systems and alarm panels of varying vintage.' },
      { name: 'I-25 / 104th Interchange', type: 'Commercial Corridor', note: 'Highway-fronting commercial and hospitality; larger-footprint sprinkler systems and monitored alarm stacks.' },
      { name: 'Webster Lake', type: 'Residential', note: 'Established single-family neighborhood around the lake; 1960s–70s homes with legacy smoke-detection layouts due for retrofit.' },
      { name: 'Grant Street Corridor', type: 'Mixed-Use', note: 'Dense apartment communities and neighborhood retail; garden-style multi-family with recurring backflow and alarm-panel work.' },
      { name: 'Washington Street Corridor', type: 'Commercial Corridor', note: 'North-south commercial spine with older strip retail and light service tenants; Ansul hood systems and extinguisher service common.' },
      { name: 'Original Northglenn', type: 'Master-Planned', note: 'The 1960s planned-community core; ranch and split-level homes plus early HOA common areas needing NFPA 13D retrofits at remodel.' },
      { name: 'Northglenn Marketplace West', type: 'Retail', note: 'Secondary retail cluster near 104th and Melody; restaurant and quick-service tenants with UL-300 hood suppression scopes.' },
      { name: 'Croke Reservoir / E.B. Rains Jr. Park area', type: 'Residential', note: 'Residential blocks near the city’s civic and park spine; monitored residential alarm and backflow-testing needs.' },
      { name: 'Malley Drive', type: 'Mixed-Use', note: 'Older apartment stock and neighborhood commercial near the light-rail station area; alarm re-commissioning after tenant build-outs.' },
      { name: '120th Avenue Frontage', type: 'Commercial Corridor', note: 'Northern commercial edge shared with Thornton; big-box and flex tenants with ESFR and high-piled storage considerations.' },
      { name: 'Huron Street Industrial', type: 'Industrial', note: 'Light industrial and warehouse pockets on the west side; fire-pump testing, ESFR sprinklers, and rack commodity classification.' },
    ],

    neighborhoodIntro:
      'Northglenn is compact and mostly built out, so our routes here mix decades-old planned-community housing with the retail and commercial corridors along 104th, Grant, and Washington. Below are the named areas and corridors our technicians cover most often in the city.',

    buildingStock:
      'Northglenn’s housing stock skews older than most of the north metro: much of it went up between the early 1960s and the late 1970s as one of Colorado’s first planned communities, with ranch, split-level, and early townhome product around Webster Lake and the original core. That age matters for fire protection — legacy smoke-detection layouts, aging backflow assemblies, and grandfathered systems show up constantly at remodel and tenant turnover. Multi-family is dominated by garden-style apartment communities along Grant Street and Washington Street, many built in the same era and now cycling through capital upgrades. Commercial property clusters along the 104th Avenue spine, the Marketplace at Northglenn retail center, and the I-25 / 104th interchange, with light industrial and warehouse space on the west side near Huron Street and along the 120th Avenue frontage shared with Thornton.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each on its own code cadence, documented in a single North Metro–ready report for your 104th Avenue or Grant Street property.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, and standpipe systems exercised per NFPA 25, including main-drain tests and valve supervision — common on older Marketplace at Northglenn and 104th corridor retail.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, panels, and secondary power tested to NFPA 72 by NICET-certified technicians, including the aging panels typical of Northglenn’s 1970s-era apartment stock.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification and fire-watch protocols, with confirmed alarms dispatched straight into North Metro Fire Rescue.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for irrigation, fire-line, and domestic backflow preventers on Grant and Washington Street apartment communities; certification filed with the City of Northglenn water utility.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards across Northglenn retail and service tenants.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — a frequent scope at Marketplace at Northglenn and the 104th Avenue restaurant tenants.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms and equipment closets in Northglenn office and light-industrial buildings near Huron Street.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Plan-review coordination with North Metro Fire Rescue and deficiency-correction project management for the HOA and apartment-management portfolios common across older Northglenn communities.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted the way North Metro Fire Rescue plan reviewers read them — so corrections clear without a second trip.',

    industriesServed: [
      'Multi-family and apartment property management',
      'HOA & community associations',
      'Grocery-anchored and strip retail',
      'Restaurants and food service',
      'Office and small commercial',
      'Light industrial and warehouse',
      'Hospitality',
      'Assisted living and healthcare',
      'Automotive and service tenants',
      'Education and childcare',
      'Municipal and civic facilities',
      'Religious and community facilities',
    ],

    deficienciesTitle: 'What North Metro Fire Rescue flags most often on Northglenn inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we document across Northglenn properties. None of it is a citation from a specific address — it’s the pattern our technicians correct most often in this jurisdiction, weighted toward the city’s older building stock.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads',
        body: 'The top finding on North Metro reports: storage, signage, or tenant build-outs crowding sprinkler deflectors, especially in the older strip retail along 104th and Washington. We measure clearance to the inch and write the correction scope so approval is quick.',
      },
      {
        title: 'Aging fire alarm panels and battery failures',
        body: 'Northglenn’s 1970s apartment communities along Grant Street run alarm panels well past their prime, and sealed lead-acid backup batteries have a 4–5 year life. Failed load tests are one of our most common findings — we track battery age by panel and replace before they fail.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Older irrigation and fire-line backflow assemblies on established Northglenn multi-family sites frequently miss their annual certified test. We test, repair leaking assemblies, and file the certification with the City of Northglenn water utility.',
      },
      {
        title: 'Legacy or missing smoke detection at remodel',
        body: 'Homes and small tenants from the 1960s–70s core often carry outdated or incomplete detection layouts. At remodel or tenant turnover, North Metro expects current-code coverage — we scope the retrofit before the work triggers a re-inspection.',
      },
      {
        title: 'Kitchen hood suppression out of date',
        body: 'Pre-UL-300 wet-chemical systems still show up in older Northglenn restaurants and quick-service tenants. North Metro increasingly flags them at turnover — we inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'Missing or broken FDC caps let debris into the check valve and can fail an inspection outright — a common finding on the older commercial boxes near the I-25 / 104th interchange. We carry replacements on the truck and install on the spot.',
      },
      {
        title: 'Missing or faded hydraulic nameplates',
        body: 'Wet-sprinkler systems in Northglenn’s older 104th-corridor retail frequently have missing or illegible hydraulic placards. North Metro requires a verified nameplate for every system — we re-calculate and re-placard in-house.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Northglenn, Colorado?',
        answer: 'North Metro Fire Rescue District is the AHJ for the City of Northglenn. North Metro conducts on-site fire inspections and reviews sprinkler, alarm, and underground fire-line submittals for commercial, multi-family, and institutional properties inside the city. Confirm the District’s own permitting line with North Metro directly before you file.',
      },
      {
        question: 'Does Red Rocks Fire Protection serve Northglenn if your office is in Centennial?',
        answer: 'Yes. Our office is at 7076 S. Alton Way in Centennial, but Northglenn is well within the Denver metro area we cover. We run a 90-minute emergency response window across the metro, and Northglenn — off the I-25 / 104th interchange — is a routine part of our north-metro service map.',
      },
      {
        question: 'My Northglenn building is from the 1960s or 70s — does older construction change the inspection?',
        answer: 'It changes what we look for. Northglenn was one of Colorado’s early planned communities, and a lot of that original stock is still in service. Older systems are often grandfathered but carry aging alarm panels, dated detection layouts, and worn backflow assemblies. We inspect to current NFPA cadence and flag the items North Metro is most likely to require at your next remodel or tenant turnover.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Northglenn?',
        answer: 'Under NFPA 25 and the IFC as adopted by North Metro Fire Rescue, wet-pipe systems require quarterly and annual inspections plus an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. We track every cadence for every system we service and email you 30 days before a test comes due.',
      },
      {
        question: 'Do you handle backflow testing for apartment communities on Grant and Washington Street?',
        answer: 'Yes. Northglenn’s garden-style apartment communities along Grant and Washington Street carry irrigation, fire-line, and domestic backflow preventers that each need an annual certified test. We test, repair failing assemblies, and file the certification directly with the City of Northglenn water utility so nothing lapses.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Northglenn restaurants?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require an automatic extinguishing system for commercial cooking — hood, duct, and plenum. UL-300 wet-chemical systems are the current standard. Older systems at Marketplace at Northglenn and 104th-corridor restaurants are typically grandfathered but usually need replacement at renovation or tenant turnover.',
      },
      {
        question: 'How long does a commercial fire alarm inspection take in Northglenn?',
        answer: 'Most run 2 to 4 hours depending on device count and how many initiating devices need functional testing. In the older Grant Street apartment stock, panel age can add time. We coordinate with your on-site staff or property manager and can run after-hours inspections for occupied buildings to keep tenant disruption low.',
      },
      {
        question: 'How quickly can you respond to a fire-protection emergency in Northglenn?',
        answer: 'Our emergency response window across the Denver metro, including Northglenn, is typically under 90 minutes. We staff a 24/7 emergency line and send the same technicians who know your property, not a call center handoff.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Northglenn Inspection.',
        descriptor: 'Tell us about your 104th, Grant, or Washington Street property and we’ll route the right NICET-certified technician — usually within a few business days, faster if it’s urgent.',
        href: '/contact',
        label: 'Get in touch',
      },
      {
        title: 'See All Our Services.',
        descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, alarms, monitoring, suppression, backflow, and consulting all under one roof.',
        href: '/services',
        label: 'Browse services',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Northglenn, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and consulting in Northglenn, Colorado. Serving North Metro Fire Rescue jurisdictions with NICET-certified technicians and 90-minute metro emergency response.',
      keywords:
        'fire protection Northglenn CO, fire inspections Northglenn, sprinkler inspection Northglenn, fire alarm testing Northglenn, backflow testing Northglenn, kitchen hood suppression Northglenn, fire protection company Northglenn Colorado, North Metro Fire Rescue inspections',
      canonical: '/service-areas/northglenn-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // PARKER, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'parker-co',
    city: 'Parker',
    state: 'CO',
    county: 'Douglas County',
    bannerTitle: 'Fire Protection Parker, CO',
    bannerSubtitle: 'PARKER FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Parker grew from a stagecoach stop on Mainstreet into one of the fastest-building towns in Douglas County, and Red Rocks Fire Protection keeps up with it — from the brick storefronts of historic downtown to the HOA clubhouses and pool houses going up across Stroh Ranch and The Pinery. Since South Metro Fire Rescue Authority absorbed the old Parker Fire Protection District, every commercial, multi-family, and institutional property in town answers to South Metro for fire-code enforcement, and we write every Parker inspection report to the format South Metro approves on the first pass.',

    ahj: {
      name: 'South Metro Fire Rescue',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(720) 989-2000',
      website: 'https://www.southmetro.org/',
      note:
        'South Metro Fire Rescue is the Authority Having Jurisdiction for Parker and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (720) 989-2000, and permitting and code information is at https://www.southmetro.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what South Metro Fire Rescue’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Historic Mainstreet Parker', type: 'Mixed-Use', note: 'Older brick and mixed-construction storefronts with second-floor uses; legacy sprinkler feeds, kitchen-hood suppression at the restaurants, and alarm retrofits are recurring scopes.' },
      { name: 'The Pinery', type: 'Master-Planned', note: 'Established golf-course community with HOA clubhouses, pool houses, and large custom homes; backflow, irrigation-line testing, and NFPA 13D residential systems come up often.' },
      { name: 'Stonegate', type: 'Master-Planned', note: 'Dense master-planned neighborhoods straddling the Douglas/Arapahoe line with rec centers and common-area buildings; HOA portfolios need coordinated annual testing.' },
      { name: 'Stroh Ranch', type: 'Master-Planned', note: 'Family subdivisions off Parker Road with a private rec center and pool complex; clubhouse alarm panels and backflow certifications are annual work.' },
      { name: 'Cottonwood', type: 'Residential', note: 'Older Parker subdivision east of Parker Road; mixed home ages with legacy smoke-detection layouts that benefit from monitored-alarm retrofits.' },
      { name: 'Canterberry Crossing', type: 'Master-Planned', note: 'Golf-anchored community with an HOA clubhouse and event space; wet-sprinkler and alarm coverage on the amenity buildings.' },
      { name: 'Mainstreet / Parker Road corridor', type: 'Commercial Corridor', note: 'The town’s retail-and-office spine along Parker Road (SH-83); strip retail, medical offices, and restaurants with wet systems, FDCs, and Ansul hood suppression.' },
      { name: 'Parker Adventist Hospital campus', type: 'Commercial Corridor', note: 'Full-service hospital and adjacent medical office buildings; institutional life-safety stacks — sprinklers, fire alarm voice/EVAC, and clean-agent for imaging and server rooms.' },
      { name: 'Cottonwood / Twenty Mile retail', type: 'Retail', note: 'Grocery-anchored centers and newer pad retail near Cottonwood Drive and Twenty Mile Road; sprinkler-obstruction clearances and kitchen-hood tags at food tenants.' },
      { name: 'Lincoln Avenue corridor', type: 'Commercial Corridor', note: 'Office, flex, and light-industrial along Lincoln Ave toward E-470; ESFR sprinkler, fire pump testing, and rack-storage commodity classification in the warehouse bays.' },
      { name: 'E-470 / Compark & Meridian edge', type: 'Industrial', note: 'Last-mile warehouse and flex space at Parker’s northern edge near E-470; ESFR systems, fire pumps, and high-piled storage permits with South Metro.' },
      { name: 'Newlin Meadows / Anthology', type: 'Master-Planned', note: 'Newer master-planned neighborhoods with HOA amenity centers still inside builder warranty; new-system commissioning and first-year alarm inspections.' },
    ],

    neighborhoodIntro:
      'Parker is mostly master-planned residential wrapped around the Mainstreet and Parker Road corridors, and our technicians cover the amenity buildings, retail centers, and flex-industrial that come with that growth. Below are the named neighborhoods and corridors we service most often across town.',

    buildingStock:
      'Parker’s property mix is defined by master-planned residential built at pace from the 1990s through today — The Pinery, Stonegate, Stroh Ranch, Canterberry, and newer Newlin Meadows and Anthology neighborhoods — most carrying HOA common-area buildings, clubhouses, and pool houses that need annual backflow, sprinkler, and alarm work. Commercial property concentrates along the Parker Road (SH-83) and Mainstreet corridors, where older downtown storefronts sit beside newer grocery-anchored and pad retail near Cottonwood and Twenty Mile Road. The Parker Adventist Hospital campus anchors a cluster of medical office buildings with institutional life-safety systems. Flex and light-industrial space runs the Lincoln Avenue corridor toward E-470, with last-mile warehouse and ESFR-protected bays at the town’s northern edge.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code-driven cadence, documented in a single South Metro–formatted report your Parker property manager can hand straight to the AHJ.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25 — from HOA clubhouses in The Pinery to ESFR warehouse bays off Lincoln Avenue. Includes main-drain tests, valve supervision, and a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including the voice/EVAC stacks on the Parker Adventist medical campus.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification, fire-watch protocols, and direct dispatch into South Metro’s CAD when an alarm confirms at your Parker property.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection control testing for irrigation, fire-line, and domestic backflow preventers across Parker’s HOA common areas; certification filed with the water district serving your neighborhood.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards — including the K-class units behind Mainstreet and Cottonwood restaurant lines.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — common scope at the Mainstreet dining district and the pad restaurants near Twenty Mile Road.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms, imaging suites, and data closets — common on the Parker Adventist campus and in Lincoln Avenue flex-office tenants.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review with South Metro’s Community Risk Reduction team, plan-reviewer coordination, and deficiency-correction project management for the HOA and property-management portfolios that run Parker’s master-planned communities.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to South Metro Fire Rescue Authority’s preferred layout — so Parker corrections are approved without rework.',

    industriesServed: [
      'HOA & community associations',
      'Multi-family property management',
      'Medical office and healthcare',
      'Retail centers and grocery-anchored strips',
      'Restaurants and food service',
      'Office and flex-commercial',
      'Light industrial and last-mile warehouse',
      'Assisted living and senior housing',
      'Education and childcare',
      'Automotive and service retail',
      'Data and server rooms',
      'Religious and community facilities',
    ],

    deficienciesTitle: 'What South Metro Fire Rescue Authority flags most often on Parker inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Parker properties. None of this is a citation from a specific property — it’s the pattern of findings our technicians document and correct most frequently in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads',
        body: 'The top South Metro finding in Parker: storage, signage, and seasonal HOA decorations in clubhouses and rec centers installed too close to sprinkler deflectors. We measure clearance to the inch and document the correction scope so approval is fast.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Parker’s master-planned communities run heavy irrigation and fire-line backflow across common areas, and the annual test lapses when HOA boards turn over. We test, tag, and file the certification with the water district serving your neighborhood.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries carry a 4–5 year service life, and failed load tests are a top deficiency on Parker Road office and retail panels. We track every panel’s battery age and replace proactively before the annual.',
      },
      {
        title: 'Kitchen hood suppression out of date',
        body: 'Pre-UL-300 wet-chemical systems still turn up in older Mainstreet kitchens. South Metro increasingly flags them at tenant turnover — we inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'A common South Metro finding along the Parker Road corridor: missing or broken FDC caps let debris into the check valve and can fail an inspection outright. We carry replacements on the truck and install them on the spot.',
      },
      {
        title: 'New amenity buildings never commissioned after build-out',
        body: 'Newlin Meadows, Anthology, and other newer Parker communities hand over clubhouses and pool houses with alarm and sprinkler systems that were never formally commissioned or tested. We complete first-year commissioning with South Metro sign-off.',
      },
      {
        title: 'High-piled storage without a current commodity classification',
        body: 'Warehouse and flex bays along Lincoln Avenue and near E-470 change tenants and stock without updating the storage plan, leaving ESFR design and commodity class out of date. We re-classify and coordinate the high-piled permit with South Metro.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Parker, Colorado?',
        answer: 'South Metro Fire Rescue Authority is the AHJ for the Town of Parker. South Metro absorbed the former Parker Fire Protection District, so its Community Risk Reduction division now issues permits, conducts on-site fire inspections, and reviews sprinkler, alarm, and underground fire-line submittals for properties in Parker. Confirm the AHJ’s own permitting line directly with South Metro when you file.',
      },
      {
        question: 'What happened to the Parker Fire Protection District?',
        answer: 'Parker Fire was absorbed into South Metro Fire Rescue Authority, which now provides fire suppression, EMS, and fire-code enforcement for the Town of Parker and the surrounding area. For fire-protection inspection and testing, that means your annual sprinkler, alarm, and backflow reports go to South Metro — the same authority that covers Centennial, Lone Tree, and much of the south metro.',
      },
      {
        question: 'How quickly can Red Rocks Fire Protection respond to an emergency in Parker?',
        answer: 'Our office at 7076 S. Alton Way in Centennial is a short run up Parker Road and E-470 from town, so our emergency response window for fire-protection emergencies in Parker is typically under 90 minutes — usually faster. We staff a 24/7 emergency line and dispatch the same technicians who know your property, not a call center.',
      },
      {
        question: 'Do you handle HOA clubhouses and common-area buildings in Parker?',
        answer: 'Yes — that is a large share of our Parker work. Communities like The Pinery, Stonegate, Stroh Ranch, Canterberry, and Newlin Meadows carry clubhouses, pool houses, and rec centers with sprinklers, alarms, and backflow that all need annual testing. We consolidate an HOA’s buildings onto one schedule and one South Metro–formatted report.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Parker?',
        answer: 'Per NFPA 25 and the IFC as adopted by South Metro Fire Rescue, wet-pipe sprinkler systems require quarterly and annual inspections, with an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. We track every cadence for every system we service and email you 30 days before a test is due.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Parker restaurants?',
        answer: 'Yes. NFPA 96 (and the IFC as adopted in Colorado) requires automatic fire-extinguishing systems for commercial cooking operations, including the hood, duct, and plenum. This applies to the Mainstreet dining district and the pad restaurants near Twenty Mile Road. UL-300 wet-chemical systems are the current standard; older systems are grandfathered but usually need replacement at turnover or renovation.',
      },
      {
        question: 'Do you service residential sprinkler systems in Parker?',
        answer: 'Yes. We inspect, test, and maintain NFPA 13D residential sprinkler systems — most commonly in newer custom homes in The Pinery and Canterberry, and in the amenity buildings across Parker’s master-planned communities. We also handle monitored residential alarm systems and monitored smoke and carbon-dioxide detection.',
      },
      {
        question: 'Can you inspect medical and institutional buildings near Parker Adventist Hospital?',
        answer: 'Yes. The medical office buildings around the Parker Adventist campus run full life-safety stacks — sprinklers, fire alarm with voice/EVAC, and clean-agent suppression for imaging suites and server rooms. Our NICET-certified technicians test these to NFPA 25, 72, and the applicable clean-agent standard and document everything to South Metro’s layout.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Parker Inspection.',
        descriptor: 'Tell us about your property — Mainstreet storefront, HOA clubhouse, or Lincoln Avenue warehouse — and we’ll route the right NICET-certified technician, usually within a few business days and faster if it’s urgent.',
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
      title: 'Fire Protection Services in Parker, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and consulting in Parker, Colorado. Serving South Metro Fire Rescue jurisdictions across The Pinery, Stonegate, Stroh Ranch, and the Parker Road corridor. NICET-certified technicians, 90-minute metro response.',
      keywords:
        'fire protection Parker CO, fire inspections Parker, sprinkler inspection Parker, fire alarm testing Parker, backflow testing Parker, kitchen hood suppression Parker, HOA fire inspection Parker, fire protection company Parker Colorado, South Metro Fire Rescue inspections',
      canonical: '/service-areas/parker-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // SHERIDAN, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'sheridan-co',
    city: 'Sheridan',
    state: 'CO',
    county: 'Arapahoe County',
    bannerTitle: 'Fire Protection Sheridan, CO',
    bannerSubtitle: 'SHERIDAN FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Sheridan is a compact Arapahoe County city wedged between South Santa Fe Drive, South Federal Boulevard, and Bear Creek, and its property mix runs from the big-box retail at River Point at Sheridan to older industrial off Santa Fe and a housing stock that predates most of the metro. Red Rocks Fire Protection works Sheridan out of our Centennial office 15 minutes south, and every sprinkler, alarm, and hood-suppression report we write here is built to clear the Sheridan fire authority on the first review.',

    ahj: {
      name: 'South Metro Fire Rescue',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(720) 989-2000',
      website: 'https://www.southmetro.org/',
      note:
        'The fire-code authority for a Sheridan property should be confirmed by address. South Metro Fire Rescue at (720) 989-2000 (southmetro.org) covers the surrounding south-metro area and is the most likely authority, but Sheridan sits against several jurisdictions’ boundaries’ so we verify the AHJ for each property before scheduling and format the report to match.',
    },

    neighborhoods: [
      { name: 'River Point at Sheridan', type: 'Retail', note: 'Big-box and junior-anchor retail on the redeveloped Fort Logan / former GM assembly site; large-format sprinkler grids, mall-style FDCs, and food-tenant hood suppression.' },
      { name: 'South Santa Fe Drive Corridor', type: 'Industrial', note: 'Warehouse, distribution, and heavy-commercial fronting the BNSF and light-rail lines; ESFR sprinkler systems, fire-pump testing, and rack-storage commodity review.' },
      { name: 'South Federal Boulevard', type: 'Commercial Corridor', note: 'Auto shops, strip retail, and older commercial storefronts; frequent extinguisher, kitchen-hood, and legacy wet-sprinkler findings.' },
      { name: 'Bear Creek / Fort Logan edge', type: 'Residential', note: 'Older single-family near the Bear Creek greenbelt and the Fort Logan National Cemetery boundary; monitored smoke detection and residential backflow retrofits.' },
      { name: 'Downtown Sheridan (Hamilton / Oxford)', type: 'Mixed-Use', note: 'Small-lot core near the civic buildings; mixed storefront-and-residential structures with dated alarm and extinguisher coverage.' },
      { name: 'Oxford Station / light-rail area', type: 'Mixed-Use', note: 'Transit-oriented parcels around the RTD Oxford–City of Sheridan station; newer mid-density residential and mixed-use with full life-safety stacks.' },
      { name: 'West Sheridan (Clay / Elati)', type: 'Residential', note: 'Grid of small pre-1970 homes and duplexes; hardwired-smoke-detector upgrades and monitored alarm work at remodel.' },
      { name: 'Hampden / US-285 frontage', type: 'Commercial Corridor', note: 'High-traffic commercial along the Hampden corridor; sprinkler and alarm panels in mid-size office and service buildings.' },
      { name: 'Zuni / Tejon industrial pocket', type: 'Industrial', note: 'Small-bay light industrial and flex near Santa Fe; dry-pipe systems, standpipes, and commodity-classification questions.' },
      { name: 'Progress Park / civic area', type: 'Mixed-Use', note: 'Parks, schools, and municipal buildings; assembly-occupancy alarm testing, emergency lighting, and extinguisher coverage.' },
      { name: 'South Platte River flats', type: 'Industrial', note: 'Riverside industrial and outdoor-storage parcels between Santa Fe and the South Platte; outdoor commodity, hydrant, and fire-line concerns.' },
      { name: 'North Sheridan / Englewood line', type: 'Retail', note: 'Retail and service tenancy along the northern edge near Englewood; grocery-anchored strips with recurring hood-suppression and sprinkler-clearance findings.' },
    ],

    neighborhoodIntro:
      'Sheridan packs a wide property range into just over two square miles, from the big-box retail at River Point to warehouse and rail-served industrial along South Santa Fe Drive and a small-home residential grid that predates most surrounding suburbs. Below are the areas and corridors our technicians cover most often inside the city.',

    buildingStock:
      'Sheridan’s residential stock skews old and small — much of it single-family and duplex construction from before 1970, west of Federal and along the Bear Creek edge, where hardwired smoke detection and monitored alarms are common retrofit scopes at remodel. The commercial and industrial base is defined by two corridors: the South Santa Fe Drive rail-and-warehouse spine, with ESFR-grade sprinkler systems, fire pumps, and rack storage, and the South Federal Boulevard strip of auto, retail, and food-service tenants with older wet-sprinkler and kitchen-hood systems. River Point at Sheridan, redeveloped on the former Fort Logan / GM assembly ground, added large-format big-box retail with mall-scale sprinkler grids and food-tenant suppression. Transit-oriented mid-density housing has grown around the RTD Oxford–City of Sheridan light-rail station, bringing newer full life-safety stacks into an otherwise older building inventory.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression on their own code-driven cadences, documented in a single report formatted for the Sheridan fire authority’s reviewing inspector.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25 — including the ESFR grids and fire pumps on the Santa Fe Drive warehouse corridor — with main-drain tests and a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians, including the older storefront panels along Federal Boulevard.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and fire-watch protocols, so a confirmed alarm dispatches straight to the fire-rescue agency covering Sheridan.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for irrigation, fire-line, and domestic backflow preventers, with certification filed to the water utility serving Sheridan property.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K — a frequent scope for the auto and service tenants on South Federal.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — common at River Point food tenants and the restaurant strips along Federal and Hampden.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms, telecom closets, and the paint and process areas found in Santa Fe industrial buildings.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review, plan-reviewer coordination with the contracted Sheridan fire authority, and deficiency-correction project management for River Point tenants and property-management portfolios.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports built to the layout the Sheridan fire authority’s reviewing inspector expects — so corrections on Santa Fe and River Point properties clear without a second visit.',

    industriesServed: [
      'Big-box and large-format retail',
      'Warehouse and distribution',
      'Light industrial and flex space',
      'Automotive service and dealerships',
      'Restaurants and food service',
      'Multi-family and transit-oriented housing',
      'Older single-family residential',
      'Municipal and civic buildings',
      'Schools and childcare',
      'Grocery-anchored retail centers',
      'Outdoor-storage and rail-served facilities',
      'Data and telecom closets',
    ],

    deficienciesTitle: 'What the Sheridan fire authority flags most often on local inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories our technicians document across Sheridan properties. None of this is a citation from a specific address — it’s the pattern of findings we correct most often in the city, weighted toward its older stock and heavy Santa Fe industrial base.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads in warehouse racking',
        body: 'The Santa Fe Drive distribution buildings are the top source of obstruction findings — pallet racks restacked above the design height, or new commodity classes crowding ESFR deflectors. We measure clearance to the inch and write the correction scope so the review clears fast.',
      },
      {
        title: 'Undersized or unverified systems in redeveloped retail',
        body: 'River Point build-outs sometimes leave sprinkler coverage that no longer matches the tenant layout after a demising-wall change. We re-check head spacing and hydraulic demand against the current occupancy and re-placard where the nameplate is wrong.',
      },
      {
        title: 'Aged fire alarm panels on Federal Boulevard storefronts',
        body: 'Older commercial buildings along South Federal frequently run alarm panels with failing sealed lead-acid batteries and out-of-support control units. We load-test every battery, track panel age, and flag end-of-life panels before they fail an inspection.',
      },
      {
        title: 'Kitchen hood systems past UL-300 conversion',
        body: 'Food tenants on Federal and Hampden often still run pre-UL-300 wet-chemical hoods that the authority flags at turnover. We inventory each hood by hazard class and schedule the conversion ahead of a lease renewal or menu change.',
      },
      {
        title: 'Backflow preventers without current test certification',
        body: 'Irrigation and fire-line backflow devices on older Sheridan parcels routinely lapse on annual certification. Our certified cross-connection tester files the results directly with the water utility and the reviewing authority.',
      },
      {
        title: 'Damaged or missing fire department connection caps',
        body: 'Exposed FDCs on Santa Fe industrial buildings and River Point retail lose caps to weather and traffic, letting debris into the check valve. We carry replacements on the truck and swap them on the spot during the inspection.',
      },
      {
        title: 'Smoke detection gaps in older residential remodels',
        body: 'Pre-1970 homes west of Federal often get remodeled without bringing hardwired, interconnected smoke detection up to current code. We map the required device locations and install monitored detection during the remodel rather than after a failed sign-off.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Sheridan, Colorado?',
        answer: 'Sheridan contracts its fire-rescue coverage rather than running a stand-alone department, so permits and on-site inspections for commercial, multi-family, and mixed-use property flow through the contracted fire authority serving the city. Because the arrangement can change, confirm the current permitting and inspection contact directly with the Sheridan fire authority before you submit — we write our reports to match whichever inspector reviews the project.',
      },
      {
        question: 'Does Red Rocks Fire Protection cover Sheridan?',
        answer: 'Yes. Our office is at 7076 S. Alton Way in Centennial, roughly 15 minutes south of Sheridan, and Sheridan sits well inside our Denver-metro service area. That proximity is why we can offer a 90-minute emergency response window across the south and central metro, including Sheridan, Englewood, Littleton, and Denver.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Sheridan?',
        answer: 'Under NFPA 25 and the IFC as adopted by the authority covering Sheridan, wet-pipe sprinkler systems need quarterly and annual inspections plus a 5-year internal inspection. Dry-pipe systems — common in the unheated Santa Fe Drive warehouses — add quarterly trip tests and a 3-year full-flow trip test. We track every cadence and email you 30 days before a test comes due.',
      },
      {
        question: 'Do you inspect the big-box and retail sprinkler systems at River Point at Sheridan?',
        answer: 'Yes. Large-format retail like River Point runs mall-scale sprinkler grids, high-piled-storage areas, multiple FDCs, and food-tenant hood suppression, and we test the full stack under NFPA 25, 72, and 96. We coordinate testing around store hours so notification-device and flow tests don’t interrupt trading.',
      },
      {
        question: 'What fire-protection work is most common on the South Santa Fe Drive industrial corridor?',
        answer: 'The Santa Fe corridor is warehouse and distribution, so the recurring scopes are ESFR sprinkler testing, fire-pump flow tests, standpipe testing, and rack-storage commodity classification. When racking or product changes, the existing sprinkler design often no longer matches the hazard — we verify the design against the current occupancy before the authority does.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Sheridan restaurants?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require an automatic extinguishing system over commercial cooking operations, covering the hood, duct, and plenum. UL-300 wet-chemical systems are the current standard; older hoods along Federal Boulevard and at River Point food tenants are typically flagged for replacement at tenant turnover or renovation.',
      },
      {
        question: 'Do you service older homes and small residential buildings in Sheridan?',
        answer: 'Yes. Much of Sheridan’s housing predates 1970 — small single-family and duplexes west of Federal and near Bear Creek — and we handle hardwired interconnected smoke detection, monitored alarm systems, and residential backflow during remodels. Bringing detection up to current code during the remodel avoids a failed sign-off later.',
      },
      {
        question: 'How quickly can you respond to an emergency in Sheridan?',
        answer: 'Our Centennial office is about 15 minutes from Sheridan, so our emergency response window for fire-protection emergencies in the city is typically under 90 minutes and often faster. We staff a 24/7 emergency line and send the same technicians who know your property rather than routing you through a call center.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Sheridan Inspection.',
        descriptor: 'Tell us about your property on Santa Fe, Federal, or at River Point and we’ll route the right NICET-certified technician — usually within a few business days, faster if it’s urgent.',
        href: '/contact',
        label: 'Get in touch',
      },
      {
        title: 'See All Our Services.',
        descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, alarms, monitoring, suppression, backflow, and consulting all under one roof.',
        href: '/services',
        label: 'Browse services',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Sheridan, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and consulting in Sheridan, Colorado. Serving River Point, the South Santa Fe Drive industrial corridor, and South Federal Boulevard. NICET-certified technicians, 90-minute metro response.',
      keywords:
        'fire protection Sheridan CO, fire inspections Sheridan, sprinkler inspection Sheridan, fire alarm testing Sheridan, backflow testing Sheridan, kitchen hood suppression Sheridan, River Point fire protection, South Santa Fe Drive fire inspection, fire protection company Sheridan Colorado',
      canonical: '/service-areas/sheridan-co/',
    },
  },

// ──────────────────────────────────────────────────────────────────
// SUPERIOR, COLORADO
// ──────────────────────────────────────────────────────────────────
{
  slug: 'superior-co',
  city: 'Superior',
  state: 'CO',
  county: 'Boulder County',
  bannerTitle: 'Fire Protection Superior, CO',
  bannerSubtitle: 'SUPERIOR FIRE PROTECTION',
  bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

  heroIntro:
    'Superior lost more homes to the December 2021 Marshall Fire than any other town in Colorado, with the Sagamore and Rock Creek neighborhoods burning by the hundreds in a single afternoon. Red Rocks Fire Protection works the rebuild and the buildings that survived — the retail and multi-family going up at Downtown Superior off US-36 and McCaslin, the master-planned homes across Rock Creek, and the commercial tenants around the Costco. Superior sits inside the Denver metro, so we hold a roughly 90-minute emergency-response window here, and every inspection we run is written to a report the fire district serving Superior will accept without a second visit.',

  ahj: {
    name: 'Mountain View Fire Rescue',
    adoptedNFPA: [
      'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
      'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
      'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
      'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
      'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
      'International Fire Code (IFC) — current adopted edition, with the wildland-urban interface provisions Boulder County jurisdictions enforce',
    ],
    nonEmergencyPhone: '(303) 772-0710',
    website: 'https://www.mvfpd.org/',
    note:
      'Mountain View Fire Rescue is the Authority Having Jurisdiction for Superior and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 772-0710, and permitting and code information is at https://www.mvfpd.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Mountain View Fire Rescue’s prevention staff expect, so corrections get signed off without rework.',
  },

  neighborhoods: [
    { name: 'Sagamore', type: 'Residential', note: 'Among the hardest-hit Marshall Fire neighborhoods; large rebuild volume means new NFPA 13D residential sprinkler and monitored-alarm installs on freshly permitted homes.' },
    { name: 'Rock Creek', type: 'Master-Planned', note: 'The town’s largest master-planned community; a mix of surviving 1990s–2000s homes and rebuilds, with HOA common areas, pools, and clubhouses needing backflow and alarm coverage.' },
    { name: 'Downtown Superior', type: 'Mixed-Use', note: 'Redevelopment at US-36 and McCaslin: new retail, restaurants, and apartments above ground-floor commercial — kitchen-hood suppression, standpipes, and mixed-occupancy alarm systems.' },
    { name: 'Superior Marketplace', type: 'Retail', note: 'Big-box and grocery-anchored retail near McCaslin; large-format sprinkler systems, high-piled storage clearances, and FDC maintenance.' },
    { name: 'Costco / McCaslin corridor', type: 'Commercial Corridor', note: 'Warehouse-club and pad retail along McCaslin Boulevard; ESFR sprinklers, fire pump testing, and rack-storage commodity classification.' },
    { name: 'Rock Creek Ranch', type: 'Master-Planned', note: 'Newer phases of single-family and townhome product; residential sprinkler retrofits and monitored smoke and CO detection on remodels.' },
    { name: 'Original Town of Superior', type: 'Residential', note: 'Older core southwest of US-36; legacy homes with dated smoke-detection layouts that benefit from hardwired and monitored upgrades.' },
    { name: 'Coalton corridor', type: 'Commercial Corridor', note: 'Flex and small-office space near Coalton Road and the RTD Park-n-Ride; wet-pipe sprinkler systems and fire alarm panel maintenance.' },
    { name: 'Autrey Farm / North Superior', type: 'Residential', note: 'Newer subdivisions on the north edge sitting close to open grassland; wildland-interface awareness and defensible-space-adjacent detection needs.' },
    { name: 'Superior Town Center', type: 'Mixed-Use', note: 'Civic, retail, and residential blocks anchoring the Downtown Superior plan; multi-tenant alarm zoning and emergency notification systems.' },
    { name: 'US-36 / BNSF light-industrial edge', type: 'Industrial', note: 'Limited light-industrial and service space near the highway and rail; warehouse sprinkler coverage and fire extinguisher programs.' },
    { name: 'Marshall Fire rebuild parcels (townwide)', type: 'Residential', note: 'Scattered lots across Sagamore, Rock Creek, and Original Town in active reconstruction; new-build sprinkler acceptance testing and alarm rough-in inspections.' },
  ],

  neighborhoodIntro:
    'Superior is small in footprint but complex in property mix — hundreds of Marshall Fire rebuilds in Sagamore and Rock Creek, new mixed-use going vertical at Downtown Superior, and big-box retail along the McCaslin corridor. Below are the areas our technicians cover most often across town.',

  buildingStock:
    'Superior’s housing stock was overwhelmingly single-family and townhome product built from the early 1990s through the 2000s, most of it inside the Rock Creek master plan. The December 2021 Marshall Fire changed that profile sharply: the Sagamore and Rock Creek neighborhoods lost hundreds of homes, and much of the town’s residential inventory is now new construction built to current code, which means far more homes carry NFPA 13D residential sprinkler systems and monitored detection than before the fire. Commercial property clusters along McCaslin Boulevard and US-36 — Superior Marketplace, the Costco, and grocery-anchored retail — with a growing mixed-use core at Downtown Superior combining ground-floor retail and restaurants under apartments. Multi-family is a mix of garden-style apartments and the newer wrap-and-podium buildings in the Town Center redevelopment. Nearly every neighborhood in Superior borders open grassland, so wildland-interface exposure is a live consideration on inspections here in a way it is not for most metro cities.',

  servicesOffered: [
    {
      title: 'Annual NFPA Fire Inspections',
      body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code-driven cadence, documented in one report formatted for the fire district serving Superior.',
    },
    {
      title: 'Fire Sprinkler & Standpipe Testing',
      body: 'Wet, dry, preaction, and standpipe systems exercised per NFPA 25, including the standpipes in the new Downtown Superior mid-rise buildings. Main-drain tests, valve supervision, and a prioritized deficiency list on every visit.',
    },
    {
      title: 'Fire Alarm Testing',
      body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including the mixed-occupancy panels in Town Center residential-over-retail buildings.',
    },
    {
      title: '24/7 Monitoring',
      body: 'UL-listed central station monitoring with signal verification and direct dispatch to the fire district serving Superior when an alarm confirms — the kind of monitored coverage many rebuilt Sagamore and Rock Creek homes now carry.',
    },
    {
      title: 'Backflow Prevention',
      body: 'Annual cross-connection control testing for irrigation, fire-line, and domestic backflow preventers across Rock Creek HOA common areas and McCaslin retail; certification filed with the water utility.',
    },
    {
      title: 'Fire Extinguisher Service',
      body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards across Superior retail and restaurant tenants.',
    },
    {
      title: 'Kitchen Hood Suppression',
      body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — a recurring scope for the new restaurant tenants at Downtown Superior and along McCaslin.',
    },
    {
      title: 'Special Hazard & Clean-Agent Suppression',
      body: 'FM-200, Novec 1230, and CO₂ systems for server rooms and equipment spaces in Superior office and flex buildings near Coalton Road.',
    },
    {
      title: 'Life-Safety Consulting & Code Navigation',
      body: 'New-construction acceptance testing and rough-in coordination on Marshall Fire rebuild permits, plus deficiency-correction project management for HOA and property-management portfolios across Rock Creek and Downtown Superior.',
    },
  ],

  servicesIntro:
    'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to match how the fire district serving Superior wants deficiencies listed — so corrections clear without a return trip.',

  industriesServed: [
    'HOA & community associations',
    'Marshall Fire rebuild contractors and homeowners',
    'Multi-family property management',
    'Retail centers and big-box anchors',
    'Restaurants and food service',
    'Office and flex-commercial',
    'Light industrial and warehouse',
    'Assisted living and healthcare',
    'Education and childcare',
    'Grocery and warehouse-club retail',
    'Mixed-use residential-over-retail',
    'Religious and community facilities',
  ],

  deficienciesTitle: 'What the fire district serving Superior flags most often on inspections.',
  deficienciesIntro:
    'These are the recurring deficiency categories we see across Superior properties, from Marshall Fire rebuilds to McCaslin retail. None of this is a citation from any specific property — it’s the pattern of findings our technicians document and correct most frequently in this jurisdiction.',

  commonDeficiencies: [
    {
      title: 'Residential sprinkler systems left uncommissioned after rebuild',
      body: 'Marshall Fire rebuilds in Sagamore and Rock Creek go in fast, and NFPA 13D residential sprinkler systems sometimes pass rough-in but never get a documented acceptance test before occupancy. We run the flow and pressure verification and file the acceptance paperwork so the certificate of occupancy is not held up.',
    },
    {
      title: 'Obstructed sprinkler heads',
      body: 'A top finding in Superior Marketplace and Costco-corridor retail: high-piled storage, signage, and tenant build-outs crowding sprinkler deflectors. We measure clearance to the inch and document the correction scope for a fast approval.',
    },
    {
      title: 'Fire alarm panel battery failures',
      body: 'Sealed lead-acid backup batteries have a 4–5 year service life, and failed load tests are a routine finding in Downtown Superior mixed-use panels. We track every panel’s battery age and replace proactively.',
    },
    {
      title: 'Backflow preventers without annual test certification',
      body: 'Rock Creek HOA irrigation systems and McCaslin fire-line backflow preventers need annual testing by a certified cross-connection tester. We test, tag, and file the certification with the water utility and the local authority.',
    },
    {
      title: 'Kitchen hood suppression out of date at new tenants',
      body: 'New restaurant tenants at Downtown Superior sometimes inherit or install hood suppression that isn’t tagged current. We inventory hood systems by hazard class and confirm UL-300 compliance before the health-and-fire sign-off.',
    },
    {
      title: 'Fire department connection (FDC) caps missing or damaged',
      body: 'Missing or broken FDC caps let debris into the check valve and can fail an inspection outright — common on the older Rock Creek and Marketplace buildings. We carry replacements and install them on the spot.',
    },
    {
      title: 'Detection not restored after tenant build-out',
      body: 'Town Center and Marketplace tenant improvements frequently disable smoke detection or notification zones without re-commissioning. We verify every device is back online and re-commission the affected zones with local sign-off.',
    },
  ],

  faq: [
    {
      question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Superior, Colorado?',
      answer: 'Fire-code enforcement in Superior is handled by the fire protection district serving the town, which has been reorganized in Boulder County since the Marshall Fire — coverage has involved Rocky Mountain Fire and the Louisville-area district as boundaries have changed. Because those arrangements have shifted, confirm the current AHJ and its permitting line before you submit. We track who is issuing permits in Superior right now and will point you to the correct desk.',
    },
    {
      question: 'Do you work on Marshall Fire rebuilds in Superior?',
      answer: 'Yes. The Marshall Fire destroyed hundreds of homes in the Sagamore and Rock Creek neighborhoods, and much of Superior is still rebuilding. We handle new-construction fire-protection scopes on those permits — NFPA 13D residential sprinkler rough-in and acceptance testing, monitored alarm and smoke/CO detection installs, and coordination with the fire district’s plan reviewer so the certificate of occupancy is not delayed.',
    },
    {
      question: 'How quickly can you respond to an emergency in Superior?',
      answer: 'Superior sits inside the Denver metro at US-36 and McCaslin, so our emergency-response window for fire-protection emergencies here is typically around 90 minutes. We staff a 24/7 line and dispatch the same technicians who already know your property, not a call center.',
    },
    {
      question: 'How often do fire sprinklers need to be inspected in Superior?',
      answer: 'Per NFPA 25 and the IFC as adopted by the local fire district, wet-pipe sprinkler systems require quarterly and annual inspections, with an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. We track every cadence for every system we service and email you 30 days before a test is due.',
    },
    {
      question: 'Do you service the NFPA 13D residential sprinkler systems in rebuilt Superior homes?',
      answer: 'Yes. Many homes rebuilt after the Marshall Fire in Sagamore and Rock Creek now carry NFPA 13D residential sprinkler systems that older Superior homes never had. We inspect, test, and maintain those systems, verify they were commissioned correctly at build, and handle the monitored detection that often goes in alongside them.',
    },
    {
      question: 'Are kitchen hood suppression systems required in Superior restaurants?',
      answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require automatic fire-extinguishing systems for commercial cooking operations — hood, duct, and plenum. UL-300 wet-chemical systems are the current standard. We inspect and tag the new restaurant tenants at Downtown Superior and along McCaslin, and flag any older grandfathered system for replacement at turnover.',
    },
    {
      question: 'Does wildland-fire exposure change what you inspect in Superior?',
      answer: 'It shapes the conversation. Nearly every neighborhood in Superior borders open grassland, and the Marshall Fire showed how fast a grassfire can move into a subdivision. We keep detection, monitoring, and water-based systems in reliable working order so the built-in fire protection performs when it is needed, and we coordinate with the fire district on the wildland-urban interface provisions Boulder County jurisdictions enforce.',
    },
  ],

  ctaPair: [
    {
      title: 'Schedule a Superior Inspection.',
      descriptor: 'Tell us about your property — a Rock Creek HOA, a Downtown Superior tenant, or a Sagamore rebuild — and we’ll route the right NICET-certified technician, usually within a few business days and faster if it’s urgent.',
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
    title: 'Fire Protection Services in Superior, CO | Red Rocks Fire Protection',
    description:
      'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, and suppression in Superior, Colorado. Marshall Fire rebuild support in Sagamore and Rock Creek, plus Downtown Superior and McCaslin retail. NICET-certified technicians, ~90-minute metro response.',
    keywords:
      'fire protection Superior CO, fire inspections Superior, sprinkler inspection Superior, fire alarm testing Superior, backflow testing Superior, kitchen hood suppression Superior, Marshall Fire rebuild fire sprinkler Superior, residential sprinkler Rock Creek Superior, fire protection company Superior Colorado',
    canonical: '/service-areas/superior-co/',
  },
},

  // ──────────────────────────────────────────────────────────────────
  // THORNTON, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'thornton-co',
    city: 'Thornton',
    state: 'CO',
    county: 'Adams County',
    bannerTitle: 'Fire Protection Thornton, CO',
    bannerSubtitle: 'THORNTON FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Thornton runs north from the old core near 88th and Washington to the new subdivisions and big-box centers still filling in past 144th, and the split shows up in every fire-protection scope we write here. Older strip retail and 1980s garden apartments carry legacy sprinkler and alarm layouts, while the north-growth corridor above 120th is stacked with new multi-family, self-storage, and warehouse builds. Thornton Fire Department is the Authority Having Jurisdiction across the city, and we format every Thornton report so North Metro clears it without a second visit.',

    ahj: {
      name: 'Thornton Fire Department',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 538-7602',
      website: 'https://www.thorntonco.gov/public-safety/fire-department',
      note:
        'Thornton Fire Department is the Authority Having Jurisdiction for Thornton and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 538-7602, and permitting and code information is at https://www.thorntonco.gov/public-safety/fire-department. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Thornton Fire Department’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Original Thornton (88th & Washington)', type: 'Residential', note: 'The 1950s–60s founding core; small single-family and aging strip retail with legacy 2-inch alarm layouts and undersized sprinkler mains at remodel.' },
      { name: 'Washington Street Corridor', type: 'Commercial Corridor', note: 'North–south retail and auto spine; grocery-anchored strips, dealerships, and quick-serve kitchens driving Ansul hood and sprinkler-obstruction findings.' },
      { name: 'I-25 / 104th Avenue', type: 'Retail', note: 'Big-box and pad retail at the interchange; large-format ESFR sprinkler systems, mall-style voice evac, and high-piled storage plans.' },
      { name: 'I-25 / 120th Avenue', type: 'Mixed-Use', note: 'Dense retail, restaurant, and apartment corridor; kitchen-hood suppression and BDA/DAS radio coverage recur on inspections here.' },
      { name: 'Denver Premium Outlets (136th)', type: 'Retail', note: 'Outlet-mall tenant turnover keeps sprinkler-deflector clearances and hood systems in near-constant re-inspection.' },
      { name: 'North Creek Farms / North Thornton (144th+)', type: 'Master-Planned', note: 'New-build single-family and townhome growth past 144th; NFPA 13D and 13R systems on fresh construction.' },
      { name: 'Eastlake / Riverdale', type: 'Residential', note: 'Older east-side neighborhood near the Eastlake reservoirs; mature homes with monitored-alarm and backflow retrofit needs.' },
      { name: 'Skylake / Hunters Glen', type: 'Master-Planned', note: 'Lake-centered planned communities off 128th; HOA common areas, clubhouses, and irrigation backflow testing.' },
      { name: 'Thornton Town Center (I-25 & 88th)', type: 'Retail', note: 'Established regional retail node; wet sprinkler systems, FDC maintenance, and tenant-driven deficiency corrections.' },
      { name: 'York Street / 88th Industrial', type: 'Industrial', note: 'Warehouse, distribution, and light manufacturing; fire-pump testing, rack-storage commodity classification, and ESFR coverage.' },
      { name: 'Colorado Blvd / 104th flex district', type: 'Industrial', note: 'Flex and self-storage builds; dry-pipe and preaction systems in unconditioned space plus clean-agent for server closets.' },
      { name: 'Thornton Parkway / Grant Street', type: 'Mixed-Use', note: 'Older commercial-residential mix near the civic center; garden apartments and small offices with legacy panel and battery issues.' },
    ],

    neighborhoodIntro:
      'Thornton splits cleanly into an older southern core around 88th and Washington and a fast-growing north half above 120th, and our technicians cover both. Below are the named neighborhoods and corridors where we run the most inspection, testing, and correction work.',

    buildingStock:
      'Thornton’s property mix runs oldest-to-newest as you travel north. The founding core around 88th and Washington is 1950s–70s single-family and aging strip retail, followed by a wide band of 1980s–90s garden-style apartments and grocery-anchored centers along the Washington Street and I-25 corridors. From 120th north the city is still building out — new multi-family and townhome communities, the Denver Premium Outlets at 136th, and a heavy run of self-storage, distribution, and last-mile warehouse space along York Street and the 104th flex district. That range means we work every water-based system type in one city: NFPA 13D and 13R on north-side new construction, ESFR and fire pumps in the industrial belt, and legacy wet systems with missing hydraulic placards in the original core.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression on their own code cadences, documented in one report built to Thornton Fire Department’s preferred deficiency-list format.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25 — main-drain tests, valve supervision, and full-flow trip tests on the dry systems common in Thornton’s unconditioned warehouse and self-storage space.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including the aging panels in the 88th-and-Washington core.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification and fire-watch protocols, with alarms dispatched into Thornton Fire Department’s response once a signal confirms.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for irrigation, fire-line, and domestic backflow preventers across Thornton HOAs and lake-community common areas, with certification filed to the water provider.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards in Thornton retail, restaurant, and warehouse tenants.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — a steady scope along the Washington Street quick-serve strip and the 120th and outlet-mall food tenants.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms and data closets in the 104th and Colorado Blvd flex buildings and self-storage offices.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Plan-review coordination with Thornton Fire Department prevention staff and deficiency-correction project management for Thornton HOA and property-management portfolios spanning the old core and the north-growth subdivisions.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports written to the format Thornton Fire Department expects — so Thornton corrections clear the first time.',

    industriesServed: [
      'HOA & community associations',
      'Multi-family property management',
      'Retail centers and outlet malls',
      'Grocery and big-box anchors',
      'Self-storage facilities',
      'Distribution and last-mile warehouse',
      'Light industrial and manufacturing',
      'Restaurants and food service',
      'Automotive dealerships and service',
      'Assisted living and healthcare',
      'Education and childcare',
      'Office and flex commercial',
    ],

    deficienciesTitle: 'What Thornton Fire Department flags most often on Thornton inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we correct across Thornton properties, split between the aging southern core and the new north-side builds. None of it is a citation against a specific address — it is the pattern our technicians document most in this district.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads',
        body: 'The top finding across Thornton retail and self-storage: pallet racks, seasonal storage, signage, and outlet-mall tenant build-outs crowding sprinkler deflectors. We measure clearance to the inch and write the correction scope so Thornton Fire Department signs off fast.',
      },
      {
        title: 'Missing or faded hydraulic nameplates',
        body: 'Legacy wet systems in the 88th-and-Washington core and older Washington Street strips routinely have missing or unreadable hydraulic placards. Thornton Fire Department requires a verified nameplate per system — we re-calculate and re-placard in-house.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries last 4–5 years. Failed load tests are a top deficiency on the older panels along Thornton Parkway and Grant Street — we track every panel’s battery age and replace before it fails an inspection.',
      },
      {
        title: 'Dry-system trip-test and low-point drainage gaps',
        body: 'Thornton’s unconditioned warehouse and self-storage space along York Street runs on dry-pipe systems that need full-flow trip tests and low-point drains cleared before winter. Skipped drainage and overdue trip tests are a recurring Thornton Fire Department finding.',
      },
      {
        title: 'Backflow preventers without annual certification',
        body: 'Irrigation and fire-line backflow preventers on Thornton HOA and lake-community common areas need annual testing by a certified cross-connection tester. We test them and file certification directly with the water provider and the AHJ.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'Common on the older Washington Street and Thornton Town Center buildings — missing or broken FDC caps let debris into the check valve and can fail an inspection outright. We carry replacements on the truck and swap them on the spot.',
      },
      {
        title: 'Kitchen hood suppression past due at tenant turnover',
        body: 'The quick-serve turnover along the Washington Street corridor and the outlet-mall food court leaves pre-UL-300 or untagged hood systems in service. We inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Thornton, Colorado?',
        answer: 'Thornton Fire Department is the AHJ for the City of Thornton. Thornton Fire Department’s prevention staff issue permits, conduct on-site fire inspections, and review sprinkler, alarm, and underground fire-line submittals for properties inside the city. Confirm the department’s current permitting and plan-review line directly with Thornton Fire Department before you submit.',
      },
      {
        question: 'Does Red Rocks Fire Protection serve Thornton if the office is in Centennial?',
        answer: 'Yes. Our office is at 7076 S. Alton Way in Centennial, and Thornton sits inside the Denver metro we cover daily. Most of our technicians live and work across the metro, which lets us hold a roughly 90-minute emergency response window into Thornton — north up I-25 to the 104th, 120th, and 144th corridors.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Thornton?',
        answer: 'Per NFPA 25 and the IFC as adopted by Thornton Fire Department, wet-pipe systems require quarterly and annual inspections with an internal inspection every 5 years. Dry-pipe systems — common in Thornton’s unconditioned warehouse and self-storage space — add quarterly trip tests and a 3-year full-flow trip test. We track every cadence and email you 30 days before a test comes due.',
      },
      {
        question: 'Do you cover both the older core and the new north Thornton subdivisions?',
        answer: 'Yes. We work the 1950s–70s core around 88th and Washington, the 1980s–90s apartment and retail belt along I-25, and the new-build growth past 120th and 144th. The old core tends toward legacy alarm panels and missing hydraulic placards; the north-growth areas are mostly fresh NFPA 13D and 13R systems that need first-year testing set up correctly.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Thornton restaurants?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require automatic extinguishing systems for commercial cooking — hood, duct, and plenum. UL-300 wet-chemical systems are the current standard. The quick-serve turnover along Washington Street and at the Denver Premium Outlets food court means older systems usually need replacement at tenant change or renovation.',
      },
      {
        question: 'Do you service the warehouse and self-storage buildings in north and east Thornton?',
        answer: 'Yes. The distribution, last-mile, and self-storage space along York Street, 104th, and Colorado Blvd runs on ESFR sprinklers, fire pumps, and dry-pipe systems. We handle fire-pump flow testing, rack-storage commodity classification, dry-system trip tests, and clean-agent suppression for the server closets in those flex buildings.',
      },
      {
        question: 'How quickly can you respond to an emergency in Thornton?',
        answer: 'Thornton is inside the Denver metro we serve, so our emergency response window into the city is typically around 90 minutes and often faster. We staff a 24/7 emergency line and send the same technicians who already know your property — not a call center.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Thornton Inspection.',
        descriptor: 'Tell us about your property — old-core retail, a north-side apartment build, or a York Street warehouse — and we’ll route the right NICET-certified technician, faster if it’s urgent.',
        href: '/contact',
        label: 'Get in touch',
      },
      {
        title: 'See All Our Services.',
        descriptor: 'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, alarms, monitoring, suppression, backflow, and consulting all under one roof.',
        href: '/services',
        label: 'Browse services',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Thornton, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and consulting in Thornton, Colorado. Serving Thornton Fire Department jurisdictions with NICET-certified technicians and ~90-minute metro emergency response.',
      keywords:
        'fire protection Thornton CO, fire inspections Thornton, sprinkler inspection Thornton, fire alarm testing Thornton, backflow testing Thornton, kitchen hood suppression Thornton, fire protection company Thornton Colorado, Thornton Fire Department inspections',
      canonical: '/service-areas/thornton-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // WESTMINSTER, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'westminster-co',
    city: 'Westminster',
    state: 'CO',
    county: 'Adams County / Jefferson County',
    bannerTitle: 'Fire Protection Westminster, CO',
    bannerSubtitle: 'WESTMINSTER FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Westminster runs the length of the US-36 corridor between Denver and Boulder, and it straddles two counties — the older neighborhoods south of 92nd Avenue sit in Jefferson County, the newer growth around The Orchard Town Center and Adams County’s north end fills in above 104th. Whatever side of the line your building sits on, fire-code enforcement runs through the Westminster Fire Department, and every inspection Red Rocks Fire Protection performs here is written to a report the city’s fire marshal will accept without a second visit.',

    ahj: {
      name: 'Westminster Fire Department',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 658-4500',
      website: 'https://www.westminsterco.gov/159/Fire-Department',
      note:
        'Westminster Fire Department is the Authority Having Jurisdiction for Westminster and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 658-4500, and permitting and code information is at https://www.westminsterco.gov/159/Fire-Department. We schedule inspection and testing work with your on-site team and format every deficiency list to match what Westminster Fire Department’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Historic Westminster (72nd & Lowell)', type: 'Mixed-Use', note: 'The oldest part of the city on the Jefferson County side; small commercial storefronts and legacy alarm layouts that predate current NFPA 72 device spacing.' },
      { name: 'Westminster Promenade', type: 'Retail', note: 'Big-box, cinema, and restaurant destination off US-36 at Church Ranch; kitchen-hood suppression and mall-scale sprinkler and voice-evac scopes.' },
      { name: 'The Orchard Town Center', type: 'Retail', note: 'Open-air lifestyle center near 144th & I-25 in Adams County; large-format retail sprinkler systems and Ansul hood systems at food tenants.' },
      { name: 'Sheridan Boulevard corridor', type: 'Commercial Corridor', note: 'North–south commercial spine along Sheridan; older strip retail and offices with aging wet-sprinkler and backflow assemblies.' },
      { name: 'Westminster Station / South Westminster', type: 'Mixed-Use', note: 'Transit-oriented redevelopment around the RTD B Line station on the south end; new mid-rise residential above retail with full life-safety stacks.' },
      { name: 'Church Ranch / US-36 business park', type: 'Commercial Corridor', note: 'Class-A office and flex space along the US-36 corridor; fire alarm panels, clean-agent suppression for server rooms, and standpipe testing.' },
      { name: 'Bradburn Village', type: 'Master-Planned', note: 'New-urbanist mixed community near 120th & Sheridan; townhomes, retail, and NFPA 13R residential sprinkler systems.' },
      { name: 'Legacy Ridge', type: 'Master-Planned', note: 'Golf-course community on the north side; larger custom homes with monitored alarms and residential sprinkler retrofits at remodel.' },
      { name: 'Ranch Reserve / Hyland Hills', type: 'Residential', note: 'Established single-family west of Sheridan; HOA common areas with irrigation and fire-line backflow testing needs.' },
      { name: 'Westminster Center / 92nd & Harlan', type: 'Commercial Corridor', note: 'Older retail and office near the civic core on the Jefferson County side; sprinkler-obstruction and hydraulic-nameplate deficiencies are common.' },
      { name: 'Northwest Westminster (144th corridor)', type: 'Master-Planned', note: 'Newest growth in Adams County above 136th; recent multi-family and commercial with 13R and 13 systems already on an NFPA 25 cadence.' },
      { name: 'North Huron Street industrial', type: 'Industrial', note: 'Light industrial and warehouse near Huron and the I-25 frontage; ESFR sprinklers, fire pump testing, and rack-storage commodity classification.' },
    ],

    neighborhoodIntro:
      'Westminster covers a lot of ground along US-36, and the building mix shifts as you move up the corridor — older storefronts and single-family south of 92nd on the Jefferson County side, newer master-planned communities and open-air retail on the Adams County end toward 144th. Below are the areas and corridors our technicians cover most often.',

    buildingStock:
      'Westminster’s south half, in Jefferson County, is the older part of the city: single-family neighborhoods and small commercial strips built from the 1950s through the 1980s around 72nd, 88th, and Sheridan, plus the redeveloping transit district near Westminster Station. North of about 104th, in Adams County, the stock turns newer — master-planned communities like Legacy Ridge and Bradburn, open-air retail at The Orchard Town Center, and the ongoing 144th-corridor buildout of multi-family and commercial. Retail is anchored by the Westminster Promenade off US-36 and The Orchard, both of which carry mall-scale sprinkler, voice-evacuation, and kitchen-hood scopes. Class-A office and flex space cluster along the US-36 / Church Ranch business corridor, and light industrial and last-mile warehouse space runs along Huron Street near the I-25 frontage.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code-driven cadence, documented in one report formatted for the Westminster fire marshal, whether your building sits in Adams or Jefferson County.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25 — from the mall-scale systems at Westminster Promenade to the standpipes in the Church Ranch office towers. Includes main-drain tests, valve supervision, and a prioritized deficiency list.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including retrofits on the older Historic Westminster panels near 72nd & Lowell.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification and fire-watch protocols, with dispatch routed to the Westminster Fire Department when an alarm confirms.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection control testing for irrigation, fire-line, and domestic backflow preventers on the Sheridan Boulevard and 92nd Avenue corridors; certification filed with the water provider serving your address.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards across Westminster retail and industrial tenants.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — a recurring scope at the restaurant rows in Westminster Promenade and The Orchard Town Center.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms, data closets, and clean-tech spaces — common in the Class-A office buildings along the US-36 / Church Ranch business corridor.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review with the Westminster fire marshal’s office, plan-reviewer coordination, and deficiency-correction project management for HOA and property-management portfolios split across the Adams and Jefferson County lines.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to the Westminster Fire Department’s preferred deficiency layout — so corrections are approved without a return visit, no matter which county line your property falls on.',

    industriesServed: [
      'HOA & community associations',
      'Multi-family property management',
      'Office and Class-A commercial',
      'Retail centers and shopping destinations',
      'Hospitality',
      'Light industrial and warehouse',
      'Assisted living and healthcare',
      'Restaurants and food service',
      'Education and childcare',
      'Automotive dealerships',
      'Data centers and server rooms',
      'Religious and community facilities',
    ],

    deficienciesTitle: 'What the Westminster Fire Department flags most often on inspections here.',
    deficienciesIntro:
      'These are the recurring deficiency categories we document across Westminster properties on both the Adams and Jefferson County sides. None of this is a citation from a specific building — it’s the pattern of findings our technicians correct most frequently in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Obstructed sprinkler heads',
        body: 'The most cited finding on Westminster inspection reports: storage racks, new tenant partitions, and seasonal displays crowding sprinkler deflectors — especially in the big-box and restaurant spaces at Westminster Promenade and The Orchard. We measure clearance to the inch and document the correction scope so the fire marshal signs off fast.',
      },
      {
        title: 'Missing or expired hydraulic nameplates',
        body: 'Older wet-sprinkler systems along the Sheridan Boulevard and 92nd Avenue corridors frequently have faded, missing, or original-calculation hydraulic placards. The city requires a verified nameplate for every system — we re-calculate and re-placard in-house.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries have a 4–5 year service life, and failed load tests are a top deficiency on the aging panels in Historic Westminster and older Sheridan-corridor offices. We track every panel’s battery age and replace proactively.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Irrigation and fire-line backflow preventers require annual testing by a certified cross-connection tester. Because Westminster spans two counties and multiple water providers, we confirm which utility serves your address and file the certification with the right one.',
      },
      {
        title: 'Kitchen hood suppression out of date',
        body: 'Pre-UL-300 wet-chemical systems still turn up at long-tenured restaurants near 72nd & Lowell and the Westminster Center strips. We inventory hood systems by hazard class and flag UL-300 conversions ahead of lease renewal or renovation.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'A common Westminster finding — missing or broken FDC caps let debris into the check valve and can fail an inspection outright. We carry replacements on the truck and install them on the spot.',
      },
      {
        title: 'Voice-evac systems not re-commissioned after tenant build-out',
        body: 'Retail and mid-rise build-outs at Westminster Promenade and the Westminster Station transit district frequently disable emergency voice systems without re-commissioning. We provide turnkey re-commissioning with fire-marshal sign-off.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Westminster, Colorado?',
        answer: 'The Westminster Fire Department is the AHJ for the City of Westminster on both the Adams County and Jefferson County sides. Its fire marshal’s office issues permits, conducts on-site inspections, and reviews sprinkler, alarm, and underground fire-line submittals for properties inside the city.',
      },
      {
        question: 'Westminster spans two counties — does that change which fire inspector I deal with?',
        answer: 'For most of the city, no. The Westminster Fire Department handles fire-code enforcement citywide, whether your building sits south of 92nd in Jefferson County or up near The Orchard Town Center in Adams County. What does change is the water provider for backflow certification and, in a few edge areas, the tax and utility district — we sort out which applies to your specific address before we file anything.',
      },
      {
        question: 'How quickly can you respond to a fire-protection emergency in Westminster?',
        answer: 'Westminster sits along the US-36 corridor inside the Denver metro, so it falls within our roughly 90-minute emergency response window from our Centennial office. We staff a 24/7 emergency line and dispatch the same technicians who know your property, not a call center.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Westminster?',
        answer: 'Per NFPA 25 and the IFC as adopted by the Westminster Fire Department, wet-pipe systems require quarterly and annual inspections plus an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. We track every cadence for every system we service and email you 30 days before a test is due.',
      },
      {
        question: 'Do you handle the big retail systems at Westminster Promenade and The Orchard Town Center?',
        answer: 'Yes. Large-format retail carries mall-scale sprinkler systems, voice-evacuation, high-piled storage considerations, and rows of Ansul kitchen-hood systems at food tenants — all on their own NFPA cadences. We inspect and test the full life-safety stack and coordinate after-hours work so testing doesn’t disrupt occupied stores.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Westminster restaurants?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require automatic fire-extinguishing systems for commercial cooking operations, including the hood, duct, and plenum. UL-300 wet-chemical systems are the current standard; older systems are grandfathered but typically need replacement at tenant turnover or major renovation — something we see often in the long-tenured spots near 72nd & Lowell.',
      },
      {
        question: 'Do you service residential sprinkler systems in Westminster?',
        answer: 'Yes. We inspect, test, and maintain NFPA 13D and 13R residential systems — most commonly in the newer master-planned communities like Legacy Ridge and Bradburn Village, and in the mid-rise residential above retail going up in the Westminster Station transit district. We also handle monitored residential alarm and smoke-detection systems.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Westminster Inspection.',
        descriptor: 'Tell us your address and we’ll confirm which side of the county line you’re on, then route the right NICET-certified technician — usually within a few business days, faster if it’s urgent.',
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
      title: 'Fire Protection Services in Westminster, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and consulting in Westminster, Colorado — across both the Adams and Jefferson County sides. NICET-certified technicians, 90-minute Denver-metro emergency response.',
      keywords:
        'fire protection Westminster CO, fire inspections Westminster, sprinkler inspection Westminster, fire alarm testing Westminster, backflow testing Westminster, kitchen hood suppression Westminster, fire protection company Westminster Colorado, Westminster Fire Department inspections',
      canonical: '/service-areas/westminster-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // WHEAT RIDGE, COLORADO
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'wheat-ridge-co',
    city: 'Wheat Ridge',
    state: 'CO',
    county: 'Jefferson County',
    bannerTitle: 'Fire Protection Wheat Ridge, CO',
    bannerSubtitle: 'WHEAT RIDGE FIRE PROTECTION',
    bannerImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',

    heroIntro:
      'Wheat Ridge runs on 1950s and ’60s building stock — brick bungalows, small strip retail along Wadsworth, and light-commercial storefronts on 38th Avenue that were never sprinklered when they went up. Red Rocks Fire Protection works these older buildings for what they actually are: legacy systems, retrofit triggers at remodel, and code gaps that surface the moment a tenant changes use. Every property in Wheat Ridge answers to West Metro Fire Rescue for fire-code enforcement, and we write every inspection report to the deficiency-list format West Metro accepts on the first pass.',

    ahj: {
      name: 'West Metro Fire Rescue',
      adoptedNFPA: [
        'NFPA 13 (Standard for the Installation of Sprinkler Systems) — current adopted edition',
        'NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) — current adopted edition',
        'NFPA 72 (National Fire Alarm and Signaling Code) — current adopted edition',
        'NFPA 10 (Standard for Portable Fire Extinguishers) — current adopted edition',
        'NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) — current adopted edition',
        'International Fire Code (IFC) — current adopted edition',
      ],
      nonEmergencyPhone: '(303) 989-4307',
      website: 'https://www.westmetrofire.org/',
      note:
        'West Metro Fire Rescue is the Authority Having Jurisdiction for Wheat Ridge and conducts the fire inspections for commercial, multi-family, and institutional properties in the city. Its non-emergency line is (303) 989-4307, and permitting and code information is at https://www.westmetrofire.org/. We schedule inspection and testing work with your on-site team and format every deficiency list to match what West Metro Fire Rescue’s prevention staff expect, so corrections get signed off without rework.',
    },

    neighborhoods: [
      { name: 'Ridge at 38 (38th Avenue District)', type: 'Mixed-Use', note: 'Wheat Ridge’s main street — small restaurants, breweries, and converted storefronts where change-of-use triggers hood suppression and sprinkler upgrades in un-sprinklered bungalow-era buildings.' },
      { name: 'Wadsworth Boulevard Corridor', type: 'Commercial Corridor', note: 'The city’s primary commercial spine; aging strip retail, auto shops, and banks with legacy wet systems and dated fire alarm panels due for replacement.' },
      { name: 'Applewood', type: 'Residential', note: 'Larger-lot postwar and mid-century homes on the west side near I-70; NFPA 13D residential sprinkler and monitored-alarm retrofits common at major remodels.' },
      { name: 'Clear Creek Greenbelt / Prospect Park', type: 'Mixed-Use', note: 'Recreation and event facilities along the creek; assembly-occupancy alarm, extinguisher, and exit-marking scopes at park buildings and event tenants.' },
      { name: 'Fruitdale', type: 'Residential', note: 'Older bungalow neighborhood with the redeveloped Fruitdale School lofts; adaptive-reuse buildings carry full sprinkler and alarm stacks the surrounding houses don’t.' },
      { name: 'I-70 / Kipling Interchange', type: 'Commercial Corridor', note: 'Hotels, chain retail, and quick-service tenants at the interstate off-ramp; kitchen-hood suppression, sprinklered canopies, and voice alarm inspections.' },
      { name: 'Lutheran Medical Center campus', type: 'Mixed-Use', note: 'Wheat Ridge’s largest institutional employer; medical office buildings and clinics with full life-safety systems, clean-agent suppression, and smoke-control requirements.' },
      { name: '44th Avenue Corridor', type: 'Commercial Corridor', note: 'Older commercial storefronts and service businesses; small-footprint tenant spaces where sprinkler obstruction and extinguisher placement are recurring findings.' },
      { name: 'West 32nd Avenue / Panorama Park', type: 'Residential', note: 'Established single-family blocks; legacy smoke-detection layouts and monitored residential alarms at remodel and resale.' },
      { name: 'Wheat Ridge Business District (I-70 frontage)', type: 'Industrial', note: 'Light industrial, warehouse, and flex space north of the interstate; wet and dry sprinkler systems, fire pump testing, and rack-storage commodity questions.' },
      { name: 'Prospect Valley', type: 'Residential', note: 'Compact 1950s–60s subdivision east of Kipling; older homes hitting NFPA 13D triggers when additions push past the remodel threshold.' },
      { name: 'Youngfield / West End (I-70 west edge)', type: 'Retail', note: 'Grocery-anchored and big-box retail near the Applewood shopping area; large-format sprinkler systems, FDC checks, and hood suppression at food tenants.' },
    ],

    neighborhoodIntro:
      'Wheat Ridge is small and dense with older buildings, so our work concentrates along a few corridors — 38th Avenue, Wadsworth, 44th, and the I-70 frontage — plus the residential blocks in Applewood, Fruitdale, and Prospect Valley. Below are the areas our technicians cover most often.',

    buildingStock:
      'Wheat Ridge is mostly built out with 1950s and 1960s single-family homes — brick and frame bungalows and ranches on modest lots, with larger mid-century properties in Applewood on the west side. Commercial property is small-format and older: strip retail and service buildings along Wadsworth, 44th, and 38th Avenue, much of it predating modern sprinkler requirements, which turns nearly every change-of-use or major remodel on 38th into a retrofit conversation. The Ridge at 38 district has pulled restaurants and breweries into former retail shells, adding kitchen-hood suppression and sprinkler scope to buildings that never had it. Institutional density centers on the Lutheran Medical Center campus and its surrounding medical office buildings, while light-industrial and warehouse space sits along the I-70 frontage in the north end of the city.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code-driven cadence, documented in a single West Metro–formatted report a Wheat Ridge inspector will accept the first time.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, and standpipe systems exercised per NFPA 25 — including the aging wet systems in Wadsworth-corridor retail. Main-drain tests, valve supervision, and a prioritized deficiency list on every visit.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians — including the dated panels common in 44th Avenue and Wadsworth storefronts.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central station monitoring with signal verification, fire-watch protocols, and direct dispatch to West Metro Fire Rescue when an alarm confirms.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection control testing for irrigation, fire-line, and domestic backflow preventers, with certification filed to the water district serving your Wheat Ridge property.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K — routine work at the small restaurants and auto shops along 38th and 44th.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A — the recurring scope as the Ridge at 38 district converts old retail into restaurants and breweries.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO₂ systems for server rooms, imaging suites, and equipment closets — most common around the Lutheran Medical Center campus and its medical office buildings.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Change-of-use and remodel code review for older Wheat Ridge buildings, West Metro plan-review coordination, and deficiency-correction project management for storefront owners and property managers.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to West Metro Fire Rescue’s preferred deficiency-list layout — so corrections on Wheat Ridge’s older buildings clear without a second inspection.',

    industriesServed: [
      'Small-format retail and storefront tenants',
      'Restaurants, breweries, and food service',
      'Auto repair and service businesses',
      'Medical office and outpatient clinics',
      'Light industrial and warehouse',
      'Multi-family and townhome property management',
      'Hospitality and lodging',
      'Assisted living and senior housing',
      'Adaptive-reuse and mixed-use buildings',
      'Places of assembly and event venues',
      'Education and childcare',
      'Faith and community facilities',
    ],

    deficienciesTitle: 'What West Metro Fire Rescue flags most often on Wheat Ridge inspections.',
    deficienciesIntro:
      'These are the recurring deficiency categories we see across Wheat Ridge properties, weighted toward the older building stock along 38th, Wadsworth, and 44th. None of this is a citation from a specific property — it’s the pattern of findings our technicians document and correct most frequently in this jurisdiction.',

    commonDeficiencies: [
      {
        title: 'Change-of-use triggers ignored on older storefronts',
        body: 'On 38th Avenue and Wadsworth, retail shells built without sprinklers become restaurants or breweries and inherit hood-suppression and sprinkler requirements the tenant didn’t plan for. We flag the trigger before you sign the lease and scope the retrofit so West Metro signs off without a stop-work.',
      },
      {
        title: 'Obstructed sprinkler heads in small tenant spaces',
        body: 'The tight footprints along 44th and 38th mean shelving, ductwork, and tenant build-outs crowd sprinkler deflectors fast. We measure clearance to the inch and document the correction so the fix is approved on the first re-check.',
      },
      {
        title: 'Fire alarm panel battery failures',
        body: 'Sealed lead-acid backup batteries have a 4–5 year service life, and the dated panels in Wadsworth-corridor retail routinely fail load tests. We track every panel’s battery age and replace proactively instead of waiting for a red tag.',
      },
      {
        title: 'Missing or expired hydraulic nameplates on legacy systems',
        body: 'Older wet systems in Wheat Ridge’s postwar commercial buildings often have faded, missing, or original-calculation hydraulic placards. West Metro requires a verified nameplate for every system — we re-calculate and re-placard in-house.',
      },
      {
        title: 'Kitchen hood suppression out of date',
        body: 'Pre-UL-300 wet-chemical systems still turn up in older 38th and 44th Avenue kitchens. West Metro flags them at tenant turnover — we inventory hood systems by hazard class and schedule UL-300 conversions ahead of your next renewal.',
      },
      {
        title: 'Fire department connection (FDC) caps missing or damaged',
        body: 'A common West Metro finding along the retail corridors — missing or broken FDC caps let debris into the check valve and can fail an inspection outright. We carry replacements on the truck and install them on the spot.',
      },
      {
        title: 'Backflow preventers without annual test certification',
        body: 'Irrigation and fire-line backflow preventers require annual testing by a certified cross-connection tester. We test, tag, and file the certification directly with the water district serving the property so nothing lapses.',
      },
    ],

    faq: [
      {
        question: 'Who is the Authority Having Jurisdiction (AHJ) for fire inspections in Wheat Ridge, Colorado?',
        answer: 'West Metro Fire Rescue is the AHJ for Wheat Ridge. West Metro’s fire-prevention division issues permits, conducts on-site inspections, and reviews sprinkler, alarm, and underground fire-line submittals for properties inside the city. Red Rocks Fire Protection is a private contractor — we perform the inspections, testing, and repairs, then submit reports West Metro accepts.',
      },
      {
        question: 'My building on 38th Avenue was never sprinklered — do I need to add a system to open a restaurant?',
        answer: 'Often, yes. Many of the older storefronts in the Ridge at 38 district went up before modern sprinkler requirements, and a change of use to a restaurant or brewery — plus commercial cooking — can trigger sprinkler and NFPA 96 hood-suppression requirements under the IFC as adopted by West Metro. We review the specific occupancy change before you commit to a lease so you know the scope up front, not after a failed plan review.',
      },
      {
        question: 'How often do fire sprinklers need to be inspected in Wheat Ridge?',
        answer: 'Per NFPA 25 and the IFC as adopted by West Metro Fire Rescue, wet-pipe sprinkler systems require quarterly and annual inspections, with an internal inspection every 5 years. Dry-pipe systems add quarterly trip tests and a 3-year full-flow trip test. We track every cadence for every system we service and email you 30 days before a test is due.',
      },
      {
        question: 'How long does a fire alarm inspection take?',
        answer: 'Most commercial fire alarm inspections in Wheat Ridge run 2 to 4 hours, depending on device count and how many initiating devices need functional testing. Smaller storefronts on 38th and 44th are usually on the shorter end. We coordinate with on-site staff so tenant disruption is minimal and can run inspections after-hours for occupied retail.',
      },
      {
        question: 'Are kitchen hood suppression systems required in Wheat Ridge restaurants?',
        answer: 'Yes. NFPA 96 and the IFC as adopted in Colorado require automatic fire-extinguishing systems for commercial cooking operations, covering the hood, duct, and plenum. UL-300 wet-chemical systems are the current standard. Older systems are sometimes grandfathered but typically need replacement at tenant turnover or major renovation — a frequent scope as the 38th Avenue district converts old retail to food service.',
      },
      {
        question: 'Do you service residential sprinkler systems in Wheat Ridge?',
        answer: 'Yes. We inspect, test, and maintain NFPA 13D residential sprinkler systems, most often in larger Applewood remodels and additions and in adaptive-reuse residential like the Fruitdale School lofts. We also handle monitored residential alarm and smoke-detection systems in the city’s older Prospect Valley and 32nd Avenue neighborhoods.',
      },
      {
        question: 'How quickly can you respond to an emergency in Wheat Ridge?',
        answer: 'Our office sits in the south Denver metro, and Wheat Ridge is a short run up the west side of the metro, so our emergency response window for fire-protection emergencies is typically under 90 minutes — usually faster. We staff a 24/7 emergency line and dispatch the same technicians who know your property, not a call center.',
      },
    ],

    ctaPair: [
      {
        title: 'Schedule a Wheat Ridge Inspection.',
        descriptor: 'Tell us about your property — a 38th Avenue storefront, a Wadsworth retail bay, or an Applewood home — and we’ll route the right NICET-certified technician, usually within a few business days and faster if it’s urgent.',
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
      title: 'Fire Protection Services in Wheat Ridge, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, suppression, and code consulting in Wheat Ridge, Colorado. Serving West Metro Fire Rescue jurisdictions with NICET-certified technicians and a 90-minute metro emergency response.',
      keywords:
        'fire protection Wheat Ridge CO, fire inspections Wheat Ridge, sprinkler inspection Wheat Ridge, fire alarm testing Wheat Ridge, backflow testing Wheat Ridge, kitchen hood suppression Wheat Ridge, fire protection company Wheat Ridge Colorado, West Metro Fire Rescue inspections',
      canonical: '/service-areas/wheat-ridge-co/',
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

// ──────────────────────────────────────────────────────────────────────
// 3. SERVICE-AREAS HUB DISPLAY LISTS
// ──────────────────────────────────────────────────────────────────────
//
// The `cities` array above holds the full, SEO-rich page data for the
// handful of cities that have a dedicated /service-areas/<slug>/ page.
//
// The lists below drive the /service-areas/ HUB page only — the grouped
// city cards (by region) and the county cards. They are display stubs:
// a name + slug. As each city/county page is built, wire its card's
// `href` from '#' to the real route. Slugs follow the same
// `lowercase-name-co` convention as the full city pages so the links
// line up when the pages land.

export interface AreaLink {
  /** Display name, e.g. "Thornton" or "Adams County". */
  name: string;
  /** URL slug for the future page, e.g. "thornton-co". */
  slug: string;
  /** Live link target. '#' until the page is built. */
  href: string;
}

export interface CityRegion {
  /** Region heading, e.g. "North Metro". */
  region: string;
  /** Cities in this region, in the order supplied. */
  cities: AreaLink[];
}

const stub = (name: string, slug: string, href: string = '#'): AreaLink => ({ name, slug, href });

/**
 * Cities grouped by region for the hub page. Order = display order.
 * `href` is '#' for every entry until its page exists.
 */
export const cityRegions: CityRegion[] = [
  {
    region: 'North Metro',
    cities: [
      stub('Thornton', 'thornton-co', '/service-areas/thornton-co/'),
      stub('Westminster', 'westminster-co', '/service-areas/westminster-co/'),
      stub('Brighton', 'brighton-co', '/service-areas/brighton-co/'),
      stub('Northglenn', 'northglenn-co', '/service-areas/northglenn-co/'),
      stub('Commerce City', 'commerce-city-co', '/service-areas/commerce-city-co/'),
      stub('Federal Heights', 'federal-heights-co', '/service-areas/federal-heights-co/'),
    ],
  },
  {
    region: 'South/Southwest Metro',
    cities: [
      stub('Littleton', 'littleton-co', '/service-areas/littleton-co/'),
      stub('Centennial', 'centennial-co', '/service-areas/centennial-co/'),
      stub('Highlands Ranch', 'highlands-ranch-co', '/service-areas/highlands-ranch-co/'),
      stub('Englewood', 'englewood-co', '/service-areas/englewood-co/'),
      stub('Greenwood Village', 'greenwood-village-co', '/service-areas/greenwood-village-co/'),
      stub('Denver Tech Center', 'denver-tech-center-co', '/service-areas/denver-tech-center-co/'),
      stub('Lone Tree', 'lone-tree-co', '/service-areas/lone-tree-co/'),
      stub('Sheridan', 'sheridan-co', '/service-areas/sheridan-co/'),
      stub('Cherry Hills Village', 'cherry-hills-village-co', '/service-areas/cherry-hills-village-co/'),
    ],
  },
  {
    region: 'East/Far South Metro',
    cities: [
      stub('Aurora', 'aurora-co', '/service-areas/aurora-co/'),
      stub('Parker', 'parker-co', '/service-areas/parker-co/'),
      stub('Castle Rock', 'castle-rock-co', '/service-areas/castle-rock-co/'),
      stub('Castle Pines', 'castle-pines-co', '/service-areas/castle-pines-co/'),
      stub('Elizabeth', 'elizabeth-co', '/service-areas/elizabeth-co/'),
      stub('Franktown', 'franktown-co', '/service-areas/franktown-co/'),
      stub('Larkspur', 'larkspur-co', '/service-areas/larkspur-co/'),
    ],
  },
  {
    region: 'West Metro',
    cities: [
      stub('Lakewood', 'lakewood-co', '/service-areas/lakewood-co/'),
      stub('Arvada', 'arvada-co', '/service-areas/arvada-co/'),
      stub('Golden', 'golden-co', '/service-areas/golden-co/'),
      stub('Wheat Ridge', 'wheat-ridge-co', '/service-areas/wheat-ridge-co/'),
      stub('Edgewater', 'edgewater-co', '/service-areas/edgewater-co/'),
    ],
  },
  {
    region: 'Northwest/Boulder Area',
    cities: [
      stub('Boulder', 'boulder-co', '/service-areas/boulder-co/'),
      stub('Broomfield', 'broomfield-co', '/service-areas/broomfield-co/'),
      stub('Lafayette', 'lafayette-co', '/service-areas/lafayette-co/'),
      stub('Longmont', 'longmont-co', '/service-areas/longmont-co/'),
      stub('Louisville', 'louisville-co', '/service-areas/louisville-co/'),
      stub('Erie', 'erie-co', '/service-areas/erie-co/'),
      stub('Superior', 'superior-co', '/service-areas/superior-co/'),
    ],
  },
  {
    region: 'Northeast Metro',
    cities: [
      stub('Fort Collins', 'fort-collins-co', '/service-areas/fort-collins-co/'),
      stub('Greeley', 'greeley-co', '/service-areas/greeley-co/'),
    ],
  },
  {
    region: 'Near Mountain',
    cities: [
      stub('Evergreen', 'evergreen-co', '/service-areas/evergreen-co/'),
      stub('Conifer', 'conifer-co', '/service-areas/conifer-co/'),
      stub('Morrison', 'morrison-co', '/service-areas/morrison-co/'),
      stub('Black Hawk', 'black-hawk-co', '/service-areas/black-hawk-co/'),
      stub('Central City', 'central-city-co', '/service-areas/central-city-co/'),
    ],
  },
];

/**
 * Key regional counties for the hub page's Counties section.
 * `href` is '#' until each county page exists at
 * /service-areas/counties/<slug>/.
 */
export const counties: AreaLink[] = [
  stub('Adams County', 'adams-county-co', '/service-areas/counties/adams-county-co/'),
  stub('Arapahoe County', 'arapahoe-county-co', '/service-areas/counties/arapahoe-county-co/'),
  stub('Boulder County', 'boulder-county-co', '/service-areas/counties/boulder-county-co/'),
  stub('Broomfield County', 'broomfield-county-co', '/service-areas/counties/broomfield-county-co/'),
  stub('Denver County', 'denver-county-co', '/service-areas/counties/denver-county-co/'),
  stub('Douglas County', 'douglas-county-co', '/service-areas/counties/douglas-county-co/'),
  stub('El Paso County', 'el-paso-county-co', '/service-areas/counties/el-paso-county-co/'),
];