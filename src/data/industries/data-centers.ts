import type { IndustryPageData } from './types';

/**
 * Data Centers — copy verbatim from
 * reference/content/rrfps-industries-we-serve-website-content.md §13.
 * Images are placeholders from /public/images until dedicated assets land.
 */
export const dataCentersPage: IndustryPageData = {
  seo: {
    title:
      'Fire Protection for Data Centers | Red Rocks Fire Protection | Colorado',
    description:
      'One Vendor Life Safety Solution for data centers across the Colorado Front Range — wet, dry, preaction and deluge sprinkler systems, Gamewell-FCI alarms, ERRCS/BDA, monitoring, consulting and 24-hour emergency service.',
  },
  banner: {
    title: 'Data Centers.',
    subtitle: 'INDUSTRIES WE SERVE',
    backgroundImage: '/images/rrfps-data-centers.jpg',
  },
  sections: [
    {
      type: 'split',
      eyebrow: 'Who We Serve',
      title: 'Supporting the Life Safety Systems Behind Critical Operations.',
      body: [
        'Data centers depend on reliability. Facility teams are responsible for complex infrastructure, continuous operations and the protection of people and property in environments where system performance matters every day. Fire and life safety must be managed with the same emphasis on preparedness, communication and accountability.',
        'Red Rocks Fire Protection Services provides data center facility teams with coordinated fire and life safety support through one experienced partner. Our One Vendor Life Safety Solution brings inspections, service, system repairs, monitoring, consulting and emergency response together to help simplify compliance and maintain system reliability.',
      ],
      image: '/images/rrfps-data-centers-critical-life-safety-support.jpg',
      imageAlt:
        'RRFPS technician supporting life safety systems for a Colorado data center.',
      background: 'white',
      cta: { label: 'Contact Us', href: '/contact' },
    },
    {
      type: 'accordion',
      eyebrow: 'Data Centers',
      title: 'Fire Protection for Specialized Facilities.',
      intro:
        'RRFPS services a range of fire sprinkler systems, including wet pipe, dry pipe, preaction and deluge systems. Our technicians provide leak repairs, control valve service, waterflow and tamper switch service, dry valve repair, air compressor maintenance, fire pump service, backflow repairs, corrosion mitigation solutions and emergency sprinkler response.',
      bgImage: '/images/rrfps-data-centers-specialized-fire-protection.jpg',
      panels: [
        {
          title: 'Sprinkler Modifications and Replacement',
          body: 'Where system modifications are required, RRFPS can manage sprinkler relocations, branch line installations, system expansions and other code-compliant changes. Aging or damaged systems can also be evaluated for component or full-system replacement.',
          open: true,
        },
        {
          title: 'Fire Alarm Service and Gamewell-FCI Expertise',
          body: 'Fire alarm services include troubleshooting, diagnostics, device replacement, control panel service, power supply replacement, battery testing, monitoring communication repair and system upgrades. RRFPS is also an Authorized Gamewell-FCI Dealer with factory-trained technicians, authorized programming capabilities, access to genuine replacement parts and manufacturer technical support for Gamewell systems.',
        },
        {
          title: 'Professional Monitoring',
          body: 'Professional fire alarm monitoring options include 24/7 central station monitoring, AES radio monitoring, cellular monitoring, dual-path communications and daily signal testing.',
        },
      ],
    },
    {
      type: 'slider',
      eyebrow: 'Data Centers',
      title: 'Emergency Responder Communications and Additional Systems.',
      panels: [
        {
          number: '01',
          title: 'ERRCS/BDA Support.',
          body: 'Reliable emergency responder radio communication inside a building can be a critical life safety requirement. RRFPS provides ERRCS/BDA annual testing, signal verification, battery backup testing, amplifier testing, monitoring verification, troubleshooting, repairs and system upgrades.',
          image: '/images/rrfps-data-centers-errcs-bda-support.jpg',
        },
        {
          number: '02',
          title: 'Certified Testing and Extinguisher Support.',
          body: 'We also provide certified backflow testing and repair, portable fire extinguisher inspection and maintenance, Area of Refuge communication system support and security system installation and monitoring where applicable to the facility.',
          image: '/images/rrfps-data-centers-extinguisher-inspection-support.jpg',
        },
        {
          number: '03',
          title: 'Life Safety System Verification.',
          body: 'Data-center teams depend on reliable verification of the systems protecting critical infrastructure. RRFPS helps confirm that fire protection equipment, monitoring connections and emergency communication components are operating as intended.',
          image: '/images/rrfps-data-centers-life-safety-system-verification.jpg',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Data Centers',
      title: 'Proactive Assessment and Capital Planning.',
      body: [
        'For data center teams, understanding system condition before a failure occurs is essential. RRFPS consulting services include fire alarm and sprinkler system assessments, backflow evaluations, extinguisher compliance reviews, BDA/ERRCS evaluations and other facility assessments.',
        'We can help identify aging infrastructure, recurring trouble conditions, required testing intervals and potential replacement needs and incorporate those findings into long-term capital planning. Our team also assists with fire code reviews, AHJ coordination, compliance planning and corrective-action recommendations.',
        'RRFPS leads with advocacy. We stay current with evolving fire codes, legislation and jurisdictional requirements and help clients understand what those changes mean for their facilities.',
      ],
      image: '/images/rrfps-data-centers-capital-planning-assessment.jpg',
      imageAlt:
        'RRFPS technician assessing data center fire protection systems for capital planning.',
      background: 'light',
    },
    {
      type: 'split',
      eyebrow: 'Emergency Service',
      title: 'Emergency Response When Reliability Is Compromised.',
      body: [
        'Critical life safety failures require a responsive partner. RRFPS provides 24-hour emergency service, seven days a week, for fire alarm troubles, sprinkler failures, fire pump issues, backflow failures, ERRCS/BDA problems and monitoring communication outages. Our Brand Promise includes a 90-minute response window within the Denver Metro area.',
        'When a system is impaired, we can also assist with impairment evaluations, temporary protection planning, fire watch guidance and AHJ coordination.',
      ],
      image: '/images/rrfps-data-centers-emergency-fire-pump-response.jpg',
      imageAlt:
        'RRFPS emergency technician restoring a critical fire pump at a Colorado data center.',
      background: 'black',
    },
  ],
  cta: {
    backgroundImage: '/images/rrfps-services-cta-bg.png',
    paragraphs: [
      'Red Rocks Fire Protection Services has served Colorado since 2010 as a local, family-owned company built around safety, accountability and dependable service.',
      'Your facility team is responsible for critical operations. RRFPS serves as the life safety partner behind that responsibility—providing comprehensive capabilities, clear communication and proactive guidance through one accountable relationship.',
      'When reliability matters, you need more than another vendor. You need a partner committed to protecting the systems, property and people entrusted to your care.',
    ],
  },
};
