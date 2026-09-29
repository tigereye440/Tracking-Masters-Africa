import Link from "next/link";
import { prisma } from "@/lib/prisma"

export default async function AdminDashboard() {
    const [pendingCount, leadCount, draftCount, draftProjectCount] = await Promise.all([
        prisma.testimonial.count({ where: { status: "PENDING" } }),
        prisma.contactLead.count(),
        prisma.blogPost.count({ where: { status: "DRAFT" } }),
        prisma.project.count({ where: { status: "DRAFT" } }),
    ]);

    return (
        <section className="mx-auto max-w-2xl px-6 py-14">
            <h1 className="text-2xl font-medium text-brand-charcoal">Admin</h1>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Link
                    href="/admin/leads"
                    className="rounded-lg border border-brand-steel/30 bg-white p-5 hover:border-brand-maroon/40"
                    >
                    <p className="text-2xl font-medium text-brand-maroon">{leadCount}</p>
                    <p className="mt-1 text-sm text-brand-charcoal">Contact leads</p>
                </Link>
                <Link
                    href="/admin/testimonials"
                    className="rounded-lg border border-brand-steel/30 bg-white p-5 hover:border-brand-maroon/40"
                    >
                    <p className="text-2xl font-medium text-brand-maroon">{pendingCount}</p>
                    <p className="mt-1 text-sm text-brand-charcoal">Pending testimonials</p>
                </Link>
                <Link
                    href="/admin/blog"
                    className="rounded-lg border border-brand-steel/30 bg-white p-5 hover:border-brand-maroon/40"
                    >
                    <p className="text-2xl font-medium text-brand-maroon">{draftCount}</p>
                    <p className="mt-1 text-sm text-brand-charcoal">Draft blog posts</p>
                </Link>
                <Link
                    href="/admin/portfolio"
                    className="rounded-lg border border-brand-steel/30 bg-white p-5 hover:border-brand-maroon/40"
                    >
                    <p className="text-2xl font-medium text-brand-maroon">{draftProjectCount}</p>
                    <p className="mt-1 text-sm text-brand-charcoal">Draft projects</p>
                </Link>
            </div>
        </section>
    )
}
