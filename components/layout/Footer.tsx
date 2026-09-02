import Link from "next/link";
import { FaWhatsapp, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { Tiktok, WhatsApp } from "../../lib/data/hadles";

const socialLinks = [
  { href: `https://wa.me/${WhatsApp}`, label: "WhatsApp", Icon: FaWhatsapp },
  { href: `https://www.tiktok.com/${Tiktok}`, label: "TikTok", Icon: FaTiktok },
  { href: "https://x.com/YOUR_HANDLE", label: "X", Icon: FaXTwitter },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/faqs", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-8">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-maroon text-[10px] font-medium text-brand-cream">
              TMA
            </span>
            <span className="text-sm font-medium text-brand-cream">
              Tracking Masters Africa
            </span>
          </div>
          <p className="text-xs text-brand-steel">Kumasi &middot; Accra &middot; Nationwide</p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-brand-cream/80">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-cream">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-3">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-brand-cream transition-colors hover:bg-white/20"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4 text-xs text-brand-steel">
        <span>&copy; {new Date().getFullYear()} TMA — Tracking Masters Africa</span>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-brand-cream">Privacy</Link>
          <Link href="/terms" className="hover:text-brand-cream">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
