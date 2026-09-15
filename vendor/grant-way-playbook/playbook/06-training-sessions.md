# 06. Training Sessions (Client AI Training / "Flowium Friday")

Source: 9/11/2026 "Flowium Friday: AI Training with Grantbot," ~60 minutes. Grant leading,
Dustin Thompson and Olivia Keiter supporting; Flowium attendees Adam Steele, Cassidy Paulus,
Tanya Chandik, Lucia Denny, Sana Abid, Bobi Nikolovski, plus others visible only in chat
reactions. Citation tag **[flowium-training]** = `transcripts/2026-09-11-flowium/training-session.md`
(cite the timestamped body only — see that folder's README for why three of the timestamps
anchor 10-18 minute blocks rather than single sentences). Other tags as defined in module 00.

This module rests on one observed session, and unlike modules 00-05 it does not document the
workflow-consultant role at all. It documents a different GPC deliverable: a recurring, productized
client training call, built from the same portal referenced in `gpc-skills`
(`skills/workshop-portal/SKILL.md`, `education-portal/`). Treat the shape below as a first sketch.
Grant's own closing line ("looking forward to the next session") means a second Flowium Friday
transcript is coming; diff it against this the day it lands, the same way module 05 was diffed
against Delta's kickoff.

## What a training session is for

Grant states the goal inside the first two minutes: "give you guys the foundations, the tools,
and your tool belt so that you can be confident the next time you open up a tool like Claude...
we're trying to give you the set of things that you can then run with in the future."
**[flowium-training 02:13]** The session is explicitly not a script to be handed over — "we're not
giving you hands off... a document and saying, put this in Claude every single time" — it teaches
the underlying moves (context, models, prompting posture) so the client can generalize past
whatever demo is on screen.

The stated goals for the specific session: "understanding of context, understanding of models,"
delivered as a two-way conversation with questions taken live in chat. **[flowium-training 02:13]**
By the end, every attendee should have a four-folder Vault on their own machine, global
instructions saved into Cowork, and an About Me file started. Homework closes the loop: an About
My Company file, prompt to follow by email or Slack.

## The shape of the observed session

Timestamps are from **[flowium-training]**; the three long blocks are cited to the block's
opening minute, not the sentence's actual position inside it (see the transcript README).

1. **Let the small talk run before starting.** The first two minutes are unscripted catch-up
   (sick kids, Mac vs. Windows) with GPC's facilitators participating, not just waiting it out.
   [00:00-02:13] The session opens on Grant's cue, not the clock.
2. **State who you are and why that matters to how you teach, before the content.** "I taught
   kindergarten math to college calculus for eight years, which means I'm used to teaching in a
   lot of different ways, re-communicating things until they make sense... I gave tours in
   college for the engineering school" (told to rival-school parents, where no one laughed at his
   jokes) — credentialing himself as a teacher who works an unreceptive room, not just an AI
   consultant. **[flowium-training 02:13]**
3. **Take the temperature before teaching.** "How do you feel right now on a scale of one to 10
   in terms of your use? ... Windows or Mac?" **[flowium-training 02:13]** Both answers change
   what follows: a room with "density in the middle with few power users" gets foundations, not
   an advanced session, and the OS mix is banked for later (the Vault walkthrough is demonstrated
   on whichever OS the room actually uses).
4. **Name the fear head-on, unprompted.** "Is AI going to take my job? ... most people are not
   going to ask me in the chat, they're not going to ask me in a group setting, so I'm going to
   address it first. We believe that AI is a multiplication tool... not a subtraction tool."
   **[flowium-training 02:13]** The move is to raise the question the room is too polite to ask,
   before teaching anything else.
5. **Draw the three-tool map before any demo.** Claude Chat ("conversations and brainstorming...
   context is limited to that context window"), Claude Cowork ("the execution engine," access to
   local files, the session's actual focus), Claude Code ("access to a code base... mostly used
   for software," explicitly out of scope for this room of knowledge workers). **[flowium-training
   02:13, 13:48]** Say what a tool is not for as deliberately as what it is for — Code is named and
   dismissed in one breath so no one spends the session's limited time down that path.
6. **Name the danger before the capability.** "If we turn on a folder, what does that mean? It
   means that AI can open your files, read your files, edit your files, create new files, and...
   delete your files. Okay, no bueno... if you've ever seen on Twitter or LinkedIn that people are
   like, oh my god, Claude deleted my entire workspace." **[flowium-training 13:48]** The guardrail
   (manual approval, covered later) is promised before it is built, so the capability never lands
   as unqualified good news.
7. **Give a plain rule of thumb for each model, not a spec sheet.** Opus for deep work and
   long-horizon reasoning, Sonnet as "your daily driver," Haiku for classification-only automation
   work ("I've never used Haiku [in chat]... we mostly use Haiku in automations outside of the
   Claude desktop app"), Fable named and explicitly out of scope ("overpowered for the majority of
   use cases... more expensive... you hit your usage limits faster"). **[flowium-training 13:48]**
   Reframe hitting a token limit as a scheduling conversation, not a failure: "if you hit your
   token limit, but you've done your week's worth of deliverables by Wednesday, I'd say, rock
   on... let's bump that baby up." Same sentence carries the other edge — a token-limit
   conversation is also how a manager notices someone using the company account for meal planning.
8. **Demo one feature, not the whole surface.** "The only thing that I want to take away from this
   first demo is the Ask User Question feature." **[flowium-training 13:48]** One trigger phrase
   taught as a habit, not a menu: "ask me questions about this until you are 95% sure you know
   what I want," shortened to a keyboard shortcut (AUQ) modeled on an in-joke ("the secret menu").
   Demoed live against a deliberately underspecified prompt ("a marketing Q3 prompt") so the room
   watches the tool ask the clarifying questions Grant did not.
9. **Cover the remaining settings in one pass, each with a one-line rule.** Effort (medium/high as
   the default, no hard threshold — "just a matter of how much reasoning and power you want to put
   behind your thing"), approval mode ("go through manually approved" while the room is new to
   this), voice input (Whisper Flow, demoed live). **[flowium-training 13:48]** Each setting gets a
   default and a reason, not an exhaustive explanation.
10. **Reframe the security question as a policy question, not a technical one.** Asked whether the
    Vault should live on Drive instead of the local machine, Grant gave three reasons for local
    (control, exposure if shared, and the "de-slopping" risk of an unverified AI draft landing
    straight in a colleague's lap) but closed with "it is circumstantial to what company policy
    is... we'll rectify this or reconcile it with the leadership team at Flowium... this is our
    guidance, not our law." **[flowium-training 33:42]** GPC gives a strong recommendation and
    still leaves the actual policy decision with the client's leadership, by name.
11. **Flip the room from watching to doing, with a hard folder count.** "This is supposed to be
    flip classroom... we're going to create three folders inside of our vault. About me, outputs,
    and templates." **[flowium-training 33:42]** Demonstrated live on Grant's own machine first
    (screen share of the actual File Explorer, folder-by-folder), then handed to the room with an
    explicit progress check: "drop a yes or something into the chat, just so I can keep track of
    how many people are rocking on this."
12. **Ship the portal link and the prompt, don't just describe them.** "We made this learning
    portal for you. I'm going to grab the URL and throw it into the chat for everyone... in
    session one, set your global instructions... you can easily copy it and then throw it into
    your global instructions." **[flowium-training 33:42]** Nothing in this beat is retyped by the
    attendee; the portal supplies the literal prompt to paste.
13. **Take the question live and answer it as a distinction, not a yes/no.** Lucia's question
    (does the About Me instruction need to also live as a document, given she already has her own
    anti-AI-writing setup) got a structural answer: global instructions carry the standing rules
    ("who I am... never delete a file... write the way that I write, not the way AI writes"), a
    separate anti-AI-writing-guide file carries the style detail, and the About Me folder is
    referenced in the first line of the global instructions so the two connect.
    **[flowium-training 44:30, 45:00]**
14. **Reserve real working time inside the session for the interview, and set it up to work.**
    "I actually want you to spend the last 10 minutes on today... go on mute, keep your cameras
    on... talk it out with Claude" rather than type, because "our ability to go through and talk
    out our responses means that we're going to get very authentic text... if you're typing,
    you'll naturally be slower, you'll think about your grammar." **[flowium-training 46:37]** The
    interview prompt is chat, not Cowork, specifically so Cowork's own folder-context instructions
    do not interfere with the interview.
15. **Assign the second file as homework, named as homework.** "Just like any good tutor, I'm
    giving you homework... your About My Company file. We'll send this information out over email
    or through Slack." **[flowium-training 46:37]** A training session that runs the clock out
    still closes with an explicit deliverable and an explicit delivery channel for the piece that
    did not fit.
16. **Close warm and short.** "I hope you all have a fantastic Friday and weekend ahead. Please
    finish those files... Go forth in peace." **[flowium-training 46:37]**

## Patterns worth copying

- **Read the room's fluency before choosing what to teach.** The 1-10 self-rating and the OS poll
  both happened before the first slide of real content and both changed what followed. **[flowium-training
  02:13]**
- **Address the elephant before the agenda.** "Is AI going to take my job" is answered in the
  first three minutes, unprompted, the same way module 05 opens a kickoff with the live item before
  the agenda. The training-session version of "clear what's already on their mind" is naming the
  fear rather than clearing a status update. **[flowium-training 02:13]**
- **Teach one feature per demo, named explicitly as the takeaway.** "The only thing that I want to
  take away from this first demo is the Ask User Question feature." Naming the single takeaway
  before the demo starts stops a feature-rich tool from turning into a features tour.
  **[flowium-training 13:48]**
- **Give a default and a reason for every setting, not a menu of options.** Effort, approval mode,
  model choice, voice input — each one got a recommended default plus the one sentence of "why,"
  never a full spec walkthrough. **[flowium-training 13:48]**
- **Demo it yourself before handing over the keyboard.** Grant built the four folders on his own
  screen, live, before asking the room to do the same — the flip-classroom moment came after the
  demo, not instead of it. **[flowium-training 33:42]**
- **Ship the artifact, don't describe it.** The portal URL, the password, and the copy-paste prompt
  all went directly into the chat during the session rather than being described for the client to
  go find later. **[flowium-training 33:42]**
- **Recommend, then hand the actual policy call to the client's own leadership, by name.** The
  Drive-vs-local question got GPC's honest recommendation and reasoning, but the decision itself
  was explicitly left with "the leadership team at Flowium." **[flowium-training 33:42]** This is
  the training-session analog of module 05's "the client owns the definitions of success in their
  own words" — GPC frames the tradeoff; the client owns the call.
- **Protect quiet working time inside the session itself, not just as homework.** Ten minutes were
  spent live, on mute, with cameras on, doing the exercise together rather than assigning it whole.
  Only the second file became pure homework. **[flowium-training 46:37]**
- **Voice over typing for anything meant to teach the model who you are.** Grant's stated reason —
  typing is slower and gets edited toward "proper grammar," which is exactly the signal an About
  Me interview needs — is a specific, falsifiable claim about output quality, not a style
  preference. **[flowium-training 46:37]**

## What never happens in this session

No mention of connectors or automations beyond a single passing reference; no discussion of team
admin controls, provisioning, or billing beyond the token-limit-as-conversation framing; no
company-specific use case is worked end to end — every demo (the marketing prompt, the folder
build) uses a generic or GPC-internal example, never Flowium's own data. The About My Company
interview — the one file that would require Flowium-specific content — is explicitly deferred to
homework rather than run live. **[flowium-training]**

## Relationship to the other modules

- This module is not a workflow-consultant call type; it runs alongside modules 00-05 rather than
  inside their sequence. Where those modules document how Grant runs discovery, GO calls, and
  kickoffs for a workflow assessment engagement, this one documents a standing AI-adoption
  training product GPC sells and delivers on a recurring cadence.
- The portal Grant references live ("we made this learning portal for you... in session one, set
  your global instructions") is the workshop-portal product specified in `gpc-skills`
  (`skills/workshop-portal/SKILL.md`, `education-portal/`). This transcript is evidence of that
  product in actual client use, not a description of the product itself — read the skill for the
  portal's own spec.
- Module 00's four-rung technology ladder and value-math framing sit underneath this session's
  "AI as multiplier, not subtraction" framing; the two are the same philosophy pitched to two
  different audiences (an engagement sponsor vs. a room of end users).

## Sourcing status

One observed session (Flowium, 9/11), no internal retrospective on it yet (no GO-call or debrief
equivalent has been filed for training sessions). Grant's own closing line promises a next
session with this client; that transcript is the test of whether the 16-beat shape above holds,
the same way Delta's kickoff tested module 05's Rush-only sketch.
