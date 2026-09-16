import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";

export default function Page() {
  const { title, html } = readRoleMarkdown("sales", "04-proposal-to-close.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Sales", href: "/roles/sales" }, { label: "Proposal to Close" }]}
      eyebrow="Sales · Module 04"
      title={title}
      lede="Pricing and discount authority, the SOW and signature sequence, and a clean handoff to delivery."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
