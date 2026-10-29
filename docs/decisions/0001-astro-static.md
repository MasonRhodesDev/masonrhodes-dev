# 0001: Astro static output

Status: Accepted

## Context
The previous site was a Vue 2 and Vuetify single page that shipped a framework to render a handful of links.

## Decision
Build with Astro and ship static HTML and CSS. The only client script is the theme toggle.

## Why
A portfolio is content. Astro keeps content in data files, adds no runtime, and scales to more pages without new machinery.

## Consequences
Interactive features need an explicit island. Anything dynamic belongs elsewhere.
