# Agent notes

- Content changes go in `src/data/*.json`, not in markup.
- Components read semantic tokens (`--color-*`), never `--ref-*`.
- No environment specific values in code: site URL and base come from `SITE_URL` and `SITE_BASE`.
- Keep code comments to a minimum. Reasons belong in `docs/decisions/`.
- Run `npm run build` before committing.
