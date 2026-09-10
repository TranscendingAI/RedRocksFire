import type { IndustryPageData } from './types';

/**
 * Education / Universities — copy verbatim from
 * reference/content/rrfps-industries-we-serve-website-content.md §5.
 * Images are placeholders from /public/images until dedicated assets land.
 */
export const educationPage: IndustryPageData = {
  seo: {
    title:
      'Fire Protection for Schools, Colleges & Universities | Red Rocks Fire Protection | Colorado',
    description:
      'One Vendor Life Safety Solution for educational institutions across the Colorado Front Range — inspections, alarms, sprinklers, kitchen hood suppression, Area of Refuge, ERRCS/BDA, monitoring and 24-hour emergency service.',
  },
  banner: {
    title: 'Education.',
    subtitle: 'INDUSTRIES WE SERVE',
    backgroundImage: '/images/rrfps-educational-universities.jpg',
  },
  sections: [
    {
      type: 'split',
      eyebrow: 'Who We Serve',
      title: 'Helping You Protect the Places Where Students Learn, Grow and Gather.',
      body: [
        'Schools, colleges and universities are active environments filled with students, faculty, staff and visitors moving through classrooms, offices, residence areas, gathering spaces, athletic facilities and other buildings. The teams responsible for these properties must manage life safety across diverse facilities while keeping education and campus operations moving.',
        'Red Rocks Fire Protection Services provides educational institutions with comprehensive fire and life safety support through one coordinated partner. Our One Vendor Life Safety Solution helps facility teams simplify inspections, service, repairs, monitoring and compliance while maintaining clear accountability across the systems entrusted to their care.',
      ],
      image: '/images/rrfps-serving-colorado-diverse-industries.jpg',
      imageAlt:
        'RRFPS technician providing life safety support for a Colorado educational campus.',
      background: 'white',
      cta: { label: 'Contact Us', href: '/contact' },
    },
    {
      type: 'accordion',
      eyebrow: 'Education / Universities',
      title: 'Comprehensive Protection Across Educational Facilities.',
      intro:
        'RRFPS provides annual and required periodic inspections for fire alarm systems, fire sprinkler systems, backflow prevention assemblies and portable fire extinguishers. Our inspection process includes detailed reporting, deficiency documentation and recommendations for corrective action, giving facility teams the information they need to prioritize work and maintain compliance records.',
      bgImage: '/images/rrfps-about-warehouse-industrial.jpg',
      panels: [
        {
          title: 'Repairs and System Modifications',
          body: 'When repairs are needed, our technicians service alarm devices, panels, communication equipment, sprinkler piping, valves, fire pumps, backflow preventers and extinguishers. We also provide modifications and replacements when renovations, building expansions, ceiling changes, occupancy changes or aging equipment affect existing systems.',
          open: true,
        },
        {
          title: 'Kitchens and Area of Refuge',
          body: 'Educational facilities with commercial kitchens can rely on RRFPS for kitchen hood suppression inspections, service and modifications. Area of Refuge communication systems can also be inspected, serviced, repaired and upgraded.',
        },
        {
          title: 'ERRCS/BDA and Professional Monitoring',
          body: 'For buildings requiring Emergency Responder Radio Communication Systems, our team provides ERRCS/BDA testing, troubleshooting, repair and system upgrades. Professional monitoring solutions are available for fire alarms, Area of Refuge systems, elevator emergency phones and security systems. Security system installation and monitoring can help protect offices, maintenance facilities, doors, windows and other designated areas.',
        },
      ],
    },
    {
      type: 'slider',
      eyebrow: 'Education / Universities',
      title: 'Planning Ahead Across Buildings and Budgets.',
      panels: [
        {
          number: '01',
          title: 'Not a One-Time Project.',
          body: 'Campus life safety is not a one-time project. Systems require recurring inspections, testing, maintenance and eventual replacement. Without a coordinated plan, those requirements can create unexpected expenses and competing priorities.',
          image: '/images/rrfps-about-company-overview.jpg',
        },
        {
          number: '02',
          title: 'Long-Term Plans and Portfolio Evaluations.',
          body: 'RRFPS consulting services help facility teams evaluate system condition, review deficiencies, coordinate with Authorities Having Jurisdiction and develop long-term plans for repairs and capital improvements. Multi-site facility evaluations can help decision-makers understand needs across a larger property portfolio and prioritize work based on compliance, reliability and system condition.',
          image: '/images/red-rocks-fire-protection-walk-the-property.jpg',
        },
        {
          number: '03',
          title: 'Advocacy for Changing Requirements.',
          body: 'Our advocacy approach is equally important. Fire codes and local requirements change, and jurisdictions may interpret or administer requirements differently. RRFPS stays current so we can help educational clients navigate compliance with greater clarity and fewer surprises.',
          image: '/images/rrfps-promise-to-advocate-for-clients.jpg',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Emergency Service',
      title: 'Support When the Campus Cannot Wait.',
      body: [
        'A sprinkler pipe break, alarm communication failure, fire pump trouble or other impairment can quickly affect operations. RRFPS provides 24-hour emergency service, seven days a week, with a 90-minute response window within the Denver Metro area. We work to restore system functionality quickly and can help clients navigate impairment, fire watch and AHJ coordination requirements when necessary.',
      ],
      image: '/images/red-rocks-fire-protection-the-call-when-it-counts.jpg',
      imageAlt:
        'RRFPS technician responding to a campus life safety emergency across the Colorado Front Range.',
      background: 'black',
    },
  ],
  cta: {
    backgroundImage: '/images/rrfps-services-cta-bg.png',
    paragraphs: [
      'Red Rocks Fire Protection Services is a Colorado-based, family-owned company serving the Front Range since 2010. Our work is guided by safety, advocacy, accountability, character and a commitment to go the extra mile.',
      'Your facility team is responsible for creating safe environments where education can happen every day. RRFPS serves as the guide behind that responsibility, bringing inspections, service, monitoring, consulting and emergency support together through one trusted relationship.',
      'You focus on the students, faculty and communities your institution serves. Let Red Rocks Fire Protection Services help you manage the life safety systems protecting them.',
    ],
  },
};