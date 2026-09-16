import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";

export default function Page() {
  const { title, html } = readRoleMarkdown("engineering", "05-handover-and-documentation.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Engineering", href: "/roles/engineering" }, { label: "Handover and Documentation" }]}
      eyebrow="Engineering · Module 05"
      title={title}
      lede="Engineer-to-engineer handover, client SOP and automation documentation templates, and the Value Calculator."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
