"use client"

import { useState } from "react";
import { Star } from "lucide-react";

export default function StarRatingInput({
    value, 
    onChange
}: {
    value: number;
    onChange: (rating: number) => void;
}) {
    const [hovered, setHovered] = useState<number | null>(null);
    const displayValue = hovered ?? value;

    return (
        <div className="flex gap-1">
            {Array.from({ length: 5}).map((_, index) => {
                const starValue = index + 1;
                return (
                    <button
                        key={starValue}
                        type="button"
                        onClick={() => onChange(starValue)}
                        onMouseEnter={() => setHovered(starValue)}
                        onMouseLeave={() => setHovered(null)}
                        aria-label={`Rate ${starValue} star${starValue > 1 ? "s" : ""}`}
                    >
                        <Star
                            size={22}
                            className={starValue <= displayValue ? "filled-brand-maroon text-brand-maroon" : "text-brand-steel/40"} 
                        />
                    </button>
                );
            })}
        </div>
    );
}