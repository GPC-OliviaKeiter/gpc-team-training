import type { RoleModule } from "@/lib/roles";
import type { SopRow } from "@/lib/sops";

/**
 * SopIndex: the per-track table at the bottom of a track page, one row per
 * SOP page in that track's ClickUp handbook. Columns are the SOP name
 * (linking straight to its own ClickUp page, not the track's doc-level
 * link), Seat, and Covered in (linking the module that condenses it,
 * `note` in italics for a row that's index-only but needs a flag, e.g.
 * "legacy, confirm with Augusto," or plain "Index only" otherwise). ClickUp
 * doesn't split most tracks' SOPs by seat, so `seat` is usually "both"; a
 * track like Process Consulting, where one seat has no SOPs written yet,
 * tags every row for the seat that does.
 */
export function SopIndex({ sops, modules }: { sops: SopRow[]; modules: RoleModule[] }) {
  const moduleByNum = new Map(modules.map((m) => [m.num, m]));

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-[14px]">
        <thead>
          <tr>
            <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
              SOP
            </th>
            <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
              Seat
            </th>
            <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
              Covered in
            </th>
          </tr>
        </thead>
        <tbody>
          {sops.map((sop) => {
            const mod = sop.module ? moduleByNum.get(sop.module) : undefined;
            return (
              <tr key={sop.pageId}>
                <td className="border border-border px-3 py-2 align-top font-medium text-foreground">
                  <a
                    href={sop.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline underline-offset-2"
                  >
                    {sop.name}
                  </a>
                </td>
                <td className="border border-border px-3 py-2 align-top text-muted-foreground capitalize">
                  {sop.seat}
                </td>
                <td className="border border-border px-3 py-2 align-top text-muted-foreground">
                  {mod ? (
                    <a href={mod.href} className="text-primary underline underline-offset-2">
                      {mod.title}
                    </a>
                  ) : sop.note ? (
                    <span className="italic">{sop.note}</span>
                  ) : (
                    "Index only"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
