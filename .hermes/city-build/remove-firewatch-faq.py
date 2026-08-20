#!/usr/bin/env python3
"""Remove the 'fire watch when a system is down' FAQ (and its city-specific
variants) from every city's faq array in src/data/cities.ts.

Removes the WHOLE faq object ({ question:..., answer:..., }) whose question
matches a fire-watch phrasing. Leaves the one ANSWER-body mention (DTC line
~5399) untouched, since that is not a question.
"""
import os, re

ROOT = "/Volumes/ZV-SSD/work/transcending-creative/RedRocksFire"
TARGET = os.path.join(ROOT, "src/data/cities.ts")
src = open(TARGET, encoding="utf-8").read()
lines = src.splitlines(keepends=True)

# A question line we want to remove matches: question: '...fire watch...(down|impaired|offline|out of service)...?'
qpat = re.compile(r"^\s*question:\s*'Do you (handle|do) fire watch\b.*',\s*$")

removed = []
out = []
i = 0
n = len(lines)
while i < n:
    ln = lines[i]
    if qpat.match(ln):
        # This question line is inside an object that opened on a previous '{' line.
        # Find the object start: walk back to the nearest line that is just '{' (with indent).
        start = i
        while start > 0 and lines[start-1].strip() != "{":
            start -= 1
        obj_open = start - 1  # the '{' line index
        # Find object end: walk forward to the nearest line that is just '},' (with indent).
        end = i
        while end < n and lines[end].strip() != "},":
            end += 1
        # Sanity: the block should contain an 'answer:' line
        block = "".join(lines[obj_open:end+1])
        if "answer:" not in block or obj_open < 0:
            out.append(ln); i += 1; continue
        removed.append(lines[i].strip())
        # Skip from obj_open..end inclusive. But we've already appended lines up to
        # (but not including) i. We may have appended some lines of THIS object
        # (the '{' and any lines between it and the question). Roll those back.
        # Remove already-appended lines belonging to this object (from obj_open).
        # Count how many of the last appended lines are >= obj_open.
        appended_from_obj = i - obj_open  # lines from obj_open..i-1 already in out
        for _ in range(appended_from_obj):
            out.pop()
        i = end + 1
        continue
    out.append(ln)
    i += 1

new_src = "".join(out)
open(TARGET, "w", encoding="utf-8").write(new_src)
print(f"Removed {len(removed)} fire-watch FAQ object(s):")
for r in removed:
    print("  -", r)
