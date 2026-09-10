# RRFPS — 9 Service Pages × 8 Image Prompts

**Scope.** 9 service pages × 8 image slots = **72 image prompts** total.

**Excluded from this batch** (per your direction):
- 15 IndustriesGrid card images (the `industries` section cards)
- ClosingCTA banner image (1 per page)

**Image slots covered (8 per page):**
1. **§0 Hero** (full-bleed banner bg)
2. **§2 Why band** (left-tinted earth-tone overlay band)
3. **§3 Accordion** (dark-bg services list section)
4. **§4 More Than a Service Contractor** (white-bg split panel, image right)
5. **§5 Advocacy** (#DBDADA grey-bg split panel, image right)
6. **§6 Why Clients Stay bg** (dark photo bg behind 5 value cards)
7. **§7 Experience** (white-bg split panel, image right)
8. **§8 Ready When You Are** (#DBDADA grey-bg split panel, image right)

**Wardrobe spec (applied to every fire-inspector image):** black collared button-down work shirt, no logos, no patches, no embroidery, no branding anywhere on the shirt. No branded hard hat. No branded vehicle.

**File-naming convention (consistent with the fire-alarm batch):**
- §0 hero: `red-rocks-{slug}-hero-bg.png`
- §2 why band: `red-rocks-{slug}-why-bg.jpg`
- §3 accordion: `red-rocks-{slug}-accordion-bg.jpg`
- §4 more than: `rrfps-{prefix}-more-than-contractor.jpg`
- §5 advocacy: `rrfps-{prefix}-advocacy.jpg`
- §6 values bg: `rrfps-{prefix}-why-clients-stay-bg.jpg`
- §7 experience: `rrfps-{prefix}-experience.jpg`
- §8 promise: `rrfps-{prefix}-promise.jpg`

**Higgsfield CLI command for every prompt:**
```
higgsfield generate create nano_banana --prompt "<prompt>" --aspect_ratio 16:9
```
(§4–§8 are 4:3 in current code; use `--aspect_ratio 4:3` for those. Hero / why band / accordion are 16:9.)

---

# Page 1 — Fire Alarm Monitoring Services

**Page URL:** `/services/monitoring-services`
**Class prefix:** `mr-`

### §0 — Hero (`red-rocks-monitoring-hero-bg.png`, 16:9)
Wide cinematic shot of a Colorado commercial building exterior at dusk, soft blue hour sky, modern mid-rise office building with illuminated windows, foreground showing a fire alarm control panel enclosure mounted on an exterior wall, the red FACP door slightly open revealing indicator LEDs, warm interior glow from the building's lobby, no people, no vehicles, no signage, no logos, no text on the building, dramatic but quiet tone suitable for a hero banner.

### §2 — Why band bg (`red-rocks-monitoring-why-bg.jpg`, 16:9)
Wide landscape view of Colorado red rock mountain formations at golden hour, low warm light, layered rock formations in the background, soft atmospheric haze, the kind of dramatic natural landscape that suggests reliability and longevity, completely empty of people or human structures, no logos, no text, no signage.

### §3 — Accordion bg (`red-rocks-monitoring-accordion-bg.jpg`, 16:9)
Interior shot of a modern commercial building's main lobby with a ceiling-mounted fire alarm horn/strobe visible in the upper portion of the frame, the strobe is a wall/ceiling red-and-white device, the lobby has polished stone floors and warm architectural lighting, the horn/strobe is the visual anchor of the composition, no people, no text, no logos.

### §4 — More Than a Service Contractor (`rrfps-mr-more-than-contractor.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches stands at a desk in a commercial building's security office reviewing a bank of central-station monitoring screens displaying floor plans and alarm status, his posture is engaged and professional, a binder of client monitoring accounts sits open on the desk, the background is slightly out of focus, clean modern security office with no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §5 — Advocacy (`rrfps-mr-advocacy.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is on a ladder near the ceiling of a commercial building, inspecting a fire alarm horn/strobe device, he is looking up at the device with a focused expression, the strobe is a typical red-and-white wall-mount unit, the room below shows empty office furniture slightly out of focus, no logos, no text on shirts, no branded hard hat, no branded equipment, no brand names visible anywhere.

### §6 — Why Clients Stay bg (`rrfps-mr-why-clients-stay-bg.jpg`, 16:9)
Wide shot of a dimly lit commercial building's main fire alarm control panel area, the FACP cabinet door is open showing multiple LED status indicators glowing red and green, no people in the frame, the room is intentionally dark to emphasize the LEDs, the floor is polished concrete, no logos, no text, no signage, no brand names.

### §7 — Experience (`rrfps-mr-experience.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is kneeling beside a bank of central-station monitoring equipment in a server-grade telco room, he is reading a digital display panel and holding a tablet, the room has multiple equipment racks, his expression is focused and experienced, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §8 — Promise / Ready When You Are (`rrfps-mr-promise.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is walking through the lobby of a modern commercial building at the end of his workday, a tool bag in one hand, the lobby has floor-to-ceiling glass and polished stone, his expression is calm and ready, no logos, no text on shirts, no branded hard hat, no branded equipment, no brand names visible anywhere.

---

# Page 2 — Backflow Prevention Assemblies

**Page URL:** `/services/backflow-prevention-assemblies`
**Class prefix:** `bp-`

### §0 — Hero (`red-rocks-backflow-hero-bg.png`, 16:9)
Wide cinematic shot of a commercial mechanical room interior, a backflow preventer assembly is the focal point — a typical bronze/iron reduced-pressure-zone backflow device with test cocks and shut-off valves mounted on copper or galvanized piping, the room is clean and well-lit, no people, no text, no logos, no signage.

### §2 — Why band bg (`red-rocks-backflow-why-bg.jpg`, 16:9)
Wide landscape view of Colorado red rock mountain formations at golden hour, low warm light, layered rock formations in the background, soft atmospheric haze, completely empty of people or human structures, no logos, no text, no signage.

### §3 — Accordion bg (`red-rocks-backflow-accordion-bg.jpg`, 16:9)
Close-up architectural detail of a backflow preventer assembly in a commercial mechanical room, showing the device body, test cocks, and shut-off valves with the surrounding copper or galvanized piping, shallow depth of field, no people visible, no logos, no text, no signage.

### §4 — More Than a Service Contractor (`rrfps-bp-more-than-contractor.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is kneeling beside a backflow preventer assembly in a commercial mechanical room, he is connecting a hose to a test cock while referencing a paper test report on a clipboard, the room has multiple pipes and equipment racks slightly out of focus in the background, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §5 — Advocacy (`rrfps-bp-advocacy.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is standing in a commercial mechanical room, pointing at a backflow preventer while explaining its condition to a property manager who is holding a tablet, the room shows other plumbing equipment in soft focus in the background, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §6 — Why Clients Stay bg (`rrfps-bp-why-clients-stay-bg.jpg`, 16:9)
Wide dimly lit shot of a commercial mechanical room with multiple backflow preventer assemblies, copper and galvanized piping criss-crossing the ceiling, no people in the frame, the room is intentionally shadowy with one or two practical work lights creating contrast, no logos, no text, no signage, no brand names.

### §7 — Experience (`rrfps-bp-experience.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is at a workbench in a service van, organizing his backflow testing kit — differential pressure gauge hoses, fittings, and tools laid out methodically, the van interior is clean and organized, his expression is focused, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §8 — Promise / Ready When You Are (`rrfps-bp-promise.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is standing in the open doorway of a service van, looking out at a commercial property he is about to service, the van is plain white with absolutely no logos, no text, no markings of any kind, the inspector has a tool bag in his hand, his expression is ready and confident, no logos, no text on shirts, no branded hard hat, no branded equipment, no brand names visible anywhere.

---

# Page 3 — Portable Fire Extinguishers

**Page URL:** `/services/portable-fire-extinguishers`
**Class prefix:** `fe-`

### §0 — Hero (`red-rocks-extinguishers-hero-bg.png`, 16:9)
Wide cinematic shot of a commercial corridor wall with multiple portable fire extinguishers mounted at proper heights in their red metal cabinets with the standard white "FIRE EXTINGUISHER" pictogram, the corridor is well-lit, modern, clean, no people, no logos, no text beyond the standard cabinet signage.

### §2 — Why band bg (`red-rocks-extinguishers-why-bg.jpg`, 16:9)
Wide landscape view of Colorado red rock mountain formations at golden hour, low warm light, layered rock formations in the background, soft atmospheric haze, completely empty of people or human structures, no logos, no text, no signage.

### §3 — Accordion bg (`red-rocks-extinguishers-accordion-bg.jpg`, 16:9)
Close-up architectural detail of a red ABC dry chemical fire extinguisher mounted on a commercial corridor wall, the extinguisher is the visual anchor of the composition, shallow depth of field, no people visible, no logos, no text beyond the standard extinguisher label.

### §4 — More Than a Service Contractor (`rrfps-fe-more-than-contractor.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is doing the visual inspection of a red ABC fire extinguisher in a commercial corridor, he is checking the pressure gauge while holding an inspection tag and a tablet, the corridor is well-lit and modern, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §5 — Advocacy (`rrfps-fe-advocacy.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is kneeling beside a kitchen extinguisher cabinet, holding up a Class K extinguisher and explaining it to a chef or facility manager who is taking notes on a clipboard, the kitchen is out of focus in the background, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §6 — Why Clients Stay bg (`rrfps-fe-why-clients-stay-bg.jpg`, 16:9)
Wide shot of a commercial kitchen or utility area wall with multiple fire extinguishers of various types mounted at proper heights — ABC, CO2, Class K — different sizes and colors, no people in the frame, the wall is clean and the lighting is practical, no logos, no text, no signage beyond the standard extinguisher markings.

### §7 — Experience (`rrfps-fe-experience.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is at a workbench in a service area, performing a six-year internal maintenance on a disassembled fire extinguisher — the cylinder, valve assembly, and O-rings are laid out on a clean surface, his expression is focused, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §8 — Promise / Ready When You Are (`rrfps-fe-promise.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is carrying a new red fire extinguisher across a clean commercial corridor, walking toward the camera, his expression is calm and ready, the corridor is empty otherwise, no logos, no text on shirts, no branded hard hat, no branded equipment, no brand names visible anywhere.

---

# Page 4 — Distributed Antenna Systems (DAS)

**Page URL:** `/services/distributed-antenna-systems`
**Class prefix:** `da-`

### §0 — Hero (`red-rocks-das-hero-bg.png`, 16:9)
Wide cinematic shot of a commercial building rooftop with a BDA/ERRCS donor antenna mounted on a non-penetrating roof mount, the antenna is the typical fiberglass whip style with a small equipment enclosure, dramatic sky behind, no people, no logos, no text, no signage.

### §2 — Why band bg (`red-rocks-das-why-bg.jpg`, 16:9)
Wide landscape view of Colorado red rock mountain formations at golden hour, low warm light, layered rock formations in the background, soft atmospheric haze, completely empty of people or human structures, no logos, no text, no signage.

### §3 — Accordion bg (`red-rocks-das-accordion-bg.jpg`, 16:9)
Interior shot of a commercial building's telco closet with a BDA/ERRCS rack-mounted head-end amplifier and battery backup unit visible, the cabinet is open showing status LEDs, the closet is well-lit and clean, no people, no logos, no text beyond the standard device labels.

### §4 — More Than a Service Contractor (`rrfps-da-more-than-contractor.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is kneeling in front of an open BDA/ERRCS equipment cabinet in a telco closet, holding a signal strength meter with one hand and pointing at the amplifier faceplate with the other, his expression is focused, the closet shows other equipment in soft focus, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §5 — Advocacy (`rrfps-da-advocacy.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is on a ladder near the ceiling of a commercial corridor, inspecting a ceiling-mounted DAS antenna (the small white dome-style antenna), he is reaching up to check the antenna mount, the corridor below is empty, no logos, no text on shirts, no branded hard hat, no branded equipment, no brand names visible anywhere.

### §6 — Why Clients Stay bg (`rrfps-da-why-clients-stay-bg.jpg`, 16:9)
Wide dimly lit shot of a commercial building's telco closet with the BDA/ERRCS rack-mounted amplifier and battery backup cabinet doors open, status LEDs glowing red and green, no people in the frame, the closet is intentionally shadowy to emphasize the indicators, no logos, no text, no signage, no brand names.

### §7 — Experience (`rrfps-da-experience.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is at a workbench performing annual testing on a BDA/ERRCS amplifier module, the test equipment is connected via test cables, he is referencing a printed test procedure, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §8 — Promise / Ready When You Are (`rrfps-da-promise.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is standing on the rooftop of a commercial building next to a BDA/ERRCS donor antenna, looking out at the horizon with a calm ready expression, the sky is dramatic and clear, no logos, no text on shirts, no branded hard hat, no branded equipment, no brand names visible anywhere.

---

# Page 5 — Security System Installation & Monitoring

**Page URL:** `/services/security-system-installation-and-monitoring`
**Class prefix:** `ss-`

### §0 — Hero (`red-rocks-security-hero-bg.png`, 16:9)
Wide cinematic shot of a modern commercial building lobby with a discreet ceiling-mounted security camera and motion sensor visible in the upper portion of the frame, the lobby has polished stone floors and warm architectural lighting, no people, no logos, no text, no signage.

### §2 — Why band bg (`red-rocks-security-why-bg.jpg`, 16:9)
Wide landscape view of Colorado red rock mountain formations at golden hour, low warm light, layered rock formations in the background, soft atmospheric haze, completely empty of people or human structures, no logos, no text, no signage.

### §3 — Accordion bg (`red-rocks-security-accordion-bg.jpg`, 16:9)
Interior shot of a commercial building's security office with a bank of central-station monitoring screens displaying camera feeds and alarm status, the screens are the visual anchor of the composition, no people visible, no logos, no text beyond the screen UI text.

### §4 — More Than a Service Contractor (`rrfps-ss-more-than-contractor.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is on a small step ladder, installing a wall-mounted security motion sensor in a commercial corridor, he is holding the sensor base while connecting low-voltage wiring, the corridor is modern and well-lit, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §5 — Advocacy (`rrfps-ss-advocacy.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is standing at a security control panel in a commercial building's security office, holding a tablet and explaining the system to a property manager who is taking notes, the panel has typical LED status indicators, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §6 — Why Clients Stay bg (`rrfps-ss-why-clients-stay-bg.jpg`, 16:9)
Wide dimly lit shot of a commercial building's security office with a bank of central-station monitoring screens showing camera feeds from multiple buildings, no people in the frame, the room is intentionally dark except for the glow of the monitors, no logos, no text, no signage, no brand names.

### §7 — Experience (`rrfps-ss-experience.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is at a workbench troubleshooting a security control panel, the panel housing is open and he is using a multimeter on a low-voltage circuit, his expression is focused, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §8 — Promise / Ready When You Are (`rrfps-ss-promise.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is walking out of a commercial building through a glass lobby door, a tablet in one hand, the lobby is empty otherwise, his expression is ready and confident, no logos, no text on shirts, no branded hard hat, no branded equipment, no brand names visible anywhere.

---

# Page 6 — Kitchen Hood Suppression Systems

**Page URL:** `/services/kitchen-hood-suppression-systems`
**Class prefix:** `kh-`

### §0 — Hero (`red-rocks-kitchen-hood-hero-bg.png`, 16:9)
Wide cinematic shot of a commercial kitchen with a large stainless steel kitchen hood as the focal point, the suppression system nozzles are visible mounted under the hood, the kitchen is clean and well-lit, no people, no logos, no text, no signage.

### §2 — Why band bg (`red-rocks-kitchen-hood-why-bg.jpg`, 16:9)
Wide landscape view of Colorado red rock mountain formations at golden hour, low warm light, layered rock formations in the background, soft atmospheric haze, completely empty of people or human structures, no logos, no text, no signage.

### §3 — Accordion bg (`red-rocks-kitchen-hood-accordion-bg.jpg`, 16:9)
Close-up architectural detail of a wet chemical fire suppression cylinder with discharge nozzles mounted under a commercial kitchen hood, the nozzles and piping are the visual anchor of the composition, shallow depth of field, no people visible, no logos, no text beyond the standard cylinder label.

### §4 — More Than a Service Contractor (`rrfps-kh-more-than-contractor.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is standing on a small step stool under a commercial kitchen hood, performing a semiannual inspection of a wet chemical suppression cylinder, he is checking the pressure gauge and tagging the cylinder, the kitchen cooking equipment is slightly out of focus in the background, no logos, no text on shirts, no branded hard hat, no branded equipment, no brand names visible anywhere.

### §5 — Advocacy (`rrfps-kh-advocacy.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is standing in a commercial kitchen, holding a clipboard and a tablet, reviewing the suppression system with a kitchen manager who is also holding a tablet, the kitchen hood and cooking line are in soft focus in the background, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §6 — Why Clients Stay bg (`rrfps-kh-why-clients-stay-bg.jpg`, 16:9)
Wide dimly lit shot of a commercial kitchen after-hours with a stainless steel kitchen hood as the central feature, suppression nozzles visible under the hood, the kitchen is closed and quiet, no people in the frame, the lighting is practical and dim, no logos, no text, no signage, no brand names.

### §7 — Experience (`rrfps-kh-experience.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is at a workbench performing a recharge on a wet chemical suppression cylinder, the cylinder is in a service cradle, his expression is focused, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §8 — Promise / Ready When You Are (`rrfps-kh-promise.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is standing in the doorway of a commercial kitchen, holding a tablet and looking at the kitchen hood, his expression is ready and professional, the kitchen is empty, no logos, no text on shirts, no branded hard hat, no branded equipment, no brand names visible anywhere.

---

# Page 7 — Area of Refuge Communication Systems

**Page URL:** `/services/area-of-refuge-communication-systems`
**Class prefix:** `ar-`

### §0 — Hero (`red-rocks-area-of-refuge-hero-bg.png`, 16:9)
Wide cinematic shot of a high-rise building's emergency stairwell landing with a wall-mounted area of refuge call station visible — the typical stainless steel panel with a "PRESS FOR ASSISTANCE" button and a wheelchair-accessible pictogram, the stairwell is well-lit and clean, no people, no logos, no text beyond the standard signage.

### §2 — Why band bg (`red-rocks-area-of-refuge-why-bg.jpg`, 16:9)
Wide landscape view of Colorado red rock mountain formations at golden hour, low warm light, layered rock formations in the background, soft atmospheric haze, completely empty of people or human structures, no logos, no text, no signage.

### §3 — Accordion bg (`red-rocks-area-of-refuge-accordion-bg.jpg`, 16:9)
Close-up architectural detail of an area of refuge call station mounted on a stairwell landing wall, showing the "PRESS FOR ASSISTANCE" button panel and the wheelchair-accessible pictogram, shallow depth of field, no people visible, no logos, no text beyond the standard call station label.

### §4 — More Than a Service Contractor (`rrfps-ar-more-than-contractor.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is performing annual inspection on an area of refuge call station mounted on a high-rise stairwell landing wall, he is pressing the call button and listening with one ear to the call station, holding a tablet in the other hand, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §5 — Advocacy (`rrfps-ar-advocacy.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is on a ladder in a high-rise stairwell, installing a new area of refuge call station, he is mounting the station faceplate to the existing back box, the stairwell is empty otherwise, no logos, no text on shirts, no branded hard hat, no branded equipment, no brand names visible anywhere.

### §6 — Why Clients Stay bg (`rrfps-ar-why-clients-stay-bg.jpg`, 16:9)
Wide shot of a high-rise building's central control point room with a master area of refuge station panel mounted on the wall showing multiple building call stations, no people in the frame, the room is dimly lit with the panel's LEDs glowing, no logos, no text, no signage, no brand names.

### §7 — Experience (`rrfps-ar-experience.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is at a master area of refuge panel performing testing, he is using a handset to verify two-way communication with remote call stations, his expression is focused, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §8 — Promise / Ready When You Are (`rrfps-ar-promise.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is standing in a high-rise stairwell next to a newly installed area of refuge call station, holding a tablet and looking at the camera with a calm ready expression, the stairwell is empty otherwise, no logos, no text on shirts, no branded hard hat, no branded equipment, no brand names visible anywhere.

---

# Page 8 — Consulting Services – Fire & Life Safety

**Page URL:** `/services/consulting-services`
**Class prefix:** `cs-`

### §0 — Hero (`red-rocks-consulting-hero-bg.png`, 16:9)
Wide cinematic shot of a polished conference room table with open life safety reports, building plans, and a laptop on the table, the room has floor-to-ceiling windows with soft natural light, no people, no logos, no text, no signage, the composition suggests review, planning, and analysis.

### §2 — Why band bg (`red-rocks-consulting-why-bg.jpg`, 16:9)
Wide landscape view of Colorado red rock mountain formations at golden hour, low warm light, layered rock formations in the background, soft atmospheric haze, completely empty of people or human structures, no logos, no text, no signage.

### §3 — Accordion bg (`red-rocks-consulting-accordion-bg.jpg`, 16:9)
Wide interior shot of a commercial building's mechanical room with multiple life safety systems visible — sprinklers, alarm panels, suppression cylinders — in a quiet empty state, the room is clean and well-lit, no people, no logos, no text, no signage, the composition suggests an audit or assessment environment.

### §4 — More Than a Service Contractor (`rrfps-cs-more-than-contractor.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is sitting at a conference table across from a property owner, the inspector has a printed life safety assessment report open in front of him and is pointing at a building floor plan on the table, the property owner is taking notes, the conference room is modern and bright, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §5 — Advocacy (`rrfps-cs-advocacy.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is standing in a commercial building's lobby, holding a clipboard and a tablet, walking with a property manager toward a fire alarm control panel, the inspector is explaining something with a focused expression, the lobby has floor-to-ceiling glass, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §6 — Why Clients Stay bg (`rrfps-cs-why-clients-stay-bg.jpg`, 16:9)
Wide shot of a commercial building's lobby with a fire alarm control panel enclosure visible on a side wall, the lobby is empty and dimly lit, the panel is closed but has status LEDs glowing through the small window, the composition suggests oversight and accountability, no people, no logos, no text, no signage, no brand names.

### §7 — Experience (`rrfps-cs-experience.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is at a workstation reviewing a large printed life safety assessment report and cross-referencing it with a digital building plan on a monitor, his expression is focused and experienced, the office is clean and professional, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §8 — Promise / Ready When You Are (`rrfps-cs-promise.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is shaking hands with a property owner at the entrance of a commercial building, both are looking at the camera with calm confident expressions, the building's glass entrance and lobby are in soft focus in the background, no logos, no text on shirts, no branded hard hat, no branded equipment, no brand names visible anywhere.

---

# Page 9 — 24-Hour Emergency Service

**Page URL:** `/services/24-hour-service`
**Class prefix:** `es-`

### §0 — Hero (`red-rocks-24-hour-hero-bg.png`, 16:9)
Wide cinematic shot of a fire inspector walking toward the entrance of a commercial building at night, the building has warm lobby lighting spilling out onto the sidewalk, the inspector is silhouetted against the warm light and is carrying a tool bag, the sky is dark blue with city lights in the distance, no logos, no text, no signage.

### §2 — Why band bg (`red-rocks-24-hour-why-bg.jpg`, 16:9)
Wide landscape view of Colorado red rock mountain formations at golden hour, low warm light, layered rock formations in the background, soft atmospheric haze, completely empty of people or human structures, no logos, no text, no signage.

### §3 — Accordion bg (`red-rocks-24-hour-accordion-bg.jpg`, 16:9)
Wide shot of a commercial building's fire alarm control panel in trouble state — the panel door is open and a single red trouble LED is illuminated, the rest of the panel is dark, the room is dimly lit, no people visible, the composition suggests urgency, no logos, no text beyond the standard device labels.

### §4 — More Than a Service Contractor (`rrfps-es-more-than-contractor.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is troubleshooting a fire alarm control panel in a commercial building's electrical room, the panel door is open and he is using a multimeter on a circuit, his expression is focused and calm, a tablet sits on a stool beside him with a trouble log open, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §5 — Advocacy (`rrfps-es-advocacy.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is on the phone in a commercial building's electrical room while inspecting a fire alarm control panel, the panel door is open, he has a tool bag on the floor beside him, his expression is calm and reassuring, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §6 — Why Clients Stay bg (`rrfps-es-why-clients-stay-bg.jpg`, 16:9)
Wide dimly lit shot of a commercial building's electrical room with the fire alarm control panel door open, a single red trouble LED glowing, the rest of the room is in shadow, no people in the frame, the composition suggests a 3 a.m. emergency call, no logos, no text, no signage, no brand names.

### §7 — Experience (`rrfps-es-experience.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is repairing a leaking sprinkler pipe in a commercial building's mechanical room, the leak has been isolated with a shut-off valve, he is fitting a repair coupling while water is in a bucket below, his expression is focused, no logos, no text on shirts, no branded equipment, no brand names visible anywhere.

### §8 — Promise / Ready When You Are (`rrfps-es-promise.jpg`, 4:3)
A fire inspector in a black collared button-down work shirt with no logos and no patches is standing next to a plain white service van with absolutely no logos, no text, no markings of any kind, the van's rear doors are open showing organized tool storage, the inspector is holding a tablet and looking at the camera with a calm ready expression, the setting is dawn or dusk to suggest off-hours response, no logos, no text on shirts, no branded hard hat, no branded equipment, no brand names visible anywhere.

---

# Summary — 72 prompts total

| Page | §0 Hero | §2 Why | §3 Acc | §4 More | §5 Advoc | §6 Values | §7 Exp | §8 Promise |
|---|---|---|---|---|---|---|---|---|
| 1. Monitoring (mr-) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 2. Backflow (bp-) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 3. Extinguishers (fe-) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 4. DAS (da-) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 5. Security (ss-) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 6. Kitchen Hood (kh-) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 7. Area of Refuge (ar-) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 8. Consulting (cs-) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 9. 24-Hour (es-) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

**Aspect ratios to use:**
- 16:9 — §0 Hero, §2 Why band, §3 Accordion, §6 Why-Clients-Stay bg (landscape bgs)
- 4:3 — §4 More Than, §5 Advocacy, §7 Experience, §8 Promise (split-panel foregrounds)

**Wardrobe spec applied to every inspector image** (≈36 of the 72 prompts):
black collared button-down work shirt, no logos, no patches, no embroidery, no branding anywhere on the shirt. No branded hard hat. No branded equipment. No branded vehicle. No visible brand names.

Review the prompts and let me know which (if any) need adjustment. Once approved, I'll generate them in batch via `higgsfield generate create nano_banana`, download the CloudFront URLs, and then patch the 9 .astro files with the new image const paths.
