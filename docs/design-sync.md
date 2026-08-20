# Design system sync

`ajch_spark` shares a look-and-feel with `ajch_platform` (the Aarya — My AI
Learning Hub main app) but is a fully independent repo/deploy — there is no
shared npm package. `src/components/ui/*` and the base layer of
`src/index.css` were **copied**, not linked, from `ajch_platform`.

## Snapshot origin

- Source repo: `ajeetchouksey/ajch_platform`
- Source commit: `c3a02d7d9d497978388715101f59316d45f48e47`
- Date forked: 2026-08-20
- Files copied: `src/components/ui/{Avatar,Badge,Button,GlassCard,PulsingDot,SectionHeader,StatGrid,Timeline,VersionTag,Breadcrumb,index}.tsx`, plus the `@layer base` block, `.glass-*`, `.card-accent-top`, `.heading-gradient`, `.hide-scrollbar` rules from `src/index.css`.
- Intentionally dropped: study-notes-specific classes (`.note-scribble`, `.note-important`, `.note-trap`, `.prose` code-block overrides) — not relevant to Spark's content.

## Why copy instead of a shared package

`ajch_platform` has no existing token-extraction layer (colors are ad-hoc hex
literals in TSX, not CSS custom properties) — building a shared package would
mean doing that refactor first, standing up a second CI dependency graph, for
a two-repo portfolio. Not worth it at this scale. `german_skill` (another
sibling app under the same account) already lives with the same tradeoff.

## Sync cadence

No automation. Re-diff `src/components/ui/` and the base layer of
`src/index.css` against `ajch_platform` quarterly, or whenever
`ajch_platform`'s design language changes materially (new accent colors, new
primitive components). Manual — same reviewer owns both repos.
