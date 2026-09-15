import type { ReactNode } from "react";
import { TopNav } from "./top-nav";
import { citationHref, type NumberedSource } from "@/lib/annotate-citations";

type Crumb = { label: string; href?: string };
type Track = "overview" | "grant-way" | "workflow-consulting";

export function ModuleShell({
  track,
  crumbs,
  eyebrow,
  title,
  lede,
  children,
  sources,
  banner = "GPC-only. Nothing here goes public without Grant’s approval.",
}: {
  track: Track;
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  children: ReactNode;
  sources?: NumberedSource[];
  banner?: string;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-gpc-neutral-500 px-6 py-2 text-center font-mono text-[13px] text-gpc-neutral-100">
        <b className="font-medium tracking-[0.04em] text-gpc-secondary-yellow">
          INTERNAL DRAFT
        </b>{" "}
        — {banner}
      </div>

      <TopNav active={track} />

      <main className="mx-auto max-w-[820px] px-6 pt-11 pb-20">
        <nav className="mb-6 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          {crumbs.map((c, i) => (
            <span key={c.label}>
              {i > 0 && " / "}
              {c.href ? (
                <a href={c.href} className="hover:text-foreground hover:underline">
                  {c.label}
                </a>
              ) : (
                c.label
              )}
            </span>
          ))}
        </nav>

        <header className="mb-11 border-b border-border pb-8">
          <div className="mb-4 font-mono text-[11.5px] tracking-[0.2em] text-muted-foreground uppercase">
            {eyebrow}
          </div>
          <h1 className="font-display text-[clamp(2.25rem,5.5vw,3.25rem)] leading-[1.05] font-normal tracking-tight">
            {title}
          </h1>
          {lede && (
            <div className="mt-5 max-w-[68ch] text-[17px] leading-relaxed text-muted-foreground">
              {lede}
            </div>
          )}
        </header>

        <div className="md-body">{children}</div>

        {sources && sources.length > 0 && (
          <section className="mt-14 border-t border-border pt-6" aria-label="Sources">
            <div className="mb-3 font-mono text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              Sources
            </div>
            <ol className="flex flex-col gap-1.5">
              {sources.map((s) => (
                <li
                  key={s.n}
                  id={`src-${s.n}`}
                  className="flex gap-2 text-[13.5px] leading-snug text-muted-foreground"
                >
                  <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                    {s.n}.
                  </span>
                  <span>
                    {s.citation.label}{" "}
                    <a
                      href={citationHref(s.citation)}
                      className="font-mono text-[11px] text-primary underline underline-offset-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      view transcript →
                    </a>
                  </span>
                </li>
              ))}
            </ol>
          </section>
        )}

        <footer className="mt-14 border-t border-foreground pt-6">
          <p className="font-mono text-[11px] text-muted-foreground">
            GPC TEAM TRAINING · INTERNAL
          </p>
        </footer>
      </main>
    </div>
  );
}
