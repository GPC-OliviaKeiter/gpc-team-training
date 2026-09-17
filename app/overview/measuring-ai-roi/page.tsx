import { ModuleShell } from "@/components/module-shell";
import { Callout } from "@/components/callout";
import { Diagram, StatTiles } from "@/components/diagram";
import {
  RoiBeforeAfter,
  RoiVehicleModel,
  RoiDecisionChart,
  RoiCadence,
} from "@/components/diagrams";

export const metadata = { title: "Measuring AI ROI · GPC Team Training" };

const FALSE_CONFIDENCE = [
  "Seats",
  "Chats",
  "Tokens consumed",
  "Licenses bought",
  "Prompts sent",
  "Total usage",
];

const BUSINESS_PROOF = [
  "How long did the work take before?",
  "How often did the work occur?",
  "Who was eligible to do it?",
  "How long does it take now?",
  "How often is the new capability actually used?",
  "Does it keep working as adoption grows?",
];

type Metric = {
  label: string;
  term: string;
  ratio: string;
  inputs: string;
  source: string;
  baseline: string;
  cadence: string;
};

const DRIVER_METRICS: Metric[] = [
  {
    label: "Adoption",
    term: "distance traveled",
    ratio: "skill calls ÷ (1 person · 1 week)",
    inputs: "Skill invocations per person per week",
    source: "Claude usage analytics export",
    baseline: "Tasks completed per person per week before AI, from ClickUp or a two-week count",
    cadence: "Weekly",
  },
  {
    label: "AI efficiency",
    term: "miles per gallon",
    ratio: "skill calls ÷ tokens",
    inputs: "Skill invocations per person, tokens consumed per person",
    source: "Claude usage analytics export; Claude Code and Cowork session telemetry",
    baseline: "Tokens per task done manually in chat, five runs, before the skill exists",
    cadence: "Weekly",
  },
  {
    label: "Workflow autonomy",
    term: "miles per trip",
    ratio: "skill calls ÷ chat session",
    inputs: "Skill invocations per session, session count",
    source: "Claude Code and Cowork telemetry",
    baseline: "None. It is a habit read, and the first two weeks are the baseline",
    cadence: "Weekly",
  },
  {
    label: "Time saved",
    term: "time saved",
    ratio: "(min without AI − min with AI) × total calls",
    inputs: "Minutes per task with AI, total calls of that skill",
    source: "Time study on five runs; Claude usage analytics for the call count",
    baseline: "Minutes per task without AI, five runs, timed by the person doing it",
    cadence: "Monthly",
  },
];

const PART_METRICS: Metric[] = [
  {
    label: "Consistency",
    term: "reliability",
    ratio: "skill updates ÷ skill calls",
    inputs: "Commits touching a skill's files, plus total calls of that skill",
    source: "Git log joined to the usage export on skill name",
    baseline: "Calls in the skill's first 30 days, so early fixes do not read as unreliable forever",
    cadence: "Monthly",
  },
  {
    label: "Skill reach",
    term: "toll road usage",
    ratio: "distinct users ÷ (skill calls per week)",
    inputs: "Distinct people who invoked a skill, and how often",
    source: "Claude usage analytics export, grouped by skill and person",
    baseline: "Headcount who could use it, so usage reads as a share rather than a raw count",
    cadence: "Weekly",
  },
  {
    label: "Maintenance burden",
    term: "repair rate",
    ratio: "skill updates ÷ week",
    inputs: "Commits touching a skill's files",
    source: "Git log on the skills repo, one line per skill per week",
    baseline: "Model version the skill shipped on, so a model change is visible as the cause",
    cadence: "Weekly",
  },
  {
    label: "Token efficiency",
    term: "gas cost per mile",
    ratio: "tokens ÷ skill call",
    inputs: "Tokens per invocation of one skill",
    source: "Claude Code and Cowork telemetry; chat cannot report it yet",
    baseline: "Tokens per invocation in the skill's first week",
    cadence: "Weekly",
  },
];

const BASELINE_PACK = [
  ["Minutes without AI", "Per task, five timed runs, take the median"],
  ["Weekly volume", "How many of that task each person does per week, from ClickUp or a two-week tally"],
  ["Tokens without AI", "Tokens per task done in plain chat with no skill, five runs"],
  ["Eligible people", "Headcount who could use the skill on day one"],
  ["Ship version", "Model and skill version on launch day"],
  ["Its own key", "Any skill calling the API directly gets its own API key, so the usage report groups its tokens per skill with no extra tooling"],
  ["Token price", "The price per million tokens on launch day, for the record, even though the metric stays in tokens"],
];

function MetricTable({ metrics, tone }: { metrics: Metric[]; tone: "purple" | "orange" }) {
  const accent = tone === "purple" ? "text-gpc-secondary-purple" : "text-gpc-secondary-orange";
  return (
    <div className="not-prose my-5 overflow-x-auto">
      <table className="w-full min-w-[760px] border-collapse text-[13px]">
        <thead>
          <tr>
            {["Signal", "Ratio", "Where it comes from", "Baseline it needs", "Cadence"].map((h) => (
              <th
                key={h}
                className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[10.5px] tracking-[0.06em] text-muted-foreground uppercase"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {metrics.map((m) => (
            <tr key={m.label}>
              <td className="border border-border px-3 py-2 align-top">
                <span className={`font-semibold ${accent}`}>{m.label}</span>
                <span className="mt-0.5 block font-mono text-[10.5px] text-muted-foreground">
                  {m.term}
                </span>
              </td>
              <td className="border border-border px-3 py-2 align-top font-mono text-[11.5px] text-foreground">
                {m.ratio}
              </td>
              <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                {m.source}
              </td>
              <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                {m.baseline}
              </td>
              <td className="border border-border px-3 py-2 align-top whitespace-nowrap text-muted-foreground">
                {m.cadence}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <ModuleShell
      track="overview"
      crumbs={[{ label: "Overview", href: "/" }, { label: "Measuring AI ROI" }]}
      eyebrow="Overview · Module 08"
      title="Measuring AI ROI"
      lede={
        <>
          How GPC proves an engagement worked. This is the framework behind the
          prospect-facing AI ROI experience, condensed for the people who have to
          run it. Source of truth is the{" "}
          <code>gpc-ai-roi-framework</code> repo; every number on this page is
          sample data from that repo, labeled where it appears.
        </>
      }
    >
      <h2>The argument in one line</h2>
      <p>
        AI usage tells you what your team consumed. It does not tell you what the
        business got back. So GPC measures the work before AI changes it, then
        measures the same work after. The gap is the value.
      </p>

      <Callout>
        Everything else on this page exists to make that one sentence defensible.
        When a client asks &ldquo;how will we know this is working,&rdquo; that is
        the answer, and the rest is the operating system behind it.
      </Callout>

      <h2>The number that matters</h2>
      <p>
        Start with one workflow, not eight metrics. The executive figure is{" "}
        <b>hours handed back</b>.
      </p>

      <Diagram
        label="Figure 1 · One workflow, sample data"
        caption="Sample data, from the framework repo. A real engagement swaps these figures for the client's own and the arithmetic is unchanged."
      >
        <RoiBeforeAfter />
      </Diagram>

      <StatTiles
        tiles={[
          { value: "75 min", label: "Handed back per run", note: "sample data", tone: "orange" },
          { value: "50 hrs", label: "Month one, across the team", note: "sample data", tone: "red" },
          { value: "3.3×", label: "Token efficiency gain", note: "sample data · 410k against 125k" },
          { value: "650 hrs", label: "Year one, cumulative", note: "sample data" },
        ]}
      />

      <h2>Why most AI ROI claims fail</h2>
      <p>
        The usual numbers are easy to collect and prove nothing. They describe
        consumption. None of them describe whether work got better.
      </p>

      <div className="not-prose my-7 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="border border-border bg-card px-5 py-4">
          <div className="font-mono text-[10.5px] tracking-[0.1em] text-muted-foreground uppercase">
            What companies usually measure
          </div>
          <ul className="mt-3 flex flex-col gap-1.5">
            {FALSE_CONFIDENCE.map((f) => (
              <li key={f} className="flex gap-2 text-[14px] text-muted-foreground">
                <span className="text-muted-foreground">&times;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-gpc-primary-red bg-card px-5 py-4">
          <div className="font-mono text-[10.5px] tracking-[0.1em] text-gpc-primary-red uppercase">
            What GPC needs to know
          </div>
          <ul className="mt-3 flex flex-col gap-1.5">
            {BUSINESS_PROOF.map((b) => (
              <li key={b} className="flex gap-2 text-[14px] text-foreground">
                <span className="text-gpc-primary-red">&#10003;</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2>The vehicle model</h2>
      <p>
        Five terms make the rest of the framework sayable in a room full of people
        who do not want a lecture on telemetry.
      </p>

      <Diagram
        label="Figure 2 · What each term maps to"
        caption="The metaphor carries the conversation. The right-hand column is what is actually being counted."
      >
        <RoiVehicleModel />
      </Diagram>

      <Callout>
        Skill calls are the odometer: the activity spine every other reading
        explains. Three of the eight signals divide by skill calls. The other five
        do not, so never say the framework divides everything by skill calls.
      </Callout>

      <h2>Two questions, eight signals</h2>
      <p>
        Everything measured answers one of two management questions, and each has
        four signals under it.
      </p>

      <h3>Are people getting better at using AI?</h3>
      <p>
        The driver question. The answer coaches a person or redesigns a workflow.
      </p>
      <MetricTable metrics={DRIVER_METRICS} tone="purple" />

      <h3>Which AI capabilities deserve more investment?</h3>
      <p>
        The parts question. The answer scales, repairs, or retires a capability.
      </p>
      <MetricTable metrics={PART_METRICS} tone="orange" />

      <h2>The baseline is the whole game</h2>
      <p>
        Seven of the eight ratios run on live data alone. Only time saved needs a
        before, because the formula subtracts it. Capture the minutes without AI
        first, or that metric is gone for good.
      </p>
      <p>
        Baselines also protect the story in the other direction. A skill needing
        four updates in month one looks unreliable, until the baseline shows the
        model changed twice. A team burning more tokens than last month looks
        wasteful, until the baseline shows they did three times the work.
      </p>

      <h3>The baseline pack, captured before a skill ships</h3>
      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                Capture
              </th>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                How
              </th>
            </tr>
          </thead>
          <tbody>
            {BASELINE_PACK.map(([what, how]) => (
              <tr key={what}>
                <td className="border border-border px-3 py-2 align-top font-medium whitespace-nowrap">
                  {what}
                </td>
                <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                  {how}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>A filled-in pack</h3>
      <div className="not-prose my-6 border border-border bg-card px-5 py-5">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div className="font-mono text-[10.5px] tracking-[0.14em] text-muted-foreground uppercase">
            Merge ten Excel files into one HTML report
          </div>
          <span className="border border-gpc-secondary-orange px-2 py-0.5 font-mono text-[10px] tracking-[0.06em] text-gpc-secondary-orange uppercase">
            sample data · one skill
          </span>
        </div>
        <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
          {[
            ["Minutes without AI", "90 min", "median of five timed runs"],
            ["Minutes with the skill", "15 min", "median of five runs"],
            ["Weekly volume", "2 per person", "from ClickUp, two weeks"],
            ["Eligible people", "5", "headcount who could use it"],
            ["Tokens without AI", "410,000", "plain chat, five runs"],
            ["Tokens with the skill", "125,000", "first week, per call"],
            ["Ship version", "Skill v1.0", "on the launch-day model"],
            ["Time saved, month one", "50 hours", "75 × 2 × 4 × 5, in minutes"],
          ].map(([k, v, n]) => (
            <div key={k}>
              <dt className="font-mono text-[10px] tracking-[0.06em] text-muted-foreground uppercase">
                {k}
              </dt>
              <dd className="mt-1 text-[17px] font-semibold text-foreground">{v}</dd>
              <dd className="mt-0.5 text-[11.5px] leading-snug text-muted-foreground">{n}</dd>
            </div>
          ))}
        </dl>
      </div>

      <h2>What the readings decide</h2>
      <p>
        Every skill lands in one of four actions. That is the point of measuring:
        not a dashboard, a decision.
      </p>

      <Diagram
        label="Figure 3 · Coach, scale, repair, retire"
        caption="Value and reliability up the vertical axis. Adoption and reach along the horizontal. Where a skill sits names what to do about it."
      >
        <RoiDecisionChart />
      </Diagram>

      <h2>When the readings happen</h2>
      <Diagram
        label="Figure 4 · The engagement cadence"
        caption="The first dot is the one that gets skipped, and skipping it is what makes every later number arguable."
      >
        <RoiCadence />
      </Diagram>

      <Callout>
        GPC starts measuring before GPC starts building. In practice that means the
        baseline pack is part of the Workflow Assessment, not something retrofitted
        once a skill is live.
      </Callout>

      <h2>What cannot be measured yet</h2>
      <p>
        Tokens per skill call inside chat, because connectors do not read token
        consumption for a whole thread. Token efficiency is measurable today from
        Claude Code and Cowork, and for any skill running as a Workato recipe, where
        the job log carries the token count per run.
      </p>
      <p>
        Say this plainly to a client rather than implying full coverage. A framework
        that names its own gaps is the reason the rest of it gets believed.
      </p>

      <Callout>
        Two hard rules from the framework repo, and they apply to anything you
        write for a client. Never invent client outcomes, adoption percentages, cost
        savings, or benchmark claims. And no dollar figures for AI cost anywhere:
        gas is measured in tokens.
      </Callout>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <a href="/overview/what-gpc-sells">Module 04, What GPC Sells</a>. The
          Workflow Assessment is where the baseline gets captured, and the Adoption
          Plan is where the readings drive the work.
        </li>
        <li>
          The <code>gpc-ai-roi-framework</code> repo itself, for the methodology
          appendix, the presenter script, and the prospect-facing experience this
          was condensed from.
        </li>
      </ul>
    </ModuleShell>
  );
}
