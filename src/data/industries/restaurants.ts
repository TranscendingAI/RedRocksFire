import type { IndustryPageData } from './types';

/**
 * Restaurants & Food Trucks — copy verbatim from
 * reference/content/rrfps-industries-we-serve-website-content.md §10.
 *
 * Note: the MD's "More Than Hood Suppression" section contains an editorial
 * meta-paragraph about food-truck source material (flagged to Zack and
 * excluded per his approval); the remaining copy stands on its own.
 * Images are placeholders from /public/images until dedicated assets land.
 */
export const restaurantsPage: IndustryPageData = {
  seo: {
    title:
      'Fire Protection for Restaurants & Food Trucks | Red Rocks Fire Protection | Colorado',
    description:
      'One Vendor Life Safety Solution for restaurants and food-service operations across the Colorado Front Range — kitchen hood suppression, fire alarms, sprinklers, extinguishers, monitoring and 24-hour emergency service.',
  },
  banner: {
    title: 'Restaurants & Food Trucks.',
    subtitle: 'INDUSTRIES WE SERVE',
    backgroundImage: '/images/rrfps-restaurants-food-trucks.jpg',
  },
  sections: [
    {
      type: 'split',
      eyebrow: 'Who We Serve',
      title: 'Protecting the People, Kitchens and Operations Behind Every Service.',
      body: [
        'Restaurant and food-service operators work in fast-moving environments where employees, customers, cooking equipment and daily operations all depend on systems working as they should. Fire and life safety protection is part of that responsibility, especially where commercial cooking equipment and suppression systems are involved.',
        'Red Rocks Fire Protection Services helps restaurants and food-service operations manage those requirements through one coordinated life safety partner. Our team provides kitchen hood suppression support along with fire alarms, sprinklers, extinguishers, monitoring, inspections and emergency service, helping operators reduce vendor complexity and maintain confidence in the systems protecting their business.',
      ],
      image: '/images/rrfps-restaurants-food-trucks.jpg',
      imageAlt:
        'RRFPS technician servicing a kitchen hood suppression system in a Colorado restaurant.',
      background: 'white',
      cta: { label: 'Contact Us', href: '/contact' },
    },
    {
      type: 'accordion',
      eyebrow: 'Restaurants & Food Trucks',
      title: 'Kitchen Hood Suppression System Expertise.',
      intro:
        'Commercial kitchen fire suppression systems are designed to automatically detect and suppress cooking-related fires before they spread. RRFPS provides professional semi-annual kitchen hood suppression inspections and testing, including functional testing of system components, fusible link inspection and replacement, manual pull station testing, gas valve shutoff verification, appliance shutdown testing and fire alarm interface testing.',
      bgImage: '/images/istock-479.jpg',
      panels: [
        {
          title: 'Service and Repair',
          body: 'When deficiencies are identified, our technicians provide service and repair for major kitchen hood suppression system manufacturers. Services include fusible link replacement, detection line repairs, nozzle replacement and cleaning, mechanical component repairs, manual pull station replacement, gas valve repairs, appliance shutdown repairs and fire alarm interface repairs.',
          open: true,
        },
        {
          title: 'Modifications for Evolving Kitchens',
          body: 'Restaurants evolve, and cooking equipment often changes with them. Appliance additions, removals, kitchen remodels, hood alterations and equipment reconfigurations may require suppression system modifications. RRFPS can coordinate design, permitting when required, installation, testing and final acceptance to help keep the kitchen protected and compliant.',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Restaurants & Food Trucks',
      title: 'More Than Hood Suppression.',
      body: [
        "A restaurant's life safety program extends beyond the kitchen hood. RRFPS provides portable fire extinguisher inspections, maintenance, recharge and replacement, including Class K kitchen extinguishers. We also provide fire alarm inspections, service, modifications and monitoring; fire sprinkler service and repairs; and backflow testing, repair and replacement.",
        'For restaurant facilities requiring additional systems, RRFPS can also support security system installation and monitoring and other applicable life safety communications.',
      ],
      image: '/images/red-rocks-fire-protection-commercial-inspections.jpg',
      imageAlt:
        'RRFPS technician inspecting a portable fire extinguisher in a commercial kitchen.',
      background: 'light',
    },
    {
      type: 'split',
      eyebrow: 'Restaurants & Food Trucks',
      title: 'Keeping Compliance From Becoming a Disruption.',
      body: [
        'RRFPS does more than identify deficiencies. Our team provides clear reporting, corrective-action recommendations and code compliance support so operators can understand what needs to happen next.',
        'We stay current with evolving fire codes and jurisdictional requirements and serve as an advocate for our clients. When equipment changes or a project raises questions, our consulting capabilities can help clarify system impacts, coordinate with Authorities Having Jurisdiction and develop practical solutions.',
      ],
      image: '/images/red-rocks-fire-protection-compliance.jpg',
      imageAlt:
        'RRFPS technician reviewing compliance documentation with a restaurant operator.',
      background: 'white',
    },
    {
      type: 'split',
      eyebrow: 'Emergency Service',
      title: 'Responsive When Every Hour Matters.',
      body: [
        'An impaired suppression system, fire alarm trouble or sprinkler issue can affect restaurant operations immediately. RRFPS provides 24-hour emergency service, seven days a week, with a 90-minute response window within the Denver Metro area. Our goal is to diagnose problems, restore protection and communicate clearly so operators can make informed decisions.',
      ],
      image: '/images/red-rocks-fire-protection-the-call-when-it-counts.jpg',
      imageAlt:
        'RRFPS technician responding to a restaurant kitchen suppression emergency.',
      background: 'black',
    },
  ],
  cta: {
    backgroundImage: '/images/rrfps-services-cta-bg.png',
    paragraphs: [
      'Red Rocks Fire Protection Services has served Colorado since 2010 as a local, family-owned life safety company. We believe our clients deserve reliable service, straightforward pricing, clear communication and a partner who takes ownership until the issue is resolved.',
      'Your team is focused on serving customers and running the operation. RRFPS helps protect the people, property and critical life safety systems behind it.',
      'From routine inspections to kitchen modifications and emergency response, let Red Rocks Fire Protection Services be Your One Vendor Life Safety Solution.',
    ],
  },
};