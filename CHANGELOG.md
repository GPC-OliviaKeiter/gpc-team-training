# Changelog

## 2026-09-11 (v0.1, initial build)

Created `gpc-team-training` as GPC's internal onboarding repo, structured to match
`grant-way-playbook` and built on the same visual system (Fraunces / Public Sans /
IBM Plex Mono, the GPC token palette, the sticky tab nav, `.loop`/`.mod`/`.tagrow`
components).

**Training**

- Added `training/01-github-basics.md`: repos and branches, commits, pull requests,
  merge, and how it works at GPC (Grant merges, what a review comment looks like,
  where repos live, the Drive/GitHub sync gap). Adapted from GitHub Skills'
  "Introduction to GitHub" exercise (github.com/skills/introduction-to-github),
  concepts only, not its GitHub Actions bot mechanics, since this is a static
  reference, not an interactive exercise. Practice artifact is a client README on
  GPC brand, not `PROFILE.md`; PR descriptions use GPC's Completed / Still needed
  format; the module closes with the SOW-creation angle. Written for Kaci Brown's
  onboarding first, but built for anyone joining GPC who needs GitHub training.

**Site**

- Built `site/index.html`: hero ("GitHub at GPC"), Overview tab plus one tab per
  section, a `.loop` diagram of the four-step arc (branch → commit → PR → merge),
  and inline SVG diagrams per section in the GPC palette (no external libraries).
  Two additions beyond what the playbook site has: a `@media print` stylesheet so
  the page exports cleanly to PDF, and left/right arrow-key navigation between tabs.
- Screenshots are placeholder `<!-- SCREENSHOT: description -->` comments at each
  numbered step (repo code tab, branch dropdown, new file screen, commit dialog, PR
  creation form, merge button), pending capture from a real GPC repo.

**Open items**

- Screenshots need capturing and swapping in for the placeholder comments.
- Only one training module exists so far. Next candidates: Claude Code basics,
  ClickUp conventions, HubSpot hygiene.
