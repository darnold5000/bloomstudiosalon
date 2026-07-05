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
      className="group flex flex-col rounded-2xl border border-border bg-accent-soft/35 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent-soft/55 hover:shadow-md"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-accent shadow-sm transition group-hover:bg-accent group-hover:text-white">
        <ServiceIcon name={icon} />
      </span>
      <h3 className="mt-5 font-serif text-xl font-medium text-text">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      <span className="mt-4 text-sm font-semibold text-accent transition group-hover:underline">
        {priceNote}
      </span>
    </Link>
  );
}
