import { ModuleShell } from "@/components/module-shell";
import { ScorecardView } from "@/components/scorecard";
import { readScorecard } from "@/lib/scorecard";

export default function Page() {
  const scorecard = readScorecard("sales", "scorecard-setter.json");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Sales", href: "/roles/sales" }, { label: "Scorecard: Setter" }]}
      eyebrow="Sales · Scorecard"
      title="Scorecard: Setter"
      lede="What the Setter seat is held to: rapid response to inbound demand, targeted outbound, and a clean handoff to the Closer."
    >
      <ScorecardView scorecard={scorecard} />
    </ModuleShell>
  );
}
