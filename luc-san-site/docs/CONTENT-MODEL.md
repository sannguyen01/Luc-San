# Lục San — Content Model

## Language Rules

### Primary Nouns
- **Objects** (never "products" or "items")
- **Materials** (never "fabrics" or "ingredients")
- **Encounters** (never "events" or "workshops")
- **Presence** (never "style" or "look")
- **Keepers** (never "customers" or "buyers")

### Forbidden Language
See `voice-and-style.md` Section IV for the complete list.
Key exclusions: no "collection," "runway," "editorial," "lookbook,"
"curated," "bespoke" (use "commissioned"), or any urgency language.

## Content Architecture

### Caption Logic (applies to all site copy)
1. Lead with material fact
2. Then transformation (human intervention)
3. Then future relationship (temporal evolution)

### File Mapping

| Content File | Component | Page |
|---|---|---|
| `site-copy/home.md` | `HomeHero`, pathway descriptions | `/` |
| `site-copy/objects.md` | Intro band text | `/objects` |
| `site-copy/materials.md` | Intro text, process descriptions | `/materials` |
| `site-copy/spaces.md` | Space overview, encounter framing | `/spaces` |
| `site-copy/contact.md` | Form intro paragraph | `/contact` |
| `objects.json` | `TierBands`, `ObjectStrip` tiles | `/objects` |
| `materials.json` | `MaterialStorySlice` cards | `/materials` |

### Object Schema

```json
{
  "id": "string — kebab-case identifier",
  "tier": "Elemental | Composed | Complex | Commissioned",
  "title": "string — object name",
  "materials": ["array of material names"],
  "hours": "number — artisan hours",
  "copy": "string — one sentence: formation + hours",
  "image": "string — path to image"
}
```

### Material Schema

```json
{
  "id": "string — kebab-case",
  "name": "string — material name",
  "formation": "string — how long and how it formed",
  "epoch": "string — geological era",
  "property": "string — key measurable quality",
  "temporal": "string — how it changes with a keeper",
  "image": "string — path to image"
}
```
