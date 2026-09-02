import { faqs } from "../../lib/data/faqs";
import FaqItem from "../../components/faqs/FaqItem";

export default function FaqPage() {
    return (    
        <section className="mx-auto max-w-2xl px-6 py-14">
            <h1 className="text-center text-2xl font-medium-text-brand-charcoal">
                Frequestly Asked Questions
            </h1>
            <p className="mx-auto mt-2 max-w-md text-center text-sm text-branc steel">
                Answers about pricing, process, coverage and support
            </p>

            <div className="mt-10">
                {faqs.map((group) => (
                    <div key={group.category} className="mb-8">
                        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-brand-maroon">
                            {group.category}
                        </p>
                        {group.items.map((faq) => (
                            <FaqItem key={faq.question} faq={faq} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}