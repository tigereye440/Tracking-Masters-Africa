export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    body: string;
    serviceSlug: string;
    date: string;
    readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-gps-vehicle-tracking-works",
    title: "How GPS vehicle tracking works",
    excerpt: "A plain-language look at how real-time tracking, geo-fencing and speed alerts actually work under the hood.",
    body: "GPS trackers like our 901AL and 906 devices use a combination of GPS, GSM and GPRS to determine a vehicle&apos;s location and relay it back to your phone in real time. The GPS chip calculates position from satellite signals, while the GSM/GPRS connection sends that data over the mobile network to the tracking app...\n\nGeo-fencing lets you draw a virtual boundary around an area — if the vehicle leaves it, you get an instant alert. This is especially useful for fleet owners who want to know the moment a vehicle deviates from its expected route.",
    serviceSlug: "vehicle-tracking",
    date: "2026-07-14",
    readTime: "4 min read",
  },
  {
    slug: "gsm-vs-wifi-cctv-which-is-right-for-you",
    title: "GSM vs WiFi CCTV — which is right for you?",
    excerpt: "The two connectivity options for our camera systems each suit different situations. Here&apos;s how to decide.",
    body: "WiFi cameras connect to your existing home or office internet, making them a strong choice if you already have reliable connectivity. GSM cameras, on the other hand, connect directly over the mobile network — no wifi required, which makes them ideal for standalone shops or properties without fixed internet access...\n\nBoth options support remote viewing from your phone and come standard with 5MP HD resolution and night vision.",
    serviceSlug: "cctv-installation",
    date: "2026-07-28",
    readTime: "3 min read",
  },
  {
    slug: "is-electric-fencing-legal-for-homes-in-ghana",
    title: "Is electric fencing legal for homes in Ghana?",
    excerpt: "A common question from homeowners considering perimeter security. Here&apos;s what to know before installing.",
    body: "Electric fencing is legal for residential properties in Ghana when installed within recommended safety guidelines. This includes appropriate voltage levels, warning signage, and safe placement relative to public access points...\n\nAt TMA, every fencing installation is carried out to meet these standards, and we&apos;re happy to walk you through exactly what that involves during your free site assessment.",
    serviceSlug: "electric-fencing",
    date: "2026-08-10",
    readTime: "3 min read",
  },
]