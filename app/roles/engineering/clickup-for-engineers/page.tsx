import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";

export default function Page() {
  const { title, html } = readRoleMarkdown("engineering", "06-clickup-for-engineers.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Engineering", href: "/roles/engineering" }, { label: "ClickUp for Engineers" }]}
      eyebrow="Engineering · Module 06"
      title={title}
      lede="Automations, evaluating internal automations against plan limits, soft launches, and migrations."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
