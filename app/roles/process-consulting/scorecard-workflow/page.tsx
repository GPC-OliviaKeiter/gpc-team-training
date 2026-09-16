import { ModuleShell } from "@/components/module-shell";
import { ScorecardView } from "@/components/scorecard";
import { readScorecard } from "@/lib/scorecard";

export default function Page() {
  const scorecard = readScorecard("process-consulting", "scorecard-workflow.json");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Process Consulting", href: "/roles/process-consulting" }, { label: "Scorecard: Workflow PC" }]}
      eyebrow="Process Consulting · Scorecard"
      title="Scorecard: Workflow PC"
      lede="What the Workflow Process Consultant seat is actually held to: the mission, the KPIs, the outcomes, and the competencies and values underneath the numbers."
    >
      <ScorecardView scorecard={scorecard} />
    </ModuleShell>
  );
}
