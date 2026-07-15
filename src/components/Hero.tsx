import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { siteInfo } from "@/data/site";

type HeroProps = {
  headline: ReactNode;
  subheadline: string;
  imageSrc?: string;
  imageAlt?: string;
  showTagline?: boolean;
};

export default function Hero({
  headline,
  subheadline,
  imageSrc = "/images/hero/salon-interior.jpg",
  imageAlt = "Willow & Mane salon interior",
  showTagline = false,
}: HeroProps) {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-text">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-[center_35%] saturate-[1.12] contrast-[1.05] sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30 sm:from-black/75 sm:via-black/35 sm:to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft sm:text-sm [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]">
          Plainfield, Indiana
        </p>
        <h1 className="max-w-xl font-serif text-[2rem] font-medium leading-[1.15] text-white sm:max-w-2xl sm:text-5xl lg:text-6xl [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
          {headline}
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-white/95 sm:mt-5 sm:max-w-xl sm:text-lg [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
          {subheadline}
        </p>

        {showTagline && (
          <p className="mt-5 font-serif text-lg italic text-accent-soft sm:mt-6 sm:text-2xl [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
            {siteInfo.tagline}
          </p>
        )}

        <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
          <Link
            href={siteInfo.links.bookNow}
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-accent/90"
          >
            Book Now
          </Link>
          <Link
            href="/new-guest"
            className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            New Guest
          </Link>
        </div>
      </div>
    </section>
  );
}
