import { ModuleShell } from "@/components/module-shell";
import { readWcMarkdown } from "@/lib/wc-markdown";

export default function Page() {
  const { title, html } = readWcMarkdown("06-communication-guidelines.md");

  return (
    <ModuleShell
      track="workflow-consulting"
      crumbs={[{ label: "Workflow Consulting", href: "/workflow-consulting" }, { label: "Communication Guidelines" }]}
      eyebrow="Workflow Consulting · Module 06"
      title={title}
      lede="Which channel carries what, the 1-3-1 method for problem resolution, and how Grant actually writes to clients, sourced from real sent email."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
