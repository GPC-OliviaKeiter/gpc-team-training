# Partner Lifecycle: Onboarding to Offboarding

Every partner moves through the same five states: **Onboarding → Active →
Close Out → Offboarding → Complete**. Three roles carry it, each with their
own lane. This is the canonical version of that arc; Process Consulting's
own onboarding module and the Operations Manager's onboarding module link
back here instead of redrawing it.

<svg viewBox="0 0 860 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Swimlane diagram of the partner lifecycle across Process Consultant, Project Manager, and Operations Manager lanes, from Onboarding through Active, Close Out, Offboarding, to Complete">
  <line x1="80" y1="20" x2="820" y2="20" stroke="var(--gpc-neutral-300)" stroke-width="2" />
  <polygon points="820,20 810,15 810,25" fill="var(--gpc-neutral-300)" />
  <text x="140" y="15" text-anchor="middle" font-family="var(--font-mono)" font-size="10.5" font-weight="600" fill="var(--gpc-neutral-500)">ONBOARDING</text>
  <text x="300" y="15" text-anchor="middle" font-family="var(--font-mono)" font-size="10.5" font-weight="600" fill="var(--gpc-neutral-500)">ACTIVE</text>
  <text x="460" y="15" text-anchor="middle" font-family="var(--font-mono)" font-size="10.5" font-weight="600" fill="var(--gpc-neutral-500)">CLOSE OUT</text>
  <text x="620" y="15" text-anchor="middle" font-family="var(--font-mono)" font-size="10.5" font-weight="600" fill="var(--gpc-neutral-500)">OFFBOARDING</text>
  <text x="780" y="15" text-anchor="middle" font-family="var(--font-mono)" font-size="10.5" font-weight="600" fill="var(--gpc-neutral-500)">COMPLETE</text>
  <text x="8" y="45" font-family="var(--font-mono)" font-size="10" font-weight="600" fill="var(--gpc-primary-red)">PC</text>
  <line x1="80" y1="45" x2="820" y2="45" stroke="var(--gpc-neutral-200)" stroke-width="16" />
  <rect x="80" y="37" width="120" height="16" rx="3" fill="var(--gpc-primary-red)" />
  <text x="140" y="48" text-anchor="middle" font-family="var(--font-mono)" font-size="8" fill="var(--gpc-neutral-100)">Kickoff + handover</text>
  <rect x="240" y="37" width="120" height="16" rx="3" fill="var(--gpc-primary-red)" />
  <text x="300" y="48" text-anchor="middle" font-family="var(--font-mono)" font-size="8" fill="var(--gpc-neutral-100)">Relationship, upsells</text>
  <rect x="400" y="37" width="120" height="16" rx="3" fill="var(--gpc-primary-red)" />
  <text x="460" y="48" text-anchor="middle" font-family="var(--font-mono)" font-size="8" fill="var(--gpc-neutral-100)">3 action items</text>
  <text x="8" y="105" font-family="var(--font-mono)" font-size="10" font-weight="600" fill="var(--gpc-secondary-orange)">PM</text>
  <line x1="80" y1="105" x2="820" y2="105" stroke="var(--gpc-neutral-200)" stroke-width="16" />
  <rect x="80" y="97" width="120" height="16" rx="3" fill="var(--gpc-secondary-orange)" />
  <text x="140" y="108" text-anchor="middle" font-family="var(--font-mono)" font-size="8" fill="var(--gpc-neutral-100)">Folder + Value Calc</text>
  <rect x="240" y="97" width="120" height="16" rx="3" fill="var(--gpc-secondary-orange)" />
  <text x="300" y="108" text-anchor="middle" font-family="var(--font-mono)" font-size="8" fill="var(--gpc-neutral-100)">Weekly/monthly cadence</text>
  <rect x="560" y="97" width="120" height="16" rx="3" fill="var(--gpc-secondary-orange)" />
  <text x="620" y="108" text-anchor="middle" font-family="var(--font-mono)" font-size="8" fill="var(--gpc-neutral-100)">Docs, archive, removal</text>
  <text x="8" y="165" font-family="var(--font-mono)" font-size="10" font-weight="600" fill="var(--gpc-secondary-purple)">OM</text>
  <line x1="80" y1="165" x2="820" y2="165" stroke="var(--gpc-neutral-200)" stroke-width="16" />
  <rect x="80" y="157" width="120" height="16" rx="3" fill="var(--gpc-secondary-purple)" />
  <text x="140" y="168" text-anchor="middle" font-family="var(--font-mono)" font-size="8" fill="var(--gpc-neutral-100)">Payment, invoicing</text>
  <rect x="560" y="157" width="120" height="16" rx="3" fill="var(--gpc-secondary-purple)" />
  <text x="620" y="168" text-anchor="middle" font-family="var(--font-mono)" font-size="8" fill="var(--gpc-neutral-100)">Archive, close status</text>
  <text x="780" y="108" text-anchor="middle" font-family="var(--font-mono)" font-size="8" fill="var(--gpc-neutral-400)">All systems</text>
  <text x="780" y="118" text-anchor="middle" font-family="var(--font-mono)" font-size="8" fill="var(--gpc-neutral-400)">archived</text>
</svg>

## Onboarding

A deal marked **Closed Won** in HubSpot triggers Phase 1, fully automated.
The PM's job is to monitor it, not run it.

**Phase 1 (system-executed):** classify the partner (existing partner gets
only a Slack note in the sales channel, nothing else fires; new partner
triggers everything below) → send the welcome email (manual if HubSpot has
no contact assigned for "onboarding email") → post the Slack announcement →
create the ClickUp partner folder → generate the Google Drive folder (Call
Transcripts and Resources subfolders) → create the external Slack channel →
populate the partner record's links (Production List, Support Ticket List
ID, Drive folder link and ID, Slack Channel ID) and apply the onboarding
checklist.

<Callout>If any Phase 1 link or field fails to populate, verify the automation run and manually add what's missing before moving to Phase 2.</Callout>

**Phase 2, the PM's eight subtasks**, interleaved with the Process
Consultant's and Operations Manager's own: customize the ClickUp folder for
the specific client and scope; create the Value Calculator (the only
onboarding step not automated, required for every partner); schedule the
Team Go call; confirm the kickoff call is scheduled; send the client's Slack
invite; conduct the Team Go call; save the kickoff recording and transcript
(only after the Process Consultant has actually run the kickoff call); verify
and log tool access.

<Callout>Once every onboarding subtask across the Project Manager, Operations Manager, and Process Consultant is marked complete, ClickUp automatically moves the partner to Active status.</Callout>

## Confirming client platform access

Assign a Primary and Backup Engineer as soon as a project is confirmed to
need client platform access, confirmed with the Process Consultant or Senior
AE before the request goes to the client. Once the client grants access,
accept your own invitation within 24 hours (urgent, ahead of routine tasks,
never a shared login, per SOC 2), confirm your login and permission level,
add your credential to 1Password under your own entry, and announce it in
the ClickUp channel. Confirm the Primary and Backup Engineer accepted their
own invitations in time too; escalate to the Engineering Lead if either
hasn't.

<Callout>Every active access grant also gets re-checked on a quarterly cadence, independent of onboarding (Periodic Access Review, see Workspace Hygiene).</Callout>

## Client repo scaffolding (GitHub + Claude Code)

Standalone: run it whenever a client's project needs a scaffolded codebase
repo, not tied to any onboarding status.

1. Create the GitHub repo, named `client-{client_name}`.
2. Open Claude Code and select both the new client repo and `gpc-skills`
   (gpc-skills holds the scaffolding logic itself).
3. Type `clone repos and let's party` and confirm both clone successfully.
4. Identify the sales rep who ran the client's calls, and have the signed
   SOW ready.
5. Prompt Claude Code to scaffold the repo, naming the client and sales rep
   so it can pull the right Fathom transcripts, and attach the signed SOW.

<Callout>Double-check the client name and sales rep before sending the scaffold prompt. Claude Code uses them to name the repo and find the right Fathom transcripts; a misspelling scaffolds against the wrong context.</Callout>

## Close Out

Triggered by a notification from the Process Consultant or Operations
Manager: change the partner's Account Status to Close Out in the Partners
List, which auto-generates three Close Out action items assigned to the
Process Consultant. The PM validates each is actually done, then marks it
complete. Once all three are complete, the automation moves the partner to
Offboarding and generates its action items.

## Offboarding

Owned by the PM or Operations Manager, seven steps: send the offboarding
documentation form to everyone who worked the account and collect responses;
gather Value Calculator data and validate client impact metrics; let the
Slack channel export run (below); archive partner records across every GPC
platform; remove engineers from the client's Slack channels and calendar
invites (only the meeting owner can cancel a recurring invite for everyone,
so ask them directly); confirm the Slack export is stored in Drive, then
archive the channel; mark every subtask complete, which auto-updates the
Account Status to Complete.

<Callout>Archive a Google Drive partner folder by moving it into the Archive Partners folder. Never delete it.</Callout>

## Slack channel export automation

Fires automatically once a partner's Account Status is set to
`OFFBOARDING`. Before that date, spot-check four required fields: Account
Status is exactly `OFFBOARDING`; the Slack field holds the channel ID, not
the channel name; the ClickUp Chat ID is set; the Drive Folder ID is set and
that folder still lives inside the Grantbot Shared Drive.

The workflow then: checks for a `SLACK_EXPORT_COMPLETE` marker and stops if
one exists (prevents duplicate exports); pulls the full channel history,
every thread included; resolves Slack user IDs to real names; builds a JSON
export and a readable `.txt` transcript; uploads both to the client's Drive
folder; posts a summary with both links to the client's ClickUp Chat; logs
the `SLACK_EXPORT_COMPLETE` marker comment.

<Callout>Runtime ranges from minutes to over an hour depending on thread volume, since Slack rate-limits thread lookups. That's expected, not a failure.</Callout>

If nothing appears after a reasonable runtime, check the four required
fields first; if those are correct, escalate to Engineering. To force a
re-export, delete the `SLACK_EXPORT_COMPLETE` comment; the next task update
triggers a fresh one. The workflow never advances Account Status on its own,
a person confirms the export first.
