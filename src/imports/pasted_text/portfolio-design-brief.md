DESIGN BRIEF: KOUSHIK — ANDROID & AI ENGINEER PORTFOLIO
"The Precision Standard" — A portfolio that belongs on Awwwards.

═══════════════════════════════════════════════════════
SECTION 0: DESIGN PHILOSOPHY & ART DIRECTION
═══════════════════════════════════════════════════════

Concept: "Engineered Clarity"
This portfolio must feel like it was designed by someone who 
understands both Dieter Rams and Sam Altman. The visual language 
is built on one principle: every element earns its place. 
No decoration. No filler. No visual candy.

The emotional target: a senior recruiter at Google, Meta, or a 
Series-B startup should scroll this and immediately feel — 
"This person is unusually sharp."

Visual DNA references (study all three):
— linear.app (precision, restraint, ink-dark surfaces)
— stripe.com/press (editorial typography, generous whitespace)
— rauno.me (typographic personality, monochrome confidence)

What this is NOT:
— Not a SaaS landing page
— Not a hackathon submission template
— Not a Framer/Webflow starter kit
— Not a "dark mode with neon" developer cliché
— Not purple gradients on everything

The ONE rule: If the element can be removed and the page still 
communicates — remove it.

═══════════════════════════════════════════════════════
SECTION 1: COLOR SYSTEM — EXACT TOKENS
═══════════════════════════════════════════════════════

PALETTE NAME: "Ink & Signal"
Philosophy: Near-white canvas. Near-black ink. 
ONE electric signal color, used 4 times maximum on the entire page.

── LIGHT MODE (primary)
Background:       #FAFAF9   ← warm white, NOT pure #FFFFFF
Surface:          #F3F3F0   ← cards, code blocks
Surface raised:   #ECEAE6   ← hover states only
Divider:          rgba(0, 0, 0, 0.07)
Border:           rgba(0, 0, 0, 0.10)

Text primary:     #0C0C0E   ← near-black, NOT pure black
Text secondary:   #525252   ← muted body copy
Text tertiary:    #A0A0A0   ← metadata, captions, timestamps
Text inverse:     #FAFAF9   ← on dark backgrounds

SIGNAL COLOR (use maximum 4× on entire page):
Signal:           #2563FF   ← electric blue, pure and precise
Signal hover:     #1D55E8
Signal subtle:    rgba(37, 99, 255, 0.08)  ← for pill highlights only

DARK SECTION (one immersive panel on the page):
Dark bg:          #0A0A0F   ← for the hero or contact section only
Dark surface:     #111118
Dark border:      rgba(255, 255, 255, 0.07)
Dark text:        #E8E8EC
Dark muted:       #6B6B7A

── DARK MODE (toggle)
Background:       #0C0C0E
Surface:          #141416
Signal:           #4B7FFF   ← slightly lighter for dark bg contrast

FORBIDDEN colors:
— No purple (#7C3AED, #6D28D9, #8B5CF6) anywhere
— No teal/cyan as primary
— No gradient backgrounds (background blobs, mesh gradients)
— No multi-color gradient on buttons
— The signal blue (#2563FF) appears ONLY on: primary CTA button, 
  one hero word underline, active nav link, inline text links

═══════════════════════════════════════════════════════
SECTION 2: TYPOGRAPHY SYSTEM — EXACT SPECIFICATIONS
═══════════════════════════════════════════════════════

FONT PAIRING: "Editorial Authority"

Display font: Instrument Serif (Google Fonts, free)
  — Used ONLY at 48px and above
  — ONLY on hero H1, section pull quotes
  — Style: Regular & Italic
  — Character: warm, editorial, slightly literary — signals 
    "I think deeply, not just code fast"

Body + UI font: Geist (Vercel's open-source font, or substitute: 
  General Sans via Fontshare)
  — Used for everything else: body, nav, labels, buttons, metadata
  — Variable font: weights 300 through 700
  — Character: technical precision, zero decorative personality, 
    exactly what a Vercel/Linear product uses

NEVER use: Inter, Poppins, Roboto, Montserrat, Space Grotesk 
(overexposed), DM Sans (too soft for this identity)

── TYPE SCALE (fluid, clamp-based)
Hero H1:         80–120px  |  Instrument Serif Regular  |  lh: 0.95  |  ls: -0.04em
Hero H1 accent:  Same size  |  Instrument Serif Italic   |  color: Signal (#2563FF)
Section heading: 48–64px   |  Geist 700                 |  lh: 1.05  |  ls: -0.03em
Subheading:      22–28px   |  Geist 400                 |  lh: 1.4   |  ls: -0.01em
Body copy:       16–18px   |  Geist 400                 |  lh: 1.70  |  max-width: 60ch
Label/tag text:  11–12px   |  Geist 600                 |  ls: 0.10em  |  UPPERCASE
Button text:     14px      |  Geist 600                 |  ls: -0.01em
Nav links:       14px      |  Geist 500                 |  ls: 0.00em
Metadata:        13px      |  Geist 400                 |  color: Text tertiary

── TYPOGRAPHY RULES
1. Hero H1 is left-aligned. ALWAYS. Never center the headline.
2. Section headings are left-aligned inside their content column.
3. Body copy max-width: 60 characters. Never full-width paragraphs.
4. Only the contact section CTA headline is centered.
5. Numbers (stats, percentages, years) use Geist tabular figures: 
   font-variant-numeric: tabular-nums
6. No bold body text except for ONE key phrase per paragraph max.
7. Line 1 of hero H1 in Instrument Serif Regular, black
   Line 2 of hero H1 in Instrument Serif Italic, Signal blue
   Line 3 of hero H1 in Geist 700, black
   — This three-line contrast IS the visual identity of the portfolio.

═══════════════════════════════════════════════════════
SECTION 3: LAYOUT & GRID SYSTEM
═══════════════════════════════════════════════════════

Desktop (1440px):   12-column grid  |  gutter: 24px  |  margin: 80px
Tablet (768px):     8-column grid   |  gutter: 16px  |  margin: 32px
Mobile (390px):     4-column grid   |  gutter: 12px  |  margin: 16px

Content max-width: 1200px centered
Wide content (hero visual, full-bleed): 100vw

── SECTION HEIGHTS (intentionally varied — no uniform rhythm)
Nav:         64px sticky, becomes 56px on scroll
Hero:        100dvh minimum, content centered vertically with 96px top offset
Projects:    auto (tall, case-study style, minimum 900px)
Stack:       auto (compact, maximum 600px)
About:       auto (medium, ~800px)
Contact:     100vh full-bleed dark panel

── SPACING TOKENS
xs:    4px
sm:    8px
md:    16px
lg:    24px
xl:    40px
2xl:   64px
3xl:   96px
4xl:   128px
5xl:   200px (hero section top padding)

═══════════════════════════════════════════════════════
SECTION 4: NAV — EXACT COMPONENT SPEC
═══════════════════════════════════════════════════════

Height: 64px (default), 56px (scrolled)
Background default: transparent
Background scrolled: rgba(250, 250, 249, 0.85) + blur(20px)
Border-bottom scrolled: 1px solid rgba(0,0,0,0.06)
Transition: all 300ms ease

Layout: Logo left — Links center — CTA right
NO pill-shaped background on active link (too template-like)
Active link: Just the signal blue color (#2563FF), no background

Logo: Custom SVG monogram "K" with a small angular code bracket 
integrated. 32×32px. Black fill, no gradient. Next to "Koushik.dev" 
in Geist 600, 15px. No underline, no logo background pill.

Nav links: About · Projects · Stack · Contact
— 14px Geist 500
— Color: Text secondary (#525252) by default
— Hover: Text primary (#0C0C0E)
— Active (scroll position): Signal blue (#2563FF)
— NO background on active state

CTA button "Hire Me":
— Padding: 10px 20px
— Background: #0C0C0E (near-black, NOT blue/purple)
— Text: #FAFAF9, 14px Geist 600
— Border-radius: 8px (NOT pill-shaped)
— Hover: background #1A1A1F, slight scale 1.02
— This button is deliberately the darkest element in the nav —
  it draws the eye without using color

Mobile: Hamburger → full-screen overlay menu with large 
36px navigation items, signal blue hover, clean slide-down animation

═══════════════════════════════════════════════════════
SECTION 5: HERO — THE DEFINING SECTION
═══════════════════════════════════════════════════════

Layout: Two-column asymmetric (55% left text / 45% right visual)
Vertical center alignment, 96px top offset from nav

── LEFT COLUMN: Text Composition

AVAILABILITY INDICATOR (top of hero):
NOT a pill badge. Instead: a horizontal 3-element line:
  [●  Available for roles]  [·]  [Hyderabad · Remote · Hybrid]
  — "●" is 8px circle, animated pulse, color: #22C55E (green)
  — Both text segments: 13px Geist 400, Text tertiary
  — Separated by a centered dot
  — No background, no border, no pill shape
  — This reads as status, not a marketing badge

H1 HEADLINE (three deliberate lines):
Line 1: "Building"
  — Instrument Serif Regular, 96px, Text primary (#0C0C0E)
  — lh: 0.95, ls: -0.04em

Line 2: "Android & AI"  
  — Instrument Serif Italic, 96px, Signal blue (#2563FF)
  — Same sizing as line 1
  — NOT gradient text — solid signal blue only
  — A single 3px underline beneath this line only,
    signal blue, 60% width, left-aligned
    (this is the ONLY decoration in the hero)

Line 3: "Applications."
  — Geist 700, 80px, Text primary (#0C0C0E)
  — ls: -0.04em
  — The period at the end: Signal blue (#2563FF)
    (a single typographic detail that rewards close attention)

SUBTEXT (below H1, 24px gap):
One sentence only. Maximum 12 words.
"Flutter specialist shipping intelligent mobile experiences — 
from EHR systems to biometric authentication."
  — 18px Geist 400, Text secondary (#525252), lh: 1.65
  — max-width: 480px, left-aligned

CTA ROW (32px below subtext):
Primary CTA: "View Projects →"
  — Background: #0C0C0E, 14px Geist 600, #FAFAF9
  — Padding: 14px 28px, border-radius: 8px
  — Arrow is part of the text, NOT a separate icon
  — Hover: translateY(-2px) + shadow: 0 8px 24px rgba(0,0,0,0.15)

Secondary CTA: "Download CV"
  — NO background, NO border
  — 14px Geist 500, Text secondary (#525252)
  — Subtle underline animation on hover
  — A small ↓ arrow before the text: "↓ Download CV"
  — Color: Text secondary, transitions to Text primary on hover

Gap between CTAs: 24px

STATS ROW (48px below CTAs):
Thin top border line (1px, rgba(0,0,0,0.08)) separating from CTAs
Four stats side-by-side, NO icons, NO labels in ALL-CAPS:
  "4"    "2"      "5+"      "18mo"
  Apps   Internships  Languages  Experience
  
Value: 28px Geist 700, Text primary, tabular-nums
Label: 12px Geist 400, Text tertiary
Vertical dividers between stats: 1px rgba(0,0,0,0.08), 24px tall
Gap between value and label: 4px

── RIGHT COLUMN: Visual Composition
This is NOT floating cards with drop shadow glows.
This IS a composed device mockup scene.

PRIMARY ELEMENT: Android phone mockup (realistic, not flat)
  — Positioned at center-right, slight 8° clockwise rotation
  — Size: 260px wide × 520px tall
  — Show a real app screen inside — the MedTek app UI
    with actual UI elements (status bar, header, list items)
  — Phone frame: Dark (#1A1A1A), subtle metallic edge
  — Drop shadow: 0 32px 64px rgba(0,0,0,0.12), NO glow

SECONDARY ELEMENT: Code snippet card
  — Position: Top-left of the visual, overlapping phone at 20%
  — Size: 220px wide, dark background (#0A0A0F)
  — Border-radius: 10px
  — Content: 4 lines of real Dart/Flutter code in Geist Mono
    Background: #0A0A0F, code uses subtle syntax highlighting
    (string: #98C379 green, keyword: #C678DD violet, 
     comment: #5C6370 gray)
  — Light border: 1px rgba(255,255,255,0.08)
  — NO drop shadow glow. Subtle box-shadow only.
  — Animation: gentle float, 6s, translateY ±8px

TERTIARY ELEMENT: Minimal stat chip
  — Position: Bottom-right of visual, overlapping phone
  — Size: 160px wide
  — White background, 1px border, border-radius: 10px
  — Content: "ML Accuracy" label (11px Geist 600 uppercase)
    + "98.4%" in 28px Geist 700, Signal blue
    + thin progress bar beneath: 4px height, signal blue fill
  — Animation: gentle float opposite phase to code card

BACKGROUND OF VISUAL COLUMN:
  — Absolutely nothing. White (#FAFAF9).
  — NO purple gradient circle
  — NO glassmorphism orb
  — NO mesh gradient
  — The visual elements create depth through layering alone

═══════════════════════════════════════════════════════
SECTION 6: PROJECTS — EDITORIAL CASE STUDY LAYOUT
═══════════════════════════════════════════════════════

Abandon the 3-column card grid entirely.
This section uses a numbered editorial layout — like a magazine 
feature on each project.

SECTION HEADER:
  — No pill badge above it
  — Left-aligned: "Selected Work" in 56px Geist 700, 
    Text primary, ls: -0.03em
  — Right-aligned on same baseline: "04 Projects" in 
    13px Geist 400, Text tertiary, tabular-nums
  — A single 1px full-width divider below this header row
  — 48px gap before first project

── PROJECT ITEM LAYOUT (alternating, not cards):
Each project is a horizontal band, full content width.
No card background. No border-radius. Just a bottom divider.

PROJECT 01 — DevPulse:
Left 8 columns:
  — "01" in 72px Geist 300, Text tertiary, tabular-nums
    (large number adds editorial weight)
  — "DevPulse" in 40px Geist 700, Text primary, ls: -0.02em
  — Category: "Dashboard · Real-time" 
    12px Geist 500, Text tertiary, uppercase, ls: 0.1em
  — Description: 2-line body, 16px Geist 400, Text secondary
  — Tech pills (inline, text-only):
    Each pill: "Flutter" "Firebase" "Dart" "GitHub API"
    — No colored background, just 1px border, Text secondary
    — 11px Geist 600, padding 4px 10px, border-radius 4px
    — Hover: border-color Signal blue, text Signal blue
  — "View Case Study →" link:
    13px Geist 600, Text secondary
    → Arrow slides right on hover (translateX 4px)
    → Text color transitions to Text primary

Right 4 columns:
  — Screenshot of the app/dashboard in a subtle frame
  — Border-radius: 12px
  — Shadow: 0 8px 24px rgba(0,0,0,0.08)
  — Overflow: hidden
  — On hover: scale(1.02), shadow deepens
  — No glow. No gradient border.

PROJECT 02 — reversed (image left 4 col, text right 8 col)
PROJECT 03 — DevPulse layout again
PROJECT 04 — reversed

Dividers between projects: 1px rgba(0,0,0,0.07)
Padding above/below each project: 48px

HOVER STATE for entire project row:
  — Background: a barely perceptible #F3F3F0 fill 
    (the surface token) that fades in over 200ms
  — This is the ONLY hover background effect in the section
  — Cursor changes to custom: a circle with "View →" text

═══════════════════════════════════════════════════════
SECTION 7: STACK — REENGINEERED SKILL DISPLAY
═══════════════════════════════════════════════════════

ABANDON progress bars entirely.
Progress bars are a lie — no recruiter has ever been convinced 
by "98% Kotlin." They are a template filler. Remove them.

REPLACE WITH: "The Arsenal" — three typographic columns

Layout: Full-width, three equal columns, no card background
Background: Surface (#F3F3F0) full-width section
Padding: 80px top, 80px bottom

Section heading: "The Arsenal" — 48px Geist 700, left-aligned

Each column:
  — Column header: 11px Geist 600, uppercase, 
    ls: 0.1em, Signal blue (#2563FF)
    e.g. "CORE ENGINEERING" / "AI & INFRASTRUCTURE" / "TOOLS"
  — 16px gap
  — 1px signal-blue underline, 24px wide (like a rule)
  — 24px gap
  — Skills as a pure typographic list:
    Each skill: 18px Geist 500, Text primary, lh: 2.2
    NO icons. NO dots. NO color-coded bullets.
    Just clean typographic rows.
    On hover: the text slides 4px right with a 
    signal blue dot (6px) appearing to the left — 
    "· Flutter" — smooth 180ms transition.
  — Skills listed in natural order (not alphabetical)

Columns separated by 1px rgba(0,0,0,0.07) dividers

This section communicates competence through restraint —
a list of 30 tools with no decoration reads MORE confident 
than 30 progress bars with glow effects.

═══════════════════════════════════════════════════════
SECTION 8: ABOUT — EDITORIAL SPLIT
═══════════════════════════════════════════════════════

Background: #FAFAF9 (standard)
Section heading: Left-aligned, no pill badge above

LAYOUT: Two unequal columns (6 columns left / 6 columns right)
Top-aligned, not vertically centered

── LEFT COLUMN:

PULL QUOTE (the emotional lead):
"I write code that thinks. I build apps that matter."
  — 32px Instrument Serif Italic, Text primary
  — Line height: 1.3
  — NO quotation marks decoration
  — Signal blue left border: 2px solid, 80% of the quote height
    (this is a subtle editorial detail)
  — 48px bottom gap before bio paragraph

BIO PARAGRAPHS (2 max):
Para 1: 16px Geist 400, Text secondary, lh: 1.75, max-width: 52ch
  "I'm Koushik, a Flutter & AI engineer based in 
  Hyderabad, India. I build mobile-first applications 
  at the intersection of clean UX and intelligent systems."

Para 2: Same specs.
  "My work spans Dart front-ends, Python ML pipelines, 
  and PostgreSQL backends — shipped to real users, not 
  just GitHub READMEs."

Two CTAs below bio (same as hero but smaller):
  "Send me an email →" — underline link, no button
  "LinkedIn ↗" — same treatment, opens new tab

── RIGHT COLUMN: Timeline as pure type

"Career Milestones" — 13px Geist 600, Text tertiary, uppercase
32px gap below label

Each milestone:
  — Layout: [Year] [Separator] [Company] on one line
             [Role title] on second line
             [One sentence desc] on third line
  — Year: 15px Geist 700, Signal blue, tabular-nums
  — Separator: " · " in Text tertiary
  — Company: 15px Geist 400, Text secondary
  — Role title: 18px Geist 600, Text primary, ls: -0.01em
  — Description: 14px Geist 400, Text tertiary, lh: 1.5
  — Bottom border: 1px rgba(0,0,0,0.06) below each milestone
  — Padding: 20px 0 between milestones

NO icons. NO colored dots. NO connector lines.
Just immaculate typographic rhythm.

5 milestones:
  2021 · College — Started CS Engineering
  2022 · Personal — First Flutter App Shipped  
  2023 · TechOptima — Flutter Development Intern
  2024 · Personal — MedTek EHR + AI Integration
  2025 · Stifund — Mobile Engineering (Current)

═══════════════════════════════════════════════════════
SECTION 9: CONTACT — THE FULL-BLEED DARK FINALE
═══════════════════════════════════════════════════════

Background: #0A0A0F — full viewport height, full bleed
This is the ONE dark section. It creates a dramatic finish.

CENTERED layout (exception to left-align rule — 
contact is a destination moment, centering works here)

"Open to" — 16px Geist 400, Text tertiary on dark (#6B6B7A)
  — 24px gap below

MAIN HEADLINE:
"Let's build something" [linebreak]
"extraordinary."
  — Line 1: Instrument Serif Regular, 72px, white (#E8E8EC)
  — Line 2: Instrument Serif Italic, 72px, Signal blue (#2563FF)
  — lh: 1.0, ls: -0.04em, centered

SUBTEXT: 18px Geist 400, #6B6B7A (dark muted), centered
"Android & Flutter engineering · Available in Hyderabad · 
Remote-friendly · Responds within 24h"
Separated by centered dots "·"

EMAIL LINK (the primary action — NOT a button):
48px Geist 600, white (#E8E8EC)
"koushik@example.com"
  — Subtle underline on hover: 2px signal blue
  — Arrow → appears to the right on hover
  — Hover transition: 200ms
  — This is more powerful than a button — email as a 
    typographic statement says confidence

SOCIAL ROW (below email, 40px gap):
Three text links side-by-side, 40px apart:
"GitHub ↗"  "LinkedIn ↗"  "Resume ↗"
  — 14px Geist 500, #6B6B7A
  — Hover: white (#E8E8EC)
  — NO icons, NO social media logos

BOTTOM RULE:
A 1px rgba(255,255,255,0.06) line 60px from bottom
Copyright on left: "© 2026 Koushik" — 13px Geist 400, #4A4A5A
Timezone on right: "IST · UTC+5:30" — same

═══════════════════════════════════════════════════════
SECTION 10: MICRO-INTERACTIONS & ANIMATION
═══════════════════════════════════════════════════════

EASING (use this curve for ALL transitions):
cubic-bezier(0.16, 1, 0.3, 1) — fast start, smooth settle
Exit easing: cubic-bezier(0.4, 0, 1, 1) — 150-180ms only

── SCROLL REVEALS (CSS scroll-driven, no JS):
Elements reveal with opacity 0 → 1 only.
NO translateY on scroll (causes layout shift).
Animation-range: entry 0% entry 65%
Stagger: 60ms between sibling elements

── HOVER STATES:
Project rows: Background fill fade, 200ms
Pills: Border color + text color swap, 180ms
Nav CTA: scale(1.02) + shadow deepen, 180ms
All CTA buttons: translateY(-2px) + shadow lift, 180ms
Email in contact: underline slides in from left, 250ms

── HERO ELEMENTS:
Code card float: translateY(0 → -8px → 0), 6s, ease-in-out, infinite
Stat chip float: translateY(0 → 8px → 0), 5s, ease-in-out, infinite
  (opposite phase — creates natural breathing motion)
Availability dot: opacity pulse 1 → 0.4 → 1, 2s infinite

── PAGE LOAD SEQUENCE:
Nav appears: 0ms, fade in
Availability line: 100ms delay, opacity 0→1
H1 Line 1: 200ms, opacity 0→1
H1 Line 2: 350ms, opacity 0→1 
H1 Line 3: 480ms, opacity 0→1
Subtext: 580ms
CTAs: 680ms
Stats: 780ms
Hero visual: 400ms, scale 0.97→1 + opacity 0→1
  
Total page entry: under 1 second, staggered but fast.
No heavy animations. No full-page loaders.

═══════════════════════════════════════════════════════
SECTION 11: COMPONENT DESIGN SYSTEM
(for Figma reuse as design tokens + components)
═══════════════════════════════════════════════════════

── BUTTONS (3 variants)
Primary / Dark:
  bg #0C0C0E · text #FAFAF9 · 14px Geist 600 
  padding 14px 28px · radius 8px
  hover: bg #1A1A1F · translateY(-2px)

Ghost / Outline: 
  bg transparent · border 1px rgba(0,0,0,0.12) · text #525252
  14px Geist 500 · padding 14px 24px · radius 8px
  hover: border rgba(0,0,0,0.24) · text #0C0C0E

Text Link:
  No background · no border · text #525252 · 14px Geist 500
  Underline decoration with 2px offset · hover: text #0C0C0E
  
── TECH PILLS (inline, not colorful chips)
  border 1px rgba(0,0,0,0.10) · bg transparent
  11px Geist 600 · color #525252 · uppercase · ls 0.06em
  padding 4px 10px · radius 4px
  hover: border Signal blue · color Signal blue
  
── SECTION DIVIDERS
  1px rgba(0,0,0,0.07) full width · no padding·
  
── AVAILABILITY INDICATOR
  8px circle #22C55E (green) + pulse shadow animation
  13px Geist 400 Text tertiary inline text
  
── STAT DISPLAY
  Value: 28px Geist 700 Text primary tabular-nums
  Label: 12px Geist 400 Text tertiary

═══════════════════════════════════════════════════════
SECTION 12: WHAT TO ABSOLUTELY NEVER DO
(Design constraints — hard rules)
═══════════════════════════════════════════════════════

1.  NEVER use purple (#7C3AED or similar) anywhere
2.  NEVER use gradient backgrounds (mesh, blob, radial orbs)
3.  NEVER use progress bars for skills
4.  NEVER use emoji inside design components
5.  NEVER center-align body text or headings (except contact)
6.  NEVER use 3-column symmetric feature/project grids
7.  NEVER add "pill badge" section labels above every heading
8.  NEVER use colored side-borders on cards (left: 3px colored)
9.  NEVER use gradient-filled buttons
10. NEVER show more than 4 decorative floating elements total
11. NEVER use icons inside colored circle backgrounds
12. NEVER make every section the same height and padding
13. NEVER use text like "● FLAGSHIP WORK" in a bubble above h2
14. NEVER use a neon/glow effect as surface decoration
15. NEVER stack 10+ progress bar rows to display skills

═══════════════════════════════════════════════════════
DELIVERABLE SPECIFICATIONS
═══════════════════════════════════════════════════════

Figma frames required:
1. Desktop 1440×900 — all 6 sections (full scroll)
2. Mobile 390×844 — all 6 sections responsive
3. Component library frame — all reusable components
4. Color & type specimen frame — all tokens documented
5. Interaction notes frame — hover states, animations described

Auto-layout: Every component uses Figma Auto Layout
Variables: All colors and type as Figma Variables
Components: Nav, Hero, Project Row, Skill Column, 
  Timeline Item, Contact Panel — all as main components
Styles: Text styles and color styles documented

Design inspiration boards to attach:
— linear.app homepage screenshot
— stripe.com/press typography reference  
— vercel.com nav interaction reference
— rauno.me hero typography reference