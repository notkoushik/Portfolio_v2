"Apply the following precise visual and motion upgrades to this existing dark portfolio design. Do NOT change any fonts, font sizes, font weights, or text content.

1. REMOVE CARD CONTAINERS (Stack Section):
The three rounded rectangle cards labeled 'Core Engineering', 'Intelligence', and 'Systems' — remove their background fill and border completely. Set fill to transparent/none. Keep all text exactly where it is. Add a single 1px rgba(255,255,255,0.08) horizontal line as a bottom separator under each individual skill item (Flutter & Dart, Android SDK, etc.) to maintain visual rhythm without card boxes. Let the text breathe directly on the dark background.

2. PROJECT CARDS → FULL WIDTH CINEMATIC:
The DevPulse and MedTek EHR project cards — stretch each card to full content width (single column, not two-column grid). Increase card height to 400px minimum. Set the existing app mockup screenshot as a full-bleed background image covering the entire card. Apply a dark gradient overlay linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 60%, transparent 100%) on top of the image. Move all text (category tag, project title, description) to the bottom-left inside the card with 32px padding. Card border-radius stays at current value.

3. NAVBAR → FLOATING BLUR:
Remove the solid background fill from the navigation bar. Replace with a semi-transparent background rgba(10,10,10,0.6) and apply backdrop-filter: blur(12px). Add a single 1px rgba(255,255,255,0.07) bottom border only. Add a small filled circle 8px, color #00FF87 immediately to the left of the 'Hire Me' button text to act as a live availability indicator dot. No other nav changes.

4. ORANGE PERIODS ON HEADINGS:
Find every section heading that ends with a period — 'The Arsenal.', 'Selected Work.', 'BUILDING ANDROID & AI APPLICATIONS.' and any others. Recolor only the final period character to orange #FF4500. All other characters remain untouched.

5. GRAIN TEXTURE OVERLAY:
Create a new top-level rectangle layer covering the entire frame at 100% width and height. Fill it with a fine monochromatic noise/grain texture. Set layer opacity to 4%, blend mode to Overlay. Lock this layer above all content.

6. SCROLL ANIMATION — HERO SECTION:
Split the hero heading 'BUILDING ANDROID & AI APPLICATIONS.' by individual words. Each word starts at y: +100%, opacity: 0 and animates to y: 0, opacity: 1. Words animate in sequence with 60ms stagger between each word. Easing: expo.out, duration 1s. The availability badge pill enters separately after all words complete — y: +20px → 0, opacity: 0 → 1, delay: 600ms. The profile photo slides in from x: +40px → 0, opacity: 0 → 1, ease: power3.out, duration: 1.2s. Annotate all these as HERO_ENTRY.

7. SCROLL ANIMATION — SECTION HEADINGS:
Every major section heading ('The Arsenal.', 'Selected Work.') animates when it enters the viewport. Start state: y: +80px, opacity: 0. End state: y: 0, opacity: 1. Animation is scroll-scrubbed — tied directly to scroll position, not a one-time trigger (meaning it reverses if user scrolls back up). Easing: expo.out, scrub smoothing factor: 1.5. Section index numbers ('03', '04') enter from x: +20px → 0, opacity: 0 → 1 with a 200ms delay after the heading. Annotate all as HEADING_SCRUB.

8. SCROLL ANIMATION — STACK SKILL ITEMS:
Each individual skill text item (Flutter & Dart, Android SDK, Kotlin & Java, etc.) animates in with a stagger as its section enters the viewport. Start state: y: +30px, opacity: 0. End state: y: 0, opacity: 1. Each item delays 80ms from the previous one in the list. The three columns (Core Engineering, Intelligence, Systems) stagger as groups first — 150ms between columns — then items within each column stagger at 80ms each. Easing: power3.out. Annotate as STAGGER_ENTRY.

9. SCROLL ANIMATION — PROJECT CARDS:
Each full-width project card (DevPulse, MedTek EHR) animates as it enters the viewport. Start state: scale: 0.94, opacity: 0, y: +60px. End state: scale: 1, opacity: 1, y: 0. Animation is scroll-scrubbed, triggered when the card top reaches 80% of viewport height. The text overlay inside (title, tag, description) staggers in after the card itself: tag first delay: 0ms, title delay: 100ms, description delay: 200ms — each sliding from y: +15px → 0. Annotate as CARD_SCRUB.

10. SCROLL ANIMATION — SCATTER TO POSITION (The Arsenal Section):
This is the signature Obsidian Assembly effect. When the Stack/Arsenal section enters the viewport, all skill items across all three columns begin at randomized offscreen positions — scattered around the section at random x and y offsets between -120px and +120px from their final positions, with opacity: 0. As the user scrolls and the section reaches center screen, all items simultaneously move from their scattered positions to their exact final layout positions. Motion path is direct (no curves). Easing: power4.out, duration 1.2s, scrub tied to scroll. This creates the 'assembly' effect where the tech stack literally assembles itself as you scroll. Annotate as SCATTER_ASSEMBLE.

All scroll annotations must be added as Figma developer handoff notes on each respective layer with the annotation labels specified. The visual changes (1–5) must be applied directly to the design. The motion annotations (6–10) must be documented as interaction notes for developer implementation using GSAP ScrollTrigger. Final result must feel: cinematic, editorial, production-grade — every element intentional, every motion purposeful."