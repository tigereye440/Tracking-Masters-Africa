import Link from "next/link";
import { Check } from "lucide-react";
import type { Product } from "@/lib/data/catalogue";

export default function ProductCard({ product }: { product: Product }) {
  const hasDetailPage = product.serviceSlug === "vehicle-tracking"|| "cctv";

  const content = (
    <>
      <p className="text-xs font-medium uppercase tracking-wide text-brand-maroon">
        {product.serviceName}
      </p>
      <p className="mt-1 text-sm font-medium text-brand-charcoal">{product.name}</p>
      <p className="mt-1 text-xs text-brand-steel">{product.description}</p>
      {product.tags.length > 0 && (
        <ul className="mt-3 flex flex-col gap-1">
          {product.tags.map((tag) => (
            <li key={tag} className="flex items-start gap-2 text-xs text-brand-charcoal">
              <Check size={12} className="mt-0.5 shrink-0 text-brand-maroon" />
              {tag}
            </li>
          ))}
        </ul>
      )}
    </>
  );

  if (hasDetailPage) {
    return (
      <Link
        href={`/services/${product.serviceSlug}/${product.slug}`}
        className="block rounded-lg border border-brand-steel/30 bg-white p-4 transition-colors hover:border-brand-maroon/40"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="rounded-lg border border-brand-steel/30 bg-white p-4">
      {content}
    </div>
  );
}