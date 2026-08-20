#!/usr/bin/env python3
"""Audit the LIVE src/data/cities.ts: for each city slug, compare current
ahj.name to the CSV AHJ. Read-only."""
import os, re, csv

ROOT = "/Volumes/ZV-SSD/work/transcending-creative/RedRocksFire"
TARGET = os.path.join(ROOT, "src/data/cities.ts")
CSVP = os.path.join(ROOT, "reference/rrfs-ahj-directory.csv")

rows = {}
with open(CSVP, encoding="utf-8") as f:
    for r in csv.DictReader(f):
        rows[r["City"].strip()] = r

name_to_slug = {
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

src = open(TARGET, encoding="utf-8").read()

def ahj_block_for(slug):
    # find "slug: 'X'," then the following "ahj: { ... name: '...' ...}"
    i = src.find(f"slug: '{slug}'")
    if i < 0: return None
    j = src.find("ahj:", i)
    if j < 0: return None
    m = re.search(r"name:\s*'((?:[^'\\]|\\.)*)'", src[j:j+400])
    return m.group(1) if m else None

for city, slug in name_to_slug.items():
    cur = ahj_block_for(slug)
    csv_name = rows[city]["AHJ"]
    tag = "SAME" if cur == csv_name else "DIFF"
    print(f"[{tag}] {slug}\n   cur: {cur}\n   csv: {csv_name}")
