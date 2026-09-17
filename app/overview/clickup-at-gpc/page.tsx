import { ModuleShell } from "@/components/module-shell";
import { Callout } from "@/components/callout";
import { Diagram } from "@/components/diagram";
import { ClickUpHierarchy, TaskStatusFlow } from "@/components/diagrams";

export const metadata = { title: "ClickUp at GPC · GPC Team Training" };

const SOPS = "https://app.clickup.com/9012022270/docs/8cjh2zy-176272/8cjh2zy-112752";
const HIERARCHY_SOP = "https://app.clickup.com/9012022270/docs/8cjh2zy-176272/8cjh2zy-56452";
const STATUS_SOP = "https://app.clickup.com/9012022270/docs/8cjh2zy-176272/8cjh2zy-87652";
const BOUNCEBACK_SOP = "https://app.clickup.com/9012022270/docs/8cjh2zy-176272/8cjh2zy-84972";
const MEETINGS_SOP = "https://app.clickup.com/9012022270/docs/8cjh2zy-176272/8cjh2zy-90872";

const STATUSES = [
  ["Backlog", "Not yet scheduled", "None"],
  ["Submitted", "Any new task", "PM or Senior AE adds the time estimate and CAR. An automation kicks it back if it moves to Triaged without an estimate."],
  ["Triaged", "Scoped, with estimates and CAR", "PM reviews the estimate, assigns it, and sets a due date"],
  ["To Do", "Scoped, queued, assigned", "Start work"],
  ["In Progress", "Actively being worked", "Move it to the right next stage"],
  ["Internal Review", "Another team member needs to QA", "QA check. Add the QA person to the QA custom field or it reverts to In Progress."],
  ["Internal Escalation", "Help needed from another team member", "PM follow-up"],
  ["Externally Blocked", "Cannot move without third-party action", "PM or Senior AE follow-up. Fill in the Blocked On custom field first or the automation reverts it."],
  ["Partner Review", "Our work is done, pending their review", "PM or Senior AE follow-up"],
  ["On Hold", "Not actively being worked", "PM or Senior AE follow-up"],
  ["Complete", "Finished and delivered", "None"],
  ["Cancelled", "Will never be worked", "None"],
];

const CONVENTIONS = [
  {
    head: "Track time on the subtask, not the milestone",
    body: "A milestone is the objective. Time logged against it tells you nothing about which part of the work took the hours.",
  },
  {
    head: "Update the status the moment work starts",
    body: "In Progress the second you begin. That is what keeps two people from building the same thing and what makes the workload view true.",
  },
  {
    head: "Feedback goes on the subtask that needs the change",
    body: "If the design needs revision, comment on the Design subtask, not the parent or a chat thread. Set it to Needs Revision so it reappears in the assignee's queue, and use assigned comments so it cannot be closed until the feedback is addressed.",
  },
  {
    head: "Use the Meeting task type for meetings",
    body: "Title, date and time, agenda checklist, and a note section or comment thread. Assign it to the facilitator, set a due date so it appears on calendars, and update it afterwards with outcomes and follow-up subtasks.",
  },
  {
    head: "Never call a sample task “Test”",
    body: "Build a real example with a proper name and filled-in custom fields, so the list explains its own intended use.",
  },
  {
    head: "Mark an automation in testing",
    body: "Prefix the automation name with [TESTING] so it does not generate support tickets, and remove the prefix when it goes to production.",
  },
  {
    head: "Prototype in a hidden space",
    body: "When a partner already uses ClickUp, build the improved structure in a hidden prototype space, iterate internally, then invite a small core group for feedback before the wider rollout. Their live workspace is never the sandbox.",
  },
];

export default function Page() {
  return (
    <ModuleShell
      track="overview"
      crumbs={[{ label: "Overview", href: "/" }, { label: "ClickUp at GPC" }]}
      eyebrow="Overview · Module 07"
      title="ClickUp at GPC"
      lede={
        <>
          ClickUp University teaches you the product. This teaches you GPC&rsquo;s
          workspace: where a partner lives, what each of the twelve statuses means,
          and the conventions that keep it readable. Rewritten from the{" "}
          <a
            href={SOPS}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-2"
          >
            General SOPs
          </a>{" "}
          in the GPC Wiki.
        </>
      }
    >
      <h2>The hierarchy</h2>
      <p>
        Think of it like folders on a computer. Nothing gets dumped at the top
        level. Full SOP in{" "}
        <a href={HIERARCHY_SOP} target="_blank" rel="noreferrer">
          ClickUp
        </a>
        .
      </p>

      <Diagram
        label="Figure 1 · The ClickUp hierarchy, with GPC's own examples"
        caption="One Workspace. Partner Fulfillment is the Space most client work sits in, one Folder per partner, and Production is the list where deliverables live."
      >
        <ClickUpHierarchy />
      </Diagram>

      <Callout>
        A partner is a <b>Folder</b>. That is why the ClickUp chat channel for a
        client sits at the folder level: click the partner folder and the chat is in
        the top left corner.
      </Callout>

      <h2>The twelve statuses</h2>
      <p>
        These are the standard statuses in Partner Fulfillment. The rule underneath
        all of them is short: a status change means responsibility changed. Full SOP
        in{" "}
        <a href={STATUS_SOP} target="_blank" rel="noreferrer">
          ClickUp
        </a>
        .
      </p>

      <Diagram
        label="Figure 2 · The path, and the four ways off it"
        caption="Eight statuses form the normal path. Four more exist for when the work stops moving, and each one names who owns getting it moving again."
      >
        <TaskStatusFlow />
      </Diagram>

      <div className="not-prose my-7 overflow-x-auto">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                Status
              </th>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                Means
              </th>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                Next action
              </th>
            </tr>
          </thead>
          <tbody>
            {STATUSES.map(([name, means, action]) => (
              <tr key={name}>
                <td className="border border-border px-3 py-2 align-top font-medium whitespace-nowrap">
                  {name}
                </td>
                <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                  {means}
                </td>
                <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                  {action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout>
        Every status change <b>except</b> To Do, In Progress, and Complete carries a
        comment saying why it changed, what is needed to move it forward, and who
        owns the next action. Externally Blocked is only for fully blocked work, and
        it escalates if it approaches three days.
      </Callout>

      <h2>The bounceback</h2>
      <p>
        When a task cannot be executed because the requirements are unclear, the
        information is missing, or the expected outcome is undefined, click the
        Bounceback button on the task. The automation sets or confirms the Task
        Designer field, increments a private bounceback count, posts an assigned
        comment to the Task Designer, and moves the task to a blocked status until
        the context is added.
      </p>
      <p>
        Do not bounce a task back because it is hard or time-consuming, or because
        the blocker is external such as waiting on an approval. Those are different
        statuses.
      </p>

      <div className="not-prose my-7 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="border border-border bg-card px-5 py-4">
          <div className="font-mono text-[10.5px] tracking-[0.1em] text-muted-foreground uppercase">
            What it is for
          </div>
          <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
            Bounceback counts feed the Project Manager KPI. They measure delegation
            clarity and whether it improves over time, which is why the count field
            is private and only an admin can edit it.
          </p>
        </div>
        <div className="border border-border bg-card px-5 py-4">
          <div className="font-mono text-[10.5px] tracking-[0.1em] text-muted-foreground uppercase">
            What it is not
          </div>
          <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
            A rejection, or a punishment. It means the task needs more context
            before execution continues. If you believe one was unfair, tell the
            Project Manager and they can adjust it. Full SOP in{" "}
            <a
              href={BOUNCEBACK_SOP}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-2"
            >
              ClickUp
            </a>
            .
          </p>
        </div>
      </div>

      <h2>External meetings create themselves</h2>
      <p>
        An automation captures external partner meetings by filtering out the
        internal naming conventions <code>GPC&lt;&gt;</code> and{" "}
        <code>Grantbot&lt;&gt;</code>. It creates the meeting task in the partner
        Production list under the Meetings milestone, with five subtasks assigned
        from the People custom field on the Partners list: prep meeting brief,
        meeting time, post Slack and ClickUp wrap-up, review the client recording,
        and create milestone deliverables.
      </p>
      <p>
        If the automation missed a meeting because the event was named differently,
        create a subtask under the Meetings milestone, set the task type to External
        Meeting, add the Meeting Date custom field, and save. That triggers the same
        five subtasks. Information about the call goes on the parent task, never the
        subtasks. Full SOP in{" "}
        <a href={MEETINGS_SOP} target="_blank" rel="noreferrer">
          ClickUp
        </a>
        .
      </p>

      <h2>Conventions worth knowing on day one</h2>
      <div className="not-prose my-7 flex flex-col gap-3">
        {CONVENTIONS.map((c, i) => (
          <div key={c.head} className="border border-border bg-card px-5 py-4">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] text-gpc-primary-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[15px] leading-snug font-semibold">{c.head}</h3>
            </div>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
              {c.body}
            </p>
          </div>
        ))}
      </div>

      <h2>Set up your own inbox once</h2>
      <p>
        Inbox notifications set to Focused. Email notifications set to Custom, with
        task comments, chat messages, and overdue due dates on. Browser
        notifications set to mentions only. Mobile set to chat messages only. In the
        Important tab, group by date and turn off &ldquo;sort by newest first&rdquo;
        so the oldest notifications surface and the tab can actually be cleared.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <a href="/overview/how-we-work">Module 05, How We Work</a>, for the CAR
          format every task description uses.
        </li>
        <li>
          <a href="/overview/glossary">Module 10, Glossary</a>, for the statuses and
          roles in one alphabetical list.
        </li>
      </ul>
    </ModuleShell>
  );
}
