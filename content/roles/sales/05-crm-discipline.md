# CRM Discipline

HubSpot is the source of truth for prospect and deal activity. Anyone opening
a contact, company, or deal record should be able to understand the history
without searching Slack, email, or anywhere else.

## The 12 CRM Commandments

| # | Rule |
|---|---|
| 1 | Search before you create, always: email domain → contact → company → deal. Never search by company name alone. |
| 2 | Never guess. Blank is better than wrong. |
| 3 | Amount means total contract value, not the monthly rate ($2,500/month × 6 months = $15,000 Amount, Project Duration 6 months). |
| 4 | Project Budget is the client's stated budget, never our proposed price, unless the client named that number as their budget. |
| 5 | Availability isn't urgency. "Free Thursdays" is scheduling; Timing reflects when the client intends to decide or start. |
| 6 | Authority and Need are append-only: add new information below existing notes with a dated separator, never overwrite. |
| 7 | Deal stage reflects the client's progress, not our internal effort or follow-up. |
| 8 | Never move a deal backward. Document what changed and update the next step, or close it Closed Lost if it's no longer viable. |
| 9 | Every new engagement gets a new deal, even when the company already has an open or closed one. |
| 10 | Deal Source names the specific person or channel (Ruben Generated, Pete Generated, Yonathan Generated, Grant Network), never a generic bucket. |
| 11 | Search carefully before creating a Ruben or Yonathan referral deal; the automated Fathom sync may have already created it. |
| 12 | Internal-only calls (no prospect on the line) don't update deal fields. Only prospect-confirmed information does. |

## Activity and logging standards

Meetings log automatically when your HubSpot calendar integration is connected
and the prospect's email is on the invite: no manual entry needed. Every call,
inbound or outbound, goes through HubSpot's calling tool or gets logged there
immediately after, with outcome, duration, and notes attached to the right
contact, company, and deal.

Internal discussion about a specific record happens in a HubSpot Note on that
record, with an @mention for whoever needs to see it, not in Slack or email
where it disappears from the record's own history.

<Callout>If it's not in HubSpot, it didn't happen. Before moving on from any customer interaction: the meeting is logged, the call is logged, notes are on the record, and another team member could understand what happened from HubSpot alone.</Callout>

<Figure id="sales-hubspot-notes-mention" caption="A HubSpot Note on a deal record with a teammate @mentioned" spec="HubSpot, an open deal, Notes tab with an @mention visible" />
