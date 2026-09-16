import { ModuleShell } from "@/components/module-shell";
import { readModuleMarkdown } from "@/lib/module-markdown";

export default function Page() {
  const { title, html, sources } = readModuleMarkdown("04-internal-debriefs.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Process Consulting", href: "/roles/process-consulting" }, { label: "The Grant Way", href: "/roles/process-consulting/the-grant-way" }, { label: "Module 04 · Internal Debriefs" }]}
      eyebrow="The Grant Way · Module 04"
      title={title}
      lede="The internal same-day synthesis call (Grant + team): consolidating findings into positioning and pricing while they're still hot."
      sources={sources}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
