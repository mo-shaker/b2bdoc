# Arabic manual — work in progress

**34 of 91 pages.** Held here, outside the Docusaurus content path, until the
translation is complete.

## Why it is not in `i18n/ar/` yet

Docusaurus resolves a relative `.mdx` link against the **source file's own**
directory. In the Arabic build a translated page therefore looks for its link
targets inside `i18n/ar/…`, not in `docs/…`.

So a `.mdx` link only resolves when **source and target share a translation
state**. A half-translated chapter tree breaks in both directions:

| Direction | What breaks |
| --- | --- |
| Translated page → untranslated page | The target does not exist under `i18n/ar/` |
| Untranslated page → translated page | The English source is shadowed by the translation |

With 34 of 91 pages in place this produced **75 broken links** and failed the
`ar` build, which is what `npm run build` runs in CI on every push to `main`.

## The rule for anyone adding a page

Either translate the whole `docs/user-manual/` tree, or none of it. A new English
page must arrive with its Arabic counterpart in the same change.

**Cross-chapter links out of `user-manual/` are the exception** — those go to the
Quick Start, which *is* fully translated, so they are written as URL paths without
the `.mdx` extension (`../../quick-start/overview`). That form resolves correctly
in both locales regardless of translation state, and is the pattern to copy.

## Moving it back

When all 91 pages exist here:

```bash
git mv planning/arabic-in-progress/user-manual \
       i18n/ar/docusaurus-plugin-content-docs/current/user-manual
npm run clear && npm run build
```

Both locales must pass before merging.

## What is already done

| Chapter | Pages |
| --- | --- |
| 00 · About This Manual | 5 / 5 |
| 01 · Getting Started | 4 / 4 |
| 02 · Roles and Responsibilities | 10 / 10 |
| 03 · SCOP Core Concepts | 3 / 3 |
| 04 · Demand Management | 6 / 6 |
| 05 · Inventory Ownership | 2 / 2 |
| 06 · Shipment Management | 3 / 3 |
| 07 · Warehouse Readiness | 1 / 1 |
| 08 – 15 | **0 / 57** |

The sidebar category translations for all sixteen chapters are already in
`i18n/ar/docusaurus-plugin-content-docs/current.json` and are harmless while the
pages are held here.
