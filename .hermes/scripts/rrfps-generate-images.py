#!/usr/bin/env python3
"""
RRFPS — batch image generation for the 9 service pages.

Reads prompts from reference/content/rrfps-9-service-pages-image-prompts.md
(pages × 8 slots, parsed from the `### §N — ... (`filename`, ratio)` headings
+ following paragraph), generates each via:

    higgsfield generate create nano_banana --prompt "<prompt>" --aspect_ratio N:N

downloads the CloudFront result, and saves it to public/images/ with an
SEO-optimized, lowercase-hyphen filename tied to the page topic.

Progress log: /tmp/rrfps-image-gen.log
State file:   /tmp/rrfps-image-gen-state.json  (skips already-downloaded files,
              so the script can be re-run safely after an interruption)
"""

import json
import os
import re
import subprocess
import sys
import time

REPO = "/Volumes/ZV-SSD/work/transcending-creative/RedRocksFire"
PROMPTS_MD = os.path.join(REPO, "reference/content/rrfps-9-service-pages-image-prompts.md")
OUT_DIR = os.path.join(REPO, "public/images")
LOG = "/tmp/rrfps-image-gen.log"
STATE = "/tmp/rrfps-image-gen-state.json"

# Ordered SEO filenames: 9 pages × 8 slots, in the exact order the prompts
# appear in the .md (§0 hero, §2 why, §3 accordion, §4 contractor, §5 advocacy,
# §6 why-clients-stay, §7 experience, §8 promise).
SEO_NAMES = [
    # Page 1 — Fire Alarm Monitoring Services
    "rrfps-fire-alarm-monitoring-page-hero.png",
    "rrfps-fire-alarm-monitoring-why-red-rocks-bg.jpg",
    "rrfps-fire-alarm-monitoring-services-accordion-bg.jpg",
    "rrfps-fire-alarm-monitoring-more-than-a-service-contractor.jpg",
    "rrfps-fire-alarm-monitoring-advocacy.jpg",
    "rrfps-fire-alarm-monitoring-why-clients-stay-bg.jpg",
    "rrfps-fire-alarm-monitoring-experience.jpg",
    "rrfps-fire-alarm-monitoring-ready-when-you-are.jpg",
    # Page 2 — Backflow Prevention Assemblies
    "rrfps-backflow-prevention-page-hero.png",
    "rrfps-backflow-prevention-why-red-rocks-bg.jpg",
    "rrfps-backflow-prevention-services-accordion-bg.jpg",
    "rrfps-backflow-prevention-more-than-a-service-contractor.jpg",
    "rrfps-backflow-prevention-advocacy.jpg",
    "rrfps-backflow-prevention-why-clients-stay-bg.jpg",
    "rrfps-backflow-prevention-experience.jpg",
    "rrfps-backflow-prevention-ready-when-you-are.jpg",
    # Page 3 — Portable Fire Extinguishers
    "rrfps-portable-fire-extinguishers-page-hero.png",
    "rrfps-portable-fire-extinguishers-why-red-rocks-bg.jpg",
    "rrfps-portable-fire-extinguishers-services-accordion-bg.jpg",
    "rrfps-portable-fire-extinguishers-more-than-a-service-contractor.jpg",
    "rrfps-portable-fire-extinguishers-advocacy.jpg",
    "rrfps-portable-fire-extinguishers-why-clients-stay-bg.jpg",
    "rrfps-portable-fire-extinguishers-experience.jpg",
    "rrfps-portable-fire-extinguishers-ready-when-you-are.jpg",
    # Page 4 — Distributed Antenna Systems (DAS)
    "rrfps-distributed-antenna-systems-page-hero.png",
    "rrfps-distributed-antenna-systems-why-red-rocks-bg.jpg",
    "rrfps-distributed-antenna-systems-services-accordion-bg.jpg",
    "rrfps-distributed-antenna-systems-more-than-a-service-contractor.jpg",
    "rrfps-distributed-antenna-systems-advocacy.jpg",
    "rrfps-distributed-antenna-systems-why-clients-stay-bg.jpg",
    "rrfps-distributed-antenna-systems-experience.jpg",
    "rrfps-distributed-antenna-systems-ready-when-you-are.jpg",
    # Page 5 — Security System Installation & Monitoring
    "rrfps-security-system-monitoring-page-hero.png",
    "rrfps-security-system-monitoring-why-red-rocks-bg.jpg",
    "rrfps-security-system-monitoring-services-accordion-bg.jpg",
    "rrfps-security-system-monitoring-more-than-a-service-contractor.jpg",
    "rrfps-security-system-monitoring-advocacy.jpg",
    "rrfps-security-system-monitoring-why-clients-stay-bg.jpg",
    "rrfps-security-system-monitoring-experience.jpg",
    "rrfps-security-system-monitoring-ready-when-you-are.jpg",
    # Page 6 — Kitchen Hood Suppression Systems
    "rrfps-kitchen-hood-suppression-page-hero.png",
    "rrfps-kitchen-hood-suppression-why-red-rocks-bg.jpg",
    "rrfps-kitchen-hood-suppression-services-accordion-bg.jpg",
    "rrfps-kitchen-hood-suppression-more-than-a-service-contractor.jpg",
    "rrfps-kitchen-hood-suppression-advocacy.jpg",
    "rrfps-kitchen-hood-suppression-why-clients-stay-bg.jpg",
    "rrfps-kitchen-hood-suppression-experience.jpg",
    "rrfps-kitchen-hood-suppression-ready-when-you-are.jpg",
    # Page 7 — Area of Refuge Communication Systems
    "rrfps-area-of-refuge-communication-page-hero.png",
    "rrfps-area-of-refuge-communication-why-red-rocks-bg.jpg",
    "rrfps-area-of-refuge-communication-services-accordion-bg.jpg",
    "rrfps-area-of-refuge-communication-more-than-a-service-contractor.jpg",
    "rrfps-area-of-refuge-communication-advocacy.jpg",
    "rrfps-area-of-refuge-communication-why-clients-stay-bg.jpg",
    "rrfps-area-of-refuge-communication-experience.jpg",
    "rrfps-area-of-refuge-communication-ready-when-you-are.jpg",
    # Page 8 — Consulting Services
    "rrfps-fire-life-safety-consulting-page-hero.png",
    "rrfps-fire-life-safety-consulting-why-red-rocks-bg.jpg",
    "rrfps-fire-life-safety-consulting-services-accordion-bg.jpg",
    "rrfps-fire-life-safety-consulting-more-than-a-service-contractor.jpg",
    "rrfps-fire-life-safety-consulting-advocacy.jpg",
    "rrfps-fire-life-safety-consulting-why-clients-stay-bg.jpg",
    "rrfps-fire-life-safety-consulting-experience.jpg",
    "rrfps-fire-life-safety-consulting-ready-when-you-are.jpg",
    # Page 9 — 24-Hour Emergency Service
    "rrfps-24-hour-emergency-service-page-hero.png",
    "rrfps-24-hour-emergency-service-why-red-rocks-bg.jpg",
    "rrfps-24-hour-emergency-service-services-accordion-bg.jpg",
    "rrfps-24-hour-emergency-service-more-than-a-service-contractor.jpg",
    "rrfps-24-hour-emergency-service-advocacy.jpg",
    "rrfps-24-hour-emergency-service-why-clients-stay-bg.jpg",
    "rrfps-24-hour-emergency-service-experience.jpg",
    "rrfps-24-hour-emergency-service-ready-when-you-are.jpg",
]


def log(msg):
    line = msg.rstrip("\n")
    print(line, flush=True)
    with open(LOG, "a") as f:
        f.write(line + "\n")


def parse_prompts(path):
    """Extract (ratio, prompt) pairs in document order from the .md."""
    with open(path) as f:
        text = f.read()
    # Each slot: a heading line ending in (`something`, 16:9|4:3) followed by
    # a prompt paragraph until the next '###' / '---' / '#' heading.
    pattern = re.compile(
        r"^### .*?\(`?([^`(),]+)`?,\s*(16:9|4:3)\s*\)\s*$\n(.+?)(?=^\n### |^\n--- |^\n# |^\n\n)",
        re.M | re.S,
    )
    items = []
    for m in pattern.finditer(text):
        ratio = m.group(2)
        prompt = " ".join(m.group(3).split())  # collapse whitespace
        items.append((ratio, prompt))
    return items


def load_state():
    if os.path.exists(STATE):
        with open(STATE) as f:
            return json.load(f)
    return {"done": {}}


def save_state(state):
    with open(STATE, "w") as f:
        json.dump(state, f, indent=1)


def generate_one(prompt, ratio):
    """Run higgsfield CLI (blocking with --wait) and return the result URL."""
    cmd = [
        "higgsfield", "generate", "create", "nano_banana",
        "--prompt", prompt,
        "--aspect_ratio", ratio,
        "--wait", "--wait-timeout", "10m", "--wait-interval", "5s",
        "--json",
    ]
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=900)
    out = result.stdout + result.stderr
    # Result URL(s) print with --wait; accept cloudfront or any image URL.
    m = re.search(r"https://[^\s\"']+cloudfront[^\s\"']+", out)
    if not m:
        m = re.search(r"https://[^\s\"']+\.(?:png|jpg|jpeg|webp)[^\s\"']*", out)
    if not m:
        raise RuntimeError(f"No URL in higgsfield output. stdout/stderr tail:\n{out[-800:]}")
    return m.group(0).rstrip(".,)")


def download(url, dest, attempts=3):
    """Download with retries; require a real, non-trivial image file."""
    last_err = None
    for attempt in range(1, attempts + 1):
        try:
            subprocess.run(["curl", "-sL", "--retry", "3", "--retry-delay", "2",
                            "-o", dest, url], check=True, timeout=300)
            size = os.path.getsize(dest) if os.path.exists(dest) else 0
            if size < 2000:
                last_err = f"Download too small ({size} B): {dest}"
                continue
            return
        except Exception as e:
            last_err = str(e)
        time.sleep(3)
    raise RuntimeError(f"Download failed after {attempts} attempts: {last_err}")


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    prompts = parse_prompts(PROMPTS_MD)
    if len(prompts) != len(SEO_NAMES):
        log(f"FATAL: parsed {len(prompts)} prompts but have {len(SEO_NAMES)} SEO names — aborting.")
        sys.exit(1)

    state = load_state()
    total = len(prompts)
    ok = sum(1 for v in state["done"].values() if v == "ok")
    log(f"=== RRFPS batch image generation: {total} images ({ok} already done) ===")

    failures = []
    for i, ((ratio, prompt), filename) in enumerate(zip(prompts, SEO_NAMES), 1):
        if state["done"].get(filename) == "ok" and os.path.exists(os.path.join(OUT_DIR, filename)):
            log(f"[{i}/{total}] SKIP {filename} (already done)")
            continue
        dest = os.path.join(OUT_DIR, filename)
        log(f"[{i}/{total}] GEN {filename} ({ratio}) ...")
        try:
            url = generate_one(prompt, ratio)
            log(f"[{i}/{total}] URL {url}")
            download(url, dest)
            state["done"][filename] = "ok"
            save_state(state)
            log(f"[{i}/{total}] OK  {filename} ({os.path.getsize(dest)//1024} KB)")
        except Exception as e:
            log(f"[{i}/{total}] FAIL {filename}: {e}")
            state["done"][filename] = f"fail: {e}"
            save_state(state)
            failures.append(filename)

    log(f"=== DONE. {total - len(failures)}/{total} succeeded. ===")
    if failures:
        log("Failed files:")
        for f_ in failures:
            log(f"  - {f_}")
        sys.exit(2)


if __name__ == "__main__":
    main()