import Link from "next/link";
import Image from "next/image";
import { getServiceBySlug } from "@/lib/data/services";
import ImagePlaceholder from "../ui/ImagePlaceholder";

type PostCardProps = {
    slug: string;
    title: string;
    excerpt: string;
    imageUrl?: string;
    serviceSlug: string;
    readTime: string
};

export default function PostCard({ post }: { post: PostCardProps }) {
    const service = getServiceBySlug(post.serviceSlug)

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="block rounded-lg border border-brand-steel/30 bg-white p-3 transition-colors hover:border-brand-maroon/40"
        >
            {post.imageUrl ? (
                <div className="relative mt-6 h-64 w-full overflow-hidden rounded-lg">
                <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
                </div>
            ) : (
                <ImagePlaceholder className="mt-6 h-64 w-full" />
            )}
            <div className="mt-3 flex-flex-center-gap-2 text-xs text-brand-steel">
                {service && <span className="text-brand-maroon">{service.name}</span>}
                <span>&middot;</span>
                <span>{post.readTime}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-brand-charcoal">{post.title}</p>
            <p className="mt-1 text-xs text-brand-steel">{post.excerpt}</p>
        </Link>
    )
}