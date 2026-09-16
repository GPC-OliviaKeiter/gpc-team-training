import { ModuleShell } from "@/components/module-shell";
import { ScorecardView } from "@/components/scorecard";
import { readScorecard } from "@/lib/scorecard";

export default function Page() {
  const scorecard = readScorecard("sales", "scorecard-closer.json");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Sales", href: "/roles/sales" }, { label: "Scorecard: Closer" }]}
      eyebrow="Sales · Scorecard"
      title="Scorecard: Closer"
      lede="What the Closer seat is held to: discovery, proposals, closing discipline, and owning expansion, renewal, and the handoff to delivery."
    >
      <ScorecardView scorecard={scorecard} />
    </ModuleShell>
  );
}
