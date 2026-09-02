import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
    return (
        <section className="mx-auto mac-w-4xl px-6 py-14">
            <h1 className="text-2xl font-medium text-brand-charcoal">Get in touch</h1>
            <p className="mt-2 max-w md text-sm text-brand-steel">
                Tell us what you need secured, and we'll get back to you with a quote.
            </p>

            <div className="mt-10 grid gap-10 sm:grid-cols-[1.3fr_1fr]">
                <ContactForm />
                <ContactInfo />
            </div>
        </section>
    )
}