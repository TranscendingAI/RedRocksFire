import type { IndustryPageData } from './types';

/**
 * Financial Institutions / Banks — copy verbatim from
 * reference/content/rrfps-industries-we-serve-website-content.md §11.
 * Images are placeholders from /public/images until dedicated assets land.
 */
export const financialPage: IndustryPageData = {
  seo: {
    title:
      'Fire Protection for Banks & Financial Institutions | Red Rocks Fire Protection | Colorado',
    description:
      'One Vendor Life Safety Solution for banks and financial institutions across the Colorado Front Range — inspections, alarms, sprinklers, security systems, monitoring, branch renovation support and 24-hour emergency service.',
  },
  banner: {
    title: 'Financial Institutions.',
    subtitle: 'INDUSTRIES WE SERVE',
    backgroundImage: '/images/rrfps-financial-institutions.jpg',
  },
  sections: [
    {
      type: 'split',
      eyebrow: 'Who We Serve',
      title: 'Protecting People, Property and Operations With a Trusted Life Safety Partner.',
      body: [
        'Financial institutions depend on trust, reliability and consistent operations. The teams responsible for bank branches, offices and related facilities must protect employees, customers and property while managing compliance, security and building systems across one or multiple locations.',
        'Red Rocks Fire Protection Services provides financial institutions with a coordinated approach to fire, life safety and security system support. Our One Vendor Life Safety Solution helps reduce the number of vendors your facility team must manage while providing one accountable partner for inspections, service, monitoring, system modifications and emergency response.',
      ],
      image: '/images/rrfps-financial-institutions.jpg',
      imageAlt:
        'RRFPS technician supporting life safety systems for a Colorado financial institution.',
      background: 'white',
      cta: { label: 'Contact Us', href: '/contact' },
    },
    {
      type: 'accordion',
      eyebrow: 'Financial Institutions / Banks',
      title: 'Comprehensive Fire and Life Safety Services.',
      intro:
        'RRFPS provides annual and required periodic inspections for fire alarm systems, fire sprinkler systems, backflow prevention assemblies and portable fire extinguishers. Detailed reporting, deficiency documentation and corrective-action recommendations help facility teams maintain organized compliance records and address issues efficiently.',
      bgImage: '/images/rrfps-experience-you-can-trust.jpg',
      panels: [
        {
          title: 'Alarm and Sprinkler Service',
          body: 'Our technicians service and repair fire alarm control panels, detectors, pull stations, notification appliances, communication equipment and monitoring systems. Fire sprinkler services include leak repairs, sprinkler replacement, valve service, fire pump service, backflow repair and emergency response. We also provide extinguisher maintenance, recharge and replacement and certified backflow testing and repair.',
          open: true,
        },
        {
          title: 'Monitoring and Security',
          body: 'Professional fire alarm monitoring helps ensure alarm signals are received and transmitted reliably. RRFPS also provides security system installation and 24/7 monitoring, including intrusion alarms, door and window protection, motion detection, cellular communicators, mobile app integration and remote user access.',
        },
        {
          title: 'Elevators and Additional Systems',
          body: 'For facilities with elevators, RRFPS can provide elevator emergency phone monitoring and cellular communication upgrades. Area of Refuge communication systems and ERRCS/BDA emergency responder communication systems can also be supported where present.',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Financial Institutions / Banks',
      title: 'Supporting Renovations, Branch Changes and System Upgrades.',
      body: [
        'Office remodels, tenant improvements, building expansions and occupancy changes can affect existing alarm and sprinkler systems. RRFPS designs and installs code-compliant modifications and manages the process from permitting and installation through testing and final acceptance.',
        'As systems age, recurring trouble conditions, obsolete equipment or discontinued parts can also create reliability concerns. Our team can assess existing systems and recommend repairs, upgrades or replacement based on system condition and long-term performance.',
      ],
      image: '/images/red-rocks-fire-protection-commercial-facilities.jpg',
      imageAlt:
        'RRFPS technician evaluating an aging fire alarm system for a bank branch upgrade.',
      background: 'light',
    },
    {
      type: 'slider',
      eyebrow: 'Financial Institutions / Banks',
      title: 'Proactive Planning and Compliance Guidance.',
      panels: [
        {
          number: '01',
          title: 'See Expenses Coming.',
          body: 'Life safety expenses are easier to manage when facility teams can see them coming. RRFPS consulting services help clients evaluate systems, review deficiencies and plan for upcoming inspection, testing, maintenance and replacement requirements.',
          image: '/images/red-rocks-fire-protection-compliance.jpg',
        },
        {
          number: '02',
          title: 'Advocacy for Evolving Codes.',
          body: 'Our advocacy approach also helps financial institutions navigate evolving fire codes, legislation and jurisdictional requirements. We stay informed, communicate clearly and help clients understand how requirements affect their facilities. For organizations with multiple locations, this coordinated approach can create greater consistency across the portfolio.',
          image: '/images/rrfps-advocacy-that-protects-your-investment.jpg',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Emergency Service',
      title: 'Dependable Response When Systems Fail.',
      body: [
        'A fire alarm outage, sprinkler leak, backflow failure or monitoring communication problem can create an immediate operational concern. RRFPS provides 24-hour emergency service, seven days a week, with a 90-minute response window within the Denver Metro area.',
        'Our technicians work to restore system functionality and help clients manage impairment requirements when necessary.',
      ],
      image: '/images/why-choose-us-bg.jpg',
      imageAlt:
        'RRFPS emergency technician restoring a fire alarm system at a Colorado bank branch.',
      background: 'black',
    },
  ],
  cta: {
    backgroundImage: '/images/rrfps-services-cta-bg.png',
    paragraphs: [
      'Red Rocks Fire Protection Services is a Colorado-based, family-owned company serving the Front Range since 2010. Trust is central to our brand and is earned through consistency, accountability and follow-through.',
      'Financial institutions expect their partners to communicate clearly, protect sensitive operations and do what they say they will do. Those expectations align directly with how RRFPS operates.',
      'Your organization is responsible for the people, property and operations entrusted to it. RRFPS provides the life safety expertise, coordinated service and proactive guidance to help you carry that responsibility with greater confidence.',
    ],
  },
};