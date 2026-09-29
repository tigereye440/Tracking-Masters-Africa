"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="mx-auto max-w-md px-6 py-20 text-center">
      <p className="text-xs font-medium uppercase tracking-wide text-brand-maroon">Error</p>
      <h1 className="mt-2 text-xl font-medium text-brand-charcoal">Something went wrong</h1>
      <p className="mt-2 text-sm text-brand-steel">
        Please try again, or check your internet connection.
      </p>
      <button
        onClick={reset}
        className="mt-6 rounded-md bg-brand-red px-5 py-2.5 text-sm font-medium text-brand-cream"
      >
        Try again
      </button>
    </section>
  );
}