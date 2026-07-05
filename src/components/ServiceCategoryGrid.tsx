import ServiceIconCard from "@/components/ServiceIconCard";
import ServiceConsultationBanner from "@/components/ServiceConsultationBanner";
import {
  newGuestConsultationPreview,
  serviceCategoryPreviews,
} from "@/data/services";

export default function ServiceCategoryGrid() {
  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCategoryPreviews.map((category) => (
          <ServiceIconCard key={category.title} {...category} />
        ))}
      </div>
      <ServiceConsultationBanner {...newGuestConsultationPreview} />
    </div>
  );
}
