# City page build brief — Red Rocks Fire Protection (RRFPS)

You are writing ONE or more `City` data objects for an Astro site. Each object
powers an SEO city page at `/service-areas/<slug>/`. The company is Red Rocks
Fire Protection Services (RRFPS), a commercial fire-protection contractor
headquartered at 7076 S. Alton Way, Centennial, CO 80112. They inspect, test,
and maintain sprinklers, alarms, extinguishers, backflow, suppression, and
monitoring, and pitch a "One Vendor Life Safety Solution."

## The exact shape you must produce

Read `TEMPLATE-centennial.txt` in this same folder. It contains:
1. The full TypeScript `interface City` (and its sub-interfaces). Your object
   MUST satisfy every required field with the correct types.
2. The complete Centennial object as a worked example of depth + voice.

Match Centennial's DEPTH exactly for every city, regardless of city size:
- `neighborhoods`: 10–12 entries, each a REAL named neighborhood/district/
  corridor in that city with a plausible `type` and a specific one-line note.
- `servicesOffered`: 9 entries (you may reuse Centennial's service set, but
  localize the `body` copy — reference the city's real corridors/property types).
- `commonDeficiencies`: 6–7 entries.
- `faq`: 8 entries, city-specific questions.
- All other fields present and localized.

## Output format (CRITICAL)

Output ONLY valid TypeScript: a comma-separated sequence of `City` object
literals, each wrapped `{ ... },` — NO array brackets, NO `export`, NO imports,
NO markdown fences, NO prose before/after. Your output will be spliced directly
into the existing `cities: City[]` array. Precede each object with a comment
banner like the template uses:

    // ──────────────────────────────────────────────────────────────────
    // THORNTON, COLORADO
    // ──────────────────────────────────────────────────────────────────
    { slug: 'thornton-co', ... },

Use straight ASCII in code, but for apostrophes/quotes INSIDE string values use
the unicode escape `\u2019` for a curly apostrophe (e.g. `South Metro\u2019s`).
For the CO2 subscript use `CO\u2082`. Single-backslash only. Do NOT write
`\\u2019` (double backslash renders literally — this is a known past bug).

## no-ai-slop rules (MANDATORY — this is the whole point)

Write like a sharp human who knows fire code and knows this metro. Every
sentence must be specific to THIS city — if a sentence could be moved unchanged
to another city, it is filler; cut it or replace it with a fact, corridor,
neighborhood, or mechanism specific to this city.

BANNED words: delve, foster, leverage, utilize, facilitate, empower,
streamline, robust, cutting-edge, paradigm shift, game changer, tapestry,
realm, beacon, multifaceted, meticulous, intricate, paramount, transformative,
elevate, embark, supercharge, harness, ever-evolving, seamless, world-class,
nestled, vibrant, bustling, hidden gem, rich history, stunning.

BANNED patterns: "not just X but Y" contrasts; throat-clearing openers ("Here's
the thing"); "whether you're X or Y"; importance puffery ("plays a vital role,"
"stands as a testament"); em-dash rhythm crutches (1 max per paragraph, only if
it beats a comma); summary/recap endings; fake-profound kickers.

DO: active voice, concrete nouns (real highway names I-25/I-70/US-36/C-470/E-470,
real neighborhoods, real landmarks, real property types), plain verbs (is/has
over "serves as"). Numbers and mechanisms over adjectives.

## Honesty rules (MANDATORY)

- AHJ (fire authority) per city: use your best real-world knowledge of which
  fire department / protection district covers that city. It's fine to be
  correct-to-best-knowledge; do NOT invent a fake-precise phone number or a
  specific NFPA edition year you're unsure of. For `ahj.adoptedNFPA`, use the
  same "current adopted edition" phrasing Centennial uses rather than guessing
  edition years — EXCEPT where you genuinely know (e.g. Denver's 2022 code).
- `ahj.nonEmergencyPhone`: if you are not confident of the real number, use the
  generic RRFPS contact framing instead — set it to `'(720) 594-7969'` (the
  RRFPS main line) and phrase the AHJ note so it doesn't claim to be the AHJ's
  own line. Better a correct company number than a fabricated AHJ number.
- `ahj.website`: OMIT the website field entirely if you are not confident of the
  exact URL. The interface allows it to be present or a best-known URL, but a
  wrong URL is worse than none. When unsure, set it to `'https://www.rrfps.com/contact'`.
- Emergency response time: RRFPS advertises a ~90-minute response inside the
  Denver metro. For cities FAR from Centennial HQ — Fort Collins, Greeley, and
  the mountain towns (Evergreen, Conifer, Black Hawk, Central City, and to a
  lesser extent Morrison) — do NOT claim a 90-minute window. Instead say RRFPS
  covers the area on scheduled routes / planned service visits, booked ahead.
  Metro-adjacent cities (all the others) CAN use the ~90-minute framing.
- Do not invent statistics, exact building counts, or specific business names
  you're unsure exist. Real major landmarks/employers that are well-known are
  fine (Coors in Golden, Anschutz Medical Campus in Aurora, CSU in Fort
  Collins, the casinos in Black Hawk/Central City, etc.).

## Slug + meta rules

- `slug` and `meta.canonical` must match the assigned slug exactly, e.g.
  slug `'thornton-co'`, canonical `'/service-areas/thornton-co/'`.
- `bannerImage`: use `'/images/red-rocks-fire-protection-inspection-hero.jpg'`
  (shared placeholder — do NOT invent image paths).
- `meta.title`: `Fire Protection Services in <City>, CO | Red Rocks Fire Protection`
- Keep `ctaPair` pointing at `/contact` and `/services` like Centennial.

## Voice anchors (real local angles to lean into per city)

Use these as seeds; expand with your own real knowledge. One distinct angle per
city is what keeps them from reading as clones.

- Thornton/Northglenn/Federal Heights: North Metro Fire Rescue; I-25/104th/120th
  retail + apartments; older + new-growth mix.
- Westminster: split Adams/Jefferson County; US-36 corridor, Westminster Fire Dept.
- Brighton: Brighton Fire Rescue District; ag + new warehouse/distribution off I-76.
- Commerce City: South Adams County Fire; heavy industrial, refineries, Sand Creek,
  DIA-adjacent logistics.
- Littleton/Englewood/Sheridan: Littleton Fire Rescue; historic downtown Littleton,
  Broadway corridor, older housing stock, Swedish/Craig hospital area.
- Highlands Ranch/Lone Tree: South Metro Fire; master-planned HOA, Park Meadows
  retail (Lone Tree), Sky Ridge medical, C-470 corridor.
- Greenwood Village/DTC: South Metro Fire; Class-A high-rise office, I-25/Belleview,
  clean-agent for data.
- Cherry Hills Village: South Metro; large-lot luxury residential, residential
  sprinkler (13D) retrofits.
- Aurora: Aurora Fire Rescue; Anschutz Medical Campus, Buckley SFB, Stanley
  Marketplace, huge geographic spread across Arapahoe+Adams+Douglas.
- Parker/Castle Rock/Castle Pines: South Metro (Parker) / Castle Rock Fire; fast
  growth, Outlets at Castle Rock, master-planned, I-25.
- Elizabeth/Franktown/Larkspur: Elizabeth FPD / Franktown (Franktown Fire) /
  Larkspur FPD; rural, ag, wildland-interface, propane/agricultural hazards,
  Renaissance Festival (Larkspur). FAR-ish — scheduled routes framing OK to lean.
- Lakewood: West Metro Fire Rescue; Belmar, Federal Center, Colfax/Union corridor.
- Arvada: Arvada Fire Protection District; Olde Town Arvada, Ralston, G-Line.
- Golden: Golden Fire Dept; Coors (Molson Coors) brewery, Colorado School of Mines,
  canyon/foothills WUI, historic downtown.
- Wheat Ridge/Edgewater: West Metro Fire; older bungalow stock, Sloan's Lake
  (Edgewater), Wadsworth/38th corridors.
- Boulder: Boulder Fire-Rescue; CU Boulder, Pearl Street, foothills WUI, labs/tech
  (13R mid-rise + research clean-agent).
- Broomfield: North Metro Fire; Interlocken/Arista, US-36 tech corridor,
  consolidated city-and-county.
- Lafayette/Louisville/Superior/Erie: Louisville FPD / Mountain View Fire (Erie) /
  Boulder County; post-Marshall-Fire interface awareness, tech/light-industrial,
  fast residential growth.
- Longmont: Longmont Fire Dept; US-287, manufacturing/distribution, downtown Main St.
- Fort Collins: Poudre Fire Authority; CSU, Old Town breweries (New Belgium,
  Odell), Harmony Rd tech corridor. FAR — scheduled routes framing.
- Greeley: Greeley Fire Dept; JBS meatpacking, UNC, ag/energy, Weld County.
  FAR — scheduled routes framing.
- Evergreen/Conifer/Morrison: Evergreen Fire/Rescue, Elk Creek (Conifer), Inter-
  Canyon; mountain WUI, Red Rocks Amphitheatre (Morrison), dry systems, propane,
  seasonal/vacation properties. FAR/mountain — scheduled routes framing.
- Black Hawk/Central City: Black Hawk FD / Central City FD; casino high-rises
  (Ameristar, Monarch), historic 1800s mining-district buildings, high-piled
  storage + assembly occupancy + hotel life-safety stacks at altitude. FAR/
  mountain — scheduled routes framing.

Localize everything. Verify your object against the interface before returning.
