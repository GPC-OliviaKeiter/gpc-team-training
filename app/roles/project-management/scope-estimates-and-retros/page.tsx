import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";

export default function Page() {
  const { title, html } = readRoleMarkdown("project-management", "03-scope-estimates-and-retros.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Project Management", href: "/roles/project-management" }, { label: "Scope, Estimates, and Retros" }]}
      eyebrow="Project Management · Module 03"
      title={title}
      lede="SOW alignment review, scoping time estimates, project retros, and recurring client satisfaction tracking."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
