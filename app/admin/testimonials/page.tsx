import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function  approveTestimonial(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.testimonial.update({ where: { id }, data: { status: "APPROVED" } });
    revalidatePath("/admin/testimonials");
    revalidatePath("/testimonials");
    revalidatePath("/");
}


async function rejectTestimonial(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.testimonial.update({ where: { id }, data: { status: "REJECTED" } });
    revalidatePath("/admin/testimonials");
}



export default async function AdminTestimonialsPage() {
  const pending = await prisma.testimonial.findMany({
    where: { status: "PENDING" },
    orderBy: { createdAt: "desc" },
  });

  return (
    <section className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-2xl font-medium text-brand-charcoal">Pending testimonials</h1>

      {pending.length === 0 && (
        <p className="mt-4 text-sm text-brand-steel">No pending testimonials.</p>
      )}

      <div className="mt-6 flex flex-col gap-4">
        {pending.map((testimonial) => (
          <div key={testimonial.id} className="rounded-lg border border-brand-steel/30 bg-white p-4">
            <p className="text-sm italic text-brand-charcoal">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="mt-2 text-xs text-brand-steel">
              {testimonial.location} &middot; {testimonial.serviceSlug} &middot; {testimonial.rating} stars
            </p>
            <div className="mt-3 flex gap-2">
              <form action={approveTestimonial}>
                <input type="hidden" name="id" value={testimonial.id} />
                <button
                  type="submit"
                  className="rounded-md bg-brand-maroon px-3 py-1.5 text-xs font-medium text-brand-cream"
                >
                  Approve
                </button>
              </form>
              <form action={rejectTestimonial}>
                <input type="hidden" name="id" value={testimonial.id} />
                <button
                  type="submit"
                  className="rounded-md border border-brand-steel/40 px-3 py-1.5 text-xs font-medium text-brand-charcoal"
                >
                  Reject
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
