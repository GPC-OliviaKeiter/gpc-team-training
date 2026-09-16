# The PM Cadence

| Cadence | What the PM does |
|---|---|
| Daily | Check ClickUp Chat and Slack/email for client requests; check Partner Call Updates after partner meetings; check Inbox and Home; scan meeting transcripts for scope creep; check every team member's capacity and reassign if a deadline is at risk; create CAR tasks from partner meetings or requests with a time estimate, assignee, and due date; keep deliverables current; follow up overdue tasks; watch the three silent killers: overdue tasks, no assignee, no due date. |
| Weekly | Remind the team to send pending-requirement follow-ups; align with team members on progress as needed; run onboarding or offboarding as needed; confirm next week's tasks are assigned; check engineers' logged time and give feedback where hours run short; post the partner report, send the weekly update, and run the client rundown meeting. |
| Monthly | Send the monthly report; in week 3, check SOWs nearing completion (everything done? anything out of scope?); hold the Project Retro Review and analyze offboarding responses for improvement; compare time estimated vs. tracked; keep the Airtable PTO tracker accurate. |
| Adhoc | Update SOPs; maintain Google Drive organization; train new team members on the workspace; create email signatures and birthday/anniversary posters; schedule meetings for Grant; run the quarterly ClickUp workspace review. |

## Setting up sprints in ClickUp

In the GPC Team Management space, each team member has their own folder. Add
a new sprint subfolder named "[Name] - Sprint," configure the sprint
settings, and enable all sprint automations. In the Partner Fulfillment
space, add one automation per new team member: trigger "assignee added"
(that person) → action "add to current sprint" (their sprint folder).

<Callout>ClickUp automatically rolls over unfinished tasks into the next sprint. Nobody moves them by hand.</Callout>

## Team member bandwidth tracking

Check weekly during sprint check-ins, before committing to a new timeline or
scope, and after any major scope or availability change. Review the Workload
view in the Partner Fulfillment space: active tasks and estimated hours, due
dates against weekly availability, stacked high-effort tasks, anticipated
time off. For each person, ask: more than 5-7 hours of task work per working
day?

Red flags: one person owning 75%+ of a week's deliverables, more than 3
high-effort tasks due the same week, or any task due with no clear owner.
Document these under "Bandwidth Risks" in the weekly client report.

If overcapacity shows up: reassign tasks where possible, propose shifting a
non-critical deadline, or escalate to the Process Consultant if a resource
trade-off is needed. Update the team through the ClickUp channel with the
adjusted timeline and why, flag any impacted deliverable early with
mitigation options, and meet 1:1 if a handover is needed.

<Callout>Track total hours per partner per team member every week, and watch for context-switching overload, not just raw hours.</Callout>

## Weekly client updates, every Monday

Pull the time report from the partner folder overview, review recent
meetings and deliverables, update statuses, due dates, and assignees, and
confirm milestones are accurate. Post to the partner's ClickUp channel,
tagging the Operations Manager and the Process Consultant or Senior AE on
the account.

| Section | Covers |
|---|---|
| Time Consumption | Monthly cap, time consumed last week, time consumed this month, remaining time |
| Resolved Tasks Last Week | What closed |
| Pending Tasks | What's next |
| On Hold | Paused, and why |
| Externally Blocked | Blocked on the client or an outside dependency |
| Internal Risks or Reminders | Anything needing attention |
| Action Needed From Team | Who owes what |
| Wins | What went well |

<Callout>Send an update every week, even a quiet one. Keep every section header and write "None" rather than dropping it.</Callout>

<Figure id="pm-weekly-client-update" caption="A posted weekly client update in a partner's ClickUp channel" spec="ClickUp, a partner channel, the weekly update message with all sections visible" />

## Monthly executive wrap-up, every 1st of the month

Find the recurring "Monthly Executive Wrap Up Report" task for each partner
in Operations Management > Operation Tasks (one instance per partner,
recurring on the 1st). Sort the month's tasks into Completed, In Progress,
Externally Blocked / On Hold, and To Do / Backlog, keeping every header even
when a bucket is empty ("None," not a dropped section). Pull time consumed
against any monthly cap or Growth Insurance allotment and note remaining
hours or overage. Flag anything needing a decision with a warning line and
anything urgent or contract-related (approaching end of contract, churn
risk) with its own line. Post to the partner's ClickUp Chat channel, never
as a task comment, tagging the stakeholders actually working the account,
then close the recurring task once posted.

<Callout>Post every month, even a quiet one. A risk goes on its own flagged line, never buried inside a task bullet.</Callout>
