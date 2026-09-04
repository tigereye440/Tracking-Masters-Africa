import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Fuel } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { devices } from "@/lib/data/vehicle-tracking";
import CtaBand from "@/components/home/CtaBand";

export default function DevicePage({ params }: {  params: { slug: string } }) {
  const device = devices.find((device) => device.id === params.slug);

  if (!device) {
    notFound();
  }

  return (
    <>
      <section className="mx-auto max-w-2xl px-6 py-14">
        <p className="text-xs font-medium uppercase tracking-wide text-brand-maroon">
          Vehicle tracking
        </p>
        <div className="mt-1 flex items-center gap-3">
          <h1 className="text-2xl font-medium text-brand-charcoal">{device.id}</h1>
          {device.hasFuelMonitoring && (
            <span className="flex items-center gap-1 rounded-full bg-brand-maroon/10 px-2 py-0.5 text-xs font-medium text-brand-maroon">
              <Fuel size={12} />
              Fuel monitoring
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-brand-steel">{device.vehicleType}</p>

        <ImagePlaceholder className="mt-6 h-64 w-full" />

        <section className="mt-8">
          <h2 className="text-lg font-medium text-brand-charcoal">Features</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {device.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-brand-charcoal">
                <Check size={15} className="mt-0.5 shrink-0 text-brand-maroon" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-md bg-brand-red px-6 py-3 text-sm font-medium text-brand-cream hover:bg-brand-red/90"
        >
          Request a quote for {device.id}
        </Link>
      </section>

      <CtaBand />
    </>
  );
}