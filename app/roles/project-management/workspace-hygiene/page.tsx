import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("project-management", "04-workspace-hygiene.md");
  const clickupSources = sourcesForModule("project-management", "04");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Project Management", href: "/roles/project-management" }, { label: "Workspace Hygiene" }]}
      eyebrow="Project Management · Module 04"
      title={title}
      clickupSources={clickupSources}
      lede="Google Drive structure, Slack channel management, credential management, and periodic access review."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
