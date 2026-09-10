import type { IndustryPageData } from './types';

/**
 * Commercial Property & Management Companies — copy verbatim from
 * reference/content/rrfps-industries-we-serve-website-content.md §2.
 * Images are placeholders from /public/images until dedicated assets land.
 */
export const commercialPropertyPage: IndustryPageData = {
  seo: {
    title:
      'Fire Protection for Commercial Property Management Companies | Red Rocks Fire Protection | Colorado',
    description:
      'One Vendor Life Safety Solution for commercial property teams across the Colorado Front Range — inspections, sprinklers, alarms, extinguishers, backflow, monitoring, tenant improvement modifications and 24-hour emergency service.',
  },
  banner: {
    title: 'Commercial Property.',
    subtitle: 'INDUSTRIES WE SERVE',
    backgroundImage: '/images/red-rocks-fire-protection-commercial-facilities.jpg',
  },
  sections: [
    {
      type: 'split',
      eyebrow: 'Who We Serve',
      title: 'Protecting Your Properties, Tenants and Operations With Greater Confidence.',
      body: [
        'Commercial property owners and management companies balance many priorities at once: tenant needs, building operations, capital planning, vendor coordination and the ongoing responsibility to keep each property safe and compliant. Fire and life safety systems touch nearly every part of that responsibility, and when multiple vendors are involved, even routine requirements can become unnecessarily complicated.',
        'Red Rocks Fire Protection Services provides commercial property teams with a One Vendor Life Safety Solution designed to simplify that complexity. Our role is to help you protect people and property while giving your management team clearer communication, coordinated service and one accountable partner for a broad range of life safety needs.',
      ],
      image: '/images/rrfps-commercial-property-lobby-pull-station.jpg',
      imageAlt:
        'RRFPS technician inspecting fire sprinkler and alarm systems in a commercial office property.',
      background: 'white',
      cta: { label: 'Contact Us', href: '/contact' },
    },
    {
      type: 'accordion',
      eyebrow: 'Commercial Property',
      title: 'Comprehensive Support for Commercial Facilities.',
      intro:
        'Every commercial property has its own systems, occupancy requirements and operational demands. RRFPS provides comprehensive inspection, service, repair, modification and replacement support for fire alarm and fire sprinkler systems. We also inspect and service portable fire extinguishers and backflow prevention assemblies and provide professional fire alarm monitoring.',
      bgImage: '/images/rrfps-commercial-property-dusk-service-van.jpg',
      panels: [
        {
          title: 'Additional Capabilities',
          body: 'Depending on the property, our capabilities also include Distributed Antenna Systems and Emergency Responder Radio Communication Systems, Area of Refuge communication systems, elevator emergency phone monitoring, security system installation and monitoring, and kitchen hood suppression systems.',
          open: true,
        },
        {
          title: 'Tenant Improvements and Renovations',
          body: 'New walls, ceiling changes, remodeled offices, changing occupancies and expanded tenant spaces can require sprinkler relocations, new alarm devices, additional notification appliances, monitoring points or other system modifications. RRFPS can manage design, permitting, installation, programming, testing and final acceptance, helping owners, managers and contractors keep projects moving while maintaining code compliance.',
        },
      ],
    },
    {
      type: 'slider',
      eyebrow: 'Commercial Property',
      title: 'Turning Compliance Into a Manageable Plan.',
      panels: [
        {
          number: '01',
          title: 'A Proactive Partnership.',
          body: 'Commercial property managers should not have to wait for an inspection failure or system breakdown to understand what comes next. RRFPS approaches life safety as a proactive partnership.',
          image: '/images/rrfps-commercial-property-lobby-inspector-client.jpg',
        },
        {
          number: '02',
          title: 'Consulting Services.',
          body: 'Our consulting services help owners and managers evaluate existing systems, review deficiencies, coordinate with Authorities Having Jurisdiction and plan corrective action. We can also help identify upcoming inspection, testing, maintenance and replacement requirements so they can be incorporated into capital plans rather than arriving as unexpected expenses.',
          image: '/images/rrfps-commercial-property-conference-room-meeting.jpg',
        },
        {
          number: '03',
          title: 'The RRFPS Difference.',
          body: 'That advocacy is an important part of the RRFPS difference. Fire codes and jurisdictional requirements evolve, and requirements can vary between communities across the Colorado Front Range. Our team stays current so we can provide practical guidance, help clients prepare and reduce avoidable surprises.',
          image: '/images/rrfps-commercial-property-corridor-sprinkler-service.jpg',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Emergency Service',
      title: 'Responsive When Operations Cannot Wait.',
      body: [
        'A fire alarm trouble, sprinkler leak, backflow failure or monitoring communication outage can affect tenants and building operations immediately. RRFPS provides 24-hour emergency service, seven days a week, including a 90-minute response window within the Denver Metro area. Our technicians respond to a wide range of system impairments and work to restore functionality while helping management teams navigate temporary protection and compliance requirements when needed.',
      ],
      image: '/images/rrfps-our-promise-promise-4-show-up-truck.jpg',
      imageAlt: 'RRFPS service truck showing up on-site for a commercial property life safety service call.',
      background: 'black',
    },
  ],
  cta: {
    backgroundImage: '/images/rrfps-commercial-property-street-view-exterior.jpg',
    paragraphs: [
      'One Relationship. Complete Accountability.',
      'Since 2010, Red Rocks Fire Protection Services has built its business around a simple belief: clients deserve more than a collection of service vendors. They deserve a life safety partner who understands the responsibility they carry.',
      'Our One Vendor Life Safety Solution brings inspections, service, monitoring, repairs, system modifications and consulting together through one coordinated team. We promise to lead with safety, advocate for our clients, communicate clearly, show up when we say we will and take ownership when challenges arise.',
      'For commercial property owners and managers, that means less time coordinating vendors and more confidence that the systems protecting your tenants, employees, visitors and assets are being managed with care.',
      'Your property is your responsibility. Helping you protect it is ours.',
    ],
  },
};