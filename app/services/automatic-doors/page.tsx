import Link from "next/link";
import { keyFeatures, motorTiers } from "../../../lib/data/automatic-doors"
import CtaBand from "../../../components/home/CtaBand";

export default function automaticDoorsPage() {
  return (
    <>
      <section className="bg-brand-charcoal px-6 py-14 text-center">
        <p className="mb-2 text-xs uppercase tracking-wide text-brand-steel">Service</p>
        <h1 className="mx-auto max-w-lg text-2xl font-medium text-brand-cream sm:text-3xl">
          Automatic doors & gates
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-brand-cream/70">
          Remote-controlled gate motors that link to your perimeter security
          system — sized to fit any gate.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-md bg-brand-red px-6 py-3 text-sm font-medium text-brand-cream hover:bg-brand-red/90"
        >
          Request a free assessment
        </Link>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-lg font-medium text-brand-charcoal">Key features</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {keyFeatures.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-brand-steel/30 bg-white px-3 py-1.5 text-xs text-brand-charcoal"
            >
              {feature}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-14">
        <h2 className="text-lg font-medium text-brand-charcoal">Motors for every gate</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {motorTiers.map((tier) => (
            <div key={tier.name} className="rounded-lg border border-brand-steel/30 bg-white p-4">
              <p className="text-sm font-medium text-brand-charcoal">{tier.name}</p>
              <p className="mt-1 text-xs text-brand-steel">{tier.idealFor}</p>
            </div>
          ))}
        </div>
        <Link
          href="/catalogue?service=automatic-doors"
          className="mt-6 inline-block rounded-md border border-brand-maroon px-6 py-3 text-sm font-medium text-brand-maroon hover:bg-brand-maroon/5"
        >
          Explore our catalogue
        </Link>
      </section>

      <CtaBand />
    </>
  );
}