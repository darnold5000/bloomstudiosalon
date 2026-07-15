import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StylistCard from "@/components/StylistCard";
import CTASection from "@/components/CTASection";
import { stylists } from "@/data/stylists";

export const metadata: Metadata = {
  title: "Our Stylists",
  description:
    "Meet the stylists at Willow & Mane in Avon, Indiana. Choose your stylist based on experience, specialty, and the look you want to achieve.",
};

export default function StylistsPage() {
  return (
    <>
      <PageHeader
        title="Our Stylists"
        description="Willow & Mane is staffed by experts at the top of their game. Choose your stylist based on industry experience — same luxury guest experience, personalized to you."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {stylists.map((stylist) => (
            <StylistCard key={stylist.slug} stylist={stylist} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
