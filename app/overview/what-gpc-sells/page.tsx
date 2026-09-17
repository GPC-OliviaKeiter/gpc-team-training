import { ModuleShell } from "@/components/module-shell";
import { Callout } from "@/components/callout";
import { Diagram } from "@/components/diagram";
import { ServiceLadder } from "@/components/diagrams";

export const metadata = { title: "What GPC Sells · GPC Team Training" };

const WIKI_SERVICES = "https://app.clickup.com/9012022270/docs/8cjh2zy-176272/8cjh2zy-101552";

type Service = {
  num: string;
  name: string;
  commitment: string;
  question: string;
  summary: string;
  tiers: { name: string; price?: string; rows: string[] }[];
  difference: string;
};

const SERVICES: Service[] = [
  {
    num: "01",
    name: "AI Workshop",
    commitment: "One-time engagement",
    question: "We bought the licenses. How does anyone actually use them?",
    summary:
      "Discovery, education, and adoption support around a live event. It starts with a 40-question team survey, a usage-data review, a kickoff, and an audience read. GPC then picks modules from the Workshop catalog, builds a customized agenda and keynote, names internal champions, and prepares starter AI skills. Afterwards the partner gets an Insights Report, an AI Adoption Roadmap, a resource portal, rollout emails, office hours, and early adoption monitoring.",
    tiers: [
      {
        name: "Silver",
        rows: [
          "40-question team AI survey, deployed and analyzed",
          "AI usage data review",
          "Three modules from the Workshop catalog",
          "Customized agenda and keynote",
          "Premade starter AI skills, plus a resource portal",
          "Insights Report and AI Adoption Roadmap",
          "Twice-weekly office hours in week one, adoption tracking, adoption survey",
        ],
      },
      {
        name: "Gold",
        rows: [
          "Everything in Silver",
          "Stakeholder interviews for each breakout track",
          "A documented skeptic roster and champion hypotheses",
          "Three custom-built breakout session packages",
          "Two to three partner-specific starter AI skills",
          "Travel and on-site delivery, dinner with the executive sponsors",
          "A planned goodwill over-delivery item",
        ],
      },
    ],
    difference:
      "Silver customizes from survey data, usage data, and partner discovery. Gold adds direct stakeholder discovery, tailored breakouts, executive involvement, and being in the room.",
  },
  {
    num: "02",
    name: "Workflow Assessment",
    commitment: "One-time engagement",
    question: "Where are the biggest AI opportunities in this business?",
    summary:
      "Structured discovery and recommendation. Rather than starting from a tool, GPC starts from the people, the process, the pain, and the existing stack. Stakeholder interviews, an AI integration survey, workflow analysis, and product evaluation produce a Workflow Assessment Readout: what to address, why it matters, and where GPC recommends starting.",
    tiers: [
      {
        name: "Silver",
        price: "$10,000",
        rows: [
          "Kickoff and engagement alignment",
          "AI integration survey",
          "About 5 hours of stakeholder interviews",
          "Workflow mapping and product evaluation",
          "Findings in the GPC Workflow Assessment framework",
          "Workflow Assessment Readout, standard prompt packs",
          "A defined next engagement and implementation path",
        ],
      },
      {
        name: "Gold",
        price: "$20,000",
        rows: [
          "Everything in Silver",
          "About 10 hours of stakeholder interviews",
          "A broader range of workflows, teams, and use cases",
          "Customized prompt and AI resource packs",
          "Up to two built workflow demonstrations",
          "A deeper evidence base for prioritizing implementation",
        ],
      },
    ],
    difference:
      "Silver answers where the best opportunities are and what to prioritize. Gold goes further and shows what those priority workflows would actually look like running.",
  },
  {
    num: "03",
    name: "AI Adoption Plan",
    commitment: "6-month retainer",
    question: "We rolled AI out and nobody uses it. Now what?",
    summary:
      "Six months of moving an organization from experimenting with AI to using it in daily work. Group and 1:1 training, production-ready AI skills built around real work inside the company, hardened live artifacts, and on-site support. The measure of success is not that employees know more about AI. It is that they use AI differently in the work they are actually responsible for.",
    tiers: [
      {
        name: "Silver",
        rows: [
          "Up to 10 hours group training",
          "Up to 12 hours 1:1 training",
          "Up to 1 new production-ready AI skill",
          "Up to 4 hours hardened live artifact development",
          "Up to 6 hours on-site support",
        ],
      },
      {
        name: "Gold",
        rows: [
          "Up to 5 hours assessment and scoping",
          "Up to 15 hours group training",
          "Up to 18 hours 1:1 training",
          "Up to 4 new production-ready AI skills",
          "Up to 16 hours hardened live artifact development",
          "Up to 4 hours token-spend monitoring",
          "Up to 36 hours on-site support",
        ],
      },
    ],
    difference:
      "Silver builds adoption across a focused set of people and workflows. Gold has the capacity to drive it across teams, build more production skills, and put GPC in the building where the work happens.",
  },
  {
    num: "04",
    name: "Technical Build",
    commitment: "Monthly, for as long as the scope needs",
    question: "We know what to build. Build it.",
    summary:
      "Custom implementation. Unlike the other services there is no fixed deliverable list: each engagement is scoped around the business problem, the technical requirements, the systems involved, and the outcome. The tier sets how much consulting, engineering, and project management capacity the month carries.",
    tiers: [
      {
        name: "Silver",
        price: "$15,000 / month",
        rows: [
          "Up to 5 hours Process Consultant scoping",
          "Up to 40 hours Automation Engineering per month",
          "Up to 4 hours Project Management per month",
          "Build, integration, technical QA, documentation, handoff",
        ],
      },
      {
        name: "Gold",
        price: "$25,000 / month",
        rows: [
          "Up to 10 hours Process Consultant scoping",
          "Up to 80 hours Automation Engineering per month",
          "Up to 8 hours Project Management per month",
          "Build, integration, technical QA, documentation, handoff",
        ],
      },
    ],
    difference:
      "Gold is double the engineering capacity plus more scoping and project management, for multi-system integrations and larger implementations.",
  },
  {
    num: "05",
    name: "Growth Insurance",
    commitment: "Month to month, 30 days' notice",
    question: "Who keeps the thing you built running?",
    summary:
      "An ongoing RevOps and automation support subscription for infrastructure GPC already implemented. Maintenance, troubleshooting, reporting improvements, workflow optimization, and coaching for the partner's own team, instead of rebuilding when something breaks or hiring internal RevOps.",
    tiers: [
      {
        name: "Lite",
        price: "$1,950 / month",
        rows: [
          "Up to 20 hours of team support per month",
          "Biweekly operations reviews",
          "Monthly reporting and automation improvements",
          "Shared Slack support channel, quarterly optimization cycles",
        ],
      },
      {
        name: "Standard",
        price: "$4,500 / month",
        rows: [
          "Up to 40 hours of team support per month",
          "Weekly operations reviews",
          "Monthly reporting and automation improvements",
          "Shared Slack support channel, quarterly optimization cycles",
        ],
      },
    ],
    difference:
      "Standard is double the monthly capacity and a weekly rather than biweekly review cadence.",
  },
];

const RESPONSE_TARGETS = [
  ["Critical", "4 business hours", "1 to 2 business days"],
  ["High priority", "1 business day", "2 to 3 business days"],
  ["Standard", "2 business days", "Timeline communicated after assessment"],
];

export default function Page() {
  return (
    <ModuleShell
      track="overview"
      crumbs={[{ label: "Overview", href: "/" }, { label: "What GPC Sells" }]}
      eyebrow="Overview · Module 04"
      title="What GPC Sells"
      lede={
        <>
          Five services, two tiers each. Read this before your first client call,
          because a client will assume you know what they bought. Rewritten from{" "}
          <a
            href={WIKI_SERVICES}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-2"
          >
            GPC Services
          </a>{" "}
          in the Wiki, which stays the source of truth for pricing and scope.
        </>
      }
    >
      <Diagram
        label="Figure 1 · The service ladder"
        caption="Two one-time engagements that find and prove the opportunity, then three ongoing ones that build and keep it running."
      >
        <ServiceLadder />
      </Diagram>

      <Callout>
        A sixth category exists in the Wiki: <b>Legacy Retainer Accounts</b>, signed
        before this product structure. They have customized agreements with their
        own pricing, scope, and capacity. Never assume one Legacy Account has the
        same scope as another; the account&rsquo;s own agreement is the answer.
      </Callout>

      <div className="not-prose my-10 flex flex-col gap-12">
        {SERVICES.map((s) => (
          <section key={s.num}>
            <div className="flex items-baseline gap-3 border-b border-foreground pb-2">
              <span className="font-mono text-[12px] text-gpc-primary-red">{s.num}</span>
              <h2 className="font-display text-[27px] leading-tight">{s.name}</h2>
              <span className="ml-auto font-mono text-[10.5px] tracking-[0.06em] text-muted-foreground uppercase">
                {s.commitment}
              </span>
            </div>

            <p className="mt-4 border-l-4 border-gpc-secondary-yellow bg-card px-4 py-2.5 text-[15px] leading-snug text-foreground italic">
              &ldquo;{s.question}&rdquo;
            </p>

            <p className="mt-4 max-w-[70ch] text-[14.5px] leading-relaxed text-muted-foreground">
              {s.summary}
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
              {s.tiers.map((t, i) => (
                <div
                  key={t.name}
                  className={`border bg-card px-5 py-4 ${
                    i === 1 ? "border-gpc-secondary-orange" : "border-border"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-[20px]">{t.name}</h3>
                    {t.price && (
                      <span className="font-mono text-[12px] font-semibold text-gpc-primary-red">
                        {t.price}
                      </span>
                    )}
                  </div>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {t.rows.map((r) => (
                      <li
                        key={r}
                        className="flex gap-2 text-[13.5px] leading-snug text-muted-foreground"
                      >
                        <span className="text-gpc-primary-red">&bull;</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[14px] leading-relaxed">
              <span className="font-mono text-[10.5px] tracking-[0.08em] text-muted-foreground uppercase">
                The difference&nbsp;
              </span>
              {s.difference}
            </p>
          </section>
        ))}
      </div>

      <h2>Growth Insurance: what it does not cover</h2>
      <p>
        Growth Insurance is not an unlimited development retainer. Net-new
        automation systems, new modules, third-party API development, system
        migrations, multi-week architecture projects, and support for systems GPC
        did not originally implement all sit outside it. When a request falls
        outside, it gets evaluated separately and usually becomes a Technical Build.
      </p>

      <div className="not-prose my-7 overflow-x-auto">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                Priority
              </th>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                Response target
              </th>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                Resolution target
              </th>
            </tr>
          </thead>
          <tbody>
            {RESPONSE_TARGETS.map(([p, resp, res]) => (
              <tr key={p}>
                <td className="border border-border px-3 py-2 align-top font-medium">{p}</td>
                <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                  {resp}
                </td>
                <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                  {res}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout>
        A long-standing client relationship does not create unlimited scope. Before
        committing to new work on any retainer, confirm it falls within the existing
        agreement, that the account has capacity, which GPC specialty it needs, and
        whether it is really a new project.
      </Callout>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <a href="/overview/how-we-work">Module 05, How We Work</a>, for the
          conventions that apply to delivering any of these.
        </li>
        <li>
          <a href="/overview/measuring-ai-roi">Module 08, Measuring AI ROI</a>, for
          how GPC proves any of it worked.
        </li>
      </ul>
    </ModuleShell>
  );
}
