import Hero from "@/components/home/Hero";
import ServiceSection from "@/components/home/ServiceSection";
import StatsBand from "@/components/home/StatsBand";
import CtaBand from "@/components/home/CtaBand";

export default function HomePage() {
    return (
        <>
            <Hero/>
            <ServiceSection />
            <StatsBand />
            <CtaBand />
        </>
    );
}