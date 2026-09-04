import { devices } from "@/lib/data/vehicle-tracking";
import { cameraPackages } from "@/lib/data/cctv";
import { offerings as fencingOfferings } from "@/lib/data/electric-fencing";
import { motorTiers } from "@/lib/data/automatic-doors";
import { offerings as solarOfferings } from "@/lib/data/solar-power";

export type Product = {
  id: string;
  name: string;
  slug: string,
  serviceSlug: string;
  serviceName: string;
  description: string;
  tags: string[];
};

export const catalogue: Product[] = [
  ...devices.map((device) => ({
    id: `vehicle-tracking-${device.id}`,
    name: device.id,
    slug: device.id,
    serviceSlug: "vehicle-tracking",
    serviceName: "Vehicle tracking",
    description: device.vehicleType,
    tags: device.features,
  })),
  ...cameraPackages.map((pkg) => ({
    id: `cctv-installation-${pkg.id}`,
    name: pkg.name,
    slug: pkg.id,
    serviceSlug: "cctv-installation",
    serviceName: "CCTV installation",
    description: pkg.idealFor,
    tags: pkg.features,
  })),
  ...fencingOfferings.map((offering) => ({
    id: `electric-fencing-${offering.name}`,
    name: offering.name,
    slug: offering.name,
    serviceSlug: "electric-fencing",
    serviceName: "Electric fencing & perimeter security",
    description: offering.description,
    tags: [] as string[],
  })),
  ...motorTiers.map((tier) => ({
    id: `automatic-doors-${tier.name}`,
    name: tier.name,
    slug: tier.name,
    serviceSlug: "automatic-doors",
    serviceName: "Automatic doors & gates",
    description: tier.idealFor,
    tags: [] as string[],
  })),
  ...solarOfferings.map((offering) => ({
    id: `solar-power-${offering.name}`,
    name: offering.name,
    slug: offering.name,
    serviceSlug: "solar-power",
    serviceName: "Solar & off-grid power",
    description: offering.description,
    tags: [] as string[],
  })),
];