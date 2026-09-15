import { ModuleShell } from "@/components/module-shell";
import { readModuleMarkdown } from "@/lib/module-markdown";

export default function Page() {
  const { title, html, sources } = readModuleMarkdown("00-method-overview.md");

  return (
    <ModuleShell
      track="grant-way"
      crumbs={[{ label: "The Grant Way", href: "/grant-way" }, { label: "Module 00 · Method Overview" }]}
      eyebrow="The Grant Way · Module 00"
      title={title}
      lede="The philosophy and core frameworks everything else hangs on: start with the people, infrastructure before intelligence, probleming before solutioning."
      sources={sources}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
