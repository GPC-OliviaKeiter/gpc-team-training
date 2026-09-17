import type { RoleSeat } from "@/lib/roles";

/**
 * One card on /roles per track. Two states:
 * - live: `href` is set (the track has its own /roles/<track> index page,
 *   true for all six real tracks, stub content or not). The whole card is
 *   a link and opens the track index directly.
 * - placeholder: no `href` (the CEO seat today, which has no track at all).
 *   Shows `fallbackText` and links nowhere.
 *
 * A live card also reports what is actually behind it: the seats it covers,
 * and how many modules have been written. A track showing "0 modules" is
 * honest about being a doorway to its ClickUp handbook rather than a
 * rewritten track, which is what five of the six are today.
 */
export function RoleCard({
  name,
  href,
  fallbackText,
  lede,
  seats,
  moduleCount,
}: {
  name: string;
  href?: string;
  fallbackText?: string;
  lede?: string;
  seats?: RoleSeat[];
  moduleCount?: number;
}) {
  const written = (moduleCount ?? 0) > 0;

  const body = (
    <div
      className={`relative flex h-full flex-col border bg-card px-5 py-5 transition-colors ${
        href ? "border-border hover:border-gpc-primary-red" : "border-dashed border-border"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-[22px] leading-tight font-normal">{name}</h3>
        {href && (
          <span
            className={`shrink-0 border px-2 py-0.5 font-mono text-[9.5px] tracking-[0.06em] uppercase ${
              written
                ? "border-gpc-secondary-orange text-gpc-secondary-orange"
                : "border-border text-muted-foreground"
            }`}
          >
            {written ? `${moduleCount} modules` : "Handbook only"}
          </span>
        )}
      </div>

      {seats && seats.length > 0 && (
        <div className="mt-2 font-mono text-[10.5px] tracking-[0.04em] text-muted-foreground uppercase">
          {seats.map((s) => s.name).join(" · ")}
        </div>
      )}

      {lede && (
        <p className="mt-3 text-[13.5px] leading-snug text-muted-foreground">{lede}</p>
      )}

      {href ? (
        <span className="mt-auto pt-5 font-mono text-[10.5px] font-semibold tracking-[0.08em] text-gpc-primary-red uppercase">
          Open track &rarr;
        </span>
      ) : (
        <p className="mt-auto pt-5 text-[13px] leading-snug text-muted-foreground">
          {fallbackText}
        </p>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block h-full">
        {body}
      </a>
    );
  }

  return <div className="h-full">{body}</div>;
}
