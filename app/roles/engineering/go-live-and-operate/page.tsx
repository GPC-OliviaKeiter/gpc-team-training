import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";

export default function Page() {
  const { title, html } = readRoleMarkdown("engineering", "03-go-live-and-operate.md");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Engineering", href: "/roles/engineering" }, { label: "Go-Live and Operate" }]}
      eyebrow="Engineering · Module 03"
      title={title}
      lede="Deployment, monitoring and ownership, incident response, root cause analysis, and closing support tickets."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
