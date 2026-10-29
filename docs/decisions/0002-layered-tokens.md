# 0002: Layered design tokens, no CSS framework

Status: Accepted

## Context
Other projects (`slint-kit`) separate raw palette values from semantic roles so a theme change touches one file.

## Decision
Plain CSS custom properties in two layers: `--ref-*` raw values and `--color-*` roles. Components use roles only. No utility framework.

## Why
The site is small enough that a framework costs more than it saves, and tokens keep dark mode and future palettes cheap.

## Consequences
Dark mode is defined twice (media query and explicit override) so the toggle can win over the system setting.
