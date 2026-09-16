import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";

export default function Page() {
  const { title, html } = readRoleMarkdown("engineering", "02-definition-of-done-and-qa.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Engineering", href: "/roles/engineering" }, { label: "Definition of Done and QA" }]}
      eyebrow="Engineering · Module 02"
      title={title}
      lede="The Definition of Done, peer QA, naming conventions, and the rules for touching a live process."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
