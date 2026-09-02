import { ImageIcon } from "lucide-react";

/**
 * Temporary stand-in for a real photo. Once photos exist at the paths
 * referenced in lib/data/services.ts, swap this for next/image:
 *
 *   <Image src={service.thumbnail} alt={service.name} fill className="object-cover" />
 */
export default function ImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-brand-steel/20 ${className}`}
    >
      <ImageIcon size={22} className="text-brand-steel" />
    </div>
  );
}
