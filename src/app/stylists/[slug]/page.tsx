import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendlyEmbed } from "@/components/schedule/CalendlyEmbed";
import CTASection from "@/components/CTASection";
import { getCalendlyUrl, usesCalendly } from "@/lib/calendly";
import { getStylistBySlug, stylists } from "@/data/stylists";
import { siteInfo } from "@/data/site";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return stylists.map((stylist) => ({ slug: stylist.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const stylist = getStylistBySlug(slug);
  if (!stylist) return { title: "Stylist Not Found" };

  return {
    title: stylist.name,
    description: `Book an appointment with ${stylist.name}, ${stylist.title} at Bloom Studio Salon in Avon, Indiana.`,
  };
}

export default async function StylistPage({ params }: Props) {
  const { slug } = await params;
  const stylist = getStylistBySlug(slug);

  if (!stylist) notFound();

  const hasCalendly = usesCalendly(slug);
  const calendlyUrl = getCalendlyUrl(slug);

  const bookingHref = hasCalendly
    ? "#book"
    : stylist.bookingUrl ||
      (stylist.email ? `mailto:${stylist.email}?subject=Appointment%20Request` : undefined) ||
      stylist.phoneHref ||
      siteInfo.links.bookOnline;

  const bookingLabel = hasCalendly
    ? `Book with ${stylist.name.split(" ")[0]}`
    : stylist.bookingLabel || "Book Appointment";

  return (
    <>
      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[320px_1fr] lg:px-8">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-background shadow-md sm:aspect-[3/4] lg:mx-0">
            <Image
              src={stylist.image}
              alt={stylist.name}
              fill
              priority
              className="object-contain object-top sm:object-cover sm:object-top"
              sizes="(max-width: 1024px) 320px, 320px"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              {stylist.yearsExperience}
            </p>
            <h1 className="mt-2 font-serif text-4xl font-medium text-text sm:text-5xl">
              {stylist.name}
            </h1>
            <p className="mt-2 text-lg text-muted">{stylist.title}</p>

            <div className="mt-8 space-y-4 leading-relaxed text-muted">
              <p>{stylist.bio}</p>
              {stylist.mission && (
                <p className="border-l-4 border-accent-soft pl-4 font-medium italic text-text">
                  {stylist.mission}
                </p>
              )}
            </div>

            <div className="mt-8">
              <h2 className="font-serif text-xl font-medium text-text">Specialties</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {stylist.specialties.map((specialty) => (
                  <li
                    key={specialty}
                    className="rounded-full bg-accent-soft/50 px-4 py-1.5 text-sm text-text"
                  >
                    {specialty}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="font-serif text-xl font-medium text-text">Services</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {stylist.services.map((service) => (
                  <li
                    key={service}
                    className="rounded-full border border-border px-4 py-1.5 text-sm text-muted"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {hasCalendly ? (
                <a
                  href="#book"
                  className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent/90"
                >
                  {bookingLabel}
                </a>
              ) : (
                <Link
                  href={bookingHref!}
                  target={stylist.bookingUrl ? "_blank" : undefined}
                  rel={stylist.bookingUrl ? "noopener noreferrer" : undefined}
                  className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent/90"
                >
                  {bookingLabel}
                </Link>
              )}
              {stylist.instagram && (
                <Link
                  href={stylist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
                >
                  Instagram
                </Link>
              )}
              {stylist.phone && (
                <a
                  href={stylist.phoneHref}
                  className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
                >
                  {stylist.phone}
                </a>
              )}
              {stylist.email && (
                <a
                  href={`mailto:${stylist.email}`}
                  className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
                >
                  Email
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {hasCalendly && (
        <section id="book" className="scroll-mt-28 border-t border-border bg-background py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="mb-8 text-center">
              <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">
                Book with {stylist.name.split(" ")[0]}
              </h2>
              <p className="mt-3 text-muted">
                Choose a time that works for you. We look forward to seeing you at Bloom Studio Salon.
              </p>
            </div>

            <CalendlyEmbed url={calendlyUrl} />

            {!calendlyUrl && (
              <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
                {stylist.email && (
                  <a
                    href={`mailto:${stylist.email}?subject=Appointment%20Request`}
                    className="rounded-full bg-accent px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-accent/90"
                  >
                    Email {stylist.name.split(" ")[0]}
                  </a>
                )}
                {stylist.phone && (
                  <a
                    href={stylist.phoneHref}
                    className="rounded-full border border-border bg-surface px-7 py-3.5 text-center text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
                  >
                    Call {stylist.phone}
                  </a>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {!hasCalendly && (
        <CTASection
          title={`Book with ${stylist.name.split(" ")[0]}`}
          description="Ready for beautiful hair and a personalized guest experience? Book your appointment today."
          showNewGuest={false}
        />
      )}
    </>
  );
}
