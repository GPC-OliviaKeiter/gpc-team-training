import { ModuleShell } from "@/components/module-shell";
import { Callout } from "@/components/callout";
import { Diagram } from "@/components/diagram";
import { Figure } from "@/components/figure";
import { WorkMovesThroughGpc } from "@/components/diagrams";

export const metadata = { title: "How GPC Is Structured · GPC Team Training" };

const WIKI = "https://app.clickup.com/9012022270/docs/8cjh2zy-176272";

type Seat = { name: string; focus: string; owns: string[]; track?: string };

const FUNCTIONS: { fn: string; tone: string; blurb: string; seats: Seat[] }[] = [
  {
    fn: "Growth and Sales",
    tone: "text-gpc-primary-red",
    blurb: "Generates and closes qualified opportunities.",
    seats: [
      {
        name: "Growth Marketer",
        focus: "Generating qualified demand",
        owns: [
          "Paid acquisition and campaigns",
          "Landing pages and Webflow",
          "Attribution and lead routing",
          "Funnel performance and growth experiments",
        ],
        track: "/roles/marketing",
      },
      {
        name: "Setter",
        focus: "Turning demand into qualified conversations",
        owns: [
          "Inbound response and outbound outreach",
          "Prospect research and qualification",
          "Booking meetings",
          "Preparing the Closer with context",
        ],
        track: "/roles/sales",
      },
      {
        name: "Sales Closer",
        focus: "Turning qualified opportunities into profitable revenue",
        owns: [
          "Consultative discovery",
          "Recommendations, proposals, negotiation",
          "New business, expansion, and renewal revenue",
          "Handoff of closed engagements into delivery",
        ],
        track: "/roles/sales",
      },
    ],
  },
  {
    fn: "Consulting",
    tone: "text-gpc-secondary-purple",
    blurb:
      "Identifies the right business problems to solve, guides adoption, and teaches. Consulting decides what should be solved and why.",
    seats: [
      {
        name: "Process Consultant: Workshop",
        focus: "AI education and workshop facilitation",
        owns: [
          "Preparing and facilitating AI Workshops",
          "Teaching teams to use AI on their own work",
          "Identifying AI opportunities in the business",
          "Workshop recommendations and next steps",
        ],
        track: "/roles/process-consulting/scorecard-workshop",
      },
      {
        name: "Process Consultant: Workflow",
        focus: "Understanding how the business runs and what to improve",
        owns: [
          "Running Workflow Assessments and stakeholder interviews",
          "Mapping and quantifying workflows and pain points",
          "Prioritizing AI and automation opportunities",
          "Leading Adoption Plans and owning requirement acceptance during builds",
        ],
        track: "/roles/process-consulting/scorecard-workflow",
      },
    ],
  },
  {
    fn: "Engineering",
    tone: "text-gpc-secondary-orange",
    blurb:
      "Turns approved requirements into completed, reliable solutions. Engineering decides how it gets built.",
    seats: [
      {
        name: "Automation Engineer",
        focus: "Building reliable production systems",
        owns: [
          "Technical implementation, integrations, APIs",
          "Automation architecture and feasibility",
          "Testing, debugging, production reliability",
          "Technical documentation",
        ],
        track: "/roles/engineering",
      },
    ],
  },
  {
    fn: "Operations",
    tone: "text-foreground",
    blurb:
      "Keeps the company coordinated, profitable, properly resourced, and accountable.",
    seats: [
      {
        name: "Operations Manager",
        focus: "Capacity, profitability, reporting, accountability",
        owns: [
          "Account profitability and company operating metrics",
          "Staffing, PTO coverage, resource conflicts",
          "Client health and renewal visibility",
          "Scope or commercial issues needing escalation",
        ],
        track: "/roles/operations",
      },
      {
        name: "Project Manager",
        focus: "Keeping client work organized and moving through approval",
        owns: [
          "Sprint planning and project timelines",
          "Scope questions and deliverable status",
          "Client delivery coordination",
          "Blockers, dependencies, upcoming resource needs",
        ],
        track: "/roles/project-management",
      },
    ],
  },
];

const WHERE_TO_GO = [
  ["Project timeline, task, blocker, or deliverable", "Project Manager"],
  ["Client workflow, requirement, or business problem", "Process Consultant"],
  ["Technical solution, integration, automation, or defect", "Engineer"],
  ["Capacity, staffing, profitability, or operational escalation", "Operations Manager"],
  ["New lead or prospect qualification", "Setter"],
  ["Proposal, pricing, new sale, expansion, or renewal", "Sales Closer"],
  ["Marketing campaign, Webflow, attribution, or lead generation", "Growth Marketer"],
  ["Workshop content or AI education", "Workshop Process Consultant"],
];

export default function Page() {
  return (
    <ModuleShell
      track="overview"
      crumbs={[{ label: "Overview", href: "/" }, { label: "How GPC Is Structured" }]}
      eyebrow="Overview · Module 03"
      title="How GPC Is Structured"
      lede={
        <>
          Four functions, nine seats, and one table that answers &ldquo;who do I
          ask.&rdquo; Rewritten from the GPC Team Structure Overview in the{" "}
          <a
            href={WIKI}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-2"
          >
            GPC Wiki
          </a>
          .
        </>
      }
    >
      <h2>The four functions</h2>
      <p>
        Growth and Sales generates and closes qualified opportunity. Consulting
        identifies the right problem and guides adoption. Engineering turns approved
        requirements into working systems. Operations keeps the company coordinated,
        resourced, and profitable.
      </p>

      <Diagram
        label="Figure 1 · How work moves through GPC"
        caption="Not every engagement follows this exact path. Workshops and Workflow Assessments can enter delivery differently. Ownership does not change."
      >
        <WorkMovesThroughGpc />
      </Diagram>

      <Callout>
        The line that settles most arguments: the Process Consultant decides{" "}
        <b>what should be solved and why</b>. Engineering decides{" "}
        <b>how it gets built</b>. Project Management decides{" "}
        <b>when and how delivery moves</b>. Sales decides <b>what we sell</b>.
      </Callout>

      <h2>Every seat</h2>

      <div className="not-prose my-8 flex flex-col gap-8">
        {FUNCTIONS.map((f) => (
          <section key={f.fn}>
            <div className="border-b border-foreground pb-2">
              <h3 className={`font-display text-[24px] leading-tight ${f.tone}`}>
                {f.fn}
              </h3>
              <p className="mt-1 text-[14px] leading-snug text-muted-foreground">
                {f.blurb}
              </p>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
              {f.seats.map((s) => (
                <div key={s.name} className="border border-border bg-card px-5 py-4">
                  <h4 className="text-[15.5px] leading-snug font-semibold">{s.name}</h4>
                  <p className="mt-1 font-mono text-[10.5px] tracking-[0.04em] text-muted-foreground uppercase">
                    {s.focus}
                  </p>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {s.owns.map((o) => (
                      <li
                        key={o}
                        className="flex gap-2 text-[13.5px] leading-snug text-muted-foreground"
                      >
                        <span className="text-gpc-primary-red">&bull;</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                  {s.track && (
                    <a
                      href={s.track}
                      className="mt-3 inline-block font-mono text-[10.5px] font-semibold tracking-[0.08em] text-gpc-primary-red uppercase hover:underline"
                    >
                      Open track &rarr;
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <h2>Where do I go?</h2>
      <div className="not-prose my-7 overflow-x-auto">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                If you need help with
              </th>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                Start with
              </th>
            </tr>
          </thead>
          <tbody>
            {WHERE_TO_GO.map(([need, who]) => (
              <tr key={need}>
                <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                  {need}
                </td>
                <td className="border border-border px-3 py-2 align-top font-medium">
                  {who}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Who owns the client relationship</h2>
      <p>
        Today, ongoing account relationship work is shared between the Project
        Manager and the Operations Manager: client health visibility, expansion
        opportunities, renewal prep, relationship continuity, and routing commercial
        openings to Sales. As GPC grows, that set is expected to move into a
        dedicated Engagement Manager role.
      </p>

      <Callout>
        Two limits worth knowing on day one. An Engineer owns the technical quality
        of what they build and does <b>not</b> independently approve scope changes or
        make commercial concessions. The Operations Manager does <b>not</b> manage
        every project directly; their job is making sure the systems, information,
        and accountability exist for the people who do.
      </Callout>

      <h2>The org chart</h2>
      <p>
        The Wiki carries an org chart image. It is not reproduced here, because a
        copy of an org chart goes stale the day someone joins. Open it in ClickUp,
        or capture it here once the GPC folder in Google Drive is populated.
      </p>

      <Figure
        id="org-chart"
        caption="GPC org chart, as of the current quarter, with names against the nine seats above."
        spec="ClickUp, GPC Wiki, How GPC is Structured, GPC Org Chart page, full image"
      />

      <h2>Where to go next</h2>
      <ul>
        <li>
          <a href="/overview/what-gpc-sells">Module 04, What GPC Sells</a>, for what
          each of these seats is delivering.
        </li>
        <li>
          <a href="/roles">The Roles tab</a>, for the handbook, scorecard, and SOPs
          of your own seat.
        </li>
      </ul>
    </ModuleShell>
  );
}
