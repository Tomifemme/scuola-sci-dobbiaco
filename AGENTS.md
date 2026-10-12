# Project architecture
- Keep per-page multilingual search metadata in the shared `pageHead` helper and attach it through each content route's `head()`; this ensures server-rendered language-specific metadata without duplicate tags.
- Keep translated homepage copy in the existing translation dictionary; this preserves consistent Italian, German and English rendering.