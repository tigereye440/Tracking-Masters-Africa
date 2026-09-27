"use client"

import Link from "next/link";
import { subServices, devices } from "@/lib/data/vehicle-tracking";
import SubServiceCard from "@/components/services/subServiceCard";
import DeviceCard from "@/components/services/DeviceCard";
import CtaBand from "@/components/home/CtaBand";

export default function vehicleTrackingPage() {
  return (
    <>
      <section className="bg-brand-charcoal px-6 py-14 text-center">
        <p className="mb-2 text-xs uppercase tracking-wide text-brand-steel">Service</p>
        <h1 className="mx-auto max-w-lg text-2xl font-medium text-brand-cream sm:text-3xl">
          Vehicle tracking
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-brand-cream/70">
          Real-time GPS tracking, dashcams and fuel monitoring — for cars, bikes,
          tricycles and fleets.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-md bg-brand-red px-6 py-3 text-sm font-medium text-brand-cream hover:bg-brand-red/90"
        >
          Request a quote
        </Link>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-lg font-medium text-brand-charcoal">What&apos;s included</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {subServices.map((subService) => (
            <SubServiceCard key={subService.description} subService={subService} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-14">
        <h2 className="text-lg font-medium text-brand-charcoal">Choose your device</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
  
          {devices.map((device) => (
             <Link
             key={device.id}
              href={`/services/vehicle-tracking/${device.id}`}>
                <DeviceCard key={device.id} device={device} />
            </Link>

          ))}
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-6 pb-14">
              <Link
        href="/catalogue?service=vehicle-tracking"
        className="mt-6 inline-block rounded-md border bacground-brand-maroon px-6 py-3 text-sm font-medium text-brand-maroon hover:bg-brand-maroon/5"
      >
        Explore our catalogue
      </Link>
      </section>

      <CtaBand />
    </>
  );
}