import type { Scorecard } from "@/lib/scorecard";

/**
 * Renders a seat scorecard: mission, a row of KPI stat tiles, the Outcomes
 * table, then Competencies and Values in Action as two columns. No prose
 * beyond the mission line, matching every ClickUp scorecard page's own shape
 * (Mission / Outcomes / Competencies / Cultural Fit / KPI table), reordered
 * so the numbers lead.
 */
export function ScorecardView({ scorecard }: { scorecard: Scorecard }) {
  const { mission, capacity, sourceUrl, kpis, outcomes, competencies, values } = scorecard;

  return (
    <div className="flex flex-col gap-12">
      <a
        href={sourceUrl}
        target="_blank"
        rel="noreferrer"
        className="-mt-6 self-start font-mono text-[11px] font-semibold tracking-[0.06em] text-primary uppercase underline underline-offset-2"
      >
        View this scorecard in ClickUp →
      </a>

      <section>
        <div className="mb-2 font-mono text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
          Mission
        </div>
        <p className="max-w-[68ch] text-[17px] leading-relaxed text-foreground">{mission}</p>
      </section>

      <section>
        <div className="mb-3 font-mono text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
          KPIs
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {kpis.map((kpi) => (
            <div key={kpi.name} className="border border-border bg-card px-4 py-3.5">
              <div className="text-[13.5px] leading-snug font-medium text-foreground">{kpi.name}</div>
              <div className="mt-2 font-mono text-[20px] font-semibold text-gpc-primary-red">
                {kpi.target}
              </div>
              <div className="mt-1 text-[12.5px] leading-snug text-muted-foreground">
                {kpi.calculation}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-3 font-mono text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
          Outcomes
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                  What
                </th>
                <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                  How Measured
                </th>
                <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                  By When
                </th>
              </tr>
            </thead>
            <tbody>
              {outcomes.map((o) => (
                <tr key={o.what}>
                  <td className="border border-border px-3 py-2 align-top font-medium text-foreground">
                    {o.what}
                  </td>
                  <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                    {o.howMeasured}
                  </td>
                  <td className="border border-border px-3 py-2 align-top whitespace-nowrap text-muted-foreground">
                    {o.byWhen}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 max-w-[68ch] text-[13px] leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Operating floor: </span>
          {capacity}
        </p>
      </section>

      <section className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          <div className="mb-3 font-mono text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
            Competencies
          </div>
          <ul className="flex flex-col gap-3">
            {competencies.map((c, i) => (
              <li key={i} className="text-[14px] leading-snug text-muted-foreground">
                {c.label && <span className="font-semibold text-foreground">{c.label} </span>}
                {c.body}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-3 font-mono text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
            Values in Action
          </div>
          <ul className="flex flex-col gap-3">
            {values.map((v, i) => (
              <li key={i} className="text-[14px] leading-snug text-muted-foreground">
                {v.label && <span className="font-semibold text-foreground">{v.label} </span>}
                {v.body}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
