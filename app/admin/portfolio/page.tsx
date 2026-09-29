import Link from "next/link";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma"

async function togglePublish(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    const currentStatus = formData.get("currentStatus") as string;
    await prisma.project.update({
        where: { id },
        data: { status: currentStatus === "PUBLISHED" ? "DRAFT" : "PUBLISHED" },
    });
    revalidatePath("/admin/portfolio")
    revalidatePath("/portfolio");
}

async function deleteProject(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.project.delete({ where: { id } });
    revalidatePath("/admin/portfolio");
    revalidatePath("portfolio");
}

export default async function AdminBlogPage() {
    const projects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });

    return (
        <section className="mx-auto max-w 3xl px-6 py-14">
            <div className="flex flex-items-center justify-center">
                <h1 className="text-2xl font-medium text-brand-charcoal">Recent installations</h1>
                <Link
                    href="/admin/blog/new"
                    className="rounded-md bg-brand-red py-2 text-sm font-medium text-brand-cream"
                >
                    New project
                </Link>
            </div>

            <div className="mt-6 flex flex-col gap-3">
                {projects.map((project) => (
                    <div 
                        key={project.id}
                        className="rounded-lg border border-brand-steel/30 bg-white p-4">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-brand-charcoal">{project.title}</p>
                            <span
                                className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                                    project.status === "PUBLISHED"
                                        ? "bg-brand-maroon/10 text-brand-maroon"
                                        : "bg-brand-steel/10 text-brand-steel" 
                                }`}
                            >
                                {project.status === "PUBLISHED" ? "Published" : "Draft"}
                            </span>
                        </div>
                        <div className="mt-3 flex gap-2">
                            <form action={togglePublish}>
                                <input type="hidden" name="id" value={project.id}/>
                                <input type="hidden" name="currentStatus" value={project.status} />
                                <button 
                                    type="submit"
                                    className="rounded-md border border-brand steel px-3 py-1 5 text-xs font-medium text-brand-charcoal"
                                >
                                    {project.status === "PUBLISHED" ? "Unpublish" : "Publish"}
                                </button>
                            </form>
                            <form action={deleteProject}>
                                <input type="hidden" name="id" value={project.id} />
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