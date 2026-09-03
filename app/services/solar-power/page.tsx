import Link from "next/link";
import { offerings } from "../../../lib/data/solar-power";
import CtaBand from "../../../components/home/CtaBand";

export default function solarPowerPage() {
  return (
    <>
      <section className="bg-brand-charcoal px-6 py-14 text-center">
        <p className="mb-2 text-xs uppercase tracking-wide text-brand-steel">Service</p>
        <h1 className="mx-auto max-w-lg text-2xl font-medium text-brand-cream sm:text-3xl">
          Solar & off-grid power
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-brand-cream/70">
          From backup power for your security system to full off-grid setups
          for your entire property.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-md bg-brand-red px-6 py-3 text-sm font-medium text-brand-cream hover:bg-brand-red/90"
        >
          Request a free assessment
        </Link>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14">
        <h2 className="text-lg font-medium text-brand-charcoal">What we offer</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {offerings.map((offering) => (
            <div key={offering.name} className="rounded-lg border border-brand-steel/30 bg-white p-4">
              <p className="text-sm font-medium text-brand-charcoal">{offering.name}</p>
              <p className="mt-1 text-xs text-brand-steel">{offering.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14">
        <Link
          href="/catalogue?service=solar-power"
          className="mt-6 inline-block rounded-md border border-brand-maroon px-6 py-3 text-sm font-medium text-brand-maroon hover:bg-brand-maroon/5"
        >
          Explore our catalogue
        </Link>
      </section>


      <CtaBand />
    </>
  );
}