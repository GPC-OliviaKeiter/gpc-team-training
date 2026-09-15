# Changelog

## 2026-09-15 (v0.5, no-AI pass: em dashes out, one Grant-specific claim generalized)

Two fixes to the site's own writing, called out by Olivia after reviewing v0.4.

- **Removed the "Grant merges" paragraph** from GitHub Basics (`app/overview/github-basics/page.tsx`).
  It described Olivia's own reporting relationship with Grant as if it were a
  universal GPC merge policy, which it isn't: who reviews and merges a PR
  depends on the repo. The two other places the module made the same
  Grant-specific claim (the pull-requests intro, the SOW-creation callout)
  are generalized the same way, so the module doesn't contradict itself.
- **Em dashes removed site-wide**, including from README.md and CHANGELOG.md:
  every `.tsx`, `.ts`, and `.md` file this repo owns. GPC's own voice
  standard (`gpc-skills/skills/gpc-brand-docs/references/voice-and-slop.md`)
  treats an em or en dash as a hard-fail AI tell, and this site had them
  throughout, in prose, code comments, and the citation Sources list labels.
  Fixed with a comma, colon, period, parenthetical, or middot depending on
  what the sentence needed, never a blanket find-and-replace. Numeric ranges
  (`45-60 min`) now use a plain hyphen instead of an en dash.
- Left `vendor/grant-way-playbook/playbook/*.md` untouched: that's a vendored
  copy of another repo's sourced, citation-tagged content, and editing it here
  would only drift from the source next re-copy. If Grant Way's own prose
  needs the same pass, it happens in `grant-way-playbook` first.

## 2026-09-15 (v0.4, swap the playbook submodule for a vendored copy)

The first Vercel deploy (new project, git-linked to `main`) failed:
`ENOENT` on every `vendor/grant-way-playbook/playbook/*.md` file. Cause:
Vercel's GitHub App for this account doesn't have access to the private
`grant-way-playbook` repo, so it silently failed to fetch the git submodule
("Warning: Failed to fetch one or more git submodules") before the build ran.

Replaced the submodule with a plain vendored copy of the same files at the
same path. `lib/module-markdown.ts` is unchanged. This is a one-time GitHub
permission grant away from being a live submodule again; see README's "Why a
vendored copy, not a live submodule" for the exact fix and the interim
re-copy step.

## 2026-09-15 (v0.3, site-wide search)

Added a keyword search across all three tracks, so finding an answer doesn't
require knowing which tab it lives under.

- `lib/search-index.ts`: a hand-tagged entry per module (title, blurb, tags),
  across Overview, The Grant Way, and Workflow Consulting: 15 modules today.
  Not auto-extracted from prose; tags are curated for the terms someone would
  actually type ("scope creep," "merge," "nps survey").
- `components/search-box.tsx`: a search input in the top nav, on every page,
  with a live dropdown of the top 6 matches as you type. Enter or "see all
  results" goes to `/search?q=...` for the full ranked list.
- No AI call and no backend. This is tag matching against a static index
  bundled at build time, not a generative Q&A bot. Fast, free, and exactly as
  good as the tag list, which is why adding a module means adding its tags in
  the same commit (see README's "Search" section).

## 2026-09-15 (v0.2, rebuilt as the Next.js hub: Grant Way + Workflow Consulting)

Replaced the static `site/index.html` (and the old `training/*.md`-only approach)
with a Next.js app on GPC's real Design Starter tokens, moved over from
`grant-way-playbook`'s `training-hub/` (which had grown the same problem this repo
was heading toward: two separate static sites hand-synced by re-porting files).
One site now, three tabs.

**Overview**

- `training/01-github-basics.md` ported into `app/overview/github-basics/page.tsx`
  as the site's canonical copy. The old markdown file and the old ported copy in
  `training-hub` are both retired. Content unchanged.

**The Grant Way**

- All 8 playbook modules now render live from a new `vendor/grant-way-playbook`
  git submodule instead of a copy, so the playbook's own transcript pipeline stays
  the single source of truth.
- New citation renderer (`lib/annotate-citations.ts`, `lib/citations.ts`): the
  playbook's 451 inline bracket citations (`[kevin]`, `[sales]`, `[inferred]`, …)
  now render as small superscript links to a numbered Sources list at the bottom
  of each module, with a real link to the transcript. Nothing was deleted from the
  source. This is a display-layer transform, verified against a whitelist so
  ordinary editorial brackets (`[ChatGPT]`, `[sic]`-style asides) are left alone.

**Workflow Consulting (new)**

- Six modules rewritten from GPC's ClickUp Process Consultant handbook (How We
  Work → Role Handbooks → Process Consultant: Workflow/Workshop): Role Overview,
  Onboarding a Partner, Running the Engagement, Managing the Relationship, Closing
  Out, and Tools: GitHub & Vercel. ClickUp stays the source of truth for the SOPs
  themselves. A procedure change happens there first, then gets re-ported here,
  the same relationship Grant Way has with its own source repo.

**Site-wide**

- New persistent top tab bar (`components/top-nav.tsx`): Overview / The Grant Way
  / Workflow Consulting, replacing the old card-selector landing page.
- `.tagrow`/`.ctag` chip components from the old static site are gone along with
  the site itself. No replacement needed once real citations do the sourcing job.

**Open items**

- Engineering and Ops tracks are out of scope for this pass, intentionally: see
  "Adding a new track" in `README.md`. The pattern is proven with two tracks; a
  future owner can stand up a third without touching the shell.
- No Vercel deployment yet for this rebuilt site. `training-hub`'s prior manual,
  non-git-linked Vercel deployment is superseded; this repo needs its own,
  git-linked, once merged.
- Real-call sourcing (the same transcript discipline Grant Way uses) hasn't been
  extended to Workflow Consulting yet. It's SOP-sourced only for now.

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
