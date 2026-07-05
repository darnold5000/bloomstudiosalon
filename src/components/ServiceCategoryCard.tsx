import type { ServiceCategory } from "@/data/services";

export default function ServiceCategoryCard({ category }: { category: ServiceCategory }) {
  return (
    <article
      id={category.id}
      className="scroll-mt-28 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8"
    >
      <h3 className="font-serif text-2xl font-medium text-text">{category.title}</h3>
      <ul className="mt-6 divide-y divide-border">
        {category.services.map((service) => (
          <li
            key={service.name}
            className="flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0"
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
    </article>
  );
}
