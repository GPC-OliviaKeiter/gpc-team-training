import { TopNav } from "@/components/top-nav";

const modules = [
  {
    num: "00",
    title: "Role Overview",
    blurb: "The Process Consultant scorecard: mission, outcomes, competencies.",
    href: "/workflow-consulting/role-overview",
  },
  {
    num: "01",
    title: "Onboarding a Partner",
    blurb: "The client kickoff call, the onboarding document, the engineering handover.",
    href: "/workflow-consulting/onboarding-a-partner",
    flagship: true,
  },
  {
    num: "02",
    title: "Running the Engagement",
    blurb: "Weekly calls, Monday updates, and Workflow Assessment stakeholder interviews.",
    href: "/workflow-consulting/running-the-engagement",
  },
  {
    num: "03",
    title: "Managing the Relationship",
    blurb: "Client health, scope creep, and spotting the next engagement.",
    href: "/workflow-consulting/managing-the-relationship",
  },
  {
    num: "04",
    title: "Closing Out",
    blurb: "The three PC-owned action items that move a partner to Offboarding.",
    href: "/workflow-consulting/closing-out",
  },
  {
    num: "05",
    title: "Tools: GitHub & Vercel",
    blurb: "A curated path beyond GitHub Basics: reviewing PRs, reading a deployment.",
    href: "/workflow-consulting/github-and-vercel",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-gpc-neutral-500 px-6 py-2 text-center font-mono text-[13px] text-gpc-neutral-100">
        <b className="font-medium tracking-[0.04em] text-gpc-secondary-yellow">
          INTERNAL DRAFT
        </b>{" "}
        · GPC-only. Nothing here goes public without Grant&rsquo;s approval.
      </div>

      <TopNav active="workflow-consulting" />

      <main className="mx-auto max-w-[900px] px-6 pt-11 pb-20">
        <header className="mb-11 border-b border-border pb-8">
          <div className="mb-4 font-mono text-[11.5px] tracking-[0.2em] text-muted-foreground uppercase">
            Workflow Consulting · Process Consultant Handbook
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] font-normal tracking-tight">
            Workflow Consulting
          </h1>
          <p className="mt-5 max-w-[64ch] text-[17px] leading-relaxed text-muted-foreground">
            The operational side of running a Process Consultant engagement:
            onboarding, weekly cadence, relationship management, and closeout.
            Rewritten from GPC&rsquo;s ClickUp Process Consultant handbook. This is
            the how; <a href="/grant-way" className="text-primary underline underline-offset-2">The Grant Way</a>{" "}
            is the craft, how Grant actually runs the calls these SOPs describe.
          </p>
        </header>

        <section>
          <h2 className="mb-5 font-display text-[26px] font-normal">
            The six modules
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {modules.map((m) => (
              <a key={m.num} href={m.href} className="block h-full">
                <div
                  className={`relative flex h-full flex-col gap-2 border bg-card px-5 py-4 transition-colors hover:border-gpc-primary-red ${
                    m.flagship ? "border-foreground" : "border-border"
                  }`}
                >
                  <span className="font-mono text-xs font-semibold text-muted-foreground">
                    {m.num}
                  </span>
                  <h3 className="font-display text-xl font-normal">{m.title}</h3>
                  <p className="text-[14.5px] leading-snug text-muted-foreground">
                    {m.blurb}
                  </p>
                  <span className="mt-auto pt-2 font-mono text-[11px] font-semibold tracking-[0.08em] text-gpc-primary-red uppercase">
                    Open module →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-14 border-t border-foreground pt-6">
          <p className="max-w-[60ch] text-[13.5px] text-muted-foreground">
            Source of truth for the SOPs themselves is ClickUp (How We Work →
            Role Handbooks → Process Consultant: Workflow/Workshop). A
            procedure change happens there first, then gets re-ported here.
          </p>
        </footer>
      </main>
    </div>
  );
}
