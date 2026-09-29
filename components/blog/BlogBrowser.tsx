"use client";

import { useState } from "react";
import { services } from "@/lib/data/services";
import PostCard from "@/components/blog/PostCard";

type Post = {
    slug: string;
    title: string;
    excerpt: string;
    serviceSlug: string;
    readTime: string
}

export default function BlogBrowser({ posts } : { posts: Post[] }) {
    const [activeSlug, setActiveSlug] = useState<string | null>(null);

    const filtered = activeSlug
        ? posts.filter((post) => post.serviceSlug === activeSlug)
        : posts;

    return (
        <div>
            <div className="mb-6 flex flex-wrap justify-center gap-2">
                <button
                    onClick={() => setActiveSlug(null)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                        activeSlug === null 
                            ? "bg-brand-maroon text-brand-cream"
                            : "border border-brand-steel/30 bg-white text-brand-charcoal" 
                    }`}
                >
                    All
                </button>
                {services.map((service) => (
                    <button
                        key={service.slug}
                        onClick={() => setActiveSlug(service.slug)}
                        className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                            activeSlug === service.slug
                                ? "bg-brand-maroon text-brand-cream"
                                : "border border-brand-steel/30 bg-white text-brand-charcoal"
                            }`}
                    >
                        {service.name}
                    </button>
                ))}
            </div>

            {filtered.length === 0 ? (
                <p className="text-center text-sm text-brand steel">No posts yet.</p>
            ) : (
                <div className="grid gap-4 sm:grid-cols 3">
                    {filtered.map((post) => (
                    <PostCard key={post.slug} post={post} />
                    ))}
                </div>
            )}
        </div>
    )
}