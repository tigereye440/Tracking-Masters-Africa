export const baseFeatures: string[] = [
    "5MP HD resolution",
    "Night vision capable"
];

export type Connectivity = {
    type: string;
    description: string;
};

export const connectivityOptions: Connectivity[] = [
    {
        type: "GSM",
        description: "Connects over mobile network - no home or office wifi required.",
    }, 
    {
        type: "WIFI",
        description: "Connects to your existing internet for remote viewing.",
    },
];

export type CameraPackage = {
    id: string
    name: string;
    idealFor: string,
    features: string[],
    badge?: string
}

export const cameraPackages: CameraPackage[] = [
    {
        id: "standalone-camera",
        name: "Standalone camera",
        idealFor: "Lone offices and shops",
        features: ["Single-camera setup", "GSM or Wifi connectivity", "Remote mobile viewing"],
    },
    {
        id: "camera-set",
        name: "Camera Set",
        idealFor: "Homes and workplaces needing multiple points of coverage",
        features: ["Multiple cameras, one system", "GSM or Wifi connectivity", "Remote mobile viewing"],
    },
    {
        id: "solar-powered",
        name: "Solar-powered camera",
        idealFor: "Areas with unreliable power or no wiring access",
        features: ["Double lens", "Superior low-light performance", "No external power needed"],
        badge: "Solar",
    }
]

