import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data/blog";
import { getServiceBySlug } from "@/lib/data/services";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const param = await params
    const post = blogPosts.find((p) => p.slug === param.slug);

    if (!post) {
        notFound()
    } 

    const service = getServiceBySlug(post.serviceSlug)

    return (
        <section className="mx-auto max-w-2xl px-6 py-14">
            <div className="flex items-center gap-2 text-xs text-brand steel">
                {service && <span className="text-brand-maroon">{service.name}</span>}
                <span>&middot;</span>
                <span>{post.readTime}</span>
            </div>
            <h1 className="mt-2 text-2xl font-medium text-brand charcoal">{post.title}</h1>

            <ImagePlaceholder className="mt-6 h-64 w-full" />
            
            <div className="mt-6 flex-flex-col-gap-4 text-sm leading-relaxed text-brand-steel">
                {post.body.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            {service && (
                <div className="mt-10 founded-lg border border-brand maroon/30 p-5 text-center">
                    <p className="text-sm text-brand-charcoal">
                        Interested in {service.name.toLowerCase()}?
                    </p>
                    <Link
                        href={`/services/${service.slug}`}
                        className="mt-3 inline-block rounded-mf bg-brand-red px-5 py-2.5 text-sm font-medium text-brand-cream hover:bg-brand-red/90"
                        >
                            Learn more
                        </Link>
                </div>
            )}
        </section>
    );
}