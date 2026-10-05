/**
 * Blog category taxonomy — single source of truth.
 *
 * The blog `category` enum (in src/content.config.ts) and the sidebar
 * widget (src/components/BlogSidebar.astro) both read from this list.
 *
 *   - `slug`      → URL segment for the per-category archive, e.g.
 *                   /blog/category/<slug>/. Used by the sidebar links.
 *   - `label`     → Display text shown in the sidebar and the archive H1.
 *                   Trailing periods stripped (per 2026-08 design call).
 *   - `enumValue` → Exact string that the Zod schema's `category` enum
 *                   accepts in a post's frontmatter. Must match a value in
 *                   src/content.config.ts → blog → schema → category.
 *
 * Ordering = sidebar order. Don't reorder casually — it changes every
 * archive page.
 *
 * Adding a new category:
 *   1. Add a row here.
 *   2. Add the same string to the Zod enum in src/content.config.ts.
 *   3. (Optional) Drop a blog post tagged with it.
 */

export interface BlogCategory {
  slug: string;
  label: string;
  enumValue: string;
  /** Document-style <title> for /blog/category/<slug>/. */
  seoTitle: string;
  /** Meta description for the category archive. */
  seoDescription: string;
}

export const blogCategories = [
  {
    slug: 'code-compliance',
    label: 'Code & Compliance',
    enumValue: 'Code & Compliance',
    seoTitle: 'Code & Compliance | Red Rocks Fire Protection',
    seoDescription: 'Code and compliance articles for Colorado properties: adopted fire codes, suppression standards, backflow certification and inspection requirements.',
  },
  {
    slug: 'inspections',
    label: 'Inspections',
    enumValue: 'Inspections',
    seoTitle: 'Fire Inspection Articles | Red Rocks Fire Protection',
    seoDescription: 'Inspection articles for Colorado properties: what annual sprinkler and alarm tests cover, and what local fire authorities expect in a report.',
  },
  {
    slug: 'property-management',
    label: 'Property Management',
    enumValue: 'Property Management',
    seoTitle: 'Property Management | Red Rocks Fire Protection',
    seoDescription: 'Fire protection guidance for Colorado property managers covering multi-family sprinklers, retail responsibility, assisted living and one-vendor service.',
  },
  {
    slug: 'service-maintenance',
    label: 'Service & Maintenance',
    enumValue: 'Service & Maintenance',
    seoTitle: 'Service & Maintenance | Red Rocks Fire Protection',
    seoDescription: 'Service and maintenance articles for Colorado fire systems: extinguishers, sprinkler types, alarm monitoring and the work between inspections.',
  },
  {
    slug: 'systems',
    label: 'Systems',
    enumValue: 'Systems',
    seoTitle: 'Fire Protection Systems | Red Rocks Fire Protection',
    seoDescription: 'Articles on fire protection systems in Colorado buildings, including alarms, sprinklers, suppression and monitoring.',
  },
  {
    slug: 'company-news',
    label: 'Company News',
    enumValue: 'Company News',
    seoTitle: 'Company News | Red Rocks Fire Protection',
    seoDescription: 'Company news from Red Rocks Fire Protection Services, the family-owned Colorado fire and life safety company based in Centennial.',
  },
  {
    slug: 'emergency-response',
    label: 'Emergency Response',
    enumValue: 'Emergency Response',
    seoTitle: 'Emergency Response | Red Rocks Fire Protection',
    seoDescription: 'Emergency response articles from Red Rocks Fire Protection on 24/7 fire and life safety service across Colorado.',
  },
] as const satisfies readonly BlogCategory[];

/** Look up a category by its URL slug. Returns undefined if not found. */
export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}
