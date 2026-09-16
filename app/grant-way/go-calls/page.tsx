import { ModuleShell } from "@/components/module-shell";
import { readModuleMarkdown } from "@/lib/module-markdown";

export default function Page() {
  const { title, html, sources } = readModuleMarkdown("02-internal-go-calls.md");

  return (
    <ModuleShell
      track="grant-way"
      crumbs={[{ label: "The Grant Way", href: "/grant-way" }, { label: "Module 02 · Internal GO Calls" }]}
      eyebrow="The Grant Way · Module 02"
      title={title}
      lede="How the team preps before a client-facing day: the pre-day huddle and the engagement-opener configurations."
      sources={sources}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
