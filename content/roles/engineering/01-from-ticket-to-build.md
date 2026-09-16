# From Ticket to Build

## Client communication and turnaround

| Rule | Standard |
|---|---|
| What counts as urgent | Revenue-threatening only. A broken preference field, a cosmetic change, or a one-off mistake is not urgent. |
| No "ASAP" | Always give a concrete timeframe instead. |
| Channels | Main client Slack channel or email only. Direct messages are prohibited; a team member who gets DM'd doesn't reply there. |
| Standard timeframes | 2-48 hour responses; 2-10 day turnarounds depending on size. |
| Post-deployment support | Time-boxed, 2-3 weeks, enforced. |
| Feature requests | Go into the Feature Request system, not handled ad hoc on a call. |

<Callout>If a client DMs a team member, that person reports it in the internal ClickUp channel instead of replying there. If the pattern continues, the PM logs examples (messages, timestamps) and escalates to Grant with a recommendation.</Callout>

Bug vs. feature: a **bug** is the system not behaving as previously agreed or
documented; a **feature** is something new or significantly different from
what was scoped. Default to feature request when it's unclear, and flag it
for internal discussion rather than deciding solo.

If a project stalls on client inaction (no testing, no feedback, no
engagement), schedule a dedicated testing or review session to force a
decision. If delays continue, the applicable SOW clauses on billing for
stalled timelines and extended support come into play.

## Scoping time estimates

| Role | Responsibilities |
|---|---|
| Senior AE / Project Manager | Sets every estimate: complexity, technical risk, and the assigned executor's skill level, not their own. Applies the buffer. Reviews estimated vs. actual variance. |
| Automation Engineer | Executes within the estimate where possible, flags blockers early, tracks actual time in ClickUp, gives feedback when estimates keep missing. |
| Project Manager | Uses the estimate to set client expectations and manage scope discussions when hours are exceeded. |

<Callout>The executor never sets their own estimate. Estimating for how fast you personally can do it, instead of a realistic delivery scenario, is the thing this SOP exists to prevent.</Callout>

The standard buffer ("the bloating rule") is a 0.25 multiplier: a 1-hour task
estimates at about 1.25 hours, a 2-hour task at about 2.5. Controlled padding
against unknowns, not arbitrary inflation. Round every estimate to a 15-minute
increment (minimum 15 minutes); no 22-minute tasks. Target accuracy is 80-90%
of tasks landing inside their scoped estimate; consistent overruns become a
tracked improvement area.

## Technical design and pre-build planning

Before any build work starts:

1. **Process Consultant** conducts stakeholder interviews (pain points, current
   workflow, platforms involved) and shares findings with Engineering.
2. **Engineer** identifies build requirements: whether a dedicated automation
   account is needed, which platforms are used.
3. **Engineer** assesses technical considerations: automations involved,
   timeline, time estimate (per Scoping Time Estimates above).
4. **Engineer** documents the technical design plan in writing, in the
   project's ClickUp doc or task.
5. **Process Consultant** reviews the plan against what stakeholders said and
   what was sold.
6. **Engineer** incorporates feedback; repeat steps 5-6 until no feedback
   remains outstanding.
7. **Process Consultant** presents the finalized plan to the client and gets
   explicit approval: a reply, a sign-off, or an acknowledged Client
   Announcement. Silence is not approval.

<Callout>A plan that only exists informally can't be reviewed or approved. Get it in writing before asking for review.</Callout>

<Figure id="eng-technical-design-doc" caption="A finalized technical design plan in a project's ClickUp doc" spec="ClickUp, a project doc, the technical design plan with sign-off visible" />

## Preparing partner call briefs

A Prep Meeting Brief subtask is created automatically whenever an External
Meeting task is created for a partner. The assigned Senior Automation Engineer
completes it by posting a Partner Call Update to the internal ClickUp channel
at least 24 hours before the call:

> [Date] | [Partner Name] Meeting Brief
> CC: [relevant stakeholders]
> **What has been done since the last call**: [deliverable or milestone], link
> **What we're doing on the call** (Demo / Alignment / Training / Delivery):
> [topics, who's leading]

Every section needs specific detail ("updated the onboarding flow's error
handling," not "updated templates"), a direct link to the resource, the
reasoning behind a change, not just what changed, and a named owner for next
steps.

<Callout>No updates for a section this cycle? Write "No updates this cycle" instead of deleting it, so stakeholders know it wasn't missed by accident.</Callout>
