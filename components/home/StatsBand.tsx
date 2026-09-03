

const stats = [
  { value: "10+", label: "Years in operation" },
  { value: "2,000+", label: "Installations" },
  { value: "24/7", label: "Support line" },
  { value: "Nationwide", label: "Coverage" },
];

export default function StatsBand() {
  return (
    <section className="bg-brand-charcoal/5 px-6 py-10">
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-xl font-medium text-brand-maroon">{stat.value}</p>
            <p className="mt-1 text-xs text-brand-steel">{stat.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
}