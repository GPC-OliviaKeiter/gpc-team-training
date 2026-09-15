import { TopNav } from "@/components/top-nav";

const modules = [
  {
    num: "01",
    title: "GitHub Basics",
    blurb:
      "Repos, branches, commits, pull requests, merge, and how it works at GPC specifically.",
    href: "/overview/github-basics",
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
              href="/workflow-consulting"
              className="text-primary underline underline-offset-2"
            >
              Workflow Consulting
            </a>{" "}
            for the operational side of running an engagement. More tracks land here
            the same way, one role at a time.
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

        <footer className="mt-14 border-t border-foreground pt-6">
          <p className="font-mono text-[11px] text-muted-foreground">
            GPC TEAM TRAINING · INTERNAL
          </p>
        </footer>
      </main>
    </div>
  );
}
