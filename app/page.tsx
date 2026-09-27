import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServiceSection";
import TestimonialCard from "@/components/home/TestimonialCard";
import StatsBand from "@/components/home/StatsBand";
import CtaBand from "@/components/home/CtaBand";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function HomePage() {
  const testimonials = await prisma.testimonial.findMany({
    where: { status: "APPROVED" },
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  return (
    <>
      <Hero />
      <ServicesSection />

      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-xs uppercase tracking-wide text-brand-steel">
            What customers say
          </p>
          <h2 className="mt-1 text-center text-xl font-medium text-brand-charcoal">
            Trusted across Ghana
          </h2>

          {testimonials.length > 0 ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-center text-sm text-brand-steel">
              No reviews yet — be the first to share yours.
            </p>
          )}

          <p className="mt-6 text-center text-sm">
            <Link href="/testimonials" className="font-medium text-brand-maroon">
              Read more reviews
            </Link>
            {" or "}
            <Link href="/testimonials#submit" className="font-medium text-brand-maroon">
              share your own
            </Link>
          </p>
        </div>
      </section>

      <StatsBand />
      <CtaBand />
    </>
  );
}