# GPC Team Training

The internal GPC training site: a Next.js app on GPC's real Design Starter tokens,
one tab per track — **Overview** (org-wide, role-agnostic onboarding), **The Grant
Way** (the workflow-consultant craft, sourced from real call transcripts), and
**Workflow Consulting** (the operational SOPs for running an engagement). More
tracks land the same way, one role at a time — see "Adding a new track" below.

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
│   ├── grant-way/                     <- The Grant Way: index + one route per playbook module
│   └── workflow-consulting/           <- Workflow Consulting: index + six modules
├── content/workflow-consulting/*.md   <- Workflow Consulting's module source (rewritten from ClickUp)
├── components/
│   ├── top-nav.tsx                    <- the persistent tab bar + search box, on every page
│   ├── search-box.tsx                 <- the top-nav "ask a question" input, live dropdown of matches
│   └── module-shell.tsx               <- shared page chrome + the Sources footer
├── app/search/page.tsx                <- full search results page (/search?q=...)
├── lib/
│   ├── search-index.ts                <- hand-tagged index of every module, across all tracks
│   ├── citations.ts                   <- registry mapping Grant Way's [tag] citations to transcripts
│   ├── annotate-citations.ts          <- turns [tag] into a superscript link, leaves other brackets alone
│   ├── module-markdown.ts             <- reads a Grant Way module from the submodule, applies citations
│   └── wc-markdown.ts                 <- reads a Workflow Consulting module (no citation pass)
└── vendor/grant-way-playbook/         <- git submodule: the living source of Grant Way's playbook + transcripts
```

## Why a submodule

Grant Way's playbook (`playbook/*.md`) and its transcripts live in
`grant-way-playbook`, updated by that repo's own pipeline every time a new call
gets transcribed. This site never re-authors that content — it reads it, live,
from `vendor/grant-way-playbook` (a git submodule), and only changes how it's
rendered. Update the playbook in that repo; run `git submodule update --remote
vendor/grant-way-playbook` here to pick it up.

Workflow Consulting is different: its source of truth is ClickUp (How We Work →
Role Handbooks → Process Consultant: Workflow/Workshop), which this site can't
read live. `content/workflow-consulting/*.md` is a rewritten-once copy — a
procedure change happens in ClickUp first, then gets manually re-ported here,
the same way GitHub Basics was rewritten from GitHub Skills' generic exercise
rather than linked live.

## Citations are hidden, not deleted

Grant Way's playbook cites every claim inline in brackets — `[kevin]`, `[sales]`,
`[inferred]` — because that sourcing discipline is what keeps it trustworthy (see
`grant-way-playbook/README.md`). Read as raw markdown, that discipline is
unreadable: some paragraphs carry a dozen tags. `lib/annotate-citations.ts` keeps
every citation but gets it out of the reading flow: each tag becomes a small
superscript number linking to a numbered Sources list at the bottom of the page,
with a real link to the transcript. Nothing is deleted — the source markdown in
`vendor/grant-way-playbook` still carries every tag; this is a display-layer
transform only.

## Search

A tag-based search, not a generative Q&A bot — no AI call, no backend, just a
hand-authored tag list per module (`lib/search-index.ts`) matched against
whatever someone types. It lives in the top nav on every page (`search-box.tsx`,
a live dropdown of the top 6 matches) and at `/search` (the full ranked list).
The point is landing on the right module without knowing which tab it's under.

**Adding a new module to any track means adding its search-index entry in the
same commit** — a module with no tags is invisible to search even though it's
one click away in its own tab.

## Adding a new track

1. Add a tab to `components/top-nav.tsx`.
2. Add `content/<track>/*.md` (or a submodule, if the content has its own
   living-source repo the way Grant Way does) and a reader in `lib/` if the
   existing ones don't fit.
3. Add `app/<track>/page.tsx` (index, cards) and one route per module, following
   the Workflow Consulting pattern.
4. Add a `SearchEntry` per module to `lib/search-index.ts`.
5. Log it in `CHANGELOG.md`.

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
