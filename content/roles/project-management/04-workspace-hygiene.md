# Workspace Hygiene

## Maintaining the Google Drive structure

Drive maintenance is owned entirely by the Project Manager; Operations and
other team members aren't involved.

| Top-level folder | Holds |
|---|---|
| `00 Start Here` | Orientation material for anyone new to the Drive |
| `01 Company Brain` | Reusable company knowledge: positioning, capabilities, prompts and playbooks, AI governance, the SOP and automation library |
| `02 Partners` | Partner resources and call transcripts only, active/archived/leads/shared resources; signed SOWs never live here |
| `03 Sales` | Pipeline material: templates, proposals and SOWs, sales assets, referral agreements, call briefs, frameworks |
| `04 Marketing` | Brand, case studies, content and campaigns, media |
| `05 Operations` | Legal, finance, tooling and access, admin |
| `06 Human Resource` | Hiring, onboarding, offboarding, training records, HR files, scorecards |
| `07 Leadership` | All-hands, quarterly/annual planning, Sunday memos, Think Week, internal meetings |
| `08 Research and Experiments` | Exploratory work not yet a supported offering |
| `09 Team Members` | Individual team member records, active and inactive |
| `99 Archive` | Company-wide retired material that predates the numbered structure |

Each top-level folder has its own 3-6 numbered subfolders in ClickUp; see the
source SOP for the full map when filing something.

Save new files directly into the correct folder at creation, never left in
the Drive root or a personal folder "for now." Retire outdated, duplicate,
or completed material to the applicable Archived subfolder (or `99 Archive`
for company-wide material) rather than deleting it, so the change stays
reversible. Periodically review the top-level and first-level folders for
anything misplaced.

<Callout>A signed SOW for a partner goes in 03 Sales, under Proposals and SOWs, never inside that partner's own folder under 02 Partners, which holds only that partner's resources and call transcripts.</Callout>

A new subfolder: confirm the parent category first, check the existing
subfolders for a match before adding one, number it as the next available
decimal under that parent, name it in Title Case with 2-4 descriptive words
(never a project code or a person's name), then create it. No extra
approval is needed for a subfolder; a new top-level folder gets the PM's
call, then an update to the Operations Manager and CEO.

## Slack channel management

**Creation, during onboarding:** confirm the onboarding automation actually
created the channel, then confirm the client's stated communication
preference from onboarding intake (standard Slack, Microsoft Teams, or
email-only) before inviting anyone.

| Client preference | What happens |
|---|---|
| Standard Slack | Invite the client's contacts and the PM, PC, Primary Engineer, and Backup Engineer |
| Email-only | No Slack invites for the client or the team; coordinate through their preferred channel instead |
| Microsoft Teams | Don't invite them to Slack directly; connect a Teams-to-Slack integration so both platforms stay synced |

Verify the Slack Channel ID (not the channel name) is correct in the
partner's `External Slack` field: the offboarding export automation depends
on it directly, and a wrong or missing ID makes that automation fail later.
Keep membership current as the Primary or Backup Engineer changes.

**Archival, during offboarding:** confirm the `SLACK_EXPORT_COMPLETE`
marker is logged first, then archive.

<Callout>Never archive a partner's Slack channel before its export is verified complete. An archived channel complicates a re-export if new messages need capturing.</Callout>

## Credential management

Store any client-sent credential in 1Password the moment it arrives, never
left sitting in email or Slack. One dedicated vault per client, shared only
with the individuals actively assigned to it (PM, PC, Primary Engineer,
Backup Engineer); one separate GPC-wide vault for internal, non-client
tools.

When a team member leaves the company, remove their 1Password access
immediately, revoking every vault they were part of. When a client is
offboarded, retain their vault for 30 days in case they return for
additional service, then remove it. Whenever a credential's password
changes, update 1Password right away and announce it in both the ae-corps
Slack channel and the client's ClickUp channel.

**Do:** store every credential in 1Password as soon as it's received; share
a client's vault only with the assigned team; use 1Password's generator for
any new credential GPC creates; enable two-factor authentication wherever
it's supported; label entries clearly by platform.

**Don't:** share a credential outside 1Password (email, Slack, a
screenshot); reuse a password across clients or platforms; use client or
company credentials for anything outside work; store credentials in a
personal notes app, browser, or spreadsheet; leave a departed team member's
access active "just in case"; let a client vault sit past its 30-day window.

## Periodic access review

Quarterly, independent of any onboarding or offboarding event, closing the
gap those event-triggered removals can miss: pull every current client
platform access grant and every active 1Password vault membership, then
cross-check each against who's actually assigned to that partner today
(Primary Engineer, Backup Engineer, Process Consultant, Project Manager)
and confirm every internal person is still active at GPC.

Flag any mismatch: access for someone no longer assigned to that partner, an
ended engagement that hasn't gone through full offboarding yet, or a vault
membership that doesn't match the client's current team. Remove flagged
access; if the correct assignee is unclear, escalate to the Engineering
Lead first rather than leaving it open indefinitely. Document the review
(date, reviewer, what was reviewed, findings, actions taken) in the
designated ClickUp list, and confirm every active partner and vault has
been reviewed and every flag resolved before closing the quarter.

<Callout>This is a different review from Quarterly SOP Review: one confirms access grants are accurate, the other confirms SOP documentation is accurate. Both run quarterly, independently of each other.</Callout>

<Figure id="pm-periodic-access-review-log" caption="A completed quarterly access review logged in ClickUp, findings and actions visible" spec="ClickUp, the access review list, one client's entry with findings and resolution filled in" />

## Monitoring and automation ownership

This is the PM's half of error monitoring; Engineering's half (root cause
analysis, the actual fix) lives in Engineering's own handbook.

For an **active client**, the error is assigned to the engineer currently
working that account and resolved within 3 days; the PM tracks the ticket
through to resolution rather than diagnosing it. For an **inactive
client**, the error is never pushed to engineering: the PM just records it
in case the client returns and agrees to pay for the fix.

<Callout>An inactive client's broken automation is not GPC's open liability to carry for free.</Callout>

The PM should know who owns each client's automations (the original
builder) so an error routes to the right engineer immediately. If that
person is off the account, route it per Engineering's Making Changes to
Live Processes procedure instead of defaulting to whoever's available.
