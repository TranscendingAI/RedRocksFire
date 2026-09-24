#!/usr/bin/env node
/**
 * audit-links.mjs — site-wide link audit for RRFPS.
 *
 * Walks every .astro file under src/pages/, plus a few non-page Astro
 * components that ship inline hrefs (Hero, Button, ClosingCTA, etc.),
 * and reports every internal link target that:
 *
 *   1. Is missing entirely (`href=""`, `href="#"`, bare `<a>` with
 *      `class="*btn*"` and no href at all).
 *   2. Resolves to an inline anchor (`href="#some-id"`) on a `<a>` that
 *      *looks* like a button (has `class` containing `btn` or `button`,
 *      or sits inside a `.cta__btn` / `.av-wgl-btn` / similar pattern).
 *      Same-page anchors are fine on inline section links; they aren't
 *      fine on a "Read Our Story" pill button.
 *   3. Resolves to a path that's not in src/lib/routes.ts (ROUTES), not
 *      under a DYNAMIC_PREFIXES prefix, and not in DEPRECATED_ROUTES.
 *
 * Exit code is always 0 for now — this is a *warning*, not a block,
 * until we promote it to blocking after one clean run (per the plan
 * agreed 2026-09).
 *
 * Usage:
 *   node scripts/audit-links.mjs
 *
 * To make CI-fatal, change `process.exit(0)` to `process.exit(1)` at
 * the bottom — but only after at least one full sweep with zero errors.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ROUTES_PATH = join(ROOT, 'src', 'lib', 'routes.ts');

// Routes data is duplicated here intentionally — the script must work
// even if the TS module isn't pre-compiled. Keep in sync with
// src/lib/routes.ts. If routes.ts adds a top-level route, add it here.
const ROUTES = new Set([
  // Root
  '/', '/contact', '/testimonials',
  // Industries hub: real page is /industries/. Legacy
  // /industries-we-serve/ exists as a redirect stub only.
  '/industries/', '/industries-we-serve',
  '/service-areas', '/blog', '/fire-reports',
  // About hub + sub-pages
  '/about', '/about/', '/about/our-story', '/about/our-promise',
  '/about/ceo-message', '/about/mission-vision-values',
  '/about/credentials-and-certifications', '/about/rrfps-difference',
  // Deprecated
  '/about/mission-vission-values',
  // Services hub
  '/services',
  // Service pages
  '/services/inspections', '/services/fire-sprinkler-service-and-systems',
  '/services/fire-alarm-service-and-systems', '/services/monitoring-services',
  '/services/backflow-prevention-assemblies', '/services/portable-fire-extinguishers',
  '/services/distributed-antenna-systems',
  '/services/security-system-installation-and-monitoring',
  '/services/kitchen-hood-suppression-systems',
  '/services/area-of-refuge-communication-systems',
  '/services/consulting-services', '/services/24-hour-service',
  // Leadership
  '/meet-the-team', '/meet-the-team/brian-kakac',
  '/meet-the-team/jeff-kakac', '/meet-the-team/nick-ayde',
  '/meet-the-team/alicia-plescia', '/meet-the-team/lisa-cordova',
  '/meet-the-team/dale-litreal', '/meet-the-team/lowell-hines',
  // Dynamic prefixes (individual slugs are runtime-generated)
  '/blog/', '/service-areas/',
]);

// Asset paths the audit should never flag — favicon, images, etc.
const ASSET_PREFIXES = [
  '/favicon', '/images/', '/assets/', '/fonts/', '/_astro/',
];

const BUTTON_CLASS_HINTS = [
  'btn', 'button', 'cta', 'arrow', 'learn-more',
  'hero__cta', 'av-wgl-btn', 'pf__all', 'svc__more',
  'capability-card', 'industry-card', 'cta__btn',
  'contact-link',
];

// Lines worth flagging as "looks like a button missing its href" — i.e.
// an anchor that has class text containing a button-y word but no href
// attribute. Catches the "not set at all" failure mode.
const MISSING_HREF_REGEX =
  /<a\b(?![^>]*\bhref=)[^>]*\bclass=(?:"([^"]*)"|'([^']*)')[^>]*>/gi;

// Every href-bearing element we care about.
const HREF_REGEX = /\bhref=(?:"([^"]*)"|'([^']*)')/gi;

// Same-page anchors (#some-id) on tags that *look* like buttons. Used
// to catch "Read Our Story" pointing at #ceo-message type bugs.
function looksLikeButton(htmlSnippet) {
  const lower = htmlSnippet.toLowerCase();
  return BUTTON_CLASS_HINTS.some((hint) => lower.includes(hint));
}

function isExternal(href) {
  return /^(https?:|mailto:|tel:)/i.test(href);
}

function isAsset(href) {
  return ASSET_PREFIXES.some((p) => href.startsWith(p));
}

function isInRoutes(href) {
  // Strip query/hash for route resolution.
  const pathOnly = href.split('#')[0].split('?')[0] || '/';
  if (ROUTES.has(pathOnly)) return true;
  // Dynamic prefix match: '/blog/some-post' → '/blog/'
  for (const prefix of ['/blog/', '/service-areas/']) {
    if (pathOnly.startsWith(prefix)) return true;
  }
  return false;
}

function isLikelyInPageAnchor(href, htmlSnippet) {
  // Bare '#', '#foo' etc. OK on inline section links, NOT OK on buttons.
  if (!href.startsWith('#')) return false;
  return looksLikeButton(htmlSnippet);
}

function isEmpty(href) {
  return href === '' || href === '#' || href === '#!';
}

// Walk src/ for .astro files. Includes components because Button.astro,
// Hero.astro, ClosingCTA.astro etc. ship hrefs too.
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    let s;
    try {
      s = statSync(full);
    } catch {
      continue;
    }
    if (s.isDirectory()) {
      if (name === 'node_modules' || name === 'dist' || name === '.astro') continue;
      walk(full, out);
    } else if (name.endsWith('.astro')) {
      out.push(full);
    }
  }
  return out;
}

const findings = [];

for (const file of walk(join(ROOT, 'src'))) {
  const rel = relative(ROOT, file).split(sep).join('/');
  const src = readFileSync(file, 'utf8');

  // 1. Missing href on a button-y anchor.
  for (const m of src.matchAll(MISSING_HREF_REGEX)) {
    const cls = m[1] ?? m[2] ?? '';
    if (looksLikeButton(cls)) {
      findings.push({
        file: rel,
        kind: 'missing-href',
        detail: `<a> with class="${cls}" has no href attribute`,
      });
    }
  }

  // 2. Inspect every href in the file. Capture a small surrounding
  //    snippet (last 200 chars before the href) so we can decide if
  //    this looks like a button.
  let lastIdx = 0;
  for (const m of src.matchAll(HREF_REGEX)) {
    const href = m[1] ?? m[2] ?? '';
    // Pull a 220-char window *before* the match to see the opening tag.
    const startOfMatch = m.index ?? 0;
    const tagWindow = src.slice(Math.max(0, startOfMatch - 220), startOfMatch);

    if (isExternal(href)) continue;
    if (isAsset(href)) continue;
    if (isEmpty(href)) {
      findings.push({
        file: rel,
        kind: 'empty-href',
        href,
        detail: 'empty / "#" / "#!" href',
      });
      continue;
    }
    if (isLikelyInPageAnchor(href, tagWindow)) {
      findings.push({
        file: rel,
        kind: 'anchor-on-button',
        href,
        detail: `same-page anchor on a button-shaped element`,
      });
      continue;
    }
    if (href.startsWith('#')) continue; // legit in-page nav anchor
    if (!isInRoutes(href)) {
      findings.push({
        file: rel,
        kind: 'unknown-route',
        href,
        detail: 'not in ROUTES, DYNAMIC_PREFIXES, or DEPRECATED_ROUTES',
      });
    }

    lastIdx = startOfMatch;
  }
}

// Group + print.
if (findings.length === 0) {
  console.log('✅ audit-links: no issues found');
  process.exit(0);
}

const byKind = findings.reduce((acc, f) => {
  acc[f.kind] = acc[f.kind] || [];
  acc[f.kind].push(f);
  return acc;
}, {});

console.log(`⚠️  audit-links: ${findings.length} finding(s) across ${new Set(findings.map((f) => f.file)).size} file(s)\n`);

for (const [kind, items] of Object.entries(byKind)) {
  console.log(`─── ${kind} (${items.length}) ───`);
  for (const f of items) {
    const where = f.href ? `  href=${f.href}` : '';
    console.log(`  ${f.file}${where}\n    ${f.detail}`);
  }
  console.log('');
}

// Promote to blocking by changing this 0 → 1 after one clean run.
process.exit(0);
