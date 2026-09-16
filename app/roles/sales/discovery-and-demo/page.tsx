import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("sales", "03-discovery-and-demo.md");
  const clickupSources = sourcesForModule("sales", "03");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Sales", href: "/roles/sales" }, { label: "Discovery and Demo" }]}
      eyebrow="Sales · Module 03"
      title={title}
      clickupSources={clickupSources}
      lede="Opening the call, the discovery question order, the phrases that land, and the Solution Demo stage."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
