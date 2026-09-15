import { ModuleShell } from "@/components/module-shell";
import { readWcMarkdown } from "@/lib/wc-markdown";

export default function Page() {
  const { title, html } = readWcMarkdown("03-managing-the-relationship.md");

  return (
    <ModuleShell
      track="workflow-consulting"
      crumbs={[{ label: "Workflow Consulting", href: "/workflow-consulting" }, { label: "Managing the Relationship" }]}
      eyebrow="Workflow Consulting · Module 03"
      title={title}
      lede="Keeping the relationship healthy, catching scope creep before it's a quiet freebie, and pitching the next engagement."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
