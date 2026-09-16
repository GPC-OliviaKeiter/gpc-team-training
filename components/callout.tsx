import type { ReactNode } from "react";

/**
 * Callout: one rule or warning, pulled out of paragraph flow so it reads as
 * a rule instead of a sentence buried in prose. Red left border on the GPC
 * primary token. Two ways to use it: pass `children` directly in a .tsx
 * page, or let lib/role-markdown.ts embed one from a module's markdown,
 * where it's authored as a plain `<Callout>Sentence here.</Callout>` block.
 * That path builds the same markup as a raw HTML string (using the
 * CALLOUT_CLASSES below, so the two never drift), with the block's inner
 * text already run through marked's inline pass so bold and links survive.
 */
export const CALLOUT_CLASSES = {
  wrapper: "my-6 border-l-4 border-gpc-primary-red bg-card px-4 py-3",
  text: "text-[14.5px] leading-snug text-foreground",
};

export function Callout({ children, html }: { children?: ReactNode; html?: string }) {
  return (
    <div className={CALLOUT_CLASSES.wrapper}>
      {html !== undefined ? (
        <p className={CALLOUT_CLASSES.text} dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <p className={CALLOUT_CLASSES.text}>{children}</p>
      )}
    </div>
  );
}
