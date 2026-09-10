import type { IndustryPageData } from './types';

/**
 * HOA Management Companies — copy verbatim from
 * reference/content/rrfps-industries-we-serve-website-content.md §7.
 * Images are placeholders from /public/images until dedicated assets land.
 */
export const hoaManagementPage: IndustryPageData = {
  seo: {
    title:
      'Fire Protection for HOA Management Companies | Red Rocks Fire Protection | Colorado',
    description:
      'One Vendor Life Safety Solution for HOA management companies across the Colorado Front Range — inspections, alarms, sprinklers, security systems, common-area modifications and 24-hour emergency service.',
  },
  banner: {
    title: 'HOA Management.',
    subtitle: 'INDUSTRIES WE SERVE',
    backgroundImage: '/images/rrfps-hoa-management-companies.jpg',
  },
  sections: [
    {
      type: 'split',
      eyebrow: 'Who We Serve',
      title: 'Helping HOA Management Teams Protect Communities With Less Complexity.',
      body: [
        'HOA management teams balance the expectations of boards, homeowners, residents and vendors while overseeing shared buildings, amenities and community assets. When fire and life safety systems are part of that responsibility, compliance can quickly become another complex category requiring inspections, service coordination, documentation, budgeting and emergency response.',
        'Red Rocks Fire Protection Services helps HOA management companies simplify that responsibility. Through our One Vendor Life Safety Solution, your team can coordinate multiple life safety needs through one experienced partner rather than managing separate relationships for each system.',
      ],
      image: '/images/red-rocks-fire-protectionmulti-family-communities.jpg',
      imageAlt:
        'RRFPS technician supporting life safety systems for a Colorado HOA community.',
      background: 'white',
      cta: { label: 'Contact Us', href: '/contact' },
    },
    {
      type: 'accordion',
      eyebrow: 'HOA Management',
      title: 'Coordinated Services for Community Properties.',
      intro:
        'RRFPS provides comprehensive annual inspections for fire alarm systems, fire sprinkler systems, backflow prevention assemblies and portable fire extinguishers. Our technicians provide detailed reports, document deficiencies and recommend corrective action so managers and boards have clear information when making decisions.',
      bgImage: '/images/rrfps-multi-family-cta-bg.jpg',
      panels: [
        {
          title: 'Service and Repair',
          body: 'We also service and repair alarm and sprinkler systems, including control panels, detectors, notification devices, sprinkler piping, valves, fire pumps and related components. Backflow preventers can be tested, repaired or replaced, and portable extinguishers can be inspected, maintained, recharged or replaced as required.',
          open: true,
        },
        {
          title: 'Clubhouses, Offices and Common Areas',
          body: 'For communities with clubhouses, offices, maintenance facilities or other common areas, RRFPS can provide security system installation and 24/7 monitoring. Fire alarm monitoring, elevator emergency phone monitoring and Area of Refuge communication monitoring can also be coordinated through our team where applicable.',
        },
        {
          title: 'Renovations and Improvements',
          body: 'Renovations and improvements to common areas can affect existing life safety systems. RRFPS can manage required alarm and sprinkler modifications from design and permitting through installation, testing and final acceptance.',
        },
      ],
    },
    {
      type: 'slider',
      eyebrow: 'HOA Management',
      title: 'Helping Boards Plan Instead of React.',
      panels: [
        {
          number: '01',
          title: 'Bridging the Gap.',
          body: 'One of the greatest challenges in HOA management is turning technical facility needs into understandable information that boards can evaluate and budget for. RRFPS helps bridge that gap.',
          image: '/images/rrfps-about-overview-brian-inspector.jpg',
        },
        {
          number: '02',
          title: 'Consulting and Capital Budget Forecasting.',
          body: 'Our consulting services include system assessments, deficiency reviews, compliance planning and capital budget forecasting. We can help identify aging equipment, recurring maintenance needs, required testing intervals and potential future replacement projects so boards can make informed decisions before a system failure creates an urgent expense.',
          image: '/images/red-rocks-fire-protection-one-calendar.jpg',
        },
        {
          number: '03',
          title: 'Advocacy Across the Front Range.',
          body: 'Advocacy is central to our approach. We stay ahead of evolving fire codes, legislation and jurisdictional requirements and help clients understand how those changes may affect their properties. Because RRFPS works across the Colorado Front Range, our regional experience also helps clients navigate requirements that can vary by municipality and Authority Having Jurisdiction.',
          image: '/images/rrfps-advocacy-that-protects-your-investment.jpg',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Emergency Service',
      title: 'Responsive Support for the Unexpected.',
      body: [
        'A broken sprinkler pipe, freeze damage, alarm trouble or monitoring failure can become an immediate community issue. RRFPS provides 24-hour emergency service, seven days a week, with a 90-minute response window within the Denver Metro area.',
        'Our technicians work to restore system functionality quickly, communicate what is happening and help management teams understand the next steps. When a system impairment requires temporary measures, we can also assist with fire watch guidance, compliance documentation and AHJ coordination.',
      ],
      image: '/images/why-choose-us-bg.jpg',
      imageAlt:
        'RRFPS emergency technician restoring a life safety system for a Colorado HOA community.',
      background: 'black',
    },
  ],
  cta: {
    backgroundImage: '/images/rrfps-services-cta-bg.png',
    paragraphs: [
      'Red Rocks Fire Protection Services is a Colorado-based, family-owned company serving clients since 2010. We built our service model around accountability because property managers should not have to chase multiple vendors to understand who is responsible.',
      'With one point of contact, comprehensive capabilities, proactive guidance and a commitment to clear communication, RRFPS helps HOA managers provide boards and communities with greater confidence in their life safety program.',
      'Your team manages the community and supports the people who call it home. Let Red Rocks Fire Protection Services help make protecting that community one less thing you have to manage alone.',
    ],
  },
};