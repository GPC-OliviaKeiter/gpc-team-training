import { readFileSync } from "node:fs";
import path from "node:path";
import type { ChecklistPhase } from "@/components/checklist";

export function readOnboarding(): ChecklistPhase[] {
  const filePath = path.join(process.cwd(), "content", "overview", "onboarding.json");
  const raw = readFileSync(filePath, "utf-8");
  return JSON.parse(raw).phases;
}
