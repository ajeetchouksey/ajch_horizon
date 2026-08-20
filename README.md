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

## Two audiences, two tracks

- **Kids (under 13)** — net-new content, with a dedicated child-safety
  content review gate before anything publishes.
- **Non-technical adults / teens 13+** — migrated from `ajch_platform`'s
  former Discovery/Pathways tracks (AI Safety & Responsibility, Applied AI
  for Practitioners, AI Ethics & Bias, AI Productivity).

## Status

Phase 1 (app shell) — router/layout live with placeholder Home/Kids/Grown-ups
pages, proving the deploy pipeline end to end. See the "Spark" plan for the
full phased rollout (app shell → content migration → kids track + review
gate).

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
