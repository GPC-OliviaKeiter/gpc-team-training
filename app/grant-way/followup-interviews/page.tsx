import { ModuleShell } from "@/components/module-shell";
import { readModuleMarkdown } from "@/lib/module-markdown";

export default function Page() {
  const { title, html, sources } = readModuleMarkdown("07-followup-interviews.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Process Consulting", href: "/roles/process-consulting" }, { label: "The Grant Way", href: "/roles/process-consulting/the-grant-way" }, { label: "Module 07 · Follow-up Interviews" }]}
      eyebrow="The Grant Way · Module 07"
      title={title}
      lede="Technical & opportunity deep-dives after discovery: governance and rollout negotiation, architecture, and ROI scoping."
      sources={sources}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
