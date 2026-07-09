/**
 * Astro Content Collections — canonical site/blog source-of-truth.
 *
 * Astro 7 convention: collection config lives at `src/content.config.ts`
 * (NOT the legacy `src/content/config.ts`). The schema below defines the
 * shape of an MD file's frontmatter — Astro uses Zod to validate it at
 * build time.
 *
 * Adding a new blog post:
 *   1. Drop a `.md` file into `src/content/blog/`
 *   2. Match the schema's frontmatter (title, slug auto, excerpt,
 *      publishDate, category, tags, featuredImage, seoTitle, seoDescription)
 *   3. Use `---title-style headings or HTML inside the markdown body.
 *
 * The /blog index reads via `getCollection('blog')` and the post template
 * reads via `getStaticPaths()` + `render(entry)`.
 */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
    // Sort newest-first when consumed by the index page.
  }),
  schema: z.object({
    title: z.string().min(1),
    excerpt: z.string().min(20).max(280),
    publishDate: z.coerce.date(),
    category: z.enum([
      'Inspections',
      'Code & Compliance',
      'Property Management',
      'Service & Maintenance',
      'Company News',
    ]),
    tags: z.array(z.string()).default([]),
    /** Path under /public/images/, e.g. "/images/whatever.jpg". */
    featuredImage: z.string().startsWith('/images/'),
    /** Alt text for the featured image — required (a11y + SEO). */
    featuredImageAlt: z.string().min(1),
    featuredImageCaption: z.string().optional(),
    /** Author byline shown on the post page (free-form, e.g. "RRFPS Editorial Team"). */
    author: z.string().default('RRFPS Editorial Team'),
    /** SEO — used by the dynamic [slug].astro page. */
    seoTitle: z.string().min(1),
    seoDescription: z.string().min(50).max(200),
    /** Approximate read time in minutes (compute when writing). */
    readMinutes: z.number().int().positive().optional(),
  }),
});

export const collections = { blog };
