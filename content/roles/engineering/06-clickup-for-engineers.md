# ClickUp for Engineers

## Automations in ClickUp

Native IF → THEN logic, no third-party tool needed unless the integration is
more complex than ClickUp itself supports.

| Component | What it means |
|---|---|
| Trigger | What starts the automation (a status change, a form submitted) |
| Condition (optional) | An extra filter, e.g. only if priority is High |
| Action | What happens next (assign, comment, change status, apply a template) |

To build one: open the List, Folder, or Space, click the Automations icon,
**+ Add Automation**, pick a template or build custom, set the trigger,
optional condition, and action, then Create.

<Callout>Name every automation for what it does: trigger, affected task type, purpose (e.g. "New Task → Auto Assign to PM"), so anyone can tell what it does without opening it.</Callout>

Automations can't send reminders directly; pair a "post a comment" nudge with
due dates and notifications, or use a recurring task instead. Test on a
sample task before trusting it, clean up unused automations, and avoid two
automations editing the same task in a loop.

## Evaluating internal automations against ClickUp's limits

ClickUp caps automation runs per month by plan. Prioritize automations that
save the most time or cut the most manual error; combine triggers and
actions into one automation instead of several where possible; use
conditional logic instead of near-duplicate automations; use a specific
trigger, never a broad one like "when any task changes"; test at small scale
before rolling out; monitor usage in workspace settings so you don't hit the
limit unexpectedly; deactivate automations no longer needed; use a manual
workflow instead of an automation for low-frequency tasks; document every
automation's purpose and trigger. Reach for Zapier or Make only once
ClickUp's own limit is truly the blocker.

## Soft launch guidelines (Fulfilment Space)

Simulate a proposed new fulfilment system so the partner sees it working
before full rollout: define the objective and measurable success criteria;
build the soft-launch space separately from live operations; pick a small,
representative test group (one account with 2-3 sub-accounts that fits the
company's usual use case); communicate the timeline and how feedback will be
collected; assign a point of contact and monitor through ClickUp reporting;
gather feedback in-task and in a closing session; compare results against
the success criteria; refine and retest internally; then plan full rollout
with training.

## Color guidelines for ClickUp statuses

| Status | Color | Why |
|---|---|---|
| Not Started / To Do | Gray | Neutral, no action needed yet |
| In Progress | Blue | Calm, signals active work |
| Review / Approval | Yellow or Orange | Transitional, needs feedback |
| Completed / Done | Green | Universal signal of success |
| Blocked | Red | Urgent, needs attention (On Hold uses purple when it's a separate status) |
| Backlog | Black | Not critical, can wait |

<Callout>Avoid similar shades for different statuses, and keep the palette consistent across every project.</Callout>

## Migration steps for ClickUp

Define objectives and scope, then audit existing data (flag what's redundant
or outdated, map the hierarchy). Map fields from the old system to ClickUp's,
deciding how unsupported fields translate. Choose a method: manual for a
small project, an automated tool (Zapier, Make, ClickUp's import) for a
larger one, custom scripts or the API for something highly customized.
Prepare the team with the timeline and training. Test with a small-scale
migration first. Execute in phases during low-activity periods, monitoring
data integrity. After migrating, verify every workflow, automation, and
integration works, then set a maintenance plan from the team's feedback.

## Training a client team on ClickUp

Engineers sometimes run this flow directly with a partner's team as part of
onboarding them onto ClickUp. Open with the pain, not the features: ask where
their tasks live today and what falls through the cracks, then land the
point that ClickUp is the one place work becomes visible and accountable.

| Section | Covers |
|---|---|
| Frame the session | Where tasks live today, what falls through the cracks |
| The mental model | Workspace → Space → Folder → List → Task → Subtask, mapped to their actual work |
| The task, up close | Assignee, status, due date, custom fields, followers, comments |
| Views | List, Board, Calendar, Gantt: same data, different lens |
| Understanding checkpoint | A teach-back before customization: can they explain List vs. View? |
| Making it theirs | Home/My Work, saved filters, Me Mode, favorites, notification tuning |
| Make it stick | Two commitments: update your status when it changes, and if it's a task, it goes in ClickUp |

<Callout>"If it's not in ClickUp, it doesn't exist." Status is the source of truth for a task's progress, not a Slack thread or someone's memory.</Callout>
