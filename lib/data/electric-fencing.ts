export type Offering = {
  name: string;
  description: string
}

export const offerings: Offering[] = [
  {
    name: "Voltage electric fencing",
    description: "Custom voltage perimeter fencing tailored to your property size and layout.",
  },
  {
    name: "Perimeter alarms",
    description: "Alerts you the moment your fence line is breached or tampered with.",
  },
  {
    name: "Smart doorbells",
    description: "See and speak to visitors remotely before letting them in."
  }
]