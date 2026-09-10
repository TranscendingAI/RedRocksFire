import type { IndustryPageData } from './types';

/**
 * Hotels & Hospitality — copy verbatim from
 * reference/content/rrfps-industries-we-serve-website-content.md §8.
 * Images are placeholders from /public/images until dedicated assets land.
 */
export const hotelsHospitalityPage: IndustryPageData = {
  seo: {
    title:
      'Fire Protection for Hotels & Hospitality | Red Rocks Fire Protection | Colorado',
    description:
      'One Vendor Life Safety Solution for hotels across the Colorado Front Range — inspections, alarms, sprinklers, kitchen hood suppression, Area of Refuge, monitoring, renovation coordination and 24-hour emergency service.',
  },
  banner: {
    title: 'Hotels & Hospitality.',
    subtitle: 'INDUSTRIES WE SERVE',
    backgroundImage: '/images/rrfps-hotel-hospitality.jpg',
  },
  sections: [
    {
      type: 'split',
      eyebrow: 'Who We Serve',
      title: 'Protecting the Guest Experience Starts With Protecting the Property.',
      body: [
        'Hospitality is built around taking care of people. Guests expect a comfortable, welcoming experience, while hotel owners, operators and facility teams work behind the scenes to keep buildings, staff and operations running safely. Fire and life safety is a critical part of that responsibility, but it should not require managing a different vendor for every system in the property.',
        'Red Rocks Fire Protection Services provides hotels and hospitality properties with a One Vendor Life Safety Solution that brings inspections, service, monitoring, repairs, system modifications and emergency response together through one accountable partner.',
      ],
      image: '/images/rrfps-serving-colorado-diverse-industries.jpg',
      imageAlt:
        'RRFPS technician supporting life safety systems for a Colorado hospitality property.',
      background: 'white',
      cta: { label: 'Contact Us', href: '/contact' },
    },
    {
      type: 'accordion',
      eyebrow: 'Hotels & Hospitality',
      title: 'Comprehensive Life Safety Across the Property.',
      intro:
        'RRFPS provides comprehensive inspections for fire alarm systems, fire sprinkler systems, backflow prevention assemblies and portable fire extinguishers. Detailed reporting and deficiency tracking help your team understand what needs attention and maintain organized compliance records.',
      bgImage: '/images/rrfps-centennial-cta-bg.jpg',
      panels: [
        {
          title: 'Alarm and Sprinkler Service',
          body: 'Our technicians service and repair fire alarm components including detectors, pull stations, horns and strobes, control panels, power supplies and monitoring communications. Fire sprinkler support includes leak repairs, sprinkler replacement, valve service, dry system repair, fire pump service, backflow repair and emergency response.',
          open: true,
        },
        {
          title: 'Kitchen Hood Suppression',
          body: 'Hotels with restaurants, banquet kitchens or other commercial cooking operations can rely on RRFPS for kitchen hood suppression system inspections, testing, service and modifications. We verify system components, manual pull stations, gas valve shutoff, appliance shutdown and fire alarm interfaces and provide compliance documentation.',
        },
        {
          title: 'Additional Systems',
          body: 'Our capabilities also include Area of Refuge communication systems, elevator emergency phone monitoring, ERRCS/BDA emergency responder communication systems, security system installation and monitoring, and professional fire alarm monitoring.',
        },
      ],
    },
    {
      type: 'slider',
      eyebrow: 'Hotels & Hospitality',
      title: 'Supporting Renovations Without Losing Sight of Compliance.',
      panels: [
        {
          number: '01',
          title: 'Hotels Evolve.',
          body: 'Guest rooms are renovated, common areas are redesigned, restaurants change equipment and meeting spaces are reconfigured. Those improvements can affect fire alarm, sprinkler and hood suppression systems.',
          image: '/images/rrfps-experience-you-can-trust.jpg',
        },
        {
          number: '02',
          title: 'Coordinated Modifications.',
          body: 'RRFPS works with owners, managers and contractors to identify life safety impacts early and coordinate necessary modifications. Our team can manage design, permitting, installation, programming, testing and final acceptance, helping reduce surprises as projects move toward completion.',
          image: '/images/red-rocks-fire-protection-walk-the-property.jpg',
        },
        {
          number: '03',
          title: 'Predictable Life Safety Planning.',
          body: 'Our consulting services also help hospitality teams evaluate existing systems, review deficiencies and plan future capital expenditures. By identifying aging equipment, upcoming testing requirements and replacement needs, we help clients move from reactive repairs toward more predictable life safety planning.',
          image: '/images/red-rocks-fire-protection-one-calendar.jpg',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Emergency Service',
      title: 'Service That Respects Your Operation.',
      body: [
        'A hotel does not simply close when a life safety problem occurs. RRFPS understands the importance of responding quickly and communicating clearly when occupied properties experience system troubles.',
        'We provide 24-hour emergency service, seven days a week, for alarm failures, sprinkler leaks, fire pump troubles, backflow failures, monitoring outages, hood suppression impairments and other critical issues. Within the Denver Metro area, our Brand Promise includes a 90-minute emergency response window.',
        'When systems are impaired, we can also provide guidance regarding temporary protection, fire watch considerations and coordination with the Authority Having Jurisdiction.',
      ],
      image: '/images/red-rocks-fire-protection-the-call-when-it-counts.jpg',
      imageAlt:
        'RRFPS technician responding to a hotel life safety issue with a 90-minute emergency window.',
      background: 'black',
    },
  ],
  cta: {
    backgroundImage: '/images/rrfps-services-cta-bg.png',
    paragraphs: [
      'Your Guests Are the Priority. We Help Protect What Supports Them.',
      'Red Rocks Fire Protection Services is a local, family-owned Colorado company serving the Front Range since 2010. Our approach is built around safety, advocacy, accountability and long-term relationships.',
      'Hospitality teams already carry the responsibility of caring for guests, employees and property every hour of every day. RRFPS serves as the life safety guide behind that responsibility, helping simplify compliance, coordinate critical systems and respond when it matters most.',
      'You focus on delivering the experience your guests remember. Let Red Rocks Fire Protection Services help protect the people, property and systems that make that experience possible.',
    ],
  },
};