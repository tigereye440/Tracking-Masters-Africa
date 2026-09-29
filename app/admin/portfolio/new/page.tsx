import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { services } from "@/lib/data/services";
import { slugify } from "@/lib/utils/slugify";
import { uploadImage } from "@/lib/utils/upload-image";
import { FcImageFile } from "react-icons/fc";

async function createProject(formData: FormData) {
    "use server"

    const title = formData.get("title") as string;
    const serviceSlug = formData.get("serviceSlug") as string;
    const summary = formData.get("summary") as string;
    const intent = formData.get("intent") as string
    const imageFile = formData.get("image") as File;

    const validSlugs = services.map((s) => s.slug);
    if (!validSlugs.includes(serviceSlug)) {
        throw new Error("Invalid service selected");
    }

    const imageUrl = await uploadImage(imageFile, "projects")

    if (!validSlugs) {
        throw new Error("Invalid service selected");        
    }

    await prisma.project.create({
        data: {
            title,
            summary,
            serviceSlug,
            imageUrl,
            slug: slugify(title),
            status: intent === "publish" ? "PUBLISHED" : "DRAFT"
        },
    });

    revalidatePath("/admin/portfolio");
    revalidatePath("/portfolio")
    redirect("/admin/portfolio")

}



export default function NewProjectPage() {
        return (
            <section className="mx-auto max-w-2xl px-6 py-14">
                <h1 className="text-2xl font-medium text-brand-charcoal">New porject</h1>

                <form action={createProject} className="mt-6 flex flex-col gap-4">
                    <div>
                        <label htmlFor="title" className="mb-1 block text-sm font-medium text-brand-charcoal">
                            Project Title
                        </label>
                        <input  
                            id="title"
                            name="title"
                            type="text"
                            required
                            placeholder="e.g. CCTV install for a retail shop in Kumasi"
                            className="w-full rounded-d border border-brand-steel/40 px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none"
                        />
                    </div>


                    <div>
                    <label htmlFor="serviceSlug" className="mb-1 block text-sm font-medium text-brand-charcoal">
                        Service
                    </label>
                    <select
                        id="serviceSlug"
                        name="serviceSlug"
                        required
                        className="w-full rounded-md border border-brand-steel/40 px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none"
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
                            Summary
                        </label>
                        <textarea
                            id="summary"
                            name="summary"
                            rows={3}
                            required
                            placeholder="Separate paragraphs with a blank line"
                            className="w-full rounded-md border border-brand-steel/40 px-3 py-2 text-sm focus:border-brand-maroon focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="image" className="mb-1 block text-sm font-medium text-brand-charcoal">
                            Photo (optional)
                        </label>
                        <input
                            id="image"
                            name="image"
                            type="file"
                            accept="image/*"
                            className="w-full rounded-md border border-brand-steel/40 px-3 py-2 text-sm"
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