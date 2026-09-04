import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Fuel } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { cameraPackages } from "@/lib/data/cctv";
import CtaBand from "@/components/home/CtaBand";

export default function DevicePage({ params }:  { params: { slug: string } }) {

  const cameraPackage = cameraPackages.find((camPackage) => camPackage.id === params.slug);

  if (!cameraPackage) {
    notFound();
  }

  return (
    <>
      <section className="mx-auto max-w-2xl px-6 py-14">
        <p className="text-xs font-medium uppercase tracking-wide text-brand-maroon">
          CCTV Installation 
        </p>
        <p className="mt-1 text-sm text-brand-steel">{cameraPackage.name}</p>

        <ImagePlaceholder className="mt-6 h-64 w-full" />

        <section className="mt-8">
          <h2 className="text-lg font-medium text-brand-charcoal">Features</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {cameraPackage.features.map((feature) => (
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
          Request a quote for {cameraPackage.name}
        </Link>
      </section>

      <CtaBand />
    </>
  );
}