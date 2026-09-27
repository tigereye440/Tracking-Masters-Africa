export type PricingTier = {
    serviceSlug: string;
    serviceName: string;
    startingFrom: string;
    endingAt: string;
    note: string
}


export const pricingTiers: PricingTier[] = [
    {
        serviceSlug: "vehicle-tracking",
        serviceName: "vehicle tracking",
        startingFrom: "GHC 800",
        endingAt: "GHC 2000",
        note: "Per device, no monthly subscription"
    },
    {
        serviceSlug: "cctv-installation",
        serviceName: "CCTV installation",
        startingFrom: "GHC 1500",
        endingAt: "GHC 10,000+",
        note: "From standalone cameras to packages. Price may vary based on service and packages"
    },
    {
        serviceSlug: "electric-fencing",
        serviceName: "Electric Fencing and Perimeter security",
        startingFrom: "GHC 6000",
        endingAt: "GHC 10,000+",
        note: "Depends on the perimeter length plus service and labour costs",
    },
    {
        serviceSlug: "automatic-doors",
        serviceName: "Automatic doors",
        startingFrom: "GHC 7000",
        endingAt: "GHC 10,000+",
        note: "Depends on the gate weight, gate length and motor tier"
    },
    {
        serviceSlug: "solar-power",
        serviceName: "Solar and Off-grid power",
        startingFrom: "GHC 5000",
        endingAt: "GHC 10,000+",
        note: "Depends on system size and battery capacity"
    }
]

