import { TopNav } from "@/components/top-nav";
import { RoleCard } from "@/components/role-card";
import { readAllTracks } from "@/lib/roles";

export default function Page() {
  const tracks = readAllTracks();

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
        <header className="mb-11 border-b border-border pb-8">
          <div className="mb-4 font-mono text-[11.5px] tracking-[0.2em] text-muted-foreground uppercase">
            GPC Team Training
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] font-normal tracking-tight">
            Roles
          </h1>
          <p className="mt-5 max-w-[64ch] text-[17px] leading-relaxed text-muted-foreground">
            One card per role at GPC. Each card opens that role&rsquo;s track:
            its scorecard (or scorecards, for a role with more than one seat),
            the SOPs for running it day to day, and, where Grant&rsquo;s own
            method for that role has been documented, its Grant Way modules.
          </p>
        </header>

        <section>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {tracks.map((track) => (
              <RoleCard key={track.key} name={track.title} href={`/roles/${track.key}`} />
            ))}
            <RoleCard name="CEO" fallbackText="Scorecard not written yet. Owner: Grant Hushek." />
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
