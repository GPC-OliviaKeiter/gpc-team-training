# Handover and Documentation

## Project handover between engineers

Triggers: a role transition or reassignment, coverage for leave or capacity
balancing, or a phase completing (build moving to optimization or support).

| Role | Responsibilities |
|---|---|
| Outgoing Engineer | Prepares full documentation, walkthrough, and access handover; makes sure system logic, dependencies, and outstanding issues are clear |
| Incoming Engineer | Reviews everything, verifies understanding, flags gaps or unclear logic immediately |
| Project Manager | Oversees completion, validates the checklist, ensures continuity for partner deliverables |

1. **Preparation (outgoing engineer):** automation notes (known quirks, error
   points, dependencies like Clay, Airtable, Make, ClickUp links), an updated
   data-flow map, a pending-work list with task links, and a short client
   context note.
2. **Live handover session:** a 30-minute call covering automations,
   connections, and API keys; known issues or limits; current client
   priorities. Recorded in Fathom, posted to the client's ClickUp channel.
3. **Verification (incoming engineer):** review the materials, confirm access
   to platforms, tasks, and the client channel, and test one or two workflows
   to confirm actual understanding.
4. **Approval and close-out (PM):** validate the checklist is complete,
   escalate any missing documentation or unclear logic back to the outgoing
   engineer.

<Callout>Skipping the live handover call is only allowed with PM approval, and only once the incoming engineer confirms full clarity after reviewing the materials alone.</Callout>

## Client SOP and automation documentation templates

The Client SOP Template's sections, in order: Objective, Pre-requisite,
Recording, Procedure, Checklist, Cadence, Definition of Done. Turn a Loom
transcript or a process document into that shape with a prompt like: "Act as
the person who executes [SOP title]. Given this [Loom transcript / process
document], turn it into a standard operating procedure with objective,
pre-requisite, procedure, checklist, cadence, and definition of done." An
internal (non-client) SOP uses the same idea, shaped instead as purpose,
scope, roles and responsibilities, procedure, and FAQs.

Client Automation Documentation comes in two shapes:

| Shape | Structure |
|---|---|
| Internal | A table: Name, Trigger, Action, Purpose, one row per automation |
| External | Purpose and Logic Flow Summary, then a Module Breakdown table: Sequence, Module, Purpose, Configuration, Key Output |

## How to create a prompt

An 8-phase iterative technique for drafting and refining a prompt before using
it for real, each phase feeding the next:

| Phase | Objective |
|---|---|
| 1. Contextual Scaffolding | Establish the task's stakes and the components a strong prompt needs |
| 2. System Prompt Engineering | Define the AI's role, tone, and explicit instructions |
| 3. Iterative Prompt Drafting | Draft the task prompt, then critique and rewrite it |
| 4. Personalization | Tailor it for a novice, an expert, and a high-pressure case, then merge the best of each |
| 5. Recursive Reflection | Challenge the prompt's own assumptions and phrasing directly |
| 6. Role-Play Testing | Simulate the AI's response and a user's feedback, then revise |
| 7. Competitive Refinement | Compare two candidate versions and pick the stronger one |
| 8. Finalize | Output only the final, refined prompt |

<Callout>Owner: Augusto Gouveia. See the live page in ClickUp for the exact prompt text at each phase.</Callout>

## Creating a Value Calculator

1. **Duplicate** Value Calculator Template v5.0 (without duplicate records or
   comments) and rename it "Value Calculator, [Partner Name]."
2. **Configure the automation and webhook:** rename nodes clearly, create a
   POST webhook with `platform`, `partner`, and `automation_name` parameters
   (lowercase, underscored), and insert the webhook URL into the automation.
3. **Test the webhook** with a test record; verify it in the automation log.
4. **Validate linking:** run a record manually, confirm it links to the
   Summary Table automatically.
5. **Publish and track:** turn the automation on (after the required weekly
   test run), publish with the Value Calculator linked, track time in
   ClickUp, set task status accordingly (for example "Waiting on Client" if
   fields are missing), and notify stakeholders.

<Callout>Automations must run once in test mode before they can be turned on. This is a standing weekly requirement, not a one-time check.</Callout>

## Adding an automation to the Value Calculator

Every completed automation gets connected so a successful run logs and rolls
up automatically.

**In Airtable:** add a row to the Summary table, with the automation name
matching the platform's scenario name exactly; add a Slack notification
action to `#7-automation-runs` for new logged runs, formatted like a previous
client's base; turn the Airtable automation on.

**In the automation platform:** add a Create Record module at the end of the
tested automation; set its Automation Name field to match the scenario name
exactly (this is what links the log back to the Summary row); point it at
the correct client's Value Calculator base; test the action and confirm it
logs; link the automation to the Summary table's field.

<Callout>The automation name has to match exactly between the platform's Create Record module and the Summary table row, or the log never links back to the correct row.</Callout>

<Figure id="eng-value-calculator-summary" caption="A client's Value Calculator Summary table with a logged automation run" spec="Airtable, Client Value Calculator base, Summary table with the Automation Log linked" />
