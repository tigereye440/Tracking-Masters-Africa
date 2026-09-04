import Link from "next/link";
import { baseFeatures, connectivityOptions, cameraPackages } from "../../../lib/data/cctv";
import CameraCard from "../../../components/services/CameraCard";
import CtaBand from "../../../components/home/CtaBand";

export default function CctvInstallationPage() {
    return (
        <>
            <section className="bg-brand-charcoal px-6 py-14 text-center">
                <p className="mb-2 text-xs uppercase tracking-wide text-brand-steel">Service</p>
                <h1 className="mx-auto max-w-lg text-2xl font-medium text-brand-cream sm:text-3xl">
                    CCTV Installation
                </h1>
                <p className="mx-auto mt-3 max-w-md text-sm text-brand cream/70">
                    HD night-vision cameras for homes, shops and offices — with free site
                    assessment and quote.
                </p>
                <Link
                    href="/contact"
                    className="mt-6 inline-block rounded-md bg-brand-red px-6 py-3 tex-sm font-medium text-brand-cream hover:bg-brand-red/90">
                        Request a free assessment
                </Link>
            </section>

            <section className="mx-auto max-w-3xl px-6 py-12">
                <h2 className="text-lg font-medium text-brand-charcoal">Every camera includes</h2>
                <div className="mt-4 flex-flex-wrap-gap-2">
                    {baseFeatures.map((feature) => (
                        <span className="rounded-full border border-brand-steel/30 mx-3 px-1"
                        >
                            {feature}
                        </span>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-3xl px-6 pb-12">
                <h2 className="text-lg font-medium text-brand charcoal">Connectivity Options</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols 2">
                    {connectivityOptions.map((option) => (
                        <div key={option.type} className="rounded-lg border border-brand-steel/30 bg-white p-4">
                            <p className="text-sm font-medium text-brand-charcoal">{option.type}</p>
                            <p className="mt-1 text-xs text-brand-steel">{option.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-3xl px-6 pb-14">
                <h2 className="text-lg font-medium text-brand-charcoal">Choose your setup</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {cameraPackages.map((pkg) => (
                    <CameraCard key={pkg.name} pkg={pkg} />
                ))}
                </div>

                <Link
                    href="/catalogue?service=cctv-installation"
                    className="mt-6 inline-block rounded-md bg-brand-red px-6 py-3 tex-sm font-medium text-brand-cream hover:bg-brand-red/90">
                        Explore our catalogue
                </Link>
            </section>

            <CtaBand />
        </>
    )
}