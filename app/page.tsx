import { TopNav } from "@/components/top-nav";

const modules = [
  {
    num: "01",
    title: "Onboarding at GPC",
    blurb: "Every ClickUp onboarding task, phase by phase, each row linking its own task.",
    href: "/overview/onboarding",
  },
  {
    num: "02",
    title: "GitHub Basics",
    blurb:
      "Repos, branches, commits, pull requests, merge, and how it works at GPC specifically.",
    href: "/overview/github-basics",
  },
];

type FundamentalCard = {
  title: string;
  blurb: string;
  href?: string;
  owner?: string;
};

const CORE_FUNDAMENTALS: FundamentalCard[] = [
  {
    title: "Pitching",
    blurb: "The discovery and demo craft: how GPC pitches an engagement.",
    owner: "Coming soon, once Sales's own track lands (Step 4a)",
  },
  {
    title: "Selling",
    blurb: "Pipeline, qualification, and the sales process end to end.",
    href: "/roles/sales",
  },
  {
    title: "Client service",
    blurb: "Client health, scope creep, and spotting the next engagement.",
    href: "/roles/process-consulting/managing-the-relationship",
  },
  {
    title: "Communicating at GPC",
    blurb: "Channel-by-purpose rules, the 1-3-1 method, and how Grant writes to clients.",
    href: "/roles/process-consulting/communication-guidelines",
  },
  {
    title: "The Grant Way",
    blurb: "How Grant runs the workflow-consultant role, sourced from real call transcripts.",
    href: "/grant-way",
  },
  {
    title: "Pete's list",
    blurb: "The fundamentals Pete wants beyond these five.",
    owner: "Coming soon. Owner: Pete Sena",
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

      <TopNav active="overview" />

      <main className="mx-auto max-w-[900px] px-6 pt-11 pb-20">
        <header className="mb-11 border-b border-border pb-8">
          <div className="mb-4 font-mono text-[11.5px] tracking-[0.2em] text-muted-foreground uppercase">
            GPC Team Training
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] font-normal tracking-tight">
            Overview
          </h1>
          <p className="mt-5 max-w-[64ch] text-[17px] leading-relaxed text-muted-foreground">
            Onboarding for the tools and conventions everyone at GPC needs, regardless
            of role. Role-specific training lives in its own tab above:{" "}
            <a href="/grant-way" className="text-primary underline underline-offset-2">
              The Grant Way
            </a>{" "}
            for the workflow-consultant craft itself, and{" "}
            <a
              href="/roles"
              className="text-primary underline underline-offset-2"
            >
              Roles
            </a>{" "}
            for the operational side of running each seat at GPC. More tracks land
            here the same way, one role at a time.
          </p>
        </header>

        <section>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {modules.map((m) => (
              <a key={m.num} href={m.href} className="block h-full">
                <div className="relative flex h-full flex-col gap-2 border border-border bg-card px-5 py-4 transition-colors hover:border-gpc-primary-red">
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

        <section className="mt-14">
          <h2 className="mb-2 font-display text-[26px] font-normal">Core Fundamentals</h2>
          <p className="mb-5 max-w-[64ch] text-[15px] leading-relaxed text-muted-foreground">
            Doorways into the modules everyone benefits from knowing, wherever
            they actually live.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CORE_FUNDAMENTALS.map((c) => {
              const body = (
                <div
                  className={`relative flex h-full flex-col gap-2 border bg-card px-5 py-4 transition-colors ${
                    c.href ? "border-border hover:border-gpc-primary-red" : "border-border"
                  }`}
                >
                  <h3 className="font-display text-xl font-normal">{c.title}</h3>
                  <p className="text-[14.5px] leading-snug text-muted-foreground">{c.blurb}</p>
                  {c.href ? (
                    <span className="mt-auto pt-2 font-mono text-[11px] font-semibold tracking-[0.08em] text-gpc-primary-red uppercase">
                      Open module →
                    </span>
                  ) : (
                    <p className="mt-auto pt-2 font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                      {c.owner}
                    </p>
                  )}
                </div>
              );
              return c.href ? (
                <a key={c.title} href={c.href} className="block h-full">
                  {body}
                </a>
              ) : (
                <div key={c.title} className="h-full">
                  {body}
                </div>
              );
            })}
          </div>
        </section>

        <footer className="mt-14 border-t border-foreground pt-6">
          <p className="font-mono text-[11px] text-muted-foreground">
            GPC TEAM TRAINING · INTERNAL
          </p>
        </footer>
      </main>
    </div>
  );
}
