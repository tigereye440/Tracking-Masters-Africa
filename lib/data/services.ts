export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  tagline: string;
  heroImage?: string;
  thumbnail?: string;
};

// TODO
// ADD HERO IMAGES

export const services: Service[] = [
  {
    slug: "vehicle-tracking",
    name: "Vehicle tracking",
    shortDescription: "Real-time GPS, geo-fence and speed alerts for cars, fleets and bikes.",
    tagline: "Real-time GPS tracking, dashcams and fuel monitoring — for cars, bikes, tricycles and fleets.",
    // heroImage: "/images/services/vehicle-tracking/hero.jpg",
    // thumbnail: "/images/services/vehicle-tracking/thumb.jpg",
  },
  {
    slug: "cctv-installation",
    name: "CCTV installation",
    shortDescription: "HD cameras with remote monitoring for home, shop and office.",
    tagline: "HD night-vision cameras for homes, shops and offices — with free site assessment and quote.",
    // heroImage: "/images/services/cctv/hero.jpg",
    // thumbnail: "/images/services/cctv/thumb.jpg",
  },
  {
    slug: "electric-fencing",
    name: "Electric fencing & perimeter security",
    shortDescription: "Voltage fencing, perimeter alarms and smart doorbells for total perimeter protection.",
    tagline: "Voltage fencing, perimeter alarms and smart doorbells — complete perimeter protection with free site assessment.",
    // heroImage: "/images/services/electric-fencing/hero.jpg",
    // thumbnail: "/images/services/electric-fencing/thumb.jpg",
  },
  {
    slug: "automatic-doors",
    name: "Automatic doors and gates",
    shortDescription: "Motorized access control for residential and commercial entries.",
    tagline: "Remote-controlled gate motors that link to your perimeter security system — sized to fit any gate.",
    // heroImage: "/images/services/automatic-doors/hero.jpg",
    // thumbnail: "/images/services/automatic-doors/thumb.jpg",
  },
  {
    slug: "solar-power",
    name: "Solar and off-grid power",
    shortDescription: "Solar installations keeping your security systems running through outages.",
    tagline: "From backup power for your security system to full off-grid setups for your entire property.",
    // heroImage: "/images/services/solar-power/hero.jpg",
    // thumbnail: "/images/services/solar-power/thumb.jpg",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}