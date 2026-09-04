import Link from "next/link";
import { Check, Fuel } from "lucide-react";
import type { Device } from "@/lib/data/vehicle-tracking";

export default function DeviceCard({ device }: { device: Device }) {
  return (
    <Link
      href={`/services/vehicle-tracking/${device.id}`}
      className="block rounded-lg border border-brand-steel/30 bg-white p-4 transition-colors hover:border-brand-maroon/40"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-brand-charcoal">{device.id}</p>
        {device.hasFuelMonitoring && (
          <span className="flex items-center gap-1 rounded-full bg-brand-maroon/10 px-2 py-0.5 text-xs font-medium text-brand-maroon">
            <Fuel size={12} />
            Fuel monitoring
          </span>
        )}
      </div>
      <p className="mt-1 text-xs text-brand-steel">{device.vehicleType}</p>
      <ul className="mt-3 flex flex-col gap-1.5">
        {device.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-xs text-brand-charcoal">
            <Check size={13} className="mt-0.5 shrink-0 text-brand-maroon" />
            {feature}
          </li>
        ))}
      </ul>
    </Link>
  );
}