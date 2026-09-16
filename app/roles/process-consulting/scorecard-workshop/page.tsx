import { ModuleShell } from "@/components/module-shell";
import { ScorecardView } from "@/components/scorecard";
import { readScorecard } from "@/lib/scorecard";

export default function Page() {
  const scorecard = readScorecard("process-consulting", "scorecard-workshop.json");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Process Consulting", href: "/roles/process-consulting" }, { label: "Scorecard: Workshop PC" }]}
      eyebrow="Process Consulting · Scorecard"
      title="Scorecard: Workshop PC"
      lede="What the Workshop Process Consultant seat is actually held to: the mission, the KPIs, the outcomes, and the competencies and values underneath the numbers."
    >
      <div className="mb-10 border-l-[3px] border-gpc-primary-red bg-secondary px-4 py-3 text-[14px] leading-relaxed text-foreground">
        No Workshop SOPs exist in ClickUp yet. The{" "}
        <a
          href="https://github.com/Grantbot-Eng/gpc-skills/blob/main/skills/workshop-portal/SKILL.md"
          className="text-primary underline underline-offset-2"
          target="_blank"
          rel="noreferrer"
        >
          workshop-portal skill
        </a>{" "}
        in gpc-skills is the current delivery runbook.
      </div>
      <ScorecardView scorecard={scorecard} />
    </ModuleShell>
  );
}
