"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { TopNav } from "@/components/top-nav";
import { searchIndex, type SearchResult } from "@/lib/search-index";

const TRACK_COLOR: Record<SearchResult["track"], string> = {
  Overview: "text-muted-foreground",
  "The Grant Way": "text-gpc-primary-red",
  "Process Consulting": "text-gpc-secondary-purple",
  Sales: "text-gpc-secondary-orange",
  Engineering: "text-gpc-neutral-400",
  "Project Management": "text-primary",
  Operations: "text-gpc-secondary-yellow",
  Marketing: "text-gpc-secondary-purple",
};

function SearchPageInner() {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");

  const results = query.trim().length >= 2 ? searchIndex(query) : [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-gpc-neutral-500 px-6 py-2 text-center font-mono text-[13px] text-gpc-neutral-100">
        <b className="font-medium tracking-[0.04em] text-gpc-secondary-yellow">
          INTERNAL DRAFT
        </b>{" "}
        · GPC-only. Nothing here goes public without Grant&rsquo;s approval.
      </div>

      <TopNav />

      <main className="mx-auto max-w-[1040px] px-6 pt-11 pb-20">
        <header className="mb-9 border-b border-border pb-8">
          <div className="mb-4 font-mono text-[11.5px] tracking-[0.2em] text-muted-foreground uppercase">
            Search
          </div>
          <h1 className="font-display text-[clamp(2.25rem,5.5vw,3.25rem)] leading-[1.05] font-normal tracking-tight">
            Ask a question
          </h1>
          <p className="mt-5 max-w-[64ch] text-[17px] leading-relaxed text-muted-foreground">
            Type a keyword or a plain question. This searches every module&rsquo;s
            tags across all three tracks, not just the one you&rsquo;re on.
          </p>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. &ldquo;how do I flag scope creep&rdquo; or &ldquo;merge&rdquo;"
            autoFocus
            className="mt-6 w-full max-w-[520px] rounded-sm border border-foreground bg-card px-4 py-2.5 text-[15px] text-foreground placeholder:text-muted-foreground focus:border-gpc-primary-red focus:outline-none"
          />
        </header>

        {query.trim().length >= 2 && (
          <section>
            <div className="mb-5 font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
              {results.length} {results.length === 1 ? "match" : "matches"} for &ldquo;{query}&rdquo;
            </div>

            {results.length === 0 ? (
              <p className="text-[15px] text-muted-foreground">
                Nothing tagged for that yet. Try a different word, or browse the{" "}
                <a href="/" className="text-primary underline underline-offset-2">
                  Overview
                </a>
                ,{" "}
                <a href="/grant-way" className="text-primary underline underline-offset-2">
                  Grant Way
                </a>
                , or{" "}
                <a
                  href="/roles"
                  className="text-primary underline underline-offset-2"
                >
                  Roles
                </a>{" "}
                index directly.
              </p>
            ) : (
              <ul className="flex flex-col gap-3">
                {results.map((r) => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      className="block border border-border bg-card px-5 py-4 transition-colors hover:border-gpc-primary-red"
                    >
                      <span
                        className={`font-mono text-[10.5px] font-semibold tracking-[0.1em] uppercase ${TRACK_COLOR[r.track]}`}
                      >
                        {r.track}
                      </span>
                      <h2 className="mt-1 font-display text-xl font-normal">{r.title}</h2>
                      <p className="mt-1 text-[14.5px] leading-snug text-muted-foreground">
                        {r.blurb}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={null}>
      <SearchPageInner />
    </Suspense>
  );
}
