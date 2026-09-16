# People Ops the PM Owns

## Internal team member onboarding

**Pre-start:** organize the new hire's ClickUp folder by role (an
engineer's folder differs from a Process Consultant's), setting up their
sprint folder and task-assignment automation; create their Google Drive
folders (the HR area, plus their own folder inside `09.1 Active Team
Members`); provision ClickUp, Google Drive, 1Password (the GPC-wide vault),
and Slack access; send recurring team meeting invites; create their email
signature.

**Intro and orientation:** schedule and run a 30-minute intro call covering
ClickUp, Google Drive, and general workflows; add them to bandwidth
tracking (the Workload view) so their capacity is visible from day one.

## Internal team member offboarding

For a permanent departure, at least 2 weeks before the last day: identify
the replacement (including any Primary or Backup Engineer assignment),
build a handover document plan covering every active partner, open task,
recurring responsibility, known risk, and key contact, saved in the
departing member's Drive folder, then break it into action items with an
owner and a due date no later than the last day.

Execution: hold a handover meeting with the departing member and the
replacement; confirm every action item is complete before the last day,
pulling forward and reassigning anything at risk rather than leaving it
open; reassign every open ClickUp task to the replacement.

Deprovisioning, on or before the last day:

| Platform | Action |
|---|---|
| Google Drive | Remove shared Drive access; move their folder from Active to Inactive Team Members |
| ClickUp | Deactivate their seat; reassign or remove any automation tied to them |
| Slack | Remove from the GPC workspace entirely, including every partner channel |
| 1Password | Remove them, revoking every vault they were part of |

If they held individual client platform access as a Primary or Backup
Engineer, revoke it and coordinate with the client to grant the new
assignee access; if they were a named point of contact, notify the client
of the change.

<Callout>This is different from an Out of Office handover: that covers a temporary absence with the person returning. This is a permanent departure requiring full deprovisioning.</Callout>

## Out of office handover

Applies whenever a team member will be out more than 2 days. First check
for a coverage conflict: the Primary and Backup Engineer for the same
partner can't be OOO on the same day, except a company holiday when the
whole team is out; flag and resolve any overlap before approving the PTO.

Two days before the OOO start date, the PM asks the team member to complete
a handover document, saved in their individual folder. The PM reviews it
for completeness; if it doesn't sufficiently cover the work, they ask for a
handover meeting with the backup team member instead; if it's not approved,
the team member revises it until it's comprehensive enough to rely on.
Finally, the PM reassigns the outgoing tasks so work keeps moving during
the absence.

## Quarterly SOP review

Every quarter, across every GPC handbook: check each SOP's Next Revision
date and build the list of pages due (anything already past its date gets
included too). For each one, verify it still reflects current tools, roles,
and process; confirm its cross-references to other SOPs still resolve;
confirm the listed owner is still correct.

Make the necessary edits, set Last Revised to today and Next Revision three
months out, even when nothing changed, so a stable SOP doesn't silently
fall out of the cycle. Flag anything needing another owner's input (an
Engineering-specific SOP goes to its Automation Owner, not edited solo)
before finalizing. Confirm every due page has been reviewed or explicitly
confirmed accurate before closing the quarter.

<Callout>Review a SOP the moment its underlying process changes. Don't wait for the quarterly cycle if something breaks or changes sooner.</Callout>

## Welcome onboarding message

The message sent to every new client at kickoff, four steps:

| Step | Ask |
|---|---|
| 1. Onboarding survey | Complete it so GPC can tailor its approach to the client's business, goals, and priorities |
| 2. Join the Slack channel | Accept the invite; it becomes the primary communication hub |
| 3. Relevant resources | Be ready to share documentation, SOPs, brand guidelines, or recordings if the team asks for them |
| 4. Kickoff call | Book it through the provided scheduling link |

## Internal SOP template

Sections, in order: Purpose, Scope, Roles & Responsibilities, Procedure,
FAQs, Resources, Review & Revision. This is the internal (non-client)
shape; a client-facing SOP uses Objective, Pre-requisite, Recording,
Procedure, Checklist, Cadence, and Definition of Done instead (see
Engineering's Handover and Documentation module).
