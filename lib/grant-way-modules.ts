export type GrantWayModule = {
  num: string;
  title: string;
  blurb: string;
  href: string;
  flagship?: boolean;
  badge?: string;
};

/**
 * The Grant Way's module list, shared by two pages: the standalone /grant-way
 * tab, and /roles/process-consulting/the-grant-way, the same modules
 * surfaced from inside the Process Consulting track. One array, two
 * doorways, more to come as other role tracks get their own. See
 * "Grant Way lives in two places" in README.md.
 */
export const GRANT_WAY_MODULES: GrantWayModule[] = [
  {
    num: "00",
    title: "Method Overview",
    blurb: "The philosophy and core frameworks everything else hangs on.",
    href: "/grant-way/method-overview",
  },
  {
    num: "01",
    title: "Discovery Interviews",
    blurb: "The flagship module: how Grant runs an AI strategy interview.",
    flagship: true,
    href: "/grant-way/discovery-interviews",
  },
  {
    num: "02",
    title: "Internal GO Calls",
    blurb: "How the team preps before a client-facing day.",
    href: "/grant-way/go-calls",
  },
  {
    num: "03",
    title: "Client Check-ins",
    blurb: "Same-day debriefs with the client sponsors.",
    href: "/grant-way/client-checkins",
  },
  {
    num: "04",
    title: "Internal Debriefs",
    blurb: "The internal same-day synthesis call (Grant + team).",
    href: "/grant-way/internal-debriefs",
  },
  {
    num: "05",
    title: "Kickoff Calls",
    blurb: "The Leadership Kickoff: definitions of success, the engagement sentence.",
    href: "/grant-way/kickoff-calls",
  },
  {
    num: "06",
    title: "Training Sessions",
    blurb:
      'Client AI training ("Flowium Friday"): a recurring deliverable, not a workflow-assessment call type.',
    href: "/grant-way/training-sessions",
  },
  {
    num: "07",
    title: "Follow-up Interviews",
    blurb: "Technical & opportunity deep-dives after discovery: governance, architecture, ROI.",
    href: "/grant-way/followup-interviews",
    badge: "NEW",
  },
];
