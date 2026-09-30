import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { faqCategories, type FaqCategoryLabel } from "@/lib/data/faq-categories";


async function createFaq(formData: FormData) {
    "use server"

    const question = formData.get("question") as string;
    const answer = formData.get("answer") as string
    const category = formData.get("category") as string
    const intent = formData.get("intent") as string;

    if (!faqCategories.includes(category as FaqCategoryLabel)) {
        throw new Error("Invalid category selected");
    }

    await prisma.faq.create({
        data: {
            question,
            answer,
            category,
            status: intent === "publish" ? "PUBLISHED" : "DRAFT"
        },
    });

    revalidatePath("/admin/faqs");
    revalidatePath("/faqs");
    redirect("/admin/faqs");  
}

export default function NewFaqPage() {
        return (
            <section className="mx-auto max-w-2xl px-6 py-14">
                <h1 className="text-2xl font-medium text-brand-charcoal">New FAQ</h1>

                <form action={createFaq} className="mt-6 flex flex-col gap-4">
                    <div>
                        <label htmlFor="question" className="mb-1 block text-sm font-medium text-brand-charcoal">
                            Question
                        </label>
                        <textarea
                            id="question"
                            name="question"
                            rows={2}
                            required
                            className="w-full rounded-md border border-brand-steel/40 px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="question" className="mb-1 block text-sm font-medium text-brand-charcoal">
                            Answer
                        </label>
                        <textarea
                            id="answer"
                            name="answer"
                            rows={4}
                            required
                            className="w-full rounded-md border border-brand-steel/40 px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="category" className="mb-1 block text-sm font-medium text-brand-charcoal">
                            Category
                        </label>
                        <select 
                            id="category"
                            name="category"
                            required
                            className="w-full rounded-md border border-brand-steel px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none"
                        >
                            {faqCategories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}   
                        </select>
                    </div>

                    <div className="flex gap-2">
                        <button
                            type="submit"
                            name="intent"
                            value="draft"
                            className="rounded-md border border-brand-steel/40 px-4 py-2 text-sm font-medium text-brand-charcoal"
                        >
                            Save as draft
                        </button>
                        <button
                            type="submit"
                            name="intent"
                            value="publish"
                            className="rounded-md bg-brand-red px-4 py-2 text-sm font-medium text-brand-cream"
                        >
                            Publish
                        </button>
                    </div>
                </form>
            </section>
        )
}