"use client";

import { useEffect } from "react";
import ServiceIconCard from "@/components/ServiceIconCard";
import ServicePricingCard from "@/components/ServicePricingCard";
import ServiceInfoCard from "@/components/ServiceInfoCard";
import {
  getServicePreviewHref,
  serviceCategories,
  serviceCategoryPreviews,
} from "@/data/services";

const categoriesById = Object.fromEntries(serviceCategories.map((c) => [c.id, c]));

export default function ServiceMenuGrid() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const target = document.getElementById(hash);
    if (target instanceof HTMLDetailsElement) {
      target.open = true;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {serviceCategoryPreviews.map((preview) => {
        if (preview.categoryId) {
          const category = categoriesById[preview.categoryId];
          if (!category) return null;

          return (
            <ServicePricingCard
              key={preview.categoryId}
              categoryId={preview.categoryId}
              title={preview.title}
              description={preview.description}
              priceNote={preview.priceNote}
              icon={preview.icon}
              services={category.services}
            />
          );
        }

        if (preview.infoId && preview.infoContent) {
          return (
            <ServiceInfoCard
              key={preview.infoId}
              infoId={preview.infoId}
              title={preview.title}
              description={preview.description}
              priceNote={preview.priceNote}
              icon={preview.icon}
              content={preview.infoContent}
            />
          );
        }

        return (
          <ServiceIconCard
            key={preview.title}
            title={preview.title}
            description={preview.description}
            priceNote={preview.priceNote}
            icon={preview.icon}
            href={getServicePreviewHref(preview)}
          />
        );
      })}
    </div>
  );
}
