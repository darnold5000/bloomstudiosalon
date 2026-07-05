import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcons";

type ServiceConsultationBannerProps = {
  title: string;
  description: string;
  priceNote: string;
  href: string;
};

export default function ServiceConsultationBanner({
  title,
  description,
  priceNote,
  href,
}: ServiceConsultationBannerProps) {
  return (
    <Link
      href={href}
      className="group mt-5 flex flex-col items-start gap-5 rounded-2xl border border-border bg-accent-soft/35 p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft/55 hover:shadow-md sm:flex-row sm:items-center sm:gap-6 sm:p-8"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface text-accent shadow-sm transition group-hover:bg-accent group-hover:text-white">
        <ServiceIcon name="consultation" />
      </span>
      <div className="flex-1">
        <h3 className="font-serif text-xl font-medium text-text sm:text-2xl">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{description}</p>
      </div>
      <span className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-accent/90">
        {priceNote}
      </span>
    </Link>
  );
}
