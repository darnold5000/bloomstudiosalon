import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Promotions",
  description:
    "Current promotions at Bloom Studio Salon in Avon, Indiana. Leave a review and receive a gift certificate for your next appointment.",
};

export default function PromotionsPage() {
  return (
    <>
      <PageHeader
        title="Promotions"
        description="Check out our current offers and ways to save on your next visit."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <article className="rounded-2xl border border-border bg-surface p-6 text-center shadow-sm sm:p-10">
            <h2 className="font-serif text-2xl font-medium text-text">Leave a Review</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Leave us a review on Google or Yelp and receive a $5 gift certificate to use at your
              next appointment.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={siteInfo.social.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent/90"
              >
                Review on Yelp
              </Link>
              <Link
                href={siteInfo.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
              >
                Find Us on Google
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
