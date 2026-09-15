import { TopNav } from "@/components/top-nav";

const modules = [
  {
    num: "00",
    title: "Method Overview",
    blurb: "The philosophy and core frameworks everything else hangs on.",
    href: "/grant-way/method-overview",
  },
  {
    num: "01",
    title: "Discovery Interviews",
    blurb:
      "The flagship module: how Grant runs an AI strategy interview.",
    flagship: true,
    href: "/grant-way/discovery-interviews",
  },
  {
    num: "02",
    title: "Internal GO Calls",
    blurb: "How the team preps before a client-facing day.",
    href: "/grant-way/go-calls",
  },
  {
    num: "03",
    title: "Client Check-ins",
    blurb: "Same-day debriefs with the client sponsors.",
    href: "/grant-way/client-checkins",
  },
  {
    num: "04",
    title: "Internal Debriefs",
    blurb: "The internal same-day synthesis call (Grant + team).",
    href: "/grant-way/internal-debriefs",
  },
  {
    num: "05",
    title: "Kickoff Calls",
    blurb:
      "The Leadership Kickoff: definitions of success, the engagement sentence.",
    href: "/grant-way/kickoff-calls",
  },
  {
    num: "06",
    title: "Training Sessions",
    blurb:
      'Client AI training ("Flowium Friday"): a recurring deliverable, not a workflow-assessment call type.',
    href: "/grant-way/training-sessions",
  },
  {
    num: "07",
    title: "Follow-up Interviews",
    blurb:
      "Technical & opportunity deep-dives after discovery: governance, architecture, ROI.",
    href: "/grant-way/followup-interviews",
    badge: "NEW",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-gpc-neutral-500 px-6 py-2 text-center font-mono text-[13px] text-gpc-neutral-100">
        <b className="font-medium tracking-[0.04em] text-gpc-secondary-yellow">
          INTERNAL DRAFT
        </b>{" "}
        — GPC-only. Nothing here goes public without Grant&rsquo;s approval.
      </div>

      <TopNav active="grant-way" />

      <main className="mx-auto max-w-[900px] px-6 pt-11 pb-20">
        <header className="mb-11 border-b border-border pb-8">
          <div className="mb-4 font-mono text-[11.5px] tracking-[0.2em] text-muted-foreground uppercase">
            The Grant Way · Workflow Consultant Playbook
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] font-normal tracking-tight">
            The Grant Way
          </h1>
          <p className="mt-5 max-w-[64ch] text-[17px] leading-relaxed text-muted-foreground">
            How Grant Hushek runs the workflow-consultant role, reverse-engineered
            from real call transcripts. Every claim traces back to a transcript;
            anything reasoned rather than observed is flagged as inferred. Eight
            modules, three clients, growing with every new transcript batch.
          </p>
        </header>

        <section>
          <h2 className="mb-5 font-display text-[26px] font-normal">
            The eight modules
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {modules.map((m) => {
              const Card = (
                <div
                  className={`relative flex h-full flex-col gap-2 border bg-card px-5 py-4 ${
                    m.flagship ? "border-foreground" : "border-border"
                  } ${m.href ? "transition-colors hover:border-gpc-primary-red" : ""}`}
                >
                  {m.badge && (
                    <span className="absolute -top-2.5 right-4 rounded-sm bg-gpc-primary-red px-2 py-0.5 font-mono text-[10px] font-semibold tracking-[0.12em] text-gpc-neutral-100">
                      {m.badge}
                    </span>
                  )}
                  <span className="font-mono text-xs font-semibold text-muted-foreground">
                    {m.num}
                  </span>
                  <h3 className="font-display text-xl font-normal">
                    {m.title}
                  </h3>
                  <p className="text-[14.5px] leading-snug text-muted-foreground">
                    {m.blurb}
                  </p>
                  {m.href && (
                    <span className="mt-auto pt-2 font-mono text-[11px] font-semibold tracking-[0.08em] text-gpc-primary-red uppercase">
                      Open module →
                    </span>
                  )}
                </div>
              );
              return m.href ? (
                <a key={m.num} href={m.href} className="block h-full">
                  {Card}
                </a>
              ) : (
                <div key={m.num} className="h-full">
                  {Card}
                </div>
              );
            })}
          </div>
        </section>

        <footer className="mt-14 border-t border-foreground pt-6">
          <p className="max-w-[60ch] text-[13.5px] text-muted-foreground">
            Modules 00-05 and 07 render{" "}
            <code className="rounded-sm bg-secondary px-1.5 py-0.5 font-mono text-[12px]">
              playbook/*.md
            </code>{" "}
            directly, so the module doc stays the single source of truth.
            Module 06 is hand-laid-out since it doesn&rsquo;t have a matching
            playbook doc yet.
          </p>
        </footer>
      </main>
    </div>
  );
}
