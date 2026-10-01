import { businessInfo } from "@/lib/data/business-info";
import { locations } from "@/lib/data/locations";

export function buildOrganizationSchema() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    const organization = {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: businessInfo.name,
        url: baseUrl,
        logo: `${baseUrl}/images/logo/flyer.jpeg`,
        sameAs: [businessInfo.social.tiktok]
    };

    const branches = locations.map((location) => ({
        "@type": "HomeAndConstructionBusiness",
        "@id": `${baseUrl}/#branch-${location.name.toLowerCase()}`,
        name: `${businessInfo.name} — ${location.name}`,
        branchOf: { "@id": `${baseUrl}/#organization` },
        telephone: businessInfo.phone,
        email: businessInfo.email,
        url: `${baseUrl}/contact`,
        address: {
        "@type": "PostalAddress",
        addressLocality: location.name,
        addressCountry: "GH",
        },
        geo: {
        "@type": "GeoCoordinates",
        latitude: location.lat,
        longitude: location.lng,
        },
        openingHours: "Mo-Sa 08:00-18:00",
        priceRange: "$$",
    }));

    return [organization, ...branches];

}