import { readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { annotateCitations, type NumberedSource } from "./annotate-citations";

/**
 * Reads a Grant Way playbook module doc from the grant-way-playbook submodule
 * (vendor/grant-way-playbook/playbook — the living source of truth, updated by
 * that repo's own transcript pipeline) and splits it into what a module page
 * needs: the H1 title, the rendered HTML body with citations turned into
 * superscript source links, and the numbered source list for the page's
 * Sources footer. The module doc stays the single source of truth — this
 * never re-transcribes it, only re-renders it.
 */
export function readModuleMarkdown(filename: string) {
  const filePath = path.join(process.cwd(), "vendor", "grant-way-playbook", "playbook", filename);
  const raw = readFileSync(filePath, "utf-8");

  const lines = raw.split("\n");
  const titleLine = lines.find((l) => l.startsWith("# "));
  const rawTitle = titleLine ? titleLine.replace(/^#\s*/, "").trim() : filename;
  // Strip the leading "NN. " module number — the page chrome shows it in the eyebrow already.
  const title = rawTitle.replace(/^\d+\.\s*/, "");

  // Body is everything after the H1 line.
  const titleIndex = lines.indexOf(titleLine ?? "");
  const body = lines.slice(titleIndex + 1).join("\n").trim();

  const { markdown: annotated, sources } = annotateCitations(body);
  const html = marked.parse(annotated, { gfm: true, breaks: false }) as string;

  return { title, html, sources };
}

export type { NumberedSource };
