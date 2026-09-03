export type SolarOffering = {
    name: string;
    description: string;
};

export const offerings: SolarOffering[] = [
    {
    name: "Solar panel installation & battery backup",
    description: "Complete solar panel and battery systems sized to your property's power needs.",
  },
  {
    name: "Security system backup power",
    description: "Keep your CCTV, gates and electric fencing running through power outages.",
  },
  {
    name: "Full off-grid property setup",
    description: "Complete off-grid power for entire homes and businesses, not just security systems.",
  },
];