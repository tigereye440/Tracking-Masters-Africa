import Link from "next/link";
import type { PricingTier } from "@/lib/data/pricing";

export default function PricingCard({ tier }: { tier: PricingTier }) {
    return (
        <div className="rounded-lg border border-brand-steel/30 bg-white p-5">
            <p className="text-sm font-medium text-brand-charcoal">{tier.serviceName}</p>
            <p className="mt-3 text-2xl font-medium text-brand-charcoal">
                {tier.startingFrom} - {tier.endingAt}
            </p>
            <p className="mt-1 text-xs text-brand-steel">{tier.note}</p>
            <Link
                href={`/services/${tier.serviceSlug}`}
                        className="mt-4 block rounded-md border border-brand-maroon px-4 py-2 text-center text-xs font-medium text-brand-maroon hover:bg-brand-maroon/5"
                >
                    View service
            </Link>
        </div>
    )
}