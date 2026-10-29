# masonrhodes-dev

Static portfolio site built with [Astro](https://astro.build), deployed to GitHub Pages.

## Develop

    npm install
    npm run dev       # http://localhost:4321
    npm run build     # output in dist/

Content lives in `src/data/*.json`. See `DESIGN.md`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`. In the repo settings set Pages source to "GitHub Actions" and define a repository variable `SITE_URL` (for example `https://example.com`). Replace `public/CNAME` with your own domain, or delete it to use the default `github.io` address (and set `SITE_BASE` if served from a subpath).

## License

MIT
