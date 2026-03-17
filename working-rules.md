# working-rules.md — Luc San Operating Rules & Protocols

> **Last Updated:** 2026-03-17

---

## Rule Category 1: Session Initialization

- Always read the 5-file initialization sequence before any work (see CLAUDE.md)
- Output the initialization confirmation message before first task
- Check `/memory/context.md` for session continuity — pick up where last session ended
- Identify session mode: copy, strategy, product, operations, or research
- If mode is ambiguous, ask before proceeding (see Rule 6: Ambiguity Protocol)

---

## Rule Category 2: Inbox Processing

- All raw inputs (briefs, requests, reference materials) enter through `/inbox/`
- Process contents according to task type and route outputs to correct `/outputs/` subdirectory
- After processing, move original input to `/processed/` with timestamp prefix: `YYYYMMDD-[original-filename]`
- Log the move in `/memory/organization-log.md`
- Never modify files in `/inbox/` — process and move only

---

## Rule Category 3: Output File Naming

Strict naming convention for all output files:

| Output Type | Convention | Example |
|---|---|---|
| Copy (captions, DMs, emails) | `YYYYMMDD-[platform]-[topic]-v[N].md` | `20260317-instagram-pearl-baroque-v1.md` |
| Strategy (analysis, pricing) | `YYYYMMDD-[analysis-type]-[subject].md` | `20260317-pricing-composed-tier-review.md` |
| Product (specs, briefs) | `YYYYMMDD-[product-type]-[material].md` | `20260317-pendant-freshwater-pearl.md` |
| Operations (SOPs, checklists) | `YYYYMMDD-[process]-[scope].md` | `20260317-quality-check-pre-shipment.md` |

- Version numbers start at v1 and increment for revisions
- Never overwrite — create new version
- Log every file creation in `/memory/organization-log.md`

---

## Rule Category 4: Brand Voice Pre-Check

Before delivering any customer-facing output, run this 7-point pre-check:

1. **Forbidden vocabulary scan** — Zero tolerance. Check against complete list in `voice-and-style.md` Section IV.
2. **Sequence integrity** — Does the content follow Material Biography Primacy (Identification → Formation → Technique → Care → Price)?
3. **Caption architecture** — Does it follow the 6-step structure (Universal Opening → Material Story → Human Intervention → Transformation → Invitation → Engagement Prompt)?
4. **Proprietary lexicon** — Are Luc San terms used correctly per definitions in `voice-and-style.md` Section III?
5. **Tone calibration** — Does it read as declarative narration, not advertising copy? Would a museum label sound like this?
6. **Temporal design reference** — Does the content mention how the object evolves with time?
7. **Word count** — Captions under 200 words. Threads posts 80–85 words. DMs concise and unhurried.

If any check fails, revise before output. Log the violation type for pattern tracking.

---

## Rule Category 5: Margin Floor Enforcement

No output — whether product brief, pricing recommendation, strategy document, or promotional concept — may produce gross margins below these tier minimums:

| Tier | Minimum Gross Margin | Margin Multiplier Range |
|---|---|---|
| Elemental | 35% | 1.8–2.0x |
| Composed | 42% | 2.0–2.3x |
| Complex | 48% | 2.3–2.6x |
| Commissioned | 52% | 2.4–2.6x + consultation |

### Hard Stops

- If a proposed product cannot achieve its tier's minimum margin, escalate immediately. Options: reduce material cost (source alternative), increase price (if market supports), or reclassify to lower tier.
- Membership "courtesies" (10–15%) must not push the net margin below tier floor. Calculate post-courtesy margin before approving.
- No promotional discounting. Period. Even during stress periods. The pricing is already transparent and fair.
- B2B/wholesale pricing uses separate margin structure but never below 25% gross margin.

---

## Rule Category 6: Ambiguity Protocol (AskUserQuestion)

When input is ambiguous, incomplete, or could be interpreted multiple ways:

1. **Do not guess.** Ask for clarification before producing output.
2. **Frame the ambiguity.** State what is unclear and why it matters: "This could mean X or Y. X produces [this type of output], Y produces [that type]. Which direction?"
3. **Offer bounded options.** Give 2–3 specific interpretations to choose from, not open-ended "what did you mean?"
4. **Default conservatively.** If forced to proceed without clarification, choose the interpretation that preserves brand integrity over the one that optimizes for speed.
5. **Log the ambiguity.** Note in `/memory/context.md` under "Open Questions" so it can be resolved in next session.

---

## Rule Category 7: Customer DM Sequences

### New Inquiry Sequence
- Message 1 (within 6 hours): Warm curiosity — "What drew you to this piece?"
- Message 2 (after reply): Connect to material philosophy — share one formation or technique detail
- Message 3 (transition): Invite to Keeper community or offer material biography document
- If price requested: Transparent breakdown — "₫[X] total: ₫[Y] materials, ₫[Z] labor ([N] hours), ₫[W] overhead"

### Post-Purchase Onboarding
- Day 3: "Living with [Object]" — first month expectations, care ritual introduction
- Day 14: "Where has this piece found its place?" — invite to share environment photo
- Day 45: Material education deep-dive — formation narrative expansion
- Day 90: Aging/patina invitation — "Share how it's changing" — UGC trigger

### Re-Engagement (Dormant Keepers)
- Month 6: Gentle reconnection — new material story or technique documentation, not product push
- Month 12: Annual "Material Intelligence" update — what's new in the workshop
- Lifetime service reminder: "Any Luc San piece remains our responsibility indefinitely — refinishing, repair, replacement at cost"

---

## Rule Category 8: Content Production Rules

### Instagram
- 7.5 posts/week: 40% Gateway, 60% Inner Circle (see `voice-and-style.md` Section V)
- 8–12 Stories daily: studio life, material arrivals, light studies
- Every carousel: 7–9 slides minimum for educational content
- Reels: natural sound only, no trending audio, slow motion preferred
- Grid aesthetic: maintain negative space consistency, tonal continuity

### Threads
- 5 posts minimum per week
- 80–85 words per post
- Vietnamese language, conversational tone
- Philosophical micro-essays blending daily life and material observation

### Cross-Platform
- Pinterest: repurpose macro photography and process imagery weekly
- YouTube Shorts: monthly process revelation (60 hours in 60 seconds format)
- Newsletter: monthly "Material Seminary" — material biographies, technique documentation
- Email: never discount codes, always education-first

---

## Rule Category 9: Quality Assurance Protocol

### Craftsmanship Standards
- Joinery tolerance: 0.5 degree maximum, measured with digital instruments
- Joinery fit: measured mallet persuasion — snug enough to need gentle encouragement, never forced
- Surface finish: progressive sanding to 320 grit, hand-rubbed oil (3–5 coats)
- Consistency: hand-evident variation acceptable within 5% dimensional tolerance

### Inspection Stages
1. **Material Receipt:** Specification conformance, visual assessment, documentation verification
2. **Work in Progress:** Dimensional accuracy at milestones, joinery fit pre-assembly, finish quality during stages
3. **Final Inspection:** Complete verification — surface quality, functional testing, finish consistency, documentation completeness
4. **Pre-Shipment:** Packaging integrity, documentation inclusion (material biography, care protocol), photo archiving

### Testing Requirements
- Structural: 72-hour stress testing
- Finish: 30-day accelerated aging
- User: 14-day living-with-object trial
- Maintenance: care protocol validation

---

## Rule Category 10: Memory & Documentation

### Session End Requirements
Every session must conclude with:

1. **Update `/memory/context.md`:**
   - Active priorities status (changed? progressed?)
   - Decisions made this session
   - Open questions for next session
   - Completed tasks with file paths

2. **Append to `/memory/organization-log.md`:**
   - Timestamp + action + file path for every file created, moved, or renamed
   - Format: `[YYYY-MM-DD HH:MM] [ACTION] [filepath] — [brief description]`

3. **Output verification:**
   - All deliverables saved to correct `/outputs/` subdirectory
   - File names follow naming convention (Rule 3)
   - Brand voice pre-check passed (Rule 4)

### Git Commit Convention (When Applicable)
- Message format: `[type]: [brief description]`
- Types: `copy`, `strategy`, `product`, `ops`, `ref`, `memory`, `system`
- Example: `copy: add instagram caption series — baroque pearl collection`
- Always include files changed in commit body
