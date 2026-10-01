// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

/**
 * Production origin. www is canonical — the apex (rrfps.com) 308s to
 * https://www.rrfps.com/ on Vercel, and the existing canonical fallbacks in
 * src/pages use the same origin. Drives Astro.site (canonicals, blog OG URLs)
 * and the absolute URLs in the generated sitemap.
 */
const SITE = 'https://www.rrfps.com';

/**
 * Pages that are built but must never be listed in the sitemap:
 *   - /admin/*               — internal portal (AdminLayout is noindex)
 *   - /_archive/*            — underscore dirs aren't routed by Astro; listed
 *                              defensively in case one is ever renamed
 *   - /index-2/              — Avelon demo replica, not a public page
 *   - redirect stubs         — old URLs that meta-refresh / 301 elsewhere
 *   - /thank-you/            — post-submit confirmation (also noindex)
 */
const SITEMAP_EXCLUDE = [
  /^\/admin(\/|$)/,
  /^\/_archive(\/|$)/,
  /^\/index-2\/?$/,
  /^\/industries-we-serve\/?$/,
  /^\/about\/mission-vission-values\/?$/,
  /^\/404\/?$/,
  /^\/thank-you\/?$/,
];

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // The site stays fully prerendered (static is the default output). The
  // Vercel adapter is only here so individual routes can opt out with
  // `export const prerender = false` — currently just /api/contact, which
  // sends contact-form mail through Resend as a Vercel Function.
  adapter: vercel(),
  // Mirrors the redirects in vercel.json. With the Vercel adapter the build
  // ships Vercel Build Output (.vercel/output/config.json) and Vercel's docs
  // recommend framework-native redirects over vercel.json for Astro, so these
  // are emitted as real 301 routes by the adapter. Only the bare path is
  // listed: Astro treats '/contact-us/' as the same route, so the
  // trailing-slash variant still relies on vercel.json — verify on a preview.
  redirects: {
    '/contact-us': { status: 301, destination: '/contact' },
  },
  // Server-only secrets for /api/contact. Declared via astro:env so they are
  // read at request time on Vercel (never inlined into the bundle) and so a
  // missing value is a handled runtime error, not a build failure.
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_TO_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_FROM_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        return !SITEMAP_EXCLUDE.some((re) => re.test(pathname));
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
