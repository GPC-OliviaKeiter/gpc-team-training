import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("process-consulting", "03-managing-the-relationship.md");
  const clickupSources = sourcesForModule("process-consulting", "03");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Process Consulting", href: "/roles/process-consulting" }, { label: "Managing the Relationship" }]}
      eyebrow="Process Consulting · Module 03"
      title={title}
      clickupSources={clickupSources}
      lede="Keeping the relationship healthy, catching scope creep before it's a quiet freebie, and pitching the next engagement."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
