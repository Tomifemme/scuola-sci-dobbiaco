# Project architecture
- Keep per-page multilingual search metadata in the shared `pageHead` helper and attach it through each content route's `head()`; this ensures server-rendered language-specific metadata without duplicate tags.
- Keep translated homepage copy in the existing translation dictionary; this preserves consistent Italian, German and English rendering.
- Keep alpine and cross-country private/group prices in the shared lesson-pricing module; both pages must use the same row builders to prevent price drift.
- Cross-country lessons use one shared translated page with Italian, German and English leaf routes, following the existing localized route structure.