import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("sales", "02-qualifying-a-lead.md");
  const clickupSources = sourcesForModule("sales", "02");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Sales", href: "/roles/sales" }, { label: "Qualifying a Lead" }]}
      eyebrow="Sales · Module 02"
      title={title}
      clickupSources={clickupSources}
      lede="BANT, what makes a meeting qualified, fit signals, and how to prepare before a call."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
