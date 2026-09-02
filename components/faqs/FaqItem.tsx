"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import type { Faq } from "@/lib/data/faqs";

export default function FaqItem({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`mb-2 rounded-lg border p-3 transition-colors ${
        open ? "border-brand-maroon bg-brand-maroon/5" : "border-brand-steel/30 bg-white"
      }`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-left"
      >
        <span className={`text-sm ${open ? "font-medium text-brand-maroon" : "text-brand-charcoal"}`}>
          {faq.question}
        </span>
        {open ? (
          <X size={15} className="shrink-0 text-brand-maroon" />
        ) : (
          <Plus size={15} className="shrink-0 text-brand-steel" />
        )}
      </button>
      {open && <p className="mt-2 text-sm text-brand-steel">{faq.answer}</p>}
    </div>
  );
}