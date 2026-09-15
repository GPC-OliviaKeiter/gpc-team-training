import { ModuleShell } from "@/components/module-shell";
import { readWcMarkdown } from "@/lib/wc-markdown";

export default function Page() {
  const { title, html } = readWcMarkdown("01-onboarding-a-partner.md");

  return (
    <ModuleShell
      track="workflow-consulting"
      crumbs={[{ label: "Workflow Consulting", href: "/workflow-consulting" }, { label: "Onboarding a Partner" }]}
      eyebrow="Workflow Consulting · Module 01"
      title={title}
      lede="The client kickoff call, the onboarding document, and the engineering handover: the four PC-owned steps that move a partner to Active."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
