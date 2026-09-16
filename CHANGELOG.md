# Changelog

## 2026-09-16 (v0.8, component kit and Process Consulting copy cut)

**Five new components, each documented in its own file.** `figure.tsx` is
the screenshot placeholder: a dashed box on the secondary token, a caption,
a one-line capture spec, and the `id` `npm run check`'s open-Figure list
reports. `callout.tsx` is a one-line rule or warning with a red left border.
`step-rail.tsx` is a numbered procedure with an optional Figure per step,
built for a future .tsx page that composes structured step data directly
(not used by this pass). `checklist.tsx` is the phase-grouped, ClickUp-linked
list Overview's onboarding module needs in Step 3. `sop-index.tsx` is the
per-track SOP table: name (linking that page's own ClickUp URL), Seat, and
Covered in (linking the module, or "Index only").

**Figure and Callout can be written inline in a module's markdown.**
`lib/role-markdown.ts` recognizes a self-closing `<Figure id="..."
caption="..." spec="..." />` tag and a `<Callout>...</Callout>` block in the
raw markdown source and rewrites them, before the rest of the document goes
through `marked`, into the same markup `components/figure.tsx` and
`callout.tsx` render directly (the class strings live once, in each
component, and the markdown path reuses them, so the two can't drift).
Marked's raw-HTML-block passthrough carries that markup into the page
untouched. This is a plain HTML string builder, not a server-rendered React
tree: Next's App Router refuses to bundle `react-dom/server` into a Server
Component's module graph, which `role-markdown.ts` is.

**The six Process Consulting modules rewritten for word choice.** Every
fact, rule, owner, and number from the ClickUp source survives; sentences
that only restated one are gone. Prose lists that were really a RACI, a
cadence, or a checklist are now tables: the three-role onboarding ownership
split, the weekly call's six timed segments, the stakeholder interview's
seven-phase shape, the scope-creep resolution paths, the upsell
signal-to-service map, the three Close Out action items, and Grant's nine
email patterns. One Figure placeholder per module marks where a screenshot
replaces a paragraph. Standalone rule sentences ("You don't mark your own,"
"Never blame the client's data before investigating," "When in doubt, the
answer is a proposal, not a favor") are now Callouts instead of buried in
prose.

**`content/roles/process-consulting/sops.json`**, all 13 SOP pages from
ClickUp doc `8cjh2zy-180912`'s SOPs subtree, each row `{name, pageId, url,
seat, module}`. Every row is tagged `seat: "workflow"`: Workshop PC has a
scorecard and no SOPs in ClickUp yet, so there's no seat split to make.
`module` is the covering module's `num` from `track.json`, or `null` for
Vulnerability Management Execution, which has no module and is index only.
Rendered as the SOP index at the bottom of `/roles/process-consulting`, via
the new `lib/sops.ts` reader and `SopIndex`.

**`scripts/pc-visual-rule-allowlist.json` deleted.** Every Process
Consulting module now carries a real table, Figure, or both on its own;
`npm run check` passes with zero failures.

## 2026-09-16 (v0.7.1, plan decisions: SOP seat tags, direct ClickUp links)

Two decisions confirmed after v0.7 shipped, recorded in the plan doc
(`docs/plans/2026-09-16-handbooks-buildout.md`) for Step 2 and 4a-4d to build
against:

- **SOP index seat tags, not nested seat sub-tracks.** ClickUp's own Process
  Consultant Handbook doesn't split its SOPs into separate Workflow/Workshop
  folders, only the two scorecards are seat-specific. So `sops.json` rows
  carry a `seat` field (`workflow` / `workshop` / `both` for Process
  Consulting, `setter` / `closer` / `both` for Sales) instead of the site
  nesting Workflow PC and Workshop PC as separate sub-tracks, which would
  duplicate every page that covers both seats.
- **Direct ClickUp links throughout.** Every scorecard page now links
  straight to its own ClickUp page, not just the track's `clickupDocUrl`.
  `lib/scorecard.ts`'s `Scorecard` type and `SCORECARD_REQUIRED_FIELDS` gain
  a required `sourceUrl`; `components/scorecard.tsx` renders it as a "View
  this scorecard in ClickUp" link above the mission. Both live scorecards
  (`scorecard-workflow.json`, `scorecard-workshop.json`) have theirs.
  `sops.json` rows already carried a `url` per the plan; that part needed no
  change, just confirmation it satisfies the same ask at the SOP level.

## 2026-09-16 (v0.7, Roles shell: tabs, scorecard split, six track stubs)

**Tabs become Overview / The Grant Way / Roles.** `components/top-nav.tsx` and
`components/module-shell.tsx` take the new track keys. Roles is a card grid,
one card per seat: Workflow PC, Workshop PC, Engineer, Project Manager,
Operations Manager, Marketing Manager, Sales Setter, Sales Closer, plus a CEO
placeholder with no link (owner Grant Hushek, scorecard not written yet).
Each live card opens that seat's scorecard directly.

**Workflow Consulting moved to `/roles/process-consulting`.** Every old
`/workflow-consulting/*` URL gets a permanent redirect in `next.config.ts`.
`content/workflow-consulting` moved to `content/roles/process-consulting`,
and `lib/wc-markdown.ts` generalized into `lib/role-markdown.ts` (track +
filename), one reader for every role track's modules.

**Scorecards are their own pages now, split for real this time.** The old
`00-role-overview.md` merged the Workflow and Workshop scorecards into one
page, a known bug. It's deleted. `content/roles/process-consulting/scorecard-workflow.json`
and `scorecard-workshop.json` are copied field for field from ClickUp
(`8cjh2zy-110372`, `8cjh2zy-110352`), figures unchanged even where the source
page contradicts itself (the KPI table's duplicate-numbered Scope Leakage row,
the turnaround SLA mismatch, the Workshop readiness-window mismatch): Olivia
is resolving those in ClickUp, and Step 5 of the handbooks buildout plan
re-diffs. New routes: `/roles/process-consulting/scorecard-workflow` and
`/scorecard-workshop`. `components/scorecard.tsx` renders the shape every
ClickUp scorecard page shares: mission, a KPI tile row, the Outcomes table,
then Competencies and Values in Action as two columns. `lib/scorecard.ts`
validates the required fields. The Workshop scorecard page carries one line:
no Workshop SOPs exist in ClickUp yet, and the `workshop-portal` skill in
gpc-skills is the current delivery runbook.

**Six tracks, one content model.** `content/roles/<track>/track.json` (title,
eyebrow, lede, clickupDocUrl, seats, modules) now exists for all six Roles
tracks. Only Process Consulting has modules today; the other five (Sales,
Engineering, Project Management, Operations, Marketing) ship as stubs, a
scorecard card per seat and an empty-state line naming the ClickUp handbook.
`lib/roles.ts` reads `track.json`; `app/roles/<track>/page.tsx` renders from
it, so landing real content in a track (see README's "Adding a new track")
touches `track.json` and content files, not the page.

**`npm run check` is new** (`scripts/check-content.mjs`). Fails the build on
a module route with no `SEARCH_INDEX` entry, an em or en dash outside
`vendor/`, a banned word (`scripts/banned-words.json`, seeded from
gpc-skills' voice-and-slop.md plus the plan's additions), a module with no
table, Figure, or svg, or a scorecard JSON missing a required field. Prints
the open Figure list and a word count per module, informational only. The
six Process Consulting modules moved as-is (not yet cut for word choice) and
GitHub Basics (predates the Figure convention) warn instead of fail today,
via `scripts/pc-visual-rule-allowlist.json` and
`scripts/overview-visual-rule-allowlist.json`, each deleted by the step that
fixes its own content (Step 2, Step 3).

## 2026-09-15 (v0.6, Grant Way's second doorway + Communication Guidelines)

**Grant Way lives in two places now.** Factored the module list out to
`lib/grant-way-modules.ts` and added `/workflow-consulting/the-grant-way`, a
role-scoped landing page rendering the same 8 modules with Workflow
Consulting's tab staying active in nav. No content duplication: one array,
two doorways. Sets the pattern for future roles (Grant does all of them
eventually) to get their own version of this page once their Grant Way
content exists.

**New module: Communication Guidelines** (`workflow-consulting/06`). Two
layers: GPC's channel-by-purpose rules and the 1-3-1 problem-resolution
method, both rewritten from the ClickUp docs (`GPC Communication
Guidelines:`, `Client Communication Standards`), plus a new section on how
Grant actually writes to clients in email, reverse-engineered from 5 real
sent threads (Rush Enterprises, Coffee & Clothes, Cooper Erving & Savage)
pulled via Gmail the same way Grant Way pulls patterns from Fathom
transcripts. Noted one honest finding rather than smoothing it over: Grant's
real client email doesn't always follow GPC's own em-dash ban, which is a
rule for authored deliverables, not for how he actually writes. This is a
first pass, 5 threads across 3 clients: the module says so and names the
next step.

Both additions are indexed in `lib/search-index.ts` under Workflow
Consulting.

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
