"use client";

import { useState } from "react";
import { services } from "@/lib/data/services";
import StarRatingInput from "./StarRatingInput";

export default function TestimonialForm() {
    const [rating, setRating] = useState(0);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (rating === 0) {
            setStatus("error");
            return;
        }

        const form = event.currentTarget;

        setStatus("submitting");

        const formData = new FormData(event.currentTarget);
        const payload = {
            quote: formData.get("quote"),
            serviceSlug: formData.get("serviceSlug"),
            location: formData.get("location"),
            rating
        };

        try {
            const response = await fetch("/api/testimonials", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error("Request failed");

            setStatus("success")
            form.reset();
            setRating(0)

        } catch (error) {
            console.log(error)
            setStatus("error");
        }
    }

    if (status == "success") {
        return (
            <div className="rounded-lg border border-brand-maroon/30 bg-brand-maroon/5 p-6 text-center">
                <p className="text-sm font-medium text-brand-charcoal">Thank you for your feedback</p>
                <p className="mt-1 text-xs text-brand-steel">
                    Your review will appear on the site once it&apos;s been reviewed.
                </p>
            </div>
        );
    }
    
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
                <p className="mb-1 text-sm font-medium text-brand-charcoal">Your rating</p>
                <StarRatingInput value={rating} onChange={setRating} />
            </div>

            <div>
                <label htmlFor="quote" className="mb-1 block text-sm font-medium text-brand-charcoal">
                    Your review
                </label>
                <textarea 
                    name="quote" 
                    id="quote"
                    rows={4}
                    required
                    className="w-full rounded-md border border-brand-steel/40 px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none"
                />
            </div>

            <div>
                <label htmlFor="serviceSlug" className="mb-1 block text-sm font-medium text-brand-charcoal">
                    Service used
                </label>
                <select 
                    name="serviceSlug" 
                    id="serviceSlug"
                    required
                    className="w-full rounded-md border border-brand-steel/40 px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none"
                    >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                            <option value={service.slug} key={service.slug}>
                                {service.name}
                            </option>
                        ))}
                    </select>
            </div>

            <div>
                <label htmlFor="location" className="mb-1 block text0sm font-medium text-brand-charcoal">
                    Your city
                </label>
                <input 
                    type="text" 
                    name="location" 
                    id="location"
                    required
                    placeholder="e.g Kumasi"
                    className="w-full rounded-md border border-brand-steel/40 px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none"
                />
            </div>

            <p className="text-xs text-brand-steel">
                Your review is shared anonymously - no name is published, only your city and service used 
            </p>

            {status === "error" && rating === 0 && (
                <p className="text-sm text-brand-red">Please select a star rating.</p>
            )}
            {status === "error" && rating > 0 && (
                <p className="text-sm text-brand-red">Something went wrong. Please try again.</p>
            )}

            <button 
                type="submit"
                disabled={status === "submitting"}
                className="rounded-md-bg-brand-red px-5 py-2 5 text-sm font-medium text-brand-cream hover:bg-brand-red/90 disabled:opacity-60"
            >
                {status === "submitting" ? "Submitting..." : "Submit review"}
            </button>

        </form>


    )
}