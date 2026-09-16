import { ModuleShell } from "@/components/module-shell";
import { ScorecardView } from "@/components/scorecard";
import { readScorecard } from "@/lib/scorecard";

export default function Page() {
  const scorecard = readScorecard("operations", "scorecard-operations-manager.json");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Operations", href: "/roles/operations" }, { label: "Scorecard: Operations Manager" }]}
      eyebrow="Operations · Scorecard"
      title="Scorecard: Operations Manager"
      lede="What the Operations Manager seat is held to: capacity, profitability, account hygiene, and cross-functional accountability."
    >
      <ScorecardView scorecard={scorecard} />
    </ModuleShell>
  );
}
