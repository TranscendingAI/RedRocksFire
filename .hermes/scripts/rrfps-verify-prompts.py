import importlib.util
import os

REPO = "/Volumes/ZV-SSD/work/transcending-creative/RedRocksFire"
spec = importlib.util.spec_from_file_location(
    "gen", os.path.join(REPO, ".hermes/scripts/rrfps-generate-images.py")
)
assert spec and spec.loader
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

items = mod.parse_prompts(os.path.join(REPO, "reference/content/rrfps-9-service-pages-image-prompts.md"))
print(f"parsed: {len(items)} (expect 72)")
ratios = [r for r, _ in items]
print(f"16:9: {ratios.count('16:9')} (expect 36)   4:3: {ratios.count('4:3')} (expect 36)")
for i, (r, p) in enumerate(items[:3], 1):
    print(f"  {i}. [{r}] {p[:75]}...")
print("  ...")
for i, (r, p) in enumerate(items[-2:], len(items) - 1):
    print(f"  {i}. [{r}] {p[:75]}...")
assert len(items) == 72, "PARSE COUNT WRONG - DO NOT RUN GENERATION"
assert ratios.count("16:9") == 36 and ratios.count("4:3") == 36
print("PARSE OK — safe to generate")