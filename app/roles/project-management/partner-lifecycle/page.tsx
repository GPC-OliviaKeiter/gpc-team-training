import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";

export default function Page() {
  const { title, html } = readRoleMarkdown("project-management", "02-partner-lifecycle.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Project Management", href: "/roles/project-management" }, { label: "Partner Lifecycle" }]}
      eyebrow="Project Management · Module 02"
      title={title}
      lede="The canonical Onboarding to Active to Offboarding arc, across every role that carries it."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
