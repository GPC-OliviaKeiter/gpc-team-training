import { ModuleShell } from "@/components/module-shell";
import { readModuleMarkdown } from "@/lib/module-markdown";

export default function Page() {
  const { title, html, sources } = readModuleMarkdown("05-kickoff-calls.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Process Consulting", href: "/roles/process-consulting" }, { label: "The Grant Way", href: "/roles/process-consulting/the-grant-way" }, { label: "Module 05 · Kickoff Calls" }]}
      eyebrow="The Grant Way · Module 05"
      title={title}
      lede="The Leadership Kickoff: definitions of success, the engagement sentence, and setting up InfoSec before it becomes a blocker."
      sources={sources}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
