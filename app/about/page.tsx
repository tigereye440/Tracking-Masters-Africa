import StatsBand from "@/components/home/StatsBand";
import CtaBand from "@/components/home/CtaBand";
import { values } from "@/lib/data/about";

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-charcoal px-6 py-14 text-center">
        <p className="mb-2 text-xs uppercase tracking-wide text-brand-steel">About us</p>
        <h1 className="mx-auto max-w-lg text-2xl font-medium text-brand-cream sm:text-3xl">
          Security you can trust, built over a decade
        </h1>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-12">
        <p className="text-sm leading-relaxed text-brand-steel">
          Tracking Masters Africa (TMA) started as a vehicle tracking specialist
          and has grown into a full security partner for homes, shops and
          offices. Today we install and support GPS tracking, CCTV, electric
          fencing, automatic gates and solar power systems across Ghana —
          built on the same commitment to reliability that our tracking
          business was founded on.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-14">
        <h2 className="text-lg font-medium text-brand-charcoal">Why choose TMA</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-lg border border-brand-steel/30 bg-white p-4">
              <p className="text-sm font-medium text-brand-charcoal">{value.title}</p>
              <p className="mt-1 text-xs text-brand-steel">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <StatsBand />
      <CtaBand />
    </>
  );
}