import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ServiceAccordion from "@/components/ServiceAccordion";
import ServiceConsultationBanner from "@/components/ServiceConsultationBanner";
import CTASection from "@/components/CTASection";
import {
  newGuestConsultationPreview,
  serviceCategories,
  servicesIntro,
} from "@/data/services";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Hair Services & Pricing",
  description:
    "View Bloom Studio Salon's service menu including color, haircuts, styling, treatments, lash and brow services, and special occasion styling.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services & Pricing" description={servicesIntro} />

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">
              Services & Pricing
            </h2>
            <p className="mt-4 text-muted">
              Expand a category to view services and pricing. Quotes are available upon request.
            </p>
          </div>

          <div className="mt-10">
            <ServiceAccordion categories={serviceCategories} />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/bridal"
              className="rounded-2xl border border-border bg-accent-soft/35 p-5 transition hover:border-accent/40 hover:bg-accent-soft/55"
            >
              <p className="font-serif text-lg font-medium text-text">Bridal & Events</p>
              <p className="mt-1 text-sm text-muted">
                Wedding hair, makeup, and special occasion styling.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-accent">
                View bridal services →
              </span>
            </Link>
            <Link
              href="/stylists"
              className="rounded-2xl border border-border bg-accent-soft/35 p-5 transition hover:border-accent/40 hover:bg-accent-soft/55"
            >
              <p className="font-serif text-lg font-medium text-text">Hair Extensions</p>
              <p className="mt-1 text-sm text-muted">
                Hand-tied and beaded weft extensions by expert stylists.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-accent">
                Meet our stylists →
              </span>
            </Link>
          </div>

          <div className="mt-5">
            <ServiceConsultationBanner {...newGuestConsultationPreview} />
          </div>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-border bg-accent-soft/30 p-6 sm:p-8">
              <h2 className="font-serif text-xl font-medium text-text">Birthday Party Packages</h2>
              <p className="mt-3 leading-relaxed text-muted">{siteInfo.birthdayParty}</p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
              <h2 className="font-serif text-xl font-medium text-text">Cancellation Policy</h2>
              <p className="mt-3 leading-relaxed text-muted">{siteInfo.cancellationPolicy}</p>
            </div>

            <p className="text-center text-sm text-muted">
              Not all services are listed. Price quotes are available upon request.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure what to book?"
        description="Start with a consultation and we'll help you find the right service and stylist."
        showLashForm
      />
    </>
  );
}
