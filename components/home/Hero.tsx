import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-brand-charcoal px-6 py-16 text-center sm:py-6">
            <p className="mb-3 text-xxs tracking-wide text-brand-steel">
                Vehicle tracking &middot; CCTV &middot; Electric fencing &middot; Automatic doors
            </p>
            <h1 className="mx-auto max-w-wl text-3xl font-medium text-brand-cream sm:text-3xl">
                Complete security for your home, shop and office
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm text-brand-cream/70">
                Real-time tracking, live surveillance and secure perimeters — installed
                and supported across Ghana.
            </p>
            <Link
                href="/contact"
                className="mt-6 inline-block rounded-md bg-brand-red px-6 py-3 text-sm font-medium text-brand-cream hover:bg-brand-red/90"
            >
                Get a free assessment
            </Link>
        </section>
    )
}