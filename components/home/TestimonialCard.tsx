import { Star } from "lucide-react";
import type { Testimonials } from "@/lib/data/testimonials";
import { getServiceBySlug } from "@/lib/data/services";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonials }) {
    const service = getServiceBySlug(testimonial.serviceSlug)

    return (
        <div className="rounded-lg border boder-brand-steel/30 bg-white p-4">
            <div className="flex gap-0 5">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star 
                        key={index}
                        size={13}
                        className={index < testimonial.rating ? "fill-brand-maroon text-brand-maroon" : "text-brand-steel/40"}
                    />
                ))}
            </div>
            <p className="mt-3 text-sm italic text-brand-charcoal">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="mt-3 text-xs text-brand-steel">
                Verified customer &middot; {testimonial.location}
                {service && <> &middot; {service.name}</>}
            </p>
        </div>
    );
}