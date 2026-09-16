import { ModuleShell } from "@/components/module-shell";
import { ScorecardView } from "@/components/scorecard";
import { readScorecard } from "@/lib/scorecard";

export default function Page() {
  const scorecard = readScorecard("marketing", "scorecard-marketing-manager.json");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Marketing", href: "/roles/marketing" }, { label: "Scorecard: Marketing Manager" }]}
      eyebrow="Marketing · Scorecard"
      title="Scorecard: Marketing Manager"
      lede="What the Marketing Manager seat is held to: qualified pipeline, paid media efficiency, Webflow, and an always-on experiment cadence."
    >
      <ScorecardView scorecard={scorecard} />
    </ModuleShell>
  );
}
