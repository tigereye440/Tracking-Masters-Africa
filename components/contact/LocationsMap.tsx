"use client"

import { useState } from "react"
import { locations } from "@/lib/data/locations"
import { Key } from "lucide-react"

export default function LocationsMap() {
    const [active, setActive] = useState(locations[0])

    return (
        <div>
            <div className="mb-3 flex gap-2">
                {locations.map((location) => (
                    <button
                        key={location.name}
                        onClick={() => setActive(location)}
                        className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                            active.name === location.name 
                            ? "bg-brand-maroon text-brand-cream"
                            :  "bg-white text-brand-charcoal border border-brand-steel/30"
                        }`}
                    >
                        {location.name}
                    </button>
                ))}
            </div>
            <iframe 
                key={active.name}
                title={`Map showing our ${active.name} location`}
                src={`https://www.google.com/maps?q=${active.lat},${active.lng}&output=embed`}
                className="h-72 w-full rounded-lg border border-brand-steel/30"
                loading="lazy"
            />
        </div>


    )
}