import { readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";

/**
 * Reads a Workflow Consulting module doc from content/workflow-consulting.
 * Unlike Grant Way, this content is rewritten once from the ClickUp Process
 * Consultant handbook (the living source of truth for the SOPs themselves —
 * a procedure change happens in ClickUp first, then gets re-ported here),
 * not sourced from call transcripts, so there's no citation annotation pass.
 */
export function readWcMarkdown(filename: string) {
  const filePath = path.join(process.cwd(), "content", "workflow-consulting", filename);
  const raw = readFileSync(filePath, "utf-8");

  const lines = raw.split("\n");
  const titleLine = lines.find((l) => l.startsWith("# "));
  const title = titleLine ? titleLine.replace(/^#\s*/, "").trim() : filename;

  const titleIndex = lines.indexOf(titleLine ?? "");
  const body = lines.slice(titleIndex + 1).join("\n").trim();

  const html = marked.parse(body, { gfm: true, breaks: false }) as string;

  return { title, html };
}
