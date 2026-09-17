/**
 * The Overview tab's module list, and the Core Fundamentals doorways under it.
 *
 * Overview is the org-wide track: everything someone needs in their first
 * two weeks regardless of which seat they sit in. Role-specific material
 * lives under /roles.
 *
 * Every module here is rewritten from a living source that keeps being the
 * source of truth after the rewrite: the GPC Wiki in ClickUp (doc
 * 8cjh2zy-176272), the General Onboarding list (901220437555), or, for
 * module 08, the gpc-ai-roi-framework repo. `source` is what the card
 * shows so a reader knows where to go when this page and the source
 * disagree. The source wins, always; this site is the readable map of it.
 *
 * `minutes` is a read estimate, not a rule. It exists so the session timer
 * in the top bar has something to be measured against.
 */

export type OverviewModule = {
  num: string;
  title: string;
  blurb: string;
  href: string;
  source: string;
  minutes: number;
  /** Cards for the first three sit above the fold on /; the rest follow. */
  group: "Start here" | "How GPC works" | "Tools and craft";
};

export const OVERVIEW_MODULES: OverviewModule[] = [
  {
    num: "01",
    title: "Onboarding at GPC",
    blurb:
      "Every task in your first two weeks, grouped and linked. Paperwork, accounts, the reading, ClickUp University, and your first week of calls.",
    href: "/overview/onboarding",
    source: "ClickUp · GPC General Onboarding list",
    minutes: 6,
    group: "Start here",
  },
  {
    num: "02",
    title: "Welcome to GPC",
    blurb:
      "Who GPC is, where it came from, what the mission actually commits to, the four values, and the standard the work is held to.",
    href: "/overview/welcome-to-gpc",
    source: "ClickUp · GPC Wiki",
    minutes: 9,
    group: "Start here",
  },
  {
    num: "03",
    title: "How GPC Is Structured",
    blurb:
      "The four functions, every seat inside them, how work moves from a lead to an adopted workflow, and who to go to for what.",
    href: "/overview/how-gpc-is-structured",
    source: "ClickUp · GPC Wiki",
    minutes: 7,
    group: "Start here",
  },
  {
    num: "04",
    title: "What GPC Sells",
    blurb:
      "The five services, both tiers of each, and what the client actually gets. Read this before your first client call.",
    href: "/overview/what-gpc-sells",
    source: "ClickUp · GPC Wiki, GPC Services",
    minutes: 10,
    group: "How GPC works",
  },
  {
    num: "05",
    title: "How We Work",
    blurb:
      "Where a conversation belongs, how a task is written, how time gets tracked, when to escalate, and what you owe the team every week.",
    href: "/overview/how-we-work",
    source: "ClickUp · GPC Wiki, How We Work",
    minutes: 11,
    group: "How GPC works",
  },
  {
    num: "06",
    title: "Working with Clients",
    blurb:
      "The 1-3-1 method, what to say when an automation breaks, turning a Slack message into a task, and how you show up on a call.",
    href: "/overview/working-with-clients",
    source: "ClickUp · GPC Wiki, Working with Clients",
    minutes: 10,
    group: "How GPC works",
  },
  {
    num: "07",
    title: "ClickUp at GPC",
    blurb:
      "The hierarchy, the twelve statuses and what each one means, the bounceback, and the conventions that keep the workspace readable.",
    href: "/overview/clickup-at-gpc",
    source: "ClickUp · GPC Wiki, General SOPs",
    minutes: 12,
    group: "Tools and craft",
  },
  {
    num: "08",
    title: "Measuring AI ROI",
    blurb:
      "How GPC proves an engagement worked: the baseline, the eight signals, the two questions they answer, and the four actions they feed.",
    href: "/overview/measuring-ai-roi",
    source: "Repo · gpc-ai-roi-framework",
    minutes: 12,
    group: "Tools and craft",
  },
  {
    num: "09",
    title: "GitHub Basics",
    blurb:
      "Repos, branches, commits, pull requests, merge, and how it works at GPC specifically.",
    href: "/overview/github-basics",
    source: "GitHub Skills, rewritten for GPC",
    minutes: 15,
    group: "Tools and craft",
  },
  {
    num: "10",
    title: "Glossary",
    blurb:
      "The terms GPC uses, the terms it does not, and which is which. Partner, not client. GO call, not internal kickoff.",
    href: "/overview/glossary",
    source: "ClickUp · GPC Glossary",
    minutes: 5,
    group: "Tools and craft",
  },
];

export const OVERVIEW_GROUPS = [
  "Start here",
  "How GPC works",
  "Tools and craft",
] as const;

/**
 * Core Fundamentals: doorways into the craft, wherever it already lives.
 * A card with no `href` is a gap with a named owner rather than a silent
 * absence, which is the whole reason the section lists it.
 */
export type FundamentalCard = {
  title: string;
  blurb: string;
  href?: string;
  owner?: string;
};

export const CORE_FUNDAMENTALS: FundamentalCard[] = [
  {
    title: "Pitching",
    blurb: "How Grant runs a discovery interview, from the opening monologue to the magic wand question.",
    href: "/grant-way/discovery-interviews",
  },
  {
    title: "Selling",
    blurb: "The Sales track: pipeline, qualification, and the approved answers to what prospects ask.",
    href: "/roles/sales",
  },
  {
    title: "Client service",
    blurb: "Client health, scope creep, and spotting the next engagement before anyone asks for it.",
    href: "/roles/process-consulting/managing-the-relationship",
  },
  {
    title: "Communicating at GPC",
    blurb: "How Grant actually writes to clients, sourced from real sent email.",
    href: "/roles/process-consulting/communication-guidelines",
  },
  {
    title: "The Grant Way",
    blurb: "Eight modules on the craft itself, every claim traced to a real call transcript.",
    href: "/roles/process-consulting/the-grant-way",
  },
  {
    title: "Pete's list",
    blurb: "The fundamentals Pete wants taught beyond these five. Asked for, not yet written.",
    owner: "Pete Sena",
  },
];
