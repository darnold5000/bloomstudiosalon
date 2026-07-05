import Link from "next/link";
import Image from "next/image";
import { siteInfo } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/new-guest", label: "New Guest" },
  { href: "/stylists", label: "Stylists" },
  { href: "/bridal", label: "Bridal" },
  { href: "/studio", label: "The Studio" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/brand/logo.png"
            alt={siteInfo.name}
            width={44}
            height={44}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="hidden font-serif text-lg font-medium tracking-wide text-text sm:block">
            Bloom Studio Salon
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={siteInfo.links.bookOnline}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent/90 sm:inline-block"
          >
            Book Now
          </Link>

          <details className="relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-center rounded-lg border border-border p-2.5 text-text [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open menu</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <nav
              className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-border bg-surface p-3 shadow-lg"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-text transition hover:bg-accent-soft/40"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={siteInfo.links.bookOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-full bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Book Now
              </Link>
            </nav>
          </details>
        </div>
      </div>

      <div className="border-t border-border bg-surface px-4 py-2 sm:hidden">
        <Link
          href={siteInfo.links.bookOnline}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full bg-accent py-2.5 text-center text-sm font-semibold text-white"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}
