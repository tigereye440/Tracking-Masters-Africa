import Link from "next/link";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma"

async function togglePublish(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    const currentStatus = formData.get("currentStatus") as string;
    await prisma.faq.update({
        where: { id },
        data: { status: currentStatus === "PUBLISHED" ? "DRAFT" : "PUBLISHED" },
    });
    revalidatePath("/admin/faqs")
    revalidatePath("/faq");
}

async function deleteFaq(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.faq.delete({ where: { id } });
    revalidatePath("/admin/faqs");
    revalidatePath("/faq");
}

export default async function AdminFaqPage() {
    const faqs = await prisma.faq.findMany({ orderBy: { createdAt: "desc" } });

    return (
        <section className="mx-auto max-w 3xl px-6 py-14">
            <div className="flex flex-items-center justify-center mx-2">
                <h1 className="text-2xl font-medium text-brand-charcoal">Frequently Asked Questions</h1>
                <Link
                    href="/admin/faqs/new"
                    className="rounded-md bg-brand-red py-2 px-3 text-sm font-medium text-brand-cream"
                >
                    New FAQ
                </Link>
            </div>

            <div className="mt-6 flex flex-col gap-3">
                {faqs.map((faq) => (
                    <div 
                        key={faq.id}
                        className="rounded-lg border border-brand-steel/30 bg-white p-4">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-brand-charcoal">{faq.question}</p>
                            <span
                                className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                                    faq.status === "PUBLISHED"
                                        ? "bg-brand-maroon/10 text-brand-maroon"
                                        : "bg-brand-steel/10 text-brand-steel" 
                                }`}
                            >
                                {faq.status === "PUBLISHED" ? "Published" : "Draft"}
                            </span>
                        </div>
                        <p className="mt-1 text-xs text-brand-steel">{faq.category}</p>
                        <p className="mt-2 text-sm text-brand-charcoal">{faq.answer}</p>
                        <div className="mt-3 flex gap-2">
                            <form action={togglePublish}>
                                <input type="hidden" name="id" value={faq.id}/>
                                <input type="hidden" name="currentStatus" value={faq.status} />
                                <button 
                                    type="submit"
                                    className="rounded-md border border-brand steel px-3 py-1 5 text-xs font-medium text-brand-charcoal"
                                >
                                    {faq.status === "PUBLISHED" ? "Unpublish" : "Publish"}
                                </button>
                            </form>
                            <form action={deleteFaq}>
                                <input type="hidden" name="id" value={faq.id} />
                                <button
                                    type="submit"
                                    className="rounded-md border border-brand-steel/40 px-3 py-1.5 text-xs font-medium text-brand-red"
                                >
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}