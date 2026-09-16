import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";

export default function Page() {
  const { title, html } = readRoleMarkdown("project-management", "01-the-pm-cadence.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Project Management", href: "/roles/project-management" }, { label: "The PM Cadence" }]}
      eyebrow="Project Management · Module 01"
      title={title}
      lede="Daily, weekly, and monthly duties, sprints, bandwidth tracking, and client update reporting."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
