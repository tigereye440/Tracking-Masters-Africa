import { prisma } from "@/lib/prisma";
import { faqCategories } from "@/lib/data/faq-categories";
import { safeQuery } from "@/lib/safe-query";
import FaqItem from "@/components/faq/FaqItem";


export default async function FaqPage() {

    const faqs = await safeQuery(
        () => prisma.faq.findMany({ where: { status: "PUBLISHED" } }),
        []
    );

    const grouped = faqCategories
        .map((category) => ({
            category,
            items: faqs.filter((faq) => faq.category === category),
        }))
        .filter((group) => group.items.length > 0)

    return (    
        <section className="mx-auto max-w-2xl px-6 py-14">
            <h1 className="text-center text-2xl font-medium-text-brand-charcoal">
                Frequestly Asked Questions
            </h1>
            <p className="mx-auto mt-2 max-w-md text-center text-sm text-branc steel">
                Answers about pricing, process, coverage and support
            </p>

            <div className="mt-10">
                {grouped.length === 0 ? (
                    <p className="text-center text-sm text-brand-steel">No FAQs yet.</p>
                ) : (
                    grouped.map((group) => (
                        <div key={group.category} className="mb-8">
                            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-brand-maroon">
                                {group.category}
                            </p>
                            {group.items.map((faq) => (
                                <FaqItem key={faq.question} faq={faq} />
                            ))}
                        </div>
                    ))
                )}
            </div>
        </section>
    )
}