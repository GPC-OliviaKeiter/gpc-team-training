export type ChecklistItem = { label: string; clickupUrl: string; owner?: string };
export type ChecklistPhase = { title: string; items: ChecklistItem[]; collapsed?: boolean };

/**
 * Checklist: a phase-grouped list, every row a link out to its own ClickUp
 * task. Built for Overview's onboarding module (content/overview/
 * onboarding.json: phases[] -> items[] {label, clickupUrl, owner?}), not
 * used by the Process Consulting rewrite this component ships alongside.
 * `owner` renders only when a row belongs to someone other than the reader,
 * a cross-role dependency called out inline instead of left implicit.
 * A row's `clickupUrl` opens in a new tab only when it actually points off
 * this site; an in-site link (the onboarding module's "Your Role Handbook"
 * row, which points at /roles) navigates normally.
 * `collapsed` wraps one phase in a native <details>, closed by default: the
 * onboarding module's ClickUp University phase (20+ courses) would otherwise
 * dominate the page.
 */
export function Checklist({ phases }: { phases: ChecklistPhase[] }) {
  return (
    <div className="flex flex-col gap-8">
      {phases.map((phase) =>
        phase.collapsed ? (
          <details key={phase.title} className="group">
            <summary className="mb-3 flex cursor-pointer items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              <span className="transition-transform group-open:rotate-90">&rarr;</span>
              {phase.title}
              <span className="normal-case text-muted-foreground/70">({phase.items.length})</span>
            </summary>
            <ChecklistItems items={phase.items} />
          </details>
        ) : (
          <div key={phase.title}>
            <div className="mb-3 font-mono text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              {phase.title}
            </div>
            <ChecklistItems items={phase.items} />
          </div>
        )
      )}
    </div>
  );
}

function ChecklistItems({ items }: { items: ChecklistItem[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => {
        const external = /^https?:\/\//.test(item.clickupUrl);
        return (
          <li key={item.label}>
            <a
              href={item.clickupUrl}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="flex items-center justify-between gap-3 border border-border bg-card px-4 py-2.5 text-[14px] text-foreground transition-colors hover:border-gpc-primary-red"
            >
              <span>{item.label}</span>
              <span className="flex shrink-0 items-center gap-2">
                {item.owner && (
                  <span className="font-mono text-[10px] tracking-[0.06em] text-muted-foreground uppercase">
                    {item.owner}
                  </span>
                )}
                <span className="font-mono text-[11px] text-gpc-primary-red">&rarr;</span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
