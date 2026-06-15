---
target: narrative section homepage
total_score: 27
p0_count: 0
p1_count: 0
timestamp: 2026-06-15T23-13-49Z
slug: src-components-narrativesection-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | n/a for static marketing |
| 2 | Match System / Real World | 4 | Institutional tone fits federal advisory |
| 3 | User Control and Freedom | 3 | n/a |
| 4 | Consistency and Standards | 3 | Aligns with navy/teal system; less box repetition |
| 5 | Error Prevention | 3 | n/a |
| 6 | Recognition Rather Than Recall | 3 | Clear section progression |
| 7 | Flexibility and Efficiency | 2 | n/a |
| 8 | Aesthetic and Minimalist Design | 3 | Removed card/bento quilt; typography-led |
| 9 | Error Recovery | n/a | |
| 10 | Help and Documentation | 3 | n/a |
| **Total** | | **27/32** | **Good — improved from prior 23/40 site score** |

## Anti-Patterns Verdict

**LLM assessment:** PASS (section-level) — Replaced identical card grid, colored header bands, and pill tags with asymmetric image/text, full-width navy capability band with column dividers, and prose columns. No gradient text, no side stripes, no nested cards.

**Deterministic scan:** Clean on NarrativeSection.tsx and page.tsx.

**Remaining tells:** Stock Unsplash boardroom photo still generic; site-wide still has other grid patterns (GroundingGrid, ServiceGrid cards, CompactPoints on other pages).

## Priority Issues

**[P2] Generic stock imagery** — Boardroom photo reads template. Fix: founder/institutional photography or tighter crop with stronger caption integration.

**[P2] Three-column prose block** — Who/How/Outcomes still structurally similar to other site sections. Fix: merge into narrative copy or vary one column visually.

**[P3] Gradient on image caption** — Subtle overlay acceptable; monitor for glassmorphism tell.

## What's Working

- Lead-with-promise hierarchy (serif headline before problem setup) creates editorial voice
- Navy capability band uses committed color instead of ghost cards
- Full-bleed layout breaks container monotony
