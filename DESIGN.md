---
name: Pazant Consulting Services
description: Governance-forward advisory for small federal contractors
colors:
  institutional-navy: "#1a2744"
  navy-light: "#2a3d66"
  navy-dark: "#0f1a2e"
  federal-teal: "#1a7a8c"
  teal-dark: "#0f5a68"
  credential-gold: "#b8860b"
  gold-light: "#d4a843"
  gold-highlight: "#e8c468"
  neutral-bg: "#faf9f8"
  neutral-surface: "#f0eeea"
  neutral-border: "#e0ddd6"
  card-white: "#ffffff"
  muted-text: "#5c6478"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.institutional-navy}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.navy-light}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
  button-outline:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.institutional-navy}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
  button-teal:
    backgroundColor: "{colors.federal-teal}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
  card-default:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.institutional-navy}"
    rounded: "{rounded.xl}"
    padding: "24px"
  badge-outline:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.federal-teal}"
    rounded: "{rounded.lg}"
    padding: "4px 12px"
---

# Design System: Pazant Consulting Services

## Overview

**Creative North Star: "The Institutional Briefing Room"**

This system presents Pazant Consulting as a selective, governance-forward federal advisory practice. The visual language is executive and legible: crisp hierarchy, restrained color commitment, and structure that signals institutional maturity. Warmth comes through typography pairing and human-centered narrative copy, not through decorative effects or marketing gloss.

The site rejects generic SaaS landing-page aesthetics. Surfaces stay light and readable; navy carries authority; teal marks readiness and action; gold appears sparingly as a credential accent. shadcn/ui (base-nova) provides accessible primitives; brand character lives in token assignment and composition.

**Key Characteristics:**
- Serif headlines + sans body for executive editorial tone
- Navy primary, teal secondary action, gold credential accent (≤10% of any screen)
- shadcn Card, Badge, Alert, Sheet, Accordion as the component foundation
- Tonal section backgrounds and dot-pattern overlays instead of heavy decoration
- Scroll-reveal motion with full `prefers-reduced-motion` fallback
- Max content width 72rem (1152px); body copy capped at ~65–75ch

## Colors

A restrained palette anchored in federal-institutional navy with teal readiness accents and gold credential highlights.

### Primary
- **Institutional Navy** (#1a2744 / oklch(0.22 0.04 260)): Primary buttons, footer, credential panels, headings. The authoritative voice of the brand.
- **Navy Light** (#2a3d66): Primary button hover, gradient endpoints in dark sections.
- **Navy Dark** (#0f1a2e): Dark CTA section backgrounds, footer depth.

### Secondary
- **Federal Teal** (#1a7a8c / oklch(0.48 0.08 200)): Secondary CTAs, icon boxes, active nav states, highlight words in hero headlines, deliverable accordion triggers.
- **Teal Dark** (#0f5a68): Teal button hover, pressed states.

### Tertiary
- **Credential Gold** (#b8860b): Quote icons, footer labels, founder credential accents, callout emphasis. Never as a large background wash.
- **Gold Light** (#d4a843): Subheadings on dark navy cards.
- **Gold Highlight** (#e8c468): Dark-section accent text only.

### Neutral
- **Neutral Background** (#faf9f8 / oklch(0.985 0.004 95)): Page canvas. Near-white with minimal warm tint; not cream or sand.
- **Neutral Surface** (#f0eeea): Alternate section fills, list item backgrounds.
- **Card White** (#ffffff): Card and popover surfaces.
- **Neutral Border** (#e0ddd6 / oklch(0.9 0.01 95)): Card rings, dividers, input borders.
- **Muted Text** (#5c6478 / oklch(0.42 0.02 260)): Body supporting copy, descriptions. Must meet WCAG AA on white and light tinted surfaces.

### Named Rules
**The Credential Gold Rule.** Gold appears on ≤10% of any screen. It signals credentials, quotes, and emphasis — never fills a hero or entire section.

**The Readable Muted Rule.** Muted text is never light gray on tinted near-white. If contrast is borderline, darken toward institutional navy.

## Typography

**Display Font:** Source Serif 4 (with Georgia, serif fallback)
**Body Font:** Source Sans 3 (with system-ui, sans-serif fallback)

**Character:** Editorial authority in headlines; clean institutional clarity in body. The pairing reads as counsel and briefing materials, not startup marketing.

### Hierarchy
- **Display** (600, clamp(1.875rem–3rem), 1.15): Hero h1 only. `text-balance` applied. Max effective size ~3rem (48px).
- **Headline** (600, clamp(1.5rem–2.25rem), 1.2): Section h2 (`Section`, page titles). Serif, `text-balance`.
- **Title** (600, 1rem, 1.4): Card titles, service names, sheet title. Serif on marketing cards; sans on UI chrome.
- **Body** (400, 1rem, 1.65): Paragraphs and descriptions. `text-pretty` on long prose. Max ~65–75ch.
- **Label** (600, 0.75rem, slight tracking): Badge text, deliverable labels, contact field labels. Sentence case preferred over all-caps.

### Named Rules
**The Headline Ceiling Rule.** Display headings never exceed 3rem (~48px) at any breakpoint. Authority through weight and spacing, not size inflation.

## Elevation

This system uses a hybrid: flat cards at rest with soft navy-tinted shadows on hover and featured panels. Depth is also conveyed through tonal section backgrounds (`section-gradient-teal`, `section-gradient-gold`, `section-dark`) and subtle dot/grid patterns — not glassmorphism or heavy drop shadows.

### Shadow Vocabulary
- **Panel Rest** (`0 4px 24px -4px rgba(26, 39, 68, 0.08)`): Default card elevation.
- **Panel Hover** (`0 12px 40px -8px rgba(26, 39, 68, 0.18)`): Interactive card lift on hover.
- **Panel Navy** (`0 8px 32px -4px rgba(26, 39, 68, 0.35)`): Credential and contact panels on navy background.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows respond to hover or denote featured credential panels — never stacked decoratively on every element.

## Components

Built on shadcn/ui (base-nova, Base UI primitives). Custom wrappers live in `src/components/`; primitives in `src/components/ui/`.

### Buttons
- **Shape:** Gently rounded (10px / `rounded-lg`)
- **Primary:** Institutional navy fill, white text, 40px height (`size="lg"`), arrow icon on CTA links
- **Outline:** White fill, navy border, muted hover to accent tint
- **Teal:** Federal teal fill for secondary marketing CTAs ("View All Services", "Explore Our Services")
- **Link:** Primary color, underline on hover
- **Hover / Focus:** `hover:bg-primary/80` or teal-dark; `focus-visible:ring-3 ring-ring/50` (teal ring token)

### Chips / Badges
- **Style:** shadcn Badge — `outline` for hero tags and section eyebrows, `secondary` for service numbers and credentials
- **State:** No filter/action variants; informational only

### Cards / Containers
- **Corner Style:** 14px (`rounded-xl`) via shadcn Card
- **Background:** White default; `bg-teal/5`, `bg-brand-gold/5`, or `bg-primary` for variant panels
- **Shadow Strategy:** Panel rest; hover lift on interactive grids
- **Border:** `ring-1 ring-foreground/10` (shadcn default) or explicit `border-teal/20`, `border-brand-gold/20`
- **Internal Padding:** 24px (`--card-spacing: 16px` base + header/content slots)

### Alerts
- **Style:** shadcn Alert with Quote icon for callout panels ("We don't write proposals")
- **Variants:** `border-brand-gold/30 bg-brand-gold/5`, `border-teal/30 bg-teal/5`

### Navigation
- **Desktop:** Sticky header, backdrop blur, Source Sans 3. Active link: `bg-accent text-accent-foreground`. CTA: primary Button.
- **Mobile:** shadcn Sheet sliding from right; Separator before consultation CTA.

### Accordion
- **Use:** Service deliverables on `/services` — one expandable panel per service, default open.
- **Trigger:** Semibold teal-dark label "Deliverables".

### Signature: Hero + AnimateIn
- **Hero:** Full-width section with subtle radial gradients, floating orbs, optional credential Card panel (desktop).
- **AnimateIn:** Intersection Observer scroll reveal; 700ms ease-out; disabled under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** use shadcn Card, Badge, Button, Alert, Sheet, Separator, and Accordion for all new UI.
- **Do** assign navy to primary actions and teal to secondary marketing CTAs.
- **Do** keep body text at WCAG AA contrast; test muted gray on tinted backgrounds.
- **Do** use Source Serif 4 for h1–h3 and marketing card titles.
- **Do** respect `prefers-reduced-motion` on all scroll and hover animations.
- **Do** use verb + object CTA labels ("Book a Consultation", "View All Services").

### Don't:
- **Don't** use generic SaaS landing pages, cream-and-navy AI slop, or marketing buzzwords in visual treatment.
- **Don't** use gradient text (`background-clip: text`) for headlines or emphasis.
- **Don't** use hero metric dashboards (big numbers, progress bars, stat grids).
- **Don't** use identical icon + heading + text card grids without variation in layout or hierarchy.
- **Don't** use side-stripe borders (`border-left` > 1px) on cards, lists, or callouts.
- **Don't** put uppercase tracked eyebrows on every section; badges are for selective labeling only.
- **Don't** use glassmorphism, floating orbs, or decorative blur as default surface treatment.
- **Don't** put gray muted text on colored backgrounds without darkening toward the background hue.
