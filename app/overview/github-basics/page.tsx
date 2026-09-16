import { TopNav } from "@/components/top-nav";
import { Figure } from "@/components/figure";

type FigureSpec = { id: string; caption: string; spec: string };
type Step = { text: string; figure?: FigureSpec };
type Section = {
  num: string;
  title: string;
  intro: string[];
  steps?: { heading: string; items: Step[] };
};

const sections: Section[] = [
  {
    num: "01",
    title: "Repos and branches",
    intro: [
      `A repository (repo) is a project's folder, plus its entire history of changes. At GPC that means one repo per client (rush-enterprises, delta-water-products, and so on), each holding that client's SOW, decks, and deliverables. Shared tooling lives in its own repo (gpc-skills); internal-only material like this training repo and grant-way-playbook are separate again. Nothing client-facing and nothing internal-only ever share a repo.`,
      `A branch is a parallel copy of the repo you can safely edit without touching main, the official version. You change things on a branch; main stays untouched until your work is reviewed and merged into it. That's what lets more than one person work in the same repo at once.`,
      `GPC uses two branch-naming patterns: gpc-skills (shared tooling) uses typed prefixes for what kind of change it is (skill/<name>, fix/<what>, docs/<what>, chore/<what>). Client repos are simpler: name the branch after what you're doing, in plain words (kaci-delta-readme, olivia-rush-deck-fix).`,
    ],
    steps: {
      heading: "Click-path: create your first branch",
      items: [
        { text: "Open the repo you're working in on GitHub.com." },
        {
          text: "Click the < > Code tab in the header menu.",
          figure: {
            id: "gh-repo-code-tab",
            caption: "The < > Code tab in a repo's header menu.",
            spec: "GitHub.com, any GPC repo, header menu with the Code tab visible",
          },
        },
        {
          text: "Click the branch dropdown. It shows main by default.",
          figure: {
            id: "gh-branch-dropdown",
            caption: "The branch dropdown, showing main by default.",
            spec: "GitHub.com, repo Code tab, branch dropdown open",
          },
        },
        { text: "In the “Find or create a branch...” box, type your branch name. For practice, use something like <yourname>-first-branch." },
        { text: "Click “Create branch: <yourname>-first-branch from main.”" },
        { text: "The page switches to your new branch automatically. The dropdown now shows your branch name instead of main." },
      ],
    },
  },
  {
    num: "02",
    title: "Commits",
    intro: [
      `A commit is a saved snapshot of a change, with a message explaining what changed and why. A commit always happens on a branch. You'll make many small commits, each one coherent change you could explain in a sentence.`,
      `Practice on something real: a client README on GPC brand, the short file that sits at the top of a client repo and orients anyone who opens it (engagement, sponsor, current phase, where deliverables live).`,
      `GPC's commit message convention: imperative mood, one line, specific. "Add Delta Water Products client README," not "Update stuff" or "Changes." If you can't summarize it in one line, it's probably two commits.`,
    ],
    steps: {
      heading: "Click-path: your first commit",
      items: [
        {
          text: "On your branch, click Add file then Create new file.",
          figure: {
            id: "gh-new-file-screen",
            caption: "The Add file → Create new file screen.",
            spec: "GitHub.com, a branch other than main, Add file menu open",
          },
        },
        { text: "Name the file README.md." },
        { text: "Write a short client README with real structure: engagement name, sponsor, current phase, where deliverables live." },
        {
          text: "Click Commit changes... in the upper right. A dialog opens.",
          figure: {
            id: "gh-commit-dialog",
            caption: "The Commit changes dialog with a GPC-style commit message.",
            spec: "GitHub.com, after editing a file, Commit changes dialog open",
          },
        },
        { text: "Replace the suggested commit message with your own, following GPC convention, for example “Add Delta Water Products client README.”" },
        { text: "Click Commit changes to finish. Your branch now has one commit main doesn't." },
      ],
    },
  },
  {
    num: "03",
    title: "Pull requests",
    intro: [
      `A pull request (PR) is how you propose merging your branch into main. It shows the changes side by side, and it's where a reviewer sees exactly what you did before it becomes official. Who reviews depends on the repo: check with whoever owns it.`,
      `GPC doesn't use generic prose for PR descriptions. Every PR follows the Completed / Still needed format: two short lists, not paragraphs, so the reviewer knows in five seconds what's done and what isn't.`,
    ],
    steps: {
      heading: "Click-path: open a pull request",
      items: [
        {
          text: "After committing, GitHub shows a banner with a Compare & pull request button. Click it. (Or go to Pull requests → New pull request, and set base: main, compare: your branch, manually.)",
          figure: {
            id: "gh-pr-creation-form",
            caption: "The pull request creation form, ready for Completed / Still needed.",
            spec: "GitHub.com, Compare & pull request screen",
          },
        },
        { text: "Write a title that says what changed, not “Update README.”" },
        { text: "Write the description in Completed / Still needed format, not prose." },
        { text: "Click Create pull request. The PR now sits open until someone reviews it." },
      ],
    },
  },
  {
    num: "04",
    title: "Merge",
    intro: [
      `Merging applies everything in your pull request to main. Once a PR is merged, delete its branch: branches are temporary, and a repo full of old merged branches is just clutter (the commits already live in main's history).`,
    ],
    steps: {
      heading: "Click-path: merge and clean up",
      items: [
        {
          text: "On the pull request, click Merge pull request.",
          figure: {
            id: "gh-merge-button",
            caption: "The Merge pull request button on an open PR.",
            spec: "GitHub.com, an open PR ready to merge, Merge pull request button visible",
          },
        },
        { text: "Click Confirm merge." },
        { text: "Click Delete branch. Your branch is gone; your change lives permanently in main's history." },
        { text: "Check main. Your README (or whatever you built) is now there." },
      ],
    },
  },
];

function BranchCommitPrMergeLoop() {
  return (
    <svg
      viewBox="0 0 640 168"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram of a branch forking from main, taking three commits, then merging back in via a pull request"
      className="h-auto w-full"
    >
      <line x1="20" y1="132" x2="620" y2="132" stroke="var(--gpc-neutral-300)" strokeWidth="3" />
      <text x="22" y="152" fontFamily="var(--font-mono)" fontSize="11" fill="var(--gpc-neutral-400)" letterSpacing="1">
        main
      </text>
      <path
        d="M110,132 C110,70 150,70 190,70 L430,70 C470,70 500,70 500,102"
        fill="none"
        stroke="var(--gpc-primary-red)"
        strokeWidth="3"
      />
      <circle cx="110" cy="132" r="5" fill="var(--gpc-neutral-500)" />
      <text x="120" y="60" fontFamily="var(--font-mono)" fontSize="11" fill="var(--gpc-primary-red)" letterSpacing="1">
        your branch
      </text>
      <circle cx="230" cy="70" r="6" fill="var(--gpc-primary-red)" stroke="var(--gpc-neutral-100)" strokeWidth="2" />
      <circle cx="300" cy="70" r="6" fill="var(--gpc-primary-red)" stroke="var(--gpc-neutral-100)" strokeWidth="2" />
      <circle cx="370" cy="70" r="6" fill="var(--gpc-primary-red)" stroke="var(--gpc-neutral-100)" strokeWidth="2" />
      <rect x="405" y="86" width="72" height="24" rx="3" fill="var(--gpc-secondary-light-yellow)" stroke="var(--gpc-secondary-yellow)" />
      <text
        x="441"
        y="102"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="10.5"
        fontWeight="600"
        fill="var(--gpc-neutral-500)"
        letterSpacing="1"
      >
        PR
      </text>
      <circle cx="500" cy="132" r="6" fill="var(--gpc-neutral-500)" />
      <text x="30" y="26" fontFamily="var(--font-mono)" fontSize="10.5" fontWeight="600" fill="var(--gpc-primary-red)">
        1 &middot; BRANCH
      </text>
      <text x="220" y="46" fontFamily="var(--font-mono)" fontSize="10.5" fontWeight="600" fill="var(--gpc-primary-red)">
        2 &middot; COMMIT
      </text>
      <text x="392" y="130" fontFamily="var(--font-mono)" fontSize="10.5" fontWeight="600" fill="var(--gpc-primary-red)">
        3 &middot; PULL REQUEST
      </text>
      <text
        x="500"
        y="156"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="10.5"
        fontWeight="600"
        fill="var(--gpc-primary-red)"
      >
        4 &middot; MERGE
      </text>
    </svg>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-gpc-neutral-500 px-6 py-2 text-center font-mono text-[13px] text-gpc-neutral-100">
        <b className="font-medium tracking-[0.04em] text-gpc-secondary-yellow">
          INTERNAL DRAFT
        </b>{" "}
        · GPC-only, for new hires, contractors, and partners.
      </div>

      <TopNav active="overview" />

      <main className="mx-auto max-w-[860px] px-6 pt-11 pb-20">
        <nav className="mb-6 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          <a href="/" className="hover:text-foreground hover:underline">
            Overview
          </a>{" "}
          / GitHub Basics
        </nav>

        <header className="mb-11 border-b border-border pb-8">
          <div className="mb-4 font-mono text-[11.5px] tracking-[0.2em] text-muted-foreground uppercase">
            Overview · Module 02
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] font-normal tracking-tight">
            GitHub Basics
          </h1>
          <p className="mt-5 max-w-[68ch] text-[17px] leading-relaxed text-muted-foreground">
            Adapted from GitHub Skills&rsquo; &ldquo;Introduction to GitHub&rdquo;
            exercise, rewritten for how GPC actually uses these tools. Start
            here before touching a real repo. It&rsquo;s also the foundation
            for drafting a SOW with Claude Code: that draft moves through the
            same branch, commit, pull request, merge loop below.
          </p>
        </header>

        <div className="mb-12 border border-border bg-card px-5 py-6">
          <BranchCommitPrMergeLoop />
          <p className="mt-3 text-center font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
            The arc every GPC change follows, from a client README to a Claude Code SOW draft
          </p>
        </div>

        {sections.map((s) => (
          <section key={s.num} className="mb-12">
            <div className="mb-4 flex items-baseline gap-3">
              <span className="font-mono text-xs font-semibold text-gpc-primary-red">
                {s.num}
              </span>
              <h2 className="font-display text-[26px] font-normal">
                {s.title}
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {s.intro.map((p, i) => (
                <p
                  key={i}
                  className="max-w-[70ch] text-[15px] leading-relaxed text-muted-foreground"
                >
                  {p}
                </p>
              ))}
            </div>
            {s.steps && (
              <div className="mt-5 border border-border bg-card px-5 py-4">
                <div className="mb-3 font-mono text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                  {s.steps.heading}
                </div>
                <ol className="flex flex-col gap-2.5">
                  {s.steps.items.map((step, i) => (
                    <li key={i} className="flex gap-3 text-[14.5px] leading-snug">
                      <span className="shrink-0 font-mono text-xs font-semibold text-gpc-primary-red">
                        {i + 1}.
                      </span>
                      <span>{step.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {s.steps &&
              s.steps.items
                .filter((step) => step.figure)
                .map((step) => <Figure key={step.figure!.id} {...step.figure!} />)}
          </section>
        ))}

        <section className="mb-12 border-l-4 border-gpc-secondary-yellow bg-gpc-secondary-light-yellow/40 px-5 py-4">
          <div className="mb-1 font-mono text-[11px] tracking-[0.14em] text-gpc-neutral-500 uppercase">
            05 · How it works at GPC
          </div>
          <div className="flex flex-col gap-3 text-[15px] leading-relaxed">
            <p>
              <strong>A PR doesn&rsquo;t go live the moment you create it.</strong> It
              sits until a reviewer looks at it and either merges it or leaves a
              comment asking for a change first. Who reviews depends on the repo.
            </p>
            <p>
              <strong>What a review comment looks like.</strong> Usually short
              and specific, rarely a rewrite request. Make the change, commit
              it to the same branch (no need to open a new PR), and let the
              reviewer know it&rsquo;s ready to look at again.
            </p>
            <p>
              <strong>Where things live.</strong> Client repos hold that
              client&rsquo;s deliverables and nothing else, one repo per client.
              gpc-skills is the shared library everyone pulls from. grant-way-playbook
              and gpc-team-training (this repo) are internal-only, never
              client-facing.
            </p>
            <p>
              <strong>Drive and GitHub aren&rsquo;t synced yet.</strong> A file
              in a GitHub repo doesn&rsquo;t automatically show up in the GPC
              Google Drive, and vice versa. Check both, or ask.
            </p>
            <p>
              <strong>Why this matters for SOW creation.</strong> A SOW drafted
              in Claude Code isn&rsquo;t a Google Doc in one place. It&rsquo;s a
              file in a client repo: branch, commit, pull request with a
              Completed / Still needed description, then the same review and
              merge loop you just practiced.
            </p>
          </div>
        </section>

        <footer className="mt-14 border-t border-foreground pt-6">
          <p className="font-mono text-[11px] text-muted-foreground">
            GPC TEAM TRAINING · INTERNAL
          </p>
        </footer>
      </main>
    </div>
  );
}
