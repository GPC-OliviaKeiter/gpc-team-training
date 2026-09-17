export type ChecklistItem = { label: string; clickupUrl: string; owner?: string };
export type ChecklistPhase = {
  title: string;
  /** One line of context above the rows: who owns the phase, what order it
   *  has to run in, or which module on this site covers the same ground. */
  note?: string;
  /** Long, low-attention phases (the 21 ClickUp University courses) render
   *  behind a summary so they don't bury the six phases around them. */
  collapsed?: boolean;
  items: ChecklistItem[];
};

/**
 * Checklist: a phase-grouped list, every row a link out to its own ClickUp
 * task. Built for Overview's onboarding module
 * (content/overview/onboarding.json: phases[] -> items[] {label,
 * clickupUrl, owner?}).
 *
 * The rows are links, not checkboxes, on purpose. The ClickUp list is the
 * source of truth for what is done; a checkbox here would be a second,
 * quietly wrong record of the same thing. `owner` renders only when a row
 * belongs to someone other than the reader, a cross-role dependency called
 * out inline instead of left implicit.
 */
export function Checklist({ phases }: { phases: ChecklistPhase[] }) {
  return (
    <div className="flex flex-col gap-9">
      {phases.map((phase) => {
        const rows = (
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
        );

        return (
          <div key={phase.title}>
            <div className="mb-1 flex items-baseline gap-3">
              <span className="font-mono text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                {phase.title}
              </span>
              <span className="font-mono text-[11px] text-gpc-primary-red">
                {phase.items.length}
              </span>
            </div>
            {phase.note && (
              <p className="mb-3 max-w-[66ch] text-[13.5px] leading-snug text-muted-foreground">
                {phase.note}
              </p>
            )}
            {phase.collapsed ? (
              <details className="group border border-border bg-card">
                <summary className="cursor-pointer list-none px-4 py-3 text-[14px] text-foreground marker:content-none">
                  <span className="font-mono text-[11px] tracking-[0.06em] text-gpc-primary-red uppercase">
                    Show all {phase.items.length}
                  </span>
                </summary>
                <div className="border-t border-border px-4 py-4">{rows}</div>
              </details>
            ) : (
              rows
            )}
          </div>
        );
      })}
    </div>
  );
}
