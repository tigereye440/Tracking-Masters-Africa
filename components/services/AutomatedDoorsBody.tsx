import { keyFeatures, motorTiers } from "@/lib/data/automatic-doors";

export default function AutomaticDoorsBody() {
  return (
    <>
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
      </section>
    </>
  );
}