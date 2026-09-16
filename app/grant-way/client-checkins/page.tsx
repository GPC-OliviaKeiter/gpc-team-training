import { ModuleShell } from "@/components/module-shell";
import { readModuleMarkdown } from "@/lib/module-markdown";

export default function Page() {
  const { title, html, sources } = readModuleMarkdown("03-client-checkins.md");

  return (
    <ModuleShell
      track="grant-way"
      crumbs={[{ label: "The Grant Way", href: "/grant-way" }, { label: "Module 03 · Client Check-ins" }]}
      eyebrow="The Grant Way · Module 03"
      title={title}
      lede="Same-day debriefs with the client sponsors: turning a day of interviews into client confidence."
      sources={sources}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
