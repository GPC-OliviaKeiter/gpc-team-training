import { ModuleShell } from "@/components/module-shell";
import { Callout } from "@/components/callout";
import { Diagram } from "@/components/diagram";
import { Figure } from "@/components/figure";
import { GitBranchLoop } from "@/components/diagrams";

export const metadata = { title: "GitHub Basics · GPC Team Training" };

import type { ReactNode } from "react";

/** `figure` is a literal <Figure> rather than a props object on purpose:
 *  `npm run check` scans this file's source for the open-screenshot list,
 *  so an id built at render time would be invisible to it. */
type Step = { text: string; figure?: ReactNode };
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
      `GPC doesn't have one single branch-naming rule across every repo, but two patterns show up: gpc-skills (shared tooling) uses typed prefixes that say what kind of change it is: skill/<name> for a new or changed skill, fix/<what> for a correction, docs/<what> for documentation, chore/<what> for housekeeping. Client repos are usually simpler: name the branch after what you're doing, in plain words, like kaci-delta-readme or olivia-rush-deck-fix.`,
    ],
    steps: {
      heading: "Click-path: create your first branch",
      items: [
        { text: "Open the repo you're working in on GitHub.com." },
        { text: "Click the < > Code tab in the header menu.", figure: (
          <Figure
            id="github-repo-code-tab"
            caption="The Code tab in a repository header, where every file and branch lives."
            spec="GitHub.com, any GPC repo, header menu, Code tab highlighted"
          />
        ) },
        { text: "Click the branch dropdown. It shows main by default.", figure: (
          <Figure
            id="github-branch-dropdown"
            caption="The branch dropdown showing main, with the find-or-create box open."
            spec="GitHub.com, repo Code tab, branch dropdown expanded, create-branch box visible"
          />
        ) },
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
      `A commit is a saved snapshot of a change, with a message attached explaining what changed and why. A commit always happens on a branch. You'll make many small commits rather than one giant one. Each commit should be one coherent change you could explain in a sentence.`,
      `Practice on something real: a client README on GPC brand, the kind of short file that sits at the top of a client repo and orients anyone who opens it (what the engagement is, who the sponsor is, where the deliverables live).`,
      `GPC's commit message convention is imperative mood, one line, specific about what changed. "Add Delta Water Products client README," not "Update stuff" or "Changes." If you can't summarize the commit in one line, it's probably two commits.`,
    ],
    steps: {
      heading: "Click-path: your first commit",
      items: [
        { text: "On your branch, click Add file then Create new file.", figure: (
          <Figure
            id="github-new-file"
            caption="Add file, then Create new file, on your own branch."
            spec="GitHub.com, repo on a non-main branch, Add file menu expanded"
          />
        ) },
        { text: "Name the file README.md." },
        { text: "Write a short client README. Even a placeholder should have real structure: engagement name, sponsor, current phase, where deliverables live." },
        { text: "Click Commit changes... in the upper right. A dialog opens.", figure: (
          <Figure
            id="github-commit-dialog"
            caption="The commit dialog, with the suggested message replaced by a GPC-convention one."
            spec="GitHub.com, file editor, Commit changes dialog, message field filled in"
          />
        ) },
        { text: "Replace the suggested commit message with your own, following GPC convention, for example “Add Delta Water Products client README.”" },
        { text: "Click Commit changes to finish. Your branch now has one commit main doesn't." },
      ],
    },
  },
  {
    num: "03",
    title: "Pull requests",
    intro: [
      `A pull request (PR) is how you propose merging your branch into main. It shows the changes side by side, and it's where a reviewer sees exactly what you did before it becomes official. Who that reviewer is depends on the repo: check with whoever owns it.`,
      `GitHub will suggest a generic description. GPC doesn't use generic prose for PR descriptions. Every PR description follows the Completed / Still needed format: two short lists, not paragraphs. It tells the reviewer in five seconds what's done and what isn't, instead of making them read the commit history to find out.`,
    ],
    steps: {
      heading: "Click-path: open a pull request",
      items: [
        { text: "After committing, GitHub shows a banner with a Compare & pull request button. Click it. (Or go to Pull requests → New pull request, and set base: main, compare: your branch, manually.)", figure: (
          <Figure
            id="github-pr-form"
            caption="The pull request form, with base main and compare set to your branch."
            spec="GitHub.com, Compare and pull request screen, base and compare selectors visible"
          />
        ) },
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
      `Merging takes everything in your pull request and applies it to main. Once a PR is merged, its branch has done its job and should be deleted. Branches are meant to be temporary. A repo full of old, merged branches is just clutter, and deleting them costs nothing since the commits already live in main's history.`,
    ],
    steps: {
      heading: "Click-path: merge and clean up",
      items: [
        { text: "On the pull request, click Merge pull request.", figure: (
          <Figure
            id="github-merge-button"
            caption="Merge pull request, then Confirm merge, then Delete branch."
            spec="GitHub.com, open pull request, merge panel at the bottom of the conversation tab"
          />
        ) },
        { text: "Click Confirm merge." },
        { text: "Click Delete branch. Your branch is gone; your change lives permanently in main's history." },
        { text: "Check main. Your README (or whatever you built) is now there." },
      ],
    },
  },
];

export default function Page() {
  return (
    <ModuleShell
      track="overview"
      crumbs={[{ label: "Overview", href: "/" }, { label: "GitHub Basics" }]}
      eyebrow="Overview · Module 09"
      title="GitHub Basics"
      banner="GPC-only, for new hires, contractors, and partners."
      lede={
        <>
          Adapted from GitHub Skills&rsquo; &ldquo;Introduction to GitHub&rdquo;
          exercise, rewritten for how GPC actually uses these tools. For anyone
          joining GPC with no GitHub experience: start here before touching a real
          repo. It is also the foundation for using Claude Code to draft SOWs, since
          a SOW moves from a draft to something a reviewer can sign off on through
          the same loop below.
        </>
      }
    >
      <Diagram
        label="Figure 1 · The loop, end to end"
        caption="Everything below is one lap of this. Branch off main, commit, open a pull request, get it reviewed, merge, delete the branch."
      >
        <GitBranchLoop />
      </Diagram>

      {sections.map((s) => (
        <section key={s.num} className="not-prose mb-12">
          <div className="mb-4 flex items-baseline gap-3">
            <span className="font-mono text-xs font-semibold text-gpc-primary-red">
              {s.num}
            </span>
            <h2 className="font-display text-[26px] font-normal">{s.title}</h2>
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
                  <li key={i} className="flex flex-col gap-3">
                    <span className="flex gap-3 text-[14.5px] leading-snug">
                      <span className="shrink-0 font-mono text-xs font-semibold text-gpc-primary-red">
                        {i + 1}.
                      </span>
                      <span>{step.text}</span>
                    </span>
                    {step.figure}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </section>
      ))}

      <h2>05 · How it works at GPC</h2>

      <Callout>
        A pull request does not go live the moment you create it. It sits until a
        reviewer looks at it and either merges it or asks for a change first. Who
        reviews depends on the repo, so check with whoever owns it.
      </Callout>

      <p>
        <b>What a review comment looks like.</b> Usually short and specific, rarely a
        rewrite request. Make the change, commit it to the same branch with no new
        pull request, and tell the reviewer it is ready to look at again.
      </p>
      <p>
        <b>Where things live.</b> Client repos hold that client&rsquo;s deliverables
        and nothing else, one repo per client. <code>gpc-skills</code> is the shared
        library everyone pulls from. <code>grant-way-playbook</code> and{" "}
        <code>gpc-team-training</code>, this repo, are internal only and never
        client-facing.
      </p>
      <p>
        <b>Drive and GitHub are not synced yet.</b> A file in a GitHub repo does not
        appear in the GPC Google Drive, and the reverse is also true. Check both, or
        ask. Do not assume.
      </p>
      <p>
        <b>Why this matters for SOW creation.</b> A SOW drafted in Claude Code is not
        a Google Doc living in one place. It is a file in a client repo. You create a
        branch, commit the draft, open a pull request with a Completed / Still needed
        description, and it goes through the same review and merge loop you just
        practiced.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <a href="/roles/process-consulting/github-and-vercel">
            Tools: GitHub and Vercel
          </a>{" "}
          in the Process Consulting track, for reviewing a pull request and reading a
          deployment.
        </li>
        <li>
          <a href="/overview/how-we-work">Module 05, How We Work</a>, for the
          Completed / Still needed format a pull request description uses.
        </li>
      </ul>
    </ModuleShell>
  );
}
