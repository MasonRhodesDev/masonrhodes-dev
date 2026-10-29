# masonrhodes-dev design

A static portfolio site. It has no runtime, no backend, and no client framework. Every page is HTML and CSS built ahead of time, with one small script for the theme toggle.

## Requirements

- Loads fast and works with JavaScript disabled.
- Content lives in data files, so changing a project never means editing markup.
- Light and dark themes follow the system and can be overridden.
- Accessible by default: skip link, visible focus, reduced motion, semantic landmarks.
- Cloneable by a stranger: nothing in the repo is specific to one machine or host.

## Architecture

| Path | Role |
|------|------|
| `src/data/site.json` | Name, role, tagline, links. The identity boundary. |
| `src/data/projects.json` | Project list. `featured` projects appear on the home page. |
| `src/styles/tokens.css` | Layered tokens: `--ref-*` raw values, `--color-*` semantic roles, then spacing, radius, type. |
| `src/styles/base.css` | Reset, layout primitives, skip link, print rules. Uses semantic tokens only. |
| `src/components/` | Small units: header, theme toggle, project card, project list. |
| `src/layouts/Base.astro` | Document shell, metadata, no-flash theme bootstrap. |
| `src/pages/` | Routes: home, projects, about, 404. |

## Token layers

Components never read `--ref-*` values. They read semantic roles such as `--color-surface` and `--color-accent`. Retheming means remapping roles in `tokens.css`, the same split used by `slint-kit`.

## Deployment

GitHub Pages through `.github/workflows/deploy.yml`. Site URL, base path, and custom domain are supplied by a repository variable and `public/CNAME`, never hardcoded in code.

## Decisions

See `docs/decisions/`.
