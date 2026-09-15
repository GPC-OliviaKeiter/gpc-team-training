import { ModuleShell } from "@/components/module-shell";
import { readWcMarkdown } from "@/lib/wc-markdown";

export default function Page() {
  const { title, html } = readWcMarkdown("02-running-the-engagement.md");

  return (
    <ModuleShell
      track="workflow-consulting"
      crumbs={[{ label: "Workflow Consulting", href: "/workflow-consulting" }, { label: "Running the Engagement" }]}
      eyebrow="Workflow Consulting · Module 02"
      title={title}
      lede="Weekly calls, Monday updates, and stakeholder interviews: the recurring mechanisms that carry an Active engagement."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
