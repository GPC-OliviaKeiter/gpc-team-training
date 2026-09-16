import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("process-consulting", "01-onboarding-a-partner.md");
  const clickupSources = sourcesForModule("process-consulting", "01");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Process Consulting", href: "/roles/process-consulting" }, { label: "Onboarding a Partner" }]}
      eyebrow="Process Consulting · Module 01"
      title={title}
      clickupSources={clickupSources}
      lede="The client kickoff call, the onboarding document, and the engineering handover: the four PC-owned steps that move a partner to Active."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
