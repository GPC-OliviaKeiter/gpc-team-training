# Go-Live and Operate

## Deployment and go-live

1. **Handover session.** Walk the client through how the automation, app, or
   system works end to end, every platform involved, and what they need to
   maintain it.
2. **Documentation before handover.** Create it via the Partner Enablement Doc
   skill before the session happens. A client is never walked through an
   undocumented system.
3. **Post-handover verification.** Go-live isn't complete the moment the
   session ends; it's confirmed only once the system is verified live and
   functioning.
4. **Post-launch support window.** 2 weeks from go-live by default, until
   client satisfaction is reached; a different period only applies if
   explicitly agreed with the client.
5. **Introduce the support ticket system.** The client submits errors and
   update requests there going forward, not through ad hoc channels.
6. **Ongoing training.** Continues as needed within the support window, not
   capped at the handover session.

## Monitoring and automation ownership

This is engineering's half of monitoring; the PM's half (error monitoring,
active/inactive client triage) lives in the Project Management handbook.

Once the PM assigns an error on an active client, the engineer works it
through Root Cause Analysis below, root cause first, then a fix, then
classification and documentation. Active-client errors get resolved inside
the PM's 3-day window.

<Callout>Whoever originally built an automation owns any fix or update to it, permanently. Ownership isn't reassigned just because someone else has bandwidth; if the original builder is gone or unavailable, ownership follows the Making Changes to Live Processes procedure instead of defaulting to whoever picks up the ticket.</Callout>

Once an automation is migrated to the client's own platform or account, it
gets deleted from GPC's automation platforms, so nobody mistakenly edits or
monitors an inactive copy instead of the live one.

## Production incident response

An **incident** is an unplanned disruption or degradation to something that
was live and working: not a pre-launch bug caught in QA, not a feature
request, not a one-off cosmetic issue with no live-data impact. Severity ties
to the same urgency framework as client communication, so classification
stays consistent across teams.

| Severity | Who's notified, and when | Client communication |
|---|---|---|
| Sev-1 | PM and Process Consultant, immediately, in parallel with triage starting | Proactive, before root cause is known: acknowledge within 2 business hours |
| Sev-2 | PM same business day; PC only if the fix slips past standard turnaround or a scope issue comes up | Acknowledge within 24-48 business hours once client-visible impact is confirmed |
| Sev-3 | No separate notification; surfaces through normal error monitoring | None unless the client raises it first |

The automation's owner takes triage first. For Sev-1, whoever is available
takes triage immediately to stop further impact; waiting for the exact owner
isn't an option, and the owner takes over the permanent fix once looped in.
The PM is notified any time an incident involves credentials or access.

<Figure id="eng-clickup-internal-resolution" caption="A ClickUp ticket's Internal Resolution field set to one of the five classifications" spec="ClickUp, an incident or support ticket, Internal Resolution field visible" />

**Containment** stops further impact (pausing an automation, disabling an
integration, a temporary workaround) without needing the root cause known yet,
and it doesn't close the incident. **Permanent repair** is the root-cause fix,
via Root Cause Analysis below. Any live-environment change during containment
or repair still follows Making Changes to Live Processes, so the fix doesn't
create a second incident.

If a known-good previous version exists and either the root cause isn't clear
yet or fixing forward risks more damage, roll back first, then diagnose from a
stable state. On Sev-1, that rollback decision is made jointly, the engineer
working the incident together with a senior automation engineer or the
Process Consultant, never solo.

Before a fix counts as done, validate that the specific failure scenario now
completes correctly, adjacent or downstream steps weren't broken, and it holds
against real (or safely simulated) data. No fix is marked resolved on "it
should work now."

An incident closes only when the permanent fix (not just containment) is live
and validated, the Internal Resolution field is classified, findings and
resolution are documented, and for Sev-1/Sev-2 the client has been told it's
resolved. Sev-1 always gets the full Root Cause Analysis writeup; Sev-2 gets it
when the cause isn't obvious or the failure has repeated; Sev-3 is classified
without a full narrative unless a pattern across several Sev-3s points to
something bigger.

## Root cause analysis

On any error ticket tied to a technical build:

1. **Identify the root cause** before attempting a fix: the mechanism of
   failure, not just the symptom reported.
2. **Investigate across every platform** the build touches, review the error
   logs, and trace the issue to the specific step or integration point.
3. **Fix the root cause.** A patch that only suppresses the symptom isn't a
   resolution.
4. **Classify it** in the Internal Resolution field:

   | Classification | Meaning |
   |---|---|
   | Edge Case | Outside the build's original scope or assumptions, not accounted for at design |
   | Engineering Error | A GPC mistake in configuration, logic, or setup |
   | User Error | The build works as designed; the client or user operated it incorrectly |
   | Platform Bug | The failure originates in the third-party platform, not GPC's build |
   | Other | Doesn't fit the above; the ticket notes explain the real cause |

5. **Document findings and resolution** in ClickUp in enough detail that
   another engineer could understand what happened and how it was fixed
   without a follow-up question.

<Callout>Escalate to the PM and Process Consultant the moment ambiguity or risk is identified, not after extended troubleshooting: when the root cause is unclear, the fix carries risk to other parts of the build, or it points to a systemic problem.</Callout>

## Closing support tickets

Every client Slack channel has a support form that creates a Feature Request
or Error Report ticket. Before marking anything Complete/Closed, both
**Findings** and **Resolution** must be filled in; the ticket automation
reverts it to In Progress if either is empty.

**Findings** documents what you reviewed and observed, and whether it's a
real issue or a change request, even when nothing was found ("no issue found,
this is a new request" is a valid Finding, not an empty one). **Resolution**
states exactly what was done or changed, where, how it was validated, or, if
unresolved, what's pending and who owns the next step. Use the same five
Internal Resolution categories as Root Cause Analysis above.

<Callout>Findings and Resolution are sent to the client directly in Slack. Write them for the customer to read, not as internal shorthand.</Callout>

Closing checklist, every time: request type correct, Findings complete (even
if "nothing found"), Resolution complete (even if "no action needed"),
client-ready language, and Internal Resolution classified.
