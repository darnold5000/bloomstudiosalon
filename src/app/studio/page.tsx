import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import { studioAmenities } from "@/data/site";

export const metadata: Metadata = {
  title: "The Studio",
  description:
    "Learn about Bloom Studio Salon — a luxury four-chair boutique salon in Avon, Indiana, opened in August 2018.",
};

const galleryImages = [
  { src: "/images/studio/studio-1.jpg", alt: "Bloom Studio Salon interior" },
  { src: "/images/studio/studio-2.jpg", alt: "Bloom Studio Salon styling area" },
  { src: "/images/hero/salon-interior.jpg", alt: "Bloom Studio Salon welcome area" },
  { src: "/images/hero/salon-chairs.jpg", alt: "Bloom Studio Salon chairs" },
  { src: "/images/hero/salon-lifestyle.jpg", alt: "Hair styling at Bloom Studio Salon" },
  { src: "/images/gallery/gallery-1.jpg", alt: "Bloom Studio Salon guest experience" },
];

export default function StudioPage() {
  return (
    <>
      <PageHeader
        title="The Studio"
        description="An intimate, four-chair luxury salon in Avon, Indiana — where every detail is designed with you in mind."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-medium text-text">About Bloom</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              In August of 2018, Jennifer opened the doors to Bloom Studio Salon in Avon, Indiana —
              located next to locally owned businesses including a boutique across the street, Moody
              Meats, a yoga studio, and a massage therapist studio.
            </p>
            <p>
              Where did the name Bloom Studio Salon come from? Jennifer wanted a name that was simple
              but inspiring. Bloom one day just came to her, and she loved it. The meaning behind
              Bloom is &ldquo;Inspire Be-you-ty. Create Confidence. Bloom.&rdquo; Like many stylists,
              she loves to make clients feel great while they are with us.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-medium text-text">The Guest Experience</h2>
          <p className="mt-6 leading-relaxed text-muted">
            Bloom Studio Salon is an intimate, four-chair luxury salon. Though we may be small, we
            leave a big impact when it comes to attention to detail. From our snack bar well stocked
            with healthy choices to our customized coffee bar and phone charging station, we have
            thought of everything our guest might need.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {studioAmenities.map((amenity) => (
              <li
                key={amenity}
                className="rounded-xl border border-border bg-background px-4 py-3 text-muted"
              >
                {amenity}
              </li>
            ))}
          </ul>
          <p className="mt-8 leading-relaxed text-muted">
            At the end of the day, we not only want to deliver good hair — we want to be sure you feel
            as though you&apos;re a guest in our home.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-medium text-text">Product Philosophy</h2>
          <p className="mt-6 leading-relaxed text-muted">
            We value our clients as well as our planet. From behind the chair, right to our retail
            shelves, we carry a range of vegan, gluten-free shampoo, conditioners, treatments, and
            styling products. We strive to find products made from renewable and sustainable resources
            whenever possible, as well as naturally derived ingredients.
          </p>
        </div>
      </section>

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-medium text-text">Studio Gallery</h2>
          <div className="mt-10">
            <Gallery images={galleryImages} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
