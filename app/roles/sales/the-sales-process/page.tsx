import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";

export default function Page() {
  const { title, html } = readRoleMarkdown("sales", "01-the-sales-process.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Sales", href: "/roles/sales" }, { label: "The Sales Process" }]}
      eyebrow="Sales · Module 01"
      title={title}
      lede="The stage-by-stage motion from lead to delivery handoff: pipelines, ownership, and scheduling."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
