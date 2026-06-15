import Link from "next/link";
import { navLinks, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-semibold">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/75">
              {site.tagline}
            </p>
          </div>

          <nav className="flex flex-col gap-2.5" aria-label="Footer">
            <p className="text-sm font-semibold text-brand-gold-light">Navigation</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/75 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div>
            <p className="text-sm font-semibold text-brand-gold-light">Contact</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block text-sm text-white/75 transition-colors hover:text-white"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
              className="mt-2 block text-sm text-white/75 transition-colors hover:text-white"
            >
              {site.phone}
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-xs text-white/50">
          © 2026 {site.name} | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
