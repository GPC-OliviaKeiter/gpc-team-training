import { ModuleShell } from "@/components/module-shell";
import { readModuleMarkdown } from "@/lib/module-markdown";

export default function Page() {
  const { title, html, sources } = readModuleMarkdown("01-discovery-interviews.md");

  return (
    <ModuleShell
      track="grant-way"
      crumbs={[{ label: "The Grant Way", href: "/grant-way" }, { label: "Module 01 · Discovery Interviews" }]}
      eyebrow="The Grant Way · Module 01 · Flagship"
      title={title}
      lede="The flagship module: how Grant runs an AI strategy interview, across the deep-dive and functional-panel formats."
      sources={sources}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
