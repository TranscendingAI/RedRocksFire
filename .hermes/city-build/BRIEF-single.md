# SINGLE-CITY build brief — Red Rocks Fire Protection (RRFPS)

You write EXACTLY ONE `City` TypeScript object and save it to a file. Company:
Red Rocks Fire Protection Services (RRFPS), a commercial fire-protection
contractor at 7076 S. Alton Way, Centennial, CO 80112. They inspect, test, and
maintain sprinklers, alarms, extinguishers, backflow, suppression, and
monitoring — the "One Vendor Life Safety Solution."

## STEP ORDER (do not deviate — past runs ran out of iterations by writing prose first)

1. Read `TEMPLATE-centennial.txt` in this folder (the `interface City` + the full
   Centennial example) with read_file.
2. Compose your ONE object in your head.
3. write_file it to the assigned output path IMMEDIATELY. Do this in as few tool
   calls as possible — you have a hard iteration cap.
4. Read it back once to confirm it saved. Report the path + slug. Stop.

## Depth (match Centennial exactly)

- `neighborhoods`: 10-12 REAL named districts/corridors in this city, each with a
  plausible `type` (one of: Residential | Master-Planned | Mixed-Use |
  Commercial Corridor | Industrial | Retail) and a specific one-line note.
- `servicesOffered`: 9 entries (reuse Centennial's set but localize each `body`).
- `commonDeficiencies`: 6-7 entries.
- `faq`: 8 city-specific Q&A entries.
- Every other interface field present with correct types.

## OUTPUT FORMAT (critical)

Write ONLY the object literal, preceded by a comment banner, ending with a comma:

    // ──────────────────────────────────────────────────────────────────
    // <CITY>, COLORADO
    // ──────────────────────────────────────────────────────────────────
    {
      slug: '<assigned-slug>',
      ...
    },

NO array brackets, NO `export`, NO imports, NO markdown fences, NO prose outside
the object. It will be spliced into an existing `cities: City[]` array.

## CHARACTERS (critical — avoid the escape bug from the last run)

Write apostrophes, em-dashes, and subscripts as RAW UTF-8 characters directly in
the string literals. Type a real ’ (curly apostrophe), a real — (em dash) ONLY
where truly needed, and a real ₂ for CO₂. DO NOT use backslash-u escapes like
\\u2019 or \\u2014 — the last run double-escaped them and they rendered as literal
text. Raw characters only.

## no-ai-slop rules (MANDATORY)

Write like a sharp human who knows fire code and this metro. Every sentence must
be specific to THIS city — if a sentence could move unchanged to another city,
it is filler; replace it with a real corridor, neighborhood, landmark, or
mechanism specific to this city.

BANNED words: delve, foster, leverage, utilize, facilitate, empower, streamline,
robust, cutting-edge, paradigm shift, game changer, tapestry, realm, beacon,
multifaceted, meticulous, intricate, paramount, transformative, elevate, embark,
supercharge, harness, ever-evolving, seamless, world-class, nestled, vibrant,
bustling, hidden gem, rich history, stunning.

BANNED patterns: "not just X but Y"; throat-clearing openers; "whether you're X
or Y"; importance puffery ("plays a vital role"); em-dash rhythm crutches (at
most ONE em dash per paragraph, only if it clearly beats a comma); summary/recap
endings; fake-profound kickers.

DO: active voice, concrete nouns (real highways I-25/I-70/US-36/US-287/C-470/
E-470, real neighborhoods, landmarks, property types), plain verbs. Numbers and
mechanisms over adjectives.

## Honesty rules (MANDATORY)

- `ahj.name`: the real fire department / protection district for this city (given
  in your task context). `adoptedNFPA`: use Centennial's "current adopted
  edition" phrasing rather than guessing edition years.
- `ahj.nonEmergencyPhone`: set to `'(720) 594-7969'` (RRFPS main line) and word
  the `note` so it's clear that number reaches RRFPS, telling the reader to
  confirm the AHJ's own permitting line with the authority. Do NOT fabricate the
  AHJ's phone.
- `ahj.website`: set to `'https://www.rrfps.com/contact'` (do not guess the AHJ's
  real URL).
- Response time: RRFPS advertises ~90 minutes inside the Denver metro. Your task
  context says whether this city is METRO-ADJACENT (90-minute framing OK) or
  FAR/MOUNTAIN (use scheduled-route / planned-visit framing, NO 90-minute claim).
- Don't invent statistics or business names you're unsure of. Well-known real
  landmarks/employers are fine.

## Slug + meta

- `slug` and `meta.canonical` must match the assigned slug exactly (canonical =
  `/service-areas/<slug>/`).
- `bannerImage`: `'/images/red-rocks-fire-protection-inspection-hero.jpg'`.
- `meta.title`: `Fire Protection Services in <City>, CO | Red Rocks Fire Protection`.
- `ctaPair`: two entries pointing at `/contact` and `/services`, like Centennial.

Verify against the interface before saving. One object. Raw characters. write_file first.
