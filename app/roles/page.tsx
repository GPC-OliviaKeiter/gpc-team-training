import { TopNav } from "@/components/top-nav";
import { GpcLogo } from "@/components/gpc-logo";
import { RoleCard } from "@/components/role-card";
import { readAllTracks } from "@/lib/roles";

export const metadata = { title: "Roles · GPC Team Training" };

/** A track's lede opens with what the seat does and then names its ClickUp
 *  handbook. The card wants the first half only; the track page shows both. */
function firstSentence(text: string): string {
  const end = text.indexOf(". ");
  return end === -1 ? text : text.slice(0, end + 1);
}

export default function Page() {
  const tracks = readAllTracks();
  const written = tracks.filter((t) => t.modules.length > 0).length;
  const seats = tracks.reduce((n, t) => n + t.seats.length, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-gpc-neutral-500 px-6 py-2 text-center font-mono text-[13px] text-gpc-neutral-100">
        <b className="font-medium tracking-[0.04em] text-gpc-secondary-yellow">
          INTERNAL DRAFT
        </b>{" "}
        · GPC-only. Nothing here goes public without Grant&rsquo;s approval.
      </div>

      <TopNav active="roles" />

      <header className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-[1040px] grid-cols-1 gap-8 px-6 pt-14 pb-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="mb-5 font-mono text-[11.5px] tracking-[0.2em] text-muted-foreground uppercase">
              GPC Team Training
            </div>
            <h1 className="font-display text-[clamp(2.75rem,7vw,4.5rem)] leading-[0.98] font-normal tracking-tight">
              Roles
            </h1>
            <p className="mt-6 max-w-[62ch] text-[17.5px] leading-relaxed text-muted-foreground">
              One card per role at GPC. Each opens that role&rsquo;s track: its
              scorecard, or scorecards for a role with more than one seat, the SOPs
              for running it day to day, and, where Grant&rsquo;s own method for that
              role has been documented from real calls, its Grant Way modules.
            </p>
          </div>
          <div aria-hidden className="hidden justify-self-end lg:block">
            <GpcLogo
              color="auto"
              title=""
              className="h-[136px] w-auto text-gpc-secondary-purple opacity-90"
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1040px] px-6 pt-10 pb-20">
        <div className="mb-6 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-b border-foreground pb-2">
          <h2 className="font-display text-[26px] leading-none">Tracks</h2>
          <span className="font-mono text-[11px] text-muted-foreground">
            {tracks.length} roles · {seats} seats · {written} with modules written
          </span>
        </div>

        <section>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tracks.map((track) => (
              <RoleCard
                key={track.key}
                name={track.title}
                href={`/roles/${track.key}`}
                lede={firstSentence(track.lede)}
                seats={track.seats}
                moduleCount={track.modules.length}
              />
            ))}
            <RoleCard
              name="CEO"
              fallbackText="Scorecard not written yet. Owner: Grant Hushek."
            />
          </div>
        </section>

        <section className="mt-12 border border-border bg-card px-5 py-5">
          <div className="font-mono text-[10.5px] tracking-[0.14em] text-muted-foreground uppercase">
            What &ldquo;handbook only&rdquo; means
          </div>
          <p className="mt-2.5 max-w-[74ch] text-[14px] leading-relaxed text-muted-foreground">
            A track marked handbook only has its scorecard and an SOP index pointing
            straight at that seat&rsquo;s ClickUp handbook, but no modules rewritten
            here yet. Open the track and go to ClickUp from it. Process Consulting is
            the pattern the rest follow, one role at a time. Everything org-wide sits
            under{" "}
            <a href="/" className="text-primary underline underline-offset-2">
              Overview
            </a>{" "}
            and applies to every seat on this page.
          </p>
        </section>

        <footer className="mt-14 flex items-center gap-4 border-t border-foreground pt-6">
          <GpcLogo color="auto" title="" className="h-4 w-auto text-muted-foreground" />
          <p className="font-mono text-[11px] text-muted-foreground">
            GPC TEAM TRAINING · INTERNAL
          </p>
        </footer>
      </main>
    </div>
  );
}
