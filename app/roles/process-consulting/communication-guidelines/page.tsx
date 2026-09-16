import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";

export default function Page() {
  const { title, html } = readRoleMarkdown("process-consulting", "06-communication-guidelines.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Process Consulting", href: "/roles/process-consulting" }, { label: "Communication Guidelines" }]}
      eyebrow="Process Consulting · Module 06"
      title={title}
      lede="Which channel carries what, the 1-3-1 method for problem resolution, and how Grant actually writes to clients, sourced from real sent email."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
