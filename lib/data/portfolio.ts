export type Project = {
  slug: string;
  title: string;
  service: string;
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "kumasi-shop-cctv",
    title: "CCTV install for a retail shop in Kumasi",
    service: "CCTV installation",
    summary: "4-camera GSM setup with remote viewing for a single-owner shop.",
  },
  {
    slug: "accra-residential-fencing",
    title: "Perimeter fencing for a residential compound in Accra",
    service: "Electric fencing",
    summary: "Full voltage fencing with alarm integration around a family home.",
  },
  {
    slug: "fleet-tracking-logistics",
    title: "Fleet tracking for a logistics company",
    service: "Vehicle tracking",
    summary: "12-vehicle fleet fitted with 906 trackers and fuel monitoring on select vans.",
  },
];