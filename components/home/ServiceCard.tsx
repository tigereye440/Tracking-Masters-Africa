import Link from "next/link"
import type { Service } from "@/lib/data/services"
import ImagePlaceholder from "@/components/ui/ImagePlaceholder" 

export default function ServiceCard({ service }: { service: Service }) {
    return (
        <Link
            href={`/services/${service.slug}`}
            className="flex items-center gap-4 rounded-lg border border-brand-steel/30 bg-white p-3 transition-colors hover:border-brand-maroon/40"
        >
            <ImagePlaceholder className="h-16 w-16 shrink-0" />
            <div>
                <p className="text-sm font-medium text-brand-charcoal">{service.name}</p>
                <p className="text-xs text-brand-charcoal">{service.shortDescription}</p>
            </div>
        </Link>
    )
}
