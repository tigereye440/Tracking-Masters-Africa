import Link from "next/link";
import { services } from "../lib/data/services";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-lg px-6 py-20 text-center">
      <p className="text-xs font-medium uppercase tracking-wide text-brand-maroon">
        404
      </p>
      <h1 className="mt-2 text-2xl font-medium text-brand-charcoal">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-brand-steel">
        The page you're looking for doesn't exist or may have moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block rounded-md bg-brand-red px-6 py-3 text-sm font-medium text-brand-cream hover:bg-brand-red/90"
      >
        Back to homepage
      </Link>

      <div className="mt-10 border-t border-brand-steel/20 pt-8">
        <p className="text-xs uppercase tracking-wide text-brand-steel">
          Or explore our services
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-full border border-brand-steel/30 px-3 py-1.5 text-xs text-brand-charcoal hover:border-brand-maroon/40"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}