/**
 * Every inline SVG this site draws, in one file.
 *
 * House rules for all of them (see components/diagram.tsx for the frame):
 * - Colors come from the GPC tokens in app/globals.css by var() reference,
 *   so a token change moves the diagrams with the rest of the site.
 * - Nothing is carried by color alone. Every lane, stage, and quadrant
 *   also has a text label.
 * - `role="img"` plus an `aria-label` that states the claim, not the shapes.
 * - No external chart library, no image files, no JavaScript. These render
 *   identically with scripting off, which is the point.
 *
 * Fonts are referenced as the CSS variables Tailwind's @theme block
 * defines, because an SVG <text> does not inherit the utility classes the
 * surrounding page uses.
 */

const MONO = "var(--font-mono)";
const SANS = "var(--font-sans)";
const INK = "var(--foreground)";
const MUTED = "var(--muted-foreground)";
const BORDER = "var(--gpc-neutral-300)";
const CARD = "var(--card)";
const RED = "var(--gpc-primary-red)";
const ORANGE = "var(--gpc-secondary-orange)";
const PURPLE = "var(--gpc-secondary-purple)";
const YELLOW = "var(--gpc-secondary-yellow)";
const LIGHT_YELLOW = "var(--gpc-secondary-light-yellow)";

/** Shared arrowhead marker. Declared once per SVG that uses it. */
function ArrowDefs({ id = "arrow", color = MUTED }: { id?: string; color?: string }) {
  return (
    <defs>
      <marker
        id={id}
        viewBox="0 0 8 8"
        refX="7"
        refY="4"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M0 0 L8 4 L0 8 z" fill={color} />
      </marker>
    </defs>
  );
}

/* -------------------------------------------------------------------------
 * Overview 03: how work moves through GPC
 * Source: GPC Wiki, "GPC Team Structure Overview", the ownership list under
 * "How Work Moves Through GPC".
 * ---------------------------------------------------------------------- */

const PIPELINE = [
  { stage: "Marketing", owns: "Qualified demand" },
  { stage: "Setter", owns: "Booked meetings" },
  { stage: "Closer", owns: "What we sell" },
  { stage: "Consulting", owns: "What we recommend" },
  { stage: "PM + Engineering", owns: "How and when it ships" },
  { stage: "Adoption", owns: "Whether it sticks" },
];

export function WorkMovesThroughGpc() {
  const w = 142;
  const gap = 16;
  return (
    <svg
      viewBox="0 0 950 132"
      className="h-auto w-full min-w-[860px]"
      role="img"
      aria-label="Work moves through GPC in six stages: Marketing generates demand, the Setter books meetings, the Closer owns what we sell, Consulting owns what we recommend, Project Management and Engineering own how and when it ships, and Adoption owns whether it sticks. Operations spans every stage."
    >
      <ArrowDefs id="pipe-arrow" color={RED} />
      {PIPELINE.map((s, i) => {
        const x = 8 + i * (w + gap);
        const last = i === PIPELINE.length - 1;
        return (
          <g key={s.stage}>
            <rect
              x={x}
              y={14}
              width={w}
              height={58}
              fill={CARD}
              stroke={last ? RED : BORDER}
              strokeWidth={last ? 1.5 : 1}
            />
            <text
              x={x + 12}
              y={36}
              fontFamily={SANS}
              fontSize="13.5"
              fontWeight="500"
              fill={INK}
            >
              {s.stage}
            </text>
            <text x={x + 12} y={55} fontFamily={MONO} fontSize="10" fill={MUTED}>
              {s.owns}
            </text>
            {!last && (
              <line
                x1={x + w + 2}
                y1={43}
                x2={x + w + gap - 3}
                y2={43}
                stroke={RED}
                strokeWidth="1.5"
                markerEnd="url(#pipe-arrow)"
              />
            )}
          </g>
        );
      })}
      <rect x={8} y={88} width={934} height={34} fill={LIGHT_YELLOW} stroke={BORDER} />
      <text x={20} y={103} fontFamily={MONO} fontSize="10" letterSpacing="1.2" fill={INK}>
        OPERATIONS
      </text>
      <text x={20} y={116} fontFamily={SANS} fontSize="12" fill={INK}>
        Spans all six: capacity, profitability, resourcing, and who owns the decision when it is unclear.
      </text>
    </svg>
  );
}

/* -------------------------------------------------------------------------
 * Overview 04: the service ladder
 * Source: GPC Wiki, "GPC Services" (six pages). Commitment and the one-time
 * versus ongoing split come from those pages; nothing here is invented.
 * ---------------------------------------------------------------------- */

const SERVICES = [
  { name: "AI Workshop", kind: "One-time", tiers: "Silver / Gold", height: 46 },
  { name: "Workflow Assessment", kind: "One-time", tiers: "Silver / Gold", height: 74 },
  { name: "AI Adoption Plan", kind: "6-month retainer", tiers: "Silver / Gold", height: 102 },
  { name: "Technical Build", kind: "Monthly", tiers: "Silver / Gold", height: 130 },
  { name: "Growth Insurance", kind: "Month to month", tiers: "Lite / Standard", height: 158 },
];

export function ServiceLadder() {
  const w = 168;
  const gap = 14;
  const base = 200;
  return (
    <svg
      viewBox="0 0 930 268"
      className="h-auto w-full min-w-[820px]"
      role="img"
      aria-label="GPC's five services as a ladder of commitment: AI Workshop and Workflow Assessment are one-time engagements, the AI Adoption Plan is a six-month retainer, Technical Builds are monthly, and Growth Insurance is an ongoing month-to-month subscription. Each has two tiers."
    >
      <line x1="8" y1={base} x2="922" y2={base} stroke={BORDER} strokeWidth="1" />
      {SERVICES.map((s, i) => {
        const x = 12 + i * (w + gap);
        const y = base - s.height;
        return (
          <g key={s.name}>
            <rect
              x={x}
              y={y}
              width={w}
              height={s.height}
              fill={i > 1 ? LIGHT_YELLOW : CARD}
              stroke={BORDER}
            />
            <rect x={x} y={y} width={w} height={3} fill={i > 1 ? ORANGE : RED} />
            <text
              x={x + 12}
              y={y + 24}
              fontFamily={SANS}
              fontSize="13"
              fontWeight="500"
              fill={INK}
            >
              {s.name}
            </text>
            <text x={x + 12} y={base + 18} fontFamily={MONO} fontSize="10" fill={MUTED}>
              {s.kind}
            </text>
            <text x={x + 12} y={base + 33} fontFamily={MONO} fontSize="10" fill={MUTED}>
              {s.tiers}
            </text>
          </g>
        );
      })}
      <text x="12" y="24" fontFamily={MONO} fontSize="10" letterSpacing="1.2" fill={RED}>
        ONE-TIME
      </text>
      <text x="368" y="24" fontFamily={MONO} fontSize="10" letterSpacing="1.2" fill={ORANGE}>
        ONGOING
      </text>
      <text x="12" y="258" fontFamily={SANS} fontSize="12" fill={MUTED}>
        Height is depth of commitment, not price. Every tier is defined in ClickUp; the numbers live there.
      </text>
    </svg>
  );
}

/* -------------------------------------------------------------------------
 * Overview 07: the ClickUp hierarchy
 * Source: General SOPs, "ClickUp Hierarchy Explained".
 * ---------------------------------------------------------------------- */

const HIERARCHY = [
  { level: "Workspace", example: "General Purpose Consulting", color: INK },
  { level: "Space", example: "Partner Fulfillment", color: PURPLE },
  { level: "Folder", example: "One per partner", color: PURPLE },
  { level: "List", example: "Production, Survey Data, NPS", color: ORANGE },
  { level: "Task", example: "One deliverable, CAR description, time estimate", color: RED },
  { level: "Subtask", example: "Where the timer runs", color: RED },
  { level: "Checklist", example: "QA steps inside a task", color: MUTED },
];

export function ClickUpHierarchy() {
  const rowH = 38;
  return (
    <svg
      viewBox="0 0 800 290"
      className="h-auto w-full min-w-[640px]"
      role="img"
      aria-label="The ClickUp hierarchy nests from Workspace, to Space, to Folder, to List, to Task, to Subtask, to Checklist. A partner is a Folder, a deliverable is a Task, and time is tracked at the Subtask level."
    >
      {HIERARCHY.map((h, i) => {
        const x = 10 + i * 26;
        const y = 8 + i * rowH;
        return (
          <g key={h.level}>
            {i > 0 && (
              <path
                d={`M${x - 13} ${y - rowH + 24} V ${y + 16} H ${x - 2}`}
                fill="none"
                stroke={BORDER}
                strokeWidth="1"
              />
            )}
            <rect x={x} y={y} width={790 - x - 10} height={28} fill={CARD} stroke={BORDER} />
            <rect x={x} y={y} width={3} height={28} fill={h.color} />
            <text
              x={x + 14}
              y={y + 19}
              fontFamily={SANS}
              fontSize="13"
              fontWeight="500"
              fill={INK}
            >
              {h.level}
            </text>
            <text x={x + 120} y={y + 19} fontFamily={MONO} fontSize="10.5" fill={MUTED}>
              {h.example}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* -------------------------------------------------------------------------
 * Overview 07: task statuses
 * Source: General SOPs, "Task Status Changes and When To Use Them".
 * The exception row is the same SOP's rule that a status change means a
 * change in who owns the next move.
 * ---------------------------------------------------------------------- */

const MAIN_STATUSES = [
  "Backlog",
  "Submitted",
  "Triaged",
  "To Do",
  "In Progress",
  "Internal Review",
  "Partner Review",
  "Complete",
];

const EXCEPTION_STATUSES = [
  { name: "Internal Escalation", who: "Needs another GPC person" },
  { name: "Externally Blocked", who: "Needs a third party" },
  { name: "On Hold", who: "Paused on purpose" },
  { name: "Cancelled", who: "Will never be worked" },
];

export function TaskStatusFlow() {
  const w = 106;
  const gap = 12;
  return (
    <svg
      viewBox="0 0 960 218"
      className="h-auto w-full min-w-[880px]"
      role="img"
      aria-label="The standard task path runs Backlog, Submitted, Triaged, To Do, In Progress, Internal Review, Partner Review, Complete. Four exception statuses sit off that path: Internal Escalation, Externally Blocked, On Hold, and Cancelled. Every status change other than To Do, In Progress, and Complete needs a comment explaining it."
    >
      <ArrowDefs id="status-arrow" color={MUTED} />
      <text x="10" y="18" fontFamily={MONO} fontSize="10" letterSpacing="1.2" fill={MUTED}>
        THE PATH
      </text>
      {MAIN_STATUSES.map((s, i) => {
        const x = 10 + i * (w + gap);
        const done = s === "Complete";
        return (
          <g key={s}>
            <rect
              x={x}
              y={30}
              width={w}
              height={40}
              fill={done ? LIGHT_YELLOW : CARD}
              stroke={done ? ORANGE : BORDER}
            />
            <text
              x={x + w / 2}
              y={55}
              textAnchor="middle"
              fontFamily={SANS}
              fontSize="12"
              fontWeight="500"
              fill={INK}
            >
              {s}
            </text>
            {i < MAIN_STATUSES.length - 1 && (
              <line
                x1={x + w + 1}
                y1={50}
                x2={x + w + gap - 3}
                y2={50}
                stroke={MUTED}
                strokeWidth="1.2"
                markerEnd="url(#status-arrow)"
              />
            )}
          </g>
        );
      })}

      <text x="10" y="112" fontFamily={MONO} fontSize="10" letterSpacing="1.2" fill={RED}>
        OFF THE PATH
      </text>
      {EXCEPTION_STATUSES.map((s, i) => {
        const x = 10 + i * 238;
        return (
          <g key={s.name}>
            <rect x={x} y={124} width={222} height={46} fill={CARD} stroke={RED} />
            <text
              x={x + 12}
              y={145}
              fontFamily={SANS}
              fontSize="12.5"
              fontWeight="500"
              fill={INK}
            >
              {s.name}
            </text>
            <text x={x + 12} y={161} fontFamily={MONO} fontSize="10" fill={MUTED}>
              {s.who}
            </text>
          </g>
        );
      })}

      <rect x="10" y="182" width="940" height="28" fill={LIGHT_YELLOW} stroke={BORDER} />
      <text x="22" y="200" fontFamily={SANS} fontSize="12" fill={INK}>
        A status change means responsibility changed. Every change except To Do, In Progress, and Complete carries a comment saying why and who owns the next move.
      </text>
    </svg>
  );
}

/* -------------------------------------------------------------------------
 * Overview 05: where a conversation belongs
 * Source: GPC Wiki, "GPC Communication Guidelines", the four tools and
 * "The Simple Rule" at the bottom of that page.
 * ---------------------------------------------------------------------- */

const CHANNELS = [
  { tool: "Slack", role: "Where we talk", detail: "Internal questions, announcements, shared client channels" },
  { tool: "ClickUp", role: "Where client work lives", detail: "Tasks, requirements, decisions, blockers, status" },
  { tool: "HubSpot", role: "Where sales lives", detail: "Calls, emails, deal stages, the history of an opportunity" },
  { tool: "Email", role: "Fills the external gaps", detail: "Clients without Slack, formal or long-form, outside stakeholders" },
];

export function CommunicationRouting() {
  const w = 218;
  const gap = 14;
  return (
    <svg
      viewBox="0 0 940 196"
      className="h-auto w-full min-w-[860px]"
      role="img"
      aria-label="Slack is where we talk, ClickUp is where client work lives, HubSpot is where sales activity lives, and email fills the external gaps. Any conversation in any of the four that changes the work has to end up in ClickUp."
    >
      <ArrowDefs id="comm-arrow" color={RED} />
      {CHANNELS.map((c, i) => {
        const x = 10 + i * (w + gap);
        const isClickUp = c.tool === "ClickUp";
        return (
          <g key={c.tool}>
            <rect
              x={x}
              y={16}
              width={w}
              height={86}
              fill={isClickUp ? LIGHT_YELLOW : CARD}
              stroke={isClickUp ? ORANGE : BORDER}
              strokeWidth={isClickUp ? 1.5 : 1}
            />
            <text
              x={x + 14}
              y={42}
              fontFamily={SANS}
              fontSize="16"
              fontWeight="500"
              fill={INK}
            >
              {c.tool}
            </text>
            <text x={x + 14} y={60} fontFamily={MONO} fontSize="10" fill={MUTED}>
              {c.role}
            </text>
            <foreignObject x={x + 14} y={66} width={w - 28} height={34}>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: "11.5px",
                  lineHeight: 1.35,
                  color: MUTED,
                }}
              >
                {c.detail}
              </div>
            </foreignObject>
            {!isClickUp && (
              <line
                x1={x + w / 2}
                y1={106}
                x2={x + w / 2 > 480 ? x + w / 2 : x + w / 2}
                y2={140}
                stroke={RED}
                strokeWidth="1.2"
                strokeDasharray="4 3"
                markerEnd="url(#comm-arrow)"
              />
            )}
          </g>
        );
      })}
      <rect x="10" y="146" width="920" height="40" fill={CARD} stroke={RED} strokeWidth="1.5" />
      <text x="26" y="163" fontFamily={MONO} fontSize="10" letterSpacing="1.2" fill={RED}>
        THE RULE
      </text>
      <text x="26" y="179" fontFamily={SANS} fontSize="13" fill={INK}>
        If a conversation changes the work, it is captured in ClickUp. If it is not in ClickUp, it does not exist.
      </text>
    </svg>
  );
}

/* -------------------------------------------------------------------------
 * Overview 08: AI ROI. Four diagrams, all from gpc-ai-roi-framework.
 * Sample numbers are that repo's src/data/sampleWorkflow.js, unchanged, and
 * are labeled sample data wherever they render (that repo's rule, kept).
 * ---------------------------------------------------------------------- */

export function RoiBeforeAfter() {
  const scale = 4.6; // px per minute
  return (
    <svg
      viewBox="0 0 860 236"
      className="h-auto w-full min-w-[720px]"
      role="img"
      aria-label="Sample data. One workflow takes 90 minutes without AI and 15 minutes with it, handing back 75 minutes every time it runs. Two runs a week, four weeks, five eligible people gives 50 hours in month one."
    >
      <text x="10" y="20" fontFamily={MONO} fontSize="10" letterSpacing="1.2" fill={MUTED}>
        ONE WORKFLOW, ONE RUN
      </text>

      <text x="10" y="52" fontFamily={MONO} fontSize="11" fill={MUTED}>
        Before
      </text>
      <rect x="78" y="38" width={90 * scale} height="24" fill={BORDER} stroke={BORDER} />
      <text x={78 + 90 * scale + 10} y="55" fontFamily={SANS} fontSize="13" fill={INK}>
        90 min
      </text>

      <text x="10" y="90" fontFamily={MONO} fontSize="11" fill={MUTED}>
        After
      </text>
      <rect x="78" y="76" width={15 * scale} height="24" fill={RED} />
      <text x={78 + 15 * scale + 10} y="93" fontFamily={SANS} fontSize="13" fill={INK}>
        15 min
      </text>

      <line
        x1={78 + 15 * scale}
        y1="108"
        x2={78 + 90 * scale}
        y2="108"
        stroke={ORANGE}
        strokeWidth="1.5"
      />
      <text
        x={78 + 52 * scale}
        y="126"
        textAnchor="middle"
        fontFamily={SANS}
        fontSize="13"
        fontWeight="500"
        fill={ORANGE}
      >
        75 minutes handed back, every time the work runs
      </text>

      <line x1="10" y1="146" x2="850" y2="146" stroke={BORDER} />
      <text x="10" y="170" fontFamily={MONO} fontSize="10" letterSpacing="1.2" fill={MUTED}>
        THEN IT MULTIPLIES
      </text>
      {[
        { v: "75 min", l: "saved per run" },
        { v: "× 2", l: "runs per person, per week" },
        { v: "× 4", l: "weeks" },
        { v: "× 5", l: "eligible people" },
      ].map((s, i) => (
        <g key={s.l}>
          <text
            x={12 + i * 150}
            y={198}
            fontFamily={SANS}
            fontSize="17"
            fontWeight="500"
            fill={INK}
          >
            {s.v}
          </text>
          <text x={12 + i * 150} y={216} fontFamily={MONO} fontSize="10" fill={MUTED}>
            {s.l}
          </text>
        </g>
      ))}
      <rect x="612" y="174" width="238" height="48" fill={LIGHT_YELLOW} stroke={ORANGE} />
      <text x="628" y="198" fontFamily={SANS} fontSize="21" fontWeight="500" fill={INK}>
        = 50 hours
      </text>
      <text x="628" y="214" fontFamily={MONO} fontSize="10" fill={MUTED}>
        handed back in month one
      </text>
    </svg>
  );
}

const VEHICLE_PARTS = [
  { term: "Driver", maps: "The person", color: PURPLE },
  { term: "Vehicle", maps: "Their AI environment", color: INK },
  { term: "Part", maps: "A skill", color: ORANGE },
  { term: "Gas", maps: "Tokens", color: YELLOW },
  { term: "Odometer", maps: "Skill calls", color: MUTED },
];

export function RoiVehicleModel() {
  return (
    <svg
      viewBox="0 0 840 296"
      className="h-auto w-full min-w-[700px]"
      role="img"
      aria-label="The vehicle model maps five things: the driver is the person, the vehicle is their AI environment, a part is a skill, gas is tokens, and the odometer is skill calls. Skill calls are the activity spine every other reading explains."
    >
      {/* Abstract vehicle: body, cabin, wheels. Not a literal car. */}
      <g>
        <path
          d="M120 120 L168 82 L300 82 L338 120 L392 120 L392 158 L108 158 L108 126 Z"
          fill={CARD}
          stroke={INK}
          strokeWidth="1.5"
        />
        <path d="M176 90 L236 90 L236 118 L152 118 Z" fill={LIGHT_YELLOW} stroke={INK} />
        <path d="M246 90 L296 90 L328 118 L246 118 Z" fill={LIGHT_YELLOW} stroke={INK} />
        <circle cx="168" cy="158" r="21" fill={CARD} stroke={INK} strokeWidth="1.5" />
        <circle cx="168" cy="158" r="7" fill={ORANGE} />
        <circle cx="336" cy="158" r="21" fill={CARD} stroke={INK} strokeWidth="1.5" />
        <circle cx="336" cy="158" r="7" fill={ORANGE} />
        <circle cx="200" cy="104" r="8" fill={PURPLE} />
        <rect x="358" y="128" width="26" height="18" fill={YELLOW} stroke={INK} />
      </g>

      <text x="440" y="18" fontFamily={MONO} fontSize="10" letterSpacing="1.2" fill={MUTED}>
        THE SAME FIVE THINGS, WITHOUT THE METAPHOR
      </text>

      {VEHICLE_PARTS.map((p, i) => {
        const x = 440;
        const y = 30 + i * 42;
        return (
          <g key={p.term}>
            <rect x={x} y={y} width={386} height={34} fill={CARD} stroke={BORDER} />
            <rect x={x} y={y} width={4} height={34} fill={p.color} />
            <text
              x={x + 16}
              y={y + 22}
              fontFamily={SANS}
              fontSize="13.5"
              fontWeight="500"
              fill={INK}
            >
              {p.term}
            </text>
            <text x={x + 130} y={y + 22} fontFamily={MONO} fontSize="11" fill={MUTED}>
              {p.maps}
            </text>
          </g>
        );
      })}

      <line x1="14" y1="254" x2="826" y2="254" stroke={BORDER} />
      <text x="14" y="276" fontFamily={SANS} fontSize="13" fill={INK}>
        Skill calls are the odometer: the activity spine every other reading explains.
      </text>
      <text x="14" y="292" fontFamily={SANS} fontSize="12.5" fill={MUTED}>
        Three of the eight metrics divide by skill calls. The other five do not.
      </text>
    </svg>
  );
}

const QUADRANTS = [
  {
    action: "Coach",
    where: "top-left",
    x: 68,
    y: 46,
    condition: "Works, but adoption is holding it back. Fix the person, not the build.",
  },
  {
    action: "Scale",
    where: "top-right",
    x: 352,
    y: 46,
    condition: "High value, high adoption, upkeep the team can sustain. Add people and workflows.",
  },
  {
    action: "Retire",
    where: "bottom-left",
    x: 68,
    y: 196,
    condition: "Not enough value for the upkeep, and not enough people to miss it.",
  },
  {
    action: "Repair",
    where: "bottom-right",
    x: 352,
    y: 196,
    condition: "People want it, but reliability is letting them down. Fix the skill, keep the people.",
  },
];

export function RoiDecisionChart() {
  return (
    <svg
      viewBox="0 0 880 330"
      className="h-auto w-full min-w-[760px]"
      role="img"
      aria-label="Every skill lands in one of four actions. Value and reliability run up the vertical axis, adoption and reach run along the horizontal. High value with low adoption means Coach. High on both means Scale. Low on both means Retire. High adoption with low reliability means Repair."
    >
      <ArrowDefs id="axis-arrow" color={MUTED} />
      {/* Plot area */}
      <rect x="56" y="24" width="560" height="272" fill={CARD} stroke={BORDER} />
      <line x1="336" y1="24" x2="336" y2="296" stroke={BORDER} strokeDasharray="4 4" />
      <line x1="56" y1="160" x2="616" y2="160" stroke={BORDER} strokeDasharray="4 4" />

      {QUADRANTS.map((q) => (
        <g key={q.action}>
          <text
            x={q.x}
            y={q.y}
            fontFamily={SANS}
            fontSize="22"
            fontWeight="500"
            fill={q.action === "Scale" ? ORANGE : q.action === "Retire" ? MUTED : INK}
          >
            {q.action}
          </text>
          <foreignObject x={q.x} y={q.y + 8} width={248} height={70}>
            <div
              style={{
                fontFamily: SANS,
                fontSize: "11.5px",
                lineHeight: 1.4,
                color: MUTED,
              }}
            >
              {q.condition}
            </div>
          </foreignObject>
        </g>
      ))}

      {/* Axes */}
      <line
        x1="42"
        y1="296"
        x2="42"
        y2="20"
        stroke={MUTED}
        strokeWidth="1.2"
        markerEnd="url(#axis-arrow)"
      />
      <line
        x1="56"
        y1="310"
        x2="620"
        y2="310"
        stroke={MUTED}
        strokeWidth="1.2"
        markerEnd="url(#axis-arrow)"
      />
      <text
        transform="translate(30, 200) rotate(-90)"
        fontFamily={MONO}
        fontSize="10"
        letterSpacing="1.2"
        fill={MUTED}
      >
        VALUE AND RELIABILITY
      </text>
      <text x="56" y="325" fontFamily={MONO} fontSize="10" letterSpacing="1.2" fill={MUTED}>
        ADOPTION AND REACH
      </text>

      {/* The two questions, as the key to the two axes */}
      <rect x="648" y="24" width="222" height="126" fill={CARD} stroke={PURPLE} />
      <rect x="648" y="24" width="222" height="4" fill={PURPLE} />
      <text x="664" y="52" fontFamily={MONO} fontSize="10" letterSpacing="1.2" fill={PURPLE}>
        THE DRIVER
      </text>
      <foreignObject x="664" y="58" width="192" height="86">
        <div style={{ fontFamily: SANS, fontSize: "12.5px", lineHeight: 1.4, color: INK }}>
          Are people getting better at using AI? Four signals: adoption, AI efficiency,
          workflow autonomy, time saved.
        </div>
      </foreignObject>

      <rect x="648" y="164" width="222" height="132" fill={CARD} stroke={ORANGE} />
      <rect x="648" y="164" width="222" height="4" fill={ORANGE} />
      <text x="664" y="192" fontFamily={MONO} fontSize="10" letterSpacing="1.2" fill={ORANGE}>
        THE PARTS
      </text>
      <foreignObject x="664" y="198" width="192" height="94">
        <div style={{ fontFamily: SANS, fontSize: "12.5px", lineHeight: 1.4, color: INK }}>
          Which capabilities deserve more investment? Four signals: consistency, skill reach,
          maintenance burden, token efficiency.
        </div>
      </foreignObject>
    </svg>
  );
}

const CADENCE = [
  { point: "Baseline", when: "Before a skill ships", what: "Minutes, volume, tokens, eligible people, ship version" },
  { point: "Day 30", when: "First read", what: "Is anyone using it" },
  { point: "Day 90", when: "Habit check", what: "Coach, scale, repair, or retire" },
  { point: "Day 180", when: "Value check", what: "Hours handed back against upkeep" },
  { point: "Quarterly", when: "Thereafter", what: "Same readings, same four actions" },
];

export function RoiCadence() {
  const gap = 182;
  return (
    <svg
      viewBox="0 0 950 168"
      className="h-auto w-full min-w-[860px]"
      role="img"
      aria-label="The measurement cadence: capture a baseline before a skill ships, then read at day 30, day 90, day 180, and quarterly after that."
    >
      <line x1="24" y1="56" x2="926" y2="56" stroke={BORDER} strokeWidth="2" />
      {CADENCE.map((c, i) => {
        const x = 24 + i * gap;
        const first = i === 0;
        return (
          <g key={c.point}>
            <circle
              cx={x}
              cy={56}
              r={first ? 9 : 6}
              fill={first ? RED : CARD}
              stroke={first ? RED : MUTED}
              strokeWidth="2"
            />
            <text x={x - 2} y={34} fontFamily={SANS} fontSize="15" fontWeight="500" fill={INK}>
              {c.point}
            </text>
            <text x={x - 2} y={82} fontFamily={MONO} fontSize="10" fill={MUTED}>
              {c.when}
            </text>
            <foreignObject x={x - 4} y={88} width={166} height={58}>
              <div
                style={{ fontFamily: SANS, fontSize: "12px", lineHeight: 1.35, color: INK }}
              >
                {c.what}
              </div>
            </foreignObject>
          </g>
        );
      })}
      <text x="24" y="162" fontFamily={SANS} fontSize="12" fill={MUTED}>
        GPC starts measuring before GPC starts building. Without the first dot, none of the others prove anything.
      </text>
    </svg>
  );
}

/* -------------------------------------------------------------------------
 * Overview 09: the GitHub loop
 * v0.1 of this site carried a diagram of this and it was lost in the
 * rebuild. Redrawn here from the module's own steps.
 * ---------------------------------------------------------------------- */

export function GitBranchLoop() {
  return (
    <svg
      viewBox="0 0 880 200"
      className="h-auto w-full min-w-[760px]"
      role="img"
      aria-label="The GitHub loop: main runs along the bottom. A branch splits off, takes one or more commits, opens a pull request, gets reviewed, and merges back into main. The branch is then deleted."
    >
      <ArrowDefs id="git-arrow" color={INK} />
      {/* main line */}
      <line x1="30" y1="150" x2="850" y2="150" stroke={INK} strokeWidth="2" />
      <text x="30" y="178" fontFamily={MONO} fontSize="11" fill={INK}>
        main
      </text>
      <text x="30" y="192" fontFamily={MONO} fontSize="10" fill={MUTED}>
        protected, always deployable
      </text>

      {/* branch out and back */}
      <path
        d="M170 150 C 210 150, 214 62, 258 62 L 646 62 C 690 62, 694 150, 734 150"
        fill="none"
        stroke={RED}
        strokeWidth="2"
      />

      {[
        { cx: 170, label: "branch", sub: "off main" },
        { cx: 330, label: "commit", sub: "one change" },
        { cx: 440, label: "commit", sub: "one change" },
        { cx: 560, label: "pull request", sub: "asks to merge" },
        { cx: 646, label: "review", sub: "Grant merges" },
      ].map((n, i) => (
        <g key={`${n.label}-${i}`}>
          <circle
            cx={n.cx}
            cy={i === 0 ? 150 : 62}
            r="7"
            fill={CARD}
            stroke={RED}
            strokeWidth="2"
          />
          <text
            x={n.cx}
            y={i === 0 ? 132 : 40}
            textAnchor="middle"
            fontFamily={SANS}
            fontSize="12.5"
            fontWeight="500"
            fill={INK}
          >
            {n.label}
          </text>
          <text
            x={n.cx}
            y={i === 0 ? 118 : 26}
            textAnchor="middle"
            fontFamily={MONO}
            fontSize="10"
            fill={MUTED}
          >
            {n.sub}
          </text>
        </g>
      ))}

      <circle cx="734" cy="150" r="8" fill={RED} />
      <text x="734" y="178" textAnchor="middle" fontFamily={SANS} fontSize="12.5" fontWeight="500" fill={INK}>
        merge
      </text>
      <text x="734" y="192" textAnchor="middle" fontFamily={MONO} fontSize="10" fill={MUTED}>
        then delete the branch
      </text>
      <line
        x1="760"
        y1="150"
        x2="846"
        y2="150"
        stroke={INK}
        strokeWidth="2"
        markerEnd="url(#git-arrow)"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------
 * Overview 02: the four values
 * Source: GPC Wiki, "GPC Core Values".
 * ---------------------------------------------------------------------- */

const VALUES = [
  { name: "Be decent, be direct", color: RED },
  { name: "Passion for modern solutions", color: ORANGE },
  { name: "Empathetic ownership", color: PURPLE },
  { name: "Build, sharpen, scale", color: YELLOW },
];

export function ValuesBand() {
  const w = 218;
  const gap = 12;
  return (
    <svg
      viewBox="0 0 932 92"
      className="h-auto w-full min-w-[860px]"
      role="img"
      aria-label="GPC's four core values: be decent and be direct, passion for modern solutions, empathetic ownership, and build sharpen scale."
    >
      {VALUES.map((v, i) => {
        const x = 8 + i * (w + gap);
        return (
          <g key={v.name}>
            <rect x={x} y={16} width={w} height={60} fill={CARD} stroke={BORDER} />
            <rect x={x} y={16} width={w} height={5} fill={v.color} />
            <text
              x={x + 14}
              y={44}
              fontFamily={MONO}
              fontSize="10"
              letterSpacing="1.2"
              fill={MUTED}
            >
              {`0${i + 1}`}
            </text>
            <foreignObject x={x + 14} y={48} width={w - 28} height={26}>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  color: INK,
                }}
              >
                {v.name}
              </div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
}
