import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { services } from "@/lib/data/services";
import { slugify } from "@/lib/utils/slugify";
import { calculateReadTime } from "@/lib/utils/read-time";

async function createPost(formData: FormData) {
    "use server"

    const title = formData.get("title") as string;
    const excerpt = formData.get("excerpt") as string;
    const body = formData.get("body") as string
    const serviceSlug = formData.get("serviceSlug") as string;
    const intent = formData.get("intent") as string;

    const validSlugs = services.map((s) => s.slug)
    if (!validSlugs.includes(serviceSlug)) {
        throw new Error("Invalid service selected");
    }

    await prisma.blogPost.create({
        data: {
            title,
            excerpt,
            body,
            serviceSlug,
            slug: slugify(title),
            readTime: calculateReadTime(body),
            status: intent === "publish" ? "PUBLISHED" : "DRAFT"
        },
    });

    revalidatePath("/admin/blog");
    revalidatePath("/blog");
    redirect("/admin/blog");  
}

export default function NewBlogPostPage() {
        return (
            <section className="mx-auto max-w-2xl px-6 py-14">
                <h1 className="text-2xl font-medium text-brand-charcoal">New blog post</h1>

                <form action={createPost} className="mt-6 flex flex-col gap-4">
                    <div>
                        <label htmlFor="title" className="mb-1 block text-sm font-medium text-brand-charcoal">
                            Title
                        </label>
                        <input  
                            id="title"
                            name="title"
                            type="text"
                            required
                            className="w-full rounded-d border border-brand-steel/40 px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="excerpt" className="mb-1 block text-sm font-medium text-brand-charcoal">
                            Excerpt
                        </label>
                        <textarea
                            id="excerpt"
                            name="excerpt"
                            rows={2}
                            required
                            className="w-full rounded-md border border-brand-steel/40 px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="serviceSlug" className="mb-1 block text-sm font-medium text-brand-charcoal">
                            Related service
                        </label>
                        <select 
                            id="serviceSlug"
                            name="serviceSlug"
                            required
                            className="w-full rounded-mf border border-brand-steel px-3 py-2 text-sm focus:border-brand-marron focus:outline-none"
                        >
                            {services.map((service) => (
                                <option key={service.slug} value={service.slug}>
                                    {service.name}
                                </option>
                            ))}   
                        </select>
                    </div>

                    <div>
                        <label htmlFor="body" className="mb-1 block text-sm font-medium text-brand-charcoal">
                            Body
                        </label>
                        <textarea
                            id="body"
                            name="body"
                            rows={12}
                            required
                            placeholder="Separate paragraphs with a blank line"
                            className="w-full rounded-md border border-brand-steel/40 px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none"
                        />
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