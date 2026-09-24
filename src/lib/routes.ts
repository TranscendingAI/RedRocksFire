/**
 * Canonical site routes — single source of truth for internal navigation.
 *
 * Why this exists:
 *   The RRFPS site has ~40 pages and hundreds of inline `href="/..."` literals
 *   scattered across components and pages. Without a canonical map, every
 *   new page or section has to guess which href to point at, and audits like
 *   the 2026-09 About-page button sweep (39 buttons, 17 broken) recur.
 *
 * Rules:
 *   - Internal navigation MUST resolve through this map (or be a known
 *     dynamic prefix — see `DYNAMIC_PREFIXES`).
 *   - The audit script (`scripts/audit-links.mjs`) fails the build on any
 *     inline `href` that isn't in this map and isn't under a known prefix.
 *   - `<NavLink to="ourStory">` (in src/components/NavLink.astro) validates
 *     the `to` key in dev so typos throw at build time.
 *
 * Adding a page:
 *   1. Add an entry here.
 *   2. Reference it via NavLink in your component/page (preferred) or via
 *      ROUTES[yourKey] when NavLink doesn't fit the surface.
 *
 * Dynamic routes (blog posts, service-area cities/counties, etc.) are not
 * individually enumerated here — they live under the prefixes in
 * DYNAMIC_PREFIXES, which the audit script allows.
 */

export const ROUTES = {
  // Root
  home: '/',
  contact: '/contact',
  testimonials: '/testimonials',
  industries: '/industries-we-serve',
  serviceAreas: '/service-areas',
  blog: '/blog',
  fireReports: '/fire-reports',

  // About hub + sub-pages
  about: '/about',
  ourStory: '/about/our-story',
  ourPromise: '/about/our-promise',
  ceoMessage: '/about/ceo-message',
  /**
   * NOTE: slug was historically `mission-vission-values` (typo).
   * Fixed 2026-09 — see src/pages/about/mission-vision-values.astro and
   * the redirect from the old slug.
   */
  missionVisionValues: '/about/mission-vision-values',
  missionVisionValuesOld: '/about/mission-vission-values', // for the redirect only
  credentials: '/about/credentials-and-certifications',
  rrfpsDifference: '/about/rrfps-difference',

  // Services hub
  services: '/services',

  // Services — one entry per live service page (per client confirmation
  // 2026-09: all 11 service pages are live).
  serviceInspections: '/services/inspections',
  serviceFireSprinkler: '/services/fire-sprinkler-service-and-systems',
  serviceFireAlarm: '/services/fire-alarm-service-and-systems',
  serviceMonitoring: '/services/monitoring-services',
  serviceBackflow: '/services/backflow-prevention-assemblies',
  serviceExtinguishers: '/services/portable-fire-extinguishers',
  serviceDas: '/services/distributed-antenna-systems',
  serviceSecurity: '/services/security-system-installation-and-monitoring',
  serviceKitchenHood: '/services/kitchen-hood-suppression-systems',
  serviceAreaOfRefuge: '/services/area-of-refuge-communication-systems',
  serviceConsulting: '/services/consulting-services',
  service24Hour: '/services/24-hour-service',

  // Leadership hub
  meetTheTeam: '/meet-the-team',
  leadershipBrian: '/meet-the-team/brian-kakac',
  leadershipJeff: '/meet-the-team/jeff-kakac',
  leadershipNick: '/meet-the-team/nick-ayde',
  leadershipAlicia: '/meet-the-team/alicia-plescia',
  leadershipLisa: '/meet-the-team/lisa-cordova',
  leadershipDale: '/meet-the-team/dale-litreal',
  leadershipLowell: '/meet-the-team/lowell-hines',
} as const;

export type RouteKey = keyof typeof ROUTES;

/**
 * Prefixes the audit script allows without explicit enumeration, because
 * individual slugs are dynamic (one per city, county, blog post, etc.).
 * Keep this list short — every entry is a place where a typo could 404
 * silently, so prefer enumerating fixed routes above.
 */
export const DYNAMIC_PREFIXES = [
  '/blog/',         // blog index + posts + categories
  '/service-areas/', // cities + counties
] as const;

/**
 * Routes that should never appear as a link target — they're either the
 * current page (linking to yourself looks broken) or legacy slugs the
 * audit should flag for removal.
 */
export const DEPRECATED_ROUTES = [
  ROUTES.missionVisionValuesOld, // redirect target only
] as const;
