# Dexam Portfolio Design System

Shared design system used by two separate codebases:

- `snehalkumar-portfolio` — Snehal Kumar's personal portfolio site (snehalkumar.com)
- `Dexam.App` — the Dexam learning platform

This repo is the single source of truth for both. A change here should be reviewed for impact on both consumers before merging.

## Scope: what's actually shared vs. portfolio-specific

The bundle below originated as a Claude Design handoff built for the portfolio site specifically (see `project/readme.md` for its full original context). Not everything in it generalizes to Dexam:

- **Shared (use as-is for both):** design tokens (`project/tokens/`), visual foundations (color, type, spacing, radius, shadow, dark mode), and generic UI primitives (`project/components/core`, `surfaces`, `forms`, `navigation`, `overlays`, `data`, `feedback`).
- **Portfolio-specific (do not apply to Dexam without a separate decision):** the `project/portfolio/` content components (CaseStudyCard, ExperienceCard, etc.), the `project/patterns/` Notion-style blocks, and the "Content fundamentals" voice/tone guidance in `project/readme.md` — those were written for a single-author design portfolio's narrative voice, not a multi-role education product with students, teachers, and admins.

If Dexam needs its own content components or voice guidance, write them as a new, clearly-labeled section rather than repurposing the portfolio ones.

## For coding agents

This started as a **handoff bundle from Claude Design (claude.ai/design)**: a user mocked up designs in HTML/CSS/JS using an AI design tool, then exported this bundle so a coding agent can implement the designs for real.

**Read `project/readme.md` top to bottom first, then follow its imports** — open every file it pulls in (shared components, CSS, scripts) so you understand how the pieces fit together before implementing anything.

**If anything is ambiguous, ask the user to confirm before you start implementing.** It's much cheaper to clarify scope up front than to build the wrong thing.

The design medium is **HTML/CSS/JS** — these are prototypes, not production code. Recreate them pixel-perfectly in whatever technology fits the *consuming* codebase (plain JS for the portfolio site's no-build setup, React/Vite for Dexam) — match the visual output, don't copy the prototype's internal structure unless it happens to fit.

**Don't render these files in a browser or take screenshots unless the user asks you to.** Everything needed — dimensions, colors, layout rules — is spelled out in the source.

## Contents

- `README.md` — this file
- `project/` — the design system itself (tokens, components, patterns, guidelines, portfolio UI kit, `SKILL.md`)
