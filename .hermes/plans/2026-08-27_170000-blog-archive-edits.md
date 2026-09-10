# Blog Archive Edits — Plan (v3)

**Goal:** Four targeted fixes on /blog and 13 blog posts; add 1–2 internal links per post to the most relevant service or industry page; **introduce a curated blog-category taxonomy** (7 values) and **per-category archive pages** so the sidebar categories become real destinations.

**Architecture:** Single-source-of-truth edits in Astro frontmatter and shared components. Schema additions are additive (optional fields with defaults) so no existing post breaks. Category archives reuse `src/pages/blog/index.astro`'s content via a shared template/component so layout parity is automatic.

**Tech Stack:** Astro 7, content collections (`src/content/blog/*.md`), shared `<BlogSidebar>` component, dynamic route `[category].astro` for archives.

---

## Confirmed decisions

1. ✅ Add `heroPosition` field to content schema. Apply `center top` to the 3 posts.
2. ✅ Sidebar categories = blog categories (curated subset). Each link → `/blog/category/<slug>/` archive page.
3. ✅ Hover color = `var(--rr-red)` with underline.
4. ✅ Sidebar widget label stays "Categories".
5. ✅ Empty-category archives are fine; show empty-state message.
6. ✅ Strip trailing period from service/category titles in archive H1s.

---

## ⚠ Decisions still to confirm

### A. Blog category taxonomy (7 values proposed — confirm or trim)

| # | Slug | Label | Existing posts |
|---|------|-------|----------------|
| 1 | `code-compliance` | Code & Compliance | 4 |
| 2 | `inspections` | Inspections | 2 |
| 3 | `property-management` | Property Management | 4 |
| 4 | `service-maintenance` | Service & Maintenance | 3 |
| 5 | `systems` | Systems | 0 (new) |
| 6 | `company-news` | Company News | 0 (new) |
| 7 | `emergency-response` | Emergency Response | 0 (new) |

- The 4 existing categories are preserved as-is so **no post needs re-tagging**.
- The 3 new categories (`systems`, `company-news`, `emergency-response`) are growth slots. They render empty-state archives today; new posts drop into them over time.
- **Confirm or trim.** If you want fewer, the strongest 2 adds are `systems` and `company-news`; `emergency-response` is the most droppable.

### B. Which categories show in the sidebar?

The schema accepts all 7; the sidebar widget curates. Options:

- **All 7** — most discoverable, but the list gets long.
- **Top 4–5** — pick the 4 existing + `systems` (or + `company-news`), hide the truly empty ones until they have posts. Most polished.
- **4 existing only** — keep sidebar tight; new categories still work as routes but stay hidden until content exists.

**Confirm which subset goes in the sidebar widget.**

### C. Sidebar → archive → active state

When you're on `/blog/category/<x>/`, the matching sidebar link gets `aria-current="page"` and turns red (color: var(--rr-red)) + underlined. **Confirm or change.**

---

## Step-by-step plan

### Part A — Blog archive sidebar (`src/components/BlogSidebar.astro`)
1. Drop X + Facebook socials. Keep Instagram + LinkedIn. Keep all 4 keys in the `AuthorInfo` interface (with empty strings for unused) so the prop shape stays stable.
2. Replace `services` prop with a `categories` prop (array of `{ slug, label }`). `/blog/` passes the curated subset (decision B).
3. Convert each `<li>` to: `<li class="bsb__cat-item"><a href={`/blog/category/${category.slug}/`} class="bsb__cat-link">{category.label}</a></li>`.
4. Add `.bsb__cat-link` styles: `color: inherit; text-decoration: none; display: block; transition: color .15s;` and hover + active state.
5. Accept optional `activeCategory?: string` prop so the archive page can mark the current one.

### Part B — Hero background position
6. Add optional `heroPosition` field to schema (`src/content.config.ts`):
   ```ts
   heroPosition: z.enum(['center bottom','center top','center','top','bottom']).default('center bottom'),
   ```
7. Apply inline in `src/pages/blog/[slug].astro` line 85:
   `style={`background-image: url('${post.data.featuredImage}'); background-position: ${post.data.heroPosition};`}`
8. Add `heroPosition: center top` to 3 frontmatter files.

### Part C — Blog category enum + archives
9. **Update Zod schema** (`src/content.config.ts` line 32):
   ```ts
   category: z.enum([
     'Code & Compliance',
     'Inspections',
     'Property Management',
     'Service & Maintenance',
     'Systems',
     'Company News',
     'Emergency Response',
   ]),
   ```
   No existing post breaks (existing values are all preserved).
10. **Create** `src/pages/blog/category/[category].astro`:
    - `getStaticPaths()` enumerates all 7 category slugs → label, mapped to the enum value.
    - Filters `getCollection('blog')` by `post.data.category === <enum value>`.
    - Strips the trailing period from the label for the H1 (e.g., "Inspections" — already no period, but if the schema ever gains a period, this normalizes).
    - Empty-state: "No posts in this category yet. Check back soon."
    - Hero: eyebrow "Category:", H1 = label, breadcrumbs Home → Blog → label.
    - Renders the same `<BlogSidebar>` (passing `activeCategory={slug}`), `<ClosingCTA>`, and shared `<BlogArchiveGrid>` (see next).
11. **Extract** post grid + load-more from `src/pages/blog/index.astro` into `src/components/BlogArchiveGrid.astro`. Both pages consume it. (Skipping this means duplicating ~150 lines of grid markup; recommend keeping the extraction.)

### Part D — Internal links on 13 posts
12. Per the mapping table below, replace `#` placeholders + add 1–2 service/industry links per post. All mapped URLs already exist as routes.

### Part E — Verification (real evidence)
13. `npm run build` — green; expected 13 blog post pages + **7 new category archive pages** = +7 routes.
14. Playwright DOM probe:
    - `/blog/` sidebar: 2 social icons only, **N** `<a class="bsb__cat-link" href="/blog/category/...">` items where N = decision B.
    - Click each → lands on the right archive, filtered list correct, active item highlighted.
    - Empty categories show the empty-state message.
    - 3 hero-position posts: `getComputedStyle('.ptbanner').backgroundPosition === 'center top'` + screenshot.
15. Link audit script: count `<a href="/services...">`, `<a href="/industries...">`, `<a href="/inspections...">` in built HTML for each of 13 posts.

### Part F — Commit
16. Stage only files I touched. Commit message: `Blog: 7-category taxonomy + archives; sidebar categories clickable; hero 'center top' on 3 posts; internal links on all 13 posts`

---

## Internal-link mapping (final draft)

| # | Post slug | Service link | Industry link |
|---|---|---|---|
| 1 | `annual-fire-sprinkler-inspection-centennial` | `/services/fire-sprinkler-service-and-systems` | `/inspections` |
| 2 | `assisted-living-healthcare-lakewood` | `/services/fire-alarm-monitoring-services` | `/industries/assisted-living` |
| 3 | `backflow-prevention-highlands-ranch` | `/services/backflow-prevention-assemblies` | `/inspections` |
| 4 | `colorado-fire-code-changes-westminster` | `/services/consulting-services` | `/inspections` |
| 5 | `data-center-suppression-dtc` | `/services/fire-alarm-service-and-systems` | `/industries/data-centers` |
| 6 | `fire-alarm-monitoring-aurora` | `/services/fire-alarm-service-and-systems` | `/services/monitoring-services` |
| 7 | `fire-extinguisher-service-littleton` | `/services/portable-fire-extinguishers` | `/inspections` |
| 8 | `fire-sprinkler-systems-in-multi-family-properties` | `/services/fire-sprinkler-service-and-systems` | `/industries/multi-family-management-companies` |
| 9 | `inspection-report-arvada-ahj` | `/inspections` | `/services/consulting-services` |
| 10 | `kitchen-hood-suppression-boulder` | `/services/kitchen-hood-suppression-systems` | `/industries/restaurants` |
| 11 | `one-vendor-life-safety-denver` | `/inspections` | `/services/24-hour-service` |
| 12 | `retail-shopping-center-parker` | `/services/fire-alarm-service-and-systems` | `/industries/retail` |
| 13 | `wet-dry-antifreeze-sprinkler-fort-collins` | `/services/fire-sprinkler-service-and-systems` | `/services/consulting-services` |

---

## Files to change / create

**Modify:**
- `src/components/BlogSidebar.astro` — drop 2 socials, replace `services` prop with `categories`, add `activeCategory`.
- `src/pages/blog/index.astro` — extract grid into component, pass curated categories to sidebar.
- `src/content.config.ts` — add `heroPosition`, expand `category` enum to 7 values.
- `src/pages/blog/[slug].astro` — apply `heroPosition` to inline style.
- 3 × `src/content/blog/<slug>.md` — add `heroPosition: center top`.
- 13 × `src/content/blog/<slug>.md` — replace `#` placeholders + add 1–2 service/industry links.

**Create:**
- `src/components/BlogArchiveGrid.astro` — shared post grid + load-more for `/blog/` and archives.
- `src/pages/blog/category/[category].astro` — dynamic route for category archives.
- `src/data/site.ts` (or new file `src/data/blogCategories.ts`) — single source of truth for category `{ slug, label, enumValue }` records.

---

## Risks & open questions

- **Taxonomy decisions A, B, C** above are the only blockers. Everything else is mechanical.
- Schema enum expansion is **backward-compatible** (existing values preserved).
- 7 archives × 12 internal links per post = no 404 risk; all URLs verified to exist.
- Empty archives (e.g., `systems` today) show a clean message — no broken UI.
