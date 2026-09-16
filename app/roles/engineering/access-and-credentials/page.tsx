import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("engineering", "04-access-and-credentials.md");
  const clickupSources = sourcesForModule("engineering", "04");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Engineering", href: "/roles/engineering" }, { label: "Access and Credentials" }]}
      eyebrow="Engineering · Module 04"
      title={title}
      clickupSources={clickupSources}
      lede="Requesting and confirming platform access, the credential vault, Chrome profiles, and Make.com migrations."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
