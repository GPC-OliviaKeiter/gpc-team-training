import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("project-management", "01-the-pm-cadence.md");
  const clickupSources = sourcesForModule("project-management", "01");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Project Management", href: "/roles/project-management" }, { label: "The PM Cadence" }]}
      eyebrow="Project Management · Module 01"
      title={title}
      clickupSources={clickupSources}
      lede="Daily, weekly, and monthly duties, sprints, bandwidth tracking, and client update reporting."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
