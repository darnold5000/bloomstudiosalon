import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceMenuGrid from "@/components/ServiceMenuGrid";
import CTASection from "@/components/CTASection";
import { servicesIntro } from "@/data/services";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Hair Services & Pricing",
  description:
    "View Willow & Mane's service menu including color, haircuts, styling, treatments, lash and brow services, and special occasion styling.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services & Pricing"
        description={`${servicesIntro} Expand a category to view pricing — quotes are available upon request.`}
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceMenuGrid />

          <div className="mx-auto mt-10 max-w-3xl space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
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
