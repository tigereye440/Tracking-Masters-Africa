import { Check, Fuel, Video, Navigation } from "lucide-react";
import type { Device } from "../../lib/data/vehicleTracking"
import { features } from "process";

export default function DeviceCard({ device }: { device: Device }) {
    return (
        <div className="rounded-lg border border-brand-steel/30 bg-white p-4">
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-brand-charcoal">{device.id}</p>
                {device.hasFuelMonitoring && (
                    <span className="flex items-center gap-1 rounded-full bg-brand-maroon/10 px-2 py-0.5 text-xs font-medium text-brand-maroon">
                        <Fuel size={12} />
                        Fuel monitoring
                    </span>
                )}
                {device.service == "tracking" ? <Navigation size={13} className=" shrink-0 text-brand-maroon" /> : <Video size={13} className=" shrink-0 text-brand-maroon" />}
            </div>
            <p className="mt-1 text-xs text-brand-steel">{device.vehicleType}</p>
            <ul className="mt-3 flex-flex-col gap-1 5">
                {device.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-brand-charcoal">
                        <Check size={13} className="mt-0.5 shrink-0 text-brand-maroon" />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}