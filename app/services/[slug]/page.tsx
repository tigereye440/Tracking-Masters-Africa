import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/data/services";
import CtaBand from "@/components/home/CtaBand";
import VehicleTrackingBody from "@/components/services/VehicleTrackingBody";
import CctvBody from "@/components/services/CctvBody";
import ElectricFencingBody from "@/components/services/ElectricFencingBody";
import AutomatedDoorsBody from "@/components/services/AutomatedDoorsBody";
import SolarPowerBody from "@/components/services/SolarPowerBody";

const bodies: Record<string, React.ComponentType> = {
  "vehicle-tracking": VehicleTrackingBody,
  "cctv-installation": CctvBody,
  "electric-fencing": ElectricFencingBody,
  "automatic-doors": AutomatedDoorsBody,
  "solar-power": SolarPowerBody,
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetaData({
  params,
}: {
  params: Promise<{ slug: string }>
}):  Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    title: service.name,
    description: service.shortDescription,
    openGraph: {
      title: service.name,
      description: service.shortDescription,
      images: [`/og/services/${slug}`],
    },
  };
}


export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Body = bodies[slug];

  return (
    <>
      <section className="bg-brand-charcoal px-6 py-14 text-center">
        <p className="mb-2 text-xs uppercase tracking-wide text-brand-steel">Service</p>
        <h1 className="mx-auto max-w-lg text-2xl font-medium text-brand-cream sm:text-3xl">
          {service.name}
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-brand-cream/70">{service.tagline}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-brand-red px-6 py-3 text-sm font-medium text-brand-cream hover:bg-brand-red/90"
          >
            Request a free assessment
          </Link>
          <Link
            href={`/catalogue?service=${service.slug}`}
            className="inline-block rounded-md border border-brand-cream/30 px-6 py-3 text-sm font-medium text-brand-cream hover:bg-white/5"
          >
            Explore our catalogue
          </Link>
        </div>
      </section>

      {Body && <Body />}

      <CtaBand />
    </>
  );
}