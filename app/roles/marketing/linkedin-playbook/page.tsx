import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("marketing", "01-linkedin-playbook.md");
  const clickupSources = sourcesForModule("marketing", "01");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Marketing", href: "/roles/marketing" }, { label: "LinkedIn Playbook" }]}
      eyebrow="Marketing · Module 01"
      title={title}
      clickupSources={clickupSources}
      lede="Why organic content, the posting rhythm, and the commenting SOP."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
