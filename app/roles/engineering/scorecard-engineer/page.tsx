import { ModuleShell } from "@/components/module-shell";
import { ScorecardView } from "@/components/scorecard";
import { readScorecard } from "@/lib/scorecard";

export default function Page() {
  const scorecard = readScorecard("engineering", "scorecard-engineer.json");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Engineering", href: "/roles/engineering" }, { label: "Scorecard: Engineer" }]}
      eyebrow="Engineering · Scorecard"
      title="Scorecard: Engineer"
      lede="What the Engineer seat is held to: technical design, on-time delivery, build quality, operational reliability, and documentation."
    >
      <ScorecardView scorecard={scorecard} />
    </ModuleShell>
  );
}
