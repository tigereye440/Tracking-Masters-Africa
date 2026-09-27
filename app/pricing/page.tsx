import Link from "next/link";
import { pricingTiers } from "@/lib/data/pricing";
import PricingCard from "@/components/pricing/PricingCard";
import CtaBand from "@/components/home/CtaBand";

export default function PricingPage() {
  return (
    <>
      <section className="bg-brand-charcoal px-6 py-14 text-center">
        <p className="mb-2 text-xs uppercase tracking-wide text-brand-steel">Pricing</p>
        <h1 className="mx-auto max-w-lg text-2xl font-medium text-brand-cream sm:text-3xl">
          Straightforward pricing, tailored to your property
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-brand-cream/70">
          Every quote is based on a free site assessment — the prices below are
          a starting point.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="grid gap-4 sm:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.serviceSlug} tier={tier} />
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-brand-steel">
          Final pricing depends on property size, device selection and
          installation complexity.{" "}
          <Link href="/contact" className="font-medium text-brand-maroon">
            Contact us
          </Link>{" "}
          for an exact quote.
        </p>
      </section>

      <CtaBand />
    </>
  );
}