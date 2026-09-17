import { ModuleShell } from "@/components/module-shell";
import { Callout } from "@/components/callout";
import { Diagram, StatTiles } from "@/components/diagram";
import { ValuesBand } from "@/components/diagrams";

export const metadata = { title: "Welcome to GPC · GPC Team Training" };

const WIKI = "https://app.clickup.com/9012022270/docs/8cjh2zy-176272";

const DIFFERENTIATORS = [
  {
    name: "Full-stack SMOF service",
    body: "GPC started as an automation company, so it can remove work with deterministic logic and with probabilistic AI, and can speak to change management, corporate goals, and the person doing the job. SMOF is Sales, Marketing, Operations, Finance.",
  },
  {
    name: "AI multiplies, it does not subtract",
    body: "AI is used to multiply human strategy, ingenuity, and relationships. GPC does not look for, or recommend, headcount reduction.",
  },
  {
    name: "Empathetic ownership",
    body: "Everyone is somewhere different in their AI journey. GPC has empathy for every level of the org chart and what each of them is being measured on.",
  },
  {
    name: "Consulting rooted in teaching",
    body: "Grant taught kindergarten math through college calculus. Ruben writes to over 900,000 weekly readers on AI. Everyone here has to be ready with both the kindergarten version and the calculus version.",
  },
  {
    name: "Engineering rooted in consistency",
    body: "Consistent communication, quality, timeliness, testing, and QA. GPC does not need to be the fastest. It does need to be on the same page with the client.",
  },
];

const STANDARD = [
  { n: "01", title: "We deliver what we promise", body: "On time, to the agreed requirements, QA'd before it reaches the client. Risks are communicated before they become surprises, and scope changes are named instead of quietly absorbed." },
  { n: "02", title: "Our work creates real client value", body: "A finished deliverable is not an outcome. The work has to save time, cut cost, improve quality, or create capability, and be adopted in the client's actual day." },
  { n: "03", title: "We protect quality", body: "Built to the approved requirements, tested before release, documented well enough for someone else, maintainable after the original builder moves on." },
  { n: "04", title: "We operate profitably", body: "Scope, delivery hours, capacity, and account profitability are everyone's concern, not just Sales and Operations. Every decision about time and rework moves them." },
  { n: "05", title: "We know who owns what", body: "Escalate outside your authority. Do not commit on behalf of another function. Close your own loops. Surface unclear ownership early." },
  { n: "06", title: "We communicate problems early", body: "Blockers, capacity, delivery risk, technical limits, client concerns, and your own mistakes. The goal is not avoiding problems. It is naming them while the team still has options." },
  { n: "07", title: "We maintain trustworthy information", body: "Project status, client health, hours, scope, CRM, capacity, next steps. Anything that lives only in one person's head cannot be operated from." },
  { n: "08", title: "We make the next engagement better than the last", body: "When something works, turn it into an SOP, a checklist, a template, an automation, a skill, or a prompt. Nobody should solve the same problem by hand twice." },
  { n: "09", title: "We create opportunities for growth", body: "You do not need to be in Sales to notice an opening. Recognize it, document it, route it to the owner." },
  { n: "10", title: "We live the values in the work", body: "The four values below describe how the work gets done, not what GPC believes about itself." },
];

export default function Page() {
  return (
    <ModuleShell
      track="overview"
      crumbs={[{ label: "Overview", href: "/" }, { label: "Welcome to GPC" }]}
      eyebrow="Overview · Module 02"
      title="Welcome to GPC"
      lede={
        <>
          Who GPC is, where it came from, what it is trying to do, and the
          standard the work is held to. Rewritten from the{" "}
          <a
            href={WIKI}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-2"
          >
            GPC Wiki
          </a>
          , which stays the source of truth.
        </>
      }
    >
      <h2>What GPC does</h2>
      <p>
        GPC helps companies in manufacturing, logistics, industrial, and utilities
        adopt AI. The belief the whole business rests on is that AI adoption is a
        change management and human psychology problem, not a technology problem.
      </p>
      <p>
        That belief has consequences for the job. It means listening to where
        someone is actually coming from, including their worry about data center
        water consumption and their fear that AI is going to replace them, then
        responding to that rather than around it, and bringing them to a working
        reality where AI is an assistant rather than outsourced thinking.
      </p>

      <Callout>
        Clients hire GPC to answer two questions. <b>We just bought enterprise
        ChatGPT, Claude, Gemini, or Copilot, how do we use it?</b> and <b>what are
        the biggest opportunities for AI in my business?</b> Everything GPC sells
        answers one of those two.
      </Callout>

      <h2>What sets GPC apart</h2>
      <div className="not-prose my-7 flex flex-col gap-3">
        {DIFFERENTIATORS.map((d, i) => (
          <div key={d.name} className="border border-border bg-card px-5 py-4">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] text-gpc-primary-red">
                {`0${i + 1}`}
              </span>
              <h3 className="font-display text-[19px] leading-tight font-normal">
                {d.name}
              </h3>
            </div>
            <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
              {d.body}
            </p>
          </div>
        ))}
      </div>

      <h2>Mission and vision</h2>
      <div className="not-prose my-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="border border-border bg-card px-5 py-5">
          <div className="font-mono text-[10.5px] tracking-[0.14em] text-gpc-primary-red uppercase">
            Mission
          </div>
          <p className="mt-3 font-display text-[21px] leading-snug">
            Help companies and their employees go from AI headache to AI habit.
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
            Identify where AI creates business value, train teams to use it, build
            the systems that support it, and drive adoption until it is part of how
            the organization works.
          </p>
        </div>
        <div className="border border-border bg-card px-5 py-5">
          <div className="font-mono text-[10.5px] tracking-[0.14em] text-gpc-secondary-purple uppercase">
            Vision
          </div>
          <p className="mt-3 font-display text-[21px] leading-snug">
            A future where AI amplifies human creativity, strategy, and
            relationships, and GPC is the bridge.
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
            As intelligence gets cheaper, people and the relationships between them
            get more valuable. GPC grows by helping more people build their
            relationship with AI at work.
          </p>
        </div>
      </div>

      <h2>The four values</h2>
      <Diagram
        label="Figure 1 · GPC core values"
        caption="Four values, in the order the Wiki lists them. They are operating instructions, not a poster."
      >
        <ValuesBand />
      </Diagram>

      <div className="not-prose my-7 overflow-x-auto">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                Value
              </th>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                What it means in practice
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-3 py-2 align-top font-medium">
                Be decent, be direct
              </td>
              <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                Adults who speak plainly, deliver hard feedback fast, and still say
                please and thanks every day.
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 align-top font-medium">
                Passion for modern solutions
              </td>
              <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                Curiosity drives the team to learn AI and automation. Partners
                benefiting is the happy coincidence.
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 align-top font-medium">
                Empathetic ownership
              </td>
              <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                Closing every loop with a client, and apologizing when you are
                wrong. &ldquo;Oops, I&rsquo;m sorry&rdquo; beats &ldquo;I
                didn&rsquo;t know that was the process.&rdquo;
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 align-top font-medium">
                Build, sharpen, scale
              </td>
              <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                Slow down to build systems that do not break, sharpen them with
                every rep, then scale them across clients without drama.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The GPC standard</h2>
      <p>
        Success here is not being busy, finishing tasks, or keeping a client happy
        in the moment. The Wiki names ten conditions. Every role contributes to
        them differently and every role is measured against the same set.
      </p>

      <div className="not-prose my-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {STANDARD.map((s) => (
          <div key={s.n} className="border border-border bg-card px-4 py-4">
            <div className="font-mono text-[11px] text-gpc-secondary-orange">{s.n}</div>
            <h3 className="mt-1.5 text-[15px] leading-snug font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-[13.5px] leading-snug text-muted-foreground">
              {s.body}
            </p>
          </div>
        ))}
      </div>

      <Callout>
        The test at the end of a task is not &ldquo;did I finish it.&rdquo; It is:
        did this solve the right problem, is the work actually ready, does the right
        person know what happens next, did I surface the risks, and can we make this
        easier next time.
      </Callout>

      <h2>Where GPC came from</h2>
      <p>
        GPC is the consolidation of three skill sets: distributed education,
        consulting, and service. It was Grantbot Consulting until the September 2026
        rebrand.
      </p>

      <StatTiles
        tiles={[
          { value: "2023", label: "Grant starts Grantbot", note: "Formally in 2024" },
          { value: "900k+", label: "Weekly readers of How to AI", note: "Ruben Hassid" },
          { value: "Summer 2026", label: "The three partners form GPC", tone: "orange" },
          { value: "Sept 2026", label: "Rebrand to GPC", tone: "red" },
        ]}
      />

      <h3>The founding partners</h3>
      <p>
        <b>Ruben Hassid</b> created How to AI, read by over 900,000 people weekly.
        People read it because it is clear and actionable with nothing to sell. That
        writing built trust with C-level executives who need customized education for
        their teams.
      </p>
      <p>
        <b>Pete Sena</b> is a serial entrepreneur, founder of Digital Surgeons, a
        marketing, branding, and creative agency that has run campaigns on the
        biggest marketing stages. Pete understands the dance of Fortune 500
        consulting and service expectations, and that shapes the experience a GPC
        client gets.
      </p>
      <p>
        <b>Grant Hushek</b> was the first employee at Hampton, where he owned the
        tech stack and automated infrastructure. Inbound requests from community
        members to build AI workflows in their businesses became Grantbot in 2023.
      </p>
      <p>
        Pete and Grant partnered first, agreeing on the change coming from global
        talent plus AI. Pete and Ruben started working together on EasyGen and
        concluded that the best place to channel Ruben&rsquo;s distribution was
        service rather than software. Their hunt for an operator led back to
        Grantbot. The three combined education, brand, and operations into GPC in the
        summer of 2026.
      </p>

      <Callout>
        Grant&rsquo;s own note in the history page: the people who carried Grantbot
        through finding service-market-fit are named there by name. Christian
        Gracias, Augusto Gouveia, Bruno Tagliari, David Badillo, Tiago Silva, Marlon
        Sena, Savannah Higgins, and Eliza Cuevas. Read it in the Wiki.
      </Callout>

      <h2>Your part in it</h2>
      <p>
        Whatever seat you are in, the work makes clients more efficient, more
        profitable, and less stressed. It also changes someone&rsquo;s relationship
        with AI, which at this moment is not a small thing. Rational people having
        honest conversations about what this technology is good for matters, and GPC
        plays that role for a lot of people.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <a href="/overview/how-gpc-is-structured">
            Module 03, How GPC Is Structured
          </a>
          , for who does what and who to ask.
        </li>
        <li>
          <a href="/overview/what-gpc-sells">Module 04, What GPC Sells</a>, for the
          five services and both tiers of each.
        </li>
      </ul>
    </ModuleShell>
  );
}
