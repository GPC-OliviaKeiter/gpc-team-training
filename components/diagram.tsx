import type { ReactNode } from "react";

/**
 * Frame for an inline SVG diagram: a numbered label, the drawing, and a
 * caption that says what the drawing claims.
 *
 * Diagrams are hand-authored inline SVG on the GPC tokens in
 * app/globals.css, never a chart library and never an image file. Three
 * reasons: the page has to read correctly with JavaScript off, the colors
 * have to follow the same tokens the rest of the site does, and a diagram
 * in the repo is diffable when the process behind it changes.
 *
 * Every diagram sets `role="img"` with its own `aria-label`, so a screen
 * reader gets the claim rather than a list of rectangles, and none of them
 * carry information in color alone: a lane, a stage, or a quadrant is
 * always labeled in text too.
 */
export function Diagram({
  label,
  caption,
  children,
}: {
  label: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-8 border border-border bg-card px-4 py-5 sm:px-6">
      <div className="mb-4 font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
        {label}
      </div>
      <div className="overflow-x-auto">{children}</div>
      {caption && (
        <figcaption className="mt-4 border-t border-border pt-3 text-[13px] leading-snug text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * A row of figures pulled out of prose: the number first, then what it
 * counts. Used where a module's point is a set of quantities (service
 * capacity, a sample ROI calculation) and a table would bury them.
 *
 * `note` carries a qualifier the number is meaningless without, which on
 * the AI ROI module is the "sample data" label every invented figure on
 * this site has to show.
 */
export type StatTile = {
  value: string;
  label: string;
  note?: string;
  tone?: "ink" | "red" | "orange" | "purple";
};

const TONE_CLASS: Record<NonNullable<StatTile["tone"]>, string> = {
  ink: "text-foreground",
  red: "text-gpc-primary-red",
  orange: "text-gpc-secondary-orange",
  purple: "text-gpc-secondary-purple",
};

export function StatTiles({ tiles }: { tiles: StatTile[] }) {
  return (
    <div className="my-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {tiles.map((t) => (
        <div key={t.label} className="border border-border bg-card px-4 py-4">
          <div
            className={`font-display text-[30px] leading-none ${TONE_CLASS[t.tone ?? "ink"]}`}
          >
            {t.value}
          </div>
          <div className="mt-2 text-[13.5px] leading-snug font-medium text-foreground">
            {t.label}
          </div>
          {t.note && (
            <div className="mt-1.5 font-mono text-[10.5px] tracking-[0.04em] text-muted-foreground">
              {t.note}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
