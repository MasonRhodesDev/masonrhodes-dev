# 0003: Host on GitHub Pages

Status: Accepted

## Context
The goal is to ship quickly without running infrastructure.

## Decision
Deploy the built `dist/` to GitHub Pages from a workflow on every push to `main`.

## Why
Free, no servers to maintain, and the custom domain is a single `CNAME` file.

## Consequences
No server side redirects or headers. Revisit if the site needs them.
