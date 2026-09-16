import { SearchBox } from "./search-box";

const TABS = [
  { href: "/", label: "Overview" },
  { href: "/grant-way", label: "The Grant Way" },
  { href: "/roles", label: "Roles" },
] as const;

/**
 * Persistent top-level tab bar. "General first tab, then the tracks underneath
 * it": Overview is org-wide onboarding; everything after it is role-specific.
 * Roles is a card grid, one card per seat (see /roles); each seat's own
 * track (Process Consulting, Sales, Engineering, ...) lives under
 * /roles/<track> and still highlights this same "Roles" tab.
 */
export function TopNav({
  active,
}: {
  active?: "overview" | "grant-way" | "roles";
}) {
  return (
    <div className="border-b border-border bg-card">
      <nav
        aria-label="Training tracks"
        className="mx-auto flex max-w-[900px] items-center gap-1 px-6"
      >
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

        <div className="py-2">
          <SearchBox />
        </div>
      </nav>
    </div>
  );
}
