import type { ServiceIconName } from "@/components/ServiceIcons";

export type Service = {
  name: string;
  price: string;
  note?: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "color",
    title: "Color",
    services: [
      { name: "Partial Foil & Root Touch Up", price: "65+" },
      { name: "Root Touch Up", price: "60+" },
      { name: "Partial Highlight", price: "60+" },
      { name: "Mini Highlight", price: "30+" },
      { name: "Full Highlight", price: "70+" },
      { name: "Full Color", price: "65+" },
      { name: "Teasylights / Balayage", price: "75+" },
      { name: "Vivids", price: "70+" },
      {
        name: "Corrective Color",
        price: "Consultation required",
      },
    ],
  },
  {
    id: "treatments",
    title: "Treatments",
    services: [
      { name: "Brazilian Blowout", price: "250+" },
      { name: "Keratin Smoothing Treatment", price: "75+" },
      { name: "Deep Conditioning", price: "25+" },
      { name: "Lanza Emergency Treatment", price: "35+" },
      { name: "Malibu", price: "15+" },
      { name: "Hard Water Treatment", price: "15+" },
    ],
  },
  {
    id: "haircut-style",
    title: "Haircut & Style",
    services: [
      { name: "Women's Haircut", price: "30+" },
      { name: "Men's Haircut", price: "20+" },
      {
        name: "Prince and Princess Haircut",
        price: "12+",
        note: "Ages 2–8",
      },
      {
        name: "Kings and Queens Haircut",
        price: "15+",
        note: "Ages 9–12",
      },
      { name: "Tweens", price: "20+", note: "Ages 12–16" },
      { name: "Bang Trim", price: "5" },
    ],
  },
  {
    id: "styling",
    title: "Styling",
    services: [
      { name: "Blowout Style", price: "30+" },
      { name: "Thermal Style", price: "20+" },
      { name: "Updo / Formal Style", price: "70+" },
      { name: "Makeup Application", price: "50+" },
    ],
  },
  {
    id: "waxing-lash-brow",
    title: "Waxing, Lash & Brow",
    services: [
      { name: "Brows", price: "10+" },
      { name: "Lip", price: "5+" },
      { name: "Chin", price: "5+" },
      { name: "Lash Lift", price: "75" },
      { name: "Lash Tint", price: "25" },
    ],
  },
];

export const servicesIntro =
  "Every appointment at Bloom is personalized to your hair, your goals, and your stylist's recommendations. Pricing varies by stylist, hair length, density, and time required. If you are unsure what to book, we recommend starting with a consultation.";

export type ServiceCategoryPreview = {
  title: string;
  description: string;
  priceNote: string;
  icon: ServiceIconName;
  categoryId?: string;
  href?: string;
};

export function getServicePreviewHref(preview: ServiceCategoryPreview): string {
  if (preview.href) return preview.href;
  if (preview.categoryId) return `/services#${preview.categoryId}`;
  return "/services";
}

export const serviceCategoryPreviews: ServiceCategoryPreview[] = [
  {
    title: "Color",
    description: "Highlights, balayage, root touch-ups, and vivid color.",
    priceNote: "View pricing",
    icon: "color",
    categoryId: "color",
  },
  {
    title: "Haircut & Style",
    description: "Personalized cuts and styling for every age and occasion.",
    priceNote: "View pricing",
    icon: "scissors",
    categoryId: "haircut-style",
  },
  {
    title: "Treatments",
    description: "Brazilian Blowout, keratin, deep conditioning, and more.",
    priceNote: "View pricing",
    icon: "treatment",
    categoryId: "treatments",
  },
  {
    title: "Styling",
    description: "Blowouts, formal updos, and makeup for your next event.",
    priceNote: "View pricing",
    icon: "bridal",
    categoryId: "styling",
  },
  {
    title: "Lash & Brow",
    description: "Lash lifts, tints, waxing, and brow shaping.",
    priceNote: "View pricing",
    icon: "lash",
    categoryId: "waxing-lash-brow",
  },
  {
    title: "Bridal",
    description: "Wedding hair, makeup, and special event styling.",
    priceNote: "View bridal services",
    icon: "bridal",
    href: "/bridal",
  },
  {
    title: "Extensions",
    description: "Hand-tied and beaded weft extensions by expert stylists.",
    priceNote: "View stylists",
    icon: "extensions",
    href: "/stylists",
  },
];

export const newGuestConsultationPreview = {
  title: "New Guest Consultation",
  description:
    "Not sure where to start? We'll match you with the right stylist and service.",
  priceNote: "Start here",
  href: "/new-guest",
};
