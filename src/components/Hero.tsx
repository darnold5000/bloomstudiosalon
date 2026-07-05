import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "@/data/site";

type HeroProps = {
  headline: string;
  subheadline: string;
  imageSrc?: string;
  imageAlt?: string;
  showTagline?: boolean;
};

export default function Hero({
  headline,
  subheadline,
  imageSrc = "/images/hero/salon-interior.jpg",
  imageAlt = "Bloom Studio Salon interior",
  showTagline = false,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-text">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-text/90 via-text/70 to-text/40" />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:min-h-[80vh] lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-soft">
          Avon, Indiana
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
          {headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
          {subheadline}
        </p>

        {showTagline && (
          <p className="mt-6 font-serif text-xl italic text-accent-soft sm:text-2xl">
            {siteInfo.tagline}
          </p>
        )}

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={siteInfo.links.bookOnline}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-accent/90"
          >
            Book Now
          </Link>
          <Link
            href="/new-guest"
            className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            I&apos;m a New Guest
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-accent-soft hover:text-accent-soft"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
