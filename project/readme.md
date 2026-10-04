# Snehal Kumar Portfolio Design System

> This document describes the system's original context (built for the portfolio site). It has since become the shared design system for both the portfolio and Dexam — see `../README.md` for what's shared vs. portfolio-specific before reusing anything here in Dexam.

An original, Notion-inspired design system built for **Snehal Kumar's personal portfolio** — a senior product designer's SaaS-style portfolio site (case studies, process notes, an about/experience page). Built from scratch, brand-guidelines-only: no existing codebase, Figma file, or brand assets were provided as source material.

**Do not confuse this with Notion itself.** Nothing here reproduces Notion's logo, icon set, or proprietary UI — it borrows the *feel* (minimal, calm, document-like, block-based, workspace-grade SaaS) and reinterprets it in an original warm/earthy-orange palette for a design portfolio.

## Sources
No codebase, Figma link, or slide deck was attached for this run. Everything below was authored from the brief's written spec (palette, spacing, component inventory) plus original design decisions filling the gaps the brief left open (motion, iconography source, exact component visual treatment). If a Figma file, codebase, or brand deck exists for this project, attach it and this system should be revised against it.

## Index

- `styles.css` — root stylesheet, imports everything below. Link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radius/shadow/motion), `base.css` (reset + global rules)
- `guidelines/` — foundation specimen cards (colors, type, spacing, radius, iconography, wordmark, interaction states)
- `components/` — reusable UI primitives, grouped by concern:
  - `core/` — Button, Badge, Divider
  - `surfaces/` — Card, Block, Callout
  - `forms/` — Input, Textarea, Select, Checkbox
  - `navigation/` — Tabs, Accordion, Breadcrumb, SidebarItem
  - `overlays/` — Tooltip, Dropdown
  - `data/` — Table, DataRow, MetadataBar, Avatar
  - `feedback/` — EmptyState
  - `brand/` — Wordmark
- `portfolio/` — portfolio-specific content components:
  - `cards-a/` — CaseStudyCard, ProjectBlock, MetricCard, CapabilityCard
  - `cards-b/` — ExperienceCard, InsightCard, DecisionCard, ImpactCard, ProblemCard, PrincipleCard
  - `process/` — ProcessStep
  - `groups/` — TagGroup, StatGroup
- `patterns/` — Notion-inspired structural/visual patterns:
  - `blocks/` — DocumentPageBlock, ToggleBlock, QuoteBlock, SideNoteBlock, LinkedPageCard
  - `previews/` — DatabasePreview, KanbanPreview
  - `layout/` — SidebarLayout
- `ui_kits/portfolio/` — click-through recreation of the portfolio site (home, case study, about)
- `SKILL.md` — portable skill definition for use in Claude Code

## Components (43 total)

Core: Button, Badge, Divider, Card, Block, Callout
Forms: Input, Textarea, Select, Checkbox
Navigation: Tabs, Accordion, Breadcrumb, SidebarItem
Overlays: Tooltip, Dropdown
Data: Table, DataRow, MetadataBar, Avatar
Feedback: EmptyState
Brand: Wordmark
Portfolio: CaseStudyCard, ProjectBlock, MetricCard, CapabilityCard, ExperienceCard, InsightCard, DecisionCard, ImpactCard, ProblemCard, PrincipleCard, ProcessStep, TagGroup, StatGroup
Patterns: DocumentPageBlock, ToggleBlock, QuoteBlock, SideNoteBlock, LinkedPageCard, DatabasePreview, KanbanPreview, SidebarLayout

### Intentional additions
Since no source defined a component inventory, the full set above was authored from the brief's own component list (sections 6–7 of the spec) — nothing was added beyond what was requested, except:
- **Wordmark** — needed as an explicit component because no logo exists; keeps the "no drawn mark" rule enforced in one place rather than repeated inline.

## Content fundamentals

**Voice:** first person, quiet confidence, no hype. Write the way a senior designer explains a decision to a peer — plain verbs, short sentences, specifics over adjectives. "Cut signup drop-off by 34%" rather than "revolutionized the onboarding experience."

**Tone:** calm, editorial, slightly understated. Avoid marketing language ("game-changing", "seamless", "delightful") — Notion's own writing prefers concrete, matter-of-fact statements over superlatives, and this system follows that. Prefer "reduced" over "slashed", "shipped" over "launched to huge success."

**Person:** mixed — "I" for narrative/process ("I interviewed 12 users"), plain third-person labels for structural UI ("Case Study", "Process", "Metadata"). Never address the reader as "you" in body copy; this is a portfolio, not a product pitch.

**Casing:** sentence case everywhere — headings, buttons, labels. No ALL CAPS except tiny uppercase micro-labels (`.text-label`, 13px, letter-spaced) used the way Notion uses property names.

**Emoji:** none in UI chrome or component labels. A single content-level emoji is acceptable only as a page icon (Notion's own convention — one emoji "icon" atop a document page), never inline in sentences or as a decorative flourish.

**Numbers:** always specific and outcome-oriented ("34% drop-off reduction", "6 months", "3 iterations") — never vague ("significant improvement").

Example passage (case study intro):
> "New users were abandoning setup at the permissions screen. I redesigned onboarding around a single guided flow, cutting first-week drop-off by 34%."

## Visual foundations

**Color:** mostly neutral — white, warm off-white, soft beige, charcoal text — with a single earthy-orange accent (`#C76A2D`) reserved for interactive elements, links, selected states, and the occasional highlighted stat. Orange is never used decoratively or as a background fill for large areas; it appears in buttons, focus rings, selected borders, and small numerals.

**Type:** Inter for all interface and body text — clean, slightly compact, highly readable at small sizes. Lora (serif) is an optional editorial voice for feature headings and pull-quotes only, never for UI chrome. JetBrains Mono handles metadata, timestamps, tags, and code — anything that reads like a system value rather than prose.

**Spacing:** block-based, not section-based. Content is thought of as stacked blocks (paragraphs, callouts, images) with consistent gaps (`--block-gap`, 16px) between them — not big decorative section paddings. Page containers max out at 760/1040/1200px depending on content type (narrow reading column vs. wide grid).

**Backgrounds:** flat only. No gradients, no textures, no hero photography treatments. The only background variation is white surface vs. warm off-white page background vs. soft-beige muted surface — used to create quiet depth without shadow.

**Imagery:** none provided/invented. Case study covers are treated as placeholder rectangles (muted beige) pending real screenshots — never invented illustration.

**Animation:** minimal and fast. Hover/focus transitions run at 120–180ms with a standard ease-out curve; no bounce, no spring, no entrance animations on scroll. Respect `prefers-reduced-motion` — all transition durations collapse to ~0 when set.

**Hover states:** background tint (`--surface-hover`, a soft warm-beige) on rows/buttons/blocks; interactive cards lift 2px with a very slightly larger shadow. Never a color-invert or darken-only hover on light surfaces.

**Press/active states:** primary buttons deepen to `--color-primary-active`; no scale/shrink press effect — this is a document UI, not a touch-game UI.

**Borders:** the primary structural tool. 1px hairlines in `--border-light` (#E7E1D8) separate blocks/rows; `--border-medium` (#D6CBBF) is used for form-field borders and dividers with slightly more presence. Borders do the elevation work shadows would otherwise do.

**Shadows:** intentionally very subtle — `--shadow-xs`/`--shadow-sm` for resting cards, `--shadow-md` only on floating overlays (dropdown menus, tooltips). No large soft "product marketing" shadows.

**Focus rings:** always visible, always orange (`--color-focus-ring`, a soft-alpha halo — `--shadow-focus-ring`) — never suppressed for aesthetics.

**Corner radii:** soft but restrained. 4/8/12/16px scale (sm/md/lg/xl); pills (`--radius-full`) reserved for badges and small avatar-adjacent chips, never for buttons or cards.

**Transparency/blur:** not used. No frosted-glass panels, no backdrop-filter — flat opaque surfaces throughout, consistent with the "document, not app chrome" feel.

**Layout rules:** content is centered in one of three container widths (760/1040/1200px); no fixed floating toolbars or sticky decorative elements beyond a simple sidebar in the workspace-style layout pattern.

## Dark mode

Dark mode is a token-swap, not a second design system. Every alias (`--bg-page`, `--surface-card`, `--text-body`, `--color-primary`, …) is redefined once under `[data-theme="dark"]` in `tokens/colors.css` — components never branch on theme, they just read the same CSS variables.

- **Apply it**: add `data-theme="dark"` to `<html>` (whole page) or any container (a scoped preview). Toggle it at runtime with the `ThemeToggle` component (`components/core/ThemeToggle.jsx`), which flips the attribute and remembers the choice in `localStorage`.
- **Palette**: warm charcoal backgrounds (`#17140F`/`#1E1912`/`#201B14`) instead of white/off-white/beige; text flips to warm off-white (`#F3EEE4`); the earthy orange primary lightens to `#E2895A` to hold AA contrast on dark surfaces; semantic feedback colors (success/warning/danger/info) are similarly lightened.
- **What doesn't change**: spacing, radius, type scale, borders-over-shadows structure — only color tokens swap. Shadows stay subtle rgba(black) values, which still read correctly on dark surfaces.
- See `guidelines/dark-mode.card.html` for a side-by-side swatch comparison.

## Iconography

No icon set, icon font, or SVG sprite was provided in source material. **Lucide** is substituted — a thin (1.5px), geometric, neutral stroke icon set on CDN (`unpkg.com/lucide`), chosen for its calm/minimal quality matching Notion's own icon language without copying its exact glyphs. See `guidelines/iconography.card.html`.

- No emoji used in UI chrome; a single content-level emoji is acceptable only as a Notion-style page icon atop a document (see `DocumentPageBlock`).
- No unicode-as-icon convention beyond small arrow/chevron/dot glyphs (▾ ▸ › ⋮⋮) used sparingly for disclosure and drag-handle affordances — these are typographic, not illustrative.
- If Lucide should be swapped for a different set (Heroicons, Phosphor, a custom sprite), flag it and this system can be revised.

## Caveats / open questions

- **No logo exists.** Every brand-mark slot renders the wordmark in plain type (sans or serif). If a mark is ever designed, add it under `assets/` and update `Wordmark.jsx`.
- **Fonts are Google-Fonts-hosted** (Inter, Lora, JetBrains Mono via `@import` in `tokens/typography.css`) since no font files were provided. If licensed/self-hosted font files exist, swap the `@import` for local `@font-face` rules.
- **Icons are Lucide via CDN**, a substitution — flag if a different icon language is preferred.
- **No product screenshots or photography** were provided; the UI kit below uses flat placeholder blocks wherever imagery would go.
