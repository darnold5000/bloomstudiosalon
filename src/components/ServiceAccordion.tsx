import type { ServiceCategory } from "@/data/services";
import { ServiceIcon, type ServiceIconName } from "@/components/ServiceIcons";

const categoryIcons: Record<string, ServiceIconName> = {
  color: "color",
  treatments: "treatment",
  "haircut-style": "scissors",
  styling: "bridal",
  "waxing-lash-brow": "lash",
};

export default function ServiceAccordion({ categories }: { categories: ServiceCategory[] }) {
  return (
    <div className="space-y-3">
      {categories.map((category) => {
        const icon = categoryIcons[category.id];

        return (
        <details
          key={category.id}
          id={category.id}
          className="group scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm open:shadow-md"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 transition hover:bg-accent-soft/20 [&::-webkit-details-marker]:hidden">
            <div className="flex min-w-0 items-center gap-4">
              {icon && (
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft/50 text-accent">
                  <ServiceIcon name={icon} className="h-6 w-6" />
                </span>
              )}
              <h3 className="font-serif text-xl font-medium text-text">{category.title}</h3>
            </div>
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted transition group-open:rotate-180 group-open:border-accent group-open:text-accent"
              aria-hidden="true"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <div className="border-t border-border px-6 pb-6">
            <ul className="divide-y divide-border">
              {category.services.map((service) => (
                <li
                  key={service.name}
                  className="flex items-start justify-between gap-4 py-4 first:pt-5"
                >
                  <div>
                    <p className="font-medium text-text">{service.name}</p>
                    {service.note && (
                      <p className="mt-0.5 text-sm text-muted">{service.note}</p>
                    )}
                  </div>
                  <p className="shrink-0 font-semibold text-accent">{service.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </details>
        );
      })}
    </div>
  );
}
