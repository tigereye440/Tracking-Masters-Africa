import { Check, Sun } from "lucide-react";
import Link from "next/link";
import type { CameraPackage } from "../../lib/data/cctv";

export default function CameraCard({ pkg }: {pkg: CameraPackage }) {
    return (
            <Link
                href={`/services/cctv-installation/${pkg.id}`}
                className="block rounded-lg border border-brand-steel/30 bg-white p-4 transition-colors hover:border-brand-maroon/40"
                >
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-brand-charcoal">{pkg.name}</p>
                            {pkg.badge && (
                                <span className="flex items-center gap-1 px-2 rounded-full bg-brand-maroon/10">
                                    <Sun size={12} />
                                    {pkg.badge}
                                </span>
                            )}
                        </div>
                        <p className="mt-1 text-xs text-brand-steel">{pkg.idealFor}</p>
                        <ul className="mt-3 flex-flex-col gap-1 5">
                            {pkg.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2 text-xs text-brand-charcoal">
                                    <Check  size={13} className="mt-0.5 shrink-0 text-brand-maroon" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
        </Link>
    );
}