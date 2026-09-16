import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("operations", "01-partner-onboarding.md");
  const clickupSources = sourcesForModule("operations", "01");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Operations", href: "/roles/operations" }, { label: "Partner Onboarding: OM Responsibilities" }]}
      eyebrow="Operations · Module 01"
      title={title}
      clickupSources={clickupSources}
      lede="The three financial-tracking subtasks the Operations Manager owns during onboarding."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
