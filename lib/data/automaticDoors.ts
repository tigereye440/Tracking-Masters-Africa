export const keyFeatures: string[] = [
    "WiFi-enabled remote gate control",
    "Links to your perimeter security system",
];

export type MotorTier = {
    name: string,
    idealFor: string
}

export const motorTiers: MotorTier[] = [
    {
        name: "Light duty",
        idealFor: "Pedestrain gates and light swing gates",
    },
    {
        name: "Medium duty",
        idealFor: "Standard residential swing and sliding gates",
    },
    {
        name: "Heavy duty",
        idealFor: "Large and industrial sliding gates"
    }
]