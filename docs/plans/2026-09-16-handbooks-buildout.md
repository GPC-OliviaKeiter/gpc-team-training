# Handbooks buildout plan

Date: 2026-09-16. Owner: Olivia Keiter. Planner: Fable. Builders: Sonnet, one step per chat.

This plan turns the six ClickUp role handbooks into tracks on the GPC Team Training
site, splits every scorecard into its own clickable page, cuts copy to what earns its place,
and adds the onboarding checklist and Pete's core fundamentals to the Overview page.
ClickUp stays the source of truth for every SOP. The site is the readable map of it.

Decisions already made (do not reopen in a build chat):

| Decision | Choice |
|---|---|
| Track shape | One track per handbook (6 tracks). One scorecard page per seat (8 scorecards). |
| Navigation | Reopened and revised after Step 2 shipped: tabs are Overview / Roles, not Overview / The Grant Way / Roles. Roles is a card grid, one card per track (not one per seat: a multi-seat track like Process Consulting is one role, its own index page lists both scorecards). The Grant Way isn't a top-level tab; Grant personally does every role, so its content is scoped to whichever role sourced it. Process Consulting today, via `/roles/process-consulting/the-grant-way`. Other tracks get the same doorway once their own Grant Way content exists, sourced from their own past calls, not a shared cross-role tab. |
| SOP depth | 4 to 8 grouped modules per track plus one SOP index table per track linking every ClickUp page. |
| Fundamentals | A Core Fundamentals section on Overview. Cards are doorways into existing modules. Missing ones show a coming-soon state with Pete as owner. |
| CEO | Placeholder card on the Roles index. No route until Grant writes the scorecard. |
| Onboarding | Overview module 01, a phase-grouped checklist. Each row links to its ClickUp task. |
| Screenshots | Sonnet leaves labeled `Figure` placeholders. Olivia captures them in one batch (Step 6). |
| SOP index seat tags | Confirmed after Step 1 shipped. Each `sops.json` row carries a `seat` field (`workflow`, `workshop`, `both`, or `null` for track-wide) instead of nesting Workflow PC and Workshop PC as separate sub-tracks. Same pattern for Sales (`setter`, `closer`, `both`). ClickUp itself doesn't split the SOP folders by seat (see the Process Consultant Handbook doc), only the two scorecards are seat-specific, so the site mirrors that. |
| Direct ClickUp links throughout | Confirmed after Step 1 shipped. Every scorecard page and every `sops.json` row links straight to its own ClickUp page, not just the track's `clickupDocUrl`. `scorecard-<seat>.json` gets a required `sourceUrl` field. A module page doesn't need its own separate citation list the way Grant Way does: the click-through path is module → SOP index (bottom of the track page) → the ClickUp page. |

## 1. Source inventory

ClickUp workspace `9012022270`, space GPC `90128842815`. Page URLs follow
`https://app.clickup.com/9012022270/docs/<doc_id>/<page_id>`.

| Handbook | Doc ID | Scorecard page IDs | SOP count | Notes |
|---|---|---|---|---|
| Process Consultant | `8cjh2zy-180912` | Workshop `8cjh2zy-110352`, Workflow `8cjh2zy-110372` | 13 | Already ported once as Workflow Consulting. Scorecards merged into one page (the bug). |
| Sales | `8cjh2zy-180892` | Setter `8cjh2zy-112192`, Closer `8cjh2zy-112212` | 19 | Plus 9 Prospect FAQ pages and 2 resources. Landing page is empty. |
| Engineering | `8cjh2zy-180752` | `8cjh2zy-110092` | ~30 | Includes a 5-page ClickUp subtree and two tool modules that look Grantbot-era. |
| Project Management | `8cjh2zy-180852` | `8cjh2zy-110132` | 22 | Owns the cross-role partner lifecycle SOPs. |
| Operations Manager | `8cjh2zy-180872` | `8cjh2zy-110272` | 1 | SOPs and Templates pages are empty. |
| Marketing | `8cjh2zy-180932` | `8cjh2zy-110472` | 6 | Scorecard is a paid-media role. SOPs are LinkedIn only. Flag the gap on the page. |
| CEO | none | none | 0 | Folder `901213163276` exists with an empty list. |
| GPC Wiki | `8cjh2zy-176272` | n/a | n/a | Company-wide content. Role Handbooks table at `8cjh2zy-110172`. |
| General Onboarding | list `901220437555` | n/a | 47 tasks | About 20 are ClickUp University courses. |

Every scorecard page has the same five blocks in the same order: Mission, Outcomes table
(What / How Measured / By When), Competencies, Cultural Fit, KPI table (KPI / Calculation /
Target). One component renders all eight.

### Source fixes to make in ClickUp before porting (Step 0)

1. Workflow PC KPI table: the last row is numbered "3. Scope Leakage Rate" (copied from PM). Renumber to 6 or delete. Target reads "10%" with no direction.
2. Workflow PC: KPI 3 says assessments delivered in 5 business days. The Outcomes table says 10. Pick one.
3. Workshop PC: Outcomes says materials final 5 business days before delivery. KPI table says 2. Pick one.
4. Operations Manager KPI table has an empty fifth row.
5. Wiki Role Handbooks table: Engineer link is a dead `#`. Point it at `8cjh2zy-180752`.

## 2. Target architecture

### Routes

```
/                                   Overview: 01 Onboarding, 02 GitHub Basics, Core Fundamentals section
/overview/onboarding                new
/overview/github-basics             existing, copy cut + figures
/grant-way                          redirects to /roles/process-consulting/the-grant-way (Step 2 revision)
/grant-way/<module>                 content unchanged; page chrome now reads as under Roles > Process Consulting
/roles                              new index, one card per track (not per seat), CEO placeholder
/roles/process-consulting           track index (was /workflow-consulting)
/roles/process-consulting/scorecard-workflow
/roles/process-consulting/scorecard-workshop
/roles/process-consulting/<module>  existing six modules, moved
/roles/process-consulting/the-grant-way
/roles/sales                        scorecard-setter, scorecard-closer, modules
/roles/engineering                  scorecard, modules
/roles/project-management           scorecard, modules
/roles/operations                   scorecard, one module
/roles/marketing                    scorecard, modules
/search                             unchanged
```

Every `/workflow-consulting/*` URL gets a permanent redirect in `next.config.ts` to its
`/roles/process-consulting/*` twin. Old links in Slack and ClickUp keep working.

### Content model

```
content/
  overview/onboarding.json                 phases[] -> items[] {label, clickupUrl, owner?}
  roles/<track>/track.json                 title, eyebrow, lede, clickupDocUrl, seats[], modules[]
  roles/<track>/scorecard-<seat>.json      mission, capacity, sourceUrl, kpis[], outcomes[], competencies[], values[]
  roles/<track>/sops.json                  every SOP page: {name, pageId, url, seat, module|null, owner?, nextReview?}
  roles/<track>/<nn>-<module>.md           module body
lib/
  roles.ts                                 reads track.json, seat list, module list; feeds /roles and track indexes
  scorecard.ts                             reads and validates scorecard JSON
  role-markdown.ts                         generalizes wc-markdown.ts to any track
components/
  scorecard.tsx                            mission block, KPI tile row, outcomes table, competencies + values columns
  role-card.tsx                            seat card for /roles
  sop-index.tsx                            the per-track table: Seat, "covered in" (links the module), and a direct ClickUp link per row
  figure.tsx                               screenshot placeholder: dashed box, caption, capture spec, id
  step-rail.tsx                            numbered steps with optional figure per step
  checklist.tsx                            onboarding phases, rows link out to ClickUp
  callout.tsx                              one-line rule or warning, red left border
```

Scorecards are structured JSON, not markdown, so KPI figures render as tiles and tables
and can be diffed against ClickUp field by field.

### Copy and visual rules (enforced by `npm run check`, see Step 1)

- No word count budget. The rule is word choice: every sentence carries a fact, a rule, an
  owner, or a number the reader needs. Nothing is added to fill a section. Scorecard pages
  have no free prose beyond the mission.
- A full no-AI pass runs on every module before anything goes live (Step 5). Until then the
  check script catches the mechanical tells; the pass catches the rest.
- Every module carries at least one table, one `Figure`, or one inline SVG.
- No em or en dash anywhere the repo owns. Vendor content is exempt.
- Banned words and phrases: the list in `gpc-skills/skills/gpc-brand-docs/references/voice-and-slop.md`, plus: delve, crucial, pivotal, tapestry, foundational, robust, seamless, navigating, evolving, landscape, realm, harness, transformative, genuine, genuinely. Step 1 copies the merged list into `scripts/banned-words.json` in this repo. The check script reads that file, never gpc-skills, because Vercel builds this site without gpc-skills present.
- No client or partner names outside Grant Way's own sourced modules. Testimonial pages stay in ClickUp.
- Every module route has a `SEARCH_INDEX` entry with 8 or more tags.
- Diagrams are inline SVG on the GPC token palette in `app/globals.css`. No external chart libraries.
- Screenshots are `Figure` placeholders with an `id`, a caption, and a one-line capture spec ("ClickUp, Partners list, status column visible"). `npm run check` prints the open list.
- Every scorecard page and every `sops.json` row links straight to its own ClickUp page (`sourceUrl` on the scorecard, `url` on the SOP row), not just the track's `clickupDocUrl`. `npm run check` fails a scorecard missing `sourceUrl` the same way it fails one missing any other required field.

## 3. Module map per track

Each module names the ClickUp pages it condenses. Anything not named lands in the SOP
index only. Titles are working titles. Sonnet may sharpen them, not merge or split them.

### Process Consulting (6 existing modules, moved and cut)

| # | Module | Condenses (ClickUp pages) |
|---|---|---|
| S1 | Scorecard: Workflow PC | `8cjh2zy-110372` |
| S2 | Scorecard: Workshop PC | `8cjh2zy-110352` |
| 01 | Onboarding a Partner | Partner Onboarding PC Responsibilities, Conducting the Client Kickoff Call, Filling Out the Onboarding Document, Creating the Engineering Handover Document |
| 02 | Running the Engagement | Running Weekly Calls, Weekly Client Updates, Conducting Stakeholder Interviews |
| 03 | Managing the Relationship | Maintaining Client Relationships, Flagging Scope Creep, Identifying and Pitching Upsell Opportunities |
| 04 | Closing Out | Partner Closeout: PC Responsibilities |
| 05 | Tools: GitHub and Vercel | Github and Vercel SOPs |
| 06 | Communication Guidelines | Wiki: GPC Communication Guidelines, Client Communication Standards |
| 07 | The Grant Way, for this role | existing doorway |
| idx | SOP index | all 13, plus Vulnerability Management Execution (index only), each row tagged `seat: workflow \| workshop \| both` |

Workshop PC has a scorecard and no SOPs in ClickUp yet, so every SOP index row in this track
is `seat: workflow` until Workshop SOPs exist. The Workshop scorecard page says so in one line
and links the `workshop-portal` skill in gpc-skills as the current delivery runbook.

### Sales (new track)

| # | Module | Condenses |
|---|---|---|
| S1 | Scorecard: Setter | `8cjh2zy-112192` |
| S2 | Scorecard: Closer | `8cjh2zy-112212` |
| 01 | The Sales Process | Sales Process Overview, Pipeline Guide, Lead Ownership and Routing, Blackout Dates Workflow |
| 02 | Qualifying a Lead | BANT Rules, Qualification Guide, Qualified Meeting Definition, Pre Call Preparation |
| 03 | Discovery and Demo | Discovery Call Guide, Solution Demo Guide, Post-Call Follow-Up Standards |
| 04 | Proposal to Close | Product Guide, Pricing and Discount Authority, Proposal / SOW / Signature Process, Statement Of Work Creation, Closed Won to Delivery Handoff, Closed Lost / Nurture / Recycle, Sales to Delivery Handoff template |
| 05 | CRM Discipline | 12 CRM Commandments, Hubspot Activity And Logging Standards |
| 06 | Prospect FAQ | the 9 approved-answer pages, one table grouped by topic |
| idx | SOP index | all 19 SOPs, 2 resources (index only), each row tagged `seat: setter \| closer \| both` |

Module 03 is the "Pitching" doorway from Overview. Module 01 plus the two scorecards are
the "Selling" doorway.

### Engineering (new track)

| # | Module | Condenses |
|---|---|---|
| S1 | Scorecard: Engineer | `8cjh2zy-110092` |
| 01 | From Ticket to Build | Client communication and turnaround expectation, Scoping Time Estimates, Technical Design / Pre-Build Planning, Preparing Partner Call Briefs |
| 02 | Definition of Done and QA | Engineering Definition of Done, Automation Quality Assurance, Guidelines for naming convention on automations, Making Changes to Live processes |
| 03 | Go-Live and Operate | Deployment / Go-Live Process, Monitoring and Automation Ownership, Production Incident Response, Root Cause Analysis, Closing Support Tickets |
| 04 | Access and Credentials | Engineering Access and Credential Management, Credential Vault Usage and Sharing, Confirm Client Platform Access, Chrome Profile Setup, Migrating Make.com Automations to Client Accounts |
| 05 | Handover and Documentation | Project Handover Between Engineers, Client SOP Template, Client Automation Documentation Templates, How to Create Prompt, Creating Value Calculator |
| 06 | ClickUp for Engineers | the ClickUp subtree (5 pages) plus Automations in ClickUp |
| idx | SOP index | everything, with Quickbooks Tool Module and Make Tool Module marked "legacy, confirm with Augusto" |

### Project Management (new track)

| # | Module | Condenses |
|---|---|---|
| S1 | Scorecard: Project Manager | `8cjh2zy-110132` |
| 01 | The PM Cadence | PM Flow: Daily, Weekly, Monthly; Setting Up Sprints; Team Member Bandwidth Tracking; Create Weekly Client Updates; Create Monthly Executive Wrap-Up |
| 02 | Partner Lifecycle: Onboarding to Offboarding | Onboarding a Partner, PM Responsibilities: Onboarding Stage, Offboarding a Partner, Slack Channel Export Automation, Client Repo Scaffolding, Confirm Client Platform Access |
| 03 | Scope, Estimates, and Retros | SOW Alignment Review, Scoping Time Estimates, Project Retro Procedure, Recurring Client Satisfaction Tracking |
| 04 | Workspace Hygiene | Maintaining the Google Drive Structure, Slack Channel Management, Credential Management, Periodic Access Review, Monitoring and Automation Ownership |
| 05 | People Ops the PM Owns | Internal Team Member Onboarding, Internal Team Member Offboarding, Out of Office Handover, Quarterly SOP Review, Welcome Onboarding Message, Internal SOP Template |
| idx | SOP index | all 22 plus 2 templates |

Module 02 is the canonical cross-role lifecycle page. It carries the one swimlane SVG
(PC / PM / OM lanes, Onboarding to Active to Offboarding). PC module 01 and the OM module
link to it instead of redrawing it.

### Operations Manager (new track, thin by design)

| # | Module | Condenses |
|---|---|---|
| S1 | Scorecard: Operations Manager | `8cjh2zy-110272` |
| 01 | Partner Onboarding: OM Responsibilities | `8cjh2zy-111552`, links to PM module 02 for the full sequence |
| idx | SOP index | one row, plus a visible "SOPs not yet written, owner Savannah Higgins" state |

### Marketing (new track)

| # | Module | Condenses |
|---|---|---|
| S1 | Scorecard: Marketing Manager | `8cjh2zy-110472` |
| 01 | LinkedIn Playbook | LinkedIn Overview, Posting, Commenting |
| 02 | Getting a Testimonial | How to get an awesome testimonial SOP. The 12 testimonial pages stay in ClickUp (client names). |
| 03 | Permissions and Design | Marketing: Permissions Reference, Redo: Design Guidelines |
| idx | SOP index | all 6, plus a one-line note that the scorecard's paid-media and Webflow duties have no SOP yet |

### Overview

| # | Module | Source |
|---|---|---|
| 01 | Onboarding at GPC | The 47 tasks in list `901220437555`, grouped: Paperwork (4), Systems and Tools (8), Learn About GPC (7), ClickUp University (20, rendered collapsed), First Week Calls (5), Your Role Handbook (1, links to /roles). Every row links its ClickUp task. |
| 02 | GitHub Basics | Existing page. Cut to the sentences that teach, convert the six `shot` labels into `Figure` placeholders, add one SVG of the branch-commit-PR-merge loop (v0.1 had one; it was lost in the rebuild). |
| CF | Core Fundamentals | Section of doorway cards, see below |

Core Fundamentals cards:

| Card | Destination | State |
|---|---|---|
| Pitching | /roles/sales/discovery-and-demo | live |
| Selling | /roles/sales | live |
| Client service | /roles/process-consulting/managing-the-relationship | live |
| Communicating at GPC | /roles/process-consulting/communication-guidelines | live |
| The Grant Way | /grant-way | live |
| Pete's list | none yet | coming soon, owner Pete Sena |

Pete has been asked to name the fundamentals he wants beyond these five. Any he names that
have no source become new coming-soon cards with him as owner.

## 4. Steps

Chat naming: `GPC Training · Step N <name> M/D`. Time logs to the ClickUp list
"Demo Assets for Consulting".

gpc-skills is attached to every build chat, read-only. It holds GPC's voice and brand
standards. Each chat reads `skills/gpc-brand-docs/references/voice-and-slop.md` and
nothing else in that repo unless a plan step names a file. No build chat writes to
gpc-skills. Anything this site needs from it (the banned list, a design token) gets
copied into this repo, so the site builds on Vercel with gpc-skills absent. Each Sonnet step runs on its own `claude/<slug>` branch off
`main`, opens a PR, and Olivia reviews the Vercel preview before merge. Step 1 must merge
before Steps 2 to 4 start. Steps 4a to 4d can run in parallel (four-session ceiling).

| Step | Model | Depends on | Deliverable |
|---|---|---|---|
| 0 | Olivia | none | Five ClickUp source fixes, two of them after Eliza confirms the targets. Pete reply is done; his list is pending. |
| 1 | Sonnet | none | Shell: Roles tab, /roles index, track moved to /roles/process-consulting with redirects, Scorecard component, two PC scorecard pages, six track stubs, `npm run check`. |
| 2 | Sonnet | 1 | Component kit (Figure, StepRail, Checklist, Callout, SopIndex). Copy cut on the six PC modules. PC SOP index. |
| 3 | Sonnet | 1 | Overview: Onboarding checklist module, Core Fundamentals section, GitHub Basics cut plus figures. |
| 4a | Sonnet | 2 | Sales track. |
| 4b | Sonnet | 2 | Engineering track. |
| 4c | Sonnet | 2 | Project Management track, including the lifecycle swimlane SVG. |
| 4d | Sonnet | 2 | Operations and Marketing tracks. |
| 5 | Fable | 4a to 4d merged | Dedupe and review gate. Canonical home for the SOPs that appear in two handbooks. Full no-AI pass on every module, all tracks. KPI figures diffed against ClickUp. Search index completeness. Nothing goes live before this passes. |
| 6 | Olivia | 5 | Screenshot batch from the `Figure` list. Grant review. Deploy. Reply to Pete with the link. |

Cross-handbook duplicates Step 5 must resolve (one canonical module, the other links):
Confirm Client Platform Access (Eng, PM), Scoping Time Estimates (Eng, PM), Monitoring and
Automation Ownership (Eng, PM), Weekly Client Updates (PC, PM), Credential management (Eng,
PM), Partner Onboarding (PC, PM, OM).

## 5. Kickoff prompts

Paste the block for the step into a new chat on the named model. Every prompt assumes
both repos are attached (gpc-team-training with write access, gpc-skills read-only) and
this file is at `docs/plans/2026-09-16-handbooks-buildout.md` on main.

### Step 1 (Sonnet): Shell, Roles index, scorecard split

```
Repo: gpc-team-training. Branch off main: claude/step-1-roles-shell.
Read docs/plans/2026-09-16-handbooks-buildout.md sections 2 and 3 first. Then read
README.md, components/top-nav.tsx, components/module-shell.tsx, app/page.tsx,
app/workflow-consulting/page.tsx, lib/wc-markdown.ts, lib/search-index.ts, and
content/workflow-consulting/00-role-overview.md. Read nothing else until you need it.

gpc-skills is attached for reference only. Read
skills/gpc-brand-docs/references/voice-and-slop.md and nothing else in it unless a step
below names a file. Never write to gpc-skills from this chat.

Build, in this order:
1. Tabs become Overview / The Grant Way / Roles. TopNav and ModuleShell accept the new
   track keys. Search index track type gains the six role tracks.
2. Move app/workflow-consulting/* to app/roles/process-consulting/*. Add permanent
   redirects in next.config.ts for every old URL. Move content/workflow-consulting to
   content/roles/process-consulting and generalize lib/wc-markdown.ts into
   lib/role-markdown.ts (track + filename).
3. content/roles/<track>/track.json for all six tracks (title, eyebrow, lede,
   clickupDocUrl, seats[], modules[]). Only process-consulting has modules today. The
   other five ship as stubs with the scorecard card and an empty-state line naming the
   ClickUp handbook, so Steps 4a to 4d edit disjoint files.
4. lib/roles.ts reads track.json. app/roles/page.tsx renders one RoleCard per seat
   (Workflow PC, Workshop PC, Engineer, Project Manager, Operations Manager, Marketing
   Manager, Sales Setter, Sales Closer) plus a CEO placeholder card with no link and the
   text "Scorecard not written yet. Owner: Grant Hushek." Each live card opens that
   seat's scorecard page directly.
5. components/scorecard.tsx and lib/scorecard.ts. Input is scorecard JSON (schema in
   plan section 2). Layout: mission block, a row of KPI tiles (name, target, one-line
   calculation), the Outcomes table, then Competencies and Values in Action as two
   columns. No paragraphs beyond the mission. Load the dataviz skill before styling
   the tiles.
6. Delete content/roles/process-consulting/00-role-overview.md. Create
   scorecard-workflow.json and scorecard-workshop.json from ClickUp pages
   8cjh2zy-110372 and 8cjh2zy-110352 (doc 8cjh2zy-180912), copied field for field,
   figures unchanged. Routes: /roles/process-consulting/scorecard-workflow and
   /scorecard-workshop. The Workshop page carries one line: no Workshop SOPs exist in
   ClickUp yet; the workshop-portal skill in gpc-skills is the current delivery runbook.
   Confirm gpc-skills/skills/workshop-portal/SKILL.md exists before you link it; do not
   read it. The track index lists both scorecards first, then the six modules, then the
   Grant Way doorway.
7. scripts/check-content.mjs and "check": "node scripts/check-content.mjs" in
   package.json. Rules are plan section 2, "Copy and visual rules". Seed
   scripts/banned-words.json from the voice-and-slop.md list plus the plan's additions;
   the script reads only that file. It must fail on: a module route with no
   SEARCH_INDEX entry, an em or en dash outside vendor/, a banned word, a module with
   no table, Figure, or svg, and scorecard JSON that misses a required field. It prints the open Figure list and a word count per module (for
   information, never a failure). The six existing PC modules will fail the visual
   rule today; list them as warnings, not failures, until Step 2 (use an allowlist
   file the next step deletes).
8. Update README.md (structure tree, "Adding a new track" now means a track.json plus
   a content folder) and CHANGELOG.md (v0.7).

Rules: no em dashes anywhere you write. No client names. Every new route gets a search
index entry in the same commit. Run npm run build and npm run check before you push.
Show me the rendered /roles page and both scorecard pages (screenshots from npm run dev)
in chat before you open the PR. PR description in Completed / Still needed format.
```

### Step 2 (Sonnet): Component kit and PC copy cut

```
Repo: gpc-team-training, main now has the Step 1 shell. Branch: claude/step-2-kit-pc-cut.
Read docs/plans/2026-09-16-handbooks-buildout.md sections 2 and 3 (Process Consulting
table), then components/scorecard.tsx and one module page under
app/roles/process-consulting/. Read gpc-skills/skills/gpc-brand-docs/references/
voice-and-slop.md for the voice rules.

Build:
1. components/figure.tsx (placeholder: dashed box on the secondary token, caption,
   capture spec, id), step-rail.tsx, checklist.tsx, callout.tsx, sop-index.tsx.
   Document each in one comment block. The check script already knows what a Figure is.
2. Rewrite the six PC modules for word choice: keep every fact, rule, owner, and
   number, drop every sentence that only restates one. Convert prose lists into
   tables (RACI, cadence, checklist). Add one Figure or inline SVG per module where a screenshot or
   a diagram would replace a paragraph. Every fact stays; only the words go. When a
   sentence is a rule, make it a Callout.
3. content/roles/process-consulting/sops.json: every page in the ClickUp handbook
   doc 8cjh2zy-180912 (list pages with the ClickUp tool), each row {name, pageId, url,
   seat, module|null}. seat is workflow, workshop, or both: ClickUp doesn't split these
   SOPs by seat, so most rows are both; use workflow for anything Workshop has no
   parallel for yet. url is that row's own ClickUp page link, not the doc-level link.
   Render it as the SOP index at the bottom of the track page, Seat and a per-row
   ClickUp link both visible.
4. Delete scripts/pc-visual-rule-allowlist.json (not the Overview one, that's Step 3's).
   npm run check must pass clean.
CHANGELOG v0.8. Show me every changed module rendered before the PR.
```

### Step 3 (Sonnet): Overview

```
Repo: gpc-team-training, main has Step 1. Branch: claude/step-3-overview.
Read the plan's Overview table and Core Fundamentals table (section 3), app/page.tsx,
app/overview/github-basics/page.tsx, components/checklist.tsx if Step 2 has merged
(build a local one if not; Step 5 dedupes).

Build:
1. content/overview/onboarding.json from ClickUp list 901220437555 (47 tasks, use the
   ClickUp filter tool, include closed). Group per the plan. Every row links its task
   URL. ClickUp University renders collapsed by default.
2. /overview/onboarding as Overview module 01. GitHub Basics becomes 02.
3. Core Fundamentals section under the module grid, six cards per the plan table.
   Coming-soon cards have no link and show the owner.
4. GitHub Basics: cut each section to the sentences that teach, convert every shot label into a Figure
   with a capture spec, add one inline SVG of the branch-commit-PR-merge loop.
Search index entries for the new route. CHANGELOG v0.9. Rendered pages in chat first.
```

### Step 4a to 4d (Sonnet, one chat each): New tracks

```
Repo: gpc-team-training, main has Steps 1 to 3. Branch: claude/step-4<letter>-<track>.
Read the plan's module table for <track> (section 3) and the copy rules (section 2).
Read one finished PC module and content/roles/process-consulting/sops.json as the
pattern. Read app/roles/process-consulting/page.tsx once.

For <track> (ClickUp doc <doc_id>):
1. List the doc's pages with the ClickUp tool. Fetch only the pages the module table
   names, in text/md, one module at a time. Do not load the whole handbook.
2. scorecard-<seat>.json per seat, copied field for field from the scorecard page(s).
   sourceUrl is that seat's own scorecard page link, not the track's clickupDocUrl.
3. One .md per module in the table, at least one table or Figure each. Condense, do
   not summarize: every rule, number, and owner in the source survives, and no
   sentence is there only to bridge two others.
4. sops.json with every page in the doc, each row's seat tagged to the seat(s) it
   covers (both if ClickUp doesn't split it), module or null.
5. Fill track.json modules[]. The track index shows scorecards first.
6. Search index entries, 8 or more tags each. CHANGELOG line.
npm run check clean. Rendered scorecard and modules in chat before the PR.
Track-specific notes: see the plan table for your track (legacy flags, gap notes,
the swimlane SVG for Project Management module 02, the OM empty state).
```

### Step 5 (Fable): Dedupe and review gate

```
Repo: gpc-team-training, main has Steps 1 to 4. Branch: claude/step-5-dedupe.
Read docs/plans/2026-09-16-handbooks-buildout.md section 4 (duplicates list) and run
npm run check. Do not read module bodies until a duplicate or a check failure points
at one.
1. For each cross-handbook duplicate, pick the canonical module, cut the other to a
   one-line cross-link, and record the decision in the plan file under a new
   "Step 5 decisions" heading.
2. Diff every scorecard JSON against its ClickUp page. Any figure that differs is a
   finding, not a fix: list it for Olivia to resolve in ClickUp first.
3. Full no-AI pass across every module in content/ and app/, all tracks: banned
   list, em dashes, lists of exactly three, contrast framing, paired fragments,
   adverb padding, sentences that restate the previous one. Fix in place. Read every
   module body for this step; it is the one step that loads them all.
4. Confirm every route is in the search index and every SOP page ID in ClickUp appears
   in exactly one sops.json.
5. Print the open Figure list grouped by the tool it needs a login for (GitHub,
   ClickUp, Vercel, HubSpot). That list is Step 6's shot list.
CHANGELOG v1.0. PR with findings in the description.
```

### Step 6 (Olivia): Capture, review, deploy

1. Capture the Figure list, save to `public/img/<figure-id>.png`, swap each placeholder
   for the image in one commit.
2. Walk Grant through /roles and the two PC scorecards. Ask for the CEO scorecard.
3. Merge, confirm the Vercel deploy, update the Wiki Role Handbooks page in ClickUp
   with the site link, reply to Pete with the Overview URL and the coming-soon card.
