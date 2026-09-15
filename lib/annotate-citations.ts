import { CITATION_MAP, citationHref, type Citation } from "./citations";

/**
 * Tags that carry real epistemic meaning but aren't a single transcript to
 * jump to. Rendered as a small muted label, never as a numbered source link.
 */
const SPECIAL_TAGS: Record<string, string> = {
  inferred: "Reasoned from the transcripts rather than directly observed in them.",
  "all interviews": "Observed across every interview in this batch, not one single call.",
};

export type NumberedSource = { n: number; citation: Citation };

/**
 * Strips the module's own "Citation tags: ..." preamble paragraph (present in
 * modules 00 and 01). It's a flat legend of every tag used, made redundant by
 * the generated Sources list this function also produces.
 */
function stripCitationPreamble(markdown: string): string {
  return markdown.replace(/^Citation tags[^\n]*\n\n?/m, "");
}

/**
 * Converts every bracket citation tag in `markdown` (things like [kevin],
 * [sales], [delta-data 1:50], [inferred]) into an inline HTML marker, and
 * returns the de-duplicated, numbered list of sources actually cited in this
 * module.
 *
 * Known tags become a small superscript link to that module's Sources
 * section (#src-N); repeat occurrences of the same tag share one number.
 * Special tags (inferred, all interviews) become a muted label with no link.
 * Anything else in brackets, an ordinary editorial aside, is left alone.
 */
export function annotateCitations(rawMarkdown: string): {
  markdown: string;
  sources: NumberedSource[];
} {
  const markdown = stripCitationPreamble(rawMarkdown);

  const numberByTag = new Map<string, number>();
  const sources: NumberedSource[] = [];

  const knownTags = [...CITATION_MAP.keys(), ...Object.keys(SPECIAL_TAGS)].sort(
    (a, b) => b.length - a.length,
  );
  const tagPattern = knownTags.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const bracketRe = new RegExp(`\\[(${tagPattern})((?:\\s+[0-9:,.\\-\\s]+)?)\\]`, "g");

  const annotated = markdown.replace(bracketRe, (_match, tag: string, extra: string) => {
    const timestamp = extra.trim();

    if (tag in SPECIAL_TAGS) {
      const title = timestamp ? `${SPECIAL_TAGS[tag]} (${timestamp})` : SPECIAL_TAGS[tag];
      return `<span class="cite-flag" title="${title}">${tag}</span>`;
    }

    const citation = CITATION_MAP.get(tag);
    if (!citation) return _match;

    if (!numberByTag.has(tag)) {
      const n = sources.length + 1;
      numberByTag.set(tag, n);
      sources.push({ n, citation });
    }
    const n = numberByTag.get(tag)!;
    const title = timestamp ? `${citation.label} · ${timestamp}` : citation.label;
    return `<sup class="cite"><a href="#src-${n}" title="${title}">${n}</a></sup>`;
  });

  return { markdown: annotated, sources };
}

export { citationHref };
