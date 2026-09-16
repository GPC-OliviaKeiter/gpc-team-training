/**
 * Figure: a screenshot placeholder. Renders a dashed box on the secondary
 * background token instead of an image, so a module can show exactly where
 * a screenshot belongs before anyone has captured one. `id` is the stable
 * handle `npm run check`'s open-Figure list reports; `caption` is what the
 * screenshot shows; `spec` is the one-line capture instruction ("ClickUp,
 * Partners list, status column visible") whoever shoots it follows literally.
 *
 * Used two ways: directly as JSX in a .tsx page, or embedded in a module's
 * markdown as a self-closing `<Figure id="..." caption="..." spec="..." />`
 * tag. lib/role-markdown.ts builds that same markup as a raw HTML string
 * (using the FIGURE_CLASSES below, so the two never drift) before the rest
 * of the document goes through marked, so a module author writes the
 * placeholder inline in prose and gets the real dashed box in the rendered
 * page, not a bare unstyled tag.
 */
export const FIGURE_CLASSES = {
  wrapper: "my-6 border border-dashed border-border bg-secondary px-5 py-8 text-center",
  inner: "mx-auto max-w-[46ch]",
  label: "font-mono text-[10px] tracking-[0.14em] text-secondary-foreground/70 uppercase",
  caption: "mt-2 text-[14px] leading-snug text-secondary-foreground",
  spec: "mt-3 font-mono text-[11px] text-secondary-foreground/70",
};

export function Figure({ id, caption, spec }: { id: string; caption: string; spec: string }) {
  return (
    <div className={FIGURE_CLASSES.wrapper}>
      <div className={FIGURE_CLASSES.inner}>
        <div className={FIGURE_CLASSES.label}>Figure &middot; {id}</div>
        <p className={FIGURE_CLASSES.caption}>{caption}</p>
        <p className={FIGURE_CLASSES.spec}>Capture: {spec}</p>
      </div>
    </div>
  );
}
