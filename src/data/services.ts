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
