import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";

export default function Page() {
  const { title, html } = readRoleMarkdown("operations", "01-partner-onboarding.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Operations", href: "/roles/operations" }, { label: "Partner Onboarding: OM Responsibilities" }]}
      eyebrow="Operations · Module 01"
      title={title}
      lede="The three financial-tracking subtasks the Operations Manager owns during onboarding."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
