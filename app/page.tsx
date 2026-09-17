import { TopNav } from "@/components/top-nav";
import { GpcLogo } from "@/components/gpc-logo";
import { TrainingTimer } from "@/components/training-timer";
import {
  OVERVIEW_MODULES,
  OVERVIEW_GROUPS,
  CORE_FUNDAMENTALS,
} from "@/lib/overview";

export const metadata = { title: "Overview · GPC Team Training" };

const SOURCES = [
  { name: "GPC Wiki", detail: "Company, culture, structure, services, SOPs", href: "https://app.clickup.com/9012022270/docs/8cjh2zy-176272" },
  { name: "GPC General Onboarding", detail: "The 47 tasks of your first two weeks", href: "https://app.clickup.com/9012022270/v/li/901220437555" },
  { name: "Glossary of Terms", detail: "The words GPC uses and the ones it does not", href: "https://app.clickup.com/9012022270/docs/8cjh2zy-176192" },
  { name: "Role handbooks", detail: "One ClickUp doc per seat, linked from each track", href: "https://app.clickup.com/9012022270/docs/8cjh2zy-176272/8cjh2zy-110172" },
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

      {/* Hero. The one place the mark is set large. */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-[1040px] grid-cols-1 gap-8 px-6 pt-14 pb-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="mb-5 font-mono text-[11.5px] tracking-[0.2em] text-muted-foreground uppercase">
              GPC Team Training
            </div>
            <h1 className="font-display text-[clamp(2.75rem,7vw,4.5rem)] leading-[0.98] font-normal tracking-tight">
              Overview
            </h1>
            <p className="mt-6 max-w-[62ch] text-[17.5px] leading-relaxed text-muted-foreground">
              Everything true at GPC regardless of which seat you sit in: who the
              company is, what it sells, how the work gets done, and the tools it
              runs on. Ten modules, in reading order. Your seat&rsquo;s own handbook
              lives under{" "}
              <a href="/roles" className="text-primary underline underline-offset-2">
                Roles
              </a>
              .
            </p>
          </div>
          <div aria-hidden className="hidden justify-self-end lg:block">
            <GpcLogo
              color="auto"
              title=""
              className="h-[136px] w-auto text-gpc-primary-red opacity-90"
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1040px] px-6 pt-10 pb-20">
        <section className="mb-14" aria-label="Session timer">
          <TrainingTimer variant="card" />
        </section>

        {OVERVIEW_GROUPS.map((group) => {
          const modules = OVERVIEW_MODULES.filter((m) => m.group === group);
          if (modules.length === 0) return null;
          return (
            <section key={group} className="mb-14">
              <div className="mb-5 flex items-baseline gap-4 border-b border-foreground pb-2">
                <h2 className="font-display text-[26px] leading-none">{group}</h2>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {modules.length} module{modules.length === 1 ? "" : "s"}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {modules.map((m) => (
                  <a key={m.num} href={m.href} className="group block h-full">
                    <article className="flex h-full flex-col border border-border bg-card px-5 py-5 transition-colors hover:border-gpc-primary-red">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-mono text-[12px] font-semibold text-gpc-primary-red">
                          {m.num}
                        </span>
                        <span className="font-mono text-[10.5px] tracking-[0.06em] text-muted-foreground uppercase">
                          {m.minutes} min read
                        </span>
                      </div>
                      <h3 className="mt-2.5 font-display text-[22px] leading-tight font-normal">
                        {m.title}
                      </h3>
                      <p className="mt-2.5 text-[14px] leading-snug text-muted-foreground">
                        {m.blurb}
                      </p>
                      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                        <span className="font-mono text-[10px] tracking-[0.04em] text-muted-foreground">
                          {m.source}
                        </span>
                        <span className="font-mono text-[11px] font-semibold text-gpc-primary-red transition-transform group-hover:translate-x-0.5">
                          &rarr;
                        </span>
                      </div>
                    </article>
                  </a>
                ))}
              </div>
            </section>
          );
        })}

        <section className="mb-14">
          <div className="mb-3 flex items-baseline gap-4 border-b border-foreground pb-2">
            <h2 className="font-display text-[26px] leading-none">Core fundamentals</h2>
          </div>
          <p className="mb-5 max-w-[68ch] text-[15px] leading-relaxed text-muted-foreground">
            The craft, wherever it already lives on this site. A card with no link is
            a gap with a name against it rather than a silent absence.
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_FUNDAMENTALS.map((c) => {
              const body = (
                <div
                  className={`flex h-full flex-col border bg-card px-5 py-4 transition-colors ${
                    c.href
                      ? "border-border hover:border-gpc-primary-red"
                      : "border-dashed border-border"
                  }`}
                >
                  <h3 className="font-display text-[19px] leading-tight font-normal">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-snug text-muted-foreground">
                    {c.blurb}
                  </p>
                  {c.href ? (
                    <span className="mt-auto pt-4 font-mono text-[10.5px] font-semibold tracking-[0.08em] text-gpc-primary-red uppercase">
                      Open &rarr;
                    </span>
                  ) : (
                    <span className="mt-auto pt-4 font-mono text-[10.5px] tracking-[0.08em] text-muted-foreground uppercase">
                      Not written yet · {c.owner}
                    </span>
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

        <section className="mb-14">
          <div className="mb-3 flex items-baseline gap-4 border-b border-foreground pb-2">
            <h2 className="font-display text-[26px] leading-none">Where this comes from</h2>
          </div>
          <p className="mb-5 max-w-[68ch] text-[15px] leading-relaxed text-muted-foreground">
            Every module on this tab is rewritten once from a living source. When
            this site and the source disagree, the source is right. Tell the Project
            Manager so both get fixed.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SOURCES.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="block border border-border bg-card px-4 py-3.5 transition-colors hover:border-gpc-primary-red"
              >
                <div className="font-mono text-[10px] tracking-[0.1em] text-gpc-primary-red uppercase">
                  ClickUp
                </div>
                <div className="mt-1.5 text-[14.5px] font-medium">{s.name}</div>
                <div className="mt-1 text-[12.5px] leading-snug text-muted-foreground">
                  {s.detail}
                </div>
              </a>
            ))}
          </div>
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
