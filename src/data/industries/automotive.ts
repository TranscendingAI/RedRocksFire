import type { IndustryPageData } from './types';

/**
 * Automotive Dealerships & Service Centers — copy verbatim from
 * reference/content/rrfps-industries-we-serve-website-content.md §12.
 * Images are placeholders from /public/images until dedicated assets land.
 */
export const automotivePage: IndustryPageData = {
  seo: {
    title:
      'Fire Protection for Automotive Dealerships & Service Centers | Red Rocks Fire Protection | Colorado',
    description:
      'One Vendor Life Safety Solution for automotive dealerships and service centers across the Colorado Front Range — inspections, alarms, sprinklers, extinguishers, security systems, renovation coordination and 24-hour emergency service.',
  },
  banner: {
    title: 'Automotive.',
    subtitle: 'INDUSTRIES WE SERVE',
    backgroundImage: '/images/rrfps-car-dealerships.jpg',
  },
  sections: [
    {
      type: 'split',
      eyebrow: 'Who We Serve',
      title: 'Life Safety Support Built for Busy Automotive Properties.',
      body: [
        'Automotive dealerships and service centers bring multiple operations together under one roof: customer areas, offices, showrooms, service departments, storage areas and facility operations. The teams managing these properties need fire and life safety systems that are maintained reliably without creating unnecessary complexity or disruption.',
        'Red Rocks Fire Protection Services provides automotive facilities with a One Vendor Life Safety Solution designed to coordinate inspections, service, monitoring, repairs, system modifications and emergency response through one accountable partner.',
      ],
      image: '/images/rrfps-automotive-life-safety-facility-support.jpg',
      imageAlt:
        'RRFPS technician supporting life safety systems at a Colorado automotive dealership.',
      background: 'white',
      cta: { label: 'Contact Us', href: '/contact' },
    },
    {
      type: 'accordion',
      eyebrow: 'Automotive',
      title: 'Protecting the Entire Facility.',
      intro:
        'RRFPS provides comprehensive annual and required periodic inspections for fire alarm systems, fire sprinkler systems, backflow prevention assemblies and portable fire extinguishers. Our technicians document deficiencies, provide detailed reports and recommend corrective action so facility teams know what requires attention.',
      bgImage: '/images/rrfps-automotive-facility-life-safety-systems.jpg',
      panels: [
        {
          title: 'Alarm and Sprinkler Services',
          body: 'Fire alarm services include troubleshooting, detector and notification appliance replacement, control panel repair, battery service, monitoring communication repairs and system modifications. Fire sprinkler services include leak repairs, sprinkler head replacement, control valve repairs, dry pipe system service, fire pump service, backflow repairs and emergency response.',
          open: true,
        },
        {
          title: 'Extinguishers and Backflow',
          body: 'Portable extinguishers can be inspected, tagged, maintained, recharged and replaced as needed. Backflow prevention assemblies can be tested, repaired or replaced, with compliance reporting and submission support.',
        },
        {
          title: 'Security and Monitoring',
          body: 'Automotive properties may also benefit from security system installation and monitoring for doors, windows, offices, maintenance areas and other designated spaces. Professional fire alarm monitoring provides 24/7 central station support, and ERRCS/BDA systems can be tested and serviced where emergency responder radio communication coverage is required.',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Automotive',
      title: 'Facility Changes Require Life Safety Coordination.',
      body: [
        'Dealerships and service facilities change over time. Offices are remodeled, walls move, ceilings change and spaces are repurposed. These projects can affect sprinkler coverage, alarm devices and other system components.',
        'RRFPS provides fire alarm and sprinkler modifications for renovations, tenant improvements, occupancy changes and building expansions. Our team can manage design, permitting, installation, programming, testing and final acceptance, working with owners, managers, contractors and local Authorities Having Jurisdiction.',
      ],
      image: '/images/rrfps-automotive-life-safety-renovation-coordination.jpg',
      imageAlt:
        'RRFPS technician coordinating sprinkler modifications during a dealership remodel.',
      background: 'light',
    },
    {
      type: 'slider',
      eyebrow: 'Automotive',
      title: 'Planning for Reliability, Not Just Repairs.',
      panels: [
        {
          number: '01',
          title: 'Evaluate System Condition.',
          body: 'Repeated service calls and aging equipment can be signs that a system needs more than another repair. RRFPS consulting services help facility teams evaluate system condition, review compliance needs and plan future capital expenditures.',
          image: '/images/rrfps-automotive-system-condition-evaluation.jpg',
        },
        {
          number: '02',
          title: 'Practical Recommendations.',
          body: 'We can assess fire alarm systems, sprinkler systems, backflow assemblies, extinguishers and ERRCS/BDA equipment and provide practical recommendations based on reliability, maintenance requirements and future replacement needs.',
          image: '/images/rrfps-automotive-practical-maintenance-recommendations.jpg',
        },
        {
          number: '03',
          title: 'Prepare Rather Than React.',
          body: 'RRFPS also stays ahead of evolving codes and jurisdictional requirements. By sharing that knowledge proactively, we help clients prepare rather than react.',
          image: '/images/rrfps-automotive-proactive-facility-walkthrough.jpg',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Emergency Service',
      title: '24-Hour Emergency Service.',
      body: [
        'A sprinkler break, freeze-damaged pipe, alarm outage or monitoring failure can disrupt an automotive operation quickly. RRFPS provides emergency service 24 hours a day, seven days a week. Within the Denver Metro area, our Brand Promise includes a 90-minute emergency response window.',
        'Our goal is to restore critical systems quickly, communicate clearly and help your team understand the next steps.',
      ],
      image: '/images/rrfps-automotive-emergency-life-safety-response.jpg',
      imageAlt:
        'RRFPS emergency technician restoring a sprinkler system at an automotive service center.',
      background: 'black',
    },
  ],
  cta: {
    backgroundImage: '/images/rrfps-automotive-colorado-service-facility-cta.jpg',
    paragraphs: [
      'Since 2010, Red Rocks Fire Protection Services has served Colorado as a local, family-owned life safety company. Our work is guided by safety, advocacy, accountability and a commitment to go the extra mile.',
      'Your team keeps customers, employees and operations moving. RRFPS helps manage the life safety systems protecting the property behind that work.',
      'With comprehensive capabilities and one point of accountability, we help automotive dealerships and service centers simplify compliance and protect what matters most.',
    ],
  },
};
