import { readFileSync } from "node:fs";
import path from "node:path";

export type RoleSeat = {
  name: string;
  /** Present once that seat's scorecard page ships. Absent seats render as
   * "not yet on this site" on /roles, linking out to clickupDocUrl instead. */
  scorecardHref?: string;
};

export type RoleModule = {
  num: string;
  title: string;
  blurb: string;
  href: string;
};

export type RoleTrack = {
  key: RoleTrackKey;
  title: string;
  eyebrow: string;
  lede: string;
  clickupDocUrl: string;
  seats: RoleSeat[];
  modules: RoleModule[];
};

/**
 * Order matches the seat order the Roles index renders in: Workflow PC,
 * Workshop PC, Engineer, Project Manager, Operations Manager, Marketing
 * Manager, Sales Setter, Sales Closer.
 */
export const ROLE_TRACK_KEYS = [
  "process-consulting",
  "engineering",
  "project-management",
  "operations",
  "marketing",
  "sales",
] as const;

export type RoleTrackKey = (typeof ROLE_TRACK_KEYS)[number];

export function readTrack(key: RoleTrackKey): RoleTrack {
  const filePath = path.join(process.cwd(), "content", "roles", key, "track.json");
  const raw = readFileSync(filePath, "utf-8");
  return { key, ...JSON.parse(raw) };
}

export function readAllTracks(): RoleTrack[] {
  return ROLE_TRACK_KEYS.map(readTrack);
}

/** Every seat across every track, in the fixed Roles-index order. */
export function readAllSeats(): { track: RoleTrack; seat: RoleSeat }[] {
  return readAllTracks().flatMap((track) => track.seats.map((seat) => ({ track, seat })));
}
