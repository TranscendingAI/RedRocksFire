import type { IndustryPageData } from './types';

/**
 * Religious Institutions / Churches — copy verbatim from
 * reference/content/rrfps-industries-we-serve-website-content.md §3.
 * Images are placeholders from /public/images until dedicated assets land.
 */
export const religiousInstitutionsPage: IndustryPageData = {
  seo: {
    title:
      'Fire Protection for Churches & Religious Institutions | Red Rocks Fire Protection | Colorado',
    description:
      'One Vendor Life Safety Solution for churches and religious institutions across the Colorado Front Range — inspections, sprinklers, alarms, kitchen hood suppression, security systems and 24-hour emergency service.',
  },
  banner: {
    title: 'Religious Institutions.',
    subtitle: 'INDUSTRIES WE SERVE',
    backgroundImage: '/images/rrfps-mega-church.jpg',
  },
  sections: [
    {
      type: 'split',
      eyebrow: 'Who We Serve',
      title: 'Protecting the People and Places at the Heart of Your Community.',
      body: [
        'Churches and religious institutions are more than buildings. They are places where people gather, worship, learn, celebrate, volunteer and support one another. The people responsible for these facilities carry an important responsibility: maintaining a welcoming environment while also protecting congregants, staff, children, visitors and property.',
        'Red Rocks Fire Protection Services helps religious institutions manage fire and life safety with clarity, reliability and a coordinated approach. Our One Vendor Life Safety Solution brings multiple systems and services under one experienced team, helping facility leaders spend less time coordinating vendors and more time serving their communities.',
      ],
      image: '/images/rrfps-religious-institutions.jpg',
      imageAlt: 'RRFPS technician inspecting life safety systems at a Colorado church facility.',
      background: 'white',
      cta: { label: 'Contact Us', href: '/contact' },
    },
    {
      type: 'accordion',
      eyebrow: 'Religious Institutions',
      title: 'Life Safety Support for the Entire Facility.',
      intro:
        'Fire protection systems require routine inspection, testing and maintenance to remain ready when needed. RRFPS provides comprehensive inspections for fire alarm systems, fire sprinkler systems, backflow prevention assemblies and portable fire extinguishers. Our technicians provide detailed reporting, document deficiencies and recommend corrective action so facility leaders can clearly understand what needs attention.',
      bgImage: '/images/the-red-rocks-of-the-canyon.jpg',
      panels: [
        {
          title: 'Service, Repair, Modification and Replacement',
          body: 'We also provide service, repair, modification and replacement for fire alarm and sprinkler systems. Changes to classrooms, offices, gathering spaces or other areas may require adjustments to sprinkler coverage or alarm devices. Our team can manage required modifications, including design, permitting, installation, testing and final acceptance.',
          open: true,
        },
        {
          title: 'Kitchens and Community Gathering Spaces',
          body: 'Many religious facilities include kitchens or food-service areas used for events and community gatherings. Where commercial kitchen hood suppression systems are present, RRFPS provides semi-annual inspections, testing, service, repairs and modifications. We also provide security system installation and 24/7 monitoring solutions for offices, doors, windows and other areas where additional property protection is needed.',
        },
        {
          title: 'Additional Communication Systems',
          body: 'For facilities with Area of Refuge communication systems, emergency responder radio communication systems or elevator emergency phones, RRFPS can provide inspection, testing, service and monitoring support as applicable.',
        },
      ],
    },
    {
      type: 'slider',
      eyebrow: 'Religious Institutions',
      title: 'Helping You Stay Ahead of Compliance.',
      panels: [
        {
          number: '01',
          title: 'RRFPS Serves as the Guide.',
          body: 'Facility leaders and volunteers may not work with fire codes every day, but they are still responsible for maintaining compliant systems. RRFPS serves as the guide.',
          image: '/images/rrfps-promise-to-advocate-for-clients.jpg',
        },
        {
          number: '02',
          title: 'Current With Evolving Requirements.',
          body: 'Our team stays current with evolving codes, legislation and jurisdictional requirements and helps clients understand what those requirements mean for their properties. We can assist with deficiency reviews, life safety evaluations, AHJ coordination, system assessments and planning for future repairs or replacements.',
          image: '/images/rrfps-why-clients-continue-to-choose-rrfps.jpg',
        },
        {
          number: '03',
          title: 'Planning for Careful Budgets.',
          body: 'This proactive approach is especially valuable when budgets must be planned carefully. Our consulting services can help identify upcoming testing, maintenance and replacement needs so leadership teams can prioritize projects and reduce unexpected life safety expenditures.',
          image: '/images/rrfps-experience-you-can-trust.jpg',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Emergency Service',
      title: 'Dependable Help When It Matters.',
      body: [
        'Life safety problems do not always occur during office hours. RRFPS provides 24-hour emergency service, seven days a week, for issues such as alarm troubles, sprinkler leaks, freeze damage, backflow failures and monitoring communication outages. Within the Denver Metro area, our Brand Promise includes a 90-minute emergency response window.',
      ],
      image: '/images/rrfps-truck.png',
      imageAlt: 'RRFPS emergency response vehicle ready for 24-hour life safety service calls.',
      background: 'black',
    },
  ],
  cta: {
    backgroundImage: '/images/rrfps-services-cta-bg.png',
    paragraphs: [
      'Red Rocks Fire Protection Services is a Colorado-based, family-owned company serving the Front Range since 2010. The company was built on values of integrity, hard work, accountability, family and taking care of people. Those principles remain central to how we serve every client.',
      'We believe your congregation and community should be the focus of your work, not the complexity of coordinating life safety vendors. With one point of contact, comprehensive capabilities, clear communication and a team committed to doing what it says, RRFPS helps make life safety easier to manage.',
      'You care for your community. Let Red Rocks Fire Protection Services help you protect the place where that community comes together.',
    ],
  },
};