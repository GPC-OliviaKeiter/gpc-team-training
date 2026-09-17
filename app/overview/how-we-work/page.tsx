import { ModuleShell } from "@/components/module-shell";
import { Callout } from "@/components/callout";
import { Diagram, StatTiles } from "@/components/diagram";
import { StepRail } from "@/components/step-rail";
import { CommunicationRouting } from "@/components/diagrams";

export const metadata = { title: "How We Work · GPC Team Training" };

const WIKI_HOW = "https://app.clickup.com/9012022270/docs/8cjh2zy-176272/8cjh2zy-109312";
const TIME_POLICY = "https://app.clickup.com/9012022270/docs/8cjh2zy-176272/8cjh2zy-101572";
const TASK_SOP = "https://app.clickup.com/9012022270/docs/8cjh2zy-176272/8cjh2zy-101412";
const CONTENT_FORM = "https://forms.clickup.com/9012022270/f/8cjh2zy-93872/1UT7UUAKVLL5XZ4I60";

const CAR_STEPS = [
  {
    title: "Create it in the right place",
    body:
      "The partner folder in Partner Fulfillment, in the Production list unless told otherwise. Set the task type (never leave the default), the assignee, and a due date.",
  },
  {
    title: "Name it so nobody has to open it",
    body:
      "Specific and action-oriented. “Build ClickUp to Meta batch association workflow in n8n” tells you what is happening. “n8n workflow” does not.",
  },
  {
    title: "Write the Context",
    body:
      "Why does this task exist, what is the current state, what was requested. The test: if someone new to this account read only this section, would they understand why the task needs to happen?",
  },
  {
    title: "Write the Action",
    body:
      "Exactly what to do: the steps, the tools, the systems being touched, the decisions to make on the way, and any prerequisites. The test: does the assignee know where to start and what done looks like?",
  },
  {
    title: "Write the Result",
    body:
      "What the client has when this is finished, measurable or observable. The test: could the client or Grant confirm it is done just by reading this line?",
  },
  {
    title: "Add the time estimate",
    body:
      "Never blank. If you are unsure, break the Action steps down, estimate each, and add them up. An approximate estimate beats no estimate.",
  },
];

const ESCALATE = [
  ["Feedback that affects project direction", "A partner reprioritizes or changes the success criteria"],
  ["Risk of a missed milestone or deadline", "Internal delays or blockers that can hit delivery"],
  ["Feedback that could lead to dissatisfaction", "Quality concerns, repeated confusion, unclear communication"],
  ["Misalignment in expectations", "Partner or team disagree on scope, pacing, or priorities"],
  ["Ambiguity in tasks or decisions", "Unclear who should move, how, or why"],
  ["Repeated delays with no visible action", "Even internal ones. Flag the pattern before it costs trust"],
];

export default function Page() {
  return (
    <ModuleShell
      track="overview"
      crumbs={[{ label: "Overview", href: "/" }, { label: "How We Work" }]}
      eyebrow="Overview · Module 05"
      title="How We Work"
      lede={
        <>
          The conventions that apply to every seat: where a conversation belongs,
          how a task is written, how time is tracked, when to escalate, and what
          you owe the team every week. Rewritten from{" "}
          <a
            href={WIKI_HOW}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-2"
          >
            How We Work
          </a>{" "}
          in the GPC Wiki.
        </>
      }
    >
      <h2>Where a conversation belongs</h2>
      <p>
        Four tools, four jobs. ClickUp chat sits at the folder level: click a
        partner folder and the channel is in the top left corner.
      </p>

      <Diagram
        label="Figure 1 · Four tools, one rule"
        caption="Slack is where we talk. ClickUp is where client work lives. HubSpot is where sales activity lives. Email fills the external gaps."
      >
        <CommunicationRouting />
      </Diagram>

      <p>
        Use email for external communication when a client is not on Slack, when
        the message is formal or long-form, or when an outside stakeholder is not
        in the normal collaboration tools. If that email produces a task, a
        requirement, a deadline, a decision, or a scope change, it goes into
        ClickUp.
      </p>

      <Callout>
        <b>If it is not in ClickUp, it does not exist.</b> Anything discussed in
        Slack, on a call, or over email becomes a ClickUp task before work starts.
      </Callout>

      <h2>Writing a task: CAR</h2>
      <p>
        Every task that represents client work carries a CAR description: Context,
        Action, Result. The point is that nobody has to chase you to find out what
        a task means. Full SOP in{" "}
        <a
          href={TASK_SOP}
          target="_blank"
          rel="noreferrer"
          className="text-primary underline underline-offset-2"
        >
          ClickUp
        </a>
        .
      </p>

      <div className="not-prose my-7">
        <StepRail steps={CAR_STEPS} />
      </div>

      <div className="not-prose my-7 border border-border bg-card px-5 py-5">
        <div className="font-mono text-[10.5px] tracking-[0.14em] text-muted-foreground uppercase">
          Worked example, from the SOP
        </div>
        <p className="mt-3 text-[15px] font-semibold">
          Build automated pre-interview email for stakeholder interviews
        </p>
        <dl className="mt-4 flex flex-col gap-3 text-[14px] leading-relaxed">
          <div>
            <dt className="font-mono text-[10.5px] tracking-[0.08em] text-gpc-primary-red uppercase">
              Context
            </dt>
            <dd className="mt-1 text-muted-foreground">
              Stakeholder interviews are being run with no pre-call communication,
              so interviewees arrive without context or preparation. Grant named
              this an internal initiative needing a standardized prep email that
              fires automatically before each interview is scheduled.
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10.5px] tracking-[0.08em] text-gpc-primary-red uppercase">
              Action
            </dt>
            <dd className="mt-1 text-muted-foreground">
              Define a naming convention for stakeholder interview calendar events
              that separates them from other event types. Build a Gmail automation
              triggered from engineering@ that detects qualifying events and sends
              the email. Write the copy explaining the purpose of the session, what
              to expect, and any optional pre-work. Test all components end to end
              before going live.
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10.5px] tracking-[0.08em] text-gpc-primary-red uppercase">
              Result
            </dt>
            <dd className="mt-1 text-muted-foreground">
              Every stakeholder interview is preceded by a consistent prep email
              sent automatically from the engineering account, so interviewees are
              never going in blind and the process needs no manual follow-up.
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10.5px] tracking-[0.08em] text-gpc-primary-red uppercase">
              Time estimate
            </dt>
            <dd className="mt-1 text-muted-foreground">4 hours</dd>
          </div>
        </dl>
      </div>

      <h2>Tracking time</h2>
      <p>
        Start the timer on the task when you start working. Stop it when you finish
        or switch. Never run two timers at once. If you forgot, add the time
        manually. Full policy in{" "}
        <a
          href={TIME_POLICY}
          target="_blank"
          rel="noreferrer"
          className="text-primary underline underline-offset-2"
        >
          ClickUp
        </a>
        .
      </p>

      <StatTiles
        tiles={[
          { value: "5 min", label: "Smallest increment logged", note: "Anything shorter rounds up to 5", tone: "red" },
          { value: "Friday", label: "Weekly entries finalized", note: "By the team call" },
          { value: "Subtask", label: "Level the timer runs at", note: "Not the milestone" },
          { value: "0", label: "Tasks with no estimate", note: "An approximate one still counts" },
        ]}
      />

      <p>
        The reason this tedious thing matters: time data is how the team sets honest
        expectations of each other, and it is the only quantitative read on whether
        a project is profitable. The main cost at an agency is talent. Knowing what
        is being spent per project and per client is what lets GPC decide which
        clients to take on and where roles can expand.
      </p>

      <Callout>
        The timer in the top bar of this site rounds to the same 5-minute increment
        the policy logs in, so you can run it while you read and paste the figure
        straight into your onboarding task.
      </Callout>

      <h2>Escalating</h2>
      <p>
        Route risk early, not when it is too late. Do not escalate something already
        resolved, something minor that your next update covers, or a decision that
        has been made and is simply taking time to execute.
      </p>

      <div className="not-prose my-7 overflow-x-auto">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                Escalate when
              </th>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                Looks like
              </th>
            </tr>
          </thead>
          <tbody>
            {ESCALATE.map(([trigger, example]) => (
              <tr key={trigger}>
                <td className="border border-border px-3 py-2 align-top font-medium">
                  {trigger}
                </td>
                <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                  {example}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="not-prose my-7 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="border border-gpc-primary-red bg-card px-5 py-4">
          <div className="font-mono text-[10.5px] tracking-[0.1em] text-gpc-primary-red uppercase">
            The format
          </div>
          <pre className="mt-3 font-mono text-[12.5px] leading-relaxed whitespace-pre-wrap text-foreground">
{`Escalation: [short title]
Context: what led to this
Issue: what is unclear, blocked, or in conflict
Impact: what is at risk
Ask: what decision or action you need`}
          </pre>
          <p className="mt-3 text-[13px] leading-snug text-muted-foreground">
            Tag the stakeholders directly. Include the Slack thread or ClickUp
            links.
          </p>
        </div>
        <div className="border border-border bg-card px-5 py-4">
          <div className="font-mono text-[10.5px] tracking-[0.1em] text-muted-foreground uppercase">
            A good one
          </div>
          <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
            <b className="text-foreground">Escalation: milestone risk, onboarding.</b>{" "}
            Partner asked to shift onboarding KPIs mid-week. The new goals do not
            align with scope defined at kickoff. This may delay deliverables and
            confuse the internal team about priorities. Can we schedule a 15-minute
            realignment call this week?
          </p>
          <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
            <b className="text-foreground">A bad one.</b> &ldquo;Hey this partner is
            being really confusing, can someone take a look?&rdquo;
          </p>
        </div>
      </div>

      <Callout>
        Escalation is not blame. It is unblocking and aligning. Once you escalate,
        track the follow-through rather than assuming it happened.
      </Callout>

      <h2>Showing up on video</h2>
      <p>
        Client-facing calls require camera on unless agreed in advance, clear
        lighting, a clean background, a stable connection, and a working mic. Sit
        with your back to a wall. Face a window rather than sitting in front of one.
        Raise the camera to eye level. Wired earphones or a basic USB mic beat a
        laptop mic. Mute in group calls when you are not speaking.
      </p>
      <p>
        Test before anything important: Google Meet&rsquo;s preview screen for mic
        and camera, a browser restart before a demo, and a speed test if video has
        been choppy. Aim for 10 Mbps up and down.
      </p>

      <h2>What you owe the team every week</h2>
      <p>
        Every team member fills out the Weekly Content Form. Say what you created,
        the component parts of how it works, why it matters to the partner&rsquo;s
        bigger picture, and add the best photo you can get into the system. An
        automation turns that into a LinkedIn post and a Slack message. Check the
        finished post for accuracy, then set the status to ready to post.
      </p>
      <p>
        <a href={CONTENT_FORM} target="_blank" rel="noreferrer">
          Open the Weekly Content Form
        </a>
        .
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <a href="/overview/working-with-clients">
            Module 06, Working with Clients
          </a>
          , for the same discipline pointed outward.
        </li>
        <li>
          <a href="/overview/clickup-at-gpc">Module 07, ClickUp at GPC</a>, for the
          hierarchy and the statuses these conventions run on.
        </li>
      </ul>
    </ModuleShell>
  );
}
