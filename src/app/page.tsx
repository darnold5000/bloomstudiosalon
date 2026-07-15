import Hero from "@/components/Hero";
import ServiceCategoryGrid from "@/components/ServiceCategoryGrid";
import CTASection from "@/components/CTASection";
import StylistCard from "@/components/StylistCard";
import Link from "next/link";
import ContentImage from "@/components/ContentImage";
import { siteInfo, studioAmenities, testimonials } from "@/data/site";
import { stylists } from "@/data/stylists";

export default function HomePage() {
  return (
    <>
      <Hero
        headline={
          <>
            Modern hair,
            <br />
            personalized for you.
          </>
        }
        subheadline="Luxury hair color, cuts, treatments, and bridal styling in a boutique four-chair salon."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">Our Promise</h2>
          <div className="mt-8 space-y-2 font-serif text-2xl italic text-accent sm:text-3xl">
            {siteInfo.taglineLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            From the moment you enter Willow & Mane, we want you to feel welcomed and at home.
            Your thorough consultation, personalized hair experience, and future bookings will all be
            seamlessly customized as a perfect fit for you.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">Services</h2>
            <p className="mt-4 text-lg text-muted">
              Thoughtful color, cuts, treatments, and special occasion styling — tailored to you.
            </p>
          </div>
          <div className="mt-12">
            <ServiceCategoryGrid />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-accent transition hover:underline"
            >
              View full service menu →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ContentImage
            src="/images/hero/salon-chairs.jpg"
            alt="Stylist consultation at Willow & Mane"
          />
          <div>
            <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">New to Willow & Mane?</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Welcome! Willow & Mane is staffed by experts who are at the top of their game. You can choose
              your stylist based on industry experience, giving you a choice of prices, but the same
              luxury guest experience.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Our in-depth consultation process ensures the best outcome from start to finish. All
              form submissions will be carefully examined to determine who would be the best fit
              for you.
            </p>
            <Link
              href="/new-guest"
              className="mt-8 inline-block rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent/90"
            >
              Start as a New Guest
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">The Studio Experience</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Willow & Mane is an intimate, four-chair luxury salon. Though we may be small, we
              leave a big impact when it comes to attention to detail. At the end of the day, we not
              only want to deliver good hair — we want you to feel as though you&apos;re a guest in
              our home.
            </p>
            <ul className="mt-6 space-y-3">
              {studioAmenities.map((amenity) => (
                <li key={amenity} className="flex items-center gap-3 text-muted">
                  <span className="flex h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {amenity}
                </li>
              ))}
            </ul>
            <Link
              href="/studio"
              className="mt-8 inline-block text-sm font-semibold text-accent transition hover:underline"
            >
              Explore the studio →
            </Link>
          </div>
          <ContentImage
            className="order-1 lg:order-2"
            src="/images/studio/studio-1.jpg"
            alt="Willow & Mane interior with amenities"
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">Meet Our Stylists</h2>
            <p className="mt-4 text-lg text-muted">
              Choose your stylist based on experience, specialty, and the look you want to achieve.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
            {stylists.map((stylist) => (
              <StylistCard key={stylist.slug} stylist={stylist} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent-soft/30 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">Guest Love</h2>
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.author} className="mt-8">
              <p className="text-lg italic leading-relaxed text-muted">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-4 text-sm font-semibold text-text">— {testimonial.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
