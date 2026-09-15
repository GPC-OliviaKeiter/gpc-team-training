/**
 * Registry of Grant Way citation tags, e.g. [kevin], [sales], [delta-data 1:50].
 *
 * The playbook (vendor/grant-way-playbook) cites every claim inline, in brackets,
 * because that is the sourcing discipline that keeps it trustworthy. See that
 * repo's own README ("patterns must be sourced"). Read as raw markdown that
 * discipline is dense to the point of unreadable: some paragraphs carry a dozen
 * bracket tags. This registry is what lets the site keep every citation while
 * getting it out of the reading flow. See lib/annotate-citations.ts.
 *
 * Source repo: https://github.com/GPC-OliviaKeiter/grant-way-playbook
 */

const REPO = "https://github.com/GPC-OliviaKeiter/grant-way-playbook/blob/master";

export type Citation = {
  /** The bracket tag as it appears in playbook markdown, e.g. "kevin". */
  tag: string;
  /** One-line human label for the Sources list. */
  label: string;
  /** Path to the transcript file, relative to the repo root. */
  path: string;
};

/**
 * Known citation tags. This is a whitelist, not a pattern match: a module also
 * uses brackets for ordinary editorial asides (e.g. "[Rush]", "[sic]"-style
 * clarifications), and those must never be mistaken for a source link.
 * New tags land here the same commit a new transcript batch does.
 */
export const CITATIONS: Citation[] = [
  { tag: "kevin", label: "Kevin Provencher (GM) · 8/24 Rush", path: "transcripts/2026-08-24-rush/interview-gm-group-2-kevin.md" },
  { tag: "gm-1", label: "Jesse Welborn & Ryan Maguire (GMs) · 8/24 Rush", path: "transcripts/2026-08-24-rush/interview-gm-group-1-jesse-ryan.md" },
  { tag: "peterbilt", label: "Justin Goree & Hal Meriwether (Peterbilt RGMs) · 8/24 Rush", path: "transcripts/2026-08-24-rush/interview-rgm-peterbilt-justin-hal.md" },
  { tag: "intl", label: "Garrett Dobbs, Boston Cummings & Adam Honhera (International RGMs) · 8/24 Rush", path: "transcripts/2026-08-24-rush/interview-rgm-international-garrett-boston-adam.md" },
  { tag: "go", label: "Internal GO call · 8/24 Rush", path: "transcripts/2026-08-24-rush/go-call-internal.md" },
  { tag: "check-in", label: "Sponsor check-in, Lacy & Marcelo · 8/24 Rush", path: "transcripts/2026-08-24-rush/checkin-lacy-marcelo.md" },
  { tag: "parts", label: "Parts team interview · 8/25 Rush", path: "transcripts/2026-08-25-rush/interview-parts-joe-kyle-jeremy-shivniel.md" },
  { tag: "aftermarket", label: "Aftermarket team interview · 8/25 Rush", path: "transcripts/2026-08-25-rush/interview-aftermarket-chad-victor-deborah-mike.md" },
  { tag: "it", label: "IT team interview · 8/25 Rush", path: "transcripts/2026-08-25-rush/interview-it-asif-daniel-matthias.md" },
  { tag: "reporting", label: "Reporting team interview · 8/25 Rush", path: "transcripts/2026-08-25-rush/interview-reporting-jeff-marcus-robin-joshua-isaac.md" },
  { tag: "debrief", label: "Internal debrief, Grant & Olivia · 8/25 Rush", path: "transcripts/2026-08-25-rush/debrief-internal-grant-olivia.md" },
  { tag: "delta-go", label: "Engagement-opening GO call · 8/26 Delta Water Products", path: "transcripts/2026-08-26-delta-water-products/go-call-internal.md" },
  { tag: "sales", label: "Sales leadership interview · 8/27 Rush", path: "transcripts/2026-08-27-rush/interview-sales-will-steven-adam-marcelo.md" },
  { tag: "kickoff", label: "Leadership Kickoff · 8/19 Rush", path: "transcripts/2026-08-19-rush/kickoff-leadership.md" },
  { tag: "kickoff-agenda", label: "Internal kickoff agenda prep · 8/19 Rush", path: "transcripts/2026-08-19-rush/kickoff-agenda-prep.md" },
  { tag: "delta-data", label: "Pre-SOW data review call · 7/15 Delta Water Products", path: "transcripts/2026-07-15-delta-water-products/data-review-call.md" },
  { tag: "delta-kickoff", label: "AI Adoption Kickoff Call, Madhav · 9/2 Delta Water Products", path: "transcripts/2026-09-02-delta-water-products/kickoff-madhav.md" },
  { tag: "flowium-training", label: "\"Flowium Friday\" AI training session · 9/11 Flowium", path: "transcripts/2026-09-11-flowium/training-session.md" },
  { tag: "jason-followup", label: "Follow-up interview, Jason Fransella (CTO) · 9/11 Rush", path: "transcripts/2026-09-11-rush/interview-followup-jason.md" },
  { tag: "daniel-followup", label: "Follow-up interview, Daniel Decker (IT) · 9/11 Rush", path: "transcripts/2026-09-11-rush/interview-followup-daniel.md" },
  { tag: "mike-followup", label: "Follow-up interview, Mike Eppes (Aftermarket) · 9/11 Rush", path: "transcripts/2026-09-11-rush/interview-followup-aftermarket-mike.md" },
];

export const CITATION_MAP = new Map(CITATIONS.map((c) => [c.tag, c]));

export function citationHref(c: Citation): string {
  return `${REPO}/${c.path}`;
}
