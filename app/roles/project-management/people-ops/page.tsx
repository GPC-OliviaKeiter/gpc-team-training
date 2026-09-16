import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("project-management", "05-people-ops.md");
  const clickupSources = sourcesForModule("project-management", "05");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Project Management", href: "/roles/project-management" }, { label: "People Ops the PM Owns" }]}
      eyebrow="Project Management · Module 05"
      title={title}
      clickupSources={clickupSources}
      lede="Internal onboarding and offboarding, out-of-office handover, quarterly SOP review, and the internal SOP template."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
