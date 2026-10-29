# 0004: Workshop identity, studio privacy, no public resume

Status: Accepted

## Context
The first version was a plain list of projects with no voice. The site also needs to show a day job, a studio, and a shop without exposing anything unreleased or employer specific.

## Decision
Use a workshop look (concrete, safety orange, stencil display type) and seven scenes on one page. Show the Rootshed studio as a statement and status line only, with no app names, screenshots or links until each app is public. Generalize employer work to outcomes in plain terms. Publish no resume file; contact is by email.

## Why
Personality is the point of a portfolio. Unreleased products and internal project names are not mine to publish early, and a downloadable resume invites scraping.

## Consequences
Launching a Rootshed app means adding it to `src/data/studio.json`. The contact address depends on forwarding set up at the domain registrar, which lives outside this repo.

## Addendum: reachability gate
A project with `requireReachable: true` in `src/data/projects.json` is rendered only when its repository URL answers an unauthenticated request at build time. A private repo returns an error, so it stays hidden. The deploy workflow also runs daily, so a repo that goes public appears without a push. Experience lives at an unlisted, `noindex` page with no links to it.
