import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { bridalNotes, bridalServices } from "@/data/bridal";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Bridal & Special Events",
  description:
    "Wedding hair and makeup services at Willow & Mane in Avon, Indiana. In-salon bridal pricing, bridal party styling, and special event packages.",
};

function ServiceList({
  title,
  items,
}: {
  title: string;
  items: { name: string; price: string; note?: string }[];
}) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
      <h2 className="font-serif text-2xl font-medium text-text">{title}</h2>
      <ul className="mt-6 divide-y divide-border">
        {items.map((item) => (
          <li key={item.name} className="flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0">
            <div>
              <p className="font-medium text-text">{item.name}</p>
              {item.note && <p className="mt-0.5 text-sm text-muted">{item.note}</p>}
            </div>
            <p className="shrink-0 font-semibold text-accent">{item.price}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function BridalPage() {
  return (
    <>
      <PageHeader
        title="Weddings & Special Events"
        description="Beautiful bridal hair and makeup in a relaxed, luxury salon setting — with a trial included for our brides."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6">
          <ServiceList title="In-Salon Bridal Pricing" items={bridalServices.inSalon} />
          <ServiceList title="Bridal Party Hair & Makeup" items={bridalServices.party} />
          <ServiceList title="Special Events & Photoshoots" items={bridalServices.specialEvents} />
          <ServiceList title="Extras" items={bridalServices.extras} />

          <div className="rounded-2xl border border-border bg-accent-soft/30 p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-medium text-text">Book Your Wedding</h2>
            <ul className="mt-4 space-y-2 text-muted">
              {bridalNotes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {note}
                </li>
              ))}
            </ul>
            <Link
              href={siteInfo.links.bridalForm}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent/90"
            >
              Book Your Wedding
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Planning a special event?"
        description="Contact us to discuss availability, travel, and the perfect look for your big day."
        showNewGuest={false}
      />
    </>
  );
}
