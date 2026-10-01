import { baseFeatures, connectivityOptions, cameraPackages } from "@/lib/data/cctv";
import CameraCard from "@/components/services/CameraCard";

export default function CctvBody() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-lg font-medium text-brand-charcoal">Every camera includes</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {baseFeatures.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-brand-steel/30 bg-white px-3 py-1.5 text-xs text-brand-charcoal"
            >
              {feature}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <h2 className="text-lg font-medium text-brand-charcoal">Connectivity options</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
      </section>
    </>
  );
}