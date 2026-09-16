import { ModuleShell } from "@/components/module-shell";
import { ScorecardView } from "@/components/scorecard";
import { readScorecard } from "@/lib/scorecard";

export default function Page() {
  const scorecard = readScorecard("project-management", "scorecard-project-manager.json");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Project Management", href: "/roles/project-management" }, { label: "Scorecard: Project Manager" }]}
      eyebrow="Project Management · Scorecard"
      title="Scorecard: Project Manager"
      lede="What the Project Manager seat is held to: on-time delivery, clear status, blocker age, and gatekeeping what reaches the client."
    >
      <ScorecardView scorecard={scorecard} />
    </ModuleShell>
  );
}
