import { readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";

/**
 * Reads a role-track module doc from content/roles/<track>. Generalized from
 * the old Workflow-Consulting-only wc-markdown.ts: every role track's SOPs
 * are rewritten once from their ClickUp handbook (the living source of
 * truth), not sourced from call transcripts, so there's no citation
 * annotation pass here the way Grant Way's module-markdown.ts has one.
 */
export function readRoleMarkdown(track: string, filename: string) {
  const filePath = path.join(process.cwd(), "content", "roles", track, filename);
  const raw = readFileSync(filePath, "utf-8");

  const lines = raw.split("\n");
  const titleLine = lines.find((l) => l.startsWith("# "));
  const title = titleLine ? titleLine.replace(/^#\s*/, "").trim() : filename;

  const titleIndex = lines.indexOf(titleLine ?? "");
  const body = lines.slice(titleIndex + 1).join("\n").trim();

  const html = marked.parse(body, { gfm: true, breaks: false }) as string;

  return { title, html };
}
