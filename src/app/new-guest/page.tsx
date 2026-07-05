import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { newGuestSteps, siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "New Guest",
  description:
    "Welcome to Bloom Studio Salon. Learn what to expect as a new guest and complete your new guest profile before your first visit.",
};

export default function NewGuestPage() {
  return (
    <>
      <PageHeader
        title="Welcome, New Guest"
        description="We're so glad you're here. Here's what to expect at your first visit to Bloom Studio Salon."
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-medium text-text">Happy You Are Here!</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                We can&apos;t wait to meet you! Please take a moment to complete the New Guest Profile
                so we can start getting to know you before your appointment.
              </p>
              <p>
                The experience starts when you use the online booking system. As a new guest booking
                online, you can choose from New Client Cut &amp; Color or New Client Haircut Only.
                You&apos;ll receive a welcome email, plus confirmation and appointment reminders via
                email and text message.
              </p>
              <p>
                When you arrive, we will consult together to determine what style will be best for
                your lifestyle and the health of your hair. We will plan not only your first visit but
                also discuss a long-term plan to ensure all of your hair goals are met.
              </p>
              <p>
                If you&apos;re here for color, a formula will be custom blended and recorded so that
                we have a history of what we do together. We&apos;ll share styling tips and tricks,
                recommend at-home care, and set you up with your next appointment before you leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-3xl font-medium text-text">What to Expect</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {newGuestSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Step {index + 1}
                </span>
                <h3 className="mt-2 font-serif text-xl font-medium text-text">{step.title}</h3>
                <p className="mt-3 text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-2xl font-medium text-text">Complete Your New Guest Profile</h2>
          <p className="mt-4 text-muted">
            Fill out the form below so we can match you with the right stylist and prepare for your
            first visit.
          </p>
          <Link
            href={siteInfo.links.newGuestForm}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-accent/90"
          >
            New Guest Form
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-accent-soft/30 py-10">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm leading-relaxed text-muted">
            Pricing varies by stylist, hair length, density, and time required. Quotes are available
            upon request. If you are unsure what to book, start with a consultation.
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to book your first visit?"
        description="Choose your stylist, complete your new guest profile, and we'll take care of the rest."
      />
    </>
  );
}
