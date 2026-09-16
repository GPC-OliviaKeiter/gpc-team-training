import { readFileSync } from "node:fs";
import path from "node:path";

export type SopSeat = "workflow" | "workshop" | "both" | "setter" | "closer";

export type SopRow = {
  name: string;
  pageId: string;
  url: string;
  seat: SopSeat;
  module: string | null;
};

/**
 * Reads a track's sops.json: every SOP page in that track's ClickUp
 * handbook, tagged by `seat` and by the module (its `num` from track.json)
 * that condenses it, or `null` when the SOP is index only. `url` is that
 * row's own ClickUp page link, not the track's clickupDocUrl.
 */
export function readSops(track: string): SopRow[] {
  const filePath = path.join(process.cwd(), "content", "roles", track, "sops.json");
  const raw = readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as SopRow[];
}
