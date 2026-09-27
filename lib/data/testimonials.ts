export type Testimonials = {
    quote: string;
    serviceSlug: string;
    location: string;
    rating: number;
    date?: string
}

export const testimonials: Testimonials[] = [
    {
        quote: "Installation was quick and the app makes it easy to check on my shop cameras from anywhere.",
        serviceSlug: "cctv-installation",
        location: "Kumasi",
        rating: 5,
        date: new Date().toDateString()
    },
    {
        quote: "The tracker helped us recover a stolen delivery van within hours. Worth every cedi.",
        serviceSlug: "vehicle-tracking",
        location: "Accra",
        rating: 5,
        date: new Date().toDateString()
    },
    {
        quote: "Fence was up in a day and the alarm has already caught one attempted break-in.",
        serviceSlug: "electric-fencing",
        location: "Techiman",
        rating: 4,
        date: new Date().toDateString()
    },
]