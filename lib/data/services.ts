export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  heroImage?: string;
  thumbnail?: string;
};

export const services: Service[] = [
  {
    slug: "vehicle-tracking",
    name: "Vehicle tracking",
    shortDescription:
      "Real-time GPS, geo-fence and speed alerts for cars, fleets and bikes.",
    heroImage: "/images/services/vehicle-tracking/tracking.jpeg",

  },
  {
    slug: "cctv-installation",
    name: "CCTV installation",
    shortDescription:
      "HD cameras with remote monitoring for home, shop and office.",
  },
  {
    slug: "electric-fencing",
    name: "Electric fencing & Perimeter security",
    shortDescription:
      "Voltage fencing, perimeter alarms and smart doorbells for total perimeter protection.",
  },
  {
    slug: "automatic-doors",
    name: "Automated doors and gates",
    shortDescription:
      "Motorized access control for residential and commercial entries.",
  },

  {
    slug: "solar-power",
    name: "Solar and off-grid power",
    shortDescription:
      "Solar installations keeping your security systems running through outages.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
