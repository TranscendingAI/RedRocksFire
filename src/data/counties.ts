/**
 * Counties — service-area COUNTY pages.
 *
 * Each entry powers a dedicated page at
 * `/service-areas/counties/<slug>/`. Adding a county = adding one
 * object here.
 *
 * NOTE — two different "counties" lists exist on this project:
 *   - src/data/cities.ts → `counties` : lightweight display STUBS for the
 *     /service-areas/ hub page (name + slug + '#' href only).
 *   - THIS file → `counties` : the full page-data registry that drives the
 *     county TEMPLATE. They are intentionally separate; the hub page keeps
 *     importing the stub list from cities.ts.
 *
 * A county aggregates MULTIPLE cities and MULTIPLE Authorities Having
 * Jurisdiction (AHJs) — that is the structural difference from a city
 * page, which has a single AHJ. The template is cohesive with the city
 * template (shared ptbanner / SplitPanel / services grid / industry
 * chips / accordion / ClosingCTA) but not identical (stats band +
 * cities-in-county grid + multi-AHJ grid instead of neighborhoods /
 * single-AHJ accordion / deficiencies / building stock).
 *
 * Content conventions:
 *   - Copy is written for the multi-site property manager / facilities
 *     director operating across the county, not generic filler.
 *   - `bannerImage` reuses existing site imagery until county-specific
 *     photography is commissioned (TODO inline).
 *   - AHJ entries name real fire authorities operating in the county, but
 *     jurisdictions/boundaries shift — treat them as a starting list to
 *     verify against each AHJ's current service map, not gospel.
 */

// ──────────────────────────────────────────────────────────────────────
// 1. COUNTY DATA SHAPES
// ──────────────────────────────────────────────────────────────────────

export interface CountyCityLink {
  /** City display name, e.g. "Thornton". */
  name: string;
  /** City-page slug, e.g. "thornton-co". */
  slug: string;
  /** Live link target. '#' until the city page is built. */
  href: string;
}

export interface CountyAhj {
  /** Fire authority name, e.g. "North Metro Fire Rescue District". */
  name: string;
  /** Which parts of the county it covers, in plain language. */
  jurisdiction: string;
  /** Public-facing website (optional). */
  website?: string;
}

export interface CountyStat {
  /** Big number / value, e.g. "500K+". */
  value: string;
  /** Label under the value, e.g. "Residents served". */
  label: string;
}

export interface CountyFaqItem {
  question: string;
  answer: string;
}

export interface CountyPageMeta {
  title: string;
  description: string;
  /** Comma-separated keywords for the meta keywords tag. */
  keywords: string;
  /** Canonical path for this page. */
  canonical: string;
}

export interface County {
  /** URL slug — appears at /service-areas/counties/<slug>/. */
  slug: string;
  /** Display name, e.g. "Adams County". */
  county: string;
  /** Two-letter state code. */
  state: string;
  /** Banner H1, e.g. "Fire Protection in Adams County, CO". */
  bannerTitle: string;
  /** Small banner subtitle/eyebrow, e.g. "ADAMS COUNTY FIRE PROTECTION". */
  bannerSubtitle: string;
  /** Background image for the top page-title banner (ptbanner). */
  bannerImage: string;
  /** Photo for the §1 hero SplitPanel (distinct from the banner bg). */
  heroImage: string;
  /** Hero intro — 2-3 sentences speaking to a county-wide property owner. */
  heroIntro: string;
  /** Longer overview of the county's jurisdictional landscape. */
  overview: string;
  /** Quick-fact stats shown on the dark band. */
  stats: CountyStat[];
  /** Local overview shown above the cities grid. */
  citiesIntro: string;
  /** Cities we serve inside this county. */
  citiesInCounty: CountyCityLink[];
  /** Local overview shown above the AHJ grid. */
  ahjIntro: string;
  /** The multiple AHJs operating across the county. */
  ahjs: CountyAhj[];
  /** Local overview shown above the services grid. */
  servicesIntro: string;
  /** Ordered list of services offered across the county. */
  servicesOffered: { title: string; body: string }[];
  /** Industries most commonly served in this county. */
  industriesServed: string[];
  /** FAQ items (also powers FAQPage schema). */
  faq: CountyFaqItem[];
  /** Page metadata. */
  meta: CountyPageMeta;
}

// ──────────────────────────────────────────────────────────────────────
// 2. COUNTY REGISTRY
// ──────────────────────────────────────────────────────────────────────

export const counties: County[] = [
  // ──────────────────────────────────────────────────────────────────
  // ADAMS COUNTY, COLORADO — first county page (pilot)
  //
  // AHJ list below names real fire authorities that serve parts of
  // Adams County. Boundaries and district names change — verify against
  // each authority's current service map before treating as final.
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'adams-county-co',
    county: 'Adams County',
    state: 'CO',
    bannerTitle: 'Fire Protection Adams County, CO',
    bannerSubtitle: 'ADAMS COUNTY FIRE PROTECTION',
    // Hero banner background — commercial fire sprinkler system.
    bannerImage: '/images/rrfps-county-hero-sprinkler.jpg',
    // §1 SplitPanel photo — fire inspector meeting a client in a lobby.
    heroImage: '/images/rrfps-county-inspector-client.jpg',

    heroIntro:
      'Adams County stretches from the dense residential and commercial neighborhoods of the north Denver metro out to the logistics and industrial corridors along I-76, I-25, and E-470. That range means very different life-safety needs from one property to the next — and several different fire authorities enforcing the code across the county. Red Rocks Fire Protection helps Adams County owners and property managers keep sprinkler, alarm, extinguisher, suppression, monitoring, and backflow programs coordinated under one vendor, with reports formatted to whichever AHJ has jurisdiction over the property.',

    overview:
      'Unlike a single city with one Authority Having Jurisdiction, Adams County is served by a patchwork of fire protection districts and municipal fire departments — each with its own permitting process, inspection cadence, and preferred report format. A property manager with buildings in Thornton, Commerce City, and Brighton is dealing with three different AHJs at once. We work across all of them, so a single portfolio of Adams County properties gets one coordinated service program instead of three disconnected ones.',

    stats: [
      { value: '6+', label: 'Cities served in-county' },
      { value: '5+', label: 'Fire authorities coordinated' },
      { value: '90 min', label: 'Metro emergency response window' },
      { value: '1', label: 'Vendor for every system' },
    ],

    citiesIntro:
      'These are the Adams County cities where we most often inspect, test, and maintain fire protection systems. Each has its own building stock and AHJ — click through to the city page for local specifics.',

    citiesInCounty: [
      { name: 'Thornton', slug: 'thornton-co', href: '#' },
      { name: 'Westminster', slug: 'westminster-co', href: '#' },
      { name: 'Brighton', slug: 'brighton-co', href: '#' },
      { name: 'Northglenn', slug: 'northglenn-co', href: '#' },
      { name: 'Commerce City', slug: 'commerce-city-co', href: '#' },
      { name: 'Federal Heights', slug: 'federal-heights-co', href: '#' },
    ],

    ahjIntro:
      'Fire-code enforcement in Adams County is split across several fire protection districts and municipal departments. The authority for any given property depends on its address. We format every inspection report to the AHJ that has jurisdiction, so corrections are approved without rework — no matter which of these agencies covers your building.',

    ahjs: [
      {
        name: 'North Metro Fire Rescue District',
        jurisdiction: 'Northglenn, Federal Heights, and unincorporated areas of northern Adams County.',
        website: 'https://northmetrofire.org',
      },
      {
        name: 'South Adams County Fire Department',
        jurisdiction: 'Commerce City and surrounding unincorporated south Adams County, including the Sand Creek industrial corridor.',
        website: 'https://sacfd.org',
      },
      {
        name: 'Brighton Fire Rescue District',
        jurisdiction: 'Brighton and surrounding northeast Adams County communities.',
        website: 'https://brightonfire.org',
      },
      {
        name: 'Thornton Fire Department',
        jurisdiction: 'City of Thornton.',
        website: 'https://www.thorntonco.gov/fire',
      },
      {
        name: 'Westminster Fire Department',
        jurisdiction: 'City of Westminster (portions fall within Adams County; the remainder is in Jefferson County).',
        website: 'https://www.cityofwestminster.us/fire',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports formatted to the Adams County AHJ that has jurisdiction over your property — so corrections are approved without rework.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression — each system on its own code-driven cadence, documented in a single report formatted to your Adams County AHJ.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems exercised per NFPA 25 — including the ESFR and high-piled-storage systems common in the county\u2019s I-76 and E-470 logistics corridors.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and direct dispatch into the correct Adams County fire authority when an alarm confirms.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection control testing for irrigation, fire-line, and domestic backflow preventers; certification filed with the applicable water provider.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected, tested, and tagged per NFPA 96 and 17A for restaurants and institutional kitchens countywide.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO\u2082 systems for server rooms, data closets, and industrial process areas across the county\u2019s commercial and logistics stock.',
      },
    ],

    industriesServed: [
      'Warehouse, logistics & distribution',
      'Light industrial & manufacturing',
      'Multi-family property management',
      'HOA & community associations',
      'Retail centers and shopping corridors',
      'Restaurants and food service',
      'Office and commercial property',
      'Automotive and fleet',
      'Assisted living and healthcare',
      'Education and childcare',
    ],

    faq: [
      {
        question: 'Which Authority Having Jurisdiction covers my Adams County property?',
        answer: 'It depends on the property\u2019s address. Adams County is served by several fire authorities — including North Metro Fire Rescue, South Adams County Fire, Brighton Fire Rescue, and the Thornton and Westminster fire departments. We identify the correct AHJ for each property in your portfolio and format inspection reports to that authority\u2019s preferred layout.',
      },
      {
        question: 'Can one vendor handle properties in multiple Adams County cities?',
        answer: 'Yes — that\u2019s the point of working with us across a county. Instead of coordinating separate contractors for Thornton, Commerce City, and Brighton, you get one service program, one point of contact, and one set of scheduling and reporting standards spanning every AHJ in the county.',
      },
      {
        question: 'Do you service the large warehouse and distribution facilities in Adams County?',
        answer: 'Yes. The I-76, I-25, and E-470 corridors in Adams County carry a heavy concentration of logistics and distribution space. We test ESFR sprinkler systems, fire pumps, and standpipes, and we handle rack-storage commodity classification and high-piled-storage documentation for these facilities.',
      },
      {
        question: 'How quickly can you respond to an emergency in Adams County?',
        answer: 'Our office is in Centennial, inside the Denver metro, so our emergency response window for fire-protection emergencies across Adams County is typically under 90 minutes. We staff a 24/7 emergency line and dispatch technicians who know your property, not a call center.',
      },
      {
        question: 'How often do fire protection systems need to be inspected in Adams County?',
        answer: 'Per NFPA 25 and the International Fire Code as adopted by the local AHJ, wet-pipe sprinkler systems require quarterly and annual inspections with a 5-year internal inspection; dry systems add quarterly trip tests and a 3-year full-flow trip test. Fire alarm and suppression systems have their own NFPA cadences. We track every requirement for every system and notify you before a test is due.',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Adams County, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, and suppression across Adams County, Colorado — Thornton, Westminster, Brighton, Commerce City, and more. One vendor across every AHJ. NICET-certified technicians.',
      keywords:
        'fire protection Adams County CO, fire inspections Adams County, sprinkler inspection Thornton, fire alarm testing Commerce City, backflow testing Brighton, fire protection company Adams County Colorado, North Metro Fire Rescue inspections, South Adams County Fire inspections',
      canonical: '/service-areas/counties/adams-county-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // ARAPAHOE COUNTY, COLORADO
  // AHJ names verified to best knowledge; boundaries shift — confirm
  // against each authority's current service map. Website URLs omitted
  // pending live verification.
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'arapahoe-county-co',
    county: 'Arapahoe County',
    state: 'CO',
    bannerTitle: 'Fire Protection Arapahoe County, CO',
    bannerSubtitle: 'ARAPAHOE COUNTY FIRE PROTECTION',
    bannerImage: '/images/rrfps-county-hero-sprinkler.jpg',
    heroImage: '/images/rrfps-county-inspector-client.jpg',

    heroIntro:
      'Arapahoe County is where Red Rocks Fire Protection is based — our office sits in Centennial, in the middle of the county we work every day. The county runs from Aurora on the east through the Denver Tech Center and out to Littleton, and it holds some of the densest office, retail, and multi-family stock on the south metro. Three different fire departments enforce the code across that span. We keep sprinkler, alarm, extinguisher, suppression, monitoring, and backflow programs on one schedule, with every report written to the authority that actually inspects the building.',

    overview:
      'Arapahoe County is not one jurisdiction. A property off Arapahoe Road answers to South Metro Fire Rescue; a building in Aurora answers to Aurora Fire Rescue; a site in Littleton answers to Littleton Fire. Each department runs its own permitting, inspection cadence, and report format. A property manager with buildings in Centennial, Aurora, and Littleton is juggling three of them. We run all three under one service program, so the portfolio gets one point of contact instead of three.',

    stats: [
      { value: '9+', label: 'Cities served in-county' },
      { value: '3', label: 'Fire departments coordinated' },
      { value: '90 min', label: 'Metro emergency response window' },
      { value: '1', label: 'Vendor for every system' },
    ],

    citiesIntro:
      'These are the Arapahoe County cities where we inspect, test, and maintain fire protection systems most often. Each has its own building mix and its own AHJ — the city page has the local detail.',

    citiesInCounty: [
      { name: 'Centennial', slug: 'centennial-co', href: '/service-areas/centennial-co/' },
      { name: 'Aurora', slug: 'aurora-co', href: '#' },
      { name: 'Littleton', slug: 'littleton-co', href: '#' },
      { name: 'Englewood', slug: 'englewood-co', href: '#' },
      { name: 'Greenwood Village', slug: 'greenwood-village-co', href: '#' },
      { name: 'Sheridan', slug: 'sheridan-co', href: '#' },
      { name: 'Cherry Hills Village', slug: 'cherry-hills-village-co', href: '#' },
    ],

    ahjIntro:
      'Three fire departments split fire-code enforcement across Arapahoe County, and the one that inspects your building depends entirely on its address. We write every report to the department with jurisdiction, so corrections clear on the first pass.',

    ahjs: [
      {
        name: 'South Metro Fire Rescue Authority',
        jurisdiction: 'Centennial, Greenwood Village, the Denver Tech Center, and much of the south and central county.',
      },
      {
        name: 'Aurora Fire Rescue',
        jurisdiction: 'City of Aurora, including its Arapahoe County and Adams County portions.',
      },
      {
        name: 'Littleton Fire Rescue',
        jurisdiction: 'Littleton, Englewood, Sheridan, and surrounding communities in the western county.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports written to the Arapahoe County department that has jurisdiction over your property.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression, each on its own code-driven cadence, in one report formatted for your Arapahoe County AHJ.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems tested per NFPA 25 — including the high-rise standpipes and fire pumps common in DTC and Greenwood Village office towers.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and direct dispatch into the correct Arapahoe County department when an alarm confirms.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for irrigation, fire-line, and domestic backflow preventers, with certification filed to the water provider.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected and tagged per NFPA 96 and 17A — routine work at the retail and restaurant clusters along Arapahoe Road and in Aurora.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO\u2082 systems for the server rooms and data closets that fill DTC and Inverness office space.',
      },
    ],

    industriesServed: [
      'Office and Class-A commercial',
      'Multi-family property management',
      'HOA & community associations',
      'Retail centers and shopping malls',
      'Restaurants and food service',
      'Hospitality',
      'Assisted living and healthcare',
      'Data centers and server rooms',
      'Education and childcare',
      'Automotive dealerships',
    ],

    faq: [
      {
        question: 'Which fire department inspects my Arapahoe County property?',
        answer: 'It depends on the address. South Metro Fire Rescue covers Centennial, Greenwood Village, and the DTC; Aurora Fire Rescue covers Aurora; Littleton Fire Rescue covers Littleton, Englewood, and Sheridan. We identify the department for each property and format reports to its layout.',
      },
      {
        question: 'Is Red Rocks Fire Protection actually based in Arapahoe County?',
        answer: 'Yes. Our office is at 7076 S. Alton Way in Centennial, inside the county. Most of our technicians live and work on the south metro, which is why we hold a 90-minute emergency response window across Arapahoe County and the surrounding Denver metro.',
      },
      {
        question: 'Can one vendor cover buildings in Aurora, Centennial, and Littleton at once?',
        answer: 'Yes, and that is the reason to work across a county rather than city by city. You get one service program and one point of contact spanning all three departments, instead of a separate contractor and a separate reporting standard for each.',
      },
      {
        question: 'Do you service high-rise office towers in the Denver Tech Center?',
        answer: 'Yes. DTC and Greenwood Village high-rises run standpipes, fire pumps, voice evacuation, and clean-agent suppression for their data rooms. We test all of it to the NFPA cadence and coordinate after-hours work so occupied floors are not disrupted.',
      },
      {
        question: 'How often do fire protection systems need inspection in Arapahoe County?',
        answer: 'Per NFPA 25 and the IFC as adopted locally, wet-pipe sprinkler systems need quarterly and annual inspections plus a 5-year internal; dry systems add quarterly trip tests and a 3-year full-flow trip test. Alarm and suppression systems carry their own schedules. We track each one and notify you before it is due.',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Arapahoe County, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, and suppression across Arapahoe County, Colorado — Centennial, Aurora, Littleton, the DTC, and more. Locally based, one vendor across every fire department.',
      keywords:
        'fire protection Arapahoe County CO, fire inspections Arapahoe County, sprinkler inspection Centennial, fire alarm testing Aurora, backflow testing Littleton, South Metro Fire Rescue inspections, Aurora Fire Rescue inspections',
      canonical: '/service-areas/counties/arapahoe-county-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // BOULDER COUNTY, COLORADO
  // Wildland-urban interface is the real differentiator here.
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'boulder-county-co',
    county: 'Boulder County',
    state: 'CO',
    bannerTitle: 'Fire Protection Boulder County, CO',
    bannerSubtitle: 'BOULDER COUNTY FIRE PROTECTION',
    bannerImage: '/images/rrfps-county-hero-sprinkler.jpg',
    heroImage: '/images/rrfps-county-inspector-client.jpg',

    heroIntro:
      'Boulder County pairs a university city and a fast-growing tech corridor with foothills that put much of the county in the wildland-urban interface. That mix — lab and cleanroom space in Boulder and Louisville, distribution and manufacturing in Longmont, and homes that back up to open space and grassland — drives fire-protection needs you will not find on the flat metro floor. Red Rocks Fire Protection keeps sprinkler, alarm, extinguisher, suppression, monitoring, and backflow programs coordinated across it, with reports written to the local authority.',

    overview:
      'Boulder County runs several fire departments and protection districts, from Boulder Fire-Rescue in the city to Longmont, Mountain View, and Louisville covering the growth corridor along US 287 and CO 119. The 2021 Marshall Fire made the stakes here concrete: this is a county where wildfire risk is part of the code conversation, not an afterthought. We inspect and service life-safety systems across the whole county and write every report to the department that has jurisdiction over the property.',

    stats: [
      { value: '7+', label: 'Cities served in-county' },
      { value: '4+', label: 'Fire authorities coordinated' },
      { value: 'WUI', label: 'Wildland-interface expertise' },
      { value: '1', label: 'Vendor for every system' },
    ],

    citiesIntro:
      'These are the Boulder County cities where we work most often. Each has its own building stock — university, tech, industrial, and interface residential — and its own AHJ.',

    citiesInCounty: [
      { name: 'Boulder', slug: 'boulder-co', href: '#' },
      { name: 'Longmont', slug: 'longmont-co', href: '#' },
      { name: 'Louisville', slug: 'louisville-co', href: '#' },
      { name: 'Lafayette', slug: 'lafayette-co', href: '#' },
      { name: 'Superior', slug: 'superior-co', href: '#' },
      { name: 'Erie', slug: 'erie-co', href: '#' },
    ],

    ahjIntro:
      'Fire-code enforcement in Boulder County is spread across city departments and protection districts. The authority for a property depends on its address, and interface properties often carry extra wildfire-mitigation requirements on top of the standard code. We format every report to the local department.',

    ahjs: [
      {
        name: 'Boulder Fire-Rescue',
        jurisdiction: 'City of Boulder, including the university district and interface neighborhoods against the foothills.',
      },
      {
        name: 'Longmont Fire Department',
        jurisdiction: 'City of Longmont and the manufacturing and distribution corridor along US 287.',
      },
      {
        name: 'Louisville Fire Protection District',
        jurisdiction: 'Louisville and surrounding areas east of the foothills.',
      },
      {
        name: 'Mountain View Fire Rescue',
        jurisdiction: 'Erie, Dacono, and unincorporated southeastern Boulder County communities.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports written to the Boulder County department that has jurisdiction over your property.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression on their code-driven cadences, in one report formatted for your Boulder County AHJ.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, and standpipe systems tested per NFPA 25 — including the dry systems common in unheated interface and agricultural structures.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and direct dispatch into the correct Boulder County department when an alarm confirms.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for irrigation, fire-line, and domestic backflow preventers, with certification filed to the water provider.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO\u2082 systems for the labs, cleanrooms, and server rooms that fill Boulder and Louisville research and tech space.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected and tagged per NFPA 96 and 17A for the restaurants along Pearl Street and Longmont Main Street.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards.',
      },
    ],

    industriesServed: [
      'Research labs and cleanrooms',
      'Technology and light manufacturing',
      'Multi-family property management',
      'HOA & community associations',
      'Warehouse, logistics & distribution',
      'Restaurants and food service',
      'Retail and mixed-use',
      'Education and childcare',
      'Assisted living and healthcare',
      'Breweries and food production',
    ],

    faq: [
      {
        question: 'Which fire department covers my Boulder County property?',
        answer: 'It depends on the address. Boulder Fire-Rescue covers the city of Boulder; Longmont Fire covers Longmont; the Louisville Fire Protection District and Mountain View Fire Rescue cover the eastern and southeastern communities. We identify the department for each property and format reports to its layout.',
      },
      {
        question: 'Do you handle wildfire-interface requirements in Boulder County?',
        answer: 'We inspect and service the life-safety systems in interface buildings — sprinklers, alarms, monitoring, and backflow — and coordinate with the local AHJ on the added requirements interface properties carry. For defensible-space and vegetation work outside the building systems, we point you to the right mitigation resource.',
      },
      {
        question: 'Do you service labs and cleanrooms in Boulder and Louisville?',
        answer: 'Yes. Research and tech space in Boulder County runs clean-agent suppression, special-hazard systems, and sensitive detection for labs, cleanrooms, and server rooms. We test these to their NFPA cadences and schedule around occupied lab time.',
      },
      {
        question: 'Can one vendor cover properties across Boulder, Longmont, and Louisville?',
        answer: 'Yes. Instead of a separate contractor for each department, you get one service program and one point of contact spanning every Boulder County AHJ, with a single reporting standard.',
      },
      {
        question: 'How often do fire protection systems need inspection in Boulder County?',
        answer: 'Per NFPA 25 and the IFC as adopted locally, wet-pipe sprinkler systems need quarterly and annual inspections plus a 5-year internal; dry systems add quarterly trip tests and a 3-year full-flow trip test. Alarm and suppression systems carry their own schedules. We track each one and notify you before it is due.',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Boulder County, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, and suppression across Boulder County, Colorado — Boulder, Longmont, Louisville, and more. Wildland-interface experience, one vendor across every fire authority.',
      keywords:
        'fire protection Boulder County CO, fire inspections Boulder, sprinkler inspection Longmont, fire alarm testing Louisville, backflow testing Boulder County, wildfire interface fire protection, Boulder Fire-Rescue inspections',
      canonical: '/service-areas/counties/boulder-county-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // BROOMFIELD COUNTY, COLORADO
  // Consolidated city-and-county — effectively one AHJ.
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'broomfield-county-co',
    county: 'Broomfield County',
    state: 'CO',
    bannerTitle: 'Fire Protection Broomfield County, CO',
    bannerSubtitle: 'BROOMFIELD COUNTY FIRE PROTECTION',
    bannerImage: '/images/rrfps-county-hero-sprinkler.jpg',
    heroImage: '/images/rrfps-county-inspector-client.jpg',

    heroIntro:
      'Broomfield is a consolidated city and county, which makes it the simplest jurisdiction on the north metro to work in: one government, one fire department, one permitting process for the whole area. It is also one of the fastest-growing, anchored by the Interlocken and Arista business districts along the US 36 tech corridor between Denver and Boulder. Red Rocks Fire Protection keeps sprinkler, alarm, extinguisher, suppression, monitoring, and backflow programs coordinated for Broomfield owners and managers, all under one AHJ.',

    overview:
      'Because Broomfield merged its city and county governments, a property here answers to a single fire authority rather than the patchwork you find in Adams or Arapahoe. That simplifies permitting and inspection, but the building stock is not simple: Interlocken and Arista carry Class-A office, data-heavy tech tenants, hotels, and dense mixed-use residential, each with its own life-safety load. We run every system in that mix on one coordinated schedule.',

    stats: [
      { value: '1', label: 'Consolidated city-and-county AHJ' },
      { value: '90 min', label: 'Metro emergency response window' },
      { value: 'US 36', label: 'Tech-corridor coverage' },
      { value: '1', label: 'Vendor for every system' },
    ],

    citiesIntro:
      'Broomfield is a single consolidated community rather than a set of separate cities. These are the districts where we work most often.',

    citiesInCounty: [
      { name: 'Broomfield', slug: 'broomfield-co', href: '#' },
      { name: 'Interlocken', slug: 'broomfield-co', href: '#' },
      { name: 'Arista', slug: 'broomfield-co', href: '#' },
    ],

    ahjIntro:
      'Broomfield runs a single consolidated fire authority for the whole city and county, so a property here deals with one permitting process and one report format — a real advantage over the multi-department counties around it.',

    ahjs: [
      {
        name: 'North Metro Fire Rescue District',
        jurisdiction: 'Broomfield and surrounding communities, including the Interlocken and Arista business districts along US 36.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports written to the Broomfield fire authority.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression on their code-driven cadences, in one report formatted for the Broomfield AHJ.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, and standpipe systems tested per NFPA 25 — including the mid-rise systems in Arista residential and Interlocken office buildings.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and direct dispatch when an alarm confirms.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO\u2082 systems for the server rooms and data closets in Interlocken tech tenants.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for irrigation, fire-line, and domestic backflow preventers, with certification filed to the water provider.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected and tagged per NFPA 96 and 17A for Arista and FlatIron-area restaurants.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards.',
      },
    ],

    industriesServed: [
      'Office and Class-A commercial',
      'Technology and data tenants',
      'Multi-family and mixed-use',
      'Hospitality',
      'Retail centers',
      'Restaurants and food service',
      'HOA & community associations',
      'Assisted living and healthcare',
      'Data centers and server rooms',
      'Education and childcare',
    ],

    faq: [
      {
        question: 'Who is the fire authority for Broomfield?',
        answer: 'Because Broomfield is a consolidated city and county, a single fire authority covers the whole area, so there is one permitting process and one report format for every property here. We format inspection reports to that authority.',
      },
      {
        question: 'Does the single AHJ make Broomfield easier to work in?',
        answer: 'Yes. Compared with Adams or Arapahoe, where a portfolio can span three or more departments, a Broomfield portfolio deals with one. That means one set of scheduling and reporting standards, which is faster for permitting and corrections.',
      },
      {
        question: 'Do you service the Interlocken and Arista business districts?',
        answer: 'Yes. Interlocken carries Class-A office and data-heavy tech tenants; Arista carries hotels, mixed-use residential, and event space. We test the sprinklers, alarms, standpipes, clean-agent suppression, and monitoring these buildings run.',
      },
      {
        question: 'How quickly can you respond to an emergency in Broomfield?',
        answer: 'Our office is in Centennial, on the Denver metro, so our emergency response window for Broomfield is typically under 90 minutes. We staff a 24/7 emergency line and dispatch technicians who know your property.',
      },
      {
        question: 'How often do fire protection systems need inspection in Broomfield?',
        answer: 'Per NFPA 25 and the IFC as adopted locally, wet-pipe sprinkler systems need quarterly and annual inspections plus a 5-year internal; dry systems add quarterly trip tests and a 3-year full-flow trip test. Alarm and suppression systems carry their own schedules. We track each one and notify you before it is due.',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Broomfield, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, and suppression across Broomfield, Colorado — Interlocken, Arista, and the US 36 tech corridor. One consolidated AHJ, one vendor for every system.',
      keywords:
        'fire protection Broomfield CO, fire inspections Broomfield, sprinkler inspection Interlocken, fire alarm testing Arista, backflow testing Broomfield, Broomfield fire protection company, North Metro Fire Rescue inspections',
      canonical: '/service-areas/counties/broomfield-county-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // DENVER COUNTY (CITY AND COUNTY OF DENVER), COLORADO
  // Single AHJ (Denver Fire). This county page angles toward
  // portfolio/high-rise/districts; the Denver CITY page covers the
  // deeper code detail. Cross-link the two.
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'denver-county-co',
    county: 'Denver County',
    state: 'CO',
    bannerTitle: 'Fire Protection Denver County, CO',
    bannerSubtitle: 'DENVER COUNTY FIRE PROTECTION',
    bannerImage: '/images/rrfps-county-hero-sprinkler.jpg',
    heroImage: '/images/rrfps-county-inspector-client.jpg',

    heroIntro:
      'The City and County of Denver is one consolidated government with one fire authority, so every property in the county answers to the Denver Fire Department. That single-AHJ simplicity meets some of the most varied building stock in the state — century-old masonry in LoDo, downtown high-rises, converted RiNo warehouses, dense apartment corridors, and the logistics belt out toward the airport. Red Rocks Fire Protection keeps sprinkler, alarm, extinguisher, suppression, monitoring, and backflow programs coordinated across a Denver portfolio on one schedule.',

    overview:
      'Denver is a single jurisdiction, but it enforces its own code: the Denver Fire Code, based on the International Fire Code with local amendments, and it licenses the technicians who inspect and test regulated systems. One authority does not mean one kind of building — a downtown tower, a Cherry Creek mixed-use block, and a Montbello warehouse each carry a different life-safety load. For the block-by-block code detail, our Denver city page goes deeper; this page is for managers running a portfolio across the county.',

    stats: [
      { value: '1', label: 'Consolidated city-and-county AHJ' },
      { value: '90 min', label: 'Metro emergency response window' },
      { value: '24/7', label: 'Monitoring and emergency line' },
      { value: '1', label: 'Vendor for every system' },
    ],

    citiesIntro:
      'Denver is one consolidated county rather than separate cities. These are the districts where we work most often — the deeper local detail lives on our Denver city page.',

    citiesInCounty: [
      { name: 'Downtown Denver', slug: 'denver-co', href: '/service-areas/denver-co/' },
      { name: 'RiNo', slug: 'denver-co', href: '/service-areas/denver-co/' },
      { name: 'Cherry Creek', slug: 'denver-co', href: '/service-areas/denver-co/' },
      { name: 'Central Park', slug: 'denver-co', href: '/service-areas/denver-co/' },
      { name: 'DIA Corridor', slug: 'denver-co', href: '/service-areas/denver-co/' },
    ],

    ahjIntro:
      'The Denver Fire Department Fire Prevention Division is the single fire-code authority for the entire City and County of Denver. It runs annual commercial inspections, permitting, plan review, acceptance testing, and technician licensing. We format every report to Denver Fire and carry the local licenses its code requires.',

    ahjs: [
      {
        name: 'Denver Fire Department, Fire Prevention Division',
        jurisdiction: 'The entire City and County of Denver, under the Denver Fire Code (IFC with local amendments).',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians who carry the Denver Fire licenses the code requires, with reports formatted to Denver Fire.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, pumps, and suppression on their code-driven cadences, documented for your records and Denver Fire review.',
      },
      {
        title: 'Fire Sprinkler, Standpipe & Pump Testing',
        body: 'Wet, dry, preaction, and standpipe systems plus fire pumps tested per NFPA 25 — the full high-rise stack that downtown Denver towers depend on.',
      },
      {
        title: 'Fire Alarm Testing & Service',
        body: 'Initiating devices, notification appliances, supervising signals, control equipment, and secondary power tested to NFPA 72, scheduled to limit disruption in occupied buildings.',
      },
      {
        title: 'System-Down & Fire-Watch Support',
        body: 'Fast response when a sprinkler or alarm system is impaired, with repair coordination and guidance through Denver\u2019s system-down reporting and fire-watch process.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and dispatch, with account and contact records kept current as tenants change.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for fire-line and domestic backflow assemblies, coordinated with Denver Water and the system service schedule.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected and tagged per NFPA 96 and 17A for Denver restaurants, hotels, food halls, and institutional kitchens.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO\u2082 systems for the data rooms, archives, and critical equipment across Denver commercial stock.',
      },
    ],

    industriesServed: [
      'High-rise office and mixed-use',
      'Commercial property management',
      'Multi-family apartments and condominiums',
      'Restaurants, bars, and commercial kitchens',
      'Hotels and hospitality',
      'Retail and neighborhood storefronts',
      'Warehouse, logistics, and light industrial',
      'Healthcare and assisted living',
      'Entertainment and assembly venues',
      'Data centers and server rooms',
    ],

    faq: [
      {
        question: 'Who is the fire authority for Denver County?',
        answer: 'The Denver Fire Department Fire Prevention Division is the single fire-code authority for the entire City and County of Denver. It runs commercial inspections, permitting, plan review, acceptance testing, and technician licensing.',
      },
      {
        question: 'How is the Denver county page different from the Denver city page?',
        answer: 'They cover the same jurisdiction. This county page is for managers running a portfolio across Denver\u2019s districts; the Denver city page goes deeper on the local code, the adopted NFPA editions, and the common inspection findings block by block.',
      },
      {
        question: 'Does Denver require licensed fire-protection technicians?',
        answer: 'Yes. The Denver Fire Code requires Denver Fire Department licenses for people who design, install, modify, inspect, test, maintain, or repair regulated life-safety systems. Our technicians carry the license category that matches the work.',
      },
      {
        question: 'Can one vendor cover a portfolio spread across Denver?',
        answer: 'Yes. A downtown tower, a Cherry Creek mixed-use block, and a Montbello warehouse run very different systems, but they share one AHJ. We put them on one service program with one point of contact and one reporting standard.',
      },
      {
        question: 'How quickly can you respond to an emergency in Denver?',
        answer: 'Our office is in Centennial, on the Denver metro, so our emergency response window for Denver is typically under 90 minutes. We staff a 24/7 emergency line and dispatch technicians who know your property.',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Denver County, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler, standpipe and pump testing, 24/7 monitoring, backflow, and suppression across the City and County of Denver. One AHJ, Denver-licensed technicians, one vendor for a full portfolio.',
      keywords:
        'fire protection Denver County CO, fire inspections Denver, sprinkler inspection Denver, fire alarm testing Denver, backflow testing Denver, Denver Fire Department inspections, Denver Fire Code compliance',
      canonical: '/service-areas/counties/denver-county-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // DOUGLAS COUNTY, COLORADO
  // Fast-growth master-planned + I-25 retail; South Metro + Castle Rock.
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'douglas-county-co',
    county: 'Douglas County',
    state: 'CO',
    bannerTitle: 'Fire Protection Douglas County, CO',
    bannerSubtitle: 'DOUGLAS COUNTY FIRE PROTECTION',
    bannerImage: '/images/rrfps-county-hero-sprinkler.jpg',
    heroImage: '/images/rrfps-county-inspector-client.jpg',

    heroIntro:
      'Douglas County has been one of the fastest-growing counties in the country for two decades, and it shows in the building stock: master-planned communities in Highlands Ranch and Castle Pines, the retail and office spine along I-25 through Lone Tree and Castle Rock, and new mixed-use going up faster than most departments can keep pace with. Red Rocks Fire Protection keeps sprinkler, alarm, extinguisher, suppression, monitoring, and backflow programs coordinated across it, with reports written to the local authority.',

    overview:
      'Douglas County splits mainly between South Metro Fire Rescue in the north — Highlands Ranch, Lone Tree, Parker — and Castle Rock Fire and Rescue in the south. The growth here means a lot of newer construction with modern integrated systems, but also HOA and community-association portfolios that span multiple developments and both AHJs. We run those portfolios on one schedule instead of chasing each association and each department separately.',

    stats: [
      { value: '6+', label: 'Cities served in-county' },
      { value: '2', label: 'Primary fire authorities' },
      { value: '90 min', label: 'Metro emergency response window' },
      { value: '1', label: 'Vendor for every system' },
    ],

    citiesIntro:
      'These are the Douglas County communities where we work most often — heavy on master-planned residential, HOA common areas, and the I-25 retail and office corridor.',

    citiesInCounty: [
      { name: 'Highlands Ranch', slug: 'highlands-ranch-co', href: '#' },
      { name: 'Parker', slug: 'parker-co', href: '#' },
      { name: 'Castle Rock', slug: 'castle-rock-co', href: '#' },
      { name: 'Lone Tree', slug: 'lone-tree-co', href: '#' },
      { name: 'Castle Pines', slug: 'castle-pines-co', href: '#' },
      { name: 'Larkspur', slug: 'larkspur-co', href: '#' },
    ],

    ahjIntro:
      'Two fire authorities handle most of Douglas County: South Metro Fire Rescue in the north and Castle Rock Fire and Rescue in the south, with smaller districts covering the rural edges. The authority for a property depends on its address. We format every report to the department with jurisdiction.',

    ahjs: [
      {
        name: 'South Metro Fire Rescue Authority',
        jurisdiction: 'Highlands Ranch, Lone Tree, Parker, and northern Douglas County.',
      },
      {
        name: 'Castle Rock Fire and Rescue Department',
        jurisdiction: 'Town of Castle Rock and surrounding central Douglas County.',
      },
      {
        name: 'Larkspur Fire Protection District',
        jurisdiction: 'Larkspur and rural southern Douglas County along the I-25 corridor.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports written to the Douglas County department that has jurisdiction over your property.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression on their code-driven cadences, in one report formatted for your Douglas County AHJ.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, and standpipe systems tested per NFPA 25, including the NFPA 13R and 13D systems common in newer Douglas County residential and mid-rise construction.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and direct dispatch into the correct Douglas County department when an alarm confirms.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for irrigation, fire-line, and domestic backflow preventers — a frequent scope across HOA common areas and irrigation systems.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected and tagged per NFPA 96 and 17A for the retail and restaurant tenants along I-25 and in Park Meadows-area centers.',
      },
      {
        title: 'Life-Safety Consulting & Code Navigation',
        body: 'Pre-plan review and deficiency-correction management for HOA and property-management portfolios spanning multiple Douglas County developments and both AHJs.',
      },
    ],

    industriesServed: [
      'HOA & community associations',
      'Multi-family property management',
      'Master-planned residential',
      'Retail centers and shopping malls',
      'Office and commercial property',
      'Restaurants and food service',
      'Hospitality',
      'Assisted living and healthcare',
      'Education and childcare',
      'Automotive dealerships',
    ],

    faq: [
      {
        question: 'Which fire department covers my Douglas County property?',
        answer: 'It depends on the address. South Metro Fire Rescue covers Highlands Ranch, Lone Tree, and Parker; Castle Rock Fire and Rescue covers Castle Rock; smaller districts such as Larkspur cover the rural south. We identify the department for each property and format reports to its layout.',
      },
      {
        question: 'Do you handle HOA portfolios that span several Douglas County communities?',
        answer: 'Yes, and it is a common ask here. A management company with associations in Highlands Ranch, Parker, and Castle Rock is working across two AHJs. We put the whole portfolio on one service program with one point of contact and consolidated reporting.',
      },
      {
        question: 'Do you service newer residential and mid-rise construction?',
        answer: 'Yes. Douglas County\u2019s growth means a lot of NFPA 13R and 13D residential sprinkler systems and modern integrated alarms. We inspect, test, and maintain these and keep the records the local AHJ expects.',
      },
      {
        question: 'How quickly can you respond to an emergency in Douglas County?',
        answer: 'Our office is in Centennial, just north of the county line, so our emergency response window across Douglas County is typically under 90 minutes. We staff a 24/7 emergency line and dispatch technicians who know your property.',
      },
      {
        question: 'How often do fire protection systems need inspection in Douglas County?',
        answer: 'Per NFPA 25 and the IFC as adopted locally, wet-pipe sprinkler systems need quarterly and annual inspections plus a 5-year internal; dry systems add quarterly trip tests and a 3-year full-flow trip test. Alarm and suppression systems carry their own schedules. We track each one and notify you before it is due.',
      },
    ],

    meta: {
      title: 'Fire Protection Services in Douglas County, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, and suppression across Douglas County, Colorado — Highlands Ranch, Parker, Castle Rock, Lone Tree, and more. One vendor across South Metro and Castle Rock fire.',
      keywords:
        'fire protection Douglas County CO, fire inspections Highlands Ranch, sprinkler inspection Parker, fire alarm testing Castle Rock, backflow testing Lone Tree, HOA fire protection Douglas County, South Metro Fire Rescue inspections',
      canonical: '/service-areas/counties/douglas-county-co/',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  // EL PASO COUNTY, COLORADO
  // Far-south outlier from the Centennial HQ — NO 90-minute claim.
  // Military-heavy (Fort Carson, Peterson SFB, USAFA, Schriever).
  // ──────────────────────────────────────────────────────────────────
  {
    slug: 'el-paso-county-co',
    county: 'El Paso County',
    state: 'CO',
    bannerTitle: 'Fire Protection El Paso County, CO',
    bannerSubtitle: 'EL PASO COUNTY FIRE PROTECTION',
    bannerImage: '/images/rrfps-county-hero-sprinkler.jpg',
    heroImage: '/images/rrfps-county-inspector-client.jpg',

    heroIntro:
      'El Paso County anchors the southern end of our service area, centered on Colorado Springs — the second-largest city in the state and a market shaped by its military footprint. Fort Carson, Peterson Space Force Base, the Air Force Academy, and Schriever SFB drive demand for contractor and support facilities, defense manufacturing, and the housing and retail that surround a large service population. Red Rocks Fire Protection keeps sprinkler, alarm, extinguisher, suppression, monitoring, and backflow programs coordinated for El Paso County owners and managers.',

    overview:
      'El Paso County is the far-south end of the Front Range, so we plan work here around scheduled routes rather than same-hour metro response. Colorado Springs Fire Department is the primary authority in the city, with fire protection districts covering the surrounding communities from Monument down to Fountain. The building stock leans toward defense and aerospace facilities, warehouse and light manufacturing, and the retail and multi-family that serve the military population.',

    stats: [
      { value: '2nd', label: 'Largest city in Colorado' },
      { value: '4', label: 'Military installations served' },
      { value: 'Routed', label: 'Scheduled service coverage' },
      { value: '1', label: 'Vendor for every system' },
    ],

    citiesIntro:
      'These are the El Paso County communities where we work, centered on Colorado Springs and its surrounding towns.',

    citiesInCounty: [
      { name: 'Colorado Springs', slug: 'colorado-springs-co', href: '#' },
      { name: 'Monument', slug: 'monument-co', href: '#' },
      { name: 'Fountain', slug: 'fountain-co', href: '#' },
      { name: 'Falcon', slug: 'falcon-co', href: '#' },
    ],

    ahjIntro:
      'Colorado Springs Fire Department is the primary fire-code authority inside the city, with separate fire protection districts covering the surrounding El Paso County communities. Federal installations enforce their own fire codes on base. We format every report to the authority with jurisdiction over the property.',

    ahjs: [
      {
        name: 'Colorado Springs Fire Department',
        jurisdiction: 'City of Colorado Springs, including downtown, the north I-25 corridor, and the airport-area industrial districts.',
      },
      {
        name: 'Tri-Lakes Monument Fire Protection District',
        jurisdiction: 'Monument, Palmer Lake, and northern El Paso County along I-25.',
      },
      {
        name: 'Fountain Fire Department',
        jurisdiction: 'Fountain and the communities south of Colorado Springs near Fort Carson.',
      },
    ],

    servicesIntro:
      'Every service below is run by NICET- or CSA-certified technicians, with reports written to the El Paso County authority that has jurisdiction over your property.',

    servicesOffered: [
      {
        title: 'Annual NFPA Fire Inspections',
        body: 'Sprinklers, alarms, extinguishers, backflow, and suppression on their code-driven cadences, in one report formatted for your El Paso County AHJ.',
      },
      {
        title: 'Fire Sprinkler & Standpipe Testing',
        body: 'Wet, dry, preaction, deluge, and standpipe systems tested per NFPA 25 — including the ESFR and high-piled-storage systems in Colorado Springs warehouse and manufacturing space.',
      },
      {
        title: 'Fire Alarm Testing',
        body: 'Initiating devices, notification appliances, control panels, and secondary power tested to NFPA 72 by NICET-certified technicians.',
      },
      {
        title: '24/7 Monitoring',
        body: 'UL-listed central-station monitoring with signal verification and direct dispatch into the correct El Paso County department when an alarm confirms.',
      },
      {
        title: 'Special Hazard & Clean-Agent Suppression',
        body: 'FM-200, Novec 1230, and CO\u2082 systems for the defense, aerospace, and data facilities concentrated around Colorado Springs.',
      },
      {
        title: 'Backflow Prevention',
        body: 'Annual cross-connection testing for irrigation, fire-line, and domestic backflow preventers, with certification filed to the water provider.',
      },
      {
        title: 'Kitchen Hood Suppression',
        body: 'UL-300 wet-chemical and Ansul R-102 systems inspected and tagged per NFPA 96 and 17A for restaurants and institutional kitchens across the county.',
      },
      {
        title: 'Fire Extinguisher Service',
        body: 'Annual inspections, six-year maintenance, twelve-year hydrostatic testing, and on-site recharging for Class A through Class K hazards.',
      },
    ],

    industriesServed: [
      'Defense and aerospace facilities',
      'Warehouse, logistics & distribution',
      'Light industrial & manufacturing',
      'Multi-family property management',
      'Retail centers and shopping corridors',
      'Restaurants and food service',
      'Hospitality',
      'Office and commercial property',
      'Assisted living and healthcare',
      'Education and childcare',
    ],

    faq: [
      {
        question: 'Which fire department covers my El Paso County property?',
        answer: 'It depends on the address. Colorado Springs Fire Department is the authority inside the city; the Tri-Lakes Monument and Fountain districts cover the north and south communities. Federal installations run their own fire codes on base. We identify the authority for each property and format reports to its layout.',
      },
      {
        question: 'Is El Paso County part of your service area even though you are based in Centennial?',
        answer: 'Yes. El Paso County anchors the southern end of our Front Range coverage. We plan work here on scheduled routes rather than same-hour metro response, so inspections and testing are booked ahead and run efficiently in a single trip.',
      },
      {
        question: 'Do you service defense and aerospace facilities in Colorado Springs?',
        answer: 'We service the contractor, support, and commercial facilities tied to the region\u2019s military and aerospace economy — the sprinklers, alarms, clean-agent suppression, and monitoring these buildings run. Work performed on a federal installation itself is governed by that installation\u2019s own fire authority.',
      },
      {
        question: 'Can one vendor cover a portfolio across Colorado Springs and the surrounding towns?',
        answer: 'Yes. Instead of a separate contractor for the city and each surrounding district, you get one service program and one point of contact spanning every El Paso County authority, with a single reporting standard.',
      },
      {
        question: 'How often do fire protection systems need inspection in El Paso County?',
        answer: 'Per NFPA 25 and the IFC as adopted locally, wet-pipe sprinkler systems need quarterly and annual inspections plus a 5-year internal; dry systems add quarterly trip tests and a 3-year full-flow trip test. Alarm and suppression systems carry their own schedules. We track each one and notify you before it is due.',
      },
    ],

    meta: {
      title: 'Fire Protection Services in El Paso County, CO | Red Rocks Fire Protection',
      description:
        'NFPA fire inspections, sprinkler and alarm testing, 24/7 monitoring, backflow, and suppression across El Paso County, Colorado — Colorado Springs, Monument, Fountain, and more. Scheduled-route coverage, one vendor for every system.',
      keywords:
        'fire protection El Paso County CO, fire inspections Colorado Springs, sprinkler inspection Colorado Springs, fire alarm testing Monument, backflow testing Fountain, Colorado Springs Fire Department inspections, defense facility fire protection',
      canonical: '/service-areas/counties/el-paso-county-co/',
    },
  },
];

/**
 * Lookup helper — used by getStaticPaths and any page that needs a
 * single county by slug.
 */
export function getCounty(slug: string): County | undefined {
  return counties.find((c) => c.slug === slug);
}
