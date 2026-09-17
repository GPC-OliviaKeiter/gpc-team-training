import { SearchBox } from "./search-box";
import { GpcLogo } from "./gpc-logo";
import { TrainingTimer } from "./training-timer";

const TABS = [
  { href: "/", label: "Overview" },
  { href: "/roles", label: "Roles" },
] as const;

/**
 * Persistent top bar on every page: the GPC mark, the two tabs, the session
 * timer, and search.
 *
 * "General first tab, then the tracks underneath it": Overview is org-wide
 * onboarding; everything after it is role-specific. Roles is a card grid,
 * one card per track (see /roles); each track (Process Consulting, Sales,
 * Engineering, ...) lives under /roles/<track> and still highlights this
 * same "Roles" tab. The Grant Way isn't its own tab: Grant personally does
 * every role, so its content is scoped to whichever role it's sourced from
 * (Process Consulting today, via that track's own doorway at
 * /roles/process-consulting/the-grant-way) and reads as "Roles" active, not
 * a company-wide third tab. See README's "Grant Way lives inside a role".
 *
 * The timer lives here rather than only on the Overview index so it keeps
 * counting while someone reads their way through a track, which is the
 * whole point of it (see components/training-timer.tsx).
 */
export function TopNav({ active }: { active?: "overview" | "roles" }) {
  return (
    <div className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur-sm">
      <nav
        aria-label="Training tracks"
        className="mx-auto flex max-w-[1040px] items-center gap-3 px-6"
      >
        <a
          href="/"
          className="flex shrink-0 items-center gap-2 py-3 pr-1"
          aria-label="GPC Team Training, home"
        >
          <GpcLogo color="auto" title="" className="h-[18px] w-auto text-foreground" />
        </a>

        <span aria-hidden className="h-5 w-px shrink-0 bg-border" />

        <div className="flex flex-1 gap-1 overflow-x-auto">
          {TABS.map((t) => {
            const key = t.href === "/" ? "overview" : t.href.slice(1);
            const isActive = key === active;
            return (
              <a
                key={t.href}
                href={t.href}
                aria-current={isActive ? "page" : undefined}
                className={`whitespace-nowrap border-b-2 px-3 py-3 font-mono text-[12px] font-semibold tracking-[0.06em] uppercase transition-colors ${
                  isActive
                    ? "border-gpc-primary-red text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </a>
            );
          })}
        </div>

        <div className="hidden py-2 sm:block">
          <TrainingTimer variant="bar" />
        </div>

        <div className="py-2">
          <SearchBox />
        </div>
      </nav>
    </div>
  );
}
