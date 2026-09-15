# GPC Team Training

The internal GPC training site: a Next.js app on GPC's real Design Starter tokens,
one tab per track. **Overview** (org-wide, role-agnostic onboarding), **The Grant
Way** (the workflow-consultant craft, sourced from real call transcripts), and
**Workflow Consulting** (the operational SOPs for running an engagement). More
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
│   ├── module-markdown.ts             <- reads a Grant Way module from vendor/, applies citations
│   └── wc-markdown.ts                 <- reads a Workflow Consulting module (no citation pass)
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
copy above here**, the same discipline Workflow Consulting already uses for
its ClickUp-sourced content, below.

Workflow Consulting is different: its source of truth is ClickUp (How We Work →
Role Handbooks → Process Consultant: Workflow/Workshop), which this site can't
read live. `content/workflow-consulting/*.md` is a rewritten-once copy. A
procedure change happens in ClickUp first, then gets manually re-ported here,
the same way GitHub Basics was rewritten from GitHub Skills' generic exercise
rather than linked live.

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
