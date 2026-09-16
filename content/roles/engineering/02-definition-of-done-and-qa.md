# Definition of Done and QA

## The Definition of Done

A build isn't Done until it clears every core criterion, plus whichever
additional criteria its complexity requires.

| Core criterion (every build) | What it means |
|---|---|
| CAR requirements met | The build satisfies every requirement in the task's CAR and runs end to end without errors, workarounds, or manual patches. Edge cases identified during scoping are handled, not just the happy path. |
| Output is validated and understandable | Anyone reviewing it, not only the builder, can confirm the output is correct and trace the logic without a walkthrough. Naming conventions followed, logic documented. |
| Senior QA passed (complex builds) | Multi-system integrations, multi-branch conditional logic, or anything touching production data gets reviewed and approved by a senior automation engineer or process consultant first. |
| Client satisfaction confirmed | Explicit: a reply, a sign-off, or an acknowledged Client Announcement. Silence is not approval. |

| Additional criterion | Applies when |
|---|---|
| Documentation is complete | Reflects the final state of the build, not the state at kickoff |
| No known critical or blocking bugs | Minor, non-blocking issues can be logged separately if disclosed to the client |
| Access and permissions correctly configured | Every account, integration, and credential is under correct ownership, client retains access to their own systems |
| Deployed to the live environment | Not a sandbox or test instance |
| Monitoring and ownership assigned | Post-launch monitoring and escalation responsibility is defined |
| Rollback path exists | Complex or high-risk builds only |

<Callout>The two gates are independent. A build that works "in principle" isn't Done without client sign-off. A build with client sign-off isn't Done without required QA. Neither substitutes for the other.</Callout>

## Automation QA

Peer QA before anything launches live.

| Step | Owner | Deadline |
|---|---|---|
| Pre-QA preparation | Junior AE | Within 24h of finishing development |
| Peer QA review | Senior AE | Within 48h of submission |
| Feedback resolution | Developer AE | Within 24h of receiving the QA report |
| Final sign-off | Senior AE, then PM approves deployment | Before deployment |

Pre-QA preparation means: an Automation Overview (purpose, scope, expected
outcome), a logic flow diagram or explanation, 3-5 test cases with expected
outcomes, dependencies (external systems, APIs, triggers), error handling
documented, an internal staging test run with all cases passing, and a QA
checklist covering trigger accuracy, data mapping, error handling, and
performance.

<Callout>Peer QA is mandatory. A Junior AE never QAs their own automation, and a critical issue the Senior AE can't resolve immediately blocks launch until it's fixed.</Callout>

## Naming convention for automations

Format: **[UNIQUE IDENTIFIER]-[NUMBER]**, e.g. `SALES-01`. The identifier is
the department, team, or process in caps: SALES, MKTG, INV (invoicing),
INTERNAL, ONBOARDING, CS (customer support), HR.

| Process shape | Format | Example |
|---|---|---|
| Simple (2-3 steps) | [Verb] [Trigger App] [Item] to [Action App] | Send Calendly Booking to Notion |
| Complex | [Verb] [Trigger App] [Item] | Onboard Stripe New Customers |
| Complex, scheduled | [Schedule Cadence] [Item] [Verb] [Action App] | Monthly Reminder to CFOs, Close Books in Keeper |

## Making changes to live processes

Applies whenever you're testing in a live or semi-live environment, changing
scripts/logic/triggers/databases, running a test that could create or block
real operational data, working alongside someone else on the same system, or
touching something a client is actively relying on that day.

**Before testing:** check what's running today and whether your test could
disrupt it. If the answer is maybe, yes, or unsure, stop and clarify with the
system designer or AE in charge first. Notify the responsible team member in
the partner's ClickUp channel, naming the system, the time window, and what
you think could be affected. If the test could surface visible errors,
confirm with the Account Strategist that they can tell the client to ignore
them. Use a staging environment whenever possible; if you must test in
production, say so explicitly and confirm the window is safe first.

**During testing:** announce the start in the partner's ClickUp channel with
the system and expected impact. If your change affects another engineer's
workflow, state what you changed, why, whether it's temporary or permanent,
and what it might affect. Document every temporary change with a comment, a
timestamp, and your initials.

**After testing:** restore every temporary change (scripts, toggles, field
edits, test data, swapped connections), verify the environment is back to a
production-safe state, and announce completion in the same channel.

<Callout>If you break something, even slightly, report it immediately: "Noticing unexpected behavior after my change. Pausing testing. Investigating now." No hiding, no waiting.</Callout>
