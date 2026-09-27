import { prisma } from "@/lib/prisma";
import TestimonialCard from "@/components/home/TestimonialCard";
import TestimonialForm from "@/components/testimonials/TestimonialForm";

export default async function TestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({
    where: { status: "APPROVED" },
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <section className="bg-brand-charcoal px-6 py-14 text-center">
        <p className="mb-2 text-xs uppercase tracking-wide text-brand-steel">Reviews</p>
        <h1 className="mx-auto max-w-lg text-2xl font-medium text-brand-cream sm:text-3xl">
          What our customers say
        </h1>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        {testimonials.length === 0 ? (
          <p className="text-center text-sm text-brand-steel">
            No reviews yet — be the first to share yours.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-md px-6 pb-14">
        <h2 className="mb-5 text-center text-lg font-medium text-brand-charcoal">
          Share your experience
        </h2>
        <TestimonialForm />
      </section>
    </>
  );
}