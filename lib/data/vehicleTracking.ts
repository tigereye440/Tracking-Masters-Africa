export type SubService = {
    name: String;
    description: string;
}

export const subServices: SubService[] = [
  {
    name: "GPS/GSM vehicle tracking",
    description: "Real-time location, geo-fence alerts and speed monitoring for any vehicle.",
  },
  {
    name: "Dashcam installation",
    description: "180° or 360° wide-view dashcams for on-road recording and evidence.",
  },
  {
    name: "Fuel capacity monitoring",
    description: "Track fuel levels in real time and get alerted to sudden drops or theft.",
  },
];

export type Device = {
    id: string;
    vehicleType: string;
    features: string[];
    hasFuelMonitoring: boolean; 
    service: string
};

export const devices: Device[] = [
    {
        id: "901M",
        vehicleType: "Motorbikes, tricycles",
        features: ["Real-time GPS+GSM+GPRS", "Geo-fence alerts", "SOS alarm"],
        hasFuelMonitoring: false,
        service: "tracking"
    },
    {
        id: "901AL",
        vehicleType: "Cars",
        features: ["Real-time GPS+GSM+GPRS", "Geo-fence alerts", "ACC/ignition detection"],
        hasFuelMonitoring: false,
        service: "tracking"
    },
    {
        id: "906",
        vehicleType: "Cars",
        features: ["Real-time GPS+GSM+GPRS", "Geo-fence alerts", "SOS alarm", "ACC/ignition detection"],
        hasFuelMonitoring: false,
        service: "tracking"
    },
    {
        id: "X3",
        vehicleType: "Cars",
        features: ["Real-time GPS+GSM+GPRS", "Geo-fence alerts", "SOS alarm", "ACC/ignition detection", "Fuel level monitoring"],
        hasFuelMonitoring: true,
        service: "tracking"
    },
    {
        id: "JC120",
        vehicleType: "Cars",
        features: ['Real time video feed', "180 degree wide view", "Colission detection", "SOS Alarm", "Driver Monitoring"],
        hasFuelMonitoring: false,
        service: "dashcam"
    },
        {
        id: "JC400",
        vehicleType: "Cars",
        features: ['Real time video feed', "360 degree wide view", "Colission detection", "SOS Alarm", "Driver Monitoring"],
        hasFuelMonitoring: false,
        service: "dashcam"
    }
]

