import Link from "next/link";
import { siteInfo } from "@/data/site";

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-text text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="font-serif text-2xl font-medium">{siteInfo.name}</h2>
          <address className="mt-4 space-y-1 not-italic text-white/75">
            <p>{siteInfo.address.street}</p>
            <p>
              {siteInfo.address.city}, {siteInfo.address.state} {siteInfo.address.zip}
            </p>
            <p className="pt-2">
              <a href={`mailto:${siteInfo.email}`} className="transition hover:text-accent-soft">
                {siteInfo.email}
              </a>
            </p>
            <p>
              <a href={siteInfo.phoneHref} className="transition hover:text-accent-soft">
                {siteInfo.phone}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="font-serif text-lg font-medium">Visit Us</h3>
          <p className="mt-4 text-white/75">{siteInfo.appointmentNote}.</p>
          <p className="mt-1 text-white/75">{siteInfo.hoursNote}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={siteInfo.links.bookNow}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent/90"
            >
              Book Now
            </Link>
            <a
              href={siteInfo.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent-soft hover:text-accent-soft"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg font-medium">Follow Us</h3>
          <div className="mt-4 flex gap-3">
            <SocialIcon href={siteInfo.social.facebook} label="Facebook">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </SocialIcon>
            <SocialIcon href={siteInfo.social.instagram} label="Instagram">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </SocialIcon>
            <SocialIcon href={siteInfo.social.pinterest} label="Pinterest">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </SocialIcon>
            <SocialIcon href={siteInfo.social.yelp} label="Yelp">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.16 12.594l-4.995 1.431c-.96.276-1.334-.953-.55-1.514l3.995-2.867c.78-.56 1.58.417.55 1.95zm-8.753 4.686l1.514 4.995c.276.96-.953 1.334-1.514.55l-2.867-3.995c-.56-.78.417-1.58 1.95-.55h.917zm-1.337-8.825L5.575 3.46c-.96-.276-.334-1.953.55-1.514l3.995 2.867c.78.56-.417 1.58-1.95.55zm9.337 3.47l-4.995-1.431c-.96-.276-.334-1.953.55-1.514l3.995 2.867c.78.56-.417 1.58-1.95.55H19.5zM12 2.25c.414 0 .75.336.75.75v5.25a.75.75 0 01-1.5 0V3c0-.414.336-.75.75-.75z" />
              </svg>
            </SocialIcon>
          </div>
          <nav className="mt-6 flex flex-col gap-2 text-sm text-white/75" aria-label="Footer navigation">
            <Link href="/services" className="transition hover:text-accent-soft">Services</Link>
            <Link href="/new-guest" className="transition hover:text-accent-soft">New Guest</Link>
            <Link href="/stylists" className="transition hover:text-accent-soft">Stylists</Link>
            <Link href="/bridal" className="transition hover:text-accent-soft">Bridal</Link>
            <Link href="/studio" className="transition hover:text-accent-soft">The Studio</Link>
            <Link href={siteInfo.links.shop} target="_blank" rel="noopener noreferrer" className="transition hover:text-accent-soft">Shop</Link>
            <Link href="/promotions" className="transition hover:text-accent-soft">Promotions</Link>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/60">
        {siteInfo.copyright}
      </div>
    </footer>
  );
}
