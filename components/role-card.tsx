/**
 * One card on /roles per track. Two states:
 * - live: `href` is set (the track has its own /roles/<track> index page,
 *   true for all six real tracks, stub content or not). The whole card is
 *   a link and opens the track index directly.
 * - placeholder: no `href` (the CEO seat today, which has no track at all).
 *   Shows `fallbackText` and links nowhere.
 */
export function RoleCard({
  name,
  href,
  fallbackText,
}: {
  name: string;
  href?: string;
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
          Open track →
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

  return <div className="h-full">{body}</div>;
}
