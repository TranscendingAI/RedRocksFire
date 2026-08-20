#!/usr/bin/env python3
"""Wire cityRegions hub-card hrefs: rewrite every 2-arg stub('Name','slug')
to a 3-arg stub('Name','slug','/service-areas/slug/') so the hub city cards
link to the now-built pages. Only touches 2-arg stubs (county stubs already
have a 3rd arg and are left alone). Idempotent.
"""
import os, re, glob

ROOT = "/Volumes/ZV-SSD/work/transcending-creative/RedRocksFire"
TARGET = os.path.join(ROOT, "src/data/cities.ts")

# Set of slugs that actually have a built page (dist dirs).
dist_dir = os.path.join(ROOT, "dist/service-areas")
built = set()
for name in os.listdir(dist_dir):
    p = os.path.join(dist_dir, name)
    if os.path.isdir(p) and name != "counties":
        built.add(name)

src = open(TARGET, encoding="utf-8").read()

# Match: stub('Display Name', 'some-slug-co')  with EXACTLY two args
# (no third arg). Capture name + slug.
pat = re.compile(r"stub\(('(?:[^'\\]|\\.)*'),\s*('([a-z0-9-]+)')\)")

count = {"wired": 0, "skipped_no_page": 0}

def repl(m):
    name_lit, slug_lit, slug = m.group(1), m.group(2), m.group(3)
    if slug in built:
        count["wired"] += 1
        return f"stub({name_lit}, {slug_lit}, '/service-areas/{slug}/')"
    else:
        count["skipped_no_page"] += 1
        return m.group(0)  # leave as-is (defaults to '#')

new_src = pat.sub(repl, src)
open(TARGET, "w", encoding="utf-8").write(new_src)
print(f"Wired {count['wired']} city stubs to real hrefs.")
print(f"Left {count['skipped_no_page']} stubs at '#' (no built page).")
