import { subServices, devices } from "@/lib/data/vehicle-tracking";
import SubServiceCard from "@/components/services/subServiceCard";
import DeviceCard from "@/components/services/DeviceCard";

export default function VehicleTrackingBody() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-lg font-medium text-brand-charcoal">What&apos;s included</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {subServices.map((subService) => (
            <SubServiceCard key={subService.name} subService={subService} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-14">
        <h2 className="text-lg font-medium text-brand-charcoal">Choose your device</h2>
        <p className="mt-1 text-sm text-brand-steel">
          Only the X3 includes fuel capacity monitoring.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {devices.map((device) => (
            <DeviceCard key={device.id} device={device} />
          ))}
        </div>
      </section>
    </>
  );
}