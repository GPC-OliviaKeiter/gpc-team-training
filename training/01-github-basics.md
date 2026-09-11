# 01. GitHub Basics

Adapted from GitHub Skills' ["Introduction to GitHub"](https://github.com/skills/introduction-to-github)
exercise, rewritten for how GPC actually uses these tools. The original exercise runs
as a live GitHub Actions bot that checks your work step by step. This module is the
static version: the same five concepts and the same click-paths, told straight and
aimed at GPC's own repos and conventions instead of a generic practice repo.

For anyone joining GPC with no GitHub experience. Start here before touching a real
repo. It's also the foundation for using Claude Code to draft SOWs: a SOW built with
Claude Code lives as a file in a repo, and it moves from a draft to something Grant
can sign off on through the same branch, commit, pull request, merge loop covered
below.

## 1. Repos and branches

A **repository** (repo) is a project's folder, plus its entire history of changes.
Every file in it, and every version that file has ever been, lives in the repo. At
GPC that means **one repo per client**: `rush-enterprises`, `delta-water-products`,
and so on each hold that client's SOW, decks, and deliverables. Shared tooling lives
in its own repo (`gpc-skills`), and internal-only material like this training repo
and `grant-way-playbook` are separate again. Nothing client-facing and nothing
internal-only ever share a repo.

A **branch** is a parallel copy of the repo you can safely edit without touching the
official version, called `main`. You make your changes on a branch, and `main` stays
untouched until your work is reviewed and merged into it. This is what makes it safe
for more than one person to work in the same repo at once.

GPC doesn't have one single branch-naming rule across every repo, but two patterns
show up:

- **gpc-skills** (shared tooling) uses typed prefixes that say what kind of change
  it is: `skill/<name>` for a new or changed skill, `fix/<what>` for a correction,
  `docs/<what>` for documentation, `chore/<what>` for housekeeping.
- **Client repos** are usually simpler. Name the branch after what you're doing, in
  plain words, like `kaci-delta-readme` or `olivia-rush-deck-fix`. The point of a
  branch name is that someone else can tell what's in it without opening it.

### Click-path: create your first branch

1. Open the repo you're working in on GitHub.com.
2. Click the **< > Code** tab in the header menu.

   <!-- SCREENSHOT: repo code tab -->

3. Click the branch dropdown. It shows **main** by default.

   <!-- SCREENSHOT: branch dropdown -->

4. In the **Find or create a branch...** box, type your branch name. For practice,
   use something like `<yourname>-first-branch`.
5. Click **Create branch: `<yourname>-first-branch` from main**.
6. The page switches to your new branch automatically. The dropdown at the top now
   shows your branch name instead of `main`, confirming you're editing a safe copy
   and not the live version.

## 2. Commits

A **commit** is a saved snapshot of a change, with a message attached explaining what
changed and why. A commit always happens on a branch. You'll make many small commits
rather than one giant one. Each commit should be one coherent change you could
explain in a sentence.

The GitHub Skills exercise has you commit a `PROFILE.md` with one line of placeholder
text. At GPC, practice on something real instead: **a client README on GPC brand**,
the kind of short file that sits at the top of a client repo and orients anyone who
opens it (what the engagement is, who the sponsor is, where the deliverables live).

GPC's commit message convention is imperative mood, one line, specific about what
changed. "Add Delta Water Products client README," not "Update stuff" or "Changes."
If you can't summarize the commit in one line, it's probably two commits.

### Click-path: your first commit

1. On your branch, click **Add file** then **Create new file**.

   <!-- SCREENSHOT: new file screen -->

2. Name the file `README.md`.
3. Write a short client README in the file. Even a placeholder version should have
   real structure: engagement name, sponsor, current phase, where deliverables live.
4. Click **Commit changes...** in the upper right. A dialog opens.

   <!-- SCREENSHOT: commit dialog -->

5. Replace the suggested commit message with your own, following GPC convention.
   For example: `Add Delta Water Products client README`.
6. Click **Commit changes** to finish. Your branch now has one commit `main` doesn't.

## 3. Pull requests

A **pull request** (PR) is how you propose merging your branch into `main`. It shows
the changes side by side, and it's where a reviewer, at GPC that's Grant, sees
exactly what you did before it becomes official.

GitHub will suggest a generic description. GPC doesn't use generic prose for PR
descriptions. Every PR description follows the **Completed / Still needed** format:
two short lists, not paragraphs. It tells the reviewer in five seconds what's done
and what isn't, instead of making them read the commit history to find out.

```
Completed:
- Added README.md with engagement name, sponsor, and phase
- Linked to the deliverables folder

Still needed:
- Nothing, ready for review
```

### Click-path: open a pull request

1. After committing, GitHub shows a banner with a **Compare & pull request** button.
   Click it. (Or go to the **Pull requests** tab, then **New pull request**, and set
   **base: main**, **compare:** your branch, manually.)

   <!-- SCREENSHOT: PR creation form -->

2. Write a title that says what changed, not "Update README."
3. Write the description in Completed / Still needed format, not prose.
4. Click **Create pull request**. The PR now sits open until someone reviews it.

## 4. Merge

**Merging** takes everything in your pull request and applies it to `main`. Once a
PR is merged, its branch has done its job and should be deleted. Branches are meant
to be temporary. A repo full of old, merged branches is just clutter, and deleting
them costs nothing since the commits already live in `main`'s history.

### Click-path: merge and clean up

1. On the pull request, click **Merge pull request**.

   <!-- SCREENSHOT: merge button -->

2. Click **Confirm merge**.
3. Click **Delete branch**. Your branch is gone; your change lives permanently in
   `main`'s history.
4. Check `main`. Your README (or whatever you built) is now there.

## 5. How it works at GPC

**Grant merges.** On live client and internal repos, Grant is the one who clicks
merge. His own words on this: "tell me what to merge when ready." That means a PR
you open doesn't go live the moment you create it. It sits until Grant reviews it
and either merges it or leaves a comment asking for a change first.

**What a review comment looks like.** Grant's review comments are usually short and
specific: a note on one line, or a line at the bottom of the PR, asking for a small
fix before merge. It's rarely a rewrite request. If you get a comment, make the
change, commit it to the same branch (no need to open a new PR; new commits show up
in the existing PR automatically), and let Grant know it's ready to look at again.

**Where things live.** Client repos hold that client's deliverables and nothing
else, one repo per client: `rush-enterprises`, `delta-water-products`, and so on.
`gpc-skills` is the shared library everyone pulls from: SOW templates, deck and
portal generators, brand docs, the skills that power Claude Code sessions across
every client. `grant-way-playbook` and `gpc-team-training` (this repo) are
internal-only, never client-facing and never linked from a client deliverable.

**Drive and GitHub aren't synced yet.** Right now, a file that lives in a GitHub
repo doesn't automatically show up in the GPC Google Drive, and vice versa. If
you're not sure whether something exists in one place because you saw it in the
other, check both, or ask. Don't assume.

**Why this matters for SOW creation.** This is the same loop behind using Claude
Code for SOW drafts. When a SOW gets drafted in Claude Code, it isn't a Google Doc
that lives in one place. It's a file in a client repo. You (or Claude Code, working
on your behalf) create a branch, commit the draft, open a pull request with a
Completed / Still needed description of what the SOW covers and what's still
missing, and Grant reviews and merges it the same way you just practiced in the four
sections above. Once you can do this by hand, every step Claude Code takes on your
behalf makes sense, and you'll know what to check before you trust it.
