import { offerings } from "@/lib/data/electric-fencing";

export default function ElectricFencingBody() {
  return (
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
  );
}