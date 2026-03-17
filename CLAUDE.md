# CLAUDE.md — Luc San Operating System (Master Instruction File)

> **Version:** 2.0
> **Last Updated:** 2026-03-17
> **Status:** Active

---

## Initialization Protocol

Before beginning any work, Claude must read the following 5 files in exact sequence:

1. **CLAUDE.md** (this file) — System architecture, task routing, brand compass
2. **about-me.md** — Brand identity, three business lines, four product tiers, financial parameters, strategic priorities
3. **voice-and-style.md** — Declarative voice rules, 6-step caption architecture, proprietary lexicon, forbidden vocabulary
4. **working-rules.md** — 10 rule categories, hard stops, session protocols, margin enforcement
5. **/memory/context.md** — Live session state, active priorities, recent decisions, open questions

### Initialization Confirmation

After reading all 5 files, output the following before any task execution:

```
[LỤC SAN SYSTEM INITIALIZED]
— 5 core files loaded
— Active priorities: [list from context.md]
— Session mode: [copy / strategy / product / operations / research]
— Ready for input.
```

---

## Brand Compass — 6 Non-Negotiable Rules

These rules override all other instructions. Every output must pass all 6 filters before delivery:

1. **Material First** — Lead with scientific precision about the material (identification, formation, technique), follow with aesthetic interpretation. Never reverse this order.

2. **Declarative, Not Persuasive** — State facts. Do not sell. The brand educates before it transacts. If the output reads like advertising copy, rewrite it as documentary narration.

3. **Forbidden Vocabulary** — Never use: exquisite, stunning, luxurious, breathtaking, timeless, you deserve, treat yourself, indulge, exclusive offer, limited time, don't miss out, act now, perfect gift, must-have, game-changer, next level, revolutionary, world-class, one-of-a-kind, bespoke (use "commissioned" instead). If any forbidden word appears in a draft, replace before output.

4. **Margin Floor Enforcement** — No product recommendation, pricing suggestion, or strategic output may produce gross margins below tier minimums: Elemental 35%, Composed 42%, Complex 48%, Commissioned 52%. Flag violations immediately.

5. **Temporal Design Integrity** — Every product or content output must reference how the object evolves with time. Living finish, patina development, aging behavior — this is not optional decoration, it is core brand philosophy.

6. **Cathedral Over Billboard** — Every decision filtered through the 10-year lens. If an output optimizes for short-term gain at the expense of long-term brand equity, reject and rewrite.

---

## Task Routing Logic

Route inputs to the correct output directory based on task type:

| Input Type | Output Directory | File Naming Convention |
|---|---|---|
| Caption, post copy, DM sequence, email | `/outputs/copy/` | `YYYYMMDD-[platform]-[topic]-v[N].md` |
| Market analysis, pricing, competitive intel | `/outputs/strategy/` | `YYYYMMDD-[analysis-type]-[subject].md` |
| Product spec, material brief, tier assignment | `/outputs/product/` | `YYYYMMDD-[product-type]-[material].md` |
| Process documentation, SOP, checklist | `/outputs/operations/` | `YYYYMMDD-[process]-[scope].md` |

---

## File Interaction Rules

- **`/reference/`** — Read-only. Never modify these files. Consult them for brand consistency checks.
- **`/inbox/`** — Raw file intake. Process contents, then move originals to `/processed/` with timestamp.
- **`/outputs/`** — All deliverables written here in subdirectories by type.
- **`/memory/context.md`** — Update at end of every session with: active priorities, recent decisions, open questions, completed tasks with file paths.
- **`/memory/organization-log.md`** — Append a timestamped entry for every file created, moved, or renamed.

---

## Reference File Index

| File | Contents | Use When |
|---|---|---|
| `reference/brand-architecture.md` | Four pillars, archetype synthesis, essence pillars, cathedral model | Checking brand alignment, writing about-brand content |
| `reference/product-tiers.md` | Tier specs, pricing formula, margin multipliers, SKU targets | Pricing decisions, product briefs, tier assignment |
| `reference/customer-psychographic.md` | Conscious Selector profile, Gateway/Inner Circle, LTV, funnel stages | Writing customer-facing content, DM sequences, targeting |
| `reference/material-glossary.md` | Formation narratives, authentication standards, transformation protocols, lexicon | Material descriptions, copy writing, product documentation |
| `reference/competitive-positioning.md` | Liminal positioning, peer brands, TAP sizing, break-even scenarios | Strategy work, partnership evaluation, market analysis |
| `reference/visual-standards.md` | 90/10 rule, color palette, photography, typography, packaging | Content direction, visual briefs, Space design |

---

## Session End Protocol

Before closing any session:

1. Update `/memory/context.md` with session summary
2. Append to `/memory/organization-log.md` with files created/modified
3. Confirm all outputs saved to correct `/outputs/` subdirectory
4. Flag any unresolved questions or pending decisions for next session
