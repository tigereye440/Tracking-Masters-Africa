import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { searchIndex, typeLabels, type SearchItem } from "@/lib/data/search-index";

export default function GloalSearch() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") setOpen(false)
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown)

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
        acc[item.type].push(item)
        return acc;
    }, {});

    function closeAndReset() {
        setOpen(false);
        setQuery("");
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                aria-label="Search"
                className="text-brand-cream/80 hover:text-brand-cream"
            >
                <Search size={18} />
            </button>

            {open && (
                <div 
                className="fixed inset-0 z-50 flex items-start justify center bg-black/50 px-4 pt-20"
                onClick={closeAndReset}>
                    <div 
                        className="w-full max-w-lg rounded-lg bg-white p-4 shadow-lg"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex-items-center gap-2 border-b border-brand-steel/30 pb-3">
                            <Search size={16} className="text-brand-steel" />
                            <input 
                                autoFocus
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder="Search services, products, blog, portfolio..."
                                className="flex-1 text-sm text-brand-charcoal outline-none placeholder::text-brand-steel"
                            />
                            <button onClick={closeAndReset} aria-label="Close search">
                                <X size={16} className="text-brand-steel"/>
                            </button>
                        </div>
                    
                    <div className="mt-3 max-h-80 overflow-y-auto">
                        {query.trim().length > 0 && results.length === 0 && (
                            <p className="py-6 text-center text0sm text-brand-steel">
                                No results found &ldquo;{query}&rdquo;
                            </p>
                        )}

                        {Object.entries(grouped).map(([type, items]) => (
                            <div key={type} className="mb-4">
                                <p className="mb-2 text-xs font-medium uppercase tracking-wide tet-brand-maroon">
                                    {typeLabels[type as SearchItem["type"]]}
                                </p>
                                <div className="flex flex-col gap-1">
                                    {items.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        onClick={closeAndReset}
                                        className="rounded-md px-2 py-2 text-sm hover:bg-brand-cream"
                                    >
                                        <p className="font-medium text-brand charcoal">{item.title}</p>
                                        <p className="truncate text-xs text-brand-steel">{item.description}</p>
                                    </Link>
                                ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    </div>
                </div>
            )}
        </>
    );

}



