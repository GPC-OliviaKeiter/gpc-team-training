import { ModuleShell } from "@/components/module-shell";
import { readWcMarkdown } from "@/lib/wc-markdown";

export default function Page() {
  const { title, html } = readWcMarkdown("04-closing-out.md");

  return (
    <ModuleShell
      track="workflow-consulting"
      crumbs={[{ label: "Workflow Consulting", href: "/workflow-consulting" }, { label: "Closing Out" }]}
      eyebrow="Workflow Consulting · Module 04"
      title={title}
      lede="The three PC-owned action items that fire on Close Out, and what triggers the automatic move to Offboarding."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
