import Link from "next/link";
import { ServiceIcon, type ServiceIconName } from "@/components/ServiceIcons";

type ServiceIconCardProps = {
  title: string;
  description: string;
  priceNote: string;
  icon: ServiceIconName;
  href: string;
};

export default function ServiceIconCard({
  title,
  description,
  priceNote,
  icon,
  href,
}: ServiceIconCardProps) {
  return (
    <Link
      href={href}
      className="group flex rounded-2xl border border-border bg-accent-soft/35 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft/55 hover:shadow-md sm:p-5"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface text-accent shadow-sm transition group-hover:bg-accent group-hover:text-white">
        <ServiceIcon name={icon} className="h-6 w-6" />
      </span>

      <div className="min-w-0 flex-1 pl-3">
        <h3 className="font-serif text-lg font-medium leading-tight text-text sm:text-xl">{title}</h3>
        <p className="mt-1.5 text-sm leading-snug text-muted">{description}</p>
        <span className="mt-2 inline-block text-xs font-semibold text-accent transition group-hover:underline sm:text-sm">
          {priceNote}
        </span>
      </div>
    </Link>
  );
}
