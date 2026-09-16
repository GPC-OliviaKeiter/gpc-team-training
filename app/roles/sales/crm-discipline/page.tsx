import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";

export default function Page() {
  const { title, html } = readRoleMarkdown("sales", "05-crm-discipline.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Sales", href: "/roles/sales" }, { label: "CRM Discipline" }]}
      eyebrow="Sales · Module 05"
      title={title}
      lede="The 12 CRM Commandments and HubSpot activity and logging standards."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
