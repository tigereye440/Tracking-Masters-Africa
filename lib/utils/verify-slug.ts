import { services } from "@/lib/data/services";

export default function validSlugs(serviceSlug: string) {
    const validSlugs = services.map((s) => s.slug)
    if (!validSlugs.includes(serviceSlug)) {
        return false;
    }

    return true
}