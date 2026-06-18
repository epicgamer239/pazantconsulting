import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { navLinks, site } from "@/lib/content";

const CODE4COMMUNITY_URL = "https://www.code4community.net/";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="band-hero mt-auto border-t border-hero-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold leading-snug">{site.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-hero-muted">{site.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm">
            <nav aria-label="Footer">
              <ul className="space-y-2 text-hero-muted">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="link-motion hover:text-hero-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="text-hero-muted">
              <a href={`mailto:${site.email}`} className="link-motion hover:text-hero-ink">
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="link-motion mt-2 block hover:text-hero-ink"
              >
                {site.phone}
              </a>
              <SocialLinks invert className="mt-4" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-1 border-t border-hero-ink/15 pt-8 text-sm text-hero-muted">
          <p>
            © {year} {site.name} | All Rights Reserved
          </p>
          <p>
            Powered by{" "}
            <a
              href={CODE4COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-motion font-medium text-hero-ink/90 hover:text-hero-ink"
            >
              Code4Community
            </a>{" "}
            {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
