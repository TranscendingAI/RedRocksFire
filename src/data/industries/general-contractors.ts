import type { IndustryPageData } from './types';

/**
 * General Contractors — copy verbatim from
 * reference/content/rrfps-industries-we-serve-website-content.md §14.
 * Images are placeholders from /public/images until dedicated assets land.
 */
export const generalContractorsPage: IndustryPageData = {
  seo: {
    title:
      'Fire Sprinkler & Fire Alarm Support for General Contractors | Red Rocks Fire Protection | Colorado',
    description:
      'Life safety partner for general contractors across the Colorado Front Range — fire sprinkler modifications, fire alarm upgrades, Gamewell-FCI expertise, design review, permitting, AHJ coordination and 24-hour emergency service.',
  },
  banner: {
    title: 'General Contractors.',
    subtitle: 'INDUSTRIES WE SERVE',
    backgroundImage: '/images/rrfps-general-contractors.jpg',
  },
  sections: [
    {
      type: 'split',
      eyebrow: 'Who We Serve',
      title: 'A Life Safety Partner That Helps Keep Your Project Moving.',
      body: [
        'General contractors are responsible for coordinating people, schedules, trades, inspections and project requirements while keeping work moving toward completion. Fire and life safety systems can affect multiple phases of a project, and missed requirements or late coordination can create costly delays.',
        'Red Rocks Fire Protection Services works with general contractors as a knowledgeable, solutions-oriented life safety partner. Our team supports renovations, tenant improvements, building expansions and other projects with fire sprinkler, fire alarm and related life safety expertise from early planning through testing and final acceptance.',
      ],
      image: '/images/rrfps-general-contractors-life-safety-coordination.jpg',
      imageAlt:
        'RRFPS technician supporting life safety coordination on a Colorado construction project.',
      background: 'white',
      cta: { label: 'Contact Us', href: '/contact' },
    },
    {
      type: 'accordion',
      eyebrow: 'General Contractors',
      title: 'Fire Sprinkler Modifications and System Work.',
      intro:
        'Building renovations and space reconfigurations frequently affect existing sprinkler systems. New walls, removed walls, ceiling height changes, occupancy changes and revised storage configurations can require sprinkler relocations, new branch lines or expanded coverage.',
      bgImage: '/images/rrfps-general-contractors-sprinkler-modifications.jpg',
      panels: [
        {
          title: 'Design, Installation and Acceptance',
          body: 'RRFPS designs and installs code-compliant fire sprinkler modifications and manages permitting, installation, testing and final acceptance. We also service wet pipe, dry pipe, preaction and deluge systems and can replace aging or damaged piping, valves, pumps, backflow preventers and other components when project conditions require more extensive work.',
          open: true,
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'General Contractors',
      title: 'Fire Alarm Modifications and Upgrades.',
      body: [
        'Tenant finish projects, office remodels and building expansions can also require changes to fire alarm systems. RRFPS provides device relocations, additional smoke detectors and notification appliances, pull stations, duct detectors, monitoring points, elevator recall modifications and code compliance upgrades.',
        'Our team manages design, permitting, installation, programming, testing and final acceptance and works with owners, management companies, contractors and local Authorities Having Jurisdiction to help ensure project requirements are addressed.',
        'RRFPS is also an Authorized Gamewell-FCI Dealer, providing factory-trained technicians, authorized programming capabilities, manufacturer technical support and access to genuine replacement parts for Gamewell systems.',
      ],
      image: '/images/rrfps-general-contractors-fire-alarm-upgrades.jpg',
      imageAlt:
        'RRFPS technician programming a fire alarm panel during a tenant improvement project.',
      background: 'light',
    },
    {
      type: 'split',
      eyebrow: 'General Contractors',
      title: 'Additional Life Safety Coordination.',
      body: [
        'Depending on project scope, RRFPS can also support portable fire extinguisher installation, backflow prevention assemblies, ERRCS/BDA systems, Area of Refuge communication systems, kitchen hood suppression modifications, security system installation and monitoring integration.',
        'Kitchen remodels and tenant improvements involving commercial cooking equipment may require changes to hood suppression nozzles, detection lines, gas valves, appliance shutdowns or fire alarm interfaces. RRFPS can coordinate those modifications and testing.',
      ],
      image: '/images/rrfps-general-contractors-additional-life-safety-coordination.jpg',
      imageAlt:
        'RRFPS technician coordinating sprinkler and suppression work on a construction project.',
      background: 'white',
    },
    {
      type: 'slider',
      eyebrow: 'General Contractors',
      title: 'Consulting Before Problems Reach the Field.',
      panels: [
        {
          number: '01',
          title: 'Identify Impacts Early.',
          body: 'One of the best opportunities to avoid project surprises is to identify life safety impacts early. RRFPS consulting services include design review support, scope development, existing system evaluations, fire protection impact assessments, permit and AHJ coordination, budget development and project planning assistance.',
          image: '/images/rrfps-general-contractors-early-design-impact-review.jpg',
        },
        {
          number: '02',
          title: 'Advocacy for Practical Solutions.',
          body: 'Our team stays current with evolving fire codes and jurisdictional requirements and serves as an advocate for practical, compliant solutions. That knowledge can help contractors and owners understand requirements earlier and reduce avoidable rework or delays.',
          image: '/images/rrfps-general-contractors-practical-code-solutions.jpg',
        },
        {
          number: '03',
          title: 'Field-Ready Coordination.',
          body: 'Reviewing plans alongside existing conditions helps turn life safety requirements into practical field work. RRFPS coordinates with the project team to keep sprinkler and alarm details aligned before installation and inspection milestones arrive.',
          image: '/images/rrfps-general-contractors-field-coordination-review.jpg',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'General Contractors',
      title: 'Accountability Matters on Every Project.',
      body: [
        'The RRFPS approach aligns naturally with the needs of general contractors: communicate clearly, honor commitments, show up prepared and take ownership of the outcome.',
        'As one construction manager described the RRFPS team, they take ownership of their work, communicate clearly, follow through on commitments and approach challenges with a solutions-oriented mindset. Those qualities are critical in both construction and life safety environments.',
        'RRFPS also provides 24-hour emergency service when existing systems are unexpectedly impaired during a project, helping clients address alarm, sprinkler, backflow, monitoring and other critical system issues.',
      ],
      image: '/images/rrfps-general-contractors-project-accountability.jpg',
      imageAlt:
        'RRFPS technician taking ownership of life safety work on a construction site.',
      background: 'black',
    },
  ],
  cta: {
    backgroundImage: '/images/rrfps-general-contractors-fire-protection-cta.jpg',
    paragraphs: [
      'Red Rocks Fire Protection Services is a Colorado-based, family-owned life safety company serving the Front Range since 2010. Our goal is to make fire and life safety coordination easier for the people responsible for delivering the project.',
      'You are managing the schedule, the trades and the outcome. Let RRFPS be the life safety partner that helps you anticipate requirements, solve problems and get the work completed correctly.',
      'From design and permitting through installation, testing and final acceptance, we bring the capability, advocacy and accountability your project deserves.',
    ],
  },
};
