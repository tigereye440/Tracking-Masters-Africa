import Link from "next/link"

export default function CtaBand() {
    return(
        <section className="bg-brand-maroon px-6 py-10 text-center">
            <p className="text-base font-medium text-brand-cream">
                Ready to secure your property?
            </p>
            <p className="mt-1 text-sm text-brand-cream/80">
                Talk to us on WhatsApp or request a callback today.
            </p>
            <Link 
                href="/contact"
                className="mt-4 inline-block rounded-md bg-brand-cream px-5 oy-2.5 text-sm font-medium text-brand-maroon hover:bg-brand-cream/90">
                Contact Us
            </Link>
        </section>
    )
}