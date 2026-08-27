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
}

export const blogCategories = [
  { slug: 'code-compliance',     label: 'Code & Compliance',   enumValue: 'Code & Compliance' },
  { slug: 'inspections',         label: 'Inspections',         enumValue: 'Inspections' },
  { slug: 'property-management', label: 'Property Management', enumValue: 'Property Management' },
  { slug: 'service-maintenance', label: 'Service & Maintenance', enumValue: 'Service & Maintenance' },
  { slug: 'systems',             label: 'Systems',             enumValue: 'Systems' },
  { slug: 'company-news',        label: 'Company News',        enumValue: 'Company News' },
  { slug: 'emergency-response',  label: 'Emergency Response',  enumValue: 'Emergency Response' },
] as const satisfies readonly BlogCategory[];

/** Look up a category by its URL slug. Returns undefined if not found. */
export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}
