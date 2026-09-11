# GPC Team Training

An internal GPC training resource. This repo holds the onboarding material for the
tools GPC runs on day to day, starting with GitHub and git, so that new hires,
contractors, and partners can get up to speed without sitting through a live
walkthrough every time.

This is a living document. It grows one tool at a time, as new people need to learn
new things.

## What's in here

```
gpc-team-training/
├── README.md                      <- you are here
├── CHANGELOG.md                   <- what changed, when
├── training/
│   └── 01-github-basics.md        <- repos, branches, commits, pull requests, merge, how GPC uses it
└── site/
    ├── index.html                 <- the rendered training site, GPC brand
    └── img/                       <- screenshots referenced by the site
```

Future modules get added as new tools or workflows need onboarding material: Claude
Code, ClickUp conventions, HubSpot hygiene, the deck and portal generators in
gpc-skills, and whatever else a new hire needs before they can work unsupervised.

## How to add to this repo

1. Draft new training material in `training/<NN>-<topic>.md`, numbered in the order
   someone should read them.
2. Add a matching tab and section to `site/index.html`, reusing the existing GPC
   visual system (Fraunces / Public Sans / IBM Plex Mono, the token palette, the
   `.loop`, `.mod`, and `.tagrow` components). Don't invent a new look for a new
   module. This site is one series with `grant-way-playbook`.
3. Leave `<!-- SCREENSHOT: description -->` placeholders where a screenshot belongs
   if you don't have one yet. Don't block a module on missing images.
4. Capture screenshots from a real GPC repo or sandbox, never a client repo, and
   drop them in `site/img/`.
5. Log the change in `CHANGELOG.md`.
6. Review the rendered page yourself before committing. This repo trains real
   people, and a wrong click-path costs someone real time.

## Ground rules for this repo

- Internal use only. Nothing in here goes public without Grant's approval.
- No client names, client data, or client repos in screenshots or examples. Use a
  sandbox repo or a placeholder.
- Write for someone with zero experience in the tool being taught. Assume nothing.
- Screenshots stay current. If a tool's UI changes and a screenshot goes stale,
  replace it. Don't leave a mismatch between the text and the picture.
- This repo documents how GPC actually works, not the generic version of a tool.
  Every click-path should end with what happens at GPC specifically.
