"use client"

import { useState } from "react"
import { services } from "@/lib/data/services"
import type { Product } from "@/lib/data/catalogue"
import ProductCard from "./ProductCard"


export default function CatalogueBrowser({ 
    catalogue,
    initialSlug = null,
 }: { 
    catalogue: Product[];
    initialSlug?: string | null
 }) {
    const [activeSlug, setActiveSlug] = useState<string | null>(initialSlug);

    const filtered = activeSlug
        ? catalogue.filter((product) => product.serviceSlug === activeSlug)
        : catalogue;

    return (
        <div>
            <div className="mb-6 flex flex-wrap justify-center gap-2">
                <button
                    onClick={() => setActiveSlug(null)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                        activeSlug === null
                            ? "bg-brand-maroon text-brand-cream"
                            : "border border-brand-steel/30 bg-whitr text-brand-charcoal"
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

            <div className="grid gap-4 sm:grid-cols-3">
                {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}