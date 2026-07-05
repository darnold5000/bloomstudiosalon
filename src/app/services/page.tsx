import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCategoryCard from "@/components/ServiceCategoryCard";
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
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6">
          {serviceCategories.map((category) => (
            <ServiceCategoryCard key={category.id} category={category} />
          ))}

          <div className="rounded-2xl border border-border bg-accent-soft/30 p-6 sm:p-8">
            <h2 className="font-serif text-xl font-medium text-text">Birthday Party Packages</h2>
            <p className="mt-3 leading-relaxed text-muted">{siteInfo.birthdayParty}</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="font-serif text-xl font-medium text-text">Cancellation Policy</h2>
            <p className="mt-3 leading-relaxed text-muted">{siteInfo.cancellationPolicy}</p>
          </div>

          <p className="text-center text-sm text-muted">
            Not all services are listed. Price quotes are available upon request.
          </p>
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
