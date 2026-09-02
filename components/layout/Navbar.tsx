"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { services } from "../../lib/data/services";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/faqs", label: "FAQ"},
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-brand-charcoal">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-maroon text-xs font-medium text-brand-cream">
            TMA
          </span>
          <span className="text-sm font-medium text-brand-cream">
            Tracking Masters Africa
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 text-sm text-brand-cream/80 md:flex">
          <Link href="/" className="hover:text-brand-cream">
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 hover:text-brand-cream"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown size={14} />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-64 rounded-lg border border-white/10 bg-brand-charcoal py-2 shadow-lg">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-2 text-sm text-brand-cream/80 hover:bg-white/5 hover:text-brand-cream"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-cream">
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-md bg-brand-red px-4 py-2 font-medium text-brand-cream hover:bg-brand-red/90"
          >
            Get a quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-brand-cream md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <p className="mb-2 text-xs uppercase tracking-wide text-brand-cream/50">
            Services
          </p>
          <div className="mb-4 flex flex-col gap-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-sm text-brand-cream/80"
                onClick={() => setMobileOpen(false)}
              >
                {service.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-brand-cream/80"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-md bg-brand-red px-4 py-2 text-center text-sm font-medium text-brand-cream"
              onClick={() => setMobileOpen(false)}
            >
              Get a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
