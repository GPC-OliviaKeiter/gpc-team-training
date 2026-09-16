import { TopNav } from "@/components/top-nav";
import { SopIndex } from "@/components/sop-index";
import { readTrack } from "@/lib/roles";
import { readSops } from "@/lib/sops";

export default function Page() {
  const track = readTrack("engineering");
  const sops = readSops("engineering");

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
              <a key={seat.name} href={seat.scorecardHref} className="block h-full">
                <div className="relative flex h-full flex-col gap-2 border border-foreground bg-card px-5 py-4 transition-colors hover:border-gpc-primary-red">
                  <h3 className="font-display text-xl font-normal">{seat.name}</h3>
                  <span className="mt-auto pt-2 font-mono text-[11px] font-semibold tracking-[0.08em] text-gpc-primary-red uppercase">
                    Open scorecard →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 font-display text-[26px] font-normal">Modules</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {track.modules.map((m) => (
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
          <h2 className="mb-2 font-display text-[26px] font-normal">SOP index</h2>
          <p className="mb-5 max-w-[64ch] text-[14.5px] leading-relaxed text-muted-foreground">
            Every SOP page in the Engineering ClickUp handbook. Quickbooks Tool
            Module and Make Tool Module are flagged legacy pending confirmation
            with Augusto Gouveia.
          </p>
          <SopIndex sops={sops} modules={track.modules} />
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
