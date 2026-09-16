import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("engineering", "01-from-ticket-to-build.md");
  const clickupSources = sourcesForModule("engineering", "01");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Engineering", href: "/roles/engineering" }, { label: "From Ticket to Build" }]}
      eyebrow="Engineering · Module 01"
      title={title}
      clickupSources={clickupSources}
      lede="Client communication rules, scoping time estimates, technical design, and partner call briefs."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
