import type { IndustryPageData } from './types';

/**
 * Warehouse / Storage / Industrial — copy verbatim from
 * reference/content/rrfps-industries-we-serve-website-content.md §6.
 * Images are placeholders from /public/images until dedicated assets land.
 */
export const warehouseIndustrialPage: IndustryPageData = {
  seo: {
    title:
      'Fire Protection for Warehouse, Storage & Industrial Facilities | Red Rocks Fire Protection | Colorado',
    description:
      'One Vendor Life Safety Solution for warehouse and industrial facilities across the Colorado Front Range — wet, dry, preaction and deluge sprinkler systems, fire pumps, alarms, backflow, ERRCS/BDA and 24-hour emergency service.',
  },
  banner: {
    title: 'Warehouse & Industrial.',
    subtitle: 'INDUSTRIES WE SERVE',
    backgroundImage: '/images/rrfps-about-warehouse-industrial.jpg',
  },
  sections: [
    {
      type: 'split',
      eyebrow: 'Who We Serve',
      title: 'Reliable Life Safety Support for Facilities That Keep Business Moving.',
      body: [
        'Warehouse, storage and industrial facilities are built around operations. Inventory, equipment, employees, production schedules and customer commitments depend on buildings that function reliably. The teams responsible for these properties also carry the responsibility of maintaining fire and life safety systems across environments that may change as storage configurations, equipment, occupancies or facility layouts evolve.',
        'Red Rocks Fire Protection Services helps warehouse and industrial clients manage that responsibility through a One Vendor Life Safety Solution. Our team brings inspections, system service, monitoring, repairs, modifications, consulting and emergency response together under one coordinated relationship.',
      ],
      image: '/images/rrfps-warehouse-industrial-life-safety-support.jpg',
      imageAlt:
        'RRFPS technician servicing fire sprinkler systems in a Colorado warehouse facility.',
      background: 'white',
      cta: { label: 'Contact Us', href: '/contact' },
    },
    {
      type: 'accordion',
      eyebrow: 'Warehouse / Storage / Industrial',
      title: 'Fire Protection That Adapts With Your Facility.',
      intro:
        'Fire sprinkler systems are a major component of many warehouse and industrial life safety programs. RRFPS provides service for wet pipe, dry pipe, preaction and deluge systems, along with fire pumps, control valves, backflow preventers and related components. Our technicians repair leaks, replace sprinkler heads, service dry valves and air compressors, address corrosion concerns and respond to emergency system failures.',
      bgImage: '/images/rrfps-warehouse-industrial-sprinkler-systems.jpg',
      panels: [
        {
          title: 'Modifications for Changing Environments',
          body: 'Storage configuration changes, new walls, ceiling changes, tenant improvements and occupancy changes can affect sprinkler coverage and system requirements. RRFPS can design and install code-compliant modifications, including sprinkler relocations, new branch lines and system expansions, while managing permitting, testing and final acceptance.',
          open: true,
        },
        {
          title: 'Alarms, Extinguishers, Backflow and Security',
          body: 'We also provide fire alarm inspection, service, modifications and replacement; portable fire extinguisher inspection and maintenance; certified backflow testing and repair; fire alarm monitoring; and security system installation and monitoring.',
        },
        {
          title: 'ERRCS/BDA Support',
          body: 'For facilities requiring reliable emergency responder radio coverage, RRFPS provides ERRCS/BDA testing, service, repairs and upgrades. Our technicians can evaluate failed annual testing, communication dead zones, aging infrastructure and other system concerns and recommend appropriate corrective action.',
        },
      ],
    },
    {
      type: 'slider',
      eyebrow: 'Warehouse / Storage / Industrial',
      title: 'From Inspection Reports to Long-Term Planning.',
      panels: [
        {
          number: '01',
          title: 'Reporting You Can Act On.',
          body: 'Routine inspections are only useful when facility teams can act on the information they receive. RRFPS provides detailed reporting, deficiency documentation and repair recommendations designed to help clients understand system condition and compliance needs.',
          image: '/images/rrfps-warehouse-industrial-inspection-report-guidance.jpg',
        },
        {
          number: '02',
          title: 'Consulting Services.',
          body: 'Our consulting services take that support further. We can evaluate existing fire alarm, sprinkler, backflow, extinguisher, BDA/ERRCS and communication systems; assist with fire code reviews and AHJ coordination; and help develop capital plans for upcoming testing, maintenance and replacement requirements.',
          image: '/images/rrfps-warehouse-industrial-life-safety-consulting.jpg',
        },
        {
          number: '03',
          title: 'Identify Issues Earlier.',
          body: 'This proactive approach is especially valuable in operational environments where an unexpected system failure or unplanned project can create significant disruption. Our goal is to help clients identify issues earlier and make informed decisions before those issues become emergencies.',
          image: '/images/rrfps-warehouse-industrial-proactive-planning.jpg',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Emergency Service',
      title: '24-Hour Support for Critical System Failures.',
      body: [
        'Life safety failures do not follow production schedules. RRFPS provides 24-hour emergency service, seven days a week, for sprinkler breaks, freeze damage, dry system failures, fire pump troubles, alarm outages, backflow failures, monitoring problems and other critical impairments. Within the Denver Metro area, our Brand Promise includes a 90-minute emergency response window.',
        'When systems are impaired, we can also assist with impairment evaluations, repair recommendations, fire watch guidance, temporary protection planning and AHJ coordination.',
      ],
      image: '/images/rrfps-warehouse-industrial-fire-pump-response.jpg',
      imageAlt:
        'RRFPS technician servicing an industrial fire pump during an emergency response call.',
      background: 'black',
    },
  ],
  cta: {
    backgroundImage: '/images/rrfps-warehouse-industrial-fire-protection-cta.jpg',
    paragraphs: [
      'One Vendor. Greater Accountability.',
      'Since 2010, Red Rocks Fire Protection Services has served Colorado as a local, family-owned life safety company built on safety, integrity, accountability and dependable service.',
      'Warehouse and industrial teams need partners who understand that compliance cannot be separated from operations. We communicate clearly, show up prepared, provide straightforward pricing and take ownership of the work entrusted to us.',
      'Your team keeps the operation moving. RRFPS helps ensure the life safety systems behind that operation are inspected, maintained and supported with the same sense of responsibility.',
    ],
  },
};
