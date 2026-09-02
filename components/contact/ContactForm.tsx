"use client"

import React, { useState } from "react"

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success"| "error">("idle")
    
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("submitting")

        const formData = new FormData(event.currentTarget);
        const payload = Object.fromEntries(formData.entries())

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Contect-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error("Request failed");

            setStatus("success")
            event.currentTarget.reset();
        } catch {
            setStatus("error")
        }
    }

    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-charcoal">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-md border border-brand-steel/40 px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand-charcoal">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-md border border-brand-steel/40 px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-brand-charcoal">
          Service you're interested in
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-md border border-brand-steel/40 px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none"
        >
          <option value="vehicle-tracking">Vehicle tracking</option>
          <option value="cctv-installation">CCTV installation</option>
          <option value="electric-fencing">Electric fencing</option>
          <option value="automatic-doors">Automatic doors and gates</option>
          <option value="solar-power">Solar and off-grid power</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-md border border-brand-steel/40 px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-brand-red px-5 py-2.5 text-sm font-medium text-brand-cream hover:bg-brand-red/90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-700">
          Message sent. We'll get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-brand-red">
          Something went wrong. Try again or reach us on WhatsApp.
        </p>
      )}
    </form>   
    )
}