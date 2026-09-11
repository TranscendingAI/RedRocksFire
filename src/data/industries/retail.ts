import type { IndustryPageData } from './types';

/**
 * Retail & Shopping Centers — copy verbatim from
 * reference/content/rrfps-industries-we-serve-website-content.md §9.
 * Images are placeholders from /public/images until dedicated assets land.
 */
export const retailPage: IndustryPageData = {
  seo: {
    title:
      'Fire Protection for Retail & Shopping Centers | Red Rocks Fire Protection | Colorado',
    description:
      'One Vendor Life Safety Solution for retail properties and shopping centers across the Colorado Front Range — inspections, alarms, sprinklers, tenant finish modifications, kitchen hood suppression and 24-hour emergency service.',
  },
  banner: {
    title: 'Retail & Shopping Centers.',
    subtitle: 'INDUSTRIES WE SERVE',
    backgroundImage: '/images/rrfps-retail-shopping-center.jpg',
  },
  sections: [
    {
      type: 'split',
      eyebrow: 'Who We Serve',
      title: 'Helping You Protect Customers, Tenants and the Properties They Depend On.',
      body: [
        'Retail properties are active environments where customers, employees, tenants, deliveries and daily operations come together. Whether you manage a single retail building or a shopping center with multiple tenant spaces, life safety responsibilities continue in the background every day.',
        'Red Rocks Fire Protection Services helps retail property owners and managers simplify those responsibilities through a coordinated One Vendor Life Safety Solution. From inspections and monitoring to tenant improvements and emergency repairs, our team provides one point of contact and complete accountability across a broad range of fire and life safety systems.',
      ],
      image: '/images/rrfps-retail-shopping-center-life-safety-support.jpg',
      imageAlt:
        'RRFPS technician inspecting life safety systems at a Colorado retail shopping center.',
      background: 'white',
      cta: { label: 'Contact Us', href: '/contact' },
    },
    {
      type: 'accordion',
      eyebrow: 'Retail & Shopping Centers',
      title: 'Life Safety Services That Support Retail Operations.',
      intro:
        'RRFPS provides comprehensive inspections for fire alarm systems, fire sprinkler systems, backflow prevention assemblies and portable fire extinguishers. Our technicians provide detailed compliance reporting, identify deficiencies and recommend corrective action so property teams can address issues efficiently.',
      bgImage: '/images/rrfps-retail-shopping-center-fire-protection-systems.jpg',
      panels: [
        {
          title: 'Service, Repair and Replacement',
          body: 'We service and repair alarm systems, sprinkler systems, fire pumps, backflow preventers and extinguishers and can replace aging or obsolete equipment when continued repairs no longer make sense. Professional fire alarm monitoring helps ensure alarm signals are transmitted for dispatch and notification around the clock.',
          open: true,
        },
        {
          title: 'Security and ERRCS/BDA',
          body: 'Retail properties may also benefit from security system installation and monitoring for tenant spaces, offices, doors, windows and other areas. For shopping centers or larger buildings requiring emergency responder radio coverage, RRFPS provides ERRCS/BDA testing, repair and system upgrades.',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Retail & Shopping Centers',
      title: 'Tenant Improvements and Changing Spaces.',
      body: [
        'Retail spaces change frequently. New tenants arrive, existing tenants remodel, walls move, ceilings change and occupancy uses evolve. Those changes can affect sprinkler coverage, fire alarm devices and monitoring points.',
        'RRFPS specializes in code-compliant fire sprinkler and fire alarm modifications for tenant finish projects and renovations. Our team can coordinate design, permitting, installation, programming, testing and final acceptance, working with property owners, managers, contractors and Authorities Having Jurisdiction.',
        'For restaurant tenants or food-service operations within retail properties, RRFPS also provides kitchen hood suppression system inspections, service and modifications. Changes to cooking equipment, appliances or hood configurations can be evaluated and incorporated into the suppression system as required.',
      ],
      image: '/images/rrfps-retail-tenant-improvement-coordination.jpg',
      imageAlt:
        'RRFPS technician coordinating tenant finish sprinkler modifications in a retail space.',
      background: 'light',
    },
    {
      type: 'slider',
      eyebrow: 'Retail & Shopping Centers',
      title: 'Proactive Compliance and Capital Planning.',
      panels: [
        {
          number: '01',
          title: 'Plan, Do Not React.',
          body: 'Managing life safety should not mean waiting for deficiencies or failures to dictate the next expense. RRFPS consulting services help owners and managers assess system condition, review inspection findings, plan corrective action and forecast future capital needs.',
          image: '/images/rrfps-retail-life-safety-capital-planning.jpg',
        },
        {
          number: '02',
          title: 'Advocacy for Multi-Location Teams.',
          body: 'Our team stays current with evolving fire codes, legislation and local jurisdiction requirements so we can advocate for clients and help them understand what is ahead. This is especially valuable for property teams managing multiple locations across different municipalities.',
          image: '/images/rrfps-retail-multi-location-code-advocacy.jpg',
        },
        {
          number: '03',
          title: 'Clear Priorities Across Every Location.',
          body: 'A coordinated view of inspection findings, system conditions and upcoming work helps property teams prioritize the right corrections, plan ahead and keep each location operating with greater confidence.',
          image: '/images/rrfps-retail-shopping-center-system-walkthrough.jpg',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Emergency Service',
      title: 'Ready When an Issue Affects the Property.',
      body: [
        'A sprinkler leak, alarm outage or monitoring communication failure can affect tenants and customers quickly. RRFPS provides 24-hour emergency service, seven days a week, with a 90-minute response window within the Denver Metro area.',
        'Our technicians work to restore critical systems while helping property teams minimize disruption and maintain compliance. When an impairment requires temporary measures, we can also assist with fire watch guidance and AHJ coordination.',
      ],
      image: '/images/rrfps-retail-emergency-response.jpg',
      imageAlt:
        'RRFPS emergency technician restoring a sprinkler system at a Colorado retail property.',
      background: 'black',
    },
  ],
  cta: {
    backgroundImage: '/images/rrfps-retail-shopping-center-fire-protection-cta.jpg',
    paragraphs: [
      'One Partner for the Life Safety Behind Your Retail Property',
      'Since 2010, Red Rocks Fire Protection Services has served Colorado as a local, family-owned life safety company. We lead with safety, communicate clearly, show up when we say we will and take ownership of the work entrusted to us.',
      'Your job is to keep the property operating and create a safe environment for tenants and customers. Our job is to make the fire and life safety side of that responsibility easier to manage.',
      'Your One Vendor Life Safety Solution gives you one team, one relationship and greater confidence in the systems protecting your retail property.',
    ],
  },
};
