import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("process-consulting", "05-github-and-vercel.md");
  const clickupSources = sourcesForModule("process-consulting", "05");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Process Consulting", href: "/roles/process-consulting" }, { label: "Tools: GitHub & Vercel" }]}
      eyebrow="Process Consulting · Module 05"
      title={title}
      clickupSources={clickupSources}
      lede="A curated path beyond GitHub Basics: reviewing real pull requests and reading a Vercel deployment."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
