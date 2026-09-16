import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";

export default function Page() {
  const { title, html } = readRoleMarkdown("engineering", "01-from-ticket-to-build.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Engineering", href: "/roles/engineering" }, { label: "From Ticket to Build" }]}
      eyebrow="Engineering · Module 01"
      title={title}
      lede="Client communication rules, scoping time estimates, technical design, and partner call briefs."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
