import { ModuleShell } from "@/components/module-shell";
import { Callout } from "@/components/callout";
import { StatTiles } from "@/components/diagram";

export const metadata = { title: "Working with Clients · GPC Team Training" };

const WIKI_CLIENTS = "https://app.clickup.com/9012022270/docs/8cjh2zy-176272/8cjh2zy-109352";
const STANDARDS = "https://app.clickup.com/9012022270/docs/8cjh2zy-176272/8cjh2zy-101332";
const SLACK_SOP = "https://app.clickup.com/9012022270/docs/8cjh2zy-176272/8cjh2zy-101612";

const TEMPLATES = [
  {
    scenario: "A question about something built, or a request to add a feature",
    proactive: null,
    reactive:
      "Good question. I’ll do some research to see whether that would be possible. Are there any additional requirements I should know about to put together a complete answer?",
    note: "If you are not the engineer, say you will pass it to one and that a response is coming in the next day or so, and still ask for the extra requirements. If the answer will take more than 10 minutes to put together, create a task and tag your operations manager.",
  },
  {
    scenario: "An automation error with no financial impact",
    proactive:
      "@stakeholder we noticed an error on {automation name}. This automation {one-sentence definition}. We are investigating and will let you know when we have more details.",
    reactive:
      "Thank you for alerting us about the {automation name} error message. Our automation engineering team will investigate and get you a response in the next 24 hours. This automation {one-sentence definition}.",
    note: "The client is likely frustrated rather than angry. Respond quickly and calmly, and make sure the operations manager can allocate engineering time.",
  },
  {
    scenario: "An automation error with financial impact",
    proactive:
      "@stakeholder we noticed an error on {automation name}. This automation {one-sentence definition}. I understand this can affect your end user experience and the trust they have put in you. I have sent the documentation to the automation engineer online and we will have a response as quickly as possible.",
    reactive:
      "Thank you for alerting us about the {automation name} error message. I understand this can affect your end user experience and compromise the trust they have put in you. It is possible we have hit an edge case that was not previously considered, or there is an issue with the data input. I have sent the documentation to the automation engineer online and we will have a response as quickly as possible.",
    note: "Nobody is happy about a revenue-related automation failing. Use a high degree of empathy in everything that follows these templates.",
  },
];

const DOS = [
  "Lead with calm, confident clarity, whether you are proactive or reactive.",
  "Start every error response with one clear sentence about what the automation does.",
  "Use the 1-3-1 method when something breaks or a requirement was missing.",
  "Create a ClickUp task for anything that takes more than 10 minutes.",
  "Acknowledge the frustration on a financial-impact error before anything else.",
  "Own the redirect when you do not have the answer: let me loop in someone who does.",
  "Keep automation definitions and documentation current. They are your safety net in a fast conversation.",
];

const DONTS = [
  "Send Looms with background noise. Dogs, Slack pings, and fans all read as unprofessional.",
  "Overpromise timelines, especially while troubleshooting.",
  "Use internal slang. Say error message, not Zaps breaking. Say workflow issue, not webhook bug.",
  "Ignore an edge case a client flags. Treat it as signal.",
  "Blame the client's data first. Investigate, and assume good intent.",
  "Make the client follow up. If you said you would get back to them, do.",
  "Delay a hard update. If a mistake happened, say so early and professionally.",
];

export default function Page() {
  return (
    <ModuleShell
      track="overview"
      crumbs={[{ label: "Overview", href: "/" }, { label: "Working with Clients" }]}
      eyebrow="Overview · Module 06"
      title="Working with Clients"
      lede={
        <>
          How to talk to a partner when things are going well, and how to talk to
          them when an automation just broke. Rewritten from{" "}
          <a
            href={WIKI_CLIENTS}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-2"
          >
            Working with Clients
          </a>{" "}
          in the GPC Wiki.
        </>
      }
    >
      <h2>Why the tone matters</h2>
      <p>
        Automations have a direct effect on how a business runs. When they work,
        client teams do less tedious work and switch context less. When one breaks
        or misses an edge case, it lands as an operational threat, because the
        client does not know their automations as intimately as the engineer who
        built them.
      </p>
      <p>
        In the worst case an automation charges an end user incorrectly. In a mild
        case an email blast goes out late. Those two look almost identical to the
        client, because the error message has the same shape either way. Reading the
        difference and communicating it calmly and professionally is GPC&rsquo;s job.
      </p>

      <Callout>
        GPC builds for partners. Partners have end users. Build quality solutions and
        communicate professionally, and trust flows from the end user, to the
        partner, and back to GPC. That is how clients stay for years.
      </Callout>

      <h2>The 1-3-1 method</h2>
      <p>
        Use it any time a problem needs a solution, internally or externally, and
        use it early in the process rather than at the end.
      </p>

      <div className="not-prose my-7 grid grid-cols-1 gap-3 md:grid-cols-3">
        {[
          {
            n: "1",
            head: "problem",
            body: "State it in one or two sentences. Name the automation and what went wrong: an edge case, bad data inputs, whatever it actually was. Do not propose a solution here.",
          },
          {
            n: "3",
            head: "solutions",
            body: "Three ways it could be fixed. Push past the first answer you thought of.",
          },
          {
            n: "1",
            head: "recommendation",
            body: "Weigh the three, think about the edge cases and extra requirements each one creates, and pick the one you recommend and why.",
          },
        ].map((b, i) => (
          <div key={i} className="border border-border bg-card px-5 py-4">
            <div className="font-display text-[40px] leading-none text-gpc-primary-red">
              {b.n}
            </div>
            <div className="mt-1 font-mono text-[11px] tracking-[0.1em] text-muted-foreground uppercase">
              {b.head}
            </div>
            <p className="mt-2.5 text-[13.5px] leading-snug text-muted-foreground">{b.body}</p>
          </div>
        ))}
      </div>

      <Callout>
        Your response answers every question asked of you. If the client raised more
        than one problem, they get more than one set of 1-3-1.
      </Callout>

      <h2>What to say, and when</h2>
      <p>
        A <b>proactive</b> message goes out when GPC catches the error before the
        client mentions it. A <b>reactive</b> one answers a client who has already
        noticed. Proactive is always better.
      </p>

      <div className="not-prose my-7 flex flex-col gap-5">
        {TEMPLATES.map((t) => (
          <div key={t.scenario} className="border border-border bg-card px-5 py-4">
            <h3 className="text-[15.5px] leading-snug font-semibold">{t.scenario}</h3>
            <div className="mt-4 flex flex-col gap-3">
              {t.proactive && (
                <div>
                  <div className="font-mono text-[10px] tracking-[0.1em] text-gpc-secondary-orange uppercase">
                    Proactive
                  </div>
                  <p className="mt-1.5 border-l-2 border-gpc-secondary-orange pl-3 text-[13.5px] leading-relaxed text-muted-foreground italic">
                    {t.proactive}
                  </p>
                </div>
              )}
              <div>
                <div className="font-mono text-[10px] tracking-[0.1em] text-gpc-primary-red uppercase">
                  Reactive
                </div>
                <p className="mt-1.5 border-l-2 border-gpc-primary-red pl-3 text-[13.5px] leading-relaxed text-muted-foreground italic">
                  {t.reactive}
                </p>
              </div>
            </div>
            <p className="mt-3 border-t border-border pt-3 text-[13px] leading-snug text-muted-foreground">
              {t.note}
            </p>
          </div>
        ))}
      </div>

      <Callout>
        Every automation GPC builds gets a one-sentence definition, and that
        sentence is the first line of its documentation. It is what you paste into
        the templates above, which is why writing it at build time is not optional.
        Full standards in{" "}
        <a href={STANDARDS} target="_blank" rel="noreferrer">
          ClickUp
        </a>
        .
      </Callout>

      <h2>Turning a Slack message into a task</h2>
      <p>
        Route any message that contains an ask, any partner feedback needing
        follow-up, and any internal planning or execution step discussed in Slack.
        Write the task in CAR format, then close the loop in the thread:{" "}
        <i>this is noted and @assignee will complete it by [due date]</i>.
      </p>

      <div className="not-prose my-7 overflow-x-auto">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                When you do not know
              </th>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                Do this
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-3 py-2 align-top font-medium">
                The assignee
              </td>
              <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                Tag the Process Consultant or Automation Engineer in a task comment
                and ask who should own it, or ask in the partner ClickUp chat.
                Temporarily assign it to yourself with the note &ldquo;assignee TBD,
                waiting on confirmation.&rdquo;
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 align-top font-medium">
                The due date
              </td>
              <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                Ask in ClickUp chat. If it is not urgent, set a placeholder such as
                next Friday and mark it clearly as a placeholder in the task.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Search the list before creating anything, so the same request does not land
        twice. Drop the task link into the partner ClickUp chat and tag the
        assignee. Full SOP in{" "}
        <a href={SLACK_SOP} target="_blank" rel="noreferrer">
          ClickUp
        </a>
        .
      </p>

      <h2>Do and do not</h2>
      <div className="not-prose my-7 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="border border-border bg-card px-5 py-4">
          <div className="font-mono text-[10.5px] tracking-[0.1em] text-gpc-secondary-orange uppercase">
            Do
          </div>
          <ul className="mt-3 flex flex-col gap-2">
            {DOS.map((d) => (
              <li key={d} className="flex gap-2 text-[13.5px] leading-snug text-muted-foreground">
                <span className="text-gpc-secondary-orange">&#10003;</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-border bg-card px-5 py-4">
          <div className="font-mono text-[10.5px] tracking-[0.1em] text-gpc-primary-red uppercase">
            Do not
          </div>
          <ul className="mt-3 flex flex-col gap-2">
            {DONTS.map((d) => (
              <li key={d} className="flex gap-2 text-[13.5px] leading-snug text-muted-foreground">
                <span className="text-gpc-primary-red">&times;</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2>How often to respond</h2>
      <StatTiles
        tiles={[
          { value: "2×", label: "Inbox checks a day", note: "Email and ClickUp, start and end of shift" },
          { value: "Same shift", label: "Target for a client question", tone: "red" },
          { value: "10 min", label: "Above this, make it a task", note: "And tag your operations manager" },
          { value: "24 hrs", label: "Promised on an error response", note: "So it has to be real" },
        ]}
      />

      <p>
        If you are blocked or unsure, draft the response and send it to your manager
        for review before it goes out. That is how the async habit gets built, and
        how you learn to represent GPC with confidence.
      </p>

      <h2>A scheduling ask worth flagging</h2>
      <p>
        When a client asks to push meetings a week, GPC is happy to start later, and
        the total timeline moves with it. Say that early rather than absorbing it.
        The golden rule applies: treat them the way you would want to be treated if
        the delay were yours.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <a href="/roles/process-consulting/communication-guidelines">
            Communication Guidelines
          </a>{" "}
          in the Process Consulting track, for how Grant writes to clients, sourced
          from real sent email.
        </li>
        <li>
          <a href="/roles/process-consulting/managing-the-relationship">
            Managing the Relationship
          </a>
          , for client health, scope creep, and spotting the next engagement.
        </li>
      </ul>
    </ModuleShell>
  );
}
