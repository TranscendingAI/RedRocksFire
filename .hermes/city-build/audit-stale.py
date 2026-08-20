#!/usr/bin/env python3
"""For each city whose AHJ NAME changed vs what the subagent originally wrote,
count how many times the OLD ahj name still appears in that city's object
body (hero/services/faq/meta), which the name-field swap did not fix."""
import os, re

ROOT = "/Volumes/ZV-SSD/work/transcending-creative/RedRocksFire"
TARGET = os.path.join(ROOT, "src/data/cities.ts")
src = open(TARGET, encoding="utf-8").read()

# slug -> (old_ahj_substring_the_body_still_uses, correct_new_name)
changed = {
    "thornton-co": ("North Metro Fire Rescue", "Thornton Fire Department"),
    "federal-heights-co": ("North Metro Fire Rescue", "Federal Heights Fire Department"),
    "littleton-co": ("Littleton Fire Rescue", "South Metro Fire Rescue"),
    "englewood-co": ("Littleton Fire Rescue", "South Metro Fire Rescue"),
    "longmont-co": ("Longmont Fire Department", "Longmont Fire Services"),
    "superior-co": ("Rocky Mountain Fire", "Mountain View Fire Rescue"),
    "morrison-co": ("Inter-Canyon", "West Metro Fire Rescue"),
}

def obj_span(slug):
    i = src.find(f"slug: '{slug}'")
    # object starts at preceding '{' ; ends at the matching '},' before next slug or ']'
    start = src.rfind("{", 0, i)
    # crude end: next "\n  },\n" after i that is followed by another top-level object or array end
    end = src.find("\n  },", i)
    return src[start:end] if end > 0 else src[start:start+9000]

for slug,(old,new) in changed.items():
    body = obj_span(slug)
    # count old-name mentions in the WHOLE object, minus the ahj.name line (already fixed)
    total = body.count(old)
    # subtract mentions that are actually the corrected new name containing old as substring? none here.
    print(f"{slug}: {total} stale '{old}' mention(s) in body  ->  should be '{new}'")
