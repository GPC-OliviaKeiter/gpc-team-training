# GPC Team Training

The internal GPC training site: a Next.js app on GPC's real Design Starter tokens,
two top-level tabs. **Overview** (org-wide, role-agnostic onboarding) and
**Roles** (a card grid, one card per role at GPC, each opening that role's
track: its scorecard or scorecards, its operational SOPs, and, where Grant's
own method for that role has been documented from real call transcripts, its
Grant Way modules). Grant Way isn't a separate tab: Grant personally does
every role at GPC, so its content is scoped to whichever role it's sourced
from, Process Consulting today, and lives inside that role's track. More
tracks land the same way, one role at a time: see "Adding a new track" below.

This is a living site. It grows one module at a time, as new people need to learn
new things, and as more roles bring their own training in.

## What's in here

```
gpc-team-training/
├── README.md                          <- you are here
├── CHANGELOG.md                       <- what changed, when
├── app/
│   ├── page.tsx                       <- Overview tab index
│   ├── overview/github-basics/        <- Overview's one module so far
│   ├── grant-way/                     <- The Grant Way's content: one route per playbook module.
│   │                                      No index page here anymore; /grant-way redirects to
│   │                                      roles/process-consulting/the-grant-way below.
│   ├── roles/page.tsx                 <- Roles tab index: one RoleCard per track
│   ├── roles/process-consulting/      <- track index + scorecards + seven modules
│   │   ├── scorecard-workflow/        <- Scorecard: Workflow PC
│   │   ├── scorecard-workshop/        <- Scorecard: Workshop PC
│   │   ├── the-grant-way/             <- Grant Way's doorway, scoped to this role (see below)
│   │   └── communication-guidelines/  <- how Grant writes to clients, sourced from real email
│   └── roles/<sales|engineering|project-management|operations|marketing>/
│                                       <- stub track index pages, content lands track by track
├── content/
│   ├── roles/<track>/track.json       <- title, eyebrow, lede, clickupDocUrl, seats[], modules[]
│   ├── roles/<track>/scorecard-<seat>.json  <- one scorecard per seat, schema in lib/scorecard.ts
│   └── roles/<track>/*.md             <- module source (rewritten from ClickUp)
├── components/
│   ├── top-nav.tsx                    <- the persistent tab bar + search box, on every page
│   ├── search-box.tsx                 <- the top-nav "ask a question" input, live dropdown of matches
│   ├── module-shell.tsx               <- shared page chrome + the Sources footer
│   ├── role-card.tsx                  <- one track card on /roles (live or placeholder)
│   └── scorecard.tsx                  <- renders a seat's scorecard JSON
├── app/search/page.tsx                <- full search results page (/search?q=...)
├── lib/
│   ├── search-index.ts                <- hand-tagged index of every module, across all tracks
│   ├── grant-way-modules.ts           <- the Grant Way module list, read by its one doorway page
│   ├── citations.ts                   <- registry mapping Grant Way's [tag] citations to transcripts
│   ├── annotate-citations.ts          <- turns [tag] into a superscript link, leaves other brackets alone
│   ├── module-markdown.ts             <- reads a Grant Way module from vendor/, applies citations
│   ├── role-markdown.ts               <- reads a role-track module doc, by track + filename
│   ├── roles.ts                       <- reads track.json: seats, modules, the six track keys
│   └── scorecard.ts                   <- reads and validates a seat's scorecard JSON
├── scripts/
│   ├── check-content.mjs              <- npm run check: search-index coverage, dashes, banned
│   │                                      words, the visual rule, scorecard required fields
│   └── banned-words.json              <- the word list check-content.mjs reads
└── vendor/grant-way-playbook/playbook/*.md  <- vendored copy of Grant Way's playbook (see below)
```

## Why a vendored copy, not a live submodule

Grant Way's playbook (`playbook/*.md`) and its transcripts live in
`grant-way-playbook`, updated by that repo's own pipeline every time a new call
gets transcribed. This site doesn't re-author that content: `vendor/grant-way-playbook/playbook/`
is a straight copy of it, refreshed by re-running:

```bash
cp <path-to-grant-way-playbook>/playbook/*.md vendor/grant-way-playbook/playbook/
```

This was meant to be a live git submodule instead, and the code (`lib/module-markdown.ts`)
still reads from that same path either way. It's a plain copy today because
**Vercel's GitHub App doesn't have access to the private `grant-way-playbook`
repo**, so it can't fetch the submodule during a build. The first deploy
failed on exactly this (`ENOENT` on every playbook file). Re-enabling the live
submodule is a one-time fix, not a code change: in GitHub, under the
GPC-OliviaKeiter account's Vercel GitHub App installation settings, add
`grant-way-playbook` to the app's repository access list. Once that's done,
`git submodule add https://github.com/GPC-OliviaKeiter/grant-way-playbook vendor/grant-way-playbook`
back in place of the plain copy restores live sync.

Until then: **update the playbook in `grant-way-playbook` first, then re-run the
copy above here**, the same discipline every Roles track already uses for
its ClickUp-sourced content, below.

Each Roles track is different: its source of truth is ClickUp (How We Work →
Role Handbooks → that seat's handbook), which this site can't read live.
`content/roles/<track>/*.md` is a rewritten-once copy. A procedure change
happens in ClickUp first, then gets manually re-ported here, the same way
GitHub Basics was rewritten from GitHub Skills' generic exercise rather than
linked live. A scorecard is different again: `content/roles/<track>/scorecard-<seat>.json`
is copied field for field from that seat's ClickUp scorecard page, so its
KPI figures can be diffed against ClickUp directly.

## Grant Way lives inside a role

The Grant Way isn't its own top-level tab. Grant personally does every role
at GPC at some point, so each role track gets its own doorway into the part
of the playbook that shows how Grant does that specific role.
`/roles/process-consulting/the-grant-way` is the first one, and today it's
the whole playbook, since every module so far comes from Grant running the
process-consultant role. `lib/grant-way-modules.ts` holds the module list;
the doorway page renders it. The module pages themselves still live at their
own `/grant-way/<module>` URLs (unmoved, so nothing that links to one
breaks), but their page chrome reads as being under Roles > Process
Consulting, not a fourth tab: `track="roles"` on `ModuleShell`, and a
breadcrumb that starts at Process Consulting. `/grant-way` (the bare index)
permanently redirects to the doorway. When Grant's method for another role
(engineering, ops, whatever's next) gets documented from that role's own
call transcripts, that role's track gets the same kind of doorway, scoped
to its own modules, not a subfolder of this one.

## Citations are hidden, not deleted

Grant Way's playbook cites every claim inline in brackets (`[kevin]`, `[sales]`,
`[inferred]`) because that sourcing discipline is what keeps it trustworthy (see
`grant-way-playbook/README.md`). Read as raw markdown, that discipline is
unreadable: some paragraphs carry a dozen tags. `lib/annotate-citations.ts` keeps
every citation but gets it out of the reading flow: each tag becomes a small
superscript number linking to a numbered Sources list at the bottom of the page,
with a real link to the transcript. Nothing is deleted. The vendored markdown
in `vendor/grant-way-playbook` still carries every tag; this is a display-layer
transform only.

## Search

A tag-based search, not a generative Q&A bot. No AI call, no backend, just a
hand-authored tag list per module (`lib/search-index.ts`) matched against
whatever someone types. It lives in the top nav on every page (`search-box.tsx`,
a live dropdown of the top 6 matches) and at `/search` (the full ranked list).
The point is landing on the right module without knowing which tab it's under.

**Adding a new module to any track means adding its search-index entry in the
same commit.** A module with no tags is invisible to search even though it's
one click away in its own tab.

## Adding a new track

All six Roles tracks already exist as stubs (`content/roles/<track>/track.json`).
Landing real content in one means:

1. Add `content/roles/<track>/scorecard-<seat>.json` per seat, copied field for
   field from that seat's ClickUp scorecard page (schema in `lib/scorecard.ts`).
   Fill in that seat's `scorecardHref` in `track.json`.
2. Add `content/roles/<track>/<nn>-<module>.md` per module and fill in
   `track.json`'s `modules[]` to match. `app/roles/<track>/page.tsx` reads
   `track.json` and renders scorecards and modules automatically: no page
   changes needed for content that already fits the pattern.
3. Add one `app/roles/<track>/<module>/page.tsx` per module, following the
   Process Consulting pattern (`ModuleShell` + `readRoleMarkdown`).
4. Add a `SearchEntry` per module and per scorecard to `lib/search-index.ts`.
5. Run `npm run check`. It fails on a missing search-index entry, an em or en
   dash, a banned word, a module with no table/Figure/svg, or a scorecard
   missing a required field.
6. Log it in `CHANGELOG.md`.

A track with no content at all yet (a fresh seventh track, say) additionally
needs a tab entry only if it isn't a Roles seat: `components/top-nav.tsx`
today has one Roles tab covering all six, not one tab per track.

## Ground rules for this repo

- Internal use only. Nothing in here goes public without Grant's approval.
- No client names, client data, or client repos in screenshots or examples
  outside of what Grant Way's own sourcing discipline already permits.
- Write for someone with zero experience in the thing being taught. Assume
  nothing.
- This repo documents how GPC actually works, not the generic version of a
  tool or role. Every module should end with what happens at GPC specifically.
- Review the rendered page yourself (`npm run dev`) before committing. This
  site trains real people, and a wrong click-path costs someone real time.
