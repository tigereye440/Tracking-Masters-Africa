"use client";

export default function AdminError({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="mx-auto max-w-md px-6 py-20 text-center">
      <p className="text-sm font-medium text-brand-red">Couldn&apos;t reach the database</p>
      <p className="mt-2 text-sm text-brand-steel">
        Check your connection or Supabase status, then try again.
      </p>
      <button
        onClick={reset}
        className="mt-6 rounded-md border border-brand-steel/40 px-5 py-2.5 text-sm font-medium text-brand-charcoal"
      >
        Retry
      </button>
    </section>
  );
}