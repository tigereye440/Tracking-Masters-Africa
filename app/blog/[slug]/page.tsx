import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown"
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getServiceBySlug } from "@/lib/data/services";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";


export default async function BlogPostPage({ 
    params 
}: { params: Promise<{ slug: string }> 
}) {
    const { slug } = await params;
    let post;
    try {
        post = await prisma.blogPost.findFirst({
            where: { slug, status: "PUBLISHED"}
        })

        
    } catch {
        return (
            <section className="mx-auto max-w-2xl px-6 py-14 text-center">
                <p className="text-sm text-brand-steel">
                    This page iss temporarily unavailable. Please try again later.
                </p>
            </section>
        );
    }

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

            {post.imageUrl ? (
                <div className="relative mt-6 h-64 w-full overflow-hidden rounded-lg">
                <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
                </div>
            ) : (
                <ImagePlaceholder className="mt-6 h-64 w-full" />
            )}
            
            <div className="prose prose-sm mt-6 max-w-none text-brand-steel prose-headings:text-brand-charcoal prose-strong:text-brand-charcoal prose-a:text-brand-maroon">
                <ReactMarkdown>{post.body}</ReactMarkdown>
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