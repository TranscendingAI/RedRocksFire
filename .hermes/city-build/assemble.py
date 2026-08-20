#!/usr/bin/env python3
"""Assemble all city objects in .hermes/city-build/cities/*.ts into
src/data/cities.ts, inserting them right before the `];` that closes the
`cities` array (the first top-level `];` in the file).
"""
import os, glob, sys

ROOT = "/Volumes/ZV-SSD/work/transcending-creative/RedRocksFire"
CITIES_DIR = os.path.join(ROOT, ".hermes/city-build/cities")
TARGET = os.path.join(ROOT, "src/data/cities.ts")

# Stable order: alphabetical by filename
files = sorted(glob.glob(os.path.join(CITIES_DIR, "*.ts")))
assert files, "no city files found"

blocks = []
for f in files:
    txt = open(f, encoding="utf-8").read().rstrip()
    # sanity: each fragment must contain a slug and end with a closing brace+comma
    if "slug:" not in txt:
        print("WARN: no slug in", f); 
    if not txt.endswith(","):
        txt = txt + ","
    blocks.append(txt)

joined = "\n\n" + "\n\n".join(blocks) + "\n"

src = open(TARGET, encoding="utf-8").read()
lines = src.splitlines(keepends=True)

# Find the first top-level `];` (column 0). That closes `cities`.
insert_idx = None
for i, ln in enumerate(lines):
    if ln.startswith("];"):
        insert_idx = i
        break
assert insert_idx is not None, "could not find closing ];"

# Insert the joined blocks BEFORE the `];` line.
new_src = "".join(lines[:insert_idx]) + joined + "".join(lines[insert_idx:])
open(TARGET, "w", encoding="utf-8").write(new_src)

# Report
n_slugs = new_src.count("\n  slug: '") + new_src.count("\n    slug: '")
print(f"Inserted {len(blocks)} city blocks before line {insert_idx+1}.")
print(f"cities.ts now {len(new_src.splitlines())} lines; ~{n_slugs} slug: fields total (incl. interface + counties stubs).")
