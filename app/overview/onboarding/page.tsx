import { TopNav } from "@/components/top-nav";
import { Checklist } from "@/components/checklist";
import { Figure } from "@/components/figure";
import { readOnboarding } from "@/lib/onboarding";

export default function Page() {
  const phases = readOnboarding();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-gpc-neutral-500 px-6 py-2 text-center font-mono text-[13px] text-gpc-neutral-100">
        <b className="font-medium tracking-[0.04em] text-gpc-secondary-yellow">
          INTERNAL DRAFT
        </b>{" "}
        · GPC-only, for new hires, contractors, and partners.
      </div>

      <TopNav active="overview" />

      <main className="mx-auto max-w-[860px] px-6 pt-11 pb-20">
        <nav className="mb-6 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          <a href="/" className="hover:text-foreground hover:underline">
            Overview
          </a>{" "}
          / Onboarding
        </nav>

        <header className="mb-11 border-b border-border pb-8">
          <div className="mb-4 font-mono text-[11.5px] tracking-[0.2em] text-muted-foreground uppercase">
            Overview · Module 01
          </div>
          <h1 className="font-display text-[clamp(2.25rem,5.5vw,3.25rem)] leading-[1.05] font-normal tracking-tight">
            Onboarding at GPC
          </h1>
          <p className="mt-5 max-w-[68ch] text-[17px] leading-relaxed text-muted-foreground">
            Every task from GPC&rsquo;s ClickUp onboarding list, grouped into
            phases. Each row links its own ClickUp task: check it off there,
            not here. ClickUp University is 21 short courses on ClickUp itself,
            collapsed below since it&rsquo;s the longest phase and the one
            you&rsquo;ll work through over your first weeks, not your first day.
          </p>
        </header>

        <Figure
          id="onboarding-clickup-list"
          caption="GPC General Onboarding, the ClickUp list every row below links back to."
          spec="ClickUp, GPC General Onboarding list, board or list view with a few tasks checked off"
        />

        <div className="mt-8">
          <Checklist phases={phases} />
        </div>

        <footer className="mt-14 border-t border-foreground pt-6">
          <p className="font-mono text-[11px] text-muted-foreground">
            GPC TEAM TRAINING · INTERNAL
          </p>
        </footer>
      </main>
    </div>
  );
}
