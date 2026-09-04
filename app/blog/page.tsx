"use client"

import { useState } from "react"
import { blogPosts } from "@/lib/data/blog";
import { services } from "@/lib/data/services";
import PostCard from "@/components/blog/PostCard";

export default function BlogPage() {
    const [activeSlug, setActiveSlug] = useState<string | null>(null)

    const filtered = activeSlug
        ? blogPosts.filter((post) => post.serviceSlug === activeSlug)
        : blogPosts;
        
    return (
        <>
            <section className="bg-brand-charcoal px-6 py-14 text-center">
                <p className="mb-2 text-xs uppercase tracking-wide text-brand-steel">Blog</p>
                <h1 className="mx-auto max-w-lg text-2xl font-medium text-brand-cream sm:text-3xl">
                    Tips, guides and updates
                </h1>
            </section>

            <section className="mx-auto max-w-4xl px-6 py-14">
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
                            }`}>
                                {service.name}
                        </button>
                    ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                    {filtered.map((post) => (
                        <PostCard key={post.slug} post={post} />
                    ))}
                </div>
            </section>
        </>
    )
}