import { readFileSync } from "node:fs";
import path from "node:path";
import { ModuleShell } from "@/components/module-shell";
import { Callout } from "@/components/callout";

export const metadata = { title: "Glossary · GPC Team Training" };

const GLOSSARY_DOC = "https://app.clickup.com/9012022270/docs/8cjh2zy-176192";

type Term = {
  term: string;
  tag: string;
  definition: string;
  /** The wrong word this one replaces, when GPC has picked a side. */
  instead?: string;
};

function readGlossary(): Term[] {
  const filePath = path.join(process.cwd(), "content", "overview", "glossary.json");
  const { terms } = JSON.parse(readFileSync(filePath, "utf-8")) as { terms: Term[] };
  return [...terms].sort((a, b) => a.term.localeCompare(b.term));
}

export default function Page() {
  const terms = readGlossary();
  const corrections = terms.filter((t) => t.instead);

  return (
    <ModuleShell
      track="overview"
      crumbs={[{ label: "Overview", href: "/" }, { label: "Glossary" }]}
      eyebrow="Overview · Module 10"
      title="Glossary"
      lede={
        <>
          The words GPC uses, and the words it has decided against. Condensed from
          the{" "}
          <a
            href={GLOSSARY_DOC}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-2"
          >
            Glossary of Terms
          </a>{" "}
          in ClickUp, which stays the source of truth. If a term you need is not
          there, ask the Project Manager to add it rather than settling on your own
          version.
        </>
      }
    >
      <h2>Say this, not that</h2>
      <p>
        A handful of terms have a preferred form. Using the other one is not a
        disaster, but it reads as outside the team, and in client-facing writing it
        gets corrected.
      </p>

      <div className="not-prose my-7 overflow-x-auto">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                Say
              </th>
              <th className="border border-border bg-secondary px-3 py-2 text-left font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                Not
              </th>
            </tr>
          </thead>
          <tbody>
            {corrections.map((t) => (
              <tr key={t.term}>
                <td className="border border-border px-3 py-2 align-top font-medium text-gpc-primary-red">
                  {t.term}
                </td>
                <td className="border border-border px-3 py-2 align-top text-muted-foreground line-through">
                  {t.instead}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout>
        The one that matters most in anything a client sees: <b>partner</b>, not
        client. Client is what everyone says in conversation and what most of the
        older documents use, so you will see both.
      </Callout>

      <h2>Every term</h2>

      <dl className="not-prose my-7 flex flex-col">
        {terms.map((t) => (
          <div
            key={t.term}
            className="grid grid-cols-1 gap-1 border-b border-border py-3.5 sm:grid-cols-[200px_1fr] sm:gap-5"
          >
            <dt>
              <span className="text-[15px] font-semibold text-foreground">{t.term}</span>
              <span className="mt-0.5 block font-mono text-[10px] tracking-[0.08em] text-muted-foreground uppercase">
                {t.tag}
              </span>
            </dt>
            <dd className="text-[14px] leading-relaxed text-muted-foreground">
              {t.definition}
              {t.instead && (
                <span className="mt-1 block font-mono text-[11px] text-gpc-primary-red">
                  not &ldquo;{t.instead}&rdquo;
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <a href="/overview/clickup-at-gpc">Module 07, ClickUp at GPC</a>, where
          most of the ClickUp terms above are put to work.
        </li>
        <li>
          <a href="/search">Search</a>, which matches against hand-tagged terms
          across every module on this site.
        </li>
      </ul>
    </ModuleShell>
  );
}
