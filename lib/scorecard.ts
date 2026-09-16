import { readFileSync } from "node:fs";
import path from "node:path";

export type ScorecardKpi = { name: string; calculation: string; target: string };
export type ScorecardOutcome = { what: string; howMeasured: string; byWhen: string };
/** A bullet with an optional bolded lead-in, e.g. ClickUp's "**Be Decent, Be
 * Direct.** Tells a partner..." becomes { label: "Be Decent, Be Direct.",
 * body: "Tells a partner..." }. Not every source bullet has a lead-in. */
export type ScorecardItem = { label?: string; body: string };

export type Scorecard = {
  mission: string;
  capacity: string;
  /** Direct link to this seat's own ClickUp scorecard page, not the track's
   * clickupDocUrl. Every scorecard page shows a "View in ClickUp" link. */
  sourceUrl: string;
  kpis: ScorecardKpi[];
  outcomes: ScorecardOutcome[];
  competencies: ScorecardItem[];
  values: ScorecardItem[];
};

/** Mirrored in scripts/check-content.mjs, which can't import this (plain
 * node, no TS loader) and re-declares the same list for its own check. */
export const SCORECARD_REQUIRED_FIELDS = [
  "mission",
  "capacity",
  "sourceUrl",
  "kpis",
  "outcomes",
  "competencies",
  "values",
] as const;

export function readScorecard(track: string, filename: string): Scorecard {
  const filePath = path.join(process.cwd(), "content", "roles", track, filename);
  const raw = readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw) as Partial<Scorecard>;

  for (const field of SCORECARD_REQUIRED_FIELDS) {
    if (!(field in data)) {
      throw new Error(`Scorecard content/roles/${track}/${filename} is missing required field "${field}"`);
    }
  }

  return data as Scorecard;
}
