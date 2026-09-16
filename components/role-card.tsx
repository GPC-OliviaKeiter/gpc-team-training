/**
 * One card on /roles per seat. Three states:
 * - live: `href` is set (that seat's scorecard page exists). The whole card
 *   is a link and opens the scorecard directly.
 * - stub: no `href` yet, but the seat is real. Shows `fallbackText` and
 *   links out to the seat's ClickUp handbook (`fallbackHref`) instead of a
 *   dead internal link.
 * - placeholder: no `href` and no `fallbackHref` (the CEO seat today, which
 *   has no ClickUp handbook at all). No link anywhere on the card.
 */
export function RoleCard({
  name,
  href,
  fallbackHref,
  fallbackText,
}: {
  name: string;
  href?: string;
  fallbackHref?: string;
  fallbackText?: string;
}) {
  const body = (
    <div
      className={`relative flex h-full flex-col gap-2 border bg-card px-5 py-4 transition-colors ${
        href ? "border-border hover:border-gpc-primary-red" : "border-border"
      }`}
    >
      <h3 className="font-display text-xl font-normal">{name}</h3>
      {href ? (
        <span className="mt-auto pt-2 font-mono text-[11px] font-semibold tracking-[0.08em] text-gpc-primary-red uppercase">
          Open scorecard →
        </span>
      ) : (
        <p className="mt-auto pt-2 text-[13px] leading-snug text-muted-foreground">{fallbackText}</p>
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

  if (fallbackHref) {
    return (
      <a href={fallbackHref} target="_blank" rel="noreferrer" className="block h-full">
        {body}
      </a>
    );
  }

  return <div className="h-full">{body}</div>;
}
