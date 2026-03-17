# Lục San — Routing & Navigation

## Route Map

| Route | Page Title | Intent |
|---|---|---|
| `/` | World (Home) | Cinematic entry point. Material consciousness introduction. Three pathways. |
| `/objects` | Objects | Presence library organized by tier complexity. Not a catalog. |
| `/materials` | Materials & Time | Material infrastructure. Formation narratives + three-stage process. |
| `/spaces` | Spaces & Encounters | Encounter architecture. Gallery sessions, silent suppers, making meditation. |
| `/contact` | Contact | Minimal form. Four inquiry types. No urgency. |

## Navigation Design

### Header
- Wordmark: "Lục San" (serif, tracked, uppercase)
- Links: World · Objects · Materials · Spaces
- Contact is reachable from Spaces page CTA and footer, not main nav
- 4 items maximum in primary navigation

### Footer
- Small text only
- Copyright + tagline
- No social icons, no sitemap, no newsletter signup

### Internal Linking
- Home → Objects, Materials, Spaces (pathway links)
- Spaces → Contact ("Request an encounter")
- No cross-linking between Objects and Materials (each stands alone)
- No breadcrumbs (site is flat, 2 levels max)

## Technical Implementation

- **Framework**: Next.js 16, App Router
- **Rendering**: Static (SSG) — content changes infrequently
- **Routing**: File-system based (`app/` directory)
- **Navigation state**: Client component (`usePathname` for active state)
- **Mobile**: Text-based "Menu/Close" toggle, no hamburger icon
