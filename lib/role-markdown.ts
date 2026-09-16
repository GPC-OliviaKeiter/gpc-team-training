import { readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { FIGURE_CLASSES } from "@/components/figure";
import { CALLOUT_CLASSES } from "@/components/callout";

/**
 * Reads a role-track module doc from content/roles/<track>. Generalized from
 * the old Workflow-Consulting-only wc-markdown.ts: every role track's SOPs
 * are rewritten once from their ClickUp handbook (the living source of
 * truth), not sourced from call transcripts, so there's no citation
 * annotation pass here the way Grant Way's module-markdown.ts has one.
 *
 * Before handing the body to marked, renderEmbeddedComponents swaps two
 * inline tags for their real component markup, so a module author can write
 * a placeholder or a rule inline in prose and get the actual component in
 * the rendered page. See that function for how.
 *
 * A raw <svg>...</svg> block (for a diagram no component covers, e.g. a
 * swimlane) can also be written directly in a module's markdown; marked
 * passes a raw HTML block through untouched the same way. It must not
 * contain a blank line anywhere inside it: a blank line ends the HTML block
 * early, and marked wraps everything after it in a stray <p>, which breaks
 * SVG's namespace and silently kills the diagram (text renders, shapes and
 * colors don't). Keep every line of an inline SVG contiguous, no blank
 * lines until after the closing tag.
 */
export function readRoleMarkdown(track: string, filename: string) {
  const filePath = path.join(process.cwd(), "content", "roles", track, filename);
  const raw = readFileSync(filePath, "utf-8");

  const lines = raw.split("\n");
  const titleLine = lines.find((l) => l.startsWith("# "));
  const title = titleLine ? titleLine.replace(/^#\s*/, "").trim() : filename;

  const titleIndex = lines.indexOf(titleLine ?? "");
  const body = lines.slice(titleIndex + 1).join("\n").trim();

  const html = marked.parse(renderEmbeddedComponents(body), { gfm: true, breaks: false }) as string;

  return { title, html };
}

const FIGURE_TAG = /<Figure\s+([^/]*?)\/>/g;
const CALLOUT_TAG = /<Callout>([\s\S]*?)<\/Callout>/g;
const ATTR = /([a-zA-Z]+)="([^"]*)"/g;

function parseAttrs(attrString: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  for (const m of attrString.matchAll(ATTR)) attrs[m[1]] = m[2];
  return attrs;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Builds Figure's exact markup as a raw HTML string, from the same
 * FIGURE_CLASSES the component itself renders with, so this never drifts
 * from what components/figure.tsx shows when used directly. A plain string
 * builder, not a server-rendered React tree: Next's App Router refuses to
 * bundle react-dom/server into a Server Component's module graph, which
 * lib/role-markdown.ts is (every page.tsx that calls readRoleMarkdown is a
 * Server Component).
 */
function figureHtml(id: string, caption: string, spec: string): string {
  return (
    `<div class="${FIGURE_CLASSES.wrapper}">` +
    `<div class="${FIGURE_CLASSES.inner}">` +
    `<div class="${FIGURE_CLASSES.label}">Figure &middot; ${escapeHtml(id)}</div>` +
    `<p class="${FIGURE_CLASSES.caption}">${escapeHtml(caption)}</p>` +
    `<p class="${FIGURE_CLASSES.spec}">Capture: ${escapeHtml(spec)}</p>` +
    `</div></div>`
  );
}

/** Same idea as figureHtml, for Callout. `innerHtml` is already the result
 * of marked's inline pass, so bold and links inside the callout survive. */
function calloutHtml(innerHtml: string): string {
  return `<div class="${CALLOUT_CLASSES.wrapper}"><p class="${CALLOUT_CLASSES.text}">${innerHtml}</p></div>`;
}

/**
 * Renders `<Figure id="..." caption="..." spec="..." />` and
 * `<Callout>...</Callout>` tags written directly in a module's markdown
 * source into their real component markup before marked converts the rest
 * of the document. Marked passes a raw HTML block (one that opens with a
 * block level tag like `<div>` on its own line) straight through unchanged,
 * so this markup rides along into the page's HTML untouched.
 *
 * `npm run check`'s visual rule and its open-Figure list both scan this raw
 * markdown source directly, not the rendered output, so a module written
 * this way is already recognized as carrying a Figure without needing to
 * run this pipeline first.
 */
function renderEmbeddedComponents(markdown: string): string {
  let out = markdown.replace(FIGURE_TAG, (_match, attrString: string) => {
    const attrs = parseAttrs(attrString);
    return `\n\n${figureHtml(attrs.id ?? "", attrs.caption ?? "", attrs.spec ?? "")}\n\n`;
  });

  out = out.replace(CALLOUT_TAG, (_match, inner: string) => {
    const html = marked.parseInline(inner.trim(), { gfm: true }) as string;
    return `\n\n${calloutHtml(html)}\n\n`;
  });

  return out;
}
