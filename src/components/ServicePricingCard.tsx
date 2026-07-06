import type { Service } from "@/data/services";
import { ServiceIcon, type ServiceIconName } from "@/components/ServiceIcons";

type ServicePricingCardProps = {
  categoryId: string;
  title: string;
  description: string;
  priceNote: string;
  icon: ServiceIconName;
  services: Service[];
};

export default function ServicePricingCard({
  categoryId,
  title,
  description,
  priceNote,
  icon,
  services,
}: ServicePricingCardProps) {
  return (
    <details
      id={categoryId}
      className="group scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-accent-soft/35 shadow-sm transition duration-300 open:border-accent/40 open:bg-accent-soft/55 open:shadow-md"
    >
      <summary className="cursor-pointer list-none p-6 transition hover:bg-accent-soft/45 [&::-webkit-details-marker]:hidden">
        <div className="flex items-start justify-between gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface text-accent shadow-sm transition group-open:bg-accent group-open:text-white">
            <ServiceIcon name={icon} />
          </span>
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted transition group-open:rotate-180 group-open:border-accent group-open:text-accent"
            aria-hidden="true"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
        <h3 className="mt-5 font-serif text-xl font-medium text-text">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        <span className="mt-4 inline-block text-sm font-semibold text-accent">{priceNote}</span>
      </summary>

      <div className="border-t border-border/70 bg-surface/90 px-6 pb-5">
        <ul className="divide-y divide-border">
          {services.map((service) => (
            <li
              key={service.name}
              className="flex items-start justify-between gap-4 py-3.5 first:pt-4"
            >
              <div>
                <p className="text-sm font-medium text-text">{service.name}</p>
                {service.note && <p className="mt-0.5 text-xs text-muted">{service.note}</p>}
              </div>
              <p className="shrink-0 text-sm font-semibold text-accent">{service.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
