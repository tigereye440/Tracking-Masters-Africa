import type { SubService } from "../../lib/data/vehicle-tracking";

export default function SubServiceCard({ subService }: { subService: SubService }) {
  return (
    <div className="rounded-lg border border-brand-steel/30 bg-white p-4">
      <p className="text-sm font-medium text-brand-charcoal">{subService.name}</p>
      <p className="mt-1 text-xs text-brand-steel">{subService.description}</p>
    </div>
  );
}