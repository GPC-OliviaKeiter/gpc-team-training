import { ModuleShell } from "@/components/module-shell";
import { readRoleMarkdown } from "@/lib/role-markdown";
import { sourcesForModule } from "@/lib/sops";

export default function Page() {
  const { title, html } = readRoleMarkdown("marketing", "02-getting-a-testimonial.md");
  const clickupSources = sourcesForModule("marketing", "02");

  return (
    <ModuleShell
      track="roles"
      crumbs={[{ label: "Marketing", href: "/roles/marketing" }, { label: "Getting a Testimonial" }]}
      eyebrow="Marketing · Module 02"
      title={title}
      clickupSources={clickupSources}
      lede="The Epiphany Bridge framework for collecting a testimonial worth using."
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ModuleShell>
  );
}
