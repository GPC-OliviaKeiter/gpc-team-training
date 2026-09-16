#!/usr/bin/env node
// Content and copy checker for gpc-team-training. Plain node, no build step,
// so it can't import lib/*.ts directly; it re-derives what it needs by
// reading the same source files the app reads. See CLAUDE.md / the handbooks
// buildout plan (docs/plans/2026-09-16-handbooks-buildout.md, section 2,
// "Copy and visual rules") for what each check enforces and why.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "app");
const CONTENT_DIR = path.join(ROOT, "content");

let failures = 0;
const warnings = [];

function fail(message) {
  failures += 1;
  console.error(`FAIL: ${message}`);
}

function warn(message) {
  warnings.push(message);
}

// ---------------------------------------------------------------------------
// Module route discovery: any page.tsx one level under app/overview/*,
// app/grant-way/*, or two levels under app/roles/<track>/* is a module.
// Track index pages (app/roles/page.tsx, app/roles/<track>/page.tsx) and the
// site root are not modules and aren't held to the module rules below.
// ---------------------------------------------------------------------------

function subdirs(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);
}

function findModuleRoutes() {
  const routes = [];

  for (const tab of ["overview", "grant-way"]) {
    const tabDir = path.join(APP_DIR, tab);
    for (const name of subdirs(tabDir)) {
      const pageFile = path.join(tabDir, name, "page.tsx");
      if (existsSync(pageFile)) routes.push({ route: `/${tab}/${name}`, file: pageFile });
    }
  }

  const rolesDir = path.join(APP_DIR, "roles");
  for (const track of subdirs(rolesDir)) {
    const trackDir = path.join(rolesDir, track);
    for (const name of subdirs(trackDir)) {
      const pageFile = path.join(trackDir, name, "page.tsx");
      if (existsSync(pageFile)) routes.push({ route: `/roles/${track}/${name}`, file: pageFile });
    }
  }

  return routes;
}

// ---------------------------------------------------------------------------
// SEARCH_INDEX coverage. lib/search-index.ts is TypeScript; this script runs
// under plain node with no loader, so it text-scans the literal array rather
// than importing it. The array is hand-authored and stays a flat list of
// `href: "..."` entries, which is what this regex relies on.
// ---------------------------------------------------------------------------

function readSearchIndexHrefs() {
  const src = readFileSync(path.join(ROOT, "lib", "search-index.ts"), "utf-8");
  const hrefs = new Set();
  for (const m of src.matchAll(/href:\s*"([^"]+)"/g)) {
    hrefs.add(m[1]);
  }
  return hrefs;
}

// ---------------------------------------------------------------------------
// Dash and banned-word scan. Every .md/.ts/.tsx/.json file this repo owns,
// excluding vendor/ (vendored transcripts and playbook markdown keep their
// own source discipline, not this site's) and build/dependency output.
// ---------------------------------------------------------------------------

const SCAN_EXTENSIONS = [".md", ".ts", ".tsx", ".json"];
// scripts/ excluded too: banned-words.json necessarily lists every banned
// word as data, and this checker script's own config isn't reader-facing
// content. docs/ is planning documentation (it names these same rules and
// their example words), not site content this check polices.
const SCAN_EXCLUDE_DIRS = new Set([
  "node_modules",
  ".next",
  ".git",
  "vendor",
  "public",
  "scripts",
  "docs",
]);

function walkFiles(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (SCAN_EXCLUDE_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(full, out);
    } else if (SCAN_EXTENSIONS.includes(path.extname(entry.name))) {
      out.push(full);
    }
  }
  return out;
}

const BANNED_WORDS = JSON.parse(readFileSync(path.join(ROOT, "scripts", "banned-words.json"), "utf-8"));

// Communication Guidelines quotes a real sent email verbatim, em dash and
// all, as a documented exception (see CHANGELOG v0.6): the em-dash ban is a
// rule for content this site authors, not a license to edit a direct quote
// of how Grant actually writes.
const DASH_EXCEPTIONS = new Set([
  path.join("content", "roles", "process-consulting", "06-communication-guidelines.md"),
]);

function checkDashesAndBannedWords() {
  const files = walkFiles(ROOT);
  for (const file of files) {
    const rel = path.relative(ROOT, file);
    const text = readFileSync(file, "utf-8");

    if (/[–—]/.test(text) && !DASH_EXCEPTIONS.has(rel)) {
      fail(`${rel} contains an em or en dash`);
    }

    const lower = text.toLowerCase();
    for (const word of BANNED_WORDS) {
      const pattern = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
      if (pattern.test(lower)) {
        fail(`${rel} contains banned word "${word}"`);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Visual rule: every module needs a table, a Figure placeholder, or an
// inline svg. Checked against the module's page.tsx plus, when the page
// reads a content/roles or content/grant-way markdown file, that file too.
// A module built on the Scorecard component always has an Outcomes table,
// so it passes automatically.
// ---------------------------------------------------------------------------

// Two allowlists, two different owners for deleting them: Step 2 cuts the
// six Process Consulting modules and deletes pc-visual-rule-allowlist.json;
// Step 3 cuts GitHub Basics (adds the branch-commit-PR-merge svg) and
// deletes overview-visual-rule-allowlist.json. Kept separate so Step 2
// clearing its file doesn't re-fail a route Step 3 hasn't reached yet.
const ALLOWLIST_FILES = ["pc-visual-rule-allowlist.json", "overview-visual-rule-allowlist.json"];
const VISUAL_ALLOWLIST = new Set(
  ALLOWLIST_FILES.flatMap((name) => {
    const p = path.join(ROOT, "scripts", name);
    return existsSync(p) ? JSON.parse(readFileSync(p, "utf-8")).routes : [];
  })
);

// The visual rule (table/Figure/svg) is scoped to the tracks this buildout
// plan governs: Overview and the Roles tracks. The Grant Way is a separate,
// pre-existing, transcript-cited track with its own sourcing discipline
// (every claim traces to a quote, see annotate-citations.ts) and isn't part
// of this plan's content rework, so it isn't held to this particular rule.
function visualCheckRoutes(moduleRoutes) {
  return moduleRoutes.filter(({ route }) => !route.startsWith("/grant-way/"));
}

function hasVisual(text) {
  const hasTable = /^\s*\|.+\|\s*$/m.test(text);
  const hasSvg = /<svg[\s>]/i.test(text);
  const hasFigure = /<Figure\b|\bfigure\b/i.test(text);
  return hasTable || hasSvg || hasFigure;
}

function contentTextFor(pageSource) {
  let text = pageSource;

  const roleMd = pageSource.match(/readRoleMarkdown\(\s*"([^"]+)"\s*,\s*"([^"]+)"\s*\)/);
  if (roleMd) {
    const mdPath = path.join(CONTENT_DIR, "roles", roleMd[1], roleMd[2]);
    if (existsSync(mdPath)) text += "\n" + readFileSync(mdPath, "utf-8");
  }

  const moduleMd = pageSource.match(/readModuleMarkdown\(\s*"([^"]+)"\s*\)/);
  if (moduleMd) {
    const mdPath = path.join(ROOT, "vendor", "grant-way-playbook", "playbook", moduleMd[1]);
    if (existsSync(mdPath)) text += "\n" + readFileSync(mdPath, "utf-8");
  }

  return text;
}

function checkVisualRule(moduleRoutes) {
  for (const { route, file } of visualCheckRoutes(moduleRoutes)) {
    const source = readFileSync(file, "utf-8");
    const usesScorecard = source.includes("@/components/scorecard");
    // A role's "Grant Way, for this role" doorway (see lib/grant-way-modules.ts)
    // is a card grid into Grant Way's own modules, not a content module of
    // its own. It's exempt the same way a track index page is.
    const isGrantWayDoorway = source.includes("@/lib/grant-way-modules");
    const text = contentTextFor(source);

    if (usesScorecard || isGrantWayDoorway || hasVisual(text)) continue;

    if (VISUAL_ALLOWLIST.has(route)) {
      warn(`${route} has no table, Figure, or svg yet (allowlisted, see scripts/*-visual-rule-allowlist.json)`);
    } else {
      fail(`${route} has no table, Figure, or svg`);
    }
  }
}

// ---------------------------------------------------------------------------
// Scorecard JSON required fields.
// ---------------------------------------------------------------------------

// Mirrors lib/scorecard.ts SCORECARD_REQUIRED_FIELDS. Kept in sync by hand:
// this script can't import the .ts module under plain node.
const SCORECARD_REQUIRED_FIELDS = [
  "mission",
  "capacity",
  "sourceUrl",
  "kpis",
  "outcomes",
  "competencies",
  "values",
];

function findScorecardFiles() {
  const files = [];
  const rolesDir = path.join(CONTENT_DIR, "roles");
  for (const track of subdirs(rolesDir)) {
    const trackDir = path.join(rolesDir, track);
    for (const entry of readdirSync(trackDir, { withFileTypes: true })) {
      if (entry.isFile() && entry.name.startsWith("scorecard-") && entry.name.endsWith(".json")) {
        files.push(path.join(trackDir, entry.name));
      }
    }
  }
  return files;
}

function checkScorecardFields() {
  for (const file of findScorecardFiles()) {
    const rel = path.relative(ROOT, file);
    let data;
    try {
      data = JSON.parse(readFileSync(file, "utf-8"));
    } catch (err) {
      fail(`${rel} is not valid JSON (${err.message})`);
      continue;
    }
    for (const field of SCORECARD_REQUIRED_FIELDS) {
      if (!(field in data)) fail(`${rel} is missing required field "${field}"`);
    }
  }
}

// ---------------------------------------------------------------------------
// Informational output: open Figure list, word count per module. Never
// affects the exit code.
// ---------------------------------------------------------------------------

function printFigureList(moduleRoutes) {
  const openFigures = [];
  for (const { route, file } of moduleRoutes) {
    const text = contentTextFor(readFileSync(file, "utf-8"));
    for (const m of text.matchAll(/<Figure[^>]*\bid=["']([^"']+)["']/g)) {
      openFigures.push(`${route} :: ${m[1]}`);
    }
  }
  console.log("\nOpen Figure list:");
  if (openFigures.length === 0) {
    console.log("  (none yet)");
  } else {
    for (const f of openFigures) console.log(`  ${f}`);
  }
}

function printWordCounts(moduleRoutes) {
  console.log("\nWord count per module:");
  for (const { route, file } of moduleRoutes) {
    const text = contentTextFor(readFileSync(file, "utf-8"));
    const plain = text
      .replace(/<[^>]+>/g, " ")
      .replace(/[{}[\]`*_#|]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const words = plain.length === 0 ? 0 : plain.split(" ").length;
    console.log(`  ${route}: ${words}`);
  }
}

// ---------------------------------------------------------------------------

const moduleRoutes = findModuleRoutes();
const searchHrefs = readSearchIndexHrefs();

for (const { route } of moduleRoutes) {
  if (!searchHrefs.has(route)) fail(`${route} has no SEARCH_INDEX entry`);
}

checkDashesAndBannedWords();
checkVisualRule(moduleRoutes);
checkScorecardFields();

printFigureList(moduleRoutes);
printWordCounts(moduleRoutes);

if (warnings.length > 0) {
  console.warn("\nWarnings:");
  for (const w of warnings) console.warn(`  WARN: ${w}`);
}

console.log(`\n${failures === 0 ? "PASS" : "FAIL"}: ${failures} failure(s), ${warnings.length} warning(s).`);

process.exit(failures === 0 ? 0 : 1);
