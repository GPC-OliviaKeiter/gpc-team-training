"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
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

/**
 * The site-wide "ask a question" box: type a keyword or a plain question,
 * get back the modules most likely to have the answer, ranked by tag match
 * (see lib/search-index.ts). Lives in the top nav so it's on every page.
 * The point is never having to know which tab to click first.
 */
export function SearchBox() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const results: SearchResult[] = query.trim().length >= 2 ? searchIndex(query).slice(0, 6) : [];

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function goToResults() {
    if (query.trim().length === 0) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative ml-auto w-full max-w-[260px]">
      <input
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter") goToResults();
          if (e.key === "Escape") setOpen(false);
        }}
        placeholder="Ask a question or search…"
        aria-label="Search training modules"
        className="w-full rounded-sm border border-border bg-background px-3 py-1.5 font-mono text-[12px] text-foreground placeholder:text-muted-foreground focus:border-gpc-primary-red focus:outline-none"
      />

      {open && query.trim().length >= 2 && (
        <div className="absolute right-0 z-30 mt-1.5 w-[340px] max-w-[90vw] border border-foreground bg-card shadow-lg">
          {results.length === 0 ? (
            <div className="px-4 py-3 text-[13px] text-muted-foreground">
              No modules match &ldquo;{query}&rdquo; yet.
            </div>
          ) : (
            <ul>
              {results.map((r) => (
                <li key={r.href} className="border-b border-border last:border-b-0">
                  <a
                    href={r.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 hover:bg-secondary"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono text-[10px] font-semibold tracking-[0.08em] uppercase ${TRACK_COLOR[r.track]}`}
                      >
                        {r.track}
                      </span>
                    </div>
                    <div className="font-display text-[15px] leading-tight">{r.title}</div>
                    <div className="mt-0.5 text-[12.5px] leading-snug text-muted-foreground">
                      {r.blurb}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={goToResults}
            className="block w-full border-t border-foreground px-4 py-2 text-left font-mono text-[11px] font-semibold tracking-[0.06em] text-gpc-primary-red uppercase hover:bg-secondary"
          >
            See all results →
          </button>
        </div>
      )}
    </div>
  );
}
