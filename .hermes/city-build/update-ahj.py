#!/usr/bin/env python3
"""Update ahj.name / nonEmergencyPhone / website / note for every city in
src/data/cities.ts from the real AHJ directory. Replaces the WHOLE note so
the phone framing is correct (the old notes called the number 'our main
line' — now it's the AHJ's real non-emergency line).

Special cases (Commerce City, Golden, Sheridan, DTC) get bespoke notes.
Everything else gets a clean templated note. Escapes apostrophes as \\u2019
-> NO: we write raw curly apostrophes to match the rest of the file.
"""
import os, re, csv

ROOT = "/Volumes/ZV-SSD/work/transcending-creative/RedRocksFire"
TARGET = os.path.join(ROOT, "src/data/cities.ts")
CSVP = os.path.join(ROOT, "reference/rrfs-ahj-directory.csv")

APOS = "\u2019"  # curly '

def fmt_phone(p):
    """303-538-7602 -> (303) 538-7602"""
    d = re.sub(r"\D", "", p)
    if len(d) == 10:
        return f"({d[0:3]}) {d[3:6]}-{d[6:]}"
    return p

# Load CSV
csv_rows = {}
with open(CSVP, encoding="utf-8") as f:
    for r in csv.DictReader(f):
        csv_rows[r["City"].strip()] = r

city_to_slug = {
    "Thornton":"thornton-co","Westminster":"westminster-co","Brighton":"brighton-co",
    "Northglenn":"northglenn-co","Commerce City":"commerce-city-co","Federal Heights":"federal-heights-co",
    "Littleton":"littleton-co","Highlands Ranch":"highlands-ranch-co","Englewood":"englewood-co",
    "Greenwood Village":"greenwood-village-co","Denver Tech Center":"denver-tech-center-co",
    "Lone Tree":"lone-tree-co","Sheridan":"sheridan-co","Cherry Hills Village":"cherry-hills-village-co",
    "Aurora":"aurora-co","Parker":"parker-co","Castle Rock":"castle-rock-co","Castle Pines":"castle-pines-co",
    "Elizabeth":"elizabeth-co","Franktown":"franktown-co","Larkspur":"larkspur-co",
    "Lakewood":"lakewood-co","Arvada":"arvada-co","Golden":"golden-co","Wheat Ridge":"wheat-ridge-co",
    "Edgewater":"edgewater-co","Boulder":"boulder-co","Broomfield":"broomfield-co","Lafayette":"lafayette-co",
    "Longmont":"longmont-co","Louisville":"louisville-co","Erie":"erie-co","Superior":"superior-co",
    "Fort Collins":"fort-collins-co","Greeley":"greeley-co","Evergreen":"evergreen-co","Conifer":"conifer-co",
    "Morrison":"morrison-co","Black Hawk":"black-hawk-co","Central City":"central-city-co",
}

# Bespoke overrides: slug -> dict(name, phone, website, note)
SPECIAL = {
    "commerce-city-co": {
        "name": "South Adams County Fire Department",
        "phone": "(303) 288-0835",
        "website": "https://www.sacfd.org/",
        "note": (
            f"Fire-code authority in Commerce City is address-dependent: most of the city is served by "
            f"South Adams County Fire Department at (303) 288-0835 (sacfd.org), while portions on the "
            f"northeast side fall under Brighton Fire Rescue District at (303) 659-4101 (brightonfire.org). "
            f"We confirm which AHJ covers a given property before scheduling, and build every deficiency list "
            f"to match that authority{APOS}s format so corrections clear without rework."
        ),
    },
    "golden-co": {
        "name": "Golden Fire Department",
        "phone": "(303) 384-8090",
        "website": "https://www.cityofgolden.net/government/departments-divisions/fire-department/",
        "note": (
            f"Fire-code authority in Golden is address-dependent: properties inside the city are served by "
            f"Golden Fire Department at (303) 384-8090, while areas outside the city limits fall under "
            f"West Metro Fire Rescue at (303) 989-4307 (westmetrofire.org). We confirm which AHJ covers a "
            f"property before scheduling and format inspection reports to that authority{APOS}s preferred layout."
        ),
    },
    "sheridan-co": {
        "name": "South Metro Fire Rescue",
        "phone": "(720) 989-2000",
        "website": "https://www.southmetro.org/",
        "note": (
            f"The fire-code authority for a Sheridan property should be confirmed by address. South Metro Fire "
            f"Rescue at (720) 989-2000 (southmetro.org) covers the surrounding south-metro area and is the most "
            f"likely authority, but Sheridan sits against several jurisdictions{APOS} boundaries{APOS} so we verify "
            f"the AHJ for each property before scheduling and format the report to match."
        ),
    },
    "denver-tech-center-co": {
        "name": "South Metro Fire Rescue",
        "phone": "(720) 989-2000",
        "website": "https://www.southmetro.org/",
        "note": (
            f"The Denver Tech Center is not an incorporated municipality; most of it sits in Greenwood Village "
            f"and Centennial and is served by South Metro Fire Rescue at (720) 989-2000 (southmetro.org). Because "
            f"the DTC straddles jurisdictional lines, we verify the AHJ by address before scheduling and format "
            f"every report to the authority that inspects the building."
        ),
    },
}

src = open(TARGET, encoding="utf-8").read()

# Regex to capture a city's ahj block fields. We anchor on slug, then find the
# ahj:{...} and replace name/nonEmergencyPhone/website/note within it.
def update_city(src, slug, name, phone, website, note):
    i = src.find(f"slug: '{slug}'")
    if i < 0:
        return src, f"SLUG NOT FOUND"
    aj = src.find("ahj:", i)
    if aj < 0:
        return src, "no ahj:"
    # The ahj block ends at the "note:" value's closing quote + newline + "    },"
    # Find the note key within a reasonable window, then its closing '.
    # We'll rebuild name/phone/website via targeted subs limited to [aj, block_end].
    # Determine block end: first "\n    }," after aj.
    block_end = src.find("\n    },", aj)
    block = src[aj:block_end]

    def sub1(b, key, val):
        # replace  key: '...'  (single-quoted, possibly multi-line for note)
        pat = re.compile(rf"({key}:\s*\n?\s*)'((?:[^'\\]|\\.)*)'", re.S)
        newb, n = pat.subn(lambda m: m.group(1) + "'" + val.replace("'", APOS) + "'", b, count=1)
        return newb, n

    changes = []
    for key, val in [("name", name), ("nonEmergencyPhone", phone), ("website", website), ("note", note)]:
        block, n = sub1(block, key, val)
        changes.append(f"{key}:{n}")
    return src[:aj] + block + src[block_end:], ",".join(changes)

report = []
for city, slug in city_to_slug.items():
    if slug in SPECIAL:
        s = SPECIAL[slug]
        name, phone, website, note = s["name"], s["phone"], s["website"], s["note"]
    else:
        r = csv_rows[city]
        name = r["AHJ"].strip()
        phone = fmt_phone(r["Phone"].strip())
        website = r["Website"].strip()
        note = (
            f"{name} is the Authority Having Jurisdiction for {city} and conducts the fire inspections for "
            f"commercial, multi-family, and institutional properties in the city. Its non-emergency line is "
            f"{phone}, and permitting and code information is at {website}. We schedule inspection and testing "
            f"work with your on-site team and format every deficiency list to match what {name.split('(')[0].strip()}"
            f"{APOS}s prevention staff expect, so corrections get signed off without rework."
        )
    src, status = update_city(src, slug, name, phone, website, note)
    report.append(f"{slug}: {status}")

open(TARGET, "w", encoding="utf-8").write(src)
print("\n".join(report))
