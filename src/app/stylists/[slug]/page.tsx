import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendlyEmbed } from "@/components/schedule/CalendlyEmbed";
import { JenniferProfile, StylistContactLinks } from "@/components/JenniferProfile";
import { getCalendlyUrl, usesCalendly } from "@/lib/calendly";
import { getStylistBySlug, stylists, type Stylist } from "@/data/stylists";
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
    description: `Book an appointment with ${stylist.name}, ${stylist.title} at Willow & Mane in Avon, Indiana.`,
  };
}

function CalendlyStylistProfile({
  stylist,
  calendlyUrl,
}: {
  stylist: Stylist;
  calendlyUrl: string;
}) {
  const firstName = stylist.name.split(" ")[0];

  return (
    <section className="bg-surface py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[280px_1fr] lg:gap-10">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl bg-background shadow-md sm:max-w-sm lg:mx-0 lg:aspect-[3/4]">
            <Image
              src={stylist.image}
              alt={stylist.name}
              fill
              priority
              className="object-contain object-top sm:object-cover sm:object-top"
              sizes="(max-width: 1024px) 280px, 280px"
            />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              {stylist.yearsExperience}
            </p>
            <h1 className="mt-2 font-serif text-4xl font-medium text-text sm:text-5xl">
              {stylist.name}
            </h1>
            <p className="mt-2 text-lg text-muted">{stylist.title}</p>

            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>{stylist.bio}</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl sm:mt-10">
          <div className="mb-5 text-center sm:mb-6">
            <h2 className="font-serif text-2xl font-medium text-text sm:text-3xl">
              Schedule with {firstName}
            </h2>
            <p className="mt-2 text-sm text-muted sm:text-base">
              Pick a time that works for you.
            </p>
          </div>

          <CalendlyEmbed key={stylist.slug} url={calendlyUrl} />

          {calendlyUrl ? (
            <StylistContactLinks stylist={stylist} />
          ) : (
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
              {stylist.email && (
                <a
                  href={`mailto:${stylist.email}?subject=Appointment%20Request`}
                  className="rounded-full bg-accent px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-accent/90"
                >
                  Email {firstName}
                </a>
              )}
              {stylist.phone && (
                <a
                  href={stylist.phoneHref}
                  className="rounded-full border border-border bg-background px-7 py-3.5 text-center text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
                >
                  Call {stylist.phone}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default async function StylistPage({ params }: Props) {
  const { slug } = await params;
  const stylist = getStylistBySlug(slug);

  if (!stylist) notFound();

  const hasCalendly = usesCalendly(slug);
  const calendlyUrl = getCalendlyUrl(slug);

  if (hasCalendly) {
    return <CalendlyStylistProfile stylist={stylist} calendlyUrl={calendlyUrl} />;
  }

  return <JenniferProfile stylist={stylist} />;
}
