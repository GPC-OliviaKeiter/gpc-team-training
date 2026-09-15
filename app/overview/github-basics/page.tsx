import { TopNav } from "@/components/top-nav";

type Step = { text: string; shot?: string };
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
      `A repository (repo) is a project's folder, plus its entire history of changes. Every file in it, and every version that file has ever been, lives in the repo. At GPC that means one repo per client: rush-enterprises, delta-water-products, and so on each hold that client's SOW, decks, and deliverables. Shared tooling lives in its own repo (gpc-skills), and internal-only material like this training repo and grant-way-playbook are separate again. Nothing client-facing and nothing internal-only ever share a repo.`,
      `A branch is a parallel copy of the repo you can safely edit without touching the official version, called main. You make your changes on a branch, and main stays untouched until your work is reviewed and merged into it. This is what makes it safe for more than one person to work in the same repo at once.`,
      `GPC doesn't have one single branch-naming rule across every repo, but two patterns show up: gpc-skills (shared tooling) uses typed prefixes that say what kind of change it is — skill/<name> for a new or changed skill, fix/<what> for a correction, docs/<what> for documentation, chore/<what> for housekeeping. Client repos are usually simpler: name the branch after what you're doing, in plain words, like kaci-delta-readme or olivia-rush-deck-fix.`,
    ],
    steps: {
      heading: "Click-path: create your first branch",
      items: [
        { text: "Open the repo you're working in on GitHub.com." },
        { text: "Click the < > Code tab in the header menu.", shot: "repo code tab" },
        { text: "Click the branch dropdown. It shows main by default.", shot: "branch dropdown" },
        { text: "In the “Find or create a branch...” box, type your branch name. For practice, use something like <yourname>-first-branch." },
        { text: "Click “Create branch: <yourname>-first-branch from main.”" },
        { text: "The page switches to your new branch automatically — the dropdown now shows your branch name instead of main." },
      ],
    },
  },
  {
    num: "02",
    title: "Commits",
    intro: [
      `A commit is a saved snapshot of a change, with a message attached explaining what changed and why. A commit always happens on a branch. You'll make many small commits rather than one giant one — each commit should be one coherent change you could explain in a sentence.`,
      `Practice on something real: a client README on GPC brand, the kind of short file that sits at the top of a client repo and orients anyone who opens it (what the engagement is, who the sponsor is, where the deliverables live).`,
      `GPC's commit message convention is imperative mood, one line, specific about what changed. "Add Delta Water Products client README," not "Update stuff" or "Changes." If you can't summarize the commit in one line, it's probably two commits.`,
    ],
    steps: {
      heading: "Click-path: your first commit",
      items: [
        { text: "On your branch, click Add file then Create new file.", shot: "new file screen" },
        { text: "Name the file README.md." },
        { text: "Write a short client README. Even a placeholder should have real structure: engagement name, sponsor, current phase, where deliverables live." },
        { text: "Click Commit changes... in the upper right. A dialog opens.", shot: "commit dialog" },
        { text: "Replace the suggested commit message with your own, following GPC convention — e.g. “Add Delta Water Products client README.”" },
        { text: "Click Commit changes to finish. Your branch now has one commit main doesn't." },
      ],
    },
  },
  {
    num: "03",
    title: "Pull requests",
    intro: [
      `A pull request (PR) is how you propose merging your branch into main. It shows the changes side by side, and it's where a reviewer — at GPC, that's Grant — sees exactly what you did before it becomes official.`,
      `GitHub will suggest a generic description. GPC doesn't use generic prose for PR descriptions. Every PR description follows the Completed / Still needed format: two short lists, not paragraphs. It tells the reviewer in five seconds what's done and what isn't, instead of making them read the commit history to find out.`,
    ],
    steps: {
      heading: "Click-path: open a pull request",
      items: [
        { text: "After committing, GitHub shows a banner with a Compare & pull request button — click it. (Or go to Pull requests → New pull request, and set base: main, compare: your branch, manually.)", shot: "PR creation form" },
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
      `Merging takes everything in your pull request and applies it to main. Once a PR is merged, its branch has done its job and should be deleted — branches are meant to be temporary. A repo full of old, merged branches is just clutter, and deleting them costs nothing since the commits already live in main's history.`,
    ],
    steps: {
      heading: "Click-path: merge and clean up",
      items: [
        { text: "On the pull request, click Merge pull request.", shot: "merge button" },
        { text: "Click Confirm merge." },
        { text: "Click Delete branch. Your branch is gone; your change lives permanently in main's history." },
        { text: "Check main. Your README (or whatever you built) is now there." },
      ],
    },
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-gpc-neutral-500 px-6 py-2 text-center font-mono text-[13px] text-gpc-neutral-100">
        <b className="font-medium tracking-[0.04em] text-gpc-secondary-yellow">
          INTERNAL DRAFT
        </b>{" "}
        — GPC-only, for new hires, contractors, and partners.
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
            Overview · Module 01
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] font-normal tracking-tight">
            GitHub Basics
          </h1>
          <p className="mt-5 max-w-[64ch] text-[17px] leading-relaxed text-muted-foreground">
            Adapted from GitHub Skills&rsquo; &ldquo;Introduction to GitHub&rdquo;
            exercise, rewritten for how GPC actually uses these tools. For anyone
            joining GPC with no GitHub experience — start here before touching a
            real repo. It&rsquo;s also the foundation for using Claude Code to
            draft SOWs: a SOW built with Claude Code moves from a draft to
            something Grant can sign off on through the same branch, commit,
            pull request, merge loop covered below.
          </p>
        </header>

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
                      <span>
                        {step.text}
                        {step.shot && (
                          <span className="ml-2 rounded-sm bg-gpc-secondary-light-yellow px-1.5 py-0.5 font-mono text-[10px] tracking-[0.06em] text-gpc-neutral-500 uppercase">
                            screenshot: {step.shot}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </section>
        ))}

        <section className="mb-12 border-l-4 border-gpc-secondary-yellow bg-gpc-secondary-light-yellow/40 px-5 py-4">
          <div className="mb-1 font-mono text-[11px] tracking-[0.14em] text-gpc-neutral-500 uppercase">
            05 · How it works at GPC
          </div>
          <div className="flex flex-col gap-3 text-[15px] leading-relaxed">
            <p>
              <strong>Grant merges.</strong> On live client and internal repos,
              Grant is the one who clicks merge. His own words on this:
              &ldquo;tell me what to merge when ready.&rdquo; A PR you open
              doesn&rsquo;t go live the moment you create it — it sits until
              Grant reviews it and either merges it or leaves a comment asking
              for a change first.
            </p>
            <p>
              <strong>What a review comment looks like.</strong> Usually short
              and specific — rarely a rewrite request. Make the change, commit
              it to the same branch (no need to open a new PR), and let Grant
              know it&rsquo;s ready to look at again.
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
              Google Drive, and vice versa. Check both, or ask — don&rsquo;t
              assume.
            </p>
            <p>
              <strong>Why this matters for SOW creation.</strong> When a SOW
              gets drafted in Claude Code, it isn&rsquo;t a Google Doc that
              lives in one place — it&rsquo;s a file in a client repo. You
              create a branch, commit the draft, open a pull request with a
              Completed / Still needed description, and Grant reviews and
              merges it the same way you just practiced above.
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
