/**
 * RRFPS canonical content — single source of truth for all copy on the site.
 *
 * Source-of-truth rules (locked in 2026-07-09):
 *   - Brand Strategy v4 wins over the live site when both have a value.
 *   - When Brand Strategy is silent, use the live site.
 *   - When neither has a value, the field is left undefined (research/wait).
 *
 * Edit copy here, every page picks it up. One file = one change = every page.
 */

// ──────────────────────────────────────────────────────────────────────
// 1. COMPANY
// ──────────────────────────────────────────────────────────────────────

export const company = {
  legalName: 'Red Rocks Fire Protection Services',
  shortName: 'Red Rocks Fire Protection',
  acronym: 'RRFPS',
  tagline: 'Your One Vendor Life Safety Solution.',
  positioningStatements: [
    'We are advocates first, protecting our clients through proactive guidance, comprehensive solutions, and reliable service.',
    'One Vendor. Total Life Safety Confidence.',
    'Simplifying Compliance. Protecting What Matters Most.',
    'Your Partner in Life Safety, Not Just Your Vendor.',
  ] as const,
  brandAttributes: [
    'Safety-Driven',
    'Proactive',
    'Dependable',
    'Knowledgeable',
    'Accountable',
    'Relationship-Focused',
    'Responsive',
    'Trustworthy',
  ] as const,
  founded: 2010,
  type: 'Colorado-based, family-owned life safety company',
  serviceRegion: 'Colorado Front Range — Denver Metro primary, Colorado Springs to Fort Collins',
  /** "200+ years of combined experience" — from live site services page. */
  experience: 'Over 200 years of combined experience',
} as const;

// ──────────────────────────────────────────────────────────────────────
// 2. CONTACT
// ──────────────────────────────────────────────────────────────────────

export const contact = {
  phone: '(720) 733-8050',
  phoneHref: 'tel:+17207338050',
  email: 'info@rrfps.com',
  emailHref: 'mailto:info@rrfps.com',
  address: {
    line1: '7076 S. Alton Way, Suite G2',
    city: 'Centennial',
    state: 'CO',
    zip: '80112',
    full: '7076 S. Alton Way, Suite G2, Centennial, CO 80112',
  },
  mapsUrl: 'https://maps.app.goo.gl/6KtPNqsZFRP8iXmn7',
  /** Office reception hours — separate from field service availability. */
  officeHours: 'Mon – Fri: 8:00 AM – 4:00 PM',
  officeClosed: 'Sat & Sun: Closed',
  /** Field service availability — 24/7/365 emergency response. */
  serviceAvailability: '24-hour, 7-days-a-week emergency service',
  /** Brand Strategy §15 Promise 5 — 90-minute response window within Denver Metro. */
  emergencyResponseMetro: '90-minute response window within the Denver Metro area',
  socials: {
    linkedin: 'https://linkedin.com/',
    // X / FB / IG exist on the current site but the brand strategy doesn't
    // surface canonical handles. Leave blank until/unless Brian confirms.
    facebook: '' as const,
    instagram: '' as const,
    x: '' as const,
  },
} as const;

// ──────────────────────────────────────────────────────────────────────
// 3. LEADERSHIP
// ──────────────────────────────────────────────────────────────────────

export const leadership = {
  ceo: {
    name: 'Brian Kakac',
    title: 'CEO & Owner',
    fullTitle: 'CEO & Owner, Red Rocks Fire Protection Services',
  },
  coFounderFather: {
    name: 'John Kakac',
    note: 'Co-founder; passed, but his principles remain at the heart of the company.',
  },
} as const;

// ──────────────────────────────────────────────────────────────────────
// 4. HOMEPAGE — hero + at-a-glance beats + sections
// ──────────────────────────────────────────────────────────────────────

export const home = {
  seo: {
    title: 'Red Rocks Fire Protection Services | One Vendor Life Safety Solutions | Colorado',
    description:
      'Colorado-based, family-owned fire protection since 2010. Inspections, sprinklers, alarms, monitoring, and life-safety compliance — one trusted partner across the Front Range.',
  },
  hero: {
    eyebrow: 'Fire Safety Inspections & Compliance',
    /** H1 with red accent — uses design.md "raise-the-bar" framing. */
    title: 'Raising the Standard in Fire Safety.',
    highlight: 'Standard',
    subtitle:
      'Our team of certified professionals delivers fire inspections, system service, and actionable insights to protect what matters most — across the Colorado Front Range.',
    primaryCta: { label: 'Schedule Our Services', href: '/contact' },
  },
  /** Three-beat row from design.md §7 step 2 — Experience / Compliance / Response. */
  threeBeats: [
    {
      title: 'Experience.',
      body: `${company.experience} with NICET, CSA, and Colorado licensing — standards-driven inspections across every life-safety system.`,
    },
    {
      title: 'Compliance.',
      body: 'NFPA-aligned inspections with detailed written reports. We stay ahead of changing codes, legislation, and jurisdictional requirements — so you don’t have to.',
    },
    {
      title: 'Response.',
      body: `${contact.serviceAvailability} with a ${contact.emergencyResponseMetro}. When it matters most, we show up.`,
    },
  ] as const,
  /** "Why us" beats — adapted from the live site Why-Choose-Us card grid. */
  whyChoose: [
    {
      title: 'Unmatched Experience.',
      body: `${company.experience} with NICET certification, CSA certification, and Colorado licensing — standards-driven inspections every time.`,
    },
    {
      title: 'NFPA Compliance.',
      body: 'Standards-driven, reliable inspections with detailed written reports to keep your properties compliant and your team informed.',
    },
    {
      title: 'Rapid Response and Superior Service.',
      body: '24-hour emergency service with a 90-minute response window within the metro area — fast communication, dependable action.',
    },
    {
      title: 'One Vendor, Total Confidence.',
      body: 'Inspections, sprinklers, alarms, monitoring, backflow, extinguishers, suppression, and consulting — managed by one coordinated team.',
    },
  ] as const,
  aboutBlurb: {
    title: 'Trusted Fire Protection Experts in Colorado.',
    body: 'At Red Rocks Fire Protection, we are dedicated to delivering exceptional fire safety services across Colorado. As your One Vendor Life Safety Solution, we build long-term partnerships, stay ahead of changing fire codes, and carry the responsibility of compliance so you don’t have to. From detailed inspections to the high-quality equipment we install, every part of our work reflects one standard: to protect what matters most.',
    cta: { label: 'Learn More About Us', href: '/about' },
  },
  servicesBlurb: {
    title: 'Discover Our Services.',
    body: 'Our comprehensive range of services ensures that every aspect of your life-safety needs is covered — from installation and maintenance to monitoring and inspections — all from one trusted partner.',
    cta: { label: 'Explore Our Services', href: '/services' },
  },
} as const;

// ──────────────────────────────────────────────────────────────────────
// 5. ABOUT
// ──────────────────────────────────────────────────────────────────────

export const about = {
  seo: {
    title: 'About | Red Rocks Fire Protection',
    description:
      'Family-owned fire protection company established in 2010. 200+ years of combined experience. NICET and CSA certified. Serving Colorado.',
  },
  hero: {
    title: 'Expert Fire Protection Services.',
    highlight: 'Expert',
    body: 'We are Red Rocks Fire Protection, a family-owned fire inspection service company established in 2010. Our team is like a family, and we treat our customers as part of that family. With over 200 years of combined experience, we are dedicated to honesty, trust, and accountability. We are committed to delivering top-quality service at competitive prices, ensuring the safety and peace of mind of both our clients and their property through the highest standards in fire protection services.',
    ctaLabel: 'Schedule Our Services',
    ctaHref: '/contact',
  },
  /** Section §5 of Brand Strategy — positioning narrative. */
  positioningNarrative: {
    eyebrow: 'Who We Are',
    title: 'Our Core Values.',
    body: 'At Red Rocks Fire Protection, delivering exceptional service goes beyond competitive pricing. We are committed to upholding the principles of honesty, trust, and accountability in everything we do — ensuring our clients receive reliable, high-quality fire protection solutions, and a partner who actually shows up.',
    ctaLabel: 'See Our Services',
    ctaHref: '/services',
  },
  /** Brand Strategy §14 — 5 core values. */
  coreValues: [
    {
      title: 'Safety First — Always.',
      body: 'Protecting lives and property is both a responsibility and a privilege. Every system, every service call, every inspection — approached with duty, accountability, and care.',
    },
    {
      title: 'Advocacy for Our Clients.',
      body: 'We stay ahead of evolving fire codes, legislation, and jurisdictional changes. Then we share what we learn — proactively, before they become problems for you.',
    },
    {
      title: 'Go the Extra Mile.',
      body: 'Personal ownership until the job is done right and the customer is informed. Reliability is non-negotiable.',
    },
    {
      title: 'Character.',
      body: 'Integrity, respect, accountability, professionalism — in how we communicate, honor commitments, perform work, and represent RRFPS every day.',
    },
    {
      title: 'One Family.',
      body: 'Team above self. We treat employees, customers, and partners like family — the foundation John and Brian Kakac built from the very beginning.',
    },
  ] as const,
  /** Brand Strategy §13 — Mission. */
  mission:
    'To protect lives and property by delivering proactive, reliable, and fully integrated life safety solutions, while guiding clients through compliance with clarity and accountability.',
  /** Brand Strategy §12 — Vision. */
  vision:
    'To become the most trusted life safety partner in Colorado, recognized for simplifying compliance, protecting communities, and delivering unmatched service.',
  /** Brand Strategy §18 — CEO message; first-person quote form. */
  ceoMessage: {
    greeting: `Hi, I’m Brian Kakac, CEO & Owner of Red Rocks Fire Protection Services.`,
    body: 'Since 2010, we’ve proudly served property owners and managers across Colorado, helping protect what matters most — your employees, your residents, your tenants, your properties, your buildings, and your peace of mind. We live here, we work here, and we’re deeply committed to protecting the communities we serve like they’re our own.\n\nWhen you partner with us, you’re not just hiring a fire protection company — you’re gaining a team that understands the responsibility you carry every day. We built our company around a One Vendor Life Safety Solution: one trusted partner to manage inspections, service, repairs, and compliance.\n\nIf you’re looking for a responsive, experienced partner who shows up when it matters most, we’re ready to earn your business.',
    signOff: 'Sincerely,',
    signName: 'Brian Kakac',
    signTitle: 'CEO & Owner, Red Rocks Fire Protection Services',
  },
  /** Brand Strategy §15 — 7 promises. */
  promises: [
    'We promise to lead with safety. Safety at the center of every decision, every system, every service.',
    'We promise to advocate for our clients. Proactively stay ahead of evolving fire codes, legislation, and compliance.',
    'We promise to do what we say. Honor commitments, communicate clearly, follow through without surprises.',
    'We promise to show up when we say we will. Reliable, responsive, prepared, respectful of your time.',
    `We promise to respond when it matters most. ${contact.serviceAvailability} with a ${contact.emergencyResponseMetro}.`,
    'We promise to communicate clearly and price fairly. Straightforward pricing — no added fees, no minimums, no surprises.',
    'We promise to take ownership and make it right. Full responsibility when challenges arise — open communication, fast action, follow-through until every issue is resolved.',
  ] as const,
  benefits: [
    {
      title: 'Extensive Experience.',
      body: `${company.experience} and credentials like NICET, CSA, and Colorado licensing — we deliver precise, standards-compliant fire protection services.`,
    },
    {
      title: 'Prompt Response.',
      body: `${contact.serviceAvailability} with a ${contact.emergencyResponseMetro} — swift communication and action when you need us most.`,
    },
    {
      title: 'Customer-Centric Approach.',
      body: 'We prioritize our clients’ needs and work diligently to maintain strong, lasting relationships — not transactions.',
    },
    {
      title: 'Comprehensive Services.',
      body: 'From inspections to monitoring, we provide a full range of fire protection services to safeguard your occupants and property.',
    },
  ] as const,
} as const;

// ──────────────────────────────────────────────────────────────────────
// 6. SERVICES
// ──────────────────────────────────────────────────────────────────────

export const services = {
  seo: {
    title: 'Fire Protection Services Denver | Inspections, Sprinklers, Monitoring | RRFPS',
    description:
      'Inspections, fire sprinkler service, fire alarm service, monitoring, backflow prevention, portable extinguishers, kitchen hood suppression, DAS/BDA, area of refuge, and consulting — one vendor across the Colorado Front Range.',
  },
  hero: {
    eyebrow: 'Our Services',
    title: 'Comprehensive Life Safety, One Trusted Partner.',
    body: 'At Red Rocks Fire Protection, our team delivers inspections, service, and monitoring across every life-safety system on your property — managed through one coordinated team, one point of accountability, and one vendor who actually shows up. We provide NFPA-aligned inspections with detailed written reports so your systems are in peak condition and your team always knows what’s next.',
    ctaLabel: 'Book Our Services',
    ctaHref: '/contact',
  },
  /** "One Vendor Life Safety Solution" — the strategic umbrella. */
  oneVendorIntro: {
    title: 'The One Vendor Life Safety Solution.',
    body: 'Most properties manage fire protection across a stack of vendors — alarm company, sprinkler company, extinguisher company, monitoring company, backflow tester, suppression specialist — and no one owns the full picture. RRFPS does. One team, one point of accountability, and proactive advocacy across every life-safety system on your property.',
  },
  /** The catalog (per Brand Strategy §5.2 list + live-site richness). */
  catalog: [
    {
      key: 'inspections',
      title: 'Inspections.',
      summary:
        'Annual NFPA inspections on every life-safety system we touch. Detailed written reports. Correction summaries aligned to jurisdictional requirements.',
      body: 'Regular inspections are vital for compliance and system reliability. By code, fire systems must be tested annually. We thoroughly evaluate and test all components to ensure proper functionality — and we hand you reports your AHJ will accept.',
    },
    {
      key: 'fire-sprinkler',
      title: 'Fire Sprinkler Service & Systems.',
      summary:
        'Wet, dry, antifreeze, preaction, deluge, standpipe, fire pumps, and retrofits — installed, inspected, and maintained.',
      body: 'We offer comprehensive maintenance, servicing, and repair for every fire-suppression system we install. Regular testing of the interface between sprinkler systems and alarm systems is critical to seamless life-safety coverage — and we own that interface.',
      bullets: [
        'Mass Voice Evacuation Systems',
        'Smoke Control Systems',
        'Retrofit and Modifications to Existing Systems',
        'Wet and Dry Pipe Systems',
        'Preaction and Deluge Systems',
        'Standpipe Systems',
        'Antifreeze Systems (including residential)',
        'Fire Pumps',
      ],
    },
    {
      key: 'fire-alarm',
      title: 'Fire Alarm Service & Systems.',
      summary:
        'Install, test, inspect, and monitor fire alarm systems to NFPA 72 — with one accountable vendor.',
      body: 'From panel installation to annual inspection to monitoring handoff, RRFPS owns the fire-alarm lifecycle end-to-end. NICET-certified technicians, jurisdictional coordination, and detailed deficiency reports.',
    },
    {
      key: 'monitoring',
      title: 'Fire Alarm Monitoring Services.',
      summary:
        '24/7/365 central station monitoring for fire alarms, security systems, elevators, and area of refuge.',
      body: 'We deliver 24/7 monitoring for all life-safety systems — including fire alarms, security systems, elevators, and areas of refuge — ensuring constant protection and fast response when signals come in.',
    },
    {
      key: 'backflow',
      title: 'Backflow Prevention Assemblies.',
      summary:
        'On-site testing, certification, and coordination with every water jurisdiction.',
      body: 'Our team provides on-site testing and certification for backflow prevention assemblies. This convenient service streamlines the annual certification process, saving you time and cost. Red Rocks Fire Protection will work with all water jurisdictions to ensure compliance with local regulations.',
    },
    {
      key: 'extinguishers',
      title: 'Portable Fire Extinguishers.',
      summary:
        'Inspection, recharge, mandatory 6-year internal service, 12-year pressure testing.',
      body: 'We service and maintain all types of portable fire extinguishers — including recharging discharged units and performing mandatory 6-year internal servicing and 12-year pressure testing, all to NFPA 10.',
    },
    {
      key: 'das',
      title: 'Distributed Antenna Systems (DAS) / BDA.',
      summary:
        'Bi-directional amplification for in-building radio coverage — code-required for many occupancies.',
      body: 'We design, install, and maintain BDA / DAS systems that meet jurisdictional radio-coverage requirements — keeping first-responder communications reliable inside your building.',
    },
    {
      key: 'security',
      title: 'Security System Installation & Monitoring.',
      summary:
        'Card access, surveillance, intrusion — integrated with your life-safety systems.',
      body: 'A secure building is a safer building. We install and monitor security systems and integrate them with the life-safety systems we manage, reducing vendor count without reducing coverage.',
    },
    {
      key: 'kitchen-hood',
      title: 'Kitchen Hood Suppression Systems.',
      summary:
        'Restaurant and commercial-kitchen fire suppression — designed, inspected, and recharged.',
      body: 'These systems are specifically designed for commercial kitchens, providing rapid suppression in the event of a grease fire. CSA-certified technicians handle design, semi-annual inspection, and recharge on schedule.',
    },
    {
      key: 'area-of-refuge',
      title: 'Area of Refuge Communication Systems.',
      summary:
        'Two-way communication for occupants who cannot use stairs during an emergency.',
      body: 'We install and maintain area-of-refuge communication systems to support safe occupant evacuation in high-rise and assisted-mobility occupancies.',
    },
    {
      key: 'consulting',
      title: 'Consulting Services.',
      summary:
        'Code research, jurisdictional navigation, system design review, compliance roadmap.',
      body: 'Sometimes the most valuable deliverable is advice. Our consulting engagements help property owners and managers navigate complex code questions, plan capital projects, and align stakeholders around the right life-safety roadmap.',
    },
    {
      key: '24-hour',
      title: '24-Hour Service.',
      summary: `${contact.emergencyResponseMetro}.`,
      body: `${contact.serviceAvailability}. When life-safety systems fail, every minute matters — our team is on the other end of the phone and on the road within the ${contact.emergencyResponseMetro}.`,
    },
  ] as const,
  closingBand: {
    title: 'Ensure Your Safety.',
    body: 'Comprehensive fire safety is our priority. Trust us to deliver exceptional service and peace of mind through our unwavering commitment to excellence.',
    ctaLabel: 'Book Our Services',
    ctaHref: '/contact',
  },
} as const;

// ──────────────────────────────────────────────────────────────────────
// 7. CONTACT
// ──────────────────────────────────────────────────────────────────────

export const contactPage = {
  seo: {
    title: 'Contact Red Rocks Fire Protection | (720) 733-8050 | Centennial, CO',
    description:
      'Reach Red Rocks Fire Protection for inspections, service, monitoring, and 24/7 emergency response across the Colorado Front Range. Office in Centennial, CO.',
  },
  hero: {
    title: 'Contact Red Rocks Fire Protection.',
    body: 'Let’s build a safer property together. Reach the team that protects property owners and managers across the Colorado Front Range — for routine inspections, code questions, or 24/7 emergency response.',
  },
  /** Brand Strategy §15 Promise framework — short-form guidance. */
  whatToExpect: [
    'A real person who picks up — not a ticket queue.',
    'A scheduled inspection window that respects your property operations.',
    `A clear, written scope and upfront pricing — no added fees, no minimums, no surprises.`,
    `${contact.emergencyResponseMetro}, when something’s wrong.`,
  ] as const,
  /** Brand Strategy §17 — service-area cities for SEO. */
  serviceAreaCities: [
    'Denver', 'Aurora', 'Lakewood', 'Thornton', 'Westminster', 'Arvada',
    'Centennial', 'Highlands Ranch', 'Lone Tree', 'Parker', 'Castle Rock',
    'Englewood', 'Littleton', 'Greenwood Village', 'Boulder', 'Broomfield',
    'Lafayette', 'Longmont', 'Louisville', 'Fort Collins', 'Greeley',
    'Evergreen', 'Conifer', 'Morrison',
  ] as const,
} as const;

// ──────────────────────────────────────────────────────────────────────
// 8. TESTIMONIALS — Brand Strategy §11 (4 named)
// ──────────────────────────────────────────────────────────────────────

export const testimonials = [
  {
    quote:
      'Consistently, they have proven to be honest, reliable, and professional in every aspect of their work. Their team is dependable, communicates clearly, and follows through on what they promise — something that is especially important when managing life-safety systems across multiple communities. I trust them to do the right thing, not just the easy thing.',
    attribution: { name: 'Brandon Cox', title: 'Director of Maintenance', company: 'Bell Partners, Inc.' },
    headline: 'A Trusted Partner Across Multiple Communities.',
  },
  {
    quote:
      'Red Rocks Fire Protection is my preferred and trusted vendor. Their employees are always professional, responsive in a timely manner, and complete all work with 100% satisfaction. I would highly recommend them for all your needs.',
    attribution: { name: 'Melissa Malley', title: 'Business Manager', company: 'Greystar Residential' },
    headline: 'Preferred and Trusted Vendor.',
  },
  {
    quote:
      'I have had the pleasure of working with your team for years, and you have always offered the highest level of professionalism. I continue to be satisfied by your services and refer you to others in the industry.',
    attribution: { name: 'Jorge Rene Lopez', title: 'Maintenance Supervisor', company: '' },
    headline: 'Consistent Excellence Over Time.',
  },
  {
    quote:
      'Their team takes ownership of their work, communicates clearly, and follows through on commitments — which is critical in both construction and life-safety environments. They approach challenges with a solutions-oriented mindset and always act with integrity, ensuring the job is done right the first time.',
    attribution: { name: 'Alex Martinez', title: 'Senior Construction Manager', company: 'Greystar' },
    headline: 'Accountability and Expertise You Can Rely On.',
  },
] as const;

// ──────────────────────────────────────────────────────────────────────
// 9. CERTIFICATIONS — Brand Strategy §16
// ──────────────────────────────────────────────────────────────────────

export const certifications = {
  companyLicenses: [
    'State Sprinkler Contractor License',
    'State Backflow Contractor License',
    'State Sprinkler Fitters License',
    'Denver Fire Alarm Contractor License',
    'Denver Fire Sprinkler Contractor License',
    'Colorado Springs Fire Alarm Contractor License',
    'Colorado Springs Fire Sprinkler Contractor License',
    'Colorado Fire Extinguisher License',
    'DOT Certified Extinguisher Room',
  ] as const,
  technicianCertifications: [
    'NICET IV — Fire Alarm Installation',
    'NICET III — Water-Based Systems Layout and Design',
    'NICET III — Sprinkler Systems Testing and Inspection',
    'NICET II — Fire Alarm Testing and Inspection',
    'CSA — Fire Alarm Certification',
    'CSA — Fire Sprinkler Certification',
    'CSA — Fire Extinguisher Certification',
    'CSA — Kitchen Hood Suppression Systems Certification',
  ] as const,
  blurb:
    'Red Rocks Fire Protection Services operates in a highly regulated industry where certifications, licensing, and compliance are critical to ensuring the safety, reliability, and performance of life-safety systems. Every team member holds industry-recognized credentials and stays current with evolving codes, regulations, and jurisdictional requirements.',
} as const;

// ──────────────────────────────────────────────────────────────────────
// 10. INDUSTRIES — Brand Strategy §5.5
// ──────────────────────────────────────────────────────────────────────

export const industries = [
  'Multi-Family Management Companies',
  'Commercial Property & Management Companies',
  'Religious Institutions / Churches',
  'Assisted Living Facilities & Healthcare',
  'Education / Universities',
  'Warehouse / Storage / Industrial',
  'HOA Management Companies',
  'Hotels & Hospitality',
  'Retail & Shopping Centers',
  'Restaurants & Food Trucks',
  'Financial Institutions / Banks',
  'Automotive Dealerships & Service Centers',
  'Data Centers',
  'General Contractors',
] as const;

// ──────────────────────────────────────────────────────────────────────
// 11. MULTI-FAMILY MANAGEMENT COMPANIES — content for /multi-family
// ──────────────────────────────────────────────────────────────────────
//
// The Brand Strategy §4 explicitly names multi-family as the #1 anchor
// vertical ("Strengthen and expand leadership within the multi-family
// sector, building on long-standing relationships and proven success"),
// supported by 3 of the 4 testimonials in §11 (two Greystar, one Bell
// Partners). This page is the SEO deep-dive on that vertical —
// differentiated from /inspections by audience (who it serves) rather
// than service (what it covers).
//
// Sub-nav: Industry pages for the remaining 13 verticals are queued but
// not built yet. When those land, they'll appear alongside Multi-Family
// in the "Industries We Serve" dropdown.

export const multiFamilyPage = {
  seo: {
    title:
      'Fire Protection for Multi-Family Management Companies | Red Rocks Fire Protection | Colorado',
    description:
      'Life-safety partner for apartment buildings, townhomes, and student housing across the Denver Front Range. One vendor for inspections, sprinklers, alarms, monitoring, backflow, suppression, and BDA — managed across multiple communities by a single accountable team.',
    h1: 'Multi-Family Management Companies.',
  },
  banner: {
    title: 'Multi-Family.',
    subtitle: 'INDUSTRIES WE SERVE',
    backgroundImage: '/images/red-rocks-fire-protection-multi-family-hero.jpg',
  },
  /** Hero block — SplitPanel-style (about.astro §2 pattern), talking to the
   *  property manager directly and naming the structural reasons multi-family
   *  is its own thing: scale, jurisdictional navigation across cities, and
   *  the volume of deficiency paperwork when inspections fail. */
  hero: {
    eyebrow: 'Who We Serve',
    title: 'Built for Multi-Family Management.',
    body:
      "Managing life-safety across one property is already a job. Across two, ten, or a hundred properties — properties that span multiple cities, multiple AHJs, and multiple inspection cadences — it's an entirely different operating problem. RRFPS was built for that operating problem. We are the One Vendor Life Safety Solution that multi-family management companies across the Denver Front Range rely on to keep residents safe, properties compliant, and portfolio risk contained.",
    ctaLabel: 'See Our Services',
    ctaHref: '/services',
    /** Real multi-family community photo now available —
     *  /public/images/red-rocks-fire-protections-fire-sprinkler-multi-family-units.jpg
     *  replaces the placeholder used while the asset was pending. */
    image: '/images/red-rocks-fire-protections-fire-sprinkler-multi-family-units.jpg',
    imageAlt: 'A wet-pipe fire sprinkler riser and branch lines exposed in a Colorado multi-family building during a routine RRFPS annual inspection.',
  },
  /** Accordion (industry.astro §2 pattern) — frames the 5 most common
   *  challenges a multi-family property manager brings to us. Default-open
   *  first panel so a quick visitor sees real copy on first paint. */
  challenges: {
    eyebrow: 'The Multi-Family Problem',
    title: 'Why Multi-Family Is Its Own Discipline.',
    body:
      "Multi-family isn't just more doors. It's a different cadence, a different paper trail, and a different set of consequences when something slips. The properties that get it right usually have a few things in common — and the ones that don't tend to repeat the same handful of mistakes.",
    intro:
      "Most of the multi-family portfolios we walk into are dealing with at least a few of these. Click each to read what we typically see and how we'd address it.",
    panels: [
      {
        title: 'Multiple Vendors, Multiple Reports, One Portfolio',
        body:
          "When each fire alarm vendor, each sprinkler contractor, and each extinguisher company issues their own report in their own format, the regional manager is the one stitching them together. RRFPS consolidates inspection, service, and monitoring across every system on every property — one report format, one cadence calendar, one email when something needs your attention.",
        open: true,
      },
      {
        title: 'Jurisdictions Change Every Zip Code',
        body:
          "Denver Fire, West Metro Fire, North Metro Fire, Boulder Fire, the City of Lakewood's AHJ — and each one has its own adopted edition of NFPA, its own inspection cadence, its own interpretation of the same code line. RRFPS tracks every jurisdiction we work in across the Front Range and writes every report to match. We don't make you translate.",
        open: false,
      },
      {
        title: 'Deficiency Backlog Compounds Across Years',
        body:
          "One missed test becomes five. Five becomes twenty. Twenty is the inspection that finds a non-compliant building water shutoff valve and a 3-day vacate notice. We own the deficiency list end to end: log every finding across every visit, prioritize by code risk, schedule the close-out work, and document the resolution so AHJs, lenders, and insurance underwriters can see the trail.",
        open: false,
      },
      {
        title: 'Nighttime and Weekend Emergencies',
        body:
          "Sprinkler freeze-ups don't wait for business hours. Neither do elevator entrapments, fire alarm trouble signals, or a dryer-vent fire that needs an extinguisher recharge at 11pm on a Saturday. RRFPS runs 24/7/365 emergency service with a 90-minute response window inside the Denver Metro area — staffed by the same technicians who know your portfolio, not a dispatch call center.",
        open: false,
      },
      {
        title: 'Capital Project Coordination Without the Runaround',
        body:
          "When a kitchen suppression re-certification, a fire pump replacement, and a backflow preventer test all land in the same week — and the rehab contractor, the city inspector, and the water utility all want different things — portfolios stall. We coordinate the calendar against your capital project plan so the inspections happen when the property is ready for them, not the other way around.",
        open: false,
      },
    ],
  },
  /** 3-photo slider (industry.astro §3 pattern) — three columns of
   *  services most relevant to multi-family. Each column reads as a
   *  numbered feature tile with "Read more" to a future per-service page. */
  slider: {
    eyebrow: 'Multi-Family Services',
    title: 'The Work, On Property.',
    panels: [
      {
        number: '01',
        title: 'Walking the Property With You.',
        body: 'Not against you. We pair a NICET III designer or a CSA-certified inspector on every walk-through, run the equipment together, and flag the things your future self will wish you knew today — before they become a finding on someone else\'s report.',
        image: '/images/red-rocks-fire-protection-walk-the-property.jpg',
      },
      {
        number: '02',
        title: 'One Calendar, Not Twelve.',
        body: 'One inspection calendar, one report format, one inbox when something needs you. We consolidate the fire alarm, sprinkler, extinguisher, monitoring, and backflow cadences across every property on your roster — scheduled against leasing hours and resident notice windows so service doesn\'t fight turnover.',
        image: '/images/red-rocks-fire-protection-one-calendar.jpg',
      },
      {
        number: '03',
        title: 'The Call When It Counts.',
        body: 'When the fire marshal walks through at 9am on a Tuesday, when the sprinkler freezes at 11pm on a Saturday, when the deficiency list is forty items long and the lender wants to see it by Friday — one number. The same technician who knows your portfolio. No call center, no ticket queue.',
        image: '/images/red-rocks-fire-protection-the-call-when-it-counts.jpg',
      },
    ],
  },
  /** Bridge block — about.astro SplitPanel pattern with a context line
   *  about why "advocacy" is a multi-family differentiator. */
  advocacy: {
    eyebrow: 'Our Edge',
    title: 'Advocacy Is the Job.',
    body:
      "The word we hear from multi-family clients most often is *advocacy* — not inspection, not service, not compliance. RRFPS stays ahead of NFPA revisions and AHJ interpretations so the regional manager doesn't have to. We share what we know proactively: a code change in your jurisdiction, a deficiency pattern we're seeing across your portfolio, a capital-planning heads-up on a system reaching end-of-life. The point isn't that we know about life-safety codes — anyone can read them. The point is that we tell you about them before they become your problem.",
    image: '/images/red-rocks-fire-protection-advocacy-is-the-job.jpg',
    imageAlt: 'Red Rocks Fire Protection technician reviewing a fire-protection report with a multi-family property manager',
  },
  /** Testimonial block — uses the 4 named testimonials already in site.ts
   *  `testimonials` (all multi-family property-management roles). Rendered
   *  as a 2×2 grid of cards. */
  testimonials: {
    eyebrow: 'Property Managers on RRFPS',
    title: 'What Multi-Family Teams Say.',
  },
  /** Bottom CTA — same DualCTA pattern as about.astro §4. */
  ctaPair: [
    {
      title: 'Schedule a Portfolio Walk-Through.',
      descriptor:
        'Send us your property list — number of buildings, systems, jurisdictions — and we will route the right technician and prepare a per-property inspection plan you can review against your capital calendar.',
      href: '/contact',
      label: 'Get in touch',
    },
    {
      title: 'See All Industries.',
      descriptor:
        "Multi-family is our anchor — but RRFPS serves retail, healthcare, hospitality, HOA, and 10 other industry verticals across the Front Range. See the full list and find yours.",
      href: '/industries-we-serve',
      label: 'Browse industries',
    },
  ],
} as const;

// ──────────────────────────────────────────────────────────────────────
// 12. INSPECTIONS PAGE — content for /inspections
// ──────────────────────────────────────────────────────────────────────

export const inspectionsPage = {
  seo: {
    title: 'Fire Safety Inspections Denver | NFPA Reports | Red Rocks Fire Protection',
    description:
      'Annual NFPA fire safety inspections across Colorado — sprinklers, alarms, extinguishers, backflow, suppression. Detailed written reports. Codes, legislations, and jurisdictional navigation handled.',
  },
  banner: {
    /** Used in the ptbanner (industry.astro §0 — full-bleed background image + 96px title + breadcrumb). */
    title: 'Inspections',
    subtitle: 'FIRE PROTECTION INSPECTIONS',
    /** Use a wide hero image; /images/industry/pt-philosophy.webp is the available candidate from the demo pack. */
    /**
     * New inspection-specific hero image (1344x768), replaces the old
     * `pt-philosophy.webp` placeholder that was reused from industry.astro.
     */
    backgroundImage: '/images/red-rocks-fire-protection-inspection-hero.jpg',
  },
  /** 2×2 ibox grid (industry.astro §1) — 4 inspection categories. */
  categories: [
    {
      title: 'Annual NFPA Inspections.',
      body:
        'By code, fire-protection systems must be inspected annually. We evaluate every component against the current NFPA standard for that system, capture findings in a detailed written report, and hand you a correction summary your AHJ will accept.',
    },
    {
      title: 'Fire Alarm Testing.',
      body:
        'Initiating devices, notification appliances, control panels, secondary power, and supervision — tested to NFPA 72 by NICET-certified technicians. We document every device, every signal, and any deficiency worth correcting.',
    },
    {
      title: 'Sprinkler & Standpipe Testing.',
      body:
        'Wet, dry, antifreeze, preaction, deluge, standpipes, and fire pumps — exercised, flowed, and gauged to NFPA 25. Includes main-drain tests, valve supervision checks, and a prioritized deficiency list.',
    },
    {
      title: 'Special Hazard & Suppression.',
      body:
        'Kitchen hood suppression, clean-agent systems, BDA/DAS radio coverage, area-of-refuge communications, and backflow prevention — each with its own cadence and inspection checklist, all in one report.',
    },
  ] as const,
  /** Hero intro section beneath the ibox grid (mirrors about.astro’s SplitPanel + photo background). */
  intro: {
    eyebrow: 'Why Inspections',
    title: 'Code Compliance, Without the Chaos.',
    body:
      'Most property teams don’t lose sleep over inspections — they lose sleep over fire codes changing underneath them. NFPA editions get revised. Local jurisdictions adopt (or don’t) on their own schedule. AHJ interpretations vary by inspector. And the consequences of a missed test or an undocumented deficiency fall on the property — not the vendor. That’s the gap we close.',
    body2:
      'Every RRFPS inspection is performed by NICET- or CSA-certified technicians, against the **current adopted edition** of the relevant NFPA standard, with reports formatted for the jurisdictions we work in across the Colorado Front Range. We don’t just hand you a passing form — we hand you evidence you can defend in an audit, a lender review, or an insurance claim.',
    bullets: [
      'NFPA-aligned inspection — every test on the right cadence, every finding documented.',
      'Detailed written reports your AHJ, lender, and insurer will accept.',
      'Correction summaries with priorities and timelines — not just a checkbox.',
      'Jurisdictional navigation handled — Denver, Centennial, Lakewood, Boulder, Fort Collins, and the AHJs in between.',
      'Inspections coordinated with service and monitoring so nothing falls through the cracks.',
    ],
  },
  /** Split-panel section added 2026-07-09 — modeled on about.astro's
   *  "Our Core Values" SplitPanel (the second section of that page),
   *  positioned between Why Inspections and the closing DualCTA. The
   *  copy here is INSPECTION-SPECIFIC — not the company-level values —
   *  so it talks about RRFPS's actual end-to-end inspection process. */
  process: {
    eyebrow: 'How We Inspect',
    title: 'Our Inspection Process.',
    body:
      'A real inspection isn’t just a form and a checkbox. RRFPS treats every visit as documentation a property owner can defend — to an AHJ, a lender, an insurance underwriter, or their own internal stakeholders. The shape of that work is consistent across every system we touch.',
    ctaLabel: 'See Service Areas',
    ctaHref: '/service-areas',
    /** Reuse the same placeholder image as about.astro's "Our Core Values"
     *  SplitPanel for now. Swap to an inspection-jobsite photo later. */
    image: '/images/red-rocks-fire-protections-our-inspection-process.jpg',
    imageAlt: 'A Red Rocks Fire Protection technician performing an inspection on site',
  },
  /** Dual CTA at the bottom (about.astro pattern). */
  ctaPair: [
    {
      title: 'Schedule Your Inspection.',
      descriptor:
        'Tell us about your property and we’ll route the right technician — usually within a few business days, faster if it’s urgent.',
      href: '/contact',
      label: 'Get in touch',
    },
    {
      title: 'See the Full Catalog.',
      descriptor:
        'Inspections are the front door to our One Vendor Life Safety Solution — sprinklers, alarms, monitoring, suppression, backflow, and consulting all live under the same roof.',
      href: '/services',
      label: 'Browse services',
    },
  ] as const,
} as const;

// ──────────────────────────────────────────────────────────────────────
// 13. NAV
// ──────────────────────────────────────────────────────────────────────

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/inspections', label: 'Inspections' },
  { href: '/contact', label: 'Contact Us' },
] as const;

export const primaryCTA = { label: 'Schedule Our Services', href: '/contact' } as const;

