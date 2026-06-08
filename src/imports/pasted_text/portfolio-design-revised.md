╔═══════════════════════════════════════════════════════════════╗
║   KOUSHIK.DEV — REVISED PORTFOLIO DESIGN                     ║
║   Concept: "DEEP SIGNAL"                                     ║
║   Inspired by: Sawad, Linear, Basement Studio               ║
║   Paradigm: DARK BENTO — warm dark canvas, bento grid,       ║
║   editorial typography, controlled neon accent               ║
╚═══════════════════════════════════════════════════════════════╝

═══════════════════════════════════════════════
0. ART DIRECTION SHIFT — WHY EVERYTHING CHANGES
═══════════════════════════════════════════════

Previous mistake: "Engineered Clarity" on white = clinical.
New direction: "Deep Signal" on dark = premium + technical.

The Sawad principle: The background IS the design statement.
A warm dark surface communicates:
— "I'm serious about craft"
— "I've seen premium products and I make them"
— "This is not a university project page"

The bento grid principle: Mixed card sizes communicate:
— "This was designed, not generated"
— "Each piece of information has its own visual weight"
— "The designer understood hierarchy at the spatial level"

Reference analysis of sawad.framer.website:
— Background: warm charcoal ~#141210
— Card surfaces: one step lighter ~#1E1C1A  
— Text: warm cream ~#F2EDE4
— Accent: warm amber/orange
— Grid: asymmetric bento — hero card (large) + stat cards (small)
  + photo card (portrait) + tool cards (compact)
— Font: clean geometric sans, no serif display font
— Feel: like a premium product, not a portfolio template

For Koushik: same paradigm, different personality.
Replace warm amber → Electric Blue (#2563FF)
Replace warm charcoal → Cool dark (#0F1117) — more technical
This makes it feel like a premium AI product, not a warm creative.

═══════════════════════════════════════════════
1. REVISED COLOR SYSTEM — "DEEP SIGNAL PALETTE"
═══════════════════════════════════════════════

PHILOSOPHY: The page is mostly darkness. 
Light is used surgically. Color is used once.

── DARK SURFACES (the canvas)
Page background:    #0F1117  ← deep cool charcoal, not pure black
Card surface:       #161B27  ← one step lighter, slight blue tint  
Card raised:        #1C2333  ← hover state, active card
Card border:        rgba(255, 255, 255, 0.06)  ← barely visible
Card border hover:  rgba(255, 255, 255, 0.12)

── TEXT (on dark)
Text primary:       #F0EFE9  ← warm off-white, NOT #FFFFFF
Text secondary:     #8B90A0  ← cool muted, readable
Text tertiary:      #4A5066  ← very muted, metadata
Text inverse:       #0F1117  ← on light elements

── SIGNAL COLOR (the ONLY accent — use maximum 5× total)
Signal:             #2563FF  ← electric blue
Signal glow:        rgba(37, 99, 255, 0.15)
Signal subtle bg:   rgba(37, 99, 255, 0.08)
Signal on dark btn: #FFFFFF  ← text on signal button

── ONE WARM MOMENT (used exactly once — the hero CTA button)
Warm white:         #F0EFE9  ← the primary button background
Warm white text:    #0F1117  ← text on that button

── STATUS COLORS (only for availability dot + project status)
Online green:       #22C55E
In-progress amber:  #F59E0B

── SURFACE FORMULA (critical — this is what makes it premium)
All cards: background #161B27
           border: 1px solid rgba(255,255,255,0.06)
           border-radius: 16px
           on hover: border rgba(255,255,255,0.12) + 
                    box-shadow: 0 0 0 1px rgba(37,99,255,0.2)
This hover state is the ONLY moment signal blue appears on borders.

═══════════════════════════════════════════════
2. REVISED TYPOGRAPHY
═══════════════════════════════════════════════

ABANDON: Instrument Serif (too editorial for this new direction)
ADOPT: Pure sans-serif — single font family, multiple weights

PRIMARY FONT: Geist (by Vercel — open source, free)
  OR substitute: General Sans (Fontshare)
  Character: technical, modern, zero decoration, 
  premium product DNA

Single font, six weights tells the whole story:
  300 Light   → large ambient numbers, background text
  400 Regular → body copy, descriptions
  500 Medium  → nav links, labels, secondary headings
  600 SemiBold → card titles, stats labels
  700 Bold    → section headings, project titles
  800 ExtraBold → hero headline ONLY

── WHY NO SERIF ON DARK BACKGROUND:
Serif fonts on dark backgrounds lose their contrast detail
in their thin strokes — they look blurry and low-budget
unless you have expert hinting control. Sawad uses pure
sans-serif for this exact reason. Single-family with
weight contrast IS the typographic hierarchy on dark.

── TYPE SCALE (dark-surface adjusted)
Hero H1:        72–96px  | Geist 800   | ls: -0.04em | lh: 0.95
Section heading: 48–56px  | Geist 700   | ls: -0.03em | lh: 1.0
Card title:      22–28px  | Geist 700   | ls: -0.02em | lh: 1.2
Body copy:       15–17px  | Geist 400   | ls: 0.00em  | lh: 1.75
Label:           11–12px  | Geist 600   | ls: 0.10em  | UPPERCASE
Metadata:        13px     | Geist 400   | color: Text tertiary
Giant ambient:  120–200px | Geist 300   | ls: -0.06em | opacity: 0.04
  (used as background texture in sections — see section 5)

── HERO HEADLINE COMPOSITION:
Line 1: "Building"    → Geist 800, 88px, Text primary #F0EFE9
Line 2: "Android & AI" → Geist 800, 88px, Signal blue #2563FF
Line 3: "Applications." → Geist 800, 88px, Text primary #F0EFE9

All three lines: same font, same weight, same size.
The ONLY difference is line 2 is Signal blue.
This is more powerful than serif/sans mixing.
On a dark background, the blue line GLOWS.
No underline needed. The color IS the accent.
Period at end of line 3: signal blue. Same detail as before.

═══════════════════════════════════════════════
3. LAYOUT PARADIGM — BENTO GRID (THE CORE CHANGE)
═══════════════════════════════════════════════

The entire page is now built on a BENTO GRID system.
This is what Sawad does. This is what makes it premium.

WHAT IS A BENTO GRID:
A 12-column grid where cards span different numbers of 
columns and rows, creating a mosaic of intentionally 
varied sizes — like Apple's feature pages.

Large card (hero):    spans 8 columns × 3 rows
Medium card:          spans 4 columns × 2 rows
Small card (stat):    spans 4 columns × 1 row
Wide card:            spans 12 columns × 1 row
Portrait card:        spans 4 columns × 3 rows

KEY RULE: No two adjacent cards are the same size.
KEY RULE: Every card has the same border-radius (16px).
KEY RULE: Gap between cards is always 12px.
KEY RULE: Cards never have colored backgrounds (except signal).

═══════════════════════════════════════════════
4. NAV — PREMIUM FLOATING BAR
═══════════════════════════════════════════════

STYLE: Floating pill navbar — NOT full-width
Position: Fixed, centered horizontally, 20px from top
Width: auto (fits content) — approximately 560px

Visual design:
  Background: rgba(22, 27, 39, 0.85)  ← card surface with alpha
  Backdrop-filter: blur(24px) saturate(180%)
  Border: 1px solid rgba(255, 255, 255, 0.08)
  Border-radius: 100px  ← full pill shape
  Padding: 10px 20px
  Box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4)

Inside layout (left to right):
  [K monogram 28px] [gap 16px] [Projects] [Stack] [About] [Contact]
  [gap 16px] [divider 1px × 16px] [gap 16px] [Hire Me button]

Links: 13px Geist 500, Text secondary (#8B90A0)
Links hover: Text primary (#F0EFE9), transition 150ms
Active: Signal blue (#2563FF)

Hire Me button (inside navbar):
  Background: #2563FF (signal blue)
  Text: white, 13px Geist 600
  Padding: 7px 16px
  Border-radius: 100px
  Hover: brightness(1.15) + scale(1.02)

WHY FLOATING PILL:
Sawad uses this. Linear uses this. It immediately signals
"premium product" because it treats the nav as a component,
not a full-width bar. The dark background behind it adds depth.
Mobile: the pill becomes a smaller logo + hamburger pill.

K Monogram redesign:
  28×28px square, border-radius: 8px
  Background: #2563FF (signal blue)
  Letter "K": white, 15px Geist 700
  This is the ONLY colored background element in the nav.

═══════════════════════════════════════════════
5. HERO — BENTO GRID LAYOUT
═══════════════════════════════════════════════

The hero is NOT a two-column text + phone layout.
It IS a bento grid of 5 cards.

Grid: 12 columns, 12px gap, full viewport height

── CARD A — HEADLINE CARD (spans 8 col × 3 rows)
Background: #161B27
Top-left corner of the grid
Contains:
  — Availability line (top-left inside card):
    [● online] Available · Hyderabad · Remote · Hybrid
    13px Geist 400, Text tertiary, pulsing dot
  — Main H1 (left-aligned inside card, vertical center):
    "Building"
    "Android & AI"    ← Signal blue
    "Applications."
    88px Geist 800, ls: -0.04em, lh: 0.92
  — Subtext (below H1, 20px gap):
    "Flutter specialist shipping intelligent mobile 
     experiences — from EHR systems to biometrics."
    16px Geist 400, Text secondary, max-width: 48ch
  — CTA row (below subtext, 28px gap):
    [View Projects →] [↓ Download CV]
    Button: bg #F0EFE9, text #0F1117, 14px Geist 600, 
    radius 8px, padding 12px 24px
    Ghost: no bg, no border, 14px Geist 500, 
    Text secondary, underline on hover
  
  Card padding: 48px all sides

── CARD B — PHOTO / IDENTITY CARD (spans 4 col × 3 rows)
Background: #161B27
Top-right, same height as Card A
Contains:
  — Your photo: full-bleed, fills 60% of card height
    Positioned top, object-fit: cover
    Light gradient fade at bottom: 
    linear-gradient(transparent, #161B27)
  — Below gradient, bottom of card:
    "Koushik" — 20px Geist 700, Text primary
    "Android & AI Engineer" — 13px Geist 500, Signal blue
    "Hyderabad, India" — 12px Geist 400, Text tertiary
    
  IF no photo is available:
    Background: gradient from #161B27 to #1C2333
    Center: Large "K" in 120px Geist 300, opacity: 0.1
    Same name/title text at bottom

  Card padding bottom: 24px (top is the photo)
  IMPORTANT: This card is what Sawad's template does with
  the profile — it makes the portfolio feel personal,
  not anonymous.

── CARD C — STATS CARD 1 (spans 4 col × 1 row)
Bottom-left below Card A (row 4)
Background: #161B27
Contains 2 stats side by side:
  "4+"          "2"
  Projects      Internships
  Value: 32px Geist 700, Text primary, tabular-nums
  Label: 11px Geist 600, Text tertiary, uppercase
  Separator: 1px vertical rgba(255,255,255,0.06)
Card padding: 24px

── CARD D — SIGNAL HIGHLIGHT CARD (spans 4 col × 1 row)
Background: rgba(37, 99, 255, 0.12)  ← signal tinted
Border: 1px solid rgba(37, 99, 255, 0.25)
Contains:
  — Top: "ML Accuracy" 11px Geist 600, uppercase, 
    rgba(37,99,255,0.7)
  — Main: "98.4%" 36px Geist 700, Signal blue
  — Sub: "MedTek pill detection model" 12px Geist 400, 
    Text tertiary
This is the ONLY tinted/colored card. 
It immediately draws the eye to the AI credential.

── CARD E — TECH TICKER CARD (spans 4 col × 1 row)
Background: #161B27
Contains a scrolling ticker (CSS animation):
"Flutter · Dart · Kotlin · Python · TensorFlow · Firebase · 
 PostgreSQL · NFC · OpenAI · JPEG2000 · Flutter · Dart..."
Font: 13px Geist 500, Text tertiary
Animation: continuous left scroll, 20s linear infinite
Fade edges: linear-gradient mask left and right

── FULL BENTO GRID LAYOUT (bird's eye):
┌─────────────────────────────┬──────────────┐
│                             │              │
│       CARD A                │   CARD B     │
│       Headline + CTAs       │   Photo      │
│       (8 columns)           │   (4 columns)│
│                             │              │
├──────────────┬──────────────┴──────────────┤
│   CARD C     │   CARD D     │   CARD E     │
│   Stats      │   ML Stat    │   Ticker     │
│   (4 col)    │   (4 col)    │   (4 col)    │
└──────────────┴──────────────┴──────────────┘

═══════════════════════════════════════════════
6. PROJECTS — TIGHTER BENTO CARDS (fixes the gap problem)
═══════════════════════════════════════════════

PROBLEM IDENTIFIED: The current editorial layout creates 
massive visual gaps between number/domain label and the 
project title. The project image is floating with no 
relation to the text. Whitespace is accidental, not designed.

SOLUTION: Replace editorial rows with PROJECT BENTO CARDS.
Not the 3-column AI grid (3 equal cards). 
Instead: 2 large + 2 medium ASYMMETRIC card layout.

SECTION HEADER (outside the bento):
  Left: "Selected Work" — 48px Geist 700, Text primary
  Right: "04 ←" — 13px Geist 500, Text tertiary
  Below: 1px divider rgba(255,255,255,0.06), 32px gap

── ROW 1: Two unequal cards (side by side)

PROJECT CARD 01 — DevPulse (LARGE, 7 columns):
  Card background: #161B27
  Card border-radius: 16px
  Internal layout (top to bottom):
    ① TOP SECTION (image):
       App screenshot / mockup
       Height: 220px, object-fit: cover
       Border-radius: 12px 12px 0 0
       Light overlay at bottom of image: 
       linear-gradient(transparent 60%, #161B27)
    ② BODY SECTION (padding 24px):
       Category: "DASHBOARD · REAL-TIME" 
       11px Geist 600, uppercase, Signal blue, ls: 0.1em
       Project title: "DevPulse" 
       26px Geist 700, Text primary, margin: 8px 0
       Description: 14px Geist 400, Text secondary, lh: 1.65
       (2 lines maximum)
    ③ FOOTER SECTION (padding 0 24px 20px):
       Top: 1px rgba(255,255,255,0.06) divider
       Left: tech pills — plain text, no background
              11px Geist 600, Text tertiary, uppercase
              "Flutter · Firebase · Dart"
       Right: "View →" 13px Geist 600, Text secondary
               hover: Text primary + arrow shifts right

  Card hover:
    transform: translateY(-3px)
    box-shadow: 0 16px 48px rgba(0,0,0,0.4)
    border-color: rgba(255,255,255,0.12)

PROJECT CARD 02 — MedTek (SMALL, 5 columns):
  Same structure, smaller. Image height: 180px.
  Featured stat inside image area (bottom of image):
    Small pill badge: "0.91 F1-Score" 
    bg rgba(37,99,255,0.2), text Signal blue, 
    border: 1px solid rgba(37,99,255,0.3)
    11px Geist 600, border-radius 100px, padding 4px 10px
    Position: absolute, bottom 16px, left 16px inside image

── ROW 2: Mirror layout (opposite sizes)

PROJECT CARD 03 — Trace (SMALL, 5 columns):
  Image shows carbon ring / green data visualization
  Same structure as Card 02.
  Featured stat: "CO₂ tracked daily" badge

PROJECT CARD 04 — Seamless Travel (LARGE, 7 columns):
  Same structure as Card 01.
  Featured detail: "<3s auth time" badge on image

── CARD GAP: 12px between all cards (not 24px, not 32px)
This tightness is exactly what fixes the "unprofessional gap"
problem. In bento grids, tight gaps look designed.
Loose gaps look broken.

═══════════════════════════════════════════════
7. STACK SECTION — DARK BENTO TOOLS
═══════════════════════════════════════════════

Keep "The Arsenal" concept but make it bento.

Layout: 3 tall cards side by side, equal width (4 col each)
Card background: #161B27, border-radius: 16px, gap: 12px
Section background: #0F1117 (same as page — no section bg change)

Each card (padding 32px):
  Top: Category label — 11px Geist 600, Signal blue, uppercase
       24px signal blue underline rule (2px height)
  Below: Skills as pure typographic list
         18px Geist 500, Text primary, lh: 2.4
         On hover: a single · (6px signal blue dot) appears 
         to the left, text shifts right 6px, 150ms ease

AMBIENT NUMBER BACKGROUND:
Behind the skill list in each card:
Large number "01" "02" "03" in 200px Geist 300
Color: rgba(255,255,255,0.02) — almost invisible
Positioned bottom-right of each card, partially clipped
This is the "ambient texture" technique — pure class.

═══════════════════════════════════════════════
8. ABOUT — DARK BENTO IDENTITY
═══════════════════════════════════════════════

Bento grid of 4 cards:

── CARD A — BIO CARD (8 columns × 2 rows)
Pull quote in Geist 700 italic (yes, italic here works — 
it's a quote, not a heading):
"I write code that thinks."
32px, Text primary, no decoration, no quotation marks

Bio paras below (same as before but now on dark surface):
15px Geist 400, Text secondary, lh: 1.8, max-width: 55ch

CTAs: text links with arrow, Text secondary, 
      hover: Text primary, transition underline

── CARD B — LOCATION / STATUS CARD (4 columns × 1 row)
Background: rgba(34, 197, 94, 0.06) ← very subtle green tint
Border: 1px solid rgba(34, 197, 94, 0.15)
Contains:
  [● online] "Available for roles"  — 14px Geist 600, #22C55E
  "Hyderabad · Remote · Hybrid" — 13px Geist 400, Text secondary
  "Response within 24h" — 12px Geist 400, Text tertiary

── CARD C — TIMELINE CARD (4 columns × 3 rows)  
Plain dark card, "Career Milestones" label
Same timeline content, pure typography on dark.
Year in Signal blue, role in Text primary, 
description in Text secondary.
Row dividers: 1px rgba(255,255,255,0.04)

── CARD D — FEATURED STAT CARD (8 columns × 1 row)
Wide card below bio. 
A horizontal strip of 4 bold stats:
"4"    "2"      "18mo"    "10K+"
Apps   Interns  Exp.      Lines of code
Separated by 1px vertical dividers.
Value: 40px Geist 700, Text primary, tabular-nums
Label: 12px Geist 500, Text tertiary, uppercase

═══════════════════════════════════════════════
9. CONTACT — THE DARK FINALE (UNCHANGED CONCEPT, 
   ENHANCED SURFACE)
═══════════════════════════════════════════════

The contact section was the BEST part of the current design.
Keep the concept. Enhance the surface.

Background: #080B12 — even darker than page background.
This creates a "depth drop" as user scrolls into contact.

Add: Very subtle grid texture
background-image: 
  linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
background-size: 48px 48px

Headline: keep exact same — 
"Let's build something" (Geist 800, 72px, Text primary)
"extraordinary." (Geist 800 Italic, 72px, Signal blue)

Add ONE new detail — a thin horizontal rule above headline:
80px wide, 1px, Signal blue, centered
This is a precise editorial detail that rewards eye contact.

Email: keep as large clickable type.
Update hover: Signal blue underline slides in from left, 
accompanied by a subtle Signal blue text-shadow glow:
text-shadow: 0 0 40px rgba(37,99,255,0.3)
(only on hover, only for 2 seconds, then settles)

═══════════════════════════════════════════════
10. MICRO-DETAILS THAT MAKE IT WALL-WORTHY
═══════════════════════════════════════════════

① NOISE TEXTURE OVERLAY:
The single most underused technique in web design.
Add a 200×200px noise SVG pattern as a full-page overlay:
  opacity: 0.035
  pointer-events: none
  mix-blend-mode: overlay
  position: fixed, z-index: 999
This adds the slight grain that every Framer premium template
uses. It makes flat surfaces look like they have depth.
In Figma: add a noise fill layer at 3.5% opacity on every card.

② CARD INNER GLOW (on hover only):
box-shadow: inset 0 1px 0 rgba(255,255,255,0.06)
This creates a subtle "light hitting the top edge" — 
a technique borrowed from physical product design.
Cost: 2 CSS properties. Perceived value: enormous.

③ SIGNAL BLUE GRADIENT ON HERO:
A single radial gradient behind the bento grid in the hero:
background: radial-gradient(
  ellipse 600px 400px at 75% 50%,
  rgba(37,99,255,0.06) 0%,
  transparent 70%
)
Position: behind Card B (the photo card)
This creates a very subtle atmospheric glow on the right side.
NOT a blob. NOT a gradient background. 
A 6% opacity radial — you feel it more than see it.

④ SCROLL INDICATOR:
Bottom center of hero, between hero and projects:
"SCROLL" in 10px Geist 600, ls: 0.2em, Text tertiary
Below: animated line 1px × 32px, Signal blue
that pulses down: translateY(0 → 8px → 0), 1.5s infinite
This exists only in the hero. Removed after first scroll.

⑤ PROJECT NUMBER ANIMATION:
When hovering a project card, the large ambient "01" "02"
background number subtly scales: scale(1 → 1.05), 300ms ease
This rewards close attention without demanding it.

⑥ NAV INDICATOR DOT:
When scrolled to a section, the active nav link shows:
A 4px × 4px Signal blue dot below the text link.
NOT a background. NOT a pill. Just a small dot.
This is more refined than any active state I've seen used.

═══════════════════════════════════════════════
11. WHAT WAS WRONG WITH THE PREVIOUS DESIGN
    (never repeat these)
═══════════════════════════════════════════════

✗ White background — looks like a Google Doc, not a product
✗ Too much vertical whitespace between project elements
✗ The large "01" number was disconnected from project title
✗ Project image floating separately from text
✗ No personal presence (no photo, no warmth)
✗ All sections same height, same density, same energy
✗ Tech pills with background color (looked like tags, not skill)
✗ Availability line buried below the fold
✗ Stats row too small (28px values — needed to be 40px+)
✗ Navbar was a full-width bar (looked like every other site)
✗ No ambient texture — surfaces felt flat and cheap
✗ No depth progression (page was one flat layer)

═══════════════════════════════════════════════
DELIVERABLES (Figma)
═══════════════════════════════════════════════

Frames needed:
1. Desktop 1440 — Hero bento grid (full detail)
2. Desktop 1440 — Projects bento
3. Desktop 1440 — Stack + About bento
4. Desktop 1440 — Contact finale
5. Mobile 390 — Hero (stacked bento, 1 column)
6. Component kit — Card, Pill, Nav, Button, Timeline item
7. Color tokens frame — all 14 color variables
8. Dark mode only — no light mode toggle needed
   (the whole site IS the dark mode)