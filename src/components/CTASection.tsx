import Link from "next/link";
import { siteInfo } from "@/data/site";

type CTASectionProps = {
  title?: string;
  description?: string;
  showNewGuest?: boolean;
  showLashForm?: boolean;
};

export default function CTASection({
  title = "Ready for your next appointment?",
  description = "Book online or start with a consultation if you're unsure what service is right for you.",
  showNewGuest = true,
  showLashForm = false,
}: CTASectionProps) {
  return (
    <section className="bg-accent-soft/40 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-serif text-3xl font-medium text-text sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={siteInfo.links.bookNow}
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent/90"
          >
            Book Online
          </Link>
          {showNewGuest && (
            <Link
              href="/new-guest"
              className="rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
            >
              New Guest Form
            </Link>
          )}
          {showLashForm && (
            <Link
              href={siteInfo.links.lashForm}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
            >
              Lash Form
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
