import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("sales", "06-prospect-faq.md");
  const clickupSources = sourcesForModule("sales", "06");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Sales", href: "/roles/sales" }, { label: "Prospect FAQ" }]}
      eyebrow="Sales · Module 06"
      title={title}
      clickupSources={clickupSources}
      lede="The approved answers to the questions prospects actually ask, grouped by topic."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
