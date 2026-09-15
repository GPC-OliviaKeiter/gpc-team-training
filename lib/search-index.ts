/**
 * The site's search index: one entry per module, across every track. Tags are
 * hand-authored, not auto-extracted. The point is that someone typing "scope
 * creep" or "how does merge work" lands on the right module without knowing
 * which tab it's under, and a curated tag list is more reliable for that than
 * a keyword scrape of the prose.
 *
 * Add a tag list here the same commit a new module ships. There's no build
 * step that keeps this in sync automatically, the same tradeoff as everywhere
 * else content gets re-authored into this site (see README's "Adding a new
 * track").
 */

export type SearchEntry = {
  track: "Overview" | "The Grant Way" | "Workflow Consulting";
  title: string;
  href: string;
  blurb: string;
  tags: string[];
};

export const SEARCH_INDEX: SearchEntry[] = [
  {
    track: "Overview",
    title: "GitHub Basics",
    href: "/overview/github-basics",
    blurb: "Repos, branches, commits, pull requests, merge, and how it works at GPC.",
    tags: [
      "github", "git", "branch", "commit", "pull request", "pr", "merge",
      "repo", "repository", "version control", "main branch", "code review",
      "delete branch", "clone",
    ],
  },
  {
    track: "The Grant Way",
    title: "Method Overview",
    href: "/grant-way/method-overview",
    blurb: "The philosophy and core frameworks everything else hangs on.",
    tags: [
      "method", "philosophy", "pro dreamer", "pro complainer", "value math",
      "technology ladder", "governance posture", "framework",
      "probleming before solutioning", "infrastructure before intelligence",
      "four questions of work",
    ],
  },
  {
    track: "The Grant Way",
    title: "Discovery Interviews",
    href: "/grant-way/discovery-interviews",
    blurb: "The flagship module: how Grant runs an AI strategy interview.",
    tags: [
      "discovery interview", "ai strategy interview", "interview", "facilitation",
      "question bank", "opening monologue", "interviewee archetypes",
      "extraction checklist", "rapport", "functional panel", "deep dive",
      "camera on", "magic wand question",
    ],
  },
  {
    track: "The Grant Way",
    title: "Internal GO Calls",
    href: "/grant-way/go-calls",
    blurb: "How the team preps before a client-facing day.",
    tags: [
      "go call", "internal go call", "pre-day huddle", "engagement opener",
      "prep call", "internal prep", "five jobs of a go call",
    ],
  },
  {
    track: "The Grant Way",
    title: "Client Check-ins",
    href: "/grant-way/client-checkins",
    blurb: "Same-day debriefs with the client sponsors.",
    tags: [
      "check-in", "client check-in", "sponsor check-in", "demo feedback",
      "same-day debrief", "nervous executive",
    ],
  },
  {
    track: "The Grant Way",
    title: "Internal Debriefs",
    href: "/grant-way/internal-debriefs",
    blurb: "The internal same-day synthesis call (Grant + team).",
    tags: [
      "debrief", "internal debrief", "synthesis", "positioning", "pricing",
      "post-call processing", "acceptance criteria",
    ],
  },
  {
    track: "The Grant Way",
    title: "Kickoff Calls",
    href: "/grant-way/kickoff-calls",
    blurb: "The Leadership Kickoff: definitions of success, the engagement sentence.",
    tags: [
      "kickoff", "kickoff call", "leadership kickoff", "definition of success",
      "engagement sentence", "minimum success", "maximum success", "roster count",
    ],
  },
  {
    track: "The Grant Way",
    title: "Training Sessions",
    href: "/grant-way/training-sessions",
    blurb: "Client AI training (\"Flowium Friday\"): a recurring deliverable.",
    tags: [
      "training session", "flowium friday", "ai training", "client training",
      "vault", "global instructions", "about me file", "about my company",
      "claude chat", "claude cowork", "claude code",
    ],
  },
  {
    track: "The Grant Way",
    title: "Follow-up Interviews",
    href: "/grant-way/followup-interviews",
    blurb: "Technical & opportunity deep-dives after discovery.",
    tags: [
      "follow-up interview", "governance", "rollout", "architecture", "roi",
      "opportunity scoping", "rollout negotiation", "technical deep dive",
    ],
  },
  {
    track: "Workflow Consulting",
    title: "Role Overview",
    href: "/workflow-consulting/role-overview",
    blurb: "The Process Consultant scorecard: mission, outcomes, competencies.",
    tags: [
      "role overview", "scorecard", "mission", "outcomes", "competencies",
      "kpi", "process consultant", "operating floor", "build sharpen scale",
    ],
  },
  {
    track: "Workflow Consulting",
    title: "Onboarding a Partner",
    href: "/workflow-consulting/onboarding-a-partner",
    blurb: "The client kickoff call, the onboarding document, the engineering handover.",
    tags: [
      "onboarding", "client kickoff call", "onboarding document",
      "engineering handover", "minimum success", "maximum success",
      "new partner", "thought vomit", "kickoff document",
    ],
  },
  {
    track: "Workflow Consulting",
    title: "Running the Engagement",
    href: "/workflow-consulting/running-the-engagement",
    blurb: "Weekly calls, Monday updates, and Workflow Assessment stakeholder interviews.",
    tags: [
      "weekly call", "weekly update", "monday update", "stakeholder interview",
      "workflow assessment", "interview week", "silver tier", "gold tier",
      "cadence", "blockers and adoption gaps",
    ],
  },
  {
    track: "Workflow Consulting",
    title: "Managing the Relationship",
    href: "/workflow-consulting/managing-the-relationship",
    blurb: "Client health, scope creep, and spotting the next engagement.",
    tags: [
      "scope creep", "upsell", "cross-sell", "nps survey", "client relationship",
      "escalation", "pitching", "1-on-1 call", "requirement gathering",
    ],
  },
  {
    track: "Workflow Consulting",
    title: "Closing Out",
    href: "/workflow-consulting/closing-out",
    blurb: "The three PC-owned action items that move a partner to Offboarding.",
    tags: [
      "closeout", "close out", "offboarding", "post-deployment offer",
      "feedback form", "closeout alignment meeting",
    ],
  },
  {
    track: "Workflow Consulting",
    title: "Tools: GitHub & Vercel",
    href: "/workflow-consulting/github-and-vercel",
    blurb: "A curated path beyond GitHub Basics: reviewing PRs, reading a deployment.",
    tags: [
      "github", "vercel", "deployment", "pull request review", "rollback",
      "environment variables", "preview", "production", "github actions",
    ],
  },
  {
    track: "Workflow Consulting",
    title: "Communication Guidelines",
    href: "/workflow-consulting/communication-guidelines",
    blurb: "How Grant actually writes to clients, sourced from real sent email.",
    tags: [
      "communication", "email", "client email", "1-3-1 method", "slack",
      "clickup", "hubspot", "which channel", "automation error", "tone",
      "signature", "writing style",
    ],
  },
  {
    track: "Workflow Consulting",
    title: "The Grant Way, for this role",
    href: "/workflow-consulting/the-grant-way",
    blurb: "The same eight Grant Way modules, surfaced from inside this track.",
    tags: ["grant way", "workflow consultant role", "craft"],
  },
];

export type SearchResult = SearchEntry & { score: number };

/**
 * Scores every index entry against the query and returns matches, best first.
 * Tag hits count for more than a title or blurb hit. Tags are the curated
 * signal, prose is a fallback.
 */
export function searchIndex(query: string): SearchResult[] {
  const words = query
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.trim())
    .filter((w) => w.length >= 2);

  if (words.length === 0) return [];

  const results: SearchResult[] = SEARCH_INDEX.map((entry) => {
    let score = 0;
    const tagsLower = entry.tags.map((t) => t.toLowerCase());
    const titleLower = entry.title.toLowerCase();
    const blurbLower = entry.blurb.toLowerCase();

    for (const word of words) {
      if (tagsLower.some((t) => t.includes(word) || word.includes(t))) score += 3;
      if (titleLower.includes(word)) score += 2;
      if (blurbLower.includes(word)) score += 1;
    }

    return { ...entry, score };
  });

  return results.filter((r) => r.score > 0).sort((a, b) => b.score - a.score);
}
