import { services } from "@/lib/data/services";
import ServiceCard from "@/components/home/ServiceCard";

export default function ServiceSection() {
    return (
        <section className="px-6 py-14">
            <div className="mx-auto max-w-3xl">
                <p className="text-centertext-xs uppercase tracking-wide text-brand-steel">
                    What we do 
                </p>
                <h2 className="mt-1 text-center text-xl font-medium text-brand-charcoal">
                    Five services, one trusted team
                </h2>
                <div className="mt-8 flex flex-col gap-3">
                    {services.map((service) => (
                        <ServiceCard key={service.slug} service={service} />
                    ))}
                </div>
            </div>
        </section>
    )
}