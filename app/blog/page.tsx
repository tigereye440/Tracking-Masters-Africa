import { prisma } from "@/lib/prisma";
import BlogBrowser from "@/components/blog/BlogBrowser";

export default async function BlogPage() {
    const posts = await prisma.blogPost.findMany({
        where: { status: "PUBLISHED" },
        orderBy: { createdAt: "desc" },
    })
        
    return (
        <>
            <section className="bg-brand-charcoal px-6 py-14 text-center">
                <p className="mb-2 text-xs uppercase tracking-wide text-brand-steel">Blog</p>
                <h1 className="mx-auto max-w-lg text-2xl font-medium text-brand-cream sm:text-3xl">
                    Tips, guides and updates
                </h1>
            </section>

            <section className="mx-auto max-w-4xl px-6 py-14">
                <BlogBrowser posts={posts} />
            </section>
        </>
    )
}