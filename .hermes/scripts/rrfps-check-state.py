import json
import os

state = json.load(open("/tmp/rrfps-image-gen-state.json"))
done = state["done"]
ok = [k for k, v in done.items() if v == "ok"]
fail = [k for k, v in done.items() if v != "ok"]
print(f"state ok: {len(ok)}, fail: {len(fail)}")
missing = [k for k in ok if not os.path.exists("/Volumes/ZV-SSD/work/transcending-creative/RedRocksFire/public/images/" + k)]
print(f"ok-but-missing-on-disk: {missing}")
# How many of the 72 have real files on disk (>2KB)?
all_names = ok + fail
on_disk = [k for k in all_names if os.path.exists("/Volumes/ZV-SSD/work/transcending-creative/RedRocksFire/public/images/" + k) and os.path.getsize("/Volumes/ZV-SSD/work/transcending-creative/RedRocksFire/public/images/" + k) > 2000]
print(f"valid files on disk: {len(on_disk)}")