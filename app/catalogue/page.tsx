import { catalogue } from "@/lib/data/catalogue";
import CatalogueBrowser from "@/components/catalogue/CatalogueBrowser";
import CtaBand from "@/components/home/CtaBand";

export default function CataloguePage({
    searchParams
}: {
    searchParams: { service?: string }
}) {

    const initialSlug = searchParams.service ?? null

    return (
        <>
            <section className="bg-brand-charcoal px-6 py-14 text-center">
                <p className="mb-2 text-xs uppercase tracking-wide text-brand-steel">Catalogue</p>
                <h1 className="mx-auto max-w-lg text-2xl font-medium text-brand-cream sm:text-3xl">
                All our products
                </h1>
                <p className="mx-auto mt-3 max-w-md text-sm text-brand-cream/70">
                Browse everything we install, or filter by service.
                </p>
            </section>

            <section className="mx-auto max-w-4xl px-6 py-14">
                <CatalogueBrowser catalogue={catalogue} initialSlug={initialSlug}/>
            </section>

        <CtaBand />
        </>
    )
}