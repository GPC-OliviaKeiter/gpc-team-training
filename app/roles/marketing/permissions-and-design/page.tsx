import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("marketing", "03-permissions-and-design.md");
  const clickupSources = sourcesForModule("marketing", "03");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Marketing", href: "/roles/marketing" }, { label: "Permissions and Design" }]}
      eyebrow="Marketing · Module 03"
      title={title}
      clickupSources={clickupSources}
      lede="The Meta Graph API permissions reference and brand design guidelines."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
