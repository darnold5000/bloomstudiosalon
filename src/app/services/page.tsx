import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCategoryGrid from "@/components/ServiceCategoryGrid";
import ServiceAccordion from "@/components/ServiceAccordion";
import CTASection from "@/components/CTASection";
import { serviceCategories, servicesIntro } from "@/data/services";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Hair Services & Pricing",
  description:
    "View Bloom Studio Salon's service menu including color, haircuts, styling, treatments, lash and brow services, and special occasion styling.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services & Pricing"
        description={servicesIntro}
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">
              Find Your Service
            </h2>
            <p className="mt-4 text-muted">
              Browse by category, then explore full pricing in the menu below.
            </p>
          </div>
          <div className="mt-10">
            <ServiceCategoryGrid />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">
              Full Service Menu
            </h2>
            <p className="mt-4 text-muted">
              Expand a category to view pricing. Quotes are available upon request.
            </p>
          </div>
          <div className="mt-10">
            <ServiceAccordion categories={serviceCategories} />
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
