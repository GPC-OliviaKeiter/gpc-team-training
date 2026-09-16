export type ChecklistItem = { label: string; clickupUrl: string; owner?: string };
export type ChecklistPhase = { title: string; items: ChecklistItem[] };

/**
 * Checklist: a phase-grouped list, every row a link out to its own ClickUp
 * task. Built for Overview's onboarding module (content/overview/
 * onboarding.json: phases[] -> items[] {label, clickupUrl, owner?}), not
 * used by the Process Consulting rewrite this component ships alongside.
 * `owner` renders only when a row belongs to someone other than the reader,
 * a cross-role dependency called out inline instead of left implicit.
 */
export function Checklist({ phases }: { phases: ChecklistPhase[] }) {
  return (
    <div className="flex flex-col gap-8">
      {phases.map((phase) => (
        <div key={phase.title}>
          <div className="mb-3 font-mono text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
            {phase.title}
          </div>
          <ul className="flex flex-col gap-2">
            {phase.items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.clickupUrl}
                  target="_blank"
                  rel="noreferrer"
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
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
