import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("process-consulting", "04-closing-out.md");
  const clickupSources = sourcesForModule("process-consulting", "04");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Process Consulting", href: "/roles/process-consulting" }, { label: "Closing Out" }]}
      eyebrow="Process Consulting · Module 04"
      title={title}
      clickupSources={clickupSources}
      lede="The three PC-owned action items that fire on Close Out, and what triggers the automatic move to Offboarding."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
