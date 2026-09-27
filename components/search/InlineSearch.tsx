"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { searchIndex, typeLabels, type SearchItem } from "@/lib/data/search-index";

export default function InlineSearch({ className = "" }: { className?: string }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setFocused(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setFocused(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const results =
    query.trim().length === 0
      ? []
      : searchIndex.filter((item) => {
          const haystack = `${item.title} ${item.description}`.toLowerCase();
          return haystack.includes(query.trim().toLowerCase());
        });

  const grouped = results.reduce<Record<string, SearchItem[]>>((acc, item) => {
    acc[item.type] = acc[item.type] ?? [];
    acc[item.type].push(item);
    return acc;
  }, {});

  const showDropdown = focused && query.trim().length > 0;

  function clearQuery() {
    setQuery("");
    setFocused(false);
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-1.5">
        <Search size={14} className="shrink-0 text-brand-cream/60" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setFocused(true)}
          placeholder="Search..."
          className="w-full min-w-0 bg-transparent text-sm text-brand-cream outline-none placeholder:text-brand-cream/50"
        />
        {query.length > 0 && (
          <button onClick={clearQuery} aria-label="Clear search">
            <X size={14} className="text-brand-cream/60" />
          </button>
        )}
      </div>

      {showDropdown && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full min-w-70 rounded-lg border border-brand-steel/20 bg-white p-3 shadow-lg">
          {results.length === 0 ? (
            <p className="py-4 text-center text-sm text-brand-steel">
              No results for &ldquo;{query}&rdquo;
            </p>
          ) : (
            <div className="max-h-80 overflow-y-auto">
              {Object.entries(grouped).map(([type, items]) => (
                <div key={type} className="mb-3">
                  <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-brand-maroon">
                    {typeLabels[type as SearchItem["type"]]}
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={clearQuery}
                        className="rounded-md px-2 py-1.5 text-sm hover:bg-brand-cream"
                      >
                        <p className="font-medium text-brand-charcoal">{item.title}</p>
                        <p className="truncate text-xs text-brand-steel">{item.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}