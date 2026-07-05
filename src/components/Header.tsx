"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
      <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" onClick={closeMenu}>
          <Image
            src="/images/brand/logo.png"
            alt={siteInfo.name}
            width={280}
            height={112}
            priority
            className="h-14 w-auto max-w-[220px] object-contain lg:h-16"
          />
          <span className="ml-3 hidden font-serif text-lg font-medium tracking-wide text-text md:block">
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
            href={siteInfo.links.bookNow}
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent/90 lg:inline-block"
          >
            Book Now
          </Link>

          <button
            type="button"
            className="flex items-center justify-center rounded-lg border border-border p-2.5 text-text lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/20 lg:hidden"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <nav
            id="mobile-nav"
            className="relative z-50 border-t border-border bg-surface px-4 py-3 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-text transition hover:bg-accent-soft/40"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={siteInfo.links.bookNow}
                onClick={closeMenu}
                className="mt-2 block rounded-full bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Book Now
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
