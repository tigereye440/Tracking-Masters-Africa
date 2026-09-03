import Link from "next/link";
import { services } from "@/lib/data/services";
import ServiceCard from "@/components/home/ServiceCard";

export default function ServiceSection() {
    return (
        <section className="px-6 py-14">
            <div className="mx-auto max-w-3xl">
                <h2 className="mt-1 text-center text-xl font-medium text-brand-charcoal">
                    Our services
                </h2>
                <div className="mt-8 flex flex-col gap-3">
                    {services.map((service) => (
                        <ServiceCard key={service.slug} service={service} />
                    ))}
                </div>
                <Link
                    href="/catalogue"
                    className="mt-6 inline-block rounded-md bg-brand-red px-6 py-3 text-sm font-medium text-brand-cream hover:bg-brand-red/90"
                >
                    Explore our Catalogue
                </Link>
            </div>
 


        </section>
    )
}