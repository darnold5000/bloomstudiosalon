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

export const serviceCategoryPreviews = [
  {
    title: "Color",
    description: "Highlights, balayage, root touch-ups, and vivid color.",
    priceNote: "Starting at $30+",
    icon: "color" as const,
    href: "/services#color",
  },
  {
    title: "Haircut & Style",
    description: "Personalized cuts and styling for every age and occasion.",
    priceNote: "Starting at $5",
    icon: "scissors" as const,
    href: "/services#haircut-style",
  },
  {
    title: "Treatments",
    description: "Brazilian Blowout, keratin, deep conditioning, and more.",
    priceNote: "Starting at $15+",
    icon: "treatment" as const,
    href: "/services#treatments",
  },
  {
    title: "Bridal",
    description: "Wedding hair, makeup, and special event styling.",
    priceNote: "View bridal services",
    icon: "bridal" as const,
    href: "/bridal",
  },
  {
    title: "Lash & Brow",
    description: "Lash lifts, tints, waxing, and brow shaping.",
    priceNote: "Starting at $5+",
    icon: "lash" as const,
    href: "/services#waxing-lash-brow",
  },
  {
    title: "Extensions",
    description: "Hand-tied and beaded weft extensions by expert stylists.",
    priceNote: "View stylists",
    icon: "extensions" as const,
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
