#!/usr/bin/env python3
"""Fix stale AHJ names in the BODY copy of the 5 changed cities. Scoped to each
city's object span. SURGICAL: only replaces full AHJ-name forms, never the bare
geographic 'North Metro' / 'north metro'. Handles possessive 'North Metro's' and
'North Metro ' (as AHJ) only inside Thornton/Federal Heights spans where every
North-Metro reference IS the (now-wrong) AHJ.
"""
import os

ROOT = "/Volumes/ZV-SSD/work/transcending-creative/RedRocksFire"
TARGET = os.path.join(ROOT, "src/data/cities.ts")
src = open(TARGET, encoding="utf-8").read()

def span(slug):
    i = src.index(f"slug: '{slug}'")
    start = src.rfind("{", 0, i)
    end = src.index("\n  },", i)
    return start, end

# For Thornton & Federal Heights: in THEIR spans, every "North Metro..." phrase
# is the AHJ (they have no legitimate North Metro district affiliation now).
# But the GEOGRAPHIC 'north metro' (lowercase) and 'the north metro' must be kept.
# So we replace, in this order, only these exact AHJ forms:
def fix_north_metro(seg, newname):
    seg = seg.replace("North Metro Fire Rescue District", newname)
    seg = seg.replace("North Metro Fire Rescue", newname)
    # possessive + trailing forms where 'North Metro' clearly = the AHJ
    seg = seg.replace("North Metro\u2019s", newname + "\u2019s")
    seg = seg.replace("North Metro\u2013", newname + "\u2013")   # 'North Metro–formatted'
    seg = seg.replace("North Metro–", newname + "–")
    seg = seg.replace("what North Metro ", f"what {newname} ")
    seg = seg.replace("into North Metro", f"into {newname}")
    seg = seg.replace("a common North Metro", f"a common {newname}")
    seg = seg.replace("common North Metro", f"common {newname}")
    seg = seg.replace("the North Metro AHJ", f"the {newname} AHJ")
    seg = seg.replace("North Metro sign-off", f"{newname} sign-off")
    seg = seg.replace("North Metro inspection", f"{newname} inspection")
    seg = seg.replace("North Metro reports", f"{newname} reports")
    seg = seg.replace("North Metro increasingly", f"{newname} increasingly")
    seg = seg.replace("North Metro expects", f"{newname} expects")
    seg = seg.replace("North Metro accepts", f"{newname} accepts")
    seg = seg.replace("North Metro signs off", f"{newname} signs off")
    seg = seg.replace("North Metro is most likely", f"{newname} is most likely")
    seg = seg.replace("North Metro requires", f"{newname} requires")
    seg = seg.replace("North Metro plan reviewers", f"{newname} plan reviewers")
    return seg

report = []

for slug, newname in [("thornton-co", "Thornton Fire Department"),
                      ("federal-heights-co", "Federal Heights Fire Department")]:
    s, e = span(slug)
    seg = src[s:e]
    before = seg.count("North Metro")
    seg = fix_north_metro(seg, newname)
    after = seg.count("North Metro")
    src = src[:s] + seg + src[e:]
    report.append(f"{slug}: North Metro {before} -> {after} remaining")

# Littleton: plain swap, no geographic collision
for slug in ["littleton-co"]:
    s, e = span(slug); seg = src[s:e]
    before = seg.count("Littleton Fire Rescue")
    seg = seg.replace("Littleton Fire Rescue", "South Metro Fire Rescue")
    src = src[:s] + seg + src[e:]
    report.append(f"{slug}: Littleton Fire Rescue {before} -> 0")

# Englewood: de-consolidation phrasing + plain swap
s, e = span("englewood-co"); seg = src[s:e]
seg = seg.replace(
    "Fire service in Englewood is provided by Littleton Fire Rescue under the consolidated Littleton/Englewood arrangement, so Littleton Fire Rescue is the authority that conducts on-site fire inspections and enforces the fire code for properties in the city.",
    "Englewood transitioned fire services to South Metro Fire Rescue in 2015, so South Metro Fire Rescue is the authority that conducts on-site fire inspections and enforces the fire code for properties in the city.")
seg = seg.replace(
    "Fire service here is delivered through Littleton Fire Rescue under the consolidated Littleton/Englewood arrangement",
    "Fire service here is delivered by South Metro Fire Rescue, which took over Englewood fire services in 2015")
seg = seg.replace("under the consolidated Littleton/Englewood arrangement", "under South Metro Fire Rescue")
before = seg.count("Littleton Fire Rescue")
seg = seg.replace("Littleton Fire Rescue", "South Metro Fire Rescue")
src = src[:s] + seg + src[e:]
report.append(f"englewood-co: remaining Littleton Fire Rescue after = {seg.count('Littleton Fire Rescue')} (was {before})")

# Longmont: Department -> Services
s, e = span("longmont-co"); seg = src[s:e]
before = seg.count("Longmont Fire Department")
seg = seg.replace("Longmont Fire Department", "Longmont Fire Services")
src = src[:s] + seg + src[e:]
report.append(f"longmont-co: Longmont Fire Department {before} -> 0")

open(TARGET, "w", encoding="utf-8").write(src)
print("\n".join(report))
