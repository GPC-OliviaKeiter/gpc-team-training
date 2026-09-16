# Running the Engagement

Once a partner is Active, three recurring mechanisms carry the week: the
weekly call, the Monday written update, and, for a Workflow Assessment, the
stakeholder interviews that produce the assessment itself.

## Running weekly calls

A consistent, time-boxed structure for the recurring partner call: it
surfaces engineering progress, catches blockers and adoption gaps early,
recognizes wins, and closes with clear accountability. Total length is
typically 45 to 60 minutes, depending on how much time Client Topics and
Discovery need.

| Segment | Time | Focus |
|---|---|---|
| Engineer updates | 10 min | What shipped, what's in progress, what's queued next |
| Blockers and adoption gaps | 15 min, the main focus | What's not being used and why, what's blocking implementation, what needs your attention |
| Wins and adoption check | 5 min | What worked, what's getting team traction |
| Client topics | 5 to 10 min | Only if flagged at the start |
| Discovery and expansion | 5 to 10 min | Workflow changes, friction points, upsell signals (see Managing the Relationship) |
| Next steps and commitments | 5 min | Action items for GPC and the client, confirm the next meeting |

<Callout>Log every action item in ClickUp immediately after the call, split by owner (GPC vs. client).</Callout>

## Weekly client updates (every Monday)

Regular updates keep clients informed and confident even in a slow week.

1. Once the Project Manager posts the weekly report to the partner's ClickUp
   channel, review and approve it. Verify technical accuracy and blockers
   with the engineer first.
2. Post it to the partner's chosen channel (Slack, email, or Teams).

**Tone:** confidence over apology. Even a quiet week gets a brief note. Tag
the full channel if the client's team is five people or fewer; tag only the
responsible parties above that.

<Callout>Share external blockers only, never internal capacity issues or team politics, and strip any internal ClickUp links before sending.</Callout>

Template shape: Completed Last Week / Blocked (external only) / Pending
Tasks / Action Needed. Detail a task only if it's relevant to the client.

## Conducting stakeholder interviews (Workflow Assessment)

| Tier | Interviews |
|---|---|
| Silver | 5, one hour each |
| Gold | 10, one hour each |

<Figure id="pc-interview-scheduling-board" caption="A tier's interview slate, scheduled and tracked against its total count" spec="ClickUp, the partner's Workflow Assessment list, interview tracking view" />

1. **Align on stakeholders during kickoff.** Confirm the tier, then name
   specific stakeholders with the client, spread across the departments most
   affected, not just whoever's most available. Capture name, role, and
   contact info.
2. **Schedule.** Book each 1-hour slot with a short description of the
   interview's purpose on the invite. Track progress against the tier's
   total count.
3. **Run each interview to this shape**, adjusting pacing to the hour but
   keeping the sequence:

   | Phase | Time | Goal |
   |---|---|---|
   | Set the agenda | 2 to 3 min | State time available and the goal: learn about them, their role, and repetitive or manual tasks that could be automated |
   | Background | 3 to 5 min | Tenure, team, who they report to, how their work fits the department |
   | Map the recurring work | 10 to 15 min | The full list of daily, weekly, monthly tasks, pushed past the first answer |
   | Walk through it visually, the main focus | 15 to 20 min | Screen share an actual report, spreadsheet, or tool: where each number comes from, how many systems, manual vs. automatic, where errors slip in |
   | Capture the wish list | 5 to 10 min | Tedious or repetitive tasks they'd want help with, pushed beyond what's already surfaced |
   | Answer questions | as needed | Brief tool or process questions are fine; note anything that threatens the remaining time |
   | Close | 2 to 3 min | Recap that this is part of a broader round of conversations; recommendations come back after synthesis |

4. **File the recording immediately** into the designated ClickUp channel and
   tag findings.
5. **Repeat through the full tier count.** Flag an unresponsive or
   repeatedly rescheduling stakeholder to the team early rather than letting
   it quietly block the timeline.

Findings synthesize against the Workflow Assessment Checklist to produce the
final recommendations. Engineering's build-requirements process uses these
findings as its primary input.
