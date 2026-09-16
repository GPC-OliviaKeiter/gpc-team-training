import type { RoleSeat } from "@/lib/roles";

/**
 * One card on /roles per track. Two states:
 * - live: `href` is set (the track has its own /roles/<track> index page,
 *   true for all six real tracks, stub content or not). "Open track" links
 *   there.
 * - placeholder: no `href` (the CEO seat today, which has no track at all).
 *   Shows `fallbackText` and links nowhere.
 *
 * `seats` renders as its own short list inside the card body, each one a
 * direct link to that seat's scorecard when it has one (`scorecardHref`),
 * plain text when it doesn't yet. A multi-seat track like Process Consulting
 * is still one role, one card, but both its scorecards are reachable without
 * opening the track index first.
 */
export function RoleCard({
  name,
  href,
  seats,
  fallbackText,
}: {
  name: string;
  href?: string;
  seats?: RoleSeat[];
  fallbackText?: string;
}) {
  return (
    <div
      className={`relative flex h-full flex-col gap-2 border bg-card px-5 py-4 transition-colors ${
        href ? "border-border hover:border-gpc-primary-red" : "border-border"
      }`}
    >
      <h3 className="font-display text-xl font-normal">{name}</h3>

      {seats && seats.length > 0 && (
        <ul className="flex flex-col gap-1">
          {seats.map((seat) => (
            <li key={seat.name} className="text-[13px] leading-snug">
              {seat.scorecardHref ? (
                <a
                  href={seat.scorecardHref}
                  className="text-muted-foreground underline underline-offset-2 hover:text-gpc-primary-red"
                >
                  {seat.name}
                </a>
              ) : (
                <span className="text-muted-foreground">{seat.name}</span>
              )}
            </li>
          ))}
        </ul>
      )}

      {href ? (
        <a
          href={href}
          className="mt-auto pt-2 font-mono text-[11px] font-semibold tracking-[0.08em] text-gpc-primary-red uppercase hover:underline"
        >
          Open track →
        </a>
      ) : (
        <p className="mt-auto pt-2 text-[13px] leading-snug text-muted-foreground">{fallbackText}</p>
      )}
    </div>
  );
}
