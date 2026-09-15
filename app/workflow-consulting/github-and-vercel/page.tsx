import { ModuleShell } from "@/components/module-shell";
import { readWcMarkdown } from "@/lib/wc-markdown";

export default function Page() {
  const { title, html } = readWcMarkdown("05-github-and-vercel.md");

  return (
    <ModuleShell
      track="workflow-consulting"
      crumbs={[{ label: "Workflow Consulting", href: "/workflow-consulting" }, { label: "Tools: GitHub & Vercel" }]}
      eyebrow="Workflow Consulting · Module 05"
      title={title}
      lede="A curated path beyond GitHub Basics: reviewing real pull requests and reading a Vercel deployment."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
