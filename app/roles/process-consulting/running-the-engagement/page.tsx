import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("process-consulting", "02-running-the-engagement.md");
  const clickupSources = sourcesForModule("process-consulting", "02");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Process Consulting", href: "/roles/process-consulting" }, { label: "Running the Engagement" }]}
      eyebrow="Process Consulting · Module 02"
      title={title}
      clickupSources={clickupSources}
      lede="Weekly calls, Monday updates, and stakeholder interviews: the recurring mechanisms that carry an Active engagement."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
