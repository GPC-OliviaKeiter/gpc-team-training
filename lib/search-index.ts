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
  track:
    | "Overview"
    | "The Grant Way"
    | "Process Consulting"
    | "Sales"
    | "Engineering"
    | "Project Management"
    | "Operations"
    | "Marketing";
  title: string;
  href: string;
  blurb: string;
  tags: string[];
};

export const SEARCH_INDEX: SearchEntry[] = [
  {
    track: "Overview",
    title: "Onboarding at GPC",
    href: "/overview/onboarding",
    blurb: "Every ClickUp onboarding task, phase by phase, each row linking its own task.",
    tags: [
      "onboarding", "new hire", "paperwork", "offer letter", "systems and tools",
      "slack", "clickup university", "first week calls", "role handbook",
      "checklist", "getting started",
    ],
  },
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
    track: "Process Consulting",
    title: "Scorecard: Workflow PC",
    href: "/roles/process-consulting/scorecard-workflow",
    blurb: "The Workflow Process Consultant scorecard: mission, KPIs, outcomes, competencies.",
    tags: [
      "scorecard", "workflow pc", "mission", "outcomes", "competencies",
      "kpi", "process consultant", "values in action", "cultural fit",
      "operating floor", "capacity",
    ],
  },
  {
    track: "Process Consulting",
    title: "Scorecard: Workshop PC",
    href: "/roles/process-consulting/scorecard-workshop",
    blurb: "The Workshop Process Consultant scorecard: mission, KPIs, outcomes, competencies.",
    tags: [
      "scorecard", "workshop pc", "workshop", "mission", "outcomes",
      "competencies", "kpi", "process consultant", "values in action",
      "cultural fit", "operating floor", "capacity",
    ],
  },
  {
    track: "Process Consulting",
    title: "Onboarding a Partner",
    href: "/roles/process-consulting/onboarding-a-partner",
    blurb: "The client kickoff call, the onboarding document, the engineering handover.",
    tags: [
      "onboarding", "client kickoff call", "onboarding document",
      "engineering handover", "minimum success", "maximum success",
      "new partner", "thought vomit", "kickoff document",
    ],
  },
  {
    track: "Process Consulting",
    title: "Running the Engagement",
    href: "/roles/process-consulting/running-the-engagement",
    blurb: "Weekly calls, Monday updates, and Workflow Assessment stakeholder interviews.",
    tags: [
      "weekly call", "weekly update", "monday update", "stakeholder interview",
      "workflow assessment", "interview week", "silver tier", "gold tier",
      "cadence", "blockers and adoption gaps",
    ],
  },
  {
    track: "Process Consulting",
    title: "Managing the Relationship",
    href: "/roles/process-consulting/managing-the-relationship",
    blurb: "Client health, scope creep, and spotting the next engagement.",
    tags: [
      "scope creep", "upsell", "cross-sell", "nps survey", "client relationship",
      "escalation", "pitching", "1-on-1 call", "requirement gathering",
    ],
  },
  {
    track: "Process Consulting",
    title: "Closing Out",
    href: "/roles/process-consulting/closing-out",
    blurb: "The three PC-owned action items that move a partner to Offboarding.",
    tags: [
      "closeout", "close out", "offboarding", "post-deployment offer",
      "feedback form", "closeout alignment meeting",
    ],
  },
  {
    track: "Process Consulting",
    title: "Tools: GitHub & Vercel",
    href: "/roles/process-consulting/github-and-vercel",
    blurb: "A curated path beyond GitHub Basics: reviewing PRs, reading a deployment.",
    tags: [
      "github", "vercel", "deployment", "pull request review", "rollback",
      "environment variables", "preview", "production", "github actions",
    ],
  },
  {
    track: "Process Consulting",
    title: "Communication Guidelines",
    href: "/roles/process-consulting/communication-guidelines",
    blurb: "How Grant actually writes to clients, sourced from real sent email.",
    tags: [
      "communication", "email", "client email", "1-3-1 method", "slack",
      "clickup", "hubspot", "which channel", "automation error", "tone",
      "signature", "writing style",
    ],
  },
  {
    track: "Process Consulting",
    title: "The Grant Way, for this role",
    href: "/roles/process-consulting/the-grant-way",
    blurb: "The same eight Grant Way modules, surfaced from inside this track.",
    tags: ["grant way", "process consultant role", "craft"],
  },
  {
    track: "Sales",
    title: "Scorecard: Setter",
    href: "/roles/sales/scorecard-setter",
    blurb: "What the Setter seat is held to: speed to lead, meeting quality, and handoff quality.",
    tags: [
      "setter scorecard", "sales kpis", "speed to lead", "show rate",
      "qualified meetings", "handoff completeness", "prospecting", "sales mission",
    ],
  },
  {
    track: "Sales",
    title: "Scorecard: Closer",
    href: "/roles/sales/scorecard-closer",
    blurb: "What the Closer seat is held to: revenue, close rate, pipeline coverage, and clean handoffs.",
    tags: [
      "closer scorecard", "sales kpis", "close rate", "pipeline coverage",
      "sales cycle", "forecast accuracy", "new revenue", "sales mission",
    ],
  },
  {
    track: "Sales",
    title: "The Sales Process",
    href: "/roles/sales/the-sales-process",
    blurb: "The stage-by-stage motion from lead to delivery handoff, pipelines, and lead ownership.",
    tags: [
      "sales process", "hubspot stages", "pipeline", "prospects pipeline",
      "referrals pipeline", "partnerships pipeline", "lead ownership",
      "setter closer delivery", "blackout dates", "closed won", "closed lost",
    ],
  },
  {
    track: "Sales",
    title: "Qualifying a Lead",
    href: "/roles/sales/qualifying-a-lead",
    blurb: "BANT, the Qualified Meeting Definition, fit signals, and pre-call preparation.",
    tags: [
      "bant", "budget authority need timing", "qualified meeting", "qualification",
      "fit signals", "smof", "pre call preparation", "setter compensation",
      "headcount pricing tier",
    ],
  },
  {
    track: "Sales",
    title: "Discovery and Demo",
    href: "/roles/sales/discovery-and-demo",
    blurb: "Opening the call, the discovery question order, the Solution Demo stage, and post-call follow-up.",
    tags: [
      "discovery call", "discovery questions", "solution demo", "post call follow up",
      "pitching", "objection handling phrases", "the last five minutes",
      "case study request", "proposal follow up",
    ],
  },
  {
    track: "Sales",
    title: "Proposal to Close",
    href: "/roles/sales/proposal-to-close",
    blurb: "Pricing and discount authority, the SOW and signature sequence, and the Sales-to-Delivery handoff.",
    tags: [
      "pricing authority", "discount approval", "sow", "pandadoc",
      "out for signature", "closed won", "delivery handoff",
      "sales to delivery handoff template", "closed lost nurture recycle",
    ],
  },
  {
    track: "Sales",
    title: "CRM Discipline",
    href: "/roles/sales/crm-discipline",
    blurb: "The 12 CRM Commandments and HubSpot activity and logging standards.",
    tags: [
      "crm commandments", "hubspot", "crm hygiene", "deal source",
      "append only fields", "logging standards", "hubspot notes",
      "deal stage rules",
    ],
  },
  {
    track: "Sales",
    title: "Prospect FAQ",
    href: "/roles/sales/prospect-faq",
    blurb: "The approved answers to common prospect questions, grouped by topic.",
    tags: [
      "prospect faq", "approved answers", "workshop pricing", "workflow assessment pricing",
      "technical build pricing", "roi", "security compliance", "soc 2",
      "escalation", "objection handling", "model agnostic",
    ],
  },
  {
    track: "Engineering",
    title: "Scorecard: Engineer",
    href: "/roles/engineering/scorecard-engineer",
    blurb: "What the Engineer seat is held to: technical design, on-time delivery, build quality, reliability.",
    tags: [
      "engineer scorecard", "engineering kpis", "technical rework rate",
      "escaped defects", "definition of done compliance", "mttd", "mttr",
      "documentation completeness", "engineering mission",
    ],
  },
  {
    track: "Engineering",
    title: "From Ticket to Build",
    href: "/roles/engineering/from-ticket-to-build",
    blurb: "Client communication rules, scoping time estimates, technical design, and partner call briefs.",
    tags: [
      "client communication", "turnaround expectation", "no dms", "scoping",
      "time estimates", "bloating rule", "technical design", "pre-build planning",
      "partner call brief", "meeting brief",
    ],
  },
  {
    track: "Engineering",
    title: "Definition of Done and QA",
    href: "/roles/engineering/definition-of-done-and-qa",
    blurb: "The Definition of Done, peer QA, naming conventions, and the rules for touching a live process.",
    tags: [
      "definition of done", "car requirements", "automation qa", "peer qa",
      "naming convention", "automations naming", "making changes to live processes",
      "live testing", "staging environment",
    ],
  },
  {
    track: "Engineering",
    title: "Go-Live and Operate",
    href: "/roles/engineering/go-live-and-operate",
    blurb: "Deployment, monitoring and ownership, incident response, root cause analysis, and closing support tickets.",
    tags: [
      "deployment", "go live", "handover session", "monitoring", "automation ownership",
      "production incident", "severity levels", "sev-1", "root cause analysis",
      "internal resolution", "support tickets", "rollback",
    ],
  },
  {
    track: "Engineering",
    title: "Access and Credentials",
    href: "/roles/engineering/access-and-credentials",
    blurb: "Requesting and confirming platform access, the credential vault, Chrome profiles, and Make.com migrations.",
    tags: [
      "client platform access", "credential management", "1password vault",
      "soc 2", "chrome profile", "primary backup engineer", "make.com migration",
      "automations client account",
    ],
  },
  {
    track: "Engineering",
    title: "Handover and Documentation",
    href: "/roles/engineering/handover-and-documentation",
    blurb: "Engineer-to-engineer handover, client SOP and automation documentation templates, and the Value Calculator.",
    tags: [
      "project handover", "engineer handover", "client sop template",
      "automation documentation", "how to create prompt", "value calculator",
      "meta prompting",
    ],
  },
  {
    track: "Engineering",
    title: "ClickUp for Engineers",
    href: "/roles/engineering/clickup-for-engineers",
    blurb: "Automations, evaluating internal automations against plan limits, soft launches, and migrations.",
    tags: [
      "clickup automations", "automation limits", "soft launch", "fulfilment space",
      "status colors", "clickup migration", "clickup training", "clickup like a pro",
    ],
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
