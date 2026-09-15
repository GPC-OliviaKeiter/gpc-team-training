# 07. Follow-up Interviews (Technical & Opportunity Deep-Dives)

Source: three 9/11/2026 Rush Enterprises calls held after module 01's discovery interviews had
already run: Jason Fransella (CTO) on platform governance and rollout, Daniel Decker (IT) on
system architecture and the IT change process, and Mike Eppes (Aftermarket) on opportunity
scoping. Citation tags **[jason-followup]**, **[daniel-followup]**, **[mike-followup]** =
`transcripts/2026-09-11-rush/interview-followup-*.md`. Other tags as defined in module 00.

This module rests on three observed calls, all with one client (Rush) on one day. Treat the
three-variant shape below as a first sketch; the next client's follow-up round is the test of
whether these sub-shapes generalize or are simply how Rush's second round happened to run.

## What a follow-up interview is for

Grant names the format shift out loud, on the call, rather than leaving it implicit: "This call
is a little bit more, let's say, unstructured... than the last one where we had very specific
questions and kind of that pro dreamer, pro complainer perspective, because we're really trying
to understand how does IT change work in the past." **[daniel-followup 00:00]** Module 01's
discovery interviews cast a wide net across many stakeholders to surface pain points and
archetypes. A follow-up returns to one already-interviewed stakeholder (or a thread that stayed
open) to go deep: governance detail, real system architecture, or the concrete math behind an
opportunity — the kind of depth that doesn't fit a first-contact panel interview.

## Three variants observed, one family

- **Governance and rollout negotiation** (Jason) — get to yes on specific technical asks (a
  Service Connect skill, an MCP gateway) with the named IT leader who owns the risk decision.
  Closest in shape to module 02's GO calls: tightly scoped, agenda-driven, closes with concrete
  next steps.
- **Architecture deep dive** (Daniel) — reverse-engineer how a real system actually works,
  live, on screen, rather than from a description.
- **Opportunity deep dive** (Mike) — turn a stated pain point into a short list of concrete,
  presentable AI project ideas with an approval path attached.

All three share a register the discovery interviews don't: technical vocabulary used
unapologetically (MCP, WAF, supersession, three-way match), and Grant asking a client
stakeholder to teach him a system rather than asking the client to describe their pain in their
own words.

## Patterns worth copying

- **Name the format shift out loud, so the stakeholder recalibrates what kind of conversation
  this is.** [daniel-followup 00:00]
- **Ask "what would you need to see" instead of presenting a finished proposal.** Grant opened
  the Jason call with "if I were to come to you with a proposal... what do you need to see,"
  surfacing the actual approval gate before building anything against a guessed one.
  [jason-followup 02:00]
- **User accounts, not service accounts — a governance principle two stakeholders volunteered
  independently, unprompted, in separate calls.** "No, user accounts." / "I'd prefer to... So I
  don't want to give global access to applications that we have role based access to."
  [jason-followup 05:06-05:07] "It needs to happen in the context of the user and that user needs
  to not be a generic service account." [daniel-followup 01:42]
- **Prove data-narrowing with a real example, not a stated principle.** Jason didn't just say
  "least privilege" — he described EllaVox being denied Entra access to employee hire-date data
  it never needed, forcing a purpose-built API instead. [jason-followup 10:16]
- **Trade a hypothesis for a live screen share the moment the conversation gets abstract.** When
  Grant found himself "caught between a rock and a hard place" describing a part-relationship
  problem in words, he asked to "get visual," and Daniel pulled up the real API responses in
  devtools on the spot. [daniel-followup 30:57]
- **Map the approval chain by name, not by department, every time write-access or budget comes
  up.** Mike's answer to "how does this get to the rest of the company" was a named sequence:
  Jody → Robert Macklemore → Jason (risk) → SAP/AppDev (resource prioritization) — not "IT will
  review it." [mike-followup 15:43]
- **Reuse the ROI method the client already trusts, instead of inventing a new one.** Mike
  described building his last ROI case in Claude itself — assumptions in, high/low/most-likely
  out, one to two pages, no "big long charter process." That's the format to hand back for the
  next pitch, not a GPC-invented template. [mike-followup 31:52]
- **Name the "no regrets" pilot argument when perfect information isn't available.** Mike's
  framing for why Rush greenlit the EllaVox phone agent without knowing who'd still be the best
  vendor in a year: switching cost is small relative to the opportunity, so run the 12-month
  pilot and decide again later. [mike-followup 21:03]
- **Identify the one skeptic by name and their specific failure pattern, not a generic "expect
  resistance."** Mike named Victor specifically: "if they can't see the path to the perfect
  solution, then there's no solution" — and the counter-move (start with the 80% case: "we have
  800 codes identified to training... good enough start"). [mike-followup 34:17]
- **Turn the call itself into a live test rather than just discussing the plan.** Grant had Jason
  create and upload a Claude skill mid-call, which surfaced a real gap — no upload notification —
  that neither would have found by talking about the process in the abstract. [jason-followup
  27:35]
- **Close every call with concrete homework, not just a thank-you.** Daniel: API documentation to
  send over. [daniel-followup 56:42] Mike: draft project proposals to email for review before
  the internal presentation. [mike-followup 1:13:32]

## What never happens in these calls

No SAP write-access work is discussed as immediately actionable — it is explicitly deferred until
the SAP freeze lifts, no earlier than December 2026 per Mike's own estimate. **[mike-followup
17:56]** No pricing or contract terms with GPC are discussed. No demo is actually shipped to a
live Rush system on any of the three calls — the closest is the Jason call's live skill-upload
test, which surfaced a gap rather than completing a working deployment.

## Relationship to other modules

- Follow-up interviews assume module 01's discovery interviews already ran; Grant names the
  contrast on the call itself, so this module is defined against module 01 rather than
  standalone. **[daniel-followup 00:00]**
- The governance principles here (user impersonation, least privilege, read-before-write) are the
  same thread as module 00's four-rung technology ladder and value-math framing, now applied to a
  specific client's specific systems rather than stated as philosophy.
- Mike's three named opportunities (parts inventory planning, service scheduling, no-move parts)
  are the direct input to whatever proposal document Grant and Olivia draft next per his own
  closing next step — worth checking for a follow-on artifact once one exists, and diffing this
  module against it.
- The Jason call's governance stance (user accounts, least privilege, read-before-write) is the
  same policy Rush's Claude Enterprise rollout will be judged against; keep this module in sync
  with whatever the actual Rush pilot fence ends up being once decided.

## Sourcing status

Three observed calls, one client (Rush), one day (9/11/2026). No other client's follow-up round
has been observed yet. The three sub-shapes (governance negotiation, architecture deep dive,
opportunity deep dive) are a first sketch — the next follow-up round, with Rush or another
client, is the test of whether they hold as a general pattern or are specific to how Rush's
second round happened to be scheduled.
