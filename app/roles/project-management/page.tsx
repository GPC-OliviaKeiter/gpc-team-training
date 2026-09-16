import { TopNav } from "@/components/top-nav";
import { readTrack } from "@/lib/roles";

export default function Page() {
  const track = readTrack("project-management");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-gpc-neutral-500 px-6 py-2 text-center font-mono text-[13px] text-gpc-neutral-100">
        <b className="font-medium tracking-[0.04em] text-gpc-secondary-yellow">
          INTERNAL DRAFT
        </b>{" "}
        · GPC-only. Nothing here goes public without Grant&rsquo;s approval.
      </div>

      <TopNav active="roles" />

      <main className="mx-auto max-w-[900px] px-6 pt-11 pb-20">
        <nav className="mb-6 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          <a href="/roles" className="hover:text-foreground hover:underline">
            Roles
          </a>{" "}
          / {track.title}
        </nav>

        <header className="mb-11 border-b border-border pb-8">
          <div className="mb-4 font-mono text-[11.5px] tracking-[0.2em] text-muted-foreground uppercase">
            {track.eyebrow}
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] font-normal tracking-tight">
            {track.title}
          </h1>
          <p className="mt-5 max-w-[64ch] text-[17px] leading-relaxed text-muted-foreground">
            {track.lede}
          </p>
        </header>

        <section className="mb-12">
          <h2 className="mb-5 font-display text-[26px] font-normal">Scorecards</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {track.seats.map((seat) => (
              <div key={seat.name} className="relative flex h-full flex-col gap-2 border border-border bg-card px-5 py-4">
                <h3 className="font-display text-xl font-normal">{seat.name}</h3>
                <p className="mt-auto pt-2 text-[13px] leading-snug text-muted-foreground">
                  Scorecard not yet on this site. See it in the ClickUp handbook below.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 font-display text-[26px] font-normal">Modules</h2>
          <p className="max-w-[64ch] text-[15px] leading-relaxed text-muted-foreground">
            No modules ported yet. See the {track.title} handbook in{" "}
            <a
              href={track.clickupDocUrl}
              className="text-primary underline underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              ClickUp
            </a>
            .
          </p>
        </section>

        <footer className="mt-14 border-t border-foreground pt-6">
          <p className="max-w-[60ch] text-[13.5px] text-muted-foreground">
            Source of truth for the SOPs themselves is{" "}
            <a
              href={track.clickupDocUrl}
              className="text-primary underline underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              ClickUp
            </a>
            . A procedure change happens there first, then gets re-ported here.
          </p>
        </footer>
      </main>
    </div>
  );
}
