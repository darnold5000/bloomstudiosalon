import ServiceIconCard from "@/components/ServiceIconCard";
import { getServicePreviewHref, serviceCategoryPreviews } from "@/data/services";

export default function ServiceCategoryGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {serviceCategoryPreviews.map((category) => (
        <ServiceIconCard
          key={category.title}
          title={category.title}
          description={category.description}
          priceNote={category.priceNote}
          icon={category.icon}
          href={getServicePreviewHref(category)}
        />
      ))}
    </div>
  );
}
