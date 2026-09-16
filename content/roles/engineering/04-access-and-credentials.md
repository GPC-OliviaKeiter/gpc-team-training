# Access and Credentials

## Requesting client platform access

Every partner has a Primary and Backup Engineer, and the client invites each
of them, plus the PM and Process Consultant, by their own individual account.
No shared or generic engineering login is ever used to access a client
platform, in compliance with SOC 2.

| Engagement type | Access level |
|---|---|
| Workflow Assessment | View/read-only. The team audits and maps existing workflows, doesn't modify them. |
| Implementation | Admin, for the Primary and Backup Engineer. Configuring and building live systems needs more than read-only. |
| Automations involved | A dedicated `automations@{clientname}.com` service account the client creates and hands over; automation-triggered activity runs through it instead of an individual login. Access limited to the Primary/Backup Engineer; retrieval or rotation logged in the 1Password vault entry. |

<Callout>Access is scoped to what the current engagement needs. Moving from assessment to implementation upgrades view to admin at that point; admin is never requested upfront.</Callout>

**Non-negotiable:** no engineering work begins without confirmed platform
access. Every partner needing access has a Primary and Backup Engineer.
Every invitation is accepted within 24 hours by the person it was issued to
(the Backup Engineer covers if the Primary is unavailable). Accepting access
is an urgent priority over routine tasks. Access confirmation is documented
in the project task, and delays are escalated immediately.

Sequence: the Process Consultant or Senior AE confirms access is needed and
requests the client add the PM, PC, Primary, and Backup Engineer by
individual account before the project start date. Once the client grants
access, each person accepts within 24 hours, confirms their login and
permission level, adds their credential to 1Password under their own entry,
and the access gets announced in the client's ClickUp channel. Only then does
the project move to active execution.

<Callout>Every active access grant is also re-checked on a quarterly cadence, independent of this onboarding sequence (Periodic Access Review, in the Project Management handbook).</Callout>

## Credential storage and vault usage

Every credential lives in that client's dedicated 1Password vault, one entry
per individual; never in ClickUp, Slack, a spreadsheet, or a personal password
manager. The PM or Operations Manager maintains the vault. Internal,
non-client GPC tools live in one separate GPC-wide vault instead.

Add your own credential once your access is confirmed, labeled clearly by
platform. Never add a credential on someone else's behalf, reuse or edit
another person's entry, copy or screenshot a vault credential anywhere
outside 1Password, create a personal or duplicate vault, or share your entry
with a teammate instead of having them request their own.

<Figure id="eng-1password-vault-entry" caption="A client's 1Password vault showing individual credential entries" spec="1Password, a client vault, entries labeled by platform and individual" />

Rotating off an account: notify the PM immediately so your vault access is
removed. Don't keep it "just in case." Any password change gets announced in
both the ae-corps Slack channel and the client's ClickUp channel, with
1Password updated right after. Access is reviewed and revoked as part of
offboarding whenever an engagement ends or an engineer rolls off, on top of
the quarterly review across every active engagement.

## Chrome profile setup

Each engineer sets up a dedicated Chrome profile tied to their own individual
GPC engineering email, never a shared inbox. On first login, accept the
"create a new Chrome profile?" prompt, then configure: don't share bookmarks,
don't sync browsing history, allow analytics data sharing. This keeps work and
personal browsing separate and maintains individual accountability per SOC 2.

## Migrating Make.com automations to client accounts

Assumes the automation has already passed Automation QA.

1. **Export the blueprint** from the source account (3-dot menu → Export
   Blueprint).
2. **Switch to the target account** (the client's own Make.com account).
3. **Import the blueprint** there (3-dot menu → Import Blueprint).
4. **Reconnect every integration module** to the correct resource in the
   target account.
5. **Reset the trigger.** Make.com defaults a scheduled trigger to a 15-minute
   polling interval on import; always set it back to the intended schedule.
6. **Test end to end**, using the original QA test cases where available.
7. **Activate and verify** the first live run.
8. **Deactivate or delete the source automation** once the migrated copy is
   confirmed working, per Monitoring & Automation Ownership, so two live
   copies never run in parallel.

<Callout>A clean import doesn't guarantee the reconnected modules point at the right data. Always test before activating.</Callout>

Follow the standard automation naming convention (see Definition of Done and
QA) when naming the migrated scenario in the target account.
