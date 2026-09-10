import type { IndustryPageData } from './types';

/**
 * Assisted Living Facilities & Healthcare — copy verbatim from
 * reference/content/rrfps-industries-we-serve-website-content.md §4.
 * Images are placeholders from /public/images until dedicated assets land.
 */
export const assistedLivingPage: IndustryPageData = {
  seo: {
    title:
      'Fire Protection for Assisted Living & Healthcare Facilities | Red Rocks Fire Protection | Colorado',
    description:
      'One Vendor Life Safety Solution for healthcare and assisted living facilities across the Colorado Front Range — inspections, alarms, sprinklers, Area of Refuge, ERRCS/BDA, kitchen hood suppression and 24-hour emergency service.',
  },
  banner: {
    title: 'Assisted Living & Healthcare.',
    subtitle: 'INDUSTRIES WE SERVE',
    backgroundImage: '/images/rrfps-assisted-living-facilities.jpg',
  },
  sections: [
    {
      type: 'split',
      eyebrow: 'Who We Serve',
      title: 'Supporting the Life Safety Responsibility Behind Every Day of Care.',
      body: [
        'Healthcare and assisted living environments are built around caring for people. Facility leaders, administrators and property teams carry the additional responsibility of maintaining life safety systems that must remain dependable while daily care and operations continue around them.',
        'Red Rocks Fire Protection Services provides healthcare and assisted living facilities with a coordinated approach to fire protection, compliance and system reliability. Our One Vendor Life Safety Solution helps reduce the complexity of managing multiple systems and vendors while giving your team one accountable partner focused on protecting people and property.',
      ],
      image: '/images/red-rocks-fire-protection-healthcare-assited-living.jpg',
      imageAlt:
        'RRFPS technician inspecting a fire alarm system in a Colorado assisted living facility.',
      background: 'white',
      cta: { label: 'Contact Us', href: '/contact' },
    },
    {
      type: 'accordion',
      eyebrow: 'Assisted Living & Healthcare',
      title: 'Integrated Life Safety Services for Complex Facilities.',
      intro:
        'RRFPS provides comprehensive annual and required periodic inspections for fire alarm systems, fire sprinkler systems, backflow prevention assemblies and portable fire extinguishers. Our technicians document deficiencies, provide detailed reports and recommend corrective action so your team has a clear understanding of system condition and compliance needs.',
      bgImage: '/images/rrfps-county-inspector-client.jpg',
      panels: [
        {
          title: 'Troubleshooting, Service and Repair',
          body: 'Our fire alarm technicians troubleshoot system troubles, communication issues, failed devices, control panels and other components. Fire sprinkler services include leak repairs, valve service, sprinkler replacement, fire pump service, backflow repairs and emergency response. When aging systems or obsolete equipment create reliability concerns, RRFPS can evaluate replacement options and manage upgrades.',
          open: true,
        },
        {
          title: 'Area of Refuge and Emergency Responder Communication',
          body: 'Healthcare and assisted living facilities may also rely on Area of Refuge communication systems to provide a critical communication link for individuals who require assistance during an emergency evacuation. RRFPS provides inspection, testing, service, repair, installation and upgrades for these systems. We also support Emergency Responder Radio Communication Systems and BDA/DAS equipment, helping maintain reliable radio communication for emergency responders inside buildings.',
        },
        {
          title: 'Kitchens, Security and Monitoring',
          body: 'Where facilities include commercial kitchens, our team provides kitchen hood suppression inspections, testing, service and modifications. Security system installation and monitoring, fire alarm monitoring and elevator emergency phone monitoring can also be coordinated through RRFPS.',
        },
      ],
    },
    {
      type: 'slider',
      eyebrow: 'Assisted Living & Healthcare',
      title: 'Compliance Without Losing Sight of Operations.',
      panels: [
        {
          number: '01',
          title: 'Practical Solutions.',
          body: 'Life safety requirements are important, but so is minimizing disruption to the people who live, work and receive care within your facility. RRFPS works to develop practical solutions that meet code requirements while respecting ongoing operations.',
          image: '/images/rrfps-about-total-life-safety.jpg',
        },
        {
          number: '02',
          title: 'Consulting Services.',
          body: 'Our consulting services include code compliance support, life safety evaluations, inspection deficiency reviews, AHJ coordination, system assessments and capital planning. We help clients identify upcoming inspection, testing, maintenance and replacement needs so they can plan proactively rather than respond to unexpected costs or failures.',
          image: '/images/red-rocks-fire-protection-compliance.jpg',
        },
        {
          number: '03',
          title: 'Advocacy at the Center.',
          body: 'Because fire codes, regulations and jurisdictional requirements evolve, RRFPS places advocacy at the center of the client relationship. We stay informed and share that knowledge proactively, helping facility teams understand requirements and prepare for what is ahead.',
          image: '/images/rrfps-advocacy-that-protects-your-investment.jpg',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Emergency Service',
      title: 'Responsive Support Around the Clock.',
      body: [
        'When a critical life safety system becomes impaired, timely action matters. RRFPS provides 24-hour emergency service, seven days a week, for fire alarms, sprinklers, fire pumps, backflow preventers, hood suppression systems, ERRCS/BDA systems, Area of Refuge systems, security systems and monitoring failures. Our Brand Promise includes a 90-minute emergency response window within the Denver Metro area.',
      ],
      image: '/images/why-choose-us-bg.jpg',
      imageAlt: 'RRFPS technician restoring a critical life safety system during an emergency service call.',
      background: 'black',
    },
  ],
  cta: {
    backgroundImage: '/images/rrfps-services-cta-bg.png',
    paragraphs: [
      'Red Rocks Fire Protection Services has served Colorado since 2010 as a local, family-owned life safety company. We believe clients should have a partner who communicates clearly, shows up reliably, takes ownership and remains committed until issues are resolved.',
      'For healthcare and assisted living teams, the people in your care are always the priority. Our role is to help make the life safety responsibility surrounding that care more manageable.',
      'With one coordinated team, comprehensive capabilities and proactive guidance, RRFPS helps you protect your facility with greater clarity and confidence—so your organization can remain focused on the people who depend on you every day.',
    ],
  },
};