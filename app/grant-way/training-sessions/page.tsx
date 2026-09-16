type Beat = { title: string; body: string; time: string };

const beats: Beat[] = [
  {
    time: "00:00-02:13",
    title: "Let the small talk run before starting",
    body: `The first two minutes are unscripted catch-up (sick kids, Mac vs. Windows) with GPC's facilitators participating, not just waiting it out. The session opens on Grant's cue, not the clock.`,
  },
  {
    time: "02:13",
    title: "State who you are and why that matters to how you teach",
    body: `"I taught kindergarten math to college calculus for eight years, which means I'm used to teaching in a lot of different ways, re-communicating things until they make sense... I gave tours in college for the engineering school," told to rival-school parents, where no one laughed at his jokes. Credentialing himself as a teacher who works an unreceptive room, not just an AI consultant.`,
  },
  {
    time: "02:13",
    title: "Take the temperature before teaching",
    body: `"How do you feel right now on a scale of one to 10 in terms of your use? ... Windows or Mac?" Both answers change what follows: a room with "density in the middle with few power users" gets foundations, not an advanced session.`,
  },
  {
    time: "02:13",
    title: "Name the fear head-on, unprompted",
    body: `"Is AI going to take my job? ... most people are not going to ask me in the chat, they're not going to ask me in a group setting, so I'm going to address it first. We believe that AI is a multiplication tool... not a subtraction tool."`,
  },
  {
    time: "02:13, 13:48",
    title: "Draw the three-tool map before any demo",
    body: `Claude Chat ("conversations and brainstorming... context is limited to that context window"), Claude Cowork ("the execution engine," access to local files, the session's actual focus), Claude Code ("access to a code base... mostly used for software," explicitly out of scope for this room). Say what a tool is not for as deliberately as what it is for.`,
  },
  {
    time: "13:48",
    title: "Name the danger before the capability",
    body: `"If we turn on a folder, what does that mean? It means that AI can open your files, read your files, edit your files, create new files, and... delete your files. Okay, no bueno." The guardrail (manual approval, covered later) is promised before it is built.`,
  },
  {
    time: "13:48",
    title: "Give a plain rule of thumb for each model, not a spec sheet",
    body: `Opus for deep work, Sonnet as "your daily driver," Haiku for classification-only automation work, Fable named and explicitly out of scope ("overpowered for the majority of use cases"). A hit token limit is reframed as a scheduling conversation, not a failure. The same conversation is how a manager notices misuse.`,
  },
  {
    time: "13:48",
    title: "Demo one feature, not the whole surface",
    body: `"The only thing that I want to take away from this first demo is the Ask User Question feature." One trigger phrase taught as a habit: "ask me questions about this until you are 95% sure you know what I want," shortened to a keyboard shortcut (AUQ).`,
  },
  {
    time: "13:48",
    title: "Cover the remaining settings in one pass, each with a one-line rule",
    body: `Effort (medium/high default, no hard threshold), approval mode ("go through manually approved" while the room is new to this), voice input (demoed live). Each setting gets a default and a reason, never a full spec walkthrough.`,
  },
  {
    time: "33:42",
    title: "Reframe the security question as a policy question, not a technical one",
    body: `Asked whether the Vault should live on Drive instead of the local machine, Grant gave three reasons for local, then closed with: "it is circumstantial to what company policy is... we'll rectify this or reconcile it with the leadership team at Flowium... this is our guidance, not our law."`,
  },
  {
    time: "33:42",
    title: "Flip the room from watching to doing, with a hard folder count",
    body: `"This is supposed to be flip classroom... we're going to create three folders inside of our vault. About me, outputs, and templates." Demonstrated live on Grant's own machine first, then handed to the room with an explicit progress check in chat.`,
  },
  {
    time: "33:42",
    title: "Ship the portal link and the prompt, don't just describe them",
    body: `"We made this learning portal for you... in session one, set your global instructions... you can easily copy it and then throw it into your global instructions." Nothing in this beat is retyped by the attendee.`,
  },
  {
    time: "44:30, 45:00",
    title: "Take the question live and answer it as a distinction, not a yes/no",
    body: `Lucia's question got a structural answer: global instructions carry the standing rules, a separate anti-AI-writing-guide file carries the style detail, and the About Me folder is referenced in the first line of the global instructions so the two connect.`,
  },
  {
    time: "46:37",
    title: "Reserve real working time inside the session, and set it up to work",
    body: `"I actually want you to spend the last 10 minutes on today... go on mute, keep your cameras on... talk it out with Claude" rather than type. Typing is slower and gets edited toward "proper grammar," exactly the signal an About Me interview needs.`,
  },
  {
    time: "46:37",
    title: "Assign the second file as homework, named as homework",
    body: `"Just like any good tutor, I'm giving you homework... your About My Company file. We'll send this information out over email or through Slack." A session that runs the clock out still closes with an explicit deliverable and delivery channel.`,
  },
  {
    time: "46:37",
    title: "Close warm and short",
    body: `"I hope you all have a fantastic Friday and weekend ahead. Please finish those files... Go forth in peace."`,
  },
];

const patterns = [
  "Read the room's fluency before choosing what to teach: the 1-10 self-rating and the OS poll both happened before the first slide of real content.",
  "Address the elephant before the agenda: “is AI going to take my job” is answered in the first three minutes, unprompted.",
  "Teach one feature per demo, named explicitly as the takeaway: stops a feature-rich tool from turning into a features tour.",
  "Give a default and a reason for every setting, not a menu of options.",
  "Demo it yourself before handing over the keyboard: the flip-classroom moment came after the demo, not instead of it.",
  "Ship the artifact, don't describe it: the portal URL, the password, and the copy-paste prompt all went directly into the chat.",
  "Recommend, then hand the actual policy call to the client's own leadership, by name.",
  "Protect quiet working time inside the session itself, not just as homework.",
  "Voice over typing for anything meant to teach the model who you are: a specific, falsifiable claim about output quality, not a style preference.",
];

import { TopNav } from "@/components/top-nav";
import { citationHref, CITATION_MAP } from "@/lib/citations";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-sm bg-secondary px-2 py-0.5 font-mono text-[11px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-gpc-neutral-500 px-6 py-2 text-center font-mono text-[13px] text-gpc-neutral-100">
        <b className="font-medium tracking-[0.04em] text-gpc-secondary-yellow">
          INTERNAL DRAFT
        </b>{" "}
        · GPC-only. Not for Flowium or any external audience without Grant&rsquo;s
        approval.
      </div>

      <TopNav active="roles" />

      <main className="mx-auto max-w-[860px] px-6 pt-11 pb-20">
        <nav className="mb-6 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          <a href="/roles/process-consulting" className="hover:text-foreground hover:underline">
            Process Consulting
          </a>{" "}
          /{" "}
          <a href="/roles/process-consulting/the-grant-way" className="hover:text-foreground hover:underline">
            The Grant Way
          </a>{" "}
          / Module 06 · Training Sessions
        </nav>
        <header className="mb-11 border-b border-border pb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-[11.5px] tracking-[0.2em] text-muted-foreground uppercase">
            <span>The Grant Way · Module 06</span>
            <span className="rounded-sm bg-gpc-secondary-light-yellow px-2 py-0.5 font-semibold tracking-[0.08em] text-gpc-neutral-500">
              v0.8 · 2026-09-11
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] font-normal tracking-tight">
            Flowium Friday
          </h1>
          <p className="mt-2 font-mono text-sm tracking-wide text-gpc-primary-red uppercase">
            Client AI Training Session
          </p>
          <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-muted-foreground">
            The first training-session transcript in the playbook, and the first
            client that isn&rsquo;t Rush or Delta.{" "}
            <strong className="text-foreground">
              Grant leads a recurring AI-adoption training call
            </strong>{" "}
            (not a workflow-assessment step, a standing GPC deliverable) and
            builds the room&rsquo;s Vault, global instructions, and About Me file
            live on screen.
          </p>

          <div className="mt-7 flex flex-wrap border border-foreground bg-card">
            {[
              ["2026-09-11", "date"],
              ["~60 min", "duration"],
              ["Flowium", "client"],
              ["1", "session observed"],
            ].map(([v, l]) => (
              <div
                key={l}
                className="flex-1 border-r border-border px-4 py-3 last:border-r-0"
                style={{ minWidth: 120 }}
              >
                <div className="font-display text-2xl leading-none font-normal text-gpc-primary-red">
                  {v}
                </div>
                <div className="mt-1 font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </header>

        <section className="mb-12">
          <h2 className="font-display text-[26px] font-normal">
            What this session is for
          </h2>
          <p className="mt-3 max-w-[68ch] text-muted-foreground">
            Grant states the goal inside the first two minutes: &ldquo;give you
            guys the foundations, the tools, and your tool belt so that you can
            be confident the next time you open up a tool like Claude&hellip; we&rsquo;re
            trying to give you the set of things that you can then run with in
            the future.&rdquo; By the end, every attendee should have a
            four-folder Vault on their own machine, global instructions saved
            into Cowork, and an About Me file started. Homework closes the
            loop: an About My Company file.
          </p>
        </section>

        <section className="mb-12">
          <div className="mb-1 flex items-baseline gap-3">
            <h2 className="font-display text-[26px] font-normal">
              The shape of the session
            </h2>
            <span className="font-mono text-[11px] tracking-[0.06em] text-muted-foreground">
              16 beats, one observed session
            </span>
          </div>
          <ol className="mt-5 flex flex-col gap-5">
            {beats.map((b, i) => (
              <li
                key={b.title}
                className="border border-border bg-card px-5 py-4"
              >
                <div className="mb-1.5 flex flex-wrap items-baseline gap-2.5">
                  <span className="font-mono text-xs font-semibold text-gpc-primary-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-normal">
                    {b.title}
                  </h3>
                  <Chip>{b.time}</Chip>
                </div>
                <p className="max-w-[70ch] text-[15px] leading-relaxed text-muted-foreground">
                  {b.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-[26px] font-normal">
            Patterns worth copying
          </h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {patterns.map((p) => (
              <li
                key={p}
                className="border-l-[3px] border-gpc-primary-red bg-secondary px-4 py-3 text-[14.5px] leading-snug text-muted-foreground"
              >
                {p}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 border-l-4 border-gpc-secondary-yellow bg-gpc-secondary-light-yellow/40 px-5 py-4">
          <div className="mb-1 font-mono text-[11px] tracking-[0.14em] text-gpc-neutral-500 uppercase">
            The one verbatim prompt captured on this call
          </div>
          <p className="font-display text-[19px] leading-snug italic">
            &ldquo;Ask me questions about this until you are 95% sure you know
            what I want.&rdquo;
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Shortened to a keyboard shortcut (AUQ): Ask User Question. The
            About Me and About My Company interview prompts live in the
            password-gated learning portal referenced on the call, not
            reproduced here verbatim.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-[26px] font-normal">
            What never happens in this session
          </h2>
          <p className="mt-3 max-w-[68ch] text-muted-foreground">
            No connectors or automations beyond a passing mention, no admin or
            provisioning discussion beyond the token-limit framing, and no
            demo ever runs on Flowium&rsquo;s own data. Every example is
            generic or GPC-internal. The one file that would require
            Flowium-specific content, About My Company, is explicitly deferred
            to homework rather than run live.
          </p>
        </section>

        <section className="mt-14 border-t border-border pt-6" aria-label="Sources">
          <div className="mb-3 font-mono text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
            Sources
          </div>
          <p className="text-[13.5px] leading-snug text-muted-foreground">
            "Flowium Friday" AI training session · 9/11 Flowium{" "}
            <a
              href={citationHref(CITATION_MAP.get("flowium-training")!)}
              className="font-mono text-[11px] text-primary underline underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              view transcript →
            </a>
          </p>
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
