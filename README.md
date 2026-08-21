# Spark

AI learning for kids and non-technical learners — a standalone app under the
[Aarya — My AI Learning Hub](https://aaryaai.dev) family, deployed at
`spark.aaryaai.dev`.

Spark is the repositioned successor to `ajch_platform`'s former
"Discovery" feature (formerly "Horizons"). It's a fully independent
Vite + React + TypeScript + Tailwind app — own repo, own Cloudflare Pages
deployment, own content — sharing only visual design primitives with
`ajch_platform` (see [docs/design-sync.md](docs/design-sync.md)), not code or
a build pipeline.

## One audience

Spark is 100% kids-focused (ages 8–16). The original dual-audience plan
split: non-technical/professional AI content moved to a separate sibling
site, **Compass** (`compass.aaryaai.dev`) — Spark cross-links to it for
that persona, but doesn't host that content itself.

## Status

Phase 2 (real homepage + first content hubs) — the master-plan homepage
(hero, Golden Rule ribbon, "What is Spark?", age-tier picker, pros/cons
teaser, safety promise, fun preview, final CTA) is live at `/`, plus real
first-pass content hubs at `/discover`, `/play`, `/stay-safe` (the 5 Golden
Safety Rules in full), and `/grown-ups`. `/build` is a light stub (nav
completeness only). `/legal/privacy` renders the drafted Privacy Policy —
the Impressum is not yet published (blocked on unresolved contact/
data-controller details, tracked in the source master plan's Open Items).

Still ahead: interactive games/tools, full age-tier curriculum content,
the badges/gamification system, the illustrated vector mascot, and the
Impressum + legal review.

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # tsc -b && vite build
```

## Deploy

Pushes to `main` deploy automatically via
`.github/workflows/deploy-cloudflare-pages.yml` to the `ajch-spark`
Cloudflare Pages project.
