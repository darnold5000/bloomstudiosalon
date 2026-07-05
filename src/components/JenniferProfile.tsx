import Image from "next/image";
import Link from "next/link";
import type { Stylist } from "@/data/stylists";

type JenniferBookingCardProps = {
  stylist: Stylist;
  bookingHref: string;
};

function JenniferBookingCard({ stylist, bookingHref }: JenniferBookingCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-accent-soft/30 p-6 text-center shadow-sm sm:p-8">
      <h2 className="font-serif text-2xl font-medium text-text sm:text-3xl">
        {stylist.bookingLabel || "Book with Jenn"}
      </h2>
      <p className="mt-2 text-sm text-muted sm:text-base">
        Schedule your hair, color, extensions, or bridal consultation online.
      </p>
      <Link
        href={bookingHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent/90"
      >
        Book on Vagaro
      </Link>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm">
        {stylist.instagram && (
          <Link
            href={stylist.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent transition hover:underline"
          >
            Instagram
          </Link>
        )}
        <Link href="/bridal" className="font-medium text-accent transition hover:underline">
          Bridal services
        </Link>
      </div>
    </div>
  );
}

export function StylistContactLinks({ stylist }: { stylist: Stylist }) {
  const links = [
    stylist.phone && stylist.phoneHref
      ? { href: stylist.phoneHref, label: stylist.phone }
      : null,
    stylist.email ? { href: `mailto:${stylist.email}`, label: stylist.email } : null,
  ].filter(Boolean) as { href: string; label: string }[];

  if (links.length === 0) return null;

  return (
    <p className="mt-4 text-center text-sm text-muted">
      <span className="text-text">Questions?</span>{" "}
      {links.map((link, index) => (
        <span key={link.href}>
          {index > 0 && <span className="mx-2 text-border">·</span>}
          <a
            href={link.href}
            className="font-medium text-accent transition hover:underline"
          >
            {link.label}
          </a>
        </span>
      ))}
    </p>
  );
}

export function JenniferProfile({ stylist }: { stylist: Stylist }) {
  const bookingHref = stylist.bookingUrl!;

  return (
    <section className="bg-surface py-6 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[280px_1fr] lg:gap-10">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[200px] overflow-hidden rounded-2xl bg-background shadow-md sm:max-w-xs lg:mx-0 lg:max-w-sm lg:aspect-[3/4]">
            <Image
              src={stylist.image}
              alt={stylist.name}
              fill
              priority
              className="object-contain object-top sm:object-cover sm:object-top"
              sizes="(max-width: 1024px) 200px, 280px"
            />
          </div>

          <div className="min-w-0 lg:col-start-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              {stylist.yearsExperience}
            </p>
            <h1 className="mt-1 font-serif text-3xl font-medium text-text sm:mt-2 sm:text-5xl">
              I&apos;m {stylist.preferredName ?? stylist.name.split(" ")[0]}
            </h1>
            <p className="mt-1 text-base text-muted sm:text-lg">{stylist.title}</p>
          </div>

          <div className="lg:col-start-2 lg:hidden">
            <JenniferBookingCard stylist={stylist} bookingHref={bookingHref} />
            <StylistContactLinks stylist={stylist} />
          </div>

          <div className="min-w-0 space-y-4 leading-relaxed text-muted lg:col-start-2">
            <p>{stylist.bio}</p>
            {stylist.bioContinued && <p>{stylist.bioContinued}</p>}
            <p className="font-medium text-text">I know how sacred a hair appointment can be.</p>
            {stylist.mission && (
              <p className="border-l-4 border-accent-soft pl-4 font-medium italic text-text">
                {stylist.mission}
              </p>
            )}
            {stylist.beliefs && <p>{stylist.beliefs}</p>}
          </div>

          <div className="hidden lg:col-start-2 lg:block">
            <JenniferBookingCard stylist={stylist} bookingHref={bookingHref} />
            <StylistContactLinks stylist={stylist} />
          </div>
        </div>
      </div>
    </section>
  );
}
