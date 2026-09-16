import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";

export default function Page() {
  const { title, html } = readRoleMarkdown("process-consulting", "03-managing-the-relationship.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Process Consulting", href: "/roles/process-consulting" }, { label: "Managing the Relationship" }]}
      eyebrow="Process Consulting · Module 03"
      title={title}
      lede="Keeping the relationship healthy, catching scope creep before it's a quiet freebie, and pitching the next engagement."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
