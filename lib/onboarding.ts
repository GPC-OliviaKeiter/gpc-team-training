import { readFileSync } from "node:fs";
import path from "node:path";
import type { ChecklistPhase } from "@/components/checklist";

/**
 * Reads content/overview/onboarding.json: the 47 tasks in ClickUp list
 * 901220437555, regrouped into reading order. ClickUp stays the source of
 * truth for what is done; this is the map of it.
 */
export function readOnboarding(): { phases: ChecklistPhase[] } {
  const filePath = path.join(process.cwd(), "content", "overview", "onboarding.json");
  return JSON.parse(readFileSync(filePath, "utf-8")) as { phases: ChecklistPhase[] };
}

export const ONBOARDING_LIST_URL = "https://app.clickup.com/9012022270/v/li/901220437555";
